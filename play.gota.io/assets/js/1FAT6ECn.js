import { C as e, D as t, E as n, S as r, T as s, _ as i, b as a, d as o, f as B, g as u, h as c, l, m as h, p as C, u as d, v as f, w as p, x as g, y as m } from "./CFEBHt0y.js";
var E;
var D;
var w = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
var y = {};
function _(e, t, n, r) {
  if (n === "a" && !r) {
    throw new TypeError("Private accessor was defined without a getter");
  }
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) {
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  }
  if (n === "m") {
    return r;
  } else if (n === "a") {
    return r.call(e);
  } else if (r) {
    return r.value;
  } else {
    return t.get(e);
  }
}
(function () {
  var e;
  function t() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.C = Array(this.blockSize);
    this.o = this.h = 0;
    this.u();
  }
  function n(e, t, n) {
    n ||= 0;
    const r = Array(16);
    if (typeof t == "string") {
      for (var s = 0; s < 16; ++s) {
        r[s] = t.charCodeAt(n++) | t.charCodeAt(n++) << 8 | t.charCodeAt(n++) << 16 | t.charCodeAt(n++) << 24;
      }
    } else {
      for (s = 0; s < 16; ++s) {
        r[s] = t[n++] | t[n++] << 8 | t[n++] << 16 | t[n++] << 24;
      }
    }
    t = e.g[0];
    n = e.g[1];
    s = e.g[2];
    let i;
    let a = e.g[3];
    i = t + (a ^ n & (s ^ a)) + r[0] + 3614090360 & -1;
    i = a + (s ^ (t = n + (i << 7 & -1 | i >>> 25)) & (n ^ s)) + r[1] + 3905402710 & -1;
    a = t + (i << 12 & -1 | i >>> 20);
    i = s + (n ^ a & (t ^ n)) + r[2] + 606105819 & -1;
    i = n + (t ^ (s = a + (i << 17 & -1 | i >>> 15)) & (a ^ t)) + r[3] + 3250441966 & -1;
    i = t + (a ^ (n = s + (i << 22 & -1 | i >>> 10)) & (s ^ a)) + r[4] + 4118548399 & -1;
    i = a + (s ^ (t = n + (i << 7 & -1 | i >>> 25)) & (n ^ s)) + r[5] + 1200080426 & -1;
    a = t + (i << 12 & -1 | i >>> 20);
    i = s + (n ^ a & (t ^ n)) + r[6] + 2821735955 & -1;
    i = n + (t ^ (s = a + (i << 17 & -1 | i >>> 15)) & (a ^ t)) + r[7] + 4249261313 & -1;
    i = t + (a ^ (n = s + (i << 22 & -1 | i >>> 10)) & (s ^ a)) + r[8] + 1770035416 & -1;
    i = a + (s ^ (t = n + (i << 7 & -1 | i >>> 25)) & (n ^ s)) + r[9] + 2336552879 & -1;
    a = t + (i << 12 & -1 | i >>> 20);
    i = s + (n ^ a & (t ^ n)) + r[10] + 4294925233 & -1;
    i = n + (t ^ (s = a + (i << 17 & -1 | i >>> 15)) & (a ^ t)) + r[11] + 2304563134 & -1;
    i = t + (a ^ (n = s + (i << 22 & -1 | i >>> 10)) & (s ^ a)) + r[12] + 1804603682 & -1;
    i = a + (s ^ (t = n + (i << 7 & -1 | i >>> 25)) & (n ^ s)) + r[13] + 4254626195 & -1;
    a = t + (i << 12 & -1 | i >>> 20);
    i = s + (n ^ a & (t ^ n)) + r[14] + 2792965006 & -1;
    i = n + (t ^ (s = a + (i << 17 & -1 | i >>> 15)) & (a ^ t)) + r[15] + 1236535329 & -1;
    i = t + (s ^ a & ((n = s + (i << 22 & -1 | i >>> 10)) ^ s)) + r[1] + 4129170786 & -1;
    i = a + (n ^ s & ((t = n + (i << 5 & -1 | i >>> 27)) ^ n)) + r[6] + 3225465664 & -1;
    a = t + (i << 9 & -1 | i >>> 23);
    i = s + (t ^ n & (a ^ t)) + r[11] + 643717713 & -1;
    i = n + (a ^ t & ((s = a + (i << 14 & -1 | i >>> 18)) ^ a)) + r[0] + 3921069994 & -1;
    i = t + (s ^ a & ((n = s + (i << 20 & -1 | i >>> 12)) ^ s)) + r[5] + 3593408605 & -1;
    i = a + (n ^ s & ((t = n + (i << 5 & -1 | i >>> 27)) ^ n)) + r[10] + 38016083 & -1;
    a = t + (i << 9 & -1 | i >>> 23);
    i = s + (t ^ n & (a ^ t)) + r[15] + 3634488961 & -1;
    i = n + (a ^ t & ((s = a + (i << 14 & -1 | i >>> 18)) ^ a)) + r[4] + 3889429448 & -1;
    i = t + (s ^ a & ((n = s + (i << 20 & -1 | i >>> 12)) ^ s)) + r[9] + 568446438 & -1;
    i = a + (n ^ s & ((t = n + (i << 5 & -1 | i >>> 27)) ^ n)) + r[14] + 3275163606 & -1;
    a = t + (i << 9 & -1 | i >>> 23);
    i = s + (t ^ n & (a ^ t)) + r[3] + 4107603335 & -1;
    i = n + (a ^ t & ((s = a + (i << 14 & -1 | i >>> 18)) ^ a)) + r[8] + 1163531501 & -1;
    i = t + (s ^ a & ((n = s + (i << 20 & -1 | i >>> 12)) ^ s)) + r[13] + 2850285829 & -1;
    i = a + (n ^ s & ((t = n + (i << 5 & -1 | i >>> 27)) ^ n)) + r[2] + 4243563512 & -1;
    a = t + (i << 9 & -1 | i >>> 23);
    i = s + (t ^ n & (a ^ t)) + r[7] + 1735328473 & -1;
    i = n + (a ^ t & ((s = a + (i << 14 & -1 | i >>> 18)) ^ a)) + r[12] + 2368359562 & -1;
    i = t + ((n = s + (i << 20 & -1 | i >>> 12)) ^ s ^ a) + r[5] + 4294588738 & -1;
    i = a + ((t = n + (i << 4 & -1 | i >>> 28)) ^ n ^ s) + r[8] + 2272392833 & -1;
    a = t + (i << 11 & -1 | i >>> 21);
    i = s + (a ^ t ^ n) + r[11] + 1839030562 & -1;
    i = n + ((s = a + (i << 16 & -1 | i >>> 16)) ^ a ^ t) + r[14] + 4259657740 & -1;
    i = t + ((n = s + (i << 23 & -1 | i >>> 9)) ^ s ^ a) + r[1] + 2763975236 & -1;
    i = a + ((t = n + (i << 4 & -1 | i >>> 28)) ^ n ^ s) + r[4] + 1272893353 & -1;
    a = t + (i << 11 & -1 | i >>> 21);
    i = s + (a ^ t ^ n) + r[7] + 4139469664 & -1;
    i = n + ((s = a + (i << 16 & -1 | i >>> 16)) ^ a ^ t) + r[10] + 3200236656 & -1;
    i = t + ((n = s + (i << 23 & -1 | i >>> 9)) ^ s ^ a) + r[13] + 681279174 & -1;
    i = a + ((t = n + (i << 4 & -1 | i >>> 28)) ^ n ^ s) + r[0] + 3936430074 & -1;
    a = t + (i << 11 & -1 | i >>> 21);
    i = s + (a ^ t ^ n) + r[3] + 3572445317 & -1;
    i = n + ((s = a + (i << 16 & -1 | i >>> 16)) ^ a ^ t) + r[6] + 76029189 & -1;
    i = t + ((n = s + (i << 23 & -1 | i >>> 9)) ^ s ^ a) + r[9] + 3654602809 & -1;
    i = a + ((t = n + (i << 4 & -1 | i >>> 28)) ^ n ^ s) + r[12] + 3873151461 & -1;
    a = t + (i << 11 & -1 | i >>> 21);
    i = s + (a ^ t ^ n) + r[15] + 530742520 & -1;
    i = n + ((s = a + (i << 16 & -1 | i >>> 16)) ^ a ^ t) + r[2] + 3299628645 & -1;
    i = t + (s ^ ((n = s + (i << 23 & -1 | i >>> 9)) | ~a)) + r[0] + 4096336452 & -1;
    i = a + (n ^ ((t = n + (i << 6 & -1 | i >>> 26)) | ~s)) + r[7] + 1126891415 & -1;
    a = t + (i << 10 & -1 | i >>> 22);
    i = s + (t ^ (a | ~n)) + r[14] + 2878612391 & -1;
    i = n + (a ^ ((s = a + (i << 15 & -1 | i >>> 17)) | ~t)) + r[5] + 4237533241 & -1;
    i = t + (s ^ ((n = s + (i << 21 & -1 | i >>> 11)) | ~a)) + r[12] + 1700485571 & -1;
    i = a + (n ^ ((t = n + (i << 6 & -1 | i >>> 26)) | ~s)) + r[3] + 2399980690 & -1;
    a = t + (i << 10 & -1 | i >>> 22);
    i = s + (t ^ (a | ~n)) + r[10] + 4293915773 & -1;
    i = n + (a ^ ((s = a + (i << 15 & -1 | i >>> 17)) | ~t)) + r[1] + 2240044497 & -1;
    i = t + (s ^ ((n = s + (i << 21 & -1 | i >>> 11)) | ~a)) + r[8] + 1873313359 & -1;
    i = a + (n ^ ((t = n + (i << 6 & -1 | i >>> 26)) | ~s)) + r[15] + 4264355552 & -1;
    a = t + (i << 10 & -1 | i >>> 22);
    i = s + (t ^ (a | ~n)) + r[6] + 2734768916 & -1;
    i = n + (a ^ ((s = a + (i << 15 & -1 | i >>> 17)) | ~t)) + r[13] + 1309151649 & -1;
    i = t + (s ^ ((n = s + (i << 21 & -1 | i >>> 11)) | ~a)) + r[4] + 4149444226 & -1;
    i = a + (n ^ ((t = n + (i << 6 & -1 | i >>> 26)) | ~s)) + r[11] + 3174756917 & -1;
    a = t + (i << 10 & -1 | i >>> 22);
    i = s + (t ^ (a | ~n)) + r[2] + 718787259 & -1;
    i = n + (a ^ ((s = a + (i << 15 & -1 | i >>> 17)) | ~t)) + r[9] + 3951481745 & -1;
    e.g[0] = e.g[0] + t & -1;
    e.g[1] = e.g[1] + (s + (i << 21 & -1 | i >>> 11)) & -1;
    e.g[2] = e.g[2] + s & -1;
    e.g[3] = e.g[3] + a & -1;
  }
  function r(e, t) {
    this.h = t;
    const n = [];
    let r = true;
    for (let s = e.length - 1; s >= 0; s--) {
      const i = e[s] | 0;
      if (!r || i != t) {
        n[s] = i;
        r = false;
      }
    }
    this.g = n;
  }
  (function (e, t) {
    function n() {}
    n.prototype = t.prototype;
    e.F = t.prototype;
    e.prototype = new n();
    e.prototype.constructor = e;
    e.D = function (e, n, r) {
      var s = Array(arguments.length - 2);
      for (var i = 2; i < arguments.length; i++) {
        s[i - 2] = arguments[i];
      }
      return t.prototype[n].apply(e, s);
    };
  })(t, function () {
    this.blockSize = -1;
  });
  t.prototype.u = function () {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.h = 0;
  };
  t.prototype.v = function (e, t = e.length) {
    const r = t - this.blockSize;
    const s = this.C;
    let i = this.h;
    let a = 0;
    while (a < t) {
      if (i == 0) {
        while (a <= r) {
          n(this, e, a);
          a += this.blockSize;
        }
      }
      if (typeof e == "string") {
        while (a < t) {
          s[i++] = e.charCodeAt(a++);
          if (i == this.blockSize) {
            n(this, s);
            i = 0;
            break;
          }
        }
      } else {
        while (a < t) {
          s[i++] = e[a++];
          if (i == this.blockSize) {
            n(this, s);
            i = 0;
            break;
          }
        }
      }
    }
    this.h = i;
    this.o += t;
  };
  t.prototype.A = function () {
    var e = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
    e[0] = 128;
    for (var t = 1; t < e.length - 8; ++t) {
      e[t] = 0;
    }
    t = this.o * 8;
    for (var n = e.length - 8; n < e.length; ++n) {
      e[n] = t & 255;
      t /= 256;
    }
    this.v(e);
    e = Array(16);
    t = 0;
    n = 0;
    for (; n < 4; ++n) {
      for (let r = 0; r < 32; r += 8) {
        e[t++] = this.g[n] >>> r & 255;
      }
    }
    return e;
  };
  var s = {};
  function i(e) {
    if (e >= -128 && e < 128) {
      return function (e, t) {
        var n = s;
        if (Object.prototype.hasOwnProperty.call(n, e)) {
          return n[e];
        } else {
          return n[e] = t(e);
        }
      }(e, function (e) {
        return new r([e | 0], e < 0 ? -1 : 0);
      });
    } else {
      return new r([e | 0], e < 0 ? -1 : 0);
    }
  }
  function a(e) {
    if (isNaN(e) || !isFinite(e)) {
      return o;
    }
    if (e < 0) {
      return h(a(-e));
    }
    const t = [];
    let n = 1;
    for (let r = 0; e >= n; r++) {
      t[r] = e / n | 0;
      n *= 4294967296;
    }
    return new r(t, 0);
  }
  var o = i(0);
  var B = i(1);
  var u = i(16777216);
  function c(e) {
    if (e.h != 0) {
      return false;
    }
    for (let t = 0; t < e.g.length; t++) {
      if (e.g[t] != 0) {
        return false;
      }
    }
    return true;
  }
  function l(e) {
    return e.h == -1;
  }
  function h(e) {
    const t = e.g.length;
    const n = [];
    for (let r = 0; r < t; r++) {
      n[r] = ~e.g[r];
    }
    return new r(n, ~e.h).add(B);
  }
  function C(e, t) {
    return e.add(h(t));
  }
  function d(e, t) {
    while ((e[t] & 65535) != e[t]) {
      e[t + 1] += e[t] >>> 16;
      e[t] &= 65535;
      t++;
    }
  }
  function f(e, t) {
    this.g = e;
    this.h = t;
  }
  function p(e, t) {
    if (c(t)) {
      throw Error("division by zero");
    }
    if (c(e)) {
      return new f(o, o);
    }
    if (l(e)) {
      t = p(h(e), t);
      return new f(h(t.g), h(t.h));
    }
    if (l(t)) {
      t = p(e, h(t));
      return new f(h(t.g), t.h);
    }
    if (e.g.length > 30) {
      if (l(e) || l(t)) {
        throw Error("slowDivide_ only works with positive integers.");
      }
      var n = B;
      for (var r = t; r.l(e) <= 0;) {
        n = g(n);
        r = g(r);
      }
      var s = m(n, 1);
      var i = m(r, 1);
      r = m(r, 2);
      n = m(n, 2);
      while (!c(r)) {
        var u = i.add(r);
        if (u.l(e) <= 0) {
          s = s.add(n);
          i = u;
        }
        r = m(r, 1);
        n = m(n, 1);
      }
      t = C(e, s.j(t));
      return new f(s, t);
    }
    for (s = o; e.l(t) >= 0;) {
      n = Math.max(1, Math.floor(e.m() / t.m()));
      r = (r = Math.ceil(Math.log(n) / Math.LN2)) <= 48 ? 1 : Math.pow(2, r - 48);
      u = (i = a(n)).j(t);
      while (l(u) || u.l(e) > 0) {
        u = (i = a(n -= r)).j(t);
      }
      if (c(i)) {
        i = B;
      }
      s = s.add(i);
      e = C(e, u);
    }
    return new f(s, e);
  }
  function g(e) {
    const t = e.g.length + 1;
    const n = [];
    for (let r = 0; r < t; r++) {
      n[r] = e.i(r) << 1 | e.i(r - 1) >>> 31;
    }
    return new r(n, e.h);
  }
  function m(e, t) {
    const n = t >> 5;
    t %= 32;
    const s = e.g.length - n;
    const i = [];
    for (let r = 0; r < s; r++) {
      i[r] = t > 0 ? e.i(r + n) >>> t | e.i(r + n + 1) << 32 - t : e.i(r + n);
    }
    return new r(i, e.h);
  }
  (e = r.prototype).m = function () {
    if (l(this)) {
      return -h(this).m();
    }
    let e = 0;
    let t = 1;
    for (let n = 0; n < this.g.length; n++) {
      const r = this.i(n);
      e += (r >= 0 ? r : 4294967296 + r) * t;
      t *= 4294967296;
    }
    return e;
  };
  e.toString = function (e) {
    if ((e = e || 10) < 2 || e > 36) {
      throw Error("radix out of range: " + e);
    }
    if (c(this)) {
      return "0";
    }
    if (l(this)) {
      return "-" + h(this).toString(e);
    }
    const t = a(Math.pow(e, 6));
    var n = this;
    let r = "";
    while (true) {
      const s = p(n, t).g;
      let i = (((n = C(n, s.j(t))).g.length > 0 ? n.g[0] : n.h) >>> 0).toString(e);
      if (c(n = s)) {
        return i + r;
      }
      while (i.length < 6) {
        i = "0" + i;
      }
      r = i + r;
    }
  };
  e.i = function (e) {
    if (e < 0) {
      return 0;
    } else if (e < this.g.length) {
      return this.g[e];
    } else {
      return this.h;
    }
  };
  e.l = function (e) {
    if (l(e = C(this, e))) {
      return -1;
    } else if (c(e)) {
      return 0;
    } else {
      return 1;
    }
  };
  e.abs = function () {
    if (l(this)) {
      return h(this);
    } else {
      return this;
    }
  };
  e.add = function (e) {
    const t = Math.max(this.g.length, e.g.length);
    const n = [];
    let s = 0;
    for (let r = 0; r <= t; r++) {
      let t = s + (this.i(r) & 65535) + (e.i(r) & 65535);
      let i = (t >>> 16) + (this.i(r) >>> 16) + (e.i(r) >>> 16);
      s = i >>> 16;
      t &= 65535;
      i &= 65535;
      n[r] = i << 16 | t;
    }
    return new r(n, n[n.length - 1] & -2147483648 ? -1 : 0);
  };
  e.j = function (e) {
    if (c(this) || c(e)) {
      return o;
    }
    if (l(this)) {
      if (l(e)) {
        return h(this).j(h(e));
      } else {
        return h(h(this).j(e));
      }
    }
    if (l(e)) {
      return h(this.j(h(e)));
    }
    if (this.l(u) < 0 && e.l(u) < 0) {
      return a(this.m() * e.m());
    }
    const t = this.g.length + e.g.length;
    const n = [];
    for (var s = 0; s < t * 2; s++) {
      n[s] = 0;
    }
    for (s = 0; s < this.g.length; s++) {
      for (let t = 0; t < e.g.length; t++) {
        const r = this.i(s) >>> 16;
        const i = this.i(s) & 65535;
        const a = e.i(t) >>> 16;
        const o = e.i(t) & 65535;
        n[s * 2 + t * 2] += i * o;
        d(n, s * 2 + t * 2);
        n[s * 2 + t * 2 + 1] += r * o;
        d(n, s * 2 + t * 2 + 1);
        n[s * 2 + t * 2 + 1] += i * a;
        d(n, s * 2 + t * 2 + 1);
        n[s * 2 + t * 2 + 2] += r * a;
        d(n, s * 2 + t * 2 + 2);
      }
    }
    for (e = 0; e < t; e++) {
      n[e] = n[e * 2 + 1] << 16 | n[e * 2];
    }
    for (e = t; e < t * 2; e++) {
      n[e] = 0;
    }
    return new r(n, 0);
  };
  e.B = function (e) {
    return p(this, e).h;
  };
  e.and = function (e) {
    const t = Math.max(this.g.length, e.g.length);
    const n = [];
    for (let r = 0; r < t; r++) {
      n[r] = this.i(r) & e.i(r);
    }
    return new r(n, this.h & e.h);
  };
  e.or = function (e) {
    const t = Math.max(this.g.length, e.g.length);
    const n = [];
    for (let r = 0; r < t; r++) {
      n[r] = this.i(r) | e.i(r);
    }
    return new r(n, this.h | e.h);
  };
  e.xor = function (e) {
    const t = Math.max(this.g.length, e.g.length);
    const n = [];
    for (let r = 0; r < t; r++) {
      n[r] = this.i(r) ^ e.i(r);
    }
    return new r(n, this.h ^ e.h);
  };
  t.prototype.digest = t.prototype.A;
  t.prototype.reset = t.prototype.u;
  t.prototype.update = t.prototype.v;
  D = y.Md5 = t;
  r.prototype.add = r.prototype.add;
  r.prototype.multiply = r.prototype.j;
  r.prototype.modulo = r.prototype.B;
  r.prototype.compare = r.prototype.l;
  r.prototype.toNumber = r.prototype.m;
  r.prototype.toString = r.prototype.toString;
  r.prototype.getBits = r.prototype.i;
  r.fromNumber = a;
  r.fromString = function e(t, n) {
    if (t.length == 0) {
      throw Error("number format error: empty string");
    }
    if ((n = n || 10) < 2 || n > 36) {
      throw Error("radix out of range: " + n);
    }
    if (t.charAt(0) == "-") {
      return h(e(t.substring(1), n));
    }
    if (t.indexOf("-") >= 0) {
      throw Error("number format error: interior \"-\" character");
    }
    const r = a(Math.pow(n, 8));
    let s = o;
    for (let o = 0; o < t.length; o += 8) {
      var i = Math.min(8, t.length - o);
      const e = parseInt(t.substring(o, o + i), n);
      if (i < 8) {
        i = a(Math.pow(n, i));
        s = s.j(i).add(a(e));
      } else {
        s = s.j(r);
        s = s.add(a(e));
      }
    }
    return s;
  };
  E = y.Integer = r;
}).apply(w !== undefined ? w : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
var I;
var v;
var T;
var b;
var N;
var A;
var F;
var O;
var S = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
var x = {};
(function () {
  var e;
  var t = Object.defineProperty;
  var n = function (e) {
    e = [typeof globalThis == "object" && globalThis, e, typeof window == "object" && window, typeof self == "object" && self, typeof S == "object" && S];
    for (var t = 0; t < e.length; ++t) {
      var n = e[t];
      if (n && n.Math == Math) {
        return n;
      }
    }
    throw Error("Cannot find global object");
  }(this);
  function r(e, r) {
    if (r) {
      e: {
        var s = n;
        e = e.split(".");
        for (var i = 0; i < e.length - 1; i++) {
          var a = e[i];
          if (!(a in s)) {
            break e;
          }
          s = s[a];
        }
        if ((r = r(i = s[e = e[e.length - 1]])) != i && r != null) {
          t(s, e, {
            configurable: true,
            writable: true,
            value: r
          });
        }
      }
    }
  }
  r("Symbol.dispose", function (e) {
    return e || Symbol("Symbol.dispose");
  });
  r("Array.prototype.values", function (e) {
    return e || function () {
      return this[Symbol.iterator]();
    };
  });
  r("Object.entries", function (e) {
    return e || function (e) {
      var t;
      var n = [];
      for (t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          n.push([t, e[t]]);
        }
      }
      return n;
    };
  });
  var s = s || {};
  var i = this || self;
  function a(e) {
    var t = typeof e;
    return t == "object" && e != null || t == "function";
  }
  function o(e, t, n) {
    return e.call.apply(e.bind, arguments);
  }
  function B(e, t, n) {
    return (B = o).apply(null, arguments);
  }
  function u(e, t) {
    var n = Array.prototype.slice.call(arguments, 1);
    return function () {
      var t = n.slice();
      t.push.apply(t, arguments);
      return e.apply(this, t);
    };
  }
  function c(e, t) {
    function n() {}
    n.prototype = t.prototype;
    e.Z = t.prototype;
    e.prototype = new n();
    e.prototype.constructor = e;
    e.Ob = function (e, n, r) {
      var s = Array(arguments.length - 2);
      for (var i = 2; i < arguments.length; i++) {
        s[i - 2] = arguments[i];
      }
      return t.prototype[n].apply(e, s);
    };
  }
  var l = typeof AsyncContext != "undefined" && typeof AsyncContext.Snapshot == "function" ? e => e && AsyncContext.Snapshot.wrap(e) : e => e;
  function h(e) {
    const t = e.length;
    if (t > 0) {
      const n = Array(t);
      for (let r = 0; r < t; r++) {
        n[r] = e[r];
      }
      return n;
    }
    return [];
  }
  function C(e, t) {
    for (let r = 1; r < arguments.length; r++) {
      const t = arguments[r];
      var n = typeof t;
      if ((n = n != "object" ? n : t ? Array.isArray(t) ? "array" : n : "null") == "array" || n == "object" && typeof t.length == "number") {
        n = e.length || 0;
        const r = t.length || 0;
        e.length = n + r;
        for (let s = 0; s < r; s++) {
          e[n + s] = t[s];
        }
      } else {
        e.push(t);
      }
    }
  }
  function d(e) {
    i.setTimeout(() => {
      throw e;
    }, 0);
  }
  function f() {
    var e = D;
    let t = null;
    if (e.g) {
      t = e.g;
      e.g = e.g.next;
      if (!e.g) {
        e.h = null;
      }
      t.next = null;
    }
    return t;
  }
  var p = new class {
    constructor(e, t) {
      this.i = e;
      this.j = t;
      this.h = 0;
      this.g = null;
    }
    get() {
      let e;
      if (this.h > 0) {
        this.h--;
        e = this.g;
        this.g = e.next;
        e.next = null;
      } else {
        e = this.i();
      }
      return e;
    }
  }(() => new g(), e => e.reset());
  class g {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(e, t) {
      this.h = e;
      this.g = t;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let m;
  let E = false;
  let D = new class {
    constructor() {
      this.h = this.g = null;
    }
    add(e, t) {
      const n = p.get();
      n.set(e, t);
      if (this.h) {
        this.h.next = n;
      } else {
        this.g = n;
      }
      this.h = n;
    }
  }();
  let w = () => {
    const e = Promise.resolve(undefined);
    m = () => {
      e.then(y);
    };
  };
  function y() {
    for (var e; e = f();) {
      try {
        e.h.call(e.g);
      } catch (n) {
        d(n);
      }
      var t = p;
      t.j(e);
      if (t.h < 100) {
        t.h++;
        e.next = t.g;
        t.g = e;
      }
    }
    E = false;
  }
  function _() {
    this.u = this.u;
    this.C = this.C;
  }
  function L(e, t) {
    this.type = e;
    this.g = this.target = t;
    this.defaultPrevented = false;
  }
  _.prototype.u = false;
  _.prototype.dispose = function () {
    if (!this.u) {
      this.u = true;
      this.N();
    }
  };
  _.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  _.prototype.N = function () {
    if (this.C) {
      while (this.C.length) {
        this.C.shift()();
      }
    }
  };
  L.prototype.h = function () {
    this.defaultPrevented = true;
  };
  var R = function () {
    if (!i.addEventListener || !Object.defineProperty) {
      return false;
    }
    var e = false;
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        e = true;
      }
    });
    try {
      const e = () => {};
      i.addEventListener("test", e, t);
      i.removeEventListener("test", e, t);
    } catch (n) {}
    return e;
  }();
  function k(e) {
    return /^[\s\xa0]*$/.test(e);
  }
  function G(e, t) {
    L.call(this, e ? e.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (e) {
      this.init(e, t);
    }
  }
  c(G, L);
  G.prototype.init = function (e, t) {
    const n = this.type = e.type;
    const r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
    this.target = e.target || e.srcElement;
    this.g = t;
    if (!(t = e.relatedTarget)) {
      if (n == "mouseover") {
        t = e.fromElement;
      } else if (n == "mouseout") {
        t = e.toElement;
      }
    }
    this.relatedTarget = t;
    if (r) {
      this.clientX = r.clientX !== undefined ? r.clientX : r.pageX;
      this.clientY = r.clientY !== undefined ? r.clientY : r.pageY;
      this.screenX = r.screenX || 0;
      this.screenY = r.screenY || 0;
    } else {
      this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
      this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
      this.screenX = e.screenX || 0;
      this.screenY = e.screenY || 0;
    }
    this.button = e.button;
    this.key = e.key || "";
    this.ctrlKey = e.ctrlKey;
    this.altKey = e.altKey;
    this.shiftKey = e.shiftKey;
    this.metaKey = e.metaKey;
    this.pointerId = e.pointerId || 0;
    this.pointerType = e.pointerType;
    this.state = e.state;
    this.i = e;
    if (e.defaultPrevented) {
      G.Z.h.call(this);
    }
  };
  G.prototype.h = function () {
    G.Z.h.call(this);
    const e = this.i;
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  };
  var P = "closure_listenable_" + (Math.random() * 1000000 | 0);
  var M = 0;
  function V(e, t, n, r, s) {
    this.listener = e;
    this.proxy = null;
    this.src = t;
    this.type = n;
    this.capture = !!r;
    this.ha = s;
    this.key = ++M;
    this.da = this.fa = false;
  }
  function H(e) {
    e.da = true;
    e.listener = null;
    e.proxy = null;
    e.src = null;
    e.ha = null;
  }
  function U(e, t, n) {
    for (const r in e) {
      t.call(n, e[r], r, e);
    }
  }
  function q(e) {
    const t = {};
    for (const n in e) {
      t[n] = e[n];
    }
    return t;
  }
  const J = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function K(e, t) {
    let n;
    let r;
    for (let s = 1; s < arguments.length; s++) {
      r = arguments[s];
      for (n in r) {
        e[n] = r[n];
      }
      for (let t = 0; t < J.length; t++) {
        n = J[t];
        if (Object.prototype.hasOwnProperty.call(r, n)) {
          e[n] = r[n];
        }
      }
    }
  }
  function j(e) {
    this.src = e;
    this.g = {};
    this.h = 0;
  }
  function Q(e, t) {
    const n = t.type;
    if (n in e.g) {
      var r;
      var s = e.g[n];
      var i = Array.prototype.indexOf.call(s, t, undefined);
      if (r = i >= 0) {
        Array.prototype.splice.call(s, i, 1);
      }
      if (r) {
        H(t);
        if (e.g[n].length == 0) {
          delete e.g[n];
          e.h--;
        }
      }
    }
  }
  function z(e, t, n, r) {
    for (let s = 0; s < e.length; ++s) {
      const i = e[s];
      if (!i.da && i.listener == t && i.capture == !!n && i.ha == r) {
        return s;
      }
    }
    return -1;
  }
  j.prototype.add = function (e, t, n, r, s) {
    const i = e.toString();
    if (!(e = this.g[i])) {
      e = this.g[i] = [];
      this.h++;
    }
    const a = z(e, t, r, s);
    if (a > -1) {
      t = e[a];
      if (!n) {
        t.fa = false;
      }
    } else {
      (t = new V(t, this.src, i, !!r, s)).fa = n;
      e.push(t);
    }
    return t;
  };
  var Y = "closure_lm_" + (Math.random() * 1000000 | 0);
  var W = {};
  function $(e, t, n, r, s) {
    if (Array.isArray(t)) {
      for (let i = 0; i < t.length; i++) {
        $(e, t[i], n, r, s);
      }
      return null;
    }
    n = se(n);
    if (e && e[P]) {
      return e.J(t, n, !!a(r) && !!r.capture, s);
    } else {
      return function (e, t, n, r, s, i) {
        if (!t) {
          throw Error("Invalid event type");
        }
        const o = a(s) ? !!s.capture : !!s;
        let B = ne(e);
        if (!B) {
          e[Y] = B = new j(e);
        }
        n = B.add(t, n, r, o, i);
        if (n.proxy) {
          return n;
        }
        r = function () {
          function e(n) {
            return t.call(e.src, e.listener, n);
          }
          const t = te;
          return e;
        }();
        n.proxy = r;
        r.src = e;
        r.listener = n;
        if (e.addEventListener) {
          if (!R) {
            s = o;
          }
          if (s === undefined) {
            s = false;
          }
          e.addEventListener(t.toString(), r, s);
        } else if (e.attachEvent) {
          e.attachEvent(ee(t.toString()), r);
        } else {
          if (!e.addListener || !e.removeListener) {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
          e.addListener(r);
        }
        return n;
      }(e, t, n, false, r, s);
    }
  }
  function X(e, t, n, r, s) {
    if (Array.isArray(t)) {
      for (var i = 0; i < t.length; i++) {
        X(e, t[i], n, r, s);
      }
    } else {
      r = a(r) ? !!r.capture : !!r;
      n = se(n);
      if (e && e[P]) {
        e = e.i;
        if ((i = String(t).toString()) in e.g) {
          if ((n = z(t = e.g[i], n, r, s)) > -1) {
            H(t[n]);
            Array.prototype.splice.call(t, n, 1);
            if (t.length == 0) {
              delete e.g[i];
              e.h--;
            }
          }
        }
      } else if (e &&= ne(e)) {
        t = e.g[t.toString()];
        e = -1;
        if (t) {
          e = z(t, n, r, s);
        }
        if (n = e > -1 ? t[e] : null) {
          Z(n);
        }
      }
    }
  }
  function Z(e) {
    if (typeof e != "number" && e && !e.da) {
      var t = e.src;
      if (t && t[P]) {
        Q(t.i, e);
      } else {
        var n = e.type;
        var r = e.proxy;
        if (t.removeEventListener) {
          t.removeEventListener(n, r, e.capture);
        } else if (t.detachEvent) {
          t.detachEvent(ee(n), r);
        } else if (t.addListener && t.removeListener) {
          t.removeListener(r);
        }
        if (n = ne(t)) {
          Q(n, e);
          if (n.h == 0) {
            n.src = null;
            t[Y] = null;
          }
        } else {
          H(e);
        }
      }
    }
  }
  function ee(e) {
    if (e in W) {
      return W[e];
    } else {
      return W[e] = "on" + e;
    }
  }
  function te(e, t) {
    if (e.da) {
      e = true;
    } else {
      t = new G(t, this);
      const n = e.listener;
      const r = e.ha || e.src;
      if (e.fa) {
        Z(e);
      }
      e = n.call(r, t);
    }
    return e;
  }
  function ne(e) {
    if ((e = e[Y]) instanceof j) {
      return e;
    } else {
      return null;
    }
  }
  var re = "__closure_events_fn_" + (Math.random() * 1000000000 >>> 0);
  function se(e) {
    if (typeof e == "function") {
      return e;
    } else {
      e[re] ||= function (t) {
        return e.handleEvent(t);
      };
      return e[re];
    }
  }
  function ie() {
    _.call(this);
    this.i = new j(this);
    this.M = this;
    this.G = null;
  }
  function ae(e, t) {
    var n;
    var r = e.G;
    if (r) {
      for (n = []; r; r = r.G) {
        n.push(r);
      }
    }
    e = e.M;
    r = t.type || t;
    if (typeof t == "string") {
      t = new L(t, e);
    } else if (t instanceof L) {
      t.target = t.target || e;
    } else {
      var s = t;
      K(t = new L(r, e), s);
    }
    let i;
    let a;
    s = true;
    if (n) {
      for (a = n.length - 1; a >= 0; a--) {
        i = t.g = n[a];
        s = oe(i, r, true, t) && s;
      }
    }
    i = t.g = e;
    s = oe(i, r, true, t) && s;
    s = oe(i, r, false, t) && s;
    if (n) {
      for (a = 0; a < n.length; a++) {
        i = t.g = n[a];
        s = oe(i, r, false, t) && s;
      }
    }
  }
  function oe(e, t, n, r) {
    if (!(t = e.i.g[String(t)])) {
      return true;
    }
    t = t.concat();
    let s = true;
    for (let i = 0; i < t.length; ++i) {
      const a = t[i];
      if (a && !a.da && a.capture == n) {
        const t = a.listener;
        const n = a.ha || a.src;
        if (a.fa) {
          Q(e.i, a);
        }
        s = t.call(n, r) !== false && s;
      }
    }
    return s && !r.defaultPrevented;
  }
  function Be(e) {
    e.g = function (e, t) {
      if (typeof e != "function") {
        if (!e || typeof e.handleEvent != "function") {
          throw Error("Invalid listener argument");
        }
        e = B(e.handleEvent, e);
      }
      if (Number(t) > 2147483647) {
        return -1;
      } else {
        return i.setTimeout(e, t || 0);
      }
    }(() => {
      e.g = null;
      if (e.i) {
        e.i = false;
        Be(e);
      }
    }, e.l);
    const t = e.h;
    e.h = null;
    e.m.apply(null, t);
  }
  c(ie, _);
  ie.prototype[P] = true;
  ie.prototype.removeEventListener = function (e, t, n, r) {
    X(this, e, t, n, r);
  };
  ie.prototype.N = function () {
    ie.Z.N.call(this);
    if (this.i) {
      var e = this.i;
      for (const t in e.g) {
        const n = e.g[t];
        for (let e = 0; e < n.length; e++) {
          H(n[e]);
        }
        delete e.g[t];
        e.h--;
      }
    }
    this.G = null;
  };
  ie.prototype.J = function (e, t, n, r) {
    return this.i.add(String(e), t, false, n, r);
  };
  ie.prototype.K = function (e, t, n, r) {
    return this.i.add(String(e), t, true, n, r);
  };
  class ue extends _ {
    constructor(e, t) {
      super();
      this.m = e;
      this.l = t;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    j(e) {
      this.h = arguments;
      if (this.g) {
        this.i = true;
      } else {
        Be(this);
      }
    }
    N() {
      super.N();
      if (this.g) {
        i.clearTimeout(this.g);
        this.g = null;
        this.i = false;
        this.h = null;
      }
    }
  }
  function ce(e) {
    _.call(this);
    this.h = e;
    this.g = {};
  }
  c(ce, _);
  var le = [];
  function he(e) {
    U(e.g, function (e, t) {
      if (this.g.hasOwnProperty(t)) {
        Z(e);
      }
    }, e);
    e.g = {};
  }
  ce.prototype.N = function () {
    ce.Z.N.call(this);
    he(this);
  };
  ce.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Ce = i.JSON.stringify;
  var de = i.JSON.parse;
  var fe = class {
    stringify(e) {
      return i.JSON.stringify(e, undefined);
    }
    parse(e) {
      return i.JSON.parse(e, undefined);
    }
  };
  function pe() {}
  function ge() {}
  var me = {
    OPEN: "a",
    hb: "b",
    ERROR: "c",
    tb: "d"
  };
  function Ee() {
    L.call(this, "d");
  }
  function De() {
    L.call(this, "c");
  }
  c(Ee, L);
  c(De, L);
  var we = {};
  var ye = null;
  function _e() {
    return ye = ye || new ie();
  }
  function Ie(e) {
    L.call(this, we.Ia, e);
  }
  function ve(e) {
    const t = _e();
    ae(t, new Ie(t));
  }
  function Te(e, t) {
    L.call(this, we.STAT_EVENT, e);
    this.stat = t;
  }
  function be(e) {
    const t = _e();
    ae(t, new Te(t, e));
  }
  function Ne(e, t) {
    L.call(this, we.Ja, e);
    this.size = t;
  }
  function Ae(e, t) {
    if (typeof e != "function") {
      throw Error("Fn must not be null and must be a function");
    }
    return i.setTimeout(function () {
      e();
    }, t);
  }
  function Fe() {
    this.g = true;
  }
  function Oe(e, t, n, r) {
    e.info(function () {
      return "XMLHTTP TEXT (" + t + "): " + function (e, t) {
        if (!e.g) {
          return t;
        }
        if (!t) {
          return null;
        }
        try {
          const i = JSON.parse(t);
          if (i) {
            for (e = 0; e < i.length; e++) {
              if (Array.isArray(i[e])) {
                var n = i[e];
                if (!(n.length < 2)) {
                  var r = n[1];
                  if (Array.isArray(r) && !(r.length < 1)) {
                    var s = r[0];
                    if (s != "noop" && s != "stop" && s != "close") {
                      for (let e = 1; e < r.length; e++) {
                        r[e] = "";
                      }
                    }
                  }
                }
              }
            }
          }
          return Ce(i);
        } catch (zu) {
          return t;
        }
      }(e, n) + (r ? " " + r : "");
    });
  }
  we.Ia = "serverreachability";
  c(Ie, L);
  we.STAT_EVENT = "statevent";
  c(Te, L);
  we.Ja = "timingevent";
  c(Ne, L);
  Fe.prototype.ua = function () {
    this.g = false;
  };
  Fe.prototype.info = function () {};
  var Se;
  var xe = {
    NO_ERROR: 0,
    cb: 1,
    qb: 2,
    pb: 3,
    kb: 4,
    ob: 5,
    rb: 6,
    Ga: 7,
    TIMEOUT: 8,
    ub: 9
  };
  var Le = {
    ib: "complete",
    Fb: "success",
    ERROR: "error",
    Ga: "abort",
    xb: "ready",
    yb: "readystatechange",
    TIMEOUT: "timeout",
    sb: "incrementaldata",
    wb: "progress",
    lb: "downloadprogress",
    Nb: "uploadprogress"
  };
  function Re() {}
  function ke(e) {
    return encodeURIComponent(String(e));
  }
  function Ge(e) {
    var t = 1;
    e = e.split(":");
    const n = [];
    while (t > 0 && e.length) {
      n.push(e.shift());
      t--;
    }
    if (e.length) {
      n.push(e.join(":"));
    }
    return n;
  }
  function Pe(e, t, n, r) {
    this.j = e;
    this.i = t;
    this.l = n;
    this.S = r || 1;
    this.V = new ce(this);
    this.H = 45000;
    this.J = null;
    this.o = false;
    this.u = this.B = this.A = this.M = this.F = this.T = this.D = null;
    this.G = [];
    this.g = null;
    this.C = 0;
    this.m = this.v = null;
    this.X = -1;
    this.K = false;
    this.P = 0;
    this.O = null;
    this.W = this.L = this.U = this.R = false;
    this.h = new Me();
  }
  function Me() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  c(Re, pe);
  Re.prototype.g = function () {
    return new XMLHttpRequest();
  };
  Se = new Re();
  var Ve = {};
  var He = {};
  function Ue(e, t, n) {
    e.M = 1;
    e.A = Ct(Bt(t));
    e.u = n;
    e.R = true;
    qe(e, null);
  }
  function qe(e, t) {
    e.F = Date.now();
    je(e);
    e.B = Bt(e.A);
    var n = e.B;
    var r = e.S;
    if (!Array.isArray(r)) {
      r = [String(r)];
    }
    bt(n.i, "t", r);
    e.C = 0;
    n = e.j.L;
    e.h = new Me();
    e.g = dn(e.j, n ? t : null, !e.u);
    if (e.P > 0) {
      e.O = new ue(B(e.Y, e, e.g), e.P);
    }
    t = e.V;
    n = e.g;
    r = e.ba;
    var s = "readystatechange";
    if (!Array.isArray(s)) {
      if (s) {
        le[0] = s.toString();
      }
      s = le;
    }
    for (let i = 0; i < s.length; i++) {
      const e = $(n, s[i], r || t.handleEvent, false, t.h || t);
      if (!e) {
        break;
      }
      t.g[e.key] = e;
    }
    t = e.J ? q(e.J) : {};
    if (e.u) {
      e.v ||= "POST";
      t["Content-Type"] = "application/x-www-form-urlencoded";
      e.g.ea(e.B, e.v, e.u, t);
    } else {
      e.v = "GET";
      e.g.ea(e.B, e.v, null, t);
    }
    ve();
    (function (e, t, n, r, s, i) {
      e.info(function () {
        if (e.g) {
          if (i) {
            var a = "";
            var o = i.split("&");
            for (let e = 0; e < o.length; e++) {
              var B = o[e].split("=");
              if (B.length > 1) {
                const e = B[0];
                B = B[1];
                const t = e.split("_");
                a = t.length >= 2 && t[1] == "type" ? a + (e + "=") + B + "&" : a + (e + "=redacted&");
              }
            }
          } else {
            a = null;
          }
        } else {
          a = i;
        }
        return "XMLHTTP REQ (" + r + ") [attempt " + s + "]: " + t + "\n" + n + "\n" + a;
      });
    })(e.i, e.v, e.B, e.l, e.S, e.u);
  }
  function Je(e) {
    return !!e.g && e.v == "GET" && e.M != 2 && e.j.Aa;
  }
  function Ke(e, t) {
    var n = e.C;
    var r = t.indexOf("\n", n);
    if (r == -1) {
      return He;
    } else {
      n = Number(t.substring(n, r));
      if (isNaN(n)) {
        return Ve;
      } else if ((r += 1) + n > t.length) {
        return He;
      } else {
        t = t.slice(r, r + n);
        e.C = r + n;
        return t;
      }
    }
  }
  function je(e) {
    e.T = Date.now() + e.H;
    Qe(e, e.H);
  }
  function Qe(e, t) {
    if (e.D != null) {
      throw Error("WatchDog timer not null");
    }
    e.D = Ae(B(e.aa, e), t);
  }
  function ze(e) {
    if (e.D) {
      i.clearTimeout(e.D);
      e.D = null;
    }
  }
  function Ye(e) {
    if (e.j.I != 0 && !e.K) {
      un(e.j, e);
    }
  }
  function We(e) {
    ze(e);
    var t = e.O;
    if (t && typeof t.dispose == "function") {
      t.dispose();
    }
    e.O = null;
    he(e.V);
    if (e.g) {
      t = e.g;
      e.g = null;
      t.abort();
      t.dispose();
    }
  }
  function $e(e, t) {
    try {
      var n = e.j;
      if (n.I != 0 && (n.g == e || nt(n.h, e))) {
        if (!e.L && nt(n.h, e) && n.I == 3) {
          try {
            var r = n.Ba.g.parse(t);
          } catch (c) {
            r = null;
          }
          if (Array.isArray(r) && r.length == 3) {
            var s = r;
            if (s[0] == 0) {
              e: if (!n.v) {
                if (n.g) {
                  if (!(n.g.F + 3000 < e.F)) {
                    break e;
                  }
                  Bn(n);
                  $t(n);
                }
                sn(n);
                be(18);
              }
            } else {
              n.xa = s[1];
              if (n.xa - n.K > 0 && s[2] < 37500 && n.F && n.A == 0 && !n.C) {
                n.C = Ae(B(n.Va, n), 6000);
              }
            }
            if (tt(n.h) <= 1 && n.ta) {
              n.ta = undefined;
            }
          } else {
            ln(n, 11);
          }
        } else {
          if (e.L || n.g == e) {
            Bn(n);
          }
          if (!k(t)) {
            s = n.Ba.g.parse(t);
            t = 0;
            for (; t < s.length; t++) {
              let B = s[t];
              const c = B[0];
              if (!(c <= n.K)) {
                n.K = c;
                B = B[1];
                if (n.I == 2) {
                  if (B[0] == "c") {
                    n.M = B[1];
                    n.ba = B[2];
                    const t = B[3];
                    if (t != null) {
                      n.ka = t;
                      n.j.info("VER=" + n.ka);
                    }
                    const s = B[4];
                    if (s != null) {
                      n.za = s;
                      n.j.info("SVER=" + n.za);
                    }
                    const c = B[5];
                    if (c != null && typeof c == "number" && c > 0) {
                      r = c * 1.5;
                      n.O = r;
                      n.j.info("backChannelRequestTimeoutMs_=" + r);
                    }
                    r = n;
                    const l = e.g;
                    if (l) {
                      const e = l.g ? l.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                      if (e) {
                        var i = r.h;
                        if (!i.g && (e.indexOf("spdy") != -1 || e.indexOf("quic") != -1 || e.indexOf("h2") != -1)) {
                          i.j = i.l;
                          i.g = new Set();
                          if (i.h) {
                            rt(i, i.h);
                            i.h = null;
                          }
                        }
                      }
                      if (r.G) {
                        const e = l.g ? l.g.getResponseHeader("X-HTTP-Session-Id") : null;
                        if (e) {
                          r.wa = e;
                          ht(r.J, r.G, e);
                        }
                      }
                    }
                    n.I = 3;
                    if (n.l) {
                      n.l.ra();
                    }
                    if (n.aa) {
                      n.T = Date.now() - e.F;
                      n.j.info("Handshake RTT: " + n.T + "ms");
                    }
                    var a = e;
                    (r = n).na = Cn(r, r.L ? r.ba : null, r.W);
                    if (a.L) {
                      st(r.h, a);
                      var o = a;
                      var u = r.O;
                      if (u) {
                        o.H = u;
                      }
                      if (o.D) {
                        ze(o);
                        je(o);
                      }
                      r.g = a;
                    } else {
                      rn(r);
                    }
                    if (n.i.length > 0) {
                      Zt(n);
                    }
                  } else if (B[0] == "stop" || B[0] == "close") {
                    ln(n, 7);
                  }
                } else if (n.I == 3) {
                  if (B[0] == "stop" || B[0] == "close") {
                    if (B[0] == "stop") {
                      ln(n, 7);
                    } else {
                      Wt(n);
                    }
                  } else if (B[0] != "noop" && n.l) {
                    n.l.qa(B);
                  }
                  n.A = 0;
                }
              }
            }
          }
        }
      }
      ve();
    } catch (c) {}
  }
  Pe.prototype.ba = function (e) {
    e = e.target;
    const t = this.O;
    if (t && jt(e) == 3) {
      t.j();
    } else {
      this.Y(e);
    }
  };
  Pe.prototype.Y = function (e) {
    try {
      if (e == this.g) {
        e: {
          const B = jt(this.g);
          const u = this.g.ya();
          this.g.ca();
          if (!(B < 3) && (B != 3 || this.g && (this.h.h || this.g.la() || Qt(this.g)))) {
            if (!this.K && B == 4 && u != 7) {
              ve();
            }
            ze(this);
            var t = this.g.ca();
            this.X = t;
            var n = function (e) {
              if (!Je(e)) {
                return e.g.la();
              }
              const t = Qt(e.g);
              if (t === "") {
                return "";
              }
              let n = "";
              const r = t.length;
              const s = jt(e.g) == 4;
              if (!e.h.i) {
                if (typeof TextDecoder == "undefined") {
                  We(e);
                  Ye(e);
                  return "";
                }
                e.h.i = new i.TextDecoder();
              }
              for (let i = 0; i < r; i++) {
                e.h.h = true;
                n += e.h.i.decode(t[i], {
                  stream: !s || i != r - 1
                });
              }
              t.length = 0;
              e.h.g += n;
              e.C = 0;
              return e.h.g;
            }(this);
            this.o = t == 200;
            (function (e, t, n, r, s, i, a) {
              e.info(function () {
                return "XMLHTTP RESP (" + r + ") [ attempt " + s + "]: " + t + "\n" + n + "\n" + i + " " + a;
              });
            })(this.i, this.v, this.B, this.l, this.S, B, t);
            if (this.o) {
              if (this.U && !this.L) {
                t: {
                  if (this.g) {
                    var r;
                    var s = this.g;
                    if ((r = s.g ? s.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !k(r)) {
                      var a = r;
                      break t;
                    }
                  }
                  a = null;
                }
                if (!(e = a)) {
                  this.o = false;
                  this.m = 3;
                  be(12);
                  We(this);
                  Ye(this);
                  break e;
                }
                Oe(this.i, this.l, e, "Initial handshake response via X-HTTP-Initial-Response");
                this.L = true;
                $e(this, e);
              }
              if (this.R) {
                let t;
                for (e = true; !this.K && this.C < n.length;) {
                  t = Ke(this, n);
                  if (t == He) {
                    if (B == 4) {
                      this.m = 4;
                      be(14);
                      e = false;
                    }
                    Oe(this.i, this.l, null, "[Incomplete Response]");
                    break;
                  }
                  if (t == Ve) {
                    this.m = 4;
                    be(15);
                    Oe(this.i, this.l, n, "[Invalid Chunk]");
                    e = false;
                    break;
                  }
                  Oe(this.i, this.l, t, null);
                  $e(this, t);
                }
                if (Je(this) && this.C != 0) {
                  this.h.g = this.h.g.slice(this.C);
                  this.C = 0;
                }
                if (B == 4 && n.length == 0 && !this.h.h) {
                  this.m = 1;
                  be(16);
                  e = false;
                }
                this.o = this.o && e;
                if (e) {
                  if (n.length > 0 && !this.W) {
                    this.W = true;
                    var o = this.j;
                    if (o.g == this && o.aa && !o.P) {
                      o.j.info("Great, no buffering proxy detected. Bytes received: " + n.length);
                      an(o);
                      o.P = true;
                      be(11);
                    }
                  }
                } else {
                  Oe(this.i, this.l, n, "[Invalid Chunked Response]");
                  We(this);
                  Ye(this);
                }
              } else {
                Oe(this.i, this.l, n, null);
                $e(this, n);
              }
              if (B == 4) {
                We(this);
              }
              if (this.o && !this.K) {
                if (B == 4) {
                  un(this.j, this);
                } else {
                  this.o = false;
                  je(this);
                }
              }
            } else {
              (function (e) {
                const t = {};
                e = (e.g && jt(e) >= 2 && e.g.getAllResponseHeaders() || "").split("\r\n");
                for (let r = 0; r < e.length; r++) {
                  if (k(e[r])) {
                    continue;
                  }
                  var n = Ge(e[r]);
                  const s = n[0];
                  if (typeof (n = n[1]) != "string") {
                    continue;
                  }
                  n = n.trim();
                  const i = t[s] || [];
                  t[s] = i;
                  i.push(n);
                }
                (function (e, t) {
                  for (const n in e) {
                    t.call(undefined, e[n], n, e);
                  }
                })(t, function (e) {
                  return e.join(", ");
                });
              })(this.g);
              if (t == 400 && n.indexOf("Unknown SID") > 0) {
                this.m = 3;
                be(12);
              } else {
                this.m = 0;
                be(13);
              }
              We(this);
              Ye(this);
            }
          }
        }
      }
    } catch (B) {}
  };
  Pe.prototype.cancel = function () {
    this.K = true;
    We(this);
  };
  Pe.prototype.aa = function () {
    this.D = null;
    const e = Date.now();
    if (e - this.T >= 0) {
      (function (e, t) {
        e.info(function () {
          return "TIMEOUT: " + t;
        });
      })(this.i, this.B);
      if (this.M != 2) {
        ve();
        be(17);
      }
      We(this);
      this.m = 2;
      Ye(this);
    } else {
      Qe(this, this.T - e);
    }
  };
  var Xe = class {
    constructor(e, t) {
      this.g = e;
      this.map = t;
    }
  };
  function Ze(e) {
    this.l = e || 10;
    if (i.PerformanceNavigationTiming) {
      e = (e = i.performance.getEntriesByType("navigation")).length > 0 && (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2");
    } else {
      e = !!i.chrome && !!i.chrome.loadTimes && !!i.chrome.loadTimes() && !!i.chrome.loadTimes().wasFetchedViaSpdy;
    }
    this.j = e ? this.l : 1;
    this.g = null;
    if (this.j > 1) {
      this.g = new Set();
    }
    this.h = null;
    this.i = [];
  }
  function et(e) {
    return !!e.h || !!e.g && e.g.size >= e.j;
  }
  function tt(e) {
    if (e.h) {
      return 1;
    } else if (e.g) {
      return e.g.size;
    } else {
      return 0;
    }
  }
  function nt(e, t) {
    if (e.h) {
      return e.h == t;
    } else {
      return !!e.g && e.g.has(t);
    }
  }
  function rt(e, t) {
    if (e.g) {
      e.g.add(t);
    } else {
      e.h = t;
    }
  }
  function st(e, t) {
    if (e.h && e.h == t) {
      e.h = null;
    } else if (e.g && e.g.has(t)) {
      e.g.delete(t);
    }
  }
  function it(e) {
    if (e.h != null) {
      return e.i.concat(e.h.G);
    }
    if (e.g != null && e.g.size !== 0) {
      let t = e.i;
      for (const n of e.g.values()) {
        t = t.concat(n.G);
      }
      return t;
    }
    return h(e.i);
  }
  Ze.prototype.cancel = function () {
    this.i = it(this);
    if (this.h) {
      this.h.cancel();
      this.h = null;
    } else if (this.g && this.g.size !== 0) {
      for (const e of this.g.values()) {
        e.cancel();
      }
      this.g.clear();
    }
  };
  var at = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function ot(e) {
    let t;
    this.g = this.o = this.j = "";
    this.u = null;
    this.m = this.h = "";
    this.l = false;
    if (e instanceof ot) {
      this.l = e.l;
      ut(this, e.j);
      this.o = e.o;
      this.g = e.g;
      ct(this, e.u);
      this.h = e.h;
      lt(this, Nt(e.i));
      this.m = e.m;
    } else if (e && (t = String(e).match(at))) {
      this.l = false;
      ut(this, t[1] || "", true);
      this.o = dt(t[2] || "");
      this.g = dt(t[3] || "", true);
      ct(this, t[4]);
      this.h = dt(t[5] || "", true);
      lt(this, t[6] || "", true);
      this.m = dt(t[7] || "");
    } else {
      this.l = false;
      this.i = new yt(null, this.l);
    }
  }
  function Bt(e) {
    return new ot(e);
  }
  function ut(e, t, n) {
    e.j = n ? dt(t, true) : t;
    e.j &&= e.j.replace(/:$/, "");
  }
  function ct(e, t) {
    if (t) {
      t = Number(t);
      if (isNaN(t) || t < 0) {
        throw Error("Bad port number " + t);
      }
      e.u = t;
    } else {
      e.u = null;
    }
  }
  function lt(e, t, n) {
    if (t instanceof yt) {
      e.i = t;
      (function (e, t) {
        if (t && !e.j) {
          _t(e);
          e.i = null;
          e.g.forEach(function (e, t) {
            const n = t.toLowerCase();
            if (t != n) {
              It(this, t);
              bt(this, n, e);
            }
          }, e);
        }
        e.j = t;
      })(e.i, e.l);
    } else {
      if (!n) {
        t = ft(t, Dt);
      }
      e.i = new yt(t, e.l);
    }
  }
  function ht(e, t, n) {
    e.i.set(t, n);
  }
  function Ct(e) {
    ht(e, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36));
    return e;
  }
  function dt(e, t) {
    if (e) {
      if (t) {
        return decodeURI(e.replace(/%25/g, "%2525"));
      } else {
        return decodeURIComponent(e);
      }
    } else {
      return "";
    }
  }
  function ft(e, t, n) {
    if (typeof e == "string") {
      e = encodeURI(e).replace(t, pt);
      if (n) {
        e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
      }
      return e;
    } else {
      return null;
    }
  }
  function pt(e) {
    return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (e & 15).toString(16);
  }
  ot.prototype.toString = function () {
    const e = [];
    var t = this.j;
    if (t) {
      e.push(ft(t, gt, true), ":");
    }
    var n = this.g;
    if (n || t == "file") {
      e.push("//");
      if (t = this.o) {
        e.push(ft(t, gt, true), "@");
      }
      e.push(ke(n).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
      if ((n = this.u) != null) {
        e.push(":", String(n));
      }
    }
    if (n = this.h) {
      if (this.g && n.charAt(0) != "/") {
        e.push("/");
      }
      e.push(ft(n, n.charAt(0) == "/" ? Et : mt, true));
    }
    if (n = this.i.toString()) {
      e.push("?", n);
    }
    if (n = this.m) {
      e.push("#", ft(n, wt));
    }
    return e.join("");
  };
  ot.prototype.resolve = function (e) {
    const t = Bt(this);
    let n = !!e.j;
    if (n) {
      ut(t, e.j);
    } else {
      n = !!e.o;
    }
    if (n) {
      t.o = e.o;
    } else {
      n = !!e.g;
    }
    if (n) {
      t.g = e.g;
    } else {
      n = e.u != null;
    }
    var r = e.h;
    if (n) {
      ct(t, e.u);
    } else if (n = !!e.h) {
      if (r.charAt(0) != "/") {
        if (this.g && !this.h) {
          r = "/" + r;
        } else {
          var s = t.h.lastIndexOf("/");
          if (s != -1) {
            r = t.h.slice(0, s + 1) + r;
          }
        }
      }
      if ((s = r) == ".." || s == ".") {
        r = "";
      } else if (s.indexOf("./") != -1 || s.indexOf("/.") != -1) {
        r = s.lastIndexOf("/", 0) == 0;
        s = s.split("/");
        const e = [];
        for (let t = 0; t < s.length;) {
          const n = s[t++];
          if (n == ".") {
            if (r && t == s.length) {
              e.push("");
            }
          } else if (n == "..") {
            if (e.length > 1 || e.length == 1 && e[0] != "") {
              e.pop();
            }
            if (r && t == s.length) {
              e.push("");
            }
          } else {
            e.push(n);
            r = true;
          }
        }
        r = e.join("/");
      } else {
        r = s;
      }
    }
    if (n) {
      t.h = r;
    } else {
      n = e.i.toString() !== "";
    }
    if (n) {
      lt(t, Nt(e.i));
    } else {
      n = !!e.m;
    }
    if (n) {
      t.m = e.m;
    }
    return t;
  };
  var gt = /[#\/\?@]/g;
  var mt = /[#\?:]/g;
  var Et = /[#\?]/g;
  var Dt = /[#\?@]/g;
  var wt = /#/g;
  function yt(e, t) {
    this.h = this.g = null;
    this.i = e || null;
    this.j = !!t;
  }
  function _t(e) {
    if (!e.g) {
      e.g = new Map();
      e.h = 0;
      if (e.i) {
        (function (e, t) {
          if (e) {
            e = e.split("&");
            for (let n = 0; n < e.length; n++) {
              const r = e[n].indexOf("=");
              let s;
              let i = null;
              if (r >= 0) {
                s = e[n].substring(0, r);
                i = e[n].substring(r + 1);
              } else {
                s = e[n];
              }
              t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
            }
          }
        })(e.i, function (t, n) {
          e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
        });
      }
    }
  }
  function It(e, t) {
    _t(e);
    t = At(e, t);
    if (e.g.has(t)) {
      e.i = null;
      e.h -= e.g.get(t).length;
      e.g.delete(t);
    }
  }
  function vt(e, t) {
    _t(e);
    t = At(e, t);
    return e.g.has(t);
  }
  function Tt(e, t) {
    _t(e);
    let n = [];
    if (typeof t == "string") {
      if (vt(e, t)) {
        n = n.concat(e.g.get(At(e, t)));
      }
    } else {
      e = Array.from(e.g.values());
      t = 0;
      for (; t < e.length; t++) {
        n = n.concat(e[t]);
      }
    }
    return n;
  }
  function bt(e, t, n) {
    It(e, t);
    if (n.length > 0) {
      e.i = null;
      e.g.set(At(e, t), h(n));
      e.h += n.length;
    }
  }
  function Nt(e) {
    const t = new yt();
    t.i = e.i;
    if (e.g) {
      t.g = new Map(e.g);
      t.h = e.h;
    }
    return t;
  }
  function At(e, t) {
    t = String(t);
    if (e.j) {
      t = t.toLowerCase();
    }
    return t;
  }
  function Ft(e, t, n, r, s) {
    try {
      if (s) {
        s.onload = null;
        s.onerror = null;
        s.onabort = null;
        s.ontimeout = null;
      }
      r(n);
    } catch (zu) {}
  }
  function Ot() {
    this.g = new fe();
  }
  function St(e) {
    this.i = e.Sb || null;
    this.h = e.ab || false;
  }
  function xt(e, t) {
    ie.call(this);
    this.H = e;
    this.o = t;
    this.m = undefined;
    this.status = this.readyState = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.A = new Headers();
    this.h = null;
    this.F = "GET";
    this.D = "";
    this.g = false;
    this.B = this.j = this.l = null;
    this.v = new AbortController();
  }
  function Lt(e) {
    e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e));
  }
  function Rt(e) {
    e.readyState = 4;
    e.l = null;
    e.j = null;
    e.B = null;
    kt(e);
  }
  function kt(e) {
    if (e.onreadystatechange) {
      e.onreadystatechange.call(e);
    }
  }
  function Gt(e) {
    let t = "";
    U(e, function (e, n) {
      t += n;
      t += ":";
      t += e;
      t += "\r\n";
    });
    return t;
  }
  function Pt(e, t, n) {
    e: {
      for (r in n) {
        var r = false;
        break e;
      }
      r = true;
    }
    if (!r) {
      n = Gt(n);
      if (typeof e != "string") {
        ht(e, t, n);
      }
    }
  }
  function Mt(e) {
    ie.call(this);
    this.headers = new Map();
    this.L = e || null;
    this.h = false;
    this.g = null;
    this.D = "";
    this.o = 0;
    this.l = "";
    this.j = this.B = this.v = this.A = false;
    this.m = null;
    this.F = "";
    this.H = false;
  }
  (e = yt.prototype).add = function (e, t) {
    _t(this);
    this.i = null;
    e = At(this, e);
    let n = this.g.get(e);
    if (!n) {
      this.g.set(e, n = []);
    }
    n.push(t);
    this.h += 1;
    return this;
  };
  e.forEach = function (e, t) {
    _t(this);
    this.g.forEach(function (n, r) {
      n.forEach(function (n) {
        e.call(t, n, r, this);
      }, this);
    }, this);
  };
  e.set = function (e, t) {
    _t(this);
    this.i = null;
    if (vt(this, e = At(this, e))) {
      this.h -= this.g.get(e).length;
    }
    this.g.set(e, [t]);
    this.h += 1;
    return this;
  };
  e.get = function (e, t) {
    if (e && (e = Tt(this, e)).length > 0) {
      return String(e[0]);
    } else {
      return t;
    }
  };
  e.toString = function () {
    if (this.i) {
      return this.i;
    }
    if (!this.g) {
      return "";
    }
    const e = [];
    const t = Array.from(this.g.keys());
    for (let r = 0; r < t.length; r++) {
      var n = t[r];
      const s = ke(n);
      n = Tt(this, n);
      for (let t = 0; t < n.length; t++) {
        let r = s;
        if (n[t] !== "") {
          r += "=" + ke(n[t]);
        }
        e.push(r);
      }
    }
    return this.i = e.join("&");
  };
  c(St, pe);
  St.prototype.g = function () {
    return new xt(this.i, this.h);
  };
  c(xt, ie);
  (e = xt.prototype).open = function (e, t) {
    if (this.readyState != 0) {
      this.abort();
      throw Error("Error reopening a connection");
    }
    this.F = e;
    this.D = t;
    this.readyState = 1;
    kt(this);
  };
  e.send = function (e) {
    if (this.readyState != 1) {
      this.abort();
      throw Error("need to call open() first. ");
    }
    if (this.v.signal.aborted) {
      this.abort();
      throw Error("Request was aborted.");
    }
    this.g = true;
    const t = {
      headers: this.A,
      method: this.F,
      credentials: this.m,
      cache: undefined,
      signal: this.v.signal
    };
    if (e) {
      t.body = e;
    }
    (this.H || i).fetch(new Request(this.D, t)).then(this.Pa.bind(this), this.ga.bind(this));
  };
  e.abort = function () {
    this.response = this.responseText = "";
    this.A = new Headers();
    this.status = 0;
    this.v.abort();
    if (this.j) {
      this.j.cancel("Request was aborted.").catch(() => {});
    }
    if (this.readyState >= 1 && this.g && this.readyState != 4) {
      this.g = false;
      Rt(this);
    }
    this.readyState = 0;
  };
  e.Pa = function (e) {
    if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, kt(this)), this.g && (this.readyState = 3, kt(this), this.g))) {
      if (this.responseType === "arraybuffer") {
        e.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
      } else if (i.ReadableStream !== undefined && "body" in e) {
        this.j = e.body.getReader();
        if (this.o) {
          if (this.responseType) {
            throw Error("responseType must be empty for \"streamBinaryChunks\" mode responses.");
          }
          this.response = [];
        } else {
          this.response = this.responseText = "";
          this.B = new TextDecoder();
        }
        Lt(this);
      } else {
        e.text().then(this.Oa.bind(this), this.ga.bind(this));
      }
    }
  };
  e.Ma = function (e) {
    if (this.g) {
      if (this.o && e.value) {
        this.response.push(e.value);
      } else if (!this.o) {
        var t = e.value ? e.value : new Uint8Array(0);
        if (t = this.B.decode(t, {
          stream: !e.done
        })) {
          this.response = this.responseText += t;
        }
      }
      if (e.done) {
        Rt(this);
      } else {
        kt(this);
      }
      if (this.readyState == 3) {
        Lt(this);
      }
    }
  };
  e.Oa = function (e) {
    if (this.g) {
      this.response = this.responseText = e;
      Rt(this);
    }
  };
  e.Na = function (e) {
    if (this.g) {
      this.response = e;
      Rt(this);
    }
  };
  e.ga = function () {
    if (this.g) {
      Rt(this);
    }
  };
  e.setRequestHeader = function (e, t) {
    this.A.append(e, t);
  };
  e.getResponseHeader = function (e) {
    return this.h && this.h.get(e.toLowerCase()) || "";
  };
  e.getAllResponseHeaders = function () {
    if (!this.h) {
      return "";
    }
    const e = [];
    const t = this.h.entries();
    for (var n = t.next(); !n.done;) {
      n = n.value;
      e.push(n[0] + ": " + n[1]);
      n = t.next();
    }
    return e.join("\r\n");
  };
  Object.defineProperty(xt.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (e) {
      this.m = e ? "include" : "same-origin";
    }
  });
  c(Mt, ie);
  var Vt = /^https?$/i;
  var Ht = ["POST", "PUT"];
  function Ut(e, t) {
    e.h = false;
    if (e.g) {
      e.j = true;
      e.g.abort();
      e.j = false;
    }
    e.l = t;
    e.o = 5;
    qt(e);
    Kt(e);
  }
  function qt(e) {
    if (!e.A) {
      e.A = true;
      ae(e, "complete");
      ae(e, "error");
    }
  }
  function Jt(e) {
    if (e.h && s !== undefined) {
      if (e.v && jt(e) == 4) {
        setTimeout(e.Ca.bind(e), 0);
      } else {
        ae(e, "readystatechange");
        if (jt(e) == 4) {
          e.h = false;
          try {
            const s = e.ca();
            e: switch (s) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var t = true;
                break e;
              default:
                t = false;
            }
            var n;
            if (!(n = t)) {
              var r;
              if (r = s === 0) {
                let t = String(e.D).match(at)[1] || null;
                if (!t && i.self && i.self.location) {
                  t = i.self.location.protocol.slice(0, -1);
                }
                r = !Vt.test(t ? t.toLowerCase() : "");
              }
              n = r;
            }
            if (n) {
              ae(e, "complete");
              ae(e, "success");
            } else {
              e.o = 6;
              try {
                var a = jt(e) > 2 ? e.g.statusText : "";
              } catch (zr) {
                a = "";
              }
              e.l = a + " [" + e.ca() + "]";
              qt(e);
            }
          } finally {
            Kt(e);
          }
        }
      }
    }
  }
  function Kt(e, t) {
    if (e.g) {
      if (e.m) {
        clearTimeout(e.m);
        e.m = null;
      }
      const r = e.g;
      e.g = null;
      if (!t) {
        ae(e, "ready");
      }
      try {
        r.onreadystatechange = null;
      } catch (n) {}
    }
  }
  function jt(e) {
    if (e.g) {
      return e.g.readyState;
    } else {
      return 0;
    }
  }
  function Qt(e) {
    try {
      if (!e.g) {
        return null;
      }
      if ("response" in e.g) {
        return e.g.response;
      }
      switch (e.F) {
        case "":
        case "text":
          return e.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in e.g) {
            return e.g.mozResponseArrayBuffer;
          }
      }
      return null;
    } catch ($u) {
      return null;
    }
  }
  function zt(e, t, n) {
    return n && n.internalChannelParams && n.internalChannelParams[e] || t;
  }
  function Yt(e) {
    this.za = 0;
    this.i = [];
    this.j = new Fe();
    this.ba = this.na = this.J = this.W = this.g = this.wa = this.G = this.H = this.u = this.U = this.o = null;
    this.Ya = this.V = 0;
    this.Sa = zt("failFast", false, e);
    this.F = this.C = this.v = this.m = this.l = null;
    this.X = true;
    this.xa = this.K = -1;
    this.Y = this.A = this.D = 0;
    this.Qa = zt("baseRetryDelayMs", 5000, e);
    this.Za = zt("retryDelaySeedMs", 10000, e);
    this.Ta = zt("forwardChannelMaxRetries", 2, e);
    this.va = zt("forwardChannelRequestTimeoutMs", 20000, e);
    this.ma = e && e.xmlHttpFactory || undefined;
    this.Ua = e && e.Rb || undefined;
    this.Aa = e && e.useFetchStreams || false;
    this.O = undefined;
    this.L = e && e.supportsCrossDomainXhr || false;
    this.M = "";
    this.h = new Ze(e && e.concurrentRequestLimit);
    this.Ba = new Ot();
    this.S = e && e.fastHandshake || false;
    this.R = e && e.encodeInitMessageHeaders || false;
    if (this.S && this.R) {
      this.R = false;
    }
    this.Ra = e && e.Pb || false;
    if (e && e.ua) {
      this.j.ua();
    }
    if (e && e.forceLongPolling) {
      this.X = false;
    }
    this.aa = !this.S && this.X && e && e.detectBufferingProxy || false;
    this.ia = undefined;
    if (e && e.longPollingTimeout && e.longPollingTimeout > 0) {
      this.ia = e.longPollingTimeout;
    }
    this.ta = undefined;
    this.T = 0;
    this.P = false;
    this.ja = this.B = null;
  }
  function Wt(e) {
    Xt(e);
    if (e.I == 3) {
      var t = e.V++;
      var n = Bt(e.J);
      ht(n, "SID", e.M);
      ht(n, "RID", t);
      ht(n, "TYPE", "terminate");
      tn(e, n);
      (t = new Pe(e, e.j, t)).M = 2;
      t.A = Ct(Bt(n));
      n = false;
      if (i.navigator && i.navigator.sendBeacon) {
        try {
          n = i.navigator.sendBeacon(t.A.toString(), "");
        } catch (r) {}
      }
      if (!n && i.Image) {
        new Image().src = t.A;
        n = true;
      }
      if (!n) {
        t.g = dn(t.j, null);
        t.g.ea(t.A);
      }
      t.F = Date.now();
      je(t);
    }
    hn(e);
  }
  function $t(e) {
    if (e.g) {
      an(e);
      e.g.cancel();
      e.g = null;
    }
  }
  function Xt(e) {
    $t(e);
    if (e.v) {
      i.clearTimeout(e.v);
      e.v = null;
    }
    Bn(e);
    e.h.cancel();
    if (e.m) {
      if (typeof e.m == "number") {
        i.clearTimeout(e.m);
      }
      e.m = null;
    }
  }
  function Zt(e) {
    if (!et(e.h) && !e.m) {
      e.m = true;
      var t = e.Ea;
      if (!m) {
        w();
      }
      if (!E) {
        m();
        E = true;
      }
      D.add(t, e);
      e.D = 0;
    }
  }
  function en(e, t) {
    var n;
    n = t ? t.l : e.V++;
    const r = Bt(e.J);
    ht(r, "SID", e.M);
    ht(r, "RID", n);
    ht(r, "AID", e.K);
    tn(e, r);
    if (e.u && e.o) {
      Pt(r, e.u, e.o);
    }
    n = new Pe(e, e.j, n, e.D + 1);
    if (e.u === null) {
      n.J = e.o;
    }
    if (t) {
      e.i = t.G.concat(e.i);
    }
    t = nn(e, n, 1000);
    n.H = Math.round(e.va * 0.5) + Math.round(e.va * 0.5 * Math.random());
    rt(e.h, n);
    Ue(n, r, t);
  }
  function tn(e, t) {
    if (e.H) {
      U(e.H, function (e, n) {
        ht(t, n, e);
      });
    }
    if (e.l) {
      U({}, function (e, n) {
        ht(t, n, e);
      });
    }
  }
  function nn(e, t, n) {
    n = Math.min(e.i.length, n);
    const r = e.l ? B(e.l.Ka, e.l, e) : null;
    e: {
      var s = e.i;
      let t = -1;
      while (true) {
        const e = ["count=" + n];
        if (t == -1) {
          if (n > 0) {
            t = s[0].g;
            e.push("ofs=" + t);
          } else {
            t = 0;
          }
        } else {
          e.push("ofs=" + t);
        }
        let B = true;
        for (let u = 0; u < n; u++) {
          var i = s[u].g;
          const n = s[u].map;
          if ((i -= t) < 0) {
            t = Math.max(0, s[u].g - 100);
            B = false;
          } else {
            try {
              i = "req" + i + "_" || "";
              try {
                var o = n instanceof Map ? n : Object.entries(n);
                for (const [t, n] of o) {
                  let r = n;
                  if (a(n)) {
                    r = Ce(n);
                  }
                  e.push(i + t + "=" + encodeURIComponent(r));
                }
              } catch (Xu) {
                e.push(i + "type=_badmap");
                throw Xu;
              }
            } catch (Xu) {
              if (r) {
                r(n);
              }
            }
          }
        }
        if (B) {
          o = e.join("&");
          break e;
        }
      }
      o = undefined;
    }
    e = e.i.splice(0, n);
    t.G = e;
    return o;
  }
  function rn(e) {
    if (!e.g && !e.v) {
      e.Y = 1;
      var t = e.Da;
      if (!m) {
        w();
      }
      if (!E) {
        m();
        E = true;
      }
      D.add(t, e);
      e.A = 0;
    }
  }
  function sn(e) {
    return !e.g && !e.v && !(e.A >= 3) && (e.Y++, e.v = Ae(B(e.Da, e), cn(e, e.A)), e.A++, true);
  }
  function an(e) {
    if (e.B != null) {
      i.clearTimeout(e.B);
      e.B = null;
    }
  }
  function on(e) {
    e.g = new Pe(e, e.j, "rpc", e.Y);
    if (e.u === null) {
      e.g.J = e.o;
    }
    e.g.P = 0;
    var t = Bt(e.na);
    ht(t, "RID", "rpc");
    ht(t, "SID", e.M);
    ht(t, "AID", e.K);
    ht(t, "CI", e.F ? "0" : "1");
    if (!e.F && e.ia) {
      ht(t, "TO", e.ia);
    }
    ht(t, "TYPE", "xmlhttp");
    tn(e, t);
    if (e.u && e.o) {
      Pt(t, e.u, e.o);
    }
    if (e.O) {
      e.g.H = e.O;
    }
    var n = e.g;
    e = e.ba;
    n.M = 1;
    n.A = Ct(Bt(t));
    n.u = null;
    n.R = true;
    qe(n, e);
  }
  function Bn(e) {
    if (e.C != null) {
      i.clearTimeout(e.C);
      e.C = null;
    }
  }
  function un(e, t) {
    var n = null;
    if (e.g == t) {
      Bn(e);
      an(e);
      e.g = null;
      var r = 2;
    } else {
      if (!nt(e.h, t)) {
        return;
      }
      n = t.G;
      st(e.h, t);
      r = 1;
    }
    if (e.I != 0) {
      if (t.o) {
        if (r == 1) {
          n = t.u ? t.u.length : 0;
          t = Date.now() - t.F;
          var s = e.D;
          ae(r = _e(), new Ne(r, n));
          Zt(e);
        } else {
          rn(e);
        }
      } else if ((s = t.m) == 3 || s == 0 && t.X > 0 || (r != 1 || !function (e, t) {
        return !(tt(e.h) >= e.h.j - (e.m ? 1 : 0)) && !(e.m ? (e.i = t.G.concat(e.i), 0) : e.I == 1 || e.I == 2 || e.D >= (e.Sa ? 0 : e.Ta) || (e.m = Ae(B(e.Ea, e, t), cn(e, e.D)), e.D++, 0));
      }(e, t)) && (r != 2 || !sn(e))) {
        if (n && n.length > 0) {
          t = e.h;
          t.i = t.i.concat(n);
        }
        switch (s) {
          case 1:
            ln(e, 5);
            break;
          case 4:
            ln(e, 10);
            break;
          case 3:
            ln(e, 6);
            break;
          default:
            ln(e, 2);
        }
      }
    }
  }
  function cn(e, t) {
    let n = e.Qa + Math.floor(Math.random() * e.Za);
    if (!e.isActive()) {
      n *= 2;
    }
    return n * t;
  }
  function ln(e, t) {
    e.j.info("Error code " + t);
    if (t == 2) {
      var n = B(e.bb, e);
      var r = e.Ua;
      const t = !r;
      r = new ot(r || "//www.google.com/images/cleardot.gif");
      if (!i.location || i.location.protocol != "http") {
        ut(r, "https");
      }
      Ct(r);
      if (t) {
        (function (e, t) {
          const n = new Fe();
          if (i.Image) {
            const r = new Image();
            r.onload = u(Ft, n, "TestLoadImage: loaded", true, t, r);
            r.onerror = u(Ft, n, "TestLoadImage: error", false, t, r);
            r.onabort = u(Ft, n, "TestLoadImage: abort", false, t, r);
            r.ontimeout = u(Ft, n, "TestLoadImage: timeout", false, t, r);
            i.setTimeout(function () {
              if (r.ontimeout) {
                r.ontimeout();
              }
            }, 10000);
            r.src = e;
          } else {
            t(false);
          }
        })(r.toString(), n);
      } else {
        (function (e, t) {
          new Fe();
          const n = new AbortController();
          const r = setTimeout(() => {
            n.abort();
            Ft(0, 0, false, t);
          }, 10000);
          fetch(e, {
            signal: n.signal
          }).then(e => {
            clearTimeout(r);
            if (e.ok) {
              Ft(0, 0, true, t);
            } else {
              Ft(0, 0, false, t);
            }
          }).catch(() => {
            clearTimeout(r);
            Ft(0, 0, false, t);
          });
        })(r.toString(), n);
      }
    } else {
      be(2);
    }
    e.I = 0;
    if (e.l) {
      e.l.pa(t);
    }
    hn(e);
    Xt(e);
  }
  function hn(e) {
    e.I = 0;
    e.ja = [];
    if (e.l) {
      const t = it(e.h);
      if (t.length != 0 || e.i.length != 0) {
        C(e.ja, t);
        C(e.ja, e.i);
        e.h.i.length = 0;
        h(e.i);
        e.i.length = 0;
      }
      e.l.oa();
    }
  }
  function Cn(e, t, n) {
    var r = n instanceof ot ? Bt(n) : new ot(n);
    if (r.g != "") {
      if (t) {
        r.g = t + "." + r.g;
      }
      ct(r, r.u);
    } else {
      var s = i.location;
      r = s.protocol;
      t = t ? t + "." + s.hostname : s.hostname;
      s = +s.port;
      const e = new ot(null);
      if (r) {
        ut(e, r);
      }
      if (t) {
        e.g = t;
      }
      if (s) {
        ct(e, s);
      }
      if (n) {
        e.h = n;
      }
      r = e;
    }
    n = e.G;
    t = e.wa;
    if (n && t) {
      ht(r, n, t);
    }
    ht(r, "VER", e.ka);
    tn(e, r);
    return r;
  }
  function dn(e, t, n) {
    if (t && !e.L) {
      throw Error("Can't create secondary domain capable XhrIo object.");
    }
    (t = e.Aa && !e.ma ? new Mt(new St({
      ab: n
    })) : new Mt(e.ma)).Fa(e.L);
    return t;
  }
  function fn() {}
  function pn() {}
  function gn(e, t) {
    ie.call(this);
    this.g = new Yt(t);
    this.l = e;
    this.h = t && t.messageUrlParams || null;
    e = t && t.messageHeaders || null;
    if (t && t.clientProtocolHeaderRequired) {
      if (e) {
        e["X-Client-Protocol"] = "webchannel";
      } else {
        e = {
          "X-Client-Protocol": "webchannel"
        };
      }
    }
    this.g.o = e;
    e = t && t.initMessageHeaders || null;
    if (t && t.messageContentType) {
      if (e) {
        e["X-WebChannel-Content-Type"] = t.messageContentType;
      } else {
        e = {
          "X-WebChannel-Content-Type": t.messageContentType
        };
      }
    }
    if (t && t.sa) {
      if (e) {
        e["X-WebChannel-Client-Profile"] = t.sa;
      } else {
        e = {
          "X-WebChannel-Client-Profile": t.sa
        };
      }
    }
    this.g.U = e;
    if ((e = t && t.Qb) && !k(e)) {
      this.g.u = e;
    }
    this.A = t && t.supportsCrossDomainXhr || false;
    this.v = t && t.sendRawJson || false;
    if ((t = t && t.httpSessionIdParam) && !k(t)) {
      this.g.G = t;
      if ((e = this.h) !== null && t in e) {
        if (t in (e = this.h)) {
          delete e[t];
        }
      }
    }
    this.j = new Dn(this);
  }
  function mn(e) {
    Ee.call(this);
    if (e.__headers__) {
      this.headers = e.__headers__;
      this.statusCode = e.__status__;
      delete e.__headers__;
      delete e.__status__;
    }
    var t = e.__sm__;
    if (t) {
      e: {
        for (const n in t) {
          e = n;
          break e;
        }
        e = undefined;
      }
      if (this.i = e) {
        e = this.i;
        t = t !== null && e in t ? t[e] : undefined;
      }
      this.data = t;
    } else {
      this.data = e;
    }
  }
  function En() {
    De.call(this);
    this.status = 1;
  }
  function Dn(e) {
    this.g = e;
  }
  (e = Mt.prototype).Fa = function (e) {
    this.H = e;
  };
  e.ea = function (e, t, n, r) {
    if (this.g) {
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + e);
    }
    t = t ? t.toUpperCase() : "GET";
    this.D = e;
    this.l = "";
    this.o = 0;
    this.A = false;
    this.h = true;
    this.g = this.L ? this.L.g() : Se.g();
    this.g.onreadystatechange = l(B(this.Ca, this));
    try {
      this.B = true;
      this.g.open(t, String(e), true);
      this.B = false;
    } catch (zu) {
      Ut(this, zu);
      return;
    }
    e = n || "";
    n = new Map(this.headers);
    if (r) {
      if (Object.getPrototypeOf(r) === Object.prototype) {
        for (var s in r) {
          n.set(s, r[s]);
        }
      } else {
        if (typeof r.keys != "function" || typeof r.get != "function") {
          throw Error("Unknown input type for opt_headers: " + String(r));
        }
        for (const e of r.keys()) {
          n.set(e, r.get(e));
        }
      }
    }
    r = Array.from(n.keys()).find(e => e.toLowerCase() == "content-type");
    s = i.FormData && e instanceof i.FormData;
    if (!!(Array.prototype.indexOf.call(Ht, t, undefined) >= 0) && !r && !s) {
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    }
    for (const [i, a] of n) {
      this.g.setRequestHeader(i, a);
    }
    if (this.F) {
      this.g.responseType = this.F;
    }
    if ("withCredentials" in this.g && this.g.withCredentials !== this.H) {
      this.g.withCredentials = this.H;
    }
    try {
      if (this.m) {
        clearTimeout(this.m);
        this.m = null;
      }
      this.v = true;
      this.g.send(e);
      this.v = false;
    } catch (zu) {
      Ut(this, zu);
    }
  };
  e.abort = function (e) {
    if (this.g && this.h) {
      this.h = false;
      this.j = true;
      this.g.abort();
      this.j = false;
      this.o = e || 7;
      ae(this, "complete");
      ae(this, "abort");
      Kt(this);
    }
  };
  e.N = function () {
    if (this.g) {
      if (this.h) {
        this.h = false;
        this.j = true;
        this.g.abort();
        this.j = false;
      }
      Kt(this, true);
    }
    Mt.Z.N.call(this);
  };
  e.Ca = function () {
    if (!this.u) {
      if (this.B || this.v || this.j) {
        Jt(this);
      } else {
        this.Xa();
      }
    }
  };
  e.Xa = function () {
    Jt(this);
  };
  e.isActive = function () {
    return !!this.g;
  };
  e.ca = function () {
    try {
      if (jt(this) > 2) {
        return this.g.status;
      } else {
        return -1;
      }
    } catch (e) {
      return -1;
    }
  };
  e.la = function () {
    try {
      if (this.g) {
        return this.g.responseText;
      } else {
        return "";
      }
    } catch (e) {
      return "";
    }
  };
  e.La = function (e) {
    if (this.g) {
      var t = this.g.responseText;
      if (e && t.indexOf(e) == 0) {
        t = t.substring(e.length);
      }
      return de(t);
    }
  };
  e.ya = function () {
    return this.o;
  };
  e.Ha = function () {
    if (typeof this.l == "string") {
      return this.l;
    } else {
      return String(this.l);
    }
  };
  (e = Yt.prototype).ka = 8;
  e.I = 1;
  e.connect = function (e, t, n, r) {
    be(0);
    this.W = e;
    this.H = t || {};
    if (n && r !== undefined) {
      this.H.OSID = n;
      this.H.OAID = r;
    }
    this.F = this.X;
    this.J = Cn(this, null, this.W);
    Zt(this);
  };
  e.Ea = function (e) {
    if (this.m) {
      this.m = null;
      if (this.I == 1) {
        if (!e) {
          this.V = Math.floor(Math.random() * 100000);
          e = this.V++;
          const s = new Pe(this, this.j, e);
          let i = this.o;
          if (this.U) {
            if (i) {
              i = q(i);
              K(i, this.U);
            } else {
              i = this.U;
            }
          }
          if (this.u === null && !this.R) {
            s.J = i;
            i = null;
          }
          if (this.S) {
            e: {
              var t = 0;
              for (var n = 0; n < this.i.length; n++) {
                var r = this.i[n];
                if ((r = "__data__" in r.map && typeof (r = r.map.__data__) == "string" ? r.length : undefined) === undefined) {
                  break;
                }
                if ((t += r) > 4096) {
                  t = n;
                  break e;
                }
                if (t === 4096 || n === this.i.length - 1) {
                  t = n + 1;
                  break e;
                }
              }
              t = 1000;
            }
          } else {
            t = 1000;
          }
          t = nn(this, s, t);
          ht(n = Bt(this.J), "RID", e);
          ht(n, "CVER", 22);
          if (this.G) {
            ht(n, "X-HTTP-Session-Id", this.G);
          }
          tn(this, n);
          if (i) {
            if (this.R) {
              t = "headers=" + ke(Gt(i)) + "&" + t;
            } else if (this.u) {
              Pt(n, this.u, i);
            }
          }
          rt(this.h, s);
          if (this.Ra) {
            ht(n, "TYPE", "init");
          }
          if (this.S) {
            ht(n, "$req", t);
            ht(n, "SID", "null");
            s.U = true;
            Ue(s, n, null);
          } else {
            Ue(s, n, t);
          }
          this.I = 2;
        }
      } else if (this.I == 3) {
        if (e) {
          en(this, e);
        } else if (this.i.length != 0 && !et(this.h)) {
          en(this);
        }
      }
    }
  };
  e.Da = function () {
    this.v = null;
    on(this);
    if (this.aa && !this.P && this.g != null && !(this.T <= 0)) {
      var e = this.T * 4;
      this.j.info("BP detection timer enabled: " + e);
      this.B = Ae(B(this.Wa, this), e);
    }
  };
  e.Wa = function () {
    if (this.B) {
      this.B = null;
      this.j.info("BP detection timeout reached.");
      this.j.info("Buffering proxy detected and switch to long-polling!");
      this.F = false;
      this.P = true;
      be(10);
      $t(this);
      on(this);
    }
  };
  e.Va = function () {
    if (this.C != null) {
      this.C = null;
      $t(this);
      sn(this);
      be(19);
    }
  };
  e.bb = function (e) {
    if (e) {
      this.j.info("Successfully pinged google.com");
      be(2);
    } else {
      this.j.info("Failed to ping google.com");
      be(1);
    }
  };
  e.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  (e = fn.prototype).ra = function () {};
  e.qa = function () {};
  e.pa = function () {};
  e.oa = function () {};
  e.isActive = function () {
    return true;
  };
  e.Ka = function () {};
  pn.prototype.g = function (e, t) {
    return new gn(e, t);
  };
  c(gn, ie);
  gn.prototype.m = function () {
    this.g.l = this.j;
    if (this.A) {
      this.g.L = true;
    }
    this.g.connect(this.l, this.h || undefined);
  };
  gn.prototype.close = function () {
    Wt(this.g);
  };
  gn.prototype.o = function (e) {
    var t = this.g;
    if (typeof e == "string") {
      var n = {
        __data__: e
      };
      e = n;
    } else if (this.v) {
      (n = {}).__data__ = Ce(e);
      e = n;
    }
    t.i.push(new Xe(t.Ya++, e));
    if (t.I == 3) {
      Zt(t);
    }
  };
  gn.prototype.N = function () {
    this.g.l = null;
    delete this.j;
    Wt(this.g);
    delete this.g;
    gn.Z.N.call(this);
  };
  c(mn, Ee);
  c(En, De);
  c(Dn, fn);
  Dn.prototype.ra = function () {
    ae(this.g, "a");
  };
  Dn.prototype.qa = function (e) {
    ae(this.g, new mn(e));
  };
  Dn.prototype.pa = function (e) {
    ae(this.g, new En());
  };
  Dn.prototype.oa = function () {
    ae(this.g, "b");
  };
  pn.prototype.createWebChannel = pn.prototype.g;
  gn.prototype.send = gn.prototype.o;
  gn.prototype.open = gn.prototype.m;
  gn.prototype.close = gn.prototype.close;
  O = x.createWebChannelTransport = function () {
    return new pn();
  };
  F = x.getStatEventTarget = function () {
    return _e();
  };
  A = x.Event = we;
  N = x.Stat = {
    jb: 0,
    mb: 1,
    nb: 2,
    Hb: 3,
    Mb: 4,
    Jb: 5,
    Kb: 6,
    Ib: 7,
    Gb: 8,
    Lb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Eb: 12,
    Ab: 13,
    Bb: 14,
    zb: 15,
    Cb: 16,
    Db: 17,
    fb: 18,
    eb: 19,
    gb: 20
  };
  xe.NO_ERROR = 0;
  xe.TIMEOUT = 8;
  xe.HTTP_ERROR = 6;
  b = x.ErrorCode = xe;
  Le.COMPLETE = "complete";
  T = x.EventType = Le;
  ge.EventType = me;
  me.OPEN = "a";
  me.CLOSE = "b";
  me.ERROR = "c";
  me.MESSAGE = "d";
  ie.prototype.listen = ie.prototype.J;
  v = x.WebChannel = ge;
  x.FetchXmlHttpFactory = St;
  Mt.prototype.listenOnce = Mt.prototype.K;
  Mt.prototype.getLastError = Mt.prototype.Ha;
  Mt.prototype.getLastErrorCode = Mt.prototype.ya;
  Mt.prototype.getStatus = Mt.prototype.ca;
  Mt.prototype.getResponseJson = Mt.prototype.La;
  Mt.prototype.getResponseText = Mt.prototype.la;
  Mt.prototype.send = Mt.prototype.ea;
  Mt.prototype.setWithCredentials = Mt.prototype.Fa;
  I = x.XhrIo = Mt;
}).apply(S !== undefined ? S : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
var L = class e {
  static FOLD_CASE = 1;
  static LITERAL = 2;
  static CLASS_NL = 4;
  static DOT_NL = 8;
  static ONE_LINE = 16;
  static NON_GREEDY = 32;
  static PERL_X = 64;
  static UNICODE_GROUPS = 128;
  static WAS_DOLLAR = 256;
  static LOOKBEHIND = 512;
  static MATCH_NL = e.CLASS_NL | e.DOT_NL;
  static PERL = e.CLASS_NL | e.ONE_LINE | e.PERL_X | e.UNICODE_GROUPS;
  static POSIX = 0;
  static UNANCHORED = 0;
  static ANCHOR_START = 1;
  static ANCHOR_BOTH = 2;
};
var R = 1;
var k = 2;
var G = 4;
var P = 8;
var M = 16;
var V = 512;
var H = 128;
var U = new Int32Array(H);
var q = new Int32Array(H);
var J = 65535;
for (let LE = 0; LE < H; LE++) {
  U[LE] = LE >= 97 && LE <= 122 ? LE - 32 : LE;
  q[LE] = LE >= 65 && LE <= 90 ? LE + 32 : LE;
}
var K = class {
  static CODES = Object.freeze({
    "": 7,
    "\b": 8,
    "\t": 9,
    "\n": 10,
    "": 11,
    "\f": 12,
    "\r": 13,
    " ": 32,
    "\"": 34,
    $: 36,
    "&": 38,
    "'": 39,
    "(": 40,
    ")": 41,
    "*": 42,
    "+": 43,
    "-": 45,
    ".": 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    ":": 58,
    "<": 60,
    ">": 62,
    "?": 63,
    A: 65,
    B: 66,
    C: 67,
    F: 70,
    P: 80,
    Q: 81,
    U: 85,
    Z: 90,
    "[": 91,
    "\\": 92,
    "]": 93,
    "^": 94,
    _: 95,
    "`": 96,
    a: 97,
    b: 98,
    f: 102,
    i: 105,
    m: 109,
    n: 110,
    r: 114,
    s: 115,
    t: 116,
    v: 118,
    x: 120,
    z: 122,
    "{": 123,
    "|": 124,
    "}": 125
  });
  static toUpperCase(e) {
    if (e < H) {
      return U[e];
    }
    const t = String.fromCodePoint(e).toUpperCase();
    const n = t.codePointAt(0) > J ? 2 : 1;
    if (t.length > n) {
      return e;
    }
    const r = String.fromCodePoint(t.codePointAt(0)).toLowerCase();
    const s = r.codePointAt(0) > J ? 2 : 1;
    if (r.length > s || r.codePointAt(0) !== e) {
      return e;
    } else {
      return t.codePointAt(0);
    }
  }
  static toLowerCase(e) {
    if (e < H) {
      return q[e];
    }
    const t = String.fromCodePoint(e).toLowerCase();
    const n = t.codePointAt(0) > J ? 2 : 1;
    if (t.length > n) {
      return e;
    }
    const r = String.fromCodePoint(t.codePointAt(0)).toUpperCase();
    const s = r.codePointAt(0) > J ? 2 : 1;
    if (r.length > s || r.codePointAt(0) !== e) {
      return e;
    } else {
      return t.codePointAt(0);
    }
  }
};
var j = class {
  constructor(e, t = false) {
    this.data = e;
    this.isStride1 = t;
    this.SIZE = t ? 2 : 3;
  }
  getLo(e) {
    return this.data[e * this.SIZE];
  }
  getHi(e) {
    return this.data[e * this.SIZE + 1];
  }
  getStride(e) {
    if (this.isStride1) {
      return 1;
    } else {
      return this.data[e * this.SIZE + 2];
    }
  }
  get length() {
    return this.data.length / this.SIZE;
  }
};
var Q = new Uint8Array(256);
for (let LE = 0; LE < 64; LE++) {
  Q["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-".charCodeAt(LE)] = LE;
}
var z = e => {
  const t = [];
  let n = 0;
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    const i = Q[e.charCodeAt(s)];
    n |= (i & 31) << r;
    if (i & 32) {
      r += 5;
    } else {
      t.push(n);
      n = 0;
      r = 0;
    }
  }
  return t;
};
var Y = (e, t) => {
  const n = z(e);
  const r = t ? n.length / 2 : n.length / 3;
  const s = new Uint32Array(r * 3);
  let i = 0;
  let a = 0;
  for (let o = 0; o < r; o++) {
    i += n[a++];
    s[o * 3] = i;
    i += n[a++];
    s[o * 3 + 1] = i;
    s[o * 3 + 2] = t ? 1 : n[a++];
  }
  return s;
};
var W = class {
  constructor(e) {
    this.initializer = e;
    this.cache = new Map();
  }
  has(e) {
    return Object.hasOwn(this.initializer, e);
  }
  get(e) {
    if (this.cache.has(e)) {
      return this.cache.get(e);
    }
    const t = this.has(e) ? this.initializer[e]() : null;
    this.cache.set(e, t);
    return t;
  }
};
var $ = class {
  static _CASE_ORBIT = null;
  static get CASE_ORBIT() {
    this._CASE_ORBIT ||= (e => {
      const t = z(e);
      const n = new Map();
      let r = 0;
      for (let s = 0; s < t.length; s += 2) {
        r += t[s];
        const e = t[s + 1];
        const i = e >>> 1 ^ -(e & 1);
        n.set(r, r + i);
      }
      return n;
    })("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC");
    return this._CASE_ORBIT;
  }
  static _Print = null;
  static get Print() {
    this._Print ||= new j(Y("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB", false));
    return this._Print;
  }
  static CATEGORIES = new W({
    C: () => new j(Y("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB", false)),
    Cc: () => new j(Y("AfgDgB", true)),
    Cf: () => new j(Y("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB", false)),
    Cn: () => new j(Y("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB", false)),
    Co: () => new j(Y("gg4B-nGh4hc9--BD9--B", true)),
    Cs: () => new j(Y("gg2B--B", true)),
    L: () => new j(Y("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB", false)),
    LC: () => new j(Y("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB", false)),
    Ll: () => new j(Y("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB", false)),
    Lm: () => new j(Y("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB", false)),
    Lo: () => new j(Y("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB", false)),
    Lt: () => new j(Y("lOGDnB2sH2sHBGBJHBJHBNQQwBAB", false)),
    Lu: () => new j(Y("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB", false)),
    M: () => new j(Y("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB", false)),
    Mc: () => new j(Y("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB", false)),
    Me: () => new j(Y("okBBB1xF-wB-wBBCBCCBsshBCB", false)),
    Mn: () => new j(Y("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB", false)),
    N: () => new j(Y("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB", false)),
    Nd: () => new j(Y("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ", true)),
    Nl: () => new j(Y("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB", false)),
    No: () => new j(Y("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB", false)),
    P: () => new j(Y("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB", false)),
    Pc: () => new j(Y("-Cg-Hg-HBUU-u3BBBZCBwHAB", false)),
    Pd: () => new j(Y("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J", false)),
    Pe: () => new j(Y("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD", false)),
    Pf: () => new j(Y("7F+6H+6HEddpuDCCFDDQEE", false)),
    Pi: () => new j(Y("rFt7Ht7HDBBDaapuDCCFDDQEE", false)),
    Po: () => new j(Y("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB", false)),
    Ps: () => new j(Y("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB", false)),
    S: () => new j(Y("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB", false)),
    Sc: () => new j(Y("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC", false)),
    Sk: () => new j(Y("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB", false)),
    Sm: () => new j(Y("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB", false)),
    So: () => new j(Y("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB", false)),
    Z: () => new j(Y("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB", false)),
    Zl: () => new j(Y("ohIA", true)),
    Zp: () => new j(Y("phIA", true)),
    Zs: () => new j(Y("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB", false)),
    ASCII_Hex_Digit: () => new j(Y("wBJIFbF", true)),
    Alphabetic: () => new j(Y("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB", false)),
    Dash: () => new j(Y("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J", false)),
    Emoji: () => new j(Y("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB", false)),
    Emoji_Component: () => new j(Y("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB", false)),
    Emoji_Modifier: () => new j(Y("7-8DE", true)),
    Emoji_Modifier_Base: () => new j(Y("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB", false)),
    Emoji_Presentation: () => new j(Y("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB", false)),
    Extended_Pictographic: () => new j(Y("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB", false)),
    Hex_Digit: () => new j(Y("wBJIFbFq1-BJIFbF", true)),
    Lowercase: () => new j(Y("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB", false)),
    Math: () => new j(Y("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB", false)),
    Quotation_Mark: () => new j(Y("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB", false)),
    Terminal_Punctuation: () => new j(Y("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB", false)),
    Uppercase: () => new j(Y("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB", false)),
    White_Space: () => new j(Y("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB", false))
  });
  static SCRIPTS = new W({
    Adlam: () => new j(Y("go6DrCFJFB", true)),
    Ahom: () => new j(Y("g4lCaDOFW", true)),
    Anatolian_Hieroglyphs: () => new j(Y("ggxCmS", true)),
    Arabic: () => new j(Y("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB", false)),
    Armenian: () => new j(Y("xpBlBDxBDCks9BE", true)),
    Avestan: () => new j(Y("g4iC1BEG", true)),
    Balinese: () => new j(Y("g4GsCCxB", true)),
    Bamum: () => new j(Y("g1pB3CpowB4R", true)),
    Bassa_Vah: () => new j(Y("w26CdDF", true)),
    Batak: () => new j(Y("g+GzBJD", true)),
    Bengali: () => new j(Y("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB", false)),
    Beria_Erfe: () => new j(Y("g17CYDY", true)),
    Bhaiksuki: () => new j(Y("ggnCICsBCNLc", true)),
    Bopomofo: () => new j(Y("qXB6wLqBxDf", true)),
    Brahmi: () => new j(Y("ggkCtCFjBKA", true)),
    Braille: () => new j(Y("ggK-H", true)),
    Buginese: () => new j(Y("gwGbDB", true)),
    Buhid: () => new j(Y("g6FT", true)),
    Canadian_Aboriginal: () => new j(Y("ggF-TxRlC7tgCP", true)),
    Carian: () => new j(Y("g1gCwB", true)),
    Caucasian_Albanian: () => new j(Y("wphCzBMA", true)),
    Chakma: () => new j(Y("gokC0BCR", true)),
    Cham: () => new j(Y("gwqB2BKNDJDD", true)),
    Cherokee: () => new j(Y("g9E1CDFz7lBvC", true)),
    Chorasmian: () => new j(Y("w9jCb", true)),
    Common: () => new j(Y("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB", false)),
    Coptic: () => new j(Y("ifNxkKzDGG", true)),
    Cuneiform: () => new j(Y("ggoC5cnDuDCEMjG", true)),
    Cypriot: () => new j(Y("ggiCFBDCCBqBBCBBEDD", false)),
    Cypro_Minoan: () => new j(Y("w8rCiD", true)),
    Cyrillic: () => new j(Y("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB", false)),
    Deseret: () => new j(Y("gghCvC", true)),
    Devanagari: () => new j(Y("goCwCFODZh7nBfhwcJ", true)),
    Dives_Akuru: () => new j(Y("gomCGBDDDBGBCBBCdBCBBDLBKJB", false)),
    Dogra: () => new j(Y("ggmC7B", true)),
    Duployan: () => new j(Y("ggvDqDGMEIIJDD", true)),
    Egyptian_Hieroglyphs: () => new j(Y("ggsC1iBL68D", true)),
    Elbasan: () => new j(Y("gohCnB", true)),
    Elymaic: () => new j(Y("g-jCW", true)),
    Ethiopic: () => new j(Y("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB", false)),
    Garay: () => new j(Y("gqjClBEcJB", true)),
    Georgian: () => new j(Y("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG", false)),
    Glagolitic: () => new j(Y("ggL-Ch9sDGCQDGCBCE", true)),
    Gothic: () => new j(Y("w5gCa", true)),
    Grantha: () => new j(Y("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB", false)),
    Greek: () => new j(Y("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB", false)),
    Gujarati: () => new j(Y("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB", false)),
    Gunjala_Gondi: () => new j(Y("grnCFCBCkBCBCFIJ", true)),
    Gurmukhi: () => new j(Y("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB", false)),
    Gurung_Khema: () => new j(Y("go4C5B", true)),
    Han: () => new j(Y("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB", false)),
    Hangul: () => new j(Y("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC", true)),
    Hanifi_Rohingya: () => new j(Y("gojCnBJJ", true)),
    Hanunoo: () => new j(Y("g5FU", true)),
    Hatran: () => new j(Y("gniCSCBGE", true)),
    Hebrew: () => new j(Y("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB", false)),
    Hiragana: () => new j(Y("hiM1CBHCBi7-C+IBTeeBBBulQAB", false)),
    Imperial_Aramaic: () => new j(Y("giiCVCI", true)),
    Inherited: () => new j(Y("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB", false)),
    Inscriptional_Pahlavi: () => new j(Y("g7iCSGH", true)),
    Inscriptional_Parthian: () => new j(Y("g6iCVDH", true)),
    Javanese: () => new j(Y("gsqBtCDJFB", true)),
    Kaithi: () => new j(Y("gkkCiCLA", true)),
    Kannada: () => new j(Y("gkDMCCCWCJCEDICCCDIBGCCDDJCC", true)),
    Katakana: () => new j(Y("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB", false)),
    Kawi: () => new j(Y("g4nCQCoBEc", true)),
    Kayah_Li: () => new j(Y("goqBtBCA", true)),
    Kharoshthi: () => new j(Y("gwiCDCBGHCCCcDCFJII", true)),
    Khitan_Small_Script: () => new j(Y("k-7C84G84GB0OBqBAB", false)),
    Khmer: () => new j(Y("g8F9CDJHJnPf", true)),
    Khojki: () => new j(Y("gwkCRCuB", true)),
    Khudawadi: () => new j(Y("w1kC6BGJ", true)),
    Kirat_Rai: () => new j(Y("gq7C5B", true)),
    Lao: () => new j(Y("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB", false)),
    Latin: () => new j(Y("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB", false)),
    Lepcha: () => new j(Y("ggH3BEOEC", true)),
    Limbu: () => new j(Y("goGeBCLBFLBFEEBKB", false)),
    Linear_A: () => new j(Y("gwhC2JKVLH", true)),
    Linear_B: () => new j(Y("gggCLCZCSCBCODNjB6D", true)),
    Lisu: () => new j(Y("wmpBvBx1eA", true)),
    Lycian: () => new j(Y("g0gCc", true)),
    Lydian: () => new j(Y("gpiCZGA", true)),
    Mahajani: () => new j(Y("wqkCmB", true)),
    Makasar: () => new j(Y("g3nCY", true)),
    Malayalam: () => new j(Y("goDMCCCyBCCCFFPDZ", true)),
    Mandaic: () => new j(Y("giCbDA", true)),
    Manichaean: () => new j(Y("g2iCmBFL", true)),
    Marchen: () => new j(Y("wjnCfDVCN", true)),
    Masaram_Gondi: () => new j(Y("gonCGBCBBCrBBECCBCCBHBJJB", false)),
    Medefaidrin: () => new j(Y("gy7C6C", true)),
    Meetei_Mayek: () => new j(Y("g3qBWqGtBDJ", true)),
    Mende_Kikakui: () => new j(Y("gg6DkGDP", true)),
    Meroitic_Cursive: () => new j(Y("gtiCXFTDtB", true)),
    Meroitic_Hieroglyphs: () => new j(Y("gsiCf", true)),
    Miao: () => new j(Y("g47CqCF4BIQ", true)),
    Modi: () => new j(Y("gwlCkCMJ", true)),
    Mongolian: () => new j(Y("ggGBBDCCBSBH4CBIqBB2t-BMB", false)),
    Mro: () => new j(Y("gy6CeCJFB", true)),
    Multani: () => new j(Y("g0kCGBCCCBCBCOBCKB", false)),
    Myanmar: () => new j(Y("ggE-EhqmBeiDfxibT", true)),
    Nabataean: () => new j(Y("gkiCeJI", true)),
    Nag_Mundari: () => new j(Y("wm5DpB", true)),
    Nandinagari: () => new j(Y("gtmCHDtBDK", true)),
    New_Tai_Lue: () => new j(Y("gsGrBFZHKEB", true)),
    Newa: () => new j(Y("gglC7CCE", true)),
    Nko: () => new j(Y("g+B6BDC", true)),
    Nushu: () => new j(Y("h-7CvsQvsQBqMB", false)),
    Nyiakeng_Puachue_Hmong: () => new j(Y("go4DsBENDJFB", true)),
    Ogham: () => new j(Y("g0Fc", true)),
    Ol_Chiki: () => new j(Y("wiHvB", true)),
    Ol_Onal: () => new j(Y("wu5DqBFA", true)),
    Old_Hungarian: () => new j(Y("gkjCyBOyBIF", true)),
    Old_Italic: () => new j(Y("g4gCjBKC", true)),
    Old_North_Arabian: () => new j(Y("g0iCf", true)),
    Old_Permic: () => new j(Y("w6gCqB", true)),
    Old_Persian: () => new j(Y("g9gCjBFN", true)),
    Old_Sogdian: () => new j(Y("g4jCnB", true)),
    Old_South_Arabian: () => new j(Y("gziCf", true)),
    Old_Turkic: () => new j(Y("ggjCoC", true)),
    Old_Uyghur: () => new j(Y("w7jCZ", true)),
    Oriya: () => new j(Y("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR", true)),
    Osage: () => new j(Y("wlhCjBFjB", true)),
    Osmanya: () => new j(Y("gkhCdDJ", true)),
    Pahawh_Hmong: () => new j(Y("g46ClCLJCGCUGS", true)),
    Palmyrene: () => new j(Y("gjiCf", true)),
    Pau_Cin_Hau: () => new j(Y("g2mC4B", true)),
    Phags_Pa: () => new j(Y("giqB3B", true)),
    Phoenician: () => new j(Y("goiCbEA", true)),
    Psalter_Pahlavi: () => new j(Y("g8iCRIDNG", true)),
    Rejang: () => new j(Y("wpqBjBMA", true)),
    Runic: () => new j(Y("g1FqCEK", true)),
    Samaritan: () => new j(Y("ggCtBDO", true)),
    Saurashtra: () => new j(Y("gkqBlCJL", true)),
    Sharada: () => new j(Y("gskC-ChsCH", true)),
    Shavian: () => new j(Y("wihCvB", true)),
    Siddham: () => new j(Y("gslC1BDlB", true)),
    Sidetic: () => new j(Y("gqiCZ", true)),
    SignWriting: () => new j(Y("gg2DrUQECO", true)),
    Sinhala: () => new j(Y("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB", false)),
    Sogdian: () => new j(Y("w5jCpB", true)),
    Sora_Sompeng: () => new j(Y("wmkCYIJ", true)),
    Soyombo: () => new j(Y("wymCyC", true)),
    Sundanese: () => new j(Y("g8G-BhIH", true)),
    Sunuwar: () => new j(Y("g+mChBPJ", true)),
    Syloti_Nagri: () => new j(Y("ggqBsB", true)),
    Syriac: () => new j(Y("g4BNC7BDCxIK", true)),
    Tagalog: () => new j(Y("g4FVKA", true)),
    Tagbanwa: () => new j(Y("g7FMCCCB", true)),
    Tai_Le: () => new j(Y("wqGdDE", true)),
    Tai_Tham: () => new j(Y("gxG+BCcDKHJHN", true)),
    Tai_Viet: () => new j(Y("g0qBiCZE", true)),
    Tai_Yo: () => new j(Y("g25DeCVJB", true)),
    Takri: () => new j(Y("g0lC5BHJ", true)),
    Tamil: () => new j(Y("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB", false)),
    Tangsa: () => new j(Y("wz6CuCCJ", true)),
    Tangut: () => new j(Y("g-7CgBgBB+3GBhQeBiDyDB", false)),
    Telugu: () => new j(Y("ggDMCCCWCPDICCCDIBCCCBDDDJII", true)),
    Thaana: () => new j(Y("g8BxB", true)),
    Thai: () => new j(Y("hwD5BGb", true)),
    Tibetan: () => new j(Y("g4DnCCjBFmBCjBCOCGFB", true)),
    Tifinagh: () => new j(Y("wpL3BIBPA", true)),
    Tirhuta: () => new j(Y("gklCnCJJ", true)),
    Todhri: () => new j(Y("guhCzB", true)),
    Tolong_Siki: () => new j(Y("wtnCrBFJ", true)),
    Toto: () => new j(Y("w04De", true)),
    Tulu_Tigalari: () => new j(Y("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB", false)),
    Ugaritic: () => new j(Y("g8gCdCA", true)),
    Unknown: () => new j(Y("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB", false)),
    Vai: () => new j(Y("gopBrJ", true)),
    Vithkuqi: () => new j(Y("wrhCKCOCGCBCKCOCGCB", true)),
    Wancho: () => new j(Y("g24D5BGA", true)),
    Warang_Citi: () => new j(Y("glmCyCNA", true)),
    Yezidi: () => new j(Y("g0jCpBCCDB", true)),
    Yi: () => new j(Y("ggoBskBE2B", true)),
    Zanabazar_Square: () => new j(Y("gwmCnC", true))
  });
  static FOLD_CATEGORIES = new W({
    L: () => new j(Y("laA", true)),
    LC: () => new j(Y("laA", true)),
    Ll: () => new j(Y("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB", false)),
    Lt: () => new j(Y("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB", false)),
    Lu: () => new j(Y("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB", false)),
    M: () => new j(Y("5cgBgBlgHAB", false)),
    Mn: () => new j(Y("5cgBgBlgHAB", false)),
    Emoji: () => new j(Y("8mJA", true)),
    Extended_Pictographic: () => new j(Y("8mJA", true)),
    Lowercase: () => new j(Y("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB", false)),
    Math: () => new j(Y("ycGDCHHFMMDDDCHHFAB", false)),
    Uppercase: () => new j(Y("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB", false))
  });
  static FOLD_SCRIPT = new W({
    Common: () => new j(Y("8cgBgB", false)),
    Greek: () => new j(Y("1FwUwU", false)),
    Inherited: () => new j(Y("5cgBgBlgHAB", false))
  });
};
var X = class e {
  static MAX_RUNE = 1114111;
  static RUNE_ERROR = 65533;
  static isUnsearchable(t) {
    return t === e.RUNE_ERROR || t >= e.MIN_HIGH_SURROGATE && t <= e.MAX_LOW_SURROGATE;
  }
  static MAX_ASCII = 127;
  static MAX_LATIN1 = 255;
  static MAX_BMP = 65535;
  static MIN_FOLD = 65;
  static MAX_FOLD = 125251;
  static MIN_HIGH_SURROGATE = 55296;
  static MAX_HIGH_SURROGATE = 56319;
  static MIN_LOW_SURROGATE = 56320;
  static MAX_LOW_SURROGATE = 57343;
  static MIN_SUPPLEMENTARY_CODE_POINT = 65536;
  static is32(e, t) {
    let n = 0;
    let r = e.length;
    while (n < r) {
      const s = n + Math.floor((r - n) / 2);
      const i = e.getLo(s);
      const a = e.getHi(s);
      if (i <= t && t <= a) {
        return (t - i) % e.getStride(s) === 0;
      }
      if (t < i) {
        r = s;
      } else {
        n = s + 1;
      }
    }
    return false;
  }
  static is(t, n) {
    if (n <= e.MAX_LATIN1) {
      for (let e = 0; e < t.length; e++) {
        if (n > t.getHi(e)) {
          continue;
        }
        const r = t.getLo(e);
        if (n < r) {
          return false;
        }
        return (n - r) % t.getStride(e) === 0;
      }
      return false;
    }
    return t.length > 0 && n >= t.getLo(0) && e.is32(t, n);
  }
  static isPrint(t) {
    if (t <= e.MAX_LATIN1) {
      return t >= 32 && t < e.MAX_ASCII || t >= 161 && t !== 173;
    } else {
      return e.is($.Print, t);
    }
  }
  static simpleFold(t) {
    if ($.CASE_ORBIT.has(t)) {
      return $.CASE_ORBIT.get(t);
    }
    if (t <= e.MAX_ASCII) {
      const e = K.toLowerCase(t);
      if (e !== t) {
        return e;
      } else {
        return K.toUpperCase(t);
      }
    }
    return t;
  }
  static equalsIgnoreCase(t, n) {
    if (t === n) {
      return true;
    }
    if (t < 0 || n < 0) {
      return false;
    }
    if (t <= e.MAX_ASCII && n <= e.MAX_ASCII) {
      if (t >= 65 && t <= 90) {
        t |= 32;
      }
      if (n >= 65 && n <= 90) {
        n |= 32;
      }
      return t === n;
    }
    for (let r = e.simpleFold(t); r !== t; r = e.simpleFold(r)) {
      if (r === n) {
        return true;
      }
    }
    return false;
  }
};
var Z = class extends Error {
  constructor(e) {
    super(e);
    this.name = "RE2JSException";
  }
};
var ee = class extends Z {
  constructor(e, t = null) {
    let n = `error parsing regexp: ${e}`;
    if (t) {
      n += `: \`${t}\``;
    }
    super(n);
    this.name = "RE2JSSyntaxException";
    this.message = n;
    this.error = e;
    this.input = t;
  }
  getDescription() {
    return this.error;
  }
  getPattern() {
    return this.input;
  }
};
var te = class extends Z {
  constructor(e) {
    super(e);
    this.name = "RE2JSCompileException";
  }
};
var ne = class extends Z {
  constructor(e) {
    super(e);
    this.name = "RE2JSGroupException";
  }
};
var re = class extends Z {
  constructor(e) {
    super(e);
    this.name = "RE2JSFlagsException";
  }
};
var se = class extends Z {
  constructor(e) {
    super(e);
    this.name = "RE2JSInternalException";
  }
};
var ie = new Uint8Array(256);
for (let LE = 0; LE < 256; LE++) {
  ie[LE] = LE >= 97 && LE <= 122 || LE >= 65 && LE <= 90 || LE >= 48 && LE <= 57 || LE === 95 ? 1 : 0;
}
var ae = null;
var oe = null;
var Be = class e {
  static METACHARACTERS = "\\.+*?()|[]{}^$";
  static EMPTY_BEGIN_LINE = 1;
  static EMPTY_END_LINE = 2;
  static EMPTY_BEGIN_TEXT = 4;
  static EMPTY_END_TEXT = 8;
  static EMPTY_WORD_BOUNDARY = 16;
  static EMPTY_NO_WORD_BOUNDARY = 32;
  static EMPTY_ALL = -1;
  static emptyInts() {
    return [];
  }
  static isString(e) {
    return typeof e == "string" || Object.prototype.toString.call(e) === "[object String]";
  }
  static typeName(e) {
    if (e === null || typeof e != "object" && typeof e != "function") {
      if (e === null) {
        return "null";
      } else {
        return typeof e;
      }
    } else {
      return Object.prototype.toString.call(e).slice(8, -1);
    }
  }
  static checkPattern(t) {
    if (!e.isString(t)) {
      throw new TypeError(`The pattern must be a string, not ${e.typeName(t)} (RE2JS.translateRegExp() converts a RegExp)`);
    }
  }
  static checkInput(t) {
    if (!e.isString(t) && !e.isByteArray(t)) {
      throw new TypeError(`The input must be a string or a byte array (Uint8Array or number[]), not ${e.typeName(t)}`);
    }
  }
  static checkFlags(e) {
    const t = G | k | R | P | M | V;
    if (!Number.isInteger(e) || (e & ~t) !== 0) {
      throw new re("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");
    }
  }
  static isByteArray(e) {
    return Array.isArray(e) || Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  static isalnum(e) {
    return K.CODES[0] <= e && e <= K.CODES[9] || K.CODES.a <= e && e <= K.CODES.z || K.CODES.A <= e && e <= K.CODES.Z;
  }
  static unhex(e) {
    if (K.CODES[0] <= e && e <= K.CODES[9]) {
      return e - K.CODES[0];
    } else if (K.CODES.a <= e && e <= K.CODES.f) {
      return e - K.CODES.a + 10;
    } else if (K.CODES.A <= e && e <= K.CODES.F) {
      return e - K.CODES.A + 10;
    } else {
      return -1;
    }
  }
  static escapeRune(t) {
    let n = "";
    if (X.isPrint(t)) {
      if (e.METACHARACTERS.indexOf(String.fromCodePoint(t)) >= 0) {
        n += "\\";
      }
      n += String.fromCodePoint(t);
    } else {
      switch (t) {
        case K.CODES["\""]:
          n += "\\\"";
          break;
        case K.CODES["\\"]:
          n += "\\\\";
          break;
        case K.CODES["\t"]:
          n += "\\t";
          break;
        case K.CODES["\n"]:
          n += "\\n";
          break;
        case K.CODES["\r"]:
          n += "\\r";
          break;
        case K.CODES["\b"]:
          n += "\\b";
          break;
        case K.CODES["\f"]:
          n += "\\f";
          break;
        default:
          {
            let e = t.toString(16);
            if (t < 256) {
              n += "\\x";
              if (e.length === 1) {
                n += "0";
              }
              n += e;
            } else {
              n += `\\x{${e}}`;
            }
            break;
          }
      }
    }
    return n;
  }
  static stringToRunes(e) {
    const t = String(e);
    const n = [];
    let r = 0;
    while (r < t.length) {
      const e = t.codePointAt(r);
      n.push(e);
      r += e > X.MAX_BMP ? 2 : 1;
    }
    return new Int32Array(n);
  }
  static runeToString(e) {
    return String.fromCodePoint(e);
  }
  static isWordRune(e) {
    return e < 256 && ie[e] === 1;
  }
  static emptyOpContext(t, n) {
    let r = 0;
    if (t < 0) {
      r |= e.EMPTY_BEGIN_TEXT | e.EMPTY_BEGIN_LINE;
    }
    if (t === 10) {
      r |= e.EMPTY_BEGIN_LINE;
    }
    if (n < 0) {
      r |= e.EMPTY_END_TEXT | e.EMPTY_END_LINE;
    }
    if (n === 10) {
      r |= e.EMPTY_END_LINE;
    }
    if (e.isWordRune(t) !== e.isWordRune(n)) {
      r |= e.EMPTY_WORD_BOUNDARY;
    } else {
      r |= e.EMPTY_NO_WORD_BOUNDARY;
    }
    return r;
  }
  static quoteMeta(t) {
    return t.split("").map(t => e.METACHARACTERS.indexOf(t) >= 0 ? `\\${t}` : t).join("");
  }
  static charCount(e) {
    if (e > X.MAX_BMP) {
      return 2;
    } else {
      return 1;
    }
  }
  static toArray(e) {
    const t = e.length;
    const n = new Array(t);
    for (let r = 0; r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  static stringToUtf8ByteArray(e) {
    if (globalThis.TextEncoder) {
      ae ||= new TextEncoder();
      return ae.encode(e);
    }
    {
      let t = [];
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        let s = e.charCodeAt(r);
        if (s < 128) {
          t[n++] = s;
        } else if (s < 2048) {
          t[n++] = s >> 6 | 192;
          t[n++] = s & 63 | 128;
        } else if ((s & 64512) === X.MIN_HIGH_SURROGATE && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === X.MIN_LOW_SURROGATE) {
          s = X.MIN_SUPPLEMENTARY_CODE_POINT + ((s & 1023) << 10) + (e.charCodeAt(++r) & 1023);
          t[n++] = s >> 18 | 240;
          t[n++] = s >> 12 & 63 | 128;
          t[n++] = s >> 6 & 63 | 128;
          t[n++] = s & 63 | 128;
        } else {
          t[n++] = s >> 12 | 224;
          t[n++] = s >> 6 & 63 | 128;
          t[n++] = s & 63 | 128;
        }
      }
      return t;
    }
  }
  static utf8ByteArrayToString(e) {
    if (globalThis.TextDecoder) {
      oe ||= new TextDecoder("utf-8");
      const t = e instanceof Uint8Array ? e : new Uint8Array(e);
      return oe.decode(t);
    }
    {
      let t = [];
      let n = 0;
      let r = 0;
      while (n < e.length) {
        let s = e[n++];
        if (s < 128) {
          t[r++] = String.fromCharCode(s);
        } else if (s > 191 && s < 224) {
          let i = e[n++];
          t[r++] = String.fromCharCode((s & 31) << 6 | i & 63);
        } else if (s > 239 && s < 365) {
          let i = ((s & 7) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - X.MIN_SUPPLEMENTARY_CODE_POINT;
          t[r++] = String.fromCharCode(X.MIN_HIGH_SURROGATE + (i >> 10));
          t[r++] = String.fromCharCode(X.MIN_LOW_SURROGATE + (i & 1023));
        } else {
          let i = e[n++];
          let a = e[n++];
          t[r++] = String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | a & 63);
        }
      }
      return t.join("");
    }
  }
};
var ue = (e = [], t = 0) => {
  const n = Object.create(null);
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    const i = t + r;
    n[s] = i;
    n[i] = s;
  }
  return Object.freeze(n);
};
var ce = class e {
  static Encoding = ue(["UTF_16", "UTF_8"]);
  getEncoding() {
    throw Error("not implemented");
  }
  asCharSequence() {
    throw Error("not implemented");
  }
  asBytes() {
    throw Error("not implemented");
  }
  length() {
    throw Error("not implemented");
  }
  isUTF8Encoding() {
    return this.getEncoding() === e.Encoding.UTF_8;
  }
  isUTF16Encoding() {
    return this.getEncoding() === e.Encoding.UTF_16;
  }
};
var le = class extends ce {
  constructor(e = null) {
    super();
    this.bytes = e;
  }
  getEncoding() {
    return ce.Encoding.UTF_8;
  }
  asCharSequence() {
    return Be.utf8ByteArrayToString(this.bytes);
  }
  asBytes() {
    return this.bytes;
  }
  length() {
    return this.bytes.length;
  }
};
var he = class extends ce {
  constructor(e = null) {
    super();
    this.charSequence = e;
  }
  getEncoding() {
    return ce.Encoding.UTF_16;
  }
  asCharSequence() {
    return this.charSequence;
  }
  asBytes() {
    return Be.stringToUtf8ByteArray(this.charSequence.toString());
  }
  length() {
    return this.charSequence.length;
  }
};
var Ce = class {
  static utf16(e) {
    Be.checkInput(e);
    return new he(e);
  }
  static utf8(e) {
    if (Be.isByteArray(e)) {
      return new le(e);
    } else {
      return new le(Be.stringToUtf8ByteArray(e));
    }
  }
};
var de = class {
  static EOF() {
    return -8;
  }
  constructor() {
    this.start = 0;
    this.end = 0;
  }
  canCheckPrefix() {
    return true;
  }
  endPos() {
    return this.end - this.start;
  }
  hasString() {
    return false;
  }
  hasAnyString() {
    return false;
  }
  prefixLength() {
    return 0;
  }
};
var fe = class e extends de {
  static RUNE_ERROR_STEP = X.RUNE_ERROR << 3 | 1;
  constructor(e, t = 0, n = e.length) {
    super();
    this.bytes = e;
    this.start = t;
    this.end = n;
  }
  hasString(e, t) {
    const n = e.bytes;
    if (n.length === 0) {
      return true;
    }
    const r = this.indexOf(this.bytes, n, this.start + t);
    return r !== -1 && r <= this.end - n.length;
  }
  hasAnyString(e, t) {
    return e.automaton8().searchUTF8(this.bytes, this.start + t, this.end);
  }
  step(t) {
    if ((t += this.start) >= this.end) {
      return de.EOF();
    }
    const n = this.bytes[t] & 255;
    if (n < 128) {
      return n << 3 | 1;
    }
    let r;
    let s;
    let i = 128;
    let a = 191;
    if (n >= 194 && n <= 223) {
      r = 2;
      s = n & 31;
    } else if (n >= 224 && n <= 239) {
      r = 3;
      s = n & 15;
      if (n === 224) {
        i = 160;
      } else if (n === 237) {
        a = 159;
      }
    } else {
      if (!(n >= 240) || !(n <= 244)) {
        return e.RUNE_ERROR_STEP;
      }
      r = 4;
      s = n & 7;
      if (n === 240) {
        i = 144;
      } else if (n === 244) {
        a = 143;
      }
    }
    if (t + r > this.end) {
      return e.RUNE_ERROR_STEP;
    }
    const o = this.bytes[t + 1] & 255;
    if (o < i || o > a) {
      return e.RUNE_ERROR_STEP;
    }
    s = s << 6 | o & 63;
    if (r > 2) {
      const n = this.bytes[t + 2] & 255;
      if ((n & 192) != 128) {
        return e.RUNE_ERROR_STEP;
      }
      s = s << 6 | n & 63;
      if (r > 3) {
        const n = this.bytes[t + 3] & 255;
        if ((n & 192) != 128) {
          return e.RUNE_ERROR_STEP;
        }
        s = s << 6 | n & 63;
      }
    }
    return s << 3 | r;
  }
  index(e, t) {
    t += this.start;
    const n = this.indexOf(this.bytes, e.prefixUTF8, t);
    if (n < 0) {
      return n;
    } else {
      return n - t;
    }
  }
  context(e) {
    let t = -1;
    if ((e += this.start) > this.start && e <= this.end) {
      let n = e - 1;
      t = this.bytes[n--];
      if (t >= 128) {
        let r = e - 4;
        for (r < this.start && (r = this.start); n >= r && (this.bytes[n] & 192) == 128;) {
          n--;
        }
        if (n < this.start) {
          n = this.start;
        }
        const s = this.step(n - this.start);
        t = n + (s & 7) === e ? s >> 3 : X.RUNE_ERROR;
      }
    }
    const n = e < this.end ? this.step(e - this.start) >> 3 : -1;
    return Be.emptyOpContext(t, n);
  }
  indexOf(e, t, n = 0) {
    let r = t.length;
    if (r === 0) {
      if (n <= this.end) {
        return n;
      } else {
        return -1;
      }
    }
    const s = t[0];
    let i = this.end - r;
    const a = typeof e.indexOf == "function";
    let o = n;
    while (o <= i) {
      if (a) {
        o = e.indexOf(s, o);
        if (o === -1 || o > i) {
          return -1;
        }
      } else {
        while (o <= i && e[o] !== s) {
          o++;
        }
        if (o > i) {
          return -1;
        }
      }
      let n = true;
      for (let s = 1; s < r; s++) {
        if (e[o + s] !== t[s]) {
          n = false;
          break;
        }
      }
      if (n) {
        return o;
      }
      o++;
    }
    return -1;
  }
  prefixLength(e) {
    return e.prefixUTF8.length;
  }
};
var pe = class extends de {
  constructor(e, t = 0, n = e.length) {
    super();
    this.charSequence = e;
    this.start = t;
    this.end = n;
  }
  hasString(e, t) {
    const n = this.charSequence.indexOf(e.str, this.start + t);
    return n !== -1 && n <= this.end - e.str.length;
  }
  hasAnyString(e, t) {
    return e.automaton16().searchUTF16(this.charSequence, this.start + t, this.end);
  }
  step(e) {
    if ((e += this.start) >= this.end) {
      return de.EOF();
    }
    const t = this.charSequence.charCodeAt(e);
    if (t < X.MIN_HIGH_SURROGATE || t > X.MAX_HIGH_SURROGATE || e + 1 >= this.end) {
      return t << 3 | 1;
    }
    const n = this.charSequence.charCodeAt(e + 1);
    if (n >= X.MIN_LOW_SURROGATE && n <= X.MAX_LOW_SURROGATE) {
      return (t - X.MIN_HIGH_SURROGATE) * 1024 + (n - X.MIN_LOW_SURROGATE) + X.MIN_SUPPLEMENTARY_CODE_POINT << 3 | 2;
    } else {
      return t << 3 | 1;
    }
  }
  index(e, t) {
    t += this.start;
    const n = this.charSequence.indexOf(e.prefix, t);
    if (n < 0 || n > this.end - e.prefix.length) {
      return -1;
    } else {
      return n - t;
    }
  }
  context(e) {
    const t = (e += this.start) > this.start && e <= this.end ? this.charSequence.charCodeAt(e - 1) : -1;
    const n = e < this.end ? this.charSequence.charCodeAt(e) : -1;
    return Be.emptyOpContext(t, n);
  }
  prefixLength(e) {
    return e.prefix.length;
  }
};
var ge = class {
  static fromUTF8(e, t = 0, n = e.length) {
    return new fe(e, t, n);
  }
  static fromUTF16(e, t = 0, n = undefined) {
    Be.checkInput(e);
    return new pe(e, t, n ?? e.length);
  }
};
var me = class e {
  static MAX_REPLACER_ARGS = 65535;
  static quoteReplacement(e, t = false) {
    if (t) {
      if (e.indexOf("\\") < 0 && e.indexOf("$") < 0) {
        return e;
      } else {
        return e.split("").map(e => {
          const t = e.codePointAt(0);
          if (t === K.CODES["\\"] || t === K.CODES.$) {
            return `\\${e}`;
          } else {
            return e;
          }
        }).join("");
      }
    } else if (e.indexOf("$") < 0) {
      return e;
    } else {
      return e.split("").map(e => e.codePointAt(0) === K.CODES.$ ? "$$" : e).join("");
    }
  }
  constructor(e, t) {
    if (e === null) {
      throw new Error("pattern is null");
    }
    this.patternInput = e;
    const n = this.patternInput.re2();
    this.patternGroupCount = n.numberOfCapturingGroups();
    this.groups = [];
    this.namedGroups = n.namedGroups;
    this.hasNamedGroups = Object.keys(this.namedGroups).length > 0;
    this.numberOfInstructions = n.numberOfInstructions();
    this.lookbehindState = null;
    if (t instanceof ce) {
      this.resetMatcherInput(t);
    } else if (Be.isByteArray(t)) {
      this.resetMatcherInput(Ce.utf8(t));
    } else {
      this.resetMatcherInput(Ce.utf16(t));
    }
  }
  pattern() {
    return this.patternInput;
  }
  reset() {
    this.matcherInputLength = this.matcherInput.length();
    this.appendPos = 0;
    this.hasMatch = false;
    this.hasGroups = false;
    this.anchorFlag = 0;
    return this;
  }
  resetMatcherInput(e) {
    if (e === null) {
      throw new Error("input is null");
    }
    if (!(e instanceof ce)) {
      e = Be.isByteArray(e) ? Ce.utf8(e) : Ce.utf16(e);
    }
    this.matcherInput = e;
    if (this.lookbehindState !== null) {
      this.lookbehindState.reset();
    } else {
      this.lookbehindState = this.patternInput.re2().createLookbehindState();
    }
    this.reset();
    return this;
  }
  start(e = 0) {
    if (typeof e == "string") {
      const t = this.namedGroups[e];
      if (!Number.isFinite(t)) {
        throw new ne(`group '${e}' not found`);
      }
      e = t;
    }
    this.loadGroup(e);
    return this.groups[e * 2];
  }
  end(e = 0) {
    if (typeof e == "string") {
      const t = this.namedGroups[e];
      if (!Number.isFinite(t)) {
        throw new ne(`group '${e}' not found`);
      }
      e = t;
    }
    this.loadGroup(e);
    return this.groups[e * 2 + 1];
  }
  programSize() {
    return this.numberOfInstructions;
  }
  group(e = 0) {
    if (typeof e == "string") {
      const t = this.namedGroups[e];
      if (!Number.isFinite(t)) {
        throw new ne(`group '${e}' not found`);
      }
      e = t;
    }
    const t = this.start(e);
    const n = this.end(e);
    if (t < 0 && n < 0) {
      return null;
    } else {
      return this.substring(t, n);
    }
  }
  getNamedGroups() {
    if (!this.hasMatch) {
      throw new ne("perhaps no match attempted");
    }
    const e = Object.create(null);
    for (const t of Object.keys(this.namedGroups)) {
      e[t] = this.group(t);
    }
    return e;
  }
  groupCount() {
    return this.patternGroupCount;
  }
  loadGroup(e) {
    if (!Number.isInteger(e) || e < 0 || e > this.patternGroupCount) {
      throw new ne(`Group index out of bounds: ${e}`);
    }
    if (!this.hasMatch) {
      throw new ne("perhaps no match attempted");
    }
    if (e === 0 || this.hasGroups) {
      return;
    }
    const t = this.matcherInputLength;
    const n = this.patternInput.re2().matchMachineInput(this.matcherInput, this.groups[0], t, this.anchorFlag, 1 + this.patternGroupCount, this.lookbehindState);
    if (!n[0]) {
      throw new ne("inconsistency in matching group data");
    }
    this.groups = n[1];
    this.hasGroups = true;
  }
  matches() {
    return this.genMatch(0, L.ANCHOR_BOTH);
  }
  lookingAt() {
    return this.genMatch(0, L.ANCHOR_START);
  }
  find(e = null) {
    if (e !== null) {
      if (!Number.isInteger(e) || e < 0 || e > this.matcherInputLength) {
        throw new ne(`start index out of bounds: ${e}`);
      }
      this.reset();
      return this.genMatch(e, 0);
    }
    e = 0;
    if (this.hasMatch && (e = this.groups[1], this.groups[0] === this.groups[1])) {
      const t = (this.matcherInput.isUTF16Encoding() ? ge.fromUTF16(this.matcherInput.asCharSequence(), 0, this.matcherInputLength) : ge.fromUTF8(this.matcherInput.asBytes(), 0, this.matcherInputLength)).step(e);
      if (t < 0) {
        e++;
      } else {
        e += t & 7;
      }
    }
    return this.genMatch(e, L.UNANCHORED);
  }
  genMatch(e, t) {
    const n = this.patternInput.re2().matchMachineInput(this.matcherInput, e, this.matcherInputLength, t, 1, this.lookbehindState);
    if (n[0]) {
      this.groups = n[1];
      this.hasMatch = true;
      this.hasGroups = this.patternGroupCount === 0;
      this.anchorFlag = t;
      return true;
    } else {
      this.hasMatch = false;
      return false;
    }
  }
  substring(e, t) {
    if (this.matcherInput.isUTF8Encoding()) {
      return Be.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e, t));
    } else {
      return this.matcherInput.asCharSequence().substring(e, t).toString();
    }
  }
  inputLength() {
    return this.matcherInputLength;
  }
  appendReplacement(e, t = false) {
    let n = "";
    const r = this.start();
    const s = this.end();
    if (this.appendPos < r) {
      n += this.substring(this.appendPos, r);
    }
    this.appendPos = s;
    n += t ? this.appendReplacementInternalJava(e) : this.appendReplacementInternalJs(e);
    return n;
  }
  appendReplacementInternalJava(e) {
    let t = "";
    let n = 0;
    const r = e.length;
    let s = 0;
    while (s < r) {
      const i = e.codePointAt(s);
      if (i !== K.CODES["\\"]) {
        if (i === K.CODES.$) {
          if (n < s) {
            t += e.substring(n, s);
          }
          if (s + 1 >= r) {
            throw new ne("Illegal group reference: group index is missing");
          }
          const i = e.codePointAt(s + 1);
          if (K.CODES[0] <= i && i <= K.CODES[9]) {
            let a = i - K.CODES[0];
            let o = s + 2;
            for (; o < r; o++) {
              const t = e.codePointAt(o);
              if (t < K.CODES[0] || t > K.CODES[9] || a * 10 + t - K.CODES[0] > this.patternGroupCount) {
                break;
              }
              a = a * 10 + t - K.CODES[0];
            }
            if (a > this.patternGroupCount) {
              throw new ne(`n > number of groups: ${a}`);
            }
            const B = this.group(a);
            if (B !== null) {
              t += B;
            }
            s = o;
            n = s;
          } else {
            if (i !== K.CODES["{"]) {
              throw new ne("Illegal group reference");
            }
            {
              let i = s + 2;
              while (i < r && e.codePointAt(i) !== K.CODES["}"]) {
                i++;
              }
              if (i >= r) {
                throw new ne("named capture group is missing trailing '}'");
              }
              const a = e.substring(s + 2, i);
              const o = this.group(a);
              if (o !== null) {
                t += o;
              }
              s = i + 1;
              n = s;
            }
          }
          continue;
        }
        s++;
      } else {
        if (n < s) {
          t += e.substring(n, s);
        }
        s++;
        if (s >= r) {
          throw new ne("character to be escaped is missing");
        }
        n = s;
        s++;
      }
    }
    if (n < r) {
      t += e.substring(n, r);
    }
    return t;
  }
  appendReplacementInternalJs(e) {
    const t = e => e >= 48 && e <= 57;
    const n = this.patternGroupCount;
    let r = "";
    let s = 0;
    while (s < e.length) {
      const i = e.indexOf("$", s);
      if (i < 0) {
        break;
      }
      r += e.substring(s, i);
      s = i;
      const a = e.charCodeAt(s + 1);
      if (a === K.CODES.$) {
        r += "$";
        s += 2;
      } else if (a === K.CODES["&"]) {
        r += this.group(0);
        s += 2;
      } else if (a === K.CODES["`"]) {
        r += this.substring(0, this.start(0));
        s += 2;
      } else if (a === K.CODES["'"]) {
        r += this.substring(this.end(0), this.matcherInputLength);
        s += 2;
      } else if (t(a)) {
        let i = 1;
        let o = a - 48;
        const B = e.charCodeAt(s + 2);
        if (t(B) && o * 10 + B - 48 <= n) {
          i = 2;
          o = o * 10 + B - 48;
        }
        if (o >= 1 && o <= n) {
          const e = this.group(o);
          if (e !== null) {
            r += e;
          }
        } else {
          r += e.substring(s, s + 1 + i);
        }
        s += 1 + i;
      } else if (a === K.CODES["<"] && this.hasNamedGroups) {
        const t = e.indexOf(">", s + 2);
        if (t < 0) {
          r += "$<";
          s += 2;
        } else {
          const n = e.substring(s + 2, t);
          if (Object.hasOwn(this.namedGroups, n)) {
            const e = this.group(n);
            if (e !== null) {
              r += e;
            }
          }
          s = t + 1;
        }
      } else {
        r += "$";
        s += 1;
      }
    }
    return r + e.substring(s);
  }
  appendTail() {
    return this.substring(this.appendPos, this.matcherInputLength);
  }
  replaceAll(e, t = false) {
    return this.replace(e, true, t);
  }
  replaceFirst(e, t = false) {
    return this.replace(e, false, t);
  }
  replace(t, n = true, r = false) {
    let s = "";
    this.reset();
    const i = typeof t == "function";
    let a = null;
    if (i) {
      if (this.groupCount() >= e.MAX_REPLACER_ARGS) {
        throw new ne("Too many capture groups to safely invoke replacer function");
      }
      a = this.matcherInput.isUTF8Encoding() ? this.matcherInput.asBytes() : this.matcherInput.asCharSequence();
    }
    while (this.find() && (s += i ? this.appendReplacementFunc(t, a) : this.appendReplacement(t, r), n));
    s += this.appendTail();
    return s;
  }
  appendReplacementFunc(e, t) {
    let n = "";
    const r = this.start();
    const s = this.end();
    if (this.appendPos < r) {
      n += this.substring(this.appendPos, r);
    }
    this.appendPos = s;
    const i = this.matchArray();
    i.push(r, t);
    if (this.hasNamedGroups) {
      i.push(this.namedGroupsObject());
    }
    n += String(e(...i));
    return n;
  }
  matchArray() {
    const e = [this.group(0)];
    for (let t = 1; t <= this.patternGroupCount; t++) {
      const n = this.group(t);
      e.push(n === null ? undefined : n);
    }
    return e;
  }
  namedGroupsObject() {
    if (!this.hasNamedGroups) {
      return;
    }
    const e = this.getNamedGroups();
    for (const t in e) {
      if (e[t] === null) {
        e[t] = undefined;
      }
    }
    return e;
  }
};
var Ee = class e {
  static ALT = 1;
  static ALT_MATCH = 2;
  static CAPTURE = 3;
  static EMPTY_WIDTH = 4;
  static FAIL = 5;
  static MATCH = 6;
  static NOP = 7;
  static RUNE = 8;
  static RUNE1 = 9;
  static RUNE_ANY = 10;
  static RUNE_ANY_NOT_NL = 11;
  static LB_WRITE = 12;
  static LB_CHECK = 13;
  static isRuneOp(t) {
    return e.RUNE <= t && t <= e.RUNE_ANY_NOT_NL;
  }
  static escapeRunes(e) {
    let t = "\"";
    for (let n of e) {
      t += Be.escapeRune(n);
    }
    t += "\"";
    return t;
  }
  constructor(e) {
    this.op = e;
    this.out = 0;
    this.arg = 0;
    this.runes = new Int32Array(0);
    this.next = null;
  }
  matchRune(e) {
    if (this.runes.length === 1) {
      const t = this.runes[0];
      if ((this.arg & L.FOLD_CASE) !== 0) {
        return X.equalsIgnoreCase(t, e);
      } else {
        return e === t;
      }
    }
    const t = this.runes.length;
    if (t === 0) {
      return false;
    }
    if (t === 2 || t === 4 || t === 6 || t === 8) {
      for (let n = 0; n < t; n += 2) {
        if (e < this.runes[n]) {
          return false;
        }
        if (e <= this.runes[n + 1]) {
          return true;
        }
      }
      return false;
    }
    let n = 0;
    let r = t >> 1;
    while (r > 1) {
      const t = r >> 1;
      n += this.runes[n + t << 1] <= e ? t : 0;
      r -= t;
    }
    n += this.runes[n << 1] <= e ? 1 : 0;
    const s = n - 1;
    return s >= 0 && e <= this.runes[s << 1 | 1];
  }
  matchRunePos(e) {
    if (this.runes.length === 1) {
      const t = this.runes[0];
      if ((this.arg & L.FOLD_CASE) !== 0) {
        if (X.equalsIgnoreCase(t, e)) {
          return 0;
        } else {
          return -1;
        }
      } else if (e === t) {
        return 0;
      } else {
        return -1;
      }
    }
    const t = this.runes.length;
    if (t === 0) {
      return -1;
    }
    if (t === 2 || t === 4 || t === 6 || t === 8) {
      for (let n = 0; n < t; n += 2) {
        if (e < this.runes[n]) {
          return -1;
        }
        if (e <= this.runes[n + 1]) {
          return Math.floor(n / 2);
        }
      }
      return -1;
    }
    let n = 0;
    let r = t >> 1;
    while (r > 1) {
      const t = r >> 1;
      n += this.runes[n + t << 1] <= e ? t : 0;
      r -= t;
    }
    n += this.runes[n << 1] <= e ? 1 : 0;
    const s = n - 1;
    if (s >= 0 && e <= this.runes[s << 1 | 1]) {
      return s;
    } else {
      return -1;
    }
  }
  toString() {
    switch (this.op) {
      case e.ALT:
        return `alt -> ${this.out}, ${this.arg}`;
      case e.ALT_MATCH:
        return `altmatch -> ${this.out}, ${this.arg}`;
      case e.CAPTURE:
        return `cap ${this.arg} -> ${this.out}`;
      case e.EMPTY_WIDTH:
        return `empty ${this.arg} -> ${this.out}`;
      case e.MATCH:
        return "match" + (this.arg !== 0 ? ` ${this.arg}` : "");
      case e.FAIL:
        return "fail";
      case e.NOP:
        return `nop -> ${this.out}`;
      case e.LB_WRITE:
        return `lbwrite ${this.arg} -> ${this.out}`;
      case e.LB_CHECK:
        return `lbcheck ${this.arg} -> ${this.out}`;
      case e.RUNE:
        if (this.runes === null) {
          return "rune <null>";
        } else {
          return ["rune ", e.escapeRunes(this.runes), (this.arg & L.FOLD_CASE) !== 0 ? "/i" : "", " -> ", this.out].join("");
        }
      case e.RUNE1:
        return `rune1 ${e.escapeRunes(this.runes)} -> ${this.out}`;
      case e.RUNE_ANY:
        return `any -> ${this.out}`;
      case e.RUNE_ANY_NOT_NL:
        return `anynotnl -> ${this.out}`;
      default:
        throw new Error("unhandled case in Inst.toString");
    }
  }
};
var De = class e {
  constructor(e) {
    this.sparse = new Int32Array(e);
    this.densePcs = new Int32Array(e);
    this.denseCaps = null;
    this.size = 0;
    this.ncap = 0;
    this.mainThreads = 0;
  }
  static INITIAL_THREADS = 32;
  init(t) {
    this.ncap = t;
    const n = Math.min(this.densePcs.length, e.INITIAL_THREADS) * t;
    if (!this.denseCaps || this.denseCaps.length < n) {
      this.denseCaps = new Int32Array(n);
    }
  }
  growCaps(e) {
    const t = this.densePcs.length * this.ncap;
    const n = new Int32Array(Math.min(t, Math.max(e, this.denseCaps.length * 2)));
    n.set(this.denseCaps);
    this.denseCaps = n;
  }
  contains(e) {
    const t = this.sparse[e];
    return t < this.size && this.densePcs[t] === e;
  }
  isEmpty() {
    return this.size === 0;
  }
  add(e) {
    const t = this.size++;
    this.sparse[e] = t;
    this.densePcs[t] = e;
    return t;
  }
  clear() {
    this.size = 0;
    this.mainThreads = 0;
  }
  toString() {
    let e = "{";
    for (let t = 0; t < this.size; t++) {
      if (t !== 0) {
        e += ", ";
      }
      e += this.densePcs[t];
    }
    e += "}";
    return e;
  }
};
var we = class {
  constructor(e) {
    this.pos = -1;
    this.pcs = new Int32Array(e.numInst());
    this.size = 0;
    this.lbTable = new Int32Array(e.numLb + 1);
  }
  reset() {
    this.pos = -1;
    this.size = 0;
  }
};
var ye = class e {
  static fromRE2(t) {
    const n = new e();
    n.prog = t.prog;
    n.re2 = t;
    n.q0 = new De(n.prog.numInst());
    n.q1 = new De(n.prog.numInst());
    n.addStack = new Int32Array((n.prog.numInst() + 1) * 2);
    n.matched = false;
    n.matchcap = new Int32Array(n.prog.numCap < 2 ? 2 : n.prog.numCap);
    n.ncap = 0;
    return n;
  }
  constructor() {
    this.prog = null;
    this.re2 = null;
    this.q0 = null;
    this.q1 = null;
    this.addStack = null;
    this.matched = false;
    this.matchcap = null;
    this.ncap = 0;
    this.lbTable = null;
  }
  init(e) {
    this.ncap = e;
    if (e > this.matchcap.length) {
      this.matchcap = new Int32Array(e).fill(-1);
    } else {
      this.matchcap.fill(-1);
    }
    this.q0.init(e);
    this.q1.init(e);
    if (this.prog.numLb > 0) {
      if (!this.lbTable || this.lbTable.length < this.prog.numLb + 1) {
        this.lbTable = new Int32Array(this.prog.numLb + 1);
      }
      this.lbTable.fill(-1);
    }
  }
  submatches() {
    if (this.ncap === 0) {
      return Be.emptyInts();
    } else {
      return Be.toArray(this.matchcap.subarray(0, this.ncap));
    }
  }
  match(e, t, n, r = null) {
    const s = this.re2.cond;
    if (s === Be.EMPTY_ALL) {
      return false;
    }
    if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && t !== 0) {
      return false;
    }
    this.matched = false;
    this.matchcap.fill(-1);
    const i = this.prog.numLb > 0;
    const a = t;
    let o = t;
    let B = false;
    if (i) {
      if (r !== null && r.pos >= 0 && r.pos <= t) {
        o = r.pos;
        B = true;
      } else {
        o = 0;
      }
    }
    let u;
    let c = i && r !== null;
    let l = this.q0;
    let h = this.q1;
    let C = e.step(o);
    let d = C >> 3;
    let f = C & 7;
    let p = -1;
    let g = 0;
    if (C !== de.EOF()) {
      C = e.step(o + f);
      p = C >> 3;
      g = C & 7;
    }
    u = o === 0 ? Be.emptyOpContext(-1, d) : e.context(o);
    if (i) {
      if (B) {
        this.restoreLookbehinds(r, l, u);
      } else {
        this.spawnLookbehinds(l, o, u);
      }
    }
    while (true) {
      if (l.mainThreads === 0) {
        if ((s & Be.EMPTY_BEGIN_TEXT) !== 0 && o !== 0) {
          break;
        }
        if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && o !== 0) {
          break;
        }
        if (this.matched) {
          break;
        }
        if (this.prog.numLb === 0 && l.isEmpty() && this.re2.prefix.length !== 0 && p !== this.re2.prefixRune && e.canCheckPrefix()) {
          const t = e.index(this.re2, o);
          if (t < 0) {
            break;
          }
          o += t;
          C = e.step(o);
          d = C >> 3;
          f = C & 7;
          C = e.step(o + f);
          p = C >> 3;
          g = C & 7;
          u = e.context(o);
        }
      }
      if (o >= a) {
        if (c) {
          this.saveLookbehinds(r, l, o);
          c = false;
        }
        if (!this.matched && (o === 0 || n === L.UNANCHORED)) {
          if (this.ncap > 0) {
            this.matchcap[0] = o;
          }
          this.add(l, this.prog.start, o, this.matchcap, 0, u);
        }
      }
      const t = o + f;
      u = e.context(t);
      this.step(l, h, o, t, d, u, n, o === e.endPos());
      if (f === 0) {
        break;
      }
      if (this.ncap === 0 && this.matched) {
        break;
      }
      o += f;
      d = p;
      f = g;
      if (d !== -1) {
        C = e.step(o + f);
        p = C >> 3;
        g = C & 7;
      }
      const i = l;
      l = h;
      h = i;
    }
    l.clear();
    h.clear();
    return this.matched;
  }
  matchSet(e, t, n) {
    const r = this.re2.cond;
    if (r === Be.EMPTY_ALL) {
      return [];
    }
    if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && t !== 0) {
      return [];
    }
    let s = this.prog.numLb > 0 ? 0 : t;
    let i = t;
    let a = this.q0;
    let o = this.q1;
    let B = e.step(s);
    let u = B >> 3;
    let c = B & 7;
    let l = -1;
    let h = 0;
    if (B !== de.EOF()) {
      B = e.step(s + c);
      l = B >> 3;
      h = B & 7;
    }
    let C = s === 0 ? Be.emptyOpContext(-1, u) : e.context(s);
    const d = new Set();
    for (this.prog.numLb > 0 && this.spawnLookbehinds(a, s, C);;) {
      if (a.mainThreads === 0) {
        if ((r & Be.EMPTY_BEGIN_TEXT) !== 0 && s !== 0) {
          break;
        }
        if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && s !== 0) {
          break;
        }
      }
      if (s === 0 || n === L.UNANCHORED) {
        if (s >= i) {
          this.add(a, this.prog.start, s, this.matchcap, 0, C);
        }
      }
      const t = s + c;
      C = e.context(t);
      for (let r = 0; r < a.size; r++) {
        const i = a.densePcs[r];
        const B = this.prog.inst[i];
        const c = r * this.ncap;
        let l = false;
        switch (B.op) {
          case Ee.MATCH:
            if (n === L.ANCHOR_BOTH && s !== e.endPos()) {
              break;
            }
            d.add(B.arg);
            break;
          case Ee.RUNE:
            l = B.matchRune(u);
            break;
          case Ee.RUNE1:
            l = u === B.runes[0];
            break;
          case Ee.RUNE_ANY:
            l = true;
            break;
          case Ee.RUNE_ANY_NOT_NL:
            l = u !== 10;
            break;
          default:
            continue;
        }
        if (l) {
          this.add(o, B.out, t, a.denseCaps, c, C);
        }
      }
      a.clear();
      if (c === 0) {
        break;
      }
      s += c;
      u = l;
      c = h;
      if (u !== -1) {
        B = e.step(s + c);
        l = B >> 3;
        h = B & 7;
      }
      const f = a;
      a = o;
      o = f;
    }
    o.clear();
    return Array.from(d).sort((e, t) => e - t);
  }
  step(e, t, n, r, s, i, a, o) {
    const B = this.re2.longest;
    for (let u = 0; u < e.size; u++) {
      const c = e.densePcs[u];
      const l = u * this.ncap;
      if (B && this.matched && this.ncap > 0 && this.matchcap[0] < e.denseCaps[l]) {
        continue;
      }
      const h = this.prog.inst[c];
      let C = false;
      switch (h.op) {
        case Ee.MATCH:
          if (a === L.ANCHOR_BOTH && !o) {
            break;
          }
          if (this.ncap > 0 && (!B || !this.matched || this.matchcap[1] < n)) {
            e.denseCaps[l + 1] = n;
            for (let t = 0; t < this.ncap; t++) {
              this.matchcap[t] = e.denseCaps[l + t];
            }
          }
          if (!B) {
            e.size = 0;
          }
          this.matched = true;
          break;
        case Ee.RUNE:
          C = h.matchRune(s);
          break;
        case Ee.RUNE1:
          C = s === h.runes[0];
          break;
        case Ee.RUNE_ANY:
          C = true;
          break;
        case Ee.RUNE_ANY_NOT_NL:
          C = s !== 10;
          break;
        default:
          continue;
      }
      if (C) {
        this.add(t, h.out, r, e.denseCaps, l, i);
      }
    }
    e.clear();
  }
  spawnLookbehinds(e, t, n) {
    for (let r = 0; r < this.prog.lbStarts.length; r++) {
      this.add(e, this.prog.lbStarts[r], t, this.matchcap, 0, n);
    }
  }
  restoreLookbehinds(e, t, n) {
    this.lbTable.set(e.lbTable);
    for (let r = 0; r < e.size; r++) {
      this.add(t, e.pcs[r], e.pos, this.matchcap, 0, n);
    }
  }
  saveLookbehinds(e, t, n) {
    let r = 0;
    for (let s = 0; s < t.size; s++) {
      const n = t.densePcs[s];
      if (this.prog.lbInst[n] === 1 && Ee.isRuneOp(this.prog.inst[n].op)) {
        e.pcs[r++] = n;
      }
    }
    e.size = r;
    e.pos = n;
    e.lbTable.set(this.lbTable);
  }
  add(e, t, n, r, s, i) {
    const a = this.addStack;
    let o = 0;
    while (true) {
      while (t !== 0 && !e.contains(t)) {
        const B = e.add(t);
        const u = this.prog.inst[t];
        switch (u.op) {
          case Ee.FAIL:
            t = 0;
            break;
          case Ee.ALT:
          case Ee.ALT_MATCH:
            a[o++] = u.arg;
            a[o++] = 0;
            t = u.out;
            break;
          case Ee.EMPTY_WIDTH:
            t = (u.arg & ~i) === 0 ? u.out : 0;
            break;
          case Ee.NOP:
            t = u.out;
            break;
          case Ee.CAPTURE:
            if (u.arg < this.ncap) {
              a[o++] = -u.arg - 1;
              a[o++] = r[s + u.arg];
              r[s + u.arg] = n;
            }
            t = u.out;
            break;
          case Ee.LB_WRITE:
            this.lbTable[Math.abs(u.arg)] = n;
            t = u.out;
            break;
          case Ee.LB_CHECK:
            t = u.arg > 0 ? this.lbTable[u.arg] === n ? u.out : 0 : this.lbTable[-u.arg] !== n ? u.out : 0;
            break;
          case Ee.MATCH:
          case Ee.RUNE:
          case Ee.RUNE1:
          case Ee.RUNE_ANY:
          case Ee.RUNE_ANY_NOT_NL:
            if (this.prog.lbInst[t] === 0) {
              e.mainThreads++;
            }
            if (this.ncap > 0) {
              const t = B * this.ncap;
              if (t + this.ncap > e.denseCaps.length) {
                e.growCaps(t + this.ncap);
              }
              for (let n = 0; n < this.ncap; n++) {
                e.denseCaps[t + n] = r[s + n];
              }
            }
            t = 0;
            break;
          default:
            throw new se("unhandled");
        }
      }
      if (o === 0) {
        return;
      }
      o -= 2;
      const B = a[o];
      if (B < 0) {
        r[s - B - 1] = a[o + 1];
        t = 0;
      } else {
        t = B;
      }
    }
  }
};
var _e = (e, t) => {
  if (e.length !== t.length) {
    return false;
  }
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  return true;
};
var Ie = (e, t, n, r) => e.flag === n && _e(e.nfaStates, t) && _e(e.matchIDs, r);
var ve = [];
var Te = class {
  constructor(e, t, n) {
    this.nfaStates = e;
    this.flag = t;
    this.isMatch = (t & be.FLAG_MATCH) !== 0;
    this.matchIDs = n;
    this.next = null;
    this.nextAnchored = null;
  }
};
var be = class e {
  static FLAG_EMPTY_MASK = 255;
  static FLAG_MATCH = 256;
  static FLAG_LAST_WORD = 512;
  static FLAG_NEED_SHIFT = 16;
  static STATE_OVERHEAD = 150;
  static ARRAY_OVERHEAD = 40;
  static ELEMENT_SIZE = 8;
  static TABLE_OVERHEAD = 48;
  static PROGRESS_PER_STATE = 10;
  constructor(e, t = 8388608) {
    this.prog = e;
    this.maxMem = t;
    this.stateCache = new Map();
    this.stateCount = 0;
    this.startStates = new Map();
    this.failed = false;
    for (let n = 0; n < e.numInst(); n++) {
      const t = e.getInst(n).op;
      if (t === Ee.LB_WRITE || t === Ee.LB_CHECK) {
        this.failed = true;
        break;
      }
    }
    this.computeRuneClasses();
    this.stateBudget = t;
    this.memBudget = t;
  }
  computeRuneClasses() {
    const e = new Set();
    const t = (t, n) => {
      e.add(t);
      e.add(n + 1);
    };
    for (let r = 0; r < this.prog.numInst(); r++) {
      const e = this.prog.getInst(r);
      switch (e.op) {
        case Ee.RUNE:
        case Ee.RUNE1:
          if (e.runes.length === 1) {
            t(e.runes[0], e.runes[0]);
            if ((e.arg & L.FOLD_CASE) !== 0) {
              for (let n = X.simpleFold(e.runes[0]); n !== e.runes[0]; n = X.simpleFold(n)) {
                t(n, n);
              }
            }
          } else {
            for (let n = 0; n < e.runes.length; n += 2) {
              t(e.runes[n], e.runes[n + 1]);
            }
          }
          break;
        case Ee.RUNE_ANY_NOT_NL:
          t(10, 10);
          break;
        case Ee.EMPTY_WIDTH:
          if ((e.arg & (Be.EMPTY_BEGIN_LINE | Be.EMPTY_END_LINE)) !== 0) {
            t(10, 10);
          }
          if ((e.arg & (Be.EMPTY_WORD_BOUNDARY | Be.EMPTY_NO_WORD_BOUNDARY)) !== 0) {
            t(48, 57);
            t(65, 90);
            t(95, 95);
            t(97, 122);
          }
      }
    }
    e.delete(0);
    this.classBounds = Int32Array.from(e).sort();
    this.numClasses = this.classBounds.length + 1;
    const n = new Int32Array(X.MAX_LATIN1 + 1);
    for (let r = 0; r <= X.MAX_LATIN1; r++) {
      n[r] = this.searchClass(r);
    }
    this.latin1Class = n;
  }
  runeClass(e) {
    if (e <= X.MAX_LATIN1) {
      return this.latin1Class[e];
    } else {
      return this.searchClass(e);
    }
  }
  searchClass(e) {
    const t = this.classBounds;
    let n = 0;
    let r = t.length;
    while (n < r) {
      const s = n + r >> 1;
      if (t[s] <= e) {
        n = s + 1;
      } else {
        r = s;
      }
    }
    return n;
  }
  closure(e, t) {
    const n = new Set();
    const r = Array.from(e);
    let s = 0;
    while (r.length > 0) {
      const e = r.pop();
      if (e === 0 || n.has(e)) {
        continue;
      }
      n.add(e);
      const i = this.prog.getInst(e);
      switch (i.op) {
        case Ee.ALT:
        case Ee.ALT_MATCH:
          r.push(i.out);
          r.push(i.arg);
          break;
        case Ee.NOP:
        case Ee.CAPTURE:
          r.push(i.out);
          break;
        case Ee.EMPTY_WIDTH:
          s |= i.arg;
          if ((i.arg & ~t) === 0) {
            r.push(i.out);
          }
      }
    }
    return {
      pcs: Array.from(n).sort((e, t) => e - t),
      needflags: s
    };
  }
  getState(t, n, r) {
    const s = ((e, t, n) => {
      let r = -2128831035;
      for (let s = 0; s < e.length; s++) {
        r ^= e[s];
        r = Math.imul(r, 16777619);
      }
      r ^= t;
      r = Math.imul(r, 16777619);
      for (let s = 0; s < n.length; s++) {
        r ^= n[s];
        r = Math.imul(r, 16777619);
      }
      return r;
    })(t, n, r);
    const i = this.stateCache.get(s);
    if (i instanceof Te) {
      if (Ie(i, t, n, r)) {
        return i;
      }
    } else if (i !== undefined) {
      for (let e = 0; e < i.length; e++) {
        if (Ie(i[e], t, n, r)) {
          return i[e];
        }
      }
    }
    const a = e.stateCost(t, r);
    if (this.memBudget < a) {
      return null;
    }
    this.memBudget -= a;
    const o = new Te(t, n, r);
    if (i === undefined) {
      this.stateCache.set(s, o);
    } else if (i instanceof Te) {
      this.stateCache.set(s, [i, o]);
    } else {
      i.push(o);
    }
    this.stateCount++;
    return o;
  }
  static stateCost(t, n) {
    const r = n.length === 0 ? 0 : e.ARRAY_OVERHEAD + e.ELEMENT_SIZE * n.length;
    return e.STATE_OVERHEAD + e.ELEMENT_SIZE * t.length + r;
  }
  *cachedStates() {
    for (const e of this.stateCache.values()) {
      if (e instanceof Te) {
        yield e;
      } else {
        yield* e;
      }
    }
  }
  makeState(t, n, r) {
    const s = this.closure(t, n & e.FLAG_EMPTY_MASK);
    let i = n;
    if (s.needflags === 0) {
      i &= e.FLAG_MATCH;
    }
    i |= s.needflags << e.FLAG_NEED_SHIFT;
    return this.getState(s.pcs, i, r);
  }
  allocTable(t, n) {
    const r = this.numClasses + 1;
    const s = e.TABLE_OVERHEAD + e.ELEMENT_SIZE * r;
    if (this.memBudget < s) {
      return null;
    }
    this.memBudget -= s;
    const i = new Array(r).fill(null);
    if (n === L.UNANCHORED) {
      t.next = i;
    } else {
      t.nextAnchored = i;
    }
    return i;
  }
  clearCache() {
    this.stateCache.clear();
    this.stateCount = 0;
    this.startStates.clear();
    this.memBudget = this.stateBudget;
  }
  resetCache(e) {
    this.clearCache();
    return this.getState(e.nfaStates, e.flag, e.matchIDs);
  }
  step(t, n, r, s) {
    let i = s === L.UNANCHORED ? t.next : t.nextAnchored;
    if (i !== null) {
      const e = i[n];
      if (e !== null) {
        return e;
      }
    } else {
      i = this.allocTable(t, s);
      if (i === null) {
        return null;
      }
    }
    const a = t.flag >>> e.FLAG_NEED_SHIFT;
    const o = t.flag & e.FLAG_EMPTY_MASK;
    let B = o;
    let u = 0;
    if (r === 10) {
      B |= Be.EMPTY_END_LINE;
      u |= Be.EMPTY_BEGIN_LINE;
    }
    if (r === -1) {
      B |= Be.EMPTY_END_LINE | Be.EMPTY_END_TEXT;
    }
    const c = (t.flag & e.FLAG_LAST_WORD) !== 0;
    const l = r !== -1 && Be.isWordRune(r);
    B |= l === c ? Be.EMPTY_NO_WORD_BOUNDARY : Be.EMPTY_WORD_BOUNDARY;
    let h = t.nfaStates;
    if ((B & ~o & a) !== 0) {
      h = this.closure(h, B).pcs;
    }
    const C = [];
    let d = false;
    let f = ve;
    for (let e = 0; e < h.length; e++) {
      const t = this.prog.getInst(h[e]);
      if (t.op === Ee.MATCH) {
        if (!d) {
          d = true;
          f = [];
        }
        f.push(t.arg);
      } else if (r !== -1 && Ee.isRuneOp(t.op) && t.matchRune(r)) {
        C.push(t.out);
      }
    }
    if (f.length > 1) {
      f.sort((e, t) => e - t);
    }
    if (s === L.UNANCHORED && r !== -1) {
      C.push(this.prog.start);
    }
    let p = u;
    if (d) {
      p |= e.FLAG_MATCH;
    }
    if (l) {
      p |= e.FLAG_LAST_WORD;
    }
    const g = this.makeState(C, p, f);
    if (g === null) {
      return null;
    } else {
      i[n] = g;
      return g;
    }
  }
  start(t, n) {
    const r = t.context(n);
    let s;
    if ((r & Be.EMPTY_BEGIN_TEXT) !== 0) {
      s = Be.EMPTY_BEGIN_TEXT | Be.EMPTY_BEGIN_LINE;
    } else if ((r & Be.EMPTY_BEGIN_LINE) !== 0) {
      s = Be.EMPTY_BEGIN_LINE;
    } else {
      const i = t.step(n);
      const a = i >= 0 && Be.isWordRune(i >> 3);
      s = (r & Be.EMPTY_WORD_BOUNDARY) !== 0 !== a ? e.FLAG_LAST_WORD : 0;
    }
    let i = this.startStates.get(s);
    if (i === undefined) {
      i = this.makeState([this.prog.start], s, ve);
      if (i === null && (this.clearCache(), i = this.makeState([this.prog.start], s, ve), i === null)) {
        return null;
      }
      this.startStates.set(s, i);
    }
    return i;
  }
  stepOrReset(t, n, r, s, i, a) {
    let o = this.step(t, n, r, s);
    if (o !== null) {
      return o;
    }
    if (a.resetPos >= 0 && i - a.resetPos < e.PROGRESS_PER_STATE * this.stateCount) {
      return null;
    }
    a.resetPos = i;
    const B = this.resetCache(t);
    if (B === null) {
      return null;
    } else {
      o = this.step(B, n, r, s);
      return o;
    }
  }
  run(e, t, n, r, s) {
    const i = e.endPos();
    const a = this.latin1Class;
    const o = n === L.UNANCHORED;
    const B = {
      resetPos: -1
    };
    let u = t;
    while (u < i) {
      const t = e.step(u);
      const i = t >> 3;
      const c = t & 7;
      if (c === 0) {
        break;
      }
      const l = i <= X.MAX_LATIN1 ? a[i] : this.runeClass(i);
      let h = o && r.next !== null ? r.next[l] : null;
      if (h === null && (h = this.stepOrReset(r, l, i, n, u, B), h === null)) {
        return null;
      }
      if ((r = h).isMatch && s(r, false)) {
        return true;
      }
      if (!o && r.nfaStates.length === 0) {
        return false;
      }
      u += c;
    }
    if ((r = this.stepOrReset(r, this.numClasses, -1, n, u, B)) === null) {
      return null;
    } else {
      return r.isMatch && s(r, true);
    }
  }
  match(e, t, n) {
    if (this.failed) {
      return null;
    }
    if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && t !== 0) {
      return false;
    }
    const r = this.start(e, t);
    if (r === null) {
      return null;
    } else {
      return this.run(e, t, n, r, (e, t) => n !== L.ANCHOR_BOTH || t);
    }
  }
  matchSet(e, t, n) {
    if (this.failed) {
      return null;
    }
    if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && t !== 0) {
      return [];
    }
    const r = this.start(e, t);
    if (r === null) {
      return null;
    }
    const s = new Set();
    if (this.run(e, t, n, r, (e, t) => {
      if (n !== L.ANCHOR_BOTH || t) {
        for (let n = 0; n < e.matchIDs.length; n++) {
          s.add(e.matchIDs[n]);
        }
      }
      return false;
    }) === null) {
      return null;
    } else {
      return Array.from(s).sort((e, t) => e - t);
    }
  }
};
var Ne = class {
  constructor() {
    this.end = 0;
    this.cap = new Int32Array(0);
    this.matchcap = new Int32Array(0);
    this.ncap = 0;
    this.jobPc = new Int32Array(256);
    this.jobArg = new Uint8Array(256);
    this.jobPos = new Int32Array(256);
    this.jobLen = 0;
    this.visited = new Uint32Array(0);
  }
  reset(e, t, n) {
    this.end = t;
    this.jobLen = 0;
    this.ncap = n;
    const r = e.numInst() * (t + 1) + 32 - 1 >>> 5;
    if (this.visited.length < r) {
      this.visited = new Uint32Array(r);
    } else {
      this.visited.fill(0, 0, r);
    }
    if (this.cap.length < n) {
      this.cap = new Int32Array(n).fill(-1);
    } else {
      this.cap.fill(-1, 0, n);
    }
    if (this.matchcap.length < n) {
      this.matchcap = new Int32Array(n).fill(-1);
    } else {
      this.matchcap.fill(-1, 0, n);
    }
  }
  shouldVisit(e, t) {
    const n = e * (this.end + 1) + t;
    const r = n >>> 5;
    const s = 1 << (n & 31);
    return (this.visited[r] & s) === 0 && (this.visited[r] |= s, true);
  }
  push(e, t, n, r) {
    if (e.prog.getInst(t).op !== Ee.FAIL && (r || this.shouldVisit(t, n))) {
      if (this.jobLen >= this.jobPc.length) {
        const e = this.jobPc.length * 2;
        const t = new Int32Array(e);
        t.set(this.jobPc);
        this.jobPc = t;
        const n = new Uint8Array(e);
        n.set(this.jobArg);
        this.jobArg = n;
        const r = new Int32Array(e);
        r.set(this.jobPos);
        this.jobPos = r;
      }
      this.jobPc[this.jobLen] = t;
      this.jobArg[this.jobLen] = r ? 1 : 0;
      this.jobPos[this.jobLen] = n;
      this.jobLen++;
    }
  }
  tryBacktrack(e, t, n, r, s) {
    const i = e.longest;
    for (this.push(e, n, r, false); this.jobLen > 0;) {
      this.jobLen--;
      let n = this.jobPc[this.jobLen];
      let r = this.jobArg[this.jobLen] === 1;
      let a = this.jobPos[this.jobLen];
      let o = true;
      while (o || this.shouldVisit(n, a)) {
        o = false;
        const B = e.prog.getInst(n);
        switch (B.op) {
          case Ee.FAIL:
            break;
          case Ee.ALT:
            if (r) {
              r = false;
              n = B.arg;
              continue;
            }
            this.push(e, n, a, true);
            n = B.out;
            continue;
          case Ee.ALT_MATCH:
            {
              const t = e.prog.getInst(B.out);
              if (Ee.isRuneOp(t.op)) {
                this.push(e, B.arg, a, false);
                n = B.arg;
                a = this.end;
                continue;
              }
              this.push(e, B.out, this.end, false);
              n = B.out;
              continue;
            }
          case Ee.RUNE:
            {
              const e = t.step(a);
              if (e === de.EOF()) {
                break;
              }
              if (!B.matchRune(e >> 3)) {
                break;
              }
              a += e & 7;
              n = B.out;
              continue;
            }
          case Ee.RUNE1:
            {
              const e = t.step(a);
              if (e === de.EOF()) {
                break;
              }
              if (e >> 3 !== B.runes[0]) {
                break;
              }
              a += e & 7;
              n = B.out;
              continue;
            }
          case Ee.RUNE_ANY_NOT_NL:
            {
              const e = t.step(a);
              if (e === de.EOF()) {
                break;
              }
              if (e >> 3 == 10) {
                break;
              }
              a += e & 7;
              n = B.out;
              continue;
            }
          case Ee.RUNE_ANY:
            {
              const e = t.step(a);
              if (e === de.EOF()) {
                break;
              }
              a += e & 7;
              n = B.out;
              continue;
            }
          case Ee.CAPTURE:
            if (r) {
              this.cap[B.arg] = a;
              break;
            }
            if (B.arg < this.ncap) {
              this.push(e, n, this.cap[B.arg], true);
              this.cap[B.arg] = a;
            }
            n = B.out;
            continue;
          case Ee.EMPTY_WIDTH:
            {
              const e = t.context(a);
              if ((B.arg & ~e) !== 0) {
                break;
              }
              n = B.out;
              continue;
            }
          case Ee.NOP:
            n = B.out;
            continue;
          case Ee.MATCH:
            {
              if (s === L.ANCHOR_BOTH && a !== this.end) {
                break;
              }
              if (this.ncap === 0) {
                return true;
              }
              if (this.ncap > 1) {
                this.cap[1] = a;
              }
              const e = this.matchcap[1];
              if (e === -1 || i && a > 0 && a > e) {
                this.matchcap.set(this.cap);
              }
              if (!i) {
                return true;
              }
              if (a === this.end) {
                return true;
              }
              break;
            }
          case Ee.LB_WRITE:
          case Ee.LB_CHECK:
            throw new se("Backtracker cannot evaluate Lookbehind instructions");
          default:
            throw new se("bad inst");
        }
        break;
      }
    }
    return i && this.matchcap.length > 1 && this.matchcap[1] >= 0;
  }
};
var Ae = [];
var Fe = class e {
  static shouldBacktrack(e) {
    return e.numInst() <= 500;
  }
  static maxBitStateLen(t) {
    if (e.shouldBacktrack(t)) {
      return Math.floor(262144 / t.numInst());
    } else {
      return 0;
    }
  }
  static execute(e, t, n, r, s) {
    const i = e.cond;
    if (i === Be.EMPTY_ALL) {
      return null;
    }
    if ((r === L.ANCHOR_START || r === L.ANCHOR_BOTH) && n !== 0) {
      return null;
    }
    if ((i & Be.EMPTY_BEGIN_TEXT) !== 0 && n !== 0) {
      return null;
    }
    const a = Ae.length > 0 ? Ae.pop() : new Ne();
    const o = t.endPos();
    a.reset(e.prog, o, s);
    let B = false;
    if ((i & Be.EMPTY_BEGIN_TEXT) !== 0 || r === L.ANCHOR_START || r === L.ANCHOR_BOTH) {
      if (a.ncap > 0) {
        a.cap[0] = n;
      }
      if (a.tryBacktrack(e, t, e.prog.start, n, r)) {
        B = true;
      }
    } else {
      let s = -1;
      for (; n <= o && s !== 0; n += s) {
        if (e.prefix.length > 0) {
          const r = t.index(e, n);
          if (r < 0) {
            break;
          }
          n += r;
        }
        if (a.ncap > 0) {
          a.cap[0] = n;
        }
        if (a.tryBacktrack(e, t, e.prog.start, n, r)) {
          B = true;
          break;
        }
        const i = t.step(n);
        s = i === de.EOF() ? 0 : i & 7;
      }
    }
    if (!B) {
      Ae.push(a);
      return null;
    }
    const u = s === 0 ? [] : Be.toArray(a.matchcap.subarray(0, s));
    Ae.push(a);
    return u;
  }
};
var Oe = class {
  constructor(e) {
    this.sparse = new Uint32Array(e);
    this.dense = new Uint32Array(e);
    this.size = 0;
    this.nextIndex = 0;
  }
  empty() {
    return this.nextIndex >= this.size;
  }
  next() {
    return this.dense[this.nextIndex++];
  }
  clear() {
    this.size = 0;
    this.nextIndex = 0;
  }
  contains(e) {
    return e < this.sparse.length && this.sparse[e] < this.size && this.dense[this.sparse[e]] === e;
  }
  insert(e) {
    if (!this.contains(e)) {
      this.insertNew(e);
    }
  }
  insertNew(e) {
    if (!(e >= this.sparse.length)) {
      this.sparse[e] = this.size;
      this.dense[this.size] = e;
      this.size++;
    }
  }
};
var Se = class {
  constructor(e) {
    this.start = e.start;
    this.numCap = e.numCap;
    this.inst = new Array(e.inst.length);
    for (let t = 0; t < e.inst.length; t++) {
      const n = e.inst[t];
      const r = new Ee(n.op);
      r.out = n.out;
      r.arg = n.arg;
      r.runes = n.runes ? new Int32Array(n.runes) : new Int32Array(0);
      r.next = null;
      this.inst[t] = r;
    }
  }
};
var xe = class e {
  static compile(e) {
    if (e.start === 0) {
      return null;
    }
    if (e.numLb > 0) {
      return null;
    }
    const t = e.inst[e.start];
    if (t.op !== Ee.EMPTY_WIDTH || (t.arg & Be.EMPTY_BEGIN_TEXT) === 0) {
      return null;
    }
    let n = false;
    for (let s = 0; s < e.inst.length; s++) {
      if (e.inst[s].op === Ee.ALT || e.inst[s].op === Ee.ALT_MATCH) {
        n = true;
        break;
      }
    }
    for (let s = 0; s < e.inst.length; s++) {
      const t = e.inst[s];
      const r = e.inst[t.out].op;
      switch (t.op) {
        case Ee.ALT:
        case Ee.ALT_MATCH:
          if (r === Ee.MATCH || e.inst[t.arg].op === Ee.MATCH) {
            return null;
          }
          break;
        case Ee.EMPTY_WIDTH:
          if (r === Ee.MATCH) {
            if ((t.arg & Be.EMPTY_END_TEXT) === Be.EMPTY_END_TEXT) {
              continue;
            }
            return null;
          }
          break;
        default:
          if (r === Ee.MATCH && n) {
            return null;
          }
      }
    }
    let r = (e => {
      const t = new Se(e);
      for (let n = 0; n < t.inst.length; n++) {
        const e = t.inst[n];
        if (e.op !== Ee.ALT && e.op !== Ee.ALT_MATCH) {
          continue;
        }
        let r = "out";
        let s = "arg";
        let i = t.inst[e[s]];
        if (i.op !== Ee.ALT && i.op !== Ee.ALT_MATCH && (r = "arg", s = "out", i = t.inst[e[s]], i.op !== Ee.ALT && i.op !== Ee.ALT_MATCH)) {
          continue;
        }
        const a = t.inst[e[r]];
        if (a.op === Ee.ALT || a.op === Ee.ALT_MATCH) {
          continue;
        }
        let o = "out";
        let B = "arg";
        let u = false;
        if (i.out === n) {
          u = true;
        } else if (i.arg === n) {
          u = true;
          o = "arg";
          B = "out";
        }
        if (u) {
          i[o] = e[r];
        }
        if (e[r] === i[o]) {
          e[s] = i[B];
        }
      }
      return t;
    })(e);
    r = (e => {
      if (e.inst.length >= 1000) {
        return null;
      }
      const t = new Oe(e.inst.length);
      const n = new Oe(e.inst.length);
      const r = new Array(e.inst.length);
      const s = new Array(e.inst.length).fill(false);
      const i = a => {
        let o = true;
        const B = e.inst[a];
        if (n.contains(a)) {
          return true;
        }
        n.insert(a);
        switch (B.op) {
          case Ee.ALT:
          case Ee.ALT_MATCH:
            {
              o = i(B.out) && i(B.arg);
              let e = s[B.out];
              let t = s[B.arg];
              if (e && t) {
                return false;
              }
              if (t) {
                const n = B.out;
                B.out = B.arg;
                B.arg = n;
                const r = e;
                e = t;
                t = r;
              }
              if (e) {
                s[a] = true;
                B.op = Ee.ALT_MATCH;
              }
              const n = ((e, t, n, r) => {
                const s = e.length;
                const i = t.length;
                let a = 0;
                let o = 0;
                const B = [];
                const u = [];
                let c = true;
                let l = -1;
                const h = s => {
                  const i = s ? e : t;
                  const c = s ? a : o;
                  const h = s ? n : r;
                  return (!(l > 0) || !(i[c] <= B[l])) && !(B.push(i[c], i[c + 1]), s ? a += 2 : o += 2, l += 2, u.push(h), 0);
                };
                while (a < s || o < i) {
                  c = o >= i ? h(true) : a >= s || t[o] < e[a] ? h(false) : h(true);
                  if (!c) {
                    return null;
                  }
                }
                return {
                  merged: B,
                  next: u
                };
              })(r[B.out] || [], r[B.arg] || [], B.out, B.arg);
              if (!n) {
                return false;
              }
              r[a] = new Int32Array(n.merged);
              B.next = new Uint32Array(n.next);
              break;
            }
          case Ee.CAPTURE:
          case Ee.EMPTY_WIDTH:
          case Ee.NOP:
            o = i(B.out);
            s[a] = s[B.out];
            r[a] = r[B.out] ? new Int32Array(r[B.out]) : new Int32Array(0);
            B.next = new Uint32Array(Math.floor(r[a].length / 2) + 1).fill(B.out);
            break;
          case Ee.MATCH:
          case Ee.FAIL:
            s[a] = B.op === Ee.MATCH;
            break;
          case Ee.RUNE:
            {
              s[a] = false;
              if (B.next && B.next.length > 0) {
                break;
              }
              t.insert(B.out);
              if (!B.runes || B.runes.length === 0) {
                r[a] = new Int32Array(0);
                B.next = new Uint32Array([B.out]);
                break;
              }
              let e = [];
              if (B.runes.length === 1 && (B.arg & L.FOLD_CASE) !== 0) {
                const t = B.runes[0];
                e.push(t, t);
                for (let n = X.simpleFold(t); n !== t; n = X.simpleFold(n)) {
                  e.push(n, n);
                }
                e.sort((e, t) => e - t);
              } else {
                for (let t = 0; t < B.runes.length; t++) {
                  e.push(B.runes[t]);
                }
              }
              r[a] = new Int32Array(e);
              B.next = new Uint32Array(Math.floor(e.length / 2) + 1).fill(B.out);
              B.op = Ee.RUNE;
              break;
            }
          case Ee.RUNE1:
            {
              s[a] = false;
              if (B.next && B.next.length > 0) {
                break;
              }
              t.insert(B.out);
              let e = [];
              if ((B.arg & L.FOLD_CASE) !== 0) {
                const t = B.runes[0];
                e.push(t, t);
                for (let n = X.simpleFold(t); n !== t; n = X.simpleFold(n)) {
                  e.push(n, n);
                }
                e.sort((e, t) => e - t);
              } else {
                e.push(B.runes[0], B.runes[0]);
              }
              r[a] = new Int32Array(e);
              B.next = new Uint32Array(Math.floor(e.length / 2) + 1).fill(B.out);
              B.op = Ee.RUNE;
              break;
            }
          case Ee.RUNE_ANY:
            s[a] = false;
            if (B.next && B.next.length > 0) {
              break;
            }
            t.insert(B.out);
            r[a] = new Int32Array([0, X.MAX_RUNE]);
            B.next = new Uint32Array([B.out]);
            break;
          case Ee.RUNE_ANY_NOT_NL:
            s[a] = false;
            if (B.next && B.next.length > 0) {
              break;
            }
            t.insert(B.out);
            r[a] = new Int32Array([0, 9, 11, X.MAX_RUNE]);
            B.next = new Uint32Array(Math.floor(r[a].length / 2) + 1).fill(B.out);
        }
        return o;
      };
      t.clear();
      t.insert(e.start);
      while (!t.empty()) {
        n.clear();
        if (!i(t.next())) {
          return null;
        }
      }
      for (let a = 0; a < e.inst.length; a++) {
        if (r[a]) {
          e.inst[a].runes = r[a];
        }
      }
      return e;
    })(r);
    if (r !== null) {
      ((e, t) => {
        for (let n = 0; n < t.inst.length; n++) {
          const r = t.inst[n];
          switch (r.op) {
            case Ee.ALT:
            case Ee.ALT_MATCH:
            case Ee.RUNE:
              break;
            case Ee.CAPTURE:
            case Ee.EMPTY_WIDTH:
            case Ee.NOP:
            case Ee.MATCH:
            case Ee.FAIL:
              e.inst[n].next = null;
              break;
            case Ee.RUNE1:
            case Ee.RUNE_ANY:
            case Ee.RUNE_ANY_NOT_NL:
              e.inst[n].next = null;
              e.inst[n].op = r.op;
              e.inst[n].runes = r.runes ? new Int32Array(r.runes) : new Int32Array(0);
          }
        }
      })(r, e);
    }
    return r;
  }
  static next(e, t) {
    const n = e.matchRunePos(t);
    if (n >= 0) {
      return e.next[n];
    } else if (e.op === Ee.ALT_MATCH) {
      return e.out;
    } else {
      return 0;
    }
  }
  static execute(t, n, r, s, i) {
    const a = t.onepass;
    if (!a) {
      return null;
    }
    const o = new Int32Array(i).fill(-1);
    let B = false;
    let u = n.step(r);
    let c = u >> 3;
    let l = u & 7;
    let h = de.EOF();
    let C = -1;
    let d = 0;
    if (u !== de.EOF()) {
      h = n.step(r + l);
      if (h !== de.EOF()) {
        C = h >> 3;
        d = h & 7;
      }
    }
    let f;
    let p = r === 0 ? Be.emptyOpContext(-1, c) : n.context(r);
    let g = a.start;
    while (true) {
      f = a.inst[g];
      g = f.out;
      switch (f.op) {
        case Ee.MATCH:
          if (s === L.ANCHOR_BOTH && r !== n.endPos()) {
            return null;
          } else {
            B = true;
            if (o.length > 0) {
              o[0] = 0;
              o[1] = r;
            }
            if (i === 0) {
              return [];
            } else {
              return Be.toArray(o);
            }
          }
        case Ee.RUNE:
          if (!f.matchRune(c)) {
            return null;
          }
          break;
        case Ee.RUNE1:
          if (c !== f.runes[0]) {
            return null;
          }
          break;
        case Ee.RUNE_ANY:
          break;
        case Ee.RUNE_ANY_NOT_NL:
          if (c === 10) {
            return null;
          }
          break;
        case Ee.ALT:
        case Ee.ALT_MATCH:
          g = e.next(f, c);
          continue;
        case Ee.FAIL:
          return null;
        case Ee.NOP:
          continue;
        case Ee.EMPTY_WIDTH:
          if ((f.arg & ~p) !== 0) {
            return null;
          }
          continue;
        case Ee.CAPTURE:
          if (f.arg < o.length) {
            o[f.arg] = r;
          }
          continue;
        default:
          throw new se("bad inst");
      }
      if (l === 0) {
        break;
      }
      p = Be.emptyOpContext(c, C);
      r += l;
      c = C;
      l = d;
      if (c !== -1) {
        h = n.step(r + l);
        if (h !== de.EOF()) {
          C = h >> 3;
          d = h & 7;
        } else {
          C = -1;
          d = 0;
        }
      }
    }
    if (B) {
      if (i === 0) {
        return [];
      } else {
        return Be.toArray(o);
      }
    } else {
      return null;
    }
  }
};
var Le = class e {
  static Op = ue(["NO_MATCH", "EMPTY_MATCH", "LITERAL", "CHAR_CLASS", "ANY_CHAR_NOT_NL", "ANY_CHAR", "BEGIN_LINE", "END_LINE", "BEGIN_TEXT", "END_TEXT", "WORD_BOUNDARY", "NO_WORD_BOUNDARY", "CAPTURE", "STAR", "PLUS", "QUEST", "REPEAT", "CONCAT", "ALTERNATE", "PLB", "NLB", "LEFT_PAREN", "VERTICAL_BAR"]);
  static isPseudoOp(t) {
    return t >= e.Op.LEFT_PAREN;
  }
  static emptySubs() {
    return [];
  }
  static quoteIfHyphen(e) {
    if (e === K.CODES["-"]) {
      return "\\";
    } else {
      return "";
    }
  }
  static fromRegexp(t) {
    const n = new e(t.op);
    n.flags = t.flags;
    n.subs = t.subs;
    n.runes = t.runes;
    n.cap = t.cap;
    n.min = t.min;
    n.max = t.max;
    n.name = t.name;
    n.namedGroups = t.namedGroups;
    n.lb = t.lb;
    return n;
  }
  constructor(t) {
    this.op = t;
    this.flags = 0;
    this.subs = e.emptySubs();
    this.runes = new Int32Array(0);
    this.min = 0;
    this.max = 0;
    this.cap = 0;
    this.name = null;
    this.namedGroups = Object.create(null);
    this.lb = 0;
  }
  reinit() {
    this.flags = 0;
    this.subs = e.emptySubs();
    this.runes = new Int32Array(0);
    this.cap = 0;
    this.min = 0;
    this.max = 0;
    this.name = null;
    this.namedGroups = Object.create(null);
    this.lb = 0;
  }
  toString() {
    return this.appendTo();
  }
  appendTo() {
    let t = "";
    switch (this.op) {
      case e.Op.NO_MATCH:
        t += "[^\\x00-\\x{10FFFF}]";
        break;
      case e.Op.EMPTY_MATCH:
        t += "(?:)";
        break;
      case e.Op.STAR:
      case e.Op.PLUS:
      case e.Op.QUEST:
      case e.Op.REPEAT:
        {
          const n = this.subs[0];
          if (n.op > e.Op.CAPTURE || n.op === e.Op.LITERAL && n.runes.length > 1) {
            t += `(?:${n.appendTo()})`;
          } else {
            t += n.appendTo();
          }
          switch (this.op) {
            case e.Op.STAR:
              t += "*";
              break;
            case e.Op.PLUS:
              t += "+";
              break;
            case e.Op.QUEST:
              t += "?";
              break;
            case e.Op.REPEAT:
              t += `{${this.min}`;
              if (this.min !== this.max) {
                t += ",";
                if (this.max >= 0) {
                  t += this.max;
                }
              }
              t += "}";
          }
          if ((this.flags & L.NON_GREEDY) !== 0) {
            t += "?";
          }
          break;
        }
      case e.Op.CONCAT:
        for (let n of this.subs) {
          if (n.op === e.Op.ALTERNATE) {
            t += `(?:${n.appendTo()})`;
          } else {
            t += n.appendTo();
          }
        }
        break;
      case e.Op.ALTERNATE:
        {
          let e = "";
          for (let n of this.subs) {
            t += e;
            e = "|";
            t += n.appendTo();
          }
          break;
        }
      case e.Op.LITERAL:
        if ((this.flags & L.FOLD_CASE) !== 0) {
          t += "(?i:";
        }
        for (let e of this.runes) {
          t += Be.escapeRune(e);
        }
        if ((this.flags & L.FOLD_CASE) !== 0) {
          t += ")";
        }
        break;
      case e.Op.ANY_CHAR_NOT_NL:
        t += "(?-s:.)";
        break;
      case e.Op.ANY_CHAR:
        t += "(?s:.)";
        break;
      case e.Op.PLB:
        t += `(?<=${this.subs[0].appendTo()})`;
        break;
      case e.Op.NLB:
        t += `(?<!${this.subs[0].appendTo()})`;
        break;
      case e.Op.CAPTURE:
        if (this.name === null || this.name.length === 0) {
          t += "(";
        } else {
          t += `(?P<${this.name}>`;
        }
        if (this.subs[0].op !== e.Op.EMPTY_MATCH) {
          t += this.subs[0].appendTo();
        }
        t += ")";
        break;
      case e.Op.BEGIN_TEXT:
        t += "\\A";
        break;
      case e.Op.END_TEXT:
        if ((this.flags & L.WAS_DOLLAR) !== 0) {
          t += "(?-m:$)";
        } else {
          t += "\\z";
        }
        break;
      case e.Op.BEGIN_LINE:
        t += "^";
        break;
      case e.Op.END_LINE:
        t += "$";
        break;
      case e.Op.WORD_BOUNDARY:
        t += "\\b";
        break;
      case e.Op.NO_WORD_BOUNDARY:
        t += "\\B";
        break;
      case e.Op.CHAR_CLASS:
        if (this.runes.length % 2 != 0) {
          t += "[invalid char class]";
          break;
        }
        t += "[";
        if (this.runes.length === 0) {
          t += "^\\x00-\\x{10FFFF}";
        } else if (this.runes[0] === 0 && this.runes[this.runes.length - 1] === X.MAX_RUNE) {
          t += "^";
          for (let n = 1; n < this.runes.length - 1; n += 2) {
            const r = this.runes[n] + 1;
            const s = this.runes[n + 1] - 1;
            t += e.quoteIfHyphen(r);
            t += Be.escapeRune(r);
            if (r !== s) {
              t += "-";
              t += e.quoteIfHyphen(s);
              t += Be.escapeRune(s);
            }
          }
        } else {
          for (let n = 0; n < this.runes.length; n += 2) {
            const r = this.runes[n];
            const s = this.runes[n + 1];
            t += e.quoteIfHyphen(r);
            t += Be.escapeRune(r);
            if (r !== s) {
              t += "-";
              t += e.quoteIfHyphen(s);
              t += Be.escapeRune(s);
            }
          }
        }
        t += "]";
        break;
      default:
        t += this.op;
    }
    return t;
  }
  maxCap() {
    let t = 0;
    if (this.op === e.Op.CAPTURE) {
      t = this.cap;
    }
    if (this.subs !== null) {
      for (let e of this.subs) {
        const n = e.maxCap();
        if (t < n) {
          t = n;
        }
      }
    }
    return t;
  }
  equals(t) {
    if (t === null || !(t instanceof e)) {
      return false;
    }
    if (this.op !== t.op) {
      return false;
    }
    switch (this.op) {
      case e.Op.END_TEXT:
        if ((this.flags & L.WAS_DOLLAR) !== (t.flags & L.WAS_DOLLAR)) {
          return false;
        }
        break;
      case e.Op.LITERAL:
      case e.Op.CHAR_CLASS:
        if ((this.flags & L.FOLD_CASE) !== (t.flags & L.FOLD_CASE)) {
          return false;
        }
        if (this.runes === null && t.runes === null) {
          break;
        }
        if (this.runes === null || t.runes === null) {
          return false;
        }
        if (this.runes.length !== t.runes.length) {
          return false;
        }
        for (let e = 0; e < this.runes.length; e++) {
          if (this.runes[e] !== t.runes[e]) {
            return false;
          }
        }
        break;
      case e.Op.ALTERNATE:
      case e.Op.CONCAT:
        if (this.subs.length !== t.subs.length) {
          return false;
        }
        for (let e = 0; e < this.subs.length; ++e) {
          if (!this.subs[e].equals(t.subs[e])) {
            return false;
          }
        }
        break;
      case e.Op.STAR:
      case e.Op.PLUS:
      case e.Op.QUEST:
        if ((this.flags & L.NON_GREEDY) !== (t.flags & L.NON_GREEDY) || !this.subs[0].equals(t.subs[0])) {
          return false;
        }
        break;
      case e.Op.REPEAT:
        if ((this.flags & L.NON_GREEDY) !== (t.flags & L.NON_GREEDY) || this.min !== t.min || this.max !== t.max || !this.subs[0].equals(t.subs[0])) {
          return false;
        }
        break;
      case e.Op.CAPTURE:
        if (this.cap !== t.cap || (this.name === null ? t.name !== null : this.name !== t.name) || !this.subs[0].equals(t.subs[0])) {
          return false;
        }
        break;
      case e.Op.PLB:
      case e.Op.NLB:
        if (this.lb !== t.lb || !this.subs[0].equals(t.subs[0])) {
          return false;
        }
    }
    return true;
  }
};
var Re = class {
  static walk(e, t) {
    const n = [];
    let r;
    let s = e;
    while (true) {
      if (s.subs.length === 0) {
        r = t.leaf(s);
      } else {
        const e = t.enter(s);
        if (e.result === undefined) {
          n.push({
            re: s,
            state: e,
            i: 0
          });
          s = s.subs[0];
          continue;
        }
        r = e.result;
      }
      while (true) {
        if (n.length === 0) {
          return r;
        }
        const e = n[n.length - 1];
        t.child(e.re, e.state, r, e.i);
        e.i++;
        if (e.state.result === undefined && e.i < e.re.subs.length) {
          s = e.re.subs[e.i];
          break;
        }
        n.pop();
        r = e.state.result !== undefined ? e.state.result : t.leave(e.re, e.state);
      }
    }
  }
};
var ke = class {
  constructor(e, t) {
    const n = new Map();
    const r = [0];
    const s = [0];
    const i = [0];
    const a = [0];
    for (const d of e) {
      let e = 0;
      for (let o = 0; o < d.length; o++) {
        const B = e * t + d[o];
        let u = n.get(B);
        if (u === undefined) {
          u = r.length;
          n.set(B, u);
          r.push(e);
          s.push(d[o]);
          i.push(i[e] + 1);
          a.push(0);
        }
        e = u;
      }
      a[e] = 1;
    }
    const o = r.length;
    const B = new Int32Array(o - 1);
    for (let d = 1; d < o; d++) {
      B[d - 1] = d;
    }
    B.sort((e, t) => r[e] - r[t] || s[e] - s[t]);
    const u = new Int32Array(o + 1);
    for (let d = 1; d < o; d++) {
      u[r[d] + 1]++;
    }
    for (let d = 0; d < o; d++) {
      u[d + 1] += u[d];
    }
    const c = new Int32Array(o - 1);
    for (let d = 0; d < B.length; d++) {
      c[d] = s[B[d]];
    }
    this.childStart = u;
    this.childUnit = c;
    this.childNode = B;
    const l = new Int32Array(o);
    for (let d = 0; d < o; d++) {
      l[d] = d;
    }
    l.sort((e, t) => i[e] - i[t]);
    const h = new Int32Array(o);
    const C = Uint8Array.from(a);
    for (let d = 1; d < o; d++) {
      const e = l[d];
      const t = r[e];
      if (t !== 0) {
        let n = h[t];
        let r = this.next(n, s[e]);
        while (r < 0 && n !== 0) {
          n = h[n];
          r = this.next(n, s[e]);
        }
        h[e] = r >= 0 ? r : 0;
      }
      C[e] |= C[h[e]];
    }
    this.fail = h;
    this.match = C;
  }
  next(e, t) {
    let n = this.childStart[e];
    let r = this.childStart[e + 1];
    const s = this.childUnit;
    while (n < r) {
      const e = n + r >> 1;
      const i = s[e];
      if (i === t) {
        return this.childNode[e];
      }
      if (i < t) {
        n = e + 1;
      } else {
        r = e;
      }
    }
    return -1;
  }
  advance(e, t) {
    while (true) {
      const n = this.next(e, t);
      if (n >= 0) {
        return n;
      }
      if (e === 0) {
        return 0;
      }
      e = this.fail[e];
    }
  }
  searchUTF16(e, t, n) {
    let r = 0;
    for (let s = t; s < n; s++) {
      r = this.advance(r, e.charCodeAt(s));
      if (this.match[r] === 1) {
        return true;
      }
    }
    return false;
  }
  searchUTF8(e, t, n) {
    let r = 0;
    for (let s = t; s < n; s++) {
      r = this.advance(r, e[s]);
      if (this.match[r] === 1) {
        return true;
      }
    }
    return false;
  }
};
var Ge = class e {
  static Type = {
    NONE: 0,
    EXACT: 1,
    AND: 2,
    OR: 3
  };
  static MAX_SCANS = 32;
  static MAX_AC_UNITS = 262144;
  constructor(t) {
    this.type = t;
    this.subs = [];
    this.str = "";
    this.bytes = null;
    this.cost = t === e.Type.EXACT ? 1 : 0;
    this.allExact = false;
    this.ac16 = null;
    this.ac8 = null;
  }
  automaton16() {
    if (this.ac16 === null) {
      const e = this.subs.map(e => {
        const t = new Array(e.str.length);
        for (let n = 0; n < e.str.length; n++) {
          t[n] = e.str.charCodeAt(n);
        }
        return t;
      });
      this.ac16 = new ke(e, 65536);
    }
    return this.ac16;
  }
  automaton8() {
    if (this.ac8 === null) {
      this.ac8 = new ke(this.subs.map(e => e.bytes), 256);
    }
    return this.ac8;
  }
  eval(t, n) {
    switch (this.type) {
      case e.Type.NONE:
        return true;
      case e.Type.EXACT:
        return t.hasString(this, n);
      case e.Type.AND:
        for (let e = 0; e < this.subs.length; e++) {
          if (!this.subs[e].eval(t, n)) {
            return false;
          }
        }
        return true;
      case e.Type.OR:
        if (this.allExact) {
          return t.hasAnyString(this, n);
        }
        for (let e = 0; e < this.subs.length; e++) {
          if (this.subs[e].eval(t, n)) {
            return true;
          }
        }
        return false;
      default:
        return true;
    }
  }
};
var Pe = class e {
  static build(t) {
    if (t) {
      return Re.walk(t, e.WALKER);
    } else {
      return new Ge(Ge.Type.NONE);
    }
  }
  static WALKER = {
    leaf: t => e.leaf(t),
    enter: t => e.enter(t),
    child: (t, n, r) => e.child(t, n, r),
    leave: (t, n) => e.leave(t, n)
  };
  static leaf(e) {
    if (e.op !== Le.Op.LITERAL) {
      return new Ge(Ge.Type.NONE);
    }
    if (e.runes.length === 0 || (e.flags & L.FOLD_CASE) !== 0) {
      return new Ge(Ge.Type.NONE);
    }
    let t = "";
    for (let r = 0; r < e.runes.length; r++) {
      if (X.isUnsearchable(e.runes[r])) {
        return new Ge(Ge.Type.NONE);
      }
      t += String.fromCodePoint(e.runes[r]);
    }
    const n = new Ge(Ge.Type.EXACT);
    n.str = t;
    n.bytes = Be.stringToUtf8ByteArray(n.str);
    return n;
  }
  static enter(e) {
    switch (e.op) {
      case Le.Op.CAPTURE:
      case Le.Op.PLUS:
        return {
          sub: null
        };
      case Le.Op.REPEAT:
        if (e.min >= 1) {
          return {
            sub: null
          };
        } else {
          return {
            result: new Ge(Ge.Type.NONE)
          };
        }
      case Le.Op.CONCAT:
        return {
          pf: new Ge(Ge.Type.AND),
          subs: []
        };
      case Le.Op.ALTERNATE:
        return {
          pf: new Ge(Ge.Type.OR),
          subs: []
        };
      default:
        return {
          result: new Ge(Ge.Type.NONE)
        };
    }
  }
  static child(e, t, n) {
    if (t.subs !== undefined) {
      if (t.pf.type !== Ge.Type.AND) {
        if (n.type !== Ge.Type.NONE) {
          if (n.type !== Ge.Type.OR) {
            t.subs.push(n);
          } else {
            for (let r = 0; r < n.subs.length; r++) {
              t.subs.push(n.subs[r]);
            }
          }
        } else {
          t.result = new Ge(Ge.Type.NONE);
        }
      } else {
        if (n.type === Ge.Type.NONE) {
          return;
        }
        if (n.type === Ge.Type.AND) {
          for (let e = 0; e < n.subs.length; e++) {
            t.subs.push(n.subs[e]);
          }
          return;
        }
        t.subs.push(n);
      }
    } else {
      t.sub = n;
    }
  }
  static leave(e, t) {
    if (t.subs === undefined) {
      return t.sub;
    }
    const n = t.pf;
    const r = new Set();
    const s = [];
    for (const B of t.subs) {
      if (B.type === Ge.Type.EXACT) {
        if (r.has(B.str)) {
          continue;
        }
        r.add(B.str);
      }
      s.push(B);
    }
    if (n.type === Ge.Type.AND) {
      const e = [];
      let t = 0;
      for (const n of s) {
        if (!(t + n.cost > Ge.MAX_SCANS)) {
          e.push(n);
          t += n.cost;
        }
      }
      if (e.length === 0) {
        return new Ge(Ge.Type.NONE);
      } else if (e.length === 1) {
        return e[0];
      } else {
        n.subs = e;
        n.cost = t;
        return n;
      }
    }
    if (s.length === 0) {
      return new Ge(Ge.Type.NONE);
    }
    if (s.length === 1) {
      return s[0];
    }
    n.subs = s;
    let i = true;
    let a = 0;
    let o = 0;
    for (const B of s) {
      if (B.type !== Ge.Type.EXACT) {
        i = false;
      } else {
        o += B.bytes.length;
      }
      a += B.cost;
    }
    if (i) {
      if (o > Ge.MAX_AC_UNITS) {
        return new Ge(Ge.Type.NONE);
      } else {
        n.allExact = true;
        n.cost = 1;
        return n;
      }
    } else if (a > Ge.MAX_SCANS) {
      return new Ge(Ge.Type.NONE);
    } else {
      n.cost = a;
      return n;
    }
  }
};
var Me = class {
  constructor(e = 0, t = 0) {
    this.head = e;
    this.tail = t;
  }
};
var Ve = class {
  constructor() {
    this.inst = [];
    this.start = 0;
    this.numCap = 2;
    this.lbStarts = [];
    this.numLb = 0;
    this.lbInst = null;
  }
  getInst(e) {
    return this.inst[e];
  }
  numInst() {
    return this.inst.length;
  }
  addInst(e) {
    this.inst.push(new Ee(e));
  }
  markLookbehindInsts() {
    const e = new Uint8Array(this.inst.length);
    const t = this.lbStarts.slice();
    while (t.length > 0) {
      const n = t.pop();
      if (n === 0 || e[n] === 1) {
        continue;
      }
      e[n] = 1;
      const r = this.inst[n];
      switch (r.op) {
        case Ee.ALT:
        case Ee.ALT_MATCH:
          t.push(r.out, r.arg);
          break;
        case Ee.MATCH:
        case Ee.FAIL:
          break;
        default:
          t.push(r.out);
      }
    }
    this.lbInst = e;
  }
  skipNop(e) {
    let t = this.inst[e];
    while (t.op === Ee.NOP || t.op === Ee.CAPTURE) {
      t = this.inst[e];
      e = t.out;
    }
    return t;
  }
  prefix() {
    let e = "";
    let t = this.skipNop(this.start);
    if (!Ee.isRuneOp(t.op) || t.runes.length !== 1) {
      return [t.op === Ee.MATCH, e];
    }
    while (Ee.isRuneOp(t.op) && t.runes.length === 1 && (t.arg & L.FOLD_CASE) === 0 && !X.isUnsearchable(t.runes[0])) {
      e += String.fromCodePoint(t.runes[0]);
      t = this.skipNop(t.out);
    }
    return [t.op === Ee.MATCH, e];
  }
  startCond() {
    let e = 0;
    let t = this.start;
    e: while (true) {
      const n = this.inst[t];
      switch (n.op) {
        case Ee.EMPTY_WIDTH:
          e |= n.arg;
          break;
        case Ee.FAIL:
          return -1;
        case Ee.CAPTURE:
        case Ee.NOP:
          break;
        default:
          break e;
      }
      t = n.out;
    }
    return e;
  }
  patch(e, t) {
    let n = e.head;
    while (n !== 0) {
      const e = this.inst[n >> 1];
      if (n & 1) {
        n = e.arg;
        e.arg = t;
      } else {
        n = e.out;
        e.out = t;
      }
    }
  }
  append(e, t) {
    if (e.head === 0) {
      return t;
    }
    if (t.head === 0) {
      return e;
    }
    const n = this.inst[e.tail >> 1];
    if (e.tail & 1) {
      n.arg = t.head;
    } else {
      n.out = t.head;
    }
    return new Me(e.head, t.tail);
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inst.length; t++) {
      const n = e.length;
      e += t;
      if (t === this.start) {
        e += "*";
      }
      e += "        ".substring(e.length - n);
      e += this.inst[t];
      e += "\n";
    }
    return e;
  }
};
var He = new Int32Array([0, K.CODES["\n"] - 1, K.CODES["\n"] + 1, X.MAX_RUNE]);
var Ue = new Int32Array([0, X.MAX_RUNE]);
var qe = class {
  constructor(e = 0, t = new Me(), n = false) {
    this.i = e;
    this.out = t;
    this.nullable = n;
  }
};
var Je = class e {
  static compileRegexp(t) {
    const n = new e();
    const r = n.compile(t);
    n.prog.patch(r.out, n.newInst(Ee.MATCH).i);
    n.prog.start = r.i;
    n.prog.markLookbehindInsts();
    return n.prog;
  }
  static compileSet(t) {
    const n = new e();
    if (t.length === 0) {
      n.prog.start = n.newInst(Ee.FAIL).i;
      n.prog.markLookbehindInsts();
      return n.prog;
    }
    let r = [];
    for (let e = 0; e < t.length; e++) {
      n.lbOffset = n.prog.numLb;
      const s = n.compile(t[e]);
      const i = n.newInst(Ee.MATCH);
      n.prog.getInst(i.i).arg = e;
      n.prog.patch(s.out, i.i);
      r.push(s.i);
    }
    let s = r[0];
    for (let e = 1; e < r.length; e++) {
      const t = n.newInst(Ee.ALT);
      const i = n.prog.getInst(t.i);
      i.out = s;
      i.arg = r[e];
      s = t.i;
    }
    n.prog.start = s;
    n.prog.markLookbehindInsts();
    return n.prog;
  }
  constructor() {
    this.prog = new Ve();
    this.newInst(Ee.FAIL);
    this.lbOffset = 0;
    this.runeCache = new Map();
    this.walker = {
      leaf: e => this.leaf(e),
      enter: e => this.enter(e),
      child: (e, t, n) => this.child(e, t, n),
      leave: (e, t) => this.leave(e, t)
    };
  }
  newInst(e) {
    this.prog.addInst(e);
    return new qe(this.prog.numInst() - 1, new Me(), true);
  }
  nop() {
    const e = this.newInst(Ee.NOP);
    e.out = new Me(e.i << 1, e.i << 1);
    return e;
  }
  fail() {
    return new qe();
  }
  cap(e) {
    const t = this.newInst(Ee.CAPTURE);
    t.out = new Me(t.i << 1, t.i << 1);
    this.prog.getInst(t.i).arg = e;
    if (this.prog.numCap < e + 1) {
      this.prog.numCap = e + 1;
    }
    return t;
  }
  cat(e, t) {
    if (e.i === 0 || t.i === 0) {
      this.prog.patch(e.out, 0);
      this.prog.patch(t.out, 0);
      return this.fail();
    } else {
      this.prog.patch(e.out, t.i);
      return new qe(e.i, t.out, e.nullable && t.nullable);
    }
  }
  alt(e, t) {
    if (e.i === 0) {
      return t;
    }
    if (t.i === 0) {
      return e;
    }
    const n = this.newInst(Ee.ALT);
    const r = this.prog.getInst(n.i);
    r.out = e.i;
    r.arg = t.i;
    n.out = this.prog.append(e.out, t.out);
    n.nullable = e.nullable || t.nullable;
    return n;
  }
  loop(e, t) {
    const n = this.newInst(Ee.ALT);
    const r = this.prog.getInst(n.i);
    if (t) {
      r.arg = e.i;
      n.out = new Me(n.i << 1, n.i << 1);
    } else {
      r.out = e.i;
      n.out = new Me(n.i << 1 | 1, n.i << 1 | 1);
    }
    this.prog.patch(e.out, n.i);
    return n;
  }
  quest(e, t) {
    if (e.i === 0) {
      return this.nop();
    }
    const n = this.newInst(Ee.ALT);
    const r = this.prog.getInst(n.i);
    if (t) {
      r.arg = e.i;
      n.out = new Me(n.i << 1, n.i << 1);
    } else {
      r.out = e.i;
      n.out = new Me(n.i << 1 | 1, n.i << 1 | 1);
    }
    n.out = this.prog.append(n.out, e.out);
    return n;
  }
  star(e, t) {
    if (e.i === 0) {
      return this.nop();
    } else if (e.nullable) {
      return this.quest(this.plus(e, t), t);
    } else {
      return this.loop(e, t);
    }
  }
  plus(e, t) {
    if (e.i === 0) {
      return this.fail();
    } else {
      return new qe(e.i, this.loop(e, t).out, e.nullable);
    }
  }
  empty(e) {
    const t = this.newInst(Ee.EMPTY_WIDTH);
    this.prog.getInst(t.i).arg = e;
    t.out = new Me(t.i << 1, t.i << 1);
    return t;
  }
  rune(e, t) {
    const n = this.newInst(Ee.RUNE);
    n.nullable = false;
    const r = this.prog.getInst(n.i);
    r.runes = e;
    t &= L.FOLD_CASE;
    if (e.length !== 1 || X.simpleFold(e[0]) === e[0]) {
      t &= ~L.FOLD_CASE;
    }
    r.arg = t;
    n.out = new Me(n.i << 1, n.i << 1);
    if ((t & L.FOLD_CASE) === 0 && e.length === 1 || e.length === 2 && e[0] === e[1]) {
      r.op = Ee.RUNE1;
    } else if (e.length === 2 && e[0] === 0 && e[1] === X.MAX_RUNE) {
      r.op = Ee.RUNE_ANY;
    } else if (e.length === 4 && e[0] === 0 && e[1] === K.CODES["\n"] - 1 && e[2] === K.CODES["\n"] + 1 && e[3] === X.MAX_RUNE) {
      r.op = Ee.RUNE_ANY_NOT_NL;
    }
    return n;
  }
  lookBehind(e, t) {
    const n = Math.sign(t) * (Math.abs(t) + this.lbOffset);
    const r = this.newInst(Ee.LB_WRITE);
    this.prog.getInst(r.i).arg = n;
    const s = this.rune(Ue, 0);
    const i = this.star(s, true);
    const a = this.cat(i, e);
    this.prog.patch(a.out, r.i);
    const o = this.newInst(Ee.LB_CHECK);
    this.prog.getInst(o.i).arg = n;
    this.prog.lbStarts.push(a.i);
    if (Math.abs(n) > this.prog.numLb) {
      this.prog.numLb = Math.abs(n);
    }
    o.out = new Me(o.i << 1, o.i << 1);
    return o;
  }
  compile(e) {
    return Re.walk(e, this.walker);
  }
  leaf(e) {
    switch (e.op) {
      case Le.Op.NO_MATCH:
        return this.fail();
      case Le.Op.EMPTY_MATCH:
        return this.nop();
      case Le.Op.LITERAL:
        {
          if (e.runes.length === 0) {
            return this.nop();
          }
          let t = null;
          for (let n of e.runes) {
            let r = this.runeCache.get(n);
            if (r === undefined) {
              r = new Int32Array([n]);
              this.runeCache.set(n, r);
            }
            const s = this.rune(r, e.flags);
            t = t === null ? s : this.cat(t, s);
          }
          return t;
        }
      case Le.Op.CHAR_CLASS:
        return this.rune(e.runes, e.flags);
      case Le.Op.ANY_CHAR_NOT_NL:
        return this.rune(He, 0);
      case Le.Op.ANY_CHAR:
        return this.rune(Ue, 0);
      case Le.Op.BEGIN_LINE:
        return this.empty(Be.EMPTY_BEGIN_LINE);
      case Le.Op.END_LINE:
        return this.empty(Be.EMPTY_END_LINE);
      case Le.Op.BEGIN_TEXT:
        return this.empty(Be.EMPTY_BEGIN_TEXT);
      case Le.Op.END_TEXT:
        return this.empty(Be.EMPTY_END_TEXT);
      case Le.Op.WORD_BOUNDARY:
        return this.empty(Be.EMPTY_WORD_BOUNDARY);
      case Le.Op.NO_WORD_BOUNDARY:
        return this.empty(Be.EMPTY_NO_WORD_BOUNDARY);
      case Le.Op.CONCAT:
      case Le.Op.ALTERNATE:
        return this.nop();
      default:
        throw new te("regexp: unhandled case in compile");
    }
  }
  enter(e) {
    switch (e.op) {
      case Le.Op.PLB:
      case Le.Op.NLB:
      case Le.Op.STAR:
      case Le.Op.PLUS:
      case Le.Op.QUEST:
        return {
          sub: null
        };
      case Le.Op.CAPTURE:
        return {
          bra: this.cap(e.cap << 1),
          sub: null
        };
      case Le.Op.CONCAT:
      case Le.Op.ALTERNATE:
        return {
          f: null
        };
      default:
        throw new te("regexp: unhandled case in compile");
    }
  }
  child(e, t, n) {
    if (e.op === Le.Op.CONCAT) {
      t.f = t.f === null ? n : this.cat(t.f, n);
    } else if (e.op === Le.Op.ALTERNATE) {
      t.f = t.f === null ? n : this.alt(t.f, n);
    } else {
      t.sub = n;
    }
  }
  leave(e, t) {
    switch (e.op) {
      case Le.Op.PLB:
      case Le.Op.NLB:
        return this.lookBehind(t.sub, e.lb);
      case Le.Op.CAPTURE:
        {
          const n = this.cap(e.cap << 1 | 1);
          return this.cat(this.cat(t.bra, t.sub), n);
        }
      case Le.Op.STAR:
        return this.star(t.sub, (e.flags & L.NON_GREEDY) !== 0);
      case Le.Op.PLUS:
        return this.plus(t.sub, (e.flags & L.NON_GREEDY) !== 0);
      case Le.Op.QUEST:
        return this.quest(t.sub, (e.flags & L.NON_GREEDY) !== 0);
      case Le.Op.CONCAT:
      case Le.Op.ALTERNATE:
        return t.f;
      default:
        throw new te("regexp: unhandled case in compile");
    }
  }
};
var Ke = class e {
  static simplify(t) {
    if (t === null) {
      return null;
    } else {
      return Re.walk(t, e.WALKER);
    }
  }
  static WALKER = {
    leaf: t => e.leaf(t),
    enter: t => e.enter(t),
    child: (t, n, r, s) => e.child(t, n, r, s),
    leave: (t, n) => e.leave(t, n)
  };
  static leaf(e) {
    if (e.op === Le.Op.CHAR_CLASS) {
      if (e.runes === null) {
        return e;
      }
      if (e.runes.length === 0) {
        return new Le(Le.Op.NO_MATCH);
      }
      if (e.runes.length === 2 && e.runes[0] === 0 && e.runes[1] === X.MAX_RUNE) {
        return new Le(Le.Op.ANY_CHAR);
      }
      if (e.runes.length === 4 && e.runes[0] === 0 && e.runes[1] === K.CODES["\n"] - 1 && e.runes[2] === K.CODES["\n"] + 1 && e.runes[3] === X.MAX_RUNE) {
        return new Le(Le.Op.ANY_CHAR_NOT_NL);
      }
    }
    return e;
  }
  static enter(e) {
    switch (e.op) {
      case Le.Op.PLB:
      case Le.Op.NLB:
      case Le.Op.CAPTURE:
      case Le.Op.STAR:
      case Le.Op.PLUS:
      case Le.Op.QUEST:
        return {
          sub: null
        };
      case Le.Op.CONCAT:
      case Le.Op.ALTERNATE:
        return {
          subs: [],
          changed: false
        };
      case Le.Op.REPEAT:
        if (e.min === 0 && e.max === 0) {
          return {
            result: new Le(Le.Op.EMPTY_MATCH)
          };
        } else {
          return {
            sub: null
          };
        }
      default:
        return {
          result: e
        };
    }
  }
  static child(e, t, n, r) {
    if (t.subs !== undefined) {
      if (n !== e.subs[r]) {
        t.changed = true;
      }
      if (e.op === Le.Op.CONCAT) {
        if (n.op === Le.Op.NO_MATCH) {
          t.result = new Le(Le.Op.NO_MATCH);
          return;
        }
        if (n.op === Le.Op.EMPTY_MATCH) {
          t.changed = true;
          return;
        }
        if (n.op === Le.Op.CONCAT) {
          t.changed = true;
          for (let e = 0; e < n.subs.length; e++) {
            t.subs.push(n.subs[e]);
          }
          return;
        }
      } else {
        if (n.op === Le.Op.NO_MATCH) {
          t.changed = true;
          return;
        }
        if (n.op === Le.Op.ALTERNATE) {
          t.changed = true;
          for (let e = 0; e < n.subs.length; e++) {
            t.subs.push(n.subs[e]);
          }
          return;
        }
      }
      t.subs.push(n);
    } else {
      t.sub = n;
    }
  }
  static leave(t, n) {
    switch (t.op) {
      case Le.Op.PLB:
      case Le.Op.NLB:
      case Le.Op.CAPTURE:
        {
          const e = n.sub;
          if (e !== t.subs[0]) {
            const n = Le.fromRegexp(t);
            n.runes = new Int32Array(0);
            n.subs = [e];
            return n;
          }
          return t;
        }
      case Le.Op.CONCAT:
      case Le.Op.ALTERNATE:
        if (n.changed) {
          const e = n.subs;
          if (e.length === 0) {
            return new Le(t.op === Le.Op.CONCAT ? Le.Op.EMPTY_MATCH : Le.Op.NO_MATCH);
          }
          if (e.length === 1) {
            return e[0];
          }
          const r = Le.fromRegexp(t);
          r.runes = new Int32Array(0);
          r.subs = e;
          return r;
        }
        return t;
      case Le.Op.STAR:
      case Le.Op.PLUS:
      case Le.Op.QUEST:
        return e.simplify1(t.op, t.flags, n.sub, t);
      case Le.Op.REPEAT:
        return e.simplifyRepeat(t, n.sub);
      default:
        return t;
    }
  }
  static simplifyRepeat(t, n) {
    if (t.max === -1) {
      if (t.min === 0) {
        return e.simplify1(Le.Op.STAR, t.flags, n, null);
      }
      if (t.min === 1) {
        return e.simplify1(Le.Op.PLUS, t.flags, n, null);
      }
      const r = [];
      for (let e = 0; e < t.min - 1; e++) {
        r.push(n);
      }
      r.push(e.simplify1(Le.Op.PLUS, t.flags, n, null));
      return e.concat(r);
    }
    if (t.min === 1 && t.max === 1) {
      return n;
    }
    let r = null;
    if (t.min > 0) {
      r = [];
      for (let e = 0; e < t.min; e++) {
        r.push(n);
      }
    }
    if (t.max > t.min) {
      let s = e.simplify1(Le.Op.QUEST, t.flags, n, null);
      for (let r = t.min + 1; r < t.max; r++) {
        s = e.simplify1(Le.Op.QUEST, t.flags, e.concat([n, s]), null);
      }
      if (r === null) {
        return s;
      }
      r.push(s);
    }
    if (r !== null) {
      return e.concat(r);
    } else {
      return new Le(Le.Op.NO_MATCH);
    }
  }
  static concat(e) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      if (n.op === Le.Op.NO_MATCH) {
        return new Le(Le.Op.NO_MATCH);
      }
      if (n.op !== Le.Op.EMPTY_MATCH) {
        if (n.op !== Le.Op.CONCAT) {
          t.push(n);
        } else {
          for (let e = 0; e < n.subs.length; e++) {
            t.push(n.subs[e]);
          }
        }
      }
    }
    if (t.length === 0) {
      return new Le(Le.Op.EMPTY_MATCH);
    }
    if (t.length === 1) {
      return t[0];
    }
    const n = new Le(Le.Op.CONCAT);
    n.subs = t;
    return n;
  }
  static simplify1(e, t, n, r) {
    if (n.op === Le.Op.EMPTY_MATCH) {
      return n;
    }
    if (n.op === Le.Op.NO_MATCH) {
      if (e === Le.Op.PLUS) {
        return n;
      } else {
        return new Le(Le.Op.EMPTY_MATCH);
      }
    }
    if (e === n.op && (t & L.NON_GREEDY) === (n.flags & L.NON_GREEDY)) {
      return n;
    }
    if (r !== null && r.op === e && (r.flags & L.NON_GREEDY) === (t & L.NON_GREEDY) && n === r.subs[0]) {
      return r;
    }
    const s = new Le(e);
    s.flags = t;
    s.subs = [n];
    return s;
  }
};
var je = class {
  constructor(e, t) {
    this.sign = e;
    this.cls = t;
  }
};
var Qe = [48, 57];
var ze = [9, 10, 12, 13, 32, 32];
var Ye = [48, 57, 65, 90, 95, 95, 97, 122];
var We = new Map([["\\d", new je(1, Qe)], ["\\D", new je(-1, Qe)], ["\\s", new je(1, ze)], ["\\S", new je(-1, ze)], ["\\w", new je(1, Ye)], ["\\W", new je(-1, Ye)]]);
var $e = [48, 57, 65, 90, 97, 122];
var Xe = [65, 90, 97, 122];
var Ze = [0, 127];
var et = [9, 9, 32, 32];
var tt = [0, 31, 127, 127];
var nt = [48, 57];
var rt = [33, 126];
var st = [97, 122];
var it = [32, 126];
var at = [33, 47, 58, 64, 91, 96, 123, 126];
var ot = [9, 13, 32, 32];
var Bt = [65, 90];
var ut = [48, 57, 65, 90, 95, 95, 97, 122];
var ct = [48, 57, 65, 70, 97, 102];
var lt = new Map([["[:alnum:]", new je(1, $e)], ["[:^alnum:]", new je(-1, $e)], ["[:alpha:]", new je(1, Xe)], ["[:^alpha:]", new je(-1, Xe)], ["[:ascii:]", new je(1, Ze)], ["[:^ascii:]", new je(-1, Ze)], ["[:blank:]", new je(1, et)], ["[:^blank:]", new je(-1, et)], ["[:cntrl:]", new je(1, tt)], ["[:^cntrl:]", new je(-1, tt)], ["[:digit:]", new je(1, nt)], ["[:^digit:]", new je(-1, nt)], ["[:graph:]", new je(1, rt)], ["[:^graph:]", new je(-1, rt)], ["[:lower:]", new je(1, st)], ["[:^lower:]", new je(-1, st)], ["[:print:]", new je(1, it)], ["[:^print:]", new je(-1, it)], ["[:punct:]", new je(1, at)], ["[:^punct:]", new je(-1, at)], ["[:space:]", new je(1, ot)], ["[:^space:]", new je(-1, ot)], ["[:upper:]", new je(1, Bt)], ["[:^upper:]", new je(-1, Bt)], ["[:word:]", new je(1, ut)], ["[:^word:]", new je(-1, ut)], ["[:xdigit:]", new je(1, ct)], ["[:^xdigit:]", new je(-1, ct)]]);
var ht = class e {
  static charClassToString(e, t) {
    let n = "[";
    for (let r = 0; r < t; r += 2) {
      if (r > 0) {
        n += " ";
      }
      const t = e[r];
      const s = e[r + 1];
      n += t === s ? `0x${t.toString(16)}` : `0x${t.toString(16)}-0x${s.toString(16)}`;
    }
    n += "]";
    return n;
  }
  static sortRanges(e, t) {
    const n = t >> 1;
    const r = new Array(n);
    for (let i = 0; i < n; i++) {
      r[i] = i;
    }
    r.sort((t, n) => e[t * 2] - e[n * 2] || e[n * 2 + 1] - e[t * 2 + 1]);
    const s = e.slice(0, t);
    for (let i = 0; i < n; i++) {
      e[i * 2] = s[r[i] * 2];
      e[i * 2 + 1] = s[r[i] * 2 + 1];
    }
  }
  constructor(e = Be.emptyInts()) {
    this.r = e;
    this.len = e.length;
  }
  toArray() {
    if (this.r instanceof Int32Array) {
      if (this.len === this.r.length) {
        return this.r;
      } else {
        return this.r.subarray(0, this.len);
      }
    } else {
      return new Int32Array(this.len === this.r.length ? this.r : this.r.slice(0, this.len));
    }
  }
  toGrowableArray() {
    if (Array.isArray(this.r)) {
      this.r.length = this.len;
      return this.r;
    } else {
      return Array.from(this.r.subarray(0, this.len));
    }
  }
  cleanClass() {
    if (this.len < 4) {
      return this;
    }
    e.sortRanges(this.r, this.len);
    let t = 2;
    for (let e = 2; e < this.len; e += 2) {
      const n = this.r[e];
      const r = this.r[e + 1];
      if (n <= this.r[t - 1] + 1) {
        if (r > this.r[t - 1]) {
          this.r[t - 1] = r;
        }
      } else {
        this.r[t] = n;
        this.r[t + 1] = r;
        t += 2;
      }
    }
    this.len = t;
    return this;
  }
  appendLiteral(e, t) {
    if ((t & L.FOLD_CASE) !== 0) {
      return this.appendFoldedRange(e, e);
    } else {
      return this.appendRange(e, e);
    }
  }
  appendRange(e, t) {
    if (this.len > 0) {
      for (let n = 2; n <= 4; n += 2) {
        if (this.len >= n) {
          const r = this.r[this.len - n];
          const s = this.r[this.len - n + 1];
          if (e <= s + 1 && r <= t + 1) {
            if (e < r) {
              this.r[this.len - n] = e;
            }
            if (t > s) {
              this.r[this.len - n + 1] = t;
            }
            return this;
          }
        }
      }
    }
    this.r[this.len++] = e;
    this.r[this.len++] = t;
    return this;
  }
  appendFoldedRange(e, t) {
    if (e <= X.MIN_FOLD && t >= X.MAX_FOLD) {
      return this.appendRange(e, t);
    }
    if (t < X.MIN_FOLD || e > X.MAX_FOLD) {
      return this.appendRange(e, t);
    }
    if (e < X.MIN_FOLD) {
      this.appendRange(e, X.MIN_FOLD - 1);
      e = X.MIN_FOLD;
    }
    if (t > X.MAX_FOLD) {
      this.appendRange(X.MAX_FOLD + 1, t);
      t = X.MAX_FOLD;
    }
    for (let n = e; n <= t; n++) {
      this.appendRange(n, n);
      for (let e = X.simpleFold(n); e !== n; e = X.simpleFold(e)) {
        this.appendRange(e, e);
      }
    }
    return this;
  }
  appendClass(e) {
    for (let t = 0; t < e.length; t += 2) {
      this.appendRange(e[t], e[t + 1]);
    }
    return this;
  }
  appendFoldedClass(e) {
    for (let t = 0; t < e.length; t += 2) {
      this.appendFoldedRange(e[t], e[t + 1]);
    }
    return this;
  }
  appendNegatedClass(e) {
    let t = 0;
    for (let n = 0; n < e.length; n += 2) {
      const r = e[n];
      const s = e[n + 1];
      if (t <= r - 1) {
        this.appendRange(t, r - 1);
      }
      t = s + 1;
    }
    if (t <= X.MAX_RUNE) {
      this.appendRange(t, X.MAX_RUNE);
    }
    return this;
  }
  appendTable(e) {
    for (let t = 0; t < e.length; ++t) {
      const n = e.getLo(t);
      const r = e.getHi(t);
      const s = e.getStride(t);
      if (s !== 1) {
        for (let e = n; e <= r; e += s) {
          this.appendRange(e, e);
        }
      } else {
        this.appendRange(n, r);
      }
    }
    return this;
  }
  appendNegatedTable(e) {
    let t = 0;
    for (let n = 0; n < e.length; ++n) {
      const r = e.getLo(n);
      const s = e.getHi(n);
      const i = e.getStride(n);
      if (i !== 1) {
        for (let e = r; e <= s; e += i) {
          if (t <= e - 1) {
            this.appendRange(t, e - 1);
          }
          t = e + 1;
        }
      } else {
        if (t <= r - 1) {
          this.appendRange(t, r - 1);
        }
        t = s + 1;
      }
    }
    if (t <= X.MAX_RUNE) {
      this.appendRange(t, X.MAX_RUNE);
    }
    return this;
  }
  appendTableWithSign(e, t) {
    if (t < 0) {
      return this.appendNegatedTable(e);
    } else {
      return this.appendTable(e);
    }
  }
  negateClass() {
    let e = 0;
    let t = 0;
    for (let n = 0; n < this.len; n += 2) {
      const r = this.r[n];
      const s = this.r[n + 1];
      if (e <= r - 1) {
        this.r[t] = e;
        this.r[t + 1] = r - 1;
        t += 2;
      }
      e = s + 1;
    }
    this.len = t;
    if (e <= X.MAX_RUNE) {
      this.r[this.len++] = e;
      this.r[this.len++] = X.MAX_RUNE;
    }
    return this;
  }
  appendClassWithSign(e, t) {
    if (t < 0) {
      return this.appendNegatedClass(e);
    } else {
      return this.appendClass(e);
    }
  }
  appendGroup(t, n) {
    let r = t.cls;
    if (n) {
      r = new e().appendFoldedClass(r).cleanClass().toArray();
    }
    return this.appendClassWithSign(r, t.sign);
  }
  toString() {
    return e.charClassToString(this.r, this.len);
  }
};
var Ct = class {
  constructor(e) {
    this.str = e;
    this.position = 0;
  }
  pos() {
    return this.position;
  }
  rewindTo(e) {
    this.position = e;
  }
  more() {
    return this.position < this.str.length;
  }
  peek() {
    return this.str.codePointAt(this.position);
  }
  skip(e) {
    this.position += e;
  }
  skipString(e) {
    this.position += e.length;
  }
  pop() {
    const e = this.str.codePointAt(this.position);
    this.position += Be.charCount(e);
    return e;
  }
  lookingAt(e) {
    return this.str.startsWith(e, this.position);
  }
  rest() {
    return this.str.substring(this.position);
  }
  from(e) {
    return this.str.substring(e, this.position);
  }
  toString() {
    return this.rest();
  }
};
var dt = class e {
  static ERR_INTERNAL_ERROR = "regexp/syntax: internal error";
  static ERR_INVALID_CHAR_RANGE = "invalid character class range";
  static ERR_INVALID_ESCAPE = "invalid escape sequence";
  static ERR_INVALID_NAMED_CAPTURE = "invalid named capture";
  static ERR_INVALID_PERL_OP = "invalid or unsupported Perl syntax";
  static ERR_INVALID_REPEAT_OP = "invalid nested repetition operator";
  static ERR_INVALID_REPEAT_SIZE = "invalid repeat count";
  static ERR_MISSING_BRACKET = "missing closing ]";
  static ERR_MISSING_PAREN = "missing closing )";
  static ERR_MISSING_REPEAT_ARGUMENT = "missing argument to repetition operator";
  static ERR_TRAILING_BACKSLASH = "trailing backslash at end of expression";
  static ERR_DUPLICATE_NAMED_CAPTURE = "duplicate capture group name";
  static ERR_UNEXPECTED_PAREN = "unexpected )";
  static ERR_NESTING_DEPTH = "expression nests too deeply";
  static ERR_LARGE = "expression too large";
  static ERR_INVALID_CAPTURE_IN_LOOKBEHIND = "invalid capture in lookbehind";
  static MAX_HEIGHT = 1000;
  static MAX_SIZE = 1398101;
  static MAX_RUNES = 33554432;
  static ANY_TABLE = new j(new Uint32Array([0, X.MAX_RUNE, 1]));
  static ASCII_TABLE = new j(new Uint32Array([0, 127, 1]));
  static ASCII_FOLD_TABLE = new j(new Uint32Array([0, 127, 1, 383, 383, 1, 8490, 8490, 1]));
  static unicodeTable(t) {
    if (t === "Any") {
      return {
        tab: e.ANY_TABLE,
        fold: e.ANY_TABLE,
        sign: 1
      };
    } else if (t === "Ascii") {
      return {
        tab: e.ASCII_TABLE,
        fold: e.ASCII_FOLD_TABLE,
        sign: 1
      };
    } else if (t === "Assigned") {
      return {
        tab: $.CATEGORIES.get("Cn"),
        fold: $.CATEGORIES.get("Cn"),
        sign: -1
      };
    } else if (t === "Lc") {
      return {
        tab: $.CATEGORIES.get("LC"),
        fold: $.FOLD_CATEGORIES.get("LC"),
        sign: 1
      };
    } else if ($.CATEGORIES.has(t)) {
      return {
        tab: $.CATEGORIES.get(t),
        fold: $.FOLD_CATEGORIES.get(t),
        sign: 1
      };
    } else if ($.SCRIPTS.has(t)) {
      return {
        tab: $.SCRIPTS.get(t),
        fold: $.FOLD_SCRIPT.get(t),
        sign: 1
      };
    } else {
      return null;
    }
  }
  static minFoldRune(e) {
    if (e < X.MIN_FOLD || e > X.MAX_FOLD) {
      return e;
    }
    let t = e;
    const n = e;
    for (e = X.simpleFold(e); e !== n; e = X.simpleFold(e)) {
      if (t > e) {
        t = e;
      }
    }
    return t;
  }
  static leadingRegexp(e) {
    if (e.op === Le.Op.EMPTY_MATCH) {
      return null;
    }
    if (e.op === Le.Op.CONCAT && e.subs.length > 0) {
      const t = e.subs[0];
      if (t.op === Le.Op.EMPTY_MATCH) {
        return null;
      } else {
        return t;
      }
    }
    return e;
  }
  static literalRegexp(e, t) {
    const n = new Le(Le.Op.LITERAL);
    n.flags = t;
    n.runes = Be.stringToRunes(e);
    return n;
  }
  static parse(t, n) {
    return new e(t, n).parseInternal();
  }
  static parseRepeat(t) {
    const n = t.pos();
    if (!t.more() || !t.lookingAt("{")) {
      return -1;
    }
    t.skip(1);
    const r = e.parseInt(t);
    if (r === -1) {
      return -1;
    }
    if (!t.more()) {
      return -1;
    }
    let s;
    if (t.lookingAt(",")) {
      t.skip(1);
      if (!t.more()) {
        return -1;
      }
      if (t.lookingAt("}")) {
        s = -1;
      } else if ((s = e.parseInt(t)) === -1) {
        return -1;
      }
    } else {
      s = r;
    }
    if (!t.more() || !t.lookingAt("}")) {
      return -1;
    }
    t.skip(1);
    if (r < 0 || r > 1000 || s === -2 || s > 1000 || s >= 0 && r > s) {
      throw new ee(e.ERR_INVALID_REPEAT_SIZE, t.from(n));
    }
    return r << 16 | s & X.MAX_BMP;
  }
  static isValidCaptureName(e) {
    if (e.length === 0) {
      return false;
    }
    for (let t = 0; t < e.length; t++) {
      const n = e.codePointAt(t);
      if (n !== K.CODES._ && !Be.isalnum(n)) {
        return false;
      }
    }
    return true;
  }
  static parseInt(e) {
    const t = e.pos();
    while (e.more() && e.peek() >= K.CODES[0] && e.peek() <= K.CODES[9]) {
      e.skip(1);
    }
    const n = e.from(t);
    if (n.length === 0 || n.length > 1 && n.codePointAt(0) === K.CODES[0]) {
      return -1;
    } else if (n.length > 8) {
      return -2;
    } else {
      return parseInt(n, 10);
    }
  }
  static isCharClass(e) {
    return e.op === Le.Op.LITERAL && e.runes.length === 1 || e.op === Le.Op.CHAR_CLASS || e.op === Le.Op.ANY_CHAR_NOT_NL || e.op === Le.Op.ANY_CHAR;
  }
  static matchRune(e, t) {
    switch (e.op) {
      case Le.Op.LITERAL:
        return e.runes.length === 1 && e.runes[0] === t;
      case Le.Op.CHAR_CLASS:
        for (let n = 0; n < e.runes.length; n += 2) {
          if (e.runes[n] <= t && t <= e.runes[n + 1]) {
            return true;
          }
        }
        return false;
      case Le.Op.ANY_CHAR_NOT_NL:
        return t !== K.CODES["\n"];
      case Le.Op.ANY_CHAR:
        return true;
    }
    return false;
  }
  static mergeCharClass(t, n) {
    switch (t.op) {
      case Le.Op.ANY_CHAR:
        break;
      case Le.Op.ANY_CHAR_NOT_NL:
        if (e.matchRune(n, K.CODES["\n"])) {
          t.op = Le.Op.ANY_CHAR;
        }
        break;
      case Le.Op.CHAR_CLASS:
        {
          const e = new ht(Array.isArray(t.runes) ? t.runes : Array.from(t.runes));
          if (n.op === Le.Op.LITERAL) {
            e.appendLiteral(n.runes[0], n.flags);
          } else {
            e.appendClass(n.runes);
          }
          t.runes = e.toGrowableArray();
          break;
        }
      case Le.Op.LITERAL:
        if (n.runes[0] === t.runes[0] && n.flags === t.flags) {
          break;
        }
        t.op = Le.Op.CHAR_CLASS;
        t.runes = new ht().appendLiteral(t.runes[0], t.flags).appendLiteral(n.runes[0], n.flags).toGrowableArray();
    }
  }
  static parseEscape(t) {
    const n = t.pos();
    t.skip(1);
    if (!t.more()) {
      throw new ee(e.ERR_TRAILING_BACKSLASH);
    }
    let r = t.pop();
    e: switch (r) {
      case K.CODES[1]:
      case K.CODES[2]:
      case K.CODES[3]:
      case K.CODES[4]:
      case K.CODES[5]:
      case K.CODES[6]:
      case K.CODES[7]:
        if (!t.more() || t.peek() < K.CODES[0] || t.peek() > K.CODES[7]) {
          break;
        }
      case K.CODES[0]:
        {
          let e = r - K.CODES[0];
          for (let n = 1; n < 3 && !!t.more() && !(t.peek() < K.CODES[0]) && !(t.peek() > K.CODES[7]); n++) {
            e = e * 8 + t.peek() - K.CODES[0];
            t.skip(1);
          }
          return e;
        }
      case K.CODES.x:
        {
          if (!t.more()) {
            break;
          }
          r = t.pop();
          if (r === K.CODES["{"]) {
            let e = 0;
            let n = 0;
            while (true) {
              if (!t.more()) {
                break e;
              }
              r = t.pop();
              if (r === K.CODES["}"]) {
                break;
              }
              const s = Be.unhex(r);
              if (s < 0) {
                break e;
              }
              n = n * 16 + s;
              if (n > X.MAX_RUNE) {
                break e;
              }
              e++;
            }
            if (e === 0) {
              break e;
            }
            return n;
          }
          const e = Be.unhex(r);
          if (!t.more()) {
            break;
          }
          r = t.pop();
          const n = Be.unhex(r);
          if (e < 0 || n < 0) {
            break;
          }
          return e * 16 + n;
        }
      case K.CODES.a:
        return K.CODES[""];
      case K.CODES.f:
        return K.CODES["\f"];
      case K.CODES.n:
        return K.CODES["\n"];
      case K.CODES.r:
        return K.CODES["\r"];
      case K.CODES.t:
        return K.CODES["\t"];
      case K.CODES.v:
        return K.CODES[""];
      default:
        if (r <= X.MAX_ASCII && !Be.isalnum(r)) {
          return r;
        }
    }
    throw new ee(e.ERR_INVALID_ESCAPE, t.from(n));
  }
  static parseClassChar(t, n) {
    if (!t.more()) {
      throw new ee(e.ERR_MISSING_BRACKET, t.from(n));
    }
    if (t.lookingAt("\\")) {
      return e.parseEscape(t);
    } else {
      return t.pop();
    }
  }
  static hasCapture(t) {
    if (t === null) {
      return false;
    }
    if (t.op === Le.Op.CAPTURE) {
      return true;
    }
    if (t.subs) {
      for (let n of t.subs) {
        if (e.hasCapture(n)) {
          return true;
        }
      }
    }
    return false;
  }
  constructor(e, t = 0) {
    this.wholeRegexp = e;
    this.flags = t;
    this.numCap = 0;
    this.namedGroups = Object.create(null);
    this.stack = [];
    this.free = null;
    this.numRegexp = 0;
    this.numRunes = 0;
    this.repeats = 0;
    this.height = null;
    this.size = null;
    this.nlb = 0;
  }
  newRegexp(e) {
    let t = this.free;
    if (t !== null && t.subs !== null && t.subs.length > 0) {
      this.free = t.subs[0];
      t.reinit();
      t.op = e;
    } else {
      t = new Le(e);
      this.numRegexp += 1;
    }
    return t;
  }
  reuse(e) {
    if (this.height !== null && this.height.has(e)) {
      this.height.delete(e);
    }
    if (e.subs !== null && e.subs.length > 0) {
      e.subs[0] = this.free;
    }
    this.free = e;
  }
  checkLimits(t) {
    if (this.numRunes > e.MAX_RUNES) {
      throw new ee(e.ERR_LARGE);
    }
    this.checkSize(t);
    this.checkHeight(t);
  }
  checkSize(t) {
    if (this.size === null) {
      if (this.repeats === 0) {
        this.repeats = 1;
      }
      if (t.op === Le.Op.REPEAT) {
        let n = t.max;
        if (n === -1) {
          n = t.min;
        }
        if (n <= 0) {
          n = 1;
        }
        if (n > Math.floor(e.MAX_SIZE / this.repeats)) {
          this.repeats = e.MAX_SIZE;
        } else {
          this.repeats *= n;
        }
      }
      if (this.numRegexp < Math.floor(e.MAX_SIZE / this.repeats)) {
        return;
      }
      this.size = new Map();
      for (let e of this.stack) {
        this.checkSize(e);
      }
    }
    if (this.calcSize(t, true) > e.MAX_SIZE) {
      throw new ee(e.ERR_LARGE);
    }
  }
  calcSize(e, t = false) {
    if (!t && this.size !== null && this.size.has(e)) {
      return this.size.get(e);
    }
    let n = 0;
    switch (e.op) {
      case Le.Op.LITERAL:
        n = e.runes.length;
        break;
      case Le.Op.PLB:
      case Le.Op.NLB:
      case Le.Op.CAPTURE:
      case Le.Op.STAR:
        n = 2 + this.calcSize(e.subs[0]);
        break;
      case Le.Op.PLUS:
      case Le.Op.QUEST:
        n = 1 + this.calcSize(e.subs[0]);
        break;
      case Le.Op.CONCAT:
        for (let t of e.subs) {
          n += this.calcSize(t);
        }
        break;
      case Le.Op.ALTERNATE:
        for (let t of e.subs) {
          n += this.calcSize(t);
        }
        if (e.subs.length > 1) {
          n = n + e.subs.length - 1;
        }
        break;
      case Le.Op.REPEAT:
        {
          let t = this.calcSize(e.subs[0]);
          if (e.max === -1) {
            n = e.min === 0 ? 2 + t : 1 + e.min * t;
            break;
          }
          n = e.max * t + (e.max - e.min);
          break;
        }
    }
    n = Math.max(1, n);
    if (this.size === null) {
      this.size = new Map();
    }
    this.size.set(e, n);
    return n;
  }
  checkHeight(t) {
    if (!(this.numRegexp < e.MAX_HEIGHT)) {
      if (this.height === null) {
        this.height = new Map();
        for (let e of this.stack) {
          this.checkHeight(e);
        }
      }
      if (this.calcHeight(t, true) > e.MAX_HEIGHT) {
        throw new ee(e.ERR_NESTING_DEPTH);
      }
    }
  }
  calcHeight(e, t = false) {
    if (!t && this.height !== null && this.height.has(e)) {
      return this.height.get(e);
    }
    let n = 1;
    for (let r of e.subs) {
      const e = this.calcHeight(r);
      if (n < 1 + e) {
        n = 1 + e;
      }
    }
    if (this.height === null) {
      this.height = new Map();
    }
    this.height.set(e, n);
    return n;
  }
  pop() {
    return this.stack.pop();
  }
  popToPseudo() {
    const e = this.stack.length;
    let t = e;
    while (t > 0 && !Le.isPseudoOp(this.stack[t - 1].op)) {
      t--;
    }
    return this.stack.splice(t, e - t);
  }
  push(e) {
    this.numRunes += e.runes.length;
    if (e.op === Le.Op.CHAR_CLASS && e.runes.length === 2 && e.runes[0] === e.runes[1]) {
      if (this.maybeConcat(e.runes[0], this.flags & ~L.FOLD_CASE)) {
        return null;
      }
      e.op = Le.Op.LITERAL;
      e.runes = [e.runes[0]];
      e.flags = this.flags & ~L.FOLD_CASE;
    } else if (e.op === Le.Op.CHAR_CLASS && e.runes.length === 4 && e.runes[0] === e.runes[1] && e.runes[2] === e.runes[3] && X.simpleFold(e.runes[0]) === e.runes[2] && X.simpleFold(e.runes[2]) === e.runes[0] || e.op === Le.Op.CHAR_CLASS && e.runes.length === 2 && e.runes[0] + 1 === e.runes[1] && X.simpleFold(e.runes[0]) === e.runes[1] && X.simpleFold(e.runes[1]) === e.runes[0]) {
      if (this.maybeConcat(e.runes[0], this.flags | L.FOLD_CASE)) {
        return null;
      }
      e.op = Le.Op.LITERAL;
      e.runes = [e.runes[0]];
      e.flags = this.flags | L.FOLD_CASE;
    } else {
      this.maybeConcat(-1, 0);
    }
    this.stack.push(e);
    this.checkLimits(e);
    return e;
  }
  maybeConcat(e, t) {
    const n = this.stack.length;
    if (n < 2) {
      return false;
    }
    const r = this.stack[n - 1];
    const s = this.stack[n - 2];
    if (r.op !== Le.Op.LITERAL || s.op !== Le.Op.LITERAL || (r.flags & L.FOLD_CASE) !== (s.flags & L.FOLD_CASE)) {
      return false;
    }
    if (!Array.isArray(s.runes)) {
      s.runes = Array.from(s.runes);
    }
    for (let i = 0; i < r.runes.length; i++) {
      s.runes.push(r.runes[i]);
    }
    if (e >= 0) {
      r.runes = [e];
      r.flags = t;
      return true;
    } else {
      this.pop();
      this.reuse(r);
      return false;
    }
  }
  newLiteral(t, n) {
    const r = this.newRegexp(Le.Op.LITERAL);
    r.flags = n;
    if ((n & L.FOLD_CASE) !== 0) {
      t = e.minFoldRune(t);
    }
    r.runes = [t];
    return r;
  }
  literal(e) {
    this.push(this.newLiteral(e, this.flags));
  }
  op(e) {
    const t = this.newRegexp(e);
    t.flags = this.flags;
    return this.push(t);
  }
  repeat(t, n, r, s, i, a) {
    let o = this.flags;
    if ((o & L.PERL_X) !== 0 && (i.more() && i.lookingAt("?") && (i.skip(1), o ^= L.NON_GREEDY), a !== -1)) {
      throw new ee(e.ERR_INVALID_REPEAT_OP, i.from(a));
    }
    const B = this.stack.length;
    if (B === 0) {
      throw new ee(e.ERR_MISSING_REPEAT_ARGUMENT, i.from(s));
    }
    const u = this.stack[B - 1];
    if (Le.isPseudoOp(u.op)) {
      throw new ee(e.ERR_MISSING_REPEAT_ARGUMENT, i.from(s));
    }
    const c = this.newRegexp(t);
    c.min = n;
    c.max = r;
    c.flags = o;
    c.subs = [u];
    this.stack[B - 1] = c;
    this.checkLimits(c);
    if (t === Le.Op.REPEAT && (n >= 2 || r >= 2) && !this.repeatIsValid(c, 1000)) {
      throw new ee(e.ERR_INVALID_REPEAT_SIZE, i.from(s));
    }
  }
  repeatIsValid(e, t) {
    if (e.op === Le.Op.REPEAT) {
      let n = e.max;
      if (n === 0) {
        return true;
      }
      if (n < 0) {
        n = e.min;
      }
      if (n > t) {
        return false;
      }
      if (n > 0) {
        t = Math.trunc(t / n);
      }
    }
    for (let n of e.subs) {
      if (!this.repeatIsValid(n, t)) {
        return false;
      }
    }
    return true;
  }
  concat() {
    this.maybeConcat(-1, 0);
    const e = this.popToPseudo();
    if (e.length === 0) {
      return this.push(this.newRegexp(Le.Op.EMPTY_MATCH));
    } else {
      return this.push(this.collapse(e, Le.Op.CONCAT));
    }
  }
  alternate() {
    const e = this.popToPseudo();
    if (e.length > 0) {
      this.cleanAlt(e[e.length - 1]);
    }
    if (e.length === 0) {
      return this.push(this.newRegexp(Le.Op.NO_MATCH));
    } else {
      return this.push(this.collapse(e, Le.Op.ALTERNATE));
    }
  }
  cleanAlt(e) {
    if (e.op === Le.Op.CHAR_CLASS) {
      e.runes = new ht(Array.from(e.runes)).cleanClass().toArray();
      if (e.runes.length === 2 && e.runes[0] === 0 && e.runes[1] === X.MAX_RUNE) {
        e.runes = new Int32Array(0);
        e.op = Le.Op.ANY_CHAR;
      } else if (e.runes.length === 4 && e.runes[0] === 0 && e.runes[1] === K.CODES["\n"] - 1 && e.runes[2] === K.CODES["\n"] + 1 && e.runes[3] === X.MAX_RUNE) {
        e.runes = new Int32Array(0);
        e.op = Le.Op.ANY_CHAR_NOT_NL;
      }
    }
  }
  collapse(e, t) {
    if (e.length === 1) {
      return e[0];
    }
    let n = 0;
    for (let a of e) {
      n += a.op === t ? a.subs.length : 1;
    }
    let r = new Array(n).fill(null);
    let s = 0;
    for (let a of e) {
      if (a.op === t) {
        for (let e = 0; e < a.subs.length; e++) {
          r[s++] = a.subs[e];
        }
        this.reuse(a);
      } else {
        r[s++] = a;
      }
    }
    let i = this.newRegexp(t);
    i.subs = r;
    if (t === Le.Op.ALTERNATE && (i.subs = this.factor(i.subs), i.subs.length === 1)) {
      const e = i;
      i = i.subs[0];
      this.reuse(e);
    }
    return i;
  }
  factor(t) {
    if (t.length < 2) {
      return t;
    }
    let n = 0;
    let r = t.length;
    let s = 0;
    let i = null;
    let a = 0;
    let o = 0;
    let B = 0;
    for (let e = 0; e <= r; e++) {
      let u = null;
      let c = 0;
      let l = 0;
      if (e < r) {
        let r = t[n + e];
        if (r.op === Le.Op.CONCAT && r.subs.length > 0) {
          r = r.subs[0];
        }
        if (r.op === Le.Op.LITERAL) {
          u = r.runes;
          c = r.runes.length;
          l = r.flags & L.FOLD_CASE;
        }
        if (l === o) {
          let e = 0;
          while (e < a && e < c && i[e] === u[e]) {
            e++;
          }
          if (e > 0) {
            a = e;
            continue;
          }
        }
      }
      if (e === B) ;else if (e === B + 1) {
        t[s++] = t[n + B];
      } else {
        const r = this.newRegexp(Le.Op.LITERAL);
        r.flags = o;
        r.runes = i.slice(0, a);
        for (let s = B; s < e; s++) {
          t[n + s] = this.removeLeadingString(t[n + s], a);
          this.checkLimits(t[n + s]);
        }
        const u = this.collapse(t.slice(n + B, n + e), Le.Op.ALTERNATE);
        const c = this.newRegexp(Le.Op.CONCAT);
        c.subs = [r, u];
        t[s++] = c;
      }
      B = e;
      i = u;
      a = c;
      o = l;
    }
    r = s;
    n = 0;
    B = 0;
    s = 0;
    let u = null;
    for (let c = 0; c <= r; c++) {
      let i = null;
      if (!(c < r) || !(i = e.leadingRegexp(t[n + c]), u !== null && u.equals(i) && (e.isCharClass(u) || u.op === Le.Op.REPEAT && u.min === u.max && e.isCharClass(u.subs[0])))) {
        if (c === B) ;else if (c === B + 1) {
          t[s++] = t[n + B];
        } else {
          const e = u;
          for (let s = B; s < c; s++) {
            const e = s !== B;
            t[n + s] = this.removeLeadingRegexp(t[n + s], e);
            this.checkLimits(t[n + s]);
          }
          const r = this.collapse(t.slice(n + B, n + c), Le.Op.ALTERNATE);
          const i = this.newRegexp(Le.Op.CONCAT);
          i.subs = [e, r];
          t[s++] = i;
        }
        B = c;
        u = i;
      }
    }
    r = s;
    n = 0;
    B = 0;
    s = 0;
    for (let c = 0; c <= r; c++) {
      if (!(c < r) || !e.isCharClass(t[n + c])) {
        if (c === B) ;else if (c === B + 1) {
          t[s++] = t[n + B];
        } else {
          let r = B;
          for (let e = B + 1; e < c; e++) {
            const s = t[n + r];
            const i = t[n + e];
            if (s.op < i.op || s.op === i.op && (s.runes !== null ? s.runes.length : 0) < (i.runes !== null ? i.runes.length : 0)) {
              r = e;
            }
          }
          const i = t[n + B];
          t[n + B] = t[n + r];
          t[n + r] = i;
          for (let s = B + 1; s < c; s++) {
            e.mergeCharClass(t[n + B], t[n + s]);
            this.reuse(t[n + s]);
          }
          this.cleanAlt(t[n + B]);
          t[s++] = t[n + B];
        }
        if (c < r) {
          t[s++] = t[n + c];
        }
        B = c + 1;
      }
    }
    r = s;
    n = 0;
    B = 0;
    s = 0;
    for (let e = 0; e < r; ++e) {
      if (!(e + 1 < r) || t[n + e].op !== Le.Op.EMPTY_MATCH || t[n + e + 1].op !== Le.Op.EMPTY_MATCH) {
        t[s++] = t[n + e];
      }
    }
    r = s;
    n = 0;
    return t.slice(n, r);
  }
  removeLeadingString(e, t) {
    if (e.op === Le.Op.CONCAT && e.subs.length > 0) {
      const n = this.removeLeadingString(e.subs[0], t);
      e.subs[0] = n;
      if (n.op === Le.Op.EMPTY_MATCH) {
        this.reuse(n);
        switch (e.subs.length) {
          case 0:
          case 1:
            e.op = Le.Op.EMPTY_MATCH;
            e.subs = Le.emptySubs();
            break;
          case 2:
            {
              const t = e;
              e = e.subs[1];
              this.reuse(t);
              break;
            }
          default:
            e.subs = e.subs.slice(1, e.subs.length);
        }
      }
      return e;
    }
    if (e.op === Le.Op.LITERAL) {
      e.runes = e.runes.slice(t, e.runes.length);
      if (e.runes.length === 0) {
        e.op = Le.Op.EMPTY_MATCH;
      }
    }
    return e;
  }
  removeLeadingRegexp(e, t) {
    if (e.op === Le.Op.CONCAT && e.subs.length > 0) {
      if (t) {
        this.reuse(e.subs[0]);
      }
      e.subs = e.subs.slice(1, e.subs.length);
      switch (e.subs.length) {
        case 0:
          e.op = Le.Op.EMPTY_MATCH;
          e.subs = Le.emptySubs();
          break;
        case 1:
          {
            const t = e;
            e = e.subs[0];
            this.reuse(t);
            break;
          }
      }
      return e;
    }
    if (t) {
      this.reuse(e);
    }
    return this.newRegexp(Le.Op.EMPTY_MATCH);
  }
  parseInternal() {
    if ((this.flags & L.LITERAL) !== 0) {
      return e.literalRegexp(this.wholeRegexp, this.flags);
    }
    let t = -1;
    let n = -1;
    let r = -1;
    const s = new Ct(this.wholeRegexp);
    while (s.more()) {
      let i = -1;
      e: switch (s.peek()) {
        case K.CODES["("]:
          if ((this.flags & L.LOOKBEHIND) !== 0) {
            if (s.lookingAt("(?<=")) {
              this.parsePosLookBehind();
              s.skip(4);
              break;
            }
            if (s.lookingAt("(?<!")) {
              this.parseNegLookBehind();
              s.skip(4);
              break;
            }
          }
          if ((this.flags & L.PERL_X) !== 0 && s.lookingAt("(?")) {
            this.parsePerlFlags(s);
            break;
          }
          this.op(Le.Op.LEFT_PAREN).cap = ++this.numCap;
          s.skip(1);
          break;
        case K.CODES["|"]:
          this.parseVerticalBar();
          s.skip(1);
          break;
        case K.CODES[")"]:
          this.parseRightParen();
          s.skip(1);
          break;
        case K.CODES["^"]:
          if ((this.flags & L.ONE_LINE) !== 0) {
            this.op(Le.Op.BEGIN_TEXT);
          } else {
            this.op(Le.Op.BEGIN_LINE);
          }
          s.skip(1);
          break;
        case K.CODES.$:
          if ((this.flags & L.ONE_LINE) !== 0) {
            this.op(Le.Op.END_TEXT).flags |= L.WAS_DOLLAR;
          } else {
            this.op(Le.Op.END_LINE);
          }
          s.skip(1);
          break;
        case K.CODES["."]:
          if ((this.flags & L.DOT_NL) !== 0) {
            this.op(Le.Op.ANY_CHAR);
          } else {
            this.op(Le.Op.ANY_CHAR_NOT_NL);
          }
          s.skip(1);
          break;
        case K.CODES["["]:
          this.parseClass(s);
          break;
        case K.CODES["*"]:
        case K.CODES["+"]:
        case K.CODES["?"]:
          {
            i = s.pos();
            let e = null;
            switch (s.pop()) {
              case K.CODES["*"]:
                e = Le.Op.STAR;
                break;
              case K.CODES["+"]:
                e = Le.Op.PLUS;
                break;
              case K.CODES["?"]:
                e = Le.Op.QUEST;
            }
            this.repeat(e, n, r, i, s, t);
            break;
          }
        case K.CODES["{"]:
          {
            const a = s.pos();
            const o = e.parseRepeat(s);
            if (o < 0) {
              s.rewindTo(a);
              this.literal(s.pop());
              break;
            }
            i = a;
            n = o >> 16;
            r = (o & X.MAX_BMP) << 16 >> 16;
            this.repeat(Le.Op.REPEAT, n, r, i, s, t);
            break;
          }
        case K.CODES["\\"]:
          {
            const t = s.pos();
            s.skip(1);
            if ((this.flags & L.PERL_X) !== 0 && s.more()) {
              switch (s.pop()) {
                case K.CODES.A:
                  this.op(Le.Op.BEGIN_TEXT);
                  break e;
                case K.CODES.b:
                  this.op(Le.Op.WORD_BOUNDARY);
                  break e;
                case K.CODES.B:
                  this.op(Le.Op.NO_WORD_BOUNDARY);
                  break e;
                case K.CODES.C:
                  throw new ee(e.ERR_INVALID_ESCAPE, "\\C");
                case K.CODES.Q:
                  {
                    let e = s.rest();
                    const t = e.indexOf("\\E");
                    if (t >= 0) {
                      e = e.substring(0, t);
                      s.skipString(e);
                      s.skipString("\\E");
                    } else {
                      s.skipString(e);
                    }
                    let n = 0;
                    while (n < e.length) {
                      const t = e.codePointAt(n);
                      this.literal(t);
                      n += Be.charCount(t);
                    }
                    break e;
                  }
                case K.CODES.z:
                  this.op(Le.Op.END_TEXT);
                  break e;
                default:
                  s.rewindTo(t);
              }
            } else {
              s.rewindTo(t);
            }
            const n = this.newRegexp(Le.Op.CHAR_CLASS);
            n.flags = this.flags;
            if (s.lookingAt("\\p") || s.lookingAt("\\P")) {
              const e = new ht();
              if (this.parseUnicodeClass(s, e)) {
                n.runes = e.toArray();
                this.push(n);
                break e;
              }
            }
            const r = new ht();
            if (this.parsePerlClassEscape(s, r)) {
              n.runes = r.toArray();
              this.push(n);
              break e;
            }
            s.rewindTo(t);
            this.reuse(n);
            this.literal(e.parseEscape(s));
            break;
          }
        default:
          this.literal(s.pop());
      }
      t = i;
    }
    this.concat();
    if (this.swapVerticalBar()) {
      this.pop();
    }
    this.alternate();
    if (this.stack.length !== 1) {
      throw new ee(e.ERR_MISSING_PAREN, this.wholeRegexp);
    }
    this.stack[0].namedGroups = this.namedGroups;
    return this.stack[0];
  }
  parsePerlFlags(t) {
    const n = t.pos();
    const r = t.rest();
    if (r.startsWith("(?P<") || r.startsWith("(?<")) {
      const n = r.charAt(2) === "P" ? 4 : 3;
      const s = r.indexOf(">");
      if (s < 0) {
        throw new ee(e.ERR_INVALID_NAMED_CAPTURE, r);
      }
      const i = r.substring(n, s);
      t.skipString(i);
      t.skip(n + 1);
      if (!e.isValidCaptureName(i)) {
        throw new ee(e.ERR_INVALID_NAMED_CAPTURE, r.substring(0, s + 1));
      }
      const a = this.op(Le.Op.LEFT_PAREN);
      a.cap = ++this.numCap;
      if (this.namedGroups[i]) {
        throw new ee(e.ERR_DUPLICATE_NAMED_CAPTURE, i);
      }
      this.namedGroups[i] = this.numCap;
      a.name = i;
      return;
    }
    t.skip(2);
    let s = this.flags;
    let i = 1;
    let a = false;
    e: while (t.more()) {
      const e = t.pop();
      switch (e) {
        case K.CODES.i:
          s |= L.FOLD_CASE;
          a = true;
          break;
        case K.CODES.m:
          s &= ~L.ONE_LINE;
          a = true;
          break;
        case K.CODES.s:
          s |= L.DOT_NL;
          a = true;
          break;
        case K.CODES.U:
          s |= L.NON_GREEDY;
          a = true;
          break;
        case K.CODES["-"]:
          if (i < 0) {
            break e;
          }
          i = -1;
          s = ~s;
          a = false;
          break;
        case K.CODES[":"]:
        case K.CODES[")"]:
          if (i < 0) {
            if (!a) {
              break e;
            }
            s = ~s;
          }
          if (e === K.CODES[":"]) {
            this.op(Le.Op.LEFT_PAREN);
          }
          this.flags = s;
          return;
        default:
          break e;
      }
    }
    throw new ee(e.ERR_INVALID_PERL_OP, t.from(n));
  }
  parsePosLookBehind() {
    const e = this.newRegexp(Le.Op.LEFT_PAREN);
    e.flags = this.flags;
    e.lb = ++this.nlb;
    return this.push(e);
  }
  parseNegLookBehind() {
    const e = this.newRegexp(Le.Op.LEFT_PAREN);
    e.flags = this.flags;
    e.lb = -++this.nlb;
    return this.push(e);
  }
  parseVerticalBar() {
    this.concat();
    if (!this.swapVerticalBar()) {
      this.op(Le.Op.VERTICAL_BAR);
    }
  }
  swapVerticalBar() {
    const t = this.stack.length;
    if (t >= 3 && this.stack[t - 2].op === Le.Op.VERTICAL_BAR && e.isCharClass(this.stack[t - 1]) && e.isCharClass(this.stack[t - 3])) {
      let n = this.stack[t - 1];
      let r = this.stack[t - 3];
      if (n.op > r.op) {
        const e = r;
        r = n;
        n = e;
        this.stack[t - 3] = r;
      }
      e.mergeCharClass(r, n);
      this.reuse(n);
      this.pop();
      return true;
    }
    if (t >= 2) {
      const e = this.stack[t - 1];
      const n = this.stack[t - 2];
      if (n.op === Le.Op.VERTICAL_BAR) {
        if (t >= 3) {
          this.cleanAlt(this.stack[t - 3]);
        }
        this.stack[t - 2] = e;
        this.stack[t - 1] = n;
        return true;
      }
    }
    return false;
  }
  parseRightParen() {
    this.concat();
    if (this.swapVerticalBar()) {
      this.pop();
    }
    this.alternate();
    if (this.stack.length < 2) {
      throw new ee(e.ERR_UNEXPECTED_PAREN, this.wholeRegexp);
    }
    const t = this.pop();
    const n = this.pop();
    if (n.op !== Le.Op.LEFT_PAREN) {
      throw new ee(e.ERR_UNEXPECTED_PAREN, this.wholeRegexp);
    }
    this.flags = n.flags;
    if (n.lb !== 0) {
      if (e.hasCapture(t)) {
        throw new ee(e.ERR_INVALID_CAPTURE_IN_LOOKBEHIND, this.wholeRegexp);
      }
      if (n.lb > 0) {
        n.op = Le.Op.PLB;
      } else {
        n.op = Le.Op.NLB;
      }
      n.subs = [t];
      this.push(n);
      return;
    }
    if (n.cap === 0) {
      this.push(t);
    } else {
      n.op = Le.Op.CAPTURE;
      n.subs = [t];
      this.push(n);
    }
  }
  parsePerlClassEscape(e, t) {
    const n = e.pos();
    if ((this.flags & L.PERL_X) === 0 || !e.more() || e.pop() !== K.CODES["\\"] || !e.more()) {
      return false;
    }
    e.pop();
    const r = e.from(n);
    const s = We.has(r) ? We.get(r) : null;
    return s !== null && (t.appendGroup(s, (this.flags & L.FOLD_CASE) !== 0), true);
  }
  parseNamedClass(t, n) {
    const r = t.rest();
    const s = r.indexOf(":]");
    if (s < 0) {
      return false;
    }
    const i = r.substring(0, s + 2);
    t.skipString(i);
    const a = lt.has(i) ? lt.get(i) : null;
    if (a === null) {
      throw new ee(e.ERR_INVALID_CHAR_RANGE, i);
    }
    n.appendGroup(a, (this.flags & L.FOLD_CASE) !== 0);
    return true;
  }
  parseUnicodeClass(t, n) {
    const r = t.pos();
    if ((this.flags & L.UNICODE_GROUPS) === 0 || !t.lookingAt("\\p") && !t.lookingAt("\\P")) {
      return false;
    }
    t.skip(1);
    let s;
    let i = 1;
    let a = t.pop();
    if (a === K.CODES.P) {
      i = -1;
    }
    if (!t.more()) {
      t.rewindTo(r);
      throw new ee(e.ERR_INVALID_CHAR_RANGE, t.rest());
    }
    a = t.pop();
    if (a !== K.CODES["{"]) {
      s = Be.runeToString(a);
    } else {
      const n = t.rest();
      const i = n.indexOf("}");
      if (i < 0) {
        t.rewindTo(r);
        throw new ee(e.ERR_INVALID_CHAR_RANGE, t.rest());
      }
      s = n.substring(0, i);
      t.skipString(s);
      t.skip(1);
    }
    if (s.length !== 0 && s.codePointAt(0) === K.CODES["^"]) {
      i = 0 - i;
      s = s.substring(1);
    }
    const o = e.unicodeTable(s);
    if (o === null) {
      throw new ee(e.ERR_INVALID_CHAR_RANGE, t.from(r));
    }
    if (o.sign < 0) {
      i = 0 - i;
    }
    const B = o.tab;
    const u = o.fold;
    if ((this.flags & L.FOLD_CASE) === 0 || u === null) {
      n.appendTableWithSign(B, i);
    } else {
      const e = new ht().appendTable(B).appendTable(u).cleanClass().toArray();
      n.appendClassWithSign(Array.from(e), i);
    }
    return true;
  }
  parseClass(t) {
    const n = t.pos();
    t.skip(1);
    const r = this.newRegexp(Le.Op.CHAR_CLASS);
    r.flags = this.flags;
    const s = new ht();
    let i = 1;
    if (t.more() && t.lookingAt("^")) {
      i = -1;
      t.skip(1);
      if ((this.flags & L.CLASS_NL) === 0) {
        s.appendRange(K.CODES["\n"], K.CODES["\n"]);
      }
    }
    let a = true;
    while (!t.more() || t.peek() !== K.CODES["]"] || a) {
      if (t.more() && t.lookingAt("-") && (this.flags & L.PERL_X) === 0 && !a) {
        const r = t.rest();
        if (r === "-" || !r.startsWith("-]")) {
          t.rewindTo(n);
          throw new ee(e.ERR_INVALID_CHAR_RANGE, t.rest());
        }
      }
      a = false;
      const r = t.pos();
      if (t.lookingAt("[:")) {
        if (this.parseNamedClass(t, s)) {
          continue;
        }
        t.rewindTo(r);
      }
      if (this.parseUnicodeClass(t, s)) {
        continue;
      }
      if (this.parsePerlClassEscape(t, s)) {
        continue;
      }
      t.rewindTo(r);
      const i = e.parseClassChar(t, n);
      let o = i;
      if (t.more() && t.lookingAt("-")) {
        t.skip(1);
        if (t.more() && t.lookingAt("]")) {
          t.skip(-1);
        } else {
          o = e.parseClassChar(t, n);
          if (o < i) {
            throw new ee(e.ERR_INVALID_CHAR_RANGE, t.from(r));
          }
        }
      }
      if ((this.flags & L.FOLD_CASE) === 0) {
        s.appendRange(i, o);
      } else {
        s.appendFoldedRange(i, o);
      }
    }
    t.skip(1);
    s.cleanClass();
    if (i < 0) {
      s.negateClass();
    }
    r.runes = s.toArray();
    this.push(r);
  }
};
var ft = class e {
  static initTest(t) {
    const n = e.compile(t);
    const r = new e(n.expr, n.prog, n.numSubexp, n.longest);
    r.cond = n.cond;
    r.prefix = n.prefix;
    r.prefixUTF8 = n.prefixUTF8;
    r.prefixComplete = n.prefixComplete;
    r.prefixRune = n.prefixRune;
    r.prefilter = n.prefilter;
    r.namedGroups = n.namedGroups;
    return r;
  }
  static compile(t) {
    return e.compileImpl(t, L.PERL, false);
  }
  static compilePOSIX(t) {
    return e.compileImpl(t, L.POSIX, true);
  }
  static compileImpl(t, n, r) {
    let s = dt.parse(t, n);
    const i = s.maxCap();
    const a = s.namedGroups;
    s = Ke.simplify(s);
    const o = Pe.build(s);
    const B = Je.compileRegexp(s);
    const u = new e(t, B, i, r);
    u.prefilter = o.type === Ge.Type.NONE ? null : o;
    const [c, l] = B.prefix();
    u.prefixComplete = c;
    u.prefix = l;
    u.prefixUTF8 = Be.stringToUtf8ByteArray(u.prefix);
    if (u.prefix.length > 0) {
      u.prefixRune = u.prefix.codePointAt(0);
    }
    u.namedGroups = a;
    return u;
  }
  static match(t, n) {
    return e.compile(t).match(n);
  }
  constructor(e, t, n = 0, r = 0) {
    this.expr = e;
    this.prog = t;
    this.numSubexp = n;
    this.longest = r;
    this.cond = t.startCond();
    this.prefix = null;
    this.prefixUTF8 = null;
    this.prefixComplete = false;
    this.prefixRune = 0;
    this.namedGroups = Object.create(null);
    this.machinePool = [];
    this.lazyDFA = null;
    this.onepass = xe.compile(this.prog);
    this.prefilter = null;
  }
  get dfa() {
    if (this.lazyDFA === null) {
      this.lazyDFA = new be(this.prog);
    }
    return this.lazyDFA;
  }
  matchPrefixComplete(e, t, n, r) {
    if ((n === L.ANCHOR_START || n === L.ANCHOR_BOTH) && t !== 0) {
      return null;
    }
    let s = -1;
    let i = -1;
    const a = e.prefixLength(this);
    if (n === L.UNANCHORED) {
      const n = e.index(this, t);
      if (n < 0) {
        return null;
      }
      s = t + n;
      i = s + a;
    } else if (n === L.ANCHOR_BOTH) {
      if (e.endPos() !== a) {
        return null;
      }
      if (e.index(this, 0) !== 0) {
        return null;
      }
      s = 0;
      i = a;
    } else if (n === L.ANCHOR_START) {
      if (e.index(this, 0) !== 0) {
        return null;
      }
      s = 0;
      i = a;
    }
    if (s < 0) {
      return null;
    }
    if (r > 0) {
      const e = new Int32Array(r).fill(-1);
      e[0] = s;
      e[1] = i;
      return Array.from(e);
    }
    return [];
  }
  createLookbehindState() {
    if (this.prog.numLb > 0) {
      return new we(this.prog);
    } else {
      return null;
    }
  }
  executeEngine(e, t, n, r, s = null) {
    if (this.prefixComplete && (r === 0 || this.numSubexp === 0)) {
      return this.matchPrefixComplete(e, t, n, r);
    }
    if (this.prefilter !== null && n === L.UNANCHORED && !this.prefilter.eval(e, t)) {
      return null;
    }
    if (this.onepass !== null) {
      return xe.execute(this, e, t, n, r);
    }
    if (r > 0) {
      if (this.prog.numLb === 0 && e.endPos() <= Fe.maxBitStateLen(this.prog)) {
        return Fe.execute(this, e, t, n, r);
      } else {
        return this.doExecuteNFA(e, t, n, r, s);
      }
    }
    if (this.prog.numLb === 0) {
      const s = this.dfa.match(e, t, n);
      if (s !== null) {
        if (s) {
          return [];
        } else {
          return null;
        }
      }
      if (e.endPos() <= Fe.maxBitStateLen(this.prog)) {
        return Fe.execute(this, e, t, n, r);
      }
    }
    return this.doExecuteNFA(e, t, n, r, s);
  }
  numberOfCapturingGroups() {
    return this.numSubexp;
  }
  numberOfInstructions() {
    return this.prog.numInst();
  }
  get() {
    if (this.machinePool.length > 0) {
      return this.machinePool.pop();
    } else {
      return null;
    }
  }
  reset() {
    this.machinePool.length = 0;
  }
  put(e) {
    this.machinePool.push(e);
  }
  toString() {
    return this.expr;
  }
  doExecuteNFA(e, t, n, r, s = null) {
    let i = this.get();
    i ||= ye.fromRE2(this);
    i.init(r);
    const a = i.match(e, t, n, s) ? i.submatches() : null;
    this.put(i);
    return a;
  }
  match(e) {
    return this.executeEngine(ge.fromUTF16(e), 0, L.UNANCHORED, 0) !== null;
  }
  matchWithGroup(e, t, n, r, s, i = null) {
    if (!(e instanceof ce)) {
      e = Be.isByteArray(e) ? Ce.utf8(e) : Ce.utf16(e);
    }
    return this.matchMachineInput(e, t, n, r, s, i);
  }
  matchMachineInput(e, t, n, r, s, i = null) {
    if (t > n) {
      return [false, null];
    }
    const a = e.isUTF16Encoding() ? ge.fromUTF16(e.asCharSequence(), 0, n) : ge.fromUTF8(e.asBytes(), 0, n);
    const o = this.executeEngine(a, t, r, s * 2, i);
    if (o === null) {
      return [false, null];
    } else {
      return [true, o];
    }
  }
  matchUTF8(e) {
    return this.executeEngine(ge.fromUTF8(e), 0, L.UNANCHORED, 0) !== null;
  }
  replaceAll(e, t) {
    return this.replaceAllFunc(e, () => t, e.length * 2 + 1);
  }
  replaceFirst(e, t) {
    return this.replaceAllFunc(e, () => t, 1);
  }
  replaceAllFunc(e, t, n) {
    let r = 0;
    let s = 0;
    let i = "";
    const a = ge.fromUTF16(e);
    const o = this.createLookbehindState();
    let B = 0;
    while (s <= e.length) {
      const u = this.executeEngine(a, s, L.UNANCHORED, 2, o);
      if (u === null || u.length === 0) {
        break;
      }
      i += e.substring(r, u[0]);
      if (u[1] > r || u[0] === 0) {
        i += t(e.substring(u[0], u[1]));
        B++;
      }
      r = u[1];
      const c = a.step(s) & 7;
      if (s + c > u[1]) {
        s += c;
      } else if (s + 1 > u[1]) {
        s++;
      } else {
        s = u[1];
      }
      if (B >= n) {
        break;
      }
    }
    i += e.substring(r);
    return i;
  }
  pad(e) {
    if (e === null) {
      return null;
    }
    let t = (1 + this.numSubexp) * 2;
    if (e.length < t) {
      let n = new Array(t).fill(-1);
      for (let t = 0; t < e.length; t++) {
        n[t] = e[t];
      }
      e = n;
    }
    return e;
  }
  allMatches(e, t, n = e => e) {
    let r = [];
    const s = e.endPos();
    if (t < 0) {
      t = s + 1;
    }
    let i = 0;
    let a = 0;
    let o = -1;
    const B = this.createLookbehindState();
    while (a < t && i <= s) {
      const t = this.executeEngine(e, i, L.UNANCHORED, this.prog.numCap, B);
      if (t === null || t.length === 0) {
        break;
      }
      let u = true;
      if (t[1] === i) {
        if (t[0] === o) {
          u = false;
        }
        const n = e.step(i);
        if (n < 0) {
          i = s + 1;
        } else {
          i += n & 7;
        }
      } else {
        i = t[1];
      }
      o = t[1];
      if (u) {
        r.push(n(this.pad(t)));
        a++;
      }
    }
    return r;
  }
  findUTF8(e) {
    const t = this.executeEngine(ge.fromUTF8(e), 0, L.UNANCHORED, 2);
    if (t === null) {
      return null;
    } else {
      return e.slice(t[0], t[1]);
    }
  }
  findUTF8Index(e) {
    const t = this.executeEngine(ge.fromUTF8(e), 0, L.UNANCHORED, 2);
    if (t === null) {
      return null;
    } else {
      return t.slice(0, 2);
    }
  }
  find(e) {
    const t = this.executeEngine(ge.fromUTF16(e), 0, L.UNANCHORED, 2);
    if (t === null) {
      return "";
    } else {
      return e.substring(t[0], t[1]);
    }
  }
  findIndex(e) {
    return this.executeEngine(ge.fromUTF16(e), 0, L.UNANCHORED, 2);
  }
  findUTF8Submatch(e) {
    const t = this.executeEngine(ge.fromUTF8(e), 0, L.UNANCHORED, this.prog.numCap);
    if (t === null) {
      return null;
    }
    const n = new Array(1 + this.numSubexp).fill(null);
    for (let r = 0; r < n.length; r++) {
      if (r * 2 < t.length && t[r * 2] >= 0) {
        n[r] = e.slice(t[r * 2], t[r * 2 + 1]);
      }
    }
    return n;
  }
  findUTF8SubmatchIndex(e) {
    return this.pad(this.executeEngine(ge.fromUTF8(e), 0, L.UNANCHORED, this.prog.numCap));
  }
  findSubmatch(e) {
    const t = this.executeEngine(ge.fromUTF16(e), 0, L.UNANCHORED, this.prog.numCap);
    if (t === null) {
      return null;
    }
    const n = new Array(1 + this.numSubexp).fill(null);
    for (let r = 0; r < n.length; r++) {
      if (r * 2 < t.length && t[r * 2] >= 0) {
        n[r] = e.substring(t[r * 2], t[r * 2 + 1]);
      }
    }
    return n;
  }
  findSubmatchIndex(e) {
    return this.pad(this.executeEngine(ge.fromUTF16(e), 0, L.UNANCHORED, this.prog.numCap));
  }
  findAllUTF8(e, t) {
    const n = this.allMatches(ge.fromUTF8(e), t, t => e.slice(t[0], t[1]));
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAllUTF8Index(e, t) {
    const n = this.allMatches(ge.fromUTF8(e), t, e => e.slice(0, 2));
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAll(e, t) {
    const n = this.allMatches(ge.fromUTF16(e), t, t => e.substring(t[0], t[1]));
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAllIndex(e, t) {
    const n = this.allMatches(ge.fromUTF16(e), t, e => e.slice(0, 2));
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAllUTF8Submatch(e, t) {
    const n = this.allMatches(ge.fromUTF8(e), t, t => {
      let n = new Array(t.length / 2 | 0).fill(null);
      for (let r = 0; r < n.length; r++) {
        if (t[r * 2] >= 0) {
          n[r] = e.slice(t[r * 2], t[r * 2 + 1]);
        }
      }
      return n;
    });
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAllUTF8SubmatchIndex(e, t) {
    const n = this.allMatches(ge.fromUTF8(e), t);
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAllSubmatch(e, t) {
    const n = this.allMatches(ge.fromUTF16(e), t, t => {
      let n = new Array(t.length / 2 | 0).fill(null);
      for (let r = 0; r < n.length; r++) {
        if (t[r * 2] >= 0) {
          n[r] = e.substring(t[r * 2], t[r * 2 + 1]);
        }
      }
      return n;
    });
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
  findAllSubmatchIndex(e, t) {
    const n = this.allMatches(ge.fromUTF16(e), t);
    if (n.length === 0) {
      return null;
    } else {
      return n;
    }
  }
};
var pt = class e {
  static isHexadecimal(e) {
    return e >= "0" && e <= "9" || e >= "A" && e <= "F" || e >= "a" && e <= "f";
  }
  static translate(t) {
    let n = "";
    if (Object.prototype.toString.call(t) === "[object RegExp]") {
      if (t.ignoreCase) {
        n += "i";
      }
      if (t.multiline) {
        n += "m";
      }
      if (t.dotAll) {
        n += "s";
      }
      t = t.source;
    }
    if (typeof t != "string") {
      return t;
    }
    let r = "";
    let s = false;
    let i = t.length;
    if (i === 0) {
      r = "(?:)";
      s = true;
    }
    let a = false;
    let o = 0;
    while (o < i) {
      let n = t[o];
      if (n === "\\") {
        if (o + 1 < i) {
          n = t[o + 1];
          switch (n) {
            case "\\":
              r += "\\\\";
              o += 2;
              continue;
            case "c":
              if (o + 2 < i) {
                let e = t[o + 2].charCodeAt(0);
                if (e >= 65 && e <= 90 || e >= 97 && e <= 122) {
                  let t = e % 32;
                  r += "\\x";
                  r += (t >> 4).toString(16).toUpperCase();
                  r += (t & 15).toString(16).toUpperCase();
                  o += 3;
                  s = true;
                  continue;
                }
              }
              r += "c";
              o += 2;
              s = true;
              continue;
            case "u":
              if (o + 2 < i) {
                if (t[o + 2] === "{") {
                  let n = o + 3;
                  let a = false;
                  let B = false;
                  while (n < i) {
                    const r = t[n];
                    if (r === "}") {
                      B = true;
                      break;
                    }
                    if (!e.isHexadecimal(r)) {
                      break;
                    }
                    a = true;
                    n++;
                  }
                  if (B && a) {
                    r += "\\x";
                    o += 2;
                    s = true;
                    continue;
                  }
                } else if (o + 5 < i) {
                  let n = true;
                  for (let r = 0; r < 4; r++) {
                    if (!e.isHexadecimal(t[o + 2 + r])) {
                      n = false;
                      break;
                    }
                  }
                  if (n) {
                    r += "\\x{" + t.substring(o + 2, o + 6) + "}";
                    o += 6;
                    s = true;
                    continue;
                  }
                }
              }
              r += "u";
              o += 2;
              s = true;
              continue;
            case "x":
              {
                let n = false;
                if (o + 2 < i && t[o + 2] === "{") {
                  let r = o + 3;
                  let s = false;
                  let a = false;
                  while (r < i) {
                    const n = t[r];
                    if (n === "}") {
                      a = true;
                      break;
                    }
                    if (!e.isHexadecimal(n)) {
                      break;
                    }
                    s = true;
                    r++;
                  }
                  if (a && s) {
                    n = true;
                  }
                } else if (o + 3 < i && e.isHexadecimal(t[o + 2]) && e.isHexadecimal(t[o + 3])) {
                  n = true;
                }
                if (n) {
                  r += "\\x";
                  o += 2;
                } else {
                  r += "x";
                  o += 2;
                  s = true;
                }
                continue;
              }
            case "n":
            case "r":
            case "t":
            case "a":
            case "f":
            case "v":
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
            case "b":
            case "B":
            case "p":
            case "P":
            case "A":
            case "z":
            case "Q":
            case "E":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
              r += "\\" + n;
              o += 2;
              continue;
            default:
              {
                let e = t.codePointAt(o + 1);
                if (e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122) {
                  let n = Be.charCount(e);
                  r += t.substring(o + 1, o + 1 + n);
                  o += n + 1;
                  s = true;
                } else {
                  r += "\\";
                  let n = Be.charCount(e);
                  r += t.substring(o + 1, o + 1 + n);
                  o += n + 1;
                }
                continue;
              }
          }
        }
      } else {
        if (n === "/") {
          r += "\\/";
          o += 1;
          s = true;
          continue;
        }
        if (n === "[") {
          if (!a && t[o + 1] === "]") {
            r += "[^\\x00-\\x{10FFFF}]";
            o += 2;
            s = true;
            continue;
          }
          if (!a && t[o + 1] === "^" && t[o + 2] === "]") {
            r += "[\\x00-\\x{10FFFF}]";
            o += 3;
            s = true;
            continue;
          }
          a = true;
        } else if (n === "]") {
          a = false;
        } else if (!a && n === "(" && o + 2 < i && t[o + 1] === "?" && t[o + 2] === "<" && o + 3 < i && !"=!>)".includes(t[o + 3])) {
          r += "(?P<";
          o += 3;
          s = true;
          continue;
        }
      }
      let B = t.codePointAt(o);
      let u = Be.charCount(B);
      r += t.substring(o, o + u);
      o += u;
    }
    const B = s ? r : t;
    if (n.length > 0) {
      return `(?${n})${B}`;
    } else {
      return B;
    }
  }
};
var gt = (e, t) => {
  const n = e.matchArray();
  n.index = e.start(0);
  n.input = t;
  n.groups = e.namedGroupsObject();
  return n;
};
var mt = class e {
  static CASE_INSENSITIVE = R;
  static DOTALL = k;
  static MULTILINE = G;
  static DISABLE_UNICODE_GROUPS = P;
  static LONGEST_MATCH = M;
  static LOOKBEHINDS = V;
  static quote(e) {
    return Be.quoteMeta(e);
  }
  static quoteReplacement(e, t = false) {
    return me.quoteReplacement(e, t);
  }
  static translateRegExp(e) {
    return pt.translate(e);
  }
  static compile(t, n = 0) {
    Be.checkPattern(t);
    Be.checkFlags(n);
    let r = t;
    if ((n & e.CASE_INSENSITIVE) !== 0) {
      r = `(?i)${r}`;
    }
    if ((n & e.DOTALL) !== 0) {
      r = `(?s)${r}`;
    }
    if ((n & e.MULTILINE) !== 0) {
      r = `(?m)${r}`;
    }
    let s = L.PERL;
    if ((n & e.DISABLE_UNICODE_GROUPS) !== 0) {
      s &= ~L.UNICODE_GROUPS;
    }
    if ((n & e.LOOKBEHINDS) !== 0) {
      s |= L.LOOKBEHIND;
    }
    const i = new e(t, n);
    i.re2Input = ft.compileImpl(r, s, (n & e.LONGEST_MATCH) !== 0);
    return i;
  }
  static matches(t, n) {
    return e.compile(t).testExact(n);
  }
  static initTest(t, n, r) {
    if (t == null) {
      throw new Error("pattern is null");
    }
    if (r == null) {
      throw new Error("re2 is null");
    }
    const s = new e(t, n);
    s.re2Input = r;
    return s;
  }
  constructor(e, t) {
    this.patternInput = e;
    this.flagsInput = t;
    this.re2Input = null;
  }
  reset() {
    this.re2Input.reset();
  }
  flags() {
    return this.flagsInput;
  }
  pattern() {
    return this.patternInput;
  }
  re2() {
    return this.re2Input;
  }
  matches(e) {
    return this.testExact(e);
  }
  matcher(e) {
    if (Be.isByteArray(e)) {
      e = Ce.utf8(e);
    }
    return new me(this, e);
  }
  test(e) {
    if (Be.isByteArray(e)) {
      return this.re2Input.matchUTF8(e);
    } else {
      return this.re2Input.match(e);
    }
  }
  testExact(e) {
    const t = Be.isByteArray(e) ? ge.fromUTF8(e) : ge.fromUTF16(e);
    return this.re2Input.executeEngine(t, 0, L.ANCHOR_BOTH, 0) !== null;
  }
  exec(e) {
    const t = this.matcher(e);
    if (t.find()) {
      return gt(t, e);
    } else {
      return null;
    }
  }
  split(e, t = 0) {
    const n = this.matcher(e);
    const r = [];
    let s = 0;
    let i = 0;
    while (n.find()) {
      if (i !== 0 || n.end() !== 0) {
        if (t > 0 && r.length === t - 1) {
          break;
        }
        if (i === n.start()) {
          if (t === 0) {
            s += 1;
            i = n.end();
            continue;
          }
        } else {
          while (s > 0) {
            r.push("");
            s -= 1;
          }
        }
        r.push(n.substring(i, n.start()));
        i = n.end();
      } else {
        i = n.end();
      }
    }
    if (t === 0 && i !== n.inputLength()) {
      while (s > 0) {
        r.push("");
        s -= 1;
      }
      r.push(n.substring(i, n.inputLength()));
    }
    if (t !== 0 || r.length === 0 && (i !== n.inputLength() || !(i > 0))) {
      r.push(n.substring(i, n.inputLength()));
    }
    return r;
  }
  *matchAll(e) {
    const t = this.matcher(e);
    while (t.find()) {
      yield gt(t, e);
    }
  }
  toString() {
    return this.patternInput;
  }
  programSize() {
    return this.re2Input.numberOfInstructions();
  }
  groupCount() {
    return this.re2Input.numberOfCapturingGroups();
  }
  namedGroups() {
    return this.re2Input.namedGroups;
  }
  equals(e) {
    return this === e || e !== null && this.constructor === e.constructor && this.flagsInput === e.flagsInput && this.patternInput === e.patternInput;
  }
};
var Et = "13.3.0";
var Dt = new c("@firebase/firestore");
function wt() {
  return Dt.logLevel;
}
function yt(e, ...t) {
  if (Dt.logLevel <= h.DEBUG) {
    const n = t.map(vt);
    Dt.debug(`Firestore (${Et}): ${e}`, ...n);
  }
}
function _t(e, ...t) {
  if (Dt.logLevel <= h.ERROR) {
    const n = t.map(vt);
    Dt.error(`Firestore (${Et}): ${e}`, ...n);
  }
}
function It(e, ...t) {
  if (Dt.logLevel <= h.WARN) {
    const n = t.map(vt);
    Dt.warn(`Firestore (${Et}): ${e}`, ...n);
  }
}
function vt(e) {
  if (typeof e == "string") {
    return e;
  }
  try {
    return function (e) {
      return JSON.stringify(e);
    }(e);
  } catch (t) {
    return e;
  }
}
function Tt(e, t, n) {
  let r = "Unexpected state";
  if (typeof t == "string") {
    r = t;
  } else {
    n = t;
  }
  bt(e, r, n);
}
function bt(e, t, n) {
  let r = `FIRESTORE (${Et}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;
  if (n !== undefined) {
    try {
      r += " CONTEXT: " + JSON.stringify(n);
    } catch (e) {
      r += " CONTEXT: " + n;
    }
  }
  _t(r);
  throw new Error(r);
}
function Nt(e, t, n, r) {
  let s = "Unexpected state";
  if (typeof n == "string") {
    s = n;
  } else {
    r = n;
  }
  if (!e) {
    bt(t, s, r);
  }
}
function At(e, t) {
  return e;
}
function Ft(e) {
  const t = typeof self != "undefined" && (self.crypto || self.msCrypto);
  const n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == "function") {
    t.getRandomValues(n);
  } else {
    for (let r = 0; r < e; r++) {
      n[r] = Math.floor(Math.random() * 256);
    }
  }
  return n;
}
var Ot = class {
  static newId() {
    const e = Math.floor(256 / 62) * 62;
    let t = "";
    while (t.length < 20) {
      const n = Ft(40);
      for (let r = 0; r < n.length; ++r) {
        if (t.length < 20 && n[r] < e) {
          t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r] % 62);
        }
      }
    }
    return t;
  }
};
function St(e, t) {
  if (e < t) {
    return -1;
  } else if (e > t) {
    return 1;
  } else {
    return 0;
  }
}
function xt(e, t) {
  const n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) {
    const n = e.charAt(r);
    const s = t.charAt(r);
    if (n !== s) {
      if (kt(n) === kt(s)) {
        return St(n, s);
      } else if (kt(n)) {
        return 1;
      } else {
        return -1;
      }
    }
  }
  return St(e.length, t.length);
}
var Lt = 55296;
var Rt = 57343;
function kt(e) {
  const t = e.charCodeAt(0);
  return t >= Lt && t <= Rt;
}
function Gt(e, t, n) {
  return e.length === t.length && e.every((e, r) => n(e, t[r]));
}
function Pt(e) {
  return e + "\0";
}
var Mt = class e {
  constructor(e, t) {
    this.comparator = e;
    this.root = t || Ht.EMPTY;
  }
  insert(t, n) {
    return new e(this.comparator, this.root.insert(t, n, this.comparator).copy(null, null, Ht.BLACK, null, null));
  }
  remove(t) {
    return new e(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Ht.BLACK, null, null));
  }
  get(e) {
    let t = this.root;
    while (!t.isEmpty()) {
      const n = this.comparator(e, t.key);
      if (n === 0) {
        return t.value;
      }
      if (n < 0) {
        t = t.left;
      } else if (n > 0) {
        t = t.right;
      }
    }
    return null;
  }
  indexOf(e) {
    let t = 0;
    let n = this.root;
    while (!n.isEmpty()) {
      const r = this.comparator(e, n.key);
      if (r === 0) {
        return t + n.left.size;
      }
      if (r < 0) {
        n = n.left;
      } else {
        t += n.left.size + 1;
        n = n.right;
      }
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t, n) => {
      e(t, n);
      return false;
    });
  }
  toString() {
    const e = [];
    this.inorderTraversal((t, n) => {
      e.push(`${t}:${n}`);
      return false;
    });
    return `{${e.join(", ")}}`;
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new Vt(this.root, null, this.comparator, false);
  }
  getIteratorFrom(e) {
    return new Vt(this.root, e, this.comparator, false);
  }
  getReverseIterator() {
    return new Vt(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(e) {
    return new Vt(this.root, e, this.comparator, true);
  }
};
var Vt = class {
  constructor(e, t, n, r) {
    this.isReverse = r;
    this.nodeStack = [];
    let s = 1;
    while (!e.isEmpty()) {
      s = t ? n(e.key, t) : 1;
      if (t && r) {
        s *= -1;
      }
      if (s < 0) {
        e = this.isReverse ? e.left : e.right;
      } else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e);
        e = this.isReverse ? e.right : e.left;
      }
    }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse) {
      for (e = e.left; !e.isEmpty();) {
        this.nodeStack.push(e);
        e = e.right;
      }
    } else {
      for (e = e.right; !e.isEmpty();) {
        this.nodeStack.push(e);
        e = e.left;
      }
    }
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) {
      return null;
    }
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
};
var Ht = class e {
  constructor(t, n, r, s, i) {
    this.key = t;
    this.value = n;
    this.color = r ?? e.RED;
    this.left = s ?? e.EMPTY;
    this.right = i ?? e.EMPTY;
    this.size = this.left.size + 1 + this.right.size;
  }
  copy(t, n, r, s, i) {
    return new e(t ?? this.key, n ?? this.value, r ?? this.color, s ?? this.left, i ?? this.right);
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  min() {
    if (this.left.isEmpty()) {
      return this;
    } else {
      return this.left.min();
    }
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    if (this.right.isEmpty()) {
      return this.key;
    } else {
      return this.right.maxKey();
    }
  }
  insert(e, t, n) {
    let r = this;
    const s = n(e, r.key);
    r = s < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : s === 0 ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n));
    return r.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) {
      return e.EMPTY;
    }
    let t = this;
    if (!t.left.isRed() && !t.left.left.isRed()) {
      t = t.moveRedLeft();
    }
    t = t.copy(null, null, null, t.left.removeMin(), null);
    return t.fixUp();
  }
  remove(t, n) {
    let r;
    let s = this;
    if (n(t, s.key) < 0) {
      if (!s.left.isEmpty() && !s.left.isRed() && !s.left.left.isRed()) {
        s = s.moveRedLeft();
      }
      s = s.copy(null, null, null, s.left.remove(t, n), null);
    } else {
      if (s.left.isRed()) {
        s = s.rotateRight();
      }
      if (!s.right.isEmpty() && !s.right.isRed() && !s.right.left.isRed()) {
        s = s.moveRedRight();
      }
      if (n(t, s.key) === 0) {
        if (s.right.isEmpty()) {
          return e.EMPTY;
        }
        r = s.right.min();
        s = s.copy(r.key, r.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(t, n));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    if (e.right.isRed() && !e.left.isRed()) {
      e = e.rotateLeft();
    }
    if (e.left.isRed() && e.left.left.isRed()) {
      e = e.rotateRight();
    }
    if (e.left.isRed() && e.right.isRed()) {
      e = e.colorFlip();
    }
    return e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    if (e.right.left.isRed()) {
      e = e.copy(null, null, null, null, e.right.rotateRight());
      e = e.rotateLeft();
      e = e.colorFlip();
    }
    return e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    if (e.left.left.isRed()) {
      e = e.rotateRight();
      e = e.colorFlip();
    }
    return e;
  }
  rotateLeft() {
    const t = this.copy(null, null, e.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, e.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null);
    const t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed()) {
      throw Tt(43730, {
        key: this.key,
        value: this.value
      });
    }
    if (this.right.isRed()) {
      throw Tt(14113, {
        key: this.key,
        value: this.value
      });
    }
    const e = this.left.check();
    if (e !== this.right.check()) {
      throw Tt(27949);
    }
    return e + (this.isRed() ? 0 : 1);
  }
};
Ht.EMPTY = null;
Ht.RED = true;
Ht.BLACK = false;
Ht.EMPTY = new class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw Tt(57766);
  }
  get value() {
    throw Tt(16141);
  }
  get color() {
    throw Tt(16727);
  }
  get left() {
    throw Tt(29726);
  }
  get right() {
    throw Tt(36894);
  }
  copy(e, t, n, r, s) {
    return this;
  }
  insert(e, t, n) {
    return new Ht(e, t);
  }
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(e) {
    return false;
  }
  reverseTraversal(e) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var Ut = class e {
  constructor(e) {
    this.comparator = e;
    this.data = new Mt(this.comparator);
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((t, n) => {
      e(t);
      return false;
    });
  }
  forEachInRange(e, t) {
    const n = this.data.getIteratorFrom(e[0]);
    while (n.hasNext()) {
      const r = n.getNext();
      if (this.comparator(r.key, e[1]) >= 0) {
        return;
      }
      t(r.key);
    }
  }
  forEachWhile(e, t) {
    let n;
    for (n = t !== undefined ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();) {
      if (!e(n.getNext().key)) {
        return;
      }
    }
  }
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    if (t.hasNext()) {
      return t.getNext().key;
    } else {
      return null;
    }
  }
  getIterator() {
    return new qt(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new qt(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, true));
  }
  delete(e) {
    if (this.has(e)) {
      return this.copy(this.data.remove(e));
    } else {
      return this;
    }
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    if (t.size < e.size) {
      t = e;
      e = this;
    }
    e.forEach(e => {
      t = t.add(e);
    });
    return t;
  }
  isEqual(t) {
    if (!(t instanceof e)) {
      return false;
    }
    if (this.size !== t.size) {
      return false;
    }
    const n = this.data.getIterator();
    const r = t.data.getIterator();
    while (n.hasNext()) {
      const e = n.getNext().key;
      const t = r.getNext().key;
      if (this.comparator(e, t) !== 0) {
        return false;
      }
    }
    return true;
  }
  toArray() {
    const e = [];
    this.forEach(t => {
      e.push(t);
    });
    return e;
  }
  toString() {
    const e = [];
    this.forEach(t => e.push(t));
    return "SortedSet(" + e.toString() + ")";
  }
  copy(t) {
    const n = new e(this.comparator);
    n.data = t;
    return n;
  }
};
var qt = class {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
function Jt(e) {
  if (e.hasNext()) {
    return e.getNext();
  } else {
    return undefined;
  }
}
var Kt = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
var jt = class extends i {
  constructor(e, t) {
    super(e, t);
    this.code = e;
    this.message = t;
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var Qt = "__name__";
var zt = class e {
  constructor(e, t = 0, n = e.length - t) {
    this.segments = e;
    this.offset = t;
    this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return e.comparator(this, t) === 0;
  }
  child(t) {
    const n = this.segments.slice(this.offset, this.limit());
    if (t instanceof e) {
      t.forEach(e => {
        n.push(e);
      });
    } else {
      n.push(t);
    }
    return this.construct(n);
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    e = e === undefined ? 1 : e;
    return this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) {
      return false;
    }
    for (let t = 0; t < this.length; t++) {
      if (this.get(t) !== e.get(t)) {
        return false;
      }
    }
    return true;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) {
      return false;
    }
    for (let t = 0; t < this.length; t++) {
      if (this.get(t) !== e.get(t)) {
        return false;
      }
    }
    return true;
  }
  forEach(e) {
    for (let t = this.offset, n = this.limit(); t < n; t++) {
      e(this.segments[t]);
    }
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, n) {
    const r = Math.min(t.length, n.length);
    for (let s = 0; s < r; s++) {
      const r = e.compareSegments(t.get(s), n.get(s));
      if (r !== 0) {
        return r;
      }
    }
    return St(t.length, n.length);
  }
  static compareSegments(t, n) {
    const r = e.isNumericId(t);
    const s = e.isNumericId(n);
    if (r && !s) {
      return -1;
    } else if (!r && s) {
      return 1;
    } else if (r && s) {
      return e.extractNumericId(t).compare(e.extractNumericId(n));
    } else {
      return xt(t, n);
    }
  }
  static isNumericId(e) {
    return e.startsWith("__id") && e.endsWith("__");
  }
  static extractNumericId(e) {
    return E.fromString(e.substring(4, e.length - 2));
  }
};
var Yt = class e extends zt {
  construct(t, n, r) {
    return new e(t, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toStringWithLeadingSlash() {
    return `/${this.canonicalString()}`;
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...t) {
    const n = [];
    for (const e of t) {
      if (e.indexOf("//") >= 0) {
        throw new jt(Kt.INVALID_ARGUMENT, `Invalid segment (${e}). Paths must not contain // in them.`);
      }
      n.push(...e.split("/").filter(e => e.length > 0));
    }
    return new e(n);
  }
  static emptyPath() {
    return new e([]);
  }
};
var Wt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var $t = class e extends zt {
  construct(t, n, r) {
    return new e(t, n, r);
  }
  static isValidIdentifier(e) {
    return Wt.test(e);
  }
  canonicalString() {
    return this.toArray().map(t => {
      t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
      if (!e.isValidIdentifier(t)) {
        t = "`" + t + "`";
      }
      return t;
    }).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === Qt;
  }
  static keyField() {
    return new e([Qt]);
  }
  static fromServerFormat(t) {
    const n = [];
    let r = "";
    let s = 0;
    const i = () => {
      if (r.length === 0) {
        throw new jt(Kt.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      }
      n.push(r);
      r = "";
    };
    let a = false;
    while (s < t.length) {
      const e = t[s];
      if (e === "\\") {
        if (s + 1 === t.length) {
          throw new jt(Kt.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        }
        const e = t[s + 1];
        if (e !== "\\" && e !== "." && e !== "`") {
          throw new jt(Kt.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        }
        r += e;
        s += 2;
      } else if (e === "`") {
        a = !a;
        s++;
      } else if (e !== "." || a) {
        r += e;
        s++;
      } else {
        i();
        s++;
      }
    }
    i();
    if (a) {
      throw new jt(Kt.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    }
    return new e(n);
  }
  static emptyPath() {
    return new e([]);
  }
};
var Xt = class e {
  constructor(e) {
    this.fields = e;
    e.sort($t.comparator);
  }
  static empty() {
    return new e([]);
  }
  unionWith(t) {
    let n = new Ut($t.comparator);
    for (const e of this.fields) {
      n = n.add(e);
    }
    for (const e of t) {
      n = n.add(e);
    }
    return new e(n.toArray());
  }
  covers(e) {
    for (const t of this.fields) {
      if (t.isPrefixOf(e)) {
        return true;
      }
    }
    return false;
  }
  isEqual(e) {
    return Gt(this.fields, e.fields, (e, t) => e.isEqual(t));
  }
};
function Zt(e) {
  let t = 0;
  for (const n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      t++;
    }
  }
  return t;
}
function en(e, t) {
  for (const n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      t(n, e[n]);
    }
  }
}
function tn(e) {
  for (const t in e) {
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      return false;
    }
  }
  return true;
}
var nn = class e {
  constructor(e) {
    this.path = e;
  }
  static fromPath(t) {
    return new e(Yt.fromString(t));
  }
  static fromName(t) {
    return new e(Yt.fromString(t).popFirst(5));
  }
  static empty() {
    return new e(Yt.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && Yt.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return Yt.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(t) {
    return new e(new Yt(t.slice()));
  }
};
function rn(e, t, n) {
  if (!n) {
    throw new jt(Kt.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
  }
}
function sn(e, t, n, r) {
  if (t === true && r === true) {
    throw new jt(Kt.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
  }
}
function an(e) {
  if (!nn.isDocumentKey(e)) {
    throw new jt(Kt.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
  }
}
function on(e) {
  if (nn.isDocumentKey(e)) {
    throw new jt(Kt.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
  }
}
function Bn(e) {
  return typeof e == "object" && e !== null && (Object.getPrototypeOf(e) === Object.prototype || Object.getPrototypeOf(e) === null);
}
function un(e) {
  if (e === undefined) {
    return "undefined";
  }
  if (e === null) {
    return "null";
  }
  if (typeof e == "string") {
    if (e.length > 20) {
      e = `${e.substring(0, 20)}...`;
    }
    return JSON.stringify(e);
  }
  if (typeof e == "number" || typeof e == "boolean") {
    return "" + e;
  }
  if (typeof e == "object") {
    if (e instanceof Array) {
      return "an array";
    }
    {
      const t = function (e) {
        if (e.constructor) {
          return e.constructor.name;
        } else {
          return null;
        }
      }(e);
      if (t) {
        return `a custom ${t} object`;
      } else {
        return "an object";
      }
    }
  }
  if (typeof e == "function") {
    return "a function";
  } else {
    return Tt(12329, {
      type: typeof e
    });
  }
}
function cn(e, t) {
  if ("_delegate" in e) {
    e = e._delegate;
  }
  if (!(e instanceof t)) {
    if (t.name === e.constructor.name) {
      throw new jt(Kt.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    }
    {
      const n = un(e);
      throw new jt(Kt.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
function ln(e, t) {
  if (t <= 0) {
    throw new jt(Kt.INVALID_ARGUMENT, `Function ${e}() requires a positive number, but it was: ${t}.`);
  }
}
function hn(e, t) {
  const n = {
    typeString: e
  };
  if (t) {
    n.value = t;
  }
  return n;
}
function Cn(e, t) {
  if (!Bn(e)) {
    throw new jt(Kt.INVALID_ARGUMENT, "JSON must be an object");
  }
  let n;
  for (const r in t) {
    if (t[r]) {
      const s = t[r].typeString;
      const i = "value" in t[r] ? {
        value: t[r].value
      } : undefined;
      const a = t[r].optional;
      if (!(r in e)) {
        if (a) {
          continue;
        }
        n = `JSON missing required field: '${r}'`;
        break;
      }
      const o = e[r];
      if (s && typeof o !== s) {
        n = `JSON field '${r}' must be a ${s}.`;
        break;
      }
      if (i !== undefined && o !== i.value) {
        n = `Expected '${r}' field to equal '${i.value}'`;
        break;
      }
    }
  }
  if (n) {
    throw new jt(Kt.INVALID_ARGUMENT, n);
  }
  return true;
}
var dn = -62135596800;
var fn = 1000000;
var pn = class e {
  static now() {
    return e.fromMillis(Date.now());
  }
  static fromDate(t) {
    return e.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const n = Math.floor(t / 1000);
    const r = Math.floor((t - n * 1000) * fn);
    return new e(n, r);
  }
  static fromInstant(t) {
    if (!t || typeof t.t != "bigint") {
      throw new jt(Kt.INVALID_ARGUMENT, "Invalid Temporal.Instant object provided.");
    }
    return e._fromEpochNanoseconds(t.t);
  }
  static _fromEpochNanoseconds(t) {
    let n;
    let r;
    if (t >= 0n) {
      n = Number(t / 1000000000n);
      r = Number(t % 1000000000n);
    } else {
      const e = t % 1000000000n;
      if (0n === e) {
        n = Number(t / 1000000000n);
        r = 0;
      } else {
        n = Number(t / 1000000000n - 1n);
        r = Number(e + 1000000000n);
      }
    }
    return new e(n, r);
  }
  constructor(e, t) {
    this.seconds = e;
    this.nanoseconds = t;
    if (t < 0) {
      throw new jt(Kt.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    }
    if (t >= 1000000000) {
      throw new jt(Kt.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    }
    if (e < dn) {
      throw new jt(Kt.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    }
    if (e >= 253402300800) {
      throw new jt(Kt.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    }
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return this.seconds * 1000 + this.nanoseconds / fn;
  }
  toInstant() {
    if (typeof Temporal == "undefined" || !Temporal.Instant) {
      throw new jt(Kt.FAILED_PRECONDITION, "The Temporal object is not available in the current environment.");
    }
    const e = 1000000000n * BigInt(this.seconds) + BigInt(this.nanoseconds);
    return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e);
  }
  _compareTo(e) {
    if (this.seconds === e.seconds) {
      return St(this.nanoseconds, e.nanoseconds);
    } else {
      return St(this.seconds, e.seconds);
    }
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  toJSON() {
    return {
      type: e._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  static fromJSON(t) {
    if (Cn(t, e._jsonSchema)) {
      return new e(t.seconds, t.nanoseconds);
    }
  }
  valueOf() {
    const e = this.seconds - dn;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
pn._jsonSchemaVersion = "firestore/timestamp/1.0";
pn._jsonSchema = {
  type: hn("string", pn._jsonSchemaVersion),
  seconds: hn("number"),
  nanoseconds: hn("number")
};
var gn = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "Base64DecodeError";
  }
};
var mn = class e {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(t) {
    const n = function (e) {
      try {
        return atob(e);
      } catch (e) {
        throw typeof DOMException != "undefined" && e instanceof DOMException ? new gn("Invalid base64 string: " + e) : e;
      }
    }(t);
    return new e(n);
  }
  static fromUint8Array(t) {
    const n = function (e) {
      let t = "";
      for (let n = 0; n < e.length; ++n) {
        t += String.fromCharCode(e[n]);
      }
      return t;
    }(t);
    return new e(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: false
      } : {
        value: undefined,
        done: true
      }
    };
  }
  toBase64() {
    return function (e) {
      return btoa(e);
    }(this.binaryString);
  }
  toUint8Array() {
    return function (e) {
      const t = new Uint8Array(e.length);
      for (let n = 0; n < e.length; n++) {
        t[n] = e.charCodeAt(n);
      }
      return t;
    }(this.binaryString);
  }
  approximateByteSize() {
    return this.binaryString.length * 2;
  }
  compareTo(e) {
    return St(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
};
mn.EMPTY_BYTE_STRING = new mn("");
var En = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Dn(e) {
  Nt(!!e, 39018);
  if (typeof e == "string") {
    let t = 0;
    const n = En.exec(e);
    Nt(!!n, 46558, {
      timestamp: e
    });
    if (n[1]) {
      let e = n[1];
      e = (e + "000000000").substr(0, 9);
      t = Number(e);
    }
    const r = new Date(e);
    return {
      seconds: Math.floor(r.getTime() / 1000),
      nanos: t
    };
  }
  return {
    seconds: wn(e.seconds),
    nanos: wn(e.nanos)
  };
}
function wn(e) {
  if (typeof e == "number") {
    return e;
  } else if (typeof e == "string") {
    return Number(e);
  } else {
    return 0;
  }
}
function yn(e) {
  if (typeof e == "string") {
    return mn.fromBase64String(e);
  } else {
    return mn.fromUint8Array(e);
  }
}
var _n = "server_timestamp";
var In = "__type__";
var vn = "__previous_value__";
var Tn = "__local_write_time__";
function bn(e) {
  return (e?.mapValue?.fields || {})[In]?.stringValue === _n;
}
function Nn(e) {
  const t = e.mapValue.fields[vn];
  if (bn(t)) {
    return Nn(t);
  } else {
    return t;
  }
}
function An(e) {
  const t = Dn(e.mapValue.fields[Tn].timestampValue);
  return new pn(t.seconds, t.nanos);
}
var Fn = class {
  constructor(e, t, n, r, s, i, a, o, B, u, c, l, h) {
    this.databaseId = e;
    this.appId = t;
    this.persistenceKey = n;
    this.host = r;
    this.ssl = s;
    this.forceLongPolling = i;
    this.autoDetectLongPolling = a;
    this.longPollingOptions = o;
    this.useFetchStreams = B;
    this.isUsingEmulator = u;
    this.apiKey = c;
    this._customHeaders = l;
    this.grpcFlowControlWindow = h;
  }
};
var On = "(default)";
var Sn = class e {
  constructor(e, t) {
    this.projectId = e;
    this.database = t || On;
  }
  static empty() {
    return new e("", "");
  }
  get isDefaultDatabase() {
    return this.database === On;
  }
  isEqual(t) {
    return t instanceof e && t.projectId === this.projectId && t.database === this.database;
  }
};
var xn;
var Ln;
var Rn;
var kn;
var Gn;
var Pn;
var Mn = class e {
  constructor() {
    this.exponent = 0;
    this.i = 0n;
    this.o = 0n;
    this.u = new Array(4).fill(0n);
    this.l = new Array(6).fill(0n);
    this.h = new Array(6).fill(0n);
    this.T = new Array(6).fill(0n);
    this.P = new Array(12).fill(0n);
  }
  static I(t, n) {
    let r = new e();
    r.parse(t, n);
    return r;
  }
  parse(t, n) {
    n += t.length - 1;
    this.exponent = 0;
    this.i = 0n;
    this.o = 0n;
    let r = this.T;
    let s = this.R(t, r);
    if (s == 0 && this.isEmpty(r)) {
      return;
    }
    if ((n += s) < e.A) {
      return;
    }
    if (n > e.V) {
      this.exponent = Number(e.m);
      return;
    }
    let i = this.p(n, r);
    this.S(n, i, r);
  }
  R(t, n) {
    for (let e = 0; e < 6; e++) {
      n[e] = 0n;
    }
    let r = 0;
    while (r < t.length && t[r] == 0) {
      r += 1;
    }
    if (r == t.length) {
      return 0;
    }
    let s = -r;
    if (t.length - r > e.v) {
      let n = t[e.v] >= 5;
      let i = new Array(e.v).fill(0);
      for (let s = 0; s < e.v; s++) {
        i[s] = t[s + r];
      }
      if (n) {
        s += this.D(i);
      }
      t = i;
      r = 0;
    }
    for (let e = t.length - 1; e >= r; e--) {
      n[0] |= BigInt(t[e]) << 32n;
      this.C(n);
    }
    return s;
  }
  C(e) {
    let t = e.length;
    for (let n = 0; n < t; n++) {
      let r = e[n] % 10n;
      e[n] = e[n] / 10n;
      if (n + 1 < t) {
        e[n + 1] += r << 32n;
      }
    }
  }
  isEmpty(e) {
    for (let t = 0; t < e.length; t++) {
      if (0n != e[t]) {
        return false;
      }
    }
    return true;
  }
  D(e) {
    for (let t = e.length - 1; t >= 0; t--) {
      if (e[t] != 9) {
        e[t] = e[t] + 1;
        return 0;
      }
      e[t] = 0;
    }
    e[0] = 1;
    return 1;
  }
  p(t, n) {
    let r = n[0] << 31n | n[1] >> 1n;
    let s = Number(r) / e.F;
    return Math.floor(Number(t) * e.O + this.log2(s));
  }
  log2(t) {
    return e.M * Math.log(t);
  }
  S(t, n, r) {
    let s = this.u;
    this.N(-n, s);
    let i = this.P;
    this.B(r, s, i);
    this.L(i);
    if (BigInt(s[0]) != BigInt(-t)) {
      this.L(i);
    }
    n += this.$(i);
    if (!((n += e.U) <= 0)) {
      n += this.k(i);
      if (BigInt(n) >= e.m) {
        this.exponent = Number(e.m);
      } else {
        this.exponent = Number(n);
        this.i = (i[0] << 32n) + i[1] & 18446744073709551615n;
        this.o = (i[2] << 32n) + i[3] & 18446744073709551615n;
      }
    }
  }
  N(t, n) {
    if (t == 0) {
      this.q(e.K[0], n);
      return;
    }
    let r = e.K;
    if (t < 0) {
      t = -t;
      r = e.W;
    }
    let s = e.G;
    let i = 32;
    let a = true;
    while (t > 0) {
      if (t >= s) {
        if (a) {
          this.q(r[i], n);
          a = false;
        } else {
          this.j(n, r[i], n);
        }
        t -= s;
      }
      i -= 1;
      s *= 0.5;
    }
  }
  q(e, t) {
    for (let n = 0; n < t.length; n++) {
      t[n] = e[n];
    }
  }
  j(e, t, n) {
    this.H(e, t, this.P);
    let r = this.J(this.P);
    this.Y(this.P, n);
    n[0] = e[0] + t[0] + BigInt(r);
  }
  H(t, n, r) {
    for (let e = 0; e < r.length; e++) {
      r[e] = 0n;
    }
    this.Z(t, this.l);
    this.Z(n, this.h);
    for (let s = 5; s >= 0; s--) {
      for (let t = 5; t >= 0; t--) {
        let n = this.l[s] * this.h[t];
        r[t + s + 1] = r[t + s + 1] + (n & e.X) & 18446744073709551615n;
        r[t + s] = r[t + s] + (n >> 32n) & 18446744073709551615n;
      }
    }
    for (let s = 11; s >= 1; s--) {
      r[s - 1] = r[s - 1] + (r[s] >> 32n) & 18446744073709551615n;
      r[s] &= e.X;
    }
  }
  J(e) {
    let t = 0;
    while (this.ee(e)) {
      this.L(e);
      t -= 1;
    }
    return t;
  }
  ee(e) {
    if (e[0] < 429496729n) {
      return true;
    }
    if (e[0] > 429496729n) {
      return false;
    }
    for (let t = 1; t < e.length; t++) {
      if (e[t] < 2576980377n) {
        return true;
      }
      if (e[t] > 2576980377n) {
        return false;
      }
    }
    return false;
  }
  B(t, n, r) {
    for (let e = 0; e < r.length; e++) {
      r[e] = 0n;
    }
    let s = this.h;
    this.Z(n, s);
    let i = t.length;
    for (let a = i - 1; a >= 0; a--) {
      for (let n = i - 1; n >= 0; n--) {
        let i = t[a] * s[n];
        r[n + a + 1] = r[n + a + 1] + (i & e.X) & 18446744073709551615n;
        r[n + a] = r[n + a] + (i >> 32n) & 18446744073709551615n;
      }
    }
    for (let a = 11; a >= 1; a--) {
      r[a - 1] = r[a - 1] + (r[a] >> 32n) & 18446744073709551615n;
      r[a] &= e.X;
    }
  }
  L(t) {
    let n = t.length - 1;
    t[0] &= e.X;
    t[n] *= 10n;
    for (let r = n - 1; r >= 0; r--) {
      t[r] = 10n * t[r] + (t[r + 1] >> 32n) & 18446744073709551615n;
      t[r + 1] &= e.X;
    }
  }
  $(t) {
    let n = 31 - e.te(t[0]);
    if (n != 0) {
      this.ne(t, n);
    }
    return n;
  }
  k(t) {
    this.re(t, 5, 100n);
    this.re(t, 4, 2147483648n);
    if (0n != (t[0] & e.ie << 1n)) {
      this.ne(t, 1);
      return 1;
    } else {
      return 0;
    }
  }
  Y(e, t) {
    t[1] = (e[0] << 32n) + e[1];
    t[2] = (e[2] << 32n) + e[3];
    t[3] = (e[4] << 32n) + e[5];
  }
  Z(t, n) {
    n[0] = t[1] >> 32n;
    n[1] = t[1] & e.X;
    n[2] = t[2] >> 32n;
    n[3] = t[2] & e.X;
    n[4] = t[3] >> 32n;
    n[5] = t[3] & e.X;
  }
  ne(t, n) {
    let r = t.length - 1;
    let s = BigInt(32 - Math.abs(n));
    if (n > 0) {
      let i = BigInt(n);
      for (let n = r + 1 - 1; n >= 1; n--) {
        t[n] = t[n] >> i | t[n - 1] << s & e.X;
      }
      t[0] = t[0] >> i;
    } else if (n < 0) {
      let i = BigInt(-n);
      t[0] = 18446744073709551615n & (t[0] << i | t[1] >> s);
      for (let n = 1; n < r; n++) {
        t[n] = 18446744073709551615n & (t[n] << i & e.X | t[n + 1] >> s);
      }
      t[r] = t[r] << i & e.X;
    }
  }
  re(t, n, r) {
    let s = n;
    t[s] = t[s] + r & 18446744073709551615n;
    for (let i = s + 1 - 1; i >= 1 && 0n != (t[i] & e.ie); i--) {
      t[i] &= e.X;
      t[i - 1] += 1n;
    }
  }
  static te(e) {
    let t = Number(e >> 32n);
    if (t == 0) {
      return 32 + Math.clz32(Number(BigInt.asUintN(32, e)));
    } else {
      return Math.clz32(t);
    }
  }
};
Mn.v = 59;
Mn.V = 646456993;
Mn.A = -646457032;
Mn.F = 922337203685477600;
Mn.se = 9223372036854775808n;
Mn.G = 2147483648;
Mn.X = 4294967295n;
Mn.ie = 18446744069414584320n;
Mn.O = Math.log(10) / Math.log(2);
Mn.M = 1 / Math.log(2);
Mn.U = 2147483647;
Mn.m = 4294967295n;
Mn.K = [[1n, 1844674407370955161n, 11068046444225730969n, 11068046444225730970n], [1n, 3689348814741910323n, 3689348814741910323n, 3689348814741910324n], [1n, 7378697629483820646n, 7378697629483820646n, 7378697629483820647n], [2n, 2951479051793528258n, 10330176681277348904n, 17708874310761169552n], [3n, 4722366482869645213n, 12838933875301847924n, 13576803638250229990n], [5n, 12089258196146291747n, 1139270913992301907n, 14834133714314273028n], [10n, 7922816251426433759n, 6537434485812897421n, 10943610198455522670n], [20n, 3402823669209384634n, 11690551640656395617n, 434502812078806219n], [39n, 6277101735386680763n, 15417593589425144845n, 4980338030897529499n], [78n, 2135987035920910082n, 7286864317269821293n, 1470929914900401402n], [155n, 2473304014731045340n, 11160745210636643808n, 17197624135881608752n], [309n, 3316158518186977171n, 1610101194367568473n, 2505321366944869367n], [617n, 5961435402259919231n, 8541288306462491492n, 12917583404895345239n], [1234n, 1926557440885621868n, 10330761220174613655n, 4973663491106771606n], [2467n, 2012075170664720308n, 5203521067837755057n, 4252902708988064798n], [4933n, 2194667241128661798n, 9997912988788550371n, 2882452207710407228n], [9865n, 2611064738599533141n, 4667649273809606933n, 5480838552042273826n], [19729n, 3695860387023220540n, 11618221355217427600n, 15743111447059609512n], [39457n, 7404766904006053691n, 12160444268087321627n, 5501995613499181412n], [78914n, 2972371312984624324n, 9931534487804675078n, 3934513978629065883n], [157827n, 4789458338529041696n, 8874761816389274466n, 17334709082760258060n], [315653n, 12435208666009569532n, 53738705337609241n, 5451751215914427447n], [631306n, 8382748410739091470n, 5595760811601129281n, 5808897528453025485n], [1262612n, 3809369861530133413n, 7258727891356815428n, 12698775008535499593n], [2525223n, 7866590810795563528n, 11575482952928815984n, 1738499114246505760n], [5050446n, 3354697757892663011n, 3122677384963859433n, 1903788099230575219n], [10100891n, 6100804023648459231n, 15587055094752631951n, 12467802392503039034n], [20201782n, 2017689928707321463n, 11400993815251097644n, 15657595017903947855n], [40403563n, 2206932904874568912n, 10086775996354462822n, 7871099721466003992n], [80807125n, 2640331988754402584n, 17494500724586232665n, 12073153853204213065n], [161614249n, 3779178039757925203n, 4593549380955514492n, 2162745452984644395n], [323228497n, 7742388900241556266n, 8212051283157458959n, 10362106829961871628n], [646456994n, 3249602512132054904n, 4645955491659115631n, 2401850457105738694n]];
Mn.W = [[1n, 1844674407370955161n, 11068046444225730969n, 11068046444225730970n], [0n, 9223372036854775808n, 0n, 0n], [0n, 4611686018427387904n, 0n, 1n], [-1n, 11529215046068469760n, 0n, 0n], [-2n, 7205759403792793600n, 0n, 0n], [-4n, 2814749767106560000n, 0n, 1n], [-9n, 4294967296000000000n, 0n, 1n], [-19n, 10000000000000000000n, 0n, 0n], [-38n, 5421010862427522170n, 687399551400673280n, 1n], [-77n, 15930919111324522770n, 5327493063679123134n, 12292710897160462338n], [-154n, 13758210268297397763n, 12320534732722919674n, 6675599427733050225n], [-308n, 10261342003245940623n, 6273243709394548296n, 6440670082096085128n], [-616n, 5708060961156115120n, 9326959349272872362n, 14394422795431165174n], [-1233n, 17662715873372225491n, 16018126490311694428n, 5356816969625239316n], [-2466n, 16912010638674145271n, 1614368466976504750n, 8601533998869527035n], [-4932n, 15504964057600816844n, 16725227620538152213n, 14050867044384726477n], [-9864n, 13032322097974936284n, 15317032172363146549n, 6308761762498734157n], [-19728n, 9207121787276552771n, 2686637268731583271n, 6864278666688451401n], [-39456n, 4595450084145690875n, 7667683976197477395n, 449294573396472465n], [-78913n, 11448178275521484223n, 3110751028328854690n, 1120171678522345134n], [-157826n, 7104819436125367673n, 14991248556251613302n, 16820949487516534012n], [-315652n, 2736442757499254003n, 4679685605244421446n, 11731094814065673062n], [-631305n, 4059317424879466168n, 1990423776449209129n, 14056183348504135159n], [-1262611n, 8932773117080711014n, 7396631747502695834n, 11647671188648399829n], [-2525222n, 4325665019387541401n, 14660155504483916480n, 5763493405214599753n], [-5050445n, 10143458262979115930n, 7822744214343089676n, 1615945487545495999n], [-10100890n, 5577664281657086504n, 2124849129118726579n, 8904011362647467789n], [-20201781n, 16864948477933278509n, 13298207519877393505n, 10179411950183364575n], [-40403562n, 15418790764745900618n, 12109694407689697456n, 12044714451038874750n], [-80807124n, 12887862903992969105n, 14515304112506087704n, 320416584029509902n], [-161614248n, 9004136966850474441n, 7308686012685280919n, 1358577080284203015n], [-323228496n, 4395056503947017296n, 13747437776819292273n, 16250244679374086836n], [-646456993n, 10471507381303696026n, 4273141307571403437n, 18050914191569890740n]];
var Vn = class e {
  constructor(e, t, n, r) {
    this.negative = e;
    this._e = t;
    this.i = n;
    this.o = r;
  }
  exponent() {
    return this._e - Mn.U;
  }
  oe() {
    return this._e === 0 && 0n === this.i && 0n === this.o;
  }
  ae() {
    return this._e === _(e, xn, "f", Ln) && 0n === this.i && 0n === this.o;
  }
  isNaN() {
    return this._e === _(e, xn, "f", Ln) && (0n !== this.i || 0n !== this.o);
  }
  compareTo(e) {
    if (this.isNaN()) {
      if (e.isNaN()) {
        return 0;
      } else {
        return 1;
      }
    }
    if (e.isNaN()) {
      return -1;
    }
    let t;
    let n;
    if (this.negative) {
      if (!e.negative) {
        return -1;
      }
      t = 1;
      n = -1;
    } else {
      if (e.negative) {
        return 1;
      }
      t = -1;
      n = 1;
    }
    if (this._e < e._e) {
      return t;
    } else if (this._e > e._e) {
      return n;
    } else if (this.i < e.i) {
      return t;
    } else if (this.i > e.i) {
      return n;
    } else if (this.o < e.o) {
      return t;
    } else if (this.o > e.o) {
      return n;
    } else {
      return 0;
    }
  }
  debug() {
    return (this.negative ? "+" : "-") + _(e, xn, "m", Rn).call(e, this.i) + _(e, xn, "m", Rn).call(e, this.o) + "*2^" + this.exponent();
  }
  static fromNumber(t) {
    if (isNaN(t)) {
      return e.NaN;
    }
    if (!isFinite(t)) {
      if (t < 0) {
        return e.ue;
      } else {
        return e.ce;
      }
    }
    if (t === 0) {
      if (Math.sign(1 / t) > 0) {
        return e.le;
      } else {
        return e.Ee;
      }
    }
    const n = new DataView(new ArrayBuffer(8));
    n.setFloat64(0, t);
    const r = n.getBigUint64(0);
    let s = BigInt.asUintN(64, r << 12n);
    let i = Number(r >> 52n) & 2047;
    if (i === 0) {
      const e = Mn.te(s);
      s = e < 63 ? s << BigInt(e + 1) : 0n;
      i = -e;
    }
    return new e(t < 0, _(e, xn, "m", Pn).call(e, i - 1023), s, 0n);
  }
  static fromString(t) {
    if (t === "NaN") {
      return e.NaN;
    }
    if (t === "-Infinity") {
      return e.ue;
    }
    if (t === "Infinity" || t === "+Infinity") {
      return e.ce;
    }
    const n = new Array(t.length).fill(0);
    let r = 0;
    let s = 0;
    let i = 0;
    let a = false;
    for (t[r] === "-" ? (a = true, r++) : t[r] === "+" && r++; _(e, xn, "m", kn).call(e, t, r);) {
      n[s++] = _(e, xn, "m", Gn).call(e, t, r++);
    }
    if (t[r] === ".") {
      const a = ++r;
      while (_(e, xn, "m", kn).call(e, t, r)) {
        n[s++] = _(e, xn, "m", Gn).call(e, t, r++);
      }
      i = a - r;
    }
    if (t[r] === "e" || t[r] === "E") {
      let n = 0;
      r++;
      let s = 1;
      if (t[r] === "-") {
        s = -1;
        r++;
      } else if (t[r] === "+") {
        r++;
      }
      const a = r;
      while (_(e, xn, "m", kn).call(e, t, r)) {
        n = n * 10 + _(e, xn, "m", Gn).call(e, t, r++);
        if (r - a > 9) {
          throw new Error("Exponent too large " + t);
        }
      }
      if (r === a) {
        throw new Error("Invalid number " + t);
      }
      i += n * s;
    }
    if (s === 0 || r !== t.length) {
      throw new Error("Invalid number " + t);
    }
    const o = Mn.I(n.slice(0, s), i);
    return new e(a, o.exponent, o.i, o.o);
  }
};
xn = Vn;
Rn = function (e) {
  return e.toString(16).padStart(16, "0");
};
kn = function (e, t) {
  const n = e.codePointAt(t);
  return n !== undefined && n >= 48 && n <= 57;
};
Gn = function (e, t) {
  return e.codePointAt(t) - 48;
};
Pn = function (e) {
  return e + Mn.U;
};
Ln = {
  value: Number(Mn.m)
};
Vn.le = new Vn(false, 0, 0n, 0n);
Vn.Ee = new Vn(true, 0, 0n, 0n);
Vn.NaN = new Vn(false, _(Vn, xn, "f", Ln), 1n << 63n, 0n);
Vn.ue = new Vn(true, _(Vn, xn, "f", Ln), 0n, 0n);
Vn.ce = new Vn(false, _(Vn, xn, "f", Ln), 0n, 0n);
new Vn(true, _(Vn, xn, "m", Pn).call(Vn, 63), 0n, 0n);
new Vn(false, _(Vn, xn, "m", Pn).call(Vn, 0), 0n, 0n);
new Vn(true, _(Vn, xn, "m", Pn).call(Vn, 0), 0n, 0n);
var Hn = -1;
function Un(e) {
  return e == null;
}
function qn(e) {
  return e === 0 && 1 / e == -Infinity;
}
function Jn(e) {
  return typeof e == "number" && Number.isInteger(e) && !qn(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER;
}
function Kn(e) {
  return typeof e == "string";
}
var jn;
var Qn;
var zn = "__type__";
var Yn = "__vector__";
var Wn = "value";
var $n = "server_timestamp";
var Xn = "__min__";
var Zn = "__max__";
var er = "__regex__";
var tr = "pattern";
var nr = "options";
var rr = "__oid__";
var sr = "__int__";
var ir = "__decimal128__";
var ar = "__request_timestamp__";
var or = "seconds";
var Br = "increment";
var ur = "__binary__";
var cr = {
  nullValue: "NULL_VALUE"
};
var lr = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: Zn
      }
    }
  }
};
var hr = {
  mapValue: {
    fields: {
      [zn]: {
        stringValue: Yn
      },
      [Wn]: {
        arrayValue: {}
      }
    }
  }
};
var Cr = {
  mapValue: {
    fields: {
      [Xn]: {
        nullValue: "NULL_VALUE"
      }
    }
  }
};
var dr = {
  mapValue: {
    fields: {
      [Zn]: {
        nullValue: "NULL_VALUE"
      }
    }
  }
};
var fr = {
  mapValue: {
    fields: {
      [rr]: {
        stringValue: ""
      }
    }
  }
};
var pr = {
  mapValue: {
    fields: {
      [ar]: {
        mapValue: {
          fields: {
            [or]: {
              integerValue: 0
            },
            [Br]: {
              integerValue: 0
            }
          }
        }
      }
    }
  }
};
var gr = {
  mapValue: {
    fields: {
      [er]: {
        mapValue: {
          fields: {
            [tr]: {
              stringValue: ""
            },
            [nr]: {
              stringValue: ""
            }
          }
        }
      }
    }
  }
};
(Qn = jn ||= {}).he = "regexValue";
Qn.Te = "bsonObjectIdValue";
Qn.Pe = "int32Value";
Qn.Ie = "decimal128Value";
Qn.Re = "bsonTimestampValue";
Qn.Ae = "bsonBinaryValue";
Qn.Ve = "minKeyValue";
Qn.de = "maxKeyValue";
Qn.fe = "maxValue";
Qn.me = "vectorValue";
Qn.pe = "serverTimestampValue";
Qn.ge = "regularMapValue";
var mr = {
  [Yn]: jn.me,
  [Zn]: jn.fe,
  [$n]: jn.pe
};
var Er = {
  [er]: jn.he,
  [rr]: jn.Te,
  [sr]: jn.Pe,
  [ir]: jn.Ie,
  [ar]: jn.Re,
  [ur]: jn.Ae,
  [Xn]: jn.Ve,
  [Zn]: jn.de
};
var Dr = new Set(Object.values(Er));
var wr = {
  booleanValue: true
};
var yr = {
  booleanValue: false
};
function _r(e) {
  if ("nullValue" in e) {
    return 0;
  }
  if ("booleanValue" in e) {
    return 2;
  }
  if ("integerValue" in e || "doubleValue" in e) {
    return 3;
  }
  if ("timestampValue" in e) {
    return 4;
  }
  if ("stringValue" in e) {
    return 7;
  }
  if ("bytesValue" in e) {
    return 8;
  }
  if ("referenceValue" in e) {
    return 9;
  }
  if ("geoPointValue" in e) {
    return 11;
  }
  if ("arrayValue" in e) {
    return 13;
  }
  if (!("mapValue" in e)) {
    return Tt(28295, {
      value: e
    });
  }
  switch (Zr(e)) {
    case jn.pe:
      return 6;
    case jn.fe:
      return 9007199254740991;
    case jn.me:
      return 14;
    case jn.he:
      return 12;
    case jn.Te:
      return 10;
    case jn.Pe:
    case jn.Ie:
      return 3;
    case jn.Re:
      return 5;
    case jn.Ae:
      return 8;
    case jn.Ve:
      return 1;
    case jn.de:
      return 16;
    default:
      return 15;
  }
}
function Ir(e, t, n) {
  if (e === t) {
    return true;
  }
  const r = _r(e);
  if (r !== _r(t)) {
    return false;
  }
  switch (r) {
    case 0:
    case 9007199254740991:
    case 16:
    case 1:
      return true;
    case 2:
      return e.booleanValue === t.booleanValue;
    case 6:
      return An(e).isEqual(An(t));
    case 4:
      return function (e, t) {
        if (typeof e.timestampValue == "string" && typeof t.timestampValue == "string" && e.timestampValue.length === t.timestampValue.length) {
          return e.timestampValue === t.timestampValue;
        }
        const n = Dn(e.timestampValue);
        const r = Dn(t.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      }(e, t);
    case 7:
      return e.stringValue === t.stringValue;
    case 8:
      return function (e, t) {
        return kr(e, t) === 0;
      }(e, t);
    case 9:
      return e.referenceValue === t.referenceValue;
    case 11:
      return function (e, t) {
        return wn(e.geoPointValue.latitude) === wn(t.geoPointValue.latitude) && wn(e.geoPointValue.longitude) === wn(t.geoPointValue.longitude);
      }(e, t);
    case 3:
      return function (e, t, n) {
        if (jr(e) && jr(t)) {
          return Fr(e, t) === 0;
        }
        if ("integerValue" in e && "integerValue" in t || Qr(e) && Qr(t)) {
          return br(e) === br(t);
        }
        let r;
        let s;
        if ("doubleValue" in e && "doubleValue" in t) {
          r = wn(e.doubleValue);
          s = wn(t.doubleValue);
        } else {
          if (!n?.ye) {
            return false;
          }
          r = wn(e.integerValue ?? e.doubleValue);
          s = wn(t.integerValue ?? t.doubleValue);
        }
        if (r === s) {
          return !!n?.we || qn(r) === qn(s);
        } else {
          return (n === undefined || !!n.be) && isNaN(r) && isNaN(s);
        }
      }(e, t, n);
    case 13:
      return Gt(e.arrayValue.values || [], t.arrayValue.values || [], (e, t) => Ir(e, t, n));
    case 14:
    case 15:
      return function (e, t, n) {
        const r = e.mapValue.fields || {};
        const s = t.mapValue.fields || {};
        if (Zt(r) !== Zt(s)) {
          return false;
        }
        for (const i in r) {
          if (r.hasOwnProperty(i) && (s[i] === undefined || !Ir(r[i], s[i], n))) {
            return false;
          }
        }
        return true;
      }(e, t, n);
    case 5:
      return Lr(e, t) === 0;
    case 12:
      return Gr(e, t) === 0;
    case 10:
      return Pr(e, t) === 0;
    default:
      return Tt(52216, {
        left: e
      });
  }
}
function vr(e, t) {
  return (e.values || []).find(e => Ir(e, t)) !== undefined;
}
function Tr(e, t) {
  if (e === t) {
    return 0;
  }
  const n = _r(e);
  const r = _r(t);
  if (n !== r) {
    return St(n, r);
  }
  switch (n) {
    case 0:
    case 1:
    case 16:
    case 9007199254740991:
      return 0;
    case 2:
      return St(e.booleanValue, t.booleanValue);
    case 3:
      return Ar(e, t);
    case 4:
      return Sr(e.timestampValue, t.timestampValue);
    case 6:
      return Sr(An(e), An(t));
    case 7:
      return xt(e.stringValue, t.stringValue);
    case 8:
      return kr(e, t);
    case 9:
      return function (e, t) {
        const n = e.split("/");
        const r = t.split("/");
        for (let s = 0; s < n.length && s < r.length; s++) {
          const e = St(n[s], r[s]);
          if (e !== 0) {
            return e;
          }
        }
        return St(n.length, r.length);
      }(e.referenceValue, t.referenceValue);
    case 11:
      return function (e, t) {
        const n = St(wn(e.latitude), wn(t.latitude));
        if (n !== 0) {
          return n;
        } else {
          return St(wn(e.longitude), wn(t.longitude));
        }
      }(e.geoPointValue, t.geoPointValue);
    case 13:
      return xr(e.arrayValue, t.arrayValue);
    case 14:
      return function (e, t) {
        const n = e.fields || {};
        const r = t.fields || {};
        const s = n[Wn]?.arrayValue;
        const i = r[Wn]?.arrayValue;
        const a = St(s?.values?.length || 0, i?.values?.length || 0);
        if (a !== 0) {
          return a;
        } else {
          return xr(s, i);
        }
      }(e.mapValue, t.mapValue);
    case 15:
      return function (e, t) {
        if (e === lr.mapValue && t === lr.mapValue) {
          return 0;
        }
        if (e === lr.mapValue) {
          return 1;
        }
        if (t === lr.mapValue) {
          return -1;
        }
        const n = e.fields || {};
        const r = Object.keys(n);
        const s = t.fields || {};
        const i = Object.keys(s);
        r.sort();
        i.sort();
        for (let a = 0; a < r.length && a < i.length; ++a) {
          const e = xt(r[a], i[a]);
          if (e !== 0) {
            return e;
          }
          const t = Tr(n[r[a]], s[i[a]]);
          if (t !== 0) {
            return t;
          }
        }
        return St(r.length, i.length);
      }(e.mapValue, t.mapValue);
    case 5:
      return Lr(e, t);
    case 12:
      return Gr(e, t);
    case 10:
      return Pr(e, t);
    default:
      throw Tt(23264, {
        Se: n
      });
  }
}
function br(e) {
  let t;
  t = Qr(e) ? e.mapValue.fields[sr].integerValue : e.integerValue || e.doubleValue;
  return wn(t);
}
function Nr(e) {
  return e.mapValue.fields[ir].stringValue;
}
function Ar(e, t) {
  if (jr(e) || jr(t)) {
    return Fr(e, t);
  }
  const n = br(e);
  const r = br(t);
  if (isNaN(n)) {
    if (isNaN(r)) {
      return 0;
    } else {
      return -1;
    }
  } else if (isNaN(r)) {
    return 1;
  } else {
    return St(n, r);
  }
}
function Fr(e, t) {
  const n = Or(e);
  const r = Or(t);
  if (n.oe() && r.oe()) {
    return 0;
  } else if (n.isNaN()) {
    if (r.isNaN()) {
      return 0;
    } else {
      return -1;
    }
  } else if (r.isNaN()) {
    return 1;
  } else {
    return n.compareTo(r);
  }
}
function Or(e) {
  if (jr(e)) {
    return Vn.fromString(Nr(e));
  } else {
    return Vn.fromNumber(br(e));
  }
}
function Sr(e, t) {
  if (typeof e == "string" && typeof t == "string" && e.length === t.length) {
    return St(e, t);
  }
  const n = Dn(e);
  const r = Dn(t);
  const s = St(n.seconds, r.seconds);
  if (s !== 0) {
    return s;
  } else {
    return St(n.nanos, r.nanos);
  }
}
function xr(e, t) {
  const n = e.values || [];
  const r = t.values || [];
  for (let s = 0; s < n.length && s < r.length; ++s) {
    const e = Tr(n[s], r[s]);
    if (e !== undefined && e !== 0) {
      return e;
    }
  }
  return St(n.length, r.length);
}
function Lr(e, t) {
  const n = e.mapValue.fields?.[ar].mapValue?.fields?.[or];
  const r = t.mapValue.fields?.[ar].mapValue?.fields?.[or];
  const s = e.mapValue.fields?.[ar].mapValue?.fields?.[Br];
  const i = t.mapValue.fields?.[ar].mapValue?.fields?.[Br];
  const a = Ar(n, r);
  if (a !== 0) {
    return a;
  } else {
    return Ar(s, i);
  }
}
function Rr(e) {
  if ("bytesValue" in e) {
    return {
      subtype: 0,
      bytes: yn(e.bytesValue)
    };
  }
  const t = e.mapValue?.fields?.[ur]?.bytesValue;
  if (!t) {
    throw new Error("Received incorrect value for BsonBinaryData");
  }
  const n = yn(t).toUint8Array();
  if (n.length === 0) {
    throw new Error("Received empty bytesValue for BsonBinaryData");
  }
  const r = n[0];
  const s = n.slice(1);
  return {
    subtype: r,
    bytes: mn.fromUint8Array(s)
  };
}
function kr(e, t) {
  const n = Rr(e);
  const r = Rr(t);
  if (n.subtype !== r.subtype) {
    if (n.subtype < r.subtype) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return n.bytes.compareTo(r.bytes);
  }
}
function Gr(e, t) {
  const n = e.mapValue.fields;
  const r = n?.[er]?.mapValue?.fields?.[tr]?.stringValue ?? "";
  const s = n?.[er]?.mapValue?.fields?.[nr]?.stringValue ?? "";
  const i = t.mapValue.fields;
  const a = i?.[er]?.mapValue?.fields?.[tr]?.stringValue ?? "";
  const o = i?.[er]?.mapValue?.fields?.[nr]?.stringValue ?? "";
  const B = xt(r, a);
  if (B !== 0) {
    return B;
  } else {
    return St(s, o);
  }
}
function Pr(e, t) {
  return xt(e.mapValue.fields?.[rr]?.stringValue ?? "", t.mapValue.fields?.[rr]?.stringValue ?? "");
}
function Mr(e) {
  return Vr(e);
}
function Vr(e) {
  if ("nullValue" in e) {
    return "null";
  } else if ("booleanValue" in e) {
    return "" + e.booleanValue;
  } else if ("integerValue" in e) {
    return "" + e.integerValue;
  } else if ("doubleValue" in e) {
    return "" + e.doubleValue;
  } else if ("timestampValue" in e) {
    return function (e) {
      const t = Dn(e);
      return `time(${t.seconds},${t.nanos})`;
    }(e.timestampValue);
  } else if ("stringValue" in e) {
    return e.stringValue;
  } else if ("bytesValue" in e) {
    return function (e) {
      return yn(e).toBase64();
    }(e.bytesValue);
  } else if ("referenceValue" in e) {
    return function (e) {
      return nn.fromName(e).toString();
    }(e.referenceValue);
  } else if ("geoPointValue" in e) {
    return function (e) {
      return `geo(${e.latitude},${e.longitude})`;
    }(e.geoPointValue);
  } else if ("arrayValue" in e) {
    return function (e) {
      let t = "[";
      let n = true;
      for (const r of e.values || []) {
        if (n) {
          n = false;
        } else {
          t += ",";
        }
        t += Vr(r);
      }
      return t + "]";
    }(e.arrayValue);
  } else if ("mapValue" in e) {
    return function (e) {
      const t = Object.keys(e.fields || {}).sort();
      let n = "{";
      let r = true;
      for (const s of t) {
        if (r) {
          r = false;
        } else {
          n += ",";
        }
        n += `${s}:${Vr(e.fields[s])}`;
      }
      return n + "}";
    }(e.mapValue);
  } else {
    return Tt(61005, {
      value: e
    });
  }
}
function Hr(e) {
  switch (_r(e)) {
    case 0:
    case 2:
      return 4;
    case 3:
      if (jr(e)) {
        return 16;
      } else {
        return 8;
      }
    case 4:
    case 11:
      return 16;
    case 6:
      const t = Nn(e);
      if (t) {
        return 16 + Hr(t);
      } else {
        return 16;
      }
    case 7:
      return e.stringValue.length * 2;
    case 8:
      if ("bytesValue" in e) {
        return yn(e.bytesValue).approximateByteSize();
      } else {
        return Ur(e.mapValue);
      }
    case 9:
      return e.referenceValue.length;
    case 13:
      return function (e) {
        return (e.values || []).reduce((e, t) => e + Hr(t), 0);
      }(e.arrayValue);
    case 14:
    case 15:
    case 12:
    case 10:
    case 5:
    case 1:
    case 16:
      return Ur(e.mapValue);
    default:
      throw Tt(13486, {
        value: e
      });
  }
}
function Ur(e) {
  let t = 0;
  en(e.fields, (e, n) => {
    t += e.length + Hr(n);
  });
  return t;
}
function qr(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`
  };
}
function Jr(e) {
  return !!e && "integerValue" in e;
}
function Kr(e) {
  return !!e && "doubleValue" in e;
}
function jr(e) {
  if (!e.mapValue?.fields) {
    return false;
  }
  const t = e.mapValue.fields;
  return Zt(t) === 1 && t[ir] && !!t[ir].stringValue;
}
function Qr(e) {
  if (!e.mapValue?.fields) {
    return false;
  }
  const t = e.mapValue.fields;
  return Zt(t) === 1 && t[sr]?.integerValue !== undefined;
}
function zr(e) {
  return Jr(e) || Kr(e) || !!e && Qr(e) || !!e && jr(e);
}
function Yr(e) {
  return !!e && "arrayValue" in e;
}
function Wr(e) {
  return !!e && "nullValue" in e;
}
function $r(e) {
  return !!Kr(e) && !!isNaN(Number(e.doubleValue)) || !!jr(e) && Nr(e) === "NaN";
}
function Xr(e) {
  return !!e && "mapValue" in e;
}
function Zr(e) {
  if (!e.mapValue?.fields) {
    return jn.ge;
  }
  const t = e.mapValue.fields;
  const n = t[zn]?.stringValue;
  if (n && mr[n]) {
    return mr[n];
  }
  if (Zt(t) === 1) {
    const e = Object.keys(t);
    return Er[e[0]] ?? jn.ge;
  }
  return jn.ge;
}
function es(e) {
  return (e?.mapValue?.fields || {})[zn]?.stringValue === Yn;
}
function ts(e) {
  return (e?.mapValue?.fields || {})[Wn]?.arrayValue;
}
function ns(e) {
  if (e.geoPointValue) {
    return {
      geoPointValue: {
        ...e.geoPointValue
      }
    };
  }
  if (e.timestampValue && typeof e.timestampValue == "object") {
    return {
      timestampValue: {
        ...e.timestampValue
      }
    };
  }
  if (e.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    en(e.mapValue.fields, (e, n) => t.mapValue.fields[e] = ns(n));
    return t;
  }
  if (e.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n) {
      t.arrayValue.values[n] = ns(e.arrayValue.values[n]);
    }
    return t;
  }
  return {
    ...e
  };
}
function rs(e) {
  if ("nullValue" in e) {
    return cr;
  }
  if ("booleanValue" in e) {
    return {
      booleanValue: false
    };
  }
  if ("integerValue" in e || "doubleValue" in e) {
    return {
      doubleValue: NaN
    };
  }
  if ("timestampValue" in e) {
    return {
      timestampValue: {
        seconds: Number.MIN_SAFE_INTEGER
      }
    };
  }
  if ("stringValue" in e) {
    return {
      stringValue: ""
    };
  }
  if ("bytesValue" in e) {
    return {
      bytesValue: ""
    };
  }
  if ("referenceValue" in e) {
    return qr(Sn.empty(), nn.empty());
  }
  if ("geoPointValue" in e) {
    return {
      geoPointValue: {
        latitude: -90,
        longitude: -180
      }
    };
  }
  if ("arrayValue" in e) {
    return {
      arrayValue: {}
    };
  }
  if (!("mapValue" in e)) {
    return Tt(35942, {
      value: e
    });
  }
  switch (Zr(e)) {
    case jn.me:
      return hr;
    case jn.Te:
      return fr;
    case jn.Re:
      return pr;
    case jn.Ae:
      return {
        bytesValue: ""
      };
    case jn.he:
      return gr;
    case jn.Pe:
    case jn.Ie:
      return {
        doubleValue: NaN
      };
    case jn.Ve:
      return Cr;
    case jn.de:
      return dr;
    default:
      return {
        mapValue: {}
      };
  }
}
function ss(e) {
  if ("nullValue" in e) {
    return Cr;
  }
  if ("booleanValue" in e) {
    return {
      doubleValue: NaN
    };
  }
  if ("integerValue" in e || "doubleValue" in e) {
    return {
      timestampValue: {
        seconds: Number.MIN_SAFE_INTEGER
      }
    };
  }
  if ("timestampValue" in e) {
    return pr;
  }
  if ("stringValue" in e) {
    return {
      bytesValue: ""
    };
  }
  if ("bytesValue" in e) {
    return qr(Sn.empty(), nn.empty());
  }
  if ("referenceValue" in e) {
    return fr;
  }
  if ("geoPointValue" in e) {
    return gr;
  }
  if ("arrayValue" in e) {
    return hr;
  }
  if (!("mapValue" in e)) {
    return Tt(61959, {
      value: e
    });
  }
  switch (Zr(e)) {
    case jn.me:
      return {
        mapValue: {}
      };
    case jn.Te:
      return {
        geoPointValue: {
          latitude: -90,
          longitude: -180
        }
      };
    case jn.Re:
      return {
        stringValue: ""
      };
    case jn.Ae:
      return qr(Sn.empty(), nn.empty());
    case jn.he:
      return {
        arrayValue: {}
      };
    case jn.Pe:
    case jn.Ie:
      return {
        timestampValue: {
          seconds: Number.MIN_SAFE_INTEGER
        }
      };
    case jn.Ve:
      return {
        booleanValue: false
      };
    case jn.de:
      return lr;
    default:
      return dr;
  }
}
function is(e, t) {
  const n = Tr(e.value, t.value);
  if (n !== 0) {
    return n;
  } else if (e.inclusive && !t.inclusive) {
    return -1;
  } else if (!e.inclusive && t.inclusive) {
    return 1;
  } else {
    return 0;
  }
}
function as(e, t) {
  const n = Tr(e.value, t.value);
  if (n !== 0) {
    return n;
  } else if (e.inclusive && !t.inclusive) {
    return 1;
  } else if (!e.inclusive && t.inclusive) {
    return -1;
  } else {
    return 0;
  }
}
var os = class e {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new e({
      mapValue: {}
    });
  }
  field(e) {
    if (e.isEmpty()) {
      return this.value;
    }
    {
      let t = this.value;
      for (let n = 0; n < e.length - 1; ++n) {
        t = (t.mapValue.fields || {})[e.get(n)];
        if (!Xr(t)) {
          return null;
        }
      }
      t = (t.mapValue.fields || {})[e.lastSegment()];
      return t || null;
    }
  }
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = ns(t);
  }
  setAll(e) {
    let t = $t.emptyPath();
    let n = {};
    let r = [];
    e.forEach((e, s) => {
      if (!t.isImmediateParentOf(s)) {
        const e = this.getFieldsMap(t);
        this.applyChanges(e, n, r);
        n = {};
        r = [];
        t = s.popLast();
      }
      if (e) {
        n[s.lastSegment()] = ns(e);
      } else {
        r.push(s.lastSegment());
      }
    });
    const s = this.getFieldsMap(t);
    this.applyChanges(s, n, r);
  }
  delete(e) {
    const t = this.field(e.popLast());
    if (Xr(t) && t.mapValue.fields) {
      delete t.mapValue.fields[e.lastSegment()];
    }
  }
  isEqual(e) {
    return Ir(this.value, e.value);
  }
  getFieldsMap(e) {
    let t = this.value;
    if (!t.mapValue.fields) {
      t.mapValue = {
        fields: {}
      };
    }
    for (let n = 0; n < e.length; ++n) {
      let r = t.mapValue.fields[e.get(n)];
      if (!Xr(r) || !r.mapValue.fields) {
        r = {
          mapValue: {
            fields: {}
          }
        };
        t.mapValue.fields[e.get(n)] = r;
      }
      t = r;
    }
    return t.mapValue.fields;
  }
  applyChanges(e, t, n) {
    en(t, (t, n) => e[t] = n);
    for (const r of n) {
      delete e[r];
    }
  }
  clone() {
    return new e(ns(this.value));
  }
};
function Bs(e) {
  const t = [];
  en(e.fields, (e, n) => {
    const r = new $t([e]);
    if (Xr(n) && !function (e) {
      return Dr.has(Zr(e));
    }(n)) {
      const e = Bs(n.mapValue).fields;
      if (e.length === 0) {
        t.push(r);
      } else {
        for (const n of e) {
          t.push(r.child(n));
        }
      }
    } else {
      t.push(r);
    }
  });
  return new Xt(t);
}
function us(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) {
      return {
        doubleValue: "NaN"
      };
    }
    if (t === Infinity) {
      return {
        doubleValue: "Infinity"
      };
    }
    if (t === -Infinity) {
      return {
        doubleValue: "-Infinity"
      };
    }
  }
  return {
    doubleValue: qn(t) ? "-0" : t
  };
}
function cs(e) {
  return {
    integerValue: "" + e
  };
}
function ls(e, t, n) {
  if (Jn(t)) {
    return cs(t);
  } else {
    return us(e, t);
  }
}
var hs = class {
  constructor() {
    this._ = undefined;
  }
};
function Cs(e, t, n) {
  if (e instanceof ps) {
    return function (e, t) {
      const n = {
        fields: {
          [In]: {
            stringValue: _n
          },
          [Tn]: {
            timestampValue: {
              seconds: e.seconds,
              nanos: e.nanoseconds
            }
          }
        }
      };
      if (t && bn(t)) {
        t = Nn(t);
      }
      if (t) {
        n.fields[vn] = t;
      }
      return {
        mapValue: n
      };
    }(n, t);
  } else if (e instanceof gs) {
    return ms(e, t);
  } else if (e instanceof Es) {
    return Ds(e, t);
  } else if (e instanceof ys) {
    return function (e, t) {
      const n = fs(e, t);
      const r = vs(n) + vs(e.xe);
      if (jr(n) || jr(e.xe)) {
        return {
          mapValue: {
            fields: {
              [ir]: {
                stringValue: r.toString()
              }
            }
          }
        };
      } else if (Qr(n)) {
        if (Kr(e.xe)) {
          return {
            doubleValue: r
          };
        } else if (Jr(e.xe)) {
          return {
            integerValue: r.toString()
          };
        } else {
          return {
            mapValue: {
              fields: {
                [sr]: cs(r)
              }
            }
          };
        }
      } else if (Jr(n) && (Jr(e.xe) || Qr(e.xe))) {
        return cs(r);
      } else {
        return us(e.serializer, r);
      }
    }(e, t);
  } else if (e instanceof _s) {
    return function (e, t) {
      if (zr(t)) {
        if ($r(e.xe)) {
          return e.xe;
        } else if ($r(t)) {
          return t;
        } else if (Ar(e.xe, t) < 0) {
          return e.xe;
        } else {
          return t;
        }
      } else {
        return e.xe;
      }
    }(e, t);
  } else if (e instanceof Is) {
    return function (e, t) {
      if (zr(t)) {
        if ($r(e.xe)) {
          return e.xe;
        } else if ($r(t)) {
          return t;
        } else if (Ar(e.xe, t) > 0) {
          return e.xe;
        } else {
          return t;
        }
      } else {
        return e.xe;
      }
    }(e, t);
  } else {
    return undefined;
  }
}
function ds(e, t, n) {
  if (e instanceof gs) {
    return ms(e, t);
  } else if (e instanceof Es) {
    return Ds(e, t);
  } else {
    return n;
  }
}
function fs(e, t) {
  if (e instanceof ys) {
    if (zr(t)) {
      return t;
    } else {
      return {
        integerValue: 0
      };
    }
  } else {
    return null;
  }
}
var ps = class extends hs {};
var gs = class extends hs {
  constructor(e) {
    super();
    this.elements = e;
  }
};
function ms(e, t) {
  const n = Ts(t);
  for (const r of e.elements) {
    if (!n.some(e => Ir(e, r))) {
      n.push(r);
    }
  }
  return {
    arrayValue: {
      values: n
    }
  };
}
var Es = class extends hs {
  constructor(e) {
    super();
    this.elements = e;
  }
};
function Ds(e, t) {
  let n = Ts(t);
  for (const r of e.elements) {
    n = n.filter(e => !Ir(e, r));
  }
  return {
    arrayValue: {
      values: n
    }
  };
}
var ws = class extends hs {
  constructor(e, t) {
    super();
    this.serializer = e;
    this.xe = t;
  }
};
var ys = class extends ws {};
var _s = class extends ws {};
var Is = class extends ws {};
function vs(e) {
  if (Jr(e)) {
    return wn(e.integerValue);
  } else if (Kr(e)) {
    return wn(e.doubleValue);
  } else if (Qr(e)) {
    return wn(e.mapValue.fields[sr].integerValue);
  } else if (jr(e)) {
    return parseFloat(e.mapValue.fields[ir].stringValue);
  } else {
    return 0;
  }
}
function Ts(e) {
  if (Yr(e) && e.arrayValue.values) {
    return e.arrayValue.values.slice();
  } else {
    return [];
  }
}
var bs = class {
  constructor(e, t) {
    this.field = e;
    this.transform = t;
  }
};
var Ns = class {
  constructor(e, t) {
    this.version = e;
    this.transformResults = t;
  }
};
var As = class e {
  constructor(e, t) {
    this.updateTime = e;
    this.exists = t;
  }
  static none() {
    return new e();
  }
  static exists(t) {
    return new e(undefined, t);
  }
  static updateTime(t) {
    return new e(t);
  }
  get isNone() {
    return this.updateTime === undefined && this.exists === undefined;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
};
function Fs(e, t) {
  if (e.updateTime !== undefined) {
    return t.isFoundDocument() && t.version.isEqual(e.updateTime);
  } else {
    return e.exists === undefined || e.exists === t.isFoundDocument();
  }
}
var Os = class {};
function Ss(e, t) {
  if (!e.hasLocalMutations || t && t.fields.length === 0) {
    return null;
  }
  if (t === null) {
    if (e.isNoDocument()) {
      return new Us(e.key, As.none());
    } else {
      return new Gs(e.key, e.data, As.none());
    }
  }
  {
    const n = e.data;
    const r = os.empty();
    let s = new Ut($t.comparator);
    for (let e of t.fields) {
      if (!s.has(e)) {
        let t = n.field(e);
        if (t === null && e.length > 1) {
          e = e.popLast();
          t = n.field(e);
        }
        if (t === null) {
          r.delete(e);
        } else {
          r.set(e, t);
        }
        s = s.add(e);
      }
    }
    return new Ps(e.key, r, new Xt(s.toArray()), As.none());
  }
}
function xs(e, t, n) {
  if (e instanceof Gs) {
    (function (e, t, n) {
      const r = e.value.clone();
      const s = Vs(e.fieldTransforms, t, n.transformResults);
      r.setAll(s);
      t.convertToFoundDocument(n.version, r).setHasCommittedMutations();
    })(e, t, n);
  } else if (e instanceof Ps) {
    (function (e, t, n) {
      if (!Fs(e.precondition, t)) {
        t.convertToUnknownDocument(n.version);
        return;
      }
      const r = Vs(e.fieldTransforms, t, n.transformResults);
      const s = t.data;
      s.setAll(Ms(e));
      s.setAll(r);
      t.convertToFoundDocument(n.version, s).setHasCommittedMutations();
    })(e, t, n);
  } else {
    (function (e, t, n) {
      t.convertToNoDocument(n.version).setHasCommittedMutations();
    })(0, t, n);
  }
}
function Ls(e, t, n, r) {
  if (e instanceof Gs) {
    return function (e, t, n, r) {
      if (!Fs(e.precondition, t)) {
        return n;
      }
      const s = e.value.clone();
      const i = Hs(e.fieldTransforms, r, t);
      s.setAll(i);
      t.convertToFoundDocument(t.version, s).setHasLocalMutations();
      return null;
    }(e, t, n, r);
  } else if (e instanceof Ps) {
    return function (e, t, n, r) {
      if (!Fs(e.precondition, t)) {
        return n;
      }
      const s = Hs(e.fieldTransforms, r, t);
      const i = t.data;
      i.setAll(Ms(e));
      i.setAll(s);
      t.convertToFoundDocument(t.version, i).setHasLocalMutations();
      if (n === null) {
        return null;
      } else {
        return n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e => e.field));
      }
    }(e, t, n, r);
  } else {
    return function (e, t, n) {
      if (Fs(e.precondition, t)) {
        t.convertToNoDocument(t.version).setHasLocalMutations();
        return null;
      } else {
        return n;
      }
    }(e, t, n);
  }
}
function Rs(e, t) {
  let n = null;
  for (const r of e.fieldTransforms) {
    const e = t.data.field(r.field);
    const s = fs(r.transform, e || null);
    if (s != null) {
      if (n === null) {
        n = os.empty();
      }
      n.set(r.field, s);
    }
  }
  return n || null;
}
function ks(e, t) {
  return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function (e, t) {
    return e === undefined && t === undefined || !!e && !!t && Gt(e, t, (e, t) => function (e, t) {
      return e.field.isEqual(t.field) && function (e, t) {
        if (e instanceof gs && t instanceof gs || e instanceof Es && t instanceof Es) {
          return Gt(e.elements, t.elements, Ir);
        } else if (e instanceof ys && t instanceof ys || e instanceof _s && t instanceof _s || e instanceof Is && t instanceof Is) {
          return Ir(e.xe, t.xe);
        } else {
          return e instanceof ps && t instanceof ps;
        }
      }(e.transform, t.transform);
    }(e, t));
  }(e.fieldTransforms, t.fieldTransforms) && (e.type === 0 ? e.value.isEqual(t.value) : e.type !== 1 || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask));
}
var Gs = class extends Os {
  constructor(e, t, n, r = []) {
    super();
    this.key = e;
    this.value = t;
    this.precondition = n;
    this.fieldTransforms = r;
    this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var Ps = class extends Os {
  constructor(e, t, n, r, s = []) {
    super();
    this.key = e;
    this.data = t;
    this.fieldMask = n;
    this.precondition = r;
    this.fieldTransforms = s;
    this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function Ms(e) {
  const t = new Map();
  e.fieldMask.fields.forEach(n => {
    if (!n.isEmpty()) {
      const r = e.data.field(n);
      t.set(n, r);
    }
  });
  return t;
}
function Vs(e, t, n) {
  const r = new Map();
  Nt(e.length === n.length, 32656, {
    ve: n.length,
    De: e.length
  });
  for (let s = 0; s < n.length; s++) {
    const i = e[s];
    const a = i.transform;
    const o = t.data.field(i.field);
    r.set(i.field, ds(a, o, n[s]));
  }
  return r;
}
function Hs(e, t, n) {
  const r = new Map();
  for (const s of e) {
    const e = s.transform;
    const i = n.data.field(s.field);
    r.set(s.field, Cs(e, i, t));
  }
  return r;
}
var Us = class extends Os {
  constructor(e, t) {
    super();
    this.key = e;
    this.precondition = t;
    this.type = 2;
    this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var qs = class extends Os {
  constructor(e, t) {
    super();
    this.key = e;
    this.precondition = t;
    this.type = 3;
    this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var Js = class {
  constructor(e, t) {
    this.position = e;
    this.inclusive = t;
  }
};
function Ks(e, t, n) {
  let r = 0;
  for (let s = 0; s < e.position.length; s++) {
    const i = t[s];
    const a = e.position[s];
    r = i.field.isKeyField() ? nn.comparator(nn.fromName(a.referenceValue), n.key) : Tr(a, n.data.field(i.field));
    if (i.dir === "desc") {
      r *= -1;
    }
    if (r !== 0) {
      break;
    }
  }
  return r;
}
function js(e, t) {
  if (e === null) {
    return t === null;
  }
  if (t === null) {
    return false;
  }
  if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) {
    return false;
  }
  for (let n = 0; n < e.position.length; n++) {
    if (!Ir(e.position[n], t.position[n])) {
      return false;
    }
  }
  return true;
}
var Qs = class {};
var zs = class e extends Qs {
  constructor(e, t, n) {
    super();
    this.field = e;
    this.op = t;
    this.value = n;
  }
  static create(t, n, r) {
    if (t.isKeyField()) {
      if (n === "in" || n === "not-in") {
        return this.createKeyFieldInFilter(t, n, r);
      } else {
        return new si(t, n, r);
      }
    } else if (n === "array-contains") {
      return new Bi(t, r);
    } else if (n === "in") {
      return new ui(t, r);
    } else if (n === "not-in") {
      return new ci(t, r);
    } else if (n === "array-contains-any") {
      return new li(t, r);
    } else {
      return new e(t, n, r);
    }
  }
  static createKeyFieldInFilter(e, t, n) {
    if (t === "in") {
      return new ii(e, n);
    } else {
      return new ai(e, n);
    }
  }
  matches(e) {
    const t = e.data.field(this.field);
    if (this.op === "!=") {
      return t !== null && t.nullValue === undefined && this.matchesComparison(Tr(t, this.value));
    } else {
      return t !== null && _r(this.value) === _r(t) && this.matchesComparison(Tr(t, this.value));
    }
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return Tt(47266, {
          operator: this.op
        });
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
};
var Ys = class e extends Qs {
  constructor(e, t) {
    super();
    this.filters = e;
    this.op = t;
    this.Ce = null;
  }
  static create(t, n) {
    return new e(t, n);
  }
  matches(e) {
    if (Ws(this)) {
      return this.filters.find(t => !t.matches(e)) === undefined;
    } else {
      return this.filters.find(t => t.matches(e)) !== undefined;
    }
  }
  getFlattenedFilters() {
    if (this.Ce === null) {
      this.Ce = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), []);
    }
    return this.Ce;
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
};
function Ws(e) {
  return e.op === "and";
}
function $s(e) {
  return e.op === "or";
}
function Xs(e) {
  return Zs(e) && Ws(e);
}
function Zs(e) {
  for (const t of e.filters) {
    if (t instanceof Ys) {
      return false;
    }
  }
  return true;
}
function ei(e) {
  if (e instanceof zs) {
    return e.field.canonicalString() + e.op.toString() + Mr(e.value);
  }
  if (Xs(e)) {
    return e.filters.map(e => ei(e)).join(",");
  }
  {
    const t = e.filters.map(e => ei(e)).join(",");
    return `${e.op}(${t})`;
  }
}
function ti(e, t) {
  if (e instanceof zs) {
    return function (e, t) {
      return t instanceof zs && e.op === t.op && e.field.isEqual(t.field) && Ir(e.value, t.value);
    }(e, t);
  } else if (e instanceof Ys) {
    return function (e, t) {
      return t instanceof Ys && e.op === t.op && e.filters.length === t.filters.length && e.filters.reduce((e, n, r) => e && ti(n, t.filters[r]), true);
    }(e, t);
  } else {
    Tt(19439);
    return;
  }
}
function ni(e, t) {
  const n = e.filters.concat(t);
  return Ys.create(n, e.op);
}
function ri(e) {
  if (e instanceof zs) {
    return function (e) {
      return `${e.field.canonicalString()} ${e.op} ${Mr(e.value)}`;
    }(e);
  } else if (e instanceof Ys) {
    return function (e) {
      return e.op.toString() + " {" + e.getFilters().map(ri).join(" ,") + "}";
    }(e);
  } else {
    return "Filter";
  }
}
var si = class extends zs {
  constructor(e, t, n) {
    super(e, t, n);
    this.key = nn.fromName(n.referenceValue);
  }
  matches(e) {
    const t = nn.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
};
var ii = class extends zs {
  constructor(e, t) {
    super(e, "in", t);
    this.keys = oi("in", t);
  }
  matches(e) {
    return this.keys.some(t => t.isEqual(e.key));
  }
};
var ai = class extends zs {
  constructor(e, t) {
    super(e, "not-in", t);
    this.keys = oi("not-in", t);
  }
  matches(e) {
    return !this.keys.some(t => t.isEqual(e.key));
  }
};
function oi(e, t) {
  return (t.arrayValue?.values || []).map(e => nn.fromName(e.referenceValue));
}
var Bi = class extends zs {
  constructor(e, t) {
    super(e, "array-contains", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return Yr(t) && vr(t.arrayValue, this.value);
  }
};
var ui = class extends zs {
  constructor(e, t) {
    super(e, "in", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return t !== null && vr(this.value.arrayValue, t);
  }
};
var ci = class extends zs {
  constructor(e, t) {
    super(e, "not-in", t);
  }
  matches(e) {
    if (vr(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) {
      return false;
    }
    const t = e.data.field(this.field);
    return t !== null && t.nullValue === undefined && !vr(this.value.arrayValue, t);
  }
};
var li = class extends zs {
  constructor(e, t) {
    super(e, "array-contains-any", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return !!Yr(t) && !!t.arrayValue.values && t.arrayValue.values.some(e => vr(this.value.arrayValue, e));
  }
};
var hi = class {
  constructor(e, t = "asc") {
    this.field = e;
    this.dir = t;
  }
};
function Ci(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
var di = class e {
  static fromTimestamp(t) {
    return new e(t);
  }
  static min() {
    return new e(new pn(0, 0));
  }
  static max() {
    return new e(new pn(253402300799, 999999999));
  }
  constructor(e) {
    this.timestamp = e;
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return this.timestamp.seconds * 1000000 + this.timestamp.nanoseconds / 1000;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var fi = class e {
  constructor(e, t, n, r, s, i, a) {
    this.key = e;
    this.documentType = t;
    this.version = n;
    this.readTime = r;
    this.createTime = s;
    this.data = i;
    this.documentState = a;
  }
  static newInvalidDocument(t) {
    return new e(t, 0, di.min(), di.min(), di.min(), os.empty(), 0);
  }
  static newFoundDocument(t, n, r, s) {
    return new e(t, 1, n, di.min(), r, s, 0);
  }
  static newNoDocument(t, n) {
    return new e(t, 2, n, di.min(), di.min(), os.empty(), 0);
  }
  static newUnknownDocument(t, n) {
    return new e(t, 3, n, di.min(), di.min(), os.empty(), 2);
  }
  convertToFoundDocument(e, t) {
    if (!!this.createTime.isEqual(di.min()) && (this.documentType === 2 || this.documentType === 0)) {
      this.createTime = e;
    }
    this.version = e;
    this.documentType = 1;
    this.data = t;
    this.documentState = 0;
    return this;
  }
  convertToNoDocument(e) {
    this.version = e;
    this.documentType = 2;
    this.data = os.empty();
    this.documentState = 0;
    return this;
  }
  convertToUnknownDocument(e) {
    this.version = e;
    this.documentType = 3;
    this.data = os.empty();
    this.documentState = 2;
    return this;
  }
  setHasCommittedMutations() {
    this.documentState = 2;
    return this;
  }
  setHasLocalMutations() {
    this.documentState = 1;
    this.version = di.min();
    return this;
  }
  setReadTime(e) {
    this.readTime = e;
    return this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
  }
  mutableCopy() {
    return new e(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var pi = -1;
var gi = class {
  constructor(e, t, n, r) {
    this.indexId = e;
    this.collectionGroup = t;
    this.fields = n;
    this.indexState = r;
  }
};
function mi(e) {
  return e.fields.find(e => e.kind === 2);
}
function Ei(e) {
  return e.fields.filter(e => e.kind !== 2);
}
gi.UNKNOWN_ID = -1;
var Di = class {
  constructor(e, t) {
    this.fieldPath = e;
    this.kind = t;
  }
};
var wi = class e {
  constructor(e, t) {
    this.sequenceNumber = e;
    this.offset = t;
  }
  static empty() {
    return new e(0, Ii.min());
  }
};
function yi(e, t) {
  const n = e.toTimestamp().seconds;
  const r = e.toTimestamp().nanoseconds + 1;
  const s = di.fromTimestamp(r === 1000000000 ? new pn(n + 1, 0) : new pn(n, r));
  return new Ii(s, nn.empty(), t);
}
function _i(e) {
  return new Ii(e.readTime, e.key, pi);
}
var Ii = class e {
  constructor(e, t, n) {
    this.readTime = e;
    this.documentKey = t;
    this.largestBatchId = n;
  }
  static min() {
    return new e(di.min(), nn.empty(), pi);
  }
  static max() {
    return new e(di.max(), nn.empty(), pi);
  }
};
function vi(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  if (n !== 0) {
    return n;
  } else {
    n = nn.comparator(e.documentKey, t.documentKey);
    if (n !== 0) {
      return n;
    } else {
      return St(e.largestBatchId, t.largestBatchId);
    }
  }
}
var Ti = class {
  constructor(e, t = null, n = [], r = [], s = null, i = null, a = null) {
    this.path = e;
    this.collectionGroup = t;
    this.orderBy = n;
    this.filters = r;
    this.limit = s;
    this.startAt = i;
    this.endAt = a;
    this.Fe = null;
  }
};
function bi(e, t = null, n = [], r = [], s = null, i = null, a = null) {
  return new Ti(e, t, n, r, s, i, a);
}
function Ni(e) {
  const t = At(e);
  if (t.Fe === null) {
    let e = t.path.canonicalString();
    if (t.collectionGroup !== null) {
      e += "|cg:" + t.collectionGroup;
    }
    e += "|f:";
    e += t.filters.map(e => ei(e)).join(",");
    e += "|ob:";
    e += t.orderBy.map(e => function (e) {
      return e.field.canonicalString() + e.dir;
    }(e)).join(",");
    if (!Un(t.limit)) {
      e += "|l:";
      e += t.limit;
    }
    if (t.startAt) {
      e += "|lb:";
      e += t.startAt.inclusive ? "b:" : "a:";
      e += t.startAt.position.map(e => Mr(e)).join(",");
    }
    if (t.endAt) {
      e += "|ub:";
      e += t.endAt.inclusive ? "a:" : "b:";
      e += t.endAt.position.map(e => Mr(e)).join(",");
    }
    t.Fe = e;
  }
  return t.Fe;
}
function Ai(e, t) {
  if (e.limit !== t.limit) {
    return false;
  }
  if (e.orderBy.length !== t.orderBy.length) {
    return false;
  }
  for (let n = 0; n < e.orderBy.length; n++) {
    if (!Ci(e.orderBy[n], t.orderBy[n])) {
      return false;
    }
  }
  if (e.filters.length !== t.filters.length) {
    return false;
  }
  for (let n = 0; n < e.filters.length; n++) {
    if (!ti(e.filters[n], t.filters[n])) {
      return false;
    }
  }
  return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!js(e.startAt, t.startAt) && js(e.endAt, t.endAt);
}
function Fi(e) {
  return !!e.isCorePipeline;
}
function Oi(e) {
  return !!e.path && nn.isDocumentKey(e.path) && e.collectionGroup === null && e.filters.length === 0;
}
function Si(e, t) {
  return e.filters.filter(e => e instanceof zs && e.field.isEqual(t));
}
function xi(e, t, n) {
  let r = cr;
  let s = true;
  for (const i of Si(e, t)) {
    let e = cr;
    let t = true;
    switch (i.op) {
      case "<":
      case "<=":
        e = rs(i.value);
        break;
      case "==":
      case "in":
      case ">=":
        e = i.value;
        break;
      case ">":
        e = i.value;
        t = false;
        break;
      case "!=":
      case "not-in":
        e = Cr;
    }
    if (is({
      value: r,
      inclusive: s
    }, {
      value: e,
      inclusive: t
    }) < 0) {
      r = e;
      s = t;
    }
  }
  if (n !== null) {
    for (let i = 0; i < e.orderBy.length; ++i) {
      if (e.orderBy[i].field.isEqual(t)) {
        const e = n.position[i];
        if (is({
          value: r,
          inclusive: s
        }, {
          value: e,
          inclusive: n.inclusive
        }) < 0) {
          r = e;
          s = n.inclusive;
        }
        break;
      }
    }
  }
  return {
    value: r,
    inclusive: s
  };
}
function Li(e, t, n) {
  let r = lr;
  let s = true;
  for (const i of Si(e, t)) {
    let e = lr;
    let t = true;
    switch (i.op) {
      case ">=":
      case ">":
        e = ss(i.value);
        t = false;
        break;
      case "==":
      case "in":
      case "<=":
        e = i.value;
        break;
      case "<":
        e = i.value;
        t = false;
        break;
      case "!=":
      case "not-in":
        e = dr;
    }
    if (as({
      value: r,
      inclusive: s
    }, {
      value: e,
      inclusive: t
    }) > 0) {
      r = e;
      s = t;
    }
  }
  if (n !== null) {
    for (let i = 0; i < e.orderBy.length; ++i) {
      if (e.orderBy[i].field.isEqual(t)) {
        const e = n.position[i];
        if (as({
          value: r,
          inclusive: s
        }, {
          value: e,
          inclusive: n.inclusive
        }) > 0) {
          r = e;
          s = n.inclusive;
        }
        break;
      }
    }
  }
  return {
    value: r,
    inclusive: s
  };
}
var Ri = class {
  constructor(e, t = null, n = [], r = [], s = null, i = "F", a = null, o = null) {
    this.path = e;
    this.collectionGroup = t;
    this.explicitOrderBy = n;
    this.filters = r;
    this.limit = s;
    this.limitType = i;
    this.startAt = a;
    this.endAt = o;
    this.Oe = null;
    this.Me = null;
    this.Ne = null;
    this.startAt;
    this.endAt;
  }
};
function ki(e, t, n, r, s, i, a, o) {
  return new Ri(e, t, n, r, s, i, a, o);
}
function Gi(e) {
  return new Ri(e);
}
function Pi(e) {
  return e.filters.length === 0 && e.limit === null && e.startAt == null && e.endAt == null && (e.explicitOrderBy.length === 0 || e.explicitOrderBy.length === 1 && e.explicitOrderBy[0].field.isKeyField());
}
function Mi(e) {
  return e.collectionGroup !== null;
}
function Vi(e) {
  const t = At(e);
  if (t.Oe === null) {
    t.Oe = [];
    const e = new Set();
    for (const r of t.explicitOrderBy) {
      t.Oe.push(r);
      e.add(r.field.canonicalString());
    }
    const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
    (function (e) {
      let t = new Ut($t.comparator);
      e.filters.forEach(e => {
        e.getFlattenedFilters().forEach(e => {
          if (e.isInequality()) {
            t = t.add(e.field);
          }
        });
      });
      return t;
    })(t).forEach(r => {
      if (!e.has(r.canonicalString()) && !r.isKeyField()) {
        t.Oe.push(new hi(r, n));
      }
    });
    if (!e.has($t.keyField().canonicalString())) {
      t.Oe.push(new hi($t.keyField(), n));
    }
  }
  return t.Oe;
}
function Hi(e) {
  const t = At(e);
  t.Me ||= function (e, t) {
    if (e.limitType === "F") {
      return bi(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
    }
    {
      t = t.map(e => {
        const t = e.dir === "desc" ? "asc" : "desc";
        return new hi(e.field, t);
      });
      const n = e.endAt ? new Js(e.endAt.position, e.endAt.inclusive) : null;
      const r = e.startAt ? new Js(e.startAt.position, e.startAt.inclusive) : null;
      return bi(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
    }
  }(t, Vi(e));
  return t.Me;
}
function Ui(e, t) {
  const n = e.filters.concat([t]);
  return new Ri(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt);
}
function qi(e, t, n) {
  return new Ri(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function Ji(e, t) {
  return Ai(Hi(e), Hi(t)) && e.limitType === t.limitType;
}
function Ki(e) {
  return `Query(target=${function (e) {
    let t = e.path.canonicalString();
    if (e.collectionGroup !== null) {
      t += " collectionGroup=" + e.collectionGroup;
    }
    if (e.filters.length > 0) {
      t += `, filters: [${e.filters.map(e => ri(e)).join(", ")}]`;
    }
    if (!Un(e.limit)) {
      t += ", limit: " + e.limit;
    }
    if (e.orderBy.length > 0) {
      t += `, orderBy: [${e.orderBy.map(e => function (e) {
        return `${e.field.canonicalString()} (${e.dir})`;
      }(e)).join(", ")}]`;
    }
    if (e.startAt) {
      t += ", startAt: ";
      t += e.startAt.inclusive ? "b:" : "a:";
      t += e.startAt.position.map(e => Mr(e)).join(",");
    }
    if (e.endAt) {
      t += ", endAt: ";
      t += e.endAt.inclusive ? "a:" : "b:";
      t += e.endAt.position.map(e => Mr(e)).join(",");
    }
    return `Target(${t})`;
  }(Hi(e))}; limitType=${e.limitType})`;
}
function ji(e, t) {
  return t.isFoundDocument() && function (e, t) {
    const n = t.key.path;
    if (e.collectionGroup !== null) {
      return t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n);
    } else if (nn.isDocumentKey(e.path)) {
      return e.path.isEqual(n);
    } else {
      return e.path.isImmediateParentOf(n);
    }
  }(e, t) && function (e, t) {
    for (const n of Vi(e)) {
      if (!n.field.isKeyField() && t.data.field(n.field) === null) {
        return false;
      }
    }
    return true;
  }(e, t) && function (e, t) {
    for (const n of e.filters) {
      if (!n.matches(t)) {
        return false;
      }
    }
    return true;
  }(e, t) && function (e, t) {
    return (!e.startAt || !!function (e, t, n) {
      const r = Ks(e, t, n);
      if (e.inclusive) {
        return r <= 0;
      } else {
        return r < 0;
      }
    }(e.startAt, Vi(e), t)) && (!e.endAt || !!function (e, t, n) {
      const r = Ks(e, t, n);
      if (e.inclusive) {
        return r >= 0;
      } else {
        return r > 0;
      }
    }(e.endAt, Vi(e), t));
  }(e, t);
}
function Qi(e) {
  return (t, n) => {
    let r = false;
    for (const s of Vi(e)) {
      const e = zi(s, t, n);
      if (e !== 0) {
        return e;
      }
      r = r || s.field.isKeyField();
    }
    return 0;
  };
}
function zi(e, t, n) {
  const r = e.field.isKeyField() ? nn.comparator(t.key, n.key) : function (e, t, n) {
    const r = t.data.field(e);
    const s = n.data.field(e);
    if (r !== null && s !== null) {
      return Tr(r, s);
    } else {
      return Tt(42886);
    }
  }(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return r * -1;
    default:
      return Tt(19790, {
        direction: e.dir
      });
  }
}
var Yi;
var Wi;
var $i = class {
  constructor(e, t) {
    this.count = e;
    this.unchangedNames = t;
  }
};
function Xi(e) {
  switch (e) {
    case Kt.OK:
      return Tt(64938);
    case Kt.CANCELLED:
    case Kt.UNKNOWN:
    case Kt.DEADLINE_EXCEEDED:
    case Kt.RESOURCE_EXHAUSTED:
    case Kt.INTERNAL:
    case Kt.UNAVAILABLE:
    case Kt.UNAUTHENTICATED:
      return false;
    case Kt.INVALID_ARGUMENT:
    case Kt.NOT_FOUND:
    case Kt.ALREADY_EXISTS:
    case Kt.PERMISSION_DENIED:
    case Kt.FAILED_PRECONDITION:
    case Kt.ABORTED:
    case Kt.OUT_OF_RANGE:
    case Kt.UNIMPLEMENTED:
    case Kt.DATA_LOSS:
      return true;
    default:
      return Tt(15467, {
        code: e
      });
  }
}
function Zi(e) {
  if (e === undefined) {
    _t("GRPC error has no .code");
    return Kt.UNKNOWN;
  }
  switch (e) {
    case Yi.OK:
      return Kt.OK;
    case Yi.CANCELLED:
      return Kt.CANCELLED;
    case Yi.UNKNOWN:
      return Kt.UNKNOWN;
    case Yi.DEADLINE_EXCEEDED:
      return Kt.DEADLINE_EXCEEDED;
    case Yi.RESOURCE_EXHAUSTED:
      return Kt.RESOURCE_EXHAUSTED;
    case Yi.INTERNAL:
      return Kt.INTERNAL;
    case Yi.UNAVAILABLE:
      return Kt.UNAVAILABLE;
    case Yi.UNAUTHENTICATED:
      return Kt.UNAUTHENTICATED;
    case Yi.INVALID_ARGUMENT:
      return Kt.INVALID_ARGUMENT;
    case Yi.NOT_FOUND:
      return Kt.NOT_FOUND;
    case Yi.ALREADY_EXISTS:
      return Kt.ALREADY_EXISTS;
    case Yi.PERMISSION_DENIED:
      return Kt.PERMISSION_DENIED;
    case Yi.FAILED_PRECONDITION:
      return Kt.FAILED_PRECONDITION;
    case Yi.ABORTED:
      return Kt.ABORTED;
    case Yi.OUT_OF_RANGE:
      return Kt.OUT_OF_RANGE;
    case Yi.UNIMPLEMENTED:
      return Kt.UNIMPLEMENTED;
    case Yi.DATA_LOSS:
      return Kt.DATA_LOSS;
    default:
      return Tt(39323, {
        code: e
      });
  }
}
(Wi = Yi ||= {})[Wi.OK = 0] = "OK";
Wi[Wi.CANCELLED = 1] = "CANCELLED";
Wi[Wi.UNKNOWN = 2] = "UNKNOWN";
Wi[Wi.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT";
Wi[Wi.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED";
Wi[Wi.NOT_FOUND = 5] = "NOT_FOUND";
Wi[Wi.ALREADY_EXISTS = 6] = "ALREADY_EXISTS";
Wi[Wi.PERMISSION_DENIED = 7] = "PERMISSION_DENIED";
Wi[Wi.UNAUTHENTICATED = 16] = "UNAUTHENTICATED";
Wi[Wi.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED";
Wi[Wi.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION";
Wi[Wi.ABORTED = 10] = "ABORTED";
Wi[Wi.OUT_OF_RANGE = 11] = "OUT_OF_RANGE";
Wi[Wi.UNIMPLEMENTED = 12] = "UNIMPLEMENTED";
Wi[Wi.INTERNAL = 13] = "INTERNAL";
Wi[Wi.UNAVAILABLE = 14] = "UNAVAILABLE";
Wi[Wi.DATA_LOSS = 15] = "DATA_LOSS";
var ea = class {
  constructor(e, t) {
    this.mapKeyFn = e;
    this.equalsFn = t;
    this.inner = {};
    this.innerSize = 0;
  }
  get(e) {
    const t = this.mapKeyFn(e);
    const n = this.inner[t];
    if (n !== undefined) {
      for (const [r, s] of n) {
        if (this.equalsFn(r, e)) {
          return s;
        }
      }
    }
  }
  has(e) {
    return this.get(e) !== undefined;
  }
  set(e, t) {
    const n = this.mapKeyFn(e);
    const r = this.inner[n];
    if (r === undefined) {
      this.inner[n] = [[e, t]];
      this.innerSize++;
      return;
    }
    for (let s = 0; s < r.length; s++) {
      if (this.equalsFn(r[s][0], e)) {
        r[s] = [e, t];
        return;
      }
    }
    r.push([e, t]);
    this.innerSize++;
  }
  delete(e) {
    const t = this.mapKeyFn(e);
    const n = this.inner[t];
    if (n === undefined) {
      return false;
    }
    for (let r = 0; r < n.length; r++) {
      if (this.equalsFn(n[r][0], e)) {
        if (n.length === 1) {
          delete this.inner[t];
        } else {
          n.splice(r, 1);
        }
        this.innerSize--;
        return true;
      }
    }
    return false;
  }
  forEach(e) {
    en(this.inner, (t, n) => {
      for (const [r, s] of n) {
        e(r, s);
      }
    });
  }
  isEmpty() {
    return tn(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var ta = new Mt(nn.comparator);
function na() {
  return ta;
}
var ra = new Mt(nn.comparator);
function sa(...e) {
  let t = ra;
  for (const n of e) {
    t = t.insert(n.key, n);
  }
  return t;
}
function ia(e) {
  let t = ra;
  e.forEach((e, n) => t = t.insert(e, n.overlayedDocument));
  return t;
}
function aa() {
  return Ba();
}
function oa() {
  return Ba();
}
function Ba() {
  return new ea(e => e.toString(), (e, t) => e.isEqual(t));
}
var ua = new Mt(nn.comparator);
var ca = new Ut(nn.comparator);
function la(...e) {
  let t = ca;
  for (const n of e) {
    t = t.add(n);
  }
  return t;
}
var ha = new Ut(St);
function Ca() {
  return ha;
}
function da() {
  return new TextEncoder();
}
var fa = new E([4294967295, 4294967295], 0);
function pa(e) {
  const t = da().encode(e);
  const n = new D();
  n.update(t);
  return new Uint8Array(n.digest());
}
function ga(e) {
  const t = new DataView(e.buffer);
  const n = t.getUint32(0, true);
  const r = t.getUint32(4, true);
  const s = t.getUint32(8, true);
  const i = t.getUint32(12, true);
  return [new E([n, r], 0), new E([s, i], 0)];
}
var ma = class e {
  constructor(e, t, n) {
    this.bitmap = e;
    this.padding = t;
    this.hashCount = n;
    if (t < 0 || t >= 8) {
      throw new Ea(`Invalid padding: ${t}`);
    }
    if (n < 0) {
      throw new Ea(`Invalid hash count: ${n}`);
    }
    if (e.length > 0 && this.hashCount === 0) {
      throw new Ea(`Invalid hash count: ${n}`);
    }
    if (e.length === 0 && t !== 0) {
      throw new Ea(`Invalid padding when bitmap length is 0: ${t}`);
    }
    this.Be = e.length * 8 - t;
    this.Le = E.fromNumber(this.Be);
  }
  $e(e, t, n) {
    let r = e.add(t.multiply(E.fromNumber(n)));
    if (r.compare(fa) === 1) {
      r = new E([r.getBits(0), r.getBits(1)], 0);
    }
    return r.modulo(this.Le).toNumber();
  }
  Ue(e) {
    return !!(this.bitmap[Math.floor(e / 8)] & 1 << e % 8);
  }
  mightContain(e) {
    if (this.Be === 0) {
      return false;
    }
    const [t, n] = ga(pa(e));
    for (let r = 0; r < this.hashCount; r++) {
      const e = this.$e(t, n, r);
      if (!this.Ue(e)) {
        return false;
      }
    }
    return true;
  }
  static create(t, n, r) {
    const s = t % 8 == 0 ? 0 : 8 - t % 8;
    const i = new Uint8Array(Math.ceil(t / 8));
    const a = new e(i, s, n);
    r.forEach(e => a.insert(e));
    return a;
  }
  insert(e) {
    if (this.Be === 0) {
      return;
    }
    const [t, n] = ga(pa(e));
    for (let r = 0; r < this.hashCount; r++) {
      const e = this.$e(t, n, r);
      this.ke(e);
    }
  }
  ke(e) {
    const t = Math.floor(e / 8);
    const n = e % 8;
    this.bitmap[t] |= 1 << n;
  }
};
var Ea = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "BloomFilterError";
  }
};
var Da = class e {
  constructor(e, t, n, r, s, i) {
    this.snapshotVersion = e;
    this.targetChanges = t;
    this.targetMismatches = n;
    this.documentUpdates = r;
    this.augmentedDocumentUpdates = s;
    this.resolvedLimboDocuments = i;
  }
  static createSynthesizedRemoteEventForCurrentChange(t, n, r) {
    const s = new Map();
    s.set(t, wa.createSynthesizedTargetChangeForCurrentChange(t, n, r));
    return new e(di.min(), s, new Mt(St), na(), na(), la());
  }
};
var wa = class e {
  constructor(e, t, n, r, s) {
    this.resumeToken = e;
    this.current = t;
    this.addedDocuments = n;
    this.modifiedDocuments = r;
    this.removedDocuments = s;
  }
  static createSynthesizedTargetChangeForCurrentChange(t, n, r) {
    return new e(r, n, la(), la(), la());
  }
};
var ya = class {
  constructor(e, t, n, r) {
    this.Qe = e;
    this.removedTargetIds = t;
    this.key = n;
    this.qe = r;
  }
};
var _a = class {
  constructor(e, t) {
    this.targetId = e;
    this.Ke = t;
  }
};
var Ia = class {
  constructor(e, t, n = mn.EMPTY_BYTE_STRING, r = null) {
    this.state = e;
    this.targetIds = t;
    this.resumeToken = n;
    this.cause = r;
  }
};
var va = class {
  constructor(e) {
    this.targetId = e;
    this.We = 0;
    this.Ge = Aa();
    this.je = mn.EMPTY_BYTE_STRING;
    this.ze = false;
    this.He = true;
  }
  get current() {
    return this.ze;
  }
  get resumeToken() {
    return this.je;
  }
  get Je() {
    return this.We !== 0;
  }
  get Ye() {
    return this.He;
  }
  Ze(e) {
    if (e.approximateByteSize() > 0) {
      this.He = true;
      this.je = e;
    }
  }
  Xe() {
    let e = la();
    let t = la();
    let n = la();
    this.Ge.forEach((r, s) => {
      switch (s) {
        case 0:
          e = e.add(r);
          break;
        case 2:
          t = t.add(r);
          break;
        case 1:
          n = n.add(r);
          break;
        default:
          Tt(38017, {
            changeType: s
          });
      }
    });
    return new wa(this.je, this.ze, e, t, n);
  }
  et() {
    this.He = false;
    this.Ge = Aa();
  }
  tt(e, t) {
    this.He = true;
    this.Ge = this.Ge.insert(e, t);
  }
  nt(e) {
    this.He = true;
    this.Ge = this.Ge.remove(e);
  }
  rt() {
    this.We += 1;
  }
  it() {
    this.We -= 1;
    Nt(this.We >= 0, 3241, {
      We: this.We,
      targetId: this.targetId
    });
  }
  st() {
    this.He = true;
    this.ze = true;
  }
};
var Ta = "WatchChangeAggregator";
var ba = class {
  constructor(e) {
    this._t = e;
    this.ot = new Map();
    this.ut = na();
    this.ct = Na();
    this.lt = na();
    this.Et = Na();
    this.ht = new Mt(St);
  }
  Tt(e) {
    for (const t of e.Qe) {
      if (e.qe && e.qe.isFoundDocument()) {
        this.Pt(t, e.qe);
      } else {
        this.It(t, e.key, e.qe);
      }
    }
    for (const t of e.removedTargetIds) {
      this.It(t, e.key, e.qe);
    }
  }
  Rt(e) {
    this.forEachTarget(e, t => {
      const n = this.ot.get(t);
      if (n) {
        switch (e.state) {
          case 0:
            if (this.At(t)) {
              n.Ze(e.resumeToken);
            }
            break;
          case 1:
            n.it();
            if (!n.Je) {
              n.et();
            }
            n.Ze(e.resumeToken);
            break;
          case 2:
            n.it();
            if (!n.Je) {
              this.removeTarget(t);
            }
            break;
          case 3:
            if (this.At(t)) {
              n.st();
              n.Ze(e.resumeToken);
            }
            break;
          case 4:
            if (this.At(t)) {
              this.Vt(t);
              n.Ze(e.resumeToken);
            }
            break;
          default:
            Tt(56790, {
              state: e.state
            });
        }
      } else {
        yt(Ta, `handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`);
      }
    });
  }
  forEachTarget(e, t) {
    if (e.targetIds.length > 0) {
      e.targetIds.forEach(t);
    } else {
      this.ot.forEach((e, n) => {
        if (this.At(n)) {
          t(n);
        }
      });
    }
  }
  dt(e) {
    if (Fi(e)) {
      return e.getPipelineSourceType() === "documents" && e.getPipelineDocuments()?.length === 1;
    } else {
      return Oi(e);
    }
  }
  ft(e) {
    const t = e.targetId;
    const n = e.Ke.count;
    const r = this.gt(t);
    if (r) {
      const s = r.target;
      if (this.dt(s)) {
        if (n === 0) {
          const e = new nn(Fi(s) ? Yt.fromString(s.getPipelineDocuments()[0]) : s.path);
          this.It(t, e, fi.newNoDocument(e, di.min()));
        } else {
          Nt(n === 1, 20013, "Single document existence filter with count: " + n);
        }
      } else {
        const r = this.yt(t);
        if (r !== n) {
          const n = this.wt(e);
          const s = n ? this.bt(n, e, r) : 1;
          if (s !== 0) {
            this.Vt(t);
            const e = s === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.ht = this.ht.insert(t, e);
          }
        }
      }
    }
  }
  wt(e) {
    const t = e.Ke.unchangedNames;
    if (!t || !t.bits) {
      return null;
    }
    const {
      bits: {
        bitmap: n = "",
        padding: r = 0
      },
      hashCount: s = 0
    } = t;
    let i;
    let a;
    try {
      i = yn(n).toUint8Array();
    } catch (e) {
      if (e instanceof gn) {
        It("Decoding the base64 bloom filter in existence filter failed (" + e.message + "); ignoring the bloom filter and falling back to full re-query.");
        return null;
      }
      throw e;
    }
    try {
      a = new ma(i, r, s);
    } catch (e) {
      It(e instanceof Ea ? "BloomFilter error: " : "Applying bloom filter failed: ", e);
      return null;
    }
    if (a.Be === 0) {
      return null;
    } else {
      return a;
    }
  }
  bt(e, t, n) {
    if (t.Ke.count === n - this.vt(e, t.targetId)) {
      return 0;
    } else {
      return 2;
    }
  }
  vt(e, t) {
    const n = this._t.getRemoteKeysForTarget(t);
    let r = 0;
    n.forEach(n => {
      const s = this._t.xt();
      const i = `projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;
      if (!e.mightContain(i)) {
        this.It(t, n, null);
        r++;
      }
    });
    return r;
  }
  Dt(e) {
    const t = new Map();
    this.ot.forEach((n, r) => {
      const s = this.gt(r);
      if (s) {
        if (n.current && this.dt(s.target)) {
          const t = Fi(s.target) ? Yt.fromString(s.target.getPipelineDocuments()[0]) : s.target.path;
          const n = new nn(t);
          if (!this.Ct(n).has(r) && !this.Ft(r, n)) {
            this.It(r, n, fi.newNoDocument(n, e));
          }
        }
        if (n.Ye) {
          t.set(r, n.Xe());
          n.et();
        }
      }
    });
    let n = la();
    this.Et.forEach((e, t) => {
      let r = true;
      t.forEachWhile(e => {
        const t = this.gt(e);
        return !t || t.purpose === "TargetPurposeLimboResolution" || (r = false, false);
      });
      if (r) {
        n = n.add(e);
      }
    });
    this.ut.forEach((t, n) => n.setReadTime(e));
    this.lt.forEach((t, n) => n.setReadTime(e));
    const r = new Da(e, t, this.ht, this.ut, this.lt, n);
    this.ut = na();
    this.ct = Na();
    this.lt = na();
    this.Et = Na();
    this.ht = new Mt(St);
    return r;
  }
  Pt(e, t) {
    const n = this.ot.get(e);
    if (!n || !this.At(e)) {
      yt(Ta, `addDocumentToTarget received document for unknown inactive target (${e})`);
      return;
    }
    const r = this.Ft(e, t.key) ? 2 : 0;
    n.tt(t.key, r);
    if (Fi(this.gt(e).target) && this.gt(e).target.getPipelineFlavor() !== "exact") {
      this.lt = this.lt.insert(t.key, t);
    } else {
      this.ut = this.ut.insert(t.key, t);
    }
    this.ct = this.ct.insert(t.key, this.Ct(t.key).add(e));
    this.Et = this.Et.insert(t.key, this.Ot(t.key).add(e));
  }
  It(e, t, n) {
    const r = this.ot.get(e);
    if (r && this.At(e)) {
      if (this.Ft(e, t)) {
        r.tt(t, 1);
      } else {
        r.nt(t);
      }
      this.Et = this.Et.insert(t, this.Ot(t).delete(e));
      this.Et = this.Et.insert(t, this.Ot(t).add(e));
      if (n) {
        if (Fi(this.gt(e).target) && this.gt(e).target.getPipelineFlavor() !== "exact") {
          this.lt = this.lt.insert(t, n);
        } else {
          this.ut = this.ut.insert(t, n);
        }
      }
    } else {
      yt(Ta, `removeDocumentFromTarget received document for unknown or inactive target (${e})`);
    }
  }
  removeTarget(e) {
    this.ot.delete(e);
  }
  yt(e) {
    const t = this.ot.get(e);
    if (!t) {
      return 0;
    }
    const n = t.Xe();
    return this._t.getRemoteKeysForTarget(e).size + n.addedDocuments.size - n.removedDocuments.size;
  }
  rt(e) {
    let t = this.ot.get(e);
    if (!t) {
      yt(Ta, `recordPendingTargetRequest set up tracking for target ID ${e}`);
      t = new va(e);
      this.ot.set(e, t);
    }
    t.rt();
  }
  Ot(e) {
    let t = this.Et.get(e);
    if (!t) {
      t = new Ut(St);
      this.Et = this.Et.insert(e, t);
    }
    return t;
  }
  Ct(e) {
    let t = this.ct.get(e);
    if (!t) {
      t = new Ut(St);
      this.ct = this.ct.insert(e, t);
    }
    return t;
  }
  At(e) {
    const t = this.gt(e) !== null;
    if (!t) {
      yt(Ta, "Detected inactive target", e);
    }
    return t;
  }
  gt(e) {
    const t = this.ot.get(e);
    if (t === undefined || t.Je) {
      return null;
    } else {
      return this._t.Mt(e);
    }
  }
  Vt(e) {
    this.ot.set(e, new va(e));
    this._t.getRemoteKeysForTarget(e).forEach(t => {
      this.It(e, t, null);
    });
  }
  Ft(e, t) {
    return this._t.getRemoteKeysForTarget(e).has(t);
  }
};
function Na() {
  return new Mt(nn.comparator);
}
function Aa() {
  return new Mt(nn.comparator);
}
var Fa = {
  asc: "ASCENDING",
  desc: "DESCENDING"
};
var Oa = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
};
var Sa = {
  and: "AND",
  or: "OR"
};
var xa = class {
  constructor(e, t) {
    this.databaseId = e;
    this.useProto3Json = t;
  }
};
function La(e, t) {
  if (e.useProto3Json || Un(t)) {
    return t;
  } else {
    return {
      value: t
    };
  }
}
function Ra(e, t) {
  if (e.useProto3Json) {
    return `${new Date(t.seconds * 1000).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`;
  } else {
    return {
      seconds: "" + t.seconds,
      nanos: t.nanoseconds
    };
  }
}
function ka(e) {
  const t = Dn(e);
  return new pn(t.seconds, t.nanos);
}
function Ga(e, t) {
  if (e.useProto3Json) {
    return t.toBase64();
  } else {
    return t.toUint8Array();
  }
}
function Pa(e, t) {
  return Ra(e, t.toTimestamp());
}
function Ma(e) {
  Nt(!!e, 49232);
  return di.fromTimestamp(ka(e));
}
function Va(e, t) {
  return Ha(e, t).canonicalString();
}
function Ha(e, t) {
  const n = function (e) {
    return new Yt(["projects", e.projectId, "databases", e.database]);
  }(e).child("documents");
  if (t === undefined) {
    return n;
  } else {
    return n.child(t);
  }
}
function Ua(e) {
  const t = Yt.fromString(e);
  Nt(lo(t), 10190, {
    key: t.toString()
  });
  return t;
}
function qa(e, t) {
  return Va(e.databaseId, t.path);
}
function Ja(e, t) {
  const n = Ua(t);
  if (n.get(1) !== e.databaseId.projectId) {
    throw new jt(Kt.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
  }
  if (n.get(3) !== e.databaseId.database) {
    throw new jt(Kt.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
  }
  return new nn(za(n));
}
function Ka(e, t) {
  return Va(e.databaseId, t);
}
function ja(e) {
  const t = Ua(e);
  if (t.length === 4) {
    return Yt.emptyPath();
  } else {
    return za(t);
  }
}
function Qa(e) {
  return new Yt(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString();
}
function za(e) {
  Nt(e.length > 4 && e.get(4) === "documents", 29091, {
    key: e.toString()
  });
  return e.popFirst(5);
}
function Ya(e, t, n) {
  return {
    name: qa(e, t),
    fields: n.value.mapValue.fields
  };
}
function Wa(e, t, n) {
  const r = Ja(e, t.name);
  const s = Ma(t.updateTime);
  const i = t.createTime ? Ma(t.createTime) : di.min();
  const a = new os({
    mapValue: {
      fields: t.fields
    }
  });
  const o = fi.newFoundDocument(r, s, i, a);
  if (n) {
    o.setHasCommittedMutations();
  }
  if (n) {
    return o.setHasCommittedMutations();
  } else {
    return o;
  }
}
function $a(e, t) {
  let n;
  if (t instanceof Gs) {
    n = {
      update: Ya(e, t.key, t.value)
    };
  } else if (t instanceof Us) {
    n = {
      delete: qa(e, t.key)
    };
  } else if (t instanceof Ps) {
    n = {
      update: Ya(e, t.key, t.data),
      updateMask: co(t.fieldMask)
    };
  } else {
    if (!(t instanceof qs)) {
      return Tt(16599, {
        Bt: t.type
      });
    }
    n = {
      verify: qa(e, t.key)
    };
  }
  if (t.fieldTransforms.length > 0) {
    n.updateTransforms = t.fieldTransforms.map(e => function (e, t) {
      const n = t.transform;
      if (n instanceof ps) {
        return {
          fieldPath: t.field.canonicalString(),
          setToServerValue: "REQUEST_TIME"
        };
      }
      if (n instanceof gs) {
        return {
          fieldPath: t.field.canonicalString(),
          appendMissingElements: {
            values: n.elements
          }
        };
      }
      if (n instanceof Es) {
        return {
          fieldPath: t.field.canonicalString(),
          removeAllFromArray: {
            values: n.elements
          }
        };
      }
      if (n instanceof ys) {
        return {
          fieldPath: t.field.canonicalString(),
          increment: n.xe
        };
      }
      if (n instanceof _s) {
        return {
          fieldPath: t.field.canonicalString(),
          minimum: n.xe
        };
      }
      if (n instanceof Is) {
        return {
          fieldPath: t.field.canonicalString(),
          maximum: n.xe
        };
      }
      throw Tt(20930, {
        transform: t.transform
      });
    }(0, e));
  }
  if (!t.precondition.isNone) {
    n.currentDocument = function (e, t) {
      if (t.updateTime !== undefined) {
        return {
          updateTime: Pa(e, t.updateTime)
        };
      } else if (t.exists !== undefined) {
        return {
          exists: t.exists
        };
      } else {
        return Tt(27497);
      }
    }(e, t.precondition);
  }
  return n;
}
function Xa(e, t) {
  const n = t.currentDocument ? function (e) {
    if (e.updateTime !== undefined) {
      return As.updateTime(Ma(e.updateTime));
    } else if (e.exists !== undefined) {
      return As.exists(e.exists);
    } else {
      return As.none();
    }
  }(t.currentDocument) : As.none();
  const r = t.updateTransforms ? t.updateTransforms.map(t => function (e, t) {
    let n = null;
    if ("setToServerValue" in t) {
      Nt(t.setToServerValue === "REQUEST_TIME", 16630, {
        proto: t
      });
      n = new ps();
    } else if ("appendMissingElements" in t) {
      const e = t.appendMissingElements.values || [];
      n = new gs(e);
    } else if ("removeAllFromArray" in t) {
      const e = t.removeAllFromArray.values || [];
      n = new Es(e);
    } else if ("increment" in t) {
      n = new ys(e, t.increment);
    } else if ("minimum" in t) {
      n = new _s(e, t.minimum);
    } else if ("maximum" in t) {
      n = new Is(e, t.maximum);
    } else {
      Tt(16584, {
        proto: t
      });
    }
    const r = $t.fromServerFormat(t.fieldPath);
    return new bs(r, n);
  }(e, t)) : [];
  if (t.update) {
    t.update.name;
    const s = Ja(e, t.update.name);
    const i = new os({
      mapValue: {
        fields: t.update.fields
      }
    });
    if (t.updateMask) {
      const e = function (e) {
        const t = e.fieldPaths || [];
        return new Xt(t.map(e => $t.fromServerFormat(e)));
      }(t.updateMask);
      return new Ps(s, i, e, n, r);
    }
    return new Gs(s, i, n, r);
  }
  if (t.delete) {
    const r = Ja(e, t.delete);
    return new Us(r, n);
  }
  if (t.verify) {
    const r = Ja(e, t.verify);
    return new qs(r, n);
  }
  return Tt(1463, {
    proto: t
  });
}
function Za(e, t) {
  return {
    documents: [Ka(e, t.path)]
  };
}
function eo(e, t) {
  const n = {
    structuredQuery: {}
  };
  const r = t.path;
  let s;
  if (t.collectionGroup !== null) {
    s = r;
    n.structuredQuery.from = [{
      collectionId: t.collectionGroup,
      allDescendants: true
    }];
  } else {
    s = r.popLast();
    n.structuredQuery.from = [{
      collectionId: r.lastSegment()
    }];
  }
  n.parent = Ka(e, s);
  const i = function (e) {
    if (e.length !== 0) {
      return uo(Ys.create(e, "and"));
    }
  }(t.filters);
  if (i) {
    n.structuredQuery.where = i;
  }
  const a = function (e) {
    if (e.length !== 0) {
      return e.map(e => function (e) {
        return {
          field: oo(e.field),
          direction: so(e.dir)
        };
      }(e));
    }
  }(t.orderBy);
  if (a) {
    n.structuredQuery.orderBy = a;
  }
  const o = La(e, t.limit);
  if (o !== null) {
    n.structuredQuery.limit = o;
  }
  if (t.startAt) {
    n.structuredQuery.startAt = function (e) {
      return {
        before: e.inclusive,
        values: e.position
      };
    }(t.startAt);
  }
  if (t.endAt) {
    n.structuredQuery.endAt = function (e) {
      return {
        before: !e.inclusive,
        values: e.position
      };
    }(t.endAt);
  }
  return {
    Lt: n,
    parent: s
  };
}
function to(e) {
  let t = ja(e.parent);
  const n = e.structuredQuery;
  const r = n.from ? n.from.length : 0;
  let s = null;
  if (r > 0) {
    Nt(r === 1, 65062);
    const e = n.from[0];
    if (e.allDescendants) {
      s = e.collectionId;
    } else {
      t = t.child(e.collectionId);
    }
  }
  let i = [];
  if (n.where) {
    i = function (e) {
      const t = ro(e);
      if (t instanceof Ys && Xs(t)) {
        return t.getFilters();
      } else {
        return [t];
      }
    }(n.where);
  }
  let a = [];
  if (n.orderBy) {
    a = function (e) {
      return e.map(e => function (e) {
        return new hi(Bo(e.field), function (e) {
          switch (e) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(e.direction));
      }(e));
    }(n.orderBy);
  }
  let o = null;
  if (n.limit) {
    o = function (e) {
      let t;
      t = typeof e == "object" ? e.value : e;
      if (Un(t)) {
        return null;
      } else {
        return t;
      }
    }(n.limit);
  }
  let B = null;
  if (n.startAt) {
    B = function (e) {
      const t = !!e.before;
      const n = e.values || [];
      return new Js(n, t);
    }(n.startAt);
  }
  let u = null;
  if (n.endAt) {
    u = function (e) {
      const t = !e.before;
      const n = e.values || [];
      return new Js(n, t);
    }(n.endAt);
  }
  return ki(t, s, a, i, o, "F", B, u);
}
function no(e, t) {
  return {
    structuredPipeline: {
      pipeline: {
        stages: t.stages.map(t => t._toProto(e))
      }
    }
  };
}
function ro(e) {
  if (e.unaryFilter !== undefined) {
    return function (e) {
      switch (e.unaryFilter.op) {
        case "IS_NAN":
          const t = Bo(e.unaryFilter.field);
          return zs.create(t, "==", {
            doubleValue: NaN
          });
        case "IS_NULL":
          const n = Bo(e.unaryFilter.field);
          return zs.create(n, "==", {
            nullValue: "NULL_VALUE"
          });
        case "IS_NOT_NAN":
          const r = Bo(e.unaryFilter.field);
          return zs.create(r, "!=", {
            doubleValue: NaN
          });
        case "IS_NOT_NULL":
          const s = Bo(e.unaryFilter.field);
          return zs.create(s, "!=", {
            nullValue: "NULL_VALUE"
          });
        case "OPERATOR_UNSPECIFIED":
          return Tt(61313);
        default:
          return Tt(60726);
      }
    }(e);
  } else if (e.fieldFilter !== undefined) {
    return function (e) {
      return zs.create(Bo(e.fieldFilter.field), function (e) {
        switch (e) {
          case "EQUAL":
            return "==";
          case "NOT_EQUAL":
            return "!=";
          case "GREATER_THAN":
            return ">";
          case "GREATER_THAN_OR_EQUAL":
            return ">=";
          case "LESS_THAN":
            return "<";
          case "LESS_THAN_OR_EQUAL":
            return "<=";
          case "ARRAY_CONTAINS":
            return "array-contains";
          case "IN":
            return "in";
          case "NOT_IN":
            return "not-in";
          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any";
          case "OPERATOR_UNSPECIFIED":
            return Tt(58110);
          default:
            return Tt(50506);
        }
      }(e.fieldFilter.op), e.fieldFilter.value);
    }(e);
  } else if (e.compositeFilter !== undefined) {
    return function (e) {
      return Ys.create(e.compositeFilter.filters.map(e => ro(e)), function (e) {
        switch (e) {
          case "AND":
            return "and";
          case "OR":
            return "or";
          default:
            return Tt(1026);
        }
      }(e.compositeFilter.op));
    }(e);
  } else {
    return Tt(30097, {
      filter: e
    });
  }
}
function so(e) {
  return Fa[e];
}
function io(e) {
  return Oa[e];
}
function ao(e) {
  return Sa[e];
}
function oo(e) {
  return {
    fieldPath: e.canonicalString()
  };
}
function Bo(e) {
  return $t.fromServerFormat(e.fieldPath);
}
function uo(e) {
  if (e instanceof zs) {
    return function (e) {
      if (e.op === "==") {
        if ($r(e.value)) {
          return {
            unaryFilter: {
              field: oo(e.field),
              op: "IS_NAN"
            }
          };
        }
        if (Wr(e.value)) {
          return {
            unaryFilter: {
              field: oo(e.field),
              op: "IS_NULL"
            }
          };
        }
      } else if (e.op === "!=") {
        if ($r(e.value)) {
          return {
            unaryFilter: {
              field: oo(e.field),
              op: "IS_NOT_NAN"
            }
          };
        }
        if (Wr(e.value)) {
          return {
            unaryFilter: {
              field: oo(e.field),
              op: "IS_NOT_NULL"
            }
          };
        }
      }
      return {
        fieldFilter: {
          field: oo(e.field),
          op: io(e.op),
          value: e.value
        }
      };
    }(e);
  } else if (e instanceof Ys) {
    return function (e) {
      const t = e.getFilters().map(e => uo(e));
      if (t.length === 1) {
        return t[0];
      } else {
        return {
          compositeFilter: {
            op: ao(e.op),
            filters: t
          }
        };
      }
    }(e);
  } else {
    return Tt(54877, {
      filter: e
    });
  }
}
function co(e) {
  const t = [];
  e.fields.forEach(e => t.push(e.canonicalString()));
  return {
    fieldPaths: t
  };
}
function lo(e) {
  return e.length >= 4 && e.get(0) === "projects" && e.get(2) === "databases";
}
function ho(e) {
  return !!e && typeof e._toProto == "function" && e._protoValueType === "ProtoValue";
}
function Co(e, t) {
  const n = {
    fields: {}
  };
  t.forEach((t, r) => {
    if (typeof r != "string") {
      throw new Error(`Cannot encode map with non-string key: ${r}`);
    }
    n.fields[r] = t._toProto(e);
  });
  return {
    mapValue: n
  };
}
function fo(e) {
  return {
    stringValue: e
  };
}
function po(e) {
  return new xa(e, true);
}
var go = class {
  constructor(e) {
    this.value = e;
  }
  isEqual(e) {
    return this.value === e.value;
  }
};
var mo = class {
  constructor(e, t) {
    this.seconds = e;
    this.increment = t;
    if (!Number.isInteger(e) || e < 0 || e > 4294967295) {
      throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");
    }
    if (!Number.isInteger(t) || t < 0 || t > 4294967295) {
      throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).");
    }
  }
  isEqual(e) {
    return this.seconds === e.seconds && this.increment === e.increment;
  }
};
var Eo = class e {
  constructor(e, t = 0) {
    this.subtype = t;
    if (!Number.isInteger(t) || t < 0 || t > 255) {
      throw new jt(Kt.INVALID_ARGUMENT, "The subtype for Bytes must be a value in the inclusive [0, 255] range.");
    }
    this._byteString = e;
  }
  static fromBase64String(t, n = 0) {
    try {
      return new e(mn.fromBase64String(t), n);
    } catch (t) {
      throw new jt(Kt.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
    }
  }
  static fromUint8Array(t, n = 0) {
    return new e(mn.fromUint8Array(t), n);
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  get data() {
    return this.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ", subtype: " + this.subtype + ")";
  }
  isEqual(e) {
    return this.subtype === e.subtype && this._byteString.isEqual(e._byteString);
  }
  toJSON() {
    const t = {
      type: e._jsonSchemaVersion,
      bytes: this.toBase64()
    };
    if (this.subtype !== 0) {
      t.subtype = this.subtype;
    }
    return t;
  }
  static fromJSON(t) {
    if (Cn(t, e._jsonSchema)) {
      const n = t.subtype ?? 0;
      return e.fromBase64String(t.bytes, n);
    }
  }
};
Eo._jsonSchemaVersion = "firestore/bytes/1.0";
Eo._jsonSchema = {
  type: hn("string", Eo._jsonSchemaVersion),
  bytes: hn("string"),
  subtype: {
    ...hn("number"),
    optional: true
  }
};
var Do = class {
  constructor(e) {
    this.stringValue = e;
    this.value = Vn.fromString(e);
  }
  isEqual(e) {
    return !!this.value.oe() && !!e.value.oe() || this.value.compareTo(e.value) === 0;
  }
  toJSON() {
    return {
      Ut: {
        stringValue: this.stringValue
      }
    };
  }
};
var wo = class {
  constructor(...e) {
    for (let t = 0; t < e.length; ++t) {
      if (e[t].length === 0) {
        throw new jt(Kt.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
      }
    }
    this._internalPath = new $t(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
};
var yo = class {
  constructor(e) {
    this._methodName = e;
  }
};
var _o = class e {
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90) {
      throw new jt(Kt.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    }
    if (!isFinite(t) || t < -180 || t > 180) {
      throw new jt(Kt.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
    }
    this._lat = e;
    this._long = t;
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  _compareTo(e) {
    return St(this._lat, e._lat) || St(this._long, e._long);
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: e._jsonSchemaVersion
    };
  }
  static fromJSON(t) {
    if (Cn(t, e._jsonSchema)) {
      return new e(t.latitude, t.longitude);
    }
  }
};
_o._jsonSchemaVersion = "firestore/geoPoint/1.0";
_o._jsonSchema = {
  type: hn("string", _o._jsonSchemaVersion),
  latitude: hn("number"),
  longitude: hn("number")
};
var Io = class {
  constructor(e) {
    this.value = e;
  }
  isEqual(e) {
    return this.value === e.value;
  }
};
var vo = class e {
  constructor() {
    this.type = "MaxKey";
  }
  static instance() {
    e.MAX_KEY_VALUE_INSTANCE ||= new e();
    return e.MAX_KEY_VALUE_INSTANCE;
  }
};
vo.MAX_KEY_VALUE_INSTANCE = null;
var To = class e {
  constructor() {
    this.type = "MinKey";
  }
  static instance() {
    e.MIN_KEY_VALUE_INSTANCE ||= new e();
    return e.MIN_KEY_VALUE_INSTANCE;
  }
};
To.MIN_KEY_VALUE_INSTANCE = null;
var bo = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    if (this.isAuthenticated()) {
      return "uid:" + this.uid;
    } else {
      return "anonymous-user";
    }
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
bo.UNAUTHENTICATED = new bo(null);
bo.GOOGLE_CREDENTIALS = new bo("google-credentials-uid");
bo.FIRST_PARTY = new bo("first-party-uid");
bo.MOCK_USER = new bo("mock-user");
var No = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e;
      this.reject = t;
    });
  }
};
var Ao = class {
  constructor(e, t) {
    this.user = t;
    this.type = "OAuth";
    this.headers = new Map();
    this.headers.set("Authorization", `Bearer ${e}`);
  }
};
var Fo = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, t) {
    e.enqueueRetryable(() => t(bo.UNAUTHENTICATED));
  }
  shutdown() {}
};
var Oo = class {
  constructor(e) {
    this.token = e;
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, t) {
    this.changeListener = t;
    e.enqueueRetryable(() => t(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var So = class {
  constructor(e) {
    this.kt = e;
    this.currentUser = bo.UNAUTHENTICATED;
    this.Qt = 0;
    this.forceRefresh = false;
    this.auth = null;
  }
  start(e, t) {
    Nt(this.qt === undefined, 42304);
    let n = this.Qt;
    const r = e => this.Qt !== n ? (n = this.Qt, t(e)) : Promise.resolve();
    let s = new No();
    this.qt = () => {
      this.Qt++;
      this.currentUser = this.Kt();
      s.resolve();
      s = new No();
      e.enqueueRetryable(() => r(this.currentUser));
    };
    const i = () => {
      const t = s;
      e.enqueueRetryable(async () => {
        await t.promise;
        await r(this.currentUser);
      });
    };
    const a = e => {
      yt("FirebaseAuthCredentialsProvider", "Auth detected");
      this.auth = e;
      if (this.qt) {
        this.auth.addAuthTokenListener(this.qt);
        i();
      }
    };
    this.kt.onInit(e => a(e));
    setTimeout(() => {
      if (!this.auth) {
        const e = this.kt.getImmediate({
          optional: true
        });
        if (e) {
          a(e);
        } else {
          yt("FirebaseAuthCredentialsProvider", "Auth not yet detected");
          s.resolve();
          s = new No();
        }
      }
    }, 0);
    i();
  }
  getToken() {
    const e = this.Qt;
    const t = this.forceRefresh;
    this.forceRefresh = false;
    if (this.auth) {
      return this.auth.getToken(t).then(t => this.Qt !== e ? (yt("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t ? (Nt(typeof t.accessToken == "string", 31837, {
        Wt: t
      }), new Ao(t.accessToken, this.currentUser)) : null);
    } else {
      return Promise.resolve(null);
    }
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    if (this.auth && this.qt) {
      this.auth.removeAuthTokenListener(this.qt);
    }
    this.qt = undefined;
  }
  Kt() {
    const e = this.auth && this.auth.getUid();
    Nt(e === null || typeof e == "string", 2055, {
      Gt: e
    });
    return new bo(e);
  }
};
var xo = class {
  constructor(e, t, n) {
    this.jt = e;
    this.zt = t;
    this.Ht = n;
    this.type = "FirstParty";
    this.user = bo.FIRST_PARTY;
    this.Jt = new Map();
  }
  Yt() {
    if (this.Ht) {
      return this.Ht();
    } else {
      return null;
    }
  }
  get headers() {
    this.Jt.set("X-Goog-AuthUser", this.jt);
    const e = this.Yt();
    if (e) {
      this.Jt.set("Authorization", e);
    }
    if (this.zt) {
      this.Jt.set("X-Goog-Iam-Authorization-Token", this.zt);
    }
    return this.Jt;
  }
};
var Lo = class {
  constructor(e, t, n) {
    this.jt = e;
    this.zt = t;
    this.Ht = n;
  }
  getToken() {
    return Promise.resolve(new xo(this.jt, this.zt, this.Ht));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(bo.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
};
var Ro = class {
  constructor(e) {
    this.value = e;
    this.type = "AppCheck";
    this.headers = new Map();
    if (e && e.length > 0) {
      this.headers.set("x-firebase-appcheck", this.value);
    }
  }
};
var ko = class {
  constructor(e, t) {
    this.Zt = t;
    this.forceRefresh = false;
    this.appCheck = null;
    this.Xt = null;
    this.en = null;
    if (o(e) && e.settings.appCheckToken) {
      this.en = e.settings.appCheckToken;
    }
  }
  start(e, t) {
    Nt(this.qt === undefined, 3512);
    const n = e => {
      if (e.error != null) {
        yt("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);
      }
      const n = e.token !== this.Xt;
      this.Xt = e.token;
      yt("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`);
      if (n) {
        return t(e.token);
      } else {
        return Promise.resolve();
      }
    };
    this.qt = t => {
      e.enqueueRetryable(() => n(t));
    };
    const r = e => {
      yt("FirebaseAppCheckTokenProvider", "AppCheck detected");
      this.appCheck = e;
      if (this.qt) {
        this.appCheck.addTokenListener(this.qt);
      }
    };
    this.Zt.onInit(e => r(e));
    setTimeout(() => {
      if (!this.appCheck) {
        const e = this.Zt.getImmediate({
          optional: true
        });
        if (e) {
          r(e);
        } else {
          yt("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }
    }, 0);
  }
  getToken() {
    if (this.en) {
      return Promise.resolve(new Ro(this.en));
    }
    const e = this.forceRefresh;
    this.forceRefresh = false;
    if (this.appCheck) {
      return this.appCheck.getToken(e).then(e => e ? (Nt(typeof e.token == "string", 44558, {
        tokenResult: e
      }), this.Xt = e.token, new Ro(e.token)) : null);
    } else {
      return Promise.resolve(null);
    }
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    if (this.appCheck && this.qt) {
      this.appCheck.removeTokenListener(this.qt);
    }
    this.qt = undefined;
  }
};
function Go(e) {
  const t = {};
  if (e.timeoutSeconds !== undefined) {
    t.timeoutSeconds = e.timeoutSeconds;
  }
  return t;
}
var Po = class {
  tn(e) {}
  shutdown() {}
};
var Mo = "ConnectivityMonitor";
var Vo = class {
  constructor() {
    this.nn = () => this.rn();
    this.sn = () => this._n();
    this.an = [];
    this.un();
  }
  tn(e) {
    this.an.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.nn);
    window.removeEventListener("offline", this.sn);
  }
  un() {
    window.addEventListener("online", this.nn);
    window.addEventListener("offline", this.sn);
  }
  rn() {
    yt(Mo, "Network connectivity changed: AVAILABLE");
    for (const e of this.an) {
      e(0);
    }
  }
  _n() {
    yt(Mo, "Network connectivity changed: UNAVAILABLE");
    for (const e of this.an) {
      e(1);
    }
  }
  static cn() {
    return typeof window != "undefined" && window.addEventListener !== undefined && window.removeEventListener !== undefined;
  }
};
var Ho = null;
function Uo() {
  if (Ho === null) {
    Ho = 268435456 + Math.round(Math.random() * 2147483648);
  } else {
    Ho++;
  }
  return "0x" + Ho.toString(16);
}
var qo = "RestConnection";
var Jo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
  ExecutePipeline: "executePipeline"
};
var Ko = class {
  get En() {
    return false;
  }
  constructor(e) {
    this.databaseInfo = e;
    this.databaseId = e.databaseId;
    const t = e.ssl ? "https" : "http";
    const n = encodeURIComponent(this.databaseId.projectId);
    const r = encodeURIComponent(this.databaseId.database);
    this.hn = t + "://" + e.host;
    this.Tn = `projects/${n}/databases/${r}`;
    this.Pn = this.databaseId.database === On ? `project_id=${n}` : `project_id=${n}&database_id=${r}`;
  }
  In(t, n, r, s, i) {
    const a = Uo();
    const o = this.Rn(t, n.toUriEncodedString());
    yt(qo, `Sending RPC '${t}' ${a}:`, o, r);
    const B = {
      "google-cloud-resource-prefix": this.Tn,
      "x-goog-request-params": this.Pn
    };
    this.An(B, s, i);
    const {
      host: u
    } = new URL(o);
    const c = e(u);
    return this.Vn(t, o, B, r, c).then(e => {
      yt(qo, `Received RPC '${t}' ${a}: `, e);
      return e;
    }, e => {
      It(qo, `RPC '${t}' ${a} failed with error: `, e, "url: ", o, "request:", r);
      throw e;
    });
  }
  dn(e, t, n, r, s, i) {
    return this.In(e, t, n, r, s);
  }
  An(e, t, n) {
    e["X-Goog-Api-Client"] = "gl-js/ fire/" + Et;
    e["Content-Type"] = "text/plain";
    if (this.databaseInfo.appId) {
      e["X-Firebase-GMPID"] = this.databaseInfo.appId;
    }
    if (t) {
      t.headers.forEach((t, n) => e[n] = t);
    }
    if (n) {
      n.headers.forEach((t, n) => e[n] = t);
    }
    if (this.databaseInfo._customHeaders) {
      for (const r of Object.keys(this.databaseInfo._customHeaders)) {
        e[r] = this.databaseInfo._customHeaders[r];
      }
    }
  }
  Rn(e, t) {
    const n = Jo[e];
    let r = `${this.hn}/v1/${t}:${n}`;
    if (this.databaseInfo.apiKey) {
      r = `${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`;
    }
    return r;
  }
  terminate() {}
};
var jo = class {
  constructor(e) {
    this.fn = e.fn;
    this.mn = e.mn;
  }
  pn(e) {
    this.gn = e;
  }
  yn(e) {
    this.wn = e;
  }
  bn(e) {
    this.Sn = e;
  }
  onMessage(e) {
    this.xn = e;
  }
  close() {
    this.mn();
  }
  send(e) {
    this.fn(e);
  }
  vn() {
    this.gn();
  }
  Dn() {
    this.wn();
  }
  Cn(e) {
    this.Sn(e);
  }
  Fn(e) {
    this.xn(e);
  }
};
var Qo = "WebChannelConnection";
var zo = (e, t, n) => {
  e.listen(t, e => {
    try {
      n(e);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  });
};
var Yo = class e extends Ko {
  constructor(e) {
    super(e);
    this.On = [];
    this.forceLongPolling = e.forceLongPolling;
    this.autoDetectLongPolling = e.autoDetectLongPolling;
    this.useFetchStreams = e.useFetchStreams;
    this.longPollingOptions = e.longPollingOptions;
  }
  static Mn() {
    if (!e.Nn) {
      const t = F();
      zo(t, A.STAT_EVENT, e => {
        if (e.stat === N.PROXY) {
          yt(Qo, "STAT_EVENT: detected buffering proxy");
        } else if (e.stat === N.NOPROXY) {
          yt(Qo, "STAT_EVENT: detected no buffering proxy");
        }
      });
      e.Nn = true;
    }
  }
  Vn(e, t, n, r, s) {
    const i = Uo();
    return new Promise((s, a) => {
      const o = new I();
      o.setWithCredentials(true);
      o.listenOnce(T.COMPLETE, () => {
        try {
          switch (o.getLastErrorCode()) {
            case b.NO_ERROR:
              const t = o.getResponseJson();
              yt(Qo, `XHR for RPC '${e}' ${i} received:`, JSON.stringify(t));
              s(t);
              break;
            case b.TIMEOUT:
              yt(Qo, `RPC '${e}' ${i} timed out`);
              a(new jt(Kt.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case b.HTTP_ERROR:
              const n = o.getStatus();
              yt(Qo, `RPC '${e}' ${i} failed with status:`, n, "response text:", o.getResponseText());
              if (n > 0) {
                let e = o.getResponseJson();
                if (Array.isArray(e)) {
                  e = e[0];
                }
                const t = e?.error;
                if (t && t.status && t.message) {
                  const e = function (e) {
                    const t = e.toLowerCase().replace(/_/g, "-");
                    if (Object.values(Kt).indexOf(t) >= 0) {
                      return t;
                    } else {
                      return Kt.UNKNOWN;
                    }
                  }(t.status);
                  a(new jt(e, t.message));
                } else {
                  a(new jt(Kt.UNKNOWN, "Server responded with status " + o.getStatus()));
                }
              } else {
                a(new jt(Kt.UNAVAILABLE, "Connection failed."));
              }
              break;
            default:
              Tt(9055, {
                Bn: e,
                streamId: i,
                Ln: o.getLastErrorCode(),
                $n: o.getLastError()
              });
          }
        } finally {
          yt(Qo, `RPC '${e}' ${i} completed.`);
        }
      });
      const B = JSON.stringify(r);
      yt(Qo, `RPC '${e}' ${i} sending request:`, r);
      o.send(t, "POST", B, n, 15);
    });
  }
  Un(t, n, r) {
    const s = Uo();
    const i = [this.hn, "/", "google.firestore.v1.Firestore", "/", t, "/channel"];
    const a = this.createWebChannelTransport();
    const o = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 600000
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    const B = this.longPollingOptions.timeoutSeconds;
    if (B !== undefined) {
      o.longPollingTimeout = Math.round(B * 1000);
    }
    if (this.useFetchStreams) {
      o.useFetchStreams = true;
    }
    this.An(o.initMessageHeaders, n, r);
    o.encodeInitMessageHeaders = true;
    const u = i.join("");
    yt(Qo, `Creating RPC '${t}' stream ${s}: ${u}`, o);
    const c = a.createWebChannel(u, o);
    this.kn(c);
    let l = false;
    let h = false;
    const C = new jo({
      fn: e => {
        if (h) {
          yt(Qo, `Not sending because RPC '${t}' stream ${s} is closed:`, e);
        } else {
          if (!l) {
            yt(Qo, `Opening RPC '${t}' stream ${s} transport.`);
            c.open();
            l = true;
          }
          yt(Qo, `RPC '${t}' stream ${s} sending:`, e);
          c.send(e);
        }
      },
      mn: () => c.close()
    });
    zo(c, v.EventType.OPEN, () => {
      if (!h) {
        yt(Qo, `RPC '${t}' stream ${s} transport opened.`);
        C.vn();
      }
    });
    zo(c, v.EventType.CLOSE, () => {
      if (!h) {
        h = true;
        yt(Qo, `RPC '${t}' stream ${s} transport closed`);
        C.Cn();
        this.Qn(c);
      }
    });
    zo(c, v.EventType.ERROR, e => {
      if (!h) {
        h = true;
        It(Qo, `RPC '${t}' stream ${s} transport errored. Name:`, e.name, "Message:", e.message);
        C.Cn(new jt(Kt.UNAVAILABLE, "The operation could not be completed"));
      }
    });
    zo(c, v.EventType.MESSAGE, e => {
      if (!h) {
        const n = e.data[0];
        Nt(!!n, 16349);
        const r = n;
        const i = r?.error || r[0]?.error;
        if (i) {
          yt(Qo, `RPC '${t}' stream ${s} received error:`, i);
          const e = i.status;
          let n = function (e) {
            const t = Yi[e];
            if (t !== undefined) {
              return Zi(t);
            }
          }(e);
          let r = i.message;
          if (e === "NOT_FOUND" && r.includes("database") && r.includes("does not exist") && r.includes(this.databaseId.database)) {
            It(`Database '${this.databaseId.database}' not found. Please check your project configuration.`);
          }
          if (n === undefined) {
            n = Kt.INTERNAL;
            r = "Unknown error status: " + e + " with message " + i.message;
          }
          h = true;
          C.Cn(new jt(n, r));
          c.close();
        } else {
          yt(Qo, `RPC '${t}' stream ${s} received:`, n);
          C.Fn(n);
        }
      }
    });
    e.Mn();
    setTimeout(() => {
      C.Dn();
    }, 0);
    return C;
  }
  terminate() {
    this.On.forEach(e => e.close());
    this.On = [];
  }
  kn(e) {
    this.On.push(e);
  }
  Qn(e) {
    this.On = this.On.filter(t => t === e);
  }
  An(e, t, n) {
    super.An(e, t, n);
    if (this.databaseInfo.apiKey) {
      e["x-goog-api-key"] = this.databaseInfo.apiKey;
    }
  }
  createWebChannelTransport() {
    return O();
  }
};
Yo.Nn = false;
var Wo = class {
  constructor(e, t, n = 1000, r = 1.5, s = 60000) {
    this.qn = e;
    this.timerId = t;
    this.Kn = n;
    this.Wn = r;
    this.Gn = s;
    this.jn = 0;
    this.zn = null;
    this.Hn = Date.now();
    this.reset();
  }
  reset() {
    this.jn = 0;
  }
  Jn() {
    this.jn = this.Gn;
  }
  Yn(e) {
    this.cancel();
    const t = Math.floor(this.jn + this.Zn());
    const n = Math.max(0, Date.now() - this.Hn);
    const r = Math.max(0, t - n);
    if (r > 0) {
      yt("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`);
    }
    this.zn = this.qn.enqueueAfterDelay(this.timerId, r, () => {
      this.Hn = Date.now();
      return e();
    });
    this.jn *= this.Wn;
    if (this.jn < this.Kn) {
      this.jn = this.Kn;
    }
    if (this.jn > this.Gn) {
      this.jn = this.Gn;
    }
  }
  Xn() {
    if (this.zn !== null) {
      this.zn.skipDelay();
      this.zn = null;
    }
  }
  cancel() {
    if (this.zn !== null) {
      this.zn.cancel();
      this.zn = null;
    }
  }
  Zn() {
    return (Math.random() - 0.5) * this.jn;
  }
};
var $o = "PersistentStream";
var Xo = class {
  constructor(e, t, n, r, s, i, a, o) {
    this.qn = e;
    this.er = n;
    this.tr = r;
    this.connection = s;
    this.authCredentialsProvider = i;
    this.appCheckCredentialsProvider = a;
    this.listener = o;
    this.state = 0;
    this.nr = 0;
    this.rr = null;
    this.ir = null;
    this.stream = null;
    this.sr = 0;
    this._r = new Wo(e, t);
  }
  ar() {
    return this.state === 1 || this.state === 5 || this.ur();
  }
  ur() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.sr = 0;
    if (this.state !== 4) {
      this.auth();
    } else {
      this.cr();
    }
  }
  async stop() {
    if (this.ar()) {
      await this.close(0);
    }
  }
  lr() {
    this.state = 0;
    this._r.reset();
  }
  Er() {
    if (this.ur() && this.rr === null) {
      this.rr = this.qn.enqueueAfterDelay(this.er, 60000, () => this.hr());
    }
  }
  Tr(e) {
    this.Pr();
    this.stream.send(e);
  }
  async hr() {
    if (this.ur()) {
      return this.close(0);
    }
  }
  Pr() {
    if (this.rr) {
      this.rr.cancel();
      this.rr = null;
    }
  }
  Ir() {
    if (this.ir) {
      this.ir.cancel();
      this.ir = null;
    }
  }
  async close(e, t) {
    this.Pr();
    this.Ir();
    this._r.cancel();
    this.nr++;
    if (e !== 4) {
      this._r.reset();
    } else if (t && t.code === Kt.RESOURCE_EXHAUSTED) {
      _t(t.toString());
      _t("Using maximum backoff delay to prevent overloading the backend.");
      this._r.Jn();
    } else if (t && t.code === Kt.UNAUTHENTICATED && this.state !== 3) {
      this.authCredentialsProvider.invalidateToken();
      this.appCheckCredentialsProvider.invalidateToken();
    }
    if (this.stream !== null) {
      this.Rr();
      this.stream.close();
      this.stream = null;
    }
    this.state = e;
    await this.listener.bn(t);
  }
  Rr() {}
  auth() {
    this.state = 1;
    const e = this.Ar(this.nr);
    const t = this.nr;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([e, n]) => {
      if (this.nr === t) {
        this.Vr(e, n);
      }
    }, t => {
      e(() => {
        const e = new jt(Kt.UNKNOWN, "Fetching auth token failed: " + t.message);
        return this.dr(e);
      });
    });
  }
  Vr(e, t) {
    const n = this.Ar(this.nr);
    this.stream = this.mr(e, t);
    this.stream.pn(() => {
      n(() => this.listener.pn());
    });
    this.stream.yn(() => {
      n(() => {
        this.state = 2;
        this.ir = this.qn.enqueueAfterDelay(this.tr, 10000, () => {
          if (this.ur()) {
            this.state = 3;
          }
          return Promise.resolve();
        });
        return this.listener.yn();
      });
    });
    this.stream.bn(e => {
      n(() => this.dr(e));
    });
    this.stream.onMessage(e => {
      n(() => ++this.sr == 1 ? this.pr(e) : this.onNext(e));
    });
  }
  cr() {
    this.state = 5;
    this._r.Yn(async () => {
      this.state = 0;
      this.start();
    });
  }
  dr(e) {
    yt($o, `close with error: ${e}`);
    this.stream = null;
    return this.close(4, e);
  }
  Ar(e) {
    return t => {
      this.qn.enqueueAndForget(() => this.nr === e ? t() : (yt($o, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
};
var Zo = class extends Xo {
  constructor(e, t, n, r, s, i) {
    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, i);
    this.serializer = s;
  }
  mr(e, t) {
    return this.connection.Un("Listen", e, t);
  }
  pr(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this._r.reset();
    const t = function (e, t) {
      let n;
      if ("targetChange" in t) {
        t.targetChange;
        const r = function (e) {
          if (e === "NO_CHANGE") {
            return 0;
          } else if (e === "ADD") {
            return 1;
          } else if (e === "REMOVE") {
            return 2;
          } else if (e === "CURRENT") {
            return 3;
          } else if (e === "RESET") {
            return 4;
          } else {
            return Tt(39313, {
              state: e
            });
          }
        }(t.targetChange.targetChangeType || "NO_CHANGE");
        const s = t.targetChange.targetIds || [];
        const i = function (e, t) {
          if (e.useProto3Json) {
            Nt(t === undefined || typeof t == "string", 58123);
            return mn.fromBase64String(t || "");
          } else {
            Nt(t === undefined || t instanceof Buffer || t instanceof Uint8Array, 16193);
            return mn.fromUint8Array(t || new Uint8Array());
          }
        }(e, t.targetChange.resumeToken);
        const a = t.targetChange.cause;
        const o = a && function (e) {
          const t = e.code === undefined ? Kt.UNKNOWN : Zi(e.code);
          return new jt(t, e.message || "");
        }(a);
        n = new Ia(r, s, i, o || null);
      } else if ("documentChange" in t) {
        t.documentChange;
        const r = t.documentChange;
        r.document;
        r.document.name;
        r.document.updateTime;
        const s = Ja(e, r.document.name);
        const i = Ma(r.document.updateTime);
        const a = r.document.createTime ? Ma(r.document.createTime) : di.min();
        const o = new os({
          mapValue: {
            fields: r.document.fields
          }
        });
        const B = fi.newFoundDocument(s, i, a, o);
        const u = r.targetIds || [];
        const c = r.removedTargetIds || [];
        n = new ya(u, c, B.key, B);
      } else if ("documentDelete" in t) {
        t.documentDelete;
        const r = t.documentDelete;
        r.document;
        const s = Ja(e, r.document);
        const i = r.readTime ? Ma(r.readTime) : di.min();
        const a = fi.newNoDocument(s, i);
        const o = r.removedTargetIds || [];
        n = new ya([], o, a.key, a);
      } else if ("documentRemove" in t) {
        t.documentRemove;
        const r = t.documentRemove;
        r.document;
        const s = Ja(e, r.document);
        const i = r.removedTargetIds || [];
        n = new ya([], i, s, null);
      } else {
        if (!("filter" in t)) {
          return Tt(11601, {
            Nt: t
          });
        }
        {
          t.filter;
          const e = t.filter;
          e.targetId;
          const {
            count: r = 0,
            unchangedNames: s
          } = e;
          const i = new $i(r, s);
          const a = e.targetId;
          n = new _a(a, i);
        }
      }
      return n;
    }(this.serializer, e);
    const n = function (e) {
      if (!("targetChange" in e)) {
        return di.min();
      }
      const t = e.targetChange;
      if (t.targetIds && t.targetIds.length) {
        return di.min();
      } else if (t.readTime) {
        return Ma(t.readTime);
      } else {
        return di.min();
      }
    }(e);
    return this.listener.gr(t, n);
  }
  yr(e) {
    const t = {};
    t.database = Qa(this.serializer);
    t.addTarget = function (e, t) {
      let n;
      const r = t.target;
      n = Fi(r) ? {
        pipelineQuery: no(e, r)
      } : Oi(r) ? {
        documents: Za(e, r)
      } : {
        query: eo(e, r).Lt
      };
      n.targetId = t.targetId;
      if (t.resumeToken.approximateByteSize() > 0) {
        n.resumeToken = Ga(e, t.resumeToken);
        const r = La(e, t.expectedCount);
        if (r !== null) {
          n.expectedCount = r;
        }
      } else if (t.snapshotVersion.compareTo(di.min()) > 0) {
        n.readTime = Ra(e, t.snapshotVersion.toTimestamp());
        const r = La(e, t.expectedCount);
        if (r !== null) {
          n.expectedCount = r;
        }
      }
      return n;
    }(this.serializer, e);
    const n = function (e, t) {
      const n = function (e) {
        switch (e) {
          case "TargetPurposeListen":
            return null;
          case "TargetPurposeExistenceFilterMismatch":
            return "existence-filter-mismatch";
          case "TargetPurposeExistenceFilterMismatchBloom":
            return "existence-filter-mismatch-bloom";
          case "TargetPurposeLimboResolution":
            return "limbo-document";
          default:
            return Tt(28987, {
              purpose: e
            });
        }
      }(t.purpose);
      if (n == null) {
        return null;
      } else {
        return {
          "goog-listen-tags": n
        };
      }
    }(this.serializer, e);
    if (n) {
      t.labels = n;
    }
    this.Tr(t);
  }
  wr(e) {
    const t = {};
    t.database = Qa(this.serializer);
    t.removeTarget = e;
    this.Tr(t);
  }
};
var eB = class extends Xo {
  constructor(e, t, n, r, s, i) {
    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, i);
    this.serializer = s;
  }
  get br() {
    return this.sr > 0;
  }
  start() {
    this.lastStreamToken = undefined;
    super.start();
  }
  Rr() {
    if (this.br) {
      this.Sr([]);
    }
  }
  mr(e, t) {
    return this.connection.Un("Write", e, t);
  }
  pr(e) {
    Nt(!!e.streamToken, 31322);
    this.lastStreamToken = e.streamToken;
    Nt(!e.writeResults || e.writeResults.length === 0, 55816);
    return this.listener.vr();
  }
  onNext(e) {
    Nt(!!e.streamToken, 12678);
    this.lastStreamToken = e.streamToken;
    this._r.reset();
    const t = function (e, t) {
      if (e && e.length > 0) {
        Nt(t !== undefined, 14353);
        return e.map(e => function (e, t) {
          let n = e.updateTime ? Ma(e.updateTime) : Ma(t);
          if (n.isEqual(di.min())) {
            n = Ma(t);
          }
          return new Ns(n, e.transformResults || []);
        }(e, t));
      } else {
        return [];
      }
    }(e.writeResults, e.commitTime);
    const n = Ma(e.commitTime);
    return this.listener.Dr(n, t);
  }
  Cr() {
    const e = {};
    e.database = Qa(this.serializer);
    this.Tr(e);
  }
  Sr(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map(e => $a(this.serializer, e))
    };
    this.Tr(t);
  }
};
var tB = class {};
var nB = class extends tB {
  constructor(e, t, n, r) {
    super();
    this.authCredentials = e;
    this.appCheckCredentials = t;
    this.connection = n;
    this.serializer = r;
    this.Fr = false;
  }
  Or() {
    if (this.Fr) {
      throw new jt(Kt.FAILED_PRECONDITION, "The client has already been terminated.");
    }
  }
  In(e, t, n, r) {
    this.Or();
    return Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.connection.In(e, Ha(t, n), r, s, i)).catch(e => {
      throw e.name === "FirebaseError" ? (e.code === Kt.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new jt(Kt.UNKNOWN, e.toString());
    });
  }
  dn(e, t, n, r, s) {
    this.Or();
    return Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, a]) => this.connection.dn(e, Ha(t, n), r, i, a, s)).catch(e => {
      throw e.name === "FirebaseError" ? (e.code === Kt.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new jt(Kt.UNKNOWN, e.toString());
    });
  }
  terminate() {
    this.Fr = true;
    this.connection.terminate();
  }
};
var rB = new Map();
var sB = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
var iB = 41943040;
var aB = class e {
  static withCacheSize(t) {
    return new e(t, e.DEFAULT_COLLECTION_PERCENTILE, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
  constructor(e, t, n) {
    this.cacheSizeCollectionThreshold = e;
    this.percentileToCollect = t;
    this.maximumSequenceNumbersToCollect = n;
  }
};
aB.DEFAULT_COLLECTION_PERCENTILE = 10;
aB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1000;
aB.DEFAULT = new aB(iB, aB.DEFAULT_COLLECTION_PERCENTILE, aB.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
aB.DISABLED = new aB(-1, 0, 0);
var oB = class {
  constructor(e, t) {
    this.previousValue = e;
    if (t) {
      t.sequenceNumberHandler = e => this.Mr(e);
      this.Nr = e => t.writeSequenceNumber(e);
    }
  }
  Mr(e) {
    this.previousValue = Math.max(e, this.previousValue);
    return this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    if (this.Nr) {
      this.Nr(e);
    }
    return e;
  }
};
oB.Br = -1;
var BB = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var uB = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach(e => e());
  }
};
async function cB(e) {
  if (e.code !== Kt.FAILED_PRECONDITION || e.message !== BB) {
    throw e;
  }
  yt("LocalStore", "Unexpectedly lost primary lease");
}
var lB = class e {
  constructor(e) {
    this.nextCallback = null;
    this.catchCallback = null;
    this.result = undefined;
    this.error = undefined;
    this.isDone = false;
    this.callbackAttached = false;
    e(e => {
      this.isDone = true;
      this.result = e;
      if (this.nextCallback) {
        this.nextCallback(e);
      }
    }, e => {
      this.isDone = true;
      this.error = e;
      if (this.catchCallback) {
        this.catchCallback(e);
      }
    });
  }
  catch(e) {
    return this.next(undefined, e);
  }
  next(t, n) {
    if (this.callbackAttached) {
      Tt(59440);
    }
    this.callbackAttached = true;
    if (this.isDone) {
      if (this.error) {
        return this.wrapFailure(n, this.error);
      } else {
        return this.wrapSuccess(t, this.result);
      }
    } else {
      return new e((e, r) => {
        this.nextCallback = n => {
          this.wrapSuccess(t, n).next(e, r);
        };
        this.catchCallback = t => {
          this.wrapFailure(n, t).next(e, r);
        };
      });
    }
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(t) {
    try {
      const n = t();
      if (n instanceof e) {
        return n;
      } else {
        return e.resolve(n);
      }
    } catch (t) {
      return e.reject(t);
    }
  }
  wrapSuccess(t, n) {
    if (t) {
      return this.wrapUserFunction(() => t(n));
    } else {
      return e.resolve(n);
    }
  }
  wrapFailure(t, n) {
    if (t) {
      return this.wrapUserFunction(() => t(n));
    } else {
      return e.reject(n);
    }
  }
  static resolve(t) {
    return new e((e, n) => {
      e(t);
    });
  }
  static reject(t) {
    return new e((e, n) => {
      n(t);
    });
  }
  static waitFor(t) {
    return new e((e, n) => {
      let r = 0;
      let s = 0;
      let i = false;
      t.forEach(t => {
        ++r;
        t.next(() => {
          ++s;
          if (i && s === r) {
            e();
          }
        }, e => n(e));
      });
      i = true;
      if (s === r) {
        e();
      }
    });
  }
  static or(t) {
    let n = e.resolve(false);
    for (const r of t) {
      n = n.next(t => t ? e.resolve(t) : r());
    }
    return n;
  }
  static forEach(e, t) {
    const n = [];
    e.forEach((e, r) => {
      n.push(t.call(this, e, r));
    });
    return this.waitFor(n);
  }
  static mapArray(t, n) {
    return new e((e, r) => {
      const s = t.length;
      const i = new Array(s);
      let a = 0;
      for (let o = 0; o < s; o++) {
        const B = o;
        n(t[B]).next(t => {
          i[B] = t;
          ++a;
          if (a === s) {
            e(i);
          }
        }, e => r(e));
      }
    });
  }
  static doWhile(t, n) {
    return new e((e, r) => {
      const s = () => {
        if (t() === true) {
          n().next(() => {
            s();
          }, r);
        } else {
          e();
        }
      };
      s();
    });
  }
};
var hB = "SimpleDb";
var CB = class e {
  static open(t, n, r, s) {
    try {
      return new e(n, t.transaction(s, r));
    } catch (t) {
      throw new gB(n, t);
    }
  }
  constructor(e, t) {
    this.action = e;
    this.transaction = t;
    this.aborted = false;
    this.Lr = new No();
    this.transaction.oncomplete = () => {
      this.Lr.resolve();
    };
    this.transaction.onabort = () => {
      if (t.error) {
        this.Lr.reject(new gB(e, t.error));
      } else {
        this.Lr.resolve();
      }
    };
    this.transaction.onerror = t => {
      const n = yB(t.target.error);
      this.Lr.reject(new gB(e, n));
    };
  }
  get $r() {
    return this.Lr.promise;
  }
  abort(e) {
    if (e) {
      this.Lr.reject(e);
    }
    if (!this.aborted) {
      yt(hB, "Aborting transaction:", e ? e.message : "Client-initiated abort");
      this.aborted = true;
      this.transaction.abort();
    }
  }
  Ur() {
    const e = this.transaction;
    if (!this.aborted && typeof e.commit == "function") {
      e.commit();
    }
  }
  store(e) {
    const t = this.transaction.objectStore(e);
    return new EB(t);
  }
};
var dB = class e {
  static delete(e) {
    yt(hB, "Removing database:", e);
    return DB(a().indexedDB.deleteDatabase(e)).toPromise();
  }
  static cn() {
    if (!p()) {
      return false;
    }
    if (e.kr()) {
      return true;
    }
    const t = r();
    const n = e.Qr(t);
    const s = n > 0 && n < 10;
    const i = fB(t);
    const a = i > 0 && i < 4.5;
    return !(t.indexOf("MSIE ") > 0) && !(t.indexOf("Trident/") > 0) && !(t.indexOf("Edge/") > 0) && !s && !a;
  }
  static kr() {
    return typeof process != "undefined" && process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE === "YES";
  }
  static qr(e, t) {
    return e.store(t);
  }
  static Qr(e) {
    const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);
    const n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  constructor(t, n, s) {
    this.name = t;
    this.version = n;
    this.Kr = s;
    this.Wr = null;
    if (e.Qr(r()) === 12.2) {
      _t("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
  }
  async Gr(e) {
    if (!this.db) {
      yt(hB, "Opening database:", this.name);
      this.db = await new Promise((t, n) => {
        const r = indexedDB.open(this.name, this.version);
        r.onsuccess = e => {
          const n = e.target.result;
          t(n);
        };
        r.onblocked = () => {
          n(new gB(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
        };
        r.onerror = t => {
          const r = t.target.error;
          if (r.name === "VersionError") {
            n(new jt(Kt.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."));
          } else if (r.name === "InvalidStateError") {
            n(new jt(Kt.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + r));
          } else {
            n(new gB(e, r));
          }
        };
        r.onupgradeneeded = e => {
          yt(hB, "Database \"" + this.name + "\" requires upgrade from version:", e.oldVersion);
          const t = e.target.result;
          this.Kr.jr(t, r.transaction, e.oldVersion, this.version).next(() => {
            yt(hB, "Database upgrade to version " + this.version + " complete");
          });
        };
      });
    }
    if (this.zr) {
      this.db.onversionchange = e => this.zr(e);
    }
    return this.db;
  }
  Hr(e) {
    this.zr = e;
    if (this.db) {
      this.db.onversionchange = t => e(t);
    }
  }
  async runTransaction(e, t, n, r) {
    const s = t === "readonly";
    let i = 0;
    while (true) {
      ++i;
      try {
        this.db = await this.Gr(e);
        const t = CB.open(this.db, e, s ? "readonly" : "readwrite", n);
        const i = r(t).next(e => {
          t.Ur();
          return e;
        }).catch(e => {
          t.abort(e);
          return lB.reject(e);
        }).toPromise();
        i.catch(() => {});
        await t.$r;
        return i;
      } catch (e) {
        const t = e;
        const n = t.name !== "FirebaseError" && i < 3;
        yt(hB, "Transaction failed with error:", t.message, "Retrying:", n);
        this.close();
        if (!n) {
          return Promise.reject(t);
        }
      }
    }
  }
  close() {
    if (this.db) {
      this.db.close();
    }
    this.db = undefined;
  }
};
function fB(e) {
  const t = e.match(/Android ([\d.]+)/i);
  const n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
var pB = class {
  constructor(e) {
    this.Jr = e;
    this.Yr = false;
    this.Zr = null;
  }
  get isDone() {
    return this.Yr;
  }
  get Xr() {
    return this.Zr;
  }
  set cursor(e) {
    this.Jr = e;
  }
  done() {
    this.Yr = true;
  }
  ei(e) {
    this.Zr = e;
  }
  delete() {
    return DB(this.Jr.delete());
  }
};
var gB = class extends jt {
  constructor(e, t) {
    super(Kt.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`);
    this.name = "IndexedDbTransactionError";
  }
};
function mB(e) {
  return e.name === "IndexedDbTransactionError";
}
var EB = class {
  constructor(e) {
    this.store = e;
  }
  put(e, t) {
    let n;
    if (t !== undefined) {
      yt(hB, "PUT", this.store.name, e, t);
      n = this.store.put(t, e);
    } else {
      yt(hB, "PUT", this.store.name, "<auto-key>", e);
      n = this.store.put(e);
    }
    return DB(n);
  }
  add(e) {
    yt(hB, "ADD", this.store.name, e, e);
    return DB(this.store.add(e));
  }
  get(e) {
    return DB(this.store.get(e)).next((t = null) => {
      yt(hB, "GET", this.store.name, e, t);
      return t;
    });
  }
  delete(e) {
    yt(hB, "DELETE", this.store.name, e);
    return DB(this.store.delete(e));
  }
  count() {
    yt(hB, "COUNT", this.store.name);
    return DB(this.store.count());
  }
  ti(e, t) {
    const n = this.options(e, t);
    const r = n.index ? this.store.index(n.index) : this.store;
    if (typeof r.getAll == "function") {
      const e = r.getAll(n.range);
      return new lB((t, n) => {
        e.onerror = e => {
          n(e.target.error);
        };
        e.onsuccess = e => {
          t(e.target.result);
        };
      });
    }
    {
      const e = this.cursor(n);
      const t = [];
      return this.ni(e, (e, n) => {
        t.push(n);
      }).next(() => t);
    }
  }
  ri(e, t) {
    const n = this.store.getAll(e, t === null ? undefined : t);
    return new lB((e, t) => {
      n.onerror = e => {
        t(e.target.error);
      };
      n.onsuccess = t => {
        e(t.target.result);
      };
    });
  }
  ii(e, t) {
    yt(hB, "DELETE ALL", this.store.name);
    const n = this.options(e, t);
    n.si = false;
    const r = this.cursor(n);
    return this.ni(r, (e, t, n) => n.delete());
  }
  _i(e, t) {
    let n;
    if (t) {
      n = e;
    } else {
      n = {};
      t = e;
    }
    const r = this.cursor(n);
    return this.ni(r, t);
  }
  oi(e) {
    const t = this.cursor({});
    return new lB((n, r) => {
      t.onerror = e => {
        r(yB(e.target.error));
      };
      t.onsuccess = t => {
        const r = t.target.result;
        if (r) {
          e(r.primaryKey, r.value).next(e => {
            if (e) {
              r.continue();
            } else {
              n();
            }
          });
        } else {
          n();
        }
      };
    });
  }
  ni(e, t) {
    const n = [];
    return new lB((r, s) => {
      e.onerror = e => {
        s(e.target.error);
      };
      e.onsuccess = e => {
        const s = e.target.result;
        if (!s) {
          r();
          return;
        }
        const i = new pB(s);
        const a = t(s.primaryKey, s.value, i);
        if (a instanceof lB) {
          const e = a.catch(e => {
            i.done();
            return lB.reject(e);
          });
          n.push(e);
        }
        if (i.isDone) {
          r();
        } else if (i.Xr === null) {
          s.continue();
        } else {
          s.continue(i.Xr);
        }
      };
    }).next(() => lB.waitFor(n));
  }
  options(e, t) {
    let n;
    if (e !== undefined) {
      if (typeof e == "string") {
        n = e;
      } else {
        t = e;
      }
    }
    return {
      index: n,
      range: t
    };
  }
  cursor(e) {
    let t = "next";
    if (e.reverse) {
      t = "prev";
    }
    if (e.index) {
      const n = this.store.index(e.index);
      if (e.si) {
        return n.openKeyCursor(e.range, t);
      } else {
        return n.openCursor(e.range, t);
      }
    }
    return this.store.openCursor(e.range, t);
  }
};
function DB(e) {
  return new lB((t, n) => {
    e.onsuccess = e => {
      const n = e.target.result;
      t(n);
    };
    e.onerror = e => {
      n(yB(e.target.error));
    };
  });
}
var wB = false;
function yB(e) {
  const t = dB.Qr(r());
  if (t >= 12.2 && t < 13) {
    const t = "An internal error was encountered in the Indexed Database server";
    if (e.message.indexOf(t) >= 0) {
      const e = new jt("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      if (!wB) {
        wB = true;
        setTimeout(() => {
          throw e;
        }, 0);
      }
      return e;
    }
  }
  return e;
}
var _B = "LruGarbageCollector";
function IB([e, t], [n, r]) {
  const s = St(e, n);
  if (s === 0) {
    return St(t, r);
  } else {
    return s;
  }
}
var vB = class {
  constructor(e) {
    this.ai = e;
    this.buffer = new Ut(IB);
    this.ui = 0;
  }
  ci() {
    return ++this.ui;
  }
  li(e) {
    const t = [e, this.ci()];
    if (this.buffer.size < this.ai) {
      this.buffer = this.buffer.add(t);
    } else {
      const e = this.buffer.last();
      if (IB(t, e) < 0) {
        this.buffer = this.buffer.delete(e).add(t);
      }
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
};
var TB = class {
  constructor(e, t, n) {
    this.garbageCollector = e;
    this.asyncQueue = t;
    this.localStore = n;
    this.Ei = null;
  }
  start() {
    if (this.garbageCollector.params.cacheSizeCollectionThreshold !== -1) {
      this.hi(60000);
    }
  }
  stop() {
    if (this.Ei) {
      this.Ei.cancel();
      this.Ei = null;
    }
  }
  get started() {
    return this.Ei !== null;
  }
  hi(e) {
    yt(_B, `Garbage collection scheduled in ${e}ms`);
    this.Ei = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, async () => {
      this.Ei = null;
      try {
        await this.localStore.collectGarbage(this.garbageCollector);
      } catch (e) {
        if (mB(e)) {
          yt(_B, "Ignoring IndexedDB error during garbage collection: ", e);
        } else {
          await cB(e);
        }
      }
      await this.hi(300000);
    });
  }
};
var bB = class {
  constructor(e, t) {
    this.Ti = e;
    this.params = t;
  }
  calculateTargetCount(e, t) {
    return this.Ti.Pi(e).next(e => Math.floor(t / 100 * e));
  }
  nthSequenceNumber(e, t) {
    if (t === 0) {
      return lB.resolve(oB.Br);
    }
    const n = new vB(t);
    return this.Ti.forEachTarget(e, e => n.li(e.sequenceNumber)).next(() => this.Ti.Ii(e, e => n.li(e))).next(() => n.maxValue);
  }
  removeTargets(e, t, n) {
    return this.Ti.removeTargets(e, t, n);
  }
  removeOrphanedDocuments(e, t) {
    return this.Ti.removeOrphanedDocuments(e, t);
  }
  collect(e, t) {
    if (this.params.cacheSizeCollectionThreshold === -1) {
      yt("LruGarbageCollector", "Garbage collection skipped; disabled");
      return lB.resolve(sB);
    } else {
      return this.getCacheSize(e).next(n => n < this.params.cacheSizeCollectionThreshold ? (yt("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), sB) : this.Ri(e, t));
    }
  }
  getCacheSize(e) {
    return this.Ti.getCacheSize(e);
  }
  Ri(e, t) {
    let n;
    let r;
    let s;
    let i;
    let a;
    let o;
    let B;
    const u = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect).next(t => {
      if (t > this.params.maximumSequenceNumbersToCollect) {
        yt("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`);
        r = this.params.maximumSequenceNumbersToCollect;
      } else {
        r = t;
      }
      i = Date.now();
      return this.nthSequenceNumber(e, r);
    }).next(r => {
      n = r;
      a = Date.now();
      return this.removeTargets(e, n, t);
    }).next(t => {
      s = t;
      o = Date.now();
      return this.removeOrphanedDocuments(e, n);
    }).next(e => {
      B = Date.now();
      if (wt() <= h.DEBUG) {
        yt("LruGarbageCollector", `LRU Garbage Collection\n\tCounted targets in ${i - u}ms\n\tDetermined least recently used ${r} in ${a - i}ms\n\tRemoved ${s} targets in ${o - a}ms\n\tRemoved ${e} documents in ${B - o}ms\nTotal Duration: ${B - u}ms`);
      }
      return lB.resolve({
        didRun: true,
        sequenceNumbersCollected: r,
        targetsRemoved: s,
        documentsRemoved: e
      });
    });
  }
};
function NB(e, t) {
  return new bB(e, t);
}
var AB = "firestore.googleapis.com";
var FB = true;
var OB = class {
  constructor(e) {
    if (e.host === undefined) {
      if (e.ssl !== undefined) {
        throw new jt(Kt.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      }
      this.host = AB;
      this.ssl = FB;
    } else {
      this.host = e.host;
      this.ssl = e.ssl ?? FB;
    }
    this.isUsingEmulator = e.emulatorOptions !== undefined;
    this.credentials = e.credentials;
    this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties;
    this.localCache = e.localCache;
    if (e._customHeaders) {
      this._customHeaders = {
        ...e._customHeaders
      };
    }
    if (e.cacheSizeBytes === undefined) {
      this.cacheSizeBytes = iB;
    } else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576) {
        throw new jt(Kt.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      }
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    sn("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling);
    this.experimentalForceLongPolling = !!e.experimentalForceLongPolling;
    if (this.experimentalForceLongPolling) {
      this.experimentalAutoDetectLongPolling = false;
    } else if (e.experimentalAutoDetectLongPolling === undefined) {
      this.experimentalAutoDetectLongPolling = true;
    } else {
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling;
    }
    this.experimentalLongPollingOptions = Go(e.experimentalLongPollingOptions ?? {});
    (function (e) {
      if (e.timeoutSeconds !== undefined) {
        if (isNaN(e.timeoutSeconds)) {
          throw new jt(Kt.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);
        }
        if (e.timeoutSeconds < 5) {
          throw new jt(Kt.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);
        }
        if (e.timeoutSeconds > 30) {
          throw new jt(Kt.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`);
        }
      }
    })(this.experimentalLongPollingOptions);
    this.useFetchStreams = !!e.useFetchStreams;
    if (e.grpcFlowControlWindow !== undefined) {
      if (typeof e.grpcFlowControlWindow != "number" || e.grpcFlowControlWindow <= 0 || e.grpcFlowControlWindow > 2147483647 || !Number.isInteger(e.grpcFlowControlWindow)) {
        throw new jt(Kt.INVALID_ARGUMENT, "grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");
      }
      this.grpcFlowControlWindow = e.grpcFlowControlWindow;
    }
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function (e, t) {
      return e.timeoutSeconds === t.timeoutSeconds;
    }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams && this.grpcFlowControlWindow === e.grpcFlowControlWindow && function (e, t) {
      if (e === t) {
        return true;
      }
      if (!e || !t) {
        return false;
      }
      const n = Object.keys(e);
      const r = Object.keys(t);
      if (n.length !== r.length) {
        return false;
      }
      for (const s of n) {
        if (e[s] !== t[s]) {
          return false;
        }
      }
      return true;
    }(this._customHeaders, e._customHeaders);
  }
};
var SB = class {
  constructor(e, t, n, r) {
    this._authCredentials = e;
    this._appCheckCredentials = t;
    this._databaseId = n;
    this._app = r;
    this.type = "firestore-lite";
    this._persistenceKey = "(lite)";
    this._settings = new OB({});
    this._settingsFrozen = false;
    this._emulatorOptions = {};
    this._terminateTask = "notTerminated";
  }
  get app() {
    if (!this._app) {
      throw new jt(Kt.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    }
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(e) {
    if (this._settingsFrozen) {
      throw new jt(Kt.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    }
    this._settings = new OB(e);
    this._emulatorOptions = e.emulatorOptions || {};
    if (e.credentials !== undefined) {
      this._authCredentials = function (e) {
        if (!e) {
          return new Fo();
        }
        switch (e.type) {
          case "firstParty":
            return new Lo(e.sessionIndex || "0", e.iamToken || null, e.authTokenFactory || null);
          case "provider":
            return e.client;
          default:
            throw new jt(Kt.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
        }
      }(e.credentials);
    }
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    this._settingsFrozen = true;
    return this._settings;
  }
  _delete() {
    if (this._terminateTask === "notTerminated") {
      this._terminateTask = this._terminate();
    }
    return this._terminateTask;
  }
  async _restart() {
    if (this._terminateTask === "notTerminated") {
      await this._terminate();
    } else {
      this._terminateTask = "notTerminated";
    }
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    (function (e) {
      const t = rB.get(e);
      if (t) {
        yt("ComponentProvider", "Removing Datastore");
        rB.delete(e);
        t.terminate();
      }
    })(this);
    return Promise.resolve();
  }
};
var xB = class e {
  constructor(e, t, n) {
    this.converter = t;
    this._query = n;
    this.type = "query";
    this.firestore = e;
  }
  withConverter(t) {
    return new e(this.firestore, t, this._query);
  }
};
var LB = class e {
  constructor(e, t, n) {
    this.converter = t;
    this._key = n;
    this.type = "document";
    this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new RB(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new e(this.firestore, t, this._key);
  }
  toJSON() {
    return {
      type: e._jsonSchemaVersion,
      referencePath: this._key.toString()
    };
  }
  static fromJSON(t, n, r) {
    if (Cn(n, e._jsonSchema)) {
      return new e(t, r || null, new nn(Yt.fromString(n.referencePath)));
    }
  }
};
LB._jsonSchemaVersion = "firestore/documentReference/1.0";
LB._jsonSchema = {
  type: hn("string", LB._jsonSchemaVersion),
  referencePath: hn("string")
};
var RB = class e extends xB {
  constructor(e, t, n) {
    super(e, t, Gi(n));
    this._path = n;
    this.type = "collection";
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    if (e.isEmpty()) {
      return null;
    } else {
      return new LB(this.firestore, null, new nn(e));
    }
  }
  withConverter(t) {
    return new e(this.firestore, t, this._path);
  }
};
function kB(e, t, ...n) {
  e = g(e);
  rn("collection", "path", t);
  if (e instanceof SB) {
    const r = Yt.fromString(t, ...n);
    on(r);
    return new RB(e, null, r);
  }
  {
    if (!(e instanceof LB) && !(e instanceof RB)) {
      throw new jt(Kt.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    }
    const r = e._path.child(Yt.fromString(t, ...n));
    on(r);
    return new RB(e.firestore, null, r);
  }
}
function GB(e, t, ...n) {
  e = g(e);
  if (arguments.length === 1) {
    t = Ot.newId();
  }
  rn("doc", "path", t);
  if (e instanceof SB) {
    const r = Yt.fromString(t, ...n);
    an(r);
    return new LB(e, null, new nn(r));
  }
  {
    if (!(e instanceof LB) && !(e instanceof RB)) {
      throw new jt(Kt.INVALID_ARGUMENT, "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    }
    const r = e._path.child(Yt.fromString(t, ...n));
    an(r);
    return new LB(e.firestore, e instanceof RB ? e.converter : null, new nn(r));
  }
}
function PB(e, t) {
  e = g(e);
  t = g(t);
  return (e instanceof LB || e instanceof RB) && (t instanceof LB || t instanceof RB) && e.firestore === t.firestore && e.path === t.path && e.converter === t.converter;
}
function MB(e, t) {
  e = g(e);
  t = g(t);
  return e instanceof xB && t instanceof xB && e.firestore === t.firestore && Ji(e._query, t._query) && e.converter === t.converter;
}
var VB = class {
  constructor(e, t) {
    this.pattern = e;
    this.options = t;
  }
  isEqual(e) {
    return this.pattern === e.pattern && this.options === e.options;
  }
};
var HB = class e {
  constructor(e) {
    this._values = (e || []).map(e => e);
  }
  toArray() {
    return this._values.map(e => e);
  }
  isEqual(e) {
    return function (e, t) {
      if (e.length !== t.length) {
        return false;
      }
      for (let n = 0; n < e.length; ++n) {
        if (e[n] !== t[n]) {
          return false;
        }
      }
      return true;
    }(this._values, e._values);
  }
  toJSON() {
    return {
      type: e._jsonSchemaVersion,
      vectorValues: this._values
    };
  }
  static fromJSON(t) {
    if (Cn(t, e._jsonSchema)) {
      if (Array.isArray(t.vectorValues) && t.vectorValues.every(e => typeof e == "number")) {
        return new e(t.vectorValues);
      }
      throw new jt(Kt.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array");
    }
  }
};
HB._jsonSchemaVersion = "firestore/vectorValue/1.0";
HB._jsonSchema = {
  type: hn("string", HB._jsonSchemaVersion),
  vectorValues: hn("object")
};
var UB = /^__.*__$/;
var qB = class {
  constructor(e, t, n) {
    this.data = e;
    this.fieldMask = t;
    this.fieldTransforms = n;
  }
  toMutation(e, t) {
    if (this.fieldMask !== null) {
      return new Ps(e, this.data, this.fieldMask, t, this.fieldTransforms);
    } else {
      return new Gs(e, this.data, t, this.fieldTransforms);
    }
  }
};
var JB = class {
  constructor(e, t, n) {
    this.data = e;
    this.fieldMask = t;
    this.fieldTransforms = n;
  }
  toMutation(e, t) {
    return new Ps(e, this.data, this.fieldMask, t, this.fieldTransforms);
  }
};
function KB(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw Tt(40011, {
        dataSource: e
      });
  }
}
var jB = class e {
  constructor(e, t, n, r, s, i) {
    this.settings = e;
    this.databaseId = t;
    this.serializer = n;
    this.ignoreUndefinedProperties = r;
    if (s === undefined) {
      this.validatePath();
    }
    this.fieldTransforms = s || [];
    this.fieldMask = i || [];
  }
  get path() {
    return this.settings.path;
  }
  get dataSource() {
    return this.settings.dataSource;
  }
  contextWith(t) {
    return new e({
      ...this.settings,
      ...t
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  childContextForField(e) {
    const t = this.path?.child(e);
    const n = this.contextWith({
      path: t,
      arrayElement: false
    });
    n.validatePathSegment(e);
    return n;
  }
  childContextForFieldPath(e) {
    const t = this.path?.child(e);
    const n = this.contextWith({
      path: t,
      arrayElement: false
    });
    n.validatePath();
    return n;
  }
  childContextForArray(e) {
    return this.contextWith({
      path: undefined,
      arrayElement: true
    });
  }
  createError(e) {
    return Cu(e, this.settings.methodName, this.settings.hasConverter || false, this.path, this.settings.targetDoc);
  }
  contains(e) {
    return this.fieldMask.find(t => e.isPrefixOf(t)) !== undefined || this.fieldTransforms.find(t => e.isPrefixOf(t.field)) !== undefined;
  }
  validatePath() {
    if (this.path) {
      for (let e = 0; e < this.path.length; e++) {
        this.validatePathSegment(this.path.get(e));
      }
    }
  }
  validatePathSegment(e) {
    if (e.length === 0) {
      throw this.createError("Document fields must not be empty");
    }
    if (KB(this.dataSource) && UB.test(e)) {
      throw this.createError("Document fields cannot begin and end with \"__\"");
    }
  }
};
var QB = class {
  constructor(e, t, n) {
    this.databaseId = e;
    this.ignoreUndefinedProperties = t;
    this.serializer = n || po(e);
  }
  createContext(e, t, n, r = false) {
    return new jB({
      dataSource: e,
      methodName: t,
      targetDoc: n,
      path: $t.emptyPath(),
      arrayElement: false,
      hasConverter: r
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
};
function zB(e) {
  const t = e._freezeSettings();
  const n = po(e._databaseId);
  return new QB(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function YB(e, t, n, r, s, i = {}) {
  const a = e.createContext(i.merge || i.mergeFields ? 2 : 0, t, n, s);
  uu("Data must be an object, but it was:", a, r);
  const o = au(r, a);
  let B;
  let u;
  if (i.merge) {
    B = new Xt(a.fieldMask);
    u = a.fieldTransforms;
  } else if (i.mergeFields) {
    const e = [];
    for (const r of i.mergeFields) {
      const s = cu(t, r, n);
      if (!a.contains(s)) {
        throw new jt(Kt.INVALID_ARGUMENT, `Field '${s}' is specified in your field mask but missing from your input data.`);
      }
      if (!du(e, s)) {
        e.push(s);
      }
    }
    B = new Xt(e);
    u = a.fieldTransforms.filter(e => B.covers(e.field));
  } else {
    B = null;
    u = a.fieldTransforms;
  }
  return new qB(new os(o), B, u);
}
var WB = class e extends yo {
  _toFieldTransform(e) {
    if (e.dataSource !== 2) {
      throw e.dataSource === 1 ? e.createError(`${this._methodName}() can only appear at the top level of your update data`) : e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    }
    e.fieldMask.push(e.path);
    return null;
  }
  isEqual(t) {
    return t instanceof e;
  }
};
function $B(e, t, n) {
  return new jB({
    dataSource: 3,
    targetDoc: t.settings.targetDoc,
    methodName: e._methodName,
    arrayElement: n
  }, t.databaseId, t.serializer, t.ignoreUndefinedProperties);
}
var XB = class e extends yo {
  _toFieldTransform(e) {
    return new bs(e.path, new ps());
  }
  isEqual(t) {
    return t instanceof e;
  }
};
var ZB = class e extends yo {
  constructor(e, t) {
    super(e);
    this.Ai = t;
  }
  _toFieldTransform(e) {
    const t = $B(this, e, true);
    const n = this.Ai.map(e => iu(e, t));
    const r = new gs(n);
    return new bs(e.path, r);
  }
  isEqual(t) {
    return t instanceof e && m(this.Ai, t.Ai);
  }
};
var eu = class e extends yo {
  constructor(e, t) {
    super(e);
    this.Ai = t;
  }
  _toFieldTransform(e) {
    const t = $B(this, e, true);
    const n = this.Ai.map(e => iu(e, t));
    const r = new Es(n);
    return new bs(e.path, r);
  }
  isEqual(t) {
    return t instanceof e && m(this.Ai, t.Ai);
  }
};
var tu = class e extends yo {
  constructor(e, t) {
    super(e);
    this.Vi = t;
  }
  _toFieldTransform(e) {
    const t = new ys(e.serializer, ls(e.serializer, this.Vi));
    return new bs(e.path, t);
  }
  isEqual(t) {
    return t instanceof e && (this.Vi === t.Vi || Number.isNaN(this.Vi) && Number.isNaN(t.Vi));
  }
};
function nu(e, t, n, r) {
  const s = e.createContext(1, t, n);
  uu("Data must be an object, but it was:", s, r);
  const i = [];
  const a = os.empty();
  en(r, (e, r) => {
    const o = hu(t, e, n);
    r = g(r);
    const B = s.childContextForFieldPath(o);
    if (r instanceof WB) {
      i.push(o);
    } else {
      const e = iu(r, B);
      if (e != null) {
        i.push(o);
        a.set(o, e);
      }
    }
  });
  const o = new Xt(i);
  return new JB(a, o, s.fieldTransforms);
}
function ru(e, t, n, r, s, i) {
  const a = e.createContext(1, t, n);
  const o = [cu(t, r, n)];
  const B = [s];
  if (i.length % 2 != 0) {
    throw new jt(Kt.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
  }
  for (let h = 0; h < i.length; h += 2) {
    o.push(cu(t, i[h]));
    B.push(i[h + 1]);
  }
  const u = [];
  const c = os.empty();
  for (let h = o.length - 1; h >= 0; --h) {
    if (!du(u, o[h])) {
      const e = o[h];
      let t = B[h];
      t = g(t);
      const n = a.childContextForFieldPath(e);
      if (t instanceof WB) {
        u.push(e);
      } else {
        const r = iu(t, n);
        if (r != null) {
          u.push(e);
          c.set(e, r);
        }
      }
    }
  }
  const l = new Xt(u);
  return new JB(c, l, a.fieldTransforms);
}
function su(e, t, n, r = false) {
  return iu(n, e.createContext(r ? 4 : 3, t));
}
function iu(e, t, n) {
  if (Bu(e = g(e))) {
    uu("Unsupported field value:", t, e);
    return au(e, t);
  }
  if (e instanceof yo) {
    (function (e, t) {
      if (!KB(t.dataSource)) {
        throw t.createError(`${e._methodName}() can only be used with update() and set()`);
      }
      if (!t.path) {
        throw t.createError(`${e._methodName}() is not currently supported inside arrays`);
      }
      const n = e._toFieldTransform(t);
      if (n) {
        t.fieldTransforms.push(n);
      }
    })(e, t);
    return null;
  }
  if (e === undefined && t.ignoreUndefinedProperties) {
    return null;
  }
  if (t.path) {
    t.fieldMask.push(t.path);
  }
  if (e instanceof Array) {
    if (t.settings.arrayElement && t.dataSource !== 4) {
      throw t.createError("Nested arrays are not supported");
    }
    return function (e, t) {
      const n = [];
      let r = 0;
      for (const s of e) {
        let e = iu(s, t.childContextForArray(r));
        e ??= {
          nullValue: "NULL_VALUE"
        };
        n.push(e);
        r++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(e, t);
  }
  return function (e, t) {
    if ((e = g(e)) === null) {
      return {
        nullValue: "NULL_VALUE"
      };
    }
    if (typeof e == "number") {
      return ls(t.serializer, e);
    }
    if (typeof e == "boolean") {
      return {
        booleanValue: e
      };
    }
    if (typeof e == "string") {
      return {
        stringValue: e
      };
    }
    if (e instanceof Date) {
      const n = pn.fromDate(e);
      return {
        timestampValue: Ra(t.serializer, n)
      };
    }
    if (e instanceof pn) {
      const n = new pn(e.seconds, Math.floor(e.nanoseconds / 1000) * 1000);
      return {
        timestampValue: Ra(t.serializer, n)
      };
    }
    if (ou(e)) {
      const n = pn.fromInstant(e);
      const r = new pn(n.seconds, Math.floor(n.nanoseconds / 1000) * 1000);
      return {
        timestampValue: Ra(t.serializer, r)
      };
    }
    if (e instanceof _o) {
      return {
        geoPointValue: {
          latitude: e.latitude,
          longitude: e.longitude
        }
      };
    }
    if (e instanceof Eo) {
      if (e.subtype === 0) {
        return {
          bytesValue: Ga(t.serializer, e._byteString)
        };
      } else {
        return function (e, t) {
          const n = t.toUint8Array();
          const r = new Uint8Array(n.length + 1);
          r[0] = t.subtype;
          r.set(n, 1);
          return {
            mapValue: {
              fields: {
                [ur]: {
                  bytesValue: Ga(e, mn.fromUint8Array(r))
                }
              }
            }
          };
        }(t.serializer, e);
      }
    }
    if (e instanceof LB) {
      const n = t.databaseId;
      const r = e.firestore._databaseId;
      if (!r.isEqual(n)) {
        throw t.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
      }
      return {
        referenceValue: Va(e.firestore._databaseId || t.databaseId, e._key.path)
      };
    }
    if (e instanceof HB) {
      return function (e, t) {
        const n = e instanceof HB ? e.toArray() : e;
        return {
          mapValue: {
            fields: {
              [zn]: {
                stringValue: Yn
              },
              [Wn]: {
                arrayValue: {
                  values: n.map(e => {
                    if (typeof e != "number") {
                      throw t.createError("VectorValues must only contain numeric values.");
                    }
                    return us(t.serializer, e);
                  })
                }
              }
            }
          }
        };
      }(e, t);
    }
    if (e instanceof VB) {
      return function (e) {
        return {
          mapValue: {
            fields: {
              [er]: {
                mapValue: {
                  fields: {
                    [tr]: {
                      stringValue: e.pattern
                    },
                    [nr]: {
                      stringValue: e.options
                    }
                  }
                }
              }
            }
          }
        };
      }(e);
    }
    if (e instanceof go) {
      return function (e) {
        return {
          mapValue: {
            fields: {
              [rr]: {
                stringValue: e.value
              }
            }
          }
        };
      }(e);
    }
    if (e instanceof Io) {
      return function (e) {
        return {
          mapValue: {
            fields: {
              [sr]: cs(e.value)
            }
          }
        };
      }(e);
    }
    if (e instanceof Do) {
      return function (e) {
        return {
          mapValue: {
            fields: {
              [ir]: {
                stringValue: e.stringValue
              }
            }
          }
        };
      }(e);
    }
    if (e instanceof mo) {
      return function (e) {
        return {
          mapValue: {
            fields: {
              [ar]: {
                mapValue: {
                  fields: {
                    [or]: cs(e.seconds),
                    [Br]: cs(e.increment)
                  }
                }
              }
            }
          }
        };
      }(e);
    }
    if (e instanceof To) {
      return {
        mapValue: {
          fields: {
            [Xn]: {
              nullValue: "NULL_VALUE"
            }
          }
        }
      };
    }
    if (e instanceof vo) {
      return {
        mapValue: {
          fields: {
            [Zn]: {
              nullValue: "NULL_VALUE"
            }
          }
        }
      };
    }
    if (ho(e)) {
      return e._toProto(t.serializer);
    }
    throw t.createError(`Unsupported field value: ${un(e)}`);
  }(e, t);
}
function au(e, t) {
  const n = {};
  if (tn(e)) {
    if (t.path && t.path.length > 0) {
      t.fieldMask.push(t.path);
    }
  } else {
    en(e, (e, r) => {
      const s = iu(r, t.childContextForField(e));
      if (s != null) {
        n[e] = s;
      }
    });
  }
  return {
    mapValue: {
      fields: n
    }
  };
}
function ou(e) {
  if (typeof e != "object" || e === null) {
    return false;
  }
  if (typeof Temporal != "undefined" && typeof Temporal.Instant == "function" && e instanceof Temporal.Instant) {
    return true;
  }
  const t = e;
  return t[Symbol.toStringTag] === "Temporal.Instant" && typeof t.t == "bigint";
}
function Bu(e) {
  return typeof e == "object" && e !== null && !(e instanceof Array) && !(e instanceof Date) && !(e instanceof pn) && !(e instanceof _o) && !(e instanceof Eo) && !(e instanceof LB) && !(e instanceof yo) && !(e instanceof HB) && !(e instanceof To) && !(e instanceof vo) && !(e instanceof Io) && !(e instanceof Do) && !(e instanceof VB) && !(e instanceof go) && !(e instanceof mo) && !ou(e) && !ho(e);
}
function uu(e, t, n) {
  if (!Bu(n) || !Bn(n)) {
    const r = un(n);
    throw r === "an object" ? t.createError(e + " a custom object") : t.createError(e + " " + r);
  }
}
function cu(e, t, n) {
  if ((t = g(t)) instanceof wo) {
    return t._internalPath;
  }
  if (typeof t == "string") {
    return hu(e, t);
  }
  throw Cu("Field path arguments must be of type string or ", e, false, undefined, n);
}
var lu = new RegExp("[~\\*/\\[\\]]");
function hu(e, t, n) {
  if (t.search(lu) >= 0) {
    throw Cu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, e, false, undefined, n);
  }
  try {
    return new wo(...t.split("."))._internalPath;
  } catch (r) {
    throw Cu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, e, false, undefined, n);
  }
}
function Cu(e, t, n, r, s) {
  const i = r && !r.isEmpty();
  const a = s !== undefined;
  let o = `Function ${t}() called with invalid data`;
  if (n) {
    o += " (via `toFirestore()`)";
  }
  o += ". ";
  let B = "";
  if (i || a) {
    B += " (found";
    if (i) {
      B += ` in field ${r}`;
    }
    if (a) {
      B += ` in document ${s}`;
    }
    B += ")";
  }
  return new jt(Kt.INVALID_ARGUMENT, o + e + B);
}
function du(e, t) {
  return e.some(e => e.isEqual(t));
}
function fu(e) {
  return typeof e._readUserData == "function";
}
var pu = class e {
  constructor(e) {
    this.optionDefinitions = e;
  }
  _getKnownOptions(t, n) {
    const r = os.empty();
    for (const s in this.optionDefinitions) {
      if (this.optionDefinitions.hasOwnProperty(s)) {
        const i = this.optionDefinitions[s];
        if (s in t) {
          const a = t[s];
          let o;
          if (i.nestedOptions && Bn(a)) {
            o = {
              mapValue: {
                fields: new e(i.nestedOptions).getOptionsProto(n, a)
              }
            };
          } else if (a) {
            o = iu(a, n) ?? undefined;
          }
          if (o) {
            r.set($t.fromServerFormat(i.serverName), o);
          }
        }
      }
    }
    return r;
  }
  getOptionsProto(e, t, n) {
    const r = this._getKnownOptions(t, e);
    if (n) {
      const t = new Map(function (e, t) {
        const n = [];
        for (const r in e) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            n.push(t(e[r], r, e));
          }
        }
        return n;
      }(n, (t, n) => [$t.fromServerFormat(n), t !== undefined ? iu(t, e) : null]));
      r.setAll(t);
    }
    return r.value.mapValue.fields ?? {};
  }
};
function gu(e) {
  let t;
  if (e instanceof Du) {
    return e;
  } else {
    t = Bn(e) ? function (e) {
      const t = [];
      for (const n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          const r = e[n];
          t.push(Nu(n));
          t.push(gu(r));
        }
      }
      return new Fu("map", t, "map");
    }(e) : e instanceof Array ? function (e) {
      return function (e, t) {
        return new Fu("array", e.map(e => gu(e)), t);
      }(e, "array");
    }(e) : Au(e, undefined);
    return t;
  }
}
function mu(e) {
  if (e instanceof Du) {
    return e;
  }
  if (e instanceof HB) {
    return Nu(e);
  }
  if (Array.isArray(e)) {
    return Nu(function (e) {
      return new HB(e);
    }(e));
  }
  throw new Error("Unsupported value: " + typeof e);
}
function Eu(e) {
  if (Kn(e)) {
    return Tu(e);
  } else {
    return gu(e);
  }
}
var Du = class {
  constructor() {
    this._protoValueType = "ProtoValue";
  }
  add(e) {
    return new Fu("add", [this, gu(e)], "add");
  }
  asBoolean() {
    if (this instanceof Ou) {
      return this;
    }
    if (this instanceof bu) {
      return new xu(this);
    }
    if (this instanceof vu) {
      return new Lu(this);
    }
    if (this instanceof Fu) {
      return new Su(this);
    }
    throw new jt("invalid-argument", `Conversion of type ${typeof this} to BooleanExpression not supported.`);
  }
  subtract(e) {
    return new Fu("subtract", [this, gu(e)], "subtract");
  }
  multiply(e) {
    return new Fu("multiply", [this, gu(e)], "multiply");
  }
  divide(e) {
    return new Fu("divide", [this, gu(e)], "divide");
  }
  mod(e) {
    return new Fu("mod", [this, gu(e)], "mod");
  }
  equal(e) {
    return new Fu("equal", [this, gu(e)], "equal").asBoolean();
  }
  notEqual(e) {
    return new Fu("not_equal", [this, gu(e)], "notEqual").asBoolean();
  }
  lessThan(e) {
    return new Fu("less_than", [this, gu(e)], "lessThan").asBoolean();
  }
  lessThanOrEqual(e) {
    return new Fu("less_than_or_equal", [this, gu(e)], "lessThanOrEqual").asBoolean();
  }
  greaterThan(e) {
    return new Fu("greater_than", [this, gu(e)], "greaterThan").asBoolean();
  }
  greaterThanOrEqual(e) {
    return new Fu("greater_than_or_equal", [this, gu(e)], "greaterThanOrEqual").asBoolean();
  }
  arrayConcat(e, ...t) {
    const n = [e, ...t].map(e => gu(e));
    return new Fu("array_concat", [this, ...n], "arrayConcat");
  }
  arrayContains(e) {
    return new Fu("array_contains", [this, gu(e)], "arrayContains").asBoolean();
  }
  arrayContainsAll(e) {
    const t = Array.isArray(e) ? new Iu(e.map(gu), "arrayContainsAll") : e;
    return new Fu("array_contains_all", [this, t], "arrayContainsAll").asBoolean();
  }
  arrayContainsAny(e) {
    const t = Array.isArray(e) ? new Iu(e.map(gu), "arrayContainsAny") : e;
    return new Fu("array_contains_any", [this, t], "arrayContainsAny").asBoolean();
  }
  arrayReverse() {
    return new Fu("array_reverse", [this]);
  }
  arrayLength() {
    return new Fu("array_length", [this], "arrayLength");
  }
  equalAny(e) {
    const t = Array.isArray(e) ? new Iu(e.map(gu), "equalAny") : e;
    return new Fu("equal_any", [this, t], "equalAny").asBoolean();
  }
  notEqualAny(e) {
    const t = Array.isArray(e) ? new Iu(e.map(gu), "notEqualAny") : e;
    return new Fu("not_equal_any", [this, t], "notEqualAny").asBoolean();
  }
  exists() {
    return new Fu("exists", [this], "exists").asBoolean();
  }
  charLength() {
    return new Fu("char_length", [this], "charLength");
  }
  like(e) {
    return new Fu("like", [this, gu(e)], "like").asBoolean();
  }
  regexContains(e) {
    return new Fu("regex_contains", [this, gu(e)], "regexContains").asBoolean();
  }
  regexFind(e) {
    return new Fu("regex_find", [this, gu(e)], "regexFind");
  }
  regexFindAll(e) {
    return new Fu("regex_find_all", [this, gu(e)], "regexFindAll");
  }
  regexMatch(e) {
    return new Fu("regex_match", [this, gu(e)], "regexMatch").asBoolean();
  }
  stringContains(e) {
    return new Fu("string_contains", [this, gu(e)], "stringContains").asBoolean();
  }
  startsWith(e) {
    return new Fu("starts_with", [this, gu(e)], "startsWith").asBoolean();
  }
  endsWith(e) {
    return new Fu("ends_with", [this, gu(e)], "endsWith").asBoolean();
  }
  toLower() {
    return new Fu("to_lower", [this], "toLower");
  }
  toUpper() {
    return new Fu("to_upper", [this], "toUpper");
  }
  trim(e) {
    const t = [this];
    if (e) {
      t.push(gu(e));
    }
    return new Fu("trim", t, "trim");
  }
  ltrim(e) {
    const t = [this];
    if (e) {
      t.push(gu(e));
    }
    return new Fu("ltrim", t, "ltrim");
  }
  rtrim(e) {
    const t = [this];
    if (e) {
      t.push(gu(e));
    }
    return new Fu("rtrim", t, "rtrim");
  }
  type() {
    return new Fu("type", [this]);
  }
  isType(e) {
    return new Fu("is_type", [this, Nu(e)], "isType").asBoolean();
  }
  stringConcat(e, ...t) {
    const n = [e, ...t].map(gu);
    return new Fu("string_concat", [this, ...n], "stringConcat");
  }
  stringIndexOf(e) {
    return new Fu("string_index_of", [this, gu(e)], "stringIndexOf");
  }
  stringRepeat(e) {
    return new Fu("string_repeat", [this, gu(e)], "stringRepeat");
  }
  stringReplaceAll(e, t) {
    return new Fu("string_replace_all", [this, gu(e), gu(t)], "stringReplaceAll");
  }
  stringReplaceOne(e, t) {
    return new Fu("string_replace_one", [this, gu(e), gu(t)], "stringReplaceOne");
  }
  concat(e, ...t) {
    const n = [e, ...t].map(gu);
    return new Fu("concat", [this, ...n], "concat");
  }
  reverse() {
    return new Fu("reverse", [this], "reverse");
  }
  arrayFilter(e, t) {
    return new Fu("array_filter", [this, gu(e), t], "arrayFilter");
  }
  arrayTransform(e, t) {
    return new Fu("array_transform", [this, gu(e), t], "arrayTransform");
  }
  arrayTransformWithIndex(e, t, n) {
    return new Fu("array_transform", [this, gu(e), gu(t), n], "arrayTransformWithIndex");
  }
  arraySlice(e, t) {
    const n = [this, gu(e)];
    if (t !== undefined) {
      n.push(gu(t));
    }
    return new Fu("array_slice", n, "arraySlice");
  }
  arrayFirst() {
    return new Fu("array_first", [this], "arrayFirst");
  }
  arrayFirstN(e) {
    return new Fu("array_first_n", [this, gu(e)], "arrayFirstN");
  }
  arrayLast() {
    return new Fu("array_last", [this], "arrayLast");
  }
  arrayLastN(e) {
    return new Fu("array_last_n", [this, gu(e)], "arrayLastN");
  }
  arrayMaximum() {
    return new Fu("maximum", [this], "arrayMaximum");
  }
  arrayMaximumN(e) {
    return new Fu("maximum_n", [this, gu(e)], "arrayMaximumN");
  }
  arrayMinimum() {
    return new Fu("minimum", [this], "arrayMinimum");
  }
  arrayMinimumN(e) {
    return new Fu("minimum_n", [this, gu(e)], "arrayMinimumN");
  }
  arrayIndexOf(e) {
    return new Fu("array_index_of", [this, gu(e), gu("first")], "arrayIndexOf");
  }
  arrayLastIndexOf(e) {
    return new Fu("array_index_of", [this, gu(e), gu("last")], "arrayLastIndexOf");
  }
  arrayIndexOfAll(e) {
    return new Fu("array_index_of_all", [this, gu(e)], "arrayIndexOfAll");
  }
  byteLength() {
    return new Fu("byte_length", [this], "byteLength");
  }
  ceil() {
    return new Fu("ceil", [this]);
  }
  floor() {
    return new Fu("floor", [this]);
  }
  abs() {
    return new Fu("abs", [this]);
  }
  exp() {
    return new Fu("exp", [this]);
  }
  mapGet(e) {
    return new Fu("map_get", [this, Nu(e)], "mapGet");
  }
  mapSet(e, t, ...n) {
    const r = [this, gu(e), gu(t), ...n.map(gu)];
    return new Fu("map_set", r, "mapSet");
  }
  mapKeys() {
    return new Fu("map_keys", [this], "mapKeys");
  }
  mapValues() {
    return new Fu("map_values", [this], "mapValues");
  }
  mapEntries() {
    return new Fu("map_entries", [this], "mapEntries");
  }
  getField(e) {
    return new Fu("get_field", [this, gu(e)], "get_field");
  }
  count() {
    return wu._create("count", [this], "count");
  }
  sum() {
    return wu._create("sum", [this], "sum");
  }
  average() {
    return wu._create("average", [this], "average");
  }
  minimum() {
    return wu._create("minimum", [this], "minimum");
  }
  maximum() {
    return wu._create("maximum", [this], "maximum");
  }
  first() {
    return wu._create("first", [this], "first");
  }
  last() {
    return wu._create("last", [this], "last");
  }
  arrayAgg() {
    return wu._create("array_agg", [this], "arrayAgg");
  }
  arrayAggDistinct() {
    return wu._create("array_agg_distinct", [this], "arrayAggDistinct");
  }
  countDistinct() {
    return wu._create("count_distinct", [this], "countDistinct");
  }
  logicalMaximum(e, ...t) {
    const n = [e, ...t];
    return new Fu("maximum", [this, ...n.map(gu)], "logicalMaximum");
  }
  logicalMinimum(e, ...t) {
    const n = [e, ...t];
    return new Fu("minimum", [this, ...n.map(gu)], "minimum");
  }
  vectorLength() {
    return new Fu("vector_length", [this], "vectorLength");
  }
  cosineDistance(e) {
    return new Fu("cosine_distance", [this, mu(e)], "cosineDistance");
  }
  dotProduct(e) {
    return new Fu("dot_product", [this, mu(e)], "dotProduct");
  }
  euclideanDistance(e) {
    return new Fu("euclidean_distance", [this, mu(e)], "euclideanDistance");
  }
  unixMicrosToTimestamp() {
    return new Fu("unix_micros_to_timestamp", [this], "unixMicrosToTimestamp");
  }
  timestampToUnixMicros() {
    return new Fu("timestamp_to_unix_micros", [this], "timestampToUnixMicros");
  }
  unixMillisToTimestamp() {
    return new Fu("unix_millis_to_timestamp", [this], "unixMillisToTimestamp");
  }
  timestampToUnixMillis() {
    return new Fu("timestamp_to_unix_millis", [this], "timestampToUnixMillis");
  }
  unixSecondsToTimestamp() {
    return new Fu("unix_seconds_to_timestamp", [this], "unixSecondsToTimestamp");
  }
  timestampToUnixSeconds() {
    return new Fu("timestamp_to_unix_seconds", [this], "timestampToUnixSeconds");
  }
  timestampAdd(e, t) {
    return new Fu("timestamp_add", [this, gu(e), gu(t)], "timestampAdd");
  }
  timestampSubtract(e, t) {
    return new Fu("timestamp_subtract", [this, gu(e), gu(t)], "timestampSubtract");
  }
  timestampDiff(e, t) {
    return new Fu("timestamp_diff", [this, Eu(e), gu(t)], "timestampDiff");
  }
  timestampExtract(e, t) {
    const n = [this, gu(e)];
    if (t) {
      n.push(gu(t));
    }
    return new Fu("timestamp_extract", n, "timestampExtract");
  }
  documentId() {
    return new Fu("document_id", [this], "documentId");
  }
  parent() {
    return new Fu("parent", [this], "parent");
  }
  substring(e, t) {
    const n = gu(e);
    return new Fu("substring", t === undefined ? [this, n] : [this, n, gu(t)], "substring");
  }
  arrayGet(e) {
    return new Fu("array_get", [this, gu(e)], "arrayGet");
  }
  isError() {
    return new Fu("is_error", [this], "isError").asBoolean();
  }
  ifError(e) {
    const t = new Fu("if_error", [this, gu(e)], "ifError");
    if (e instanceof Ou) {
      return t.asBoolean();
    } else {
      return t;
    }
  }
  isAbsent() {
    return new Fu("is_absent", [this], "isAbsent").asBoolean();
  }
  mapRemove(e) {
    return new Fu("map_remove", [this, gu(e)], "mapRemove");
  }
  mapMerge(e, ...t) {
    const n = gu(e);
    const r = t.map(gu);
    return new Fu("map_merge", [this, n, ...r], "mapMerge");
  }
  pow(e) {
    return new Fu("pow", [this, gu(e)]);
  }
  trunc(e) {
    if (e === undefined) {
      return new Fu("trunc", [this]);
    } else {
      return new Fu("trunc", [this, gu(e)], "trunc");
    }
  }
  round(e) {
    if (e === undefined) {
      return new Fu("round", [this]);
    } else {
      return new Fu("round", [this, gu(e)], "round");
    }
  }
  collectionId() {
    return new Fu("collection_id", [this]);
  }
  length() {
    return new Fu("length", [this]);
  }
  ln() {
    return new Fu("ln", [this]);
  }
  sqrt() {
    return new Fu("sqrt", [this]);
  }
  stringReverse() {
    return new Fu("string_reverse", [this]);
  }
  ifAbsent(e) {
    return new Fu("if_absent", [this, gu(e)], "ifAbsent");
  }
  ifNull(e) {
    return new Fu("if_null", [this, gu(e)], "ifNull");
  }
  coalesce(e, ...t) {
    return new Fu("coalesce", [this, gu(e), ...t.map(gu)], "coalesce");
  }
  join(e) {
    return new Fu("join", [this, gu(e)], "join");
  }
  log10() {
    return new Fu("log10", [this]);
  }
  arraySum() {
    return new Fu("sum", [this]);
  }
  split(e) {
    return new Fu("split", [this, gu(e)]);
  }
  timestampTruncate(e, t) {
    const n = [this, gu(e)];
    if (t) {
      n.push(gu(t));
    }
    return new Fu("timestamp_trunc", n);
  }
  ascending() {
    return function (e) {
      return new Ru(Eu(e), "ascending", "ascending");
    }(this);
  }
  descending() {
    return function (e) {
      return new Ru(Eu(e), "descending", "descending");
    }(this);
  }
  as(e) {
    return new _u(this, e, "as");
  }
};
var wu = class e {
  constructor(e, t) {
    this.name = e;
    this.params = t;
    this.exprType = "AggregateFunction";
    this._protoValueType = "ProtoValue";
  }
  static _create(t, n, r) {
    const s = new e(t, n);
    s._methodName = r;
    return s;
  }
  as(e) {
    return new yu(this, e, "as");
  }
  over(e) {
    return new Pu(this.name, this.params, new Gu(e), "over");
  }
  _toProto(e) {
    return {
      functionValue: {
        name: this.name,
        args: this.params.map(t => t._toProto(e))
      }
    };
  }
  _readUserData(e) {
    e = this._methodName ? e.contextWith({
      methodName: this._methodName
    }) : e;
    this.params.forEach(t => t._readUserData(e));
  }
};
var yu = class {
  constructor(e, t, n) {
    this.aggregate = e;
    this.alias = t;
    this._methodName = n;
  }
  _readUserData(e) {
    this.aggregate._readUserData(e);
  }
};
var _u = class {
  constructor(e, t, n) {
    this.expr = e;
    this.alias = t;
    this._methodName = n;
    this.exprType = "AliasedExpression";
    this.selectable = true;
  }
  _readUserData(e) {
    this.expr._readUserData(e);
  }
};
var Iu = class extends Du {
  constructor(e, t) {
    super();
    this.di = e;
    this._methodName = t;
    this.expressionType = "ListOfExpressions";
  }
  _toProto(e) {
    return {
      arrayValue: {
        values: this.di.map(t => t._toProto(e))
      }
    };
  }
  _readUserData(e) {
    this.di.forEach(t => t._readUserData(e));
  }
};
var vu = class extends Du {
  constructor(e, t) {
    super();
    this.fieldPath = e;
    this._methodName = t;
    this.expressionType = "Field";
    this.selectable = true;
  }
  get _fieldPath() {
    return this.fieldPath;
  }
  get fieldName() {
    return this.fieldPath.canonicalString();
  }
  get alias() {
    return this.fieldName;
  }
  get expr() {
    return this;
  }
  geoDistance(e) {
    return new Fu("geo_distance", [this, gu(e)], "geoDistance");
  }
  _toProto(e) {
    return {
      fieldReferenceValue: this.fieldPath.canonicalString()
    };
  }
  _readUserData(e) {}
};
function Tu(e) {
  return function (e, t) {
    return new vu(typeof e == "string" ? Qt === e ? new wo(Qt)._internalPath : cu("field", e) : e._internalPath, t);
  }(e, "field");
}
var bu = class e extends Du {
  constructor(e, t) {
    super();
    this.value = e;
    this._methodName = t;
    this.expressionType = "Constant";
  }
  static _fromProto(t) {
    const n = new e(t, undefined);
    n._protoValue = t;
    return n;
  }
  _toProto(e) {
    Nt(this._protoValue !== undefined, 237);
    return this._protoValue;
  }
  _getValue() {
    return this._protoValue;
  }
  _readUserData(e) {
    e = this._methodName ? e.contextWith({
      methodName: this._methodName
    }) : e;
    if (!function (e) {
      return typeof e == "object" && e !== null && (!!("nullValue" in e) && (e.nullValue === null || e.nullValue === "NULL_VALUE") || !!("booleanValue" in e) && (e.booleanValue === null || typeof e.booleanValue == "boolean") || !!("integerValue" in e) && (e.integerValue === null || typeof e.integerValue == "number" || typeof e.integerValue == "string") || !!("doubleValue" in e) && (e.doubleValue === null || typeof e.doubleValue == "number") || !!("timestampValue" in e) && (e.timestampValue === null || !!function (e) {
        return typeof e == "object" && e !== null && "seconds" in e && (e.seconds === null || typeof e.seconds == "number" || typeof e.seconds == "string") && "nanos" in e && (e.nanos === null || typeof e.nanos == "number");
      }(e.timestampValue)) || !!("stringValue" in e) && (e.stringValue === null || typeof e.stringValue == "string") || !!("bytesValue" in e) && (e.bytesValue === null || !!(e.bytesValue instanceof Uint8Array)) || !!("referenceValue" in e) && (e.referenceValue === null || typeof e.referenceValue == "string") || !!("geoPointValue" in e) && (e.geoPointValue === null || !!function (e) {
        return typeof e == "object" && e !== null && "latitude" in e && (e.latitude === null || typeof e.latitude == "number") && "longitude" in e && (e.longitude === null || typeof e.longitude == "number");
      }(e.geoPointValue)) || !!("arrayValue" in e) && (e.arrayValue === null || !!function (e) {
        return typeof e == "object" && e !== null && !!("values" in e) && (e.values === null || !!Array.isArray(e.values));
      }(e.arrayValue)) || !!("mapValue" in e) && (e.mapValue === null || !!function (e) {
        return typeof e == "object" && e !== null && !!("fields" in e) && (e.fields === null || !!Bn(e.fields));
      }(e.mapValue)) || !!("fieldReferenceValue" in e) && (e.fieldReferenceValue === null || typeof e.fieldReferenceValue == "string") || !!("functionValue" in e) && (e.functionValue === null || !!function (e) {
        return typeof e == "object" && e !== null && !!("name" in e) && (e.name === null || typeof e.name == "string") && !!("args" in e) && (e.args === null || !!Array.isArray(e.args));
      }(e.functionValue)) || !!("pipelineValue" in e) && (e.pipelineValue === null || !!function (e) {
        return typeof e == "object" && e !== null && !!("stages" in e) && (e.stages === null || !!Array.isArray(e.stages));
      }(e.pipelineValue)));
    }(this._protoValue)) {
      this._protoValue = iu(this.value, e);
    }
  }
};
function Nu(e, t) {
  return Au(e, "constant");
}
function Au(e, t) {
  const n = new bu(e, t);
  if (typeof e == "boolean") {
    return new xu(n);
  } else {
    return n;
  }
}
var Fu = class extends Du {
  constructor(e, t, n, r) {
    super();
    this.name = e;
    this.params = t;
    this.expressionType = "Function";
    this._optionsProto = undefined;
    if (n !== undefined) {
      this._methodName = n;
    }
    if (r !== undefined) {
      this._options = r;
    }
  }
  get _optionsUtil() {
    return new pu({});
  }
  _toProto(e) {
    const t = {
      functionValue: {
        name: this.name,
        args: this.params.map(t => t._toProto(e))
      }
    };
    if (this._optionsProto) {
      t.functionValue.options = this._optionsProto;
    }
    return t;
  }
  _readUserData(e) {
    e = this._methodName ? e.contextWith({
      methodName: this._methodName
    }) : e;
    this.params.forEach(t => t._readUserData(e));
    if (this._options) {
      this._optionsProto = this._optionsUtil.getOptionsProto(e, this._options);
    }
  }
};
var Ou = class e extends Du {
  get _methodName() {
    return this._expr._methodName;
  }
  countIf() {
    return wu._create("count_if", [this], "countIf");
  }
  not() {
    return new Fu("not", [this], "not").asBoolean();
  }
  conditional(e, t) {
    return new Fu("conditional", [this, e, t], "conditional");
  }
  ifError(t) {
    const n = gu(t);
    const r = new Fu("if_error", [this, n], "ifError");
    if (n instanceof e) {
      return r.asBoolean();
    } else {
      return r;
    }
  }
  _toProto(e) {
    return this._expr._toProto(e);
  }
  _readUserData(e) {
    this._expr._readUserData(e);
  }
};
var Su = class extends Ou {
  constructor(e) {
    super();
    this._expr = e;
    this.expressionType = "Function";
  }
};
var xu = class extends Ou {
  constructor(e) {
    super();
    this._expr = e;
    this.expressionType = "Constant";
  }
  _getValue() {
    return this._expr._getValue();
  }
};
var Lu = class extends Ou {
  constructor(e) {
    super();
    this._expr = e;
    this.expressionType = "Field";
  }
};
var Ru = class {
  constructor(e, t, n) {
    this.expr = e;
    this.direction = t;
    this._methodName = n;
    this._protoValueType = "ProtoValue";
  }
  _toProto(e) {
    return {
      mapValue: {
        fields: {
          direction: fo(this.direction),
          expression: this.expr._toProto(e)
        }
      }
    };
  }
  _readUserData(e) {
    this.expr._readUserData(e);
  }
};
function ku(e) {
  return e instanceof Du;
}
var Gu = class {
  constructor(e) {
    this._protoValueType = "ProtoValue";
    const t = e.sort;
    this.partition = (e.partition ?? []).map(Eu);
    this.sort = t === undefined ? [] : Array.isArray(t) ? t : [t];
    this.documents = e.documents;
    this.range = e.range;
  }
  _toProto(e) {
    const t = {};
    if (this.partition.length > 0) {
      t.partition = {
        arrayValue: {
          values: this.partition.map(t => t._toProto(e))
        }
      };
    }
    if (this.sort.length > 0) {
      t.sort = {
        arrayValue: {
          values: this.sort.map(t => t._toProto(e))
        }
      };
    }
    if (this.documents !== undefined) {
      t.documents = this.frameToProto(e, this.documents);
    }
    if (this.range !== undefined) {
      t.range = this.frameToProto(e, this.range);
    }
    return {
      mapValue: {
        fields: t
      }
    };
  }
  _readUserData(e) {
    this.partition.forEach(t => t._readUserData(e));
    this.sort.forEach(t => t._readUserData(e));
    for (const t of [this.documents, this.range]) {
      if (t === undefined) {
        continue;
      }
      if (ku(t.preceding)) {
        t.preceding._readUserData(e);
      }
      if (ku(t.following)) {
        t.following._readUserData(e);
      }
      const n = t.unit;
      if (n !== undefined && ku(n)) {
        n._readUserData(e);
      }
    }
  }
  frameToProto(e, t) {
    const n = {};
    if (t.preceding !== undefined) {
      n.preceding = this.frameBoundToProto(e, t.preceding, "preceding");
    }
    if (t.following !== undefined) {
      n.following = this.frameBoundToProto(e, t.following, "following");
    }
    const r = t.unit;
    if (r !== undefined) {
      n.unit = Kn(r) ? fo(r) : r._toProto(e);
    }
    return {
      mapValue: {
        fields: n
      }
    };
  }
  frameBoundToProto(e, t, n) {
    if (typeof t == "number") {
      return ls(e, t);
    }
    if (Kn(t)) {
      return fo(t);
    }
    if (ku(t)) {
      return t._toProto(e);
    }
    throw new jt("invalid-argument", `Invalid window frame bound: '${n}'. Expected a number, 'current', 'unbounded', or an Expression.`);
  }
};
var Pu = class e {
  constructor(e, t = [], n, r) {
    this.name = e;
    this.params = t;
    this.window = n;
    this._methodName = r;
    this.exprType = "WindowFunction";
    this._protoValueType = "ProtoValue";
  }
  over(t) {
    return new e(this.name, this.params, new Gu(t), this._methodName ?? "over");
  }
  as(e) {
    return new Mu(this, e, "as");
  }
  _toProto(e) {
    const t = {
      functionValue: {
        name: this.name,
        args: this.params.map(t => t._toProto(e))
      }
    };
    if (this.window === undefined) {
      return t;
    } else {
      return {
        functionValue: {
          name: "over",
          args: [t, this.window._toProto(e)]
        }
      };
    }
  }
  _readUserData(e) {
    e = this._methodName ? e.contextWith({
      methodName: this._methodName
    }) : e;
    this.params.forEach(t => t._readUserData(e));
    this.window?._readUserData(e);
  }
};
var Mu = class {
  constructor(e, t, n) {
    this.windowFunction = e;
    this.alias = t;
    this._methodName = n;
  }
  _readUserData(e) {
    this.windowFunction._readUserData(e);
  }
};
var Vu = class {
  constructor(e) {
    this.optionsProto = undefined;
    ({
      rawOptions: this.rawOptions,
      ...this.knownOptions
    } = e);
  }
  _readUserData(e) {
    this.optionsProto = this._optionsUtil.getOptionsProto(e, this.knownOptions, this.rawOptions);
  }
  _toProto(e) {
    return {
      name: this._name,
      options: this.optionsProto
    };
  }
};
var Hu = class extends Vu {
  get _name() {
    return "add_fields";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.fields = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [Co(e, this.fields)]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.fields, e);
  }
};
var Uu = class extends Vu {
  get _name() {
    return "aggregate";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t, n) {
    super(n);
    this.groups = e;
    this.accumulators = t;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [Co(e, this.accumulators), Co(e, this.groups)]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.groups, e);
    Zu(this.accumulators, e);
  }
};
var qu = class extends Vu {
  get _name() {
    return "distinct";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.groups = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [Co(e, this.groups)]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.groups, e);
  }
};
var Ju = class extends Vu {
  get _name() {
    return "collection";
  }
  get _optionsUtil() {
    return new pu({
      forceIndex: {
        serverName: "force_index"
      }
    });
  }
  constructor(e, t) {
    super(t);
    this.pi = function (e) {
      const t = typeof e == "string" ? e : e.path;
      if (t.startsWith("/")) {
        return t;
      } else {
        return "/" + t;
      }
    }(e);
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [{
        referenceValue: this.pi
      }]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
  }
};
var Ku = class extends Vu {
  get _name() {
    return "collection_group";
  }
  get _optionsUtil() {
    return new pu({
      forceIndex: {
        serverName: "force_index"
      }
    });
  }
  constructor(e, t) {
    super(t);
    this.collectionId = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [{
        referenceValue: ""
      }, {
        stringValue: this.collectionId
      }]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
  }
};
var ju = class extends Vu {
  get _name() {
    return "database";
  }
  get _optionsUtil() {
    return new pu({});
  }
  _toProto(e) {
    return {
      ...super._toProto(e)
    };
  }
  _readUserData(e) {
    super._readUserData(e);
  }
};
var Qu = class extends Vu {
  get _name() {
    return "documents";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    if (!e || e.length === 0) {
      throw new jt(Kt.INVALID_ARGUMENT, "Empty document paths are not allowed in DocumentsSource");
    }
    const n = e.map(e => e.startsWith("/") ? e : "/" + e);
    const r = new Set(n);
    if (r.size !== n.length) {
      throw new jt(Kt.INVALID_ARGUMENT, "Duplicate document paths are not allowed in DocumentsSource");
    }
    this.gi = n;
    this.yi = r;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: this.gi.map(e => ({
        referenceValue: e
      }))
    };
  }
  _readUserData(e) {
    super._readUserData(e);
  }
};
var zu = class extends Vu {
  get _name() {
    return "where";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.condition = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [this.condition._toProto(e)]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.condition, e);
  }
};
var Yu = class extends Vu {
  get _name() {
    return "limit";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    Nt(!isNaN(e) && e !== Infinity && e !== -Infinity, 34860);
    super(t);
    this.limit = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [ls(e, this.limit)]
    };
  }
};
var Wu = class extends Vu {
  get _name() {
    return "offset";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.offset = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [ls(e, this.offset)]
    };
  }
};
var $u = class extends Vu {
  get _name() {
    return "select";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.selections = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: [Co(e, this.selections)]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.selections, e);
  }
};
var Xu = class extends Vu {
  get _name() {
    return "sort";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.orderings = e;
  }
  _toProto(e) {
    return {
      ...super._toProto(e),
      args: this.orderings.map(t => t._toProto(e))
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.orderings, e);
  }
};
function Zu(e, t) {
  if (fu(e)) {
    e._readUserData(t);
  } else if (Array.isArray(e) || e instanceof Map) {
    e.forEach(e => e._readUserData(t));
  } else {
    Object.values(e).forEach(e => e._readUserData(t));
  }
  return e;
}
(class e extends Vu {
  get _name() {
    return "replace_with";
  }
  get _optionsUtil() {
    return new pu({});
  }
  constructor(e, t) {
    super(t);
    this.map = e;
  }
  _toProto(t) {
    return {
      ...super._toProto(t),
      args: [this.map._toProto(t), fo(e.bi)]
    };
  }
  _readUserData(e) {
    super._readUserData(e);
    Zu(this.map, e);
  }
}).bi = "full_replace";
var ec = class e {
  constructor(e, t, n, r) {
    this._db = e;
    this.userDataReader = t;
    this._userDataWriter = n;
    this.stages = r;
  }
  Ci(e, t) {
    const n = this.userDataReader.createContext(3, e);
    if (fu(t)) {
      t._readUserData(n);
    } else {
      Array.isArray(t);
      t.forEach(e => e._readUserData(n));
    }
    return t;
  }
  where(t) {
    const n = this.stages.map(e => e);
    this.Ci("where", t);
    n.push(new zu(t, {}));
    return new e(this._db, this.userDataReader, this._userDataWriter, n);
  }
  limit(t) {
    const n = this.stages.map(e => e);
    n.push(new Yu(t, {}));
    return new e(this._db, this.userDataReader, this._userDataWriter, n);
  }
  sort(t, ...n) {
    const r = this.stages.map(e => e);
    if ("orderings" in t) {
      r.push(new Xu(this.Ci("sort", t.orderings), {}));
    } else {
      r.push(new Xu(this.Ci("sort", [t, ...n]), {}));
    }
    return new e(this._db, this.userDataReader, this._userDataWriter, r);
  }
  Fi(e) {
    return {
      pipeline: {
        stages: this.stages.map(t => t._toProto(e))
      }
    };
  }
};
var tc = class {
  constructor(e, t, n) {
    this.serializer = e;
    this.stages = t;
    this.listenOptions = n;
    this.isCorePipeline = true;
  }
  getPipelineCollection() {
    return rc(this);
  }
  getPipelineCollectionGroup() {
    return sc(this);
  }
  getPipelineCollectionId() {
    return ic(this);
  }
  getPipelineDocuments() {
    return ac(this);
  }
  getPipelineFlavor() {
    return function (e) {
      let t = "exact";
      e.stages.forEach((n, r) => {
        if (n._name === qu.name || n._name === Uu.name) {
          t = "keyless";
        }
        if (n._name === $u.name && t === "exact") {
          t = "augmented";
        }
        if (n._name === Hu.name && r < e.stages.length - 1 && t === "exact") {
          t = "augmented";
        }
      });
      return t;
    }(this);
  }
  getPipelineSourceType() {
    return nc(this);
  }
};
function nc(e) {
  const t = e.stages[0];
  if (t instanceof Ju || t instanceof Ku || t instanceof ju || t instanceof Qu) {
    return t._name;
  } else {
    return "unknown";
  }
}
function rc(e) {
  if (nc(e) === "collection") {
    return e.stages[0].pi;
  }
}
function sc(e) {
  if (nc(e) === "collection_group") {
    return e.stages[0].collectionId;
  }
}
function ic(e) {
  switch (nc(e)) {
    case "collection":
      return Yt.fromString(rc(e)).lastSegment();
    case "collection_group":
      return sc(e);
    default:
      return;
  }
}
function ac(e) {
  if (nc(e) === "documents") {
    return e.stages[0].gi;
  }
}
var oc = class e {
  constructor(e, t) {
    this.type = e;
    this.value = t;
  }
  static Oi() {
    return new e("ERROR", undefined);
  }
  static Mi() {
    return new e("UNSET", undefined);
  }
  static Ni() {
    return new e("NULL", cr);
  }
  static newValue(t) {
    if (Wr(t)) {
      return new e("NULL", cr);
    } else if (function (e) {
      return !!e && "booleanValue" in e;
    }(t)) {
      return new e("BOOLEAN", t);
    } else if (Jr(t)) {
      return new e("INT", t);
    } else if (Kr(t)) {
      return new e("DOUBLE", t);
    } else if (function (e) {
      return !!e && "timestampValue" in e && !!e.timestampValue;
    }(t)) {
      return new e("TIMESTAMP", t);
    } else if (function (e) {
      return !!e && "stringValue" in e;
    }(t)) {
      return new e("STRING", t);
    } else if (function (e) {
      return !!e && "bytesValue" in e;
    }(t)) {
      return new e("BYTES", t);
    } else if (t.referenceValue) {
      return new e("REFERENCE", t);
    } else if (t.geoPointValue) {
      return new e("GEO_POINT", t);
    } else if (Yr(t)) {
      return new e("ARRAY", t);
    } else if (es(t)) {
      return new e("VECTOR", t);
    } else if (Xr(t)) {
      return new e("MAP", t);
    } else {
      return new e("ERROR", undefined);
    }
  }
  Bi() {
    return this.type === "ERROR" || this.type === "UNSET";
  }
  Li() {
    return this.type === "NULL";
  }
};
function Bc(e) {
  if (!e.Bi()) {
    return e.value;
  }
}
function uc(e) {
  if (e instanceof Ou) {
    return e._expr;
  } else {
    return e;
  }
}
function cc(e) {
  if ((e = uc(e)) instanceof vu) {
    return new lc(e);
  }
  if (e instanceof bu) {
    return new hc(e);
  }
  if (e instanceof Iu) {
    return new Cc(e);
  }
  if (e instanceof Fu) {
    if (e.name === "add") {
      return new Dc(e);
    }
    if (e.name === "subtract") {
      return new wc(e);
    }
    if (e.name === "multiply") {
      return new yc(e);
    }
    if (e.name === "divide") {
      return new _c(e);
    }
    if (e.name === "mod") {
      return new Ic(e);
    }
    if (e.name === "and") {
      return new vc(e);
    }
    if (e.name === "equal") {
      return new Hc(e);
    }
    if (e.name === "not_equal") {
      return new Uc(e);
    }
    if (e.name === "less_than") {
      return new qc(e);
    }
    if (e.name === "less_than_or_equal") {
      return new Jc(e);
    }
    if (e.name === "greater_than") {
      return new Kc(e);
    }
    if (e.name === "greater_than_or_equal") {
      return new jc(e);
    }
    if (e.name === "array_concat") {
      return new Qc(e);
    }
    if (e.name === "array_reverse") {
      return new zc(e);
    }
    if (e.name === "array_contains") {
      return new Yc(e);
    }
    if (e.name === "array_contains_all") {
      return new Wc(e);
    }
    if (e.name === "array_contains_any") {
      return new $c(e);
    }
    if (e.name === "array_length") {
      return new Xc(e);
    }
    if (e.name === "array_element") {
      return new Zc(e);
    }
    if (e.name === "equal_any") {
      return new Ac(e);
    }
    if (e.name === "not_equal_any") {
      return new Fc(e);
    }
    if (e.name === "is_nan") {
      return new Oc(e);
    }
    if (e.name === "is_not_nan") {
      return new Sc(e);
    }
    if (e.name === "is_null") {
      return new xc(e);
    }
    if (e.name === "is_not_null") {
      return new Lc(e);
    }
    if (e.name === "is_error") {
      return new Rc(e);
    }
    if (e.name === "exists") {
      return new kc(e);
    }
    if (e.name === "not") {
      return new Tc(e);
    }
    if (e.name === "or") {
      return new bc(e);
    }
    if (e.name === "xor") {
      return new Nc(e);
    }
    if (e.name === "conditional") {
      return new Gc(e);
    }
    if (e.name === "maximum") {
      return new Pc(e);
    }
    if (e.name === "minimum") {
      return new Mc(e);
    }
    if (e.name === "reverse") {
      return new el(e);
    }
    if (e.name === "replace_first") {
      return new tl(e);
    }
    if (e.name === "replace_all") {
      return new nl(e);
    }
    if (e.name === "char_length") {
      return new rl(e);
    }
    if (e.name === "byte_length") {
      return new sl(e);
    }
    if (e.name === "like") {
      return new al(e);
    }
    if (e.name === "regex_contains") {
      return new ol(e);
    }
    if (e.name === "regex_match") {
      return new Bl(e);
    }
    if (e.name === "string_contains") {
      return new ul(e);
    }
    if (e.name === "starts_with") {
      return new cl(e);
    }
    if (e.name === "ends_with") {
      return new ll(e);
    }
    if (e.name === "to_lower") {
      return new hl(e);
    }
    if (e.name === "to_upper") {
      return new Cl(e);
    }
    if (e.name === "trim") {
      return new dl(e);
    }
    if (e.name === "string_concat") {
      return new fl(e);
    }
    if (e.name === "map_get") {
      return new pl(e);
    }
    if (e.name === "cosine_distance") {
      return new ml(e);
    }
    if (e.name === "dot_product") {
      return new El(e);
    }
    if (e.name === "euclidean_distance") {
      return new Dl(e);
    }
    if (e.name === "vector_length") {
      return new wl(e);
    }
    if (e.name === "unix_micros_to_timestamp") {
      return new kl(e);
    }
    if (e.name === "timestamp_to_unix_micros") {
      return new Vl(e);
    }
    if (e.name === "unix_millis_to_timestamp") {
      return new Gl(e);
    }
    if (e.name === "timestamp_to_unix_millis") {
      return new Hl(e);
    }
    if (e.name === "unix_seconds_to_timestamp") {
      return new Pl(e);
    }
    if (e.name === "timestamp_to_unix_seconds") {
      return new Ul(e);
    }
    if (e.name === "timestamp_add") {
      return new Jl(e);
    }
    if (e.name === "timestamp_subtract") {
      return new Kl(e);
    }
  }
  throw new Error(`Unknown Expr : ${e}`);
}
var lc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    if (this.expr.fieldName === Qt) {
      return oc.newValue({
        referenceValue: qa(e.serializer, t.key)
      });
    }
    if (this.expr.fieldName === "__update_time__") {
      return oc.newValue({
        timestampValue: Pa(e.serializer, t.version)
      });
    }
    if (this.expr.fieldName === "__create_time__") {
      return oc.newValue({
        timestampValue: Pa(e.serializer, t.createTime)
      });
    }
    const n = t.data.field(this.expr._fieldPath);
    if (n) {
      if (bn(n)) {
        return oc.newValue(function (e, t) {
          if (e.serverTimestampBehavior === "estimate") {
            return {
              timestampValue: Pa(e.serializer, di.fromTimestamp(An(t)))
            };
          }
          if (e.serverTimestampBehavior === "previous") {
            const e = Nn(t);
            if (e) {
              return e;
            }
          }
          return {
            nullValue: "NULL_VALUE"
          };
        }(e, n));
      } else {
        return oc.newValue(n);
      }
    } else {
      return oc.Mi();
    }
  }
};
var hc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    return oc.newValue(this.expr._getValue());
  }
};
var Cc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    const n = this.expr.di.map(n => cc(n).evaluate(e, t));
    if (n.some(e => e.Bi())) {
      return oc.Oi();
    } else {
      return oc.newValue({
        arrayValue: {
          values: n.map(e => e.value)
        }
      });
    }
  }
};
function dc(e) {
  if (Kr(e)) {
    return Number(e.doubleValue);
  } else {
    return Number(e.integerValue);
  }
}
function fc(e) {
  return BigInt(e.integerValue);
}
var pc = BigInt("0x7fffffffffffffff");
var gc = -BigInt("0x8000000000000000");
var mc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length >= 2, 24778);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    const r = cc(this.expr.params[1]).evaluate(e, t);
    let s = this.$i(n, r);
    for (const i of this.expr.params.slice(2)) {
      const n = cc(i).evaluate(e, t);
      s = this.$i(s, n);
    }
    return s;
  }
  $i(e, t) {
    if (e.Bi() || t.Bi()) {
      return oc.Oi();
    }
    if (e.Li() || t.Li()) {
      return oc.Ni();
    }
    const n = e.value;
    const r = t.value;
    if (!Kr(n) && !Jr(n) || !Kr(r) && !Jr(r)) {
      return oc.Oi();
    }
    if (Kr(n) || Kr(r)) {
      const e = this.Ui(n, r);
      if (e) {
        return oc.newValue(e);
      } else {
        return oc.Oi();
      }
    }
    if (Jr(n) && Jr(r)) {
      const e = this.ki(n, r);
      if (e === undefined) {
        return oc.Oi();
      } else if (typeof e == "number") {
        return oc.newValue({
          doubleValue: e
        });
      } else if (e < gc || e > pc) {
        return oc.Oi();
      } else {
        return oc.newValue({
          integerValue: `${e}`
        });
      }
    }
    return oc.Oi();
  }
};
function Ec(e, t) {
  if (_r(e) !== _r(t)) {
    return "TYPE_MISMATCH";
  } else if ($r(e) || $r(t)) {
    return "NOT_EQ";
  } else if (Wr(e) && Wr(t)) {
    return "EQ";
  } else if (Wr(e) || Wr(t)) {
    return "NULL";
  } else if (Yr(e) && Yr(t)) {
    return function (e, t) {
      if (e.values?.length !== t.values?.length) {
        return "NOT_EQ";
      }
      let n = false;
      for (let r = 0; r < (e.values?.length ?? 0); r++) {
        const s = e.values[r];
        const i = t.values[r];
        switch (Ec(s, i)) {
          case "EQ":
            break;
          case "NOT_EQ":
          case "TYPE_MISMATCH":
            return "NOT_EQ";
          case "NULL":
            n = true;
            break;
          default:
            Tt(44609, {
              Qi: s,
              qi: i
            });
        }
      }
      if (n) {
        return "NULL";
      } else {
        return "EQ";
      }
    }(e.arrayValue, t.arrayValue);
  } else if (es(e) && es(t) || Xr(e) && Xr(t)) {
    return function (e, t) {
      const n = e.fields || {};
      const r = t.fields || {};
      if (Zt(n) !== Zt(r)) {
        return "NOT_EQ";
      }
      let s = false;
      for (const i in n) {
        if (n.hasOwnProperty(i)) {
          if (r[i] === undefined) {
            return "NOT_EQ";
          }
          switch (Ec(n[i], r[i])) {
            case "NOT_EQ":
            case "TYPE_MISMATCH":
              return "NOT_EQ";
            case "NULL":
              s = true;
          }
        }
      }
      if (s) {
        return "NULL";
      } else {
        return "EQ";
      }
    }(e.mapValue, t.mapValue);
  } else if (function (e, t) {
    return Ir(e, t, {
      be: false,
      ye: true,
      we: true
    });
  }(e, t)) {
    return "EQ";
  } else {
    return "NOT_EQ";
  }
}
var Dc = class extends mc {
  ki(e, t) {
    return fc(e) + fc(t);
  }
  Ui(e, t) {
    return {
      doubleValue: dc(e) + dc(t)
    };
  }
};
var wc = class extends mc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  ki(e, t) {
    return fc(e) - fc(t);
  }
  Ui(e, t) {
    return {
      doubleValue: dc(e) - dc(t)
    };
  }
};
var yc = class extends mc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  ki(e, t) {
    return fc(e) * fc(t);
  }
  Ui(e, t) {
    return {
      doubleValue: dc(e) * dc(t)
    };
  }
};
var _c = class extends mc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  ki(e, t) {
    const n = fc(t);
    if (n !== BigInt(0)) {
      return fc(e) / n;
    }
  }
  Ui(e, t) {
    const n = dc(t);
    if (n === 0) {
      return {
        doubleValue: qn(n) ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
      };
    } else {
      return {
        doubleValue: dc(e) / n
      };
    }
  }
};
var Ic = class extends mc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  ki(e, t) {
    const n = fc(t);
    if (n !== BigInt(0)) {
      return fc(e) % n;
    }
  }
  Ui(e, t) {
    const n = dc(t);
    if (n !== 0) {
      return {
        doubleValue: dc(e) % n
      };
    }
  }
};
var vc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    let n = false;
    let r = false;
    for (const s of this.expr.params) {
      const i = cc(s).evaluate(e, t);
      switch (i.type) {
        case "BOOLEAN":
          if (!i.value?.booleanValue) {
            return oc.newValue(yr);
          }
          break;
        case "NULL":
          r = true;
          break;
        default:
          n = true;
      }
    }
    if (n) {
      return oc.Oi();
    } else if (r) {
      return oc.Ni();
    } else {
      return oc.newValue(wr);
    }
  }
};
var Tc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 9634);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "BOOLEAN":
        return oc.newValue({
          booleanValue: !n.value?.booleanValue
        });
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var bc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    let n = false;
    let r = false;
    for (const s of this.expr.params) {
      const i = cc(s).evaluate(e, t);
      switch (i.type) {
        case "BOOLEAN":
          if (i.value?.booleanValue) {
            return oc.newValue(wr);
          }
          break;
        case "NULL":
          r = true;
          break;
        default:
          n = true;
      }
    }
    if (n) {
      return oc.Oi();
    } else if (r) {
      return oc.Ni();
    } else {
      return oc.newValue(yr);
    }
  }
};
var Nc = class e {
  constructor(e) {
    this.expr = e;
  }
  evaluate(t, n) {
    let r = false;
    let s = false;
    for (const i of this.expr.params) {
      const a = cc(i).evaluate(t, n);
      switch (a.type) {
        case "BOOLEAN":
          r = e.xor(r, !!a.value?.booleanValue);
          break;
        case "NULL":
          s = true;
          break;
        default:
          return oc.Oi();
      }
    }
    if (s) {
      return oc.Ni();
    } else {
      return oc.newValue({
        booleanValue: r
      });
    }
  }
  static xor(e, t) {
    return (e || t) && (!e || !t);
  }
};
var Ac = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 55094);
    let n = false;
    const r = cc(this.expr.params[0]).evaluate(e, t);
    switch (r.type) {
      case "NULL":
        n = true;
        break;
      case "ERROR":
      case "UNSET":
        return oc.Oi();
    }
    const s = cc(this.expr.params[1]).evaluate(e, t);
    switch (s.type) {
      case "ARRAY":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    if (n) {
      return oc.Ni();
    }
    for (const i of s.value?.arrayValue?.values ?? []) {
      switch (Wr(r.value) && Wr(i) ? "EQ" : Ec(r.value, i)) {
        case "EQ":
          return oc.newValue(wr);
        case "NOT_EQ":
        case "TYPE_MISMATCH":
          break;
        case "NULL":
          n = true;
          break;
        default:
          Tt(44608, {
            value: r.value,
            candidate: i
          });
      }
    }
    if (n) {
      return oc.Ni();
    } else {
      return oc.newValue(yr);
    }
  }
};
var Fc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    return new Tc(new Fu("not", [new Fu("equal_any", this.expr.params)])).evaluate(e, t);
  }
};
var Oc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 23322);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "INT":
        return oc.newValue(yr);
      case "DOUBLE":
        return oc.newValue({
          booleanValue: isNaN(dc(n.value))
        });
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var Sc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 50406);
    return new Tc(new Fu("not", [new Fu("is_nan", this.expr.params)])).evaluate(e, t);
  }
};
var xc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 23123);
    switch (cc(this.expr.params[0]).evaluate(e, t).type) {
      case "NULL":
        return oc.newValue(wr);
      case "UNSET":
      case "ERROR":
        return oc.Oi();
      default:
        return oc.newValue(yr);
    }
  }
};
var Lc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 23167);
    return new Tc(new Fu("not", [new Fu("is_null", this.expr.params)])).evaluate(e, t);
  }
};
var Rc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 5228);
    if (cc(this.expr.params[0]).evaluate(e, t).type === "ERROR") {
      return oc.newValue(wr);
    } else {
      return oc.newValue(yr);
    }
  }
};
var kc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 6877);
    switch (cc(this.expr.params[0]).evaluate(e, t).type) {
      case "ERROR":
        return oc.Oi();
      case "UNSET":
        return oc.newValue(yr);
      default:
        return oc.newValue(wr);
    }
  }
};
var Gc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 3, 11706);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "BOOLEAN":
        if (n.value?.booleanValue) {
          return cc(this.expr.params[1]).evaluate(e, t);
        } else {
          return cc(this.expr.params[2]).evaluate(e, t);
        }
      case "NULL":
        return cc(this.expr.params[2]).evaluate(e, t);
      default:
        return oc.Oi();
    }
  }
};
var Pc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    const n = this.expr.params.map(n => cc(n).evaluate(e, t));
    let r;
    for (const s of n) {
      switch (s.type) {
        case "ERROR":
        case "UNSET":
        case "NULL":
          continue;
        default:
          r = r === undefined || Tr(s.value, r.value) > 0 ? s : r;
      }
    }
    if (r === undefined) {
      return oc.Ni();
    } else {
      return r;
    }
  }
};
var Mc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    const n = this.expr.params.map(n => cc(n).evaluate(e, t));
    let r;
    for (const s of n) {
      switch (s.type) {
        case "ERROR":
        case "UNSET":
        case "NULL":
          continue;
        default:
          r = r === undefined || Tr(s.value, r.value) < 0 ? s : r;
      }
    }
    if (r === undefined) {
      return oc.Ni();
    } else {
      return r;
    }
  }
};
var Vc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 31033, `${this.expr.name}() function should have exactly 2 params`);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "ERROR":
      case "UNSET":
        return oc.Oi();
    }
    const r = cc(this.expr.params[1]).evaluate(e, t);
    switch (r.type) {
      case "ERROR":
      case "UNSET":
        return oc.Oi();
    }
    return this.Ki(n, r);
  }
};
var Hc = class extends Vc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  Ki(e, t) {
    if (e.Li() && t.Li()) {
      return oc.newValue(wr);
    }
    if (e.Li() || t.Li()) {
      return oc.newValue(yr);
    }
    if ($r(e.value) || $r(t.value)) {
      return oc.newValue(yr);
    }
    if (_r(e.value) !== _r(t.value)) {
      return oc.newValue(yr);
    }
    switch (Ec(e.value, t.value)) {
      case "EQ":
        return oc.newValue(wr);
      case "NOT_EQ":
        return oc.newValue(yr);
      case "NULL":
        return oc.Ni();
      default:
        Tt(44615, {
          left: e,
          right: t
        });
    }
  }
};
var Uc = class extends Vc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  Ki(e, t) {
    switch (Ec(e.value, t.value)) {
      case "EQ":
        return oc.newValue(yr);
      case "NOT_EQ":
      case "TYPE_MISMATCH":
        return oc.newValue(wr);
      case "NULL":
        return oc.Ni();
      default:
        Tt(44614, {
          left: e,
          right: t
        });
    }
  }
};
var qc = class extends Vc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  Ki(e, t) {
    if (_r(e.value) !== _r(t.value) || $r(e.value) || $r(t.value)) {
      return oc.newValue(yr);
    } else {
      return oc.newValue({
        booleanValue: Tr(e.value, t.value) < 0
      });
    }
  }
};
var Jc = class extends Vc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  Ki(e, t) {
    if (_r(e.value) !== _r(t.value) || $r(e.value) || $r(t.value)) {
      return oc.newValue(yr);
    } else if (Ec(e.value, t.value) === "EQ") {
      return oc.newValue(wr);
    } else {
      return oc.newValue({
        booleanValue: Tr(e.value, t.value) < 0
      });
    }
  }
};
var Kc = class extends Vc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  Ki(e, t) {
    if (_r(e.value) !== _r(t.value) || $r(e.value) || $r(t.value)) {
      return oc.newValue(yr);
    } else {
      return oc.newValue({
        booleanValue: Tr(e.value, t.value) > 0
      });
    }
  }
};
var jc = class extends Vc {
  constructor(e) {
    super(e);
    this.expr = e;
  }
  Ki(e, t) {
    if (_r(e.value) !== _r(t.value) || $r(e.value) || $r(t.value)) {
      return oc.newValue(yr);
    } else if (Ec(e.value, t.value) === "EQ") {
      return oc.newValue(wr);
    } else {
      return oc.newValue({
        booleanValue: Tr(e.value, t.value) > 0
      });
    }
  }
};
var Qc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    throw new Error("Unimplemented");
  }
};
var zc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 216);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "NULL":
        return oc.Ni();
      case "ARRAY":
        {
          const e = n.value.arrayValue?.values ?? [];
          return oc.newValue({
            arrayValue: {
              values: [...e].reverse()
            }
          });
        }
      default:
        return oc.Oi();
    }
  }
};
var Yc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 52884);
    return new Ac(new Fu("eq_any", [this.expr.params[1], this.expr.params[0]])).evaluate(e, t);
  }
};
var Wc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 1392);
    let n = false;
    const r = cc(this.expr.params[0]).evaluate(e, t);
    switch (r.type) {
      case "ARRAY":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    const s = cc(this.expr.params[1]).evaluate(e, t);
    switch (s.type) {
      case "ARRAY":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    if (n) {
      return oc.Ni();
    }
    const i = s.value?.arrayValue?.values ?? [];
    const a = r.value?.arrayValue?.values ?? [];
    for (const o of i) {
      let e = false;
      n = false;
      for (const t of a) {
        switch (Wr(o) && Wr(t) ? "EQ" : Ec(o, t)) {
          case "EQ":
            e = true;
            break;
          case "NOT_EQ":
          case "TYPE_MISMATCH":
            break;
          case "NULL":
            n = true;
            break;
          default:
            Tt(44613, {
              value: t,
              search: o
            });
        }
        if (e) {
          break;
        }
      }
      if (!e) {
        return oc.newValue(yr);
      }
    }
    return oc.newValue(wr);
  }
};
var $c = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 2680);
    let n = false;
    const r = cc(this.expr.params[0]).evaluate(e, t);
    switch (r.type) {
      case "ARRAY":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    const s = cc(this.expr.params[1]).evaluate(e, t);
    switch (s.type) {
      case "ARRAY":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    if (n) {
      return oc.Ni();
    }
    const i = s.value?.arrayValue?.values ?? [];
    const a = r.value?.arrayValue?.values ?? [];
    for (const o of a) {
      for (const e of i) {
        switch (Wr(o) && Wr(e) ? "EQ" : Ec(o, e)) {
          case "EQ":
            return oc.newValue(wr);
          case "NOT_EQ":
          case "TYPE_MISMATCH":
            break;
          case "NULL":
            n = true;
            break;
          default:
            Tt(60403, {
              value: o,
              search: e
            });
        }
      }
    }
    if (n) {
      return oc.Ni();
    } else {
      return oc.newValue(yr);
    }
  }
};
var Xc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 38605);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "NULL":
        return oc.Ni();
      case "ARRAY":
        return oc.newValue({
          integerValue: `${n.value?.arrayValue?.values?.length ?? 0}`
        });
      default:
        return oc.Oi();
    }
  }
};
var Zc = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    throw new Error("Unimplemented");
  }
};
var el = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 1508);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "NULL":
        return oc.Ni();
      case "BYTES":
        {
          const e = n.value?.bytesValue;
          if (typeof e == "string") {
            const t = mn.fromBase64String(e).toUint8Array();
            t.reverse();
            return oc.newValue({
              bytesValue: mn.fromUint8Array(t).toBase64()
            });
          }
          return oc.newValue({
            bytesValue: new Uint8Array(e).reverse()
          });
        }
      case "STRING":
        {
          const e = n.value?.stringValue;
          const t = new Intl.__PRIVATE_Segmenter(undefined, {
            granularity: "grapheme"
          }).segment(e);
          const r = Array.from(t, e => e.segment).reverse();
          return oc.newValue({
            stringValue: r.join("")
          });
        }
      default:
        return oc.Oi();
    }
  }
};
var tl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    throw new Error("Unimplemented");
  }
};
var nl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    throw new Error("Unimplemented");
  }
};
var rl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 19400);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "NULL":
        return oc.Ni();
      case "STRING":
        {
          const e = function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e.codePointAt(n);
              if (r === undefined) {
                return;
              }
              if (r <= 65535) {
                if (r >= 55296 && r <= 57343) {
                  if (r <= 56319) {
                    const r = e.codePointAt(n + 1);
                    if (r !== undefined && r >= 56320 && r <= 57343) {
                      t += 1;
                      n++;
                    } else {
                      t += 1;
                    }
                  } else {
                    t += 1;
                  }
                } else {
                  t += 1;
                }
              } else {
                if (!(r <= 1114111)) {
                  return;
                }
                t += 1;
                n++;
              }
            }
            return t;
          }(n.value.stringValue);
          if (e === undefined) {
            return oc.Oi();
          } else {
            return oc.newValue({
              integerValue: e
            });
          }
        }
      default:
        return oc.Oi();
    }
  }
};
var sl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 8486);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "BYTES":
        {
          const e = n.value?.bytesValue;
          if (typeof e == "string") {
            return oc.newValue({
              integerValue: mn.fromBase64String(e).toUint8Array().length
            });
          } else {
            return oc.newValue({
              integerValue: new Uint8Array(e).length
            });
          }
        }
      case "STRING":
        {
          const e = function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e.codePointAt(n);
              if (r === undefined) {
                return;
              }
              if (r >= 55296 && r <= 57343) {
                if (!(r <= 56319)) {
                  return;
                }
                {
                  const r = e.codePointAt(n + 1);
                  if (r === undefined || !(r >= 56320) || !(r <= 57343)) {
                    return;
                  }
                  t += 4;
                  n++;
                }
              } else if (r <= 127) {
                t += 1;
              } else if (r <= 2047) {
                t += 2;
              } else if (r <= 65535) {
                t += 3;
              } else {
                if (!(r <= 1114111)) {
                  return;
                }
                t += 4;
                n++;
              }
            }
            return t;
          }(n.value?.stringValue);
          if (e === undefined) {
            return oc.Oi();
          } else {
            return oc.newValue({
              integerValue: e
            });
          }
        }
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var il = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 39773, `${this.expr.name}() function should have exactly two parameters`);
    let n = false;
    const r = cc(this.expr.params[0]).evaluate(e, t);
    switch (r.type) {
      case "STRING":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    const s = cc(this.expr.params[1]).evaluate(e, t);
    switch (s.type) {
      case "STRING":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    if (n) {
      return oc.Ni();
    } else {
      return this.Wi(r.value?.stringValue, s.value?.stringValue);
    }
  }
};
var al = class extends il {
  Wi(e, t) {
    try {
      const n = function (e) {
        let t = "";
        for (let n = 0; n < e.length; n++) {
          const r = e.charAt(n);
          switch (r) {
            case "_":
              t += ".";
              break;
            case "%":
              t += ".*";
              break;
            case "\\":
            case ".":
            case "*":
            case "?":
            case "+":
            case "^":
            case "$":
            case "|":
            case "(":
            case ")":
            case "[":
            case "]":
            case "{":
            case "}":
              t += "\\" + r;
              break;
            default:
              t += r;
          }
        }
        return "^" + t + "$";
      }(t);
      const r = mt.compile(n);
      return oc.newValue({
        booleanValue: r.matches(e)
      });
    } catch (e) {
      It(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${e}`);
      return oc.Oi();
    }
  }
};
var ol = class extends il {
  Wi(e, t) {
    try {
      const n = mt.compile(t);
      return oc.newValue({
        booleanValue: n.test(e)
      });
    } catch (e) {
      It(`Invalid regex pattern found in regex_contains: ${t}, returning error`);
      return oc.Oi();
    }
  }
};
var Bl = class extends il {
  Wi(e, t) {
    try {
      return oc.newValue({
        booleanValue: mt.compile(t).matches(e)
      });
    } catch (e) {
      It(`Invalid regex pattern found in regex_match: ${t}, returning error`);
      return oc.Oi();
    }
  }
};
var ul = class extends il {
  Wi(e, t) {
    return oc.newValue({
      booleanValue: e.includes(t)
    });
  }
};
var cl = class extends il {
  Wi(e, t) {
    return oc.newValue({
      booleanValue: e.startsWith(t)
    });
  }
};
var ll = class extends il {
  Wi(e, t) {
    return oc.newValue({
      booleanValue: e.endsWith(t)
    });
  }
};
var hl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 29079);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "STRING":
        return oc.newValue({
          stringValue: n.value?.stringValue?.toLowerCase()
        });
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var Cl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 60487);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "STRING":
        return oc.newValue({
          stringValue: n.value?.stringValue?.toUpperCase()
        });
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var dl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 28544);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "STRING":
        return oc.newValue({
          stringValue: n.value?.stringValue?.trim()
        });
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var fl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    const n = this.expr.params.map(n => cc(n).evaluate(e, t));
    let r = "";
    let s = false;
    for (const i of n) {
      switch (i.type) {
        case "STRING":
          r += i.value.stringValue;
          break;
        case "NULL":
          s = true;
          break;
        default:
          return oc.Oi();
      }
    }
    if (s) {
      return oc.Ni();
    } else {
      return oc.newValue({
        stringValue: r
      });
    }
  }
};
var pl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 4483);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "UNSET":
        return oc.Mi();
      case "MAP":
        break;
      default:
        return oc.Oi();
    }
    const r = cc(this.expr.params[1]).evaluate(e, t);
    if (r.type !== "STRING") {
      return oc.Oi();
    }
    const s = n.value?.mapValue?.fields?.[r.value?.stringValue];
    if (s === undefined) {
      return oc.Mi();
    } else {
      return oc.newValue(s);
    }
  }
};
var gl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 2, 25231, `${this.expr.name}() function should have exactly 2 params`);
    let n = false;
    const r = cc(this.expr.params[0]).evaluate(e, t);
    switch (r.type) {
      case "VECTOR":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    const s = cc(this.expr.params[1]).evaluate(e, t);
    switch (s.type) {
      case "VECTOR":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    if (n) {
      return oc.Ni();
    }
    const i = ts(r.value);
    const a = ts(s.value);
    if (i === undefined || a === undefined || i.values?.length !== a.values?.length) {
      return oc.Oi();
    }
    const o = this.Gi(i, a);
    if (o === undefined || isNaN(o)) {
      return oc.Oi();
    } else {
      return oc.newValue({
        doubleValue: o
      });
    }
  }
};
var ml = class extends gl {
  Gi(e, t) {
    const n = e?.values ?? [];
    const r = t?.values ?? [];
    if (n.length === 0) {
      return;
    }
    let s = 0;
    let i = 0;
    let a = 0;
    for (let B = 0; B < n.length; B++) {
      if (!zr(n[B]) || !zr(r[B])) {
        return;
      }
      const e = dc(n[B]);
      const t = dc(r[B]);
      s += e * t;
      i += e * e;
      a += t * t;
    }
    const o = Math.sqrt(i) * Math.sqrt(a);
    if (o !== 0) {
      return 1 - Math.max(-1, Math.min(1, s / o));
    } else {
      return undefined;
    }
  }
};
var El = class extends gl {
  Gi(e, t) {
    const n = e?.values ?? [];
    const r = t?.values ?? [];
    if (n.length === 0) {
      return 0;
    }
    let s = 0;
    for (let i = 0; i < n.length; i++) {
      if (!zr(n[i]) || !zr(r[i])) {
        return;
      }
      s += dc(n[i]) * dc(r[i]);
    }
    return s;
  }
};
var Dl = class extends gl {
  Gi(e, t) {
    const n = e?.values ?? [];
    const r = t?.values ?? [];
    if (n.length === 0) {
      return 0;
    }
    let s = 0;
    for (let i = 0; i < n.length; i++) {
      if (!zr(n[i]) || !zr(r[i])) {
        return;
      }
      const e = dc(n[i]);
      const t = dc(r[i]);
      s += Math.pow(e - t, 2);
    }
    return Math.sqrt(s);
  }
};
var wl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 39044);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "VECTOR":
        {
          const e = ts(n.value);
          return oc.newValue({
            integerValue: e?.values?.length ?? 0
          });
        }
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var yl = BigInt(-62135596800);
var _l = BigInt(253402300799);
var Il = BigInt(1000);
var vl = BigInt(1000000);
var Tl = yl * Il;
var bl = _l * Il + BigInt(999);
var Nl = yl * vl;
var Al = _l * vl + BigInt(999999);
function Fl(e) {
  return e >= Nl && e <= Al;
}
function Ol(e) {
  return e >= yl && e <= _l;
}
function Sl(e, t) {
  const n = BigInt(e);
  return !(n < yl) && !(n > _l) && !(t < 0) && !(t >= 1000000000) && (n !== yl || t === 0) && (n !== _l || !(t > 999999999));
}
function xl(e, t) {
  if (t < 0) {
    return {
      seconds: e - 1,
      nanos: t + 1000000000
    };
  } else {
    return {
      seconds: e,
      nanos: t
    };
  }
}
function Ll(e) {
  return BigInt(e.seconds) * vl + BigInt(Math.trunc(e.nanoseconds / 1000));
}
var Rl = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 49262, `${this.expr.name}() function should have exactly one parameter`);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "INT":
        return this.toTimestamp(BigInt(n.value.integerValue));
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
  }
};
var kl = class extends Rl {
  toTimestamp(e) {
    if (!Fl(e)) {
      return oc.Oi();
    }
    let t = Number(e / vl);
    let n = Number(e % vl * BigInt(1000));
    const r = xl(t, n);
    t = r.seconds;
    n = r.nanos;
    if (Sl(t, n)) {
      return oc.newValue({
        timestampValue: {
          seconds: t,
          nanos: n
        }
      });
    } else {
      return oc.Oi();
    }
  }
};
var Gl = class extends Rl {
  toTimestamp(e) {
    if (!function (e) {
      return e >= Tl && e <= bl;
    }(e)) {
      return oc.Oi();
    }
    let t = Number(e / Il);
    let n = Number(e % Il * BigInt(1000000));
    const r = xl(t, n);
    t = r.seconds;
    n = r.nanos;
    if (Sl(t, n)) {
      return oc.newValue({
        timestampValue: {
          seconds: t,
          nanos: n
        }
      });
    } else {
      return oc.Oi();
    }
  }
};
var Pl = class extends Rl {
  toTimestamp(e) {
    if (!Ol(e)) {
      return oc.Oi();
    }
    const t = Number(e);
    return oc.newValue({
      timestampValue: {
        seconds: t,
        nanos: 0
      }
    });
  }
};
var Ml = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 1, 1265, `${this.expr.name}() function should have exactly one parameter`);
    const n = cc(this.expr.params[0]).evaluate(e, t);
    switch (n.type) {
      case "TIMESTAMP":
        break;
      case "NULL":
        return oc.Ni();
      default:
        return oc.Oi();
    }
    const r = ka(n.value.timestampValue);
    if (Sl(r.seconds, r.nanoseconds)) {
      return this.ji(r);
    } else {
      return oc.Oi();
    }
  }
};
var Vl = class extends Ml {
  ji(e) {
    const t = Ll(e);
    if (Fl(t)) {
      return oc.newValue({
        integerValue: `${t.toString()}`
      });
    } else {
      return oc.Oi();
    }
  }
};
var Hl = class extends Ml {
  ji(e) {
    const t = Ll(e);
    const n = t / BigInt(1000);
    const r = t % BigInt(1000);
    if (n > BigInt(0) || r === BigInt(0)) {
      return oc.newValue({
        integerValue: n.toString()
      });
    } else {
      return oc.newValue({
        integerValue: (n - BigInt(1)).toString()
      });
    }
  }
};
var Ul = class extends Ml {
  ji(e) {
    const t = BigInt(e.seconds);
    if (Ol(t)) {
      return oc.newValue({
        integerValue: t.toString()
      });
    } else {
      return oc.Oi();
    }
  }
};
var ql = class {
  constructor(e) {
    this.expr = e;
  }
  evaluate(e, t) {
    Nt(this.expr.params.length === 3, 2775, `${this.expr.name}() function should have exactly 3 parameters`);
    let n = false;
    const r = cc(this.expr.params[0]).evaluate(e, t);
    switch (r.type) {
      case "TIMESTAMP":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    const s = cc(this.expr.params[1]).evaluate(e, t);
    let i;
    switch (s.type) {
      case "STRING":
        i = function (e) {
          switch (e) {
            case "microsecond":
              return "microsecond";
            case "millisecond":
              return "millisecond";
            case "second":
              return "second";
            case "minute":
              return "minute";
            case "hour":
              return "hour";
            case "day":
              return "day";
            default:
              return;
          }
        }(s.value.stringValue);
        if (i === undefined) {
          return oc.Oi();
        }
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    const a = cc(this.expr.params[2]).evaluate(e, t);
    switch (a.type) {
      case "INT":
        break;
      case "NULL":
        n = true;
        break;
      default:
        return oc.Oi();
    }
    if (n) {
      return oc.Ni();
    }
    const o = BigInt(a.value.integerValue);
    let B;
    try {
      switch (i) {
        case "microsecond":
          B = o;
          break;
        case "millisecond":
          B = o * BigInt(1000);
          break;
        case "second":
          B = o * BigInt(1000000);
          break;
        case "minute":
          B = o * BigInt(60000000);
          break;
        case "hour":
          B = o * BigInt(3600000000);
          break;
        case "day":
          B = o * BigInt(86400000000);
          break;
        default:
          return oc.Oi();
      }
      if (i !== "microsecond" && o !== BigInt(0) && B / o !== BigInt(this.zi(i))) {
        return oc.Oi();
      }
    } catch (e) {
      It(`Error during timestamp arithmetic: ${e}`);
      return oc.Oi();
    }
    const u = ka(r.value.timestampValue);
    if (!Sl(u.seconds, u.nanoseconds)) {
      return oc.Oi();
    }
    const c = Ll(u);
    const l = this.Hi(c, B);
    if (!Fl(l)) {
      return oc.Oi();
    }
    const h = Number(l / vl);
    const C = l % vl;
    const d = Number((C < 0 ? C + vl : C) * BigInt(1000));
    const f = C < 0 ? h - 1 : h;
    if (Sl(f, d)) {
      return oc.newValue({
        timestampValue: {
          seconds: f,
          nanos: d
        }
      });
    } else {
      return oc.Oi();
    }
  }
  zi(e) {
    switch (e) {
      case "millisecond":
        return 1000;
      case "second":
        return 1000000;
      case "minute":
        return 60000000;
      case "hour":
        return 3600000000;
      case "day":
        return 86400000000;
      default:
        return 1;
    }
  }
};
var Jl = class extends ql {
  Hi(e, t) {
    return e + t;
  }
};
var Kl = class extends ql {
  Hi(e, t) {
    return e - t;
  }
};
function jl(e) {
  if ((e = uc(e)) instanceof vu) {
    return `fld(${e.fieldName})`;
  }
  if (e instanceof bu) {
    return `cst(${function (e) {
      if (e === null) {
        return "null";
      } else if (typeof e == "number") {
        return e.toString();
      } else if (typeof e == "string") {
        return `"${e}"`;
      } else if (e instanceof LB) {
        return `ref(${e.path})`;
      } else if (e instanceof HB) {
        return `vec(${JSON.stringify(e)})`;
      } else {
        return JSON.stringify(e);
      }
    }(e.value)})`;
  }
  if (e instanceof Fu) {
    return `fn(${e.name},[${e.params.map(jl).join(",")}])`;
  }
  if (e.expressionType === "ListOfExpressions") {
    return `list([${e.di.map(jl).join(",")}])`;
  }
  throw new Error(`Unrecognized expr ${JSON.stringify(e, null, 2)}`);
}
function Ql(e) {
  if (e instanceof Hu) {
    return `${e._name}(${zl(e.fields)})`;
  }
  if (e instanceof Uu) {
    let t = `${e._name}(${zl(e.accumulators)})`;
    if (e.groups.size > 0) {
      t += `grouping(${zl(e.groups)})`;
    }
    return t;
  }
  if (e instanceof qu) {
    return `${e._name}(${zl(e.groups)})`;
  }
  if (e instanceof Ju) {
    return `${e._name}(${e.pi})`;
  }
  if (e instanceof Ku) {
    return `${e._name}(${e.collectionId})`;
  }
  if (e instanceof ju) {
    return `${e._name}()`;
  }
  if (e instanceof Qu) {
    return `${e._name}(${e.gi.sort()})`;
  }
  if (e instanceof zu) {
    return `${e._name}(${jl(e.condition)})`;
  }
  if (e instanceof Yu) {
    return `${e._name}(${e.limit})`;
  }
  if (e instanceof Xu) {
    return `${e._name}(${function (e) {
      return e.map(e => `${jl(e.expr)}${e.direction}`).join(",");
    }(e.orderings)})`;
  }
  throw new Error(`Unrecognized stage ${e._name}`);
}
function zl(e) {
  return `${Array.from(e.entries()).sort().map(([e, t]) => `${e}=${jl(t)}`).join(",")}`;
}
function Yl(e) {
  return e.stages.map(e => Ql(e)).join("|");
}
function Wl(e, t) {
  return Yl(e) === Yl(t);
}
function $l(e) {
  return e instanceof tc;
}
function Xl(e) {
  if ($l(e)) {
    return Yl(e);
  } else {
    return Ki(e);
  }
}
function Zl(e) {
  if ($l(e)) {
    return Yl(e);
  } else {
    return function (e) {
      return `${Ni(Hi(e))}|lt:${e.limitType}`;
    }(e);
  }
}
function eh(e, t) {
  if (e instanceof tc && t instanceof tc) {
    return Wl(e, t);
  } else {
    return (!(e instanceof tc) || !!(t instanceof tc)) && (!!(e instanceof tc) || !(t instanceof tc)) && Ji(e, t);
  }
}
function th(e) {
  if (Fi(e)) {
    return Yl(e);
  } else {
    return Ni(e);
  }
}
function nh(e, t) {
  if (e instanceof tc && t instanceof tc) {
    return Wl(e, t);
  } else {
    return (!(e instanceof tc) || !!(t instanceof tc)) && (!!(e instanceof tc) || !(t instanceof tc)) && Ai(e, t);
  }
}
var rh = class {
  constructor(e, t, n, r) {
    this.batchId = e;
    this.localWriteTime = t;
    this.baseMutations = n;
    this.mutations = r;
  }
  applyToRemoteDocument(e, t) {
    const n = t.mutationResults;
    for (let r = 0; r < this.mutations.length; r++) {
      const t = this.mutations[r];
      if (t.key.isEqual(e.key)) {
        xs(t, e, n[r]);
      }
    }
  }
  applyToLocalView(e, t) {
    for (const n of this.baseMutations) {
      if (n.key.isEqual(e.key)) {
        t = Ls(n, e, t, this.localWriteTime);
      }
    }
    for (const n of this.mutations) {
      if (n.key.isEqual(e.key)) {
        t = Ls(n, e, t, this.localWriteTime);
      }
    }
    return t;
  }
  applyToLocalDocumentSet(e, t) {
    const n = oa();
    this.mutations.forEach(r => {
      const s = e.get(r.key);
      const i = s.overlayedDocument;
      let a = this.applyToLocalView(i, s.mutatedFields);
      a = t.has(r.key) ? null : a;
      const o = Ss(i, a);
      if (o !== null) {
        n.set(r.key, o);
      }
      if (!i.isValidDocument()) {
        i.convertToNoDocument(di.min());
      }
    });
    return n;
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), la());
  }
  isEqual(e) {
    return this.batchId === e.batchId && Gt(this.mutations, e.mutations, (e, t) => ks(e, t)) && Gt(this.baseMutations, e.baseMutations, (e, t) => ks(e, t));
  }
};
var sh = class e {
  constructor(e, t, n, r) {
    this.batch = e;
    this.commitVersion = t;
    this.mutationResults = n;
    this.docVersions = r;
  }
  static from(t, n, r) {
    Nt(t.mutations.length === r.length, 58842, {
      Ji: t.mutations.length,
      Yi: r.length
    });
    let s = ua;
    const i = t.mutations;
    for (let e = 0; e < i.length; e++) {
      s = s.insert(i[e].key, r[e].version);
    }
    return new e(t, n, r, s);
  }
};
function ih(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    if (t.length > 0) {
      t = oh(t);
    }
    t = ah(e.get(n), t);
  }
  return oh(t);
}
function ah(e, t) {
  let n = t;
  const r = e.length;
  for (let s = 0; s < r; s++) {
    const t = e.charAt(s);
    switch (t) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += t;
    }
  }
  return n;
}
function oh(e) {
  return e + "";
}
function Bh(e) {
  const t = e.length;
  Nt(t >= 2, 64408, {
    path: e
  });
  if (t === 2) {
    Nt(e.charAt(0) === "" && e.charAt(1) === "", 56145, {
      path: e
    });
    return Yt.emptyPath();
  }
  const n = t - 2;
  const r = [];
  let s = "";
  for (let i = 0; i < t;) {
    const t = e.indexOf("", i);
    if (t < 0 || t > n) {
      Tt(50515, {
        path: e
      });
    }
    switch (e.charAt(t + 1)) {
      case "":
        const n = e.substring(i, t);
        let a;
        if (s.length === 0) {
          a = n;
        } else {
          s += n;
          a = s;
          s = "";
        }
        r.push(a);
        break;
      case "":
        s += e.substring(i, t);
        s += "\0";
        break;
      case "":
        s += e.substring(i, t + 1);
        break;
      default:
        Tt(61167, {
          path: e
        });
    }
    i = t + 2;
  }
  return new Yt(r);
}
var uh = "remoteDocuments";
var ch = "owner";
var lh = "owner";
var hh = "mutationQueues";
var Ch = "mutations";
var dh = "batchId";
var fh = "userMutationsIndex";
var ph = ["userId", "batchId"];
function gh(e, t) {
  return [e, ih(t)];
}
function mh(e, t, n) {
  return [e, ih(t), n];
}
var Eh = {};
var Dh = "documentMutations";
var wh = "remoteDocumentsV14";
var yh = ["prefixPath", "collectionGroup", "readTime", "documentId"];
var _h = "documentKeyIndex";
var Ih = ["prefixPath", "collectionGroup", "documentId"];
var vh = "collectionGroupIndex";
var Th = ["collectionGroup", "readTime", "prefixPath", "documentId"];
var bh = "remoteDocumentGlobal";
var Nh = "remoteDocumentGlobalKey";
var Ah = "targets";
var Fh = "queryTargetsIndex";
var Oh = ["canonicalId", "targetId"];
var Sh = "targetDocuments";
var xh = ["targetId", "path"];
var Lh = "documentTargetsIndex";
var Rh = ["path", "targetId"];
var kh = "targetGlobalKey";
var Gh = "targetGlobal";
var Ph = "collectionParents";
var Mh = ["collectionId", "parent"];
var Vh = "clientMetadata";
var Hh = "bundles";
var Uh = "namedQueries";
var qh = "indexConfiguration";
var Jh = "collectionGroupIndex";
var Kh = "indexState";
var jh = ["indexId", "uid"];
var Qh = "sequenceNumberIndex";
var zh = ["uid", "sequenceNumber"];
var Yh = "indexEntries";
var Wh = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"];
var $h = "documentKeyIndex";
var Xh = ["indexId", "uid", "orderedDocumentKey"];
var Zh = "documentOverlays";
var eC = ["userId", "collectionPath", "documentId"];
var tC = "collectionPathOverlayIndex";
var nC = ["userId", "collectionPath", "largestBatchId"];
var rC = "collectionGroupOverlayIndex";
var sC = ["userId", "collectionGroup", "largestBatchId"];
var iC = "globals";
var aC = [hh, Ch, Dh, uh, Ah, ch, Gh, Sh, Vh, bh, Ph, Hh, Uh];
var oC = [...aC, Zh];
var BC = [hh, Ch, Dh, wh, Ah, ch, Gh, Sh, Vh, bh, Ph, Hh, Uh, Zh];
var uC = BC;
var cC = [...uC, qh, Kh, Yh];
var lC = cC;
var hC = [...cC, iC];
var CC = hC;
function dC(e, t, n) {
  const r = e.store(Ch);
  const s = e.store(Dh);
  const i = [];
  const a = IDBKeyRange.only(n.batchId);
  let o = 0;
  const B = r._i({
    range: a
  }, (e, t, n) => {
    o++;
    return n.delete();
  });
  i.push(B.next(() => {
    Nt(o === 1, 47070, {
      batchId: n.batchId
    });
  }));
  const u = [];
  for (const c of n.mutations) {
    const e = mh(t, c.key.path, n.batchId);
    i.push(s.delete(e));
    u.push(c.key);
  }
  return lB.waitFor(i).next(() => u);
}
function fC(e) {
  if (!e) {
    return 0;
  }
  let t;
  if (e.document) {
    t = e.document;
  } else if (e.unknownDocument) {
    t = e.unknownDocument;
  } else {
    if (!e.noDocument) {
      throw Tt(14731);
    }
    t = e.noDocument;
  }
  return JSON.stringify(t).length;
}
var pC = class extends uB {
  constructor(e, t) {
    super();
    this.Zi = e;
    this.currentSequenceNumber = t;
  }
};
function gC(e, t) {
  const n = At(e);
  return dB.qr(n.Zi, t);
}
var mC = class {
  constructor(e, t) {
    this.largestBatchId = e;
    this.mutation = t;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`;
  }
};
var EC = class e {
  constructor(e, t, n, r, s = di.min(), i = di.min(), a = mn.EMPTY_BYTE_STRING, o = null) {
    this.target = e;
    this.targetId = t;
    this.purpose = n;
    this.sequenceNumber = r;
    this.snapshotVersion = s;
    this.lastLimboFreeSnapshotVersion = i;
    this.resumeToken = a;
    this.expectedCount = o;
  }
  withSequenceNumber(t) {
    return new e(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  withResumeToken(t, n) {
    return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, t, null);
  }
  withExpectedCount(t) {
    return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t);
  }
  withLastLimboFreeSnapshotVersion(t) {
    return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken, this.expectedCount);
  }
};
var DC = class {
  constructor(e) {
    this.Xi = e;
  }
};
function wC(e, t) {
  const n = t.key;
  const r = {
    prefixPath: n.getCollectionPath().popLast().toArray(),
    collectionGroup: n.collectionGroup,
    documentId: n.path.lastSegment(),
    readTime: yC(t.readTime),
    hasCommittedMutations: t.hasCommittedMutations
  };
  if (t.isFoundDocument()) {
    r.document = function (e, t) {
      return {
        name: qa(e, t.key),
        fields: t.data.value.mapValue.fields,
        updateTime: Ra(e, t.version.toTimestamp()),
        createTime: Ra(e, t.createTime.toTimestamp())
      };
    }(e.Xi, t);
  } else if (t.isNoDocument()) {
    r.noDocument = {
      path: n.path.toArray(),
      readTime: _C(t.version)
    };
  } else {
    if (!t.isUnknownDocument()) {
      return Tt(57904, {
        document: t
      });
    }
    r.unknownDocument = {
      path: n.path.toArray(),
      version: _C(t.version)
    };
  }
  return r;
}
function yC(e) {
  const t = e.toTimestamp();
  return [t.seconds, t.nanoseconds];
}
function _C(e) {
  const t = e.toTimestamp();
  return {
    seconds: t.seconds,
    nanoseconds: t.nanoseconds
  };
}
function IC(e) {
  const t = new pn(e.seconds, e.nanoseconds);
  return di.fromTimestamp(t);
}
function vC(e, t) {
  const n = (t.baseMutations || []).map(t => Xa(e.Xi, t));
  for (let i = 0; i < t.mutations.length - 1; ++i) {
    const e = t.mutations[i];
    if (i + 1 < t.mutations.length && t.mutations[i + 1].transform !== undefined) {
      e.updateTransforms = t.mutations[i + 1].transform.fieldTransforms;
      t.mutations.splice(i + 1, 1);
      ++i;
    }
  }
  const r = t.mutations.map(t => Xa(e.Xi, t));
  const s = pn.fromMillis(t.localWriteTimeMs);
  return new rh(t.batchId, s, n, r);
}
function TC(e, t) {
  const n = IC(t.readTime);
  const r = t.lastLimboFreeSnapshotVersion !== undefined ? IC(t.lastLimboFreeSnapshotVersion) : di.min();
  let s;
  s = function (e) {
    return e.structuredPipeline !== undefined;
  }(t.query) ? function (e, t) {
    const n = e.structuredPipeline;
    Nt((n?.pipeline?.stages ?? []).length > 0, 1845);
    const r = n?.pipeline?.stages.map(SC);
    return new tc(t, r);
  }(t.query, e.Xi) : function (e) {
    return e.documents !== undefined;
  }(t.query) ? function (e) {
    const t = e.documents.length;
    Nt(t === 1, 1966, {
      count: t
    });
    return Hi(Gi(ja(e.documents[0])));
  }(t.query) : function (e) {
    return Hi(to(e));
  }(t.query);
  return new EC(s, t.targetId, "TargetPurposeListen", t.lastListenSequenceNumber, n, r, mn.fromBase64String(t.resumeToken));
}
function bC(e, t) {
  const n = _C(t.snapshotVersion);
  const r = _C(t.lastLimboFreeSnapshotVersion);
  let s;
  s = Fi(t.target) ? no(e.Xi, t.target) : Oi(t.target) ? Za(e.Xi, t.target) : eo(e.Xi, t.target).Lt;
  const i = t.resumeToken.toBase64();
  return {
    targetId: t.targetId,
    canonicalId: th(t.target),
    readTime: n,
    resumeToken: i,
    lastListenSequenceNumber: t.sequenceNumber,
    lastLimboFreeSnapshotVersion: r,
    query: s
  };
}
function NC(e) {
  const t = to({
    parent: e.parent,
    structuredQuery: e.structuredQuery
  });
  if (e.limitType === "LAST") {
    return qi(t, t.limit, "L");
  } else {
    return t;
  }
}
function AC(e, t) {
  return new mC(t.largestBatchId, Xa(e.Xi, t.overlayMutation));
}
function FC(e, t) {
  const n = t.path.lastSegment();
  return [e, ih(t.path.popLast()), n];
}
function OC(e, t, n, r) {
  return {
    indexId: e,
    uid: t,
    sequenceNumber: n,
    readTime: _C(r.readTime),
    documentKey: ih(r.documentKey.path),
    largestBatchId: r.largestBatchId
  };
}
function SC(e) {
  switch (e.name) {
    case "collection":
      return new Ju(e.args[0].referenceValue, {});
    case "collection_group":
      return new Ku(e.args[1].stringValue, {});
    case "database":
      return new ju({});
    case "documents":
      return new Qu(e.args.map(e => e.referenceValue), {});
    case "where":
      return new zu(xC(e.args[0]), {});
    case "limit":
      {
        const t = e.args[0].integerValue ?? e.args[0].doubleValue;
        return new Yu(typeof t == "number" ? t : Number(t), {});
      }
    case "sort":
      return new Xu(e.args.map(e => function (e) {
        const t = e.mapValue?.fields;
        return new Ru(xC(t.expression), t.direction?.stringValue, "orderingFromProto");
      }(e)), {});
    default:
      throw new Error(`Stage type: ${e.name} not supported.`);
  }
}
function xC(e) {
  if (e.fieldReferenceValue) {
    return new vu(cu("_exprFromProto", e.fieldReferenceValue), "_exprFromProto");
  } else if (e.functionValue) {
    return function (e) {
      return new Fu(e.functionValue.name, e.functionValue.args?.map(xC) || []);
    }(e);
  } else {
    return bu._fromProto(e);
  }
}
var LC = class e {
  constructor(e, t, n, r) {
    this.userId = e;
    this.serializer = t;
    this.indexManager = n;
    this.referenceDelegate = r;
    this.es = {};
  }
  static ts(t, n, r, s) {
    Nt(t.uid !== "", 64387);
    const i = t.isAuthenticated() ? t.uid : "";
    return new e(i, n, r, s);
  }
  checkEmpty(e) {
    let t = true;
    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return kC(e)._i({
      index: fh,
      range: n
    }, (e, n, r) => {
      t = false;
      r.done();
    }).next(() => t);
  }
  addMutationBatch(e, t, n, r) {
    const s = GC(e);
    const i = kC(e);
    return i.add({}).next(a => {
      Nt(typeof a == "number", 49019);
      const o = new rh(a, t, n, r);
      const B = function (e, t, n) {
        const r = n.baseMutations.map(t => $a(e.Xi, t));
        const s = n.mutations.map(t => $a(e.Xi, t));
        return {
          userId: t,
          batchId: n.batchId,
          localWriteTimeMs: n.localWriteTime.toMillis(),
          baseMutations: r,
          mutations: s
        };
      }(this.serializer, this.userId, o);
      const u = [];
      let c = new Ut((e, t) => St(e.canonicalString(), t.canonicalString()));
      for (const e of r) {
        const t = mh(this.userId, e.key.path, a);
        c = c.add(e.key.path.popLast());
        u.push(i.put(B));
        u.push(s.put(t, Eh));
      }
      c.forEach(t => {
        u.push(this.indexManager.addToCollectionParentIndex(e, t));
      });
      e.addOnCommittedListener(() => {
        this.es[a] = o.keys();
      });
      return lB.waitFor(u).next(() => o);
    });
  }
  lookupMutationBatch(e, t) {
    return kC(e).get(t).next(e => e ? (Nt(e.userId === this.userId, 48, "Unexpected user for mutation batch", {
      userId: e.userId,
      batchId: t
    }), vC(this.serializer, e)) : null);
  }
  ns(e, t) {
    if (this.es[t]) {
      return lB.resolve(this.es[t]);
    } else {
      return this.lookupMutationBatch(e, t).next(e => {
        if (e) {
          const n = e.keys();
          this.es[t] = n;
          return n;
        }
        return null;
      });
    }
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const n = t + 1;
    const r = IDBKeyRange.lowerBound([this.userId, n]);
    let s = null;
    return kC(e)._i({
      index: fh,
      range: r
    }, (e, t, r) => {
      if (t.userId === this.userId) {
        Nt(t.batchId >= n, 47524, {
          rs: n
        });
        s = vC(this.serializer, t);
      }
      r.done();
    }).next(() => s);
  }
  getHighestUnacknowledgedBatchId(e) {
    const t = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n = Hn;
    return kC(e)._i({
      index: fh,
      range: t,
      reverse: true
    }, (e, t, r) => {
      n = t.batchId;
      r.done();
    }).next(() => n);
  }
  getAllMutationBatches(e) {
    const t = IDBKeyRange.bound([this.userId, Hn], [this.userId, Number.POSITIVE_INFINITY]);
    return kC(e).ti(fh, t).next(e => e.map(e => vC(this.serializer, e)));
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const n = gh(this.userId, t.path);
    const r = IDBKeyRange.lowerBound(n);
    const s = [];
    return GC(e)._i({
      range: r
    }, (n, r, i) => {
      const [a, o, B] = n;
      const u = Bh(o);
      if (a === this.userId && t.path.isEqual(u)) {
        return kC(e).get(B).next(e => {
          if (!e) {
            throw Tt(61480, {
              ss: n,
              batchId: B
            });
          }
          Nt(e.userId === this.userId, 10503, "Unexpected user for mutation batch", {
            userId: e.userId,
            batchId: B
          });
          s.push(vC(this.serializer, e));
        });
      }
      i.done();
    }).next(() => s);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let n = new Ut(St);
    const r = [];
    t.forEach(t => {
      const s = gh(this.userId, t.path);
      const i = IDBKeyRange.lowerBound(s);
      const a = GC(e)._i({
        range: i
      }, (e, r, s) => {
        const [i, a, o] = e;
        const B = Bh(a);
        if (i === this.userId && t.path.isEqual(B)) {
          n = n.add(o);
        } else {
          s.done();
        }
      });
      r.push(a);
    });
    return lB.waitFor(r).next(() => this._s(e, n));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const n = t.path;
    const r = n.length + 1;
    const s = gh(this.userId, n);
    const i = IDBKeyRange.lowerBound(s);
    let a = new Ut(St);
    return GC(e)._i({
      range: i
    }, (e, t, s) => {
      const [i, o, B] = e;
      const u = Bh(o);
      if (i === this.userId && n.isPrefixOf(u)) {
        if (u.length === r) {
          a = a.add(B);
        }
      } else {
        s.done();
      }
    }).next(() => this._s(e, a));
  }
  _s(e, t) {
    const n = [];
    const r = [];
    t.forEach(t => {
      r.push(kC(e).get(t).next(e => {
        if (e === null) {
          throw Tt(35274, {
            batchId: t
          });
        }
        Nt(e.userId === this.userId, 9748, "Unexpected user for mutation batch", {
          userId: e.userId,
          batchId: t
        });
        n.push(vC(this.serializer, e));
      }));
    });
    return lB.waitFor(r).next(() => n);
  }
  removeMutationBatch(e, t) {
    return dC(e.Zi, this.userId, t).next(n => {
      e.addOnCommittedListener(() => {
        this.us(t.batchId);
      });
      return lB.forEach(n, t => this.referenceDelegate.markPotentiallyOrphaned(e, t));
    });
  }
  us(e) {
    delete this.es[e];
  }
  performConsistencyCheck(e) {
    return this.checkEmpty(e).next(t => {
      if (!t) {
        return lB.resolve();
      }
      const n = IDBKeyRange.lowerBound(function (e) {
        return [e];
      }(this.userId));
      const r = [];
      return GC(e)._i({
        range: n
      }, (e, t, n) => {
        if (e[0] === this.userId) {
          const t = Bh(e[1]);
          r.push(t);
        } else {
          n.done();
        }
      }).next(() => {
        Nt(r.length === 0, 56720, {
          cs: r.map(e => e.canonicalString())
        });
      });
    });
  }
  containsKey(e, t) {
    return RC(e, this.userId, t);
  }
  ls(e) {
    return PC(e).get(this.userId).next(e => e || {
      userId: this.userId,
      lastAcknowledgedBatchId: Hn,
      lastStreamToken: ""
    });
  }
};
function RC(e, t, n) {
  const r = gh(t, n.path);
  const s = r[1];
  const i = IDBKeyRange.lowerBound(r);
  let a = false;
  return GC(e)._i({
    range: i,
    si: true
  }, (e, n, r) => {
    const [i, o, B] = e;
    if (i === t && o === s) {
      a = true;
    }
    r.done();
  }).next(() => a);
}
function kC(e) {
  return gC(e, Ch);
}
function GC(e) {
  return gC(e, Dh);
}
function PC(e) {
  return gC(e, hh);
}
var MC = class {
  getBundleMetadata(e, t) {
    return VC(e).get(t).next(e => {
      if (e) {
        return function (e) {
          return {
            id: e.bundleId,
            createTime: IC(e.createTime),
            version: e.version
          };
        }(e);
      }
    });
  }
  saveBundleMetadata(e, t) {
    return VC(e).put(function (e) {
      return {
        bundleId: e.id,
        createTime: _C(Ma(e.createTime)),
        version: e.version
      };
    }(t));
  }
  getNamedQuery(e, t) {
    return HC(e).get(t).next(e => {
      if (e) {
        return function (e) {
          return {
            name: e.name,
            query: NC(e.bundledQuery),
            readTime: IC(e.readTime)
          };
        }(e);
      }
    });
  }
  saveNamedQuery(e, t) {
    return HC(e).put(function (e) {
      return {
        name: e.name,
        readTime: _C(Ma(e.readTime)),
        bundledQuery: e.bundledQuery
      };
    }(t));
  }
};
function VC(e) {
  return gC(e, Hh);
}
function HC(e) {
  return gC(e, Uh);
}
var UC = class e {
  constructor(e, t) {
    this.serializer = e;
    this.userId = t;
  }
  static ts(t, n) {
    const r = n.uid || "";
    return new e(t, r);
  }
  getOverlay(e, t) {
    return qC(e).get(FC(this.userId, t)).next(e => e ? AC(this.serializer, e) : null);
  }
  getOverlays(e, t) {
    const n = aa();
    return lB.forEach(t, t => this.getOverlay(e, t).next(e => {
      if (e !== null) {
        n.set(t, e);
      }
    })).next(() => n);
  }
  getAllOverlays(e, t) {
    const n = aa();
    return qC(e)._i((e, r) => {
      const s = AC(this.serializer, r);
      if (s.largestBatchId > t) {
        n.set(s.getKey(), s);
      }
    }).next(() => n);
  }
  saveOverlays(e, t, n) {
    const r = [];
    n.forEach((n, s) => {
      const i = new mC(t, s);
      r.push(this.Es(e, i));
    });
    return lB.waitFor(r);
  }
  removeOverlaysForBatchId(e, t, n) {
    const r = new Set();
    t.forEach(e => r.add(ih(e.getCollectionPath())));
    const s = [];
    r.forEach(t => {
      const r = IDBKeyRange.bound([this.userId, t, n], [this.userId, t, n + 1], false, true);
      s.push(qC(e).ii(tC, r));
    });
    return lB.waitFor(s);
  }
  getOverlaysForCollection(e, t, n) {
    const r = aa();
    const s = ih(t);
    const i = IDBKeyRange.bound([this.userId, s, n], [this.userId, s, Number.POSITIVE_INFINITY], true);
    return qC(e).ti(tC, i).next(e => {
      for (const t of e) {
        const e = AC(this.serializer, t);
        r.set(e.getKey(), e);
      }
      return r;
    });
  }
  getOverlaysForCollectionGroup(e, t, n, r) {
    const s = aa();
    let i;
    const a = IDBKeyRange.bound([this.userId, t, n], [this.userId, t, Number.POSITIVE_INFINITY], true);
    return qC(e)._i({
      index: rC,
      range: a
    }, (e, t, n) => {
      const a = AC(this.serializer, t);
      if (s.size() < r || a.largestBatchId === i) {
        s.set(a.getKey(), a);
        i = a.largestBatchId;
      } else {
        n.done();
      }
    }).next(() => s);
  }
  Es(e, t) {
    return qC(e).put(function (e, t, n) {
      const [r, s, i] = FC(t, n.mutation.key);
      return {
        userId: t,
        collectionPath: s,
        documentId: i,
        collectionGroup: n.mutation.key.getCollectionGroup(),
        largestBatchId: n.largestBatchId,
        overlayMutation: $a(e.Xi, n.mutation)
      };
    }(this.serializer, this.userId, t));
  }
};
function qC(e) {
  return gC(e, Zh);
}
var JC = class {
  hs(e) {
    return gC(e, iC);
  }
  getSessionToken(e) {
    return this.hs(e).get("sessionToken").next(e => {
      const t = e?.value;
      if (t) {
        return mn.fromUint8Array(t);
      } else {
        return mn.EMPTY_BYTE_STRING;
      }
    });
  }
  setSessionToken(e, t) {
    return this.hs(e).put({
      name: "sessionToken",
      value: t.toUint8Array()
    });
  }
};
var KC = class {
  constructor() {}
  Ts(e, t) {
    this.Ps(e, t);
    t.Is();
  }
  Ps(e, t) {
    if ("nullValue" in e) {
      this.Rs(t, 5);
    } else if ("booleanValue" in e) {
      this.Rs(t, 10);
      t.As(e.booleanValue ? 1 : 0);
    } else if ("integerValue" in e) {
      this.Rs(t, 15);
      t.As(wn(e.integerValue));
    } else if ("doubleValue" in e) {
      const n = wn(e.doubleValue);
      this.Vs(n, t);
    } else if ("timestampValue" in e) {
      this.ds(e.timestampValue, t);
    } else if ("stringValue" in e) {
      this.fs(e.stringValue, t);
      this.ps(t);
    } else if ("bytesValue" in e) {
      this.Rs(t, 30);
      t.gs(yn(e.bytesValue));
      this.ps(t);
    } else if ("referenceValue" in e) {
      this.ys(e.referenceValue, t);
    } else if ("geoPointValue" in e) {
      this.ws(e.geoPointValue, t);
    } else if ("mapValue" in e) {
      const n = Zr(e);
      if (n === jn.fe) {
        this.Rs(t, Number.MAX_SAFE_INTEGER);
      } else if (n === jn.me) {
        this.bs(e.mapValue, t);
      } else if (n === jn.de) {
        this.Rs(t, 999);
      } else if (n === jn.Ve) {
        this.Rs(t, 7);
      } else if (n === jn.Ae) {
        const n = e.mapValue?.fields?.[ur]?.bytesValue;
        const r = yn(n).toUint8Array();
        if (r[0] === 0) {
          const e = r.slice(1);
          this.Rs(t, 30);
          t.gs(mn.fromUint8Array(e));
          this.ps(t);
        } else {
          this.Ss(e.mapValue, t);
        }
      } else if (n === jn.he) {
        this.xs(e.mapValue, t);
      } else if (n === jn.Re) {
        this.vs(e.mapValue, t);
      } else if (n === jn.Te) {
        this.Ds(e.mapValue, t);
      } else if (n === jn.Pe) {
        this.Cs(e.mapValue, t);
      } else if (n === jn.Ie) {
        const n = parseFloat(e.mapValue.fields[ir].stringValue);
        this.Vs(n, t);
      } else {
        this.Fs(e.mapValue, t);
        this.ps(t);
      }
    } else if ("arrayValue" in e) {
      this.Os(e.arrayValue, t);
      this.ps(t);
    } else {
      Tt(19022, {
        Ms: e
      });
    }
  }
  fs(e, t) {
    this.Rs(t, 25);
    this.Ns(e, t);
  }
  Ns(e, t) {
    t.Bs(e);
  }
  Vs(e, t) {
    if (isNaN(e)) {
      this.Rs(t, 13);
    } else {
      this.Rs(t, 15);
      if (qn(e)) {
        t.As(0);
      } else {
        t.As(e);
      }
    }
  }
  Cs(e, t) {
    this.Rs(t, 15);
    t.As(wn(e.fields[sr].integerValue));
  }
  ds(e, t) {
    this.Rs(t, 20);
    if (typeof e == "string") {
      e = Dn(e);
    }
    t.Bs(`${e.seconds || ""}`);
    t.As(e.nanos || 0);
  }
  ws(e, t) {
    this.Rs(t, 45);
    t.As(e.latitude || 0);
    t.As(e.longitude || 0);
  }
  Fs(e, t) {
    const n = e.fields || {};
    this.Rs(t, 55);
    for (const r of Object.keys(n)) {
      this.fs(r, t);
      this.Ps(n[r], t);
    }
  }
  bs(e, t) {
    const n = e.fields || {};
    this.Rs(t, 53);
    const r = Wn;
    const s = n[r].arrayValue?.values?.length || 0;
    this.Rs(t, 15);
    t.As(wn(s));
    this.fs(r, t);
    this.Ps(n[r], t);
  }
  Os(e, t) {
    const n = e.values || [];
    this.Rs(t, 50);
    for (const r of n) {
      this.Ps(r, t);
    }
  }
  ys(e, t) {
    this.Rs(t, 37);
    const n = e.split("/").filter(e => e.length > 0);
    nn.fromSegments(n.slice(5)).path.forEach(e => {
      this.Rs(t, 60);
      this.Ns(e, t);
    });
  }
  Rs(e, t) {
    e.As(t);
  }
  ps(e) {
    e.As(2);
  }
  vs(e, t) {
    this.Rs(t, 22);
    const n = e.fields || {};
    if (n) {
      this.Fs(n[ar].mapValue, t);
    }
  }
  Ds(e, t) {
    this.Rs(t, 43);
    const n = (e.fields || {})[rr]?.stringValue || "";
    t.gs(yn(n));
  }
  Ss(e, t) {
    this.Rs(t, 31);
    const n = (e.fields || {})[ur]?.bytesValue || "";
    t.gs(yn(n));
    this.ps(t);
  }
  xs(e, t) {
    this.Rs(t, 47);
    const n = (e.fields || {})[er]?.mapValue?.fields || {};
    if (n) {
      t.Bs(n[tr]?.stringValue || "");
      t.Bs(n[nr]?.stringValue || "");
    }
    this.ps(t);
  }
};
KC.Ls = new KC();
var jC = 255;
function QC(e) {
  if (e === 0) {
    return 8;
  }
  let t = 0;
  if (!(e >> 4)) {
    t += 4;
    e <<= 4;
  }
  if (!(e >> 6)) {
    t += 2;
    e <<= 2;
  }
  if (!(e >> 7)) {
    t += 1;
  }
  return t;
}
function zC(e) {
  const t = 64 - function (e) {
    let t = 0;
    for (let n = 0; n < 8; ++n) {
      const r = QC(e[n] & 255);
      t += r;
      if (r !== 8) {
        break;
      }
    }
    return t;
  }(e);
  return Math.ceil(t / 8);
}
var YC = class {
  constructor() {
    this.buffer = new Uint8Array(1024);
    this.position = 0;
  }
  $s(e) {
    const t = e[Symbol.iterator]();
    let n = t.next();
    while (!n.done) {
      this.Us(n.value);
      n = t.next();
    }
    this.ks();
  }
  Qs(e) {
    const t = e[Symbol.iterator]();
    let n = t.next();
    while (!n.done) {
      this.qs(n.value);
      n = t.next();
    }
    this.Ks();
  }
  Ws(e) {
    for (const t of e) {
      const e = t.charCodeAt(0);
      if (e < 128) {
        this.Us(e);
      } else if (e < 2048) {
        this.Us(e >>> 6 | 960);
        this.Us(e & 63 | 128);
      } else if (t < "\uD800" || t > "\uDBFF") {
        this.Us(e >>> 12 | 480);
        this.Us(e >>> 6 & 63 | 128);
        this.Us(e & 63 | 128);
      } else {
        const e = t.codePointAt(0);
        this.Us(e >>> 18 | 240);
        this.Us(e >>> 12 & 63 | 128);
        this.Us(e >>> 6 & 63 | 128);
        this.Us(e & 63 | 128);
      }
    }
    this.ks();
  }
  Gs(e) {
    for (const t of e) {
      const e = t.charCodeAt(0);
      if (e < 128) {
        this.qs(e);
      } else if (e < 2048) {
        this.qs(e >>> 6 | 960);
        this.qs(e & 63 | 128);
      } else if (t < "\uD800" || t > "\uDBFF") {
        this.qs(e >>> 12 | 480);
        this.qs(e >>> 6 & 63 | 128);
        this.qs(e & 63 | 128);
      } else {
        const e = t.codePointAt(0);
        this.qs(e >>> 18 | 240);
        this.qs(e >>> 12 & 63 | 128);
        this.qs(e >>> 6 & 63 | 128);
        this.qs(e & 63 | 128);
      }
    }
    this.Ks();
  }
  js(e) {
    const t = this.zs(e);
    const n = zC(t);
    this.Hs(1 + n);
    this.buffer[this.position++] = n & 255;
    for (let r = t.length - n; r < t.length; ++r) {
      this.buffer[this.position++] = t[r] & 255;
    }
  }
  Js(e) {
    const t = this.zs(e);
    const n = zC(t);
    this.Hs(1 + n);
    this.buffer[this.position++] = ~(n & 255);
    for (let r = t.length - n; r < t.length; ++r) {
      this.buffer[this.position++] = ~(t[r] & 255);
    }
  }
  Ys() {
    this.Zs(jC);
    this.Zs(255);
  }
  Xs() {
    this.e_(jC);
    this.e_(255);
  }
  reset() {
    this.position = 0;
  }
  seed(e) {
    this.Hs(e.length);
    this.buffer.set(e, this.position);
    this.position += e.length;
  }
  t_() {
    return this.buffer.slice(0, this.position);
  }
  zs(e) {
    const t = function (e) {
      const t = new DataView(new ArrayBuffer(8));
      t.setFloat64(0, e, false);
      return new Uint8Array(t.buffer);
    }(e);
    const n = !!(t[0] & 128);
    t[0] ^= n ? 255 : 128;
    for (let r = 1; r < t.length; ++r) {
      t[r] ^= n ? 255 : 0;
    }
    return t;
  }
  Us(e) {
    const t = e & 255;
    if (t === 0) {
      this.Zs(0);
      this.Zs(255);
    } else if (t === jC) {
      this.Zs(jC);
      this.Zs(0);
    } else {
      this.Zs(t);
    }
  }
  qs(e) {
    const t = e & 255;
    if (t === 0) {
      this.e_(0);
      this.e_(255);
    } else if (t === jC) {
      this.e_(jC);
      this.e_(0);
    } else {
      this.e_(e);
    }
  }
  ks() {
    this.Zs(0);
    this.Zs(1);
  }
  Ks() {
    this.e_(0);
    this.e_(1);
  }
  Zs(e) {
    this.Hs(1);
    this.buffer[this.position++] = e;
  }
  e_(e) {
    this.Hs(1);
    this.buffer[this.position++] = ~e;
  }
  Hs(e) {
    const t = e + this.position;
    if (t <= this.buffer.length) {
      return;
    }
    let n = this.buffer.length * 2;
    if (n < t) {
      n = t;
    }
    const r = new Uint8Array(n);
    r.set(this.buffer);
    this.buffer = r;
  }
};
var WC = class {
  constructor(e) {
    this.n_ = e;
  }
  gs(e) {
    this.n_.$s(e);
  }
  Bs(e) {
    this.n_.Ws(e);
  }
  As(e) {
    this.n_.js(e);
  }
  Is() {
    this.n_.Ys();
  }
};
var $C = class {
  constructor(e) {
    this.n_ = e;
  }
  gs(e) {
    this.n_.Qs(e);
  }
  Bs(e) {
    this.n_.Gs(e);
  }
  As(e) {
    this.n_.Js(e);
  }
  Is() {
    this.n_.Xs();
  }
};
var XC = class {
  constructor() {
    this.n_ = new YC();
    this.ascending = new WC(this.n_);
    this.descending = new $C(this.n_);
  }
  seed(e) {
    this.n_.seed(e);
  }
  r_(e) {
    if (e === 0) {
      return this.ascending;
    } else {
      return this.descending;
    }
  }
  t_() {
    return this.n_.t_();
  }
  reset() {
    this.n_.reset();
  }
};
var ZC = class e {
  constructor(e, t, n, r) {
    this.i_ = e;
    this.s_ = t;
    this.__ = n;
    this.o_ = r;
  }
  a_() {
    const t = this.o_.length;
    const n = t === 0 || this.o_[t - 1] === 255 ? t + 1 : t;
    const r = new Uint8Array(n);
    r.set(this.o_, 0);
    if (n !== t) {
      r.set([0], this.o_.length);
    } else {
      ++r[r.length - 1];
    }
    return new e(this.i_, this.s_, this.__, r);
  }
  u_(e, t, n) {
    return {
      indexId: this.i_,
      uid: e,
      arrayValue: nd(this.__),
      directionalValue: nd(this.o_),
      orderedDocumentKey: nd(t),
      documentKey: n.path.toArray()
    };
  }
  c_(e, t, n) {
    const r = this.u_(e, t, n);
    return [r.indexId, r.uid, r.arrayValue, r.directionalValue, r.orderedDocumentKey, r.documentKey];
  }
};
function ed(e, t) {
  let n = e.i_ - t.i_;
  if (n !== 0) {
    return n;
  } else {
    n = td(e.__, t.__);
    if (n !== 0) {
      return n;
    } else {
      n = td(e.o_, t.o_);
      if (n !== 0) {
        return n;
      } else {
        return nn.comparator(e.s_, t.s_);
      }
    }
  }
}
function td(e, t) {
  for (let n = 0; n < e.length && n < t.length; ++n) {
    const r = e[n] - t[n];
    if (r !== 0) {
      return r;
    }
  }
  return e.length - t.length;
}
function nd(e) {
  if (n()) {
    return function (e) {
      let t = "";
      for (let n = 0; n < e.length; n++) {
        t += String.fromCharCode(e[n]);
      }
      return t;
    }(e);
  } else {
    return e;
  }
}
function rd(e) {
  if (typeof e != "string") {
    return e;
  } else {
    return function (e) {
      const t = new Uint8Array(e.length);
      for (let n = 0; n < e.length; n++) {
        t[n] = e.charCodeAt(n);
      }
      return t;
    }(e);
  }
}
var sd = class {
  constructor(e) {
    this.l_ = new Ut((e, t) => $t.comparator(e.field, t.field));
    this.collectionId = e.collectionGroup ?? e.path.lastSegment();
    this.E_ = e.orderBy;
    this.h_ = [];
    for (const t of e.filters) {
      const e = t;
      if (e.isInequality()) {
        this.l_ = this.l_.add(e);
      } else {
        this.h_.push(e);
      }
    }
  }
  get T_() {
    return this.l_.size > 1;
  }
  P_(e) {
    Nt(e.collectionGroup === this.collectionId, 49279);
    if (this.T_) {
      return false;
    }
    const t = mi(e);
    if (t !== undefined && !this.I_(t)) {
      return false;
    }
    const n = Ei(e);
    let r = new Set();
    let s = 0;
    let i = 0;
    for (; s < n.length && this.I_(n[s]); ++s) {
      r = r.add(n[s].fieldPath.canonicalString());
    }
    if (s === n.length) {
      return true;
    }
    if (this.l_.size > 0) {
      const e = this.l_.getIterator().getNext();
      if (!r.has(e.field.canonicalString())) {
        const t = n[s];
        if (!this.R_(e, t) || !this.A_(this.E_[i++], t)) {
          return false;
        }
      }
      ++s;
    }
    for (; s < n.length; ++s) {
      const e = n[s];
      if (i >= this.E_.length || !this.A_(this.E_[i++], e)) {
        return false;
      }
    }
    return true;
  }
  V_() {
    if (this.T_) {
      return null;
    }
    let e = new Ut($t.comparator);
    const t = [];
    for (const n of this.h_) {
      if (!n.field.isKeyField()) {
        if (n.op === "array-contains" || n.op === "array-contains-any") {
          t.push(new Di(n.field, 2));
        } else {
          if (e.has(n.field)) {
            continue;
          }
          e = e.add(n.field);
          t.push(new Di(n.field, 0));
        }
      }
    }
    for (const n of this.E_) {
      if (!n.field.isKeyField() && !e.has(n.field)) {
        e = e.add(n.field);
        t.push(new Di(n.field, n.dir === "asc" ? 0 : 1));
      }
    }
    return new gi(gi.UNKNOWN_ID, this.collectionId, t, wi.empty());
  }
  I_(e) {
    for (const t of this.h_) {
      if (this.R_(t, e)) {
        return true;
      }
    }
    return false;
  }
  R_(e, t) {
    if (e === undefined || !e.field.isEqual(t.fieldPath)) {
      return false;
    }
    const n = e.op === "array-contains" || e.op === "array-contains-any";
    return t.kind === 2 === n;
  }
  A_(e, t) {
    return !!e.field.isEqual(t.fieldPath) && (t.kind === 0 && e.dir === "asc" || t.kind === 1 && e.dir === "desc");
  }
};
function id(e) {
  Nt(e instanceof zs || e instanceof Ys, 20012);
  if (e instanceof zs) {
    if (e instanceof ui) {
      const t = e.value.arrayValue?.values?.map(t => zs.create(e.field, "==", t)) || [];
      return Ys.create(t, "or");
    }
    return e;
  }
  const t = e.filters.map(e => id(e));
  return Ys.create(t, e.op);
}
function ad(e) {
  if (e.getFilters().length === 0) {
    return [];
  }
  const t = cd(id(e));
  Nt(ud(t), 7391);
  if (od(t) || Bd(t)) {
    return [t];
  } else {
    return t.getFilters();
  }
}
function od(e) {
  return e instanceof zs;
}
function Bd(e) {
  return e instanceof Ys && Xs(e);
}
function ud(e) {
  return od(e) || Bd(e) || function (e) {
    if (e instanceof Ys && $s(e)) {
      for (const t of e.getFilters()) {
        if (!od(t) && !Bd(t)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }(e);
}
function cd(e) {
  Nt(e instanceof zs || e instanceof Ys, 34018);
  if (e instanceof zs) {
    return e;
  }
  if (e.filters.length === 1) {
    return cd(e.filters[0]);
  }
  const t = e.filters.map(e => cd(e));
  let n = Ys.create(t, e.op);
  n = Cd(n);
  if (ud(n)) {
    return n;
  } else {
    Nt(n instanceof Ys, 64498);
    Nt(Ws(n), 40251);
    Nt(n.filters.length > 1, 57927);
    return n.filters.reduce((e, t) => ld(e, t));
  }
}
function ld(e, t) {
  let n;
  Nt(e instanceof zs || e instanceof Ys, 38388);
  Nt(t instanceof zs || t instanceof Ys, 25473);
  n = e instanceof zs ? t instanceof zs ? function (e, t) {
    return Ys.create([e, t], "and");
  }(e, t) : hd(e, t) : t instanceof zs ? hd(t, e) : function (e, t) {
    Nt(e.filters.length > 0 && t.filters.length > 0, 48005);
    if (Ws(e) && Ws(t)) {
      return ni(e, t.getFilters());
    }
    const n = $s(e) ? e : t;
    const r = $s(e) ? t : e;
    const s = n.filters.map(e => ld(e, r));
    return Ys.create(s, "or");
  }(e, t);
  return Cd(n);
}
function hd(e, t) {
  if (Ws(t)) {
    return ni(t, e.getFilters());
  }
  {
    const n = t.filters.map(t => ld(e, t));
    return Ys.create(n, "or");
  }
}
function Cd(e) {
  Nt(e instanceof zs || e instanceof Ys, 11850);
  if (e instanceof zs) {
    return e;
  }
  const t = e.getFilters();
  if (t.length === 1) {
    return Cd(t[0]);
  }
  if (Zs(e)) {
    return e;
  }
  const n = t.map(e => Cd(e));
  const r = [];
  n.forEach(t => {
    if (t instanceof zs) {
      r.push(t);
    } else if (t instanceof Ys) {
      if (t.op === e.op) {
        r.push(...t.filters);
      } else {
        r.push(t);
      }
    }
  });
  if (r.length === 1) {
    return r[0];
  } else {
    return Ys.create(r, e.op);
  }
}
var dd = class {
  constructor() {
    this.d_ = new fd();
  }
  addToCollectionParentIndex(e, t) {
    this.d_.add(t);
    return lB.resolve();
  }
  getCollectionParents(e, t) {
    return lB.resolve(this.d_.getEntries(t));
  }
  addFieldIndex(e, t) {
    return lB.resolve();
  }
  deleteFieldIndex(e, t) {
    return lB.resolve();
  }
  deleteAllFieldIndexes(e) {
    return lB.resolve();
  }
  createTargetIndexes(e, t) {
    return lB.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return lB.resolve(null);
  }
  getIndexType(e, t) {
    return lB.resolve(0);
  }
  getFieldIndexes(e, t) {
    return lB.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return lB.resolve(null);
  }
  getMinOffset(e, t) {
    return lB.resolve(Ii.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return lB.resolve(Ii.min());
  }
  updateCollectionGroup(e, t, n) {
    return lB.resolve();
  }
  updateIndexEntries(e, t) {
    return lB.resolve();
  }
};
var fd = class {
  constructor() {
    this.index = {};
  }
  add(e) {
    const t = e.lastSegment();
    const n = e.popLast();
    const r = this.index[t] || new Ut(Yt.comparator);
    const s = !r.has(n);
    this.index[t] = r.add(n);
    return s;
  }
  has(e) {
    const t = e.lastSegment();
    const n = e.popLast();
    const r = this.index[t];
    return r && r.has(n);
  }
  getEntries(e) {
    return (this.index[e] || new Ut(Yt.comparator)).toArray();
  }
};
var pd = "IndexedDbIndexManager";
var gd = new Uint8Array(0);
var md = class {
  constructor(e, t) {
    this.databaseId = t;
    this.f_ = new fd();
    this.m_ = new ea(e => Ni(e), (e, t) => Ai(e, t));
    this.uid = e.uid || "";
  }
  addToCollectionParentIndex(e, t) {
    if (!this.f_.has(t)) {
      const n = t.lastSegment();
      const r = t.popLast();
      e.addOnCommittedListener(() => {
        this.f_.add(t);
      });
      const s = {
        collectionId: n,
        parent: ih(r)
      };
      return Ed(e).put(s);
    }
    return lB.resolve();
  }
  getCollectionParents(e, t) {
    const n = [];
    const r = IDBKeyRange.bound([t, ""], [Pt(t), ""], false, true);
    return Ed(e).ti(r).next(e => {
      for (const r of e) {
        if (r.collectionId !== t) {
          break;
        }
        n.push(Bh(r.parent));
      }
      return n;
    });
  }
  addFieldIndex(e, t) {
    const n = wd(e);
    const r = function (e) {
      return {
        indexId: e.indexId,
        collectionGroup: e.collectionGroup,
        fields: e.fields.map(e => [e.fieldPath.canonicalString(), e.kind])
      };
    }(t);
    delete r.indexId;
    const s = n.add(r);
    if (t.indexState) {
      const n = yd(e);
      return s.next(e => {
        n.put(OC(e, this.uid, t.indexState.sequenceNumber, t.indexState.offset));
      });
    }
    return s.next();
  }
  deleteFieldIndex(e, t) {
    const n = wd(e);
    const r = yd(e);
    const s = Dd(e);
    return n.delete(t.indexId).next(() => r.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], false, true))).next(() => s.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], false, true)));
  }
  deleteAllFieldIndexes(e) {
    const t = wd(e);
    const n = Dd(e);
    const r = yd(e);
    return t.ii().next(() => n.ii()).next(() => r.ii());
  }
  createTargetIndexes(e, t) {
    return lB.forEach(this.p_(t), t => this.getIndexType(e, t).next(n => {
      if (n === 0 || n === 1) {
        const n = new sd(t).V_();
        if (n != null) {
          return this.addFieldIndex(e, n);
        }
      }
    }));
  }
  getDocumentsMatchingTarget(e, t) {
    const n = Dd(e);
    let r = true;
    const s = new Map();
    return lB.forEach(this.p_(t), t => this.g_(e, t).next(e => {
      r &&= !!e;
      s.set(t, e);
    })).next(() => {
      if (r) {
        let e = la();
        const r = [];
        return lB.forEach(s, (s, i) => {
          yt(pd, `Using index ${function (e) {
            return `id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e => `${e.fieldPath}:${e.kind}`).join(",")}`;
          }(s)} to execute ${Ni(t)}`);
          const a = function (e, t) {
            const n = mi(t);
            if (n === undefined) {
              return null;
            }
            for (const r of Si(e, n.fieldPath)) {
              switch (r.op) {
                case "array-contains-any":
                  return r.value.arrayValue.values || [];
                case "array-contains":
                  return [r.value];
              }
            }
            return null;
          }(i, s);
          const o = function (e, t) {
            const n = new Map();
            for (const r of Ei(t)) {
              for (const t of Si(e, r.fieldPath)) {
                switch (t.op) {
                  case "==":
                  case "in":
                    n.set(r.fieldPath.canonicalString(), t.value);
                    break;
                  case "not-in":
                  case "!=":
                    n.set(r.fieldPath.canonicalString(), t.value);
                    return Array.from(n.values());
                }
              }
            }
            return null;
          }(i, s);
          const B = function (e, t) {
            const n = [];
            let r = true;
            for (const s of Ei(t)) {
              const t = s.kind === 0 ? xi(e, s.fieldPath, e.startAt) : Li(e, s.fieldPath, e.startAt);
              n.push(t.value);
              r &&= t.inclusive;
            }
            return new Js(n, r);
          }(i, s);
          const u = function (e, t) {
            const n = [];
            let r = true;
            for (const s of Ei(t)) {
              const t = s.kind === 0 ? Li(e, s.fieldPath, e.endAt) : xi(e, s.fieldPath, e.endAt);
              n.push(t.value);
              r &&= t.inclusive;
            }
            return new Js(n, r);
          }(i, s);
          const c = this.y_(s, i, B);
          const l = this.y_(s, i, u);
          const h = this.w_(s, i, o);
          const C = this.b_(s.indexId, a, c, B.inclusive, l, u.inclusive, h);
          return lB.forEach(C, s => n.ri(s, t.limit).next(t => {
            t.forEach(t => {
              const n = nn.fromSegments(t.documentKey);
              if (!e.has(n)) {
                e = e.add(n);
                r.push(n);
              }
            });
          }));
        }).next(() => r);
      }
      return lB.resolve(null);
    });
  }
  p_(e) {
    let t = this.m_.get(e);
    return t || (t = e.filters.length === 0 ? [e] : ad(Ys.create(e.filters, "and")).map(t => bi(e.path, e.collectionGroup, e.orderBy, t.getFilters(), e.limit, e.startAt, e.endAt)), this.m_.set(e, t), t);
  }
  b_(e, t, n, r, s, i, a) {
    const o = (t != null ? t.length : 1) * Math.max(n.length, s.length);
    const B = o / (t != null ? t.length : 1);
    const u = [];
    for (let c = 0; c < o; ++c) {
      const o = t ? this.S_(t[c / B]) : gd;
      const l = this.x_(e, o, n[c % B], r);
      const h = this.v_(e, o, s[c % B], i);
      const C = a.map(t => this.x_(e, o, t, true));
      u.push(...this.createRange(l, h, C));
    }
    return u;
  }
  x_(e, t, n, r) {
    const s = new ZC(e, nn.empty(), t, n);
    if (r) {
      return s;
    } else {
      return s.a_();
    }
  }
  v_(e, t, n, r) {
    const s = new ZC(e, nn.empty(), t, n);
    if (r) {
      return s.a_();
    } else {
      return s;
    }
  }
  g_(e, t) {
    const n = new sd(t);
    const r = t.collectionGroup ?? t.path.lastSegment();
    return this.getFieldIndexes(e, r).next(e => {
      let t = null;
      for (const r of e) {
        if (n.P_(r) && (!t || r.fields.length > t.fields.length)) {
          t = r;
        }
      }
      return t;
    });
  }
  getIndexType(e, t) {
    let n = 2;
    const r = this.p_(t);
    return lB.forEach(r, t => this.g_(e, t).next(e => {
      if (e) {
        if (n !== 0 && e.fields.length < function (e) {
          let t = new Ut($t.comparator);
          let n = false;
          for (const r of e.filters) {
            for (const e of r.getFlattenedFilters()) {
              if (!e.field.isKeyField()) {
                if (e.op === "array-contains" || e.op === "array-contains-any") {
                  n = true;
                } else {
                  t = t.add(e.field);
                }
              }
            }
          }
          for (const r of e.orderBy) {
            if (!r.field.isKeyField()) {
              t = t.add(r.field);
            }
          }
          return t.size + (n ? 1 : 0);
        }(t)) {
          n = 1;
        }
      } else {
        n = 0;
      }
    })).next(() => function (e) {
      return e.limit !== null;
    }(t) && r.length > 1 && n === 2 ? 1 : n);
  }
  D_(e, t) {
    const n = new XC();
    for (const r of Ei(e)) {
      const e = t.data.field(r.fieldPath);
      if (e == null) {
        return null;
      }
      const s = n.r_(r.kind);
      KC.Ls.Ts(e, s);
    }
    return n.t_();
  }
  S_(e) {
    const t = new XC();
    KC.Ls.Ts(e, t.r_(0));
    return t.t_();
  }
  C_(e, t) {
    const n = new XC();
    KC.Ls.Ts(qr(this.databaseId, t), n.r_(function (e) {
      const t = Ei(e);
      if (t.length === 0) {
        return 0;
      } else {
        return t[t.length - 1].kind;
      }
    }(e)));
    return n.t_();
  }
  w_(e, t, n) {
    if (n === null) {
      return [];
    }
    let r = [];
    r.push(new XC());
    let s = 0;
    for (const i of Ei(e)) {
      const e = n[s++];
      for (const n of r) {
        if (this.F_(t, i.fieldPath) && Yr(e)) {
          r = this.O_(r, i, e);
        } else {
          const t = n.r_(i.kind);
          KC.Ls.Ts(e, t);
        }
      }
    }
    return this.M_(r);
  }
  y_(e, t, n) {
    return this.w_(e, t, n.position);
  }
  M_(e) {
    const t = [];
    for (let n = 0; n < e.length; ++n) {
      t[n] = e[n].t_();
    }
    return t;
  }
  O_(e, t, n) {
    const r = [...e];
    const s = [];
    for (const i of n.arrayValue.values || []) {
      for (const e of r) {
        const n = new XC();
        n.seed(e.t_());
        KC.Ls.Ts(i, n.r_(t.kind));
        s.push(n);
      }
    }
    return s;
  }
  F_(e, t) {
    return !!e.filters.find(e => e instanceof zs && e.field.isEqual(t) && (e.op === "in" || e.op === "not-in"));
  }
  getFieldIndexes(e, t) {
    const n = wd(e);
    const r = yd(e);
    return (t ? n.ti(Jh, IDBKeyRange.bound(t, t)) : n.ti()).next(e => {
      const t = [];
      return lB.forEach(e, e => r.get([e.indexId, this.uid]).next(n => {
        t.push(function (e, t) {
          const n = t ? new wi(t.sequenceNumber, new Ii(IC(t.readTime), new nn(Bh(t.documentKey)), t.largestBatchId)) : wi.empty();
          const r = e.fields.map(([e, t]) => new Di($t.fromServerFormat(e), t));
          return new gi(e.indexId, e.collectionGroup, r, n);
        }(e, n));
      })).next(() => t);
    });
  }
  getNextCollectionGroupToUpdate(e) {
    return this.getFieldIndexes(e).next(e => e.length === 0 ? null : (e.sort((e, t) => {
      const n = e.indexState.sequenceNumber - t.indexState.sequenceNumber;
      if (n !== 0) {
        return n;
      } else {
        return St(e.collectionGroup, t.collectionGroup);
      }
    }), e[0].collectionGroup));
  }
  updateCollectionGroup(e, t, n) {
    const r = wd(e);
    const s = yd(e);
    return this.N_(e).next(e => r.ti(Jh, IDBKeyRange.bound(t, t)).next(t => lB.forEach(t, t => s.put(OC(t.indexId, this.uid, e, n)))));
  }
  updateIndexEntries(e, t) {
    const n = new Map();
    return lB.forEach(t, (t, r) => {
      const s = n.get(t.collectionGroup);
      return (s ? lB.resolve(s) : this.getFieldIndexes(e, t.collectionGroup)).next(s => {
        n.set(t.collectionGroup, s);
        return lB.forEach(s, n => this.B_(e, t, n).next(t => {
          const s = this.L_(r, n);
          if (t.isEqual(s)) {
            return lB.resolve();
          } else {
            return this.U_(e, r, n, t, s);
          }
        }));
      });
    });
  }
  k_(e, t, n, r) {
    return Dd(e).put(r.u_(this.uid, this.C_(n, t.key), t.key));
  }
  Q_(e, t, n, r) {
    return Dd(e).delete(r.c_(this.uid, this.C_(n, t.key), t.key));
  }
  B_(e, t, n) {
    const r = Dd(e);
    let s = new Ut(ed);
    return r._i({
      index: $h,
      range: IDBKeyRange.only([n.indexId, this.uid, nd(this.C_(n, t))])
    }, (e, r) => {
      s = s.add(new ZC(n.indexId, t, rd(r.arrayValue), rd(r.directionalValue)));
    }).next(() => s);
  }
  L_(e, t) {
    let n = new Ut(ed);
    const r = this.D_(t, e);
    if (r == null) {
      return n;
    }
    const s = mi(t);
    if (s != null) {
      const i = e.data.field(s.fieldPath);
      if (Yr(i)) {
        for (const s of i.arrayValue.values || []) {
          n = n.add(new ZC(t.indexId, e.key, this.S_(s), r));
        }
      }
    } else {
      n = n.add(new ZC(t.indexId, e.key, gd, r));
    }
    return n;
  }
  U_(e, t, n, r, s) {
    yt(pd, "Updating index entries for document '%s'", t.key);
    const i = [];
    (function (e, t, n, r, s) {
      const i = e.getIterator();
      const a = t.getIterator();
      let o = Jt(i);
      let B = Jt(a);
      while (o || B) {
        let e = false;
        let t = false;
        if (o && B) {
          const r = n(o, B);
          if (r < 0) {
            t = true;
          } else if (r > 0) {
            e = true;
          }
        } else if (o != null) {
          t = true;
        } else {
          e = true;
        }
        if (e) {
          r(B);
          B = Jt(a);
        } else if (t) {
          s(o);
          o = Jt(i);
        } else {
          o = Jt(i);
          B = Jt(a);
        }
      }
    })(r, s, ed, r => {
      i.push(this.k_(e, t, n, r));
    }, r => {
      i.push(this.Q_(e, t, n, r));
    });
    return lB.waitFor(i);
  }
  N_(e) {
    let t = 1;
    return yd(e)._i({
      index: Qh,
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (e, n, r) => {
      r.done();
      t = n.sequenceNumber + 1;
    }).next(() => t);
  }
  createRange(e, t, n) {
    n = n.sort((e, t) => ed(e, t)).filter((e, t, n) => !t || ed(e, n[t - 1]) !== 0);
    const r = [];
    r.push(e);
    for (const i of n) {
      const n = ed(i, e);
      const s = ed(i, t);
      if (n === 0) {
        r[0] = e.a_();
      } else if (n > 0 && s < 0) {
        r.push(i);
        r.push(i.a_());
      } else if (s > 0) {
        break;
      }
    }
    r.push(t);
    const s = [];
    for (let i = 0; i < r.length; i += 2) {
      if (this.q_(r[i], r[i + 1])) {
        return [];
      }
      const e = r[i].c_(this.uid, gd, nn.empty());
      const t = r[i + 1].c_(this.uid, gd, nn.empty());
      s.push(IDBKeyRange.bound(e, t));
    }
    return s;
  }
  q_(e, t) {
    return ed(e, t) > 0;
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return this.getFieldIndexes(e, t).next(_d);
  }
  getMinOffset(e, t) {
    return lB.mapArray(this.p_(t), t => this.g_(e, t).next(e => e || Tt(44426))).next(_d);
  }
};
function Ed(e) {
  return gC(e, Ph);
}
function Dd(e) {
  return gC(e, Yh);
}
function wd(e) {
  return gC(e, qh);
}
function yd(e) {
  return gC(e, Kh);
}
function _d(e) {
  Nt(e.length !== 0, 28825);
  let t = e[0].indexState.offset;
  let n = t.largestBatchId;
  for (let r = 1; r < e.length; r++) {
    const s = e[r].indexState.offset;
    if (vi(s, t) < 0) {
      t = s;
    }
    if (n < s.largestBatchId) {
      n = s.largestBatchId;
    }
  }
  return new Ii(t.readTime, t.documentKey, n);
}
var Id = class e {
  constructor(e) {
    this.K_ = e;
  }
  next() {
    this.K_ += 2;
    return this.K_;
  }
  static W_() {
    return new e(0);
  }
  static G_() {
    return new e(-1);
  }
};
var vd = class {
  constructor(e, t) {
    this.referenceDelegate = e;
    this.serializer = t;
  }
  allocateTargetId(e) {
    return this.j_(e).next(t => {
      t.highestTargetId = new Id(t.highestTargetId).next();
      return this.z_(e, t).next(() => t.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(e) {
    return this.j_(e).next(e => di.fromTimestamp(new pn(e.lastRemoteSnapshotVersion.seconds, e.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(e) {
    return this.j_(e).next(e => e.highestListenSequenceNumber);
  }
  setTargetsMetadata(e, t, n) {
    return this.j_(e).next(r => {
      r.highestListenSequenceNumber = t;
      if (n) {
        r.lastRemoteSnapshotVersion = n.toTimestamp();
      }
      if (t > r.highestListenSequenceNumber) {
        r.highestListenSequenceNumber = t;
      }
      return this.z_(e, r);
    });
  }
  addTargetData(e, t) {
    return this.H_(e, t).next(() => this.j_(e).next(n => {
      n.targetCount += 1;
      this.J_(t, n);
      return this.z_(e, n);
    }));
  }
  updateTargetData(e, t) {
    return this.H_(e, t);
  }
  removeTargetData(e, t) {
    return this.removeMatchingKeysForTargetId(e, t.targetId).next(() => Td(e).delete(t.targetId)).next(() => this.j_(e)).next(t => {
      Nt(t.targetCount > 0, 8065);
      t.targetCount -= 1;
      return this.z_(e, t);
    });
  }
  removeTargets(e, t, n) {
    let r = 0;
    const s = [];
    return Td(e)._i((i, a) => {
      const o = TC(this.serializer, a);
      if (o.sequenceNumber <= t && n.get(o.targetId) === null) {
        r++;
        s.push(this.removeTargetData(e, o));
      }
    }).next(() => lB.waitFor(s)).next(() => r);
  }
  forEachTarget(e, t) {
    return Td(e)._i((e, n) => {
      t(TC(this.serializer, n));
    });
  }
  j_(e) {
    return bd(e).get(kh).next(e => {
      Nt(e !== null, 2888);
      return e;
    });
  }
  z_(e, t) {
    return bd(e).put(kh, t);
  }
  H_(e, t) {
    return Td(e).put(bC(this.serializer, t));
  }
  J_(e, t) {
    let n = false;
    if (e.targetId > t.highestTargetId) {
      t.highestTargetId = e.targetId;
      n = true;
    }
    if (e.sequenceNumber > t.highestListenSequenceNumber) {
      t.highestListenSequenceNumber = e.sequenceNumber;
      n = true;
    }
    return n;
  }
  getTargetCount(e) {
    return this.j_(e).next(e => e.targetCount);
  }
  getTargetData(e, t) {
    const n = th(t);
    const r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
    let s = null;
    return Td(e)._i({
      range: r,
      index: Fh
    }, (e, n, r) => {
      const i = TC(this.serializer, n);
      if (nh(t, i.target)) {
        s = i;
        r.done();
      }
    }).next(() => s);
  }
  addMatchingKeys(e, t, n) {
    const r = [];
    const s = Nd(e);
    t.forEach(t => {
      const i = ih(t.path);
      r.push(s.put({
        targetId: n,
        path: i
      }));
      r.push(this.referenceDelegate.addReference(e, n, t));
    });
    return lB.waitFor(r);
  }
  removeMatchingKeys(e, t, n) {
    const r = Nd(e);
    return lB.forEach(t, t => {
      const s = ih(t.path);
      return lB.waitFor([r.delete([n, s]), this.referenceDelegate.removeReference(e, n, t)]);
    });
  }
  removeMatchingKeysForTargetId(e, t) {
    const n = Nd(e);
    const r = IDBKeyRange.bound([t], [t + 1], false, true);
    return n.delete(r);
  }
  getMatchingKeysForTargetId(e, t) {
    const n = IDBKeyRange.bound([t], [t + 1], false, true);
    const r = Nd(e);
    let s = la();
    return r._i({
      range: n,
      si: true
    }, (e, t, n) => {
      const r = Bh(e[1]);
      const i = new nn(r);
      s = s.add(i);
    }).next(() => s);
  }
  containsKey(e, t) {
    const n = ih(t.path);
    const r = IDBKeyRange.bound([n], [Pt(n)], false, true);
    let s = 0;
    return Nd(e)._i({
      index: Lh,
      si: true,
      range: r
    }, ([e, t], n, r) => {
      if (e !== 0) {
        s++;
        r.done();
      }
    }).next(() => s > 0);
  }
  Mt(e, t) {
    return Td(e).get(t).next(e => e ? TC(this.serializer, e) : null);
  }
};
function Td(e) {
  return gC(e, Ah);
}
function bd(e) {
  return gC(e, Gh);
}
function Nd(e) {
  return gC(e, Sh);
}
var Ad = class {
  constructor(e, t) {
    this.db = e;
    this.garbageCollector = NB(this, t);
  }
  Pi(e) {
    const t = this.Y_(e);
    return this.db.getTargetCache().getTargetCount(e).next(e => t.next(t => e + t));
  }
  Y_(e) {
    let t = 0;
    return this.Ii(e, e => {
      t++;
    }).next(() => t);
  }
  forEachTarget(e, t) {
    return this.db.getTargetCache().forEachTarget(e, t);
  }
  Ii(e, t) {
    return this.Z_(e, (e, n) => t(n));
  }
  addReference(e, t, n) {
    return Fd(e, n);
  }
  removeReference(e, t, n) {
    return Fd(e, n);
  }
  removeTargets(e, t, n) {
    return this.db.getTargetCache().removeTargets(e, t, n);
  }
  markPotentiallyOrphaned(e, t) {
    return Fd(e, t);
  }
  X_(e, t) {
    return function (e, t) {
      let n = false;
      return PC(e).oi(r => RC(e, r, t).next(e => {
        if (e) {
          n = true;
        }
        return lB.resolve(!e);
      })).next(() => n);
    }(e, t);
  }
  removeOrphanedDocuments(e, t) {
    const n = this.db.getRemoteDocumentCache().newChangeBuffer();
    const r = [];
    let s = 0;
    return this.Z_(e, (i, a) => {
      if (a <= t) {
        const t = this.X_(e, i).next(t => {
          if (!t) {
            s++;
            return n.getEntry(e, i).next(() => {
              n.removeEntry(i, di.min());
              return Nd(e).delete(function (e) {
                return [0, ih(e.path)];
              }(i));
            });
          }
        });
        r.push(t);
      }
    }).next(() => lB.waitFor(r)).next(() => n.apply(e)).next(() => s);
  }
  removeTarget(e, t) {
    const n = t.withSequenceNumber(e.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(e, n);
  }
  updateLimboDocument(e, t) {
    return Fd(e, t);
  }
  Z_(e, t) {
    const n = Nd(e);
    let r;
    let s = oB.Br;
    return n._i({
      index: Lh
    }, ([e, n], {
      path: i,
      sequenceNumber: a
    }) => {
      if (e === 0) {
        if (s !== oB.Br) {
          t(new nn(Bh(r)), s);
        }
        s = a;
        r = i;
      } else {
        s = oB.Br;
      }
    }).next(() => {
      if (s !== oB.Br) {
        t(new nn(Bh(r)), s);
      }
    });
  }
  getCacheSize(e) {
    return this.db.getRemoteDocumentCache().getSize(e);
  }
};
function Fd(e, t) {
  return Nd(e).put(function (e, t) {
    return {
      targetId: 0,
      path: ih(e.path),
      sequenceNumber: t
    };
  }(t, e.currentSequenceNumber));
}
function Od(e, t) {
  let n = t;
  for (const r of e.stages) {
    n = Ld({
      serializer: e.serializer,
      serverTimestampBehavior: e.listenOptions?.serverTimestampBehavior
    }, r, n);
  }
  return n;
}
function Sd(e, t) {
  return Od(e, [t]).length > 0;
}
function xd(e, t) {
  if ($l(e)) {
    return Sd(e, t);
  } else {
    return ji(e, t);
  }
}
function Ld(e, t, n) {
  if (t instanceof Ju) {
    return function (e, t, n) {
      return n.filter(e => e.isFoundDocument() && `/${e.key.getCollectionPath().canonicalString()}` === t.pi);
    }(0, t, n);
  }
  if (t instanceof zu) {
    return function (e, t, n) {
      return n.filter(n => {
        const r = Bc(cc(t.condition).evaluate(e, n));
        return r !== undefined && Ir(r, wr);
      });
    }(e, t, n);
  }
  if (t instanceof Ku) {
    return function (e, t, n) {
      return n.filter(e => e.isFoundDocument() && e.key.getCollectionPath().lastSegment() === t.collectionId);
    }(0, t, n);
  }
  if (t instanceof ju) {
    return function (e, t, n) {
      return n.filter(e => e.isFoundDocument());
    }(0, 0, n);
  }
  if (t instanceof Qu) {
    return function (e, t, n) {
      return n.filter(e => e.isFoundDocument() && t.yi.has(e.key.path.toStringWithLeadingSlash()));
    }(0, t, n);
  }
  if (t instanceof Yu) {
    return function (e, t, n) {
      return n.slice(0, t.limit);
    }(0, t, n);
  }
  if (t instanceof Xu) {
    return function (e, t, n) {
      const r = t.orderings.map(e => ({
        eo: cc(e.expr),
        direction: e.direction
      }));
      return [...n].sort((t, n) => {
        for (const {
          eo: s,
          direction: i
        } of r) {
          const r = Bc(s.evaluate(e, t));
          const a = Bc(s.evaluate(e, n));
          const o = Tr(r ?? cr, a ?? cr);
          if (o !== 0) {
            if (i === "ascending") {
              return o;
            } else {
              return -o;
            }
          }
        }
        return 0;
      });
    }(e, t, n);
  }
  throw new Error(`Unknown stage: ${t._name}`);
}
function Rd(e) {
  const t = function (e) {
    for (let t = e.stages.length - 1; t >= 0; t--) {
      const n = e.stages[t];
      if (n instanceof Xu) {
        return n.orderings;
      }
    }
    throw new Error("Pipeline must contain at least one Sort stage");
  }(e);
  return (n, r) => {
    for (const s of t) {
      const t = Bc(cc(s.expr).evaluate({
        serializer: e.serializer
      }, n));
      const i = Bc(cc(s.expr).evaluate({
        serializer: e.serializer
      }, r));
      const a = Tr(t || cr, i || cr);
      if (a !== 0) {
        if (s.direction === "ascending") {
          return a;
        } else {
          return -a;
        }
      }
    }
    return 0;
  };
}
function kd(e) {
  for (let t = e.stages.length - 1; t >= 0; t--) {
    const n = e.stages[t];
    if (n instanceof Yu) {
      return {
        limit: n.limit
      };
    }
  }
}
var Gd = class {
  constructor() {
    this.changes = new ea(e => e.toString(), (e, t) => e.isEqual(t));
    this.changesApplied = false;
  }
  addEntry(e) {
    this.assertNotApplied();
    this.changes.set(e.key, e);
  }
  removeEntry(e, t) {
    this.assertNotApplied();
    this.changes.set(e, fi.newInvalidDocument(e).setReadTime(t));
  }
  getEntry(e, t) {
    this.assertNotApplied();
    const n = this.changes.get(t);
    if (n !== undefined) {
      return lB.resolve(n);
    } else {
      return this.getFromCache(e, t);
    }
  }
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  apply(e) {
    this.assertNotApplied();
    this.changesApplied = true;
    return this.applyChanges(e);
  }
  assertNotApplied() {}
};
var Pd = class {
  constructor(e) {
    this.serializer = e;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, t, n) {
    return Ud(e).put(n);
  }
  removeEntry(e, t, n) {
    return Ud(e).delete(function (e, t) {
      const n = e.path.toArray();
      return [n.slice(0, n.length - 2), n[n.length - 2], yC(t), n[n.length - 1]];
    }(t, n));
  }
  updateMetadata(e, t) {
    return this.getMetadata(e).next(n => {
      n.byteSize += t;
      return this.no(e, n);
    });
  }
  getEntry(e, t) {
    let n = fi.newInvalidDocument(t);
    return Ud(e)._i({
      index: _h,
      range: IDBKeyRange.only(qd(t))
    }, (e, r) => {
      n = this.ro(t, r);
    }).next(() => n);
  }
  io(e, t) {
    let n = {
      size: 0,
      document: fi.newInvalidDocument(t)
    };
    return Ud(e)._i({
      index: _h,
      range: IDBKeyRange.only(qd(t))
    }, (e, r) => {
      n = {
        document: this.ro(t, r),
        size: fC(r)
      };
    }).next(() => n);
  }
  getEntries(e, t) {
    let n = na();
    return this.so(e, t, (e, t) => {
      const r = this.ro(e, t);
      n = n.insert(e, r);
    }).next(() => n);
  }
  getAllEntries(e) {
    let t = na();
    return Ud(e)._i((e, n) => {
      const r = this.ro(nn.fromSegments(n.prefixPath.concat(n.collectionGroup, n.documentId)), n);
      t = t.insert(r.key, r);
    }).next(() => t);
  }
  _o(e, t) {
    let n = na();
    let r = new Mt(nn.comparator);
    return this.so(e, t, (e, t) => {
      const s = this.ro(e, t);
      n = n.insert(e, s);
      r = r.insert(e, fC(t));
    }).next(() => ({
      documents: n,
      oo: r
    }));
  }
  so(e, t, n) {
    if (t.isEmpty()) {
      return lB.resolve();
    }
    let r = new Ut(Kd);
    t.forEach(e => r = r.add(e));
    const s = IDBKeyRange.bound(qd(r.first()), qd(r.last()));
    const i = r.getIterator();
    let a = i.getNext();
    return Ud(e)._i({
      index: _h,
      range: s
    }, (e, t, r) => {
      const s = nn.fromSegments([...t.prefixPath, t.collectionGroup, t.documentId]);
      while (a && Kd(a, s) < 0) {
        n(a, null);
        a = i.getNext();
      }
      if (a && a.isEqual(s)) {
        n(a, t);
        a = i.hasNext() ? i.getNext() : null;
      }
      if (a) {
        r.ei(qd(a));
      } else {
        r.done();
      }
    }).next(() => {
      while (a) {
        n(a, null);
        a = i.hasNext() ? i.getNext() : null;
      }
    });
  }
  getDocumentsMatchingQuery(e, t, n, r, s) {
    const i = $l(t) ? Yt.fromString(rc(t)) : t.path;
    const a = [i.popLast().toArray(), i.lastSegment(), yC(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()];
    const o = [i.popLast().toArray(), i.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return Ud(e).ti(IDBKeyRange.bound(a, o, true)).next(e => {
      s?.incrementDocumentReadCount(e.length);
      let n = na();
      for (const s of e) {
        const e = this.ro(nn.fromSegments(s.prefixPath.concat(s.collectionGroup, s.documentId)), s);
        if (e.isFoundDocument() && (xd(t, e) || r.has(e.key))) {
          n = n.insert(e.key, e);
        }
      }
      return n;
    });
  }
  getAllFromCollectionGroup(e, t, n, r) {
    let s = na();
    const i = Jd(t, n);
    const a = Jd(t, Ii.max());
    return Ud(e)._i({
      index: vh,
      range: IDBKeyRange.bound(i, a, true)
    }, (e, t, n) => {
      const i = this.ro(nn.fromSegments(t.prefixPath.concat(t.collectionGroup, t.documentId)), t);
      s = s.insert(i.key, i);
      if (s.size === r) {
        n.done();
      }
    }).next(() => s);
  }
  newChangeBuffer(e) {
    return new Vd(this, !!e && e.trackRemovals);
  }
  getSize(e) {
    return this.getMetadata(e).next(e => e.byteSize);
  }
  getMetadata(e) {
    return Hd(e).get(Nh).next(e => {
      Nt(!!e, 20021);
      return e;
    });
  }
  no(e, t) {
    return Hd(e).put(Nh, t);
  }
  ro(e, t) {
    if (t) {
      const e = function (e, t) {
        let n;
        if (t.document) {
          n = Wa(e.Xi, t.document, !!t.hasCommittedMutations);
        } else if (t.noDocument) {
          const e = nn.fromSegments(t.noDocument.path);
          const r = IC(t.noDocument.readTime);
          n = fi.newNoDocument(e, r);
          if (t.hasCommittedMutations) {
            n.setHasCommittedMutations();
          }
        } else {
          if (!t.unknownDocument) {
            return Tt(56709);
          }
          {
            const e = nn.fromSegments(t.unknownDocument.path);
            const r = IC(t.unknownDocument.version);
            n = fi.newUnknownDocument(e, r);
          }
        }
        if (t.readTime) {
          n.setReadTime(function (e) {
            const t = new pn(e[0], e[1]);
            return di.fromTimestamp(t);
          }(t.readTime));
        }
        return n;
      }(this.serializer, t);
      if (!e.isNoDocument() || !e.version.isEqual(di.min())) {
        return e;
      }
    }
    return fi.newInvalidDocument(e);
  }
};
function Md(e) {
  return new Pd(e);
}
var Vd = class extends Gd {
  constructor(e, t) {
    super();
    this.ao = e;
    this.trackRemovals = t;
    this.uo = new ea(e => e.toString(), (e, t) => e.isEqual(t));
  }
  applyChanges(e) {
    const t = [];
    let n = 0;
    let r = new Ut((e, t) => St(e.canonicalString(), t.canonicalString()));
    this.changes.forEach((s, i) => {
      const a = this.uo.get(s);
      t.push(this.ao.removeEntry(e, s, a.readTime));
      if (i.isValidDocument()) {
        const o = wC(this.ao.serializer, i);
        r = r.add(s.path.popLast());
        const B = fC(o);
        n += B - a.size;
        t.push(this.ao.addEntry(e, s, o));
      } else {
        n -= a.size;
        if (this.trackRemovals) {
          const n = wC(this.ao.serializer, i.convertToNoDocument(di.min()));
          t.push(this.ao.addEntry(e, s, n));
        }
      }
    });
    r.forEach(n => {
      t.push(this.ao.indexManager.addToCollectionParentIndex(e, n));
    });
    t.push(this.ao.updateMetadata(e, n));
    return lB.waitFor(t);
  }
  getFromCache(e, t) {
    return this.ao.io(e, t).next(e => {
      this.uo.set(t, {
        size: e.size,
        readTime: e.document.readTime
      });
      return e.document;
    });
  }
  getAllFromCache(e, t) {
    return this.ao._o(e, t).next(({
      documents: e,
      oo: t
    }) => {
      t.forEach((t, n) => {
        this.uo.set(t, {
          size: n,
          readTime: e.get(t).readTime
        });
      });
      return e;
    });
  }
};
function Hd(e) {
  return gC(e, bh);
}
function Ud(e) {
  return gC(e, wh);
}
function qd(e) {
  const t = e.path.toArray();
  return [t.slice(0, t.length - 2), t[t.length - 2], t[t.length - 1]];
}
function Jd(e, t) {
  const n = t.documentKey.path.toArray();
  return [e, yC(t.readTime), n.slice(0, n.length - 2), n.length > 0 ? n[n.length - 1] : ""];
}
function Kd(e, t) {
  const n = e.path.toArray();
  const r = t.path.toArray();
  let s = 0;
  for (let i = 0; i < n.length - 2 && i < r.length - 2; ++i) {
    s = St(n[i], r[i]);
    if (s) {
      return s;
    }
  }
  s = St(n.length, r.length);
  return s || (s = St(n[n.length - 2], r[r.length - 2]), s || St(n[n.length - 1], r[r.length - 1]));
}
var jd = class {
  constructor(e, t) {
    this.overlayedDocument = e;
    this.mutatedFields = t;
  }
};
var Qd = class {
  constructor(e, t, n, r) {
    this.remoteDocumentCache = e;
    this.mutationQueue = t;
    this.documentOverlayCache = n;
    this.indexManager = r;
  }
  getDocument(e, t) {
    let n = null;
    return this.documentOverlayCache.getOverlay(e, t).next(r => {
      n = r;
      return this.remoteDocumentCache.getEntry(e, t);
    }).next(e => {
      if (n !== null) {
        Ls(n.mutation, e, Xt.empty(), pn.now());
      }
      return e;
    });
  }
  getDocuments(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next(t => this.getLocalViewOfDocuments(e, t, la()).next(() => t));
  }
  getLocalViewOfDocuments(e, t, n = la()) {
    const r = aa();
    return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, n).next(e => {
      let t = sa();
      e.forEach((e, n) => {
        t = t.insert(e, n.overlayedDocument);
      });
      return t;
    }));
  }
  getOverlayedDocuments(e, t) {
    const n = aa();
    return this.populateOverlays(e, n, t).next(() => this.computeViews(e, t, n, la()));
  }
  populateOverlays(e, t, n) {
    const r = [];
    n.forEach(e => {
      if (!t.has(e)) {
        r.push(e);
      }
    });
    return this.documentOverlayCache.getOverlays(e, r).next(e => {
      e.forEach((e, n) => {
        t.set(e, n);
      });
    });
  }
  computeViews(e, t, n, r) {
    let s = na();
    const i = Ba();
    const a = Ba();
    t.forEach((e, t) => {
      const a = n.get(t.key);
      if (r.has(t.key) && (a === undefined || a.mutation instanceof Ps)) {
        s = s.insert(t.key, t);
      } else if (a !== undefined) {
        i.set(t.key, a.mutation.getFieldMask());
        Ls(a.mutation, t, a.mutation.getFieldMask(), pn.now());
      } else {
        i.set(t.key, Xt.empty());
      }
    });
    return this.recalculateAndSaveOverlays(e, s).next(e => {
      e.forEach((e, t) => i.set(e, t));
      t.forEach((e, t) => a.set(e, new jd(t, i.get(e) ?? null)));
      return a;
    });
  }
  recalculateAndSaveOverlays(e, t) {
    const n = Ba();
    let r = new Mt((e, t) => e - t);
    let s = la();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next(e => {
      for (const s of e) {
        s.keys().forEach(e => {
          const i = t.get(e);
          if (i === null) {
            return;
          }
          let a = n.get(e) || Xt.empty();
          a = s.applyToLocalView(i, a);
          n.set(e, a);
          const o = (r.get(s.batchId) || la()).add(e);
          r = r.insert(s.batchId, o);
        });
      }
    }).next(() => {
      const i = [];
      const a = r.getReverseIterator();
      while (a.hasNext()) {
        const r = a.getNext();
        const o = r.key;
        const B = r.value;
        const u = oa();
        B.forEach(e => {
          if (!s.has(e)) {
            const r = Ss(t.get(e), n.get(e));
            if (r !== null) {
              u.set(e, r);
            }
            s = s.add(e);
          }
        });
        i.push(this.documentOverlayCache.saveOverlays(e, o, u));
      }
      return lB.waitFor(i);
    }).next(() => n);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next(t => this.recalculateAndSaveOverlays(e, t));
  }
  getDocumentsMatchingQuery(e, t, n, r) {
    if ($l(t)) {
      return this.getDocumentsMatchingPipeline(e, t, n, r);
    } else if (function (e) {
      return nn.isDocumentKey(e.path) && e.collectionGroup === null && e.filters.length === 0;
    }(t)) {
      return this.getDocumentsMatchingDocumentQuery(e, t.path);
    } else if (Mi(t)) {
      return this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r);
    } else {
      return this.getDocumentsMatchingCollectionQuery(e, t, n, r);
    }
  }
  getNextDocuments(e, t, n, r) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next(s => {
      const i = r - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - s.size) : lB.resolve(aa());
      let a = pi;
      let o = s;
      return i.next(t => lB.forEach(t, (t, n) => {
        if (a < n.largestBatchId) {
          a = n.largestBatchId;
        }
        if (s.get(t)) {
          return lB.resolve();
        } else {
          return this.remoteDocumentCache.getEntry(e, t).next(e => {
            o = o.insert(t, e);
          });
        }
      }).next(() => this.populateOverlays(e, t, s)).next(() => this.computeViews(e, o, t, la())).next(e => ({
        batchId: a,
        changes: ia(e)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new nn(t)).next(e => {
      let t = sa();
      if (e.isFoundDocument()) {
        t = t.insert(e.key, e);
      }
      return t;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
    const s = t.collectionGroup;
    let i = sa();
    return this.indexManager.getCollectionParents(e, s).next(a => lB.forEach(a, a => {
      const o = function (e, t) {
        return new Ri(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt);
      }(t, a.child(s));
      return this.getDocumentsMatchingCollectionQuery(e, o, n, r).next(e => {
        e.forEach((e, t) => {
          i = i.insert(e, t);
        });
      });
    }).next(() => i));
  }
  getDocumentsMatchingCollectionQuery(e, t, n, r) {
    let s;
    return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next(i => {
      s = i;
      return this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, s, r);
    }).next(e => this.retrieveMatchingLocalDocuments(s, e, e => ji(t, e)));
  }
  getDocumentsMatchingPipeline(e, t, n, r) {
    if (nc(t) === "collection_group") {
      const s = sc(t);
      let i = sa();
      return this.indexManager.getCollectionParents(e, s).next(a => lB.forEach(a, a => {
        const o = function (e, t) {
          const n = e.stages.map(e => e instanceof Ku ? new Ju(t.canonicalString(), {}) : e);
          return new tc(e.serializer, n);
        }(t, a.child(s));
        return this.getDocumentsMatchingPipeline(e, o, n, r).next(e => {
          e.forEach((e, t) => {
            i = i.insert(e, t);
          });
        });
      }).next(() => i));
    }
    {
      let s;
      return this.getOverlaysForPipeline(e, t, n.largestBatchId).next(i => {
        s = i;
        switch (nc(t)) {
          case "collection":
            return this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, s, r);
          case "documents":
            let i = la();
            for (const e of ac(t)) {
              i = i.add(nn.fromPath(e));
            }
            return this.remoteDocumentCache.getEntries(e, i);
          case "database":
            return this.remoteDocumentCache.getAllEntries(e);
          default:
            throw new jt("invalid-argument", `Invalid pipeline source to execute offline: ${Yl(t)}`);
        }
      }).next(e => this.retrieveMatchingLocalDocuments(s, e, e => Sd(t, e)));
    }
  }
  retrieveMatchingLocalDocuments(e, t, n) {
    e.forEach((e, n) => {
      const r = n.getKey();
      if (t.get(r) === null) {
        t = t.insert(r, fi.newInvalidDocument(r));
      }
    });
    let r = sa();
    t.forEach((t, s) => {
      const i = e.get(t);
      if (i !== undefined) {
        Ls(i.mutation, s, Xt.empty(), pn.now());
      }
      if (n(s)) {
        r = r.insert(t, s);
      }
    });
    return r;
  }
  getOverlaysForPipeline(e, t, n) {
    switch (nc(t)) {
      case "collection":
        return this.documentOverlayCache.getOverlaysForCollection(e, Yt.fromString(rc(t)), n);
      case "collection_group":
        throw new jt("invalid-argument", `Unexpected collection group pipeline: ${Yl(t)}`);
      case "documents":
        return this.documentOverlayCache.getOverlays(e, ac(t).map(e => nn.fromPath(e)));
      case "database":
        return this.documentOverlayCache.getAllOverlays(e, n);
      default:
        throw new jt("invalid-argument", `Failed to get overlays for pipeline: ${Yl(t)}`);
    }
  }
};
var zd = class {
  constructor(e) {
    this.serializer = e;
    this.co = new Map();
    this.lo = new Map();
  }
  getBundleMetadata(e, t) {
    return lB.resolve(this.co.get(t));
  }
  saveBundleMetadata(e, t) {
    this.co.set(t.id, function (e) {
      return {
        id: e.id,
        version: e.version,
        createTime: Ma(e.createTime)
      };
    }(t));
    return lB.resolve();
  }
  getNamedQuery(e, t) {
    return lB.resolve(this.lo.get(t));
  }
  saveNamedQuery(e, t) {
    this.lo.set(t.name, function (e) {
      return {
        name: e.name,
        query: NC(e.bundledQuery),
        readTime: Ma(e.readTime)
      };
    }(t));
    return lB.resolve();
  }
};
var Yd = class {
  constructor() {
    this.overlays = new Mt(nn.comparator);
    this.Eo = new Map();
  }
  getOverlay(e, t) {
    return lB.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const n = aa();
    return lB.forEach(t, t => this.getOverlay(e, t).next(e => {
      if (e !== null) {
        n.set(t, e);
      }
    })).next(() => n);
  }
  getAllOverlays(e, t) {
    const n = aa();
    this.overlays.forEach((e, r) => {
      if (r.largestBatchId > t) {
        n.set(e, r);
      }
    });
    return lB.resolve(n);
  }
  saveOverlays(e, t, n) {
    n.forEach((n, r) => {
      this.Es(e, t, r);
    });
    return lB.resolve();
  }
  removeOverlaysForBatchId(e, t, n) {
    const r = this.Eo.get(n);
    if (r !== undefined) {
      r.forEach(e => this.overlays = this.overlays.remove(e));
      this.Eo.delete(n);
    }
    return lB.resolve();
  }
  getOverlaysForCollection(e, t, n) {
    const r = aa();
    const s = t.length + 1;
    const i = new nn(t.child(""));
    const a = this.overlays.getIteratorFrom(i);
    while (a.hasNext()) {
      const e = a.getNext().value;
      const i = e.getKey();
      if (!t.isPrefixOf(i.path)) {
        break;
      }
      if (i.path.length === s && e.largestBatchId > n) {
        r.set(e.getKey(), e);
      }
    }
    return lB.resolve(r);
  }
  getOverlaysForCollectionGroup(e, t, n, r) {
    let s = new Mt((e, t) => e - t);
    const i = this.overlays.getIterator();
    while (i.hasNext()) {
      const e = i.getNext().value;
      if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
        let t = s.get(e.largestBatchId);
        if (t === null) {
          t = aa();
          s = s.insert(e.largestBatchId, t);
        }
        t.set(e.getKey(), e);
      }
    }
    const a = aa();
    const o = s.getIterator();
    while (o.hasNext() && (o.getNext().value.forEach((e, t) => a.set(e, t)), !(a.size() >= r)));
    return lB.resolve(a);
  }
  Es(e, t, n) {
    const r = this.overlays.get(n.key);
    if (r !== null) {
      const e = this.Eo.get(r.largestBatchId).delete(n.key);
      this.Eo.set(r.largestBatchId, e);
    }
    this.overlays = this.overlays.insert(n.key, new mC(t, n));
    let s = this.Eo.get(t);
    if (s === undefined) {
      s = la();
      this.Eo.set(t, s);
    }
    this.Eo.set(t, s.add(n.key));
  }
};
var Wd = class {
  constructor() {
    this.sessionToken = mn.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return lB.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    this.sessionToken = t;
    return lB.resolve();
  }
};
var $d = class {
  constructor() {
    this.ho = new Ut(Xd.To);
    this.Po = new Ut(Xd.Io);
  }
  isEmpty() {
    return this.ho.isEmpty();
  }
  addReference(e, t) {
    const n = new Xd(e, t);
    this.ho = this.ho.add(n);
    this.Po = this.Po.add(n);
  }
  Ro(e, t) {
    e.forEach(e => this.addReference(e, t));
  }
  removeReference(e, t) {
    this.Ao(new Xd(e, t));
  }
  Vo(e, t) {
    e.forEach(e => this.removeReference(e, t));
  }
  fo(e) {
    const t = new nn(new Yt([]));
    const n = new Xd(t, e);
    const r = new Xd(t, e + 1);
    const s = [];
    this.Po.forEachInRange([n, r], e => {
      this.Ao(e);
      s.push(e.key);
    });
    return s;
  }
  mo() {
    this.ho.forEach(e => this.Ao(e));
  }
  Ao(e) {
    this.ho = this.ho.delete(e);
    this.Po = this.Po.delete(e);
  }
  po(e) {
    const t = new nn(new Yt([]));
    const n = new Xd(t, e);
    const r = new Xd(t, e + 1);
    let s = la();
    this.Po.forEachInRange([n, r], e => {
      s = s.add(e.key);
    });
    return s;
  }
  containsKey(e) {
    const t = new Xd(e, 0);
    const n = this.ho.firstAfterOrEqual(t);
    return n !== null && e.isEqual(n.key);
  }
};
var Xd = class {
  constructor(e, t) {
    this.key = e;
    this.yo = t;
  }
  static To(e, t) {
    return nn.comparator(e.key, t.key) || St(e.yo, t.yo);
  }
  static Io(e, t) {
    return St(e.yo, t.yo) || nn.comparator(e.key, t.key);
  }
};
var Zd = class {
  constructor(e, t) {
    this.indexManager = e;
    this.referenceDelegate = t;
    this.mutationQueue = [];
    this.rs = 1;
    this.wo = new Ut(Xd.To);
  }
  checkEmpty(e) {
    return lB.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, t, n, r) {
    const s = this.rs;
    this.rs++;
    if (this.mutationQueue.length > 0) {
      this.mutationQueue[this.mutationQueue.length - 1];
    }
    const i = new rh(s, t, n, r);
    this.mutationQueue.push(i);
    for (const a of r) {
      this.wo = this.wo.add(new Xd(a.key, s));
      this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    }
    return lB.resolve(i);
  }
  lookupMutationBatch(e, t) {
    return lB.resolve(this.bo(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const n = t + 1;
    const r = this.So(n);
    const s = r < 0 ? 0 : r;
    return lB.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return lB.resolve(this.mutationQueue.length === 0 ? Hn : this.rs - 1);
  }
  getAllMutationBatches(e) {
    return lB.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const n = new Xd(t, 0);
    const r = new Xd(t, Number.POSITIVE_INFINITY);
    const s = [];
    this.wo.forEachInRange([n, r], e => {
      const t = this.bo(e.yo);
      s.push(t);
    });
    return lB.resolve(s);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let n = new Ut(St);
    t.forEach(e => {
      const t = new Xd(e, 0);
      const r = new Xd(e, Number.POSITIVE_INFINITY);
      this.wo.forEachInRange([t, r], e => {
        n = n.add(e.yo);
      });
    });
    return lB.resolve(this.xo(n));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const n = t.path;
    const r = n.length + 1;
    let s = n;
    if (!nn.isDocumentKey(s)) {
      s = s.child("");
    }
    const i = new Xd(new nn(s), 0);
    let a = new Ut(St);
    this.wo.forEachWhile(e => {
      const t = e.key.path;
      return !!n.isPrefixOf(t) && (t.length === r && (a = a.add(e.yo)), true);
    }, i);
    return lB.resolve(this.xo(a));
  }
  xo(e) {
    const t = [];
    e.forEach(e => {
      const n = this.bo(e);
      if (n !== null) {
        t.push(n);
      }
    });
    return t;
  }
  removeMutationBatch(e, t) {
    Nt(this.vo(t.batchId, "removed") === 0, 55003);
    this.mutationQueue.shift();
    let n = this.wo;
    return lB.forEach(t.mutations, r => {
      const s = new Xd(r.key, t.batchId);
      n = n.delete(s);
      return this.referenceDelegate.markPotentiallyOrphaned(e, r.key);
    }).next(() => {
      this.wo = n;
    });
  }
  us(e) {}
  containsKey(e, t) {
    const n = new Xd(t, 0);
    const r = this.wo.firstAfterOrEqual(n);
    return lB.resolve(t.isEqual(r && r.key));
  }
  performConsistencyCheck(e) {
    this.mutationQueue.length;
    return lB.resolve();
  }
  vo(e, t) {
    return this.So(e);
  }
  So(e) {
    if (this.mutationQueue.length === 0) {
      return 0;
    } else {
      return e - this.mutationQueue[0].batchId;
    }
  }
  bo(e) {
    const t = this.So(e);
    if (t < 0 || t >= this.mutationQueue.length) {
      return null;
    } else {
      return this.mutationQueue[t];
    }
  }
};
var ef = class {
  constructor(e) {
    this.Do = e;
    this.docs = new Mt(nn.comparator);
    this.size = 0;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, t) {
    const n = t.key;
    const r = this.docs.get(n);
    const s = r ? r.size : 0;
    const i = this.Do(t);
    this.docs = this.docs.insert(n, {
      document: t.mutableCopy(),
      size: i
    });
    this.size += i - s;
    return this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
  }
  removeEntry(e) {
    const t = this.docs.get(e);
    if (t) {
      this.docs = this.docs.remove(e);
      this.size -= t.size;
    }
  }
  getEntry(e, t) {
    const n = this.docs.get(t);
    return lB.resolve(n ? n.document.mutableCopy() : fi.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let n = na();
    t.forEach(e => {
      const t = this.docs.get(e);
      n = n.insert(e, t ? t.document.mutableCopy() : fi.newInvalidDocument(e));
    });
    return lB.resolve(n);
  }
  getAllEntries(e) {
    let t = na();
    this.docs.forEach((e, n) => {
      t = t.insert(e, n.document);
    });
    return lB.resolve(t);
  }
  getDocumentsMatchingQuery(e, t, n, r) {
    let s;
    let i;
    if ($l(t)) {
      s = Yt.fromString(rc(t));
      i = e => Sd(t, e);
    } else {
      s = t.path;
      i = e => ji(t, e);
    }
    let a = na();
    const o = new nn(s.child("__id-9223372036854775808__"));
    const B = this.docs.getIteratorFrom(o);
    while (B.hasNext()) {
      const {
        key: e,
        value: {
          document: t
        }
      } = B.getNext();
      if (!s.isPrefixOf(e.path)) {
        break;
      }
      if (!(e.path.length > s.length + 1) && !(vi(_i(t), n) <= 0)) {
        if (r.has(t.key) || i(t)) {
          a = a.insert(t.key, t.mutableCopy());
        }
      }
    }
    return lB.resolve(a);
  }
  getAllFromCollectionGroup(e, t, n, r) {
    Tt(9500);
  }
  Co(e, t) {
    return lB.forEach(this.docs, e => t(e));
  }
  newChangeBuffer(e) {
    return new tf(this);
  }
  getSize(e) {
    return lB.resolve(this.size);
  }
};
var tf = class extends Gd {
  constructor(e) {
    super();
    this.ao = e;
  }
  applyChanges(e) {
    const t = [];
    this.changes.forEach((n, r) => {
      if (r.isValidDocument()) {
        t.push(this.ao.addEntry(e, r));
      } else {
        this.ao.removeEntry(n);
      }
    });
    return lB.waitFor(t);
  }
  getFromCache(e, t) {
    return this.ao.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.ao.getEntries(e, t);
  }
};
var nf = class {
  constructor(e) {
    this.persistence = e;
    this.Fo = new ea(e => th(e), nh);
    this.lastRemoteSnapshotVersion = di.min();
    this.highestTargetId = 0;
    this.Oo = 0;
    this.Mo = new $d();
    this.targetCount = 0;
    this.No = Id.W_();
  }
  forEachTarget(e, t) {
    this.Fo.forEach((e, n) => t(n));
    return lB.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return lB.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return lB.resolve(this.Oo);
  }
  allocateTargetId(e) {
    this.highestTargetId = this.No.next();
    return lB.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, t, n) {
    if (n) {
      this.lastRemoteSnapshotVersion = n;
    }
    if (t > this.Oo) {
      this.Oo = t;
    }
    return lB.resolve();
  }
  H_(e) {
    this.Fo.set(e.target, e);
    const t = e.targetId;
    if (t > this.highestTargetId) {
      this.No = new Id(t);
      this.highestTargetId = t;
    }
    if (e.sequenceNumber > this.Oo) {
      this.Oo = e.sequenceNumber;
    }
  }
  addTargetData(e, t) {
    this.H_(t);
    this.targetCount += 1;
    return lB.resolve();
  }
  updateTargetData(e, t) {
    this.H_(t);
    return lB.resolve();
  }
  removeTargetData(e, t) {
    this.Fo.delete(t.target);
    this.Mo.fo(t.targetId);
    this.targetCount -= 1;
    return lB.resolve();
  }
  removeTargets(e, t, n) {
    let r = 0;
    const s = [];
    this.Fo.forEach((i, a) => {
      if (a.sequenceNumber <= t && n.get(a.targetId) === null) {
        this.Fo.delete(i);
        s.push(this.removeMatchingKeysForTargetId(e, a.targetId));
        r++;
      }
    });
    return lB.waitFor(s).next(() => r);
  }
  getTargetCount(e) {
    return lB.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const n = this.Fo.get(t) || null;
    return lB.resolve(n);
  }
  addMatchingKeys(e, t, n) {
    this.Mo.Ro(t, n);
    return lB.resolve();
  }
  removeMatchingKeys(e, t, n) {
    this.Mo.Vo(t, n);
    const r = this.persistence.referenceDelegate;
    const s = [];
    if (r) {
      t.forEach(t => {
        s.push(r.markPotentiallyOrphaned(e, t));
      });
    }
    return lB.waitFor(s);
  }
  removeMatchingKeysForTargetId(e, t) {
    this.Mo.fo(t);
    return lB.resolve();
  }
  getMatchingKeysForTargetId(e, t) {
    const n = this.Mo.po(t);
    return lB.resolve(n);
  }
  containsKey(e, t) {
    return lB.resolve(this.Mo.containsKey(t));
  }
};
var rf = class {
  constructor(e, t) {
    this.Bo = {};
    this.overlays = {};
    this.Lo = new oB(0);
    this.$o = false;
    this.$o = true;
    this.Uo = new Wd();
    this.referenceDelegate = e(this);
    this.ko = new nf(this);
    this.indexManager = new dd();
    this.remoteDocumentCache = function (e) {
      return new ef(e);
    }(e => this.referenceDelegate.Qo(e));
    this.serializer = new DC(t);
    this.qo = new zd(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    this.$o = false;
    return Promise.resolve();
  }
  get started() {
    return this.$o;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    if (!t) {
      t = new Yd();
      this.overlays[e.toKey()] = t;
    }
    return t;
  }
  getMutationQueue(e, t) {
    let n = this.Bo[e.toKey()];
    if (!n) {
      n = new Zd(t, this.referenceDelegate);
      this.Bo[e.toKey()] = n;
    }
    return n;
  }
  getGlobalsCache() {
    return this.Uo;
  }
  getTargetCache() {
    return this.ko;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.qo;
  }
  runTransaction(e, t, n) {
    yt("MemoryPersistence", "Starting transaction:", e);
    const r = new sf(this.Lo.next());
    this.referenceDelegate.Ko();
    return n(r).next(e => this.referenceDelegate.Wo(r).next(() => e)).toPromise().then(e => {
      r.raiseOnCommittedEvent();
      return e;
    });
  }
  Go(e, t) {
    return lB.or(Object.values(this.Bo).map(n => () => n.containsKey(e, t)));
  }
};
var sf = class extends uB {
  constructor(e) {
    super();
    this.currentSequenceNumber = e;
  }
};
var af = class e {
  constructor(e) {
    this.persistence = e;
    this.jo = new $d();
    this.zo = null;
  }
  static Ho(t) {
    return new e(t);
  }
  get Jo() {
    if (this.zo) {
      return this.zo;
    }
    throw Tt(60996);
  }
  addReference(e, t, n) {
    this.jo.addReference(n, t);
    this.Jo.delete(n.toString());
    return lB.resolve();
  }
  removeReference(e, t, n) {
    this.jo.removeReference(n, t);
    this.Jo.add(n.toString());
    return lB.resolve();
  }
  markPotentiallyOrphaned(e, t) {
    this.Jo.add(t.toString());
    return lB.resolve();
  }
  removeTarget(e, t) {
    this.jo.fo(t.targetId).forEach(e => this.Jo.add(e.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(e, t.targetId).next(e => {
      e.forEach(e => this.Jo.add(e.toString()));
    }).next(() => n.removeTargetData(e, t));
  }
  Ko() {
    this.zo = new Set();
  }
  Wo(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return lB.forEach(this.Jo, n => {
      const r = nn.fromPath(n);
      return this.Yo(e, r).next(e => {
        if (!e) {
          t.removeEntry(r, di.min());
        }
      });
    }).next(() => {
      this.zo = null;
      return t.apply(e);
    });
  }
  updateLimboDocument(e, t) {
    return this.Yo(e, t).next(e => {
      if (e) {
        this.Jo.delete(t.toString());
      } else {
        this.Jo.add(t.toString());
      }
    });
  }
  Qo(e) {
    return 0;
  }
  Yo(e, t) {
    return lB.or([() => lB.resolve(this.jo.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Go(e, t)]);
  }
};
var of = class e {
  constructor(e, t) {
    this.persistence = e;
    this.Zo = new ea(e => ih(e.path), (e, t) => e.isEqual(t));
    this.garbageCollector = NB(this, t);
  }
  static Ho(t, n) {
    return new e(t, n);
  }
  Ko() {}
  Wo(e) {
    return lB.resolve();
  }
  forEachTarget(e, t) {
    return this.persistence.getTargetCache().forEachTarget(e, t);
  }
  Pi(e) {
    const t = this.Y_(e);
    return this.persistence.getTargetCache().getTargetCount(e).next(e => t.next(t => e + t));
  }
  Y_(e) {
    let t = 0;
    return this.Ii(e, e => {
      t++;
    }).next(() => t);
  }
  Ii(e, t) {
    return lB.forEach(this.Zo, (n, r) => this.X_(e, n, r).next(e => e ? lB.resolve() : t(r)));
  }
  removeTargets(e, t, n) {
    return this.persistence.getTargetCache().removeTargets(e, t, n);
  }
  removeOrphanedDocuments(e, t) {
    let n = 0;
    const r = this.persistence.getRemoteDocumentCache();
    const s = r.newChangeBuffer();
    return r.Co(e, r => this.X_(e, r, t).next(e => {
      if (!e) {
        n++;
        s.removeEntry(r, di.min());
      }
    })).next(() => s.apply(e)).next(() => n);
  }
  markPotentiallyOrphaned(e, t) {
    this.Zo.set(t, e.currentSequenceNumber);
    return lB.resolve();
  }
  removeTarget(e, t) {
    const n = t.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, n);
  }
  addReference(e, t, n) {
    this.Zo.set(n, e.currentSequenceNumber);
    return lB.resolve();
  }
  removeReference(e, t, n) {
    this.Zo.set(n, e.currentSequenceNumber);
    return lB.resolve();
  }
  updateLimboDocument(e, t) {
    this.Zo.set(t, e.currentSequenceNumber);
    return lB.resolve();
  }
  Qo(e) {
    let t = e.key.toString().length;
    if (e.isFoundDocument()) {
      t += Hr(e.data.value);
    }
    return t;
  }
  X_(e, t, n) {
    return lB.or([() => this.persistence.Go(e, t), () => this.persistence.getTargetCache().containsKey(e, t), () => {
      const e = this.Zo.get(t);
      return lB.resolve(e !== undefined && e > n);
    }]);
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e);
  }
};
var Bf = class {
  constructor(e) {
    this.serializer = e;
  }
  jr(e, t, r, s) {
    const i = new CB("createOrUpgrade", t);
    if (r < 1 && s >= 1) {
      (function (e) {
        e.createObjectStore(ch);
      })(e);
      (function (e) {
        e.createObjectStore(hh, {
          keyPath: "userId"
        });
        e.createObjectStore(Ch, {
          keyPath: dh,
          autoIncrement: true
        }).createIndex(fh, ph, {
          unique: true
        });
        e.createObjectStore(Dh);
      })(e);
      uf(e);
      (function (e) {
        e.createObjectStore(uh);
      })(e);
    }
    let a = lB.resolve();
    if (r < 3 && s >= 3) {
      if (r !== 0) {
        (function (e) {
          e.deleteObjectStore(Sh);
          e.deleteObjectStore(Ah);
          e.deleteObjectStore(Gh);
        })(e);
        uf(e);
      }
      a = a.next(() => function (e) {
        const t = e.store(Gh);
        const n = {
          highestTargetId: 0,
          highestListenSequenceNumber: 0,
          lastRemoteSnapshotVersion: di.min().toTimestamp(),
          targetCount: 0
        };
        return t.put(kh, n);
      }(i));
    }
    if (r < 4 && s >= 4) {
      if (r !== 0) {
        a = a.next(() => function (e, t) {
          return t.store(Ch).ti().next(n => {
            e.deleteObjectStore(Ch);
            e.createObjectStore(Ch, {
              keyPath: dh,
              autoIncrement: true
            }).createIndex(fh, ph, {
              unique: true
            });
            const r = t.store(Ch);
            const s = n.map(e => r.put(e));
            return lB.waitFor(s);
          });
        }(e, i));
      }
      a = a.next(() => {
        (function (e) {
          e.createObjectStore(Vh, {
            keyPath: "clientId"
          });
        })(e);
      });
    }
    if (r < 5 && s >= 5) {
      a = a.next(() => this.Xo(i));
    }
    if (r < 6 && s >= 6) {
      a = a.next(() => {
        (function (e) {
          e.createObjectStore(bh);
        })(e);
        return this.ea(i);
      });
    }
    if (r < 7 && s >= 7) {
      a = a.next(() => this.ta(i));
    }
    if (r < 8 && s >= 8) {
      a = a.next(() => this.na(e, i));
    }
    if (r < 9 && s >= 9) {
      a = a.next(() => {
        (function (e) {
          if (e.objectStoreNames.contains("remoteDocumentChanges")) {
            e.deleteObjectStore("remoteDocumentChanges");
          }
        })(e);
      });
    }
    if (r < 10 && s >= 10) {
      a = a.next(() => this.ra(i));
    }
    if (r < 11 && s >= 11) {
      a = a.next(() => {
        (function (e) {
          e.createObjectStore(Hh, {
            keyPath: "bundleId"
          });
        })(e);
        (function (e) {
          e.createObjectStore(Uh, {
            keyPath: "name"
          });
        })(e);
      });
    }
    if (r < 12 && s >= 12) {
      a = a.next(() => {
        (function (e) {
          const t = e.createObjectStore(Zh, {
            keyPath: eC
          });
          t.createIndex(tC, nC, {
            unique: false
          });
          t.createIndex(rC, sC, {
            unique: false
          });
        })(e);
      });
    }
    if (r < 13 && s >= 13) {
      a = a.next(() => function (e) {
        const t = e.createObjectStore(wh, {
          keyPath: yh
        });
        t.createIndex(_h, Ih);
        t.createIndex(vh, Th);
      }(e)).next(() => this.ia(e, i)).next(() => e.deleteObjectStore(uh));
    }
    if (r < 14 && s >= 14) {
      a = a.next(() => this.sa(e, i));
    }
    if (r < 15 && s >= 15) {
      a = a.next(() => function (e) {
        e.createObjectStore(qh, {
          keyPath: "indexId",
          autoIncrement: true
        }).createIndex(Jh, "collectionGroup", {
          unique: false
        });
        e.createObjectStore(Kh, {
          keyPath: jh
        }).createIndex(Qh, zh, {
          unique: false
        });
        e.createObjectStore(Yh, {
          keyPath: Wh
        }).createIndex($h, Xh, {
          unique: false
        });
      }(e));
    }
    if (r < 16 && s >= 16) {
      a = a.next(() => {
        t.objectStore(Kh).clear();
      }).next(() => {
        t.objectStore(Yh).clear();
      });
    }
    if (r < 17 && s >= 17) {
      a = a.next(() => {
        (function (e) {
          e.createObjectStore(iC, {
            keyPath: "name"
          });
        })(e);
      });
    }
    if (r < 18 && s >= 18 && n()) {
      a = a.next(() => {
        t.objectStore(Kh).clear();
      }).next(() => {
        t.objectStore(Yh).clear();
      });
    }
    return a;
  }
  ea(e) {
    let t = 0;
    return e.store(uh)._i((e, n) => {
      t += fC(n);
    }).next(() => {
      const n = {
        byteSize: t
      };
      return e.store(bh).put(Nh, n);
    });
  }
  Xo(e) {
    const t = e.store(hh);
    const n = e.store(Ch);
    return t.ti().next(t => lB.forEach(t, t => {
      const r = IDBKeyRange.bound([t.userId, Hn], [t.userId, t.lastAcknowledgedBatchId]);
      return n.ti(fh, r).next(n => lB.forEach(n, n => {
        Nt(n.userId === t.userId, 18650, "Cannot process batch from unexpected user", {
          batchId: n.batchId
        });
        const r = vC(this.serializer, n);
        return dC(e, t.userId, r).next(() => {});
      }));
    }));
  }
  ta(e) {
    const t = e.store(Sh);
    const n = e.store(uh);
    return e.store(Gh).get(kh).next(e => {
      const r = [];
      return n._i((n, s) => {
        const i = new Yt(n);
        const a = function (e) {
          return [0, ih(e)];
        }(i);
        r.push(t.get(a).next(n => n ? lB.resolve() : (n => t.put({
          targetId: 0,
          path: ih(n),
          sequenceNumber: e.highestListenSequenceNumber
        }))(i)));
      }).next(() => lB.waitFor(r));
    });
  }
  na(e, t) {
    e.createObjectStore(Ph, {
      keyPath: Mh
    });
    const n = t.store(Ph);
    const r = new fd();
    const s = e => {
      if (r.add(e)) {
        const t = e.lastSegment();
        const r = e.popLast();
        return n.put({
          collectionId: t,
          parent: ih(r)
        });
      }
    };
    return t.store(uh)._i({
      si: true
    }, (e, t) => {
      const n = new Yt(e);
      return s(n.popLast());
    }).next(() => t.store(Dh)._i({
      si: true
    }, ([e, t, n], r) => {
      const i = Bh(t);
      return s(i.popLast());
    }));
  }
  ra(e) {
    const t = e.store(Ah);
    return t._i((e, n) => {
      const r = TC(this.serializer, n);
      const s = bC(this.serializer, r);
      return t.put(s);
    });
  }
  ia(e, t) {
    const n = t.store(uh);
    const r = [];
    return n._i((e, n) => {
      const s = t.store(wh);
      const i = function (e) {
        if (e.document) {
          return new nn(Yt.fromString(e.document.name).popFirst(5));
        } else if (e.noDocument) {
          return nn.fromSegments(e.noDocument.path);
        } else if (e.unknownDocument) {
          return nn.fromSegments(e.unknownDocument.path);
        } else {
          return Tt(36783);
        }
      }(n).path.toArray();
      const a = {
        prefixPath: i.slice(0, i.length - 2),
        collectionGroup: i[i.length - 2],
        documentId: i[i.length - 1],
        readTime: n.readTime || [0, 0],
        unknownDocument: n.unknownDocument,
        noDocument: n.noDocument,
        document: n.document,
        hasCommittedMutations: !!n.hasCommittedMutations
      };
      r.push(s.put(a));
    }).next(() => lB.waitFor(r));
  }
  sa(e, t) {
    const n = t.store(Ch);
    const r = Md(this.serializer);
    const s = new rf(af.Ho, this.serializer.Xi);
    return n.ti().next(e => {
      const n = new Map();
      e.forEach(e => {
        let t = n.get(e.userId) ?? la();
        vC(this.serializer, e).keys().forEach(e => t = t.add(e));
        n.set(e.userId, t);
      });
      return lB.forEach(n, (e, n) => {
        const i = new bo(n);
        const a = UC.ts(this.serializer, i);
        const o = s.getIndexManager(i);
        const B = LC.ts(i, this.serializer, o, s.referenceDelegate);
        return new Qd(r, B, a, o).recalculateAndSaveOverlaysForDocumentKeys(new pC(t, oB.Br), e).next();
      });
    });
  }
};
function uf(e) {
  e.createObjectStore(Sh, {
    keyPath: xh
  }).createIndex(Lh, Rh, {
    unique: true
  });
  e.createObjectStore(Ah, {
    keyPath: "targetId"
  }).createIndex(Fh, Oh, {
    unique: true
  });
  e.createObjectStore(Gh);
}
var cf = "IndexedDbPersistence";
var lf = 1800000;
var hf = 5000;
var Cf = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
var df = "main";
var ff = class e {
  constructor(t, n, r, s, i, a, o, B, u, c, l = 18) {
    this.allowTabSynchronization = t;
    this.persistenceKey = n;
    this.clientId = r;
    this.qn = i;
    this.window = a;
    this.document = o;
    this._a = u;
    this.oa = c;
    this.aa = l;
    this.Lo = null;
    this.$o = false;
    this.isPrimary = false;
    this.networkEnabled = true;
    this.ua = null;
    this.inForeground = false;
    this.ca = null;
    this.la = null;
    this.Ea = Number.NEGATIVE_INFINITY;
    this.ha = e => Promise.resolve();
    if (!e.cn()) {
      throw new jt(Kt.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    }
    this.referenceDelegate = new Ad(this, s);
    this.Ta = n + df;
    this.serializer = new DC(B);
    this.Pa = new dB(this.Ta, this.aa, new Bf(this.serializer));
    this.Uo = new JC();
    this.ko = new vd(this.referenceDelegate, this.serializer);
    this.remoteDocumentCache = Md(this.serializer);
    this.qo = new MC();
    if (this.window && this.window.localStorage) {
      this.Ia = this.window.localStorage;
    } else {
      this.Ia = null;
      if (c === false) {
        _t(cf, "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.");
      }
    }
  }
  start() {
    return this.Ra().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization) {
        throw new jt(Kt.FAILED_PRECONDITION, Cf);
      }
      this.Aa();
      this.Va();
      this.da();
      return this.runTransaction("getHighestListenSequenceNumber", "readonly", e => this.ko.getHighestSequenceNumber(e));
    }).then(e => {
      this.Lo = new oB(e, this._a);
    }).then(() => {
      this.$o = true;
    }).catch(e => {
      if (this.Pa) {
        this.Pa.close();
      }
      return Promise.reject(e);
    });
  }
  fa(e) {
    this.ha = async t => {
      if (this.started) {
        return e(t);
      }
    };
    return e(this.isPrimary);
  }
  setDatabaseDeletedListener(e) {
    this.Pa.Hr(async t => {
      if (t.newVersion === null) {
        await e();
      }
    });
  }
  setNetworkEnabled(e) {
    if (this.networkEnabled !== e) {
      this.networkEnabled = e;
      this.qn.enqueueAndForget(async () => {
        if (this.started) {
          await this.Ra();
        }
      });
    }
  }
  Ra() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", e => gf(e).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary) {
        return this.ma(e).next(e => {
          if (!e) {
            this.isPrimary = false;
            this.qn.enqueueRetryable(() => this.ha(false));
          }
        });
      }
    }).next(() => this.pa(e)).next(t => this.isPrimary && !t ? this.ga(e).next(() => false) : !!t && this.ya(e).next(() => true))).catch(e => {
      if (mB(e)) {
        yt(cf, "Failed to extend owner lease: ", e);
        return this.isPrimary;
      }
      if (!this.allowTabSynchronization) {
        throw e;
      }
      yt(cf, "Releasing owner lease after error during lease refresh", e);
      return false;
    }).then(e => {
      if (this.isPrimary !== e) {
        this.qn.enqueueRetryable(() => this.ha(e));
      }
      this.isPrimary = e;
    });
  }
  ma(e) {
    return pf(e).get(lh).next(e => lB.resolve(this.wa(e)));
  }
  ba(e) {
    return gf(e).delete(this.clientId);
  }
  async Sa() {
    if (this.isPrimary && !this.xa(this.Ea, lf)) {
      this.Ea = Date.now();
      const e = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", e => {
        const t = gC(e, Vh);
        return t.ti().next(e => {
          const n = this.va(e, lf);
          const r = e.filter(e => n.indexOf(e) === -1);
          return lB.forEach(r, e => t.delete(e.clientId)).next(() => r);
        });
      }).catch(() => []);
      if (this.Ia) {
        for (const t of e) {
          this.Ia.removeItem(this.Da(t.clientId));
        }
      }
    }
  }
  da() {
    this.la = this.qn.enqueueAfterDelay("client_metadata_refresh", 4000, () => this.Ra().then(() => this.Sa()).then(() => this.da()));
  }
  wa(e) {
    return !!e && e.ownerId === this.clientId;
  }
  pa(e) {
    if (this.oa) {
      return lB.resolve(true);
    } else {
      return pf(e).get(lh).next(t => {
        if (t !== null && this.xa(t.leaseTimestampMs, hf) && !this.Ca(t.ownerId)) {
          if (this.wa(t) && this.networkEnabled) {
            return true;
          }
          if (!this.wa(t)) {
            if (!t.allowTabSynchronization) {
              throw new jt(Kt.FAILED_PRECONDITION, Cf);
            }
            return false;
          }
        }
        return !!this.networkEnabled && !!this.inForeground || gf(e).ti().next(e => this.va(e, hf).find(e => {
          if (this.clientId !== e.clientId) {
            const t = !this.networkEnabled && e.networkEnabled;
            const n = !this.inForeground && e.inForeground;
            const r = this.networkEnabled === e.networkEnabled;
            if (t || n && r) {
              return true;
            }
          }
          return false;
        }) === undefined);
      }).next(e => {
        if (this.isPrimary !== e) {
          yt(cf, `Client ${e ? "is" : "is not"} eligible for a primary lease.`);
        }
        return e;
      });
    }
  }
  async shutdown() {
    this.$o = false;
    this.Fa();
    if (this.la) {
      this.la.cancel();
      this.la = null;
    }
    this.Oa();
    this.Ma();
    await this.Pa.runTransaction("shutdown", "readwrite", [ch, Vh], e => {
      const t = new pC(e, oB.Br);
      return this.ga(t).next(() => this.ba(t));
    });
    this.Pa.close();
    this.Na();
  }
  va(e, t) {
    return e.filter(e => this.xa(e.updateTimeMs, t) && !this.Ca(e.clientId));
  }
  Ba() {
    return this.runTransaction("getActiveClients", "readonly", e => gf(e).ti().next(e => this.va(e, lf).map(e => e.clientId)));
  }
  get started() {
    return this.$o;
  }
  getGlobalsCache() {
    return this.Uo;
  }
  getMutationQueue(e, t) {
    return LC.ts(e, this.serializer, t, this.referenceDelegate);
  }
  getTargetCache() {
    return this.ko;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(e) {
    return new md(e, this.serializer.Xi.databaseId);
  }
  getDocumentOverlayCache(e) {
    return UC.ts(this.serializer, e);
  }
  getBundleCache() {
    return this.qo;
  }
  runTransaction(e, t, n) {
    yt(cf, "Starting transaction:", e);
    const r = t === "readonly" ? "readonly" : "readwrite";
    const s = function (e) {
      if (e === 18) {
        return CC;
      } else if (e === 17) {
        return hC;
      } else if (e === 16) {
        return lC;
      } else if (e === 15) {
        return cC;
      } else if (e === 14) {
        return uC;
      } else if (e === 13) {
        return BC;
      } else if (e === 12) {
        return oC;
      } else if (e === 11) {
        return aC;
      } else {
        Tt(60245);
        return;
      }
    }(this.aa);
    let i;
    return this.Pa.runTransaction(e, r, s, r => {
      i = new pC(r, this.Lo ? this.Lo.next() : oB.Br);
      if (t === "readwrite-primary") {
        return this.ma(i).next(e => !!e || this.pa(i)).next(t => {
          if (!t) {
            _t(`Failed to obtain primary lease for action '${e}'.`);
            this.isPrimary = false;
            this.qn.enqueueRetryable(() => this.ha(false));
            throw new jt(Kt.FAILED_PRECONDITION, BB);
          }
          return n(i);
        }).next(e => this.ya(i).next(() => e));
      } else {
        return this.La(i).next(() => n(i));
      }
    }).then(e => {
      i.raiseOnCommittedEvent();
      return e;
    });
  }
  La(e) {
    return pf(e).get(lh).next(e => {
      if (e !== null && this.xa(e.leaseTimestampMs, hf) && !this.Ca(e.ownerId) && !this.wa(e) && !this.oa && (!this.allowTabSynchronization || !e.allowTabSynchronization)) {
        throw new jt(Kt.FAILED_PRECONDITION, Cf);
      }
    });
  }
  ya(e) {
    const t = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return pf(e).put(lh, t);
  }
  static cn() {
    return dB.cn();
  }
  ga(e) {
    const t = pf(e);
    return t.get(lh).next(e => this.wa(e) ? (yt(cf, "Releasing primary lease."), t.delete(lh)) : lB.resolve());
  }
  xa(e, t) {
    const n = Date.now();
    return !(e < n - t) && (!(e > n) || !(_t(`Detected an update time that is in the future: ${e} > ${n}`), 1));
  }
  Aa() {
    if (this.document !== null && typeof this.document.addEventListener == "function") {
      this.ca = () => {
        this.qn.enqueueAndForget(() => {
          this.inForeground = this.document.visibilityState === "visible";
          return this.Ra();
        });
      };
      this.document.addEventListener("visibilitychange", this.ca);
      this.inForeground = this.document.visibilityState === "visible";
    }
  }
  Oa() {
    if (this.ca) {
      this.document.removeEventListener("visibilitychange", this.ca);
      this.ca = null;
    }
  }
  Va() {
    if (typeof this.window?.addEventListener == "function") {
      this.ua = () => {
        this.Fa();
        const e = /(?:Version|Mobile)\/1[456]/;
        if (s() && (navigator.appVersion.match(e) || navigator.userAgent.match(e))) {
          this.qn.enterRestrictedMode(true);
        }
        this.qn.enqueueAndForget(() => this.shutdown());
      };
      this.window.addEventListener("pagehide", this.ua);
    }
  }
  Ma() {
    if (this.ua) {
      this.window.removeEventListener("pagehide", this.ua);
      this.ua = null;
    }
  }
  Ca(e) {
    try {
      const t = this.Ia?.getItem(this.Da(e)) !== null;
      yt(cf, `Client '${e}' ${t ? "is" : "is not"} zombied in LocalStorage`);
      return t;
    } catch (e) {
      _t(cf, "Failed to get zombied client id.", e);
      return false;
    }
  }
  Fa() {
    if (this.Ia) {
      try {
        this.Ia.setItem(this.Da(this.clientId), String(Date.now()));
      } catch (Hu) {
        _t("Failed to set zombie client id.", Hu);
      }
    }
  }
  Na() {
    if (this.Ia) {
      try {
        this.Ia.removeItem(this.Da(this.clientId));
      } catch (Hu) {}
    }
  }
  Da(e) {
    return `firestore_zombie_${this.persistenceKey}_${e}`;
  }
};
function pf(e) {
  return gC(e, ch);
}
function gf(e) {
  return gC(e, Vh);
}
function mf(e, t) {
  let n = e.projectId;
  if (!e.isDefaultDatabase) {
    n += "." + e.database;
  }
  return "firestore/" + t + "/" + n + "/";
}
var Ef = class e {
  constructor(e, t, n, r) {
    this.targetId = e;
    this.fromCache = t;
    this.$a = n;
    this.Ua = r;
  }
  static ka(t, n) {
    let r = la();
    let s = la();
    for (const e of n.docChanges) {
      switch (e.type) {
        case 0:
          r = r.add(e.doc.key);
          break;
        case 1:
          s = s.add(e.doc.key);
      }
    }
    return new e(t, n.fromCache, r, s);
  }
};
function Df(e, t) {
  return nn.comparator(e.key, t.key);
}
var wf = class {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
};
var yf = class {
  constructor() {
    this.Qa = false;
    this.qa = false;
    this.Ka = 100;
    this.Wa = s() ? 8 : fB(r()) > 0 ? 6 : 4;
  }
  initialize(e, t) {
    this.Ga = e;
    this.indexManager = t;
    this.Qa = true;
  }
  getDocumentsMatchingQuery(e, t, n, r) {
    const s = {
      result: null
    };
    return this.ja(e, t).next(e => {
      s.result = e;
    }).next(() => {
      if (!s.result) {
        return this.za(e, t, r, n).next(e => {
          s.result = e;
        });
      }
    }).next(() => {
      if (s.result) {
        return;
      }
      const n = new wf();
      return this.Ha(e, t, n).next(r => {
        s.result = r;
        if (this.qa) {
          return this.Ja(e, t, n, r.size);
        }
      });
    }).next(() => s.result);
  }
  Ja(e, t, n, r) {
    if ($l(t)) {
      return lB.resolve();
    } else if (n.documentReadCount < this.Ka) {
      if (wt() <= h.DEBUG) {
        yt("QueryEngine", "SDK will not create cache indexes for query:", Ki(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Ka, "documents");
      }
      return lB.resolve();
    } else {
      if (wt() <= h.DEBUG) {
        yt("QueryEngine", "Query:", Ki(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results.");
      }
      if (n.documentReadCount > this.Wa * r) {
        if (wt() <= h.DEBUG) {
          yt("QueryEngine", "The SDK decides to create cache indexes for query:", Ki(t), "as using cache indexes may help improve performance.");
        }
        return this.indexManager.createTargetIndexes(e, Hi(t));
      } else {
        return lB.resolve();
      }
    }
  }
  ja(e, t) {
    if ($l(t)) {
      return lB.resolve(null);
    }
    let n = t;
    if (Pi(n)) {
      return lB.resolve(null);
    }
    let r = Hi(n);
    return this.indexManager.getIndexType(e, r).next(t => t === 0 ? null : (n.limit !== null && t === 1 && (n = qi(n, null, "F"), r = Hi(n)), this.indexManager.getDocumentsMatchingTarget(e, r).next(t => {
      const s = la(...t);
      return this.Ga.getDocuments(e, s).next(t => this.indexManager.getMinOffset(e, r).next(r => {
        const i = this.Ya(n, t);
        if (this.Za(n, i, s, r.readTime)) {
          return this.ja(e, qi(n, null, "F"));
        } else {
          return this.Xa(e, i, n, r);
        }
      }));
    })));
  }
  za(e, t, n, r) {
    if (($l(t) ? function (e) {
      for (const t of e.stages) {
        if (t instanceof Yu || t instanceof Wu) {
          return false;
        }
        if (t instanceof zu) {
          if (t.condition instanceof Su && t.condition._expr.name === "exists" && t.condition._expr.params[0] instanceof vu && t.condition._expr.params[0].fieldName === Qt) {
            continue;
          }
          return false;
        }
      }
      return true;
    }(t) : Pi(t)) || r.isEqual(di.min())) {
      return lB.resolve(null);
    } else {
      return this.Ga.getDocuments(e, n).next(s => {
        const i = this.Ya(t, s);
        if (this.Za(t, i, n, r)) {
          return lB.resolve(null);
        } else {
          if (wt() <= h.DEBUG) {
            yt("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), Xl(t));
          }
          return this.Xa(e, i, t, yi(r, pi)).next(e => e);
        }
      });
    }
  }
  Ya(e, t) {
    let n;
    let r;
    if ($l(e)) {
      n = new Ut(Df);
      r = t => Sd(e, t);
    } else {
      n = new Ut(Qi(e));
      r = t => ji(e, t);
    }
    t.forEach((e, t) => {
      if (r(t)) {
        n = n.add(t);
      }
    });
    return n;
  }
  Za(e, t, n, r) {
    if ($l(e)) {
      return function (e) {
        return e.stages.some(e => e instanceof Yu || e instanceof Wu);
      }(e);
    }
    if (e.limit === null) {
      return false;
    }
    if (n.size !== t.size) {
      return true;
    }
    const s = e.limitType === "F" ? t.last() : t.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(r) > 0);
  }
  Ha(e, t, n) {
    if (wt() <= h.DEBUG) {
      yt("QueryEngine", "Using full collection scan to execute query:", Xl(t));
    }
    return this.Ga.getDocumentsMatchingQuery(e, t, Ii.min(), n);
  }
  Xa(e, t, n, r) {
    return this.Ga.getDocumentsMatchingQuery(e, n, r).next(e => {
      t.forEach(t => {
        e = e.insert(t.key, t);
      });
      return e;
    });
  }
};
var _f = "LocalStore";
var If = class {
  constructor(e, t, n, r) {
    this.persistence = e;
    this.eu = t;
    this.serializer = r;
    this.tu = new Mt(St);
    this.nu = new ea(e => th(e), nh);
    this.ru = new Map();
    this.iu = e.getRemoteDocumentCache();
    this.ko = e.getTargetCache();
    this.qo = e.getBundleCache();
    this.su(n);
  }
  su(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e);
    this.indexManager = this.persistence.getIndexManager(e);
    this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager);
    this.localDocuments = new Qd(this.iu, this.mutationQueue, this.documentOverlayCache, this.indexManager);
    this.iu.setIndexManager(this.indexManager);
    this.eu.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", t => e.collect(t, this.tu));
  }
};
function vf(e, t, n, r) {
  return new If(e, t, n, r);
}
async function Tf(e, t) {
  const n = At(e);
  return await n.persistence.runTransaction("Handle user change", "readonly", e => {
    let r;
    return n.mutationQueue.getAllMutationBatches(e).next(s => {
      r = s;
      n.su(t);
      return n.mutationQueue.getAllMutationBatches(e);
    }).next(t => {
      const s = [];
      const i = [];
      let a = la();
      for (const e of r) {
        s.push(e.batchId);
        for (const t of e.mutations) {
          a = a.add(t.key);
        }
      }
      for (const e of t) {
        i.push(e.batchId);
        for (const t of e.mutations) {
          a = a.add(t.key);
        }
      }
      return n.localDocuments.getDocuments(e, a).next(e => ({
        _u: e,
        removedBatchIds: s,
        addedBatchIds: i
      }));
    });
  });
}
function bf(e) {
  const t = At(e);
  return t.persistence.runTransaction("Get last remote snapshot version", "readonly", e => t.ko.getLastRemoteSnapshotVersion(e));
}
function Nf(e, t, n) {
  let r = la();
  let s = la();
  n.forEach(e => r = r.add(e));
  return t.getEntries(e, r).next(e => {
    let r = na();
    n.forEach((n, i) => {
      const a = e.get(n);
      if (i.isFoundDocument() !== a.isFoundDocument()) {
        s = s.add(n);
      }
      if (i.isNoDocument() && i.version.isEqual(di.min())) {
        t.removeEntry(n, i.readTime);
        r = r.insert(n, i);
      } else if (!a.isValidDocument() || i.version.compareTo(a.version) > 0 || i.version.compareTo(a.version) === 0 && a.hasPendingWrites) {
        t.addEntry(i);
        r = r.insert(n, i);
      } else {
        yt(_f, "Ignoring outdated watch update for ", n, ". Current version:", a.version, " Watch version:", i.version);
      }
    });
    return {
      ou: r,
      au: s
    };
  });
}
function Af(e, t) {
  const n = At(e);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", e => {
    if (t === undefined) {
      t = Hn;
    }
    return n.mutationQueue.getNextMutationBatchAfterBatchId(e, t);
  });
}
function Ff(e, t) {
  const n = At(e);
  return n.persistence.runTransaction("Allocate target", "readwrite", e => {
    let r;
    return n.ko.getTargetData(e, t).next(s => s ? (r = s, lB.resolve(r)) : n.ko.allocateTargetId(e).next(s => {
      r = new EC(t, s, "TargetPurposeListen", e.currentSequenceNumber);
      return n.ko.addTargetData(e, r).next(() => r);
    }));
  }).then(e => {
    const r = n.tu.get(e.targetId);
    if (r === null || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) {
      n.tu = n.tu.insert(e.targetId, e);
      n.nu.set(t, e.targetId);
    }
    return e;
  });
}
async function Of(e, t, n) {
  const r = At(e);
  const s = r.tu.get(t);
  const i = n ? "readwrite" : "readwrite-primary";
  try {
    if (!n) {
      await r.persistence.runTransaction("Release target", i, e => r.persistence.referenceDelegate.removeTarget(e, s));
    }
  } catch (e) {
    if (!mB(e)) {
      throw e;
    }
    yt(_f, `Failed to update sequence numbers for target ${t}: ${e}`);
  }
  r.tu = r.tu.remove(t);
  r.nu.delete(s.target);
}
function Sf(e, t, n) {
  const r = At(e);
  let s = di.min();
  let i = la();
  return r.persistence.runTransaction("Execute query", "readwrite", e => function (e, t, n) {
    const r = At(e);
    const s = r.nu.get(n);
    if (s !== undefined) {
      return lB.resolve(r.tu.get(s));
    } else {
      return r.ko.getTargetData(t, n);
    }
  }(r, e, $l(t) ? t : Hi(t)).next(t => {
    if (t) {
      s = t.lastLimboFreeSnapshotVersion;
      return r.ko.getMatchingKeysForTargetId(e, t.targetId).next(e => {
        i = e;
      });
    }
  }).next(() => r.eu.getDocumentsMatchingQuery(e, t, n ? s : di.min(), n ? i : la())).next(e => {
    Rf(r, e);
    return {
      documents: e,
      uu: i
    };
  }));
}
function xf(e, t) {
  const n = At(e);
  const r = At(n.ko);
  const s = n.tu.get(t);
  if (s) {
    return Promise.resolve(s.target ?? null);
  } else {
    return n.persistence.runTransaction("Get target data", "readonly", e => r.Mt(e, t).next(e => e?.target ?? null));
  }
}
function Lf(e, t) {
  const n = At(e);
  const r = n.ru.get(t) || di.min();
  return n.persistence.runTransaction("Get new document changes", "readonly", e => n.iu.getAllFromCollectionGroup(e, t, yi(r, pi), Number.MAX_SAFE_INTEGER)).then(e => {
    Rf(n, e);
    return e;
  });
}
function Rf(e, t) {
  t.forEach((t, n) => {
    const r = n.key.getCollectionGroup();
    const s = e.ru.get(r) || di.min();
    if (n.readTime.compareTo(s) > 0) {
      e.ru.set(r, n.readTime);
    }
  });
}
async function kf(e, t, n = la()) {
  const r = await Ff(e, Hi(NC(t.bundledQuery)));
  const s = At(e);
  return s.persistence.runTransaction("Save named query", "readwrite", e => {
    const i = Ma(t.readTime);
    if (r.snapshotVersion.compareTo(i) >= 0) {
      return s.qo.saveNamedQuery(e, t);
    }
    const a = r.withResumeToken(mn.EMPTY_BYTE_STRING, i);
    s.tu = s.tu.insert(a.targetId, a);
    return s.ko.updateTargetData(e, a).next(() => s.ko.removeMatchingKeysForTargetId(e, r.targetId)).next(() => s.ko.addMatchingKeys(e, n, r.targetId)).next(() => s.qo.saveNamedQuery(e, t));
  });
}
var Gf = class {
  constructor(e, t) {
    this.hu = e;
    this.byteLength = t;
  }
  Tu() {
    return "metadata" in this.hu;
  }
};
function Pf(e, t = 10240) {
  let n = 0;
  return {
    async read() {
      if (n < e.byteLength) {
        const r = {
          value: e.slice(n, n + t),
          done: false
        };
        n += t;
        return r;
      }
      return {
        done: true
      };
    },
    async cancel() {},
    releaseLock() {},
    closed: Promise.resolve()
  };
}
var Mf = class {
  constructor(e, t) {
    this.asyncQueue = e;
    this.onlineStateHandler = t;
    this.state = "Unknown";
    this.Pu = 0;
    this.Iu = null;
    this.Ru = true;
  }
  Au() {
    if (this.Pu === 0) {
      this.Vu("Unknown");
      this.Iu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 10000, () => {
        this.Iu = null;
        this.du("Backend didn't respond within 10 seconds.");
        this.Vu("Offline");
        return Promise.resolve();
      });
    }
  }
  fu(e) {
    if (this.state === "Online") {
      this.Vu("Unknown");
    } else {
      this.Pu++;
      if (this.Pu >= 1) {
        this.mu();
        this.du(`Connection failed 1 times. Most recent error: ${e.toString()}`);
        this.Vu("Offline");
      }
    }
  }
  set(e) {
    this.mu();
    this.Pu = 0;
    if (e === "Online") {
      this.Ru = false;
    }
    this.Vu(e);
  }
  Vu(e) {
    if (e !== this.state) {
      this.state = e;
      this.onlineStateHandler(e);
    }
  }
  du(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    if (this.Ru) {
      _t(t);
      this.Ru = false;
    } else {
      yt("OnlineStateTracker", t);
    }
  }
  mu() {
    if (this.Iu !== null) {
      this.Iu.cancel();
      this.Iu = null;
    }
  }
};
var Vf = "RemoteStore";
var Hf = class {
  constructor(e, t, n, r, s) {
    this.localStore = e;
    this.datastore = t;
    this.asyncQueue = n;
    this.remoteSyncer = {};
    this.pu = [];
    this.gu = new Map();
    this.yu = new Map();
    this.wu = new Map();
    this.bu = new Id(1000);
    this.Su = new Id(1001);
    this.xu = new Set();
    this.vu = [];
    this.Du = s;
    this.Du.tn(e => {
      n.enqueueAndForget(async () => {
        if ($f(this)) {
          yt(Vf, "Restarting streams for network reachability change.");
          await async function (e) {
            const t = At(e);
            t.xu.add(4);
            await qf(t);
            t.Cu.set("Unknown");
            t.xu.delete(4);
            await Uf(t);
          }(this);
        }
      });
    });
    this.Cu = new Mf(n, r);
  }
};
async function Uf(e) {
  if ($f(e)) {
    for (const t of e.vu) {
      await t(true);
    }
  }
}
async function qf(e) {
  for (const t of e.vu) {
    await t(false);
  }
}
function Jf(e, t) {
  return e.yu.get(t) || undefined;
}
function Kf(e, t) {
  const n = At(e);
  const r = Jf(n, t.targetId);
  if (r !== undefined && n.gu.has(r)) {
    return;
  }
  const s = function (e, t) {
    const n = Jf(e, t);
    if (n !== undefined) {
      e.wu.delete(n);
    }
    const r = function (e, t) {
      if (t % 2 != 0) {
        return e.Su.next();
      } else {
        return e.bu.next();
      }
    }(e, t);
    e.yu.set(t, r);
    e.wu.set(r, t);
    return r;
  }(n, t.targetId);
  yt(Vf, "remoteStoreListen mapping SDK target ID to remote", t.targetId, s);
  const i = new EC(t.target, s, t.purpose, t.sequenceNumber, t.snapshotVersion, t.lastLimboFreeSnapshotVersion, t.resumeToken);
  n.gu.set(s, i);
  if (Wf(n)) {
    Yf(n);
  } else if (pp(n).ur()) {
    Qf(n, i);
  }
}
function jf(e, t) {
  const n = At(e);
  const r = pp(n);
  const s = Jf(n, t);
  yt(Vf, "remoteStoreUnlisten removing mapping of SDK target ID to remote", t, s);
  n.gu.delete(s);
  n.yu.delete(t);
  n.wu.delete(s);
  if (r.ur()) {
    zf(n, s);
  }
  if (n.gu.size === 0) {
    if (r.ur()) {
      r.Er();
    } else if ($f(n)) {
      n.Cu.set("Unknown");
    }
  }
}
function Qf(e, t) {
  e.Fu.rt(t.targetId);
  if (t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(di.min()) > 0) {
    const n = e.wu.get(t.targetId);
    if (n === undefined) {
      yt(Vf, "SDK target ID not found for remote ID: " + t.targetId);
      return;
    }
    const r = e.remoteSyncer.getRemoteKeysForTarget(n).size;
    t = t.withExpectedCount(r);
  }
  pp(e).yr(t);
}
function zf(e, t) {
  e.Fu.rt(t);
  pp(e).wr(t);
}
function Yf(e) {
  e.Fu = new ba({
    getRemoteKeysForTarget: t => {
      const n = e.wu.get(t);
      if (n !== undefined) {
        return e.remoteSyncer.getRemoteKeysForTarget(n);
      } else {
        return la();
      }
    },
    Mt: t => e.gu.get(t) || null,
    xt: () => e.datastore.serializer.databaseId
  });
  pp(e).start();
  e.Cu.Au();
}
function Wf(e) {
  return $f(e) && !pp(e).ar() && e.gu.size > 0;
}
function $f(e) {
  return At(e).xu.size === 0;
}
function Xf(e) {
  e.Fu = undefined;
}
async function Zf(e) {
  e.Cu.set("Online");
}
async function ep(e) {
  e.gu.forEach((t, n) => {
    Qf(e, t);
  });
}
async function tp(e, t) {
  Xf(e);
  if (Wf(e)) {
    e.Cu.fu(t);
    Yf(e);
  } else {
    e.Cu.set("Unknown");
  }
}
async function np(e, t, n) {
  e.Cu.set("Online");
  if (t instanceof Ia && t.state === 2 && t.cause) {
    try {
      await async function (e, t) {
        const n = t.cause;
        for (const r of t.targetIds) {
          if (e.gu.has(r)) {
            const t = e.wu.get(r);
            if (t !== undefined) {
              await e.remoteSyncer.rejectListen(t, n);
              e.yu.delete(t);
              e.wu.delete(r);
            }
            e.gu.delete(r);
          }
          e.Fu.removeTarget(r);
        }
      }(e, t);
    } catch (n) {
      yt(Vf, "Failed to remove targets %s: %s ", t.targetIds.join(","), n);
      await rp(e, n);
    }
  } else {
    if (t instanceof ya) {
      e.Fu.Tt(t);
    } else if (t instanceof _a) {
      e.Fu.ft(t);
    } else {
      e.Fu.Rt(t);
    }
    if (!n.isEqual(di.min())) {
      try {
        const t = await bf(e.localStore);
        if (n.compareTo(t) >= 0) {
          await function (e, t) {
            const n = e.Fu.Dt(t);
            n.targetChanges.forEach((n, r) => {
              if (n.resumeToken.approximateByteSize() > 0) {
                const s = e.gu.get(r);
                if (s) {
                  e.gu.set(r, s.withResumeToken(n.resumeToken, t));
                }
              }
            });
            n.targetMismatches.forEach((t, n) => {
              const r = e.gu.get(t);
              if (r) {
                e.gu.set(t, r.withResumeToken(mn.EMPTY_BYTE_STRING, r.snapshotVersion));
                zf(e, t);
                Qf(e, new EC(r.target, t, n, r.sequenceNumber));
              }
            });
            const r = function (e, t) {
              const n = new Map();
              t.targetChanges.forEach((t, r) => {
                const s = e.wu.get(r);
                if (s !== undefined) {
                  n.set(s, t);
                }
              });
              let r = new Mt(St);
              t.targetMismatches.forEach((t, n) => {
                const s = e.wu.get(t);
                if (s !== undefined) {
                  r = r.insert(s, n);
                }
              });
              return new Da(t.snapshotVersion, n, r, t.documentUpdates, t.augmentedDocumentUpdates, t.resolvedLimboDocuments);
            }(e, n);
            return e.remoteSyncer.applyRemoteEvent(r);
          }(e, n);
        }
      } catch (t) {
        yt(Vf, "Failed to raise snapshot:", t);
        await rp(e, t);
      }
    }
  }
}
async function rp(e, t, n) {
  if (!mB(t)) {
    throw t;
  }
  e.xu.add(1);
  await qf(e);
  e.Cu.set("Offline");
  n ||= () => bf(e.localStore);
  e.asyncQueue.enqueueRetryable(async () => {
    yt(Vf, "Retrying IndexedDB access");
    await n();
    e.xu.delete(1);
    await Uf(e);
  });
}
function sp(e, t) {
  return t().catch(n => rp(e, n, t));
}
async function ip(e) {
  const t = At(e);
  const n = gp(t);
  let r = t.pu.length > 0 ? t.pu[t.pu.length - 1].batchId : Hn;
  while (ap(t)) {
    try {
      const e = await Af(t.localStore, r);
      if (e === null) {
        if (t.pu.length === 0) {
          n.Er();
        }
        break;
      }
      r = e.batchId;
      op(t, e);
    } catch (e) {
      await rp(t, e);
    }
  }
  if (Bp(t)) {
    up(t);
  }
}
function ap(e) {
  return $f(e) && e.pu.length < 10;
}
function op(e, t) {
  e.pu.push(t);
  const n = gp(e);
  if (n.ur() && n.br) {
    n.Sr(t.mutations);
  }
}
function Bp(e) {
  return $f(e) && !gp(e).ar() && e.pu.length > 0;
}
function up(e) {
  gp(e).start();
}
async function cp(e) {
  gp(e).Cr();
}
async function lp(e) {
  const t = gp(e);
  for (const n of e.pu) {
    t.Sr(n.mutations);
  }
}
async function hp(e, t, n) {
  const r = e.pu.shift();
  const s = sh.from(r, t, n);
  await sp(e, () => e.remoteSyncer.applySuccessfulWrite(s));
  await ip(e);
}
async function Cp(e, t) {
  if (t && gp(e).br) {
    await async function (e, t) {
      if (function (e) {
        return Xi(e) && e !== Kt.ABORTED;
      }(t.code)) {
        const n = e.pu.shift();
        gp(e).lr();
        await sp(e, () => e.remoteSyncer.rejectFailedWrite(n.batchId, t));
        await ip(e);
      }
    }(e, t);
  }
  if (Bp(e)) {
    up(e);
  }
}
async function dp(e, t) {
  const n = At(e);
  n.asyncQueue.verifyOperationInProgress();
  yt(Vf, "RemoteStore received new credentials");
  const r = $f(n);
  n.xu.add(3);
  await qf(n);
  if (r) {
    n.Cu.set("Unknown");
  }
  await n.remoteSyncer.handleCredentialChange(t);
  n.xu.delete(3);
  await Uf(n);
}
async function fp(e, t) {
  const n = At(e);
  if (t) {
    n.xu.delete(2);
    await Uf(n);
  } else if (!t) {
    n.xu.add(2);
    await qf(n);
    n.Cu.set("Unknown");
  }
}
function pp(e) {
  if (!e.Ou) {
    e.Ou = function (e, t, n) {
      const r = At(e);
      r.Or();
      return new Zo(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
    }(e.datastore, e.asyncQueue, {
      pn: Zf.bind(null, e),
      yn: ep.bind(null, e),
      bn: tp.bind(null, e),
      gr: np.bind(null, e)
    });
    e.vu.push(async t => {
      if (t) {
        e.Ou.lr();
        if (Wf(e)) {
          Yf(e);
        } else {
          e.Cu.set("Unknown");
        }
      } else {
        await e.Ou.stop();
        Xf(e);
      }
    });
  }
  return e.Ou;
}
function gp(e) {
  if (!e.Mu) {
    e.Mu = function (e, t, n) {
      const r = At(e);
      r.Or();
      return new eB(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
    }(e.datastore, e.asyncQueue, {
      pn: () => Promise.resolve(),
      yn: cp.bind(null, e),
      bn: Cp.bind(null, e),
      vr: lp.bind(null, e),
      Dr: hp.bind(null, e)
    });
    e.vu.push(async t => {
      if (t) {
        e.Mu.lr();
        await ip(e);
      } else {
        await e.Mu.stop();
        if (e.pu.length > 0) {
          yt(Vf, `Stopping write stream with ${e.pu.length} pending writes`);
          e.pu = [];
        }
      }
    });
  }
  return e.Mu;
}
var mp = class {
  constructor(e) {
    this.observer = e;
    this.muted = false;
  }
  next(e) {
    if (!this.muted) {
      if (this.observer.next) {
        this.Nu(this.observer.next, e);
      }
    }
  }
  error(e) {
    if (!this.muted) {
      if (this.observer.error) {
        this.Nu(this.observer.error, e);
      } else {
        _t("Uncaught Error in snapshot listener:", e.toString());
      }
    }
  }
  Bu() {
    this.muted = true;
  }
  Nu(e, t) {
    setTimeout(() => {
      if (!this.muted) {
        e(t);
      }
    }, 0);
  }
};
var Ep = class e {
  constructor(e, t, n, r, s) {
    this.asyncQueue = e;
    this.timerId = t;
    this.targetTimeMs = n;
    this.op = r;
    this.removalCallback = s;
    this.deferred = new No();
    this.then = this.deferred.promise.then.bind(this.deferred.promise);
    this.deferred.promise.catch(e => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, s, i) {
    const a = Date.now() + r;
    const o = new e(t, n, a, s, i);
    o.start(r);
    return o;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    if (this.timerHandle !== null) {
      this.clearTimeout();
      this.deferred.reject(new jt(Kt.CANCELLED, "Operation cancelled" + (e ? ": " + e : "")));
    }
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then(e => this.deferred.resolve(e))) : Promise.resolve());
  }
  clearTimeout() {
    if (this.timerHandle !== null) {
      this.removalCallback(this);
      clearTimeout(this.timerHandle);
      this.timerHandle = null;
    }
  }
};
function Dp(e, t) {
  _t("AsyncQueue", `${t}: ${e}`);
  if (mB(e)) {
    return new jt(Kt.UNAVAILABLE, `${t}: ${e}`);
  }
  throw e;
}
var wp = class {
  constructor(e, t) {
    this.Lu = e;
    this.serializer = t;
    this.metadata = new No();
    this.buffer = new Uint8Array();
    this.$u = new TextDecoder("utf-8");
    this.Uu().then(e => {
      if (e && e.Tu()) {
        this.metadata.resolve(e.hu.metadata);
      } else {
        this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(e?.hu)}`));
      }
    }, e => this.metadata.reject(e));
  }
  close() {
    return this.Lu.cancel();
  }
  async getMetadata() {
    return this.metadata.promise;
  }
  async ku() {
    await this.getMetadata();
    return this.Uu();
  }
  async Uu() {
    const e = await this.Qu();
    if (e === null) {
      return null;
    }
    const t = this.$u.decode(e);
    const n = Number(t);
    if (isNaN(n)) {
      this.qu(`length string (${t}) is not valid number`);
    }
    const r = await this.Ku(n);
    return new Gf(JSON.parse(r), e.length + n);
  }
  Wu() {
    return this.buffer.findIndex(e => e === "{".charCodeAt(0));
  }
  async Qu() {
    while (this.Wu() < 0 && !(await this.Gu()));
    if (this.buffer.length === 0) {
      return null;
    }
    const e = this.Wu();
    if (e < 0) {
      this.qu("Reached the end of bundle when a length string is expected.");
    }
    const t = this.buffer.slice(0, e);
    this.buffer = this.buffer.slice(e);
    return t;
  }
  async Ku(e) {
    while (this.buffer.length < e) {
      if (await this.Gu()) {
        this.qu("Reached the end of bundle when more is expected.");
      }
    }
    const t = this.$u.decode(this.buffer.slice(0, e));
    this.buffer = this.buffer.slice(e);
    return t;
  }
  qu(e) {
    this.Lu.cancel();
    throw new Error(`Invalid bundle format: ${e}`);
  }
  async Gu() {
    const e = await this.Lu.read();
    if (!e.done) {
      const t = new Uint8Array(this.buffer.length + e.value.length);
      t.set(this.buffer);
      t.set(e.value, this.buffer.length);
      this.buffer = t;
    }
    return e.done;
  }
};
var yp = "IndexBackfiller";
var _p = class {
  constructor(e, t) {
    this.asyncQueue = e;
    this.zu = t;
    this.task = null;
  }
  start() {
    this.Hu(15000);
  }
  stop() {
    if (this.task) {
      this.task.cancel();
      this.task = null;
    }
  }
  get started() {
    return this.task !== null;
  }
  Hu(e) {
    yt(yp, `Scheduled in ${e}ms`);
    this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", e, async () => {
      this.task = null;
      try {
        const e = await this.zu.Ju();
        yt(yp, `Documents written: ${e}`);
      } catch (e) {
        if (mB(e)) {
          yt(yp, "Ignoring IndexedDB error during index backfill: ", e);
        } else {
          await cB(e);
        }
      }
      await this.Hu(60000);
    });
  }
};
var Ip = class {
  constructor(e, t) {
    this.localStore = e;
    this.persistence = t;
  }
  async Ju(e = 50) {
    return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", t => this.Yu(t, e));
  }
  Yu(e, t) {
    const n = new Set();
    let r = t;
    let s = true;
    return lB.doWhile(() => s === true && r > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t => {
      if (t !== null && !n.has(t)) {
        yt(yp, `Processing collection: ${t}`);
        return this.Zu(e, t, r).next(e => {
          r -= e;
          n.add(t);
        });
      }
      s = false;
    })).next(() => t - r);
  }
  Zu(e, t, n) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e, t).next(r => this.localStore.localDocuments.getNextDocuments(e, t, r, n).next(n => {
      const s = n.changes;
      return this.localStore.indexManager.updateIndexEntries(e, s).next(() => this.Xu(r, n)).next(n => {
        yt(yp, `Updating offset: ${n}`);
        return this.localStore.indexManager.updateCollectionGroup(e, t, n);
      }).next(() => s.size);
    }));
  }
  Xu(e, t) {
    let n = e;
    t.changes.forEach((e, t) => {
      const r = _i(t);
      if (vi(r, n) > 0) {
        n = r;
      }
    });
    return new Ii(n.readTime, n.documentKey, Math.max(t.batchId, e.largestBatchId));
  }
};
var vp = "firestore_clients";
function Tp(e, t) {
  return `${vp}_${e}_${t}`;
}
var bp = "firestore_mutations";
function Np(e, t, n) {
  let r = `${bp}_${e}_${n}`;
  if (t.isAuthenticated()) {
    r += `_${t.uid}`;
  }
  return r;
}
var Ap = "firestore_targets";
function Fp(e, t) {
  return `${Ap}_${e}_${t}`;
}
var Op = "SharedClientState";
var Sp = class e {
  constructor(e, t, n, r) {
    this.user = e;
    this.batchId = t;
    this.state = n;
    this.error = r;
  }
  static ec(t, n, r) {
    const s = JSON.parse(r);
    let i;
    let a = typeof s == "object" && ["pending", "acknowledged", "rejected"].indexOf(s.state) !== -1 && (s.error === undefined || typeof s.error == "object");
    if (a && s.error) {
      a = typeof s.error.message == "string" && typeof s.error.code == "string";
      if (a) {
        i = new jt(s.error.code, s.error.message);
      }
    }
    if (a) {
      return new e(t, n, s.state, i);
    } else {
      _t(Op, `Failed to parse mutation state for ID '${n}': ${r}`);
      return null;
    }
  }
  tc() {
    const e = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    if (this.error) {
      e.error = {
        code: this.error.code,
        message: this.error.message
      };
    }
    return JSON.stringify(e);
  }
};
var xp = class e {
  constructor(e, t, n) {
    this.targetId = e;
    this.state = t;
    this.error = n;
  }
  static ec(t, n) {
    const r = JSON.parse(n);
    let s;
    let i = typeof r == "object" && ["not-current", "current", "rejected"].indexOf(r.state) !== -1 && (r.error === undefined || typeof r.error == "object");
    if (i && r.error) {
      i = typeof r.error.message == "string" && typeof r.error.code == "string";
      if (i) {
        s = new jt(r.error.code, r.error.message);
      }
    }
    if (i) {
      return new e(t, r.state, s);
    } else {
      _t(Op, `Failed to parse target state for ID '${t}': ${n}`);
      return null;
    }
  }
  tc() {
    const e = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    if (this.error) {
      e.error = {
        code: this.error.code,
        message: this.error.message
      };
    }
    return JSON.stringify(e);
  }
};
var Lp = class e {
  constructor(e, t) {
    this.clientId = e;
    this.activeTargetIds = t;
  }
  static ec(t, n) {
    const r = JSON.parse(n);
    let s = typeof r == "object" && r.activeTargetIds instanceof Array;
    let i = Ca();
    for (let e = 0; s && e < r.activeTargetIds.length; ++e) {
      s = Jn(r.activeTargetIds[e]);
      i = i.add(r.activeTargetIds[e]);
    }
    if (s) {
      return new e(t, i);
    } else {
      _t(Op, `Failed to parse client data for instance '${t}': ${n}`);
      return null;
    }
  }
};
var Rp = class e {
  constructor(e, t) {
    this.clientId = e;
    this.onlineState = t;
  }
  static ec(t) {
    const n = JSON.parse(t);
    if (typeof n == "object" && ["Unknown", "Online", "Offline"].indexOf(n.onlineState) !== -1 && typeof n.clientId == "string") {
      return new e(n.clientId, n.onlineState);
    } else {
      _t(Op, `Failed to parse online state: ${t}`);
      return null;
    }
  }
};
var kp = class {
  constructor() {
    this.activeTargetIds = Ca();
  }
  nc(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  rc(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  tc() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e);
  }
};
var Gp = class {
  constructor(e, t, n, r, s) {
    this.window = e;
    this.qn = t;
    this.persistenceKey = n;
    this.sc = r;
    this.syncEngine = null;
    this.onlineStateHandler = null;
    this.sequenceNumberHandler = null;
    this._c = this.oc.bind(this);
    this.ac = new Mt(St);
    this.started = false;
    this.uc = [];
    const i = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage;
    this.currentUser = s;
    this.cc = Tp(this.persistenceKey, this.sc);
    this.lc = function (e) {
      return `firestore_sequence_number_${e}`;
    }(this.persistenceKey);
    this.ac = this.ac.insert(this.sc, new kp());
    this.Ec = new RegExp(`^${vp}_${i}_([^_]*)$`);
    this.hc = new RegExp(`^${bp}_${i}_(\\d+)(?:_(.*))?$`);
    this.Tc = new RegExp(`^${Ap}_${i}_(\\d+)$`);
    this.Pc = function (e) {
      return `firestore_online_state_${e}`;
    }(this.persistenceKey);
    this.Ic = function (e) {
      return `firestore_bundle_loaded_v2_${e}`;
    }(this.persistenceKey);
    this.window.addEventListener("storage", this._c);
  }
  static cn(e) {
    return !!e && !!e.localStorage;
  }
  async start() {
    const e = await this.syncEngine.Ba();
    for (const n of e) {
      if (n === this.sc) {
        continue;
      }
      const e = this.getItem(Tp(this.persistenceKey, n));
      if (e) {
        const t = Lp.ec(n, e);
        if (t) {
          this.ac = this.ac.insert(t.clientId, t);
        }
      }
    }
    this.Rc();
    const t = this.storage.getItem(this.Pc);
    if (t) {
      const e = this.Ac(t);
      if (e) {
        this.Vc(e);
      }
    }
    for (const n of this.uc) {
      this.oc(n);
    }
    this.uc = [];
    this.window.addEventListener("pagehide", () => this.shutdown());
    this.started = true;
  }
  writeSequenceNumber(e) {
    this.setItem(this.lc, JSON.stringify(e));
  }
  getAllActiveQueryTargets() {
    return this.dc(this.ac);
  }
  isActiveQueryTarget(e) {
    let t = false;
    this.ac.forEach((n, r) => {
      if (r.activeTargetIds.has(e)) {
        t = true;
      }
    });
    return t;
  }
  addPendingMutation(e) {
    this.fc(e, "pending");
  }
  updateMutationState(e, t, n) {
    this.fc(e, t, n);
    this.mc(e);
  }
  addLocalQueryTarget(e, t = true) {
    let n = "not-current";
    if (this.isActiveQueryTarget(e)) {
      const t = this.storage.getItem(Fp(this.persistenceKey, e));
      if (t) {
        const r = xp.ec(e, t);
        if (r) {
          n = r.state;
        }
      }
    }
    if (t) {
      this.gc.nc(e);
    }
    this.Rc();
    return n;
  }
  removeLocalQueryTarget(e) {
    this.gc.rc(e);
    this.Rc();
  }
  isLocalQueryTarget(e) {
    return this.gc.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    this.removeItem(Fp(this.persistenceKey, e));
  }
  updateQueryState(e, t, n) {
    this.yc(e, t, n);
  }
  handleUserChange(e, t, n) {
    t.forEach(e => {
      this.mc(e);
    });
    this.currentUser = e;
    n.forEach(e => {
      this.addPendingMutation(e);
    });
  }
  setOnlineState(e) {
    this.wc(e);
  }
  notifyBundleLoaded(e) {
    this.bc(e);
  }
  shutdown() {
    if (this.started) {
      this.window.removeEventListener("storage", this._c);
      this.removeItem(this.cc);
      this.started = false;
    }
  }
  getItem(e) {
    const t = this.storage.getItem(e);
    yt(Op, "READ", e, t);
    return t;
  }
  setItem(e, t) {
    yt(Op, "SET", e, t);
    this.storage.setItem(e, t);
  }
  removeItem(e) {
    yt(Op, "REMOVE", e);
    this.storage.removeItem(e);
  }
  oc(e) {
    const t = e;
    if (t.storageArea === this.storage) {
      yt(Op, "EVENT", t.key, t.newValue);
      if (t.key === this.cc) {
        _t("Received WebStorage notification for local change. Another client might have garbage-collected our state");
        return;
      }
      this.qn.enqueueRetryable(async () => {
        if (this.started) {
          if (t.key !== null) {
            if (this.Ec.test(t.key)) {
              if (t.newValue == null) {
                const e = this.Sc(t.key);
                return this.xc(e, null);
              }
              {
                const e = this.vc(t.key, t.newValue);
                if (e) {
                  return this.xc(e.clientId, e);
                }
              }
            } else if (this.hc.test(t.key)) {
              if (t.newValue !== null) {
                const e = this.Dc(t.key, t.newValue);
                if (e) {
                  return this.Cc(e);
                }
              }
            } else if (this.Tc.test(t.key)) {
              if (t.newValue !== null) {
                const e = this.Fc(t.key, t.newValue);
                if (e) {
                  return this.Oc(e);
                }
              }
            } else if (t.key === this.Pc) {
              if (t.newValue !== null) {
                const e = this.Ac(t.newValue);
                if (e) {
                  return this.Vc(e);
                }
              }
            } else if (t.key === this.lc) {
              const e = function (e) {
                let t = oB.Br;
                if (e != null) {
                  try {
                    const n = JSON.parse(e);
                    Nt(typeof n == "number", 30636, {
                      Mc: e
                    });
                    t = n;
                  } catch (e) {
                    _t(Op, "Failed to read sequence number from WebStorage", e);
                  }
                }
                return t;
              }(t.newValue);
              if (e !== oB.Br) {
                this.sequenceNumberHandler(e);
              }
            } else if (t.key === this.Ic) {
              const e = this.Nc(t.newValue);
              await Promise.all(e.map(e => this.syncEngine.Bc(e)));
            }
          }
        } else {
          this.uc.push(t);
        }
      });
    }
  }
  get gc() {
    return this.ac.get(this.sc);
  }
  Rc() {
    this.setItem(this.cc, this.gc.tc());
  }
  fc(e, t, n) {
    const r = new Sp(this.currentUser, e, t, n);
    const s = Np(this.persistenceKey, this.currentUser, e);
    this.setItem(s, r.tc());
  }
  mc(e) {
    const t = Np(this.persistenceKey, this.currentUser, e);
    this.removeItem(t);
  }
  wc(e) {
    const t = {
      clientId: this.sc,
      onlineState: e
    };
    this.storage.setItem(this.Pc, JSON.stringify(t));
  }
  yc(e, t, n) {
    const r = Fp(this.persistenceKey, e);
    const s = new xp(e, t, n);
    this.setItem(r, s.tc());
  }
  bc(e) {
    const t = JSON.stringify(Array.from(e));
    this.setItem(this.Ic, t);
  }
  Sc(e) {
    const t = this.Ec.exec(e);
    if (t) {
      return t[1];
    } else {
      return null;
    }
  }
  vc(e, t) {
    const n = this.Sc(e);
    return Lp.ec(n, t);
  }
  Dc(e, t) {
    const n = this.hc.exec(e);
    const r = Number(n[1]);
    const s = n[2] !== undefined ? n[2] : null;
    return Sp.ec(new bo(s), r, t);
  }
  Fc(e, t) {
    const n = this.Tc.exec(e);
    const r = Number(n[1]);
    return xp.ec(r, t);
  }
  Ac(e) {
    return Rp.ec(e);
  }
  Nc(e) {
    return JSON.parse(e);
  }
  async Cc(e) {
    if (e.user.uid === this.currentUser.uid) {
      return this.syncEngine.Lc(e.batchId, e.state, e.error);
    }
    yt(Op, `Ignoring mutation for non-active user ${e.user.uid}`);
  }
  Oc(e) {
    return this.syncEngine.$c(e.targetId, e.state, e.error);
  }
  xc(e, t) {
    const n = t ? this.ac.insert(e, t) : this.ac.remove(e);
    const r = this.dc(this.ac);
    const s = this.dc(n);
    const i = [];
    const a = [];
    s.forEach(e => {
      if (!r.has(e)) {
        i.push(e);
      }
    });
    r.forEach(e => {
      if (!s.has(e)) {
        a.push(e);
      }
    });
    return this.syncEngine.Uc(i, a).then(() => {
      this.ac = n;
    });
  }
  Vc(e) {
    if (this.ac.get(e.clientId)) {
      this.onlineStateHandler(e.onlineState);
    }
  }
  dc(e) {
    let t = Ca();
    e.forEach((e, n) => {
      t = t.unionWith(n.activeTargetIds);
    });
    return t;
  }
};
var Pp = class {
  constructor() {
    this.kc = new kp();
    this.Qc = {};
    this.onlineStateHandler = null;
    this.sequenceNumberHandler = null;
  }
  addPendingMutation(e) {}
  updateMutationState(e, t, n) {}
  addLocalQueryTarget(e, t = true) {
    if (t) {
      this.kc.nc(e);
    }
    return this.Qc[e] || "not-current";
  }
  updateQueryState(e, t, n) {
    this.Qc[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.kc.rc(e);
  }
  isLocalQueryTarget(e) {
    return this.kc.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Qc[e];
  }
  getAllActiveQueryTargets() {
    return this.kc.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.kc.activeTargetIds.has(e);
  }
  start() {
    this.kc = new kp();
    return Promise.resolve();
  }
  handleUserChange(e, t, n) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
};
function Mp() {
  if (typeof window != "undefined") {
    return window;
  } else {
    return null;
  }
}
function Vp() {
  if (typeof document != "undefined") {
    return document;
  } else {
    return null;
  }
}
var Hp;
var Up = class e {
  static emptySet(t) {
    return new e(t.comparator);
  }
  constructor(e) {
    this.comparator = e ? (t, n) => e(t, n) || nn.comparator(t.key, n.key) : (e, t) => nn.comparator(e.key, t.key);
    this.keyedMap = sa();
    this.sortedSet = new Mt(this.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const t = this.keyedMap.get(e);
    if (t) {
      return this.sortedSet.indexOf(t);
    } else {
      return -1;
    }
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((t, n) => {
      e(t);
      return false;
    });
  }
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  delete(e) {
    const t = this.get(e);
    if (t) {
      return this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t));
    } else {
      return this;
    }
  }
  isEqual(t) {
    if (!(t instanceof e)) {
      return false;
    }
    if (this.size !== t.size) {
      return false;
    }
    const n = this.sortedSet.getIterator();
    const r = t.sortedSet.getIterator();
    while (n.hasNext()) {
      const e = n.getNext().key;
      const t = r.getNext().key;
      if (!e.isEqual(t)) {
        return false;
      }
    }
    return true;
  }
  toString() {
    const e = [];
    this.forEach(t => {
      e.push(t.toString());
    });
    if (e.length === 0) {
      return "DocumentSet ()";
    } else {
      return "DocumentSet (\n  " + e.join("  \n") + "\n)";
    }
  }
  copy(t, n) {
    const r = new e();
    r.comparator = this.comparator;
    r.keyedMap = t;
    r.sortedSet = n;
    return r;
  }
};
var qp = class {
  constructor() {
    this.qc = new Mt(nn.comparator);
  }
  track(e) {
    const t = e.doc.key;
    const n = this.qc.get(t);
    if (n) {
      if (e.type !== 0 && n.type === 3) {
        this.qc = this.qc.insert(t, e);
      } else if (e.type === 3 && n.type !== 1) {
        this.qc = this.qc.insert(t, {
          type: n.type,
          doc: e.doc
        });
      } else if (e.type === 2 && n.type === 2) {
        this.qc = this.qc.insert(t, {
          type: 2,
          doc: e.doc
        });
      } else if (e.type === 2 && n.type === 0) {
        this.qc = this.qc.insert(t, {
          type: 0,
          doc: e.doc
        });
      } else if (e.type === 1 && n.type === 0) {
        this.qc = this.qc.remove(t);
      } else if (e.type === 1 && n.type === 2) {
        this.qc = this.qc.insert(t, {
          type: 1,
          doc: n.doc
        });
      } else if (e.type === 0 && n.type === 1) {
        this.qc = this.qc.insert(t, {
          type: 2,
          doc: e.doc
        });
      } else {
        Tt(63341, {
          Nt: e,
          Kc: n
        });
      }
    } else {
      this.qc = this.qc.insert(t, e);
    }
  }
  Wc() {
    const e = [];
    this.qc.inorderTraversal((t, n) => {
      e.push(n);
    });
    return e;
  }
};
var Jp = class e {
  constructor(e, t, n, r, s, i, a, o, B) {
    this.query = e;
    this.docs = t;
    this.oldDocs = n;
    this.docChanges = r;
    this.mutatedKeys = s;
    this.fromCache = i;
    this.syncStateChanged = a;
    this.excludesMetadataChanges = o;
    this.hasCachedResults = B;
  }
  static fromInitialDocuments(t, n, r, s, i) {
    const a = [];
    n.forEach(e => {
      a.push({
        type: 0,
        doc: e
      });
    });
    return new e(t, n, Up.emptySet(n), a, r, s, true, false, i);
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (this.fromCache !== e.fromCache || this.hasCachedResults !== e.hasCachedResults || this.syncStateChanged !== e.syncStateChanged || !this.mutatedKeys.isEqual(e.mutatedKeys) || !eh(this.query, e.query) || !this.docs.isEqual(e.docs) || !this.oldDocs.isEqual(e.oldDocs)) {
      return false;
    }
    const t = this.docChanges;
    const n = e.docChanges;
    if (t.length !== n.length) {
      return false;
    }
    for (let r = 0; r < t.length; r++) {
      if (t[r].type !== n[r].type || !t[r].doc.isEqual(n[r].doc)) {
        return false;
      }
    }
    return true;
  }
};
var Kp = class {
  constructor() {
    this.Gc = undefined;
    this.jc = [];
  }
  zc() {
    return this.jc.some(e => e.Hc());
  }
};
var jp = class {
  constructor() {
    this.queries = Qp();
    this.onlineState = "Unknown";
    this.Jc = new Set();
  }
  terminate() {
    (function (e, t) {
      const n = At(e);
      const r = n.queries;
      n.queries = Qp();
      r.forEach((e, n) => {
        for (const r of n.jc) {
          r.onError(t);
        }
      });
    })(this, new jt(Kt.ABORTED, "Firestore shutting down"));
  }
};
function Qp() {
  return new ea(e => Zl(e), eh);
}
async function zp(e, t) {
  const n = At(e);
  let r = 3;
  const s = t.query;
  let i = n.queries.get(s);
  if (i) {
    if (!i.zc() && t.Hc()) {
      r = 2;
    }
  } else {
    i = new Kp();
    r = t.Hc() ? 0 : 1;
  }
  try {
    switch (r) {
      case 0:
        i.Gc = await n.onListen(s, true);
        break;
      case 1:
        i.Gc = await n.onListen(s, false);
        break;
      case 2:
        await n.onFirstRemoteStoreListen(s);
    }
  } catch (e) {
    const n = Dp(e, `Initialization of query '${$l(t.query) ? Yl(t.query) : Ki(t.query)}' failed`);
    t.onError(n);
    return;
  }
  n.queries.set(s, i);
  i.jc.push(t);
  t.Yc(n.onlineState);
  if (i.Gc && t.Zc(i.Gc)) {
    Xp(n);
  }
}
async function Yp(e, t) {
  const n = At(e);
  const r = t.query;
  let s = 3;
  const i = n.queries.get(r);
  if (i) {
    const e = i.jc.indexOf(t);
    if (e >= 0) {
      i.jc.splice(e, 1);
      if (i.jc.length === 0) {
        s = t.Hc() ? 0 : 1;
      } else if (!i.zc() && t.Hc()) {
        s = 2;
      }
    }
  }
  switch (s) {
    case 0:
      n.queries.delete(r);
      return n.onUnlisten(r, true);
    case 1:
      n.queries.delete(r);
      return n.onUnlisten(r, false);
    case 2:
      return n.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function Wp(e, t) {
  const n = At(e);
  let r = false;
  for (const s of t) {
    const e = s.query;
    const t = n.queries.get(e);
    if (t) {
      for (const e of t.jc) {
        if (e.Zc(s)) {
          r = true;
        }
      }
      t.Gc = s;
    }
  }
  if (r) {
    Xp(n);
  }
}
function $p(e, t, n) {
  const r = At(e);
  const s = r.queries.get(t);
  if (s) {
    for (const i of s.jc) {
      i.onError(n);
    }
  }
  r.queries.delete(t);
}
function Xp(e) {
  e.Jc.forEach(e => {
    e.next();
  });
}
(function (e) {
  e.Default = "default";
  e.Cache = "cache";
})(Hp ||= {});
var Zp = class {
  constructor(e, t, n) {
    this.query = e;
    this.Xc = t;
    this.el = false;
    this.tl = null;
    this.onlineState = "Unknown";
    this.options = n || {};
  }
  Zc(e) {
    if (!this.options.includeMetadataChanges) {
      const t = [];
      for (const n of e.docChanges) {
        if (n.type !== 3) {
          t.push(n);
        }
      }
      e = new Jp(e.query, e.docs, e.oldDocs, t, e.mutatedKeys, e.fromCache, e.syncStateChanged, true, e.hasCachedResults);
    }
    let t = false;
    if (this.el) {
      if (this.nl(e)) {
        this.Xc.next(e);
        t = true;
      }
    } else if (this.rl(e, this.onlineState)) {
      this.il(e);
      t = true;
    }
    this.tl = e;
    return t;
  }
  onError(e) {
    this.Xc.error(e);
  }
  Yc(e) {
    this.onlineState = e;
    let t = false;
    if (this.tl && !this.el && this.rl(this.tl, e)) {
      this.il(this.tl);
      t = true;
    }
    return t;
  }
  rl(e, t) {
    if (!e.fromCache) {
      return true;
    }
    if (!this.Hc()) {
      return true;
    }
    const n = t !== "Offline";
    return (!this.options.waitForSyncWhenOnline || !n) && (!e.docs.isEmpty() || e.hasCachedResults || t === "Offline");
  }
  nl(e) {
    if (e.docChanges.length > 0) {
      return true;
    }
    const t = this.tl && this.tl.hasPendingWrites !== e.hasPendingWrites;
    return (!!e.syncStateChanged || !!t) && this.options.includeMetadataChanges === true;
  }
  il(e) {
    e = Jp.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults);
    this.el = true;
    this.Xc.next(e);
  }
  Hc() {
    return this.options.source !== Hp.Cache;
  }
};
var eg = class {
  constructor(e) {
    this.serializer = e;
  }
  cu(e) {
    return Ja(this.serializer, e);
  }
  lu(e) {
    if (e.metadata.exists) {
      return Wa(this.serializer, e.document, false);
    } else {
      return fi.newNoDocument(this.cu(e.metadata.name), this.Eu(e.metadata.readTime));
    }
  }
  Eu(e) {
    return Ma(e);
  }
};
var tg = class {
  constructor(e, t) {
    this.sl = e;
    this.serializer = t;
    this._l = [];
    this.ol = [];
    this.collectionGroups = new Set();
    this.progress = ng(e);
  }
  get queries() {
    return this._l;
  }
  get documents() {
    return this.ol;
  }
  al(e) {
    this.progress.bytesLoaded += e.byteLength;
    let t = this.progress.documentsLoaded;
    if (e.hu.namedQuery) {
      this._l.push(e.hu.namedQuery);
    } else if (e.hu.documentMetadata) {
      this.ol.push({
        metadata: e.hu.documentMetadata
      });
      if (!e.hu.documentMetadata.exists) {
        ++t;
      }
      const n = Yt.fromString(e.hu.documentMetadata.name);
      this.collectionGroups.add(n.get(n.length - 2));
    } else if (e.hu.document) {
      this.ol[this.ol.length - 1].document = e.hu.document;
      ++t;
    }
    if (t !== this.progress.documentsLoaded) {
      this.progress.documentsLoaded = t;
      return {
        ...this.progress
      };
    } else {
      return null;
    }
  }
  ul(e) {
    const t = new Map();
    const n = new eg(this.serializer);
    for (const r of e) {
      if (r.metadata.queries) {
        const e = n.cu(r.metadata.name);
        for (const n of r.metadata.queries) {
          const r = (t.get(n) || la()).add(e);
          t.set(n, r);
        }
      }
    }
    return t;
  }
  async cl(e) {
    const t = await async function (e, t, n, r) {
      const s = At(e);
      let i = la();
      let a = na();
      for (const u of n) {
        const e = t.cu(u.metadata.name);
        if (u.document) {
          i = i.add(e);
        }
        const n = t.lu(u);
        n.setReadTime(t.Eu(u.metadata.readTime));
        a = a.insert(e, n);
      }
      const o = s.iu.newChangeBuffer({
        trackRemovals: true
      });
      const B = await Ff(s, function (e) {
        return Hi(Gi(Yt.fromString(`__bundle__/docs/${e}`)));
      }(r));
      return s.persistence.runTransaction("Apply bundle documents", "readwrite", e => Nf(e, o, a).next(t => {
        o.apply(e);
        return t;
      }).next(t => s.ko.removeMatchingKeysForTargetId(e, B.targetId).next(() => s.ko.addMatchingKeys(e, i, B.targetId)).next(() => s.localDocuments.getLocalViewOfDocuments(e, t.ou, t.au)).next(() => t.ou)));
    }(e, new eg(this.serializer), this.ol, this.sl.id);
    const n = this.ul(this.documents);
    for (const r of this._l) {
      await kf(e, r, n.get(r.name));
    }
    this.progress.taskState = "Success";
    return {
      progress: this.progress,
      ll: this.collectionGroups,
      El: t
    };
  }
};
function ng(e) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: e.totalDocuments,
    totalBytes: e.totalBytes
  };
}
var rg = class {
  constructor(e) {
    this.key = e;
  }
};
var sg = class {
  constructor(e) {
    this.key = e;
  }
};
var ig = class {
  constructor(e, t) {
    this.query = e;
    this.hl = t;
    this.Tl = null;
    this.hasCachedResults = false;
    this.current = false;
    this.Pl = la();
    this.mutatedKeys = la();
    this.Il = $l(e) ? Rd(e) : Qi(e);
    this.Rl = new Up(this.Il);
  }
  get Al() {
    return this.hl;
  }
  Vl(e, t) {
    const n = t ? t.dl : new qp();
    const r = t ? t.Rl : this.Rl;
    let s = t ? t.mutatedKeys : this.mutatedKeys;
    let i = r;
    let a = false;
    const [o, B] = this.fl(this.query, r);
    e.inorderTraversal((e, t) => {
      const u = r.get(e);
      const c = xd(this.query, t) ? t : null;
      const l = !!u && this.mutatedKeys.has(u.key);
      const h = !!c && (c.hasLocalMutations || this.mutatedKeys.has(c.key) && c.hasCommittedMutations);
      let C = false;
      if (u && c) {
        if (u.data.isEqual(c.data)) {
          if (l !== h) {
            n.track({
              type: 3,
              doc: c
            });
            C = true;
          }
        } else if (!this.ml(u, c)) {
          n.track({
            type: 2,
            doc: c
          });
          C = true;
          if (o && this.Il(c, o) > 0 || B && this.Il(c, B) < 0) {
            a = true;
          }
        }
      } else if (!u && c) {
        n.track({
          type: 0,
          doc: c
        });
        C = true;
      } else if (u && !c) {
        n.track({
          type: 1,
          doc: u
        });
        C = true;
        if (o || B) {
          a = true;
        }
      }
      if (C) {
        if (c) {
          i = i.add(c);
          s = h ? s.add(e) : s.delete(e);
        } else {
          i = i.delete(e);
          s = s.delete(e);
        }
      }
    });
    const u = this.pl(this.query);
    if (u) {
      if ($l(this.query)) {
        const e = [];
        i.forEach(t => e.push(t));
        const t = Od(this.query, e);
        let r = new Up(Rd(this.query));
        for (const n of t) {
          r = r.add(n);
        }
        i.forEach(e => {
          if (!r.has(e.key)) {
            s = s.delete(e.key);
            n.track({
              type: 1,
              doc: e
            });
          }
        });
        i = r;
      } else {
        const e = this.gl(this.query);
        while (i.size > u) {
          const t = e === "F" ? i.last() : i.first();
          i = i.delete(t.key);
          s = s.delete(t.key);
          n.track({
            type: 1,
            doc: t
          });
        }
      }
    }
    return {
      Rl: i,
      dl: n,
      Za: a,
      mutatedKeys: s
    };
  }
  pl(e) {
    if ($l(e)) {
      return kd(e)?.limit;
    } else {
      return e.limit || undefined;
    }
  }
  gl(e) {
    if ($l(e)) {
      const t = kd(e);
      if (t && t.limit < 0) {
        return "L";
      } else {
        return "F";
      }
    }
    return e.limitType;
  }
  fl(e, t) {
    if ($l(e)) {
      const n = kd(e)?.limit;
      return [t.size === n ? t.last() : null, null];
    }
    return [e.limitType === "F" && t.size === this.pl(this.query) ? t.last() : null, e.limitType === "L" && t.size === this.pl(this.query) ? t.first() : null];
  }
  ml(e, t) {
    return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
  }
  applyChanges(e, t, n, r) {
    const s = this.Rl;
    this.Rl = e.Rl;
    this.mutatedKeys = e.mutatedKeys;
    const i = e.dl.Wc();
    i.sort((e, t) => function (e, t) {
      const n = e => {
        switch (e) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return Tt(20277, {
              Nt: e
            });
        }
      };
      return n(e) - n(t);
    }(e.type, t.type) || this.Il(e.doc, t.doc));
    this.yl(n);
    r = r ?? false;
    const a = t && !r ? this.wl() : [];
    const o = this.Pl.size === 0 && this.current && !r ? 1 : 0;
    const B = o !== this.Tl;
    this.Tl = o;
    if (i.length !== 0 || B) {
      return {
        snapshot: new Jp(this.query, e.Rl, s, i, e.mutatedKeys, o === 0, B, false, !!n && n.resumeToken.approximateByteSize() > 0),
        bl: a
      };
    } else {
      return {
        bl: a
      };
    }
  }
  Yc(e) {
    if (this.current && e === "Offline") {
      this.current = false;
      return this.applyChanges({
        Rl: this.Rl,
        dl: new qp(),
        mutatedKeys: this.mutatedKeys,
        Za: false
      }, false);
    } else {
      return {
        bl: []
      };
    }
  }
  Sl(e) {
    return !this.hl.has(e) && !!this.Rl.has(e) && !this.Rl.get(e).hasLocalMutations;
  }
  yl(e) {
    if (e) {
      e.addedDocuments.forEach(e => this.hl = this.hl.add(e));
      e.modifiedDocuments.forEach(e => {});
      e.removedDocuments.forEach(e => this.hl = this.hl.delete(e));
      this.current = e.current;
    }
  }
  wl() {
    if (!this.current) {
      return [];
    }
    const e = this.Pl;
    this.Pl = la();
    this.Rl.forEach(e => {
      if (this.Sl(e.key)) {
        this.Pl = this.Pl.add(e.key);
      }
    });
    const t = [];
    e.forEach(e => {
      if (!this.Pl.has(e)) {
        t.push(new sg(e));
      }
    });
    this.Pl.forEach(n => {
      if (!e.has(n)) {
        t.push(new rg(n));
      }
    });
    return t;
  }
  xl(e) {
    this.hl = e.uu;
    this.Pl = la();
    const t = this.Vl(e.documents);
    return this.applyChanges(t, true);
  }
  vl() {
    return Jp.fromInitialDocuments(this.query, this.Rl, this.mutatedKeys, this.Tl === 0, this.hasCachedResults);
  }
};
var ag = "SyncEngine";
var og = class {
  constructor(e, t, n) {
    this.query = e;
    this.targetId = t;
    this.view = n;
  }
};
var Bg = class {
  constructor(e) {
    this.key = e;
    this.Dl = false;
  }
};
var ug = class {
  constructor(e, t, n, r, s, i) {
    this.localStore = e;
    this.remoteStore = t;
    this.eventManager = n;
    this.sharedClientState = r;
    this.currentUser = s;
    this.maxConcurrentLimboResolutions = i;
    this.Cl = {};
    this.Fl = new ea(e => Zl(e), eh);
    this.Ol = new Map();
    this.Ml = new Set();
    this.Nl = new Mt(nn.comparator);
    this.Bl = new Map();
    this.Ll = new $d();
    this.$l = {};
    this.Ul = new Map();
    this.kl = Id.G_();
    this.onlineState = "Unknown";
    this.Ql = undefined;
  }
  get isPrimaryClient() {
    return this.Ql === true;
  }
};
async function cg(e, t, n = true) {
  const r = Mg(e);
  let s;
  const i = r.Fl.get(t);
  if (i) {
    r.sharedClientState.addLocalQueryTarget(i.targetId);
    s = i.view.vl();
  } else {
    s = await hg(r, t, n, true);
  }
  return s;
}
async function lg(e, t) {
  await hg(Mg(e), t, true, false);
}
async function hg(e, t, n, r) {
  const s = await Ff(e.localStore, $l(t) ? t : Hi(t));
  const i = s.targetId;
  const a = e.sharedClientState.addLocalQueryTarget(i, n);
  let o;
  if (r) {
    o = await Cg(e, t, i, a === "current", s.resumeToken);
  }
  if (e.isPrimaryClient && n) {
    Kf(e.remoteStore, s);
  }
  return o;
}
async function Cg(e, t, n, r, s) {
  e.ql = (t, n, r) => async function (e, t, n, r) {
    let s = t.view.Vl(n);
    if (s.Za) {
      s = await Sf(e.localStore, t.query, false).then(({
        documents: e
      }) => t.view.Vl(e, s));
    }
    const i = r && r.targetChanges.get(t.targetId);
    const a = r && r.targetMismatches.get(t.targetId) != null;
    const o = t.view.applyChanges(s, e.isPrimaryClient, i, a);
    vg(e, t.targetId, o.bl);
    return o.snapshot;
  }(e, t, n, r);
  const i = await Sf(e.localStore, t, true);
  const a = new ig(t, i.uu);
  const o = a.Vl(i.documents);
  const B = wa.createSynthesizedTargetChangeForCurrentChange(n, r && e.onlineState !== "Offline", s);
  const u = a.applyChanges(o, e.isPrimaryClient, B);
  vg(e, n, u.bl);
  const c = new og(t, n, a);
  e.Fl.set(t, c);
  if (e.Ol.has(n)) {
    e.Ol.get(n).push(t);
  } else {
    e.Ol.set(n, [t]);
  }
  return u.snapshot;
}
async function dg(e, t, n) {
  const r = At(e);
  const s = r.Fl.get(t);
  const i = r.Ol.get(s.targetId);
  if (i.length > 1) {
    r.Ol.set(s.targetId, i.filter(e => !eh(e, t)));
    r.Fl.delete(t);
    return;
  }
  if (r.isPrimaryClient) {
    r.sharedClientState.removeLocalQueryTarget(s.targetId);
    if (!r.sharedClientState.isActiveQueryTarget(s.targetId)) {
      await Of(r.localStore, s.targetId, false).then(() => {
        r.sharedClientState.clearQueryState(s.targetId);
        if (n) {
          jf(r.remoteStore, s.targetId);
        }
        _g(r, s.targetId);
      }).catch(cB);
    }
  } else {
    _g(r, s.targetId);
    await Of(r.localStore, s.targetId, true);
  }
}
async function fg(e, t) {
  const n = At(e);
  const r = n.Fl.get(t);
  const s = n.Ol.get(r.targetId);
  if (n.isPrimaryClient && s.length === 1) {
    n.sharedClientState.removeLocalQueryTarget(r.targetId);
    jf(n.remoteStore, r.targetId);
  }
}
async function pg(e, t) {
  const n = At(e);
  try {
    const e = await function (e, t) {
      const n = At(e);
      const r = t.snapshotVersion;
      let s = n.tu;
      return n.persistence.runTransaction("Apply remote event", "readwrite-primary", e => {
        const i = n.iu.newChangeBuffer({
          trackRemovals: true
        });
        s = n.tu;
        const a = [];
        t.targetChanges.forEach((i, o) => {
          const B = s.get(o);
          if (!B) {
            return;
          }
          a.push(n.ko.removeMatchingKeys(e, i.removedDocuments, o).next(() => n.ko.addMatchingKeys(e, i.addedDocuments, o)));
          let u = B.withSequenceNumber(e.currentSequenceNumber);
          if (t.targetMismatches.get(o) !== null) {
            u = u.withResumeToken(mn.EMPTY_BYTE_STRING, di.min()).withLastLimboFreeSnapshotVersion(di.min());
          } else if (i.resumeToken.approximateByteSize() > 0) {
            u = u.withResumeToken(i.resumeToken, r);
          }
          s = s.insert(o, u);
          if (function (e, t, n) {
            return e.resumeToken.approximateByteSize() === 0 || t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 300000000 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
          }(B, u, i)) {
            a.push(n.ko.updateTargetData(e, u));
          }
        });
        let o = na();
        let B = la();
        t.documentUpdates.forEach(r => {
          if (t.resolvedLimboDocuments.has(r)) {
            a.push(n.persistence.referenceDelegate.updateLimboDocument(e, r));
          }
        });
        a.push(Nf(e, i, t.documentUpdates).next(e => {
          o = e.ou;
          B = e.au;
        }));
        if (!r.isEqual(di.min())) {
          const t = n.ko.getLastRemoteSnapshotVersion(e).next(t => n.ko.setTargetsMetadata(e, e.currentSequenceNumber, r));
          a.push(t);
        }
        return lB.waitFor(a).next(() => i.apply(e)).next(() => n.localDocuments.getLocalViewOfDocuments(e, o, B)).next(() => o);
      }).then(e => {
        n.tu = s;
        return e;
      });
    }(n.localStore, t);
    t.targetChanges.forEach((e, t) => {
      const r = n.Bl.get(t);
      if (r) {
        Nt(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1, 22616);
        if (e.addedDocuments.size > 0) {
          r.Dl = true;
        } else if (e.modifiedDocuments.size > 0) {
          Nt(r.Dl, 14607);
        } else if (e.removedDocuments.size > 0) {
          Nt(r.Dl, 42227);
          r.Dl = false;
        }
      }
    });
    await Ng(n, e, t);
  } catch (e) {
    await cB(e);
  }
}
function gg(e, t, n) {
  const r = At(e);
  if (r.isPrimaryClient && n === 0 || !r.isPrimaryClient && n === 1) {
    const e = [];
    r.Fl.forEach((n, r) => {
      const s = r.view.Yc(t);
      if (s.snapshot) {
        e.push(s.snapshot);
      }
    });
    (function (e, t) {
      const n = At(e);
      n.onlineState = t;
      let r = false;
      n.queries.forEach((e, n) => {
        for (const s of n.jc) {
          if (s.Yc(t)) {
            r = true;
          }
        }
      });
      if (r) {
        Xp(n);
      }
    })(r.eventManager, t);
    if (e.length) {
      r.Cl.gr(e);
    }
    r.onlineState = t;
    if (r.isPrimaryClient) {
      r.sharedClientState.setOnlineState(t);
    }
  }
}
async function mg(e, t, n) {
  const r = At(e);
  r.sharedClientState.updateQueryState(t, "rejected", n);
  const s = r.Bl.get(t);
  const i = s && s.key;
  if (i) {
    let e = new Mt(nn.comparator);
    e = e.insert(i, fi.newNoDocument(i, di.min()));
    const n = la().add(i);
    await pg(r, new Da(di.min(), new Map(), new Mt(St), e, na(), n));
    r.Nl = r.Nl.remove(i);
    r.Bl.delete(t);
    bg(r);
  } else {
    await Of(r.localStore, t, false).then(() => _g(r, t, n)).catch(cB);
  }
}
async function Eg(e, t) {
  const n = At(e);
  const r = t.batch.batchId;
  try {
    const e = await function (e, t) {
      const n = At(e);
      return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", e => {
        const r = t.batch.keys();
        const s = n.iu.newChangeBuffer({
          trackRemovals: true
        });
        return function (e, t, n, r) {
          const s = n.batch;
          const i = s.keys();
          let a = lB.resolve();
          i.forEach(e => {
            a = a.next(() => r.getEntry(t, e)).next(t => {
              const i = n.docVersions.get(e);
              Nt(i !== null, 48541);
              if (t.version.compareTo(i) < 0) {
                s.applyToRemoteDocument(t, n);
                if (t.isValidDocument()) {
                  t.setReadTime(n.commitVersion);
                  r.addEntry(t);
                }
              }
            });
          });
          return a.next(() => e.mutationQueue.removeMutationBatch(t, s));
        }(n, e, t, s).next(() => s.apply(e)).next(() => n.mutationQueue.performConsistencyCheck(e)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function (e) {
          let t = la();
          for (let n = 0; n < e.mutationResults.length; ++n) {
            if (e.mutationResults[n].transformResults.length > 0) {
              t = t.add(e.batch.mutations[n].key);
            }
          }
          return t;
        }(t))).next(() => n.localDocuments.getDocuments(e, r));
      });
    }(n.localStore, t);
    yg(n, r, null);
    wg(n, r);
    n.sharedClientState.updateMutationState(r, "acknowledged");
    await Ng(n, e);
  } catch (e) {
    await cB(e);
  }
}
async function Dg(e, t, n) {
  const r = At(e);
  try {
    const e = await function (e, t) {
      const n = At(e);
      return n.persistence.runTransaction("Reject batch", "readwrite-primary", e => {
        let r;
        return n.mutationQueue.lookupMutationBatch(e, t).next(t => {
          Nt(t !== null, 37113);
          r = t.keys();
          return n.mutationQueue.removeMutationBatch(e, t);
        }).next(() => n.mutationQueue.performConsistencyCheck(e)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, r)).next(() => n.localDocuments.getDocuments(e, r));
      });
    }(r.localStore, t);
    yg(r, t, n);
    wg(r, t);
    r.sharedClientState.updateMutationState(t, "rejected", n);
    await Ng(r, e);
  } catch (n) {
    await cB(n);
  }
}
function wg(e, t) {
  (e.Ul.get(t) || []).forEach(e => {
    e.resolve();
  });
  e.Ul.delete(t);
}
function yg(e, t, n) {
  const r = At(e);
  let s = r.$l[r.currentUser.toKey()];
  if (s) {
    const e = s.get(t);
    if (e) {
      if (n) {
        e.reject(n);
      } else {
        e.resolve();
      }
      s = s.remove(t);
    }
    r.$l[r.currentUser.toKey()] = s;
  }
}
function _g(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (const r of e.Ol.get(t)) {
    e.Fl.delete(r);
    if (n) {
      e.Cl.Kl(r, n);
    }
  }
  e.Ol.delete(t);
  if (e.isPrimaryClient) {
    e.Ll.fo(t).forEach(t => {
      if (!e.Ll.containsKey(t)) {
        Ig(e, t);
      }
    });
  }
}
function Ig(e, t) {
  e.Ml.delete(t.path.canonicalString());
  const n = e.Nl.get(t);
  if (n !== null) {
    jf(e.remoteStore, n);
    e.Nl = e.Nl.remove(t);
    e.Bl.delete(n);
    bg(e);
  }
}
function vg(e, t, n) {
  for (const r of n) {
    if (r instanceof rg) {
      e.Ll.addReference(r.key, t);
      Tg(e, r);
    } else if (r instanceof sg) {
      yt(ag, "Document no longer in limbo: " + r.key);
      e.Ll.removeReference(r.key, t);
      if (!e.Ll.containsKey(r.key)) {
        Ig(e, r.key);
      }
    } else {
      Tt(19791, {
        Wl: r
      });
    }
  }
}
function Tg(e, t) {
  const n = t.key;
  const r = n.path.canonicalString();
  if (!e.Nl.get(n) && !e.Ml.has(r)) {
    yt(ag, "New document in limbo: " + n);
    e.Ml.add(r);
    bg(e);
  }
}
function bg(e) {
  while (e.Ml.size > 0 && e.Nl.size < e.maxConcurrentLimboResolutions) {
    const t = e.Ml.values().next().value;
    e.Ml.delete(t);
    const n = new nn(Yt.fromString(t));
    const r = e.kl.next();
    e.Bl.set(r, new Bg(n));
    e.Nl = e.Nl.insert(n, r);
    Kf(e.remoteStore, new EC(Hi(Gi(n.path)), r, "TargetPurposeLimboResolution", oB.Br));
  }
}
async function Ng(e, t, n) {
  const r = At(e);
  const s = [];
  const i = [];
  const a = [];
  if (!r.Fl.isEmpty()) {
    r.Fl.forEach((e, o) => {
      a.push(r.ql(o, t, n).then(e => {
        if ((e || n) && r.isPrimaryClient) {
          const t = e ? !e.fromCache : n?.targetChanges.get(o.targetId)?.current;
          r.sharedClientState.updateQueryState(o.targetId, t ? "current" : "not-current");
        }
        if (e) {
          s.push(e);
          const t = Ef.ka(o.targetId, e);
          i.push(t);
        }
      }));
    });
    await Promise.all(a);
    r.Cl.gr(s);
    await async function (e, t) {
      const n = At(e);
      try {
        await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", e => lB.forEach(t, t => lB.forEach(t.$a, r => n.persistence.referenceDelegate.addReference(e, t.targetId, r)).next(() => lB.forEach(t.Ua, r => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))));
      } catch (e) {
        if (!mB(e)) {
          throw e;
        }
        yt(_f, "Failed to update sequence numbers: " + e);
      }
      for (const r of t) {
        const e = r.targetId;
        if (!r.fromCache) {
          const t = n.tu.get(e);
          const r = t.snapshotVersion;
          const s = t.withLastLimboFreeSnapshotVersion(r);
          n.tu = n.tu.insert(e, s);
        }
      }
    }(r.localStore, i);
  }
}
async function Ag(e, t) {
  const n = At(e);
  if (!n.currentUser.isEqual(t)) {
    yt(ag, "User change. New user:", t.toKey());
    const e = await Tf(n.localStore, t);
    n.currentUser = t;
    (function (e, t) {
      e.Ul.forEach(e => {
        e.forEach(e => {
          e.reject(new jt(Kt.CANCELLED, t));
        });
      });
      e.Ul.clear();
    })(n, "'waitForPendingWrites' promise is rejected due to a user change.");
    n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds);
    await Ng(n, e._u);
  }
}
function Fg(e, t) {
  const n = At(e);
  const r = n.Bl.get(t);
  if (r && r.Dl) {
    return la().add(r.key);
  }
  {
    let e = la();
    const r = n.Ol.get(t);
    if (!r) {
      return e;
    }
    for (const t of r ?? []) {
      const r = n.Fl.get(t);
      e = e.unionWith(r.view.Al);
    }
    return e;
  }
}
async function Og(e, t) {
  const n = At(e);
  const r = await Sf(n.localStore, t.query, true);
  const s = t.view.xl(r);
  if (n.isPrimaryClient) {
    vg(n, t.targetId, s.bl);
  }
  return s;
}
async function Sg(e, t) {
  const n = At(e);
  return Lf(n.localStore, t).then(e => Ng(n, e));
}
async function xg(e, t, n, r) {
  const s = At(e);
  const i = await function (e, t) {
    const n = At(e);
    const r = At(n.mutationQueue);
    return n.persistence.runTransaction("Lookup mutation documents", "readonly", e => r.ns(e, t).next(t => t ? n.localDocuments.getDocuments(e, t) : lB.resolve(null)));
  }(s.localStore, t);
  if (i !== null) {
    if (n === "pending") {
      await ip(s.remoteStore);
    } else if (n === "acknowledged" || n === "rejected") {
      yg(s, t, r || null);
      wg(s, t);
      (function (e, t) {
        At(At(e).mutationQueue).us(t);
      })(s.localStore, t);
    } else {
      Tt(6720, "Unknown batchState", {
        Gl: n
      });
    }
    await Ng(s, i);
  } else {
    yt(ag, "Cannot apply mutation batch with id: " + t);
  }
}
async function Lg(e, t, n) {
  const r = At(e);
  const s = [];
  const i = [];
  for (const a of t) {
    let e;
    const t = r.Ol.get(a);
    if (t && t.length !== 0) {
      e = await Ff(r.localStore, $l(t[0]) ? t[0] : Hi(t[0]));
      for (const e of t) {
        const t = await Og(r, r.Fl.get(e));
        if (t.snapshot) {
          i.push(t.snapshot);
        }
      }
    } else {
      const t = await xf(r.localStore, a);
      e = await Ff(r.localStore, t);
      await Cg(r, Rg(t), a, false, e.resumeToken);
    }
    s.push(e);
  }
  r.Cl.gr(i);
  return s;
}
function Rg(e) {
  if (Fi(e)) {
    return e;
  } else {
    return ki(e.path, e.collectionGroup, e.orderBy, e.filters, e.limit, "F", e.startAt, e.endAt);
  }
}
function kg(e) {
  return function (e) {
    return At(At(e).persistence).Ba();
  }(At(e).localStore);
}
async function Gg(e, t, n, r) {
  const s = At(e);
  if (s.Ql) {
    yt(ag, "Ignoring unexpected query state notification.");
    return;
  }
  const i = s.Ol.get(t);
  if (i && i.length > 0) {
    switch (n) {
      case "current":
      case "not-current":
        {
          let e;
          if ($l(i[0])) {
            switch (nc(i[0])) {
              case "collection_group":
              case "collection":
                e = await Lf(s.localStore, ic(i[0]));
                break;
              case "documents":
                e = await function (e, t) {
                  const n = At(e);
                  const r = la(...ac(t).map(e => nn.fromPath(e)));
                  return n.persistence.runTransaction("Get documents for pipeline", "readonly", e => n.iu.getEntries(e, r)).then(e => e);
                }(s.localStore, i[0]);
                break;
              default:
                It("");
                e = sa();
            }
          } else {
            e = await Lf(s.localStore, function (e) {
              return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2));
            }(i[0]));
          }
          const r = Da.createSynthesizedRemoteEventForCurrentChange(t, n === "current", mn.EMPTY_BYTE_STRING);
          await Ng(s, e, r);
          break;
        }
      case "rejected":
        await Of(s.localStore, t, true);
        _g(s, t, r);
        break;
      default:
        Tt(64155, n);
    }
  }
}
async function Pg(e, t, n) {
  const r = Mg(e);
  if (r.Ql) {
    for (const e of t) {
      if (r.Ol.has(e) && r.sharedClientState.isActiveQueryTarget(e)) {
        yt(ag, "Adding an already active target " + e);
        continue;
      }
      const t = await xf(r.localStore, e);
      const n = await Ff(r.localStore, t);
      await Cg(r, Rg(t), n.targetId, false, n.resumeToken);
      Kf(r.remoteStore, n);
    }
    for (const e of n) {
      if (r.Ol.has(e)) {
        await Of(r.localStore, e, false).then(() => {
          jf(r.remoteStore, e);
          _g(r, e);
        }).catch(cB);
      }
    }
  }
}
function Mg(e) {
  const t = At(e);
  t.remoteStore.remoteSyncer.applyRemoteEvent = pg.bind(null, t);
  t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Fg.bind(null, t);
  t.remoteStore.remoteSyncer.rejectListen = mg.bind(null, t);
  t.Cl.gr = Wp.bind(null, t.eventManager);
  t.Cl.Kl = $p.bind(null, t.eventManager);
  return t;
}
function Vg(e) {
  const t = At(e);
  t.remoteStore.remoteSyncer.applySuccessfulWrite = Eg.bind(null, t);
  t.remoteStore.remoteSyncer.rejectFailedWrite = Dg.bind(null, t);
  return t;
}
var Hg = class {
  constructor() {
    this.kind = "memory";
    this.synchronizeTabs = false;
  }
  async initialize(e) {
    this.serializer = po(e.databaseInfo.databaseId);
    this.sharedClientState = this.jl(e);
    this.persistence = this.zl(e);
    await this.persistence.start();
    this.localStore = this.Hl(e);
    this.gcScheduler = this.Jl(e, this.localStore);
    this.indexBackfillerScheduler = this.Yl(e, this.localStore);
  }
  Jl(e, t) {
    return null;
  }
  Yl(e, t) {
    return null;
  }
  Hl(e) {
    return vf(this.persistence, new yf(), e.initialUser, this.serializer);
  }
  zl(e) {
    return new rf(af.Ho, this.serializer);
  }
  jl(e) {
    return new Pp();
  }
  async terminate() {
    this.gcScheduler?.stop();
    this.indexBackfillerScheduler?.stop();
    this.sharedClientState.shutdown();
    await this.persistence.shutdown();
  }
};
Hg.provider = {
  build: () => new Hg()
};
var Ug = class extends Hg {
  constructor(e) {
    super();
    this.cacheSizeBytes = e;
  }
  Jl(e, t) {
    Nt(this.persistence.referenceDelegate instanceof of, 46915);
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new TB(n, e.asyncQueue, t);
  }
  zl(e) {
    const t = this.cacheSizeBytes !== undefined ? aB.withCacheSize(this.cacheSizeBytes) : aB.DEFAULT;
    return new rf(e => of.Ho(e, t), this.serializer);
  }
};
var qg = class extends Hg {
  constructor(e, t, n) {
    super();
    this.Zl = e;
    this.cacheSizeBytes = t;
    this.forceOwnership = n;
    this.kind = "persistent";
    this.synchronizeTabs = false;
  }
  async initialize(e) {
    await super.initialize(e);
    await this.Zl.initialize(this, e);
    await Vg(this.Zl.syncEngine);
    await ip(this.Zl.remoteStore);
    await this.persistence.fa(() => {
      if (this.gcScheduler && !this.gcScheduler.started) {
        this.gcScheduler.start();
      }
      if (this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started) {
        this.indexBackfillerScheduler.start();
      }
      return Promise.resolve();
    });
  }
  Hl(e) {
    return vf(this.persistence, new yf(), e.initialUser, this.serializer);
  }
  Jl(e, t) {
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new TB(n, e.asyncQueue, t);
  }
  Yl(e, t) {
    const n = new Ip(t, this.persistence);
    return new _p(e.asyncQueue, n);
  }
  zl(e) {
    const t = mf(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey);
    const n = this.cacheSizeBytes !== undefined ? aB.withCacheSize(this.cacheSizeBytes) : aB.DEFAULT;
    return new ff(this.synchronizeTabs, t, e.clientId, n, e.asyncQueue, Mp(), Vp(), this.serializer, this.sharedClientState, !!this.forceOwnership);
  }
  jl(e) {
    return new Pp();
  }
};
var Jg = class extends qg {
  constructor(e, t) {
    super(e, t, false);
    this.Zl = e;
    this.cacheSizeBytes = t;
    this.synchronizeTabs = true;
  }
  async initialize(e) {
    await super.initialize(e);
    const t = this.Zl.syncEngine;
    if (this.sharedClientState instanceof Gp) {
      this.sharedClientState.syncEngine = {
        Lc: xg.bind(null, t),
        $c: Gg.bind(null, t),
        Uc: Pg.bind(null, t),
        Ba: kg.bind(null, t),
        Bc: Sg.bind(null, t)
      };
      await this.sharedClientState.start();
    }
    await this.persistence.fa(async e => {
      await async function (e, t) {
        const n = At(e);
        Mg(n);
        Vg(n);
        if (t === true && n.Ql !== true) {
          const e = await Lg(n, n.sharedClientState.getAllActiveQueryTargets().toArray());
          n.Ql = true;
          await fp(n.remoteStore, true);
          for (const t of e) {
            Kf(n.remoteStore, t);
          }
        } else if (t === false && n.Ql !== false) {
          const e = [];
          let t = Promise.resolve();
          n.Ol.forEach((r, s) => {
            if (n.sharedClientState.isLocalQueryTarget(s)) {
              e.push(s);
            } else {
              t = t.then(() => {
                _g(n, s);
                return Of(n.localStore, s, true);
              });
            }
            jf(n.remoteStore, s);
          });
          await t;
          await Lg(n, e);
          (function (e) {
            const t = At(e);
            t.Bl.forEach((e, n) => {
              jf(t.remoteStore, n);
            });
            t.Ll.mo();
            t.Bl = new Map();
            t.Nl = new Mt(nn.comparator);
          })(n);
          n.Ql = false;
          await fp(n.remoteStore, false);
        }
      }(this.Zl.syncEngine, e);
      if (this.gcScheduler) {
        if (e && !this.gcScheduler.started) {
          this.gcScheduler.start();
        } else if (!e) {
          this.gcScheduler.stop();
        }
      }
      if (this.indexBackfillerScheduler) {
        if (e && !this.indexBackfillerScheduler.started) {
          this.indexBackfillerScheduler.start();
        } else if (!e) {
          this.indexBackfillerScheduler.stop();
        }
      }
    });
  }
  jl(e) {
    const t = Mp();
    if (!Gp.cn(t)) {
      throw new jt(Kt.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    }
    const n = mf(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey);
    return new Gp(t, e.asyncQueue, n, e.clientId, e.initialUser);
  }
};
var Kg = class {
  async initialize(e, t) {
    if (!this.localStore) {
      this.localStore = e.localStore;
      this.sharedClientState = e.sharedClientState;
      this.datastore = this.createDatastore(t);
      this.remoteStore = this.createRemoteStore(t);
      this.eventManager = this.createEventManager(t);
      this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs);
      this.sharedClientState.onlineStateHandler = e => gg(this.syncEngine, e, 1);
      this.remoteStore.remoteSyncer.handleCredentialChange = Ag.bind(null, this.syncEngine);
      await fp(this.remoteStore, this.syncEngine.isPrimaryClient);
    }
  }
  createEventManager(e) {
    return new jp();
  }
  createDatastore(e) {
    const t = po(e.databaseInfo.databaseId);
    const n = function (e) {
      return new Yo(e);
    }(e.databaseInfo);
    return function (e, t, n, r) {
      return new nB(e, t, n, r);
    }(e.authCredentials, e.appCheckCredentials, n, t);
  }
  createRemoteStore(e) {
    return function (e, t, n, r, s) {
      return new Hf(e, t, n, r, s);
    }(this.localStore, this.datastore, e.asyncQueue, e => gg(this.syncEngine, e, 0), Vo.cn() ? new Vo() : new Po());
  }
  createSyncEngine(e, t) {
    return function (e, t, n, r, s, i, a) {
      const o = new ug(e, t, n, r, s, i);
      if (a) {
        o.Ql = true;
      }
      return o;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
  }
  async terminate() {
    await async function (e) {
      const t = At(e);
      yt(Vf, "RemoteStore shutting down.");
      t.xu.add(5);
      await qf(t);
      t.Du.shutdown();
      t.Cu.set("Unknown");
    }(this.remoteStore);
    this.datastore?.terminate();
    this.eventManager?.terminate();
  }
};
Kg.provider = {
  build: () => new Kg()
};
var jg = class {
  constructor(e) {
    this.datastore = e;
    this.readVersions = new Map();
    this.mutations = [];
    this.committed = false;
    this.lastTransactionError = null;
    this.writtenDocs = new Set();
  }
  async lookup(e) {
    this.ensureCommitNotCalled();
    if (this.mutations.length > 0) {
      this.lastTransactionError = new jt(Kt.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
      throw this.lastTransactionError;
    }
    const t = await async function (e, t) {
      const n = At(e);
      const r = {
        documents: t.map(e => qa(n.serializer, e))
      };
      const s = await n.dn("BatchGetDocuments", n.serializer.databaseId, Yt.emptyPath(), r, t.length);
      const i = new Map();
      s.forEach(e => {
        const t = function (e, t) {
          if ("found" in t) {
            return function (e, t) {
              Nt(!!t.found, 43571);
              t.found.name;
              t.found.updateTime;
              const n = Ja(e, t.found.name);
              const r = Ma(t.found.updateTime);
              const s = t.found.createTime ? Ma(t.found.createTime) : di.min();
              const i = new os({
                mapValue: {
                  fields: t.found.fields
                }
              });
              return fi.newFoundDocument(n, r, s, i);
            }(e, t);
          } else if ("missing" in t) {
            return function (e, t) {
              Nt(!!t.missing, 3894);
              Nt(!!t.readTime, 22933);
              const n = Ja(e, t.missing);
              const r = Ma(t.readTime);
              return fi.newNoDocument(n, r);
            }(e, t);
          } else {
            return Tt(7234, {
              result: t
            });
          }
        }(n.serializer, e);
        i.set(t.key.toString(), t);
      });
      const a = [];
      t.forEach(e => {
        const t = i.get(e.toString());
        Nt(!!t, 55234, {
          key: e
        });
        a.push(t);
      });
      return a;
    }(this.datastore, e);
    t.forEach(e => this.recordVersion(e));
    return t;
  }
  set(e, t) {
    this.write(t.toMutation(e, this.precondition(e)));
    this.writtenDocs.add(e.toString());
  }
  update(e, t) {
    try {
      this.write(t.toMutation(e, this.preconditionForUpdate(e)));
    } catch (e) {
      this.lastTransactionError = e;
    }
    this.writtenDocs.add(e.toString());
  }
  delete(e) {
    this.write(new Us(e, this.precondition(e)));
    this.writtenDocs.add(e.toString());
  }
  async commit() {
    this.ensureCommitNotCalled();
    if (this.lastTransactionError) {
      throw this.lastTransactionError;
    }
    const e = this.readVersions;
    this.mutations.forEach(t => {
      e.delete(t.key.toString());
    });
    e.forEach((e, t) => {
      const n = nn.fromPath(t);
      this.mutations.push(new qs(n, this.precondition(n)));
    });
    await async function (e, t) {
      const n = At(e);
      const r = {
        writes: t.map(e => $a(n.serializer, e))
      };
      await n.In("Commit", n.serializer.databaseId, Yt.emptyPath(), r);
    }(this.datastore, this.mutations);
    this.committed = true;
  }
  recordVersion(e) {
    let t;
    if (e.isFoundDocument()) {
      t = e.version;
    } else {
      if (!e.isNoDocument()) {
        throw Tt(50498, {
          Xl: e.constructor.name
        });
      }
      t = di.min();
    }
    const n = this.readVersions.get(e.key.toString());
    if (n) {
      if (!t.isEqual(n)) {
        throw new jt(Kt.ABORTED, "Document version changed between two reads.");
      }
    } else {
      this.readVersions.set(e.key.toString(), t);
    }
  }
  precondition(e) {
    const t = this.readVersions.get(e.toString());
    if (!this.writtenDocs.has(e.toString()) && t) {
      if (t.isEqual(di.min())) {
        return As.exists(false);
      } else {
        return As.updateTime(t);
      }
    } else {
      return As.none();
    }
  }
  preconditionForUpdate(e) {
    const t = this.readVersions.get(e.toString());
    if (!this.writtenDocs.has(e.toString()) && t) {
      if (t.isEqual(di.min())) {
        throw new jt(Kt.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      }
      return As.updateTime(t);
    }
    return As.exists(true);
  }
  write(e) {
    this.ensureCommitNotCalled();
    this.mutations.push(e);
  }
  ensureCommitNotCalled() {}
};
var Qg = class {
  constructor(e, t, n, r, s) {
    this.asyncQueue = e;
    this.datastore = t;
    this.options = n;
    this.updateFunction = r;
    this.deferred = s;
    this.eE = n.maxAttempts;
    this._r = new Wo(this.asyncQueue, "transaction_retry");
  }
  tE() {
    this.eE -= 1;
    this.nE();
  }
  nE() {
    this._r.Yn(async () => {
      const e = new jg(this.datastore);
      const t = this.rE(e);
      if (t) {
        t.then(t => {
          this.asyncQueue.enqueueAndForget(() => e.commit().then(() => {
            this.deferred.resolve(t);
          }).catch(e => {
            this.iE(e);
          }));
        }).catch(e => {
          this.iE(e);
        });
      }
    });
  }
  rE(e) {
    try {
      const t = this.updateFunction(e);
      if (!Un(t) && t.catch && t.then) {
        return t;
      } else {
        this.deferred.reject(Error("Transaction callback must return a Promise"));
        return null;
      }
    } catch (e) {
      this.deferred.reject(e);
      return null;
    }
  }
  iE(e) {
    if (this.eE > 0 && this.sE(e)) {
      this.eE -= 1;
      this.asyncQueue.enqueueAndForget(() => {
        this.nE();
        return Promise.resolve();
      });
    } else {
      this.deferred.reject(e);
    }
  }
  sE(e) {
    if (e?.name === "FirebaseError") {
      const t = e.code;
      return t === "aborted" || t === "failed-precondition" || t === "already-exists" || !Xi(t);
    }
    return false;
  }
};
var zg = "FirestoreClient";
var Yg = class {
  constructor(e, t, n, r, s) {
    this.authCredentials = e;
    this.appCheckCredentials = t;
    this.asyncQueue = n;
    this._databaseInfo = r;
    this.user = bo.UNAUTHENTICATED;
    this.clientId = Ot.newId();
    this.authCredentialListener = () => Promise.resolve();
    this.appCheckCredentialListener = () => Promise.resolve();
    this._uninitializedComponentsProvider = s;
    this.authCredentials.start(n, async e => {
      yt(zg, "Received user=", e.uid);
      await this.authCredentialListener(e);
      this.user = e;
    });
    this.appCheckCredentials.start(n, e => {
      yt(zg, "Received new app check token=", e);
      return this.appCheckCredentialListener(e, this.user);
    });
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this._databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new No();
    this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        if (this._onlineComponents) {
          await this._onlineComponents.terminate();
        }
        if (this._offlineComponents) {
          await this._offlineComponents.terminate();
        }
        this.authCredentials.shutdown();
        this.appCheckCredentials.shutdown();
        e.resolve();
      } catch (t) {
        const n = Dp(t, "Failed to shutdown persistence");
        e.reject(n);
      }
    });
    return e.promise;
  }
};
async function Wg(e, t) {
  e.asyncQueue.verifyOperationInProgress();
  yt(zg, "Initializing OfflineComponentProvider");
  const n = e.configuration;
  await t.initialize(n);
  let r = n.initialUser;
  e.setCredentialChangeListener(async e => {
    if (!r.isEqual(e)) {
      await Tf(t.localStore, e);
      r = e;
    }
  });
  t.persistence.setDatabaseDeletedListener(() => e.terminate());
  e._offlineComponents = t;
}
async function $g(e, t) {
  e.asyncQueue.verifyOperationInProgress();
  const n = await Xg(e);
  yt(zg, "Initializing OnlineComponentProvider");
  await t.initialize(n, e.configuration);
  e.setCredentialChangeListener(e => dp(t.remoteStore, e));
  e.setAppCheckTokenChangeListener((e, n) => dp(t.remoteStore, n));
  e._onlineComponents = t;
}
async function Xg(e) {
  if (!e._offlineComponents) {
    if (e._uninitializedComponentsProvider) {
      yt(zg, "Using user provided OfflineComponentProvider");
      try {
        await Wg(e, e._uninitializedComponentsProvider._offline);
      } catch (t) {
        const n = t;
        if (!function (e) {
          if (e.name === "FirebaseError") {
            return e.code === Kt.FAILED_PRECONDITION || e.code === Kt.UNIMPLEMENTED;
          } else {
            return typeof DOMException == "undefined" || !(e instanceof DOMException) || e.code === 22 || e.code === 20 || e.code === 11;
          }
        }(n)) {
          throw n;
        }
        It("Error using user provided cache. Falling back to memory cache: " + n);
        await Wg(e, new Hg());
      }
    } else {
      yt(zg, "Using default OfflineComponentProvider");
      await Wg(e, new Ug(undefined));
    }
  }
  return e._offlineComponents;
}
async function Zg(e) {
  if (!e._onlineComponents) {
    if (e._uninitializedComponentsProvider) {
      yt(zg, "Using user provided OnlineComponentProvider");
      await $g(e, e._uninitializedComponentsProvider._online);
    } else {
      yt(zg, "Using default OnlineComponentProvider");
      await $g(e, new Kg());
    }
  }
  return e._onlineComponents;
}
function em(e) {
  return Xg(e).then(e => e.persistence);
}
function tm(e) {
  return Xg(e).then(e => e.localStore);
}
function nm(e) {
  return Zg(e).then(e => e.remoteStore);
}
function rm(e) {
  return Zg(e).then(e => e.syncEngine);
}
async function sm(e) {
  const t = await Zg(e);
  const n = t.eventManager;
  n.onListen = cg.bind(null, t.syncEngine);
  n.onUnlisten = dg.bind(null, t.syncEngine);
  n.onFirstRemoteStoreListen = lg.bind(null, t.syncEngine);
  n.onLastRemoteStoreUnlisten = fg.bind(null, t.syncEngine);
  return n;
}
function im(e, t, n = {}) {
  const r = new No();
  e.asyncQueue.enqueueAndForget(async () => function (e, t, n, r, s) {
    const i = new mp({
      next: o => {
        i.Bu();
        t.enqueueAndForget(() => Yp(e, a));
        const B = o.docs.has(n);
        if (!B && o.fromCache) {
          s.reject(new jt(Kt.UNAVAILABLE, "Failed to get document because the client is offline."));
        } else if (B && o.fromCache && r && r.source === "server") {
          s.reject(new jt(Kt.UNAVAILABLE, "Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to \"server\" to retrieve the cached document.)"));
        } else {
          s.resolve(o);
        }
      },
      error: e => s.reject(e)
    });
    const a = new Zp(Gi(n.path), i, {
      includeMetadataChanges: true,
      waitForSyncWhenOnline: true
    });
    return zp(e, a);
  }(await sm(e), e.asyncQueue, t, n, r));
  return r.promise;
}
function am(e, t, n = {}) {
  const r = new No();
  e.asyncQueue.enqueueAndForget(async () => function (e, t, n, r, s) {
    const i = new mp({
      next: n => {
        i.Bu();
        t.enqueueAndForget(() => Yp(e, a));
        if (n.fromCache && r.source === "server") {
          s.reject(new jt(Kt.UNAVAILABLE, "Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to \"server\" to retrieve the cached documents.)"));
        } else {
          s.resolve(n);
        }
      },
      error: e => s.reject(e)
    });
    const a = new Zp(n instanceof ec ? function (e, t) {
      const n = function (e) {
        let t = false;
        const n = [];
        for (const r of e) {
          if (r instanceof Xu) {
            t = true;
            if (r.orderings.some(e => e.expr instanceof vu && e.expr.fieldName === Qt)) {
              n.push(r);
            } else {
              const e = r.orderings.map(e => e);
              e.push(Tu(Qt).ascending());
              n.push(new Xu(e, {}));
            }
          } else if (r instanceof Yu) {
            if (!t) {
              n.push(new Xu([Tu(Qt).ascending()], {}));
              t = true;
            }
            n.push(r);
          } else {
            n.push(r);
          }
        }
        if (!t) {
          n.push(new Xu([Tu(Qt).ascending()], {}));
        }
        return n;
      }(e.stages);
      if (e.userDataReader) {
        const t = e.userDataReader.createContext(3, "toCorePipeline");
        n.forEach(e => e._readUserData(t));
      }
      return new tc(e.userDataReader.serializer, n, t);
    }(n) : n, i, {
      includeMetadataChanges: true,
      waitForSyncWhenOnline: true
    });
    return zp(e, a);
  }(await sm(e), e.asyncQueue, t, n, r));
  return r.promise;
}
function om(e, t) {
  const n = new No();
  e.asyncQueue.enqueueAndForget(async () => async function (e, t, n) {
    const r = Vg(e);
    try {
      const e = await function (e, t) {
        const n = At(e);
        const r = pn.now();
        const s = t.reduce((e, t) => e.add(t.key), la());
        let i;
        let a;
        return n.persistence.runTransaction("Locally write mutations", "readwrite", e => {
          let o = na();
          let B = la();
          return n.iu.getEntries(e, s).next(e => {
            o = e;
            o.forEach((e, t) => {
              if (!t.isValidDocument()) {
                B = B.add(e);
              }
            });
          }).next(() => n.localDocuments.getOverlayedDocuments(e, o)).next(s => {
            i = s;
            const a = [];
            for (const e of t) {
              const t = Rs(e, i.get(e.key).overlayedDocument);
              if (t != null) {
                a.push(new Ps(e.key, t, Bs(t.value.mapValue), As.exists(true)));
              }
            }
            return n.mutationQueue.addMutationBatch(e, r, a, t);
          }).next(t => {
            a = t;
            const r = t.applyToLocalDocumentSet(i, B);
            return n.documentOverlayCache.saveOverlays(e, t.batchId, r);
          });
        }).then(() => ({
          batchId: a.batchId,
          changes: ia(i)
        }));
      }(r.localStore, t);
      r.sharedClientState.addPendingMutation(e.batchId);
      (function (e, t, n) {
        let r = e.$l[e.currentUser.toKey()];
        r ||= new Mt(St);
        r = r.insert(t, n);
        e.$l[e.currentUser.toKey()] = r;
      })(r, e.batchId, n);
      await Ng(r, e.changes);
      await ip(r.remoteStore);
    } catch (e) {
      const t = Dp(e, "Failed to persist write");
      n.reject(t);
    }
  }(await rm(e), t, n));
  return n.promise;
}
function Bm(e, t, n) {
  const r = new No();
  e.asyncQueue.enqueueAndForget(async () => {
    const s = await function (e) {
      return Zg(e).then(e => e.datastore);
    }(e);
    new Qg(e.asyncQueue, s, n, t, r).tE();
  });
  return r.promise;
}
function um(e, t, n, r) {
  const s = function (e, t) {
    let n;
    n = typeof e == "string" ? da().encode(e) : e;
    return function (e, t) {
      return new wp(e, t);
    }(function (e, t) {
      if (e instanceof Uint8Array) {
        return Pf(e, t);
      }
      if (e instanceof ArrayBuffer) {
        return Pf(new Uint8Array(e), t);
      }
      if (e instanceof ReadableStream) {
        return e.getReader();
      }
      throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
    }(n), t);
  }(n, po(t));
  e.asyncQueue.enqueueAndForget(async () => {
    (function (e, t, n) {
      const r = At(e);
      (async function (e, t, n) {
        try {
          const r = await t.getMetadata();
          if (await function (e, t) {
            const n = At(e);
            const r = Ma(t.createTime);
            return n.persistence.runTransaction("hasNewerBundle", "readonly", e => n.qo.getBundleMetadata(e, t.id)).then(e => !!e && e.createTime.compareTo(r) >= 0);
          }(e.localStore, r)) {
            await t.close();
            n._completeWith(function (e) {
              return {
                taskState: "Success",
                documentsLoaded: e.totalDocuments,
                bytesLoaded: e.totalBytes,
                totalDocuments: e.totalDocuments,
                totalBytes: e.totalBytes
              };
            }(r));
            return Promise.resolve(new Set());
          }
          n._updateProgress(ng(r));
          const s = new tg(r, t.serializer);
          let i = await t.ku();
          while (i) {
            const e = await s.al(i);
            if (e) {
              n._updateProgress(e);
            }
            i = await t.ku();
          }
          const a = await s.cl(e.localStore);
          await Ng(e, a.El, undefined);
          await function (e, t) {
            const n = At(e);
            return n.persistence.runTransaction("Save bundle", "readwrite", e => n.qo.saveBundleMetadata(e, t));
          }(e.localStore, r);
          n._completeWith(a.progress);
          return Promise.resolve(a.ll);
        } catch (e) {
          It(ag, `Loading bundle failed with ${e}`);
          n._failWith(e);
          return Promise.resolve(new Set());
        }
      })(r, t, n).then(e => {
        r.sharedClientState.notifyBundleLoaded(e);
      });
    })(await rm(e), s, r);
  });
}
var cm = class {
  constructor(e, t, n, r, s) {
    this._firestore = e;
    this._userDataWriter = t;
    this._key = n;
    this._document = r;
    this._converter = s;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new LB(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new lm(this._firestore, this._userDataWriter, this._key, this._document, null);
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  _fieldsProto() {
    return this._document?.data.clone().value.mapValue.fields ?? undefined;
  }
  get(e) {
    if (this._document) {
      const t = this._document.data.field(cu("DocumentSnapshot.get", e));
      if (t !== null) {
        return this._userDataWriter.convertValue(t);
      }
    }
  }
};
var lm = class extends cm {
  data() {
    return super.data();
  }
};
var hm = class {
  convertValue(e, t = "none") {
    switch (_r(e)) {
      case 0:
        return null;
      case 2:
        return e.booleanValue;
      case 3:
        if ("mapValue" in e) {
          if (Qr(e)) {
            return this.convertToInt32Value(e.mapValue);
          }
          if (jr(e)) {
            return this.convertToDecimal128Value(e.mapValue);
          }
        }
        return wn(e.integerValue || e.doubleValue);
      case 4:
        return this.convertTimestamp(e.timestampValue);
      case 6:
        return this.convertServerTimestamp(e, t);
      case 7:
        return e.stringValue;
      case 8:
        if ("bytesValue" in e) {
          return this.convertBytes(yn(e.bytesValue));
        } else {
          return this.convertToBytesWithSubtype(e.mapValue);
        }
      case 9:
        return this.convertReference(e.referenceValue);
      case 11:
        return this.convertGeoPoint(e.geoPointValue);
      case 13:
        return this.convertArray(e.arrayValue, t);
      case 15:
        return this.convertObject(e.mapValue, t);
      case 14:
        return this.convertVectorValue(e.mapValue);
      case 12:
        return this.convertToRegexValue(e.mapValue);
      case 10:
        return this.convertToBsonObjectId(e.mapValue);
      case 5:
        return this.convertToBsonTimestamp(e.mapValue);
      case 16:
        return vo.instance();
      case 1:
        return To.instance();
      default:
        throw Tt(62114, {
          value: e
        });
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  convertObjectMap(e, t = "none") {
    const n = {};
    en(e, (e, r) => {
      n[e] = this.convertValue(r, t);
    });
    return n;
  }
  convertVectorValue(e) {
    const t = e.fields?.[Wn].arrayValue?.values?.map(e => wn(e.doubleValue));
    return new HB(t);
  }
  convertToBsonObjectId(e) {
    const t = e.fields?.[rr]?.stringValue ?? "";
    return new go(t);
  }
  convertToBytesWithSubtype(e) {
    const t = e.fields?.[ur]?.bytesValue;
    if (!t) {
      throw new Error("Received incorrect bytesValue for Bytes with subtype");
    }
    const n = yn(t).toUint8Array();
    if (n.length === 0) {
      throw new Error("Received empty bytesValue for Bytes with subtype");
    }
    const r = n[0];
    const s = n.slice(1);
    return new Eo(mn.fromUint8Array(s), r);
  }
  convertToBsonTimestamp(e) {
    const t = e.fields?.[ar];
    const n = Number(t?.mapValue?.fields?.[or]?.integerValue);
    const r = Number(t?.mapValue?.fields?.[Br]?.integerValue);
    return new mo(n, r);
  }
  convertToRegexValue(e) {
    const t = e.fields?.[er]?.mapValue?.fields?.[tr]?.stringValue ?? "";
    const n = e.fields?.[er]?.mapValue?.fields?.[nr]?.stringValue ?? "";
    return new VB(t, n);
  }
  convertToInt32Value(e) {
    const t = Number(e.fields?.[sr]?.integerValue);
    return new Io(t);
  }
  convertToDecimal128Value(e) {
    const t = e.fields?.[ir]?.stringValue ?? "";
    return new Do(t);
  }
  convertGeoPoint(e) {
    return new _o(wn(e.latitude), wn(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map(e => this.convertValue(e, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case "previous":
        const n = Nn(e);
        if (n == null) {
          return null;
        } else {
          return this.convertValue(n, t);
        }
      case "estimate":
        return this.convertTimestamp(An(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = Dn(e);
    return new pn(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const n = Yt.fromString(e);
    Nt(lo(n), 9688, {
      name: e
    });
    const r = new Sn(n.get(1), n.get(3));
    const s = new nn(n.popFirst(5));
    if (!r.isEqual(t)) {
      _t(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`);
    }
    return s;
  }
};
function Cm(e, t, n) {
  let r;
  r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t;
  return r;
}
var dm = class extends hm {
  constructor(e) {
    super();
    this.firestore = e;
  }
  convertBytes(e) {
    return new Eo(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new LB(this.firestore, null, t);
  }
};
var fm = "AsyncQueue";
var pm = class {
  constructor(e = Promise.resolve()) {
    this._E = [];
    this.oE = false;
    this.aE = [];
    this.uE = null;
    this.cE = false;
    this.lE = false;
    this.EE = [];
    this._r = new Wo(this, "async_queue_retry");
    this.hE = () => {
      const e = Vp();
      if (e) {
        yt(fm, "Visibility state changed to " + e.visibilityState);
      }
      this._r.Xn();
    };
    this.TE = e;
    const t = Vp();
    if (t && typeof t.addEventListener == "function") {
      t.addEventListener("visibilitychange", this.hE);
    }
  }
  get isShuttingDown() {
    return this.oE;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.PE();
    this.IE(e);
  }
  enterRestrictedMode(e) {
    if (!this.oE) {
      this.oE = true;
      this.lE = e || false;
      const t = Vp();
      if (t && typeof t.removeEventListener == "function") {
        t.removeEventListener("visibilitychange", this.hE);
      }
    }
  }
  enqueue(e) {
    this.PE();
    if (this.oE) {
      return new Promise(() => {});
    }
    const t = new No();
    return this.IE(() => this.oE && this.lE ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => {
      this._E.push(e);
      return this.RE();
    });
  }
  async RE() {
    if (this._E.length !== 0) {
      try {
        await this._E[0]();
        this._E.shift();
        this._r.reset();
      } catch (Hu) {
        if (!mB(Hu)) {
          throw Hu;
        }
        yt(fm, "Operation failed with retryable error: " + Hu);
      }
      if (this._E.length > 0) {
        this._r.Yn(() => this.RE());
      }
    }
  }
  IE(e) {
    const t = this.TE.then(() => {
      this.cE = true;
      return e().catch(e => {
        this.uE = e;
        this.cE = false;
        _t("INTERNAL UNHANDLED ERROR: ", gm(e));
        throw e;
      }).then(e => {
        this.cE = false;
        return e;
      });
    });
    this.TE = t;
    return t;
  }
  enqueueAfterDelay(e, t, n) {
    this.PE();
    if (this.EE.indexOf(e) > -1) {
      t = 0;
    }
    const r = Ep.createAndSchedule(this, e, t, n, e => this.AE(e));
    this.aE.push(r);
    return r;
  }
  PE() {
    if (this.uE) {
      Tt(47125, {
        VE: gm(this.uE)
      });
    }
  }
  verifyOperationInProgress() {}
  async dE() {
    let e;
    do {
      e = this.TE;
      await e;
    } while (e !== this.TE);
  }
  fE(e) {
    for (const t of this.aE) {
      if (t.timerId === e) {
        return true;
      }
    }
    return false;
  }
  mE(e) {
    return this.dE().then(() => {
      this.aE.sort((e, t) => e.targetTimeMs - t.targetTimeMs);
      for (const t of this.aE) {
        t.skipDelay();
        if (e !== "all" && t.timerId === e) {
          break;
        }
      }
      return this.dE();
    });
  }
  pE(e) {
    this.EE.push(e);
  }
  AE(e) {
    const t = this.aE.indexOf(e);
    this.aE.splice(t, 1);
  }
};
function gm(e) {
  let t = e.message || "";
  if (e.stack) {
    t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack;
  }
  return t;
}
var mm = class {
  constructor() {
    this._progressObserver = {};
    this._taskCompletionResolver = new No();
    this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    };
  }
  onProgress(e, t, n) {
    this._progressObserver = {
      next: e,
      error: t,
      complete: n
    };
  }
  catch(e) {
    return this._taskCompletionResolver.promise.catch(e);
  }
  then(e, t) {
    return this._taskCompletionResolver.promise.then(e, t);
  }
  _completeWith(e) {
    this._updateProgress(e);
    if (this._progressObserver.complete) {
      this._progressObserver.complete();
    }
    this._taskCompletionResolver.resolve(e);
  }
  _failWith(e) {
    this._lastProgress.taskState = "Error";
    if (this._progressObserver.next) {
      this._progressObserver.next(this._lastProgress);
    }
    if (this._progressObserver.error) {
      this._progressObserver.error(e);
    }
    this._taskCompletionResolver.reject(e);
  }
  _updateProgress(e) {
    this._lastProgress = e;
    if (this._progressObserver.next) {
      this._progressObserver.next(e);
    }
  }
};
var Em = class extends SB {
  constructor(e, t, n, r) {
    super(e, t, n, r);
    this.type = "firestore";
    this._queue = new pm();
    this._persistenceKey = r?.name || "[DEFAULT]";
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      this._queue = new pm(e);
      this._firestoreClient = undefined;
      await e;
    }
  }
};
function Dm(e) {
  if (e._terminated) {
    throw new jt(Kt.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  if (!e._firestoreClient) {
    wm(e);
  }
  return e._firestoreClient;
}
function wm(e) {
  const t = e._freezeSettings();
  const n = function (e, t, n, r, s) {
    return new Fn(e, t, n, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling, Go(s.experimentalLongPollingOptions), s.useFetchStreams, s.isUsingEmulator, r, s._customHeaders, s.grpcFlowControlWindow);
  }(e._databaseId, e._app?.options.appId || "", e._persistenceKey, e._app?.options.apiKey, t);
  if (!e._componentsProvider) {
    if (t.localCache?._offlineComponentProvider && t.localCache?._onlineComponentProvider) {
      e._componentsProvider = {
        _offline: t.localCache._offlineComponentProvider,
        _online: t.localCache._onlineComponentProvider
      };
    }
  }
  e._firestoreClient = new Yg(e._authCredentials, e._appCheckCredentials, e._queue, n, e._componentsProvider && function (e) {
    const t = e?._online.build();
    return {
      _offline: e?._offline.build(t),
      _online: t
    };
  }(e._componentsProvider));
}
function ym(e, t, n) {
  if ((e = cn(e, Em))._firestoreClient || e._terminated) {
    throw new jt(Kt.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
  }
  if (e._componentsProvider || e._getSettings().localCache) {
    throw new jt(Kt.FAILED_PRECONDITION, "SDK cache is already specified.");
  }
  e._componentsProvider = {
    _online: t,
    _offline: n
  };
  wm(e);
}
function _m(e) {
  return function (e) {
    const t = new No();
    e.asyncQueue.enqueueAndForget(async () => async function (e, t) {
      const n = At(e);
      if (!$f(n.remoteStore)) {
        yt(ag, "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
      }
      try {
        const e = await function (e) {
          const t = At(e);
          return t.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", e => t.mutationQueue.getHighestUnacknowledgedBatchId(e));
        }(n.localStore);
        if (e === Hn) {
          t.resolve();
          return;
        }
        const r = n.Ul.get(e) || [];
        r.push(t);
        n.Ul.set(e, r);
      } catch (e) {
        const n = Dp(e, "Initialization of waitForPendingWrites() operation failed");
        t.reject(n);
      }
    }(await rm(e), t));
    return t.promise;
  }(Dm(e = cn(e, Em)));
}
function Im(e) {
  return function (e) {
    return e.asyncQueue.enqueue(async () => {
      const t = await em(e);
      const n = await nm(e);
      t.setNetworkEnabled(true);
      return function (e) {
        const t = At(e);
        t.xu.delete(0);
        return Uf(t);
      }(n);
    });
  }(Dm(e = cn(e, Em)));
}
function vm(e) {
  return function (e) {
    return e.asyncQueue.enqueue(async () => {
      const t = await em(e);
      const n = await nm(e);
      t.setNetworkEnabled(false);
      return async function (e) {
        const t = At(e);
        t.xu.add(0);
        await qf(t);
        t.Cu.set("Offline");
      }(n);
    });
  }(Dm(e = cn(e, Em)));
}
function Tm(e, t) {
  return function (e, t) {
    return e.asyncQueue.enqueue(async () => function (e, t) {
      const n = At(e);
      return n.persistence.runTransaction("Get named query", "readonly", e => n.qo.getNamedQuery(e, t));
    }(await tm(e), t));
  }(Dm(e = cn(e, Em)), t).then(t => t ? new xB(e, null, t.query) : null);
}
var bm = class extends hm {
  constructor(e) {
    super();
    this.firestore = e;
  }
  convertBytes(e) {
    return new Eo(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new LB(this.firestore, null, t);
  }
};
var Nm = class {
  constructor(e, t) {
    this.hasPendingWrites = e;
    this.fromCache = t;
  }
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
};
var Am = class e extends cm {
  constructor(e, t, n, r, s, i) {
    super(e, t, n, r, i);
    this._firestore = e;
    this._firestoreImpl = e;
    this.metadata = s;
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const t = new Fm(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
        return this._converter.fromFirestore(t, e);
      }
      return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
    }
  }
  get(e, t = {}) {
    if (this._document) {
      const n = this._document.data.field(cu("DocumentSnapshot.get", e));
      if (n !== null) {
        return this._userDataWriter.convertValue(n, t.serverTimestamps);
      }
    }
  }
  toJSON() {
    if (this.metadata.hasPendingWrites) {
      throw new jt(Kt.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
    }
    const t = this._document;
    const n = {
      type: e._jsonSchemaVersion,
      bundle: "",
      bundleSource: "DocumentSnapshot"
    };
    n.bundleName = this._key.toString();
    if (t && t.isValidDocument() && t.isFoundDocument()) {
      this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields, "previous");
      this._firestore;
      this.ref.path;
      n.bundle = "NOT SUPPORTED";
      return n;
    } else {
      return n;
    }
  }
};
Am._jsonSchemaVersion = "firestore/documentSnapshot/1.0";
Am._jsonSchema = {
  type: hn("string", Am._jsonSchemaVersion),
  bundleSource: hn("string", "DocumentSnapshot"),
  bundleName: hn("string"),
  bundle: hn("string")
};
var Fm = class extends Am {
  data(e = {}) {
    return super.data(e);
  }
};
var Om = class e {
  constructor(e, t, n, r) {
    this._firestore = e;
    this._userDataWriter = t;
    this._snapshot = r;
    this.metadata = new Nm(r.hasPendingWrites, r.fromCache);
    this.query = n;
  }
  get docs() {
    const e = [];
    this.forEach(t => e.push(t));
    return e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, t) {
    this._snapshot.docs.forEach(n => {
      e.call(t, new Fm(this._firestore, this._userDataWriter, n.key, n, new Nm(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  docChanges(e = {}) {
    const t = !!e.includeMetadataChanges;
    if (t && this._snapshot.excludesMetadataChanges) {
      throw new jt(Kt.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    }
    if (!this._cachedChanges || this._cachedChangesIncludeMetadataChanges !== t) {
      this._cachedChanges = function (e, t) {
        if (e._snapshot.oldDocs.isEmpty()) {
          let t = 0;
          return e._snapshot.docChanges.map(n => {
            if ($l(e._snapshot.query)) {
              Rd(e._snapshot.query);
            } else {
              e.query._query;
            }
            const r = new Fm(e._firestore, e._userDataWriter, n.doc.key, n.doc, new Nm(e._snapshot.mutatedKeys.has(n.doc.key), e._snapshot.fromCache), e.query.converter);
            n.doc;
            return {
              type: "added",
              doc: r,
              oldIndex: -1,
              newIndex: t++
            };
          });
        }
        {
          let n = e._snapshot.oldDocs;
          return e._snapshot.docChanges.filter(e => t || e.type !== 3).map(t => {
            const r = new Fm(e._firestore, e._userDataWriter, t.doc.key, t.doc, new Nm(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter);
            let s = -1;
            let i = -1;
            if (t.type !== 0) {
              s = n.indexOf(t.doc.key);
              n = n.delete(t.doc.key);
            }
            if (t.type !== 1) {
              n = n.add(t.doc);
              i = n.indexOf(t.doc.key);
            }
            return {
              type: Sm(t.type),
              doc: r,
              oldIndex: s,
              newIndex: i
            };
          });
        }
      }(this, t);
      this._cachedChangesIncludeMetadataChanges = t;
    }
    return this._cachedChanges;
  }
  toJSON() {
    if (this.metadata.hasPendingWrites) {
      throw new jt(Kt.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
    }
    const t = {
      type: e._jsonSchemaVersion,
      bundleSource: "QuerySnapshot"
    };
    t.bundleName = Ot.newId();
    this._firestore._databaseId.database;
    this._firestore._databaseId.projectId;
    const n = [];
    const r = [];
    const s = [];
    this.docs.forEach(e => {
      if (e._document !== null) {
        n.push(e._document);
        r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields, "previous"));
        s.push(e.ref.path);
      }
    });
    this._firestore;
    this.query._query;
    t.bundleName;
    t.bundle = "NOT SUPPORTED";
    return t;
  }
};
function Sm(e) {
  switch (e) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return Tt(61501, {
        type: e
      });
  }
}
function xm(e, t) {
  if (e instanceof Am && t instanceof Am) {
    return e._firestore === t._firestore && e._key.isEqual(t._key) && (e._document === null ? t._document === null : e._document.isEqual(t._document)) && e._converter === t._converter;
  } else {
    return e instanceof Om && t instanceof Om && e._firestore === t._firestore && MB(e.query, t.query) && e.metadata.isEqual(t.metadata) && e._snapshot.isEqual(t._snapshot);
  }
}
function Lm(e) {
  if (e.limitType === "L" && e.explicitOrderBy.length === 0) {
    throw new jt(Kt.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
  }
}
Om._jsonSchemaVersion = "firestore/querySnapshot/1.0";
Om._jsonSchema = {
  type: hn("string", Om._jsonSchemaVersion),
  bundleSource: hn("string", "QuerySnapshot"),
  bundleName: hn("string"),
  bundle: hn("string")
};
var Rm = class {};
var km = class extends Rm {};
function Gm(e, t, ...n) {
  let r = [];
  if (t instanceof Rm) {
    r.push(t);
  }
  r = r.concat(n);
  (function (e) {
    const t = e.filter(e => e instanceof Mm).length;
    const n = e.filter(e => e instanceof Pm).length;
    if (t > 1 || t > 0 && n > 0) {
      throw new jt(Kt.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
    }
  })(r);
  for (const s of r) {
    e = s._apply(e);
  }
  return e;
}
var Pm = class e extends km {
  constructor(e, t, n) {
    super();
    this._field = e;
    this._op = t;
    this._value = n;
    this.type = "where";
  }
  static _create(t, n, r) {
    return new e(t, n, r);
  }
  _apply(e) {
    const t = this._parse(e);
    Qm(e._query, t);
    return new xB(e.firestore, e.converter, Ui(e._query, t));
  }
  _parse(e) {
    const t = zB(e.firestore);
    return function (e, t, n, r, s, i, a) {
      let o;
      (function (e, t) {
        if (typeof e == "number" && isNaN(e) && t !== "==" && t !== "!=" && t !== "array-contains") {
          throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");
        }
        if (e === null && t !== "==" && t !== "!=" && t !== "array-contains") {
          throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.");
        }
      })(a, i);
      if (s.isKeyField()) {
        if (i === "array-contains" || i === "array-contains-any") {
          throw new jt(Kt.INVALID_ARGUMENT, `Invalid Query. You can't perform '${i}' queries on documentId().`);
        }
        if (i === "in" || i === "not-in") {
          jm(a, i);
          const t = [];
          for (const n of a) {
            t.push(Km(r, e, n));
          }
          o = {
            arrayValue: {
              values: t
            }
          };
        } else {
          o = Km(r, e, a);
        }
      } else {
        if (i === "in" || i === "not-in" || i === "array-contains-any") {
          jm(a, i);
        }
        o = su(n, t, a, i === "in" || i === "not-in");
      }
      return zs.create(s, i, o);
    }(e._query, "where", t, e.firestore._databaseId, this._field, this._op, this._value);
  }
};
var Mm = class e extends Rm {
  constructor(e, t) {
    super();
    this.type = e;
    this._queryConstraints = t;
  }
  static _create(t, n) {
    return new e(t, n);
  }
  _parse(e) {
    const t = this._queryConstraints.map(t => t._parse(e)).filter(e => e.getFilters().length > 0);
    if (t.length === 1) {
      return t[0];
    } else {
      return Ys.create(t, this._getOperator());
    }
  }
  _apply(e) {
    const t = this._parse(e);
    if (t.getFilters().length === 0) {
      return e;
    } else {
      (function (e, t) {
        let n = e;
        const r = t.getFlattenedFilters();
        for (const s of r) {
          Qm(n, s);
          n = Ui(n, s);
        }
      })(e._query, t);
      return new xB(e.firestore, e.converter, Ui(e._query, t));
    }
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    if (this.type === "and") {
      return "and";
    } else {
      return "or";
    }
  }
};
var Vm = class e extends km {
  constructor(e, t) {
    super();
    this._field = e;
    this._direction = t;
    this.type = "orderBy";
  }
  static _create(t, n) {
    return new e(t, n);
  }
  _apply(e) {
    const t = function (e, t, n) {
      if (e.startAt !== null) {
        throw new jt(Kt.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      }
      if (e.endAt !== null) {
        throw new jt(Kt.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      }
      return new hi(t, n);
    }(e._query, this._field, this._direction);
    return new xB(e.firestore, e.converter, function (e, t) {
      const n = e.explicitOrderBy.concat([t]);
      return new Ri(e.path, e.collectionGroup, n, e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt);
    }(e._query, t));
  }
};
var Hm = class e extends km {
  constructor(e, t, n) {
    super();
    this.type = e;
    this._limit = t;
    this._limitType = n;
  }
  static _create(t, n, r) {
    return new e(t, n, r);
  }
  _apply(e) {
    return new xB(e.firestore, e.converter, qi(e._query, this._limit, this._limitType));
  }
};
var Um = class e extends km {
  constructor(e, t, n) {
    super();
    this.type = e;
    this._docOrFields = t;
    this._inclusive = n;
  }
  static _create(t, n, r) {
    return new e(t, n, r);
  }
  _apply(e) {
    const t = Jm(e, this.type, this._docOrFields, this._inclusive);
    return new xB(e.firestore, e.converter, function (e, t) {
      return new Ri(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, t, e.endAt);
    }(e._query, t));
  }
};
var qm = class e extends km {
  constructor(e, t, n) {
    super();
    this.type = e;
    this._docOrFields = t;
    this._inclusive = n;
  }
  static _create(t, n, r) {
    return new e(t, n, r);
  }
  _apply(e) {
    const t = Jm(e, this.type, this._docOrFields, this._inclusive);
    return new xB(e.firestore, e.converter, function (e, t) {
      return new Ri(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, t);
    }(e._query, t));
  }
};
function Jm(e, t, n, r) {
  n[0] = g(n[0]);
  if (n[0] instanceof cm) {
    return function (e, t, n, r, s) {
      if (!r) {
        throw new jt(Kt.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
      }
      const i = [];
      for (const a of Vi(e)) {
        if (a.field.isKeyField()) {
          i.push(qr(t, r.key));
        } else {
          const e = r.data.field(a.field);
          if (bn(e)) {
            throw new jt(Kt.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field \"" + a.field + "\" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)");
          }
          if (e === null) {
            const e = a.field.canonicalString();
            throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`);
          }
          i.push(e);
        }
      }
      return new Js(i, s);
    }(e._query, e.firestore._databaseId, t, n[0]._document, r);
  }
  {
    const s = zB(e.firestore);
    return function (e, t, n, r, s, i) {
      const a = e.explicitOrderBy;
      if (s.length > a.length) {
        throw new jt(Kt.INVALID_ARGUMENT, `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      }
      const o = [];
      for (let B = 0; B < s.length; B++) {
        const i = s[B];
        if (a[B].field.isKeyField()) {
          if (typeof i != "string") {
            throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);
          }
          if (!Mi(e) && i.indexOf("/") !== -1) {
            throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);
          }
          const n = e.path.child(Yt.fromString(i));
          if (!nn.isDocumentKey(n)) {
            throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
          }
          const s = new nn(n);
          o.push(qr(t, s));
        } else {
          const e = su(n, r, i);
          o.push(e);
        }
      }
      return new Js(o, i);
    }(e._query, e.firestore._databaseId, s, t, n, r);
  }
}
function Km(e, t, n) {
  if (typeof (n = g(n)) == "string") {
    if (n === "") {
      throw new jt(Kt.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    }
    if (!Mi(t) && n.indexOf("/") !== -1) {
      throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    }
    const r = t.path.child(Yt.fromString(n));
    if (!nn.isDocumentKey(r)) {
      throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    }
    return qr(e, new nn(r));
  }
  if (n instanceof LB) {
    return qr(e, n._key);
  }
  throw new jt(Kt.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${un(n)}.`);
}
function jm(e, t) {
  if (!Array.isArray(e) || e.length === 0) {
    throw new jt(Kt.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
  }
}
function Qm(e, t) {
  const n = function (e, t) {
    for (const n of e) {
      for (const e of n.getFlattenedFilters()) {
        if (t.indexOf(e.op) >= 0) {
          return e.op;
        }
      }
    }
    return null;
  }(e.filters, function (e) {
    switch (e) {
      case "!=":
        return ["!=", "not-in"];
      case "array-contains-any":
      case "in":
        return ["not-in"];
      case "not-in":
        return ["array-contains-any", "in", "not-in", "!="];
      default:
        return [];
    }
  }(t.op));
  if (n !== null) {
    throw n === t.op ? new jt(Kt.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new jt(Kt.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`);
  }
}
function zm(e) {
  return function (e, t) {
    if (typeof e != "object" || e === null) {
      return false;
    }
    const n = e;
    for (const r of t) {
      if (r in n && typeof n[r] == "function") {
        return true;
      }
    }
    return false;
  }(e, ["next", "error", "complete"]);
}
var Ym = {
  maxAttempts: 5
};
var Wm = class {
  constructor(e, t) {
    this._firestore = e;
    this._commitHandler = t;
    this._mutations = [];
    this._committed = false;
    this._dataReader = zB(e);
  }
  set(e, t, n) {
    this._verifyNotCommitted();
    const r = $m(e, this._firestore);
    const s = Cm(r.converter, t, n);
    const i = YB(this._dataReader, "WriteBatch.set", r._key, s, r.converter !== null, n);
    this._mutations.push(i.toMutation(r._key, As.none()));
    return this;
  }
  update(e, t, n, ...r) {
    this._verifyNotCommitted();
    const s = $m(e, this._firestore);
    let i;
    i = typeof (t = g(t)) == "string" || t instanceof wo ? ru(this._dataReader, "WriteBatch.update", s._key, t, n, r) : nu(this._dataReader, "WriteBatch.update", s._key, t);
    this._mutations.push(i.toMutation(s._key, As.exists(true)));
    return this;
  }
  delete(e) {
    this._verifyNotCommitted();
    const t = $m(e, this._firestore);
    this._mutations = this._mutations.concat(new Us(t._key, As.none()));
    return this;
  }
  commit() {
    this._verifyNotCommitted();
    this._committed = true;
    if (this._mutations.length > 0) {
      return this._commitHandler(this._mutations);
    } else {
      return Promise.resolve();
    }
  }
  _verifyNotCommitted() {
    if (this._committed) {
      throw new jt(Kt.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }
  }
};
function $m(e, t) {
  if ((e = g(e)).firestore !== t) {
    throw new jt(Kt.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  }
  return e;
}
var Xm = class {
  constructor(e, t) {
    this._firestore = e;
    this._transaction = t;
    this._dataReader = zB(e);
  }
  get(e) {
    const t = $m(e, this._firestore);
    const n = new dm(this._firestore);
    return this._transaction.lookup([t._key]).then(e => {
      if (!e || e.length !== 1) {
        return Tt(24041);
      }
      const r = e[0];
      if (r.isFoundDocument()) {
        return new cm(this._firestore, n, r.key, r, t.converter);
      }
      if (r.isNoDocument()) {
        return new cm(this._firestore, n, t._key, null, t.converter);
      }
      throw Tt(18433, {
        doc: r
      });
    });
  }
  set(e, t, n) {
    const r = $m(e, this._firestore);
    const s = Cm(r.converter, t, n);
    const i = YB(this._dataReader, "Transaction.set", r._key, s, r.converter !== null, n);
    this._transaction.set(r._key, i);
    return this;
  }
  update(e, t, n, ...r) {
    const s = $m(e, this._firestore);
    let i;
    i = typeof (t = g(t)) == "string" || t instanceof wo ? ru(this._dataReader, "Transaction.update", s._key, t, n, r) : nu(this._dataReader, "Transaction.update", s._key, t);
    this._transaction.update(s._key, i);
    return this;
  }
  delete(e) {
    const t = $m(e, this._firestore);
    this._transaction.delete(t._key);
    return this;
  }
};
var Zm = class extends Xm {
  constructor(e, t) {
    super(e, t);
    this._firestore = e;
  }
  get(e) {
    const t = $m(e, this._firestore);
    const n = new bm(this._firestore);
    return super.get(e).then(e => new Am(this._firestore, n, t._key, e._document, new Nm(false, false), t.converter));
  }
};
function eE(e) {
  e = cn(e, LB);
  const t = cn(e.firestore, Em);
  const n = Dm(t);
  const r = new bm(t);
  return function (e, t) {
    const n = new No();
    e.asyncQueue.enqueueAndForget(async () => async function (e, t, n) {
      try {
        const r = await function (e, t) {
          const n = At(e);
          return n.persistence.runTransaction("read document", "readonly", e => n.localDocuments.getDocument(e, t));
        }(e, t);
        if (r.isFoundDocument()) {
          n.resolve(r);
        } else if (r.isNoDocument()) {
          n.resolve(null);
        } else {
          n.reject(new jt(Kt.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
        }
      } catch (e) {
        const r = Dp(e, `Failed to get document '${t} from cache`);
        n.reject(r);
      }
    }(await tm(e), t, n));
    return n.promise;
  }(n, e._key).then(n => new Am(t, r, e._key, n, new Nm(n !== null && n.hasLocalMutations, true), e.converter));
}
function tE(e) {
  e = cn(e, xB);
  const t = cn(e.firestore, Em);
  const n = Dm(t);
  const r = new bm(t);
  return function (e, t) {
    const n = new No();
    e.asyncQueue.enqueueAndForget(async () => async function (e, t, n) {
      try {
        const r = await Sf(e, t, true);
        const s = new ig(t, r.uu);
        const i = s.Vl(r.documents);
        const a = s.applyChanges(i, false);
        n.resolve(a.snapshot);
      } catch (e) {
        const r = Dp(e, `Failed to execute query '${t} against cache`);
        n.reject(r);
      }
    }(await tm(e), t, n));
    return n.promise;
  }(n, e._query).then(n => new Om(t, r, e, n));
}
function nE(e, t, n) {
  e = cn(e, LB);
  const r = cn(e.firestore, Em);
  const s = Cm(e.converter, t, n);
  return aE(r, [YB(zB(r), "setDoc", e._key, s, e.converter !== null, n).toMutation(e._key, As.none())]);
}
function rE(e, t, n, ...r) {
  e = cn(e, LB);
  const s = cn(e.firestore, Em);
  const i = zB(s);
  let a;
  a = typeof (t = g(t)) == "string" || t instanceof wo ? ru(i, "updateDoc", e._key, t, n, r) : nu(i, "updateDoc", e._key, t);
  return aE(s, [a.toMutation(e._key, As.exists(true))]);
}
function sE(e, ...t) {
  e = g(e);
  let n = {
    includeMetadataChanges: false,
    source: "default"
  };
  let r = 0;
  if (typeof t[r] == "object" && !zm(t[r])) {
    n = t[r++];
  }
  const s = {
    includeMetadataChanges: n.includeMetadataChanges,
    source: n.source
  };
  if (zm(t[r])) {
    const e = t[r];
    t[r] = e.next?.bind(e);
    t[r + 1] = e.error?.bind(e);
    t[r + 2] = e.complete?.bind(e);
  }
  let i;
  let a;
  let o;
  if (e instanceof LB) {
    a = cn(e.firestore, Em);
    o = Gi(e._key.path);
    i = {
      next: n => {
        if (t[r]) {
          t[r](oE(a, e, n));
        }
      },
      error: t[r + 1],
      complete: t[r + 2]
    };
  } else {
    const n = cn(e, xB);
    a = cn(n.firestore, Em);
    o = n._query;
    const s = new bm(a);
    i = {
      next: e => {
        if (t[r]) {
          t[r](new Om(a, s, n, e));
        }
      },
      error: t[r + 1],
      complete: t[r + 2]
    };
    Lm(e._query);
  }
  return function (e, t, n, r) {
    const s = new mp(r);
    const i = new Zp(t, s, n);
    e.asyncQueue.enqueueAndForget(async () => zp(await sm(e), i));
    return () => {
      s.Bu();
      e.asyncQueue.enqueueAndForget(async () => Yp(await sm(e), i));
    };
  }(Dm(a), o, s, i);
}
function iE(e, t) {
  return function (e, t) {
    const n = new mp(t);
    e.asyncQueue.enqueueAndForget(async () => function (e, t) {
      At(e).Jc.add(t);
      t.next();
    }(await sm(e), n));
    return () => {
      n.Bu();
      e.asyncQueue.enqueueAndForget(async () => function (e, t) {
        At(e).Jc.delete(t);
      }(await sm(e), n));
    };
  }(Dm(e = cn(e, Em)), zm(t) ? t : {
    next: t
  });
}
function aE(e, t) {
  return om(Dm(e), t);
}
function oE(e, t, n) {
  const r = n.docs.get(t._key);
  const s = new bm(e);
  return new Am(e, s, t._key, r, new Nm(n.hasPendingWrites, n.fromCache), t.converter);
}
var BE = "@firebase/firestore";
var uE = "4.20.0";
(function (e, t = true) {
  (function (e) {
    Et = e;
  })(d);
  B(new u("firestore", (e, {
    instanceIdentifier: n,
    options: r
  }) => {
    const s = e.getProvider("app").getImmediate();
    const i = new Em(new So(e.getProvider("auth-internal")), new ko(s, e.getProvider("app-check-internal")), function (e, t) {
      if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) {
        throw new jt(Kt.INVALID_ARGUMENT, "\"projectId\" not provided in firebase.initializeApp.");
      }
      return new Sn(e.options.projectId, t);
    }(s, n), s);
    r = {
      useFetchStreams: t,
      ...r
    };
    i._setSettings(r);
    return i;
  }, "PUBLIC").setMultipleInstances(true));
  C(BE, uE, e);
  C(BE, uE, "esm2020");
})();
function cE(e, t) {
  if (t === undefined) {
    return {
      merge: false
    };
  }
  if (t.mergeFields !== undefined && t.merge !== undefined) {
    throw new jt("invalid-argument", `Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);
  }
  return t;
}
function lE() {
  if (typeof Uint8Array == "undefined") {
    throw new jt("unimplemented", "Uint8Arrays are not available in this environment.");
  }
}
function hE() {
  if (typeof atob == "undefined") {
    throw new jt("unimplemented", "Blobs are unavailable in Firestore in this environment.");
  }
}
var CE = class e {
  constructor(e) {
    this._delegate = e;
  }
  static fromBase64String(t) {
    hE();
    return new e(Eo.fromBase64String(t));
  }
  static fromUint8Array(t) {
    lE();
    return new e(Eo.fromUint8Array(t));
  }
  toBase64() {
    hE();
    return this._delegate.toBase64();
  }
  toUint8Array() {
    lE();
    return this._delegate.toUint8Array();
  }
  isEqual(e) {
    return this._delegate.isEqual(e._delegate);
  }
  toString() {
    return "Blob(base64: " + this.toBase64() + ")";
  }
};
function dE(e) {
  return function (e, t) {
    if (typeof e != "object" || e === null) {
      return false;
    }
    const n = e;
    for (const r of t) {
      if (r in n && typeof n[r] == "function") {
        return true;
      }
    }
    return false;
  }(e, ["next", "error", "complete"]);
}
var fE = class {
  enableIndexedDbPersistence(e, t) {
    return function (e, t) {
      It("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
      const n = e._freezeSettings();
      ym(e, Kg.provider, {
        build: e => new qg(e, n.cacheSizeBytes, t?.forceOwnership)
      });
      return Promise.resolve();
    }(e._delegate, {
      forceOwnership: t
    });
  }
  enableMultiTabIndexedDbPersistence(e) {
    return async function (e) {
      It("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
      const t = e._freezeSettings();
      ym(e, Kg.provider, {
        build: e => new Jg(e, t.cacheSizeBytes)
      });
    }(e._delegate);
  }
  clearIndexedDbPersistence(e) {
    return function (e) {
      if (e._initialized && !e._terminated) {
        throw new jt(Kt.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
      }
      const t = new No();
      e._queue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          await async function (e) {
            if (!dB.cn()) {
              return Promise.resolve();
            }
            const t = e + df;
            await dB.delete(t);
          }(mf(e._databaseId, e._persistenceKey));
          t.resolve();
        } catch (e) {
          t.reject(e);
        }
      });
      return t.promise;
    }(e._delegate);
  }
};
var pE = class {
  constructor(e, t, n) {
    this._delegate = t;
    this._persistenceProvider = n;
    this.INTERNAL = {
      delete: () => this.terminate()
    };
    if (!(e instanceof Sn)) {
      this._appCompat = e;
    }
  }
  get _databaseId() {
    return this._delegate._databaseId;
  }
  settings(e) {
    const t = this._delegate._getSettings();
    if (!e.merge && t.host !== e.host) {
      It("You are overriding the original host. If you did not intend to override your settings, use {merge: true}.");
    }
    if (e.merge) {
      delete (e = {
        ...t,
        ...e
      }).merge;
    }
    this._delegate._setSettings(e);
  }
  useEmulator(n, r, s = {}) {
    (function (n, r, s, i = {}) {
      n = cn(n, SB);
      const a = e(r);
      const o = n._getSettings();
      const B = {
        ...o,
        emulatorOptions: n._getEmulatorOptions()
      };
      const u = `${r}:${s}`;
      if (a) {
        t(`https://${u}`);
      }
      if (o.host !== AB && o.host !== u) {
        It("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
      }
      const c = {
        ...o,
        host: u,
        ssl: a,
        emulatorOptions: i
      };
      if (!m(c, B) && (n._setSettings(c), i.mockUserToken)) {
        let e;
        let t;
        if (typeof i.mockUserToken == "string") {
          e = i.mockUserToken;
          t = bo.MOCK_USER;
        } else {
          e = f(i.mockUserToken, n._app?.options.projectId);
          const r = i.mockUserToken.sub || i.mockUserToken.user_id;
          if (!r) {
            throw new jt(Kt.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
          }
          t = new bo(r);
        }
        n._authCredentials = new Oo(new Ao(e, t));
      }
    })(this._delegate, n, r, s);
  }
  enableNetwork() {
    return Im(this._delegate);
  }
  disableNetwork() {
    return vm(this._delegate);
  }
  enablePersistence(e) {
    let t = false;
    let n = false;
    if (e) {
      t = !!e.synchronizeTabs;
      n = !!e.experimentalForceOwningTab;
      sn("synchronizeTabs", t, "experimentalForceOwningTab", n);
    }
    if (t) {
      return this._persistenceProvider.enableMultiTabIndexedDbPersistence(this);
    } else {
      return this._persistenceProvider.enableIndexedDbPersistence(this, n);
    }
  }
  clearPersistence() {
    return this._persistenceProvider.clearIndexedDbPersistence(this);
  }
  terminate() {
    if (this._appCompat) {
      this._appCompat._removeServiceInstance("firestore-compat");
      this._appCompat._removeServiceInstance("firestore");
    }
    return this._delegate._delete();
  }
  waitForPendingWrites() {
    return _m(this._delegate);
  }
  onSnapshotsInSync(e) {
    return iE(this._delegate, e);
  }
  get app() {
    if (!this._appCompat) {
      throw new jt("failed-precondition", "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    }
    return this._appCompat;
  }
  collection(e) {
    try {
      return new FE(this, kB(this._delegate, e));
    } catch (Hu) {
      throw yE(Hu, "collection()", "Firestore.collection()");
    }
  }
  doc(e) {
    try {
      return new wE(this, GB(this._delegate, e));
    } catch (Hu) {
      throw yE(Hu, "doc()", "Firestore.doc()");
    }
  }
  collectionGroup(e) {
    try {
      return new bE(this, function (e, t) {
        e = cn(e, SB);
        rn("collectionGroup", "collection id", t);
        if (t.indexOf("/") >= 0) {
          throw new jt(Kt.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
        }
        return new xB(e, null, function (e) {
          return new Ri(Yt.emptyPath(), e);
        }(t));
      }(this._delegate, e));
    } catch (Hu) {
      throw yE(Hu, "collectionGroup()", "Firestore.collectionGroup()");
    }
  }
  runTransaction(e) {
    return function (e, t, n) {
      e = cn(e, Em);
      const r = {
        ...Ym,
        ...n
      };
      (function (e) {
        if (e.maxAttempts < 1) {
          throw new jt(Kt.INVALID_ARGUMENT, "Max attempts must be at least 1");
        }
      })(r);
      return Bm(Dm(e), n => t(new Zm(e, n)), r);
    }(this._delegate, t => e(new mE(this, t)));
  }
  batch() {
    Dm(this._delegate);
    return new EE(new Wm(this._delegate, e => aE(this._delegate, e)));
  }
  loadBundle(e) {
    return function (e, t) {
      const n = Dm(e = cn(e, Em));
      const r = new mm();
      um(n, e._databaseId, t, r);
      return r;
    }(this._delegate, e);
  }
  namedQuery(e) {
    return Tm(this._delegate, e).then(e => e ? new bE(this, e) : null);
  }
};
var gE = class extends hm {
  constructor(e) {
    super();
    this.firestore = e;
  }
  convertBytes(e) {
    return new CE(new Eo(e));
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return wE.forKey(t, this.firestore, null);
  }
};
var mE = class {
  constructor(e, t) {
    this._firestore = e;
    this._delegate = t;
    this._userDataWriter = new gE(e);
  }
  get(e) {
    const t = OE(e);
    return this._delegate.get(t).then(e => new vE(this._firestore, new Am(this._firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, t.converter)));
  }
  set(e, t, n) {
    const r = OE(e);
    if (n) {
      cE("Transaction.set", n);
      this._delegate.set(r, t, n);
    } else {
      this._delegate.set(r, t);
    }
    return this;
  }
  update(e, t, n, ...r) {
    const s = OE(e);
    if (arguments.length === 2) {
      this._delegate.update(s, t);
    } else {
      this._delegate.update(s, t, n, ...r);
    }
    return this;
  }
  delete(e) {
    const t = OE(e);
    this._delegate.delete(t);
    return this;
  }
};
var EE = class {
  constructor(e) {
    this._delegate = e;
  }
  set(e, t, n) {
    const r = OE(e);
    if (n) {
      cE("WriteBatch.set", n);
      this._delegate.set(r, t, n);
    } else {
      this._delegate.set(r, t);
    }
    return this;
  }
  update(e, t, n, ...r) {
    const s = OE(e);
    if (arguments.length === 2) {
      this._delegate.update(s, t);
    } else {
      this._delegate.update(s, t, n, ...r);
    }
    return this;
  }
  delete(e) {
    const t = OE(e);
    this._delegate.delete(t);
    return this;
  }
  commit() {
    return this._delegate.commit();
  }
};
var DE = class e {
  constructor(e, t, n) {
    this._firestore = e;
    this._userDataWriter = t;
    this._delegate = n;
  }
  fromFirestore(e, t) {
    const n = new Fm(this._firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, null);
    return this._delegate.fromFirestore(new TE(this._firestore, n), t ?? {});
  }
  toFirestore(e, t) {
    if (t) {
      return this._delegate.toFirestore(e, t);
    } else {
      return this._delegate.toFirestore(e);
    }
  }
  static getInstance(t, n) {
    const r = e.INSTANCES;
    let s = r.get(t);
    if (!s) {
      s = new WeakMap();
      r.set(t, s);
    }
    let i = s.get(n);
    if (!i) {
      i = new e(t, new gE(t), n);
      s.set(n, i);
    }
    return i;
  }
};
DE.INSTANCES = new WeakMap();
var wE = class e {
  constructor(e, t) {
    this.firestore = e;
    this._delegate = t;
    this._userDataWriter = new gE(e);
  }
  static forPath(t, n, r) {
    if (t.length % 2 != 0) {
      throw new jt("invalid-argument", `Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);
    }
    return new e(n, new LB(n._delegate, r, new nn(t)));
  }
  static forKey(t, n, r) {
    return new e(n, new LB(n._delegate, r, t));
  }
  get id() {
    return this._delegate.id;
  }
  get parent() {
    return new FE(this.firestore, this._delegate.parent);
  }
  get path() {
    return this._delegate.path;
  }
  collection(e) {
    try {
      return new FE(this.firestore, kB(this._delegate, e));
    } catch (Hu) {
      throw yE(Hu, "collection()", "DocumentReference.collection()");
    }
  }
  isEqual(e) {
    return (e = g(e)) instanceof LB && PB(this._delegate, e);
  }
  set(e, t) {
    t = cE("DocumentReference.set", t);
    try {
      if (t) {
        return nE(this._delegate, e, t);
      } else {
        return nE(this._delegate, e);
      }
    } catch (Hu) {
      throw yE(Hu, "setDoc()", "DocumentReference.set()");
    }
  }
  update(e, t, ...n) {
    try {
      if (arguments.length === 1) {
        return rE(this._delegate, e);
      } else {
        return rE(this._delegate, e, t, ...n);
      }
    } catch (Hu) {
      throw yE(Hu, "updateDoc()", "DocumentReference.update()");
    }
  }
  delete() {
    return function (e) {
      return aE(cn(e.firestore, Em), [new Us(e._key, As.none())]);
    }(this._delegate);
  }
  onSnapshot(...e) {
    const t = _E(e);
    const n = IE(e, e => new vE(this.firestore, new Am(this.firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, this._delegate.converter)));
    return sE(this._delegate, t, n);
  }
  get(e) {
    let t;
    t = e?.source === "cache" ? eE(this._delegate) : e?.source === "server" ? function (e) {
      e = cn(e, LB);
      const t = cn(e.firestore, Em);
      return im(Dm(t), e._key, {
        source: "server"
      }).then(n => oE(t, e, n));
    }(this._delegate) : function (e) {
      e = cn(e, LB);
      const t = cn(e.firestore, Em);
      return im(Dm(t), e._key).then(n => oE(t, e, n));
    }(this._delegate);
    return t.then(e => new vE(this.firestore, new Am(this.firestore._delegate, this._userDataWriter, e._key, e._document, e.metadata, this._delegate.converter)));
  }
  withConverter(t) {
    return new e(this.firestore, t ? this._delegate.withConverter(DE.getInstance(this.firestore, t)) : this._delegate.withConverter(null));
  }
};
function yE(e, t, n) {
  e.message = e.message.replace(t, n);
  return e;
}
function _E(e) {
  for (const t of e) {
    if (typeof t == "object" && !dE(t)) {
      return t;
    }
  }
  return {};
}
function IE(e, t) {
  let n;
  n = dE(e[0]) ? e[0] : dE(e[1]) ? e[1] : typeof e[0] == "function" ? {
    next: e[0],
    error: e[1],
    complete: e[2]
  } : {
    next: e[1],
    error: e[2],
    complete: e[3]
  };
  return {
    next: e => {
      if (n.next) {
        n.next(t(e));
      }
    },
    error: n.error?.bind(n),
    complete: n.complete?.bind(n)
  };
}
var vE = class {
  constructor(e, t) {
    this._firestore = e;
    this._delegate = t;
  }
  get ref() {
    return new wE(this._firestore, this._delegate.ref);
  }
  get id() {
    return this._delegate.id;
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get exists() {
    return this._delegate.exists();
  }
  data(e) {
    return this._delegate.data(e);
  }
  get(e, t) {
    return this._delegate.get(e, t);
  }
  isEqual(e) {
    return xm(this._delegate, e._delegate);
  }
};
var TE = class extends vE {
  data(e) {
    const t = this._delegate.data(e);
    if (!this._delegate._converter) {
      (function (e, t) {
        if (!e) {
          Tt(57014, t);
        }
      })(t !== undefined, "Document in a QueryDocumentSnapshot should exist");
    }
    return t;
  }
};
var bE = class e {
  constructor(e, t) {
    this.firestore = e;
    this._delegate = t;
    this._userDataWriter = new gE(e);
  }
  where(t, n, r) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (e, t, n) {
        const r = t;
        const s = cu("where", e);
        return Pm._create(s, r, n);
      }(t, n, r)));
    } catch (Hu) {
      throw yE(Hu, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }
  orderBy(t, n) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (e, t = "asc") {
        const n = t;
        const r = cu("orderBy", e);
        return Vm._create(r, n);
      }(t, n)));
    } catch (Hu) {
      throw yE(Hu, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }
  limit(t) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (e) {
        ln("limit", e);
        return Hm._create("limit", e, "F");
      }(t)));
    } catch (Hu) {
      throw yE(Hu, "limit()", "Query.limit()");
    }
  }
  limitToLast(t) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (e) {
        ln("limitToLast", e);
        return Hm._create("limitToLast", e, "L");
      }(t)));
    } catch (Hu) {
      throw yE(Hu, "limitToLast()", "Query.limitToLast()");
    }
  }
  startAt(...t) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (...e) {
        return Um._create("startAt", e, true);
      }(...t)));
    } catch (Hu) {
      throw yE(Hu, "startAt()", "Query.startAt()");
    }
  }
  startAfter(...t) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (...e) {
        return Um._create("startAfter", e, false);
      }(...t)));
    } catch (Hu) {
      throw yE(Hu, "startAfter()", "Query.startAfter()");
    }
  }
  endBefore(...t) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (...e) {
        return qm._create("endBefore", e, false);
      }(...t)));
    } catch (Hu) {
      throw yE(Hu, "endBefore()", "Query.endBefore()");
    }
  }
  endAt(...t) {
    try {
      return new e(this.firestore, Gm(this._delegate, function (...e) {
        return qm._create("endAt", e, true);
      }(...t)));
    } catch (Hu) {
      throw yE(Hu, "endAt()", "Query.endAt()");
    }
  }
  isEqual(e) {
    return MB(this._delegate, e._delegate);
  }
  get(e) {
    let t;
    t = e?.source === "cache" ? tE(this._delegate) : e?.source === "server" ? function (e) {
      e = cn(e, xB);
      const t = cn(e.firestore, Em);
      const n = Dm(t);
      const r = new bm(t);
      return am(n, e._query, {
        source: "server"
      }).then(n => new Om(t, r, e, n));
    }(this._delegate) : function (e) {
      e = cn(e, xB);
      const t = cn(e.firestore, Em);
      const n = Dm(t);
      const r = new bm(t);
      Lm(e._query);
      return am(n, e._query).then(n => new Om(t, r, e, n));
    }(this._delegate);
    return t.then(e => new AE(this.firestore, new Om(this.firestore._delegate, this._userDataWriter, this._delegate, e._snapshot)));
  }
  onSnapshot(...e) {
    const t = _E(e);
    const n = IE(e, e => new AE(this.firestore, new Om(this.firestore._delegate, this._userDataWriter, this._delegate, e._snapshot)));
    return sE(this._delegate, t, n);
  }
  withConverter(t) {
    return new e(this.firestore, t ? this._delegate.withConverter(DE.getInstance(this.firestore, t)) : this._delegate.withConverter(null));
  }
};
var NE = class {
  constructor(e, t) {
    this._firestore = e;
    this._delegate = t;
  }
  get type() {
    return this._delegate.type;
  }
  get doc() {
    return new TE(this._firestore, this._delegate.doc);
  }
  get oldIndex() {
    return this._delegate.oldIndex;
  }
  get newIndex() {
    return this._delegate.newIndex;
  }
};
var AE = class {
  constructor(e, t) {
    this._firestore = e;
    this._delegate = t;
  }
  get query() {
    return new bE(this._firestore, this._delegate.query);
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get size() {
    return this._delegate.size;
  }
  get empty() {
    return this._delegate.empty;
  }
  get docs() {
    return this._delegate.docs.map(e => new TE(this._firestore, e));
  }
  docChanges(e) {
    return this._delegate.docChanges(e).map(e => new NE(this._firestore, e));
  }
  forEach(e, t) {
    this._delegate.forEach(n => {
      e.call(t, new TE(this._firestore, n));
    });
  }
  isEqual(e) {
    return xm(this._delegate, e._delegate);
  }
};
var FE = class e extends bE {
  constructor(e, t) {
    super(e, t);
    this.firestore = e;
    this._delegate = t;
  }
  get id() {
    return this._delegate.id;
  }
  get path() {
    return this._delegate.path;
  }
  get parent() {
    const e = this._delegate.parent;
    if (e) {
      return new wE(this.firestore, e);
    } else {
      return null;
    }
  }
  doc(e) {
    try {
      return new wE(this.firestore, e === undefined ? GB(this._delegate) : GB(this._delegate, e));
    } catch (Hu) {
      throw yE(Hu, "doc()", "CollectionReference.doc()");
    }
  }
  add(e) {
    return function (e, t) {
      const n = cn(e.firestore, Em);
      const r = GB(e);
      const s = Cm(e.converter, t);
      return aE(n, [YB(zB(e.firestore), "addDoc", r._key, s, e.converter !== null, {}).toMutation(r._key, As.exists(false))]).then(() => r);
    }(this._delegate, e).then(e => new wE(this.firestore, e));
  }
  isEqual(e) {
    return PB(this._delegate, e._delegate);
  }
  withConverter(t) {
    return new e(this.firestore, t ? this._delegate.withConverter(DE.getInstance(this.firestore, t)) : this._delegate.withConverter(null));
  }
};
function OE(e) {
  return cn(e, LB);
}
var SE;
var xE = {
  Firestore: pE,
  GeoPoint: _o,
  Timestamp: pn,
  Blob: CE,
  Transaction: mE,
  WriteBatch: EE,
  DocumentReference: wE,
  DocumentSnapshot: vE,
  Query: bE,
  QueryDocumentSnapshot: TE,
  QuerySnapshot: AE,
  CollectionReference: FE,
  FieldPath: class e {
    constructor(...e) {
      this._delegate = new wo(...e);
    }
    static documentId() {
      return new e($t.keyField().canonicalString());
    }
    isEqual(e) {
      return (e = g(e)) instanceof wo && this._delegate._internalPath.isEqual(e._internalPath);
    }
  },
  FieldValue: class e {
    static serverTimestamp() {
      const t = new XB("serverTimestamp");
      t._methodName = "FieldValue.serverTimestamp";
      return new e(t);
    }
    static delete() {
      const t = new WB("deleteField");
      t._methodName = "FieldValue.delete";
      return new e(t);
    }
    static arrayUnion(...t) {
      const n = function (...e) {
        return new ZB("arrayUnion", e);
      }(...t);
      n._methodName = "FieldValue.arrayUnion";
      return new e(n);
    }
    static arrayRemove(...t) {
      const n = function (...e) {
        return new eu("arrayRemove", e);
      }(...t);
      n._methodName = "FieldValue.arrayRemove";
      return new e(n);
    }
    static increment(t) {
      const n = function (e) {
        return new tu("increment", e);
      }(t);
      n._methodName = "FieldValue.increment";
      return new e(n);
    }
    constructor(e) {
      this._delegate = e;
    }
    isEqual(e) {
      return this._delegate.isEqual(e._delegate);
    }
  },
  setLogLevel: function (e) {
    (function (e) {
      Dt.setLogLevel(e);
    })(e);
  },
  CACHE_SIZE_UNLIMITED: -1
};
(function (e, t) {
  e.INTERNAL.registerComponent(new u("firestore-compat", e => t(e.getProvider("app-compat").getImmediate(), e.getProvider("firestore").getImmediate()), "PUBLIC").setServiceProps({
    ...xE
  }));
})(SE = l, (e, t) => new pE(e, t, new fE()));
SE.registerVersion("@firebase/firestore-compat", "0.4.18");
