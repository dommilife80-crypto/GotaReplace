var t = Object.create;
var e = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var r = Object.getPrototypeOf;
var n = Object.prototype.hasOwnProperty;
var a = (t, e) => () => {
  if (!e) {
    t((e = {
      exports: {}
    }).exports, e, e.exports);
    t = null;
  }
  return e.exports;
};
var o = (t, s) => {
  let i = {};
  for (var r in t) {
    e(i, r, {
      get: t[r],
      enumerable: true
    });
  }
  if (!s) {
    e(i, Symbol.toStringTag, {
      value: "Module"
    });
  }
  return i;
};
var h = (a, o, h) => {
  h = a != null ? t(r(a)) : {};
  return ((t, r, a, o) => {
    if (r && typeof r == "object" || typeof r == "function") {
      var h;
      var u = i(r);
      for (var d = 0, l = u.length; d < l; d++) {
        h = u[d];
        if (!n.call(t, h) && h !== a) {
          e(t, h, {
            get: (t => r[t]).bind(null, h),
            enumerable: !(o = s(r, h)) || o.enumerable
          });
        }
      }
    }
    return t;
  })(!o && a && a.__esModule && n.call(a, "default") ? h : e(h, "default", {
    value: a,
    enumerable: true
  }), a);
};
var u = (t => {
  t.Application = "application";
  t.WebGLPipes = "webgl-pipes";
  t.WebGLPipesAdaptor = "webgl-pipes-adaptor";
  t.WebGLSystem = "webgl-system";
  t.WebGLLoader = "webgl-loader";
  t.WebGPUPipes = "webgpu-pipes";
  t.WebGPUPipesAdaptor = "webgpu-pipes-adaptor";
  t.WebGPUSystem = "webgpu-system";
  t.WebGPULoader = "webgpu-loader";
  t.CanvasSystem = "canvas-system";
  t.CanvasPipesAdaptor = "canvas-pipes-adaptor";
  t.CanvasPipes = "canvas-pipes";
  t.CanvasLoader = "canvas-loader";
  t.Asset = "asset";
  t.LoadParser = "load-parser";
  t.ResolveParser = "resolve-parser";
  t.CacheParser = "cache-parser";
  t.DetectionParser = "detection-parser";
  t.MaskEffect = "mask-effect";
  t.BlendMode = "blend-mode";
  t.TextureSource = "texture-source";
  t.TextureUploaderWebGL = "texture-uploader-webgl";
  t.TextureUploaderWebGPU = "texture-uploader-webgpu";
  t.Environment = "environment";
  t.ShapeBuilder = "shape-builder";
  t.Batcher = "batcher";
  return t;
})(u || {});
var d = t => {
  if (typeof t == "function" || typeof t == "object" && t.extension) {
    if (!t.extension) {
      throw new Error("Extension class must have an extension object");
    }
    t = {
      ...(typeof t.extension != "object" ? {
        type: t.extension
      } : t.extension),
      ref: t
    };
  }
  if (typeof t != "object") {
    throw new Error("Invalid extension type");
  }
  if (typeof (t = {
    ...t
  }).type == "string") {
    t.type = [t.type];
  }
  return t;
};
var l = (t, e) => d(t).priority ?? e;
var c = {
  _addHandlers: {},
  _removeHandlers: {},
  _queue: {},
  remove(...t) {
    t.map(d).forEach(t => {
      t.type.forEach(e => this._removeHandlers[e]?.(t));
    });
    return this;
  },
  add(...t) {
    t.map(d).forEach(t => {
      t.type.forEach(e => {
        const s = this._addHandlers;
        const i = this._queue;
        if (s[e]) {
          s[e]?.(t);
        } else {
          i[e] = i[e] || [];
          i[e]?.push(t);
        }
      });
    });
    return this;
  },
  handle(t, e, s) {
    const i = this._addHandlers;
    const r = this._removeHandlers;
    if (i[t] || r[t]) {
      throw new Error(`Extension type ${t} already has a handler`);
    }
    i[t] = e;
    r[t] = s;
    const n = this._queue;
    if (n[t]) {
      n[t]?.forEach(t => e(t));
      delete n[t];
    }
    return this;
  },
  handleByMap(t, e) {
    return this.handle(t, t => {
      if (t.name) {
        e[t.name] = t.ref;
      }
    }, t => {
      if (t.name) {
        delete e[t.name];
      }
    });
  },
  handleByNamedList(t, e, s = -1) {
    return this.handle(t, t => {
      if (!(e.findIndex(e => e.name === t.name) >= 0)) {
        e.push({
          name: t.name,
          value: t.ref
        });
        e.sort((t, e) => l(e.value, s) - l(t.value, s));
      }
    }, t => {
      const s = e.findIndex(e => e.name === t.name);
      if (s !== -1) {
        e.splice(s, 1);
      }
    });
  },
  handleByList(t, e, s = -1) {
    return this.handle(t, t => {
      if (!e.includes(t.ref)) {
        e.push(t.ref);
        e.sort((t, e) => l(e, s) - l(t, s));
      }
    }, t => {
      const s = e.indexOf(t.ref);
      if (s !== -1) {
        e.splice(s, 1);
      }
    });
  },
  mixin(t, ...e) {
    for (const s of e) {
      Object.defineProperties(t.prototype, Object.getOwnPropertyDescriptors(s));
    }
  }
};
var f = a((t, e) => {
  var s = Object.prototype.hasOwnProperty;
  var i = "~";
  function r() {}
  function n(t, e, s) {
    this.fn = t;
    this.context = e;
    this.once = s || false;
  }
  function a(t, e, s, r, a) {
    if (typeof s != "function") {
      throw new TypeError("The listener must be a function");
    }
    var o = new n(s, r || t, a);
    var h = i ? i + e : e;
    if (t._events[h]) {
      if (t._events[h].fn) {
        t._events[h] = [t._events[h], o];
      } else {
        t._events[h].push(o);
      }
    } else {
      t._events[h] = o;
      t._eventsCount++;
    }
    return t;
  }
  function o(t, e) {
    if (--t._eventsCount === 0) {
      t._events = new r();
    } else {
      delete t._events[e];
    }
  }
  function h() {
    this._events = new r();
    this._eventsCount = 0;
  }
  if (Object.create) {
    r.prototype = Object.create(null);
    if (!new r().__proto__) {
      i = false;
    }
  }
  h.prototype.eventNames = function () {
    var t;
    var e;
    var r = [];
    if (this._eventsCount === 0) {
      return r;
    }
    for (e in t = this._events) {
      if (s.call(t, e)) {
        r.push(i ? e.slice(1) : e);
      }
    }
    if (Object.getOwnPropertySymbols) {
      return r.concat(Object.getOwnPropertySymbols(t));
    } else {
      return r;
    }
  };
  h.prototype.listeners = function (t) {
    var e = i ? i + t : t;
    var s = this._events[e];
    if (!s) {
      return [];
    }
    if (s.fn) {
      return [s.fn];
    }
    for (var r = 0, n = s.length, a = new Array(n); r < n; r++) {
      a[r] = s[r].fn;
    }
    return a;
  };
  h.prototype.listenerCount = function (t) {
    var e = i ? i + t : t;
    var s = this._events[e];
    if (s) {
      if (s.fn) {
        return 1;
      } else {
        return s.length;
      }
    } else {
      return 0;
    }
  };
  h.prototype.emit = function (t, e, s, r, n, a) {
    var o = i ? i + t : t;
    if (!this._events[o]) {
      return false;
    }
    var h;
    var u;
    var d = this._events[o];
    var l = arguments.length;
    if (d.fn) {
      if (d.once) {
        this.removeListener(t, d.fn, undefined, true);
      }
      switch (l) {
        case 1:
          d.fn.call(d.context);
          return true;
        case 2:
          d.fn.call(d.context, e);
          return true;
        case 3:
          d.fn.call(d.context, e, s);
          return true;
        case 4:
          d.fn.call(d.context, e, s, r);
          return true;
        case 5:
          d.fn.call(d.context, e, s, r, n);
          return true;
        case 6:
          d.fn.call(d.context, e, s, r, n, a);
          return true;
      }
      u = 1;
      h = new Array(l - 1);
      for (; u < l; u++) {
        h[u - 1] = arguments[u];
      }
      d.fn.apply(d.context, h);
    } else {
      var c;
      var f = d.length;
      for (u = 0; u < f; u++) {
        if (d[u].once) {
          this.removeListener(t, d[u].fn, undefined, true);
        }
        switch (l) {
          case 1:
            d[u].fn.call(d[u].context);
            break;
          case 2:
            d[u].fn.call(d[u].context, e);
            break;
          case 3:
            d[u].fn.call(d[u].context, e, s);
            break;
          case 4:
            d[u].fn.call(d[u].context, e, s, r);
            break;
          default:
            if (!h) {
              c = 1;
              h = new Array(l - 1);
              for (; c < l; c++) {
                h[c - 1] = arguments[c];
              }
            }
            d[u].fn.apply(d[u].context, h);
        }
      }
    }
    return true;
  };
  h.prototype.on = function (t, e, s) {
    return a(this, t, e, s, false);
  };
  h.prototype.once = function (t, e, s) {
    return a(this, t, e, s, true);
  };
  h.prototype.removeListener = function (t, e, s, r) {
    var n = i ? i + t : t;
    if (!this._events[n]) {
      return this;
    }
    if (!e) {
      o(this, n);
      return this;
    }
    var a = this._events[n];
    if (a.fn) {
      if (a.fn === e && (!r || !!a.once) && (!s || a.context === s)) {
        o(this, n);
      }
    } else {
      for (var h = 0, u = [], d = a.length; h < d; h++) {
        if (a[h].fn !== e || r && !a[h].once || s && a[h].context !== s) {
          u.push(a[h]);
        }
      }
      if (u.length) {
        this._events[n] = u.length === 1 ? u[0] : u;
      } else {
        o(this, n);
      }
    }
    return this;
  };
  h.prototype.removeAllListeners = function (t) {
    var e;
    if (t) {
      e = i ? i + t : t;
      if (this._events[e]) {
        o(this, e);
      }
    } else {
      this._events = new r();
      this._eventsCount = 0;
    }
    return this;
  };
  h.prototype.off = h.prototype.removeListener;
  h.prototype.addListener = h.prototype.on;
  h.prefixed = i;
  h.EventEmitter = h;
  if (e !== undefined) {
    e.exports = h;
  }
});
var p = h(f(), 1).default;
var m = Math.PI * 2;
var g = 180 / Math.PI;
var y = Math.PI / 180;
var x = class t {
  constructor(t = 0, e = 0) {
    this.x = 0;
    this.y = 0;
    this.x = t;
    this.y = e;
  }
  clone() {
    return new t(this.x, this.y);
  }
  copyFrom(t) {
    this.set(t.x, t.y);
    return this;
  }
  copyTo(t) {
    t.set(this.x, this.y);
    return t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, e = t) {
    this.x = t;
    this.y = e;
    return this;
  }
  toString() {
    return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
  }
  static get shared() {
    b.x = 0;
    b.y = 0;
    return b;
  }
};
var b = new x();
var _ = class t {
  constructor(t = 1, e = 0, s = 0, i = 1, r = 0, n = 0) {
    this.array = null;
    this.a = t;
    this.b = e;
    this.c = s;
    this.d = i;
    this.tx = r;
    this.ty = n;
  }
  fromArray(t) {
    this.a = t[0];
    this.b = t[1];
    this.c = t[3];
    this.d = t[4];
    this.tx = t[2];
    this.ty = t[5];
  }
  set(t, e, s, i, r, n) {
    this.a = t;
    this.b = e;
    this.c = s;
    this.d = i;
    this.tx = r;
    this.ty = n;
    return this;
  }
  toArray(t, e) {
    this.array ||= new Float32Array(9);
    const s = e || this.array;
    if (t) {
      s[0] = this.a;
      s[1] = this.b;
      s[2] = 0;
      s[3] = this.c;
      s[4] = this.d;
      s[5] = 0;
      s[6] = this.tx;
      s[7] = this.ty;
      s[8] = 1;
    } else {
      s[0] = this.a;
      s[1] = this.c;
      s[2] = this.tx;
      s[3] = this.b;
      s[4] = this.d;
      s[5] = this.ty;
      s[6] = 0;
      s[7] = 0;
      s[8] = 1;
    }
    return s;
  }
  apply(t, e) {
    e = e || new x();
    const s = t.x;
    const i = t.y;
    e.x = this.a * s + this.c * i + this.tx;
    e.y = this.b * s + this.d * i + this.ty;
    return e;
  }
  applyInverse(t, e) {
    e = e || new x();
    const s = this.a;
    const i = this.b;
    const r = this.c;
    const n = this.d;
    const a = this.tx;
    const o = this.ty;
    const h = 1 / (s * n + r * -i);
    const u = t.x;
    const d = t.y;
    e.x = n * h * u + -r * h * d + (o * r - a * n) * h;
    e.y = s * h * d + -i * h * u + (-o * s + a * i) * h;
    return e;
  }
  translate(t, e) {
    this.tx += t;
    this.ty += e;
    return this;
  }
  scale(t, e) {
    this.a *= t;
    this.d *= e;
    this.c *= t;
    this.b *= e;
    this.tx *= t;
    this.ty *= e;
    return this;
  }
  rotate(t) {
    const e = Math.cos(t);
    const s = Math.sin(t);
    const i = this.a;
    const r = this.c;
    const n = this.tx;
    this.a = i * e - this.b * s;
    this.b = i * s + this.b * e;
    this.c = r * e - this.d * s;
    this.d = r * s + this.d * e;
    this.tx = n * e - this.ty * s;
    this.ty = n * s + this.ty * e;
    return this;
  }
  append(t) {
    const e = this.a;
    const s = this.b;
    const i = this.c;
    const r = this.d;
    this.a = t.a * e + t.b * i;
    this.b = t.a * s + t.b * r;
    this.c = t.c * e + t.d * i;
    this.d = t.c * s + t.d * r;
    this.tx = t.tx * e + t.ty * i + this.tx;
    this.ty = t.tx * s + t.ty * r + this.ty;
    return this;
  }
  appendFrom(t, e) {
    const s = t.a;
    const i = t.b;
    const r = t.c;
    const n = t.d;
    const a = t.tx;
    const o = t.ty;
    const h = e.a;
    const u = e.b;
    const d = e.c;
    const l = e.d;
    this.a = s * h + i * d;
    this.b = s * u + i * l;
    this.c = r * h + n * d;
    this.d = r * u + n * l;
    this.tx = a * h + o * d + e.tx;
    this.ty = a * u + o * l + e.ty;
    return this;
  }
  setTransform(t, e, s, i, r, n, a, o, h) {
    this.a = Math.cos(a + h) * r;
    this.b = Math.sin(a + h) * r;
    this.c = -Math.sin(a - o) * n;
    this.d = Math.cos(a - o) * n;
    this.tx = t - (s * this.a + i * this.c);
    this.ty = e - (s * this.b + i * this.d);
    return this;
  }
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const e = this.a;
      const s = this.c;
      this.a = e * t.a + this.b * t.c;
      this.b = e * t.b + this.b * t.d;
      this.c = s * t.a + this.d * t.c;
      this.d = s * t.b + this.d * t.d;
    }
    this.tx = e * t.a + this.ty * t.c + t.tx;
    this.ty = e * t.b + this.ty * t.d + t.ty;
    return this;
  }
  decompose(t) {
    const e = this.a;
    const s = this.b;
    const i = this.c;
    const r = this.d;
    const n = t.pivot;
    const a = -Math.atan2(-i, r);
    const o = Math.atan2(s, e);
    const h = Math.abs(a + o);
    let u = Math.sqrt(e * e + s * s);
    if (h < 0.00001 || Math.abs(m - h) < 0.00001) {
      t.rotation = o;
      t.skew.x = t.skew.y = 0;
    } else if (Math.abs(Math.PI - h) < 0.00001) {
      t.rotation = o - Math.PI;
      t.skew.x = t.skew.y = 0;
      u = -u;
    } else {
      t.rotation = 0;
      t.skew.x = a;
      t.skew.y = o;
    }
    t.scale.x = u;
    t.scale.y = Math.sqrt(i * i + r * r);
    t.position.x = this.tx + (n.x * e + n.y * i);
    t.position.y = this.ty + (n.x * s + n.y * r);
    return t;
  }
  invert() {
    const t = this.a;
    const e = this.b;
    const s = this.c;
    const i = this.d;
    const r = this.tx;
    const n = t * i - e * s;
    this.a = i / n;
    this.b = -e / n;
    this.c = -s / n;
    this.d = t / n;
    this.tx = (s * this.ty - i * r) / n;
    this.ty = -(t * this.ty - e * r) / n;
    return this;
  }
  isIdentity() {
    return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
  }
  identity() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;
    return this;
  }
  clone() {
    const e = new t();
    e.a = this.a;
    e.b = this.b;
    e.c = this.c;
    e.d = this.d;
    e.tx = this.tx;
    e.ty = this.ty;
    return e;
  }
  copyTo(t) {
    t.a = this.a;
    t.b = this.b;
    t.c = this.c;
    t.d = this.d;
    t.tx = this.tx;
    t.ty = this.ty;
    return t;
  }
  copyFrom(t) {
    this.a = t.a;
    this.b = t.b;
    this.c = t.c;
    this.d = t.d;
    this.tx = t.tx;
    this.ty = t.ty;
    return this;
  }
  equals(t) {
    return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty;
  }
  toString() {
    return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  static get IDENTITY() {
    return w.identity();
  }
  static get shared() {
    return v.identity();
  }
};
var v = new _();
var w = new _();
var M = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
var E = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var C = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var A = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
var S = [];
var T = [];
var X = Math.sign;
(function () {
  for (let t = 0; t < 16; t++) {
    const e = [];
    S.push(e);
    for (let s = 0; s < 16; s++) {
      const i = X(M[t] * M[s] + C[t] * E[s]);
      const r = X(E[t] * M[s] + A[t] * E[s]);
      const n = X(M[t] * C[s] + C[t] * A[s]);
      const a = X(E[t] * C[s] + A[t] * A[s]);
      for (let t = 0; t < 16; t++) {
        if (M[t] === i && E[t] === r && C[t] === n && A[t] === a) {
          e.push(t);
          break;
        }
      }
    }
  }
  for (let t = 0; t < 16; t++) {
    const e = new _();
    e.set(M[t], E[t], C[t], A[t], 0, 0);
    T.push(e);
  }
})();
var R = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: t => M[t],
  uY: t => E[t],
  vX: t => C[t],
  vY: t => A[t],
  inv: t => t & 8 ? t & 15 : -t & 7,
  add: (t, e) => S[t][e],
  sub: (t, e) => S[t][R.inv(e)],
  rotate180: t => t ^ 4,
  isVertical: t => (t & 3) == 2,
  byDirection: (t, e) => Math.abs(t) * 2 <= Math.abs(e) ? e >= 0 ? R.S : R.N : Math.abs(e) * 2 <= Math.abs(t) ? t > 0 ? R.E : R.W : e > 0 ? t > 0 ? R.SE : R.SW : t > 0 ? R.NE : R.NW,
  matrixAppendRotationInv: (t, e, s = 0, i = 0, r = 0, n = 0) => {
    const a = T[R.inv(e)];
    const o = a.a;
    const h = a.b;
    const u = a.c;
    const d = a.d;
    const l = s - Math.min(0, o * r, u * n, o * r + u * n);
    const c = i - Math.min(0, h * r, d * n, h * r + d * n);
    const f = t.a;
    const p = t.b;
    const m = t.c;
    const g = t.d;
    t.a = o * f + h * m;
    t.b = o * p + h * g;
    t.c = u * f + d * m;
    t.d = u * p + d * g;
    t.tx = l * f + c * m + t.tx;
    t.ty = l * p + c * g + t.ty;
  },
  transformRectCoords: (t, e, s, i) => {
    const {
      x: r,
      y: n,
      width: a,
      height: o
    } = t;
    const {
      x: h,
      y: u,
      width: d,
      height: l
    } = e;
    if (s === R.E) {
      i.set(r + h, n + u, a, o);
      return i;
    } else if (s === R.S) {
      return i.set(d - n - o + h, r + u, o, a);
    } else if (s === R.W) {
      return i.set(d - r - a + h, l - n - o + u, a, o);
    } else if (s === R.N) {
      return i.set(n + h, l - r - a + u, o, a);
    } else {
      return i.set(r + h, n + u, a, o);
    }
  }
};
var Y = [new x(), new x(), new x(), new x()];
var P = class t {
  constructor(t = 0, e = 0, s = 0, i = 0) {
    this.type = "rectangle";
    this.x = Number(t);
    this.y = Number(e);
    this.width = Number(s);
    this.height = Number(i);
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
  static get EMPTY() {
    return new t(0, 0, 0, 0);
  }
  clone() {
    return new t(this.x, this.y, this.width, this.height);
  }
  copyFromBounds(t) {
    this.x = t.minX;
    this.y = t.minY;
    this.width = t.maxX - t.minX;
    this.height = t.maxY - t.minY;
    return this;
  }
  copyFrom(t) {
    this.x = t.x;
    this.y = t.y;
    this.width = t.width;
    this.height = t.height;
    return this;
  }
  copyTo(t) {
    t.copyFrom(this);
    return t;
  }
  contains(t, e) {
    return !(this.width <= 0) && !(this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
  }
  strokeContains(t, e, s, i = 0.5) {
    const {
      width: r,
      height: n
    } = this;
    if (r <= 0 || n <= 0) {
      return false;
    }
    const a = this.x;
    const o = this.y;
    const h = s * (1 - i);
    const u = s - h;
    return t >= a - h && t <= a + r + h && e >= o - h && e <= o + n + h && (!(t > a + u) || !(t < a + r - u) || !(e > o + u) || !(e < o + n - u));
  }
  intersects(t, e) {
    if (!e) {
      const e = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= e) {
        return false;
      }
      const s = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > s;
    }
    const s = this.left;
    const i = this.right;
    const r = this.top;
    const n = this.bottom;
    if (i <= s || n <= r) {
      return false;
    }
    const a = Y[0].set(t.left, t.top);
    const o = Y[1].set(t.left, t.bottom);
    const h = Y[2].set(t.right, t.top);
    const u = Y[3].set(t.right, t.bottom);
    if (h.x <= a.x || o.y <= a.y) {
      return false;
    }
    const d = Math.sign(e.a * e.d - e.b * e.c);
    if (d === 0) {
      return false;
    }
    e.apply(a, a);
    e.apply(o, o);
    e.apply(h, h);
    e.apply(u, u);
    if (Math.max(a.x, o.x, h.x, u.x) <= s || Math.min(a.x, o.x, h.x, u.x) >= i || Math.max(a.y, o.y, h.y, u.y) <= r || Math.min(a.y, o.y, h.y, u.y) >= n) {
      return false;
    }
    const l = d * (o.y - a.y);
    const c = d * (a.x - o.x);
    const f = l * s + c * r;
    const p = l * i + c * r;
    const m = l * s + c * n;
    const g = l * i + c * n;
    if (Math.max(f, p, m, g) <= l * a.x + c * a.y || Math.min(f, p, m, g) >= l * u.x + c * u.y) {
      return false;
    }
    const y = d * (a.y - h.y);
    const x = d * (h.x - a.x);
    const b = y * s + x * r;
    const _ = y * i + x * r;
    const v = y * s + x * n;
    const w = y * i + x * n;
    return !(Math.max(b, _, v, w) <= y * a.x + x * a.y) && !(Math.min(b, _, v, w) >= y * u.x + x * u.y);
  }
  pad(t = 0, e = t) {
    this.x -= t;
    this.y -= e;
    this.width += t * 2;
    this.height += e * 2;
    return this;
  }
  fit(t) {
    const e = Math.max(this.x, t.x);
    const s = Math.min(this.x + this.width, t.x + t.width);
    const i = Math.max(this.y, t.y);
    const r = Math.min(this.y + this.height, t.y + t.height);
    this.x = e;
    this.width = Math.max(s - e, 0);
    this.y = i;
    this.height = Math.max(r - i, 0);
    return this;
  }
  ceil(t = 1, e = 0.001) {
    const s = Math.ceil((this.x + this.width - e) * t) / t;
    const i = Math.ceil((this.y + this.height - e) * t) / t;
    this.x = Math.floor((this.x + e) * t) / t;
    this.y = Math.floor((this.y + e) * t) / t;
    this.width = s - this.x;
    this.height = i - this.y;
    return this;
  }
  scale(t, e = t) {
    this.x *= t;
    this.y *= e;
    this.width *= t;
    this.height *= e;
    return this;
  }
  enlarge(t) {
    const e = Math.min(this.x, t.x);
    const s = Math.max(this.x + this.width, t.x + t.width);
    const i = Math.min(this.y, t.y);
    const r = Math.max(this.y + this.height, t.y + t.height);
    this.x = e;
    this.width = s - e;
    this.y = i;
    this.height = r - i;
    return this;
  }
  getBounds(e) {
    e ||= new t();
    e.copyFrom(this);
    return e;
  }
  containsRect(t) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    const e = t.x;
    const s = t.y;
    const i = t.x + t.width;
    const r = t.y + t.height;
    return e >= this.x && e < this.x + this.width && s >= this.y && s < this.y + this.height && i >= this.x && i <= this.x + this.width && r >= this.y && r <= this.y + this.height;
  }
  set(t, e, s, i) {
    this.x = t;
    this.y = e;
    this.width = s;
    this.height = i;
    return this;
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
};
var F = {
  default: -1
};
function O(t = "default") {
  if (F[t] === undefined) {
    F[t] = -1;
  }
  return ++F[t];
}
function I() {
  for (const t in F) {
    delete F[t];
  }
}
var k = new Set();
var L = "8.0.0";
var D = "8.3.4";
var N = "8.21.0";
var $ = "8.22.0";
var W = {
  quiet: false,
  noColor: false
};
var z = (t, e, s = 3) => {
  if (W.quiet || k.has(e)) {
    return;
  }
  let i = new Error().stack;
  if (typeof console.groupCollapsed == "function") {
    W.noColor;
  }
  if (i !== undefined) {
    i = i.split("\n").splice(s).join("\n");
  }
  k.add(e);
};
Object.defineProperties(z, {
  quiet: {
    get: () => W.quiet,
    set: t => {
      W.quiet = t;
    },
    enumerable: true,
    configurable: false
  },
  noColor: {
    get: () => W.noColor,
    set: t => {
      W.noColor = t;
    },
    enumerable: true,
    configurable: false
  }
});
var U = () => {};
function G(t) {
  return t.endsWith("int");
}
function B(t) {
  t += t === 0 ? 1 : 0;
  --t;
  t |= t >>> 1;
  t |= t >>> 2;
  t |= t >>> 4;
  t |= t >>> 8;
  return (t |= t >>> 16) + 1;
}
function V(t) {
  return !(t & t - 1) && !!t;
}
function H(t) {
  let e = (t > 65535 ? 1 : 0) << 4;
  let s = ((t >>>= e) > 255 ? 1 : 0) << 3;
  e |= s;
  s = ((t >>>= s) > 15 ? 1 : 0) << 2;
  e |= s;
  s = ((t >>>= s) > 3 ? 1 : 0) << 1;
  e |= s;
  return e | (t >>>= s) >> 1;
}
function j(t) {
  const e = {};
  for (const s in t) {
    if (t[s] !== undefined) {
      e[s] = t[s];
    }
  }
  return e;
}
var q = Object.create(null);
var K = class t extends p {
  constructor(e = {}) {
    super();
    this._resourceType = "textureSampler";
    this._maxAnisotropy = 1;
    this.destroyed = false;
    e = {
      ...t.defaultOptions,
      ...e
    };
    this.addressMode = e.addressMode;
    this.addressModeU = e.addressModeU ?? this.addressModeU;
    this.addressModeV = e.addressModeV ?? this.addressModeV;
    this.addressModeW = e.addressModeW ?? this.addressModeW;
    this.scaleMode = e.scaleMode;
    this.magFilter = e.magFilter ?? this.magFilter;
    this.minFilter = e.minFilter ?? this.minFilter;
    this.mipmapFilter = e.mipmapFilter ?? this.mipmapFilter;
    this.lodMinClamp = e.lodMinClamp;
    this.lodMaxClamp = e.lodMaxClamp;
    this.compare = e.compare;
    this.maxAnisotropy = e.maxAnisotropy ?? 1;
  }
  set addressMode(t) {
    this.addressModeU = t;
    this.addressModeV = t;
    this.addressModeW = t;
  }
  get addressMode() {
    return this.addressModeU;
  }
  set wrapMode(t) {
    z(0, "TextureStyle.wrapMode is now TextureStyle.addressMode");
    this.addressMode = t;
  }
  get wrapMode() {
    return this.addressMode;
  }
  set scaleMode(t) {
    this.magFilter = t;
    this.minFilter = t;
    this.mipmapFilter = t;
  }
  get scaleMode() {
    return this.magFilter;
  }
  set maxAnisotropy(t) {
    this._maxAnisotropy = Math.min(t, 16);
    if (this._maxAnisotropy > 1) {
      this.scaleMode = "linear";
    }
  }
  get maxAnisotropy() {
    return this._maxAnisotropy;
  }
  get _resourceId() {
    return this._sharedResourceId || this._generateResourceId();
  }
  update() {
    this._sharedResourceId = null;
    this.emit("change", this);
  }
  _generateResourceId() {
    const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
    this._sharedResourceId = function (t) {
      const e = q[t];
      if (e === undefined) {
        q[t] = O("resource");
      }
      return e;
    }(t);
    return this._resourceId;
  }
  destroy() {
    this.destroyed = true;
    this.emit("destroy", this);
    this.emit("change", this);
    this.removeAllListeners();
  }
};
K.defaultOptions = {
  addressMode: "clamp-to-edge",
  scaleMode: "linear"
};
var Z = K;
var Q = class t extends p {
  constructor(e = {}) {
    super();
    this.options = e;
    this._gpuData = Object.create(null);
    this._gcLastUsed = -1;
    this.uid = O("textureSource");
    this._resourceType = "textureSource";
    this._resourceId = O("resource");
    this.uploadMethodId = "unknown";
    this._resolution = 1;
    this.pixelWidth = 1;
    this.pixelHeight = 1;
    this.width = 1;
    this.height = 1;
    this.sampleCount = 1;
    this.mipLevelCount = 1;
    this.autoGenerateMipmaps = false;
    this.format = "rgba8unorm";
    this.dimension = "2d";
    this.viewDimension = "2d";
    this.arrayLayerCount = 1;
    this.depth = 1;
    this._ownsStyle = false;
    this.antialias = false;
    this.transient = false;
    this.storage = false;
    this._batchTick = -1;
    this._textureBindLocation = -1;
    const s = e;
    const i = function (t) {
      if (t.viewDimension) {
        return t.viewDimension;
      } else if (t.depth) {
        return "3d";
      } else if (t.arrayLayerCount > 1) {
        return "2d-array";
      } else {
        return "2d";
      }
    }(e = {
      ...t.defaultOptions,
      ...e
    });
    const r = i === "3d" || i === "1d" ? i : "2d";
    (function (t, e, s) {
      if (t.depth !== undefined && typeof t.depth != "number") {
        throw new Error(`[TextureSource] depth is a 3D texture's depth in texels, but got ${t.depth}. For a depth buffer, use the depth option of a RenderTarget or the renderer.`);
      }
      if (t.depth && t.arrayLayerCount > 1) {
        throw new Error("[TextureSource] depth and arrayLayerCount can't be combined: use depth for a 3D texture or arrayLayerCount for a 2D array.");
      }
      if (t.depth && e !== "3d") {
        throw new Error(`[TextureSource] depth makes a 3D texture, but viewDimension is '${e}'. Use arrayLayerCount for layered textures.`);
      }
      if (e === "3d" && t.arrayLayerCount > 1) {
        throw new Error("[TextureSource] a 3D texture takes depth, not arrayLayerCount.");
      }
      if (t.dimensions && t.dimensions !== s) {
        throw new Error(`[TextureSource] dimensions '${t.dimensions}' doesn't match viewDimension '${e}'. Leave dimensions out; it is derived from the view.`);
      }
      if (t.dimensions) {
        z(0, "TextureSource dimensions is derived from viewDimension and depth; leave it out.");
      }
      if (s === "3d" && t.antialias) {
        throw new Error("[TextureSource] a 3D texture can't be antialiased: WebGPU has no multisampled 3D textures.");
      }
    })(s, i, r);
    this.label = e.label ?? "";
    this.resource = e.resource;
    this.autoGarbageCollect = e.autoGarbageCollect;
    this._resolution = e.resolution;
    if (e.width) {
      this.pixelWidth = e.width * this._resolution;
    } else {
      this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1;
    }
    if (e.height) {
      this.pixelHeight = e.height * this._resolution;
    } else {
      this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1;
    }
    this.width = this.pixelWidth / this._resolution;
    this.height = this.pixelHeight / this._resolution;
    this.format = e.format;
    this.dimension = r;
    this.viewDimension = i;
    this.arrayLayerCount = e.arrayLayerCount;
    this.depth = r === "3d" ? e.depth ?? 1 : 1;
    this.mipLevelCount = e.mipLevelCount;
    this.autoGenerateMipmaps = e.autoGenerateMipmaps;
    this.sampleCount = e.sampleCount;
    this.antialias = r !== "3d" && e.antialias;
    this.transient = e.transient ?? false;
    this.storage = e.storage ?? false;
    this.alphaMode = e.alphaMode;
    this.style = new Z(j(e));
    this._ownsStyle = true;
    this.destroyed = false;
    this._refreshPOT();
  }
  get depthOrArrayLayers() {
    if (this.dimension === "3d") {
      return this.depth;
    } else {
      return this.arrayLayerCount || 1;
    }
  }
  get source() {
    return this;
  }
  get style() {
    return this._style;
  }
  set style(t) {
    if (this.style !== t) {
      this._ownsStyle = false;
      this._style?.off("change", this._onStyleChange, this);
      this._style = t;
      this._style?.on("change", this._onStyleChange, this);
      this._onStyleChange();
    }
  }
  set maxAnisotropy(t) {
    this._style.maxAnisotropy = t;
  }
  get maxAnisotropy() {
    return this._style.maxAnisotropy;
  }
  get addressMode() {
    return this._style.addressMode;
  }
  set addressMode(t) {
    this._style.addressMode = t;
  }
  get repeatMode() {
    return this._style.addressMode;
  }
  set repeatMode(t) {
    this._style.addressMode = t;
  }
  get magFilter() {
    return this._style.magFilter;
  }
  set magFilter(t) {
    this._style.magFilter = t;
  }
  get minFilter() {
    return this._style.minFilter;
  }
  set minFilter(t) {
    this._style.minFilter = t;
  }
  get mipmapFilter() {
    return this._style.mipmapFilter;
  }
  set mipmapFilter(t) {
    this._style.mipmapFilter = t;
  }
  get lodMinClamp() {
    return this._style.lodMinClamp;
  }
  set lodMinClamp(t) {
    this._style.lodMinClamp = t;
  }
  get lodMaxClamp() {
    return this._style.lodMaxClamp;
  }
  set lodMaxClamp(t) {
    this._style.lodMaxClamp = t;
  }
  _onStyleChange() {
    this.emit("styleChange", this);
  }
  update() {
    if (this.resource) {
      const t = this._resolution;
      if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) {
        return;
      }
    }
    this.emit("update", this);
  }
  destroy() {
    this.destroyed = true;
    this.unload();
    this.emit("destroy", this);
    if (this._style) {
      if (this._ownsStyle) {
        this._style.destroy();
      }
      this._style = null;
    }
    this.uploadMethodId = null;
    this.resource = null;
    this.removeAllListeners();
  }
  unload() {
    this._resourceId = O("resource");
    this.emit("change", this);
    this.emit("unload", this);
    for (const t in this._gpuData) {
      this._gpuData[t]?.destroy?.();
    }
    this._gpuData = Object.create(null);
  }
  get resourceWidth() {
    const {
      resource: t
    } = this;
    return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
  }
  get resourceHeight() {
    const {
      resource: t
    } = this;
    return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    if (this._resolution !== t) {
      this._resolution = t;
      this.width = this.pixelWidth / t;
      this.height = this.pixelHeight / t;
    }
  }
  resize(t, e, s) {
    s ||= this._resolution;
    t ||= this.width;
    e ||= this.height;
    const i = Math.round(t * s);
    const r = Math.round(e * s);
    this.width = i / s;
    this.height = r / s;
    this._resolution = s;
    return (this.pixelWidth !== i || this.pixelHeight !== r) && (this._refreshPOT(), this.pixelWidth = i, this.pixelHeight = r, this.emit("resize", this), this._resourceId = O("resource"), this.emit("change", this), true);
  }
  updateMipmaps() {
    if (this.autoGenerateMipmaps && this.mipLevelCount > 1) {
      this.emit("updateMipmaps", this);
    }
  }
  set wrapMode(t) {
    this._style.wrapMode = t;
  }
  get wrapMode() {
    return this._style.wrapMode;
  }
  set scaleMode(t) {
    this._style.scaleMode = t;
  }
  get scaleMode() {
    return this._style.scaleMode;
  }
  _refreshPOT() {
    this.isPowerOfTwo = V(this.pixelWidth) && V(this.pixelHeight);
  }
  static test(t) {
    throw new Error("Unimplemented");
  }
};
Q.defaultOptions = {
  resolution: 1,
  format: "bgra8unorm",
  alphaMode: "premultiply-alpha-on-upload",
  arrayLayerCount: 1,
  mipLevelCount: 1,
  autoGenerateMipmaps: false,
  sampleCount: 1,
  antialias: false,
  autoGarbageCollect: false
};
var J = Q;
var tt = class extends J {
  constructor(t) {
    const e = t.depth ?? t.arrayLayerCount ?? 1;
    const s = t.resource || new Float32Array(t.width * t.height * e * 4);
    let i = t.format;
    i ||= s instanceof Float32Array ? "rgba32float" : s instanceof Int32Array || s instanceof Uint32Array ? "rgba32uint" : s instanceof Int16Array || s instanceof Uint16Array ? "rgba16uint" : (Int8Array, "bgra8unorm");
    super({
      ...((G(i) || e > 1) && {
        alphaMode: "no-premultiply-alpha"
      }),
      ...t,
      resource: s,
      format: i
    });
    this.uploadMethodId = "buffer";
    this._updateStart = 0;
    this._updateEnd = Infinity;
  }
  update(t = 0, e = Infinity) {
    if ((t > 0 || e < Infinity) && this.depthOrArrayLayers > 1) {
      throw new Error("[BufferImageSource] a 3D texture or 2D array uploads whole: call update() with no range.");
    }
    this._updateStart = t;
    this._updateEnd = e;
    super.update();
    this._updateStart = 0;
    this._updateEnd = Infinity;
  }
  static test(t) {
    return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
  }
};
tt.extension = u.TextureSource;
var et = new _();
var st = class {
  constructor(t, e) {
    this.mapCoord = new _();
    this.uClampFrame = new Float32Array(4);
    this.uClampOffset = new Float32Array(2);
    this._updateID = 0;
    this.clampOffset = 0;
    this.clampMargin = e === undefined ? t.width < 10 ? 0 : 0.5 : e;
    this.isSimple = false;
    this.texture = t;
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    if (this._texture !== t) {
      this._texture?.removeListener("update", this.update, this);
      this._texture = t;
      this._texture.addListener("update", this.update, this);
    }
    this.update();
  }
  destroy() {
    this._texture?.removeListener("update", this.update, this);
    this._texture = null;
  }
  multiplyUvs(t, e = t) {
    const s = this.mapCoord;
    for (let i = 0; i < t.length; i += 2) {
      const r = t[i];
      const n = t[i + 1];
      e[i] = r * s.a + n * s.c + s.tx;
      e[i + 1] = r * s.b + n * s.d + s.ty;
    }
    return e;
  }
  update() {
    const t = this._texture;
    this._updateID++;
    const e = t.uvs;
    this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
    const s = t.orig;
    const i = t.trim;
    if (i) {
      et.set(s.width / i.width, 0, 0, s.height / i.height, -i.x / i.width, -i.y / i.height);
      this.mapCoord.append(et);
    }
    const r = t.source;
    const n = this.uClampFrame;
    const a = this.clampMargin / r._resolution;
    const o = this.clampOffset / r._resolution;
    n[0] = (t.frame.x + a + o) / r.width;
    n[1] = (t.frame.y + a + o) / r.height;
    n[2] = (t.frame.x + t.frame.width - a + o) / r.width;
    n[3] = (t.frame.y + t.frame.height - a + o) / r.height;
    this.uClampOffset[0] = this.clampOffset / r.pixelWidth;
    this.uClampOffset[1] = this.clampOffset / r.pixelHeight;
    this.isSimple = t.frame.width === r.width && t.frame.height === r.height && t.rotate === 0;
    return true;
  }
};
var it = class extends p {
  constructor({
    source: t,
    label: e,
    frame: s,
    orig: i,
    trim: r,
    defaultAnchor: n,
    defaultBorders: a,
    rotate: o,
    dynamic: h
  } = {}) {
    super();
    this.uid = O("texture");
    this.uvs = {
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      x3: 0,
      y3: 0
    };
    this.frame = new P();
    this.noFrame = false;
    this.dynamic = false;
    this.isTexture = true;
    this.label = e;
    this.source = t?.source ?? new J();
    this.noFrame = !s;
    if (s) {
      this.frame.copyFrom(s);
    } else {
      const {
        width: t,
        height: e
      } = this._source;
      this.frame.width = t;
      this.frame.height = e;
    }
    this.orig = i || this.frame;
    this.trim = r;
    this.rotate = o ?? 0;
    this.defaultAnchor = n;
    this.defaultBorders = a;
    this.destroyed = false;
    this.dynamic = h || false;
    this.updateUvs();
  }
  set source(t) {
    if (this._source) {
      this._source.off("resize", this.update, this);
    }
    this._source = t;
    t.on("resize", this.update, this);
    this.emit("update", this);
  }
  get source() {
    return this._source;
  }
  get textureMatrix() {
    this._textureMatrix ||= new st(this);
    return this._textureMatrix;
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  updateUvs() {
    const {
      uvs: t,
      frame: e
    } = this;
    const {
      width: s,
      height: i
    } = this._source;
    const r = e.x / s;
    const n = e.y / i;
    const a = e.width / s;
    const o = e.height / i;
    let h = this.rotate;
    if (h) {
      const e = a / 2;
      const s = o / 2;
      const i = r + e;
      const u = n + s;
      h = R.add(h, R.NW);
      t.x0 = i + e * R.uX(h);
      t.y0 = u + s * R.uY(h);
      h = R.add(h, 2);
      t.x1 = i + e * R.uX(h);
      t.y1 = u + s * R.uY(h);
      h = R.add(h, 2);
      t.x2 = i + e * R.uX(h);
      t.y2 = u + s * R.uY(h);
      h = R.add(h, 2);
      t.x3 = i + e * R.uX(h);
      t.y3 = u + s * R.uY(h);
    } else {
      t.x0 = r;
      t.y0 = n;
      t.x1 = r + a;
      t.y1 = n;
      t.x2 = r + a;
      t.y2 = n + o;
      t.x3 = r;
      t.y3 = n + o;
    }
  }
  destroy(t = false) {
    if (this._source) {
      this._source.off("resize", this.update, this);
      if (t) {
        this._source.destroy();
        this._source = null;
      }
    }
    this._textureMatrix = null;
    this.destroyed = true;
    this.emit("destroy", this);
    this.removeAllListeners();
  }
  update() {
    if (this.noFrame) {
      this.frame.width = this._source.width;
      this.frame.height = this._source.height;
    }
    this.updateUvs();
    this.emit("update", this);
  }
  get baseTexture() {
    z(0, "Texture.baseTexture is now Texture.source");
    return this._source;
  }
};
it.EMPTY = new it({
  label: "EMPTY",
  source: new J({
    label: "EMPTY"
  })
});
it.EMPTY.destroy = U;
it.WHITE = new it({
  source: new tt({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: "premultiply-alpha-on-upload",
    label: "WHITE"
  }),
  label: "WHITE"
});
it.WHITE.destroy = U;
var rt = new _();
var nt = class t {
  constructor(t = Infinity, e = Infinity, s = -Infinity, i = -Infinity) {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.matrix = rt;
    this.minX = t;
    this.minY = e;
    this.maxX = s;
    this.maxY = i;
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  get rectangle() {
    this._rectangle ||= new P();
    const t = this._rectangle;
    if (this.minX > this.maxX || this.minY > this.maxY) {
      t.x = 0;
      t.y = 0;
      t.width = 0;
      t.height = 0;
    } else {
      t.copyFromBounds(this);
    }
    return t;
  }
  clear() {
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.matrix = rt;
    return this;
  }
  set(t, e, s, i) {
    this.minX = t;
    this.minY = e;
    this.maxX = s;
    this.maxY = i;
  }
  addFrame(t, e, s, i, r) {
    r ||= this.matrix;
    const n = r.a;
    const a = r.b;
    const o = r.c;
    const h = r.d;
    const u = r.tx;
    const d = r.ty;
    let l = this.minX;
    let c = this.minY;
    let f = this.maxX;
    let p = this.maxY;
    let m = n * t + o * e + u;
    let g = a * t + h * e + d;
    if (m < l) {
      l = m;
    }
    if (g < c) {
      c = g;
    }
    if (m > f) {
      f = m;
    }
    if (g > p) {
      p = g;
    }
    m = n * s + o * e + u;
    g = a * s + h * e + d;
    if (m < l) {
      l = m;
    }
    if (g < c) {
      c = g;
    }
    if (m > f) {
      f = m;
    }
    if (g > p) {
      p = g;
    }
    m = n * t + o * i + u;
    g = a * t + h * i + d;
    if (m < l) {
      l = m;
    }
    if (g < c) {
      c = g;
    }
    if (m > f) {
      f = m;
    }
    if (g > p) {
      p = g;
    }
    m = n * s + o * i + u;
    g = a * s + h * i + d;
    if (m < l) {
      l = m;
    }
    if (g < c) {
      c = g;
    }
    if (m > f) {
      f = m;
    }
    if (g > p) {
      p = g;
    }
    this.minX = l;
    this.minY = c;
    this.maxX = f;
    this.maxY = p;
  }
  addRect(t, e) {
    this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
  }
  addBounds(t, e) {
    this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
  }
  addBoundsMask(t) {
    this.minX = this.minX > t.minX ? this.minX : t.minX;
    this.minY = this.minY > t.minY ? this.minY : t.minY;
    this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX;
    this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
  }
  applyMatrix(t) {
    const e = this.minX;
    const s = this.minY;
    const i = this.maxX;
    const r = this.maxY;
    const {
      a: n,
      b: a,
      c: o,
      d: h,
      tx: u,
      ty: d
    } = t;
    let l = n * e + o * s + u;
    let c = a * e + h * s + d;
    this.minX = l;
    this.minY = c;
    this.maxX = l;
    this.maxY = c;
    l = n * i + o * s + u;
    c = a * i + h * s + d;
    this.minX = l < this.minX ? l : this.minX;
    this.minY = c < this.minY ? c : this.minY;
    this.maxX = l > this.maxX ? l : this.maxX;
    this.maxY = c > this.maxY ? c : this.maxY;
    l = n * e + o * r + u;
    c = a * e + h * r + d;
    this.minX = l < this.minX ? l : this.minX;
    this.minY = c < this.minY ? c : this.minY;
    this.maxX = l > this.maxX ? l : this.maxX;
    this.maxY = c > this.maxY ? c : this.maxY;
    l = n * i + o * r + u;
    c = a * i + h * r + d;
    this.minX = l < this.minX ? l : this.minX;
    this.minY = c < this.minY ? c : this.minY;
    this.maxX = l > this.maxX ? l : this.maxX;
    this.maxY = c > this.maxY ? c : this.maxY;
  }
  fit(t) {
    if (this.minX < t.left) {
      this.minX = t.left;
    }
    if (this.maxX > t.right) {
      this.maxX = t.right;
    }
    if (this.minY < t.top) {
      this.minY = t.top;
    }
    if (this.maxY > t.bottom) {
      this.maxY = t.bottom;
    }
    return this;
  }
  fitBounds(t, e, s, i) {
    if (this.minX < t) {
      this.minX = t;
    }
    if (this.maxX > e) {
      this.maxX = e;
    }
    if (this.minY < s) {
      this.minY = s;
    }
    if (this.maxY > i) {
      this.maxY = i;
    }
    return this;
  }
  pad(t, e = t) {
    this.minX -= t;
    this.maxX += t;
    this.minY -= e;
    this.maxY += e;
    return this;
  }
  ceil() {
    this.minX = Math.floor(this.minX);
    this.minY = Math.floor(this.minY);
    this.maxX = Math.ceil(this.maxX);
    this.maxY = Math.ceil(this.maxY);
    return this;
  }
  clone() {
    return new t(this.minX, this.minY, this.maxX, this.maxY);
  }
  scale(t, e = t) {
    this.minX *= t;
    this.minY *= e;
    this.maxX *= t;
    this.maxY *= e;
    return this;
  }
  get x() {
    return this.minX;
  }
  set x(t) {
    const e = this.maxX - this.minX;
    this.minX = t;
    this.maxX = t + e;
  }
  get y() {
    return this.minY;
  }
  set y(t) {
    const e = this.maxY - this.minY;
    this.minY = t;
    this.maxY = t + e;
  }
  get width() {
    return this.maxX - this.minX;
  }
  set width(t) {
    this.maxX = this.minX + t;
  }
  get height() {
    return this.maxY - this.minY;
  }
  set height(t) {
    this.maxY = this.minY + t;
  }
  get left() {
    return this.minX;
  }
  get right() {
    return this.maxX;
  }
  get top() {
    return this.minY;
  }
  get bottom() {
    return this.maxY;
  }
  get isPositive() {
    return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
  }
  get isValid() {
    return this.minX + this.minY !== Infinity;
  }
  addVertexData(t, e, s, i) {
    let r = this.minX;
    let n = this.minY;
    let a = this.maxX;
    let o = this.maxY;
    i ||= this.matrix;
    const h = i.a;
    const u = i.b;
    const d = i.c;
    const l = i.d;
    const c = i.tx;
    const f = i.ty;
    for (let p = e; p < s; p += 2) {
      const e = t[p];
      const s = t[p + 1];
      const i = h * e + d * s + c;
      const m = u * e + l * s + f;
      r = i < r ? i : r;
      n = m < n ? m : n;
      a = i > a ? i : a;
      o = m > o ? m : o;
    }
    this.minX = r;
    this.minY = n;
    this.maxX = a;
    this.maxY = o;
  }
  containsPoint(t, e) {
    return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e;
  }
  toString() {
    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
  }
  copyFrom(t) {
    this.minX = t.minX;
    this.minY = t.minY;
    this.maxX = t.maxX;
    this.maxY = t.maxY;
    return this;
  }
};
var at = {
  grad: 0.9,
  turn: 360,
  rad: 360 / (Math.PI * 2)
};
var ot = function (t) {
  if (typeof t == "string") {
    return t.length > 0;
  } else {
    return typeof t == "number";
  }
};
var ht = function (t, e = 0, s = Math.pow(10, e)) {
  return Math.round(s * t) / s + 0;
};
var ut = function (t) {
  var e = Math.round(t * 100) / 100;
  if (Math.round(e * 255) === t * 255) {
    return e;
  } else {
    return Math.round(t * 1000) / 1000;
  }
};
var dt = function (t, e = 0, s = 1) {
  if (t > s) {
    return s;
  } else if (t > e) {
    return t;
  } else {
    return e;
  }
};
var lt = function (t) {
  if ((t = isFinite(t) ? t % 360 : 0) < 0) {
    return t + 360;
  } else {
    return t;
  }
};
var ct = function (t, e = 0) {
  return ht(t, e) % 360;
};
var ft = function (t) {
  return {
    r: dt(t.r, 0, 255),
    g: dt(t.g, 0, 255),
    b: dt(t.b, 0, 255),
    a: dt(t.a)
  };
};
var pt = function (t) {
  return {
    r: ht(t.r),
    g: ht(t.g),
    b: ht(t.b),
    a: ut(t.a)
  };
};
var mt = /^#([0-9a-f]{3,8})$/i;
var gt = function (t, e) {
  var s = t.charCodeAt(e);
  return (s & 15) + (s >> 6) * 9;
};
var yt = function (t, e) {
  return gt(t, e) << 4 | gt(t, e + 1);
};
var xt = [];
for (var bt = 0; bt < 256; bt++) {
  xt.push((bt < 16 ? "0" : "") + bt.toString(16));
}
var _t = function (t) {
  return xt[dt(t, 0, 255)];
};
var vt = function (t) {
  var e = t.r;
  var s = t.g;
  var i = t.b;
  var r = t.a;
  var n = Math.max(e, s, i);
  var a = n - Math.min(e, s, i);
  var o = a ? n === e ? (s - i) / a : n === s ? 2 + (i - e) / a : 4 + (e - s) / a : 0;
  return {
    h: (o < 0 ? o + 6 : o) * 60,
    s: n ? a / n * 100 : 0,
    v: n / 255 * 100,
    a: r
  };
};
var wt = function (t) {
  var e = t.h;
  var s = t.s;
  var i = t.v;
  var r = t.a;
  e = e / 360 * 6;
  s /= 100;
  i /= 100;
  var n = Math.floor(e);
  var a = i * (1 - s);
  var o = i * (1 - (e - n) * s);
  var h = i * (1 - (1 - e + n) * s);
  var u = n % 6;
  return {
    r: [i, o, a, a, h, i][u] * 255,
    g: [h, i, i, o, a, a][u] * 255,
    b: [a, a, h, i, i, o][u] * 255,
    a: r
  };
};
var Mt = function (t) {
  return {
    h: lt(t.h),
    s: dt(t.s, 0, 100),
    l: dt(t.l, 0, 100),
    a: dt(t.a)
  };
};
var Et = function (t) {
  return {
    h: ct(t.h),
    s: ht(t.s),
    l: ht(t.l),
    a: ut(t.a)
  };
};
var Ct = function (t) {
  return wt((s = (e = t).s, {
    h: e.h,
    s: (s *= ((i = e.l) < 50 ? i : 100 - i) / 100) > 0 ? s * 2 / (i + s) * 100 : 0,
    v: i + s,
    a: e.a
  }));
  var e;
  var s;
  var i;
};
var At = function (t) {
  return {
    h: (e = vt(t)).h,
    s: (r = (200 - (s = e.s)) * (i = e.v) / 100) > 0 && r < 200 ? s * i / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
    l: r / 2,
    a: e.a
  };
  var e;
  var s;
  var i;
  var r;
};
var St = /^hsla?\(\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(deg|rad|grad|turn)?\s*,\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)%\s*,\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)%\s*(?:,\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*)?\)$/i;
var Tt = /^hsla?\(\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(deg|rad|grad|turn)?\s+([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)%\s+([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)%\s*(?:\/\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*)?\)$/i;
var Xt = /^rgba?\(\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*,\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*,\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*(?:,\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*)?\)$/i;
var Rt = /^rgba?\(\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s+([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s+([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*(?:\/\s*([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%)?\s*)?\)$/i;
var Yt = {
  string: [[function (t) {
    if (!mt.test(t)) {
      return null;
    }
    var e = t.length;
    if (e <= 5) {
      return {
        r: gt(t, 1) * 17,
        g: gt(t, 2) * 17,
        b: gt(t, 3) * 17,
        a: e === 5 ? gt(t, 4) * 17 / 255 : 1
      };
    } else if (e === 7 || e === 9) {
      return {
        r: yt(t, 1),
        g: yt(t, 3),
        b: yt(t, 5),
        a: e === 9 ? yt(t, 7) / 255 : 1
      };
    } else {
      return null;
    }
  }, "hex"], [function (t) {
    var e = Xt.exec(t) || Rt.exec(t);
    if (e) {
      if (e[2] !== e[4] || e[4] !== e[6]) {
        return null;
      } else {
        return ft({
          r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
          g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
          b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
          a: e[7] === undefined ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
        });
      }
    } else {
      return null;
    }
  }, "rgb"], [function (t) {
    var e;
    var s;
    var i = St.exec(t) || Tt.exec(t);
    if (i) {
      return Ct(Mt({
        h: (e = i[1], s = i[2], s === undefined && (s = "deg"), Number(e) * (at[s.toLowerCase()] || 1)),
        s: Number(i[3]),
        l: Number(i[4]),
        a: i[5] === undefined ? 1 : Number(i[5]) / (i[6] ? 100 : 1)
      }));
    } else {
      return null;
    }
  }, "hsl"]],
  object: [[function (t) {
    var e = t.r;
    var s = t.g;
    var i = t.b;
    var r = t.a;
    var n = r === undefined ? 1 : r;
    if (ot(e) && ot(s) && ot(i)) {
      return ft({
        r: Number(e),
        g: Number(s),
        b: Number(i),
        a: Number(n)
      });
    } else {
      return null;
    }
  }, "rgb"], [function (t) {
    var e = t.h;
    var s = t.s;
    var i = t.l;
    var r = t.a;
    var n = r === undefined ? 1 : r;
    if (ot(e) && ot(s) && ot(i)) {
      return Ct(Mt({
        h: Number(e),
        s: Number(s),
        l: Number(i),
        a: Number(n)
      }));
    } else {
      return null;
    }
  }, "hsl"], [function (t) {
    var e = t.h;
    var s = t.s;
    var i = t.v;
    var r = t.a;
    var n = r === undefined ? 1 : r;
    if (ot(e) && ot(s) && ot(i)) {
      return wt(function (t) {
        return {
          h: lt(t.h),
          s: dt(t.s, 0, 100),
          v: dt(t.v, 0, 100),
          a: dt(t.a)
        };
      }({
        h: Number(e),
        s: Number(s),
        v: Number(i),
        a: Number(n)
      }));
    } else {
      return null;
    }
  }, "hsv"]]
};
var Pt = function (t, e) {
  for (var s = 0; s < e.length; s++) {
    var i = e[s][0](t);
    if (i) {
      return [i, e[s][1]];
    }
  }
  return [null, undefined];
};
var Ft = function (t, e) {
  var s = At(t);
  return {
    h: s.h,
    s: dt(s.s + e * 100, 0, 100),
    l: s.l,
    a: s.a
  };
};
var Ot = function (t) {
  return (t.r * 299 + t.g * 587 + t.b * 114) / 1000 / 255;
};
var It = function (t, e) {
  var s = At(t);
  return {
    h: s.h,
    s: s.s,
    l: dt(s.l + e * 100, 0, 100),
    a: s.a
  };
};
var kt = function () {
  function t(t) {
    this.parsed = function (t) {
      if (typeof t == "string") {
        return Pt(t.trim(), Yt.string);
      } else if (typeof t == "object" && t !== null) {
        return Pt(t, Yt.object);
      } else {
        return [null, undefined];
      }
    }(t)[0];
    this.rgba = this.parsed || {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  t.prototype.isValid = function () {
    return this.parsed !== null;
  };
  t.prototype.brightness = function () {
    return ht(Ot(this.rgba), 2);
  };
  t.prototype.isDark = function () {
    return Ot(this.rgba) < 0.5;
  };
  t.prototype.isLight = function () {
    return Ot(this.rgba) >= 0.5;
  };
  t.prototype.toHex = function () {
    e = (t = pt(this.rgba)).r;
    s = t.g;
    i = t.b;
    n = (r = t.a) < 1 ? _t(ht(r * 255)) : "";
    return "#" + _t(e) + _t(s) + _t(i) + n;
    var t;
    var e;
    var s;
    var i;
    var r;
    var n;
  };
  t.prototype.toRgb = function () {
    return pt(this.rgba);
  };
  t.prototype.toRgbString = function () {
    e = (t = pt(this.rgba)).r;
    s = t.g;
    i = t.b;
    if ((r = t.a) < 1) {
      return "rgba(" + e + ", " + s + ", " + i + ", " + r + ")";
    } else {
      return "rgb(" + e + ", " + s + ", " + i + ")";
    }
    var t;
    var e;
    var s;
    var i;
    var r;
  };
  t.prototype.toHsl = function () {
    return Et(At(this.rgba));
  };
  t.prototype.toHslString = function () {
    e = (t = Et(At(this.rgba))).h;
    s = t.s;
    i = t.l;
    if ((r = t.a) < 1) {
      return "hsla(" + e + ", " + s + "%, " + i + "%, " + r + ")";
    } else {
      return "hsl(" + e + ", " + s + "%, " + i + "%)";
    }
    var t;
    var e;
    var s;
    var i;
    var r;
  };
  t.prototype.toHsv = function () {
    t = vt(this.rgba);
    return {
      h: ct(t.h),
      s: ht(t.s),
      v: ht(t.v),
      a: ut(t.a)
    };
    var t;
  };
  t.prototype.invert = function () {
    return Lt({
      r: 255 - (t = this.rgba).r,
      g: 255 - t.g,
      b: 255 - t.b,
      a: t.a
    });
    var t;
  };
  t.prototype.saturate = function (t = 0.1) {
    return Lt(Ft(this.rgba, t));
  };
  t.prototype.desaturate = function (t = 0.1) {
    return Lt(Ft(this.rgba, -t));
  };
  t.prototype.grayscale = function () {
    return Lt(Ft(this.rgba, -1));
  };
  t.prototype.lighten = function (t = 0.1) {
    return Lt(It(this.rgba, t));
  };
  t.prototype.darken = function (t = 0.1) {
    return Lt(It(this.rgba, -t));
  };
  t.prototype.rotate = function (t = 15) {
    return this.hue(At(this.rgba).h + t);
  };
  t.prototype.alpha = function (t) {
    if (typeof t == "number") {
      return Lt({
        r: (e = this.rgba).r,
        g: e.g,
        b: e.b,
        a: t
      });
    } else {
      return ut(this.rgba.a);
    }
    var e;
  };
  t.prototype.hue = function (t) {
    var e = At(this.rgba);
    if (typeof t == "number") {
      return Lt({
        h: t,
        s: e.s,
        l: e.l,
        a: e.a
      });
    } else {
      return ct(e.h);
    }
  };
  t.prototype.isEqual = function (t) {
    return this.toHex() === Lt(t).toHex();
  };
  return t;
}();
var Lt = function (t) {
  if (t instanceof kt) {
    return t;
  } else {
    return new kt(t);
  }
};
var Dt = [];
(function (t) {
  t.forEach(function (t) {
    if (Dt.indexOf(t) < 0) {
      t(kt, Yt);
      Dt.push(t);
    }
  });
})([function (t, e) {
  var s = {
    white: "#ffffff",
    bisque: "#ffe4c4",
    blue: "#0000ff",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    azure: "#f0ffff",
    whitesmoke: "#f5f5f5",
    papayawhip: "#ffefd5",
    plum: "#dda0dd",
    blanchedalmond: "#ffebcd",
    black: "#000000",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    cornsilk: "#fff8dc",
    cornflowerblue: "#6495ed",
    burlywood: "#deb887",
    aquamarine: "#7fffd4",
    beige: "#f5f5dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkkhaki: "#bdb76b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    peachpuff: "#ffdab9",
    darkmagenta: "#8b008b",
    darkred: "#8b0000",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkslateblue: "#483d8b",
    gray: "#808080",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    wheat: "#f5deb3",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    ghostwhite: "#f8f8ff",
    darkviolet: "#9400d3",
    magenta: "#ff00ff",
    green: "#008000",
    dodgerblue: "#1e90ff",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    blueviolet: "#8a2be2",
    forestgreen: "#228b22",
    lawngreen: "#7cfc00",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    fuchsia: "#ff00ff",
    brown: "#a52a2a",
    maroon: "#800000",
    mediumblue: "#0000cd",
    lightcoral: "#f08080",
    darkturquoise: "#00ced1",
    lightcyan: "#e0ffff",
    ivory: "#fffff0",
    lightyellow: "#ffffe0",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    linen: "#faf0e6",
    mediumaquamarine: "#66cdaa",
    lemonchiffon: "#fffacd",
    lime: "#00ff00",
    khaki: "#f0e68c",
    mediumseagreen: "#3cb371",
    limegreen: "#32cd32",
    mediumspringgreen: "#00fa9a",
    lightskyblue: "#87cefa",
    lightblue: "#add8e6",
    midnightblue: "#191970",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    mintcream: "#f5fffa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    navajowhite: "#ffdead",
    navy: "#000080",
    mediumvioletred: "#c71585",
    powderblue: "#b0e0e6",
    palegoldenrod: "#eee8aa",
    oldlace: "#fdf5e6",
    paleturquoise: "#afeeee",
    mediumturquoise: "#48d1cc",
    mediumorchid: "#ba55d3",
    rebeccapurple: "#663399",
    lightsteelblue: "#b0c4de",
    mediumslateblue: "#7b68ee",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    orchid: "#da70d6",
    mediumpurple: "#9370db",
    purple: "#800080",
    pink: "#ffc0cb",
    skyblue: "#87ceeb",
    springgreen: "#00ff7f",
    palegreen: "#98fb98",
    red: "#ff0000",
    yellow: "#ffff00",
    slateblue: "#6a5acd",
    lavenderblush: "#fff0f5",
    peru: "#cd853f",
    palevioletred: "#db7093",
    violet: "#ee82ee",
    teal: "#008080",
    slategray: "#708090",
    slategrey: "#708090",
    aliceblue: "#f0f8ff",
    darkseagreen: "#8fbc8f",
    darkolivegreen: "#556b2f",
    greenyellow: "#adff2f",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    tomato: "#ff6347",
    silver: "#c0c0c0",
    sienna: "#a0522d",
    lavender: "#e6e6fa",
    lightgreen: "#90ee90",
    orange: "#ffa500",
    orangered: "#ff4500",
    steelblue: "#4682b4",
    royalblue: "#4169e1",
    turquoise: "#40e0d0",
    yellowgreen: "#9acd32",
    salmon: "#fa8072",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    darksalmon: "#e9967a",
    lightgoldenrodyellow: "#fafad2",
    snow: "#fffafa",
    lightgrey: "#d3d3d3",
    lightgray: "#d3d3d3",
    dimgray: "#696969",
    dimgrey: "#696969",
    olivedrab: "#6b8e23",
    olive: "#808000"
  };
  var i = {};
  for (var r in s) {
    i[s[r]] = r;
  }
  var n = {};
  t.prototype.toName = function (e) {
    if (!this.rgba.a && !this.rgba.r && !this.rgba.g && !this.rgba.b) {
      return "transparent";
    }
    var r;
    var a;
    var o = i[this.toHex()];
    if (o) {
      return o;
    }
    if (e == null ? undefined : e.closest) {
      var h = this.toRgb();
      var u = Infinity;
      var d = "black";
      if (!n.length) {
        for (var l in s) {
          n[l] = new t(s[l]).toRgb();
        }
      }
      for (var c in s) {
        r = h;
        a = n[c];
        var f = Math.pow(r.r - a.r, 2) + Math.pow(r.g - a.g, 2) + Math.pow(r.b - a.b, 2);
        if (f < u) {
          u = f;
          d = c;
        }
      }
      return d;
    }
  };
  e.string.push([function (e) {
    var i = e.toLowerCase();
    var r = i === "transparent" ? "#0000" : s[i];
    if (r) {
      return new t(r).toRgb();
    } else {
      return null;
    }
  }, "name"]);
}]);
var Nt = class t {
  constructor(t = 16777215) {
    this._value = null;
    this._components = new Float32Array(4);
    this._components.fill(1);
    this._int = 16777215;
    this.value = t;
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(t) {
    this.value = t;
    return this;
  }
  set value(e) {
    if (e instanceof t) {
      this._value = this._cloneSource(e._value);
      this._int = e._int;
      this._components.set(e._components);
    } else {
      if (e === null) {
        throw new Error("Cannot set Color#value to null");
      }
      if (this._value === null || !this._isSourceEqual(this._value, e)) {
        this._value = this._cloneSource(e);
        this._normalize(this._value);
      }
    }
  }
  get value() {
    return this._value;
  }
  _cloneSource(t) {
    if (typeof t == "string" || typeof t == "number" || t instanceof Number || t === null) {
      return t;
    } else if (Array.isArray(t) || ArrayBuffer.isView(t)) {
      return t.slice(0);
    } else if (typeof t == "object" && t !== null) {
      return {
        ...t
      };
    } else {
      return t;
    }
  }
  _isSourceEqual(t, e) {
    const s = typeof t;
    if (s !== typeof e) {
      return false;
    }
    if (s === "number" || s === "string" || t instanceof Number) {
      return t === e;
    }
    if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      return t.length === e.length && t.every((t, s) => t === e[s]);
    }
    if (t !== null && e !== null) {
      const s = Object.keys(t);
      const i = Object.keys(e);
      return s.length === i.length && s.every(s => t[s] === e[s]);
    }
    return t === e;
  }
  toRgba() {
    const [t, e, s, i] = this._components;
    return {
      r: t,
      g: e,
      b: s,
      a: i
    };
  }
  toRgb() {
    const [t, e, s] = this._components;
    return {
      r: t,
      g: e,
      b: s
    };
  }
  toRgbaString() {
    const [t, e, s] = this.toUint8RgbArray();
    return `rgba(${t},${e},${s},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [e, s, i] = this._components;
    this._arrayRgb ||= [];
    t ||= this._arrayRgb;
    t[0] = Math.round(e * 255);
    t[1] = Math.round(s * 255);
    t[2] = Math.round(i * 255);
    return t;
  }
  toArray(t) {
    this._arrayRgba ||= [];
    t ||= this._arrayRgba;
    const [e, s, i, r] = this._components;
    t[0] = e;
    t[1] = s;
    t[2] = i;
    t[3] = r;
    return t;
  }
  toRgbArray(t) {
    this._arrayRgb ||= [];
    t ||= this._arrayRgb;
    const [e, s, i] = this._components;
    t[0] = e;
    t[1] = s;
    t[2] = i;
    return t;
  }
  toNumber() {
    return this._int;
  }
  toBgrNumber() {
    const [t, e, s] = this.toUint8RgbArray();
    return (s << 16) + (e << 8) + t;
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  multiply(e) {
    const [s, i, r, n] = t._temp.setValue(e)._components;
    this._components[0] *= s;
    this._components[1] *= i;
    this._components[2] *= r;
    this._components[3] *= n;
    this._refreshInt();
    this._value = null;
    return this;
  }
  premultiply(t, e = true) {
    if (e) {
      this._components[0] *= t;
      this._components[1] *= t;
      this._components[2] *= t;
    }
    this._components[3] = t;
    this._refreshInt();
    this._value = null;
    return this;
  }
  toPremultiplied(t, e = true) {
    if (t === 1) {
      return -16777216 + this._int;
    }
    if (t === 0) {
      if (e) {
        return 0;
      } else {
        return this._int;
      }
    }
    let s = this._int >> 16 & 255;
    let i = this._int >> 8 & 255;
    let r = this._int & 255;
    if (e) {
      s = s * t + 0.5 | 0;
      i = i * t + 0.5 | 0;
      r = r * t + 0.5 | 0;
    }
    return (t * 255 << 24) + (s << 16) + (i << 8) + r;
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  setAlpha(t) {
    this._components[3] = this._clamp(t);
    this._value = null;
    return this;
  }
  _normalize(e) {
    let s;
    let i;
    let r;
    let n;
    if ((typeof e == "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
      s = (e >> 16 & 255) / 255;
      i = (e >> 8 & 255) / 255;
      r = (e & 255) / 255;
      n = 1;
    } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) {
      e = this._clamp(e);
      [s, i, r, n = 1] = e;
    } else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) {
      e = this._clamp(e, 0, 255);
      [s, i, r, n = 255] = e;
      s /= 255;
      i /= 255;
      r /= 255;
      n /= 255;
    } else if (typeof e == "string" || typeof e == "object") {
      if (typeof e == "string") {
        const s = t.HEX_PATTERN.exec(e);
        if (s) {
          e = `#${s[2]}`;
        }
      }
      const a = Lt(e);
      if (a.isValid()) {
        ({
          r: s,
          g: i,
          b: r,
          a: n
        } = a.rgba);
        s /= 255;
        i /= 255;
        r /= 255;
      }
    }
    if (s === undefined) {
      throw new Error(`Unable to convert color ${e}`);
    }
    this._components[0] = s;
    this._components[1] = i;
    this._components[2] = r;
    this._components[3] = n;
    this._refreshInt();
  }
  _refreshInt() {
    this._clamp(this._components);
    const [t, e, s] = this._components;
    this._int = (t * 255 << 16) + (e * 255 << 8) + (s * 255 | 0);
  }
  _clamp(t, e = 0, s = 1) {
    if (typeof t == "number") {
      return Math.min(Math.max(t, e), s);
    } else {
      t.forEach((i, r) => {
        t[r] = Math.min(Math.max(i, e), s);
      });
      return t;
    }
  }
  static isColorLike(e) {
    return e != null && (typeof e == "number" || typeof e == "string" || e instanceof Number || e instanceof t || Array.isArray(e) || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Float32Array || e.r !== undefined && e.g !== undefined && e.b !== undefined || e.r !== undefined && e.g !== undefined && e.b !== undefined && e.a !== undefined || e.h !== undefined && e.s !== undefined && e.l !== undefined || e.h !== undefined && e.s !== undefined && e.l !== undefined && e.a !== undefined || e.h !== undefined && e.s !== undefined && e.v !== undefined || e.h !== undefined && e.s !== undefined && e.v !== undefined && e.a !== undefined);
  }
};
Nt.shared = new Nt();
Nt._temp = new Nt();
Nt.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
var $t = Nt;
var Wt = 0;
function zt(...t) {
  if (Wt !== 500) {
    Wt++;
  }
}
var Ut = {
  _registeredResources: new Set(),
  register(t) {
    this._registeredResources.add(t);
  },
  unregister(t) {
    this._registeredResources.delete(t);
  },
  release() {
    this._registeredResources.forEach(t => t.clear());
  },
  get registeredCount() {
    return this._registeredResources.size;
  },
  isRegistered(t) {
    return this._registeredResources.has(t);
  },
  reset() {
    this._registeredResources.clear();
  }
};
var Gt = class {
  constructor(t, e) {
    this._pool = [];
    this._count = 0;
    this._index = 0;
    this._classType = t;
    if (e) {
      this.prepopulate(e);
    }
  }
  prepopulate(t) {
    for (let e = 0; e < t; e++) {
      this._pool[this._index++] = new this._classType();
    }
    this._count += t;
  }
  get(t) {
    let e;
    if (this._index > 0) {
      e = this._pool[--this._index];
    } else {
      e = new this._classType();
      this._count++;
    }
    e.init?.(t);
    return e;
  }
  return(t) {
    t.reset?.();
    this._pool[this._index++] = t;
  }
  get totalSize() {
    return this._count;
  }
  get totalFree() {
    return this._index;
  }
  get totalUsed() {
    return this._count - this._index;
  }
  clear() {
    if (this._pool.length > 0 && this._pool[0].destroy) {
      for (let t = 0; t < this._index; t++) {
        this._pool[t].destroy();
      }
    }
    this._pool.length = 0;
    this._count = 0;
    this._index = 0;
  }
};
var Bt = class {
  constructor() {
    this._poolsByClass = new Map();
  }
  prepopulate(t, e) {
    this.getPool(t).prepopulate(e);
  }
  get(t, e) {
    return this.getPool(t).get(e);
  }
  return(t) {
    this.getPool(t.constructor).return(t);
  }
  getPool(t) {
    if (!this._poolsByClass.has(t)) {
      this._poolsByClass.set(t, new Gt(t));
    }
    return this._poolsByClass.get(t);
  }
  stats() {
    const t = {};
    this._poolsByClass.forEach(e => {
      const s = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
      t[s] = {
        free: e.totalFree,
        used: e.totalUsed,
        size: e.totalSize
      };
    });
    return t;
  }
  clear() {
    this._poolsByClass.forEach(t => t.clear());
    this._poolsByClass.clear();
  }
};
var Vt = new Bt();
function Ht(t, e) {
  if (t === 16777215 || !e) {
    return e;
  }
  if (e === 16777215 || !t) {
    return t;
  }
  return (((t >> 16 & 255) * (e >> 16 & 255) / 255 | 0) << 16) + (((t >> 8 & 255) * (e >> 8 & 255) / 255 | 0) << 8) + ((t & 255) * (e & 255) / 255 | 0);
}
Ut.register(Vt);
var jt = class {
  constructor() {
    this.uid = O("instructionSet");
    this.instructions = [];
    this.instructionSize = 0;
    this.renderables = [];
    this.gcTick = 0;
  }
  reset() {
    this.instructionSize = 0;
  }
  destroy() {
    if (this.renderPipes) {
      for (const t in this.renderPipes) {
        this.renderPipes[t].destroyInstructionSet?.(this);
      }
    }
    this.instructions.length = 0;
    this.renderables.length = 0;
    this.renderPipes = null;
    this.gcTick = 0;
  }
  add(t) {
    this.instructions[this.instructionSize++] = t;
  }
  log() {
    this.instructions.length = this.instructionSize;
  }
};
var qt = class {
  constructor() {
    this._screenSizes = new Map();
    this._widths = [];
    this._heights = [];
    this._logicalWidths = [];
    this._logicalHeights = [];
  }
  get size() {
    return this._screenSizes.size;
  }
  set(t, e, s, i = 1) {
    const r = this._screenSizes.get(t);
    return (!r || r.pixelWidth !== e || r.pixelHeight !== s || r.resolution !== i) && (this._screenSizes.set(t, {
      pixelWidth: e,
      pixelHeight: s,
      resolution: i
    }), this._update(), true);
  }
  remove(t) {
    return !!this._screenSizes.delete(t) && (this._update(), true);
  }
  getFittingWidth(t, e = 1) {
    return this._getFittingAxis(t, e, this._widths, this._logicalWidths);
  }
  getFittingHeight(t, e = 1) {
    return this._getFittingAxis(t, e, this._heights, this._logicalHeights);
  }
  hasWidth(t) {
    return this._widths.includes(t);
  }
  hasHeight(t) {
    return this._heights.includes(t);
  }
  _getFittingAxis(t, e, s, i) {
    let r;
    for (let n = 0; n < s.length; n++) {
      if (s[n] >= t) {
        r = s[n];
        break;
      }
    }
    for (let n = 0; n < i.length; n++) {
      const s = Math.ceil(i[n] * e - 0.000001);
      if (s >= t) {
        if (r === undefined) {
          return s;
        } else {
          return Math.min(r, s);
        }
      }
    }
    return r;
  }
  _update() {
    const t = [...this._screenSizes.values()];
    this._widths = Kt(t.map(t => t.pixelWidth));
    this._heights = Kt(t.map(t => t.pixelHeight));
    this._logicalWidths = Kt(t.map(t => t.pixelWidth / t.resolution));
    this._logicalHeights = Kt(t.map(t => t.pixelHeight / t.resolution));
  }
};
function Kt(t) {
  return t.filter((e, s) => t.indexOf(e) === s).sort((t, e) => t - e);
}
var Zt = {
  createCanvas: (t, e) => {
    const s = document.createElement("canvas");
    s.width = t;
    s.height = e;
    return s;
  },
  createImage: () => new Image(),
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (t, e) => fetch(t, e),
  parseXML: t => new DOMParser().parseFromString(t, "text/xml")
};
var Qt = Zt;
var Jt = {
  get: () => Qt,
  set(t) {
    Qt = t;
  }
};
var te = Object.create(null);
var ee = Object.create(null);
function se(t, e) {
  let s = ee[t];
  if (s === undefined) {
    if (te[e] === undefined) {
      te[e] = 1;
    }
    ee[t] = s = te[e]++;
  }
  return s;
}
function ie(t) {
  return t.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
}
var re;
var ne;
var ae = new RegExp("(?:layout\\s*\\(\\s*location\\s*=\\s*(\\d+)\\s*\\)\\s*)?\\bout\\s+(?:(?:highp|mediump|lowp)\\s+)?\\w+\\s+\\w+\\s*(?:\\[\\s*(\\d+)\\s*\\])?\\s*;", "g");
function oe(t) {
  if (!t.includes("#version 300 es")) {
    if (t.includes("gl_FragData")) {
      return null;
    } else {
      return 1;
    }
  }
  const e = ie(t);
  let s;
  let i = 0;
  while ((s = ae.exec(e)) !== null) {
    const t = s[1] === undefined ? 0 : parseInt(s[1], 10);
    i |= (1 << (s[2] === undefined ? 1 : parseInt(s[2], 10))) - 1 << t;
  }
  ae.lastIndex = 0;
  return i || (/\bout\b/.test(e) ? null : 0);
}
function he() {
  if (!re || !!re?.isContextLost()) {
    re = Jt.get().createCanvas().getContext("webgl", {});
  }
  return re;
}
function ue() {
  if (!ne) {
    ne = "mediump";
    const t = he();
    if (t && t.getShaderPrecisionFormat) {
      ne = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision ? "highp" : "mediump";
    }
  }
  return ne;
}
function de(t, e, s) {
  if (e) {
    return t;
  } else if (s) {
    return `\n\n        #ifdef GL_ES // This checks if it is WebGL1\n        #define in varying\n        #define finalColor gl_FragColor\n        #define texture texture2D\n        #endif\n        ${t = t.replace("out vec4 finalColor;", "")}\n        `;
  } else {
    return `\n\n        #ifdef GL_ES // This checks if it is WebGL1\n        #define in attribute\n        #define out varying\n        #endif\n        ${t}\n        `;
  }
}
var le = /\buniform\s+([iu]?sampler\w+)/g;
var ce = /\bprecision\s+\w+\s+([iu]?sampler\w+)\s*;/g;
var fe = {
  sampler2D: "lowp",
  samplerCube: "lowp"
};
function pe(t, e, s) {
  const i = s ? e.maxSupportedFragmentPrecision : e.maxSupportedVertexPrecision;
  if (t.substring(0, 9) !== "precision") {
    let r = s ? e.requestedFragmentPrecision : e.requestedVertexPrecision;
    if (r === "highp" && i !== "highp") {
      r = "mediump";
    }
    t = `precision ${r} float;\n${t}`;
  } else if (i !== "highp" && t.substring(0, 15) === "precision highp") {
    t = t.replace("precision highp", "precision mediump");
  }
  return function (t, e) {
    const s = new Set();
    let i = "";
    for (const [, r] of t.matchAll(ce)) {
      s.add(r);
    }
    for (const [, r] of t.matchAll(le)) {
      if (!s.has(r)) {
        s.add(r);
        i += `precision ${fe[r] ?? e} ${r};\n`;
      }
    }
    return i + t;
  }(t, e.maxSupportedFragmentPrecision === "highp" ? "highp" : "mediump");
}
function me(t, e) {
  if (e) {
    return `#version 300 es\n${t}`;
  } else {
    return t;
  }
}
var ge = {};
var ye = {};
function xe(t, {
  name: e = "pixi-program"
}, s = true) {
  e = e.replace(/\s+/g, "-");
  const i = s ? ge : ye;
  if (i[e += s ? "-fragment" : "-vertex"]) {
    i[e]++;
    e += `-${i[e]}`;
  } else {
    i[e] = 1;
  }
  if (t.indexOf("#define SHADER_NAME") !== -1) {
    return t;
  } else {
    return `#define SHADER_NAME ${e}\n${t}`;
  }
}
function be(t, e) {
  if (e) {
    return t.replace("#version 300 es", "");
  } else {
    return t;
  }
}
var _e = {
  stripVersion: be,
  ensurePrecision: pe,
  addProgramDefines: de,
  setProgramName: xe,
  insertVersion: me
};
var ve = Object.create(null);
var we = class t {
  constructor(e) {
    const s = (e = {
      ...t.defaultOptions,
      ...e
    }).fragment.indexOf("#version 300 es") !== -1;
    const i = {
      stripVersion: s,
      ensurePrecision: {
        requestedFragmentPrecision: e.preferredFragmentPrecision,
        requestedVertexPrecision: e.preferredVertexPrecision,
        maxSupportedVertexPrecision: "highp",
        maxSupportedFragmentPrecision: ue()
      },
      setProgramName: {
        name: e.name
      },
      addProgramDefines: s,
      insertVersion: s
    };
    let r = e.fragment;
    let n = e.vertex;
    Object.keys(_e).forEach(t => {
      const e = i[t];
      r = _e[t](r, e, true);
      n = _e[t](n, e, false);
    });
    this.fragment = r;
    this.vertex = n;
    this.transformFeedbackVaryings = e.transformFeedbackVaryings;
    this._key = se(`${this.vertex}:${this.fragment}`, "gl-program");
  }
  get fragmentOutputMask() {
    if (this._fragmentOutputMask === undefined) {
      this._fragmentOutputMask = oe(this.fragment);
    }
    return this._fragmentOutputMask;
  }
  destroy() {
    this.fragment = null;
    this.vertex = null;
    this._attributeData = null;
    this._uniformData = null;
    this._uniformBlockData = null;
    this.transformFeedbackVaryings = null;
    ve[this._cacheKey] = null;
  }
  static from(e) {
    const s = `${e.vertex}:${e.fragment}`;
    if (!ve[s]) {
      ve[s] = new t(e);
      ve[s]._cacheKey = s;
    }
    return ve[s];
  }
};
we.defaultOptions = {
  preferredVertexPrecision: "highp",
  preferredFragmentPrecision: "mediump"
};
var Me = we;
var Ee = {
  uint8x2: {
    size: 2,
    stride: 2,
    normalised: false
  },
  uint8x4: {
    size: 4,
    stride: 4,
    normalised: false
  },
  sint8x2: {
    size: 2,
    stride: 2,
    normalised: false
  },
  sint8x4: {
    size: 4,
    stride: 4,
    normalised: false
  },
  unorm8x2: {
    size: 2,
    stride: 2,
    normalised: true
  },
  unorm8x4: {
    size: 4,
    stride: 4,
    normalised: true
  },
  snorm8x2: {
    size: 2,
    stride: 2,
    normalised: true
  },
  snorm8x4: {
    size: 4,
    stride: 4,
    normalised: true
  },
  uint16x2: {
    size: 2,
    stride: 4,
    normalised: false
  },
  uint16x4: {
    size: 4,
    stride: 8,
    normalised: false
  },
  sint16x2: {
    size: 2,
    stride: 4,
    normalised: false
  },
  sint16x4: {
    size: 4,
    stride: 8,
    normalised: false
  },
  unorm16x2: {
    size: 2,
    stride: 4,
    normalised: true
  },
  unorm16x4: {
    size: 4,
    stride: 8,
    normalised: true
  },
  snorm16x2: {
    size: 2,
    stride: 4,
    normalised: true
  },
  snorm16x4: {
    size: 4,
    stride: 8,
    normalised: true
  },
  float16x2: {
    size: 2,
    stride: 4,
    normalised: false
  },
  float16x4: {
    size: 4,
    stride: 8,
    normalised: false
  },
  float32: {
    size: 1,
    stride: 4,
    normalised: false
  },
  float32x2: {
    size: 2,
    stride: 8,
    normalised: false
  },
  float32x3: {
    size: 3,
    stride: 12,
    normalised: false
  },
  float32x4: {
    size: 4,
    stride: 16,
    normalised: false
  },
  uint32: {
    size: 1,
    stride: 4,
    normalised: false
  },
  uint32x2: {
    size: 2,
    stride: 8,
    normalised: false
  },
  uint32x3: {
    size: 3,
    stride: 12,
    normalised: false
  },
  uint32x4: {
    size: 4,
    stride: 16,
    normalised: false
  },
  sint32: {
    size: 1,
    stride: 4,
    normalised: false
  },
  sint32x2: {
    size: 2,
    stride: 8,
    normalised: false
  },
  sint32x3: {
    size: 3,
    stride: 12,
    normalised: false
  },
  sint32x4: {
    size: 4,
    stride: 16,
    normalised: false
  }
};
function Ce(t) {
  return Ee[t] ?? Ee.float32;
}
var Ae = {
  f32: "float32",
  "vec2<f32>": "float32x2",
  "vec3<f32>": "float32x3",
  "vec4<f32>": "float32x4",
  vec2f: "float32x2",
  vec3f: "float32x3",
  vec4f: "float32x4",
  i32: "sint32",
  "vec2<i32>": "sint32x2",
  "vec3<i32>": "sint32x3",
  "vec4<i32>": "sint32x4",
  vec2i: "sint32x2",
  vec3i: "sint32x3",
  vec4i: "sint32x4",
  u32: "uint32",
  "vec2<u32>": "uint32x2",
  "vec3<u32>": "uint32x3",
  "vec4<u32>": "uint32x4",
  vec2u: "uint32x2",
  vec3u: "uint32x3",
  vec4u: "uint32x4",
  bool: "uint32",
  "vec2<bool>": "uint32x2",
  "vec3<bool>": "uint32x3",
  "vec4<bool>": "uint32x4"
};
var Se = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;
function Te(t, e) {
  let s;
  while ((s = Se.exec(t)) !== null) {
    const t = Ae[s[3]] ?? "float32";
    e[s[2]] = {
      location: parseInt(s[1], 10),
      format: t,
      stride: Ce(t).stride,
      offset: 0,
      instance: false,
      start: 0
    };
  }
  Se.lastIndex = 0;
}
function Xe({
  source: t,
  entryPoint: e
}) {
  const s = {};
  const i = ie(t);
  const r = i.indexOf(`fn ${e}(`);
  if (r === -1) {
    return s;
  }
  const n = i.indexOf("->", r);
  if (n === -1) {
    return s;
  }
  const a = i.substring(r, n);
  Te(a, s);
  if (Object.keys(s).length === 0) {
    const t = a.match(/\(\s*\w+\s*:\s*(\w+)/);
    if (t) {
      const e = t[1];
      const r = new RegExp(`struct\\s+${e}\\s*\\{([^}]+)\\}`, "s");
      const n = i.match(r);
      if (n) {
        Te(n[1], s);
      }
    }
  }
  return s;
}
var Re = /@location\(\s*(\d+)\s*\)/g;
function Ye(t) {
  let e;
  let s = 0;
  while ((e = Re.exec(t)) !== null) {
    s |= 1 << parseInt(e[1], 10);
  }
  Re.lastIndex = 0;
  return s;
}
function Pe({
  source: t,
  entryPoint: e
}) {
  if (!e) {
    return null;
  }
  const s = ie(t);
  const i = new RegExp(`fn\\s+${e}\\s*\\(`).exec(s);
  if (!i) {
    return null;
  }
  let r = 1;
  let n = i.index + i[0].length;
  while (n < s.length && r > 0) {
    const t = s[n++];
    if (t === "(") {
      r++;
    } else if (t === ")") {
      r--;
    }
  }
  const a = s.indexOf("{", n);
  if (a === -1) {
    return null;
  }
  const o = s.substring(n, a).trim();
  if (!o.startsWith("->")) {
    return 0;
  }
  const h = o.substring(2).trim();
  if (h.startsWith("@builtin")) {
    return 0;
  }
  if (h.startsWith("@location")) {
    return Ye(h);
  }
  if (!/^\w+$/.test(h)) {
    return null;
  }
  const u = new RegExp(`struct\\s+${h}\\s*\\{([^}]*)\\}`).exec(s);
  if (u) {
    return Ye(u[1]);
  } else {
    return null;
  }
}
function Fe(t) {
  const e = /@group\((\d+)\)/;
  const s = /@binding\((\d+)\)/;
  const i = /var(<[^>]+>)? (\w+)/;
  const r = /:\s*([\w<>]+)/;
  const n = /(\w+)\s*:\s*([\w\<\>]+)/g;
  const a = /struct\s+(\w+)/;
  const o = t.match(/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g)?.map(t => {
    const n = t.match(i);
    const a = n?.[1] ?? "";
    let o;
    if (a === "<uniform>") {
      o = "uniform";
    } else if (a.startsWith("<storage")) {
      o = "storage";
    }
    return {
      group: parseInt(t.match(e)[1], 10),
      binding: parseInt(t.match(s)[1], 10),
      name: n[2],
      accessMode: o,
      type: t.match(r)[1]
    };
  });
  if (o) {
    return {
      groups: o,
      structs: t.match(/struct\s+(\w+)\s*{([^}]+)}/g)?.map(t => {
        const e = t.match(a)[1];
        const s = t.match(n).reduce((t, e) => {
          const [s, i] = e.split(":");
          t[s.trim()] = i.trim();
          return t;
        }, {});
        if (s) {
          return {
            name: e,
            members: s
          };
        } else {
          return null;
        }
      }).filter(({
        name: t
      }) => o.some(e => e.type === t || e.type.includes(`<${t}>`))) ?? []
    };
  } else {
    return {
      groups: [],
      structs: []
    };
  }
}
var Oe = (t => {
  t[t.VERTEX = 1] = "VERTEX";
  t[t.FRAGMENT = 2] = "FRAGMENT";
  t[t.COMPUTE = 4] = "COMPUTE";
  return t;
})(Oe || {});
function Ie(t) {
  if (t.endsWith("<u32>")) {
    return "uint";
  } else if (t.endsWith("<i32>")) {
    return "sint";
  } else {
    return "float";
  }
}
function ke({
  groups: t
}) {
  const e = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    e[i.group] ||= [];
    if (i.accessMode === "uniform") {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        buffer: {
          type: "uniform"
        }
      });
    } else if (i.accessMode === "storage") {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        buffer: {
          type: "read-only-storage"
        }
      });
    } else if (i.type === "sampler") {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        sampler: {
          type: "filtering"
        }
      });
    } else if (i.type === "sampler_comparison") {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        sampler: {
          type: "comparison"
        }
      });
    } else if (i.type === "texture_2d" || i.type.startsWith("texture_2d<")) {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        texture: {
          sampleType: Ie(i.type),
          viewDimension: "2d",
          multisampled: false
        }
      });
    } else if (i.type === "texture_depth_2d") {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        texture: {
          sampleType: "depth",
          viewDimension: "2d",
          multisampled: false
        }
      });
    } else if (i.type === "texture_depth_2d_array") {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        texture: {
          sampleType: "depth",
          viewDimension: "2d-array",
          multisampled: false
        }
      });
    } else if (i.type === "texture_2d_array" || i.type.startsWith("texture_2d_array<")) {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        texture: {
          sampleType: Ie(i.type),
          viewDimension: "2d-array",
          multisampled: false
        }
      });
    } else if (i.type === "texture_3d" || i.type.startsWith("texture_3d<")) {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        texture: {
          sampleType: Ie(i.type),
          viewDimension: "3d",
          multisampled: false
        }
      });
    } else if (i.type === "texture_cube" || i.type.startsWith("texture_cube<")) {
      e[i.group].push({
        binding: i.binding,
        visibility: Oe.VERTEX | Oe.FRAGMENT,
        texture: {
          sampleType: Ie(i.type),
          viewDimension: "cube",
          multisampled: false
        }
      });
    }
  }
  for (let s = 0; s < e.length; s++) {
    e[s] ||= [];
  }
  return e;
}
function Le({
  groups: t
}) {
  const e = [];
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    e[i.group] ||= {};
    e[i.group][i.name] = i.binding;
  }
  return e;
}
function De(t, e) {
  const s = new Set();
  const i = new Set();
  return {
    structs: [...t.structs, ...e.structs].filter(t => !s.has(t.name) && (s.add(t.name), true)),
    groups: [...t.groups, ...e.groups].filter(t => {
      const e = `${t.name}-${t.binding}`;
      return !i.has(e) && (i.add(e), true);
    })
  };
}
var Ne = Object.create(null);
var $e = class t {
  constructor(t) {
    this._layoutKey = 0;
    this._attributeLocationsKey = 0;
    const {
      fragment: e,
      vertex: s,
      layout: i,
      gpuLayout: r,
      name: n
    } = t;
    this.name = n;
    this.fragment = e;
    this.vertex = s;
    if (e.source === s.source) {
      const t = Fe(e.source);
      this.structsAndGroups = t;
    } else {
      const t = Fe(s.source);
      const i = Fe(e.source);
      this.structsAndGroups = De(t, i);
    }
    this.layout = i ?? Le(this.structsAndGroups);
    this.gpuLayout = r ?? ke(this.structsAndGroups);
    this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== undefined;
    this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== undefined;
    this._generateProgramKey();
  }
  _generateProgramKey() {
    const {
      vertex: t,
      fragment: e
    } = this;
    const s = t.source + e.source + t.entryPoint + e.entryPoint;
    this._layoutKey = se(s, "program");
  }
  get attributeData() {
    this._attributeData ??= Xe(this.vertex);
    return this._attributeData;
  }
  get fragmentOutputMask() {
    if (this._fragmentOutputMask === undefined) {
      this._fragmentOutputMask = Pe(this.fragment);
    }
    return this._fragmentOutputMask;
  }
  destroy() {
    this.gpuLayout = null;
    this.layout = null;
    this.structsAndGroups = null;
    this.fragment = null;
    this.vertex = null;
    Ne[this._cacheKey] = null;
  }
  static from(e) {
    const s = `${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;
    if (!Ne[s]) {
      Ne[s] = new t(e);
      Ne[s]._cacheKey = s;
    }
    return Ne[s];
  }
};
var We = ["f32", "i32", "u32", "vec2<f32>", "vec3<f32>", "vec4<f32>", "mat2x2<f32>", "mat3x3<f32>", "mat4x4<f32>", "mat3x2<f32>", "mat4x2<f32>", "mat2x3<f32>", "mat4x3<f32>", "mat2x4<f32>", "mat3x4<f32>", "vec2<i32>", "vec3<i32>", "vec4<i32>", "vec2<u32>", "vec3<u32>", "vec4<u32>"];
var ze = We.reduce((t, e) => {
  t[e] = true;
  return t;
}, {});
function Ue(t, e) {
  switch (t) {
    case "f32":
      return 0;
    case "vec2<f32>":
      return new Float32Array(e * 2);
    case "vec3<f32>":
      return new Float32Array(e * 3);
    case "vec4<f32>":
      return new Float32Array(e * 4);
    case "mat2x2<f32>":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3x3<f32>":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4x4<f32>":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
var Ge = class t extends p {
  constructor(e, s) {
    super();
    this.uid = O("uniform");
    this._resourceType = "uniformGroup";
    this._resourceId = O("resource");
    this.isUniformGroup = true;
    this._dirtyId = 0;
    this.destroyed = false;
    s = {
      ...t.defaultOptions,
      ...s
    };
    this.uniformStructures = e;
    const i = {};
    for (const t in e) {
      const s = e[t];
      s.name = t;
      s.size = s.size ?? 1;
      if (!ze[s.type]) {
        const t = s.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
        if (t) {
          const [, e, i] = t;
          throw new Error(`Uniform type ${s.type} is not supported. Use type: '${e}', size: ${i} instead.`);
        }
        throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${We.join(", ")}`);
      }
      s.value ??= Ue(s.type, s.size);
      i[t] = s.value;
    }
    this.uniforms = i;
    this._dirtyId = 1;
    this.ubo = s.ubo;
    this.isStatic = s.isStatic;
    this._signature = se(Object.keys(i).map(t => `${t}-${e[t].type}`).join("-"), "uniform-group");
  }
  get buffer() {
    return this._buffer;
  }
  set buffer(t) {
    if (this._buffer !== t) {
      this._buffer?.off("change", this.onBufferChange, this);
      this._buffer = t;
      t?.on("change", this.onBufferChange, this);
    }
  }
  get _gcLastUsed() {
    return this._buffer?._gcLastUsed ?? -1;
  }
  set _gcLastUsed(t) {
    if (this._buffer) {
      this._buffer._gcLastUsed = t;
    }
  }
  onBufferChange() {
    this._resourceId = O("resource");
    this.emit("change", this);
  }
  update() {
    this._dirtyId++;
  }
};
Ge.defaultOptions = {
  ubo: false,
  isStatic: false
};
var Be = Ge;
function Ve(t, e) {
  let s = Math.imul(e + 2654435769, 2246822507) ^ Math.imul(t + 1, 3266489909);
  s ^= s >>> 16;
  s = Math.imul(s, 2146121005);
  s ^= s >>> 15;
  s = Math.imul(s, 2221713035);
  return s ^ s >>> 16;
}
function He(t, e) {
  let s = Math.imul(e + 2135587861, 668265263) ^ Math.imul(t + 374761393, 2654435761);
  s ^= s >>> 15;
  s = Math.imul(s, 739982445);
  s ^= s >>> 12;
  s = Math.imul(s, 695872825);
  return s ^ s >>> 15;
}
var je = class {
  constructor(t) {
    this.resources = Object.create(null);
    this._resourceKeysValue = null;
    this._touchKeysValue = null;
    this._keyLow = 0;
    this._keyHigh = 0;
    this._gpuEntry = null;
    this._gpuEntryLayoutKey = -1;
    this._keyedIds = [];
    this.layout = null;
    let e = 0;
    for (const s in t) {
      if (e === 0 && !/^\d/.test(s)) {
        this.layout = {};
      }
      if (this.layout) {
        this.layout[s] = e;
      }
      const i = t[s];
      if (i) {
        this.setResource(i, e);
      }
      e++;
    }
  }
  get _resourceKeys() {
    this._resourceKeysValue ??= Object.keys(this.resources).map(Number);
    return this._resourceKeysValue;
  }
  setResource(t, e) {
    if (typeof e == "string") {
      e = this._bindingOf(e);
    }
    const s = this.resources[e];
    if (t !== s) {
      if (s) {
        s.off?.("change", this.onResourceChange, this);
      }
      t.on?.("change", this.onResourceChange, this);
      this.setResourceUnwatched(t, e);
    }
  }
  setResourceUnwatched(t, e) {
    const s = this.resources[e];
    if (t === s) {
      return;
    }
    const i = t._resourceId;
    if (s?._resourceType !== t._resourceType) {
      this._touchKeysValue = null;
    }
    if (s === undefined) {
      this._resourceKeysValue = null;
      this._keyLow ^= Ve(e, i);
      this._keyHigh ^= He(e, i);
      this._keyedIds[e] = i;
      this._gpuEntry = null;
    } else if (this._keyedIds[e] !== i) {
      this._rekey(e, i);
    }
    this.resources[e] = t;
  }
  _rekey(t, e) {
    const s = this._keyedIds[t];
    this._keyLow ^= Ve(t, s) ^ Ve(t, e);
    this._keyHigh ^= He(t, s) ^ He(t, e);
    this._keyedIds[t] = e;
    this._gpuEntry = null;
  }
  getResource(t) {
    return this.resources[typeof t == "string" ? this._bindingOf(t) : t];
  }
  _bindingOf(t) {
    const e = this.layout?.[t];
    if (e === undefined) {
      throw new Error(`[BindGroup] no binding named '${t}' in this group`);
    }
    return e;
  }
  _touch(t) {
    const e = this.resources;
    const s = this._touchKeys;
    for (let i = 0; i < s.length; i++) {
      const r = e[s[i]];
      if (r) {
        r._gcLastUsed = t;
      }
    }
  }
  get _touchKeys() {
    this._touchKeysValue ??= this._resourceKeys.filter(t => this.resources[t]?._resourceType !== "textureSampler");
    return this._touchKeysValue;
  }
  destroy() {
    const t = this.resources;
    for (const e in t) {
      t[e]?.off?.("change", this.onResourceChange, this);
    }
    this.resources = null;
    this._resourceKeysValue = null;
    this._touchKeysValue = null;
    this._gpuEntry = null;
  }
  onResourceChange(t) {
    const e = this.resources;
    if (!e) {
      return;
    }
    const s = this._resourceKeys;
    const i = t.destroyed;
    for (let r = 0; r < s.length; r++) {
      const n = s[r];
      if (e[n] === t) {
        if (i) {
          e[n] = null;
        }
        this._rekey(n, i ? -1 : t._resourceId);
      }
    }
    if (i) {
      zt(t._resourceType);
    }
  }
};
var qe = (t => {
  t[t.WEBGL = 1] = "WEBGL";
  t[t.WEBGPU = 2] = "WEBGPU";
  t[t.CANVAS = 4] = "CANVAS";
  t[t.BOTH = 3] = "BOTH";
  return t;
})(qe || {});
var Ke = class t {
  constructor(t) {
    this.data = {
      ...t
    };
    const e = Object.keys(t).sort().map(e => `${e}:${t[e]}`).join("|");
    this.id = se(e, "shader-overrides");
  }
  static from(e) {
    if (e instanceof t) {
      return e;
    } else {
      return new t(e);
    }
  }
};
var Ze = class t extends p {
  constructor(t) {
    super();
    this.uid = O("shader");
    this._uniformBindMap = Object.create(null);
    this._ownedBindGroups = [];
    this._destroyed = false;
    let {
      gpuProgram: e,
      glProgram: s,
      groups: i,
      resources: r,
      compatibleRenderers: n,
      groupMap: a,
      overrides: o
    } = t;
    this._overrides = o ? Ke.from(o) : null;
    this.gpuProgram = e;
    this.glProgram = s;
    if (n === undefined) {
      n = 0;
      if (e) {
        n |= qe.WEBGPU;
      }
      if (s) {
        n |= qe.WEBGL;
      }
    }
    this.compatibleRenderers = n;
    const h = {};
    if (a) {
      for (const u in a) {
        for (const t in a[u]) {
          const e = a[u][t];
          h[e] = {
            group: Number(u),
            binding: Number(t),
            name: e
          };
        }
      }
    }
    if (!r && !i) {
      r = {};
    }
    if (r && i) {
      throw new Error("[Shader] Cannot have both resources and groups");
    }
    if (!e && i && !a) {
      throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
    }
    if (e && i && !a) {
      const t = e.structsAndGroups.groups;
      a = {};
      t.forEach(t => {
        a[t.group] = a[t.group] || {};
        a[t.group][t.binding] = t.name;
        h[t.name] = t;
      });
    } else if (r) {
      i = {};
      a ||= {};
      if (e) {
        e.structsAndGroups.groups.forEach(t => {
          a[t.group] = a[t.group] || {};
          a[t.group][t.binding] = t.name;
          h[t.name] = t;
        });
      }
      let t = 0;
      for (const n in r) {
        if (!h[n]) {
          if (e && !s) {
            zt();
          }
          if (!i[99]) {
            i[99] = new je();
            this._ownedBindGroups.push(i[99]);
          }
          h[n] = {
            group: 99,
            binding: t,
            name: n
          };
          a[99] = a[99] || {};
          a[99][t] = n;
          t++;
        }
      }
      for (const e in r) {
        const t = e;
        let s = r[e];
        if (!s.source && !s._resourceType) {
          s = new Be(s);
        }
        const n = h[t];
        if (n) {
          if (!i[n.group]) {
            i[n.group] = new je();
            this._ownedBindGroups.push(i[n.group]);
          }
          i[n.group].setResource(s, n.binding);
        }
      }
    }
    this.groups = i;
    this._uniformBindMap = a;
    this.resources = this._buildResourceAccessor(i, h);
  }
  addResource(t, e, s) {
    this._uniformBindMap[e] ||= {};
    this._uniformBindMap[e][s] ||= t;
    if (!this.groups[e]) {
      this.groups[e] = new je();
      this._ownedBindGroups.push(this.groups[e]);
    }
  }
  _buildResourceAccessor(t, e) {
    const s = {};
    for (const i in e) {
      const r = e[i];
      Object.defineProperty(s, r.name, {
        get() {
          const e = t[r.group];
          return e.getResource(e.layout ? e.layout[r.name] : r.binding);
        },
        set(e) {
          const s = t[r.group];
          s.setResource(e, s.layout ? s.layout[r.name] : r.binding);
        }
      });
    }
    return s;
  }
  destroy(t = false) {
    if (!this._destroyed) {
      this._destroyed = true;
      this.emit("destroy", this);
      if (t) {
        this.gpuProgram?.destroy();
        this.glProgram?.destroy();
      }
      this.gpuProgram = null;
      this.glProgram = null;
      this.removeAllListeners();
      this._uniformBindMap = null;
      this._ownedBindGroups.forEach(t => {
        t.destroy();
      });
      this._ownedBindGroups = null;
      this.resources = null;
      this.groups = null;
      this._overrides = null;
    }
  }
  static from(e) {
    const {
      gpu: s,
      gl: i,
      ...r
    } = e;
    let n;
    let a;
    if (s) {
      n = $e.from(s);
    }
    if (i) {
      a = Me.from(i);
    }
    return new t({
      gpuProgram: n,
      glProgram: a,
      ...r
    });
  }
};
var Qe = (t => {
  t[t.MAP_READ = 1] = "MAP_READ";
  t[t.MAP_WRITE = 2] = "MAP_WRITE";
  t[t.COPY_SRC = 4] = "COPY_SRC";
  t[t.COPY_DST = 8] = "COPY_DST";
  t[t.INDEX = 16] = "INDEX";
  t[t.VERTEX = 32] = "VERTEX";
  t[t.UNIFORM = 64] = "UNIFORM";
  t[t.STORAGE = 128] = "STORAGE";
  t[t.INDIRECT = 256] = "INDIRECT";
  t[t.QUERY_RESOLVE = 512] = "QUERY_RESOLVE";
  t[t.STATIC = 1024] = "STATIC";
  return t;
})(Qe || {});
var Je = class extends p {
  constructor(t) {
    let {
      data: e,
      size: s
    } = t;
    const {
      usage: i,
      label: r,
      shrinkToFit: n
    } = t;
    super();
    this._gpuData = Object.create(null);
    this._gcLastUsed = -1;
    this.autoGarbageCollect = true;
    this.uid = O("buffer");
    this._resourceType = "buffer";
    this._resourceId = O("resource");
    this._updateID = 1;
    this._updateOffset = 0;
    this._dataInt32 = null;
    this.shrinkToFit = true;
    this.destroyed = false;
    if (e instanceof Array) {
      e = new Float32Array(e);
    }
    this._data = e;
    s ??= e?.byteLength;
    const a = !!e;
    this.descriptor = {
      size: s,
      usage: i,
      mappedAtCreation: a,
      label: r
    };
    this.shrinkToFit = n ?? true;
  }
  get data() {
    return this._data;
  }
  set data(t) {
    this.setDataWithSize(t, t.length, true);
  }
  get dataInt32() {
    this._dataInt32 ||= new Int32Array(this.data.buffer);
    return this._dataInt32;
  }
  get static() {
    return !!(this.descriptor.usage & Qe.STATIC);
  }
  set static(t) {
    if (t) {
      this.descriptor.usage |= Qe.STATIC;
    } else {
      this.descriptor.usage &= ~Qe.STATIC;
    }
  }
  setDataWithSize(t, e, s) {
    this._updateID++;
    this._updateSize = e * t.BYTES_PER_ELEMENT;
    this._updateOffset = 0;
    if (this._data === t) {
      if (s) {
        this.emit("update", this);
      }
      return;
    }
    const i = this._data;
    this._data = t;
    this._dataInt32 = null;
    if (i && i.length === t.length || !this.shrinkToFit && i && t.byteLength < i.byteLength) {
      if (s) {
        this.emit("update", this);
      }
    } else {
      this.descriptor.size = t.byteLength;
      this._resourceId = O("resource");
      this.emit("change", this);
    }
  }
  update(t, e) {
    this._updateSize = t;
    this._updateOffset = e || 0;
    this._updateID++;
    this.emit("update", this);
  }
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData) {
      this._gpuData[t]?.destroy();
    }
    this._gpuData = Object.create(null);
    if (!this.destroyed) {
      this._resourceId = O("resource");
      this.emit("change", this);
    }
  }
  destroy() {
    this.destroyed = true;
    this.unload();
    this.emit("destroy", this);
    this.emit("change", this);
    this._data = null;
    this.descriptor = null;
    this.removeAllListeners();
  }
};
function ts(t, e) {
  if (!(t instanceof Je)) {
    let s = e ? Qe.INDEX : Qe.VERTEX;
    if (t instanceof Array) {
      if (e) {
        t = new Uint32Array(t);
        s = Qe.INDEX | Qe.COPY_DST;
      } else {
        t = new Float32Array(t);
        s = Qe.VERTEX | Qe.COPY_DST;
      }
    }
    t = new Je({
      data: t,
      label: e ? "index-mesh-buffer" : "vertex-mesh-buffer",
      usage: s
    });
  }
  return t;
}
function es(t, e, s) {
  const i = t.getAttribute(e);
  if (!i) {
    s.minX = 0;
    s.minY = 0;
    s.maxX = 0;
    s.maxY = 0;
    return s;
  }
  const r = i.buffer.data;
  let n = Infinity;
  let a = Infinity;
  let o = -Infinity;
  let h = -Infinity;
  const u = r.BYTES_PER_ELEMENT;
  const d = (i.offset || 0) / u;
  const l = (i.stride || 8) / u;
  for (let c = d; c < r.length; c += l) {
    const t = r[c];
    const e = r[c + 1];
    if (t > o) {
      o = t;
    }
    if (e > h) {
      h = e;
    }
    if (t < n) {
      n = t;
    }
    if (e < a) {
      a = e;
    }
  }
  s.minX = n;
  s.minY = a;
  s.maxX = o;
  s.maxY = h;
  return s;
}
var ss = class extends p {
  constructor(t = {}) {
    super();
    this._gpuData = Object.create(null);
    this.autoGarbageCollect = true;
    this._gcLastUsed = -1;
    this.uid = O("geometry");
    this._layoutKey = 0;
    this.instanceCount = 1;
    this.indexCount = 0;
    this._bounds = new nt();
    this._boundsDirty = true;
    this._vertexCount = 0;
    this._vertexCountDirty = true;
    const {
      attributes: e,
      indexBuffer: s,
      topology: i
    } = t;
    this.buffers = [];
    this.attributes = {};
    if (e) {
      for (const r in e) {
        this.addAttribute(r, e[r]);
      }
    }
    this.instanceCount = t.instanceCount ?? 1;
    this.indexCount = t.indexCount ?? 0;
    if (s) {
      this.addIndex(s);
    }
    this.topology = i || "triangle-list";
  }
  onBufferUpdate() {
    this._boundsDirty = true;
    this._vertexCountDirty = true;
    this.emit("update", this);
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getIndex() {
    return this.indexBuffer;
  }
  getBuffer(t) {
    return this.getAttribute(t).buffer;
  }
  get vertexCount() {
    if (!this._vertexCountDirty) {
      return this._vertexCount;
    }
    this._vertexCountDirty = false;
    const t = this.attributes;
    for (const e in t) {
      const s = t[e];
      if (s.instance) {
        continue;
      }
      const i = s.buffer;
      this._vertexCount = i.data.length / (s.stride / 4 || s.size);
      return this._vertexCount;
    }
    this._vertexCount = 0;
    return 0;
  }
  getSize() {
    z(0, "Geometry.getSize is deprecated, please use Geometry.vertexCount instead.");
    return this.vertexCount;
  }
  addAttribute(t, e) {
    const s = function (t) {
      if (t instanceof Je || Array.isArray(t) || t.BYTES_PER_ELEMENT) {
        t = {
          buffer: t
        };
      }
      t.buffer = ts(t.buffer, false);
      return t;
    }(e);
    if (this.buffers.indexOf(s.buffer) === -1) {
      this.buffers.push(s.buffer);
      s.buffer.on("update", this.onBufferUpdate, this);
      s.buffer.on("change", this.onBufferUpdate, this);
    }
    this.attributes[t] = s;
    this._vertexCountDirty = true;
  }
  addIndex(t) {
    this.indexBuffer = ts(t, true);
    this.buffers.push(this.indexBuffer);
  }
  get bounds() {
    if (this._boundsDirty) {
      this._boundsDirty = false;
      return es(this, "aPosition", this._bounds);
    } else {
      return this._bounds;
    }
  }
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData) {
      this._gpuData[t]?.destroy();
    }
    this._gpuData = Object.create(null);
  }
  destroy(t = false) {
    this.emit("destroy", this);
    for (const e of this.buffers) {
      e.off("update", this.onBufferUpdate, this);
      e.off("change", this.onBufferUpdate, this);
      if (t) {
        e.destroy();
      }
    }
    this.unload();
    this.removeAllListeners();
    this.attributes = null;
    this.buffers = null;
    this.indexBuffer = null;
    this._bounds = null;
  }
};
var is = 32767;
function rs(t, e) {
  return (t << 17) + (e << 2);
}
var ns = class {
  constructor(t) {
    this._buckets = new Map();
    this._screens = new qt();
    this._enableFullScreen = false;
    this.canvasOptions = t || {};
  }
  get enableFullScreen() {
    z(0, "CanvasPool.enableFullScreen is no longer used, the pool sizes canvases to the screens registered with setScreenSize.");
    return this._enableFullScreen;
  }
  set enableFullScreen(t) {
    z(0, "CanvasPool.enableFullScreen is no longer used, the pool sizes canvases to the screens registered with setScreenSize.");
    this._enableFullScreen = t;
  }
  _createCanvasAndContext(t, e) {
    const s = Jt.get().createCanvas();
    s.width = t;
    s.height = e;
    return {
      canvas: s,
      context: s.getContext("2d")
    };
  }
  getOptimalCanvasAndContext(t, e, s = 1) {
    const {
      width: i,
      height: r
    } = this.getOptimalSize(t, e, s);
    if (i > is || r > is) {
      zt();
    }
    const n = rs(i, r);
    let a = this._buckets.get(n);
    if (!a) {
      a = [];
      this._buckets.set(n, a);
    }
    let o = a.pop();
    o ||= this._createCanvasAndContext(i, r);
    return o;
  }
  getOptimalSize(t, e, s = 1) {
    const i = Math.ceil(t * s - 0.000001);
    const r = Math.ceil(e * s - 0.000001);
    const n = B(i);
    const a = this._screens.getFittingWidth(i);
    const o = B(r);
    const h = this._screens.getFittingHeight(r);
    return {
      width: a !== undefined ? Math.min(a, n) : n,
      height: h !== undefined ? Math.min(h, o) : o
    };
  }
  returnCanvasAndContext(t) {
    const {
      width: e,
      height: s
    } = t.canvas;
    const i = this._buckets.get(rs(e, s));
    if (i) {
      t.context.resetTransform();
      t.context.clearRect(0, 0, e, s);
      i.push(t);
    }
  }
  setScreenSize(t, e, s) {
    if (this._screens.set(t, e, s)) {
      this._pruneScreenCanvases();
    }
  }
  removeScreen(t) {
    if (this._screens.remove(t)) {
      this._pruneScreenCanvases();
    }
  }
  clear() {
    this._buckets.clear();
  }
  _pruneScreenCanvases() {
    for (const [t] of this._buckets) {
      const e = t >>> 17;
      const s = t >>> 2 & 32767;
      if (!V(e) && !this._screens.hasWidth(e) || !V(s) && !this._screens.hasHeight(s)) {
        this._buckets.delete(t);
      }
    }
  }
};
var as = new ns();
Ut.register(as);
export { j as $, de as A, Ht as B, Xe as C, a as Ct, xe as D, be as E, se as F, zt as G, Bt as H, Jt as I, it as J, $t as K, Zt as L, he as M, oe as N, me as O, ie as P, Z as Q, qt as R, Pe as S, l as St, Me as T, Gt as U, Vt as V, Ut as W, tt as X, st as Y, J as Z, De as _, m as _t, ts as a, z as at, Oe as b, u as bt, Ze as c, $ as ct, je as d, O as dt, V as et, Be as f, P as ft, $e as g, y as gt, We as h, x as ht, es as i, U as it, ue as j, pe as k, Ke as l, D as lt, ze as m, _ as mt, ns as n, B as nt, Je as o, L as ot, Ue as p, R as pt, nt as q, ss as r, G as rt, Qe as s, N as st, as as t, H as tt, qe as u, I as ut, Le as v, g as vt, Ce as w, o as wt, Fe as x, c as xt, ke as y, p as yt, jt as z };
