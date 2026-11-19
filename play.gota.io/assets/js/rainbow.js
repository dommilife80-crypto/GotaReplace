(() => {
  'use strict';
  const KEY = 'gota.rainbow.v1';
  const log = (...a) => console.log('%c[rainbow]', 'color:#e91e63;font-weight:bold', ...a);
  const warn = (...a) => console.warn('[rainbow]', ...a);
  const readPrefs = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null') || {}; } catch { return {}; } };
  const prefs = readPrefs();
  const S = {
    P: null,
    enabled: !!prefs.enabled,
    mode: prefs.mode === 'all' || prefs.mode === 'pick' ? prefs.mode : 'auto',
    filter: null,
    filters: null,
    target: null,
    root: null,
    renderer: null,
    lastScan: [],
    lastScanAt: 0,
    tinted: new Map(),
    tintedFor: null,
    hooked: false,
    angle: 0,
    speed: 0.9,
    hudEl: null,
  };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ enabled: S.enabled, mode: S.mode })); } catch {} };

  function hslTint(h) {
    const s = 1, l = 0.55;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h * 12) % 12;
      return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
    };
    return (f(0) << 16) | (f(8) << 8) | f(4);
  }

  function useFilters(o) {
    if (!o || o.destroyed) return;
    try { if (o.filters !== S.filters) o.filters = S.filters; } catch {}
  }

  function clearFilters(o) {
    if (!o) return;
    try { if (o.filters === S.filters) o.filters = null; } catch {}
  }

  function restoreTints() {
    for (const [o, tint] of S.tinted) { try { o.tint = tint; } catch {} }
    S.tinted.clear();
    S.tintedFor = null;
  }

  function tintTree(root, angle) {
    const color = hslTint(angle / (Math.PI * 2));
    const stack = [root];
    let n = 0;
    while (stack.length && n < 300) {
      const o = stack.pop();
      n++;
      if (!o || o.destroyed) continue;
      try {
        if ('tint' in o) {
          if (!S.tinted.has(o)) S.tinted.set(o, o.tint);
          o.tint = color;
        }
        const kids = o.children;
        if (kids) for (let i = 0; i < kids.length; i++) stack.push(kids[i]);
      } catch {}
    }
  }

  function walk(o, depth, cx, cy, out, budget) {
    if (!o || depth > 12 || budget.n <= 0) return;
    budget.n--;
    try {
      if (o.visible === false || o.renderable === false) return;
      const kids = o.children;
      const n = kids ? kids.length : 0;
      if (n <= 16) {
        try {
          const b = o.getBounds();
          const w = b.width, h = b.height;
          if (w >= 10 && h >= 10) {
            const x = b.x + w / 2, y = b.y + h / 2;
            const d = Math.hypot(x - cx, y - cy);
            const area = w * h;
            out.push({ obj: o, type: (o.constructor && o.constructor.name) || '?', x, y, w, h, d, score: d / (1 + Math.sqrt(area) / 60) });
          }
        } catch {}
      }
      if (n) for (let i = 0; i < n && budget.n > 0; i++) walk(kids[i], depth + 1, cx, cy, out, budget);
    } catch {}
  }

  function scan(verbose, silent) {
    const r = S.renderer;
    if (!r || !S.root) { if (verbose) warn('renderer not captured yet'); return []; }
    let W = 0, H = 0;
    try { W = r.screen ? r.screen.width : r.width; H = r.screen ? r.screen.height : r.height; } catch {}
    if (!W || !H) { try { W = r.canvas.width; H = r.canvas.height; } catch {} }
    if (!W || !H) { if (verbose) warn('screen size unknown'); return []; }
    const out = [];
    walk(S.root, 0, W / 2, H / 2, out, { n: 4000 });
    out.sort((a, b) => a.score - b.score);
    S.lastScan = out;
    S.lastScanAt = performance.now();
    let best = null;
    for (const c of out) {
      if (c.w < W * 0.6 && c.h < H * 0.6) { best = c; break; }
    }
    if (best) S.target = best.obj;
    if (verbose) {
      log('scan', out.length, 'objects; best:', best && best.type, best && Math.round(best.w) + 'x' + Math.round(best.h));
      try {
        console.table(out.slice(0, 30).map((c, i) => ({ i, type: c.type, x: Math.round(c.x), y: Math.round(c.y), w: Math.round(c.w), h: Math.round(c.h), dist: Math.round(c.d) })));
      } catch {}
    } else if (!silent && best) {
      log('target', best.type, Math.round(best.w) + 'x' + Math.round(best.h));
    }
    return out;
  }

  function capture(renderer, args) {
    S.renderer = renderer;
    let c = args[0];
    if (c && c.container) c = c.container;
    if (c && (c.children || c.particleChildren)) S.root = c;
  }

  function tick() {
    if (!S.enabled || !S.filter) return;
    S.angle = (performance.now() * 0.001 * S.speed) % (Math.PI * 2);
    try { S.filter.reset(); S.filter.hue(S.angle); } catch {}
    if (S.mode === 'all') {
      if (S.root) useFilters(S.root);
      return;
    }
    let t = S.target;
    if (!t || t.destroyed || !t.parent) { S.lastScanAt = 0; scan(false, true); t = S.target; }
    else if (S.mode === 'auto' && performance.now() - S.lastScanAt > 1500) { scan(false, true); t = S.target; }
    if (!t) return;
    if (S.tintedFor !== t) { restoreTints(); S.tintedFor = t; }
    useFilters(t);
    tintTree(t, S.angle);
  }

  function clearAll() {
    clearFilters(S.root);
    clearFilters(S.target);
    restoreTints();
  }

  function hook(P) {
    if (S.hooked) return;
    const names = ['AbstractRenderer', 'WebGLRenderer', 'WebGPURenderer', 'CanvasRenderer'];
    for (const n of names) {
      const cls = P[n];
      if (!cls || !cls.prototype) continue;
      const proto = cls.prototype;
      const orig = proto.render;
      if (typeof orig !== 'function' || orig.__rainbowWrapped) continue;
      const wrapped = function (...args) {
        try { capture(this, args); } catch {}
        try { tick(); } catch {}
        try {
          return orig.apply(this, args);
        } catch (err) {
          if (S.enabled) {
            S.enabled = false;
            clearAll();
            updateHud();
            warn('render failed, rainbow disabled:', err);
          }
          throw err;
        }
      };
      wrapped.__rainbowWrapped = true;
      proto.render = wrapped;
    }
    S.hooked = names.some(n => P[n] && P[n].prototype && P[n].prototype.render && P[n].prototype.render.__rainbowWrapped);
    log('renderer hook:', S.hooked);
  }

  function updateHud() {
    if (!S.hudEl) return;
    S.hudEl.textContent = `RAINBOW ${S.enabled ? 'ON' : 'off'} · ${S.mode}\nCtrl+Alt+R toggle · M mode · D scan`;
  }

  function hud() {
    if (S.hudEl || !document.body) return;
    S.hudEl = document.createElement('div');
    S.hudEl.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:2147483647;font:12px/1.4 monospace;color:#fff;background:rgba(0,0,0,.55);padding:4px 8px;border-radius:6px;pointer-events:none;white-space:pre;user-select:none';
    document.body.appendChild(S.hudEl);
    updateHud();
  }

  const api = {
    toggle(v) {
      S.enabled = v === undefined ? !S.enabled : !!v;
      if (!S.enabled) clearAll();
      save(); updateHud(); log('enabled:', S.enabled);
    },
    mode(m) {
      S.mode = m || (S.mode === 'auto' ? 'pick' : S.mode === 'pick' ? 'all' : 'auto');
      clearAll(); S.target = null;
      save(); updateHud(); log('mode:', S.mode);
    },
    scan() { scan(true, false); },
    pick(i) {
      const c = S.lastScan[i];
      if (!c) { warn('no candidate', i); return; }
      clearAll();
      S.mode = 'pick';
      S.target = c.obj;
      S.tintedFor = null;
      save(); updateHud(); log('picked:', i, c.type, Math.round(c.w) + 'x' + Math.round(c.h));
    },
    target() { return S.target; },
    list() { return S.lastScan; },
    hud(v) { if (S.hudEl) S.hudEl.style.display = v === false ? 'none' : ''; },
    state: S,
  };
  window.RainbowSkin = api;

  function onKey(e) {
    if (!(e.ctrlKey && e.altKey)) return;
    if (e.code === 'KeyR') { e.preventDefault(); api.toggle(); }
    else if (e.code === 'KeyM') { e.preventDefault(); api.mode(); }
    else if (e.code === 'KeyD') { e.preventDefault(); api.scan(); }
  }

  let bootTries = 0;
  function boot() {
    const P = window.__PIXI;
    if (!P) {
      if (++bootTries === 75) warn('window.__PIXI not found: bundle patch or redirect did not apply');
      setTimeout(boot, 200);
      return;
    }
    if (!P.ColorMatrixFilter) { warn('ColorMatrixFilter is not available'); return; }
    S.P = P;
    S.filter = new P.ColorMatrixFilter();
    S.filters = [S.filter];
    hook(P);
    hud();
    addEventListener('keydown', onKey, true);
    log('ready. mode:', S.mode, 'enabled:', S.enabled);
  }
  boot();
})();
