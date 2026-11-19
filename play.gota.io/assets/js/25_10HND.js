import { $ as t, B as e, G as s, I as i, J as n, K as r, V as a, at as o, bt as h, dt as l, ft as c, ht as u, lt as d, mt as f, ot as p, q as y, xt as x, yt as g, z as m } from "./C_U2Xa4J.js";
import { n as b, t as _ } from "./CcWEjvQM.js";
import { t as v } from "./WxvWQFDR.js";
import { r as M } from "./appvLw8R.js";
var S = new Set();
var P = false;
function k(t, e, s = 2) {
  const i = e && e.length;
  const n = i ? e[0] * s : t.length;
  if (S.size) {
    S.clear();
  }
  let r = w(t, 0, n, s, true);
  const a = [];
  if (!r || r.next === r.prev) {
    return a;
  }
  let o = 0;
  let h = 0;
  let l = 0;
  if (i) {
    r = function (t, e, s, i) {
      const n = [];
      for (let r = 0, a = e.length; r < a; r++) {
        const s = w(t, e[r] * i, r < a - 1 ? e[r + 1] * i : t.length, i, false);
        if (s === s.next) {
          S.add(s);
        }
        n.push(Q(s));
      }
      n.sort(G);
      (function (t, e) {
        const s = Math.ceil((t + e * 2) / B) + e + 2;
        if (F.length < s * 4) {
          F = new Float64Array(s * 4);
        }
        N = 0;
      })(t.length / i, e.length);
      H(s, s);
      L = true;
      for (let r = 0; r < n.length; r++) {
        s = I(n[r], s);
      }
      L = false;
      return T(s);
    }(t, e, r, s);
  }
  if (t.length > s * 80) {
    o = t[0];
    h = t[1];
    let e = o;
    let i = h;
    for (let r = s; r < n; r += s) {
      const s = t[r];
      const n = t[r + 1];
      if (s < o) {
        o = s;
      }
      if (n < h) {
        h = n;
      }
      if (s > e) {
        e = s;
      }
      if (n > i) {
        i = n;
      }
    }
    l = Math.max(e - o, i - h);
    l = l !== 0 ? 32767 / l : 0;
  }
  C(r, a, o, h, l);
  return a;
}
function w(t, e, s, i, n) {
  let r = null;
  if (n === function (t, e, s, i) {
    let n = 0;
    for (let r = e, a = s - i; r < s; r += i) {
      n += (t[a] - t[r]) * (t[r + 1] + t[a + 1]);
      a = r;
    }
    return n;
  }(t, e, s, i) > 0) {
    for (let a = e; a < s; a += i) {
      r = ot(a / i | 0, t[a], t[a + 1], r);
    }
  } else {
    for (let a = s - i; a >= e; a -= i) {
      r = ot(a / i | 0, t[a], t[a + 1], r);
    }
  }
  if (r && st(r, r.next)) {
    ht(r);
    r = r.next;
  }
  return r;
}
function T(t, e = t) {
  const s = e === t;
  let i;
  let n = t;
  do {
    i = false;
    if (n === n.next || S.size !== 0 && S.has(n) || !st(n, n.next) && et(n.prev, n, n.next) !== 0) {
      if (s || n !== e) {
        n = n.next;
        i = !s;
      }
    } else {
      if (s || n === e) {
        e = n.prev;
      }
      P = true;
      ht(n);
      n = n.prev;
      i = true;
    }
  } while (i || n !== e);
  return e;
}
function C(t, e, s, i, n) {
  if (n) {
    (function (t, e, s, i) {
      let n = t;
      let r = 0;
      do {
        n.z = K(n.x, n.y, e, s, i);
        U[r++] = n;
        n = n.next;
      } while (n !== t);
      (function (t) {
        if (t <= 32) {
          for (let e = 1; e < t; e++) {
            const t = U[e];
            const s = t.z;
            let i = e - 1;
            while (i >= 0 && U[i].z > s) {
              U[i + 1] = U[i];
              i--;
            }
            U[i + 1] = t;
          }
          return;
        }
        if (Z.length < t) {
          Z = new Uint32Array(t);
          X = new Uint32Array(t);
          V = new Array(t);
        }
        for (let e = 0; e < t; e++) {
          Z[e] = U[e].z;
        }
        Y(t, U, Z, V, X, 0);
        Y(t, V, X, U, Z, 8);
        Y(t, U, Z, V, X, 16);
        Y(t, V, X, U, Z, 24);
      })(r);
      let a = null;
      for (let o = 0; o < r; o++) {
        const t = U[o];
        t.prevZ = a;
        if (a) {
          a.nextZ = t;
        }
        a = t;
      }
      a.nextZ = null;
      U.fill(null, 0, r);
      V.fill(null, 0, r);
    })(t, s, i, n);
  }
  let r = t;
  let a = false;
  while (t.prev !== t.next) {
    const o = t.prev;
    const h = t.next;
    if (et(o, t, h) < 0 && (n ? D(t, s, i, n) : z(t))) {
      e.push(o.i, t.i, h.i);
      ht(t);
      t = h;
      r = h;
    } else if ((t = h) === r) {
      P = false;
      t = T(t);
      if (P) {
        r = t;
        continue;
      }
      if (!a) {
        r = t = R(t, e);
        a = true;
        continue;
      }
      q(t, e, s, i, n);
      break;
    }
  }
}
function z(t) {
  const e = t.prev;
  const s = t;
  const i = t.next;
  const n = e.x;
  const r = s.x;
  const a = i.x;
  const o = e.y;
  const h = s.y;
  const l = i.y;
  const c = Math.min(n, r, a);
  const u = Math.min(o, h, l);
  const d = Math.max(n, r, a);
  const f = Math.max(o, h, l);
  let p = i.next;
  while (p !== e) {
    if (p.x >= c && p.x <= d && p.y >= u && p.y <= f && (n !== p.x || o !== p.y) && J(n, o, r, h, a, l, p.x, p.y) && et(p.prev, p, p.next) >= 0) {
      return false;
    }
    p = p.next;
  }
  return true;
}
function D(t, e, s, i) {
  const n = t.prev;
  const r = t;
  const a = t.next;
  const o = n.x;
  const h = r.x;
  const l = a.x;
  const c = n.y;
  const u = r.y;
  const d = a.y;
  const f = Math.min(o, h, l);
  const p = Math.min(c, u, d);
  const y = Math.max(o, h, l);
  const x = Math.max(c, u, d);
  const g = K(f, p, e, s, i);
  const m = K(y, x, e, s, i);
  let b = t.prevZ;
  while (b && b.z >= g) {
    if (b.x >= f && b.x <= y && b.y >= p && b.y <= x && b !== a && (o !== b.x || c !== b.y) && J(o, c, h, u, l, d, b.x, b.y) && et(b.prev, b, b.next) >= 0) {
      return false;
    }
    b = b.prevZ;
  }
  let _ = t.nextZ;
  while (_ && _.z <= m) {
    if (_.x >= f && _.x <= y && _.y >= p && _.y <= x && _ !== a && (o !== _.x || c !== _.y) && J(o, c, h, u, l, d, _.x, _.y) && et(_.prev, _, _.next) >= 0) {
      return false;
    }
    _ = _.nextZ;
  }
  return true;
}
function R(t, e) {
  let s = t;
  let i = false;
  do {
    const n = s.prev;
    const r = s.next.next;
    if (it(n, s, s.next, r, false) && rt(n, r) && rt(r, n)) {
      e.push(n.i, s.i, r.i);
      ht(s);
      ht(s.next);
      s = t = r;
      i = true;
    }
    s = s.next;
  } while (s !== t);
  if (i) {
    return T(s);
  } else {
    return s;
  }
}
function q(t, e, s, i, n) {
  let r = t;
  do {
    let t = r.next.next;
    while (t !== r.prev) {
      if (r.i !== t.i && tt(r, t)) {
        let a = at(r, t);
        r = T(r, r.next);
        a = T(a, a.next);
        C(r, e, s, i, n);
        C(a, e, s, i, n);
        return;
      }
      t = t.next;
    }
    r = r.next;
  } while (r !== t);
}
var L = false;
function G(t, e) {
  return t.x - e.x || t.y - e.y || (t.next.y - t.y) / (t.next.x - t.x) - (e.next.y - e.y) / (e.next.x - e.x);
}
function I(t, e) {
  const s = function (t, e) {
    let s = e;
    const i = t.x;
    const n = t.y;
    let r;
    let a = -Infinity;
    if (st(t, s)) {
      return s;
    }
    for (let d = 0, f = 0; d < N; d++, f += 4) {
      if (n < F[f + 1] || n > F[f + 3] || F[f] > i || F[f + 2] <= a) {
        continue;
      }
      const e = W(d);
      s = j(d);
      do {
        if (s.prev.next === s) {
          if (st(t, s.next)) {
            return s.next;
          }
          if (n <= s.y && n >= s.next.y && s.next.y !== s.y) {
            const t = s.x + (n - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
            if (t <= i && t > a && (a = t, r = s.x < s.next.x ? s : s.next, t === i)) {
              return r;
            }
          }
        }
        s = s.next;
      } while (s !== e);
    }
    if (!r) {
      return null;
    }
    const o = r.x;
    const h = r.y;
    const l = Math.min(n, h);
    const c = Math.max(n, h);
    let u = Infinity;
    for (let d = 0, f = 0; d < N; d++, f += 4) {
      if (F[f + 2] < o || F[f] > i || F[f + 3] < l || F[f + 1] > c) {
        continue;
      }
      const e = W(d);
      s = j(d);
      do {
        if (s.prev.next === s && i >= s.x && s.x >= o && i !== s.x && J(n < h ? i : a, n, o, h, n < h ? a : i, n, s.x, s.y)) {
          const e = Math.abs(n - s.y) / (i - s.x);
          if ((rt(s, t) || s.y === n && s.next.y === n && s.next.x > i) && (e < u || e === u && (s.x > r.x || s.x === r.x && O(r, s)))) {
            r = s;
            u = e;
          }
        }
        s = s.next;
      } while (s !== e);
    }
    return r;
  }(t, e);
  if (!s) {
    return e;
  }
  const i = at(s, t);
  H(s, i.next.next);
  T(i, i.next);
  return T(s, s.next);
}
var B = 16;
var F = new Float64Array(0);
var N = 0;
var A = [];
var $ = [];
function H(t, e) {
  let s = t;
  do {
    const t = N++;
    A[t] = s;
    let i = s.x;
    let n = s.y;
    let r = s.x;
    let a = s.y;
    let o = 0;
    do {
      const e = s.next;
      s.z = t;
      if (e.x < i) {
        i = e.x;
      }
      if (e.x > r) {
        r = e.x;
      }
      if (e.y < n) {
        n = e.y;
      }
      if (e.y > a) {
        a = e.y;
      }
      s = e;
    } while (++o < B && s !== e);
    $[t] = s;
    const h = t * 4;
    F[h] = i;
    F[h + 1] = n;
    F[h + 2] = r;
    F[h + 3] = a;
  } while (s !== e);
}
function W(t) {
  let e = $[t];
  while (e.prev.next !== e) {
    e = e.next;
  }
  $[t] = e;
  return e;
}
function j(t) {
  let e = A[t];
  while (e.prev.next !== e) {
    e = e.next;
  }
  A[t] = e;
  return e;
}
function O(t, e) {
  return et(t.prev, t, e.prev) < 0 && et(e.next, t, t.next) < 0;
}
var U = [];
var V = [];
var Z = new Uint32Array(0);
var X = new Uint32Array(0);
var E = new Uint32Array(256);
function Y(t, e, s, i, n, r) {
  E.fill(0);
  for (let o = 0; o < t; o++) {
    E[s[o] >>> r & 255]++;
  }
  let a = 0;
  for (let o = 0; o < 256; o++) {
    const t = E[o];
    E[o] = a;
    a += t;
  }
  for (let o = 0; o < t; o++) {
    const t = s[o];
    const a = E[t >>> r & 255]++;
    i[a] = e[o];
    n[a] = t;
  }
}
function K(t, e, s, i, n) {
  return (t = ((t = ((t = ((t = ((t = (t - s) * n | 0) | t << 8) & 16711935) | t << 4) & 252645135) | t << 2) & 858993459) | t << 1) & 1431655765) | (e = ((e = ((e = ((e = ((e = (e - i) * n | 0) | e << 8) & 16711935) | e << 4) & 252645135) | e << 2) & 858993459) | e << 1) & 1431655765) << 1;
}
function Q(t) {
  let e = t;
  let s = t;
  do {
    if (e.x < s.x || e.x === s.x && e.y < s.y) {
      s = e;
    }
    e = e.next;
  } while (e !== t);
  return s;
}
function J(t, e, s, i, n, r, a, o) {
  return (n - a) * (e - o) >= (t - a) * (r - o) && (t - a) * (i - o) >= (s - a) * (e - o) && (s - a) * (r - o) >= (n - a) * (i - o);
}
function tt(t, e) {
  const s = st(t, e) && et(t.prev, t, t.next) > 0 && et(e.prev, e, e.next) > 0;
  return t.next.i !== e.i && (s || rt(t, e) && rt(e, t) && (et(t.prev, t, e.prev) !== 0 || et(t, e.prev, e) !== 0)) && !function (t, e) {
    const s = Math.min(t.x, e.x);
    const i = Math.max(t.x, e.x);
    const n = Math.min(t.y, e.y);
    const r = Math.max(t.y, e.y);
    let a = t;
    do {
      const o = a.next;
      if (a.x > i && o.x > i || a.x < s && o.x < s || a.y > r && o.y > r || a.y < n && o.y < n) {
        a = o;
      } else {
        if (a.i !== t.i && o.i !== t.i && a.i !== e.i && o.i !== e.i && it(a, o, t, e)) {
          return true;
        }
        a = o;
      }
    } while (a !== t);
    return false;
  }(t, e) && (s || function (t, e) {
    let s = t;
    let i = false;
    const n = (t.x + e.x) / 2;
    const r = (t.y + e.y) / 2;
    do {
      const t = s.next;
      if (s.y > r != t.y > r && n < (t.x - s.x) * (r - s.y) / (t.y - s.y) + s.x) {
        i = !i;
      }
      s = t;
    } while (s !== t);
    return i;
  }(t, e));
}
function et(t, e, s) {
  return (e.y - t.y) * (s.x - e.x) - (e.x - t.x) * (s.y - e.y);
}
function st(t, e) {
  return t.x === e.x && t.y === e.y;
}
function it(t, e, s, i, n = true) {
  const r = et(t, e, s);
  const a = et(t, e, i);
  const o = et(s, i, t);
  const h = et(s, i, e);
  return (r > 0 && a < 0 || r < 0 && a > 0) && (o > 0 && h < 0 || o < 0 && h > 0) || !!n && (r === 0 && !!nt(t, s, e) || a === 0 && !!nt(t, i, e) || o === 0 && !!nt(s, t, i) || h === 0 && !!nt(s, e, i));
}
function nt(t, e, s) {
  return e.x <= Math.max(t.x, s.x) && e.x >= Math.min(t.x, s.x) && e.y <= Math.max(t.y, s.y) && e.y >= Math.min(t.y, s.y);
}
function rt(t, e) {
  if (et(t.prev, t, t.next) < 0) {
    return et(t, e, t.next) >= 0 && et(t, t.prev, e) >= 0;
  } else {
    return et(t, e, t.prev) < 0 || et(t, t.next, e) < 0;
  }
}
function at(t, e) {
  const s = lt(t.i, t.x, t.y);
  const i = lt(e.i, e.x, e.y);
  const n = t.next;
  const r = e.prev;
  t.next = e;
  e.prev = t;
  s.next = n;
  n.prev = s;
  i.next = s;
  s.prev = i;
  r.next = i;
  i.prev = r;
  return i;
}
function ot(t, e, s, i) {
  const n = lt(t, e, s);
  if (i) {
    n.next = i.next;
    n.prev = i;
    i.next.prev = n;
    i.next = n;
  } else {
    n.prev = n;
    n.next = n;
  }
  return n;
}
function ht(t) {
  t.next.prev = t.prev;
  t.prev.next = t.next;
  if (t.prevZ) {
    t.prevZ.nextZ = t.nextZ;
  }
  if (t.nextZ) {
    t.nextZ.prevZ = t.prevZ;
  }
  if (L) {
    (function (t, e) {
      const s = t.z * 4;
      if (e.x < F[s]) {
        F[s] = e.x;
      }
      if (e.y < F[s + 1]) {
        F[s + 1] = e.y;
      }
      if (e.x > F[s + 2]) {
        F[s + 2] = e.x;
      }
      if (e.y > F[s + 3]) {
        F[s + 3] = e.y;
      }
    })(t.prev, t.next);
  }
}
function lt(t, e, s) {
  return {
    i: t,
    x: e,
    y: s,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null
  };
}
var ct = k.default || k;
var ut = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
};
var dt = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
var ft = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
function pt(t) {
  const e = [];
  t.replace(dt, (t, s, i) => {
    let n = s.toLowerCase();
    let r = s;
    const a = function (t) {
      const e = t.match(ft);
      if (e) {
        return e.map(Number);
      } else {
        return [];
      }
    }(i);
    for (n === "m" && a.length > 2 && (e.push([r, ...a.splice(0, 2)]), n = "l", r = r === "m" ? "l" : "L");;) {
      if (a.length === ut[n]) {
        e.push([r, ...a]);
        return "";
      }
      if (a.length < ut[n]) {
        throw new Error("malformed path data");
      }
      e.push([r, ...a.splice(0, ut[n])]);
    }
  });
  return e;
}
function yt(t, e) {
  const i = pt(t);
  const n = [];
  let r = null;
  let a = 0;
  let o = 0;
  for (let h = 0; h < i.length; h++) {
    const t = i[h];
    const l = t[0];
    const c = t;
    switch (l) {
      case "M":
        a = c[1];
        o = c[2];
        e.moveTo(a, o);
        break;
      case "m":
        a += c[1];
        o += c[2];
        e.moveTo(a, o);
        break;
      case "H":
        a = c[1];
        e.lineTo(a, o);
        break;
      case "h":
        a += c[1];
        e.lineTo(a, o);
        break;
      case "V":
        o = c[1];
        e.lineTo(a, o);
        break;
      case "v":
        o += c[1];
        e.lineTo(a, o);
        break;
      case "L":
        a = c[1];
        o = c[2];
        e.lineTo(a, o);
        break;
      case "l":
        a += c[1];
        o += c[2];
        e.lineTo(a, o);
        break;
      case "C":
        a = c[5];
        o = c[6];
        e.bezierCurveTo(c[1], c[2], c[3], c[4], a, o);
        break;
      case "c":
        e.bezierCurveTo(a + c[1], o + c[2], a + c[3], o + c[4], a + c[5], o + c[6]);
        a += c[5];
        o += c[6];
        break;
      case "S":
        a = c[3];
        o = c[4];
        e.bezierCurveToShort(c[1], c[2], a, o);
        break;
      case "s":
        e.bezierCurveToShort(a + c[1], o + c[2], a + c[3], o + c[4]);
        a += c[3];
        o += c[4];
        break;
      case "Q":
        a = c[3];
        o = c[4];
        e.quadraticCurveTo(c[1], c[2], a, o);
        break;
      case "q":
        e.quadraticCurveTo(a + c[1], o + c[2], a + c[3], o + c[4]);
        a += c[3];
        o += c[4];
        break;
      case "T":
        a = c[1];
        o = c[2];
        e.quadraticCurveToShort(a, o);
        break;
      case "t":
        a += c[1];
        o += c[2];
        e.quadraticCurveToShort(a, o);
        break;
      case "A":
        a = c[6];
        o = c[7];
        e.arcToSvg(c[1], c[2], c[3], c[4], c[5], a, o);
        break;
      case "a":
        a += c[6];
        o += c[7];
        e.arcToSvg(c[1], c[2], c[3], c[4], c[5], a, o);
        break;
      case "Z":
      case "z":
        e.closePath();
        if (n.length > 0) {
          r = n.pop();
          if (r) {
            a = r.startX;
            o = r.startY;
          } else {
            a = 0;
            o = 0;
          }
        }
        r = null;
        break;
      default:
        s(`Unknown SVG path command: ${l}`);
    }
    if (l !== "Z" && l !== "z" && r === null) {
      r = {
        startX: a,
        startY: o
      };
      n.push(r);
    }
  }
  return e;
}
var xt = class t {
  constructor(t = 0, e = 0, s = 0) {
    this.type = "circle";
    this.x = t;
    this.y = e;
    this.radius = s;
  }
  clone() {
    return new t(this.x, this.y, this.radius);
  }
  contains(t, e) {
    if (this.radius <= 0) {
      return false;
    }
    const s = this.radius * this.radius;
    let i = this.x - t;
    let n = this.y - e;
    i *= i;
    n *= n;
    return i + n <= s;
  }
  strokeContains(t, e, s, i = 0.5) {
    if (this.radius === 0) {
      return false;
    }
    const n = this.x - t;
    const r = this.y - e;
    const a = this.radius;
    const o = (1 - i) * s;
    const h = Math.sqrt(n * n + r * r);
    return h <= a + o && h > a - (s - o);
  }
  getBounds(t) {
    t ||= new c();
    t.x = this.x - this.radius;
    t.y = this.y - this.radius;
    t.width = this.radius * 2;
    t.height = this.radius * 2;
    return t;
  }
  copyFrom(t) {
    this.x = t.x;
    this.y = t.y;
    this.radius = t.radius;
    return this;
  }
  copyTo(t) {
    t.copyFrom(this);
    return t;
  }
  toString() {
    return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
  }
};
var gt = class t {
  constructor(t = 0, e = 0, s = 0, i = 0) {
    this.type = "ellipse";
    this.x = t;
    this.y = e;
    this.halfWidth = s;
    this.halfHeight = i;
  }
  clone() {
    return new t(this.x, this.y, this.halfWidth, this.halfHeight);
  }
  contains(t, e) {
    if (this.halfWidth <= 0 || this.halfHeight <= 0) {
      return false;
    }
    let s = (t - this.x) / this.halfWidth;
    let i = (e - this.y) / this.halfHeight;
    s *= s;
    i *= i;
    return s + i <= 1;
  }
  strokeContains(t, e, s, i = 0.5) {
    const {
      halfWidth: n,
      halfHeight: r
    } = this;
    if (n <= 0 || r <= 0) {
      return false;
    }
    const a = s * (1 - i);
    const o = s - a;
    const h = n - o;
    const l = r - o;
    const c = n + a;
    const u = r + a;
    const d = t - this.x;
    const f = e - this.y;
    return !(d * d / (c * c) + f * f / (u * u) > 1) && (h <= 0 || l <= 0 || d * d / (h * h) + f * f / (l * l) > 1);
  }
  getBounds(t) {
    t ||= new c();
    t.x = this.x - this.halfWidth;
    t.y = this.y - this.halfHeight;
    t.width = this.halfWidth * 2;
    t.height = this.halfHeight * 2;
    return t;
  }
  copyFrom(t) {
    this.x = t.x;
    this.y = t.y;
    this.halfWidth = t.halfWidth;
    this.halfHeight = t.halfHeight;
    return this;
  }
  copyTo(t) {
    t.copyFrom(this);
    return t;
  }
  toString() {
    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
  }
};
function mt(t) {
  const e = t.length;
  if (e < 6) {
    return 1;
  }
  let s = 0;
  for (let i = 0, n = t[e - 2], r = t[e - 1]; i < e; i += 2) {
    const e = t[i];
    const a = t[i + 1];
    s += (e - n) * (a + r);
    n = e;
    r = a;
  }
  if (s < 0) {
    return -1;
  } else {
    return 1;
  }
}
function bt(t, e, s, i, n, r) {
  const a = n - s;
  const o = r - i;
  const h = a * a + o * o;
  let l;
  let c;
  let u = -1;
  if (h !== 0) {
    u = ((t - s) * a + (e - i) * o) / h;
  }
  if (u < 0) {
    l = s;
    c = i;
  } else if (u > 1) {
    l = n;
    c = r;
  } else {
    l = s + u * a;
    c = i + u * o;
  }
  const d = t - l;
  const f = e - c;
  return d * d + f * f;
}
var _t = class t {
  constructor(...t) {
    this.type = "polygon";
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const t = [];
      for (let s = 0, i = e.length; s < i; s++) {
        t.push(e[s].x, e[s].y);
      }
      e = t;
    }
    this.points = e;
    this.closePath = true;
  }
  isClockwise() {
    let t = 0;
    const e = this.points;
    const s = e.length;
    for (let i = 0; i < s; i += 2) {
      const n = e[i];
      const r = e[i + 1];
      t += (e[(i + 2) % s] - n) * (e[(i + 3) % s] + r);
    }
    return t < 0;
  }
  containsPolygon(t) {
    const e = this.getBounds(undefined);
    const s = t.getBounds(undefined);
    if (!e.containsRect(s)) {
      return false;
    }
    const i = t.points;
    for (let n = 0; n < i.length; n += 2) {
      const t = i[n];
      const e = i[n + 1];
      if (!this.contains(t, e)) {
        return false;
      }
    }
    return true;
  }
  clone() {
    const e = this.points.slice();
    const s = new t(e);
    s.closePath = this.closePath;
    return s;
  }
  contains(t, e) {
    let s = false;
    const i = this.points.length / 2;
    for (let n = 0, r = i - 1; n < i; r = n++) {
      const i = this.points[n * 2];
      const a = this.points[n * 2 + 1];
      const o = this.points[r * 2];
      const h = this.points[r * 2 + 1];
      if (a > e != h > e && t < (e - a) / (h - a) * (o - i) + i) {
        s = !s;
      }
    }
    return s;
  }
  strokeContains(t, e, s, i = 0.5) {
    const {
      points: n
    } = this;
    const r = s * (i === 0.5 ? i : (i - 0.5) * mt(n) + 0.5);
    const a = s - r;
    const o = r * r;
    const h = a * a;
    const l = n.length - (this.closePath ? 0 : 2);
    for (let c = 0; c < l; c += 2) {
      const s = n[c];
      const i = n[c + 1];
      const r = n[(c + 2) % n.length];
      const a = n[(c + 3) % n.length];
      if (bt(t, e, s, i, r, a) <= (Math.sign((r - s) * (e - i) - (a - i) * (t - s)) < 0 ? o : h)) {
        return true;
      }
    }
    return false;
  }
  getBounds(t) {
    t ||= new c();
    const e = this.points;
    let s = Infinity;
    let i = -Infinity;
    let n = Infinity;
    let r = -Infinity;
    for (let a = 0, o = e.length; a < o; a += 2) {
      const t = e[a];
      const o = e[a + 1];
      s = t < s ? t : s;
      i = t > i ? t : i;
      n = o < n ? o : n;
      r = o > r ? o : r;
    }
    t.x = s;
    t.width = i - s;
    t.y = n;
    t.height = r - n;
    return t;
  }
  copyFrom(t) {
    this.points = t.points.slice();
    this.closePath = t.closePath;
    return this;
  }
  copyTo(t) {
    t.copyFrom(this);
    return t;
  }
  toString() {
    return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t, e) => `${t}, ${e}`, "")}]`;
  }
  get lastX() {
    return this.points[this.points.length - 2];
  }
  get lastY() {
    return this.points[this.points.length - 1];
  }
  get x() {
    o("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead.");
    return this.points[this.points.length - 2];
  }
  get y() {
    o("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead.");
    return this.points[this.points.length - 1];
  }
  get startX() {
    return this.points[0];
  }
  get startY() {
    return this.points[1];
  }
};
var vt = (t, e, s, i, n, r, a) => {
  const o = t - s;
  const h = e - i;
  const l = Math.sqrt(o * o + h * h);
  return l >= n - r && l <= n + a;
};
var Mt = class t {
  constructor(t = 0, e = 0, s = 0, i = 0, n = 20) {
    this.type = "roundedRectangle";
    this.x = t;
    this.y = e;
    this.width = s;
    this.height = i;
    this.radius = n;
  }
  getBounds(t) {
    t ||= new c();
    t.x = this.x;
    t.y = this.y;
    t.width = this.width;
    t.height = this.height;
    return t;
  }
  clone() {
    return new t(this.x, this.y, this.width, this.height, this.radius);
  }
  copyFrom(t) {
    this.x = t.x;
    this.y = t.y;
    this.width = t.width;
    this.height = t.height;
    this.radius = t.radius;
    return this;
  }
  copyTo(t) {
    t.copyFrom(this);
    return t;
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }
    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
      const s = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (e >= this.y + s && e <= this.y + this.height - s || t >= this.x + s && t <= this.x + this.width - s) {
        return true;
      }
      let i = t - (this.x + s);
      let n = e - (this.y + s);
      const r = s * s;
      if (i * i + n * n <= r) {
        return true;
      }
      i = t - (this.x + this.width - s);
      if (i * i + n * n <= r) {
        return true;
      }
      n = e - (this.y + this.height - s);
      if (i * i + n * n <= r) {
        return true;
      }
      i = t - (this.x + s);
      if (i * i + n * n <= r) {
        return true;
      }
    }
    return false;
  }
  strokeContains(t, e, s, i = 0.5) {
    const {
      x: n,
      y: r,
      width: a,
      height: o
    } = this;
    const h = Math.max(0, Math.min(this.radius, Math.min(a, o) / 2));
    const l = s * (1 - i);
    const c = s - l;
    const u = n + h;
    const d = r + h;
    const f = n + a;
    const p = r + o;
    return (t >= n - l && t <= n + c || t >= f - c && t <= f + l) && e >= d && e <= d + (o - h * 2) || (e >= r - l && e <= r + c || e >= p - c && e <= p + l) && t >= u && t <= u + (a - h * 2) || t < u && e < d && vt(t, e, u, d, h, c, l) || t > f - h && e < d && vt(t, e, f - h, d, h, c, l) || t > f - h && e > p - h && vt(t, e, f - h, p - h, h, c, l) || t < u && e > p - h && vt(t, e, u, p - h, h, c, l);
  }
  toString() {
    return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
  }
};
var St = class {
  constructor() {
    this.instructions = new m();
  }
  init(t) {
    const e = t.maxTextures;
    if (this.batcher) {
      this.batcher._updateMaxTextures(e);
    } else {
      this.batcher = this._createBatcher(e);
    }
    this.instructions.reset();
  }
  destroy() {
    this.batcher.destroy();
    this.instructions.destroy();
    this.batcher = null;
    this.instructions = null;
  }
};
var Pt = class {
  constructor() {
    this.batches = [];
  }
  reset() {
    if (this.batches) {
      this.batches.forEach(t => {
        a.return(t);
      });
    }
    if (this.graphicsData) {
      a.return(this.graphicsData);
    }
    this.isBatchable = false;
    this.context = null;
    this.batches.length = 0;
    this.graphicsData = null;
  }
  destroy() {
    this.reset();
    this.batches = null;
  }
};
var kt = class {
  constructor(t, e) {
    this._renderer = t;
    this._managedContexts = new _({
      renderer: t,
      type: "resource",
      name: e
    });
  }
  getContextRenderData(t) {
    return this._getGpuData(t).graphicsData || this._initContextRenderData(t);
  }
  updateGpuContext(t) {
    const e = !!this._getGpuData(t);
    const s = this._getGpuData(t) || this._initContext(t);
    if (t.dirty || !e) {
      if (e) {
        s.reset();
        s.context = t;
      }
      this._buildContextData(t, s);
      const i = t.batchMode;
      if (t.customShader || i === "no-batch") {
        s.isBatchable = false;
      } else {
        s.isBatchable = i !== "auto" || this._getGeometrySize(s).attributes < 400;
      }
      t.dirty = false;
    }
    return s;
  }
  getGpuContext(t) {
    return this._getGpuData(t) || this._initContext(t);
  }
  _getGpuData(t) {
    return t._gpuData[this._renderer.uid];
  }
  _initContextRenderData(t) {
    const e = this._renderer.limits.maxBatchableTextures;
    const s = this._getGpuData(t);
    const i = this._getRenderData(e, s);
    const {
      batches: n
    } = s;
    s.graphicsData = i;
    const {
      attributes: r,
      indices: a
    } = this._getGeometrySize(s);
    for (let c = 0; c < n.length; c++) {
      n[c].applyTransform = false;
    }
    const o = i.batcher;
    o.ensureAttributeBuffer(r);
    o.ensureIndexBuffer(a);
    o.begin();
    for (let c = 0; c < n.length; c++) {
      o.add(n[c]);
    }
    o.finish(i.instructions);
    const h = o.geometry;
    h.indexBuffer.setDataWithSize(o.indexBuffer, o.indexSize, true);
    h.buffers[0].setDataWithSize(o.attributeBuffer.float32View, o.attributeSize, true);
    const l = o.batches;
    for (let c = 0; c < o.batchIndex; c++) {
      const t = l[c];
      t.bindGroup = v(t.textures.textures, t.textures.count, e);
    }
    return i;
  }
  _initContext(t) {
    const e = this._createGpuContext();
    e.context = t;
    t._gpuData[this._renderer.uid] = e;
    this._managedContexts.add(t);
    return e;
  }
  destroy() {
    this._managedContexts.destroy();
    this._renderer = null;
  }
};
function wt(t, e, s, i, n, r, a, o = null) {
  let h = 0;
  s *= e;
  n *= r;
  const l = o.a;
  const c = o.b;
  const u = o.c;
  const d = o.d;
  const f = o.tx;
  const p = o.ty;
  while (h < a) {
    const a = t[s];
    const o = t[s + 1];
    i[n] = l * a + u * o + f;
    i[n + 1] = c * a + d * o + p;
    n += r;
    s += e;
    h++;
  }
}
function Tt(t, e, s, i) {
  let n = 0;
  for (e *= s; n < i;) {
    t[e] = 0;
    t[e + 1] = 0;
    e += s;
    n++;
  }
}
function Ct(t, e, s, i, n) {
  const r = e.a;
  const a = e.b;
  const o = e.c;
  const h = e.d;
  const l = e.tx;
  const c = e.ty;
  s ||= 0;
  i ||= 2;
  n ||= t.length / i - s;
  let u = s * i;
  for (let d = 0; d < n; d++) {
    const e = t[u];
    const s = t[u + 1];
    t[u] = r * e + o * s + l;
    t[u + 1] = a * e + h * s + c;
    u += i;
  }
}
var zt = new f();
var Dt = class {
  constructor() {
    this.packAsQuad = false;
    this.topology = "triangle-list";
    this.applyTransform = true;
    this.roundPixels = 0;
    this._batcher = null;
    this._batch = null;
  }
  get blendMode() {
    if (this.renderable && this.applyTransform) {
      return this.renderable.groupBlendMode;
    } else {
      return "normal";
    }
  }
  get color() {
    const t = this.baseColor;
    const s = t >> 16 | t & 65280 | (t & 255) << 16;
    const i = this.renderable;
    if (i) {
      return e(s, i.groupColor) + (this.alpha * i.groupAlpha * 255 << 24);
    } else {
      return s + (this.alpha * 255 << 24);
    }
  }
  get transform() {
    return this.renderable?.groupTransform || zt;
  }
  reset() {
    this.applyTransform = true;
    this.renderable = null;
    this.topology = "triangle-list";
  }
  destroy() {
    this.renderable = null;
    this.texture = null;
    this._batcher = null;
    this._batch = null;
  }
};
var Rt = class extends Dt {
  constructor() {
    super(...arguments);
    this.batcherName = "default";
  }
  get uvs() {
    return this.geometryData.uvs;
  }
  get positions() {
    return this.geometryData.vertices;
  }
  get indices() {
    return this.geometryData.indices;
  }
  copyTo(t) {
    t.indexOffset = this.indexOffset;
    t.indexSize = this.indexSize;
    t.attributeOffset = this.attributeOffset;
    t.attributeSize = this.attributeSize;
    t.baseColor = this.baseColor;
    t.alpha = this.alpha;
    t.texture = this.texture;
    t.geometryData = this.geometryData;
    t.topology = this.topology;
  }
  destroy() {
    super.destroy();
    this.geometryData = null;
  }
};
var qt = {
  extension: {
    type: h.ShapeBuilder,
    name: "circle"
  },
  build(t, e) {
    let s;
    let i;
    let n;
    let r;
    let a;
    let o;
    if (t.type === "circle") {
      const e = t;
      a = o = e.radius;
      if (a <= 0) {
        return false;
      }
      s = e.x;
      i = e.y;
      n = r = 0;
    } else if (t.type === "ellipse") {
      const e = t;
      a = e.halfWidth;
      o = e.halfHeight;
      if (a <= 0 || o <= 0) {
        return false;
      }
      s = e.x;
      i = e.y;
      n = r = 0;
    } else {
      const e = t;
      const h = e.width / 2;
      const l = e.height / 2;
      s = e.x + h;
      i = e.y + l;
      a = o = Math.max(0, Math.min(e.radius, Math.min(h, l)));
      n = h - a;
      r = l - o;
    }
    if (n < 0 || r < 0) {
      return false;
    }
    const h = Math.ceil(Math.sqrt(a + o) * 2.3);
    const l = h * 8 + (n ? 4 : 0) + (r ? 4 : 0);
    if (l === 0) {
      return false;
    }
    if (h === 0) {
      e[0] = e[6] = s + n;
      e[1] = e[3] = i + r;
      e[2] = e[4] = s - n;
      e[5] = e[7] = i - r;
      return true;
    }
    let c = 0;
    let u = h * 4 + (n ? 2 : 0) + 2;
    let d = u;
    let f = l;
    let p = n + a;
    let y = r;
    let x = s + p;
    let g = s - p;
    let m = i + y;
    e[c++] = x;
    e[c++] = m;
    e[--u] = m;
    e[--u] = g;
    if (r) {
      const t = i - y;
      e[d++] = g;
      e[d++] = t;
      e[--f] = t;
      e[--f] = x;
    }
    for (let _ = 1; _ < h; _++) {
      const t = Math.PI / 2 * (_ / h);
      const l = n + Math.cos(t) * a;
      const p = r + Math.sin(t) * o;
      const y = s + l;
      const x = s - l;
      const g = i + p;
      const m = i - p;
      e[c++] = y;
      e[c++] = g;
      e[--u] = g;
      e[--u] = x;
      e[d++] = x;
      e[d++] = m;
      e[--f] = m;
      e[--f] = y;
    }
    p = n;
    y = r + o;
    x = s + p;
    g = s - p;
    m = i + y;
    const b = i - y;
    e[c++] = x;
    e[c++] = m;
    e[--f] = b;
    e[--f] = x;
    if (n) {
      e[c++] = g;
      e[c++] = m;
      e[--f] = b;
      e[--f] = g;
    }
    return true;
  },
  triangulate(t, e, s, i, n, r) {
    if (t.length === 0) {
      return;
    }
    let a = 0;
    let o = 0;
    for (let c = 0; c < t.length; c += 2) {
      a += t[c];
      o += t[c + 1];
    }
    a /= t.length / 2;
    o /= t.length / 2;
    let h = i;
    e[h * s] = a;
    e[h * s + 1] = o;
    const l = h++;
    for (let c = 0; c < t.length; c += 2) {
      e[h * s] = t[c];
      e[h * s + 1] = t[c + 1];
      if (c > 0) {
        n[r++] = h;
        n[r++] = l;
        n[r++] = h - 1;
      }
      h++;
    }
    n[r++] = l + 1;
    n[r++] = l;
    n[r++] = h - 1;
  }
};
var Lt = {
  ...qt,
  extension: {
    ...qt.extension,
    name: "ellipse"
  }
};
var Gt = {
  ...qt,
  extension: {
    ...qt.extension,
    name: "roundedRectangle"
  }
};
var It = 0.0001;
var Bt = 0.0001;
function Ft(t, e, s, i, n, r, a, o) {
  let h;
  let l;
  if (a) {
    h = i;
    l = -s;
  } else {
    h = -i;
    l = s;
  }
  const c = t - s * n + h;
  const u = e - i * n + l;
  const d = t + s * r + h;
  const f = e + i * r + l;
  o.push(c, u);
  o.push(d, f);
  return 2;
}
function Nt(t, e, s, i, n, r, a, o) {
  const h = s - t;
  const l = i - e;
  let c = Math.atan2(h, l);
  let u = Math.atan2(n - t, r - e);
  if (o && c < u) {
    c += Math.PI * 2;
  } else if (!o && c > u) {
    u += Math.PI * 2;
  }
  let d = c;
  const f = u - c;
  const p = Math.abs(f);
  const y = Math.sqrt(h * h + l * l);
  const x = 1 + (p * 15 * Math.sqrt(y) / Math.PI | 0);
  const g = f / x;
  d += g;
  if (o) {
    a.push(t, e);
    a.push(s, i);
    for (let s = 1, i = d; s < x; s++, i += g) {
      a.push(t, e);
      a.push(t + Math.sin(i) * y, e + Math.cos(i) * y);
    }
    a.push(t, e);
    a.push(n, r);
  } else {
    a.push(s, i);
    a.push(t, e);
    for (let s = 1, i = d; s < x; s++, i += g) {
      a.push(t + Math.sin(i) * y, e + Math.cos(i) * y);
      a.push(t, e);
    }
    a.push(n, r);
    a.push(t, e);
  }
  return x * 2;
}
function At(t, e, s, i, n, r) {
  const a = It;
  if (t.length === 0) {
    return;
  }
  const o = e;
  let h = o.alignment;
  if (e.alignment !== 0.5) {
    let e = mt(t);
    if (s) {
      e *= -1;
    }
    h = (h - 0.5) * e + 0.5;
  }
  const l = new u(t[0], t[1]);
  const c = new u(t[t.length - 2], t[t.length - 1]);
  const d = i;
  const f = Math.abs(l.x - c.x) < a && Math.abs(l.y - c.y) < a;
  if (d) {
    t = t.slice();
    if (f) {
      t.pop();
      t.pop();
      c.set(t[t.length - 2], t[t.length - 1]);
    }
    const e = (l.x + c.x) * 0.5;
    const s = (c.y + l.y) * 0.5;
    t.unshift(e, s);
    t.push(e, s);
  }
  const p = n;
  const y = t.length / 2;
  let x = t.length;
  const g = p.length / 2;
  const m = o.width / 2;
  const b = m * m;
  const _ = o.miterLimit * o.miterLimit;
  let v = t[0];
  let M = t[1];
  let S = t[2];
  let P = t[3];
  let k = 0;
  let w = 0;
  let T = -(M - P);
  let C = v - S;
  let z = 0;
  let D = 0;
  let R = Math.sqrt(T * T + C * C);
  T /= R;
  C /= R;
  T *= m;
  C *= m;
  const q = (1 - h) * 2;
  const L = h * 2;
  if (!d) {
    if (o.cap === "round") {
      x += Nt(v - T * (q - L) * 0.5, M - C * (q - L) * 0.5, v - T * q, M - C * q, v + T * L, M + C * L, p, true) + 2;
    } else if (o.cap === "square") {
      x += Ft(v, M, T, C, q, L, true, p);
    }
  }
  p.push(v - T * q, M - C * q);
  p.push(v + T * L, M + C * L);
  for (let u = 1; u < y - 1; ++u) {
    v = t[(u - 1) * 2];
    M = t[(u - 1) * 2 + 1];
    S = t[u * 2];
    P = t[u * 2 + 1];
    k = t[(u + 1) * 2];
    w = t[(u + 1) * 2 + 1];
    T = -(M - P);
    C = v - S;
    R = Math.sqrt(T * T + C * C);
    T /= R;
    C /= R;
    T *= m;
    C *= m;
    z = -(P - w);
    D = S - k;
    R = Math.sqrt(z * z + D * D);
    z /= R;
    D /= R;
    z *= m;
    D *= m;
    const e = S - v;
    const s = M - P;
    const i = S - k;
    const n = w - P;
    const r = e * i + s * n;
    const a = s * i - n * e;
    const h = a < 0;
    if (Math.abs(a) < Math.abs(r) * 0.001) {
      p.push(S - T * q, P - C * q);
      p.push(S + T * L, P + C * L);
      if (r >= 0) {
        if (o.join === "round") {
          x += Nt(S, P, S - T * q, P - C * q, S - z * q, P - D * q, p, false) + 4;
        } else {
          x += 2;
        }
        p.push(S - z * L, P - D * L);
        p.push(S + z * q, P + D * q);
      }
      continue;
    }
    const l = (-T + v) * (-C + P) - (-T + S) * (-C + M);
    const c = (-z + k) * (-D + P) - (-z + S) * (-D + w);
    const d = (e * c - i * l) / a;
    const f = (n * l - s * c) / a;
    const y = (d - S) * (d - S) + (f - P) * (f - P);
    const g = S + (d - S) * q;
    const G = P + (f - P) * q;
    const I = S - (d - S) * L;
    const B = P - (f - P) * L;
    const F = h ? q : L;
    if (y <= Math.min(e * e + s * s, i * i + n * n) + F * F * b) {
      if (o.join === "bevel" || y / b > _) {
        if (h) {
          p.push(g, G);
          p.push(S + T * L, P + C * L);
          p.push(g, G);
          p.push(S + z * L, P + D * L);
        } else {
          p.push(S - T * q, P - C * q);
          p.push(I, B);
          p.push(S - z * q, P - D * q);
          p.push(I, B);
        }
        x += 2;
      } else if (o.join === "round") {
        if (h) {
          p.push(g, G);
          p.push(S + T * L, P + C * L);
          x += Nt(S, P, S + T * L, P + C * L, S + z * L, P + D * L, p, true) + 4;
          p.push(g, G);
          p.push(S + z * L, P + D * L);
        } else {
          p.push(S - T * q, P - C * q);
          p.push(I, B);
          x += Nt(S, P, S - T * q, P - C * q, S - z * q, P - D * q, p, false) + 4;
          p.push(S - z * q, P - D * q);
          p.push(I, B);
        }
      } else {
        p.push(g, G);
        p.push(I, B);
      }
    } else {
      p.push(S - T * q, P - C * q);
      p.push(S + T * L, P + C * L);
      if (o.join === "round") {
        x += h ? Nt(S, P, S + T * L, P + C * L, S + z * L, P + D * L, p, true) + 2 : Nt(S, P, S - T * q, P - C * q, S - z * q, P - D * q, p, false) + 2;
      } else if (o.join === "miter" && y / b <= _) {
        if (h) {
          p.push(I, B);
          p.push(I, B);
        } else {
          p.push(g, G);
          p.push(g, G);
        }
        x += 2;
      }
      p.push(S - z * q, P - D * q);
      p.push(S + z * L, P + D * L);
      x += 2;
    }
  }
  v = t[(y - 2) * 2];
  M = t[(y - 2) * 2 + 1];
  S = t[(y - 1) * 2];
  P = t[(y - 1) * 2 + 1];
  T = -(M - P);
  C = v - S;
  R = Math.sqrt(T * T + C * C);
  T /= R;
  C /= R;
  T *= m;
  C *= m;
  p.push(S - T * q, P - C * q);
  p.push(S + T * L, P + C * L);
  if (!d) {
    if (o.cap === "round") {
      x += Nt(S - T * (q - L) * 0.5, P - C * (q - L) * 0.5, S - T * q, P - C * q, S + T * L, P + C * L, p, false) + 2;
    } else if (o.cap === "square") {
      x += Ft(S, P, T, C, q, L, false, p);
    }
  }
  for (let u = g; u < x + g - 2; ++u) {
    v = p[u * 2];
    M = p[u * 2 + 1];
    S = p[(u + 1) * 2];
    P = p[(u + 1) * 2 + 1];
    k = p[(u + 2) * 2];
    w = p[(u + 2) * 2 + 1];
    if (!(Math.abs(v * (P - w) + S * (w - M) + k * (M - P)) < 1e-8)) {
      r.push(u, u + 1, u + 2);
    }
  }
}
function $t(t, e, s, i) {
  const n = It;
  if (t.length === 0) {
    return;
  }
  const r = t[0];
  const a = t[1];
  const o = t[t.length - 2];
  const h = t[t.length - 1];
  const l = e || Math.abs(r - o) < n && Math.abs(a - h) < n;
  const c = s;
  const u = t.length / 2;
  const d = c.length / 2;
  for (let f = 0; f < u; f++) {
    c.push(t[f * 2]);
    c.push(t[f * 2 + 1]);
  }
  for (let f = 0; f < u - 1; f++) {
    i.push(d + f, d + f + 1);
  }
  if (l) {
    i.push(d + u - 1, d);
  }
}
function Ht(t, e, s, i, n, r, a) {
  const o = ct(t, e, 2);
  if (!o) {
    return;
  }
  for (let l = 0; l < o.length; l += 3) {
    r[a++] = o[l] + n;
    r[a++] = o[l + 1] + n;
    r[a++] = o[l + 2] + n;
  }
  let h = n * i;
  for (let l = 0; l < t.length; l += 2) {
    s[h] = t[l];
    s[h + 1] = t[l + 1];
    h += i;
  }
}
var Wt = [];
var jt = {
  extension: {
    type: h.ShapeBuilder,
    name: "polygon"
  },
  build(t, e) {
    for (let s = 0; s < t.points.length; s++) {
      e[s] = t.points[s];
    }
    return true;
  },
  triangulate(t, e, s, i, n, r) {
    Ht(t, Wt, e, s, i, n, r);
  }
};
var Ot = {
  extension: {
    type: h.ShapeBuilder,
    name: "rectangle"
  },
  build(t, e) {
    const s = t;
    const i = s.x;
    const n = s.y;
    const r = s.width;
    const a = s.height;
    return r > 0 && a > 0 && (e[0] = i, e[1] = n, e[2] = i + r, e[3] = n, e[4] = i + r, e[5] = n + a, e[6] = i, e[7] = n + a, true);
  },
  triangulate(t, e, s, i, n, r) {
    let a = 0;
    e[(i *= s) + a] = t[0];
    e[i + a + 1] = t[1];
    a += s;
    e[i + a] = t[2];
    e[i + a + 1] = t[3];
    a += s;
    e[i + a] = t[6];
    e[i + a + 1] = t[7];
    a += s;
    e[i + a] = t[4];
    e[i + a + 1] = t[5];
    a += s;
    const o = i / s;
    n[r++] = o;
    n[r++] = o + 1;
    n[r++] = o + 2;
    n[r++] = o + 1;
    n[r++] = o + 3;
    n[r++] = o + 2;
  }
};
var Ut = {
  extension: {
    type: h.ShapeBuilder,
    name: "triangle"
  },
  build: (t, e) => {
    e[0] = t.x;
    e[1] = t.y;
    e[2] = t.x2;
    e[3] = t.y2;
    e[4] = t.x3;
    e[5] = t.y3;
    return true;
  },
  triangulate(t, e, s, i, n, r) {
    let a = 0;
    e[(i *= s) + a] = t[0];
    e[i + a + 1] = t[1];
    a += s;
    e[i + a] = t[2];
    e[i + a + 1] = t[3];
    a += s;
    e[i + a] = t[4];
    e[i + a + 1] = t[5];
    const o = i / s;
    n[r++] = o;
    n[r++] = o + 1;
    n[r++] = o + 2;
  }
};
var Vt = [{
  offset: 0,
  color: "white"
}, {
  offset: 1,
  color: "black"
}];
var Zt = class e {
  constructor(...s) {
    this.uid = l("fillGradient");
    this._tick = 0;
    this.type = "linear";
    this.colorStops = [];
    let i = function (t) {
      let e = t[0] ?? {};
      if (typeof e == "number" || t[1]) {
        o("8.5.2", "use options object instead");
        e = {
          type: "linear",
          start: {
            x: t[0],
            y: t[1]
          },
          end: {
            x: t[2],
            y: t[3]
          },
          textureSpace: t[4],
          textureSize: t[5] ?? Xt.defaultLinearOptions.textureSize
        };
      }
      return e;
    }(s);
    i = {
      ...(i.type === "radial" ? e.defaultRadialOptions : e.defaultLinearOptions),
      ...t(i)
    };
    this._textureSize = i.textureSize;
    this._wrapMode = i.wrapMode;
    if (i.type === "radial") {
      this.center = i.center;
      this.outerCenter = i.outerCenter ?? this.center;
      this.innerRadius = i.innerRadius;
      this.outerRadius = i.outerRadius;
      this.scale = i.scale;
      this.rotation = i.rotation;
    } else {
      this.start = i.start;
      this.end = i.end;
    }
    this.textureSpace = i.textureSpace;
    this.type = i.type;
    i.colorStops.forEach(t => {
      this.addColorStop(t.offset, t.color);
    });
  }
  addColorStop(t, e) {
    this.colorStops.push({
      offset: t,
      color: r.shared.setValue(e).toHexa()
    });
    return this;
  }
  buildLinearGradient() {
    if (this.texture) {
      return;
    }
    let {
      x: t,
      y: e
    } = this.start;
    let {
      x: s,
      y: i
    } = this.end;
    let r = s - t;
    let a = i - e;
    const o = r < 0 || a < 0;
    if (this._wrapMode === "clamp-to-edge") {
      if (r < 0) {
        const e = t;
        t = s;
        s = e;
        r *= -1;
      }
      if (a < 0) {
        const t = e;
        e = i;
        i = t;
        a *= -1;
      }
    }
    const h = this.colorStops.length ? this.colorStops : Vt;
    const l = this._textureSize;
    const {
      canvas: c,
      context: u
    } = Yt(l, 1);
    const d = o ? u.createLinearGradient(this._textureSize, 0, 0, 0) : u.createLinearGradient(0, 0, this._textureSize, 0);
    Et(d, h);
    u.fillStyle = d;
    u.fillRect(0, 0, l, 1);
    this.texture = new n({
      source: new M({
        resource: c,
        addressMode: this._wrapMode
      })
    });
    const p = Math.sqrt(r * r + a * a);
    const y = Math.atan2(a, r);
    const x = new f();
    x.scale(p / l, 1);
    x.rotate(y);
    x.translate(t, e);
    if (this.textureSpace === "local") {
      x.scale(l, l);
    }
    this.transform = x;
  }
  buildGradient() {
    if (!this.texture) {
      this._tick++;
    }
    if (this.type === "linear") {
      this.buildLinearGradient();
    } else {
      this.buildRadialGradient();
    }
  }
  buildRadialGradient() {
    if (this.texture) {
      return;
    }
    const t = this.colorStops.length ? this.colorStops : Vt;
    const e = this._textureSize;
    const {
      canvas: s,
      context: i
    } = Yt(e, e);
    const {
      x: r,
      y: a
    } = this.center;
    const {
      x: o,
      y: h
    } = this.outerCenter;
    const l = this.innerRadius;
    const c = this.outerRadius;
    const u = o - c;
    const d = h - c;
    const p = e / (c * 2);
    const y = (r - u) * p;
    const x = (a - d) * p;
    const g = i.createRadialGradient(y, x, l * p, (o - u) * p, (h - d) * p, c * p);
    Et(g, t);
    i.fillStyle = t[t.length - 1].color;
    i.fillRect(0, 0, e, e);
    i.fillStyle = g;
    i.translate(y, x);
    i.rotate(this.rotation);
    i.scale(1, this.scale);
    i.translate(-y, -x);
    i.fillRect(0, 0, e, e);
    this.texture = new n({
      source: new M({
        resource: s,
        addressMode: this._wrapMode
      })
    });
    const m = new f();
    if (this.textureSpace === "local") {
      m.scale(c * 2, c * 2);
    } else {
      m.scale(1 / p, 1 / p);
    }
    m.translate(u, d);
    this.transform = m;
  }
  destroy() {
    this.texture?.destroy(true);
    this.texture = null;
    this.transform = null;
    this.colorStops = [];
    this.start = null;
    this.end = null;
    this.center = null;
    this.outerCenter = null;
  }
  get styleKey() {
    return `fill-gradient-${this.uid}-${this._tick}`;
  }
};
Zt.defaultLinearOptions = {
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 0,
    y: 1
  },
  colorStops: [],
  textureSpace: "local",
  type: "linear",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
};
Zt.defaultRadialOptions = {
  center: {
    x: 0.5,
    y: 0.5
  },
  innerRadius: 0,
  outerRadius: 0.5,
  colorStops: [],
  scale: 1,
  rotation: 0,
  textureSpace: "local",
  type: "radial",
  textureSize: 256,
  wrapMode: "clamp-to-edge"
};
var Xt = Zt;
function Et(t, e) {
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    t.addColorStop(i.offset, i.color);
  }
}
function Yt(t, e) {
  const s = i.get().createCanvas(t, e);
  return {
    canvas: s,
    context: s.getContext("2d")
  };
}
var Kt = new f();
var Qt = new c();
var Jt = new f();
function te(t, e, s, i) {
  const n = e.matrix ? t.copyFrom(e.matrix).invert() : t.identity();
  if (e.textureSpace === "local") {
    const t = s.getBounds(Qt);
    if (e.width) {
      t.pad(e.width);
    }
    const {
      x: i,
      y: r
    } = t;
    const a = 1 / t.width;
    const o = 1 / t.height;
    const h = -i * a;
    const l = -r * o;
    const c = n.a;
    const u = n.b;
    const d = n.c;
    const f = n.d;
    n.a *= a;
    n.b *= a;
    n.c *= o;
    n.d *= o;
    n.tx = h * c + l * d + n.tx;
    n.ty = h * u + l * f + n.ty;
  } else if (e.texture.rotate) {
    const {
      uvs: t,
      orig: s
    } = e.texture;
    n.scale(1 / s.width, 1 / s.height);
    n.prepend(Jt.set(t.x1 - t.x0, t.y1 - t.y0, t.x3 - t.x0, t.y3 - t.y0, t.x0, t.y0));
  } else {
    n.translate(e.texture.frame.x, e.texture.frame.y);
    n.scale(1 / e.texture.source.width, 1 / e.texture.source.height);
  }
  const r = e.texture.source.style;
  if (!(e.fill instanceof Xt) && r.addressMode === "clamp-to-edge") {
    r.addressMode = "repeat";
    r.update();
  }
  if (i) {
    n.append(Kt.copyFrom(i).invert());
  }
  return n;
}
var ee = {};
x.handleByMap(h.ShapeBuilder, ee);
x.add(Ot, jt, Ut, qt, Lt, Gt);
var se = new c();
var ie = new f();
function ne(t, e) {
  const {
    geometryData: s,
    batches: i
  } = e;
  i.length = 0;
  s.indices.length = 0;
  s.vertices.length = 0;
  s.uvs.length = 0;
  for (let n = 0; n < t.instructions.length; n++) {
    const e = t.instructions[n];
    if (e.action === "texture") {
      re(e.data, i, s);
    } else if (e.action === "fill" || e.action === "stroke") {
      const t = e.action === "stroke";
      const n = e.data.path.shapePath;
      const r = e.data.style;
      const a = e.data.hole;
      if (t && a) {
        ae(a.shapePath, r, true, i, s);
      }
      if (a) {
        n.shapePrimitives[n.shapePrimitives.length - 1].holes = a.shapePath.shapePrimitives;
      }
      ae(n, r, t, i, s);
    }
  }
}
function re(t, e, s) {
  const i = [];
  const n = ee.rectangle;
  const r = se;
  r.x = t.dx;
  r.y = t.dy;
  r.width = t.dw;
  r.height = t.dh;
  const o = t.transform;
  if (!n.build(r, i)) {
    return;
  }
  const {
    vertices: h,
    uvs: l,
    indices: c
  } = s;
  const u = c.length;
  const d = h.length / 2;
  if (o) {
    Ct(i, o);
  }
  n.triangulate(i, h, 2, d, c, u);
  const f = t.image;
  const p = f.uvs;
  l.push(p.x0, p.y0, p.x1, p.y1, p.x3, p.y3, p.x2, p.y2);
  const y = a.get(Rt);
  y.indexOffset = u;
  y.indexSize = c.length - u;
  y.attributeOffset = d;
  y.attributeSize = h.length / 2 - d;
  y.baseColor = t.style;
  y.alpha = t.alpha;
  y.texture = f;
  y.geometryData = s;
  e.push(y);
}
function ae(t, e, s, i, r) {
  const {
    vertices: o,
    uvs: h,
    indices: l
  } = r;
  t.shapePrimitives.forEach(({
    shape: t,
    transform: c,
    holes: u
  }) => {
    const d = [];
    const f = ee[t.type];
    if (!f.build(t, d)) {
      return;
    }
    const p = l.length;
    const y = o.length / 2;
    let x = "triangle-list";
    if (c) {
      Ct(d, c);
    }
    if (s) {
      const s = t.closePath ?? true;
      const i = e;
      if (i.pixelLine) {
        $t(d, s, o, l);
        x = "line-list";
      } else {
        At(d, i, false, s, o, l);
      }
    } else if (u) {
      const t = [];
      const e = d.slice();
      (function (t) {
        const e = [];
        for (let s = 0; s < t.length; s++) {
          const i = t[s].shape;
          const n = [];
          if (ee[i.type].build(i, n)) {
            e.push(n);
          }
        }
        return e;
      })(u).forEach(s => {
        t.push(e.length / 2);
        e.push(...s);
      });
      Ht(e, t, o, 2, y, l, p);
    } else {
      f.triangulate(d, o, 2, y, l, p);
    }
    const g = h.length / 2;
    const m = e.texture;
    if (m !== n.WHITE) {
      const s = te(ie, e, t, c);
      wt(o, 2, y, h, g, 2, o.length / 2 - y, s);
    } else {
      Tt(h, g, 2, o.length / 2 - y);
    }
    const b = a.get(Rt);
    b.indexOffset = p;
    b.indexSize = l.length - p;
    b.attributeOffset = y;
    b.attributeSize = o.length / 2 - y;
    b.baseColor = e.color;
    b.alpha = e.alpha;
    b.texture = m;
    b.geometryData = r;
    b.topology = x;
    i.push(b);
  });
}
var oe = class extends Pt {
  constructor() {
    super(...arguments);
    this.geometryData = {
      vertices: [],
      uvs: [],
      indices: []
    };
  }
  reset() {
    super.reset();
    this.geometryData.indices.length = 0;
    this.geometryData.vertices.length = 0;
    this.geometryData.uvs.length = 0;
  }
  destroy() {
    super.destroy();
    this.geometryData = null;
  }
};
var he = class extends St {
  get geometry() {
    o(d, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead.");
    return this.batcher.geometry;
  }
  _createBatcher(t) {
    return new b({
      maxTextures: t
    });
  }
};
var le = class t extends kt {
  constructor(t) {
    super(t, "graphicsContext");
  }
  init(e) {
    t.defaultOptions.bezierSmoothness = e?.bezierSmoothness ?? t.defaultOptions.bezierSmoothness;
  }
  _createGpuContext() {
    return new oe();
  }
  _buildContextData(t, e) {
    ne(t, e);
  }
  _getGeometrySize(t) {
    const {
      vertices: e,
      indices: s
    } = t.geometryData;
    return {
      attributes: e.length,
      indices: s.length
    };
  }
  _getRenderData(t) {
    return a.get(he, {
      maxTextures: t
    });
  }
};
le.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem],
  name: "graphicsContext"
};
le.defaultOptions = {
  bezierSmoothness: 0.5
};
var ce = le;
var ue = 1.1920929e-7;
function de(t, e, s, i, n, r, a, o, h, l) {
  let c = (1 - Math.min(0.99, Math.max(0, l ?? ce.defaultOptions.bezierSmoothness))) / 1;
  c *= c;
  (function (t, e, s, i, n, r, a, o, h, l) {
    fe(t, e, s, i, n, r, a, o, h, l, 0);
    h.push(a, o);
  })(e, s, i, n, r, a, o, h, t, c);
  return t;
}
function fe(t, e, s, i, n, r, a, o, h, l, c) {
  if (c > 8) {
    return;
  }
  const u = (t + s) / 2;
  const d = (e + i) / 2;
  const f = (s + n) / 2;
  const p = (i + r) / 2;
  const y = (n + a) / 2;
  const x = (r + o) / 2;
  const g = (u + f) / 2;
  const m = (d + p) / 2;
  const b = (f + y) / 2;
  const _ = (p + x) / 2;
  const v = (g + b) / 2;
  const M = (m + _) / 2;
  if (c > 0) {
    let c = a - t;
    let u = o - e;
    const d = Math.abs((s - a) * u - (i - o) * c);
    const f = Math.abs((n - a) * u - (r - o) * c);
    if (d > ue && f > ue) {
      if ((d + f) * (d + f) <= l * (c * c + u * u)) {
        h.push(v, M);
        return;
      }
    } else if (d > ue) {
      if (d * d <= l * (c * c + u * u)) {
        h.push(v, M);
        return;
      }
    } else if (f > ue) {
      if (f * f <= l * (c * c + u * u)) {
        h.push(v, M);
        return;
      }
    } else {
      c = v - (t + a) / 2;
      u = M - (e + o) / 2;
      if (c * c + u * u <= l) {
        h.push(v, M);
        return;
      }
    }
  }
  fe(t, e, u, d, g, m, v, M, h, l, c + 1);
  fe(v, M, b, _, y, x, a, o, h, l, c + 1);
}
function pe(t, e, s, i, n, r, a, o) {
  let h = (1 - Math.min(0.99, Math.max(0, o ?? ce.defaultOptions.bezierSmoothness))) / 1;
  h *= h;
  (function (t, e, s, i, n, r, a, o) {
    ye(a, t, e, s, i, n, r, o, 0);
    a.push(n, r);
  })(e, s, i, n, r, a, t, h);
  return t;
}
function ye(t, e, s, i, n, r, a, o, h) {
  if (h > 8) {
    return;
  }
  const l = (e + i) / 2;
  const c = (s + n) / 2;
  const u = (i + r) / 2;
  const d = (n + a) / 2;
  const f = (l + u) / 2;
  const p = (c + d) / 2;
  let y = r - e;
  let x = a - s;
  const g = Math.abs((i - r) * x - (n - a) * y);
  if (g > 1.1920929e-7) {
    if (g * g <= o * (y * y + x * x)) {
      t.push(f, p);
      return;
    }
  } else {
    y = f - (e + r) / 2;
    x = p - (s + a) / 2;
    if (y * y + x * x <= o) {
      t.push(f, p);
      return;
    }
  }
  ye(t, e, s, l, c, f, p, o, h + 1);
  ye(t, f, p, u, d, r, a, o, h + 1);
}
function xe(t, e, s, i, n, r, a, o) {
  let h = Math.abs(n - r);
  if (!a && n > r || a && r > n) {
    h = Math.PI * 2 - h;
  }
  o ||= Math.max(6, Math.floor(Math.pow(i, 1 / 3) * 6 * (h / Math.PI)));
  let l = h / (o = Math.max(o, 3));
  let c = n;
  l *= a ? -1 : 1;
  for (let u = 0; u < o + 1; u++) {
    const n = e + Math.cos(c) * i;
    const r = s + Math.sin(c) * i;
    t.push(n, r);
    c += l;
  }
}
function ge(t, e, s, i, n, r) {
  const a = t[t.length - 2];
  const o = t[t.length - 1] - s;
  const h = a - e;
  const l = n - s;
  const c = i - e;
  const u = Math.abs(o * c - h * l);
  if (u < 1e-8 || r === 0) {
    if (t[t.length - 2] !== e || t[t.length - 1] !== s) {
      t.push(e, s);
    }
    return;
  }
  const d = o * o + h * h;
  const f = l * l + c * c;
  const p = o * l + h * c;
  const y = r * Math.sqrt(d) / u;
  const x = r * Math.sqrt(f) / u;
  const g = y * p / d;
  const m = x * p / f;
  const b = y * c + x * h;
  const _ = y * l + x * o;
  const v = h * (x + g);
  const M = o * (x + g);
  const S = c * (y + m);
  const P = l * (y + m);
  xe(t, b + e, _ + s, r, Math.atan2(M - _, v - b), Math.atan2(P - _, S - b), h * l > c * o);
}
var me = Math.PI * 2;
var be = {
  centerX: 0,
  centerY: 0,
  ang1: 0,
  ang2: 0
};
var _e = ({
  x: t,
  y: e
}, s, i, n, r, a, o, h) => {
  const l = n * (t *= s) - r * (e *= i);
  const c = r * t + n * e;
  h.x = l + a;
  h.y = c + o;
  return h;
};
function ve(t, e) {
  const s = e === -1.5707963267948966 ? -0.551915024494 : 4 / 3 * Math.tan(e / 4);
  const i = e === 1.5707963267948966 ? 0.551915024494 : s;
  const n = Math.cos(t);
  const r = Math.sin(t);
  const a = Math.cos(t + e);
  const o = Math.sin(t + e);
  return [{
    x: n - r * i,
    y: r + n * i
  }, {
    x: a + o * i,
    y: o - a * i
  }, {
    x: a,
    y: o
  }];
}
var Me = (t, e, s, i) => {
  let n = t * s + e * i;
  if (n > 1) {
    n = 1;
  }
  if (n < -1) {
    n = -1;
  }
  return (t * i - e * s < 0 ? -1 : 1) * Math.acos(n);
};
function Se(t, e, s, i, n, r, a, o = 0, h = 0, l = 0) {
  if (r === 0 || a === 0) {
    return;
  }
  const c = Math.sin(o * me / 360);
  const u = Math.cos(o * me / 360);
  const d = u * (e - i) / 2 + c * (s - n) / 2;
  const f = -c * (e - i) / 2 + u * (s - n) / 2;
  if (d === 0 && f === 0) {
    return;
  }
  r = Math.abs(r);
  a = Math.abs(a);
  const p = Math.pow(d, 2) / Math.pow(r, 2) + Math.pow(f, 2) / Math.pow(a, 2);
  if (p > 1) {
    r *= Math.sqrt(p);
    a *= Math.sqrt(p);
  }
  ((t, e, s, i, n, r, a, o, h, l, c, u, d) => {
    const f = Math.pow(n, 2);
    const p = Math.pow(r, 2);
    const y = Math.pow(c, 2);
    const x = Math.pow(u, 2);
    let g = f * p - f * x - p * y;
    if (g < 0) {
      g = 0;
    }
    g /= f * x + p * y;
    g = Math.sqrt(g) * (a === o ? -1 : 1);
    const m = g * n / r * u;
    const b = g * -r / n * c;
    const _ = l * m - h * b + (t + s) / 2;
    const v = h * m + l * b + (e + i) / 2;
    const M = (c - m) / n;
    const S = (u - b) / r;
    const P = (-c - m) / n;
    const k = (-u - b) / r;
    const w = Me(1, 0, M, S);
    let T = Me(M, S, P, k);
    if (o === 0 && T > 0) {
      T -= me;
    }
    if (o === 1 && T < 0) {
      T += me;
    }
    d.centerX = _;
    d.centerY = v;
    d.ang1 = w;
    d.ang2 = T;
  })(e, s, i, n, r, a, h, l, c, u, d, f, be);
  let {
    ang1: y,
    ang2: x
  } = be;
  const {
    centerX: g,
    centerY: m
  } = be;
  let b = Math.abs(x) / (me / 4);
  if (Math.abs(1 - b) < 1e-7) {
    b = 1;
  }
  const _ = Math.max(Math.ceil(b), 1);
  x /= _;
  let v = t[t.length - 2];
  let M = t[t.length - 1];
  const S = {
    x: 0,
    y: 0
  };
  for (let P = 0; P < _; P++) {
    const e = ve(y, x);
    const {
      x: s,
      y: i
    } = _e(e[0], r, a, u, c, g, m, S);
    const {
      x: n,
      y: o
    } = _e(e[1], r, a, u, c, g, m, S);
    const {
      x: h,
      y: l
    } = _e(e[2], r, a, u, c, g, m, S);
    de(t, v, M, s, i, n, o, h, l);
    v = h;
    M = l;
    y += x;
  }
}
function Pe(t, e, s) {
  const i = (t, e) => {
    const s = e.x - t.x;
    const i = e.y - t.y;
    const n = Math.sqrt(s * s + i * i);
    return {
      len: n,
      nx: s / n,
      ny: i / n
    };
  };
  const n = (e, s) => {
    if (e === 0) {
      t.moveTo(s.x, s.y);
    } else {
      t.lineTo(s.x, s.y);
    }
  };
  let r = e[e.length - 1];
  for (let a = 0; a < e.length; a++) {
    const o = e[a % e.length];
    const h = o.radius ?? s;
    if (h <= 0) {
      n(a, o);
      r = o;
      continue;
    }
    const l = e[(a + 1) % e.length];
    const c = i(o, r);
    const u = i(o, l);
    if (c.len < 0.0001 || u.len < 0.0001) {
      n(a, o);
      r = o;
      continue;
    }
    let d = Math.asin(c.nx * u.ny - c.ny * u.nx);
    let f = 1;
    let p = false;
    if (c.nx * u.nx - c.ny * -u.ny < 0) {
      if (d < 0) {
        d = Math.PI + d;
      } else {
        d = Math.PI - d;
        f = -1;
        p = true;
      }
    } else if (d > 0) {
      f = -1;
      p = true;
    }
    const y = d / 2;
    let x;
    let g = Math.abs(Math.cos(y) * h / Math.sin(y));
    if (g > Math.min(c.len / 2, u.len / 2)) {
      g = Math.min(c.len / 2, u.len / 2);
      x = Math.abs(g * Math.sin(y) / Math.cos(y));
    } else {
      x = h;
    }
    const m = o.x + u.nx * g + -u.ny * x * f;
    const b = o.y + u.ny * g + u.nx * x * f;
    const _ = Math.atan2(c.ny, c.nx) + Math.PI / 2 * f;
    const v = Math.atan2(u.ny, u.nx) - Math.PI / 2 * f;
    if (a === 0) {
      t.moveTo(m + Math.cos(_) * x, b + Math.sin(_) * x);
    }
    t.arc(m, b, x, _, v, p);
    r = o;
  }
}
function ke(t, e, s, i) {
  const n = (t, e) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
  const r = (t, e, s) => ({
    x: t.x + (e.x - t.x) * s,
    y: t.y + (e.y - t.y) * s
  });
  const a = e.length;
  for (let o = 0; o < a; o++) {
    const h = e[(o + 1) % a];
    const l = h.radius ?? s;
    if (l <= 0) {
      if (o === 0) {
        t.moveTo(h.x, h.y);
      } else {
        t.lineTo(h.x, h.y);
      }
      continue;
    }
    const c = e[o];
    const u = e[(o + 2) % a];
    const d = n(c, h);
    let f;
    f = d < 0.0001 ? h : r(h, c, Math.min(d / 2, l) / d);
    const p = n(u, h);
    let y;
    y = p < 0.0001 ? h : r(h, u, Math.min(p / 2, l) / p);
    if (o === 0) {
      t.moveTo(f.x, f.y);
    } else {
      t.lineTo(f.x, f.y);
    }
    t.quadraticCurveTo(h.x, h.y, y.x, y.y, i);
  }
}
var we = new c();
var Te = class {
  constructor(t) {
    this.shapePrimitives = [];
    this._currentPoly = null;
    this._bounds = new y();
    this._graphicsPath2D = t;
    this.signed = t.checkForHoles;
  }
  moveTo(t, e) {
    this.startPoly(t, e);
    return this;
  }
  lineTo(t, e) {
    this._ensurePoly();
    const s = this._currentPoly.points;
    const i = s[s.length - 2];
    const n = s[s.length - 1];
    if (i !== t || n !== e) {
      s.push(t, e);
    }
    return this;
  }
  arc(t, e, s, i, n, r) {
    this._ensurePoly(false);
    xe(this._currentPoly.points, t, e, s, i, n, r);
    return this;
  }
  arcTo(t, e, s, i, n) {
    this._ensurePoly();
    ge(this._currentPoly.points, t, e, s, i, n);
    return this;
  }
  arcToSvg(t, e, s, i, n, r, a) {
    Se(this._currentPoly.points, this._currentPoly.lastX, this._currentPoly.lastY, r, a, t, e, s, i, n);
    return this;
  }
  bezierCurveTo(t, e, s, i, n, r, a) {
    this._ensurePoly();
    const o = this._currentPoly;
    de(this._currentPoly.points, o.lastX, o.lastY, t, e, s, i, n, r, a);
    return this;
  }
  quadraticCurveTo(t, e, s, i, n) {
    this._ensurePoly();
    const r = this._currentPoly;
    pe(this._currentPoly.points, r.lastX, r.lastY, t, e, s, i, n);
    return this;
  }
  closePath() {
    this.endPoly(true);
    return this;
  }
  addPath(t, e) {
    this.endPoly();
    if (e && !e.isIdentity()) {
      (t = t.clone(true)).transform(e);
    }
    const s = this.shapePrimitives;
    const i = s.length;
    for (let n = 0; n < t.instructions.length; n++) {
      const e = t.instructions[n];
      this[e.action](...e.data);
    }
    if (t.checkForHoles && s.length - i > 1) {
      let t = null;
      for (let e = i; e < s.length; e++) {
        const i = s[e];
        if (i.shape.type === "polygon") {
          const n = i.shape;
          const r = t?.shape;
          if (r && r.containsPolygon(n)) {
            t.holes ||= [];
            t.holes.push(i);
            s.copyWithin(e, e + 1);
            s.length--;
            e--;
          } else {
            t = i;
          }
        }
      }
    }
    return this;
  }
  finish(t = false) {
    this.endPoly(t);
  }
  rect(t, e, s, i, n) {
    this.drawShape(new c(t, e, s, i), n);
    return this;
  }
  circle(t, e, s, i) {
    this.drawShape(new xt(t, e, s), i);
    return this;
  }
  poly(t, e, s) {
    const i = new _t(t);
    i.closePath = e;
    this.drawShape(i, s);
    return this;
  }
  regularPoly(t, e, s, i, n = 0, r) {
    i = Math.max(i | 0, 3);
    const a = Math.PI * -1 / 2 + n;
    const o = Math.PI * 2 / i;
    const h = [];
    for (let l = 0; l < i; l++) {
      const i = a - l * o;
      h.push(t + s * Math.cos(i), e + s * Math.sin(i));
    }
    this.poly(h, true, r);
    return this;
  }
  roundPoly(t, e, s, i, n, r = 0, a) {
    i = Math.max(i | 0, 3);
    if (n <= 0) {
      return this.regularPoly(t, e, s, i, r);
    }
    const o = s * Math.sin(Math.PI / i) - 0.001;
    n = Math.min(n, o);
    const h = Math.PI * -1 / 2 + r;
    const l = Math.PI * 2 / i;
    const c = (i - 2) * Math.PI / i / 2;
    for (let u = 0; u < i; u++) {
      const i = u * l + h;
      const r = t + s * Math.cos(i);
      const o = e + s * Math.sin(i);
      const d = i + Math.PI + c;
      const f = i - Math.PI - c;
      const p = r + n * Math.cos(d);
      const y = o + n * Math.sin(d);
      const x = r + n * Math.cos(f);
      const g = o + n * Math.sin(f);
      if (u === 0) {
        this.moveTo(p, y);
      } else {
        this.lineTo(p, y);
      }
      this.quadraticCurveTo(r, o, x, g, a);
    }
    return this.closePath();
  }
  roundShape(t, e, s = false, i) {
    if (t.length < 3) {
      return this;
    } else {
      if (s) {
        ke(this, t, e, i);
      } else {
        Pe(this, t, e);
      }
      return this.closePath();
    }
  }
  filletRect(t, e, s, i, n) {
    if (n === 0) {
      return this.rect(t, e, s, i);
    }
    const r = Math.min(s, i) / 2;
    const a = Math.min(r, Math.max(-r, n));
    const o = t + s;
    const h = e + i;
    const l = a < 0 ? -a : 0;
    const c = Math.abs(a);
    return this.moveTo(t, e + c).arcTo(t + l, e + l, t + c, e, c).lineTo(o - c, e).arcTo(o - l, e + l, o, e + c, c).lineTo(o, h - c).arcTo(o - l, h - l, t + s - c, h, c).lineTo(t + c, h).arcTo(t + l, h - l, t, h - c, c).closePath();
  }
  chamferRect(t, e, s, i, n, r) {
    if (n <= 0) {
      return this.rect(t, e, s, i);
    }
    const a = Math.min(n, Math.min(s, i) / 2);
    const o = t + s;
    const h = e + i;
    const l = [t + a, e, o - a, e, o, e + a, o, h - a, o - a, h, t + a, h, t, h - a, t, e + a];
    for (let c = l.length - 1; c >= 2; c -= 2) {
      if (l[c] === l[c - 2] && l[c - 1] === l[c - 3]) {
        l.splice(c - 1, 2);
      }
    }
    return this.poly(l, true, r);
  }
  ellipse(t, e, s, i, n) {
    this.drawShape(new gt(t, e, s, i), n);
    return this;
  }
  roundRect(t, e, s, i, n, r) {
    this.drawShape(new Mt(t, e, s, i, n), r);
    return this;
  }
  drawShape(t, e) {
    this.endPoly();
    this.shapePrimitives.push({
      shape: t,
      transform: e
    });
    return this;
  }
  startPoly(t, e) {
    let s = this._currentPoly;
    if (s) {
      this.endPoly();
    }
    s = new _t();
    s.points.push(t, e);
    this._currentPoly = s;
    return this;
  }
  endPoly(t = false) {
    const e = this._currentPoly;
    if (e && e.points.length > 2) {
      e.closePath = t;
      this.shapePrimitives.push({
        shape: e
      });
    }
    this._currentPoly = null;
    return this;
  }
  _ensurePoly(t = true) {
    if (!this._currentPoly && (this._currentPoly = new _t(), t)) {
      const t = this.shapePrimitives[this.shapePrimitives.length - 1];
      if (t) {
        let e = t.shape.x;
        let s = t.shape.y;
        if (t.transform && !t.transform.isIdentity()) {
          const i = t.transform;
          const n = e;
          e = i.a * e + i.c * s + i.tx;
          s = i.b * n + i.d * s + i.ty;
        }
        this._currentPoly.points.push(e, s);
      } else {
        this._currentPoly.points.push(0, 0);
      }
    }
  }
  buildPath() {
    const t = this._graphicsPath2D;
    this.shapePrimitives.length = 0;
    this._currentPoly = null;
    for (let e = 0; e < t.instructions.length; e++) {
      const s = t.instructions[e];
      this[s.action](...s.data);
    }
    this.finish();
  }
  get bounds() {
    const t = this._bounds;
    t.clear();
    const e = this.shapePrimitives;
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      const n = i.shape.getBounds(we);
      if (i.transform) {
        t.addRect(n, i.transform);
      } else {
        t.addRect(n);
      }
    }
    return t;
  }
};
var Ce = class t {
  constructor(t, e = false) {
    this.instructions = [];
    this.uid = l("graphicsPath");
    this._dirty = true;
    this.checkForHoles = e;
    if (typeof t == "string") {
      yt(t, this);
    } else {
      this.instructions = t?.slice() ?? [];
    }
  }
  get shapePath() {
    this._shapePath ||= new Te(this);
    if (this._dirty) {
      this._dirty = false;
      this._shapePath.buildPath();
    }
    return this._shapePath;
  }
  addPath(t, e) {
    t = t.clone();
    this.instructions.push({
      action: "addPath",
      data: [t, e]
    });
    this._dirty = true;
    return this;
  }
  arc(...t) {
    this.instructions.push({
      action: "arc",
      data: t
    });
    this._dirty = true;
    return this;
  }
  arcTo(...t) {
    this.instructions.push({
      action: "arcTo",
      data: t
    });
    this._dirty = true;
    return this;
  }
  arcToSvg(...t) {
    this.instructions.push({
      action: "arcToSvg",
      data: t
    });
    this._dirty = true;
    return this;
  }
  bezierCurveTo(...t) {
    this.instructions.push({
      action: "bezierCurveTo",
      data: t
    });
    this._dirty = true;
    return this;
  }
  bezierCurveToShort(t, e, s, i, n) {
    const r = this.instructions[this.instructions.length - 1];
    const a = this.getLastPoint(u.shared);
    let o = 0;
    let h = 0;
    if (r && r.action === "bezierCurveTo") {
      o = r.data[2];
      h = r.data[3];
      const t = a.x;
      const e = a.y;
      o = t + (t - o);
      h = e + (e - h);
    } else {
      o = a.x;
      h = a.y;
    }
    this.instructions.push({
      action: "bezierCurveTo",
      data: [o, h, t, e, s, i, n]
    });
    this._dirty = true;
    return this;
  }
  closePath() {
    this.instructions.push({
      action: "closePath",
      data: []
    });
    this._dirty = true;
    return this;
  }
  ellipse(...t) {
    this.instructions.push({
      action: "ellipse",
      data: t
    });
    this._dirty = true;
    return this;
  }
  lineTo(...t) {
    this.instructions.push({
      action: "lineTo",
      data: t
    });
    this._dirty = true;
    return this;
  }
  moveTo(...t) {
    this.instructions.push({
      action: "moveTo",
      data: t
    });
    return this;
  }
  quadraticCurveTo(...t) {
    this.instructions.push({
      action: "quadraticCurveTo",
      data: t
    });
    this._dirty = true;
    return this;
  }
  quadraticCurveToShort(t, e, s) {
    const i = this.instructions[this.instructions.length - 1];
    const n = this.getLastPoint(u.shared);
    let r = 0;
    let a = 0;
    if (i && i.action === "quadraticCurveTo") {
      r = i.data[0];
      a = i.data[1];
      const t = n.x;
      const e = n.y;
      r = t + (t - r);
      a = e + (e - a);
    } else {
      r = n.x;
      a = n.y;
    }
    this.instructions.push({
      action: "quadraticCurveTo",
      data: [r, a, t, e, s]
    });
    this._dirty = true;
    return this;
  }
  rect(t, e, s, i, n) {
    this.instructions.push({
      action: "rect",
      data: [t, e, s, i, n]
    });
    this._dirty = true;
    return this;
  }
  circle(t, e, s, i) {
    this.instructions.push({
      action: "circle",
      data: [t, e, s, i]
    });
    this._dirty = true;
    return this;
  }
  roundRect(...t) {
    this.instructions.push({
      action: "roundRect",
      data: t
    });
    this._dirty = true;
    return this;
  }
  poly(...t) {
    this.instructions.push({
      action: "poly",
      data: t
    });
    this._dirty = true;
    return this;
  }
  regularPoly(...t) {
    this.instructions.push({
      action: "regularPoly",
      data: t
    });
    this._dirty = true;
    return this;
  }
  roundPoly(...t) {
    this.instructions.push({
      action: "roundPoly",
      data: t
    });
    this._dirty = true;
    return this;
  }
  roundShape(...t) {
    this.instructions.push({
      action: "roundShape",
      data: t
    });
    this._dirty = true;
    return this;
  }
  filletRect(...t) {
    this.instructions.push({
      action: "filletRect",
      data: t
    });
    this._dirty = true;
    return this;
  }
  chamferRect(...t) {
    this.instructions.push({
      action: "chamferRect",
      data: t
    });
    this._dirty = true;
    return this;
  }
  star(t, e, s, i, n, r, a) {
    n ||= i / 2;
    const o = Math.PI * -1 / 2 + r;
    const h = s * 2;
    const l = Math.PI * 2 / h;
    const c = [];
    for (let u = 0; u < h; u++) {
      const s = u % 2 ? n : i;
      const r = u * l + o;
      c.push(t + s * Math.cos(r), e + s * Math.sin(r));
    }
    this.poly(c, true, a);
    return this;
  }
  clone(e = false) {
    const s = new t();
    s.checkForHoles = this.checkForHoles;
    if (e) {
      for (let t = 0; t < this.instructions.length; t++) {
        const e = this.instructions[t];
        s.instructions.push({
          action: e.action,
          data: e.data.slice()
        });
      }
    } else {
      s.instructions = this.instructions.slice();
    }
    return s;
  }
  clear() {
    this.instructions.length = 0;
    this._dirty = true;
    return this;
  }
  transform(t) {
    if (t.isIdentity()) {
      return this;
    }
    const e = t.a;
    const i = t.b;
    const n = t.c;
    const r = t.d;
    const a = t.tx;
    const o = t.ty;
    let h = 0;
    let l = 0;
    let c = 0;
    let u = 0;
    let d = 0;
    let f = 0;
    let p = 0;
    let y = 0;
    for (let x = 0; x < this.instructions.length; x++) {
      const g = this.instructions[x];
      const m = g.data;
      switch (g.action) {
        case "moveTo":
        case "lineTo":
          h = m[0];
          l = m[1];
          m[0] = e * h + n * l + a;
          m[1] = i * h + r * l + o;
          break;
        case "bezierCurveTo":
          c = m[0];
          u = m[1];
          d = m[2];
          f = m[3];
          h = m[4];
          l = m[5];
          m[0] = e * c + n * u + a;
          m[1] = i * c + r * u + o;
          m[2] = e * d + n * f + a;
          m[3] = i * d + r * f + o;
          m[4] = e * h + n * l + a;
          m[5] = i * h + r * l + o;
          break;
        case "quadraticCurveTo":
          c = m[0];
          u = m[1];
          h = m[2];
          l = m[3];
          m[0] = e * c + n * u + a;
          m[1] = i * c + r * u + o;
          m[2] = e * h + n * l + a;
          m[3] = i * h + r * l + o;
          break;
        case "arcToSvg":
          h = m[5];
          l = m[6];
          p = m[0];
          y = m[1];
          m[0] = e * p + n * y;
          m[1] = i * p + r * y;
          m[5] = e * h + n * l + a;
          m[6] = i * h + r * l + o;
          break;
        case "circle":
          m[4] = ze(m[3], t);
          break;
        case "rect":
          m[4] = ze(m[4], t);
          break;
        case "ellipse":
          m[8] = ze(m[8], t);
          break;
        case "roundRect":
        case "regularPoly":
        case "chamferRect":
          m[5] = ze(m[5], t);
          break;
        case "addPath":
          m[0].transform(t);
          break;
        case "poly":
          m[2] = ze(m[2], t);
          break;
        case "closePath":
          break;
        default:
          s("unknown transform action", g.action);
      }
    }
    this._dirty = true;
    return this;
  }
  get bounds() {
    return this.shapePath.bounds;
  }
  getLastPoint(t) {
    let e = this.instructions.length - 1;
    let s = this.instructions[e];
    if (!s) {
      t.x = 0;
      t.y = 0;
      return t;
    }
    while (s.action === "closePath") {
      e--;
      if (e < 0) {
        t.x = 0;
        t.y = 0;
        return t;
      }
      s = this.instructions[e];
    }
    switch (s.action) {
      case "moveTo":
      case "lineTo":
        t.x = s.data[0];
        t.y = s.data[1];
        break;
      case "quadraticCurveTo":
        t.x = s.data[2];
        t.y = s.data[3];
        break;
      case "bezierCurveTo":
        t.x = s.data[4];
        t.y = s.data[5];
        break;
      case "arc":
      case "arcToSvg":
        t.x = s.data[5];
        t.y = s.data[6];
        break;
      case "addPath":
        s.data[0].getLastPoint(t);
    }
    return t;
  }
};
function ze(t, e) {
  if (t) {
    return t.prepend(e);
  } else {
    return e.clone();
  }
}
function De(t, e, s) {
  const i = t.getAttribute(e);
  if (i) {
    return Number(i);
  } else {
    return s;
  }
}
function Re(t, e) {
  const s = t.querySelectorAll("defs");
  for (let i = 0; i < s.length; i++) {
    const t = s[i];
    for (let s = 0; s < t.children.length; s++) {
      const i = t.children[s];
      switch (i.nodeName.toLowerCase()) {
        case "lineargradient":
          e.defs[i.id] = Ie(i);
          break;
        case "radialgradient":
          e.defs[i.id] = Be(i);
      }
    }
  }
}
function qe(t, e, s) {
  const i = t.getAttribute(e);
  if (i?.trim().endsWith("%")) {
    const t = Number(i.trim().slice(0, -1));
    if (Number.isNaN(t)) {
      return s;
    } else {
      return t / 100;
    }
  }
  return De(t, e, s);
}
function Le(t) {
  if ((t.getAttribute("gradientUnits") || "objectBoundingBox") === "objectBoundingBox") {
    return "local";
  } else {
    return "global";
  }
}
function Ge(t) {
  const e = [];
  for (let s = 0; s < t.children.length; s++) {
    const i = t.children[s];
    const n = qe(i, "offset", 0);
    const a = r.shared.setValue(i.getAttribute("stop-color")).toNumber();
    e.push({
      offset: n,
      color: a
    });
  }
  return e;
}
function Ie(t) {
  const e = qe(t, "x1", 0);
  const s = qe(t, "y1", 0);
  const i = qe(t, "x2", 1);
  const n = qe(t, "y2", 0);
  return new Xt({
    type: "linear",
    start: {
      x: e,
      y: s
    },
    end: {
      x: i,
      y: n
    },
    textureSpace: Le(t),
    colorStops: Ge(t)
  });
}
function Be(t) {
  const e = qe(t, "cx", 0.5);
  const s = qe(t, "cy", 0.5);
  const i = qe(t, "r", 0.5);
  const n = qe(t, "fx", e);
  const r = qe(t, "fy", s);
  const a = qe(t, "fr", 0);
  return new Xt({
    type: "radial",
    center: {
      x: n,
      y: r
    },
    innerRadius: a,
    outerCenter: {
      x: e,
      y: s
    },
    outerRadius: i,
    textureSpace: Le(t),
    colorStops: Ge(t)
  });
}
function Fe(t) {
  const e = t.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
  if (e) {
    return e[1];
  } else {
    return "";
  }
}
var Ne = {
  fill: {
    type: "paint",
    default: 0
  },
  "fill-opacity": {
    type: "number",
    default: 1
  },
  stroke: {
    type: "paint",
    default: 0
  },
  "stroke-width": {
    type: "number",
    default: 1
  },
  "stroke-opacity": {
    type: "number",
    default: 1
  },
  "stroke-linecap": {
    type: "string",
    default: "butt"
  },
  "stroke-linejoin": {
    type: "string",
    default: "miter"
  },
  "stroke-miterlimit": {
    type: "number",
    default: 10
  },
  "stroke-dasharray": {
    type: "string",
    default: "none"
  },
  "stroke-dashoffset": {
    type: "number",
    default: 0
  },
  opacity: {
    type: "number",
    default: 1
  }
};
function Ae(t, e) {
  const s = t.getAttribute("style");
  const i = {};
  const n = {};
  const r = {
    strokeStyle: i,
    fillStyle: n,
    useFill: false,
    useStroke: false
  };
  for (const a in Ne) {
    const s = t.getAttribute(a);
    if (s) {
      $e(e, r, a, s.trim());
    }
  }
  if (s) {
    const t = s.split(";");
    for (let s = 0; s < t.length; s++) {
      const [i, n] = t[s].trim().split(":");
      if (Ne[i]) {
        $e(e, r, i, n.trim());
      }
    }
  }
  return {
    strokeStyle: r.useStroke ? i : null,
    fillStyle: r.useFill ? n : null,
    useFill: r.useFill,
    useStroke: r.useStroke
  };
}
function $e(t, e, s, i) {
  switch (s) {
    case "stroke":
      if (i !== "none") {
        if (i.startsWith("url(")) {
          const s = Fe(i);
          e.strokeStyle.fill = t.defs[s];
        } else {
          e.strokeStyle.color = r.shared.setValue(i).toNumber();
        }
        e.useStroke = true;
      }
      break;
    case "stroke-width":
      e.strokeStyle.width = Number(i);
      break;
    case "fill":
      if (i !== "none") {
        if (i.startsWith("url(")) {
          const s = Fe(i);
          e.fillStyle.fill = t.defs[s];
        } else {
          e.fillStyle.color = r.shared.setValue(i).toNumber();
        }
        e.useFill = true;
      }
      break;
    case "fill-opacity":
      e.fillStyle.alpha = Number(i);
      break;
    case "stroke-opacity":
      e.strokeStyle.alpha = Number(i);
      break;
    case "opacity":
      e.fillStyle.alpha = Number(i);
      e.strokeStyle.alpha = Number(i);
  }
}
function He(t) {
  if (t.length <= 2) {
    return true;
  }
  const e = t.map(t => t.area).sort((t, e) => e - t);
  const [s, i] = e;
  const n = e[e.length - 1];
  return !(s / i > 3) || !(i / n < 2);
}
function We(t, e = 0) {
  const s = t.instructions[e];
  if (!s || s.action !== "fill") {
    throw new Error(`Expected fill instruction at index ${e}, got ${s?.action || "undefined"}`);
  }
  return s.data;
}
function je(t) {
  return t.split(/(?=[Mm])/).filter(t => t.trim().length > 0);
}
function Oe(t) {
  const e = t.match(/[-+]?[0-9]*\.?[0-9]+/g);
  if (!e || e.length < 4) {
    return 0;
  }
  const s = e.map(Number);
  const i = [];
  const n = [];
  for (let h = 0; h < s.length; h += 2) {
    if (h + 1 < s.length) {
      i.push(s[h]);
      n.push(s[h + 1]);
    }
  }
  if (i.length === 0 || n.length === 0) {
    return 0;
  }
  const r = Math.min(...i);
  const a = Math.max(...i);
  const o = Math.min(...n);
  return (a - r) * (Math.max(...n) - o);
}
function Ue(t, e) {
  const s = new Ce(t, false);
  for (const i of s.instructions) {
    e.instructions.push(i);
  }
}
function Ve(t, e) {
  if (typeof t == "string") {
    const e = document.createElement("div");
    e.innerHTML = t.trim();
    t = e.querySelector("svg");
  }
  const s = {
    context: e,
    defs: {},
    path: new Ce()
  };
  Re(t, s);
  const i = t.children;
  const {
    fillStyle: n,
    strokeStyle: r
  } = Ae(t, s);
  for (let a = 0; a < i.length; a++) {
    const t = i[a];
    if (t.nodeName.toLowerCase() !== "defs") {
      Ze(t, s, n, r);
    }
  }
  return e;
}
function Ze(t, e, i, n) {
  const r = t.children;
  const {
    fillStyle: a,
    strokeStyle: o
  } = Ae(t, e);
  if (a && i) {
    i = {
      ...i,
      ...a
    };
  } else if (a) {
    i = a;
  }
  if (o && n) {
    n = {
      ...n,
      ...o
    };
  } else if (o) {
    n = o;
  }
  const h = !i && !n;
  let l;
  let c;
  let u;
  let d;
  let f;
  let p;
  let y;
  let x;
  let g;
  let m;
  let b;
  let _;
  let v;
  let M;
  let S;
  let P;
  let k;
  if (h) {
    i = {
      color: 0
    };
  }
  switch (t.nodeName.toLowerCase()) {
    case "path":
      {
        M = t.getAttribute("d");
        const s = t.getAttribute("fill-rule");
        const r = je(M);
        const a = s === "evenodd";
        const o = r.length > 1;
        if (a && o) {
          const t = r.map(t => ({
            path: t,
            area: Oe(t)
          }));
          t.sort((t, e) => e.area - t.area);
          if (r.length > 3 || !He(t)) {
            for (let s = 0; s < t.length; s++) {
              const r = t[s];
              const a = s === 0;
              e.context.beginPath();
              const o = new Ce(undefined, true);
              Ue(r.path, o);
              e.context.path(o);
              if (a) {
                if (i) {
                  e.context.fill(i);
                }
                if (n) {
                  e.context.stroke(n);
                }
              } else {
                e.context.cut();
              }
            }
          } else {
            for (let s = 0; s < t.length; s++) {
              const r = t[s];
              const a = s % 2 == 1;
              e.context.beginPath();
              const o = new Ce(undefined, true);
              Ue(r.path, o);
              e.context.path(o);
              if (a) {
                e.context.cut();
              } else {
                if (i) {
                  e.context.fill(i);
                }
                if (n) {
                  e.context.stroke(n);
                }
              }
            }
          }
        } else {
          S = new Ce(M, !s || s === "evenodd");
          e.context.path(S);
          if (i) {
            e.context.fill(i);
          }
          if (n) {
            e.context.stroke(n);
          }
        }
        break;
      }
    case "circle":
      y = De(t, "cx", 0);
      x = De(t, "cy", 0);
      g = De(t, "r", 0);
      e.context.ellipse(y, x, g, g);
      if (i) {
        e.context.fill(i);
      }
      if (n) {
        e.context.stroke(n);
      }
      break;
    case "rect":
      l = De(t, "x", 0);
      c = De(t, "y", 0);
      P = De(t, "width", 0);
      k = De(t, "height", 0);
      m = De(t, "rx", 0);
      b = De(t, "ry", 0);
      if (m || b) {
        e.context.roundRect(l, c, P, k, m || b);
      } else {
        e.context.rect(l, c, P, k);
      }
      if (i) {
        e.context.fill(i);
      }
      if (n) {
        e.context.stroke(n);
      }
      break;
    case "ellipse":
      y = De(t, "cx", 0);
      x = De(t, "cy", 0);
      m = De(t, "rx", 0);
      b = De(t, "ry", 0);
      e.context.beginPath();
      e.context.ellipse(y, x, m, b);
      if (i) {
        e.context.fill(i);
      }
      if (n) {
        e.context.stroke(n);
      }
      break;
    case "line":
      u = De(t, "x1", 0);
      d = De(t, "y1", 0);
      f = De(t, "x2", 0);
      p = De(t, "y2", 0);
      e.context.beginPath();
      e.context.moveTo(u, d);
      e.context.lineTo(f, p);
      if (n) {
        e.context.stroke(n);
      }
      break;
    case "polygon":
      v = t.getAttribute("points");
      _ = v.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi).map(Number);
      e.context.poly(_, true);
      if (i) {
        e.context.fill(i);
      }
      if (n) {
        e.context.stroke(n);
      }
      break;
    case "polyline":
      v = t.getAttribute("points");
      _ = v.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi).map(Number);
      e.context.poly(_, false);
      if (n) {
        e.context.stroke(n);
      }
      break;
    case "g":
    case "svg":
      break;
    default:
      s(`[SVG parser] <${t.nodeName}> elements unsupported`);
  }
  if (h) {
    i = null;
  }
  for (let s = 0; s < r.length; s++) {
    Ze(r[s], e, i, n);
  }
}
var Xe = {
  repeat: {
    addressModeU: "repeat",
    addressModeV: "repeat"
  },
  "repeat-x": {
    addressModeU: "repeat",
    addressModeV: "clamp-to-edge"
  },
  "repeat-y": {
    addressModeU: "clamp-to-edge",
    addressModeV: "repeat"
  },
  "no-repeat": {
    addressModeU: "clamp-to-edge",
    addressModeV: "clamp-to-edge"
  }
};
var Ee = class {
  constructor(t, e) {
    this.uid = l("fillPattern");
    this._tick = 0;
    this.transform = new f();
    const s = t.texture !== undefined ? t : {
      texture: t,
      repetition: e
    };
    this.texture = s.texture;
    this.textureSpace = s.textureSpace ?? "global";
    const i = s.repetition;
    if (i) {
      this.texture.source.style.addressModeU = Xe[i].addressModeU;
      this.texture.source.style.addressModeV = Xe[i].addressModeV;
    }
  }
  setTransform(t) {
    if (t) {
      if (this.transform.equals(t)) {
        return;
      }
      this.transform.copyFrom(t);
    } else {
      if (this.transform.isIdentity()) {
        return;
      }
      this.transform.identity();
    }
    this._tick++;
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    if (this._texture !== t) {
      this._texture = t;
      this._tick++;
    }
  }
  get styleKey() {
    return `fill-pattern-${this.uid}-${this._tick}`;
  }
  destroy() {
    this.texture.destroy(true);
    this.texture = null;
  }
};
function Ye(t) {
  return t instanceof Ee;
}
function Ke(t) {
  return t instanceof Xt;
}
function Qe(t, e, s) {
  t.fill = e;
  t.color = 16777215;
  t.texture = e.texture;
  t.matrix = e.transform;
  t.textureSpace = e.textureSpace;
  return {
    ...s,
    ...t
  };
}
function Je(t, e, s) {
  e.buildGradient();
  t.fill = e;
  t.color = 16777215;
  t.texture = e.texture;
  t.matrix = e.transform;
  t.textureSpace = e.textureSpace;
  return {
    ...s,
    ...t
  };
}
function ts(t, e) {
  if (t == null) {
    return null;
  }
  const s = {};
  const i = t;
  if (function (t) {
    return r.isColorLike(t);
  }(t)) {
    return function (t, e, s) {
      const i = r.shared.setValue(e ?? 0);
      t.color = i.toNumber();
      t.alpha = i.alpha === 1 ? s.alpha : i.alpha;
      t.texture = n.WHITE;
      return {
        ...s,
        ...t
      };
    }(s, t, e);
  } else if (function (t) {
    return t instanceof n;
  }(t)) {
    return function (t, e, s) {
      t.texture = e;
      return {
        ...s,
        ...t
      };
    }(s, t, e);
  } else if (Ye(t)) {
    return Qe(s, t, e);
  } else if (Ke(t)) {
    return Je(s, t, e);
  } else if (i.fill && Ye(i.fill)) {
    return Qe(i, i.fill, e);
  } else if (i.fill && Ke(i.fill)) {
    return Je(i, i.fill, e);
  } else {
    return function (t, e) {
      const s = {
        ...e,
        ...t
      };
      const i = r.shared.setValue(s.color);
      s.alpha *= i.alpha;
      s.color = i.toNumber();
      return s;
    }(i, e);
  }
}
function es(t, e) {
  const {
    width: s,
    alignment: i,
    miterLimit: n,
    cap: r,
    join: a,
    pixelLine: o,
    ...h
  } = e;
  const l = ts(t, h);
  if (l) {
    return {
      width: s,
      alignment: i,
      miterLimit: n,
      cap: r,
      join: a,
      pixelLine: o,
      ...l
    };
  } else {
    return null;
  }
}
function ss(t, e) {
  let s = 1;
  const i = t.shapePath.shapePrimitives;
  for (let n = 0; n < i.length; n++) {
    const t = i[n].shape;
    if (t.type !== "polygon") {
      continue;
    }
    const r = t.points;
    const a = r.length;
    if (a < 6) {
      continue;
    }
    const o = t.closePath;
    for (let i = 0; i < a; i += 2) {
      if (!o && (i === 0 || i === a - 2)) {
        continue;
      }
      const t = (i - 2 + a) % a;
      const n = (i + 2) % a;
      const h = r[t];
      const l = r[t + 1];
      const c = r[i];
      const u = r[i + 1];
      const d = h - c;
      const f = l - u;
      const p = r[n] - c;
      const y = r[n + 1] - u;
      const x = d * d + f * f;
      const g = p * p + y * y;
      if (x < 1e-12 || g < 1e-12) {
        continue;
      }
      let m = (d * p + f * y) / Math.sqrt(x * g);
      if (m < -1) {
        m = -1;
      } else if (m > 1) {
        m = 1;
      }
      const b = Math.sqrt((1 - m) * 0.5);
      if (b < 0.000001) {
        continue;
      }
      const _ = Math.min(1 / b, e);
      if (_ > s) {
        s = _;
      }
    }
  }
  return s;
}
var is = new u();
var ns = new f();
var rs = class t extends g {
  constructor() {
    super(...arguments);
    this._gpuData = Object.create(null);
    this.autoGarbageCollect = true;
    this._gcLastUsed = -1;
    this.uid = l("graphicsContext");
    this.dirty = true;
    this.batchMode = "auto";
    this.instructions = [];
    this.destroyed = false;
    this._activePath = new Ce();
    this._transform = new f();
    this._fillStyle = {
      ...t.defaultFillStyle
    };
    this._strokeStyle = {
      ...t.defaultStrokeStyle
    };
    this._stateStack = [];
    this._tick = 0;
    this._bounds = new y();
    this._boundsDirty = true;
  }
  clone() {
    const e = new t();
    e.batchMode = this.batchMode;
    e.instructions = this.instructions.slice();
    e._activePath = this._activePath.clone();
    e._transform = this._transform.clone();
    e._fillStyle = {
      ...this._fillStyle
    };
    e._strokeStyle = {
      ...this._strokeStyle
    };
    e._stateStack = this._stateStack.slice();
    e._bounds = this._bounds.clone();
    e._boundsDirty = true;
    return e;
  }
  get fillStyle() {
    return this._fillStyle;
  }
  set fillStyle(e) {
    this._fillStyle = ts(e, t.defaultFillStyle);
  }
  get strokeStyle() {
    return this._strokeStyle;
  }
  set strokeStyle(e) {
    this._strokeStyle = es(e, t.defaultStrokeStyle);
  }
  setFillStyle(e) {
    this._fillStyle = ts(e, t.defaultFillStyle);
    return this;
  }
  setStrokeStyle(e) {
    this._strokeStyle = ts(e, t.defaultStrokeStyle);
    return this;
  }
  texture(t, e, s, i, n, a) {
    this.instructions.push({
      action: "texture",
      data: {
        image: t,
        dx: s || 0,
        dy: i || 0,
        dw: n || t.frame.width,
        dh: a || t.frame.height,
        transform: this._transform.clone(),
        alpha: this._fillStyle.alpha,
        style: e || e === 0 ? r.shared.setValue(e).toNumber() : 16777215
      }
    });
    this.onUpdate();
    return this;
  }
  beginPath() {
    this._activePath = new Ce();
    return this;
  }
  fill(e, s) {
    let i;
    const n = this.instructions[this.instructions.length - 1];
    i = this._tick === 0 && n?.action === "stroke" ? n.data.path : this._activePath.clone();
    if (i) {
      if (e != null) {
        if (s !== undefined && typeof e == "number") {
          o(p, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead");
          e = {
            color: e,
            alpha: s
          };
        }
        this._fillStyle = ts(e, t.defaultFillStyle);
      }
      this.instructions.push({
        action: "fill",
        data: {
          style: this.fillStyle,
          path: i
        }
      });
      this.onUpdate();
      this._initNextPathLocation();
      this._tick = 0;
      return this;
    } else {
      return this;
    }
  }
  _initNextPathLocation() {
    const {
      x: t,
      y: e
    } = this._activePath.getLastPoint(u.shared);
    this._activePath.clear();
    this._activePath.moveTo(t, e);
  }
  stroke(e) {
    let s;
    const i = this.instructions[this.instructions.length - 1];
    s = this._tick === 0 && i?.action === "fill" ? i.data.path : this._activePath.clone();
    if (s) {
      if (e != null) {
        this._strokeStyle = es(e, t.defaultStrokeStyle);
      }
      this.instructions.push({
        action: "stroke",
        data: {
          style: this.strokeStyle,
          path: s
        }
      });
      this.onUpdate();
      this._initNextPathLocation();
      this._tick = 0;
      return this;
    } else {
      return this;
    }
  }
  cut() {
    for (let t = 0; t < 2; t++) {
      const e = this.instructions[this.instructions.length - 1 - t];
      const s = this._activePath.clone();
      if (e && (e.action === "stroke" || e.action === "fill")) {
        if (!e.data.hole) {
          e.data.hole = s;
          break;
        }
        e.data.hole.addPath(s);
      }
    }
    this._initNextPathLocation();
    return this;
  }
  arc(t, e, s, i, n, r) {
    this._tick++;
    const a = this._transform;
    this._activePath.arc(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, s, i, n, r);
    return this;
  }
  arcTo(t, e, s, i, n) {
    this._tick++;
    const r = this._transform;
    this._activePath.arcTo(r.a * t + r.c * e + r.tx, r.b * t + r.d * e + r.ty, r.a * s + r.c * i + r.tx, r.b * s + r.d * i + r.ty, n);
    return this;
  }
  arcToSvg(t, e, s, i, n, r, a) {
    this._tick++;
    const o = this._transform;
    this._activePath.arcToSvg(t, e, s, i, n, o.a * r + o.c * a + o.tx, o.b * r + o.d * a + o.ty);
    return this;
  }
  bezierCurveTo(t, e, s, i, n, r, a) {
    this._tick++;
    const o = this._transform;
    this._activePath.bezierCurveTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * s + o.c * i + o.tx, o.b * s + o.d * i + o.ty, o.a * n + o.c * r + o.tx, o.b * n + o.d * r + o.ty, a);
    return this;
  }
  closePath() {
    this._tick++;
    this._activePath?.closePath();
    return this;
  }
  ellipse(t, e, s, i) {
    this._tick++;
    this._activePath.ellipse(t, e, s, i, this._transform.clone());
    return this;
  }
  circle(t, e, s) {
    this._tick++;
    this._activePath.circle(t, e, s, this._transform.clone());
    return this;
  }
  path(t) {
    this._tick++;
    this._activePath.addPath(t, this._transform.clone());
    return this;
  }
  lineTo(t, e) {
    this._tick++;
    const s = this._transform;
    this._activePath.lineTo(s.a * t + s.c * e + s.tx, s.b * t + s.d * e + s.ty);
    return this;
  }
  moveTo(t, e) {
    this._tick++;
    const s = this._transform;
    const i = this._activePath.instructions;
    const n = s.a * t + s.c * e + s.tx;
    const r = s.b * t + s.d * e + s.ty;
    if (i.length === 1 && i[0].action === "moveTo") {
      i[0].data[0] = n;
      i[0].data[1] = r;
      return this;
    } else {
      this._activePath.moveTo(n, r);
      return this;
    }
  }
  quadraticCurveTo(t, e, s, i, n) {
    this._tick++;
    const r = this._transform;
    this._activePath.quadraticCurveTo(r.a * t + r.c * e + r.tx, r.b * t + r.d * e + r.ty, r.a * s + r.c * i + r.tx, r.b * s + r.d * i + r.ty, n);
    return this;
  }
  rect(t, e, s, i) {
    this._tick++;
    this._activePath.rect(t, e, s, i, this._transform.clone());
    return this;
  }
  roundRect(t, e, s, i, n) {
    this._tick++;
    this._activePath.roundRect(t, e, s, i, n, this._transform.clone());
    return this;
  }
  poly(t, e) {
    this._tick++;
    this._activePath.poly(t, e, this._transform.clone());
    return this;
  }
  regularPoly(t, e, s, i, n = 0, r) {
    this._tick++;
    this._activePath.regularPoly(t, e, s, i, n, r);
    return this;
  }
  roundPoly(t, e, s, i, n, r) {
    this._tick++;
    this._activePath.roundPoly(t, e, s, i, n, r);
    return this;
  }
  roundShape(t, e, s, i) {
    this._tick++;
    this._activePath.roundShape(t, e, s, i);
    return this;
  }
  filletRect(t, e, s, i, n) {
    this._tick++;
    this._activePath.filletRect(t, e, s, i, n);
    return this;
  }
  chamferRect(t, e, s, i, n, r) {
    this._tick++;
    this._activePath.chamferRect(t, e, s, i, n, r);
    return this;
  }
  star(t, e, s, i, n = 0, r = 0) {
    this._tick++;
    this._activePath.star(t, e, s, i, n, r, this._transform.clone());
    return this;
  }
  svg(t) {
    this._tick++;
    Ve(t, this);
    return this;
  }
  restore() {
    const t = this._stateStack.pop();
    if (t) {
      this._transform = t.transform;
      this._fillStyle = t.fillStyle;
      this._strokeStyle = t.strokeStyle;
    }
    return this;
  }
  save() {
    this._stateStack.push({
      transform: this._transform.clone(),
      fillStyle: {
        ...this._fillStyle
      },
      strokeStyle: {
        ...this._strokeStyle
      }
    });
    return this;
  }
  getTransform() {
    return this._transform;
  }
  resetTransform() {
    this._transform.identity();
    return this;
  }
  rotate(t) {
    this._transform.rotate(t);
    return this;
  }
  scale(t, e = t) {
    this._transform.scale(t, e);
    return this;
  }
  setTransform(t, e, s, i, n, r) {
    if (t instanceof f) {
      this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
      return this;
    } else {
      this._transform.set(t, e, s, i, n, r);
      return this;
    }
  }
  transform(t, e, s, i, n, r) {
    if (t instanceof f) {
      this._transform.append(t);
      return this;
    } else {
      ns.set(t, e, s, i, n, r);
      this._transform.append(ns);
      return this;
    }
  }
  translate(t, e = t) {
    this._transform.translate(t, e);
    return this;
  }
  clear() {
    this._activePath.clear();
    this.instructions.length = 0;
    this.resetTransform();
    this.onUpdate();
    return this;
  }
  onUpdate() {
    this._boundsDirty = true;
    this.dirty = true;
    this.emit("update", this, 16);
  }
  get bounds() {
    if (!this._boundsDirty) {
      return this._bounds;
    }
    this._boundsDirty = false;
    const t = this._bounds;
    t.clear();
    for (let e = 0; e < this.instructions.length; e++) {
      const s = this.instructions[e];
      const i = s.action;
      if (i === "fill") {
        const e = s.data;
        t.addBounds(e.path.bounds);
      } else if (i === "texture") {
        const e = s.data;
        t.addFrame(e.dx, e.dy, e.dx + e.dw, e.dy + e.dh, e.transform);
      }
      if (i === "stroke") {
        const e = s.data;
        const i = e.style.alignment;
        let n = e.style.width * (1 - i);
        if (e.style.join === "miter") {
          n *= ss(e.path, e.style.miterLimit);
        }
        const r = e.path.bounds;
        t.addFrame(r.minX - n, r.minY - n, r.maxX + n, r.maxY + n);
      }
    }
    if (!t.isValid) {
      t.set(0, 0, 0, 0);
    }
    return t;
  }
  containsPoint(t) {
    if (!this.bounds.containsPoint(t.x, t.y)) {
      return false;
    }
    const e = this.instructions;
    let s = false;
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      const r = n.data;
      const a = r.path;
      if (!n.action || !a) {
        continue;
      }
      const o = r.style;
      const h = a.shapePath.shapePrimitives;
      for (let e = 0; e < h.length; e++) {
        const i = h[e].shape;
        if (!o || !i) {
          continue;
        }
        const a = h[e].transform;
        const l = a ? a.applyInverse(t, is) : t;
        if (n.action === "fill") {
          s = i.contains(l.x, l.y);
        } else {
          const t = o;
          s = i.strokeContains(l.x, l.y, t.width, t.alignment);
        }
        const c = r.hole;
        if (c) {
          const t = c.shapePath?.shapePrimitives;
          if (t) {
            for (let e = 0; e < t.length; e++) {
              if (t[e].shape.contains(l.x, l.y)) {
                s = false;
              }
            }
          }
        }
        if (s) {
          return true;
        }
      }
    }
    return s;
  }
  unload() {
    this.emit("unload", this);
    for (const t in this._gpuData) {
      this._gpuData[t]?.destroy();
    }
    this._gpuData = Object.create(null);
  }
  destroy(t = false) {
    if (!this.destroyed) {
      this.destroyed = true;
      this._stateStack.length = 0;
      this._transform = null;
      this.unload();
      this.emit("destroy", this);
      this.removeAllListeners();
      if (typeof t == "boolean" ? t : t?.texture) {
        const e = typeof t == "boolean" ? t : t?.textureSource;
        if (this._fillStyle.texture) {
          if (this._fillStyle.fill && "uid" in this._fillStyle.fill) {
            this._fillStyle.fill.destroy();
          } else {
            this._fillStyle.texture.destroy(e);
          }
        }
        if (this._strokeStyle.texture) {
          if (this._strokeStyle.fill && "uid" in this._strokeStyle.fill) {
            this._strokeStyle.fill.destroy();
          } else {
            this._strokeStyle.texture.destroy(e);
          }
        }
      }
      this._fillStyle = null;
      this._strokeStyle = null;
      this.instructions = null;
      this._activePath = null;
      this._bounds = null;
      this._stateStack = null;
      this.customShader = null;
      this._transform = null;
    }
  }
};
rs.defaultFillStyle = {
  color: 16777215,
  alpha: 1,
  texture: n.WHITE,
  matrix: null,
  fill: null,
  textureSpace: "local"
};
rs.defaultStrokeStyle = {
  width: 1,
  color: 16777215,
  alpha: 1,
  alignment: 0.5,
  miterLimit: 10,
  cap: "butt",
  join: "miter",
  texture: n.WHITE,
  matrix: null,
  fill: null,
  textureSpace: "local",
  pixelLine: false
};
var as = rs;
export { _t as $, ee as A, Bt as B, xe as C, he as D, oe as E, jt as F, Dt as G, Lt as H, Ht as I, wt as J, Ct as K, $t as L, Xt as M, Ut as N, ce as O, Ot as P, Mt as Q, At as R, ge as S, de as T, Gt as U, qt as V, Rt as W, St as X, Pt as Y, kt as Z, Ce as _, Ee as a, ct as at, ke as b, Oe as c, We as d, bt as et, Ae as f, De as g, Re as h, es as i, yt as it, te as j, ne as k, je as l, Fe as m, ss as n, gt as nt, Ve as o, Ne as p, Tt as q, ts as r, xt as rt, Ue as s, as as t, mt as tt, He as u, Te as v, pe as w, Se as x, Pe as y, It as z };
