(function (e) {
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = e();
  } else if (typeof define == "function" && define.amd) {
    define([], e);
  } else {
    (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).gifFrames = e();
  }
})(function () {
  return function e(t, r, n) {
    function i(s, o) {
      if (!r[s]) {
        if (!t[s]) {
          var h = typeof require == "function" && require;
          if (!o && h) {
            return h(s, true);
          }
          if (a) {
            return a(s, true);
          }
          var u = new Error("Cannot find module '" + s + "'");
          u.code = "MODULE_NOT_FOUND";
          throw u;
        }
        var f = r[s] = {
          exports: {}
        };
        t[s][0].call(f.exports, function (e) {
          var r = t[s][1][e];
          return i(r || e);
        }, f, f.exports, e, t, r, n);
      }
      return r[s].exports;
    }
    var a = typeof require == "function" && require;
    for (var s = 0; s < n.length; s++) {
      i(n[s]);
    }
    return i;
  }({
    1: [function (e, t, r) {
      var n = e("multi-integer-range").MultiRange;
      var i = e("get-pixels-frame-info-update");
      var a = e("save-pixels-jpeg-js-upgrade");
      function s() {
        throw new Error("Promises not supported in your environment. Use the callback argument or a Promise polyfill.");
      }
      var o = {
        then: s,
        catch: s
      };
      t.exports = function (e, t) {
        var r;
        var s;
        var h;
        e = e || {};
        t = t || function () {};
        if (typeof Promise == "function") {
          r = new Promise(function (e, r) {
            s = function (r) {
              t(null, r);
              e(r);
            };
            h = function (e) {
              t(e);
              r(e);
            };
          });
        } else {
          r = o;
          s = function (e) {
            t(null, e);
          };
          h = t;
        }
        var u = e.url;
        if (!u) {
          h(new Error("\"url\" option is required."));
          return r;
        }
        var f = e.frames;
        if (!f && f !== 0) {
          h(new Error("\"frames\" option is required."));
          return r;
        }
        var l = e.outputType || "jpg";
        var c = e.quality;
        var d = e.cumulative;
        var p = f === "all" ? "all" : new n(f);
        var g = typeof window == "undefined" ? "image/gif" : ".GIF";
        i(u, g, function (e, t, r) {
          if (e) {
            h(e);
          } else if (t.shape.length < 4) {
            h(new Error("\"url\" input should be multi-frame GIF."));
          } else {
            var n = [];
            var i = 0;
            for (var o = 0; o < t.shape[0]; o++) {
              if (p === "all" || p.has(o)) {
                (function (e) {
                  n.push({
                    getImage: function () {
                      if (d && e > i) {
                        var r = t.pick(i);
                        for (var n = i + 1; n <= e; n++) {
                          for (var s = t.pick(n), o = 0; o < s.shape[0]; o++) {
                            for (var h = 0; h < s.shape[1]; h++) {
                              if (s.get(o, h, 3) === 0) {
                                s.set(o, h, 0, r.get(o, h, 0));
                                s.set(o, h, 1, r.get(o, h, 1));
                                s.set(o, h, 2, r.get(o, h, 2));
                                s.set(o, h, 3, r.get(o, h, 3));
                              }
                            }
                          }
                          r = s;
                        }
                        i = e;
                      }
                      return a(t.pick(e), l, {
                        quality: c
                      });
                    },
                    frameIndex: e,
                    frameInfo: r && r[e]
                  });
                })(o);
              }
            }
            s(n);
          }
        });
        return r;
      };
    }, {
      "get-pixels-frame-info-update": 15,
      "multi-integer-range": 33,
      "save-pixels-jpeg-js-upgrade": 81
    }],
    2: [function (e, t, r) {
      (function (r) {
        "use strict";

        function n(e, t) {
          if (e === t) {
            return 0;
          }
          var r = e.length;
          var n = t.length;
          for (var i = 0, a = Math.min(r, n); i < a; ++i) {
            if (e[i] !== t[i]) {
              r = e[i];
              n = t[i];
              break;
            }
          }
          if (r < n) {
            return -1;
          } else if (n < r) {
            return 1;
          } else {
            return 0;
          }
        }
        function i(e) {
          if (r.Buffer && typeof r.Buffer.isBuffer == "function") {
            return r.Buffer.isBuffer(e);
          } else {
            return e != null && !!e._isBuffer;
          }
        }
        var a = e("util/");
        var s = Object.prototype.hasOwnProperty;
        var o = Array.prototype.slice;
        var h = function () {}.name === "foo";
        function u(e) {
          return Object.prototype.toString.call(e);
        }
        function f(e) {
          return !i(e) && typeof r.ArrayBuffer == "function" && (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!e.buffer && !!(e.buffer instanceof ArrayBuffer)));
        }
        var l = t.exports = b;
        var c = /\s*function\s+([^\(\s]*)\s*/;
        function d(e) {
          if (a.isFunction(e)) {
            if (h) {
              return e.name;
            }
            var t = e.toString().match(c);
            return t && t[1];
          }
        }
        function p(e, t) {
          if (typeof e == "string") {
            if (e.length < t) {
              return e;
            } else {
              return e.slice(0, t);
            }
          } else {
            return e;
          }
        }
        function g(e) {
          if (h || !a.isFunction(e)) {
            return a.inspect(e);
          }
          var t = d(e);
          return "[Function" + (t ? ": " + t : "") + "]";
        }
        function _(e, t, r, n, i) {
          throw new l.AssertionError({
            message: r,
            actual: e,
            expected: t,
            operator: n,
            stackStartFunction: i
          });
        }
        function b(e, t) {
          if (!e) {
            _(e, true, t, "==", l.ok);
          }
        }
        function v(e, t, r, s) {
          if (e === t) {
            return true;
          }
          if (i(e) && i(t)) {
            return n(e, t) === 0;
          }
          if (a.isDate(e) && a.isDate(t)) {
            return e.getTime() === t.getTime();
          }
          if (a.isRegExp(e) && a.isRegExp(t)) {
            return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
          }
          if (e !== null && typeof e == "object" || t !== null && typeof t == "object") {
            if (f(e) && f(t) && u(e) === u(t) && !(e instanceof Float32Array) && !(e instanceof Float64Array)) {
              return n(new Uint8Array(e.buffer), new Uint8Array(t.buffer)) === 0;
            }
            if (i(e) !== i(t)) {
              return false;
            }
            var h = (s = s || {
              actual: [],
              expected: []
            }).actual.indexOf(e);
            return h !== -1 && h === s.expected.indexOf(t) || (s.actual.push(e), s.expected.push(t), function (e, t, r, n) {
              if (e == null || t == null) {
                return false;
              }
              if (a.isPrimitive(e) || a.isPrimitive(t)) {
                return e === t;
              }
              if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) {
                return false;
              }
              var i = y(e);
              var s = y(t);
              if (i && !s || !i && s) {
                return false;
              }
              if (i) {
                return v(e = o.call(e), t = o.call(t), r);
              }
              var h;
              var u;
              var f = k(e);
              var l = k(t);
              if (f.length !== l.length) {
                return false;
              }
              f.sort();
              l.sort();
              u = f.length - 1;
              for (; u >= 0; u--) {
                if (f[u] !== l[u]) {
                  return false;
                }
              }
              for (u = f.length - 1; u >= 0; u--) {
                if (!v(e[h = f[u]], t[h], r, n)) {
                  return false;
                }
              }
              return true;
            }(e, t, r, s));
          }
          if (r) {
            return e === t;
          } else {
            return e == t;
          }
        }
        function y(e) {
          return Object.prototype.toString.call(e) == "[object Arguments]";
        }
        function m(e, t) {
          if (!e || !t) {
            return false;
          }
          if (Object.prototype.toString.call(t) == "[object RegExp]") {
            return t.test(e);
          }
          try {
            if (e instanceof t) {
              return true;
            }
          } catch (e) {}
          return !Error.isPrototypeOf(t) && t.call({}, e) === true;
        }
        function w(e, t, r, n) {
          var i;
          if (typeof t != "function") {
            throw new TypeError("\"block\" argument must be a function");
          }
          if (typeof r == "string") {
            n = r;
            r = null;
          }
          i = function (e) {
            var t;
            try {
              e();
            } catch (e) {
              t = e;
            }
            return t;
          }(t);
          n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : ".");
          if (e && !i) {
            _(i, r, "Missing expected exception" + n);
          }
          var s = typeof n == "string";
          var o = !e && i && !r;
          if (!e && a.isError(i) && s && m(i, r) || o) {
            _(i, r, "Got unwanted exception" + n);
          }
          if (e && i && r && !m(i, r) || !e && i) {
            throw i;
          }
        }
        l.AssertionError = function (e) {
          this.name = "AssertionError";
          this.actual = e.actual;
          this.expected = e.expected;
          this.operator = e.operator;
          if (e.message) {
            this.message = e.message;
            this.generatedMessage = false;
          } else {
            this.message = function (e) {
              return p(g(e.actual), 128) + " " + e.operator + " " + p(g(e.expected), 128);
            }(this);
            this.generatedMessage = true;
          }
          var t = e.stackStartFunction || _;
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, t);
          } else {
            var r = new Error();
            if (r.stack) {
              var n = r.stack;
              var i = d(t);
              var a = n.indexOf("\n" + i);
              if (a >= 0) {
                var s = n.indexOf("\n", a + 1);
                n = n.substring(s + 1);
              }
              this.stack = n;
            }
          }
        };
        a.inherits(l.AssertionError, Error);
        l.fail = _;
        l.ok = b;
        l.equal = function (e, t, r) {
          if (e != t) {
            _(e, t, r, "==", l.equal);
          }
        };
        l.notEqual = function (e, t, r) {
          if (e == t) {
            _(e, t, r, "!=", l.notEqual);
          }
        };
        l.deepEqual = function (e, t, r) {
          if (!v(e, t, false)) {
            _(e, t, r, "deepEqual", l.deepEqual);
          }
        };
        l.deepStrictEqual = function (e, t, r) {
          if (!v(e, t, true)) {
            _(e, t, r, "deepStrictEqual", l.deepStrictEqual);
          }
        };
        l.notDeepEqual = function (e, t, r) {
          if (v(e, t, false)) {
            _(e, t, r, "notDeepEqual", l.notDeepEqual);
          }
        };
        l.notDeepStrictEqual = function e(t, r, n) {
          if (v(t, r, true)) {
            _(t, r, n, "notDeepStrictEqual", e);
          }
        };
        l.strictEqual = function (e, t, r) {
          if (e !== t) {
            _(e, t, r, "===", l.strictEqual);
          }
        };
        l.notStrictEqual = function (e, t, r) {
          if (e === t) {
            _(e, t, r, "!==", l.notStrictEqual);
          }
        };
        l.throws = function (e, t, r) {
          w(true, e, t, r);
        };
        l.doesNotThrow = function (e, t, r) {
          w(false, e, t, r);
        };
        l.ifError = function (e) {
          if (e) {
            throw e;
          }
        };
        var k = Object.keys || function (e) {
          var t = [];
          for (var r in e) {
            if (s.call(e, r)) {
              t.push(r);
            }
          }
          return t;
        };
      }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
    }, {
      "util/": 104
    }],
    3: [function (e, t, r) {
      "use strict";

      r.byteLength = function (e) {
        return e.length * 3 / 4 - h(e);
      };
      r.toByteArray = function (e) {
        var t;
        var r;
        var n;
        var s;
        var o;
        var u = e.length;
        s = h(e);
        o = new a(u * 3 / 4 - s);
        r = s > 0 ? u - 4 : u;
        var f = 0;
        for (t = 0; t < r; t += 4) {
          n = i[e.charCodeAt(t)] << 18 | i[e.charCodeAt(t + 1)] << 12 | i[e.charCodeAt(t + 2)] << 6 | i[e.charCodeAt(t + 3)];
          o[f++] = n >> 16 & 255;
          o[f++] = n >> 8 & 255;
          o[f++] = n & 255;
        }
        if (s === 2) {
          n = i[e.charCodeAt(t)] << 2 | i[e.charCodeAt(t + 1)] >> 4;
          o[f++] = n & 255;
        } else if (s === 1) {
          n = i[e.charCodeAt(t)] << 10 | i[e.charCodeAt(t + 1)] << 4 | i[e.charCodeAt(t + 2)] >> 2;
          o[f++] = n >> 8 & 255;
          o[f++] = n & 255;
        }
        return o;
      };
      r.fromByteArray = function (e) {
        var t;
        var r = e.length;
        var i = r % 3;
        var a = "";
        var s = [];
        for (var o = 16383, h = 0, u = r - i; h < u; h += o) {
          s.push(f(e, h, h + o > u ? u : h + o));
        }
        if (i === 1) {
          t = e[r - 1];
          a += n[t >> 2];
          a += n[t << 4 & 63];
          a += "==";
        } else if (i === 2) {
          t = (e[r - 2] << 8) + e[r - 1];
          a += n[t >> 10];
          a += n[t >> 4 & 63];
          a += n[t << 2 & 63];
          a += "=";
        }
        s.push(a);
        return s.join("");
      };
      var n = [];
      var i = [];
      var a = typeof Uint8Array != "undefined" ? Uint8Array : Array;
      var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (var o = 0; o < 64; ++o) {
        n[o] = s[o];
        i[s.charCodeAt(o)] = o;
      }
      function h(e) {
        var t = e.length;
        if (t % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        if (e[t - 2] === "=") {
          return 2;
        } else if (e[t - 1] === "=") {
          return 1;
        } else {
          return 0;
        }
      }
      function u(e) {
        return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[e & 63];
      }
      function f(e, t, r) {
        var n;
        var i = [];
        for (var a = t; a < r; a += 3) {
          n = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2];
          i.push(u(n));
        }
        return i.join("");
      }
      i["-".charCodeAt(0)] = 62;
      i["_".charCodeAt(0)] = 63;
    }, {}],
    4: [function (e, t, r) {}, {}],
    5: [function (e, t, r) {
      (function (t, n) {
        "use strict";

        var i = e("assert");
        var a = e("pako/lib/zlib/zstream");
        var s = e("pako/lib/zlib/deflate.js");
        var o = e("pako/lib/zlib/inflate.js");
        var h = e("pako/lib/zlib/constants");
        for (var u in h) {
          r[u] = h[u];
        }
        r.NONE = 0;
        r.DEFLATE = 1;
        r.INFLATE = 2;
        r.GZIP = 3;
        r.GUNZIP = 4;
        r.DEFLATERAW = 5;
        r.INFLATERAW = 6;
        r.UNZIP = 7;
        function f(e) {
          if (typeof e != "number" || e < r.DEFLATE || e > r.UNZIP) {
            throw new TypeError("Bad argument");
          }
          this.dictionary = null;
          this.err = 0;
          this.flush = 0;
          this.init_done = false;
          this.level = 0;
          this.memLevel = 0;
          this.mode = e;
          this.strategy = 0;
          this.windowBits = 0;
          this.write_in_progress = false;
          this.pending_close = false;
          this.gzip_id_bytes_read = 0;
        }
        f.prototype.close = function () {
          if (this.write_in_progress) {
            this.pending_close = true;
          } else {
            this.pending_close = false;
            i(this.init_done, "close before init");
            i(this.mode <= r.UNZIP);
            if (this.mode === r.DEFLATE || this.mode === r.GZIP || this.mode === r.DEFLATERAW) {
              s.deflateEnd(this.strm);
            } else if (this.mode === r.INFLATE || this.mode === r.GUNZIP || this.mode === r.INFLATERAW || this.mode === r.UNZIP) {
              o.inflateEnd(this.strm);
            }
            this.mode = r.NONE;
            this.dictionary = null;
          }
        };
        f.prototype.write = function (e, t, r, n, i, a, s) {
          return this._write(true, e, t, r, n, i, a, s);
        };
        f.prototype.writeSync = function (e, t, r, n, i, a, s) {
          return this._write(false, e, t, r, n, i, a, s);
        };
        f.prototype._write = function (e, a, s, o, h, u, f, l) {
          i.equal(arguments.length, 8);
          i(this.init_done, "write before init");
          i(this.mode !== r.NONE, "already finalized");
          i.equal(false, this.write_in_progress, "write already in progress");
          i.equal(false, this.pending_close, "close is pending");
          this.write_in_progress = true;
          i.equal(false, a === undefined, "must provide flush value");
          this.write_in_progress = true;
          if (a !== r.Z_NO_FLUSH && a !== r.Z_PARTIAL_FLUSH && a !== r.Z_SYNC_FLUSH && a !== r.Z_FULL_FLUSH && a !== r.Z_FINISH && a !== r.Z_BLOCK) {
            throw new Error("Invalid flush value");
          }
          if (s == null) {
            s = n.alloc(0);
            h = 0;
            o = 0;
          }
          this.strm.avail_in = h;
          this.strm.input = s;
          this.strm.next_in = o;
          this.strm.avail_out = l;
          this.strm.output = u;
          this.strm.next_out = f;
          this.flush = a;
          if (!e) {
            this._process();
            if (this._checkError()) {
              return this._afterSync();
            } else {
              return undefined;
            }
          }
          var c = this;
          t.nextTick(function () {
            c._process();
            c._after();
          });
          return this;
        };
        f.prototype._afterSync = function () {
          var e = this.strm.avail_out;
          var t = this.strm.avail_in;
          this.write_in_progress = false;
          return [t, e];
        };
        f.prototype._process = function () {
          var e = null;
          switch (this.mode) {
            case r.DEFLATE:
            case r.GZIP:
            case r.DEFLATERAW:
              this.err = s.deflate(this.strm, this.flush);
              break;
            case r.UNZIP:
              if (this.strm.avail_in > 0) {
                e = this.strm.next_in;
              }
              switch (this.gzip_id_bytes_read) {
                case 0:
                  if (e === null) {
                    break;
                  }
                  if (this.strm.input[e] !== 31) {
                    this.mode = r.INFLATE;
                    break;
                  }
                  this.gzip_id_bytes_read = 1;
                  e++;
                  if (this.strm.avail_in === 1) {
                    break;
                  }
                case 1:
                  if (e === null) {
                    break;
                  }
                  if (this.strm.input[e] === 139) {
                    this.gzip_id_bytes_read = 2;
                    this.mode = r.GUNZIP;
                  } else {
                    this.mode = r.INFLATE;
                  }
                  break;
                default:
                  throw new Error("invalid number of gzip magic number bytes read");
              }
            case r.INFLATE:
            case r.GUNZIP:
            case r.INFLATERAW:
              this.err = o.inflate(this.strm, this.flush);
              if (this.err === r.Z_NEED_DICT && this.dictionary) {
                this.err = o.inflateSetDictionary(this.strm, this.dictionary);
                if (this.err === r.Z_OK) {
                  this.err = o.inflate(this.strm, this.flush);
                } else if (this.err === r.Z_DATA_ERROR) {
                  this.err = r.Z_NEED_DICT;
                }
              }
              while (this.strm.avail_in > 0 && this.mode === r.GUNZIP && this.err === r.Z_STREAM_END && this.strm.next_in[0] !== 0) {
                this.reset();
                this.err = o.inflate(this.strm, this.flush);
              }
              break;
            default:
              throw new Error("Unknown mode " + this.mode);
          }
        };
        f.prototype._checkError = function () {
          switch (this.err) {
            case r.Z_OK:
            case r.Z_BUF_ERROR:
              if (this.strm.avail_out !== 0 && this.flush === r.Z_FINISH) {
                this._error("unexpected end of file");
                return false;
              }
              break;
            case r.Z_STREAM_END:
              break;
            case r.Z_NEED_DICT:
              if (this.dictionary == null) {
                this._error("Missing dictionary");
              } else {
                this._error("Bad dictionary");
              }
              return false;
            default:
              this._error("Zlib error");
              return false;
          }
          return true;
        };
        f.prototype._after = function () {
          if (this._checkError()) {
            var e = this.strm.avail_out;
            var t = this.strm.avail_in;
            this.write_in_progress = false;
            this.callback(t, e);
            if (this.pending_close) {
              this.close();
            }
          }
        };
        f.prototype._error = function (e) {
          if (this.strm.msg) {
            e = this.strm.msg;
          }
          this.onerror(e, this.err);
          this.write_in_progress = false;
          if (this.pending_close) {
            this.close();
          }
        };
        f.prototype.init = function (e, t, n, a, s) {
          i(arguments.length === 4 || arguments.length === 5, "init(windowBits, level, memLevel, strategy, [dictionary])");
          i(e >= 8 && e <= 15, "invalid windowBits");
          i(t >= -1 && t <= 9, "invalid compression level");
          i(n >= 1 && n <= 9, "invalid memlevel");
          i(a === r.Z_FILTERED || a === r.Z_HUFFMAN_ONLY || a === r.Z_RLE || a === r.Z_FIXED || a === r.Z_DEFAULT_STRATEGY, "invalid strategy");
          this._init(t, e, n, a, s);
          this._setDictionary();
        };
        f.prototype.params = function () {
          throw new Error("deflateParams Not supported");
        };
        f.prototype.reset = function () {
          this._reset();
          this._setDictionary();
        };
        f.prototype._init = function (e, t, n, i, h) {
          this.level = e;
          this.windowBits = t;
          this.memLevel = n;
          this.strategy = i;
          this.flush = r.Z_NO_FLUSH;
          this.err = r.Z_OK;
          if (this.mode === r.GZIP || this.mode === r.GUNZIP) {
            this.windowBits += 16;
          }
          if (this.mode === r.UNZIP) {
            this.windowBits += 32;
          }
          if (this.mode === r.DEFLATERAW || this.mode === r.INFLATERAW) {
            this.windowBits = this.windowBits * -1;
          }
          this.strm = new a();
          switch (this.mode) {
            case r.DEFLATE:
            case r.GZIP:
            case r.DEFLATERAW:
              this.err = s.deflateInit2(this.strm, this.level, r.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
              break;
            case r.INFLATE:
            case r.GUNZIP:
            case r.INFLATERAW:
            case r.UNZIP:
              this.err = o.inflateInit2(this.strm, this.windowBits);
              break;
            default:
              throw new Error("Unknown mode " + this.mode);
          }
          if (this.err !== r.Z_OK) {
            this._error("Init error");
          }
          this.dictionary = h;
          this.write_in_progress = false;
          this.init_done = true;
        };
        f.prototype._setDictionary = function () {
          if (this.dictionary != null) {
            this.err = r.Z_OK;
            switch (this.mode) {
              case r.DEFLATE:
              case r.DEFLATERAW:
                this.err = s.deflateSetDictionary(this.strm, this.dictionary);
            }
            if (this.err !== r.Z_OK) {
              this._error("Failed to set dictionary");
            }
          }
        };
        f.prototype._reset = function () {
          this.err = r.Z_OK;
          switch (this.mode) {
            case r.DEFLATE:
            case r.DEFLATERAW:
            case r.GZIP:
              this.err = s.deflateReset(this.strm);
              break;
            case r.INFLATE:
            case r.INFLATERAW:
            case r.GUNZIP:
              this.err = o.inflateReset(this.strm);
          }
          if (this.err !== r.Z_OK) {
            this._error("Failed to reset stream");
          }
        };
        r.Zlib = f;
      }).call(this, e("_process"), e("buffer").Buffer);
    }, {
      _process: 73,
      assert: 2,
      buffer: 7,
      "pako/lib/zlib/constants": 41,
      "pako/lib/zlib/deflate.js": 43,
      "pako/lib/zlib/inflate.js": 45,
      "pako/lib/zlib/zstream": 49
    }],
    6: [function (e, t, r) {
      (function (t) {
        "use strict";

        var n = e("buffer").Buffer;
        var i = e("stream").Transform;
        var a = e("./binding");
        var s = e("util");
        var o = e("assert").ok;
        var h = e("buffer").kMaxLength;
        var u = "Cannot create final Buffer. It would be larger than 0x" + h.toString(16) + " bytes";
        a.Z_MIN_WINDOWBITS = 8;
        a.Z_MAX_WINDOWBITS = 15;
        a.Z_DEFAULT_WINDOWBITS = 15;
        a.Z_MIN_CHUNK = 64;
        a.Z_MAX_CHUNK = Infinity;
        a.Z_DEFAULT_CHUNK = 16384;
        a.Z_MIN_MEMLEVEL = 1;
        a.Z_MAX_MEMLEVEL = 9;
        a.Z_DEFAULT_MEMLEVEL = 8;
        a.Z_MIN_LEVEL = -1;
        a.Z_MAX_LEVEL = 9;
        a.Z_DEFAULT_LEVEL = a.Z_DEFAULT_COMPRESSION;
        for (var f = Object.keys(a), l = 0; l < f.length; l++) {
          var c = f[l];
          if (c.match(/^Z/)) {
            Object.defineProperty(r, c, {
              enumerable: true,
              value: a[c],
              writable: false
            });
          }
        }
        var d = {
          Z_OK: a.Z_OK,
          Z_STREAM_END: a.Z_STREAM_END,
          Z_NEED_DICT: a.Z_NEED_DICT,
          Z_ERRNO: a.Z_ERRNO,
          Z_STREAM_ERROR: a.Z_STREAM_ERROR,
          Z_DATA_ERROR: a.Z_DATA_ERROR,
          Z_MEM_ERROR: a.Z_MEM_ERROR,
          Z_BUF_ERROR: a.Z_BUF_ERROR,
          Z_VERSION_ERROR: a.Z_VERSION_ERROR
        };
        for (var p = Object.keys(d), g = 0; g < p.length; g++) {
          var _ = p[g];
          d[d[_]] = _;
        }
        function b(e, t, r) {
          var i = [];
          var a = 0;
          function s() {
            for (var t; (t = e.read()) !== null;) {
              i.push(t);
              a += t.length;
            }
            e.once("readable", s);
          }
          function o() {
            var t;
            var s = null;
            if (a >= h) {
              s = new RangeError(u);
            } else {
              t = n.concat(i, a);
            }
            i = [];
            e.close();
            r(s, t);
          }
          e.on("error", function (t) {
            e.removeListener("end", o);
            e.removeListener("readable", s);
            r(t);
          });
          e.on("end", o);
          e.end(t);
          s();
        }
        function v(e, t) {
          if (typeof t == "string") {
            t = n.from(t);
          }
          if (!n.isBuffer(t)) {
            throw new TypeError("Not a string or buffer");
          }
          var r = e._finishFlushFlag;
          return e._processChunk(t, r);
        }
        function y(e) {
          if (!(this instanceof y)) {
            return new y(e);
          }
          T.call(this, e, a.DEFLATE);
        }
        function m(e) {
          if (!(this instanceof m)) {
            return new m(e);
          }
          T.call(this, e, a.INFLATE);
        }
        function w(e) {
          if (!(this instanceof w)) {
            return new w(e);
          }
          T.call(this, e, a.GZIP);
        }
        function k(e) {
          if (!(this instanceof k)) {
            return new k(e);
          }
          T.call(this, e, a.GUNZIP);
        }
        function E(e) {
          if (!(this instanceof E)) {
            return new E(e);
          }
          T.call(this, e, a.DEFLATERAW);
        }
        function x(e) {
          if (!(this instanceof x)) {
            return new x(e);
          }
          T.call(this, e, a.INFLATERAW);
        }
        function S(e) {
          if (!(this instanceof S)) {
            return new S(e);
          }
          T.call(this, e, a.UNZIP);
        }
        function A(e) {
          return e === a.Z_NO_FLUSH || e === a.Z_PARTIAL_FLUSH || e === a.Z_SYNC_FLUSH || e === a.Z_FULL_FLUSH || e === a.Z_FINISH || e === a.Z_BLOCK;
        }
        function T(e, t) {
          var s = this;
          this._opts = e = e || {};
          this._chunkSize = e.chunkSize || r.Z_DEFAULT_CHUNK;
          i.call(this, e);
          if (e.flush && !A(e.flush)) {
            throw new Error("Invalid flush flag: " + e.flush);
          }
          if (e.finishFlush && !A(e.finishFlush)) {
            throw new Error("Invalid flush flag: " + e.finishFlush);
          }
          this._flushFlag = e.flush || a.Z_NO_FLUSH;
          this._finishFlushFlag = e.finishFlush !== undefined ? e.finishFlush : a.Z_FINISH;
          if (e.chunkSize && (e.chunkSize < r.Z_MIN_CHUNK || e.chunkSize > r.Z_MAX_CHUNK)) {
            throw new Error("Invalid chunk size: " + e.chunkSize);
          }
          if (e.windowBits && (e.windowBits < r.Z_MIN_WINDOWBITS || e.windowBits > r.Z_MAX_WINDOWBITS)) {
            throw new Error("Invalid windowBits: " + e.windowBits);
          }
          if (e.level && (e.level < r.Z_MIN_LEVEL || e.level > r.Z_MAX_LEVEL)) {
            throw new Error("Invalid compression level: " + e.level);
          }
          if (e.memLevel && (e.memLevel < r.Z_MIN_MEMLEVEL || e.memLevel > r.Z_MAX_MEMLEVEL)) {
            throw new Error("Invalid memLevel: " + e.memLevel);
          }
          if (e.strategy && e.strategy != r.Z_FILTERED && e.strategy != r.Z_HUFFMAN_ONLY && e.strategy != r.Z_RLE && e.strategy != r.Z_FIXED && e.strategy != r.Z_DEFAULT_STRATEGY) {
            throw new Error("Invalid strategy: " + e.strategy);
          }
          if (e.dictionary && !n.isBuffer(e.dictionary)) {
            throw new Error("Invalid dictionary: it should be a Buffer instance");
          }
          this._handle = new a.Zlib(t);
          var o = this;
          this._hadError = false;
          this._handle.onerror = function (e, t) {
            I(o);
            o._hadError = true;
            var n = new Error(e);
            n.errno = t;
            n.code = r.codes[t];
            o.emit("error", n);
          };
          var h = r.Z_DEFAULT_COMPRESSION;
          if (typeof e.level == "number") {
            h = e.level;
          }
          var u = r.Z_DEFAULT_STRATEGY;
          if (typeof e.strategy == "number") {
            u = e.strategy;
          }
          this._handle.init(e.windowBits || r.Z_DEFAULT_WINDOWBITS, h, e.memLevel || r.Z_DEFAULT_MEMLEVEL, u, e.dictionary);
          this._buffer = n.allocUnsafe(this._chunkSize);
          this._offset = 0;
          this._level = h;
          this._strategy = u;
          this.once("end", this.close);
          Object.defineProperty(this, "_closed", {
            get: function () {
              return !s._handle;
            },
            configurable: true,
            enumerable: true
          });
        }
        function I(e, r) {
          if (r) {
            t.nextTick(r);
          }
          if (e._handle) {
            e._handle.close();
            e._handle = null;
          }
        }
        function L(e) {
          e.emit("close");
        }
        Object.defineProperty(r, "codes", {
          enumerable: true,
          value: Object.freeze(d),
          writable: false
        });
        r.Deflate = y;
        r.Inflate = m;
        r.Gzip = w;
        r.Gunzip = k;
        r.DeflateRaw = E;
        r.InflateRaw = x;
        r.Unzip = S;
        r.createDeflate = function (e) {
          return new y(e);
        };
        r.createInflate = function (e) {
          return new m(e);
        };
        r.createDeflateRaw = function (e) {
          return new E(e);
        };
        r.createInflateRaw = function (e) {
          return new x(e);
        };
        r.createGzip = function (e) {
          return new w(e);
        };
        r.createGunzip = function (e) {
          return new k(e);
        };
        r.createUnzip = function (e) {
          return new S(e);
        };
        r.deflate = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new y(t), e, r);
        };
        r.deflateSync = function (e, t) {
          return v(new y(t), e);
        };
        r.gzip = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new w(t), e, r);
        };
        r.gzipSync = function (e, t) {
          return v(new w(t), e);
        };
        r.deflateRaw = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new E(t), e, r);
        };
        r.deflateRawSync = function (e, t) {
          return v(new E(t), e);
        };
        r.unzip = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new S(t), e, r);
        };
        r.unzipSync = function (e, t) {
          return v(new S(t), e);
        };
        r.inflate = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new m(t), e, r);
        };
        r.inflateSync = function (e, t) {
          return v(new m(t), e);
        };
        r.gunzip = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new k(t), e, r);
        };
        r.gunzipSync = function (e, t) {
          return v(new k(t), e);
        };
        r.inflateRaw = function (e, t, r) {
          if (typeof t == "function") {
            r = t;
            t = {};
          }
          return b(new x(t), e, r);
        };
        r.inflateRawSync = function (e, t) {
          return v(new x(t), e);
        };
        s.inherits(T, i);
        T.prototype.params = function (e, n, i) {
          if (e < r.Z_MIN_LEVEL || e > r.Z_MAX_LEVEL) {
            throw new RangeError("Invalid compression level: " + e);
          }
          if (n != r.Z_FILTERED && n != r.Z_HUFFMAN_ONLY && n != r.Z_RLE && n != r.Z_FIXED && n != r.Z_DEFAULT_STRATEGY) {
            throw new TypeError("Invalid strategy: " + n);
          }
          if (this._level !== e || this._strategy !== n) {
            var s = this;
            this.flush(a.Z_SYNC_FLUSH, function () {
              o(s._handle, "zlib binding closed");
              s._handle.params(e, n);
              if (!s._hadError) {
                s._level = e;
                s._strategy = n;
                if (i) {
                  i();
                }
              }
            });
          } else {
            t.nextTick(i);
          }
        };
        T.prototype.reset = function () {
          o(this._handle, "zlib binding closed");
          return this._handle.reset();
        };
        T.prototype._flush = function (e) {
          this._transform(n.alloc(0), "", e);
        };
        T.prototype.flush = function (e, r) {
          var i = this;
          var s = this._writableState;
          if (typeof e == "function" || e === undefined && !r) {
            r = e;
            e = a.Z_FULL_FLUSH;
          }
          if (s.ended) {
            if (r) {
              t.nextTick(r);
            }
          } else if (s.ending) {
            if (r) {
              this.once("end", r);
            }
          } else if (s.needDrain) {
            if (r) {
              this.once("drain", function () {
                return i.flush(e, r);
              });
            }
          } else {
            this._flushFlag = e;
            this.write(n.alloc(0), "", r);
          }
        };
        T.prototype.close = function (e) {
          I(this, e);
          t.nextTick(L, this);
        };
        T.prototype._transform = function (e, t, r) {
          var i;
          var s = this._writableState;
          var o = (s.ending || s.ended) && (!e || s.length === e.length);
          if (e === null || n.isBuffer(e)) {
            if (this._handle) {
              if (o) {
                i = this._finishFlushFlag;
              } else {
                i = this._flushFlag;
                if (e.length >= s.length) {
                  this._flushFlag = this._opts.flush || a.Z_NO_FLUSH;
                }
              }
              this._processChunk(e, i, r);
              return;
            } else {
              return r(new Error("zlib binding closed"));
            }
          } else {
            return r(new Error("invalid input"));
          }
        };
        T.prototype._processChunk = function (e, t, r) {
          var i = e && e.length;
          var a = this._chunkSize - this._offset;
          var s = 0;
          var f = this;
          var l = typeof r == "function";
          if (!l) {
            var c;
            var d = [];
            var p = 0;
            this.on("error", function (e) {
              c = e;
            });
            o(this._handle, "zlib binding closed");
            do {
              var g = this._handle.writeSync(t, e, s, i, this._buffer, this._offset, a);
            } while (!this._hadError && v(g[0], g[1]));
            if (this._hadError) {
              throw c;
            }
            if (p >= h) {
              I(this);
              throw new RangeError(u);
            }
            var _ = n.concat(d, p);
            I(this);
            return _;
          }
          o(this._handle, "zlib binding closed");
          var b = this._handle.write(t, e, s, i, this._buffer, this._offset, a);
          function v(h, u) {
            if (this) {
              this.buffer = null;
              this.callback = null;
            }
            if (!f._hadError) {
              var c = a - u;
              o(c >= 0, "have should not go down");
              if (c > 0) {
                var g = f._buffer.slice(f._offset, f._offset + c);
                f._offset += c;
                if (l) {
                  f.push(g);
                } else {
                  d.push(g);
                  p += g.length;
                }
              }
              if (u === 0 || f._offset >= f._chunkSize) {
                a = f._chunkSize;
                f._offset = 0;
                f._buffer = n.allocUnsafe(f._chunkSize);
              }
              if (u === 0) {
                s += i - h;
                i = h;
                if (!l) {
                  return true;
                }
                var _ = f._handle.write(t, e, s, i, f._buffer, f._offset, f._chunkSize);
                _.callback = v;
                _.buffer = e;
                return;
              }
              if (!l) {
                return false;
              }
              r();
            }
          }
          b.buffer = e;
          b.callback = v;
        };
        s.inherits(y, T);
        s.inherits(m, T);
        s.inherits(w, T);
        s.inherits(k, T);
        s.inherits(E, T);
        s.inherits(x, T);
        s.inherits(S, T);
      }).call(this, e("_process"));
    }, {
      "./binding": 5,
      _process: 73,
      assert: 2,
      buffer: 7,
      stream: 82,
      util: 104
    }],
    7: [function (e, t, r) {
      "use strict";

      var n = e("base64-js");
      var i = e("ieee754");
      r.Buffer = o;
      r.SlowBuffer = function (e) {
        if (+e != e) {
          e = 0;
        }
        return o.alloc(+e);
      };
      r.INSPECT_MAX_BYTES = 50;
      var a = 2147483647;
      function s(e) {
        if (e > a) {
          throw new RangeError("Invalid typed array length");
        }
        var t = new Uint8Array(e);
        t.__proto__ = o.prototype;
        return t;
      }
      function o(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string") {
            throw new Error("If encoding is specified then the first argument must be a string");
          }
          return f(e);
        }
        return h(e, t, r);
      }
      function h(e, t, r) {
        if (typeof e == "number") {
          throw new TypeError("\"value\" argument must not be a number");
        }
        if (e instanceof ArrayBuffer) {
          return function (e, t, r) {
            if (t < 0 || e.byteLength < t) {
              throw new RangeError("'offset' is out of bounds");
            }
            if (e.byteLength < t + (r || 0)) {
              throw new RangeError("'length' is out of bounds");
            }
            var n;
            n = t === undefined && r === undefined ? new Uint8Array(e) : r === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
            n.__proto__ = o.prototype;
            return n;
          }(e, t, r);
        } else if (typeof e == "string") {
          return function (e, t) {
            if (typeof t != "string" || t === "") {
              t = "utf8";
            }
            if (!o.isEncoding(t)) {
              throw new TypeError("\"encoding\" must be a valid string encoding");
            }
            var r = d(e, t) | 0;
            var n = s(r);
            var i = n.write(e, t);
            if (i !== r) {
              n = n.slice(0, i);
            }
            return n;
          }(e, t);
        } else {
          return function (e) {
            if (o.isBuffer(e)) {
              var t = c(e.length) | 0;
              var r = s(t);
              if (r.length !== 0) {
                e.copy(r, 0, 0, t);
              }
              return r;
            }
            if (e) {
              if (F(e) || "length" in e) {
                if (typeof e.length != "number" || Z(e.length)) {
                  return s(0);
                } else {
                  return l(e);
                }
              }
              if (e.type === "Buffer" && Array.isArray(e.data)) {
                return l(e.data);
              }
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          }(e);
        }
      }
      function u(e) {
        if (typeof e != "number") {
          throw new TypeError("\"size\" argument must be a number");
        }
        if (e < 0) {
          throw new RangeError("\"size\" argument must not be negative");
        }
      }
      function f(e) {
        u(e);
        return s(e < 0 ? 0 : c(e) | 0);
      }
      function l(e) {
        for (var t = e.length < 0 ? 0 : c(e.length) | 0, r = s(t), n = 0; n < t; n += 1) {
          r[n] = e[n] & 255;
        }
        return r;
      }
      function c(e) {
        if (e >= a) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
        }
        return e | 0;
      }
      function d(e, t) {
        if (o.isBuffer(e)) {
          return e.length;
        }
        if (F(e) || e instanceof ArrayBuffer) {
          return e.byteLength;
        }
        if (typeof e != "string") {
          e = "" + e;
        }
        var r = e.length;
        if (r === 0) {
          return 0;
        }
        var n = false;
        while (true) {
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case undefined:
              return z(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r * 2;
            case "hex":
              return r >>> 1;
            case "base64":
              return U(e).length;
            default:
              if (n) {
                return z(e).length;
              }
              t = ("" + t).toLowerCase();
              n = true;
          }
        }
      }
      function p(e, t, r) {
        var n = false;
        if (t === undefined || t < 0) {
          t = 0;
        }
        if (t > this.length) {
          return "";
        }
        if (r === undefined || r > this.length) {
          r = this.length;
        }
        if (r <= 0) {
          return "";
        }
        if ((r >>>= 0) <= (t >>>= 0)) {
          return "";
        }
        for (e ||= "utf8";;) {
          switch (e) {
            case "hex":
              return L(this, t, r);
            case "utf8":
            case "utf-8":
              return S(this, t, r);
            case "ascii":
              return T(this, t, r);
            case "latin1":
            case "binary":
              return I(this, t, r);
            case "base64":
              return x(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, t, r);
            default:
              if (n) {
                throw new TypeError("Unknown encoding: " + e);
              }
              e = (e + "").toLowerCase();
              n = true;
          }
        }
      }
      function g(e, t, r) {
        var n = e[t];
        e[t] = e[r];
        e[r] = n;
      }
      function _(e, t, r, n, i) {
        if (e.length === 0) {
          return -1;
        }
        if (typeof r == "string") {
          n = r;
          r = 0;
        } else if (r > 2147483647) {
          r = 2147483647;
        } else if (r < -2147483648) {
          r = -2147483648;
        }
        if (Z(r = +r)) {
          r = i ? 0 : e.length - 1;
        }
        if (r < 0) {
          r = e.length + r;
        }
        if (r >= e.length) {
          if (i) {
            return -1;
          }
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) {
            return -1;
          }
          r = 0;
        }
        if (typeof t == "string") {
          t = o.from(t, n);
        }
        if (o.isBuffer(t)) {
          if (t.length === 0) {
            return -1;
          } else {
            return b(e, t, r, n, i);
          }
        }
        if (typeof t == "number") {
          t &= 255;
          if (typeof Uint8Array.prototype.indexOf == "function") {
            if (i) {
              return Uint8Array.prototype.indexOf.call(e, t, r);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(e, t, r);
            }
          } else {
            return b(e, [t], r, n, i);
          }
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function b(e, t, r, n, i) {
        var a;
        var s = 1;
        var o = e.length;
        var h = t.length;
        if (n !== undefined && ((n = String(n).toLowerCase()) === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2) {
            return -1;
          }
          s = 2;
          o /= 2;
          h /= 2;
          r /= 2;
        }
        function u(e, t) {
          if (s === 1) {
            return e[t];
          } else {
            return e.readUInt16BE(t * s);
          }
        }
        if (i) {
          var f = -1;
          for (a = r; a < o; a++) {
            if (u(e, a) === u(t, f === -1 ? 0 : a - f)) {
              if (f === -1) {
                f = a;
              }
              if (a - f + 1 === h) {
                return f * s;
              }
            } else {
              if (f !== -1) {
                a -= a - f;
              }
              f = -1;
            }
          }
        } else {
          if (r + h > o) {
            r = o - h;
          }
          a = r;
          for (; a >= 0; a--) {
            var l = true;
            for (var c = 0; c < h; c++) {
              if (u(e, a + c) !== u(t, c)) {
                l = false;
                break;
              }
            }
            if (l) {
              return a;
            }
          }
        }
        return -1;
      }
      function v(e, t, r, n) {
        r = Number(r) || 0;
        var i = e.length - r;
        if (n) {
          if ((n = Number(n)) > i) {
            n = i;
          }
        } else {
          n = i;
        }
        var a = t.length;
        if (a % 2 != 0) {
          throw new TypeError("Invalid hex string");
        }
        if (n > a / 2) {
          n = a / 2;
        }
        for (var s = 0; s < n; ++s) {
          var o = parseInt(t.substr(s * 2, 2), 16);
          if (Z(o)) {
            return s;
          }
          e[r + s] = o;
        }
        return s;
      }
      function y(e, t, r, n) {
        return P(z(t, e.length - r), e, r, n);
      }
      function m(e, t, r, n) {
        return P(function (e) {
          var t = [];
          for (var r = 0; r < e.length; ++r) {
            t.push(e.charCodeAt(r) & 255);
          }
          return t;
        }(t), e, r, n);
      }
      function w(e, t, r, n) {
        return m(e, t, r, n);
      }
      function k(e, t, r, n) {
        return P(U(t), e, r, n);
      }
      function E(e, t, r, n) {
        return P(function (e, t) {
          var r;
          var n;
          var i;
          var a = [];
          for (var s = 0; s < e.length && !((t -= 2) < 0); ++s) {
            n = (r = e.charCodeAt(s)) >> 8;
            i = r % 256;
            a.push(i);
            a.push(n);
          }
          return a;
        }(t, e.length - r), e, r, n);
      }
      function x(e, t, r) {
        if (t === 0 && r === e.length) {
          return n.fromByteArray(e);
        } else {
          return n.fromByteArray(e.slice(t, r));
        }
      }
      function S(e, t, r) {
        r = Math.min(e.length, r);
        var n = [];
        for (var i = t; i < r;) {
          var a;
          var s;
          var o;
          var h;
          var u = e[i];
          var f = null;
          var l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (i + l <= r) {
            switch (l) {
              case 1:
                if (u < 128) {
                  f = u;
                }
                break;
              case 2:
                if (((a = e[i + 1]) & 192) == 128 && (h = (u & 31) << 6 | a & 63) > 127) {
                  f = h;
                }
                break;
              case 3:
                a = e[i + 1];
                s = e[i + 2];
                if ((a & 192) == 128 && (s & 192) == 128 && (h = (u & 15) << 12 | (a & 63) << 6 | s & 63) > 2047 && (h < 55296 || h > 57343)) {
                  f = h;
                }
                break;
              case 4:
                a = e[i + 1];
                s = e[i + 2];
                o = e[i + 3];
                if ((a & 192) == 128 && (s & 192) == 128 && (o & 192) == 128 && (h = (u & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | o & 63) > 65535 && h < 1114112) {
                  f = h;
                }
            }
          }
          if (f === null) {
            f = 65533;
            l = 1;
          } else if (f > 65535) {
            f -= 65536;
            n.push(f >>> 10 & 1023 | 55296);
            f = f & 1023 | 56320;
          }
          n.push(f);
          i += l;
        }
        return function (e) {
          var t = e.length;
          if (t <= A) {
            return String.fromCharCode.apply(String, e);
          }
          var r = "";
          var n = 0;
          while (n < t) {
            r += String.fromCharCode.apply(String, e.slice(n, n += A));
          }
          return r;
        }(n);
      }
      r.kMaxLength = a;
      o.TYPED_ARRAY_SUPPORT = function () {
        try {
          var e = new Uint8Array(1);
          e.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function () {
              return 42;
            }
          };
          return e.foo() === 42;
        } catch (e) {
          return false;
        }
      }();
      if (!o.TYPED_ARRAY_SUPPORT && typeof console != "undefined" && typeof console.error == "function") {
        console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      }
      if (typeof Symbol != "undefined" && Symbol.species && o[Symbol.species] === o) {
        Object.defineProperty(o, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }
      o.poolSize = 8192;
      o.from = function (e, t, r) {
        return h(e, t, r);
      };
      o.prototype.__proto__ = Uint8Array.prototype;
      o.__proto__ = Uint8Array;
      o.alloc = function (e, t, r) {
        return function (e, t, r) {
          u(e);
          if (e <= 0) {
            return s(e);
          } else if (t !== undefined) {
            if (typeof r == "string") {
              return s(e).fill(t, r);
            } else {
              return s(e).fill(t);
            }
          } else {
            return s(e);
          }
        }(e, t, r);
      };
      o.allocUnsafe = function (e) {
        return f(e);
      };
      o.allocUnsafeSlow = function (e) {
        return f(e);
      };
      o.isBuffer = function (e) {
        return e != null && e._isBuffer === true;
      };
      o.compare = function (e, t) {
        if (!o.isBuffer(e) || !o.isBuffer(t)) {
          throw new TypeError("Arguments must be Buffers");
        }
        if (e === t) {
          return 0;
        }
        var r = e.length;
        var n = t.length;
        for (var i = 0, a = Math.min(r, n); i < a; ++i) {
          if (e[i] !== t[i]) {
            r = e[i];
            n = t[i];
            break;
          }
        }
        if (r < n) {
          return -1;
        } else if (n < r) {
          return 1;
        } else {
          return 0;
        }
      };
      o.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      o.concat = function (e, t) {
        if (!Array.isArray(e)) {
          throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        if (e.length === 0) {
          return o.alloc(0);
        }
        var r;
        if (t === undefined) {
          t = 0;
          r = 0;
          for (; r < e.length; ++r) {
            t += e[r].length;
          }
        }
        var n = o.allocUnsafe(t);
        var i = 0;
        for (r = 0; r < e.length; ++r) {
          var a = e[r];
          if (!o.isBuffer(a)) {
            throw new TypeError("\"list\" argument must be an Array of Buffers");
          }
          a.copy(n, i);
          i += a.length;
        }
        return n;
      };
      o.byteLength = d;
      o.prototype._isBuffer = true;
      o.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (var t = 0; t < e; t += 2) {
          g(this, t, t + 1);
        }
        return this;
      };
      o.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (var t = 0; t < e; t += 4) {
          g(this, t, t + 3);
          g(this, t + 1, t + 2);
        }
        return this;
      };
      o.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (var t = 0; t < e; t += 8) {
          g(this, t, t + 7);
          g(this, t + 1, t + 6);
          g(this, t + 2, t + 5);
          g(this, t + 3, t + 4);
        }
        return this;
      };
      o.prototype.toString = function () {
        var e = this.length;
        if (e === 0) {
          return "";
        } else if (arguments.length === 0) {
          return S(this, 0, e);
        } else {
          return p.apply(this, arguments);
        }
      };
      o.prototype.equals = function (e) {
        if (!o.isBuffer(e)) {
          throw new TypeError("Argument must be a Buffer");
        }
        return this === e || o.compare(this, e) === 0;
      };
      o.prototype.inspect = function () {
        var e = "";
        var t = r.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          e = this.toString("hex", 0, t).match(/.{2}/g).join(" ");
          if (this.length > t) {
            e += " ... ";
          }
        }
        return "<Buffer " + e + ">";
      };
      o.prototype.compare = function (e, t, r, n, i) {
        if (!o.isBuffer(e)) {
          throw new TypeError("Argument must be a Buffer");
        }
        if (t === undefined) {
          t = 0;
        }
        if (r === undefined) {
          r = e ? e.length : 0;
        }
        if (n === undefined) {
          n = 0;
        }
        if (i === undefined) {
          i = this.length;
        }
        if (t < 0 || r > e.length || n < 0 || i > this.length) {
          throw new RangeError("out of range index");
        }
        if (n >= i && t >= r) {
          return 0;
        }
        if (n >= i) {
          return -1;
        }
        if (t >= r) {
          return 1;
        }
        if (this === e) {
          return 0;
        }
        var a = (i >>>= 0) - (n >>>= 0);
        var s = (r >>>= 0) - (t >>>= 0);
        for (var h = Math.min(a, s), u = this.slice(n, i), f = e.slice(t, r), l = 0; l < h; ++l) {
          if (u[l] !== f[l]) {
            a = u[l];
            s = f[l];
            break;
          }
        }
        if (a < s) {
          return -1;
        } else if (s < a) {
          return 1;
        } else {
          return 0;
        }
      };
      o.prototype.includes = function (e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      o.prototype.indexOf = function (e, t, r) {
        return _(this, e, t, r, true);
      };
      o.prototype.lastIndexOf = function (e, t, r) {
        return _(this, e, t, r, false);
      };
      o.prototype.write = function (e, t, r, n) {
        if (t === undefined) {
          n = "utf8";
          r = this.length;
          t = 0;
        } else if (r === undefined && typeof t == "string") {
          n = t;
          r = this.length;
          t = 0;
        } else {
          if (!isFinite(t)) {
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          }
          t >>>= 0;
          if (isFinite(r)) {
            r >>>= 0;
            if (n === undefined) {
              n = "utf8";
            }
          } else {
            n = r;
            r = undefined;
          }
        }
        var i = this.length - t;
        if (r === undefined || r > i) {
          r = i;
        }
        if (e.length > 0 && (r < 0 || t < 0) || t > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        n ||= "utf8";
        var a = false;
        while (true) {
          switch (n) {
            case "hex":
              return v(this, e, t, r);
            case "utf8":
            case "utf-8":
              return y(this, e, t, r);
            case "ascii":
              return m(this, e, t, r);
            case "latin1":
            case "binary":
              return w(this, e, t, r);
            case "base64":
              return k(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return E(this, e, t, r);
            default:
              if (a) {
                throw new TypeError("Unknown encoding: " + n);
              }
              n = ("" + n).toLowerCase();
              a = true;
          }
        }
      };
      o.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      var A = 4096;
      function T(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) {
          n += String.fromCharCode(e[i] & 127);
        }
        return n;
      }
      function I(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) {
          n += String.fromCharCode(e[i]);
        }
        return n;
      }
      function L(e, t, r) {
        var n = e.length;
        if (!t || t < 0) {
          t = 0;
        }
        if (!r || r < 0 || r > n) {
          r = n;
        }
        var i = "";
        for (var a = t; a < r; ++a) {
          i += N(e[a]);
        }
        return i;
      }
      function R(e, t, r) {
        for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2) {
          i += String.fromCharCode(n[a] + n[a + 1] * 256);
        }
        return i;
      }
      function j(e, t, r) {
        if (e % 1 != 0 || e < 0) {
          throw new RangeError("offset is not uint");
        }
        if (e + t > r) {
          throw new RangeError("Trying to access beyond buffer length");
        }
      }
      function M(e, t, r, n, i, a) {
        if (!o.isBuffer(e)) {
          throw new TypeError("\"buffer\" argument must be a Buffer instance");
        }
        if (t > i || t < a) {
          throw new RangeError("\"value\" argument is out of bounds");
        }
        if (r + n > e.length) {
          throw new RangeError("Index out of range");
        }
      }
      function B(e, t, r, n, i, a) {
        if (r + n > e.length) {
          throw new RangeError("Index out of range");
        }
        if (r < 0) {
          throw new RangeError("Index out of range");
        }
      }
      function C(e, t, r, n, a) {
        t = +t;
        r >>>= 0;
        if (!a) {
          B(e, 0, r, 4);
        }
        i.write(e, t, r, n, 23, 4);
        return r + 4;
      }
      function O(e, t, r, n, a) {
        t = +t;
        r >>>= 0;
        if (!a) {
          B(e, 0, r, 8);
        }
        i.write(e, t, r, n, 52, 8);
        return r + 8;
      }
      o.prototype.slice = function (e, t) {
        var r = this.length;
        if ((e = ~~e) < 0) {
          if ((e += r) < 0) {
            e = 0;
          }
        } else if (e > r) {
          e = r;
        }
        if ((t = t === undefined ? r : ~~t) < 0) {
          if ((t += r) < 0) {
            t = 0;
          }
        } else if (t > r) {
          t = r;
        }
        if (t < e) {
          t = e;
        }
        var n = this.subarray(e, t);
        n.__proto__ = o.prototype;
        return n;
      };
      o.prototype.readUIntLE = function (e, t, r) {
        e >>>= 0;
        t >>>= 0;
        if (!r) {
          j(e, t, this.length);
        }
        var n = this[e];
        for (var i = 1, a = 0; ++a < t && (i *= 256);) {
          n += this[e + a] * i;
        }
        return n;
      };
      o.prototype.readUIntBE = function (e, t, r) {
        e >>>= 0;
        t >>>= 0;
        if (!r) {
          j(e, t, this.length);
        }
        var n = this[e + --t];
        for (var i = 1; t > 0 && (i *= 256);) {
          n += this[e + --t] * i;
        }
        return n;
      };
      o.prototype.readUInt8 = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 1, this.length);
        }
        return this[e];
      };
      o.prototype.readUInt16LE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 2, this.length);
        }
        return this[e] | this[e + 1] << 8;
      };
      o.prototype.readUInt16BE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 2, this.length);
        }
        return this[e] << 8 | this[e + 1];
      };
      o.prototype.readUInt32LE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 4, this.length);
        }
        return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      o.prototype.readUInt32BE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 4, this.length);
        }
        return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      o.prototype.readIntLE = function (e, t, r) {
        e >>>= 0;
        t >>>= 0;
        if (!r) {
          j(e, t, this.length);
        }
        var n = this[e];
        for (var i = 1, a = 0; ++a < t && (i *= 256);) {
          n += this[e + a] * i;
        }
        if (n >= (i *= 128)) {
          n -= Math.pow(2, t * 8);
        }
        return n;
      };
      o.prototype.readIntBE = function (e, t, r) {
        e >>>= 0;
        t >>>= 0;
        if (!r) {
          j(e, t, this.length);
        }
        for (var n = t, i = 1, a = this[e + --n]; n > 0 && (i *= 256);) {
          a += this[e + --n] * i;
        }
        if (a >= (i *= 128)) {
          a -= Math.pow(2, t * 8);
        }
        return a;
      };
      o.prototype.readInt8 = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 1, this.length);
        }
        if (this[e] & 128) {
          return (255 - this[e] + 1) * -1;
        } else {
          return this[e];
        }
      };
      o.prototype.readInt16LE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 2, this.length);
        }
        var r = this[e] | this[e + 1] << 8;
        if (r & 32768) {
          return r | -65536;
        } else {
          return r;
        }
      };
      o.prototype.readInt16BE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 2, this.length);
        }
        var r = this[e + 1] | this[e] << 8;
        if (r & 32768) {
          return r | -65536;
        } else {
          return r;
        }
      };
      o.prototype.readInt32LE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 4, this.length);
        }
        return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      o.prototype.readInt32BE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 4, this.length);
        }
        return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      o.prototype.readFloatLE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 4, this.length);
        }
        return i.read(this, e, true, 23, 4);
      };
      o.prototype.readFloatBE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 4, this.length);
        }
        return i.read(this, e, false, 23, 4);
      };
      o.prototype.readDoubleLE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 8, this.length);
        }
        return i.read(this, e, true, 52, 8);
      };
      o.prototype.readDoubleBE = function (e, t) {
        e >>>= 0;
        if (!t) {
          j(e, 8, this.length);
        }
        return i.read(this, e, false, 52, 8);
      };
      o.prototype.writeUIntLE = function (e, t, r, n) {
        if (!(e = +e, t >>>= 0, r >>>= 0, n)) {
          M(this, e, t, r, Math.pow(2, r * 8) - 1, 0);
        }
        var i = 1;
        var a = 0;
        for (this[t] = e & 255; ++a < r && (i *= 256);) {
          this[t + a] = e / i & 255;
        }
        return t + r;
      };
      o.prototype.writeUIntBE = function (e, t, r, n) {
        if (!(e = +e, t >>>= 0, r >>>= 0, n)) {
          M(this, e, t, r, Math.pow(2, r * 8) - 1, 0);
        }
        var i = r - 1;
        var a = 1;
        for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) {
          this[t + i] = e / a & 255;
        }
        return t + r;
      };
      o.prototype.writeUInt8 = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 1, 255, 0);
        }
        this[t] = e & 255;
        return t + 1;
      };
      o.prototype.writeUInt16LE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 2, 65535, 0);
        }
        this[t] = e & 255;
        this[t + 1] = e >>> 8;
        return t + 2;
      };
      o.prototype.writeUInt16BE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 2, 65535, 0);
        }
        this[t] = e >>> 8;
        this[t + 1] = e & 255;
        return t + 2;
      };
      o.prototype.writeUInt32LE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 4, 4294967295, 0);
        }
        this[t + 3] = e >>> 24;
        this[t + 2] = e >>> 16;
        this[t + 1] = e >>> 8;
        this[t] = e & 255;
        return t + 4;
      };
      o.prototype.writeUInt32BE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 4, 4294967295, 0);
        }
        this[t] = e >>> 24;
        this[t + 1] = e >>> 16;
        this[t + 2] = e >>> 8;
        this[t + 3] = e & 255;
        return t + 4;
      };
      o.prototype.writeIntLE = function (e, t, r, n) {
        e = +e;
        t >>>= 0;
        if (!n) {
          var i = Math.pow(2, r * 8 - 1);
          M(this, e, t, r, i - 1, -i);
        }
        var a = 0;
        var s = 1;
        var o = 0;
        for (this[t] = e & 255; ++a < r && (s *= 256);) {
          if (e < 0 && o === 0 && this[t + a - 1] !== 0) {
            o = 1;
          }
          this[t + a] = (e / s | 0) - o & 255;
        }
        return t + r;
      };
      o.prototype.writeIntBE = function (e, t, r, n) {
        e = +e;
        t >>>= 0;
        if (!n) {
          var i = Math.pow(2, r * 8 - 1);
          M(this, e, t, r, i - 1, -i);
        }
        var a = r - 1;
        var s = 1;
        var o = 0;
        for (this[t + a] = e & 255; --a >= 0 && (s *= 256);) {
          if (e < 0 && o === 0 && this[t + a + 1] !== 0) {
            o = 1;
          }
          this[t + a] = (e / s | 0) - o & 255;
        }
        return t + r;
      };
      o.prototype.writeInt8 = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 1, 127, -128);
        }
        if (e < 0) {
          e = 255 + e + 1;
        }
        this[t] = e & 255;
        return t + 1;
      };
      o.prototype.writeInt16LE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 2, 32767, -32768);
        }
        this[t] = e & 255;
        this[t + 1] = e >>> 8;
        return t + 2;
      };
      o.prototype.writeInt16BE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 2, 32767, -32768);
        }
        this[t] = e >>> 8;
        this[t + 1] = e & 255;
        return t + 2;
      };
      o.prototype.writeInt32LE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 4, 2147483647, -2147483648);
        }
        this[t] = e & 255;
        this[t + 1] = e >>> 8;
        this[t + 2] = e >>> 16;
        this[t + 3] = e >>> 24;
        return t + 4;
      };
      o.prototype.writeInt32BE = function (e, t, r) {
        e = +e;
        t >>>= 0;
        if (!r) {
          M(this, e, t, 4, 2147483647, -2147483648);
        }
        if (e < 0) {
          e = 4294967295 + e + 1;
        }
        this[t] = e >>> 24;
        this[t + 1] = e >>> 16;
        this[t + 2] = e >>> 8;
        this[t + 3] = e & 255;
        return t + 4;
      };
      o.prototype.writeFloatLE = function (e, t, r) {
        return C(this, e, t, true, r);
      };
      o.prototype.writeFloatBE = function (e, t, r) {
        return C(this, e, t, false, r);
      };
      o.prototype.writeDoubleLE = function (e, t, r) {
        return O(this, e, t, true, r);
      };
      o.prototype.writeDoubleBE = function (e, t, r) {
        return O(this, e, t, false, r);
      };
      o.prototype.copy = function (e, t, r, n) {
        r ||= 0;
        if (!n && n !== 0) {
          n = this.length;
        }
        if (t >= e.length) {
          t = e.length;
        }
        t ||= 0;
        if (n > 0 && n < r) {
          n = r;
        }
        if (n === r) {
          return 0;
        }
        if (e.length === 0 || this.length === 0) {
          return 0;
        }
        if (t < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (r < 0 || r >= this.length) {
          throw new RangeError("sourceStart out of bounds");
        }
        if (n < 0) {
          throw new RangeError("sourceEnd out of bounds");
        }
        if (n > this.length) {
          n = this.length;
        }
        if (e.length - t < n - r) {
          n = e.length - t + r;
        }
        var i;
        var a = n - r;
        if (this === e && r < t && t < n) {
          for (i = a - 1; i >= 0; --i) {
            e[i + t] = this[i + r];
          }
        } else if (a < 1000) {
          for (i = 0; i < a; ++i) {
            e[i + t] = this[i + r];
          }
        } else {
          Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
        }
        return a;
      };
      o.prototype.fill = function (e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string") {
            n = t;
            t = 0;
            r = this.length;
          } else if (typeof r == "string") {
            n = r;
            r = this.length;
          }
          if (e.length === 1) {
            var i = e.charCodeAt(0);
            if (i < 256) {
              e = i;
            }
          }
          if (n !== undefined && typeof n != "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof n == "string" && !o.isEncoding(n)) {
            throw new TypeError("Unknown encoding: " + n);
          }
        } else if (typeof e == "number") {
          e &= 255;
        }
        if (t < 0 || this.length < t || this.length < r) {
          throw new RangeError("Out of range index");
        }
        if (r <= t) {
          return this;
        }
        var a;
        t >>>= 0;
        r = r === undefined ? this.length : r >>> 0;
        e ||= 0;
        if (typeof e == "number") {
          for (a = t; a < r; ++a) {
            this[a] = e;
          }
        } else {
          var s = o.isBuffer(e) ? e : new o(e, n);
          var h = s.length;
          for (a = 0; a < r - t; ++a) {
            this[a + t] = s[a % h];
          }
        }
        return this;
      };
      var D = /[^+/0-9A-Za-z-_]/g;
      function N(e) {
        if (e < 16) {
          return "0" + e.toString(16);
        } else {
          return e.toString(16);
        }
      }
      function z(e, t) {
        var r;
        t = t || Infinity;
        for (var n = e.length, i = null, a = [], s = 0; s < n; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                if ((t -= 3) > -1) {
                  a.push(239, 191, 189);
                }
                continue;
              }
              if (s + 1 === n) {
                if ((t -= 3) > -1) {
                  a.push(239, 191, 189);
                }
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              if ((t -= 3) > -1) {
                a.push(239, 191, 189);
              }
              i = r;
              continue;
            }
            r = 65536 + (i - 55296 << 10 | r - 56320);
          } else if (i && (t -= 3) > -1) {
            a.push(239, 191, 189);
          }
          i = null;
          if (r < 128) {
            if ((t -= 1) < 0) {
              break;
            }
            a.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) {
              break;
            }
            a.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) {
              break;
            }
            a.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else {
            if (!(r < 1114112)) {
              throw new Error("Invalid code point");
            }
            if ((t -= 4) < 0) {
              break;
            }
            a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          }
        }
        return a;
      }
      function U(e) {
        return n.toByteArray(function (e) {
          if ((e = e.trim().replace(D, "")).length < 2) {
            return "";
          }
          while (e.length % 4 != 0) {
            e += "=";
          }
          return e;
        }(e));
      }
      function P(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) {
          t[i + r] = e[i];
        }
        return i;
      }
      function F(e) {
        return typeof ArrayBuffer.isView == "function" && ArrayBuffer.isView(e);
      }
      function Z(e) {
        return e != e;
      }
    }, {
      "base64-js": 3,
      ieee754: 25
    }],
    8: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("readable-stream").Readable;
        var i = e("util");
        function a(e, t) {
          if (!(this instanceof a)) {
            return new a(e, t);
          }
          n.call(this, t);
          if (e == null) {
            e = String(e);
          }
          this._obj = e;
        }
        t.exports = a;
        i.inherits(a, n);
        a.prototype._read = function (e) {
          var t = this._obj;
          if (typeof t == "string") {
            this.push(new r(t));
          } else if (r.isBuffer(t)) {
            this.push(t);
          } else {
            this.push(new r(JSON.stringify(t)));
          }
          this.push(null);
        };
      }).call(this, e("buffer").Buffer);
    }, {
      buffer: 7,
      "readable-stream": 79,
      util: 104
    }],
    9: [function (e, t, r) {
      (function (e) {
        function t(e) {
          return Object.prototype.toString.call(e);
        }
        r.isArray = function (e) {
          if (Array.isArray) {
            return Array.isArray(e);
          } else {
            return t(e) === "[object Array]";
          }
        };
        r.isBoolean = function (e) {
          return typeof e == "boolean";
        };
        r.isNull = function (e) {
          return e === null;
        };
        r.isNullOrUndefined = function (e) {
          return e == null;
        };
        r.isNumber = function (e) {
          return typeof e == "number";
        };
        r.isString = function (e) {
          return typeof e == "string";
        };
        r.isSymbol = function (e) {
          return typeof e == "symbol";
        };
        r.isUndefined = function (e) {
          return e === undefined;
        };
        r.isRegExp = function (e) {
          return t(e) === "[object RegExp]";
        };
        r.isObject = function (e) {
          return typeof e == "object" && e !== null;
        };
        r.isDate = function (e) {
          return t(e) === "[object Date]";
        };
        r.isError = function (e) {
          return t(e) === "[object Error]" || e instanceof Error;
        };
        r.isFunction = function (e) {
          return typeof e == "function";
        };
        r.isPrimitive = function (e) {
          return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
        };
        r.isBuffer = e.isBuffer;
      }).call(this, {
        isBuffer: e("../../is-buffer/index.js")
      });
    }, {
      "../../is-buffer/index.js": 28
    }],
    10: [function (e, t, r) {
      "use strict";

      var n = e("./lib/thunk.js");
      function i() {
        this.argTypes = [];
        this.shimArgs = [];
        this.arrayArgs = [];
        this.arrayBlockIndices = [];
        this.scalarArgs = [];
        this.offsetArgs = [];
        this.offsetArgIndex = [];
        this.indexArgs = [];
        this.shapeArgs = [];
        this.funcName = "";
        this.pre = null;
        this.body = null;
        this.post = null;
        this.debug = false;
      }
      t.exports = function (e) {
        var t = new i();
        t.pre = e.pre;
        t.body = e.body;
        t.post = e.post;
        var r = e.args.slice(0);
        t.argTypes = r;
        for (var a = 0; a < r.length; ++a) {
          var s = r[a];
          if (s === "array" || typeof s == "object" && s.blockIndices) {
            t.argTypes[a] = "array";
            t.arrayArgs.push(a);
            t.arrayBlockIndices.push(s.blockIndices ? s.blockIndices : 0);
            t.shimArgs.push("array" + a);
            if (a < t.pre.args.length && t.pre.args[a].count > 0) {
              throw new Error("cwise: pre() block may not reference array args");
            }
            if (a < t.post.args.length && t.post.args[a].count > 0) {
              throw new Error("cwise: post() block may not reference array args");
            }
          } else if (s === "scalar") {
            t.scalarArgs.push(a);
            t.shimArgs.push("scalar" + a);
          } else if (s === "index") {
            t.indexArgs.push(a);
            if (a < t.pre.args.length && t.pre.args[a].count > 0) {
              throw new Error("cwise: pre() block may not reference array index");
            }
            if (a < t.body.args.length && t.body.args[a].lvalue) {
              throw new Error("cwise: body() block may not write to array index");
            }
            if (a < t.post.args.length && t.post.args[a].count > 0) {
              throw new Error("cwise: post() block may not reference array index");
            }
          } else if (s === "shape") {
            t.shapeArgs.push(a);
            if (a < t.pre.args.length && t.pre.args[a].lvalue) {
              throw new Error("cwise: pre() block may not write to array shape");
            }
            if (a < t.body.args.length && t.body.args[a].lvalue) {
              throw new Error("cwise: body() block may not write to array shape");
            }
            if (a < t.post.args.length && t.post.args[a].lvalue) {
              throw new Error("cwise: post() block may not write to array shape");
            }
          } else {
            if (typeof s != "object" || !s.offset) {
              throw new Error("cwise: Unknown argument type " + r[a]);
            }
            t.argTypes[a] = "offset";
            t.offsetArgs.push({
              array: s.array,
              offset: s.offset
            });
            t.offsetArgIndex.push(a);
          }
        }
        if (t.arrayArgs.length <= 0) {
          throw new Error("cwise: No array arguments specified");
        }
        if (t.pre.args.length > r.length) {
          throw new Error("cwise: Too many arguments in pre() block");
        }
        if (t.body.args.length > r.length) {
          throw new Error("cwise: Too many arguments in body() block");
        }
        if (t.post.args.length > r.length) {
          throw new Error("cwise: Too many arguments in post() block");
        }
        t.debug = !!e.printCode || !!e.debug;
        t.funcName = e.funcName || "cwise";
        t.blockSize = e.blockSize || 64;
        return n(t);
      };
    }, {
      "./lib/thunk.js": 12
    }],
    11: [function (e, t, r) {
      "use strict";

      var n = e("uniq");
      function i(e, t, r) {
        var n;
        var i;
        var a = e.length;
        var s = t.arrayArgs.length;
        var o = t.indexArgs.length > 0;
        var h = [];
        var u = [];
        var f = 0;
        var l = 0;
        for (n = 0; n < a; ++n) {
          u.push(["i", n, "=0"].join(""));
        }
        for (i = 0; i < s; ++i) {
          for (n = 0; n < a; ++n) {
            l = f;
            f = e[n];
            if (n === 0) {
              u.push(["d", i, "s", n, "=t", i, "p", f].join(""));
            } else {
              u.push(["d", i, "s", n, "=(t", i, "p", f, "-s", l, "*t", i, "p", l, ")"].join(""));
            }
          }
        }
        if (u.length > 0) {
          h.push("var " + u.join(","));
        }
        n = a - 1;
        for (; n >= 0; --n) {
          f = e[n];
          h.push(["for(i", n, "=0;i", n, "<s", f, ";++i", n, "){"].join(""));
        }
        h.push(r);
        n = 0;
        for (; n < a; ++n) {
          l = f;
          f = e[n];
          i = 0;
          for (; i < s; ++i) {
            h.push(["p", i, "+=d", i, "s", n].join(""));
          }
          if (o) {
            if (n > 0) {
              h.push(["index[", l, "]-=s", l].join(""));
            }
            h.push(["++index[", f, "]"].join(""));
          }
          h.push("}");
        }
        return h.join("\n");
      }
      function a(e, t, r) {
        var n = e.body;
        var i = [];
        var a = [];
        for (var s = 0; s < e.args.length; ++s) {
          var o = e.args[s];
          if (!(o.count <= 0)) {
            var h = new RegExp(o.name, "g");
            var u = "";
            var f = t.arrayArgs.indexOf(s);
            switch (t.argTypes[s]) {
              case "offset":
                var l = t.offsetArgIndex.indexOf(s);
                f = t.offsetArgs[l].array;
                u = "+q" + l;
              case "array":
                u = "p" + f + u;
                var c = "l" + s;
                var d = "a" + f;
                if (t.arrayBlockIndices[f] === 0) {
                  if (o.count === 1) {
                    if (r[f] === "generic") {
                      if (o.lvalue) {
                        i.push(["var ", c, "=", d, ".get(", u, ")"].join(""));
                        n = n.replace(h, c);
                        a.push([d, ".set(", u, ",", c, ")"].join(""));
                      } else {
                        n = n.replace(h, [d, ".get(", u, ")"].join(""));
                      }
                    } else {
                      n = n.replace(h, [d, "[", u, "]"].join(""));
                    }
                  } else if (r[f] === "generic") {
                    i.push(["var ", c, "=", d, ".get(", u, ")"].join(""));
                    n = n.replace(h, c);
                    if (o.lvalue) {
                      a.push([d, ".set(", u, ",", c, ")"].join(""));
                    }
                  } else {
                    i.push(["var ", c, "=", d, "[", u, "]"].join(""));
                    n = n.replace(h, c);
                    if (o.lvalue) {
                      a.push([d, "[", u, "]=", c].join(""));
                    }
                  }
                } else {
                  var p = [o.name];
                  var g = [u];
                  for (var _ = 0; _ < Math.abs(t.arrayBlockIndices[f]); _++) {
                    p.push("\\s*\\[([^\\]]+)\\]");
                    g.push("$" + (_ + 1) + "*t" + f + "b" + _);
                  }
                  h = new RegExp(p.join(""), "g");
                  u = g.join("+");
                  if (r[f] === "generic") {
                    throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                  }
                  n = n.replace(h, [d, "[", u, "]"].join(""));
                }
                break;
              case "scalar":
                n = n.replace(h, "Y" + t.scalarArgs.indexOf(s));
                break;
              case "index":
                n = n.replace(h, "index");
                break;
              case "shape":
                n = n.replace(h, "shape");
            }
          }
        }
        return [i.join("\n"), n, a.join("\n")].join("\n").trim();
      }
      function s(e) {
        var t = new Array(e.length);
        var r = true;
        for (var n = 0; n < e.length; ++n) {
          var i = e[n];
          var a = i.match(/\d+/);
          a = a ? a[0] : "";
          if (i.charAt(0) === 0) {
            t[n] = "u" + i.charAt(1) + a;
          } else {
            t[n] = i.charAt(0) + a;
          }
          if (n > 0) {
            r = r && t[n] === t[n - 1];
          }
        }
        if (r) {
          return t[0];
        } else {
          return t.join("");
        }
      }
      t.exports = function (e, t) {
        var r = t[1].length - Math.abs(e.arrayBlockIndices[0]) | 0;
        var o = new Array(e.arrayArgs.length);
        var h = new Array(e.arrayArgs.length);
        for (var u = 0; u < e.arrayArgs.length; ++u) {
          h[u] = t[u * 2];
          o[u] = t[u * 2 + 1];
        }
        var f = [];
        var l = [];
        var c = [];
        var d = [];
        var p = [];
        for (u = 0; u < e.arrayArgs.length; ++u) {
          if (e.arrayBlockIndices[u] < 0) {
            c.push(0);
            d.push(r);
            f.push(r);
            l.push(r + e.arrayBlockIndices[u]);
          } else {
            c.push(e.arrayBlockIndices[u]);
            d.push(e.arrayBlockIndices[u] + r);
            f.push(0);
            l.push(e.arrayBlockIndices[u]);
          }
          var g = [];
          for (var _ = 0; _ < o[u].length; _++) {
            if (c[u] <= o[u][_] && o[u][_] < d[u]) {
              g.push(o[u][_] - c[u]);
            }
          }
          p.push(g);
        }
        var b = ["SS"];
        var v = ["'use strict'"];
        var y = [];
        for (_ = 0; _ < r; ++_) {
          y.push(["s", _, "=SS[", _, "]"].join(""));
        }
        for (u = 0; u < e.arrayArgs.length; ++u) {
          b.push("a" + u);
          b.push("t" + u);
          b.push("p" + u);
          for (_ = 0; _ < r; ++_) {
            y.push(["t", u, "p", _, "=t", u, "[", c[u] + _, "]"].join(""));
          }
          for (_ = 0; _ < Math.abs(e.arrayBlockIndices[u]); ++_) {
            y.push(["t", u, "b", _, "=t", u, "[", f[u] + _, "]"].join(""));
          }
        }
        for (u = 0; u < e.scalarArgs.length; ++u) {
          b.push("Y" + u);
        }
        if (e.shapeArgs.length > 0) {
          y.push("shape=SS.slice(0)");
        }
        if (e.indexArgs.length > 0) {
          var m = new Array(r);
          for (u = 0; u < r; ++u) {
            m[u] = "0";
          }
          y.push(["index=[", m.join(","), "]"].join(""));
        }
        for (u = 0; u < e.offsetArgs.length; ++u) {
          var w = e.offsetArgs[u];
          var k = [];
          for (_ = 0; _ < w.offset.length; ++_) {
            if (w.offset[_] !== 0) {
              if (w.offset[_] === 1) {
                k.push(["t", w.array, "p", _].join(""));
              } else {
                k.push([w.offset[_], "*t", w.array, "p", _].join(""));
              }
            }
          }
          if (k.length === 0) {
            y.push("q" + u + "=0");
          } else {
            y.push(["q", u, "=", k.join("+")].join(""));
          }
        }
        var E = n([].concat(e.pre.thisVars).concat(e.body.thisVars).concat(e.post.thisVars));
        if ((y = y.concat(E)).length > 0) {
          v.push("var " + y.join(","));
        }
        u = 0;
        for (; u < e.arrayArgs.length; ++u) {
          v.push("p" + u + "|=0");
        }
        if (e.pre.body.length > 3) {
          v.push(a(e.pre, e, h));
        }
        var x = a(e.body, e, h);
        var S = function (e) {
          for (var t = 0, r = e[0].length; t < r;) {
            for (var n = 1; n < e.length; ++n) {
              if (e[n][t] !== e[0][t]) {
                return t;
              }
            }
            ++t;
          }
          return t;
        }(p);
        if (S < r) {
          v.push(function (e, t, r, n) {
            var a = t.length;
            for (var s = r.arrayArgs.length, o = r.blockSize, h = r.indexArgs.length > 0, u = [], f = 0; f < s; ++f) {
              u.push(["var offset", f, "=p", f].join(""));
            }
            for (f = e; f < a; ++f) {
              u.push(["for(var j" + f + "=SS[", t[f], "]|0;j", f, ">0;){"].join(""));
              u.push(["if(j", f, "<", o, "){"].join(""));
              u.push(["s", t[f], "=j", f].join(""));
              u.push(["j", f, "=0"].join(""));
              u.push(["}else{s", t[f], "=", o].join(""));
              u.push(["j", f, "-=", o, "}"].join(""));
              if (h) {
                u.push(["index[", t[f], "]=j", f].join(""));
              }
            }
            for (f = 0; f < s; ++f) {
              var l = ["offset" + f];
              for (var c = e; c < a; ++c) {
                l.push(["j", c, "*t", f, "p", t[c]].join(""));
              }
              u.push(["p", f, "=(", l.join("+"), ")"].join(""));
            }
            u.push(i(t, r, n));
            f = e;
            for (; f < a; ++f) {
              u.push("}");
            }
            return u.join("\n");
          }(S, p[0], e, x));
        } else {
          v.push(i(p[0], e, x));
        }
        if (e.post.body.length > 3) {
          v.push(a(e.post, e, h));
        }
        if (e.debug) {
          console.log("-----Generated cwise routine for ", t, ":\n" + v.join("\n") + "\n----------");
        }
        var A = [e.funcName || "unnamed", "_cwise_loop_", o[0].join("s"), "m", S, s(h)].join("");
        return new Function(["function ", A, "(", b.join(","), "){", v.join("\n"), "} return ", A].join(""))();
      };
    }, {
      uniq: 100
    }],
    12: [function (e, t, r) {
      "use strict";

      var n = e("./compile.js");
      t.exports = function (e) {
        var t = ["'use strict'", "var CACHED={}"];
        var r = [];
        var i = e.funcName + "_cwise_thunk";
        t.push(["return function ", i, "(", e.shimArgs.join(","), "){"].join(""));
        var a = [];
        var s = [];
        var o = [["array", e.arrayArgs[0], ".shape.slice(", Math.max(0, e.arrayBlockIndices[0]), e.arrayBlockIndices[0] < 0 ? "," + e.arrayBlockIndices[0] + ")" : ")"].join("")];
        var h = [];
        var u = [];
        for (var f = 0; f < e.arrayArgs.length; ++f) {
          var l = e.arrayArgs[f];
          r.push(["t", l, "=array", l, ".dtype,", "r", l, "=array", l, ".order"].join(""));
          a.push("t" + l);
          a.push("r" + l);
          s.push("t" + l);
          s.push("r" + l + ".join()");
          o.push("array" + l + ".data");
          o.push("array" + l + ".stride");
          o.push("array" + l + ".offset|0");
          if (f > 0) {
            h.push("array" + e.arrayArgs[0] + ".shape.length===array" + l + ".shape.length+" + (Math.abs(e.arrayBlockIndices[0]) - Math.abs(e.arrayBlockIndices[f])));
            u.push("array" + e.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, e.arrayBlockIndices[0]) + "]===array" + l + ".shape[shapeIndex+" + Math.max(0, e.arrayBlockIndices[f]) + "]");
          }
        }
        if (e.arrayArgs.length > 1) {
          t.push("if (!(" + h.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')");
          t.push("for(var shapeIndex=array" + e.arrayArgs[0] + ".shape.length-" + Math.abs(e.arrayBlockIndices[0]) + "; shapeIndex-->0;) {");
          t.push("if (!(" + u.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')");
          t.push("}");
        }
        f = 0;
        for (; f < e.scalarArgs.length; ++f) {
          o.push("scalar" + e.scalarArgs[f]);
        }
        r.push(["type=[", s.join(","), "].join()"].join(""));
        r.push("proc=CACHED[type]");
        t.push("var " + r.join(","));
        t.push(["if(!proc){", "CACHED[type]=proc=compile([", a.join(","), "])}", "return proc(", o.join(","), ")}"].join(""));
        if (e.debug) {
          console.log("-----Generated thunk:\n" + t.join("\n") + "\n----------");
        }
        return new Function("compile", t.join("\n"))(n.bind(undefined, e));
      };
    }, {
      "./compile.js": 11
    }],
    13: [function (e, t, r) {
      (function (e) {
        t.exports = function (t) {
          if (!/^data\:/i.test(t)) {
            throw new TypeError("`uri` does not appear to be a Data URI (must begin with \"data:\")");
          }
          var r = (t = t.replace(/\r?\n/g, "")).indexOf(",");
          if (r === -1 || r <= 4) {
            throw new TypeError("malformed data: URI");
          }
          for (var n = t.substring(5, r).split(";"), i = false, a = "US-ASCII", s = 0; s < n.length; s++) {
            if (n[s] == "base64") {
              i = true;
            } else if (n[s].indexOf("charset=") == 0) {
              a = n[s].substring(8);
            }
          }
          var o = unescape(t.substring(r + 1));
          var h = new e(o, i ? "base64" : "ascii");
          h.type = n[0] || "text/plain";
          h.charset = a;
          return h;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      buffer: 7
    }],
    14: [function (e, t, r) {
      var n = Object.create || function (e) {
        var t = function () {};
        t.prototype = e;
        return new t();
      };
      var i = Object.keys || function (e) {
        var t = [];
        for (var r in e) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t.push(r);
          }
        }
        return r;
      };
      var a = Function.prototype.bind || function (e) {
        var t = this;
        return function () {
          return t.apply(e, arguments);
        };
      };
      function s() {
        if (!this._events || !Object.prototype.hasOwnProperty.call(this, "_events")) {
          this._events = n(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || undefined;
      }
      t.exports = s;
      s.EventEmitter = s;
      s.prototype._events = undefined;
      s.prototype._maxListeners = undefined;
      var o;
      var h = 10;
      try {
        var u = {};
        if (Object.defineProperty) {
          Object.defineProperty(u, "x", {
            value: 0
          });
        }
        o = u.x === 0;
      } catch (e) {
        o = false;
      }
      function f(e) {
        if (e._maxListeners === undefined) {
          return s.defaultMaxListeners;
        } else {
          return e._maxListeners;
        }
      }
      function l(e, t, r, i) {
        var a;
        var s;
        var o;
        if (typeof r != "function") {
          throw new TypeError("\"listener\" argument must be a function");
        }
        if (s = e._events) {
          if (s.newListener) {
            e.emit("newListener", t, r.listener ? r.listener : r);
            s = e._events;
          }
          o = s[t];
        } else {
          s = e._events = n(null);
          e._eventsCount = 0;
        }
        if (o) {
          if (typeof o == "function") {
            o = s[t] = i ? [r, o] : [o, r];
          } else if (i) {
            o.unshift(r);
          } else {
            o.push(r);
          }
          if (!o.warned && (a = f(e)) && a > 0 && o.length > a) {
            o.warned = true;
            var h = new Error("Possible EventEmitter memory leak detected. " + o.length + " \"" + String(t) + "\" listeners added. Use emitter.setMaxListeners() to increase limit.");
            h.name = "MaxListenersExceededWarning";
            h.emitter = e;
            h.type = t;
            h.count = o.length;
            if (typeof console == "object" && console.warn) {
              console.warn("%s: %s", h.name, h.message);
            }
          }
        } else {
          o = s[t] = r;
          ++e._eventsCount;
        }
        return e;
      }
      function c() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          switch (arguments.length) {
            case 0:
              return this.listener.call(this.target);
            case 1:
              return this.listener.call(this.target, arguments[0]);
            case 2:
              return this.listener.call(this.target, arguments[0], arguments[1]);
            case 3:
              return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
            default:
              for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) {
                e[t] = arguments[t];
              }
              this.listener.apply(this.target, e);
          }
        }
      }
      function d(e, t, r) {
        var n = {
          fired: false,
          wrapFn: undefined,
          target: e,
          type: t,
          listener: r
        };
        var i = a.call(c, n);
        i.listener = r;
        n.wrapFn = i;
        return i;
      }
      function p(e, t, r) {
        var n = e._events;
        if (!n) {
          return [];
        }
        var i = n[t];
        if (i) {
          if (typeof i == "function") {
            if (r) {
              return [i.listener || i];
            } else {
              return [i];
            }
          } else if (r) {
            return function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r) {
                t[r] = e[r].listener || e[r];
              }
              return t;
            }(i);
          } else {
            return _(i, i.length);
          }
        } else {
          return [];
        }
      }
      function g(e) {
        var t = this._events;
        if (t) {
          var r = t[e];
          if (typeof r == "function") {
            return 1;
          }
          if (r) {
            return r.length;
          }
        }
        return 0;
      }
      function _(e, t) {
        var r = new Array(t);
        for (var n = 0; n < t; ++n) {
          r[n] = e[n];
        }
        return r;
      }
      if (o) {
        Object.defineProperty(s, "defaultMaxListeners", {
          enumerable: true,
          get: function () {
            return h;
          },
          set: function (e) {
            if (typeof e != "number" || e < 0 || e != e) {
              throw new TypeError("\"defaultMaxListeners\" must be a positive number");
            }
            h = e;
          }
        });
      } else {
        s.defaultMaxListeners = h;
      }
      s.prototype.setMaxListeners = function (e) {
        if (typeof e != "number" || e < 0 || isNaN(e)) {
          throw new TypeError("\"n\" argument must be a positive number");
        }
        this._maxListeners = e;
        return this;
      };
      s.prototype.getMaxListeners = function () {
        return f(this);
      };
      s.prototype.emit = function (e) {
        var t;
        var r;
        var n;
        var i;
        var a;
        var s;
        var o = e === "error";
        if (s = this._events) {
          o = o && s.error == null;
        } else if (!o) {
          return false;
        }
        if (o) {
          if (arguments.length > 1) {
            t = arguments[1];
          }
          if (t instanceof Error) {
            throw t;
          }
          var h = new Error("Unhandled \"error\" event. (" + t + ")");
          h.context = t;
          throw h;
        }
        if (!(r = s[e])) {
          return false;
        }
        var u = typeof r == "function";
        switch (n = arguments.length) {
          case 1:
            (function (e, t, r) {
              if (t) {
                e.call(r);
              } else {
                for (var n = e.length, i = _(e, n), a = 0; a < n; ++a) {
                  i[a].call(r);
                }
              }
            })(r, u, this);
            break;
          case 2:
            (function (e, t, r, n) {
              if (t) {
                e.call(r, n);
              } else {
                for (var i = e.length, a = _(e, i), s = 0; s < i; ++s) {
                  a[s].call(r, n);
                }
              }
            })(r, u, this, arguments[1]);
            break;
          case 3:
            (function (e, t, r, n, i) {
              if (t) {
                e.call(r, n, i);
              } else {
                for (var a = e.length, s = _(e, a), o = 0; o < a; ++o) {
                  s[o].call(r, n, i);
                }
              }
            })(r, u, this, arguments[1], arguments[2]);
            break;
          case 4:
            (function (e, t, r, n, i, a) {
              if (t) {
                e.call(r, n, i, a);
              } else {
                for (var s = e.length, o = _(e, s), h = 0; h < s; ++h) {
                  o[h].call(r, n, i, a);
                }
              }
            })(r, u, this, arguments[1], arguments[2], arguments[3]);
            break;
          default:
            i = new Array(n - 1);
            a = 1;
            for (; a < n; a++) {
              i[a - 1] = arguments[a];
            }
            (function (e, t, r, n) {
              if (t) {
                e.apply(r, n);
              } else {
                for (var i = e.length, a = _(e, i), s = 0; s < i; ++s) {
                  a[s].apply(r, n);
                }
              }
            })(r, u, this, i);
        }
        return true;
      };
      s.prototype.addListener = function (e, t) {
        return l(this, e, t, false);
      };
      s.prototype.on = s.prototype.addListener;
      s.prototype.prependListener = function (e, t) {
        return l(this, e, t, true);
      };
      s.prototype.once = function (e, t) {
        if (typeof t != "function") {
          throw new TypeError("\"listener\" argument must be a function");
        }
        this.on(e, d(this, e, t));
        return this;
      };
      s.prototype.prependOnceListener = function (e, t) {
        if (typeof t != "function") {
          throw new TypeError("\"listener\" argument must be a function");
        }
        this.prependListener(e, d(this, e, t));
        return this;
      };
      s.prototype.removeListener = function (e, t) {
        var r;
        var i;
        var a;
        var s;
        var o;
        if (typeof t != "function") {
          throw new TypeError("\"listener\" argument must be a function");
        }
        if (!(i = this._events)) {
          return this;
        }
        if (!(r = i[e])) {
          return this;
        }
        if (r === t || r.listener === t) {
          if (--this._eventsCount === 0) {
            this._events = n(null);
          } else {
            delete i[e];
            if (i.removeListener) {
              this.emit("removeListener", e, r.listener || t);
            }
          }
        } else if (typeof r != "function") {
          a = -1;
          s = r.length - 1;
          for (; s >= 0; s--) {
            if (r[s] === t || r[s].listener === t) {
              o = r[s].listener;
              a = s;
              break;
            }
          }
          if (a < 0) {
            return this;
          }
          if (a === 0) {
            r.shift();
          } else {
            (function (e, t) {
              for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) {
                e[r] = e[n];
              }
              e.pop();
            })(r, a);
          }
          if (r.length === 1) {
            i[e] = r[0];
          }
          if (i.removeListener) {
            this.emit("removeListener", e, o || t);
          }
        }
        return this;
      };
      s.prototype.removeAllListeners = function (e) {
        var t;
        var r;
        var a;
        if (!(r = this._events)) {
          return this;
        }
        if (!r.removeListener) {
          if (arguments.length === 0) {
            this._events = n(null);
            this._eventsCount = 0;
          } else if (r[e]) {
            if (--this._eventsCount === 0) {
              this._events = n(null);
            } else {
              delete r[e];
            }
          }
          return this;
        }
        if (arguments.length === 0) {
          var s;
          var o = i(r);
          for (a = 0; a < o.length; ++a) {
            if ((s = o[a]) !== "removeListener") {
              this.removeAllListeners(s);
            }
          }
          this.removeAllListeners("removeListener");
          this._events = n(null);
          this._eventsCount = 0;
          return this;
        }
        if (typeof (t = r[e]) == "function") {
          this.removeListener(e, t);
        } else if (t) {
          for (a = t.length - 1; a >= 0; a--) {
            this.removeListener(e, t[a]);
          }
        }
        return this;
      };
      s.prototype.listeners = function (e) {
        return p(this, e, true);
      };
      s.prototype.rawListeners = function (e) {
        return p(this, e, false);
      };
      s.listenerCount = function (e, t) {
        if (typeof e.listenerCount == "function") {
          return e.listenerCount(t);
        } else {
          return g.call(e, t);
        }
      };
      s.prototype.listenerCount = g;
      s.prototype.eventNames = function () {
        if (this._eventsCount > 0) {
          return Reflect.ownKeys(this._events);
        } else {
          return [];
        }
      };
    }, {}],
    15: [function (e, t, r) {
      (function (r, n) {
        "use strict";

        var i = e("path");
        var a = e("ndarray");
        var s = e("omggif").GifReader;
        e("ndarray-pack");
        e("through");
        var o = e("data-uri-to-buffer");
        function h(e, t) {
          var r;
          try {
            r = new s(e);
          } catch (e) {
            t(e);
            return;
          }
          if (r.numFrames() > 0) {
            var n = [];
            var i = [r.numFrames(), r.height, r.width, 4];
            var o = new Uint8Array(i[0] * i[1] * i[2] * i[3]);
            var h = a(o, i);
            try {
              for (var u = 0; u < r.numFrames(); ++u) {
                r.decodeAndBlitFrameRGBA(u, o.subarray(h.index(u, 0, 0, 0), h.index(u + 1, 0, 0, 0)));
                n.push(r.frameInfo(u));
              }
            } catch (e) {
              t(e);
              return;
            }
            t(null, h.transpose(0, 2, 1), n);
          } else {
            i = [r.height, r.width, 4];
            o = new Uint8Array(i[0] * i[1] * i[2]);
            h = a(o, i);
            try {
              r.decodeAndBlitFrameRGBA(0, o);
            } catch (e) {
              t(e);
              return;
            }
            t(null, h.transpose(1, 0));
          }
        }
        function u(e, t) {
          n.nextTick(function () {
            try {
              var r = o(e);
              if (r) {
                h(function (e) {
                  if (e[0] === undefined) {
                    for (var t = e.length, r = new Uint8Array(t), n = 0; n < t; ++n) {
                      r[n] = e.get(n);
                    }
                    return r;
                  }
                  return new Uint8Array(e);
                }(r), t);
              } else {
                t(new Error("Error parsing data URI"));
              }
            } catch (e) {
              t(e);
            }
          });
        }
        t.exports = function (e, t, n) {
          if (!n) {
            n = t;
            t = "";
          }
          var s = i.extname(e);
          if ((t || s.toUpperCase()) === ".GIF") {
            (function (e, t) {
              var r = new XMLHttpRequest();
              r.open("GET", e, true);
              r.responseType = "arraybuffer";
              if (r.overrideMimeType) {
                r.overrideMimeType("application/binary");
              }
              r.onerror = function (e) {
                t(e);
              };
              r.onload = function () {
                if (r.readyState === 4) {
                  h(new Uint8Array(r.response), t);
                }
              };
              r.send();
            })(e, n);
          } else {
            if (r.isBuffer(e)) {
              e = "data:" + t + ";base64," + e.toString("base64");
            }
            if (e.indexOf("data:image/gif;") === 0) {
              u(e, n);
            } else {
              (function (e, t) {
                var r = new Image();
                r.crossOrigin = "Anonymous";
                r.onload = function () {
                  var e = document.createElement("canvas");
                  e.width = r.width;
                  e.height = r.height;
                  var n = e.getContext("2d");
                  n.drawImage(r, 0, 0);
                  var i = n.getImageData(0, 0, r.width, r.height);
                  t(null, a(new Uint8Array(i.data), [r.width, r.height, 4], [4, r.width * 4, 1], 0));
                };
                r.onerror = function (e) {
                  t(e);
                };
                r.src = e;
              })(e, n);
            }
          }
        };
      }).call(this, {
        isBuffer: e("../is-buffer/index.js")
      }, e("_process"));
    }, {
      "../is-buffer/index.js": 28,
      _process: 73,
      "data-uri-to-buffer": 13,
      ndarray: 37,
      "ndarray-pack": 35,
      omggif: 38,
      path: 50,
      through: 99
    }],
    16: [function (e, t, r) {
      (function (r) {
        e("assert");
        e("events").EventEmitter;
        var n = e("readable-stream");
        var i = e("util");
        var a = e("./TypedNeuQuant.js");
        var s = e("./LZWEncoder.js");
        function o(e) {
          n.call(this, e);
          this.okayToPush = true;
          this.resetData();
        }
        function h(e, t, r) {
          var n = (r = r || {}).highWaterMark;
          o.call(this, {
            highWaterMark: n || n === 0 ? n : 65536
          });
          this.width = ~~e;
          this.height = ~~t;
          this.transparent = null;
          this.transIndex = 0;
          this.repeat = -1;
          this.delay = 0;
          this.pixels = null;
          this.indexedPixels = null;
          this.colorDepth = null;
          this.colorTab = null;
          this.usedEntry = [];
          this.palSize = 7;
          this.dispose = -1;
          this.firstFrame = true;
          this.sample = 10;
          var i = this;
          function a() {
            i.flushData();
          }
          this.on("writeHeader#stop", a);
          this.on("frame#stop", a);
          this.on("finish#stop", function () {
            a();
            i.push(null);
          });
        }
        i.inherits(o, n);
        o.prototype._read = function () {
          this.okayToPush = true;
        };
        o.prototype.resetData = function () {
          this.data = [];
        };
        o.prototype.flushData = function () {
          if (!this.okayToPush) {
            var e = new Error("GIF memory limit exceeded. Please `read` from GIF before writing additional frames/information.");
            return this.emit("error", e);
          }
          var t = new r(this.data);
          this.resetData();
          this.okayToPush = this.push(t);
        };
        o.prototype.writeByte = function (e) {
          this.data.push(e);
        };
        o.prototype.writeUTFBytes = function (e) {
          for (var t = e.length, r = 0; r < t; r++) {
            this.writeByte(e.charCodeAt(r));
          }
        };
        o.prototype.writeBytes = function (e, t, r) {
          for (var n = r || e.length, i = t || 0; i < n; i++) {
            this.writeByte(e[i]);
          }
        };
        i.inherits(h, o);
        h.prototype.setDelay = function (e) {
          this.delay = Math.round(e / 10);
        };
        h.prototype.setFrameRate = function (e) {
          this.delay = Math.round(100 / e);
        };
        h.prototype.setDispose = function (e) {
          if (e >= 0) {
            this.dispose = e;
          }
        };
        h.prototype.setRepeat = function (e) {
          this.repeat = e;
        };
        h.prototype.setTransparent = function (e) {
          this.transparent = e;
        };
        h.prototype.analyzeImage = function (e) {
          this.setImagePixels(this.removeAlphaChannel(e));
          this.analyzePixels();
        };
        h.prototype.writeImageInfo = function () {
          if (this.firstFrame) {
            this.writeLSD();
            this.writePalette();
            if (this.repeat >= 0) {
              this.writeNetscapeExt();
            }
          }
          this.writeGraphicCtrlExt();
          this.writeImageDesc();
          if (!this.firstFrame) {
            this.writePalette();
          }
          this.firstFrame = false;
        };
        h.prototype.outputImage = function () {
          this.writePixels();
        };
        h.prototype.addFrame = function (e) {
          this.emit("frame#start");
          this.analyzeImage(e);
          this.writeImageInfo();
          this.outputImage();
          this.emit("frame#stop");
        };
        h.prototype.finish = function () {
          this.emit("finish#start");
          this.writeByte(59);
          this.emit("finish#stop");
        };
        h.prototype.setQuality = function (e) {
          if (e < 1) {
            e = 1;
          }
          this.sample = e;
        };
        h.prototype.writeHeader = function () {
          this.emit("writeHeader#start");
          this.writeUTFBytes("GIF89a");
          this.emit("writeHeader#stop");
        };
        h.prototype.analyzePixels = function () {
          var e = this.pixels.length / 3;
          this.indexedPixels = new Uint8Array(e);
          var t = new a(this.pixels, this.sample);
          t.buildColormap();
          this.colorTab = t.getColormap();
          var r = 0;
          for (var n = 0; n < e; n++) {
            var i = t.lookupRGB(this.pixels[r++] & 255, this.pixels[r++] & 255, this.pixels[r++] & 255);
            this.usedEntry[i] = true;
            this.indexedPixels[n] = i;
          }
          this.pixels = null;
          this.colorDepth = 8;
          this.palSize = 7;
          if (this.transparent !== null) {
            this.transIndex = this.findClosest(this.transparent);
          }
        };
        h.prototype.findClosest = function (e) {
          if (this.colorTab === null) {
            return -1;
          }
          var t = (e & 16711680) >> 16;
          var r = (e & 65280) >> 8;
          var n = e & 255;
          var i = 0;
          var a = 16777216;
          for (var s = this.colorTab.length, o = 0; o < s;) {
            var h = t - (this.colorTab[o++] & 255);
            var u = r - (this.colorTab[o++] & 255);
            var f = n - (this.colorTab[o] & 255);
            var l = h * h + u * u + f * f;
            var c = o / 3;
            if (this.usedEntry[c] && l < a) {
              a = l;
              i = c;
            }
            o++;
          }
          return i;
        };
        h.prototype.removeAlphaChannel = function (e) {
          var t = this.width;
          for (var r = this.height, n = new Uint8Array(t * r * 3), i = 0, a = 0; a < r; a++) {
            for (var s = 0; s < t; s++) {
              var o = a * t * 4 + s * 4;
              n[i++] = e[o];
              n[i++] = e[o + 1];
              n[i++] = e[o + 2];
            }
          }
          return n;
        };
        h.prototype.setImagePixels = function (e) {
          this.pixels = e;
        };
        h.prototype.writeGraphicCtrlExt = function () {
          var e;
          var t;
          this.writeByte(33);
          this.writeByte(249);
          this.writeByte(4);
          if (this.transparent === null) {
            e = 0;
            t = 0;
          } else {
            e = 1;
            t = 2;
          }
          if (this.dispose >= 0) {
            t = dispose & 7;
          }
          t <<= 2;
          this.writeByte(t | 0 | e);
          this.writeShort(this.delay);
          this.writeByte(this.transIndex);
          this.writeByte(0);
        };
        h.prototype.writeImageDesc = function () {
          this.writeByte(44);
          this.writeShort(0);
          this.writeShort(0);
          this.writeShort(this.width);
          this.writeShort(this.height);
          if (this.firstFrame) {
            this.writeByte(0);
          } else {
            this.writeByte(this.palSize | 128);
          }
        };
        h.prototype.writeLSD = function () {
          this.writeShort(this.width);
          this.writeShort(this.height);
          this.writeByte(this.palSize | 240);
          this.writeByte(0);
          this.writeByte(0);
        };
        h.prototype.writeNetscapeExt = function () {
          this.writeByte(33);
          this.writeByte(255);
          this.writeByte(11);
          this.writeUTFBytes("NETSCAPE2.0");
          this.writeByte(3);
          this.writeByte(1);
          this.writeShort(this.repeat);
          this.writeByte(0);
        };
        h.prototype.writePalette = function () {
          this.writeBytes(this.colorTab);
          for (var e = 768 - this.colorTab.length, t = 0; t < e; t++) {
            this.writeByte(0);
          }
        };
        h.prototype.writeShort = function (e) {
          this.writeByte(e & 255);
          this.writeByte(e >> 8 & 255);
        };
        h.prototype.writePixels = function () {
          new s(this.width, this.height, this.indexedPixels, this.colorDepth).encode(this);
        };
        h.prototype.stream = function () {
          return this;
        };
        h.ByteCapacitor = o;
        t.exports = h;
      }).call(this, e("buffer").Buffer);
    }, {
      "./LZWEncoder.js": 17,
      "./TypedNeuQuant.js": 18,
      assert: 2,
      buffer: 7,
      events: 14,
      "readable-stream": 24,
      util: 104
    }],
    17: [function (e, t, r) {
      var n = 5003;
      var i = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
      t.exports = function (e, t, r, a) {
        var s;
        var o;
        var h;
        var u;
        var f;
        var l;
        var c;
        var d;
        var p;
        var g = Math.max(2, a);
        var _ = new Uint8Array(256);
        var b = new Int32Array(n);
        var v = new Int32Array(n);
        var y = 0;
        var m = 0;
        var w = false;
        function k(e, t) {
          _[o++] = e;
          if (o >= 254) {
            S(t);
          }
        }
        function E(e) {
          x(n);
          m = d + 2;
          w = true;
          I(d, e);
        }
        function x(e) {
          for (var t = 0; t < e; ++t) {
            b[t] = -1;
          }
        }
        function S(e) {
          if (o > 0) {
            e.writeByte(o);
            e.writeBytes(_, 0, o);
            o = 0;
          }
        }
        function A(e) {
          return (1 << e) - 1;
        }
        function T() {
          if (u === 0) {
            return -1;
          } else {
            --u;
            return r[f++] & 255;
          }
        }
        function I(e, t) {
          s &= i[y];
          if (y > 0) {
            s |= e << y;
          } else {
            s = e;
          }
          y += l;
          while (y >= 8) {
            k(s & 255, t);
            s >>= 8;
            y -= 8;
          }
          if (m > h || w) {
            if (w) {
              h = A(l = c);
              w = false;
            } else {
              ++l;
              h = l == 12 ? 4096 : A(l);
            }
          }
          if (e == p) {
            while (y > 0) {
              k(s & 255, t);
              s >>= 8;
              y -= 8;
            }
            S(t);
          }
        }
        this.encode = function (r) {
          r.writeByte(g);
          u = e * t;
          f = 0;
          (function (e, t) {
            var r;
            var i;
            var a;
            var s;
            var u;
            var f;
            var g;
            w = false;
            h = A(l = c = e);
            p = 1 + (d = 1 << e - 1);
            m = d + 2;
            o = 0;
            s = T();
            g = 0;
            r = n;
            for (; r < 65536; r *= 2) {
              ++g;
            }
            g = 8 - g;
            x(f = n);
            I(d, t);
            e: while ((i = T()) != -1) {
              r = (i << 12) + s;
              if (b[a = i << g ^ s] !== r) {
                if (b[a] >= 0) {
                  u = f - a;
                  if (a === 0) {
                    u = 1;
                  }
                  do {
                    if ((a -= u) < 0) {
                      a += f;
                    }
                    if (b[a] === r) {
                      s = v[a];
                      continue e;
                    }
                  } while (b[a] >= 0);
                }
                I(s, t);
                s = i;
                if (m < 4096) {
                  v[a] = m++;
                  b[a] = r;
                } else {
                  E(t);
                }
              } else {
                s = v[a];
              }
            }
            I(s, t);
            I(p, t);
          })(g + 1, r);
          r.writeByte(0);
        };
      };
    }, {}],
    18: [function (e, t, r) {
      var n = 256;
      var i = 1024;
      var a = 262144;
      t.exports = function (e, t) {
        var r;
        var s;
        var o;
        var h;
        var u;
        function f(e, t, n, a, s) {
          r[t][0] -= e * (r[t][0] - n) / i;
          r[t][1] -= e * (r[t][1] - a) / i;
          r[t][2] -= e * (r[t][2] - s) / i;
        }
        function l(e, t, i, s, o) {
          var h;
          var f;
          for (var l = Math.abs(t - e), c = Math.min(t + e, n), d = t + 1, p = t - 1, g = 1; d < c || p > l;) {
            f = u[g++];
            if (d < c) {
              (h = r[d++])[0] -= f * (h[0] - i) / a;
              h[1] -= f * (h[1] - s) / a;
              h[2] -= f * (h[2] - o) / a;
            }
            if (p > l) {
              (h = r[p--])[0] -= f * (h[0] - i) / a;
              h[1] -= f * (h[1] - s) / a;
              h[2] -= f * (h[2] - o) / a;
            }
          }
        }
        function c(e, t, i) {
          var a;
          var s;
          var u;
          var f;
          var l;
          var c = ~-2147483648;
          var d = c;
          var p = -1;
          var g = p;
          for (a = 0; a < n; a++) {
            s = r[a];
            if ((u = Math.abs(s[0] - e) + Math.abs(s[1] - t) + Math.abs(s[2] - i)) < c) {
              c = u;
              p = a;
            }
            if ((f = u - (o[a] >> 12)) < d) {
              d = f;
              g = a;
            }
            l = h[a] >> 10;
            h[a] -= l;
            o[a] += l << 10;
          }
          h[p] += 64;
          o[p] -= 65536;
          return g;
        }
        this.buildColormap = function () {
          (function () {
            var e;
            var t;
            r = [];
            s = new Int32Array(256);
            o = new Int32Array(n);
            h = new Int32Array(n);
            u = new Int32Array(32);
            e = 0;
            for (; e < n; e++) {
              t = (e << 12) / n;
              r[e] = new Float64Array([t, t, t, 0]);
              h[e] = 256;
              o[e] = 0;
            }
          })();
          (function () {
            var r;
            var n;
            var a;
            var s;
            var o;
            var h;
            var d = e.length;
            var p = 30 + (t - 1) / 3;
            var g = d / (t * 3);
            var _ = ~~(g / 100);
            var b = i;
            var v = 2048;
            var y = v >> 6;
            if (y <= 1) {
              y = 0;
            }
            r = 0;
            for (; r < y; r++) {
              u[r] = b * ((y * y - r * r) * 256 / (y * y));
            }
            if (d < 1509) {
              t = 1;
              n = 3;
            } else {
              n = d % 499 != 0 ? 1497 : d % 491 != 0 ? 1473 : d % 487 != 0 ? 1461 : 1509;
            }
            var m = 0;
            for (r = 0; r < g;) {
              f(b, h = c(a = (e[m] & 255) << 4, s = (e[m + 1] & 255) << 4, o = (e[m + 2] & 255) << 4), a, s, o);
              if (y !== 0) {
                l(y, h, a, s, o);
              }
              if ((m += n) >= d) {
                m -= d;
              }
              if (_ === 0) {
                _ = 1;
              }
              if (++r % _ === 0) {
                b -= b / p;
                if ((y = (v -= v / 30) >> 6) <= 1) {
                  y = 0;
                }
                h = 0;
                for (; h < y; h++) {
                  u[h] = b * ((y * y - h * h) * 256 / (y * y));
                }
              }
            }
          })();
          (function () {
            for (var e = 0; e < n; e++) {
              r[e][0] >>= 4;
              r[e][1] >>= 4;
              r[e][2] >>= 4;
              r[e][3] = e;
            }
          })();
          (function () {
            var e;
            var t;
            var i;
            var a;
            var o;
            var h;
            var u = 0;
            var f = 0;
            for (e = 0; e < n; e++) {
              o = e;
              h = (i = r[e])[1];
              t = e + 1;
              for (; t < n; t++) {
                if ((a = r[t])[1] < h) {
                  o = t;
                  h = a[1];
                }
              }
              a = r[o];
              if (e != o) {
                t = a[0];
                a[0] = i[0];
                i[0] = t;
                t = a[1];
                a[1] = i[1];
                i[1] = t;
                t = a[2];
                a[2] = i[2];
                i[2] = t;
                t = a[3];
                a[3] = i[3];
                i[3] = t;
              }
              if (h != u) {
                s[u] = f + e >> 1;
                t = u + 1;
                for (; t < h; t++) {
                  s[t] = e;
                }
                u = h;
                f = e;
              }
            }
            s[u] = f + 255 >> 1;
            t = u + 1;
            for (; t < 256; t++) {
              s[t] = 255;
            }
          })();
        };
        this.getColormap = function () {
          var e = [];
          var t = [];
          for (var i = 0; i < n; i++) {
            t[r[i][3]] = i;
          }
          var a = 0;
          for (var s = 0; s < n; s++) {
            var o = t[s];
            e[a++] = r[o][0];
            e[a++] = r[o][1];
            e[a++] = r[o][2];
          }
          return e;
        };
        this.lookupRGB = function (e, t, i) {
          var a;
          var o;
          var h;
          var u = 1000;
          var f = -1;
          for (var l = s[t], c = l - 1; l < n || c >= 0;) {
            if (l < n) {
              if ((h = (o = r[l])[1] - t) >= u) {
                l = n;
              } else {
                l++;
                if (h < 0) {
                  h = -h;
                }
                if ((a = o[0] - e) < 0) {
                  a = -a;
                }
                if ((h += a) < u) {
                  if ((a = o[2] - i) < 0) {
                    a = -a;
                  }
                  if ((h += a) < u) {
                    u = h;
                    f = o[3];
                  }
                }
              }
            }
            if (c >= 0) {
              if ((h = t - (o = r[c])[1]) >= u) {
                c = -1;
              } else {
                c--;
                if (h < 0) {
                  h = -h;
                }
                if ((a = o[0] - e) < 0) {
                  a = -a;
                }
                if ((h += a) < u) {
                  if ((a = o[2] - i) < 0) {
                    a = -a;
                  }
                  if ((h += a) < u) {
                    u = h;
                    f = o[3];
                  }
                }
              }
            }
          }
          return f;
        };
      };
    }, {}],
    19: [function (e, t, r) {
      (function (r) {
        t.exports = o;
        var n = Object.keys || function (e) {
          var t = [];
          for (var r in e) {
            t.push(r);
          }
          return t;
        };
        var i = e("core-util-is");
        i.inherits = e("inherits");
        var a = e("./_stream_readable");
        var s = e("./_stream_writable");
        function o(e) {
          if (!(this instanceof o)) {
            return new o(e);
          }
          a.call(this, e);
          s.call(this, e);
          if (e && e.readable === false) {
            this.readable = false;
          }
          if (e && e.writable === false) {
            this.writable = false;
          }
          this.allowHalfOpen = true;
          if (e && e.allowHalfOpen === false) {
            this.allowHalfOpen = false;
          }
          this.once("end", h);
        }
        function h() {
          if (!this.allowHalfOpen && !this._writableState.ended) {
            r.nextTick(this.end.bind(this));
          }
        }
        i.inherits(o, a);
        (function (e, t) {
          for (var r = 0, n = e.length; r < n; r++) {
            t(e[r], r);
          }
        })(n(s.prototype), function (e) {
          o.prototype[e] ||= s.prototype[e];
        });
      }).call(this, e("_process"));
    }, {
      "./_stream_readable": 21,
      "./_stream_writable": 23,
      _process: 73,
      "core-util-is": 9,
      inherits: 26
    }],
    20: [function (e, t, r) {
      t.exports = a;
      var n = e("./_stream_transform");
      var i = e("core-util-is");
      function a(e) {
        if (!(this instanceof a)) {
          return new a(e);
        }
        n.call(this, e);
      }
      i.inherits = e("inherits");
      i.inherits(a, n);
      a.prototype._transform = function (e, t, r) {
        r(null, e);
      };
    }, {
      "./_stream_transform": 22,
      "core-util-is": 9,
      inherits: 26
    }],
    21: [function (e, t, r) {
      (function (r) {
        t.exports = l;
        var n = e("isarray");
        var i = e("buffer").Buffer;
        l.ReadableState = f;
        var a = e("events").EventEmitter;
        a.listenerCount ||= function (e, t) {
          return e.listeners(t).length;
        };
        var s;
        var o = e("stream");
        var h = e("core-util-is");
        h.inherits = e("inherits");
        var u = e("util");
        function f(t, r) {
          var n = e("./_stream_duplex");
          var i = (t = t || {}).highWaterMark;
          var a = t.objectMode ? 16 : 16384;
          this.highWaterMark = i || i === 0 ? i : a;
          this.highWaterMark = ~~this.highWaterMark;
          this.buffer = [];
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = null;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false;
          this.sync = true;
          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.objectMode = !!t.objectMode;
          if (r instanceof n) {
            this.objectMode = this.objectMode || !!t.readableObjectMode;
          }
          this.defaultEncoding = t.defaultEncoding || "utf8";
          this.ranOut = false;
          this.awaitDrain = 0;
          this.readingMore = false;
          this.decoder = null;
          this.encoding = null;
          if (t.encoding) {
            s ||= e("string_decoder/").StringDecoder;
            this.decoder = new s(t.encoding);
            this.encoding = t.encoding;
          }
        }
        function l(t) {
          e("./_stream_duplex");
          if (!(this instanceof l)) {
            return new l(t);
          }
          this._readableState = new f(t, this);
          this.readable = true;
          o.call(this);
        }
        function c(e, t, n, i, a) {
          var s = function (e, t) {
            var r = null;
            if (!h.isBuffer(t) && !h.isString(t) && !h.isNullOrUndefined(t) && !e.objectMode) {
              r = new TypeError("Invalid non-string/buffer chunk");
            }
            return r;
          }(t, n);
          if (s) {
            e.emit("error", s);
          } else if (h.isNullOrUndefined(n)) {
            t.reading = false;
            if (!t.ended) {
              (function (e, t) {
                if (t.decoder && !t.ended) {
                  var r = t.decoder.end();
                  if (r && r.length) {
                    t.buffer.push(r);
                    t.length += t.objectMode ? 1 : r.length;
                  }
                }
                t.ended = true;
                g(e);
              })(e, t);
            }
          } else if (t.objectMode || n && n.length > 0) {
            if (t.ended && !a) {
              var o = new Error("stream.push() after EOF");
              e.emit("error", o);
            } else if (t.endEmitted && a) {
              o = new Error("stream.unshift() after end event");
              e.emit("error", o);
            } else {
              if (!!t.decoder && !a && !i) {
                n = t.decoder.write(n);
              }
              if (!a) {
                t.reading = false;
              }
              if (t.flowing && t.length === 0 && !t.sync) {
                e.emit("data", n);
                e.read(0);
              } else {
                t.length += t.objectMode ? 1 : n.length;
                if (a) {
                  t.buffer.unshift(n);
                } else {
                  t.buffer.push(n);
                }
                if (t.needReadable) {
                  g(e);
                }
              }
              (function (e, t) {
                if (!t.readingMore) {
                  t.readingMore = true;
                  r.nextTick(function () {
                    (function (e, t) {
                      var r = t.length;
                      while (!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (u("maybeReadMore read 0"), e.read(0), r !== t.length)) {
                        r = t.length;
                      }
                      t.readingMore = false;
                    })(e, t);
                  });
                }
              })(e, t);
            }
          } else if (!a) {
            t.reading = false;
          }
          return function (e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
          }(t);
        }
        u = u && u.debuglog ? u.debuglog("stream") : function () {};
        h.inherits(l, o);
        l.prototype.push = function (e, t) {
          var r = this._readableState;
          if (h.isString(e) && !r.objectMode && (t = t || r.defaultEncoding) !== r.encoding) {
            e = new i(e, t);
            t = "";
          }
          return c(this, r, e, t, false);
        };
        l.prototype.unshift = function (e) {
          return c(this, this._readableState, e, "", true);
        };
        l.prototype.setEncoding = function (t) {
          s ||= e("string_decoder/").StringDecoder;
          this._readableState.decoder = new s(t);
          this._readableState.encoding = t;
          return this;
        };
        var d = 8388608;
        function p(e, t) {
          if (t.length === 0 && t.ended) {
            return 0;
          } else if (t.objectMode) {
            if (e === 0) {
              return 0;
            } else {
              return 1;
            }
          } else if (isNaN(e) || h.isNull(e)) {
            if (t.flowing && t.buffer.length) {
              return t.buffer[0].length;
            } else {
              return t.length;
            }
          } else if (e <= 0) {
            return 0;
          } else {
            if (e > t.highWaterMark) {
              t.highWaterMark = function (e) {
                if (e >= d) {
                  e = d;
                } else {
                  e--;
                  for (var t = 1; t < 32; t <<= 1) {
                    e |= e >> t;
                  }
                  e++;
                }
                return e;
              }(e);
            }
            if (e > t.length) {
              if (t.ended) {
                return t.length;
              } else {
                t.needReadable = true;
                return 0;
              }
            } else {
              return e;
            }
          }
        }
        function g(e) {
          var t = e._readableState;
          t.needReadable = false;
          if (!t.emittedReadable) {
            u("emitReadable", t.flowing);
            t.emittedReadable = true;
            if (t.sync) {
              r.nextTick(function () {
                _(e);
              });
            } else {
              _(e);
            }
          }
        }
        function _(e) {
          u("emit readable");
          e.emit("readable");
          b(e);
        }
        function b(e) {
          var t = e._readableState;
          u("flow", t.flowing);
          if (t.flowing) {
            do {
              var r = e.read();
            } while (r !== null && t.flowing);
          }
        }
        function v(e, t) {
          var r;
          var n = t.buffer;
          var a = t.length;
          var s = !!t.decoder;
          var o = !!t.objectMode;
          if (n.length === 0) {
            return null;
          }
          if (a === 0) {
            r = null;
          } else if (o) {
            r = n.shift();
          } else if (!e || e >= a) {
            r = s ? n.join("") : i.concat(n, a);
            n.length = 0;
          } else if (e < n[0].length) {
            r = (l = n[0]).slice(0, e);
            n[0] = l.slice(e);
          } else if (e === n[0].length) {
            r = n.shift();
          } else {
            r = s ? "" : new i(e);
            for (var h = 0, u = 0, f = n.length; u < f && h < e; u++) {
              var l = n[0];
              var c = Math.min(e - h, l.length);
              if (s) {
                r += l.slice(0, c);
              } else {
                l.copy(r, h, 0, c);
              }
              if (c < l.length) {
                n[0] = l.slice(c);
              } else {
                n.shift();
              }
              h += c;
            }
          }
          return r;
        }
        function y(e) {
          var t = e._readableState;
          if (t.length > 0) {
            throw new Error("endReadable called on non-empty stream");
          }
          if (!t.endEmitted) {
            t.ended = true;
            r.nextTick(function () {
              if (!t.endEmitted && t.length === 0) {
                t.endEmitted = true;
                e.readable = false;
                e.emit("end");
              }
            });
          }
        }
        l.prototype.read = function (e) {
          u("read", e);
          var t = this._readableState;
          var r = e;
          if (!h.isNumber(e) || e > 0) {
            t.emittedReadable = false;
          }
          if (e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended)) {
            u("read: emitReadable", t.length, t.ended);
            if (t.length === 0 && t.ended) {
              y(this);
            } else {
              g(this);
            }
            return null;
          }
          if ((e = p(e, t)) === 0 && t.ended) {
            if (t.length === 0) {
              y(this);
            }
            return null;
          }
          var n;
          var i = t.needReadable;
          u("need readable", i);
          if (t.length === 0 || t.length - e < t.highWaterMark) {
            u("length less than watermark", i = true);
          }
          if (t.ended || t.reading) {
            u("reading or ended", i = false);
          }
          if (i) {
            u("do read");
            t.reading = true;
            t.sync = true;
            if (t.length === 0) {
              t.needReadable = true;
            }
            this._read(t.highWaterMark);
            t.sync = false;
          }
          if (i && !t.reading) {
            e = p(r, t);
          }
          n = e > 0 ? v(e, t) : null;
          if (h.isNull(n)) {
            t.needReadable = true;
            e = 0;
          }
          t.length -= e;
          if (t.length === 0 && !t.ended) {
            t.needReadable = true;
          }
          if (r !== e && t.ended && t.length === 0) {
            y(this);
          }
          if (!h.isNull(n)) {
            this.emit("data", n);
          }
          return n;
        };
        l.prototype._read = function (e) {
          this.emit("error", new Error("not implemented"));
        };
        l.prototype.pipe = function (e, t) {
          var i = this;
          var s = this._readableState;
          switch (s.pipesCount) {
            case 0:
              s.pipes = e;
              break;
            case 1:
              s.pipes = [s.pipes, e];
              break;
            default:
              s.pipes.push(e);
          }
          s.pipesCount += 1;
          u("pipe count=%d opts=%j", s.pipesCount, t);
          var o = (!t || t.end !== false) && e !== r.stdout && e !== r.stderr ? f : c;
          function h(e) {
            u("onunpipe");
            if (e === i) {
              c();
            }
          }
          function f() {
            u("onend");
            e.end();
          }
          if (s.endEmitted) {
            r.nextTick(o);
          } else {
            i.once("end", o);
          }
          e.on("unpipe", h);
          var l = function (e) {
            return function () {
              var t = e._readableState;
              u("pipeOnDrain", t.awaitDrain);
              if (t.awaitDrain) {
                t.awaitDrain--;
              }
              if (t.awaitDrain === 0 && a.listenerCount(e, "data")) {
                t.flowing = true;
                b(e);
              }
            };
          }(i);
          function c() {
            u("cleanup");
            e.removeListener("close", g);
            e.removeListener("finish", _);
            e.removeListener("drain", l);
            e.removeListener("error", p);
            e.removeListener("unpipe", h);
            i.removeListener("end", f);
            i.removeListener("end", c);
            i.removeListener("data", d);
            if (!!s.awaitDrain && (!e._writableState || !!e._writableState.needDrain)) {
              l();
            }
          }
          function d(t) {
            u("ondata");
            if (e.write(t) === false) {
              u("false write response, pause", i._readableState.awaitDrain);
              i._readableState.awaitDrain++;
              i.pause();
            }
          }
          function p(t) {
            u("onerror", t);
            v();
            e.removeListener("error", p);
            if (a.listenerCount(e, "error") === 0) {
              e.emit("error", t);
            }
          }
          function g() {
            e.removeListener("finish", _);
            v();
          }
          function _() {
            u("onfinish");
            e.removeListener("close", g);
            v();
          }
          function v() {
            u("unpipe");
            i.unpipe(e);
          }
          e.on("drain", l);
          i.on("data", d);
          if (e._events && e._events.error) {
            if (n(e._events.error)) {
              e._events.error.unshift(p);
            } else {
              e._events.error = [p, e._events.error];
            }
          } else {
            e.on("error", p);
          }
          e.once("close", g);
          e.once("finish", _);
          e.emit("pipe", i);
          if (!s.flowing) {
            u("pipe resume");
            i.resume();
          }
          return e;
        };
        l.prototype.unpipe = function (e) {
          var t = this._readableState;
          if (t.pipesCount === 0) {
            return this;
          }
          if (t.pipesCount === 1) {
            if (!e || e === t.pipes) {
              e ||= t.pipes;
              t.pipes = null;
              t.pipesCount = 0;
              t.flowing = false;
              if (e) {
                e.emit("unpipe", this);
              }
            }
            return this;
          }
          if (!e) {
            var r = t.pipes;
            var n = t.pipesCount;
            t.pipes = null;
            t.pipesCount = 0;
            t.flowing = false;
            for (var i = 0; i < n; i++) {
              r[i].emit("unpipe", this);
            }
            return this;
          }
          if ((i = function (e, t) {
            for (var r = 0, n = e.length; r < n; r++) {
              if (e[r] === t) {
                return r;
              }
            }
            return -1;
          }(t.pipes, e)) !== -1) {
            t.pipes.splice(i, 1);
            t.pipesCount -= 1;
            if (t.pipesCount === 1) {
              t.pipes = t.pipes[0];
            }
            e.emit("unpipe", this);
          }
          return this;
        };
        l.prototype.on = function (e, t) {
          var n = o.prototype.on.call(this, e, t);
          if (e === "data" && this._readableState.flowing !== false) {
            this.resume();
          }
          if (e === "readable" && this.readable) {
            var i = this._readableState;
            if (!i.readableListening) {
              i.readableListening = true;
              i.emittedReadable = false;
              i.needReadable = true;
              if (i.reading) {
                if (i.length) {
                  g(this);
                }
              } else {
                var a = this;
                r.nextTick(function () {
                  u("readable nexttick read 0");
                  a.read(0);
                });
              }
            }
          }
          return n;
        };
        l.prototype.addListener = l.prototype.on;
        l.prototype.resume = function () {
          var e = this._readableState;
          if (!e.flowing) {
            u("resume");
            e.flowing = true;
            if (!e.reading) {
              u("resume read 0");
              this.read(0);
            }
            (function (e, t) {
              if (!t.resumeScheduled) {
                t.resumeScheduled = true;
                r.nextTick(function () {
                  (function (e, t) {
                    t.resumeScheduled = false;
                    e.emit("resume");
                    b(e);
                    if (t.flowing && !t.reading) {
                      e.read(0);
                    }
                  })(e, t);
                });
              }
            })(this, e);
          }
          return this;
        };
        l.prototype.pause = function () {
          u("call pause flowing=%j", this._readableState.flowing);
          if (this._readableState.flowing !== false) {
            u("pause");
            this._readableState.flowing = false;
            this.emit("pause");
          }
          return this;
        };
        l.prototype.wrap = function (e) {
          var t = this._readableState;
          var r = false;
          var n = this;
          e.on("end", function () {
            u("wrapped end");
            if (t.decoder && !t.ended) {
              var e = t.decoder.end();
              if (e && e.length) {
                n.push(e);
              }
            }
            n.push(null);
          });
          e.on("data", function (i) {
            u("wrapped data");
            if (t.decoder) {
              i = t.decoder.write(i);
            }
            if (i && (t.objectMode || i.length)) {
              if (!n.push(i)) {
                r = true;
                e.pause();
              }
            }
          });
          for (var i in e) {
            if (h.isFunction(e[i]) && h.isUndefined(this[i])) {
              this[i] = function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              }(i);
            }
          }
          (function (e, t) {
            for (var r = 0, n = e.length; r < n; r++) {
              t(e[r], r);
            }
          })(["error", "close", "destroy", "pause", "resume"], function (t) {
            e.on(t, n.emit.bind(n, t));
          });
          n._read = function (t) {
            u("wrapped _read", t);
            if (r) {
              r = false;
              e.resume();
            }
          };
          return n;
        };
        l._fromList = v;
      }).call(this, e("_process"));
    }, {
      "./_stream_duplex": 19,
      _process: 73,
      buffer: 7,
      "core-util-is": 9,
      events: 14,
      inherits: 26,
      isarray: 29,
      stream: 82,
      "string_decoder/": 98,
      util: 4
    }],
    22: [function (e, t, r) {
      t.exports = s;
      var n = e("./_stream_duplex");
      var i = e("core-util-is");
      function a(e, t) {
        this.afterTransform = function (e, r) {
          return function (e, t, r) {
            var n = e._transformState;
            n.transforming = false;
            var a = n.writecb;
            if (!a) {
              return e.emit("error", new Error("no writecb in Transform class"));
            }
            n.writechunk = null;
            n.writecb = null;
            if (!i.isNullOrUndefined(r)) {
              e.push(r);
            }
            if (a) {
              a(t);
            }
            var s = e._readableState;
            s.reading = false;
            if (s.needReadable || s.length < s.highWaterMark) {
              e._read(s.highWaterMark);
            }
          }(t, e, r);
        };
        this.needTransform = false;
        this.transforming = false;
        this.writecb = null;
        this.writechunk = null;
      }
      function s(e) {
        if (!(this instanceof s)) {
          return new s(e);
        }
        n.call(this, e);
        this._transformState = new a(e, this);
        var t = this;
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        this.once("prefinish", function () {
          if (i.isFunction(this._flush)) {
            this._flush(function (e) {
              o(t, e);
            });
          } else {
            o(t);
          }
        });
      }
      function o(e, t) {
        if (t) {
          return e.emit("error", t);
        }
        var r = e._writableState;
        var n = e._transformState;
        if (r.length) {
          throw new Error("calling transform done when ws.length != 0");
        }
        if (n.transforming) {
          throw new Error("calling transform done when still transforming");
        }
        return e.push(null);
      }
      i.inherits = e("inherits");
      i.inherits(s, n);
      s.prototype.push = function (e, t) {
        this._transformState.needTransform = false;
        return n.prototype.push.call(this, e, t);
      };
      s.prototype._transform = function (e, t, r) {
        throw new Error("not implemented");
      };
      s.prototype._write = function (e, t, r) {
        var n = this._transformState;
        n.writecb = r;
        n.writechunk = e;
        n.writeencoding = t;
        if (!n.transforming) {
          var i = this._readableState;
          if (n.needTransform || i.needReadable || i.length < i.highWaterMark) {
            this._read(i.highWaterMark);
          }
        }
      };
      s.prototype._read = function (e) {
        var t = this._transformState;
        if (i.isNull(t.writechunk) || !t.writecb || t.transforming) {
          t.needTransform = true;
        } else {
          t.transforming = true;
          this._transform(t.writechunk, t.writeencoding, t.afterTransform);
        }
      };
    }, {
      "./_stream_duplex": 19,
      "core-util-is": 9,
      inherits: 26
    }],
    23: [function (e, t, r) {
      (function (r) {
        t.exports = h;
        var n = e("buffer").Buffer;
        h.WritableState = o;
        var i = e("core-util-is");
        i.inherits = e("inherits");
        var a = e("stream");
        function s(e, t, r) {
          this.chunk = e;
          this.encoding = t;
          this.callback = r;
        }
        function o(t, n) {
          var i = e("./_stream_duplex");
          var a = (t = t || {}).highWaterMark;
          var s = t.objectMode ? 16 : 16384;
          this.highWaterMark = a || a === 0 ? a : s;
          this.objectMode = !!t.objectMode;
          if (n instanceof i) {
            this.objectMode = this.objectMode || !!t.writableObjectMode;
          }
          this.highWaterMark = ~~this.highWaterMark;
          this.needDrain = false;
          this.ending = false;
          this.ended = false;
          this.finished = false;
          var o = t.decodeStrings === false;
          this.decodeStrings = !o;
          this.defaultEncoding = t.defaultEncoding || "utf8";
          this.length = 0;
          this.writing = false;
          this.corked = 0;
          this.sync = true;
          this.bufferProcessing = false;
          this.onwrite = function (e) {
            (function (e, t) {
              var n = e._writableState;
              var i = n.sync;
              var a = n.writecb;
              (function (e) {
                e.writing = false;
                e.writecb = null;
                e.length -= e.writelen;
                e.writelen = 0;
              })(n);
              if (t) {
                (function (e, t, n, i, a) {
                  if (n) {
                    r.nextTick(function () {
                      t.pendingcb--;
                      a(i);
                    });
                  } else {
                    t.pendingcb--;
                    a(i);
                  }
                  e._writableState.errorEmitted = true;
                  e.emit("error", i);
                })(e, n, i, t, a);
              } else {
                var s = c(e, n);
                if (!s && !n.corked && !n.bufferProcessing && !!n.buffer.length) {
                  l(e, n);
                }
                if (i) {
                  r.nextTick(function () {
                    f(e, n, s, a);
                  });
                } else {
                  f(e, n, s, a);
                }
              }
            })(n, e);
          };
          this.writecb = null;
          this.writelen = 0;
          this.buffer = [];
          this.pendingcb = 0;
          this.prefinished = false;
          this.errorEmitted = false;
        }
        function h(t) {
          var r = e("./_stream_duplex");
          if (!(this instanceof h) && !(this instanceof r)) {
            return new h(t);
          }
          this._writableState = new o(t, this);
          this.writable = true;
          a.call(this);
        }
        function u(e, t, r, n, i, a, s) {
          t.writelen = n;
          t.writecb = s;
          t.writing = true;
          t.sync = true;
          if (r) {
            e._writev(i, t.onwrite);
          } else {
            e._write(i, a, t.onwrite);
          }
          t.sync = false;
        }
        function f(e, t, r, n) {
          if (!r) {
            (function (e, t) {
              if (t.length === 0 && t.needDrain) {
                t.needDrain = false;
                e.emit("drain");
              }
            })(e, t);
          }
          t.pendingcb--;
          n();
          p(e, t);
        }
        function l(e, t) {
          t.bufferProcessing = true;
          if (e._writev && t.buffer.length > 1) {
            var r = [];
            for (var n = 0; n < t.buffer.length; n++) {
              r.push(t.buffer[n].callback);
            }
            t.pendingcb++;
            u(e, t, true, t.length, t.buffer, "", function (e) {
              for (var n = 0; n < r.length; n++) {
                t.pendingcb--;
                r[n](e);
              }
            });
            t.buffer = [];
          } else {
            for (n = 0; n < t.buffer.length; n++) {
              var i = t.buffer[n];
              var a = i.chunk;
              var s = i.encoding;
              var o = i.callback;
              var h = t.objectMode ? 1 : a.length;
              u(e, t, false, h, a, s, o);
              if (t.writing) {
                n++;
                break;
              }
            }
            if (n < t.buffer.length) {
              t.buffer = t.buffer.slice(n);
            } else {
              t.buffer.length = 0;
            }
          }
          t.bufferProcessing = false;
        }
        function c(e, t) {
          return t.ending && t.length === 0 && !t.finished && !t.writing;
        }
        function d(e, t) {
          if (!t.prefinished) {
            t.prefinished = true;
            e.emit("prefinish");
          }
        }
        function p(e, t) {
          var r = c(0, t);
          if (r) {
            if (t.pendingcb === 0) {
              d(e, t);
              t.finished = true;
              e.emit("finish");
            } else {
              d(e, t);
            }
          }
          return r;
        }
        i.inherits(h, a);
        h.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe. Not readable."));
        };
        h.prototype.write = function (e, t, a) {
          var o = this._writableState;
          var h = false;
          if (i.isFunction(t)) {
            a = t;
            t = null;
          }
          if (i.isBuffer(e)) {
            t = "buffer";
          } else {
            t ||= o.defaultEncoding;
          }
          if (!i.isFunction(a)) {
            a = function () {};
          }
          if (o.ended) {
            (function (e, t, n) {
              var i = new Error("write after end");
              e.emit("error", i);
              r.nextTick(function () {
                n(i);
              });
            })(this, 0, a);
          } else if (function (e, t, n, a) {
            var s = true;
            if (!i.isBuffer(n) && !i.isString(n) && !i.isNullOrUndefined(n) && !t.objectMode) {
              var o = new TypeError("Invalid non-string/buffer chunk");
              e.emit("error", o);
              r.nextTick(function () {
                a(o);
              });
              s = false;
            }
            return s;
          }(this, o, e, a)) {
            o.pendingcb++;
            h = function (e, t, r, a, o) {
              r = function (e, t, r) {
                if (!e.objectMode && e.decodeStrings !== false && i.isString(t)) {
                  t = new n(t, r);
                }
                return t;
              }(t, r, a);
              if (i.isBuffer(r)) {
                a = "buffer";
              }
              var h = t.objectMode ? 1 : r.length;
              t.length += h;
              var f = t.length < t.highWaterMark;
              if (!f) {
                t.needDrain = true;
              }
              if (t.writing || t.corked) {
                t.buffer.push(new s(r, a, o));
              } else {
                u(e, t, false, h, r, a, o);
              }
              return f;
            }(this, o, e, t, a);
          }
          return h;
        };
        h.prototype.cork = function () {
          this._writableState.corked++;
        };
        h.prototype.uncork = function () {
          var e = this._writableState;
          if (e.corked) {
            e.corked--;
            if (!e.writing && !e.corked && !e.finished && !e.bufferProcessing && !!e.buffer.length) {
              l(this, e);
            }
          }
        };
        h.prototype._write = function (e, t, r) {
          r(new Error("not implemented"));
        };
        h.prototype._writev = null;
        h.prototype.end = function (e, t, n) {
          var a = this._writableState;
          if (i.isFunction(e)) {
            n = e;
            e = null;
            t = null;
          } else if (i.isFunction(t)) {
            n = t;
            t = null;
          }
          if (!i.isNullOrUndefined(e)) {
            this.write(e, t);
          }
          if (a.corked) {
            a.corked = 1;
            this.uncork();
          }
          if (!a.ending && !a.finished) {
            (function (e, t, n) {
              t.ending = true;
              p(e, t);
              if (n) {
                if (t.finished) {
                  r.nextTick(n);
                } else {
                  e.once("finish", n);
                }
              }
              t.ended = true;
            })(this, a, n);
          }
        };
      }).call(this, e("_process"));
    }, {
      "./_stream_duplex": 19,
      _process: 73,
      buffer: 7,
      "core-util-is": 9,
      inherits: 26,
      stream: 82
    }],
    24: [function (e, t, r) {
      (function (n) {
        (r = t.exports = e("./lib/_stream_readable.js")).Stream = e("stream");
        r.Readable = r;
        r.Writable = e("./lib/_stream_writable.js");
        r.Duplex = e("./lib/_stream_duplex.js");
        r.Transform = e("./lib/_stream_transform.js");
        r.PassThrough = e("./lib/_stream_passthrough.js");
        if (!n.browser && n.env.READABLE_STREAM === "disable") {
          t.exports = e("stream");
        }
      }).call(this, e("_process"));
    }, {
      "./lib/_stream_duplex.js": 19,
      "./lib/_stream_passthrough.js": 20,
      "./lib/_stream_readable.js": 21,
      "./lib/_stream_transform.js": 22,
      "./lib/_stream_writable.js": 23,
      _process: 73,
      stream: 82
    }],
    25: [function (e, t, r) {
      r.read = function (e, t, r, n, i) {
        var a;
        var s;
        var o = i * 8 - n - 1;
        var h = (1 << o) - 1;
        var u = h >> 1;
        var f = -7;
        var l = r ? i - 1 : 0;
        var c = r ? -1 : 1;
        var d = e[t + l];
        l += c;
        a = d & (1 << -f) - 1;
        d >>= -f;
        f += o;
        for (; f > 0; f -= 8) {
          a = a * 256 + e[t + l];
          l += c;
        }
        s = a & (1 << -f) - 1;
        a >>= -f;
        f += n;
        for (; f > 0; f -= 8) {
          s = s * 256 + e[t + l];
          l += c;
        }
        if (a === 0) {
          a = 1 - u;
        } else {
          if (a === h) {
            if (s) {
              return NaN;
            } else {
              return (d ? -1 : 1) * Infinity;
            }
          }
          s += Math.pow(2, n);
          a -= u;
        }
        return (d ? -1 : 1) * s * Math.pow(2, a - n);
      };
      r.write = function (e, t, r, n, i, a) {
        var s;
        var o;
        var h;
        var u = a * 8 - i - 1;
        var f = (1 << u) - 1;
        var l = f >> 1;
        var c = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var d = n ? 0 : a - 1;
        var p = n ? 1 : -1;
        var g = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        t = Math.abs(t);
        if (isNaN(t) || t === Infinity) {
          o = isNaN(t) ? 1 : 0;
          s = f;
        } else {
          s = Math.floor(Math.log(t) / Math.LN2);
          if (t * (h = Math.pow(2, -s)) < 1) {
            s--;
            h *= 2;
          }
          if ((t += s + l >= 1 ? c / h : c * Math.pow(2, 1 - l)) * h >= 2) {
            s++;
            h /= 2;
          }
          if (s + l >= f) {
            o = 0;
            s = f;
          } else if (s + l >= 1) {
            o = (t * h - 1) * Math.pow(2, i);
            s += l;
          } else {
            o = t * Math.pow(2, l - 1) * Math.pow(2, i);
            s = 0;
          }
        }
        for (; i >= 8; i -= 8) {
          e[r + d] = o & 255;
          d += p;
          o /= 256;
        }
        s = s << i | o;
        u += i;
        for (; u > 0; u -= 8) {
          e[r + d] = s & 255;
          d += p;
          s /= 256;
        }
        e[r + d - p] |= g * 128;
      };
    }, {}],
    26: [function (e, t, r) {
      if (typeof Object.create == "function") {
        t.exports = function (e, t) {
          e.super_ = t;
          e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        t.exports = function (e, t) {
          e.super_ = t;
          var r = function () {};
          r.prototype = t.prototype;
          e.prototype = new r();
          e.prototype.constructor = e;
        };
      }
    }, {}],
    27: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        var t = new Array(e);
        for (var r = 0; r < e; ++r) {
          t[r] = r;
        }
        return t;
      };
    }, {}],
    28: [function (e, t, r) {
      function n(e) {
        return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
      }
      t.exports = function (e) {
        return e != null && (n(e) || function (e) {
          return typeof e.readFloatLE == "function" && typeof e.slice == "function" && n(e.slice(0, 0));
        }(e) || !!e._isBuffer);
      };
    }, {}],
    29: [function (e, t, r) {
      t.exports = Array.isArray || function (e) {
        return Object.prototype.toString.call(e) == "[object Array]";
      };
    }, {}],
    30: [function (e, t, r) {
      var n = e("./lib/encoder");
      var i = e("./lib/decoder");
      t.exports = {
        encode: n,
        decode: i
      };
    }, {
      "./lib/decoder": 31,
      "./lib/encoder": 32
    }],
    31: [function (e, t, r) {
      (function (e) {
        var r = function () {
          "use strict";

          var e = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
          var t = 4017;
          var r = 799;
          var n = 3406;
          var i = 2276;
          var a = 1567;
          var s = 3784;
          var o = 5793;
          var h = 2896;
          function u() {}
          function f(e, t) {
            var r;
            var n;
            var i = 0;
            var a = [];
            for (var s = 16; s > 0 && !e[s - 1];) {
              s--;
            }
            a.push({
              children: [],
              index: 0
            });
            var o;
            var h = a[0];
            for (r = 0; r < s; r++) {
              for (n = 0; n < e[r]; n++) {
                for ((h = a.pop()).children[h.index] = t[i]; h.index > 0;) {
                  h = a.pop();
                }
                h.index++;
                a.push(h);
                while (a.length <= r) {
                  a.push(o = {
                    children: [],
                    index: 0
                  });
                  h.children[h.index] = o.children;
                  h = o;
                }
                i++;
              }
              if (r + 1 < s) {
                a.push(o = {
                  children: [],
                  index: 0
                });
                h.children[h.index] = o.children;
                h = o;
              }
            }
            return a[0].children;
          }
          function l(t, r, n, i, a, s, o, h, u) {
            n.precision;
            n.samplesPerLine;
            n.scanLines;
            var f = n.mcusPerLine;
            var l = n.progressive;
            n.maxH;
            n.maxV;
            var c = r;
            var d = 0;
            var p = 0;
            function g() {
              if (p > 0) {
                p--;
                return d >> p & 1;
              }
              if ((d = t[r++]) == 255) {
                var e = t[r++];
                if (e) {
                  throw new Error("unexpected marker: " + (d << 8 | e).toString(16));
                }
              }
              p = 7;
              return d >>> 7;
            }
            function _(e) {
              for (var t, r = e; (t = g()) !== null;) {
                if (typeof (r = r[t]) == "number") {
                  return r;
                }
                if (typeof r != "object") {
                  throw new Error("invalid huffman sequence");
                }
              }
              return null;
            }
            function b(e) {
              var t = 0;
              while (e > 0) {
                var r = g();
                if (r === null) {
                  return;
                }
                t = t << 1 | r;
                e--;
              }
              return t;
            }
            function v(e) {
              var t = b(e);
              if (t >= 1 << e - 1) {
                return t;
              } else {
                return t + (-1 << e) + 1;
              }
            }
            var y = 0;
            var m;
            var w = 0;
            function k(e, t, r, n, i) {
              var a = r % f;
              var s = (r / f | 0) * e.v + n;
              var o = a * e.h + i;
              t(e, e.blocks[s][o]);
            }
            function E(e, t, r) {
              var n = r / e.blocksPerLine | 0;
              var i = r % e.blocksPerLine;
              t(e, e.blocks[n][i]);
            }
            var x;
            var S;
            var A;
            var T;
            var I;
            var L;
            var R = i.length;
            L = l ? s === 0 ? h === 0 ? function (e, t) {
              var r = _(e.huffmanTableDC);
              var n = r === 0 ? 0 : v(r) << u;
              t[0] = e.pred += n;
            } : function (e, t) {
              t[0] |= g() << u;
            } : h === 0 ? function (t, r) {
              if (y > 0) {
                y--;
              } else {
                for (var n = s, i = o; n <= i;) {
                  var a = _(t.huffmanTableAC);
                  var h = a & 15;
                  var f = a >> 4;
                  if (h !== 0) {
                    r[e[n += f]] = v(h) * (1 << u);
                    n++;
                  } else {
                    if (f < 15) {
                      y = b(f) + (1 << f) - 1;
                      break;
                    }
                    n += 16;
                  }
                }
              }
            } : function (t, r) {
              for (var n = s, i = o, a = 0; n <= i;) {
                var h = e[n];
                var f = r[h] < 0 ? -1 : 1;
                switch (w) {
                  case 0:
                    var l = _(t.huffmanTableAC);
                    var c = l & 15;
                    a = l >> 4;
                    if (c === 0) {
                      if (a < 15) {
                        y = b(a) + (1 << a);
                        w = 4;
                      } else {
                        a = 16;
                        w = 1;
                      }
                    } else {
                      if (c !== 1) {
                        throw new Error("invalid ACn encoding");
                      }
                      m = v(c);
                      w = a ? 2 : 3;
                    }
                    continue;
                  case 1:
                  case 2:
                    if (r[h]) {
                      r[h] += (g() << u) * f;
                    } else if (--a === 0) {
                      w = w == 2 ? 3 : 0;
                    }
                    break;
                  case 3:
                    if (r[h]) {
                      r[h] += (g() << u) * f;
                    } else {
                      r[h] = m << u;
                      w = 0;
                    }
                    break;
                  case 4:
                    if (r[h]) {
                      r[h] += (g() << u) * f;
                    }
                }
                n++;
              }
              if (w === 4 && --y === 0) {
                w = 0;
              }
            } : function (t, r) {
              var n = _(t.huffmanTableDC);
              var i = n === 0 ? 0 : v(n);
              r[0] = t.pred += i;
              for (var a = 1; a < 64;) {
                var s = _(t.huffmanTableAC);
                var o = s & 15;
                var h = s >> 4;
                if (o !== 0) {
                  r[e[a += h]] = v(o);
                  a++;
                } else {
                  if (h < 15) {
                    break;
                  }
                  a += 16;
                }
              }
            };
            var j;
            var M;
            var B;
            var C;
            var O = 0;
            M = R == 1 ? i[0].blocksPerLine * i[0].blocksPerColumn : f * n.mcusPerColumn;
            a ||= M;
            while (O < M) {
              for (S = 0; S < R; S++) {
                i[S].pred = 0;
              }
              y = 0;
              if (R == 1) {
                x = i[0];
                I = 0;
                for (; I < a; I++) {
                  E(x, L, O);
                  O++;
                }
              } else {
                for (I = 0; I < a; I++) {
                  for (S = 0; S < R; S++) {
                    B = (x = i[S]).h;
                    C = x.v;
                    A = 0;
                    for (; A < C; A++) {
                      for (T = 0; T < B; T++) {
                        k(x, L, O, A, T);
                      }
                    }
                  }
                  if (++O === M) {
                    break;
                  }
                }
              }
              p = 0;
              if ((j = t[r] << 8 | t[r + 1]) < 65280) {
                throw new Error("marker was not found");
              }
              if (!(j >= 65488) || !(j <= 65495)) {
                break;
              }
              r += 2;
            }
            return r - c;
          }
          function c(e, u) {
            var f;
            var l;
            var c = [];
            var d = u.blocksPerLine;
            var p = u.blocksPerColumn;
            var g = d << 3;
            var _ = new Int32Array(64);
            var b = new Uint8Array(64);
            function v(e, f, l) {
              var c;
              var d;
              var p;
              var g;
              var _;
              var b;
              var v;
              var y;
              var m;
              var w;
              var k = u.quantizationTable;
              var E = l;
              for (w = 0; w < 64; w++) {
                E[w] = e[w] * k[w];
              }
              for (w = 0; w < 8; ++w) {
                var x = w * 8;
                if (E[1 + x] != 0 || E[2 + x] != 0 || E[3 + x] != 0 || E[4 + x] != 0 || E[5 + x] != 0 || E[6 + x] != 0 || E[7 + x] != 0) {
                  c = o * E[0 + x] + 128 >> 8;
                  d = o * E[4 + x] + 128 >> 8;
                  p = E[2 + x];
                  g = E[6 + x];
                  _ = h * (E[1 + x] - E[7 + x]) + 128 >> 8;
                  y = h * (E[1 + x] + E[7 + x]) + 128 >> 8;
                  b = E[3 + x] << 4;
                  v = E[5 + x] << 4;
                  m = c - d + 1 >> 1;
                  c = c + d + 1 >> 1;
                  d = m;
                  m = p * s + g * a + 128 >> 8;
                  p = p * a - g * s + 128 >> 8;
                  g = m;
                  m = _ - v + 1 >> 1;
                  _ = _ + v + 1 >> 1;
                  v = m;
                  m = y + b + 1 >> 1;
                  b = y - b + 1 >> 1;
                  y = m;
                  m = c - g + 1 >> 1;
                  c = c + g + 1 >> 1;
                  g = m;
                  m = d - p + 1 >> 1;
                  d = d + p + 1 >> 1;
                  p = m;
                  m = _ * i + y * n + 2048 >> 12;
                  _ = _ * n - y * i + 2048 >> 12;
                  y = m;
                  m = b * r + v * t + 2048 >> 12;
                  b = b * t - v * r + 2048 >> 12;
                  v = m;
                  E[0 + x] = c + y;
                  E[7 + x] = c - y;
                  E[1 + x] = d + v;
                  E[6 + x] = d - v;
                  E[2 + x] = p + b;
                  E[5 + x] = p - b;
                  E[3 + x] = g + _;
                  E[4 + x] = g - _;
                } else {
                  m = o * E[0 + x] + 512 >> 10;
                  E[0 + x] = m;
                  E[1 + x] = m;
                  E[2 + x] = m;
                  E[3 + x] = m;
                  E[4 + x] = m;
                  E[5 + x] = m;
                  E[6 + x] = m;
                  E[7 + x] = m;
                }
              }
              for (w = 0; w < 8; ++w) {
                var S = w;
                if (E[8 + S] != 0 || E[16 + S] != 0 || E[24 + S] != 0 || E[32 + S] != 0 || E[40 + S] != 0 || E[48 + S] != 0 || E[56 + S] != 0) {
                  c = o * E[0 + S] + 2048 >> 12;
                  d = o * E[32 + S] + 2048 >> 12;
                  p = E[16 + S];
                  g = E[48 + S];
                  _ = h * (E[8 + S] - E[56 + S]) + 2048 >> 12;
                  y = h * (E[8 + S] + E[56 + S]) + 2048 >> 12;
                  b = E[24 + S];
                  v = E[40 + S];
                  m = c - d + 1 >> 1;
                  c = c + d + 1 >> 1;
                  d = m;
                  m = p * s + g * a + 2048 >> 12;
                  p = p * a - g * s + 2048 >> 12;
                  g = m;
                  m = _ - v + 1 >> 1;
                  _ = _ + v + 1 >> 1;
                  v = m;
                  m = y + b + 1 >> 1;
                  b = y - b + 1 >> 1;
                  y = m;
                  m = c - g + 1 >> 1;
                  c = c + g + 1 >> 1;
                  g = m;
                  m = d - p + 1 >> 1;
                  d = d + p + 1 >> 1;
                  p = m;
                  m = _ * i + y * n + 2048 >> 12;
                  _ = _ * n - y * i + 2048 >> 12;
                  y = m;
                  m = b * r + v * t + 2048 >> 12;
                  b = b * t - v * r + 2048 >> 12;
                  v = m;
                  E[0 + S] = c + y;
                  E[56 + S] = c - y;
                  E[8 + S] = d + v;
                  E[48 + S] = d - v;
                  E[16 + S] = p + b;
                  E[40 + S] = p - b;
                  E[24 + S] = g + _;
                  E[32 + S] = g - _;
                } else {
                  m = o * l[w + 0] + 8192 >> 14;
                  E[0 + S] = m;
                  E[8 + S] = m;
                  E[16 + S] = m;
                  E[24 + S] = m;
                  E[32 + S] = m;
                  E[40 + S] = m;
                  E[48 + S] = m;
                  E[56 + S] = m;
                }
              }
              for (w = 0; w < 64; ++w) {
                var A = 128 + (E[w] + 8 >> 4);
                f[w] = A < 0 ? 0 : A > 255 ? 255 : A;
              }
            }
            for (var y = 0; y < p; y++) {
              var m = y << 3;
              for (f = 0; f < 8; f++) {
                c.push(new Uint8Array(g));
              }
              for (var w = 0; w < d; w++) {
                v(u.blocks[y][w], b, _);
                var k = 0;
                var E = w << 3;
                for (l = 0; l < 8; l++) {
                  var x = c[m + l];
                  for (f = 0; f < 8; f++) {
                    x[E + f] = b[k++];
                  }
                }
              }
            }
            return c;
          }
          function d(e) {
            if (e < 0) {
              return 0;
            } else if (e > 255) {
              return 255;
            } else {
              return e;
            }
          }
          u.prototype = {
            load: function (e) {
              var t = new XMLHttpRequest();
              t.open("GET", e, true);
              t.responseType = "arraybuffer";
              t.onload = function () {
                var e = new Uint8Array(t.response || t.mozResponseArrayBuffer);
                this.parse(e);
                if (this.onload) {
                  this.onload();
                }
              }.bind(this);
              t.send(null);
            },
            parse: function (t) {
              var r = 0;
              t.length;
              function n() {
                var e = t[r] << 8 | t[r + 1];
                r += 2;
                return e;
              }
              function i() {
                var e = n();
                var i = t.subarray(r, r + e - 2);
                r += i.length;
                return i;
              }
              function a(e) {
                var t;
                var r;
                var n = 0;
                var i = 0;
                for (r in e.components) {
                  if (e.components.hasOwnProperty(r)) {
                    if (n < (t = e.components[r]).h) {
                      n = t.h;
                    }
                    if (i < t.v) {
                      i = t.v;
                    }
                  }
                }
                var a = Math.ceil(e.samplesPerLine / 8 / n);
                var s = Math.ceil(e.scanLines / 8 / i);
                for (r in e.components) {
                  if (e.components.hasOwnProperty(r)) {
                    t = e.components[r];
                    var o = Math.ceil(Math.ceil(e.samplesPerLine / 8) * t.h / n);
                    var h = Math.ceil(Math.ceil(e.scanLines / 8) * t.v / i);
                    var u = a * t.h;
                    for (var f = s * t.v, l = [], c = 0; c < f; c++) {
                      var d = [];
                      for (var p = 0; p < u; p++) {
                        d.push(new Int32Array(64));
                      }
                      l.push(d);
                    }
                    t.blocksPerLine = o;
                    t.blocksPerColumn = h;
                    t.blocks = l;
                  }
                }
                e.maxH = n;
                e.maxV = i;
                e.mcusPerLine = a;
                e.mcusPerColumn = s;
              }
              var s;
              var o;
              var h = null;
              var u = null;
              var d = [];
              var p = [];
              var g = [];
              var _ = [];
              var b = n();
              if (b != 65496) {
                throw new Error("SOI not found");
              }
              for (b = n(); b != 65497;) {
                switch (b) {
                  case 65280:
                    break;
                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var v = i();
                    if (b === 65504 && v[0] === 74 && v[1] === 70 && v[2] === 73 && v[3] === 70 && v[4] === 0) {
                      h = {
                        version: {
                          major: v[5],
                          minor: v[6]
                        },
                        densityUnits: v[7],
                        xDensity: v[8] << 8 | v[9],
                        yDensity: v[10] << 8 | v[11],
                        thumbWidth: v[12],
                        thumbHeight: v[13],
                        thumbData: v.subarray(14, 14 + v[12] * 3 * v[13])
                      };
                    }
                    if (b === 65518 && v[0] === 65 && v[1] === 100 && v[2] === 111 && v[3] === 98 && v[4] === 101 && v[5] === 0) {
                      u = {
                        version: v[6],
                        flags0: v[7] << 8 | v[8],
                        flags1: v[9] << 8 | v[10],
                        transformCode: v[11]
                      };
                    }
                    break;
                  case 65499:
                    for (var y = n() + r - 2; r < y;) {
                      var m = t[r++];
                      var w = new Int32Array(64);
                      if (m >> 4) {
                        if (m >> 4 != 1) {
                          throw new Error("DQT: invalid table spec");
                        }
                        for (F = 0; F < 64; F++) {
                          w[e[F]] = n();
                        }
                      } else {
                        for (F = 0; F < 64; F++) {
                          w[e[F]] = t[r++];
                        }
                      }
                      d[m & 15] = w;
                    }
                    break;
                  case 65472:
                  case 65473:
                  case 65474:
                    n();
                    (s = {}).extended = b === 65473;
                    s.progressive = b === 65474;
                    s.precision = t[r++];
                    s.scanLines = n();
                    s.samplesPerLine = n();
                    s.components = {};
                    s.componentsOrder = [];
                    var k;
                    var E = t[r++];
                    for (U = 0; U < E; U++) {
                      k = t[r];
                      var x = t[r + 1] >> 4;
                      var S = t[r + 1] & 15;
                      var A = t[r + 2];
                      s.componentsOrder.push(k);
                      s.components[k] = {
                        h: x,
                        v: S,
                        quantizationIdx: A
                      };
                      r += 3;
                    }
                    a(s);
                    p.push(s);
                    break;
                  case 65476:
                    var T = n();
                    for (U = 2; U < T;) {
                      var I = t[r++];
                      var L = new Uint8Array(16);
                      var R = 0;
                      for (F = 0; F < 16; F++, r++) {
                        R += L[F] = t[r];
                      }
                      var j = new Uint8Array(R);
                      for (F = 0; F < R; F++, r++) {
                        j[F] = t[r];
                      }
                      U += 17 + R;
                      (I >> 4 ? g : _)[I & 15] = f(L, j);
                    }
                    break;
                  case 65501:
                    n();
                    o = n();
                    break;
                  case 65498:
                    n();
                    var M = t[r++];
                    var B = [];
                    for (U = 0; U < M; U++) {
                      Z = s.components[t[r++]];
                      var C = t[r++];
                      Z.huffmanTableDC = _[C >> 4];
                      Z.huffmanTableAC = g[C & 15];
                      B.push(Z);
                    }
                    var O = t[r++];
                    var D = t[r++];
                    var N = t[r++];
                    var z = l(t, r, s, B, o, O, D, N >> 4, N & 15);
                    r += z;
                    break;
                  default:
                    if (t[r - 3] == 255 && t[r - 2] >= 192 && t[r - 2] <= 254) {
                      r -= 3;
                      break;
                    }
                    throw new Error("unknown JPEG marker " + b.toString(16));
                }
                b = n();
              }
              if (p.length != 1) {
                throw new Error("only single frame JPEGs supported");
              }
              for (var U = 0; U < p.length; U++) {
                var P = p[U].components;
                for (var F in P) {
                  P[F].quantizationTable = d[P[F].quantizationIdx];
                  delete P[F].quantizationIdx;
                }
              }
              this.width = s.samplesPerLine;
              this.height = s.scanLines;
              this.jfif = h;
              this.adobe = u;
              this.components = [];
              for (U = 0; U < s.componentsOrder.length; U++) {
                var Z = s.components[s.componentsOrder[U]];
                this.components.push({
                  lines: c(0, Z),
                  scaleX: Z.h / s.maxH,
                  scaleY: Z.v / s.maxV
                });
              }
            },
            getData: function (e, t) {
              var r;
              var n;
              var i;
              var a;
              var s;
              var o;
              var h;
              var u;
              var f;
              var l;
              var c;
              var p;
              var g;
              var _;
              var b;
              var v;
              var y;
              var m;
              var w;
              var k;
              var E;
              var x = this.width / e;
              var S = this.height / t;
              var A = 0;
              var T = e * t * this.components.length;
              var I = new Uint8Array(T);
              switch (this.components.length) {
                case 1:
                  r = this.components[0];
                  l = 0;
                  for (; l < t; l++) {
                    s = r.lines[l * r.scaleY * S | 0];
                    f = 0;
                    for (; f < e; f++) {
                      c = s[f * r.scaleX * x | 0];
                      I[A++] = c;
                    }
                  }
                  break;
                case 2:
                  r = this.components[0];
                  n = this.components[1];
                  l = 0;
                  for (; l < t; l++) {
                    s = r.lines[l * r.scaleY * S | 0];
                    o = n.lines[l * n.scaleY * S | 0];
                    f = 0;
                    for (; f < e; f++) {
                      c = s[f * r.scaleX * x | 0];
                      I[A++] = c;
                      c = o[f * n.scaleX * x | 0];
                      I[A++] = c;
                    }
                  }
                  break;
                case 3:
                  E = true;
                  if (this.adobe && this.adobe.transformCode) {
                    E = true;
                  } else if (this.colorTransform !== undefined) {
                    E = !!this.colorTransform;
                  }
                  r = this.components[0];
                  n = this.components[1];
                  i = this.components[2];
                  l = 0;
                  for (; l < t; l++) {
                    s = r.lines[l * r.scaleY * S | 0];
                    o = n.lines[l * n.scaleY * S | 0];
                    h = i.lines[l * i.scaleY * S | 0];
                    f = 0;
                    for (; f < e; f++) {
                      if (E) {
                        c = s[f * r.scaleX * x | 0];
                        p = o[f * n.scaleX * x | 0];
                        m = d(c + ((g = h[f * i.scaleX * x | 0]) - 128) * 1.402);
                        w = d(c - (p - 128) * 0.3441363 - (g - 128) * 0.71413636);
                        k = d(c + (p - 128) * 1.772);
                      } else {
                        m = s[f * r.scaleX * x | 0];
                        w = o[f * n.scaleX * x | 0];
                        k = h[f * i.scaleX * x | 0];
                      }
                      I[A++] = m;
                      I[A++] = w;
                      I[A++] = k;
                    }
                  }
                  break;
                case 4:
                  if (!this.adobe) {
                    throw "Unsupported color mode (4 components)";
                  }
                  E = false;
                  if (this.adobe && this.adobe.transformCode) {
                    E = true;
                  } else if (this.colorTransform !== undefined) {
                    E = !!this.colorTransform;
                  }
                  r = this.components[0];
                  n = this.components[1];
                  i = this.components[2];
                  a = this.components[3];
                  l = 0;
                  for (; l < t; l++) {
                    s = r.lines[l * r.scaleY * S | 0];
                    o = n.lines[l * n.scaleY * S | 0];
                    h = i.lines[l * i.scaleY * S | 0];
                    u = a.lines[l * a.scaleY * S | 0];
                    f = 0;
                    for (; f < e; f++) {
                      if (E) {
                        c = s[f * r.scaleX * x | 0];
                        p = o[f * n.scaleX * x | 0];
                        g = h[f * i.scaleX * x | 0];
                        _ = u[f * a.scaleX * x | 0];
                        b = 255 - d(c + (g - 128) * 1.402);
                        v = 255 - d(c - (p - 128) * 0.3441363 - (g - 128) * 0.71413636);
                        y = 255 - d(c + (p - 128) * 1.772);
                      } else {
                        b = s[f * r.scaleX * x | 0];
                        v = o[f * n.scaleX * x | 0];
                        y = h[f * i.scaleX * x | 0];
                        _ = u[f * a.scaleX * x | 0];
                      }
                      I[A++] = 255 - b;
                      I[A++] = 255 - v;
                      I[A++] = 255 - y;
                      I[A++] = 255 - _;
                    }
                  }
                  break;
                default:
                  throw "Unsupported color mode";
              }
              return I;
            },
            copyToImageData: function (e) {
              var t;
              var r;
              var n;
              var i;
              var a;
              var s;
              var o;
              var h;
              var u;
              var f = e.width;
              var l = e.height;
              var c = e.data;
              var p = this.getData(f, l);
              var g = 0;
              var _ = 0;
              switch (this.components.length) {
                case 1:
                  for (r = 0; r < l; r++) {
                    for (t = 0; t < f; t++) {
                      n = p[g++];
                      c[_++] = n;
                      c[_++] = n;
                      c[_++] = n;
                      c[_++] = 255;
                    }
                  }
                  break;
                case 3:
                  for (r = 0; r < l; r++) {
                    for (t = 0; t < f; t++) {
                      o = p[g++];
                      h = p[g++];
                      u = p[g++];
                      c[_++] = o;
                      c[_++] = h;
                      c[_++] = u;
                      c[_++] = 255;
                    }
                  }
                  break;
                case 4:
                  for (r = 0; r < l; r++) {
                    for (t = 0; t < f; t++) {
                      a = p[g++];
                      s = p[g++];
                      n = p[g++];
                      o = 255 - d(a * (1 - (i = p[g++]) / 255) + i);
                      h = 255 - d(s * (1 - i / 255) + i);
                      u = 255 - d(n * (1 - i / 255) + i);
                      c[_++] = o;
                      c[_++] = h;
                      c[_++] = u;
                      c[_++] = 255;
                    }
                  }
                  break;
                default:
                  throw "Unsupported color mode";
              }
            }
          };
          return u;
        }();
        t.exports = function (t, n) {
          var i = new Uint8Array(t);
          var a = new r();
          a.parse(i);
          var s = {
            width: a.width,
            height: a.height,
            data: n ? new Uint8Array(a.width * a.height * 4) : new e(a.width * a.height * 4)
          };
          a.copyToImageData(s);
          return s;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      buffer: 7
    }],
    32: [function (e, t, r) {
      (function (e) {
        function r(t) {
          Math.round;
          var r;
          var n;
          var i;
          var a;
          var s;
          var o = Math.floor;
          var h = new Array(64);
          var u = new Array(64);
          var f = new Array(64);
          var l = new Array(64);
          var c = new Array(65535);
          var d = new Array(65535);
          var p = new Array(64);
          var g = new Array(64);
          var _ = [];
          var b = 0;
          var v = 7;
          var y = new Array(64);
          var m = new Array(64);
          var w = new Array(64);
          var k = new Array(256);
          var E = new Array(2048);
          var x = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];
          var S = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
          var A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          var T = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125];
          var I = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250];
          var L = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
          var R = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          var j = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119];
          var M = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
          function B(e, t) {
            var r = 0;
            var n = 0;
            var i = new Array();
            for (var a = 1; a <= 16; a++) {
              for (var s = 1; s <= e[a]; s++) {
                i[t[n]] = [];
                i[t[n]][0] = r;
                i[t[n]][1] = a;
                n++;
                r++;
              }
              r *= 2;
            }
            return i;
          }
          function C(e) {
            var t = e[0];
            for (var r = e[1] - 1; r >= 0;) {
              if (t & 1 << r) {
                b |= 1 << v;
              }
              r--;
              if (--v < 0) {
                if (b == 255) {
                  O(255);
                  O(0);
                } else {
                  O(b);
                }
                v = 7;
                b = 0;
              }
            }
          }
          function O(e) {
            _.push(e);
          }
          function D(e) {
            O(e >> 8 & 255);
            O(e & 255);
          }
          function N(e, t, r, n, i) {
            var a;
            var s = i[0];
            var o = i[240];
            var h = function (e, t) {
              var r;
              var n;
              var i;
              var a;
              var s;
              var o;
              var h;
              var u;
              var f;
              var l;
              var c = 0;
              for (f = 0; f < 8; ++f) {
                r = e[c];
                n = e[c + 1];
                i = e[c + 2];
                a = e[c + 3];
                s = e[c + 4];
                o = e[c + 5];
                h = e[c + 6];
                var d = r + (u = e[c + 7]);
                var g = r - u;
                var _ = n + h;
                var b = n - h;
                var v = i + o;
                var y = i - o;
                var m = a + s;
                var w = a - s;
                var k = d + m;
                var E = d - m;
                var x = _ + v;
                var S = _ - v;
                e[c] = k + x;
                e[c + 4] = k - x;
                var A = (S + E) * 0.707106781;
                e[c + 2] = E + A;
                e[c + 6] = E - A;
                var T = ((k = w + y) - (S = b + g)) * 0.382683433;
                var I = k * 0.5411961 + T;
                var L = S * 1.306562965 + T;
                var R = (x = y + b) * 0.707106781;
                var j = g + R;
                var M = g - R;
                e[c + 5] = M + I;
                e[c + 3] = M - I;
                e[c + 1] = j + L;
                e[c + 7] = j - L;
                c += 8;
              }
              c = 0;
              f = 0;
              for (; f < 8; ++f) {
                r = e[c];
                n = e[c + 8];
                i = e[c + 16];
                a = e[c + 24];
                s = e[c + 32];
                o = e[c + 40];
                h = e[c + 48];
                var B = r + (u = e[c + 56]);
                var C = r - u;
                var O = n + h;
                var D = n - h;
                var N = i + o;
                var z = i - o;
                var U = a + s;
                var P = a - s;
                var F = B + U;
                var Z = B - U;
                var V = O + N;
                var q = O - N;
                e[c] = F + V;
                e[c + 32] = F - V;
                var W = (q + Z) * 0.707106781;
                e[c + 16] = Z + W;
                e[c + 48] = Z - W;
                var H = ((F = P + z) - (q = D + C)) * 0.382683433;
                var G = F * 0.5411961 + H;
                var Y = q * 1.306562965 + H;
                var X = (V = z + D) * 0.707106781;
                var K = C + X;
                var J = C - X;
                e[c + 40] = J + G;
                e[c + 24] = J - G;
                e[c + 8] = K + Y;
                e[c + 56] = K - Y;
                c++;
              }
              for (f = 0; f < 64; ++f) {
                l = e[f] * t[f];
                p[f] = l > 0 ? l + 0.5 | 0 : l - 0.5 | 0;
              }
              return p;
            }(e, t);
            for (var u = 0; u < 64; ++u) {
              g[x[u]] = h[u];
            }
            var f = g[0] - r;
            r = g[0];
            if (f == 0) {
              C(n[0]);
            } else {
              C(n[d[a = 32767 + f]]);
              C(c[a]);
            }
            for (var l = 63; l > 0 && g[l] == 0; l--);
            if (l == 0) {
              C(s);
              return r;
            }
            var _;
            for (var b = 1; b <= l;) {
              var v = b;
              for (; g[b] == 0 && b <= l; ++b);
              var y = b - v;
              if (y >= 16) {
                _ = y >> 4;
                for (var m = 1; m <= _; ++m) {
                  C(o);
                }
                y &= 15;
              }
              a = 32767 + g[b];
              C(i[(y << 4) + d[a]]);
              C(c[a]);
              b++;
            }
            if (l != 63) {
              C(s);
            }
            return r;
          }
          function z(e) {
            if (e <= 0) {
              e = 1;
            }
            if (e > 100) {
              e = 100;
            }
            if (s != e) {
              (function (e) {
                var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];
                for (var r = 0; r < 64; r++) {
                  var n = o((t[r] * e + 50) / 100);
                  if (n < 1) {
                    n = 1;
                  } else if (n > 255) {
                    n = 255;
                  }
                  h[x[r]] = n;
                }
                var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
                for (var a = 0; a < 64; a++) {
                  var s = o((i[a] * e + 50) / 100);
                  if (s < 1) {
                    s = 1;
                  } else if (s > 255) {
                    s = 255;
                  }
                  u[x[a]] = s;
                }
                var c = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379];
                var d = 0;
                for (var p = 0; p < 8; p++) {
                  for (var g = 0; g < 8; g++) {
                    f[d] = 1 / (h[x[d]] * c[p] * c[g] * 8);
                    l[d] = 1 / (u[x[d]] * c[p] * c[g] * 8);
                    d++;
                  }
                }
              })(e < 50 ? Math.floor(5000 / e) : Math.floor(200 - e * 2));
              s = e;
            }
          }
          this.encode = function (t, s) {
            new Date().getTime();
            if (s) {
              z(s);
            }
            _ = new Array();
            b = 0;
            v = 7;
            D(65496);
            D(65504);
            D(16);
            O(74);
            O(70);
            O(73);
            O(70);
            O(0);
            O(1);
            O(1);
            O(0);
            D(1);
            D(1);
            O(0);
            O(0);
            (function () {
              D(65499);
              D(132);
              O(0);
              for (var e = 0; e < 64; e++) {
                O(h[e]);
              }
              O(1);
              for (var t = 0; t < 64; t++) {
                O(u[t]);
              }
            })();
            (function (e, t) {
              D(65472);
              D(17);
              O(8);
              D(t);
              D(e);
              O(3);
              O(1);
              O(17);
              O(0);
              O(2);
              O(17);
              O(1);
              O(3);
              O(17);
              O(1);
            })(t.width, t.height);
            (function () {
              D(65476);
              D(418);
              O(0);
              for (var e = 0; e < 16; e++) {
                O(S[e + 1]);
              }
              for (var t = 0; t <= 11; t++) {
                O(A[t]);
              }
              O(16);
              for (var r = 0; r < 16; r++) {
                O(T[r + 1]);
              }
              for (var n = 0; n <= 161; n++) {
                O(I[n]);
              }
              O(1);
              for (var i = 0; i < 16; i++) {
                O(L[i + 1]);
              }
              for (var a = 0; a <= 11; a++) {
                O(R[a]);
              }
              O(17);
              for (var s = 0; s < 16; s++) {
                O(j[s + 1]);
              }
              for (var o = 0; o <= 161; o++) {
                O(M[o]);
              }
            })();
            D(65498);
            D(12);
            O(3);
            O(1);
            O(0);
            O(2);
            O(17);
            O(3);
            O(17);
            O(0);
            O(63);
            O(0);
            var o = 0;
            var c = 0;
            var d = 0;
            b = 0;
            v = 7;
            this.encode.displayName = "_encode_";
            var p;
            var g;
            var k;
            var x;
            var B;
            var U;
            var P;
            var F;
            var Z;
            var V = t.data;
            var q = t.width;
            for (var W = t.height, H = q * 4, G = 0; G < W;) {
              for (p = 0; p < H;) {
                U = B = H * G + p;
                P = -1;
                F = 0;
                Z = 0;
                for (; Z < 64; Z++) {
                  U = B + (F = Z >> 3) * H + (P = (Z & 7) * 4);
                  if (G + F >= W) {
                    U -= H * (G + 1 + F - W);
                  }
                  if (p + P >= H) {
                    U -= p + P - H + 4;
                  }
                  g = V[U++];
                  k = V[U++];
                  x = V[U++];
                  y[Z] = (E[g] + E[k + 256 | 0] + E[x + 512 | 0] >> 16) - 128;
                  m[Z] = (E[g + 768 | 0] + E[k + 1024 | 0] + E[x + 1280 | 0] >> 16) - 128;
                  w[Z] = (E[g + 1280 | 0] + E[k + 1536 | 0] + E[x + 1792 | 0] >> 16) - 128;
                }
                o = N(y, f, o, r, i);
                c = N(m, l, c, n, a);
                d = N(w, l, d, n, a);
                p += 32;
              }
              G += 8;
            }
            if (v >= 0) {
              var Y = [];
              Y[1] = v + 1;
              Y[0] = (1 << v + 1) - 1;
              C(Y);
            }
            D(65497);
            return new e(_);
          };
          (function () {
            new Date().getTime();
            t ||= 50;
            (function () {
              var e = String.fromCharCode;
              for (var t = 0; t < 256; t++) {
                k[t] = e(t);
              }
            })();
            r = B(S, A);
            n = B(L, R);
            i = B(T, I);
            a = B(j, M);
            (function () {
              var e = 1;
              var t = 2;
              for (var r = 1; r <= 15; r++) {
                for (var n = e; n < t; n++) {
                  d[32767 + n] = r;
                  c[32767 + n] = [];
                  c[32767 + n][1] = r;
                  c[32767 + n][0] = n;
                }
                for (var i = -(t - 1); i <= -e; i++) {
                  d[32767 + i] = r;
                  c[32767 + i] = [];
                  c[32767 + i][1] = r;
                  c[32767 + i][0] = t - 1 + i;
                }
                e <<= 1;
                t <<= 1;
              }
            })();
            (function () {
              for (var e = 0; e < 256; e++) {
                E[e] = e * 19595;
                E[e + 256 | 0] = e * 38470;
                E[e + 512 | 0] = e * 7471 + 32768;
                E[e + 768 | 0] = e * -11059;
                E[e + 1024 | 0] = e * -21709;
                E[e + 1280 | 0] = e * 32768 + 8421375;
                E[e + 1536 | 0] = e * -27439;
                E[e + 1792 | 0] = e * -5329;
              }
            })();
            z(t);
            new Date().getTime();
          })();
        }
        t.exports = function (e, t = 50) {
          return {
            data: new r(t).encode(e, t),
            width: e.width,
            height: e.height
          };
        };
      }).call(this, e("buffer").Buffer);
    }, {
      buffer: 7
    }],
    33: [function (e, t, r) {
      "use strict";

      var n = function () {
        function e(t) {
          function r(e) {
            return Object.prototype.toString.call(e) === "[object Array]";
          }
          this.ranges = [];
          if (typeof t == "string") {
            this.parseString(t);
          } else if (typeof t == "number") {
            this.appendRange(t, t);
          } else if (t instanceof e) {
            this.ranges = t.getRanges();
          } else if (r(t)) {
            for (var n = 0, i = t; n < i.length; n++) {
              var a = i[n];
              if (r(a)) {
                if (a.length !== 2) {
                  throw new TypeError("Invalid array initializer");
                }
                this.appendRange(a[0], a[1]);
              } else {
                if (typeof a != "number") {
                  throw new TypeError("Invalid array initialzer");
                }
                this.append(a);
              }
            }
          } else if (t !== undefined) {
            throw new TypeError("Invalid input");
          }
        }
        e.prototype.parseString = function (e) {
          function t(e) {
            var t = e.match(/^\(?(\-?\d+)/);
            return parseInt(t[1], 10);
          }
          var r = e.replace(/\s/g, "");
          if (r.length) {
            var n;
            for (var i = 0, a = r.split(","); i < a.length; i++) {
              var s = a[i];
              if (n = s.match(/^(\d+|\(\-?\d+\))$/)) {
                var o = t(n[1]);
                this.appendRange(o, o);
              } else {
                if (!(n = s.match(/^(\d+|\(\-?\d+\))?\-(\d+|\(\-?\d+\))?$/))) {
                  throw new SyntaxError("Invalid input");
                }
                var h = n[1] === undefined ? -Infinity : t(n[1]);
                var u = n[2] === undefined ? Infinity : t(n[2]);
                this.appendRange(h, u);
              }
            }
          }
        };
        e.prototype.clone = function () {
          return new e(this);
        };
        e.prototype.append = function (t) {
          if (t === undefined) {
            throw new TypeError("Invalid input");
          }
          if (t instanceof e) {
            for (var r = 0, n = t.ranges; r < n.length; r++) {
              var i = n[r];
              this.appendRange(i[0], i[1]);
            }
            return this;
          }
          return this.append(new e(t));
        };
        e.prototype.appendRange = function (e, t) {
          var r = [e, t];
          if (r[0] > r[1]) {
            r = [r[1], r[0]];
          }
          if (r[0] === Infinity && r[1] === Infinity || r[0] === -Infinity && r[1] === -Infinity) {
            throw new RangeError("Infinity can be used only within an unbounded range segment");
          }
          var n = this.findOverlap(r);
          this.ranges.splice(n.lo, n.count, n.union);
          return this;
        };
        e.prototype.subtract = function (t) {
          if (t === undefined) {
            throw new TypeError("Invalid input");
          }
          if (t instanceof e) {
            for (var r = 0, n = t.ranges; r < n.length; r++) {
              var i = n[r];
              this.subtractRange(i[0], i[1]);
            }
            return this;
          }
          return this.subtract(new e(t));
        };
        e.prototype.subtractRange = function (e, t) {
          var r = [e, t];
          if (r[0] > r[1]) {
            r = [r[1], r[0]];
          }
          var n = this.findOverlap(r);
          if (n.count > 0) {
            var i = [];
            if (this.ranges[n.lo][0] < r[0]) {
              i.push([this.ranges[n.lo][0], r[0] - 1]);
            }
            if (r[1] < this.ranges[n.lo + n.count - 1][1]) {
              i.push([r[1] + 1, this.ranges[n.lo + n.count - 1][1]]);
            }
            this.ranges.splice.apply(this.ranges, [n.lo, n.count].concat(i));
          }
          return this;
        };
        e.prototype.intersect = function (t) {
          if (t === undefined) {
            throw new TypeError("Invalid input");
          }
          if (t instanceof e) {
            var r = [];
            var n = 0;
            for (var i = 0; i < this.ranges.length; i++) {
              var a = this.ranges[i];
              for (var s = n; s < t.ranges.length; s++) {
                var o = t.ranges[s];
                if (a[0] <= o[1] && a[1] >= o[0]) {
                  n = s;
                  var h = Math.max(a[0], o[0]);
                  var u = Math.min(a[1], o[1]);
                  r.push([h, u]);
                } else if (a[1] < o[0]) {
                  break;
                }
              }
            }
            this.ranges = r;
            return this;
          }
          return this.intersect(new e(t));
        };
        e.prototype.findOverlap = function (e) {
          for (var t = this.ranges.length - 1; t >= 0; t--) {
            var r = this.ranges[t];
            var n = undefined;
            if (n = this.calcUnion(r, e)) {
              for (var i = 1, a = undefined; t - i >= 0 && (a = this.calcUnion(n, this.ranges[t - i]));) {
                n = a;
                i++;
              }
              return {
                lo: t + 1 - i,
                count: i,
                union: n
              };
            }
            if (r[1] < e[0]) {
              return {
                lo: t + 1,
                count: 0,
                union: e
              };
            }
          }
          return {
            lo: 0,
            count: 0,
            union: e
          };
        };
        e.prototype.calcUnion = function (e, t) {
          if (e[1] + 1 < t[0] || e[0] - 1 > t[1]) {
            return null;
          } else {
            return [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
          }
        };
        e.prototype.getRanges = function () {
          var e = [];
          for (var t = 0, r = this.ranges; t < r.length; t++) {
            var n = r[t];
            e.push([n[0], n[1]]);
          }
          return e;
        };
        e.prototype.has = function (t) {
          if (t === undefined) {
            throw new TypeError("Invalid input");
          }
          if (t instanceof e) {
            var r = this.ranges.length;
            for (var n = 0, i = t.ranges; n < i.length; n++) {
              var a = i[n];
              var s = undefined;
              for (s = 0; s < r; s++) {
                var o = this.ranges[s];
                if (a[0] >= o[0] && a[1] <= o[1] && a[1] >= o[0] && a[1] <= o[1]) {
                  break;
                }
              }
              if (s === r) {
                return false;
              }
            }
            return true;
          }
          return this.has(new e(t));
        };
        e.prototype.hasRange = function (t, r) {
          return this.has(new e([[t, r]]));
        };
        e.prototype.segmentLength = function () {
          return this.ranges.length;
        };
        e.prototype.length = function () {
          if (this.isUnbounded()) {
            return Infinity;
          }
          var e = 0;
          for (var t = 0, r = this.ranges; t < r.length; t++) {
            var n = r[t];
            e += n[1] - n[0] + 1;
          }
          return e;
        };
        e.prototype.equals = function (t) {
          if (t === undefined) {
            throw new TypeError("Invalid input");
          }
          if (t instanceof e) {
            if (t === this) {
              return true;
            }
            if (this.ranges.length !== t.ranges.length) {
              return false;
            }
            for (var r = 0; r < this.ranges.length; r++) {
              if (this.ranges[r][0] !== t.ranges[r][0] || this.ranges[r][1] !== t.ranges[r][1]) {
                return false;
              }
            }
            return true;
          }
          return this.equals(new e(t));
        };
        e.prototype.isUnbounded = function () {
          return this.ranges.length > 0 && (this.ranges[0][0] === -Infinity || this.ranges[this.ranges.length - 1][1] === Infinity);
        };
        e.prototype.min = function () {
          if (this.ranges.length !== 0) {
            return this.ranges[0][0];
          }
        };
        e.prototype.max = function () {
          if (this.ranges.length !== 0) {
            return this.ranges[this.ranges.length - 1][1];
          }
        };
        e.prototype.shift = function () {
          var e = this.min();
          if (e === -Infinity) {
            throw new RangeError("shift() was invoked on an unbounded MultiRange which contains -Infinity");
          }
          if (e !== undefined) {
            this.subtract(e);
          }
          return e;
        };
        e.prototype.pop = function () {
          var e = this.max();
          if (e === Infinity) {
            throw new RangeError("pop() was invoked on an unbounded MultiRange which contains +Infinity");
          }
          if (e !== undefined) {
            this.subtract(e);
          }
          return e;
        };
        e.prototype.toString = function () {
          function e(e) {
            if (e >= 0) {
              return String(e);
            } else {
              return "(" + e + ")";
            }
          }
          var t = [];
          for (var r = 0, n = this.ranges; r < n.length; r++) {
            var i = n[r];
            if (i[0] === -Infinity) {
              if (i[1] === Infinity) {
                t.push("-");
              } else {
                t.push("-" + e(i[1]));
              }
            } else if (i[1] === Infinity) {
              t.push(e(i[0]) + "-");
            } else if (i[0] == i[1]) {
              t.push(e(i[0]));
            } else {
              t.push(e(i[0]) + "-" + e(i[1]));
            }
          }
          return t.join(",");
        };
        e.prototype.toArray = function () {
          if (this.isUnbounded()) {
            throw new RangeError("You cannot build an array from an unbounded range");
          }
          var e = new Array(this.length());
          var t = 0;
          for (var r = 0, n = this.ranges; r < n.length; r++) {
            for (var i = n[r], a = i[0]; a <= i[1]; a++) {
              e[t++] = a;
            }
          }
          return e;
        };
        e.prototype.getIterator = function () {
          var e = this;
          if (this.isUnbounded()) {
            throw new RangeError("Unbounded ranges cannot be iterated over");
          }
          var t = 0;
          var r = this.ranges[t];
          var n = r ? r[0] : undefined;
          return {
            next: function () {
              if (!r) {
                return {
                  done: true
                };
              }
              var i = n;
              if (++n > r[1]) {
                r = e.ranges[++t];
                n = r ? r[0] : undefined;
              }
              return {
                value: i
              };
            }
          };
        };
        return e;
      }();
      r.MultiRange = n;
      if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
        n.prototype[Symbol.iterator] = n.prototype.getIterator;
      }
      r.multirange = function (e) {
        return new n(e);
      };
    }, {}],
    34: [function (e, t, r) {
      "use strict";

      var n = e("cwise-compiler");
      var i = {
        body: "",
        args: [],
        thisVars: [],
        localVars: []
      };
      function a(e) {
        if (!e) {
          return i;
        }
        for (var t = 0; t < e.args.length; ++t) {
          var r = e.args[t];
          e.args[t] = t === 0 ? {
            name: r,
            lvalue: true,
            rvalue: !!e.rvalue,
            count: e.count || 1
          } : {
            name: r,
            lvalue: false,
            rvalue: true,
            count: 1
          };
        }
        e.thisVars ||= [];
        e.localVars ||= [];
        return e;
      }
      function s(e) {
        var t = [];
        for (var r = 0; r < e.args.length; ++r) {
          t.push("a" + r);
        }
        return new Function("P", ["return function ", e.funcName, "_ndarrayops(", t.join(","), ") {P(", t.join(","), ");return a0}"].join(""))(function (e) {
          return n({
            args: e.args,
            pre: a(e.pre),
            body: a(e.body),
            post: a(e.proc),
            funcName: e.funcName
          });
        }(e));
      }
      var o = {
        add: "+",
        sub: "-",
        mul: "*",
        div: "/",
        mod: "%",
        band: "&",
        bor: "|",
        bxor: "^",
        lshift: "<<",
        rshift: ">>",
        rrshift: ">>>"
      };
      (function () {
        for (var e in o) {
          var t = o[e];
          r[e] = s({
            args: ["array", "array", "array"],
            body: {
              args: ["a", "b", "c"],
              body: "a=b" + t + "c"
            },
            funcName: e
          });
          r[e + "eq"] = s({
            args: ["array", "array"],
            body: {
              args: ["a", "b"],
              body: "a" + t + "=b"
            },
            rvalue: true,
            funcName: e + "eq"
          });
          r[e + "s"] = s({
            args: ["array", "array", "scalar"],
            body: {
              args: ["a", "b", "s"],
              body: "a=b" + t + "s"
            },
            funcName: e + "s"
          });
          r[e + "seq"] = s({
            args: ["array", "scalar"],
            body: {
              args: ["a", "s"],
              body: "a" + t + "=s"
            },
            rvalue: true,
            funcName: e + "seq"
          });
        }
      })();
      var h = {
        not: "!",
        bnot: "~",
        neg: "-",
        recip: "1.0/"
      };
      (function () {
        for (var e in h) {
          var t = h[e];
          r[e] = s({
            args: ["array", "array"],
            body: {
              args: ["a", "b"],
              body: "a=" + t + "b"
            },
            funcName: e
          });
          r[e + "eq"] = s({
            args: ["array"],
            body: {
              args: ["a"],
              body: "a=" + t + "a"
            },
            rvalue: true,
            count: 2,
            funcName: e + "eq"
          });
        }
      })();
      var u = {
        and: "&&",
        or: "||",
        eq: "===",
        neq: "!==",
        lt: "<",
        gt: ">",
        leq: "<=",
        geq: ">="
      };
      (function () {
        for (var e in u) {
          var t = u[e];
          r[e] = s({
            args: ["array", "array", "array"],
            body: {
              args: ["a", "b", "c"],
              body: "a=b" + t + "c"
            },
            funcName: e
          });
          r[e + "s"] = s({
            args: ["array", "array", "scalar"],
            body: {
              args: ["a", "b", "s"],
              body: "a=b" + t + "s"
            },
            funcName: e + "s"
          });
          r[e + "eq"] = s({
            args: ["array", "array"],
            body: {
              args: ["a", "b"],
              body: "a=a" + t + "b"
            },
            rvalue: true,
            count: 2,
            funcName: e + "eq"
          });
          r[e + "seq"] = s({
            args: ["array", "scalar"],
            body: {
              args: ["a", "s"],
              body: "a=a" + t + "s"
            },
            rvalue: true,
            count: 2,
            funcName: e + "seq"
          });
        }
      })();
      var f = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
      (function () {
        for (var e = 0; e < f.length; ++e) {
          var t = f[e];
          r[t] = s({
            args: ["array", "array"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b"],
              body: "a=this_f(b)",
              thisVars: ["this_f"]
            },
            funcName: t
          });
          r[t + "eq"] = s({
            args: ["array"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a"],
              body: "a=this_f(a)",
              thisVars: ["this_f"]
            },
            rvalue: true,
            count: 2,
            funcName: t + "eq"
          });
        }
      })();
      var l = ["max", "min", "atan2", "pow"];
      (function () {
        for (var e = 0; e < l.length; ++e) {
          var t = l[e];
          r[t] = s({
            args: ["array", "array", "array"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b", "c"],
              body: "a=this_f(b,c)",
              thisVars: ["this_f"]
            },
            funcName: t
          });
          r[t + "s"] = s({
            args: ["array", "array", "scalar"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b", "c"],
              body: "a=this_f(b,c)",
              thisVars: ["this_f"]
            },
            funcName: t + "s"
          });
          r[t + "eq"] = s({
            args: ["array", "array"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b"],
              body: "a=this_f(a,b)",
              thisVars: ["this_f"]
            },
            rvalue: true,
            count: 2,
            funcName: t + "eq"
          });
          r[t + "seq"] = s({
            args: ["array", "scalar"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b"],
              body: "a=this_f(a,b)",
              thisVars: ["this_f"]
            },
            rvalue: true,
            count: 2,
            funcName: t + "seq"
          });
        }
      })();
      var c = ["atan2", "pow"];
      (function () {
        for (var e = 0; e < c.length; ++e) {
          var t = c[e];
          r[t + "op"] = s({
            args: ["array", "array", "array"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b", "c"],
              body: "a=this_f(c,b)",
              thisVars: ["this_f"]
            },
            funcName: t + "op"
          });
          r[t + "ops"] = s({
            args: ["array", "array", "scalar"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b", "c"],
              body: "a=this_f(c,b)",
              thisVars: ["this_f"]
            },
            funcName: t + "ops"
          });
          r[t + "opeq"] = s({
            args: ["array", "array"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b"],
              body: "a=this_f(b,a)",
              thisVars: ["this_f"]
            },
            rvalue: true,
            count: 2,
            funcName: t + "opeq"
          });
          r[t + "opseq"] = s({
            args: ["array", "scalar"],
            pre: {
              args: [],
              body: "this_f=Math." + t,
              thisVars: ["this_f"]
            },
            body: {
              args: ["a", "b"],
              body: "a=this_f(b,a)",
              thisVars: ["this_f"]
            },
            rvalue: true,
            count: 2,
            funcName: t + "opseq"
          });
        }
      })();
      r.any = n({
        args: ["array"],
        pre: i,
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          body: "if(a){return true}",
          localVars: [],
          thisVars: []
        },
        post: {
          args: [],
          localVars: [],
          thisVars: [],
          body: "return false"
        },
        funcName: "any"
      });
      r.all = n({
        args: ["array"],
        pre: i,
        body: {
          args: [{
            name: "x",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          body: "if(!x){return false}",
          localVars: [],
          thisVars: []
        },
        post: {
          args: [],
          localVars: [],
          thisVars: [],
          body: "return true"
        },
        funcName: "all"
      });
      r.sum = n({
        args: ["array"],
        pre: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "this_s=0"
        },
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          body: "this_s+=a",
          localVars: [],
          thisVars: ["this_s"]
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "return this_s"
        },
        funcName: "sum"
      });
      r.prod = n({
        args: ["array"],
        pre: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "this_s=1"
        },
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          body: "this_s*=a",
          localVars: [],
          thisVars: ["this_s"]
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "return this_s"
        },
        funcName: "prod"
      });
      r.norm2squared = n({
        args: ["array"],
        pre: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "this_s=0"
        },
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 2
          }],
          body: "this_s+=a*a",
          localVars: [],
          thisVars: ["this_s"]
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "return this_s"
        },
        funcName: "norm2squared"
      });
      r.norm2 = n({
        args: ["array"],
        pre: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "this_s=0"
        },
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 2
          }],
          body: "this_s+=a*a",
          localVars: [],
          thisVars: ["this_s"]
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "return Math.sqrt(this_s)"
        },
        funcName: "norm2"
      });
      r.norminf = n({
        args: ["array"],
        pre: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "this_s=0"
        },
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 4
          }],
          body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
          localVars: [],
          thisVars: ["this_s"]
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "return this_s"
        },
        funcName: "norminf"
      });
      r.norm1 = n({
        args: ["array"],
        pre: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "this_s=0"
        },
        body: {
          args: [{
            name: "a",
            lvalue: false,
            rvalue: true,
            count: 3
          }],
          body: "this_s+=a<0?-a:a",
          localVars: [],
          thisVars: ["this_s"]
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ["this_s"],
          body: "return this_s"
        },
        funcName: "norm1"
      });
      r.sup = n({
        args: ["array"],
        pre: {
          body: "this_h=-Infinity",
          args: [],
          thisVars: ["this_h"],
          localVars: []
        },
        body: {
          body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
          args: [{
            name: "_inline_1_arg0_",
            lvalue: false,
            rvalue: true,
            count: 2
          }],
          thisVars: ["this_h"],
          localVars: []
        },
        post: {
          body: "return this_h",
          args: [],
          thisVars: ["this_h"],
          localVars: []
        }
      });
      r.inf = n({
        args: ["array"],
        pre: {
          body: "this_h=Infinity",
          args: [],
          thisVars: ["this_h"],
          localVars: []
        },
        body: {
          body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
          args: [{
            name: "_inline_1_arg0_",
            lvalue: false,
            rvalue: true,
            count: 2
          }],
          thisVars: ["this_h"],
          localVars: []
        },
        post: {
          body: "return this_h",
          args: [],
          thisVars: ["this_h"],
          localVars: []
        }
      });
      r.argmin = n({
        args: ["index", "array", "shape"],
        pre: {
          body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
          args: [{
            name: "_inline_0_arg0_",
            lvalue: false,
            rvalue: false,
            count: 0
          }, {
            name: "_inline_0_arg1_",
            lvalue: false,
            rvalue: false,
            count: 0
          }, {
            name: "_inline_0_arg2_",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          thisVars: ["this_i", "this_v"],
          localVars: []
        },
        body: {
          body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
          args: [{
            name: "_inline_1_arg0_",
            lvalue: false,
            rvalue: true,
            count: 2
          }, {
            name: "_inline_1_arg1_",
            lvalue: false,
            rvalue: true,
            count: 2
          }],
          thisVars: ["this_i", "this_v"],
          localVars: ["_inline_1_k"]
        },
        post: {
          body: "{return this_i}",
          args: [],
          thisVars: ["this_i"],
          localVars: []
        }
      });
      r.argmax = n({
        args: ["index", "array", "shape"],
        pre: {
          body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
          args: [{
            name: "_inline_0_arg0_",
            lvalue: false,
            rvalue: false,
            count: 0
          }, {
            name: "_inline_0_arg1_",
            lvalue: false,
            rvalue: false,
            count: 0
          }, {
            name: "_inline_0_arg2_",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          thisVars: ["this_i", "this_v"],
          localVars: []
        },
        body: {
          body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
          args: [{
            name: "_inline_1_arg0_",
            lvalue: false,
            rvalue: true,
            count: 2
          }, {
            name: "_inline_1_arg1_",
            lvalue: false,
            rvalue: true,
            count: 2
          }],
          thisVars: ["this_i", "this_v"],
          localVars: ["_inline_1_k"]
        },
        post: {
          body: "{return this_i}",
          args: [],
          thisVars: ["this_i"],
          localVars: []
        }
      });
      r.random = s({
        args: ["array"],
        pre: {
          args: [],
          body: "this_f=Math.random",
          thisVars: ["this_f"]
        },
        body: {
          args: ["a"],
          body: "a=this_f()",
          thisVars: ["this_f"]
        },
        funcName: "random"
      });
      r.assign = s({
        args: ["array", "array"],
        body: {
          args: ["a", "b"],
          body: "a=b"
        },
        funcName: "assign"
      });
      r.assigns = s({
        args: ["array", "scalar"],
        body: {
          args: ["a", "b"],
          body: "a=b"
        },
        funcName: "assigns"
      });
      r.equals = n({
        args: ["array", "array"],
        pre: i,
        body: {
          args: [{
            name: "x",
            lvalue: false,
            rvalue: true,
            count: 1
          }, {
            name: "y",
            lvalue: false,
            rvalue: true,
            count: 1
          }],
          body: "if(x!==y){return false}",
          localVars: [],
          thisVars: []
        },
        post: {
          args: [],
          localVars: [],
          thisVars: [],
          body: "return true"
        },
        funcName: "equals"
      });
    }, {
      "cwise-compiler": 10
    }],
    35: [function (e, t, r) {
      "use strict";

      var n = e("ndarray");
      var i = e("./doConvert.js");
      t.exports = function (e, t) {
        var r = [];
        for (var a = e, s = 1; Array.isArray(a);) {
          r.push(a.length);
          s *= a.length;
          a = a[0];
        }
        if (r.length === 0) {
          return n();
        } else {
          t ||= n(new Float64Array(s), r);
          i(t, e);
          return t;
        }
      };
    }, {
      "./doConvert.js": 36,
      ndarray: 37
    }],
    36: [function (e, t, r) {
      t.exports = e("cwise-compiler")({
        args: ["array", "scalar", "index"],
        pre: {
          body: "{}",
          args: [],
          thisVars: [],
          localVars: []
        },
        body: {
          body: "{\nvar _inline_1_v=_inline_1_arg1_,_inline_1_i\nfor(_inline_1_i=0;_inline_1_i<_inline_1_arg2_.length-1;++_inline_1_i) {\n_inline_1_v=_inline_1_v[_inline_1_arg2_[_inline_1_i]]\n}\n_inline_1_arg0_=_inline_1_v[_inline_1_arg2_[_inline_1_arg2_.length-1]]\n}",
          args: [{
            name: "_inline_1_arg0_",
            lvalue: true,
            rvalue: false,
            count: 1
          }, {
            name: "_inline_1_arg1_",
            lvalue: false,
            rvalue: true,
            count: 1
          }, {
            name: "_inline_1_arg2_",
            lvalue: false,
            rvalue: true,
            count: 4
          }],
          thisVars: [],
          localVars: ["_inline_1_i", "_inline_1_v"]
        },
        post: {
          body: "{}",
          args: [],
          thisVars: [],
          localVars: []
        },
        funcName: "convert",
        blockSize: 64
      });
    }, {
      "cwise-compiler": 10
    }],
    37: [function (e, t, r) {
      var n = e("iota-array");
      var i = e("is-buffer");
      var a = typeof Float64Array != "undefined";
      function s(e, t) {
        return e[0] - t[0];
      }
      function o() {
        var e;
        var t = this.stride;
        var r = new Array(t.length);
        for (e = 0; e < r.length; ++e) {
          r[e] = [Math.abs(t[e]), e];
        }
        r.sort(s);
        var n = new Array(r.length);
        for (e = 0; e < n.length; ++e) {
          n[e] = r[e][1];
        }
        return n;
      }
      function h(e, t) {
        var r = ["View", t, "d", e].join("");
        if (t < 0) {
          r = "View_Nil" + e;
        }
        var i = e === "generic";
        if (t === -1) {
          var a = "function " + r + "(a){this.data=a;};var proto=" + r + ".prototype;proto.dtype='" + e + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + r + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + r + "(a){return new " + r + "(a);}";
          return new Function(a)();
        }
        if (t === 0) {
          a = "function " + r + "(a,d) {this.data = a;this.offset = d};var proto=" + r + ".prototype;proto.dtype='" + e + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + r + "_copy() {return new " + r + "(this.data,this.offset)};proto.pick=function " + r + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + r + "_get(){return " + (i ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + r + "_set(v){return " + (i ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + r + "(a,b,c,d){return new " + r + "(a,d)}";
          return new Function("TrivialArray", a)(u[e][0]);
        }
        a = ["'use strict'"];
        var s = n(t);
        var h = s.map(function (e) {
          return "i" + e;
        });
        var f = "this.offset+" + s.map(function (e) {
          return "this.stride[" + e + "]*i" + e;
        }).join("+");
        var l = s.map(function (e) {
          return "b" + e;
        }).join(",");
        var c = s.map(function (e) {
          return "c" + e;
        }).join(",");
        a.push("function " + r + "(a," + l + "," + c + ",d){this.data=a", "this.shape=[" + l + "]", "this.stride=[" + c + "]", "this.offset=d|0}", "var proto=" + r + ".prototype", "proto.dtype='" + e + "'", "proto.dimension=" + t);
        a.push("Object.defineProperty(proto,'size',{get:function " + r + "_size(){return " + s.map(function (e) {
          return "this.shape[" + e + "]";
        }).join("*"), "}})");
        if (t === 1) {
          a.push("proto.order=[0]");
        } else {
          a.push("Object.defineProperty(proto,'order',{get:");
          if (t < 4) {
            a.push("function " + r + "_order(){");
            if (t === 2) {
              a.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
            } else if (t === 3) {
              a.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})");
            }
          } else {
            a.push("ORDER})");
          }
        }
        a.push("proto.set=function " + r + "_set(" + h.join(",") + ",v){");
        if (i) {
          a.push("return this.data.set(" + f + ",v)}");
        } else {
          a.push("return this.data[" + f + "]=v}");
        }
        a.push("proto.get=function " + r + "_get(" + h.join(",") + "){");
        if (i) {
          a.push("return this.data.get(" + f + ")}");
        } else {
          a.push("return this.data[" + f + "]}");
        }
        a.push("proto.index=function " + r + "_index(", h.join(), "){return " + f + "}");
        a.push("proto.hi=function " + r + "_hi(" + h.join(",") + "){return new " + r + "(this.data," + s.map(function (e) {
          return ["(typeof i", e, "!=='number'||i", e, "<0)?this.shape[", e, "]:i", e, "|0"].join("");
        }).join(",") + "," + s.map(function (e) {
          return "this.stride[" + e + "]";
        }).join(",") + ",this.offset)}");
        var d = s.map(function (e) {
          return "a" + e + "=this.shape[" + e + "]";
        });
        var p = s.map(function (e) {
          return "c" + e + "=this.stride[" + e + "]";
        });
        a.push("proto.lo=function " + r + "_lo(" + h.join(",") + "){var b=this.offset,d=0," + d.join(",") + "," + p.join(","));
        for (var g = 0; g < t; ++g) {
          a.push("if(typeof i" + g + "==='number'&&i" + g + ">=0){d=i" + g + "|0;b+=c" + g + "*d;a" + g + "-=d}");
        }
        a.push("return new " + r + "(this.data," + s.map(function (e) {
          return "a" + e;
        }).join(",") + "," + s.map(function (e) {
          return "c" + e;
        }).join(",") + ",b)}");
        a.push("proto.step=function " + r + "_step(" + h.join(",") + "){var " + s.map(function (e) {
          return "a" + e + "=this.shape[" + e + "]";
        }).join(",") + "," + s.map(function (e) {
          return "b" + e + "=this.stride[" + e + "]";
        }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
        for (g = 0; g < t; ++g) {
          a.push("if(typeof i" + g + "==='number'){d=i" + g + "|0;if(d<0){c+=b" + g + "*(a" + g + "-1);a" + g + "=ceil(-a" + g + "/d)}else{a" + g + "=ceil(a" + g + "/d)}b" + g + "*=d}");
        }
        a.push("return new " + r + "(this.data," + s.map(function (e) {
          return "a" + e;
        }).join(",") + "," + s.map(function (e) {
          return "b" + e;
        }).join(",") + ",c)}");
        var _ = new Array(t);
        var b = new Array(t);
        for (g = 0; g < t; ++g) {
          _[g] = "a[i" + g + "]";
          b[g] = "b[i" + g + "]";
        }
        a.push("proto.transpose=function " + r + "_transpose(" + h + "){" + h.map(function (e, t) {
          return e + "=(" + e + "===undefined?" + t + ":" + e + "|0)";
        }).join(";"), "var a=this.shape,b=this.stride;return new " + r + "(this.data," + _.join(",") + "," + b.join(",") + ",this.offset)}");
        a.push("proto.pick=function " + r + "_pick(" + h + "){var a=[],b=[],c=this.offset");
        for (g = 0; g < t; ++g) {
          a.push("if(typeof i" + g + "==='number'&&i" + g + ">=0){c=(c+this.stride[" + g + "]*i" + g + ")|0}else{a.push(this.shape[" + g + "]);b.push(this.stride[" + g + "])}");
        }
        a.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");
        a.push("return function construct_" + r + "(data,shape,stride,offset){return new " + r + "(data," + s.map(function (e) {
          return "shape[" + e + "]";
        }).join(",") + "," + s.map(function (e) {
          return "stride[" + e + "]";
        }).join(",") + ",offset)}");
        return new Function("CTOR_LIST", "ORDER", a.join("\n"))(u[e], o);
      }
      var u = {
        float32: [],
        float64: [],
        int8: [],
        int16: [],
        int32: [],
        uint8: [],
        uint16: [],
        uint32: [],
        array: [],
        uint8_clamped: [],
        buffer: [],
        generic: []
      };
      t.exports = function (e, t, r, n) {
        if (e === undefined) {
          return (0, u.array[0])([]);
        }
        if (typeof e == "number") {
          e = [e];
        }
        if (t === undefined) {
          t = [e.length];
        }
        var s = t.length;
        if (r === undefined) {
          r = new Array(s);
          for (var o = s - 1, f = 1; o >= 0; --o) {
            r[o] = f;
            f *= t[o];
          }
        }
        if (n === undefined) {
          n = 0;
          for (o = 0; o < s; ++o) {
            if (r[o] < 0) {
              n -= (t[o] - 1) * r[o];
            }
          }
        }
        var l = function (e) {
          if (i(e)) {
            return "buffer";
          }
          if (a) {
            switch (Object.prototype.toString.call(e)) {
              case "[object Float64Array]":
                return "float64";
              case "[object Float32Array]":
                return "float32";
              case "[object Int8Array]":
                return "int8";
              case "[object Int16Array]":
                return "int16";
              case "[object Int32Array]":
                return "int32";
              case "[object Uint8Array]":
                return "uint8";
              case "[object Uint16Array]":
                return "uint16";
              case "[object Uint32Array]":
                return "uint32";
              case "[object Uint8ClampedArray]":
                return "uint8_clamped";
            }
          }
          if (Array.isArray(e)) {
            return "array";
          } else {
            return "generic";
          }
        }(e);
        for (var c = u[l]; c.length <= s + 1;) {
          c.push(h(l, c.length - 1));
        }
        return (0, c[s + 1])(e, t, r, n);
      };
    }, {
      "iota-array": 27,
      "is-buffer": 28
    }],
    38: [function (e, t, r) {
      function n(e, t, r, n) {
        var i = e[t++];
        var a = 1 << i;
        var s = a + 1;
        var o = s + 1;
        var h = i + 1;
        var u = (1 << h) - 1;
        var f = 0;
        var l = 0;
        var c = 0;
        var d = e[t++];
        var p = new Int32Array(4096);
        var g = null;
        while (true) {
          while (f < 16 && d !== 0) {
            l |= e[t++] << f;
            f += 8;
            if (d === 1) {
              d = e[t++];
            } else {
              --d;
            }
          }
          if (f < h) {
            break;
          }
          var _ = l & u;
          l >>= h;
          f -= h;
          if (_ !== a) {
            if (_ === s) {
              break;
            }
            var b = _ < o ? _ : g;
            var v = 0;
            for (var y = b; y > a;) {
              y = p[y] >> 8;
              ++v;
            }
            var m = y;
            if (c + v + (b !== _ ? 1 : 0) > n) {
              console.log("Warning, gif stream longer than expected.");
              return;
            }
            r[c++] = m;
            var w = c += v;
            if (b !== _) {
              r[c++] = m;
            }
            y = b;
            while (v--) {
              y = p[y];
              r[--w] = y & 255;
              y >>= 8;
            }
            if (g !== null && o < 4096) {
              p[o++] = g << 8 | m;
              if (o >= u + 1 && h < 12) {
                ++h;
                u = u << 1 | 1;
              }
            }
            g = _;
          } else {
            o = s + 1;
            u = (1 << (h = i + 1)) - 1;
            g = null;
          }
        }
        if (c !== n) {
          console.log("Warning, gif stream shorter than expected.");
        }
        return r;
      }
      try {
        r.GifWriter = function (e, t, r, n) {
          var i = 0;
          var a = (n = n === undefined ? {} : n).loop === undefined ? null : n.loop;
          var s = n.palette === undefined ? null : n.palette;
          if (t <= 0 || r <= 0 || t > 65535 || r > 65535) {
            throw "Width/Height invalid.";
          }
          function o(e) {
            var t = e.length;
            if (t < 2 || t > 256 || t & t - 1) {
              throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
            }
            return t;
          }
          e[i++] = 71;
          e[i++] = 73;
          e[i++] = 70;
          e[i++] = 56;
          e[i++] = 57;
          e[i++] = 97;
          var h = 0;
          var u = 0;
          if (s !== null) {
            for (var f = o(s); f >>= 1;) {
              ++h;
            }
            f = 1 << h;
            --h;
            if (n.background !== undefined) {
              if ((u = n.background) >= f) {
                throw "Background index out of range.";
              }
              if (u === 0) {
                throw "Background index explicitly passed as 0.";
              }
            }
          }
          e[i++] = t & 255;
          e[i++] = t >> 8 & 255;
          e[i++] = r & 255;
          e[i++] = r >> 8 & 255;
          e[i++] = (s !== null ? 128 : 0) | h;
          e[i++] = u;
          e[i++] = 0;
          if (s !== null) {
            for (var l = 0, c = s.length; l < c; ++l) {
              var d = s[l];
              e[i++] = d >> 16 & 255;
              e[i++] = d >> 8 & 255;
              e[i++] = d & 255;
            }
          }
          if (a !== null) {
            if (a < 0 || a > 65535) {
              throw "Loop count invalid.";
            }
            e[i++] = 33;
            e[i++] = 255;
            e[i++] = 11;
            e[i++] = 78;
            e[i++] = 69;
            e[i++] = 84;
            e[i++] = 83;
            e[i++] = 67;
            e[i++] = 65;
            e[i++] = 80;
            e[i++] = 69;
            e[i++] = 50;
            e[i++] = 46;
            e[i++] = 48;
            e[i++] = 3;
            e[i++] = 1;
            e[i++] = a & 255;
            e[i++] = a >> 8 & 255;
            e[i++] = 0;
          }
          var p = false;
          this.addFrame = function (t, r, n, a, h, u) {
            if (p === true) {
              --i;
              p = false;
            }
            u = u === undefined ? {} : u;
            if (t < 0 || r < 0 || t > 65535 || r > 65535) {
              throw "x/y invalid.";
            }
            if (n <= 0 || a <= 0 || n > 65535 || a > 65535) {
              throw "Width/Height invalid.";
            }
            if (h.length < n * a) {
              throw "Not enough pixels for the frame size.";
            }
            var f = true;
            var l = u.palette;
            if (l == null) {
              f = false;
              l = s;
            }
            if (l == null) {
              throw "Must supply either a local or global palette.";
            }
            for (var c = o(l), d = 0; c >>= 1;) {
              ++d;
            }
            c = 1 << d;
            var g = u.delay === undefined ? 0 : u.delay;
            var _ = u.disposal === undefined ? 0 : u.disposal;
            if (_ < 0 || _ > 3) {
              throw "Disposal out of range.";
            }
            var b = false;
            var v = 0;
            if (u.transparent !== undefined && u.transparent !== null && (b = true, (v = u.transparent) < 0 || v >= c)) {
              throw "Transparent color index.";
            }
            if (_ !== 0 || b || g !== 0) {
              e[i++] = 33;
              e[i++] = 249;
              e[i++] = 4;
              e[i++] = _ << 2 | (b === true ? 1 : 0);
              e[i++] = g & 255;
              e[i++] = g >> 8 & 255;
              e[i++] = v;
              e[i++] = 0;
            }
            e[i++] = 44;
            e[i++] = t & 255;
            e[i++] = t >> 8 & 255;
            e[i++] = r & 255;
            e[i++] = r >> 8 & 255;
            e[i++] = n & 255;
            e[i++] = n >> 8 & 255;
            e[i++] = a & 255;
            e[i++] = a >> 8 & 255;
            e[i++] = f === true ? d - 1 | 128 : 0;
            if (f === true) {
              for (var y = 0, m = l.length; y < m; ++y) {
                var w = l[y];
                e[i++] = w >> 16 & 255;
                e[i++] = w >> 8 & 255;
                e[i++] = w & 255;
              }
            }
            i = function (e, t, r, n) {
              e[t++] = r;
              var i = t++;
              var a = 1 << r;
              var s = a - 1;
              var o = a + 1;
              var h = o + 1;
              var u = r + 1;
              var f = 0;
              var l = 0;
              function c(r) {
                while (f >= r) {
                  e[t++] = l & 255;
                  l >>= 8;
                  f -= 8;
                  if (t === i + 256) {
                    e[i] = 255;
                    i = t++;
                  }
                }
              }
              function d(e) {
                l |= e << f;
                f += u;
                c(8);
              }
              var p = n[0] & s;
              var g = {};
              d(a);
              for (var _ = 1, b = n.length; _ < b; ++_) {
                var v = n[_] & s;
                var y = p << 8 | v;
                var m = g[y];
                if (m === undefined) {
                  l |= p << f;
                  f += u;
                  while (f >= 8) {
                    e[t++] = l & 255;
                    l >>= 8;
                    f -= 8;
                    if (t === i + 256) {
                      e[i] = 255;
                      i = t++;
                    }
                  }
                  if (h === 4096) {
                    d(a);
                    h = o + 1;
                    u = r + 1;
                    g = {};
                  } else {
                    if (h >= 1 << u) {
                      ++u;
                    }
                    g[y] = h++;
                  }
                  p = v;
                } else {
                  p = m;
                }
              }
              d(p);
              d(o);
              c(1);
              if (i + 1 === t) {
                e[i] = 0;
              } else {
                e[i] = t - i - 1;
                e[t++] = 0;
              }
              return t;
            }(e, i, d < 2 ? 2 : d, h);
          };
          this.end = function () {
            if (p === false) {
              e[i++] = 59;
              p = true;
            }
            return i;
          };
        };
        r.GifReader = function (e) {
          var t = 0;
          if (e[t++] !== 71 || e[t++] !== 73 || e[t++] !== 70 || e[t++] !== 56 || (e[t++] + 1 & 253) != 56 || e[t++] !== 97) {
            throw "Invalid GIF 87a/89a header.";
          }
          var r = e[t++] | e[t++] << 8;
          var i = e[t++] | e[t++] << 8;
          var a = e[t++];
          var s = a >> 7;
          var o = 1 << 1 + (a & 7);
          e[t++];
          e[t++];
          var h = null;
          if (s) {
            h = t;
            t += o * 3;
          }
          var u = true;
          var f = [];
          var l = 0;
          var c = null;
          var d = 0;
          var p = null;
          this.width = r;
          this.height = i;
          while (u && t < e.length) {
            switch (e[t++]) {
              case 33:
                switch (e[t++]) {
                  case 255:
                    if (e[t] !== 11 || e[t + 1] == 78 && e[t + 2] == 69 && e[t + 3] == 84 && e[t + 4] == 83 && e[t + 5] == 67 && e[t + 6] == 65 && e[t + 7] == 80 && e[t + 8] == 69 && e[t + 9] == 50 && e[t + 10] == 46 && e[t + 11] == 48 && e[t + 12] == 3 && e[t + 13] == 1 && e[t + 16] == 0) {
                      t += 14;
                      p = e[t++] | e[t++] << 8;
                      t++;
                    } else {
                      for (t += 12; (S = e[t++]) !== 0;) {
                        t += S;
                      }
                    }
                    break;
                  case 249:
                    if (e[t++] !== 4 || e[t + 4] !== 0) {
                      throw "Invalid graphics extension block.";
                    }
                    var g = e[t++];
                    l = e[t++] | e[t++] << 8;
                    c = e[t++];
                    if (!(g & 1)) {
                      c = null;
                    }
                    d = g >> 2 & 7;
                    t++;
                    break;
                  case 254:
                    while ((S = e[t++]) !== 0) {
                      t += S;
                    }
                    break;
                  default:
                    throw "Unknown graphic control label: 0x" + e[t - 1].toString(16);
                }
                break;
              case 44:
                var _ = e[t++] | e[t++] << 8;
                var b = e[t++] | e[t++] << 8;
                var v = e[t++] | e[t++] << 8;
                var y = e[t++] | e[t++] << 8;
                var m = e[t++];
                var w = m >> 6 & 1;
                var k = h;
                var E = false;
                if (m >> 7) {
                  E = true;
                  k = t;
                  t += (1 << 1 + (m & 7)) * 3;
                }
                var x = t;
                for (t++;;) {
                  var S;
                  if ((S = e[t++]) === 0) {
                    break;
                  }
                  t += S;
                }
                f.push({
                  x: _,
                  y: b,
                  width: v,
                  height: y,
                  has_local_palette: E,
                  palette_offset: k,
                  data_offset: x,
                  data_length: t - x,
                  transparent_index: c,
                  interlaced: !!w,
                  delay: l,
                  disposal: d
                });
                break;
              case 59:
                u = false;
                break;
              default:
                throw "Unknown gif block: 0x" + e[t - 1].toString(16);
            }
          }
          this.numFrames = function () {
            return f.length;
          };
          this.loopCount = function () {
            return p;
          };
          this.frameInfo = function (e) {
            if (e < 0 || e >= f.length) {
              throw "Frame index out of range.";
            }
            return f[e];
          };
          this.decodeAndBlitFrameBGRA = function (t, i) {
            var a = this.frameInfo(t);
            var s = a.width * a.height;
            var o = new Uint8Array(s);
            n(e, a.data_offset, o, s);
            var h = a.palette_offset;
            var u = a.transparent_index;
            if (u === null) {
              u = 256;
            }
            var f = a.width;
            var l = r - f;
            var c = f;
            var d = (a.y * r + a.x) * 4;
            var p = ((a.y + a.height) * r + a.x) * 4;
            var g = d;
            var _ = l * 4;
            if (a.interlaced === true) {
              _ += r * 4 * 7;
            }
            var b = 8;
            for (var v = 0, y = o.length; v < y; ++v) {
              var m = o[v];
              if (c === 0) {
                c = f;
                if ((g += _) >= p) {
                  _ = l * 4 + r * 4 * (b - 1);
                  g = d + (f + l) * (b << 1);
                  b >>= 1;
                }
              }
              if (m === u) {
                g += 4;
              } else {
                var w = e[h + m * 3];
                var k = e[h + m * 3 + 1];
                var E = e[h + m * 3 + 2];
                i[g++] = E;
                i[g++] = k;
                i[g++] = w;
                i[g++] = 255;
              }
              --c;
            }
          };
          this.decodeAndBlitFrameRGBA = function (t, i) {
            var a = this.frameInfo(t);
            var s = a.width * a.height;
            var o = new Uint8Array(s);
            n(e, a.data_offset, o, s);
            var h = a.palette_offset;
            var u = a.transparent_index;
            if (u === null) {
              u = 256;
            }
            var f = a.width;
            var l = r - f;
            var c = f;
            var d = (a.y * r + a.x) * 4;
            var p = ((a.y + a.height) * r + a.x) * 4;
            var g = d;
            var _ = l * 4;
            if (a.interlaced === true) {
              _ += r * 4 * 7;
            }
            var b = 8;
            for (var v = 0, y = o.length; v < y; ++v) {
              var m = o[v];
              if (c === 0) {
                c = f;
                if ((g += _) >= p) {
                  _ = l * 4 + r * 4 * (b - 1);
                  g = d + (f + l) * (b << 1);
                  b >>= 1;
                }
              }
              if (m === u) {
                g += 4;
              } else {
                var w = e[h + m * 3];
                var k = e[h + m * 3 + 1];
                var E = e[h + m * 3 + 2];
                i[g++] = w;
                i[g++] = k;
                i[g++] = E;
                i[g++] = 255;
              }
              --c;
            }
          };
        };
      } catch (e) {}
    }, {}],
    39: [function (e, t, r) {
      "use strict";

      var n = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      r.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
          var r = t.shift();
          if (r) {
            if (typeof r != "object") {
              throw new TypeError(r + "must be non-object");
            }
            for (var n in r) {
              if (i(r, n)) {
                e[n] = r[n];
              }
            }
          }
        }
        return e;
      };
      r.shrinkBuf = function (e, t) {
        if (e.length === t) {
          return e;
        } else if (e.subarray) {
          return e.subarray(0, t);
        } else {
          e.length = t;
          return e;
        }
      };
      var a = {
        arraySet: function (e, t, r, n, i) {
          if (t.subarray && e.subarray) {
            e.set(t.subarray(r, r + n), i);
          } else {
            for (var a = 0; a < n; a++) {
              e[i + a] = t[r + a];
            }
          }
        },
        flattenChunks: function (e) {
          var t;
          var r;
          var n;
          var i;
          var a;
          var s;
          n = 0;
          t = 0;
          r = e.length;
          for (; t < r; t++) {
            n += e[t].length;
          }
          s = new Uint8Array(n);
          i = 0;
          t = 0;
          r = e.length;
          for (; t < r; t++) {
            a = e[t];
            s.set(a, i);
            i += a.length;
          }
          return s;
        }
      };
      var s = {
        arraySet: function (e, t, r, n, i) {
          for (var a = 0; a < n; a++) {
            e[i + a] = t[r + a];
          }
        },
        flattenChunks: function (e) {
          return [].concat.apply([], e);
        }
      };
      r.setTyped = function (e) {
        if (e) {
          r.Buf8 = Uint8Array;
          r.Buf16 = Uint16Array;
          r.Buf32 = Int32Array;
          r.assign(r, a);
        } else {
          r.Buf8 = Array;
          r.Buf16 = Array;
          r.Buf32 = Array;
          r.assign(r, s);
        }
      };
      r.setTyped(n);
    }, {}],
    40: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var i = e & 65535;
        var a = e >>> 16 & 65535;
        var s = 0;
        while (r !== 0) {
          r -= s = r > 2000 ? 2000 : r;
          do {
            a = a + (i = i + t[n++] | 0) | 0;
          } while (--s);
          i %= 65521;
          a %= 65521;
        }
        return i | a << 16;
      };
    }, {}],
    41: [function (e, t, r) {
      "use strict";

      t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
    }, {}],
    42: [function (e, t, r) {
      "use strict";

      var n = function () {
        var e;
        var t = [];
        for (var r = 0; r < 256; r++) {
          e = r;
          for (var n = 0; n < 8; n++) {
            e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
          }
          t[r] = e;
        }
        return t;
      }();
      t.exports = function (e, t, r, i) {
        var a = n;
        var s = i + r;
        e ^= -1;
        for (var o = i; o < s; o++) {
          e = e >>> 8 ^ a[(e ^ t[o]) & 255];
        }
        return e ^ -1;
      };
    }, {}],
    43: [function (e, t, r) {
      "use strict";

      var n;
      var i = e("../utils/common");
      var a = e("./trees");
      var s = e("./adler32");
      var o = e("./crc32");
      var h = e("./messages");
      var u = -2;
      var f = 258;
      var l = 262;
      var c = 103;
      var d = 113;
      var p = 666;
      function g(e, t) {
        e.msg = h[t];
        return t;
      }
      function _(e) {
        return (e << 1) - (e > 4 ? 9 : 0);
      }
      function b(e) {
        for (var t = e.length; --t >= 0;) {
          e[t] = 0;
        }
      }
      function v(e) {
        var t = e.state;
        var r = t.pending;
        if (r > e.avail_out) {
          r = e.avail_out;
        }
        if (r !== 0) {
          i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out);
          e.next_out += r;
          t.pending_out += r;
          e.total_out += r;
          e.avail_out -= r;
          t.pending -= r;
          if (t.pending === 0) {
            t.pending_out = 0;
          }
        }
      }
      function y(e, t) {
        a._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
        e.block_start = e.strstart;
        v(e.strm);
      }
      function m(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function w(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255;
        e.pending_buf[e.pending++] = t & 255;
      }
      function k(e, t, r, n) {
        var a = e.avail_in;
        if (a > n) {
          a = n;
        }
        if (a === 0) {
          return 0;
        } else {
          e.avail_in -= a;
          i.arraySet(t, e.input, e.next_in, a, r);
          if (e.state.wrap === 1) {
            e.adler = s(e.adler, t, a, r);
          } else if (e.state.wrap === 2) {
            e.adler = o(e.adler, t, a, r);
          }
          e.next_in += a;
          e.total_in += a;
          return a;
        }
      }
      function E(e, t) {
        var r;
        var n;
        var i = e.max_chain_length;
        var a = e.strstart;
        var s = e.prev_length;
        var o = e.nice_match;
        var h = e.strstart > e.w_size - l ? e.strstart - (e.w_size - l) : 0;
        var u = e.window;
        var c = e.w_mask;
        var d = e.prev;
        var p = e.strstart + f;
        var g = u[a + s - 1];
        var _ = u[a + s];
        if (e.prev_length >= e.good_match) {
          i >>= 2;
        }
        if (o > e.lookahead) {
          o = e.lookahead;
        }
        do {
          if (u[(r = t) + s] === _ && u[r + s - 1] === g && u[r] === u[a] && u[++r] === u[a + 1]) {
            a += 2;
            r++;
            do {} while (u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && a < p);
            n = f - (p - a);
            a = p - f;
            if (n > s) {
              e.match_start = t;
              s = n;
              if (n >= o) {
                break;
              }
              g = u[a + s - 1];
              _ = u[a + s];
            }
          }
        } while ((t = d[t & c]) > h && --i !== 0);
        if (s <= e.lookahead) {
          return s;
        } else {
          return e.lookahead;
        }
      }
      function x(e) {
        var t;
        var r;
        var n;
        var a;
        var s;
        var o = e.w_size;
        do {
          a = e.window_size - e.lookahead - e.strstart;
          if (e.strstart >= o + (o - l)) {
            i.arraySet(e.window, e.window, o, o, 0);
            e.match_start -= o;
            e.strstart -= o;
            e.block_start -= o;
            t = r = e.hash_size;
            do {
              n = e.head[--t];
              e.head[t] = n >= o ? n - o : 0;
            } while (--r);
            t = r = o;
            do {
              n = e.prev[--t];
              e.prev[t] = n >= o ? n - o : 0;
            } while (--r);
            a += o;
          }
          if (e.strm.avail_in === 0) {
            break;
          }
          r = k(e.strm, e.window, e.strstart + e.lookahead, a);
          e.lookahead += r;
          if (e.lookahead + e.insert >= 3) {
            s = e.strstart - e.insert;
            e.ins_h = e.window[s];
            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask;
            while (e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 3 - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < 3)));
          }
        } while (e.lookahead < l && e.strm.avail_in !== 0);
      }
      function S(e, t) {
        var r;
        var n;
        while (true) {
          if (e.lookahead < l) {
            x(e);
            if (e.lookahead < l && t === 0) {
              return 1;
            }
            if (e.lookahead === 0) {
              break;
            }
          }
          r = 0;
          if (e.lookahead >= 3) {
            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          }
          if (r !== 0 && e.strstart - r <= e.w_size - l) {
            e.match_length = E(e, r);
          }
          if (e.match_length >= 3) {
            n = a._tr_tally(e, e.strstart - e.match_start, e.match_length - 3);
            e.lookahead -= e.match_length;
            if (e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
              e.match_length--;
              do {
                e.strstart++;
                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                e.head[e.ins_h] = e.strstart;
              } while (--e.match_length !== 0);
              e.strstart++;
            } else {
              e.strstart += e.match_length;
              e.match_length = 0;
              e.ins_h = e.window[e.strstart];
              e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
            }
          } else {
            n = a._tr_tally(e, 0, e.window[e.strstart]);
            e.lookahead--;
            e.strstart++;
          }
          if (n && (y(e, false), e.strm.avail_out === 0)) {
            return 1;
          }
        }
        e.insert = e.strstart < 2 ? e.strstart : 2;
        if (t === 4) {
          y(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else if (e.last_lit && (y(e, false), e.strm.avail_out === 0)) {
          return 1;
        } else {
          return 2;
        }
      }
      function A(e, t) {
        var r;
        var n;
        var i;
        while (true) {
          if (e.lookahead < l) {
            x(e);
            if (e.lookahead < l && t === 0) {
              return 1;
            }
            if (e.lookahead === 0) {
              break;
            }
          }
          r = 0;
          if (e.lookahead >= 3) {
            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          }
          e.prev_length = e.match_length;
          e.prev_match = e.match_start;
          e.match_length = 2;
          if (r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - l) {
            e.match_length = E(e, r);
            if (e.match_length <= 5 && (e.strategy === 1 || e.match_length === 3 && e.strstart - e.match_start > 4096)) {
              e.match_length = 2;
            }
          }
          if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
            i = e.strstart + e.lookahead - 3;
            n = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
            e.lookahead -= e.prev_length - 1;
            e.prev_length -= 2;
            do {
              if (++e.strstart <= i) {
                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                e.head[e.ins_h] = e.strstart;
              }
            } while (--e.prev_length !== 0);
            e.match_available = 0;
            e.match_length = 2;
            e.strstart++;
            if (n && (y(e, false), e.strm.avail_out === 0)) {
              return 1;
            }
          } else if (e.match_available) {
            if (n = a._tr_tally(e, 0, e.window[e.strstart - 1])) {
              y(e, false);
            }
            e.strstart++;
            e.lookahead--;
            if (e.strm.avail_out === 0) {
              return 1;
            }
          } else {
            e.match_available = 1;
            e.strstart++;
            e.lookahead--;
          }
        }
        if (e.match_available) {
          n = a._tr_tally(e, 0, e.window[e.strstart - 1]);
          e.match_available = 0;
        }
        e.insert = e.strstart < 2 ? e.strstart : 2;
        if (t === 4) {
          y(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else if (e.last_lit && (y(e, false), e.strm.avail_out === 0)) {
          return 1;
        } else {
          return 2;
        }
      }
      function T(e, t, r, n, i) {
        this.good_length = e;
        this.max_lazy = t;
        this.nice_length = r;
        this.max_chain = n;
        this.func = i;
      }
      function I() {
        this.strm = null;
        this.status = 0;
        this.pending_buf = null;
        this.pending_buf_size = 0;
        this.pending_out = 0;
        this.pending = 0;
        this.wrap = 0;
        this.gzhead = null;
        this.gzindex = 0;
        this.method = 8;
        this.last_flush = -1;
        this.w_size = 0;
        this.w_bits = 0;
        this.w_mask = 0;
        this.window = null;
        this.window_size = 0;
        this.prev = null;
        this.head = null;
        this.ins_h = 0;
        this.hash_size = 0;
        this.hash_bits = 0;
        this.hash_mask = 0;
        this.hash_shift = 0;
        this.block_start = 0;
        this.match_length = 0;
        this.prev_match = 0;
        this.match_available = 0;
        this.strstart = 0;
        this.match_start = 0;
        this.lookahead = 0;
        this.prev_length = 0;
        this.max_chain_length = 0;
        this.max_lazy_match = 0;
        this.level = 0;
        this.strategy = 0;
        this.good_match = 0;
        this.nice_match = 0;
        this.dyn_ltree = new i.Buf16(1146);
        this.dyn_dtree = new i.Buf16(122);
        this.bl_tree = new i.Buf16(78);
        b(this.dyn_ltree);
        b(this.dyn_dtree);
        b(this.bl_tree);
        this.l_desc = null;
        this.d_desc = null;
        this.bl_desc = null;
        this.bl_count = new i.Buf16(16);
        this.heap = new i.Buf16(573);
        b(this.heap);
        this.heap_len = 0;
        this.heap_max = 0;
        this.depth = new i.Buf16(573);
        b(this.depth);
        this.l_buf = 0;
        this.lit_bufsize = 0;
        this.last_lit = 0;
        this.d_buf = 0;
        this.opt_len = 0;
        this.static_len = 0;
        this.matches = 0;
        this.insert = 0;
        this.bi_buf = 0;
        this.bi_valid = 0;
      }
      function L(e) {
        var t;
        if (e && e.state) {
          e.total_in = e.total_out = 0;
          e.data_type = 2;
          (t = e.state).pending = 0;
          t.pending_out = 0;
          if (t.wrap < 0) {
            t.wrap = -t.wrap;
          }
          t.status = t.wrap ? 42 : d;
          e.adler = t.wrap === 2 ? 0 : 1;
          t.last_flush = 0;
          a._tr_init(t);
          return 0;
        } else {
          return g(e, u);
        }
      }
      function R(e) {
        var t;
        var r = L(e);
        if (r === 0) {
          (t = e.state).window_size = t.w_size * 2;
          b(t.head);
          t.max_lazy_match = n[t.level].max_lazy;
          t.good_match = n[t.level].good_length;
          t.nice_match = n[t.level].nice_length;
          t.max_chain_length = n[t.level].max_chain;
          t.strstart = 0;
          t.block_start = 0;
          t.lookahead = 0;
          t.insert = 0;
          t.match_length = t.prev_length = 2;
          t.match_available = 0;
          t.ins_h = 0;
        }
        return r;
      }
      function j(e, t, r, n, a, s) {
        if (!e) {
          return u;
        }
        var o = 1;
        if (t === -1) {
          t = 6;
        }
        if (n < 0) {
          o = 0;
          n = -n;
        } else if (n > 15) {
          o = 2;
          n -= 16;
        }
        if (a < 1 || a > 9 || r !== 8 || n < 8 || n > 15 || t < 0 || t > 9 || s < 0 || s > 4) {
          return g(e, u);
        }
        if (n === 8) {
          n = 9;
        }
        var h = new I();
        e.state = h;
        h.strm = e;
        h.wrap = o;
        h.gzhead = null;
        h.w_bits = n;
        h.w_size = 1 << h.w_bits;
        h.w_mask = h.w_size - 1;
        h.hash_bits = a + 7;
        h.hash_size = 1 << h.hash_bits;
        h.hash_mask = h.hash_size - 1;
        h.hash_shift = ~~((h.hash_bits + 3 - 1) / 3);
        h.window = new i.Buf8(h.w_size * 2);
        h.head = new i.Buf16(h.hash_size);
        h.prev = new i.Buf16(h.w_size);
        h.lit_bufsize = 1 << a + 6;
        h.pending_buf_size = h.lit_bufsize * 4;
        h.pending_buf = new i.Buf8(h.pending_buf_size);
        h.d_buf = h.lit_bufsize * 1;
        h.l_buf = h.lit_bufsize * 3;
        h.level = t;
        h.strategy = s;
        h.method = r;
        return R(e);
      }
      n = [new T(0, 0, 0, 0, function (e, t) {
        var r = 65535;
        for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
          if (e.lookahead <= 1) {
            x(e);
            if (e.lookahead === 0 && t === 0) {
              return 1;
            }
            if (e.lookahead === 0) {
              break;
            }
          }
          e.strstart += e.lookahead;
          e.lookahead = 0;
          var n = e.block_start + r;
          if ((e.strstart === 0 || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, y(e, false), e.strm.avail_out === 0)) {
            return 1;
          }
          if (e.strstart - e.block_start >= e.w_size - l && (y(e, false), e.strm.avail_out === 0)) {
            return 1;
          }
        }
        e.insert = 0;
        if (t === 4) {
          y(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else {
          if (e.strstart > e.block_start) {
            y(e, false);
            e.strm.avail_out;
          }
          return 1;
        }
      }), new T(4, 4, 8, 4, S), new T(4, 5, 16, 8, S), new T(4, 6, 32, 32, S), new T(4, 4, 16, 16, A), new T(8, 16, 32, 32, A), new T(8, 16, 128, 128, A), new T(8, 32, 128, 256, A), new T(32, 128, 258, 1024, A), new T(32, 258, 258, 4096, A)];
      r.deflateInit = function (e, t) {
        return j(e, t, 8, 15, 8, 0);
      };
      r.deflateInit2 = j;
      r.deflateReset = R;
      r.deflateResetKeep = L;
      r.deflateSetHeader = function (e, t) {
        if (e && e.state) {
          if (e.state.wrap !== 2) {
            return u;
          } else {
            e.state.gzhead = t;
            return 0;
          }
        } else {
          return u;
        }
      };
      r.deflate = function (e, t) {
        var r;
        var i;
        var s;
        var h;
        if (!e || !e.state || t > 5 || t < 0) {
          if (e) {
            return g(e, u);
          } else {
            return u;
          }
        }
        i = e.state;
        if (!e.output || !e.input && e.avail_in !== 0 || i.status === p && t !== 4) {
          return g(e, e.avail_out === 0 ? -5 : u);
        }
        i.strm = e;
        r = i.last_flush;
        i.last_flush = t;
        if (i.status === 42) {
          if (i.wrap === 2) {
            e.adler = 0;
            m(i, 31);
            m(i, 139);
            m(i, 8);
            if (i.gzhead) {
              m(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0));
              m(i, i.gzhead.time & 255);
              m(i, i.gzhead.time >> 8 & 255);
              m(i, i.gzhead.time >> 16 & 255);
              m(i, i.gzhead.time >> 24 & 255);
              m(i, i.level === 9 ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0);
              m(i, i.gzhead.os & 255);
              if (i.gzhead.extra && i.gzhead.extra.length) {
                m(i, i.gzhead.extra.length & 255);
                m(i, i.gzhead.extra.length >> 8 & 255);
              }
              if (i.gzhead.hcrc) {
                e.adler = o(e.adler, i.pending_buf, i.pending, 0);
              }
              i.gzindex = 0;
              i.status = 69;
            } else {
              m(i, 0);
              m(i, 0);
              m(i, 0);
              m(i, 0);
              m(i, 0);
              m(i, i.level === 9 ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0);
              m(i, 3);
              i.status = d;
            }
          } else {
            var l = 8 + (i.w_bits - 8 << 4) << 8;
            l |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6;
            if (i.strstart !== 0) {
              l |= 32;
            }
            l += 31 - l % 31;
            i.status = d;
            w(i, l);
            if (i.strstart !== 0) {
              w(i, e.adler >>> 16);
              w(i, e.adler & 65535);
            }
            e.adler = 1;
          }
        }
        if (i.status === 69) {
          if (i.gzhead.extra) {
            for (s = i.pending; i.gzindex < (i.gzhead.extra.length & 65535) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > s && (e.adler = o(e.adler, i.pending_buf, i.pending - s, s)), v(e), s = i.pending, i.pending !== i.pending_buf_size));) {
              m(i, i.gzhead.extra[i.gzindex] & 255);
              i.gzindex++;
            }
            if (i.gzhead.hcrc && i.pending > s) {
              e.adler = o(e.adler, i.pending_buf, i.pending - s, s);
            }
            if (i.gzindex === i.gzhead.extra.length) {
              i.gzindex = 0;
              i.status = 73;
            }
          } else {
            i.status = 73;
          }
        }
        if (i.status === 73) {
          if (i.gzhead.name) {
            s = i.pending;
            do {
              if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > s && (e.adler = o(e.adler, i.pending_buf, i.pending - s, s)), v(e), s = i.pending, i.pending === i.pending_buf_size)) {
                h = 1;
                break;
              }
              h = i.gzindex < i.gzhead.name.length ? i.gzhead.name.charCodeAt(i.gzindex++) & 255 : 0;
              m(i, h);
            } while (h !== 0);
            if (i.gzhead.hcrc && i.pending > s) {
              e.adler = o(e.adler, i.pending_buf, i.pending - s, s);
            }
            if (h === 0) {
              i.gzindex = 0;
              i.status = 91;
            }
          } else {
            i.status = 91;
          }
        }
        if (i.status === 91) {
          if (i.gzhead.comment) {
            s = i.pending;
            do {
              if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > s && (e.adler = o(e.adler, i.pending_buf, i.pending - s, s)), v(e), s = i.pending, i.pending === i.pending_buf_size)) {
                h = 1;
                break;
              }
              h = i.gzindex < i.gzhead.comment.length ? i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : 0;
              m(i, h);
            } while (h !== 0);
            if (i.gzhead.hcrc && i.pending > s) {
              e.adler = o(e.adler, i.pending_buf, i.pending - s, s);
            }
            if (h === 0) {
              i.status = c;
            }
          } else {
            i.status = c;
          }
        }
        if (i.status === c) {
          if (i.gzhead.hcrc) {
            if (i.pending + 2 > i.pending_buf_size) {
              v(e);
            }
            if (i.pending + 2 <= i.pending_buf_size) {
              m(i, e.adler & 255);
              m(i, e.adler >> 8 & 255);
              e.adler = 0;
              i.status = d;
            }
          } else {
            i.status = d;
          }
        }
        if (i.pending !== 0) {
          v(e);
          if (e.avail_out === 0) {
            i.last_flush = -1;
            return 0;
          }
        } else if (e.avail_in === 0 && _(t) <= _(r) && t !== 4) {
          return g(e, -5);
        }
        if (i.status === p && e.avail_in !== 0) {
          return g(e, -5);
        }
        if (e.avail_in !== 0 || i.lookahead !== 0 || t !== 0 && i.status !== p) {
          var k = i.strategy === 2 ? function (e, t) {
            var r;
            while (true) {
              if (e.lookahead === 0 && (x(e), e.lookahead === 0)) {
                if (t === 0) {
                  return 1;
                }
                break;
              }
              e.match_length = 0;
              r = a._tr_tally(e, 0, e.window[e.strstart]);
              e.lookahead--;
              e.strstart++;
              if (r && (y(e, false), e.strm.avail_out === 0)) {
                return 1;
              }
            }
            e.insert = 0;
            if (t === 4) {
              y(e, true);
              if (e.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (e.last_lit && (y(e, false), e.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          }(i, t) : i.strategy === 3 ? function (e, t) {
            var r;
            var n;
            var i;
            var s;
            var o = e.window;
            while (true) {
              if (e.lookahead <= f) {
                x(e);
                if (e.lookahead <= f && t === 0) {
                  return 1;
                }
                if (e.lookahead === 0) {
                  break;
                }
              }
              e.match_length = 0;
              if (e.lookahead >= 3 && e.strstart > 0 && (n = o[i = e.strstart - 1]) === o[++i] && n === o[++i] && n === o[++i]) {
                s = e.strstart + f;
                do {} while (n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && i < s);
                e.match_length = f - (s - i);
                if (e.match_length > e.lookahead) {
                  e.match_length = e.lookahead;
                }
              }
              if (e.match_length >= 3) {
                r = a._tr_tally(e, 1, e.match_length - 3);
                e.lookahead -= e.match_length;
                e.strstart += e.match_length;
                e.match_length = 0;
              } else {
                r = a._tr_tally(e, 0, e.window[e.strstart]);
                e.lookahead--;
                e.strstart++;
              }
              if (r && (y(e, false), e.strm.avail_out === 0)) {
                return 1;
              }
            }
            e.insert = 0;
            if (t === 4) {
              y(e, true);
              if (e.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (e.last_lit && (y(e, false), e.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          }(i, t) : n[i.level].func(i, t);
          if (k === 3 || k === 4) {
            i.status = p;
          }
          if (k === 1 || k === 3) {
            if (e.avail_out === 0) {
              i.last_flush = -1;
            }
            return 0;
          }
          if (k === 2 && (t === 1 ? a._tr_align(i) : t !== 5 && (a._tr_stored_block(i, 0, 0, false), t === 3 && (b(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), v(e), e.avail_out === 0)) {
            i.last_flush = -1;
            return 0;
          }
        }
        if (t !== 4) {
          return 0;
        } else if (i.wrap <= 0) {
          return 1;
        } else {
          if (i.wrap === 2) {
            m(i, e.adler & 255);
            m(i, e.adler >> 8 & 255);
            m(i, e.adler >> 16 & 255);
            m(i, e.adler >> 24 & 255);
            m(i, e.total_in & 255);
            m(i, e.total_in >> 8 & 255);
            m(i, e.total_in >> 16 & 255);
            m(i, e.total_in >> 24 & 255);
          } else {
            w(i, e.adler >>> 16);
            w(i, e.adler & 65535);
          }
          v(e);
          if (i.wrap > 0) {
            i.wrap = -i.wrap;
          }
          if (i.pending !== 0) {
            return 0;
          } else {
            return 1;
          }
        }
      };
      r.deflateEnd = function (e) {
        var t;
        if (e && e.state) {
          if ((t = e.state.status) !== 42 && t !== 69 && t !== 73 && t !== 91 && t !== c && t !== d && t !== p) {
            return g(e, u);
          } else {
            e.state = null;
            if (t === d) {
              return g(e, -3);
            } else {
              return 0;
            }
          }
        } else {
          return u;
        }
      };
      r.deflateSetDictionary = function (e, t) {
        var r;
        var n;
        var a;
        var o;
        var h;
        var f;
        var l;
        var c;
        var d = t.length;
        if (!e || !e.state) {
          return u;
        }
        if ((o = (r = e.state).wrap) === 2 || o === 1 && r.status !== 42 || r.lookahead) {
          return u;
        }
        if (o === 1) {
          e.adler = s(e.adler, t, d, 0);
        }
        r.wrap = 0;
        if (d >= r.w_size) {
          if (o === 0) {
            b(r.head);
            r.strstart = 0;
            r.block_start = 0;
            r.insert = 0;
          }
          c = new i.Buf8(r.w_size);
          i.arraySet(c, t, d - r.w_size, r.w_size, 0);
          t = c;
          d = r.w_size;
        }
        h = e.avail_in;
        f = e.next_in;
        l = e.input;
        e.avail_in = d;
        e.next_in = 0;
        e.input = t;
        x(r);
        while (r.lookahead >= 3) {
          n = r.strstart;
          a = r.lookahead - 2;
          do {
            r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + 3 - 1]) & r.hash_mask;
            r.prev[n & r.w_mask] = r.head[r.ins_h];
            r.head[r.ins_h] = n;
            n++;
          } while (--a);
          r.strstart = n;
          r.lookahead = 2;
          x(r);
        }
        r.strstart += r.lookahead;
        r.block_start = r.strstart;
        r.insert = r.lookahead;
        r.lookahead = 0;
        r.match_length = r.prev_length = 2;
        r.match_available = 0;
        e.next_in = f;
        e.input = l;
        e.avail_in = h;
        r.wrap = o;
        return 0;
      };
      r.deflateInfo = "pako deflate (from Nodeca project)";
    }, {
      "../utils/common": 39,
      "./adler32": 40,
      "./crc32": 42,
      "./messages": 47,
      "./trees": 48
    }],
    44: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r;
        var n;
        var i;
        var a;
        var s;
        var o;
        var h;
        var u;
        var f;
        var l;
        var c;
        var d;
        var p;
        var g;
        var _;
        var b;
        var v;
        var y;
        var m;
        var w;
        var k;
        var E;
        var x;
        var S;
        var A;
        r = e.state;
        n = e.next_in;
        S = e.input;
        i = n + (e.avail_in - 5);
        a = e.next_out;
        A = e.output;
        s = a - (t - e.avail_out);
        o = a + (e.avail_out - 257);
        h = r.dmax;
        u = r.wsize;
        f = r.whave;
        l = r.wnext;
        c = r.window;
        d = r.hold;
        p = r.bits;
        g = r.lencode;
        _ = r.distcode;
        b = (1 << r.lenbits) - 1;
        v = (1 << r.distbits) - 1;
        e: do {
          if (p < 15) {
            d += S[n++] << p;
            p += 8;
            d += S[n++] << p;
            p += 8;
          }
          y = g[d & b];
          t: while (true) {
            d >>>= m = y >>> 24;
            p -= m;
            if ((m = y >>> 16 & 255) === 0) {
              A[a++] = y & 65535;
            } else {
              if (!(m & 16)) {
                if (m & 64) {
                  if (m & 32) {
                    r.mode = 12;
                    break e;
                  }
                  e.msg = "invalid literal/length code";
                  r.mode = 30;
                  break e;
                }
                y = g[(y & 65535) + (d & (1 << m) - 1)];
                continue t;
              }
              w = y & 65535;
              if (m &= 15) {
                if (p < m) {
                  d += S[n++] << p;
                  p += 8;
                }
                w += d & (1 << m) - 1;
                d >>>= m;
                p -= m;
              }
              if (p < 15) {
                d += S[n++] << p;
                p += 8;
                d += S[n++] << p;
                p += 8;
              }
              y = _[d & v];
              while (true) {
                d >>>= m = y >>> 24;
                p -= m;
                if ((m = y >>> 16 & 255) & 16) {
                  k = y & 65535;
                  if (p < (m &= 15)) {
                    d += S[n++] << p;
                    if ((p += 8) < m) {
                      d += S[n++] << p;
                      p += 8;
                    }
                  }
                  if ((k += d & (1 << m) - 1) > h) {
                    e.msg = "invalid distance too far back";
                    r.mode = 30;
                    break e;
                  }
                  d >>>= m;
                  p -= m;
                  if (k > (m = a - s)) {
                    if ((m = k - m) > f && r.sane) {
                      e.msg = "invalid distance too far back";
                      r.mode = 30;
                      break e;
                    }
                    E = 0;
                    x = c;
                    if (l === 0) {
                      E += u - m;
                      if (m < w) {
                        w -= m;
                        do {
                          A[a++] = c[E++];
                        } while (--m);
                        E = a - k;
                        x = A;
                      }
                    } else if (l < m) {
                      E += u + l - m;
                      if ((m -= l) < w) {
                        w -= m;
                        do {
                          A[a++] = c[E++];
                        } while (--m);
                        E = 0;
                        if (l < w) {
                          w -= m = l;
                          do {
                            A[a++] = c[E++];
                          } while (--m);
                          E = a - k;
                          x = A;
                        }
                      }
                    } else {
                      E += l - m;
                      if (m < w) {
                        w -= m;
                        do {
                          A[a++] = c[E++];
                        } while (--m);
                        E = a - k;
                        x = A;
                      }
                    }
                    while (w > 2) {
                      A[a++] = x[E++];
                      A[a++] = x[E++];
                      A[a++] = x[E++];
                      w -= 3;
                    }
                    if (w) {
                      A[a++] = x[E++];
                      if (w > 1) {
                        A[a++] = x[E++];
                      }
                    }
                  } else {
                    E = a - k;
                    do {
                      A[a++] = A[E++];
                      A[a++] = A[E++];
                      A[a++] = A[E++];
                      w -= 3;
                    } while (w > 2);
                    if (w) {
                      A[a++] = A[E++];
                      if (w > 1) {
                        A[a++] = A[E++];
                      }
                    }
                  }
                  break;
                }
                if (m & 64) {
                  e.msg = "invalid distance code";
                  r.mode = 30;
                  break e;
                }
                y = _[(y & 65535) + (d & (1 << m) - 1)];
              }
            }
            break;
          }
        } while (n < i && a < o);
        n -= w = p >> 3;
        d &= (1 << (p -= w << 3)) - 1;
        e.next_in = n;
        e.next_out = a;
        e.avail_in = n < i ? i - n + 5 : 5 - (n - i);
        e.avail_out = a < o ? o - a + 257 : 257 - (a - o);
        r.hold = d;
        r.bits = p;
      };
    }, {}],
    45: [function (e, t, r) {
      "use strict";

      var n = e("../utils/common");
      var i = e("./adler32");
      var a = e("./crc32");
      var s = e("./inffast");
      var o = e("./inftrees");
      var h = -2;
      var u = 12;
      var f = 30;
      function l(e) {
        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
      }
      function c() {
        this.mode = 0;
        this.last = false;
        this.wrap = 0;
        this.havedict = false;
        this.flags = 0;
        this.dmax = 0;
        this.check = 0;
        this.total = 0;
        this.head = null;
        this.wbits = 0;
        this.wsize = 0;
        this.whave = 0;
        this.wnext = 0;
        this.window = null;
        this.hold = 0;
        this.bits = 0;
        this.length = 0;
        this.offset = 0;
        this.extra = 0;
        this.lencode = null;
        this.distcode = null;
        this.lenbits = 0;
        this.distbits = 0;
        this.ncode = 0;
        this.nlen = 0;
        this.ndist = 0;
        this.have = 0;
        this.next = null;
        this.lens = new n.Buf16(320);
        this.work = new n.Buf16(288);
        this.lendyn = null;
        this.distdyn = null;
        this.sane = 0;
        this.back = 0;
        this.was = 0;
      }
      function d(e) {
        var t;
        if (e && e.state) {
          t = e.state;
          e.total_in = e.total_out = t.total = 0;
          e.msg = "";
          if (t.wrap) {
            e.adler = t.wrap & 1;
          }
          t.mode = 1;
          t.last = 0;
          t.havedict = 0;
          t.dmax = 32768;
          t.head = null;
          t.hold = 0;
          t.bits = 0;
          t.lencode = t.lendyn = new n.Buf32(852);
          t.distcode = t.distdyn = new n.Buf32(592);
          t.sane = 1;
          t.back = -1;
          return 0;
        } else {
          return h;
        }
      }
      function p(e) {
        var t;
        if (e && e.state) {
          (t = e.state).wsize = 0;
          t.whave = 0;
          t.wnext = 0;
          return d(e);
        } else {
          return h;
        }
      }
      function g(e, t) {
        var r;
        var n;
        if (e && e.state) {
          n = e.state;
          if (t < 0) {
            r = 0;
            t = -t;
          } else {
            r = 1 + (t >> 4);
            if (t < 48) {
              t &= 15;
            }
          }
          if (t && (t < 8 || t > 15)) {
            return h;
          } else {
            if (n.window !== null && n.wbits !== t) {
              n.window = null;
            }
            n.wrap = r;
            n.wbits = t;
            return p(e);
          }
        } else {
          return h;
        }
      }
      function _(e, t) {
        var r;
        var n;
        if (e) {
          n = new c();
          e.state = n;
          n.window = null;
          if ((r = g(e, t)) !== 0) {
            e.state = null;
          }
          return r;
        } else {
          return h;
        }
      }
      var b;
      var v;
      var y = true;
      function m(e) {
        if (y) {
          var t;
          b = new n.Buf32(512);
          v = new n.Buf32(32);
          t = 0;
          while (t < 144) {
            e.lens[t++] = 8;
          }
          while (t < 256) {
            e.lens[t++] = 9;
          }
          while (t < 280) {
            e.lens[t++] = 7;
          }
          while (t < 288) {
            e.lens[t++] = 8;
          }
          o(1, e.lens, 0, 288, b, 0, e.work, {
            bits: 9
          });
          t = 0;
          while (t < 32) {
            e.lens[t++] = 5;
          }
          o(2, e.lens, 0, 32, v, 0, e.work, {
            bits: 5
          });
          y = false;
        }
        e.lencode = b;
        e.lenbits = 9;
        e.distcode = v;
        e.distbits = 5;
      }
      function w(e, t, r, i) {
        var a;
        var s = e.state;
        if (s.window === null) {
          s.wsize = 1 << s.wbits;
          s.wnext = 0;
          s.whave = 0;
          s.window = new n.Buf8(s.wsize);
        }
        if (i >= s.wsize) {
          n.arraySet(s.window, t, r - s.wsize, s.wsize, 0);
          s.wnext = 0;
          s.whave = s.wsize;
        } else {
          if ((a = s.wsize - s.wnext) > i) {
            a = i;
          }
          n.arraySet(s.window, t, r - i, a, s.wnext);
          if (i -= a) {
            n.arraySet(s.window, t, r - i, i, 0);
            s.wnext = i;
            s.whave = s.wsize;
          } else {
            s.wnext += a;
            if (s.wnext === s.wsize) {
              s.wnext = 0;
            }
            if (s.whave < s.wsize) {
              s.whave += a;
            }
          }
        }
        return 0;
      }
      r.inflateReset = p;
      r.inflateReset2 = g;
      r.inflateResetKeep = d;
      r.inflateInit = function (e) {
        return _(e, 15);
      };
      r.inflateInit2 = _;
      r.inflate = function (e, t) {
        var r;
        var c;
        var d;
        var p;
        var g;
        var _;
        var b;
        var v;
        var y;
        var k;
        var E;
        var x;
        var S;
        var A;
        var T;
        var I;
        var L;
        var R;
        var j;
        var M;
        var B;
        var C;
        var O;
        var D;
        var N = 0;
        var z = new n.Buf8(4);
        var U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) {
          return h;
        }
        if ((r = e.state).mode === u) {
          r.mode = 13;
        }
        g = e.next_out;
        d = e.output;
        b = e.avail_out;
        p = e.next_in;
        c = e.input;
        _ = e.avail_in;
        v = r.hold;
        y = r.bits;
        k = _;
        E = b;
        C = 0;
        e: while (true) {
          switch (r.mode) {
            case 1:
              if (r.wrap === 0) {
                r.mode = 13;
                break;
              }
              while (y < 16) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              if (r.wrap & 2 && v === 35615) {
                r.check = 0;
                z[0] = v & 255;
                z[1] = v >>> 8 & 255;
                r.check = a(r.check, z, 2, 0);
                v = 0;
                y = 0;
                r.mode = 2;
                break;
              }
              r.flags = 0;
              if (r.head) {
                r.head.done = false;
              }
              if (!(r.wrap & 1) || (((v & 255) << 8) + (v >> 8)) % 31) {
                e.msg = "incorrect header check";
                r.mode = f;
                break;
              }
              if ((v & 15) != 8) {
                e.msg = "unknown compression method";
                r.mode = f;
                break;
              }
              y -= 4;
              B = 8 + ((v >>>= 4) & 15);
              if (r.wbits === 0) {
                r.wbits = B;
              } else if (B > r.wbits) {
                e.msg = "invalid window size";
                r.mode = f;
                break;
              }
              r.dmax = 1 << B;
              e.adler = r.check = 1;
              r.mode = v & 512 ? 10 : u;
              v = 0;
              y = 0;
              break;
            case 2:
              while (y < 16) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              r.flags = v;
              if ((r.flags & 255) != 8) {
                e.msg = "unknown compression method";
                r.mode = f;
                break;
              }
              if (r.flags & 57344) {
                e.msg = "unknown header flags set";
                r.mode = f;
                break;
              }
              if (r.head) {
                r.head.text = v >> 8 & 1;
              }
              if (r.flags & 512) {
                z[0] = v & 255;
                z[1] = v >>> 8 & 255;
                r.check = a(r.check, z, 2, 0);
              }
              v = 0;
              y = 0;
              r.mode = 3;
            case 3:
              while (y < 32) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              if (r.head) {
                r.head.time = v;
              }
              if (r.flags & 512) {
                z[0] = v & 255;
                z[1] = v >>> 8 & 255;
                z[2] = v >>> 16 & 255;
                z[3] = v >>> 24 & 255;
                r.check = a(r.check, z, 4, 0);
              }
              v = 0;
              y = 0;
              r.mode = 4;
            case 4:
              while (y < 16) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              if (r.head) {
                r.head.xflags = v & 255;
                r.head.os = v >> 8;
              }
              if (r.flags & 512) {
                z[0] = v & 255;
                z[1] = v >>> 8 & 255;
                r.check = a(r.check, z, 2, 0);
              }
              v = 0;
              y = 0;
              r.mode = 5;
            case 5:
              if (r.flags & 1024) {
                while (y < 16) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                r.length = v;
                if (r.head) {
                  r.head.extra_len = v;
                }
                if (r.flags & 512) {
                  z[0] = v & 255;
                  z[1] = v >>> 8 & 255;
                  r.check = a(r.check, z, 2, 0);
                }
                v = 0;
                y = 0;
              } else if (r.head) {
                r.head.extra = null;
              }
              r.mode = 6;
            case 6:
              if (r.flags & 1024 && ((x = r.length) > _ && (x = _), x && (r.head && (B = r.head.extra_len - r.length, r.head.extra ||= new Array(r.head.extra_len), n.arraySet(r.head.extra, c, p, x, B)), r.flags & 512 && (r.check = a(r.check, c, x, p)), _ -= x, p += x, r.length -= x), r.length)) {
                break e;
              }
              r.length = 0;
              r.mode = 7;
            case 7:
              if (r.flags & 2048) {
                if (_ === 0) {
                  break e;
                }
                x = 0;
                do {
                  B = c[p + x++];
                  if (r.head && B && r.length < 65536) {
                    r.head.name += String.fromCharCode(B);
                  }
                } while (B && x < _);
                if (r.flags & 512) {
                  r.check = a(r.check, c, x, p);
                }
                _ -= x;
                p += x;
                if (B) {
                  break e;
                }
              } else if (r.head) {
                r.head.name = null;
              }
              r.length = 0;
              r.mode = 8;
            case 8:
              if (r.flags & 4096) {
                if (_ === 0) {
                  break e;
                }
                x = 0;
                do {
                  B = c[p + x++];
                  if (r.head && B && r.length < 65536) {
                    r.head.comment += String.fromCharCode(B);
                  }
                } while (B && x < _);
                if (r.flags & 512) {
                  r.check = a(r.check, c, x, p);
                }
                _ -= x;
                p += x;
                if (B) {
                  break e;
                }
              } else if (r.head) {
                r.head.comment = null;
              }
              r.mode = 9;
            case 9:
              if (r.flags & 512) {
                while (y < 16) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                if (v !== (r.check & 65535)) {
                  e.msg = "header crc mismatch";
                  r.mode = f;
                  break;
                }
                v = 0;
                y = 0;
              }
              if (r.head) {
                r.head.hcrc = r.flags >> 9 & 1;
                r.head.done = true;
              }
              e.adler = r.check = 0;
              r.mode = u;
              break;
            case 10:
              while (y < 32) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              e.adler = r.check = l(v);
              v = 0;
              y = 0;
              r.mode = 11;
            case 11:
              if (r.havedict === 0) {
                e.next_out = g;
                e.avail_out = b;
                e.next_in = p;
                e.avail_in = _;
                r.hold = v;
                r.bits = y;
                return 2;
              }
              e.adler = r.check = 1;
              r.mode = u;
            case u:
              if (t === 5 || t === 6) {
                break e;
              }
            case 13:
              if (r.last) {
                v >>>= y & 7;
                y -= y & 7;
                r.mode = 27;
                break;
              }
              while (y < 3) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              r.last = v & 1;
              y -= 1;
              switch ((v >>>= 1) & 3) {
                case 0:
                  r.mode = 14;
                  break;
                case 1:
                  m(r);
                  r.mode = 20;
                  if (t === 6) {
                    v >>>= 2;
                    y -= 2;
                    break e;
                  }
                  break;
                case 2:
                  r.mode = 17;
                  break;
                case 3:
                  e.msg = "invalid block type";
                  r.mode = f;
              }
              v >>>= 2;
              y -= 2;
              break;
            case 14:
              v >>>= y & 7;
              y -= y & 7;
              while (y < 32) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              if ((v & 65535) != (v >>> 16 ^ 65535)) {
                e.msg = "invalid stored block lengths";
                r.mode = f;
                break;
              }
              r.length = v & 65535;
              v = 0;
              y = 0;
              r.mode = 15;
              if (t === 6) {
                break e;
              }
            case 15:
              r.mode = 16;
            case 16:
              if (x = r.length) {
                if (x > _) {
                  x = _;
                }
                if (x > b) {
                  x = b;
                }
                if (x === 0) {
                  break e;
                }
                n.arraySet(d, c, p, x, g);
                _ -= x;
                p += x;
                b -= x;
                g += x;
                r.length -= x;
                break;
              }
              r.mode = u;
              break;
            case 17:
              while (y < 14) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              r.nlen = 257 + (v & 31);
              v >>>= 5;
              y -= 5;
              r.ndist = 1 + (v & 31);
              v >>>= 5;
              y -= 5;
              r.ncode = 4 + (v & 15);
              v >>>= 4;
              y -= 4;
              if (r.nlen > 286 || r.ndist > 30) {
                e.msg = "too many length or distance symbols";
                r.mode = f;
                break;
              }
              r.have = 0;
              r.mode = 18;
            case 18:
              while (r.have < r.ncode) {
                while (y < 3) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                r.lens[U[r.have++]] = v & 7;
                v >>>= 3;
                y -= 3;
              }
              while (r.have < 19) {
                r.lens[U[r.have++]] = 0;
              }
              r.lencode = r.lendyn;
              r.lenbits = 7;
              O = {
                bits: r.lenbits
              };
              C = o(0, r.lens, 0, 19, r.lencode, 0, r.work, O);
              r.lenbits = O.bits;
              if (C) {
                e.msg = "invalid code lengths set";
                r.mode = f;
                break;
              }
              r.have = 0;
              r.mode = 19;
            case 19:
              while (r.have < r.nlen + r.ndist) {
                while (I = (N = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, L = N & 65535, !((T = N >>> 24) <= y)) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                if (L < 16) {
                  v >>>= T;
                  y -= T;
                  r.lens[r.have++] = L;
                } else {
                  if (L === 16) {
                    for (D = T + 2; y < D;) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      v += c[p++] << y;
                      y += 8;
                    }
                    v >>>= T;
                    y -= T;
                    if (r.have === 0) {
                      e.msg = "invalid bit length repeat";
                      r.mode = f;
                      break;
                    }
                    B = r.lens[r.have - 1];
                    x = 3 + (v & 3);
                    v >>>= 2;
                    y -= 2;
                  } else if (L === 17) {
                    for (D = T + 3; y < D;) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      v += c[p++] << y;
                      y += 8;
                    }
                    y -= T;
                    B = 0;
                    x = 3 + ((v >>>= T) & 7);
                    v >>>= 3;
                    y -= 3;
                  } else {
                    for (D = T + 7; y < D;) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      v += c[p++] << y;
                      y += 8;
                    }
                    y -= T;
                    B = 0;
                    x = 11 + ((v >>>= T) & 127);
                    v >>>= 7;
                    y -= 7;
                  }
                  if (r.have + x > r.nlen + r.ndist) {
                    e.msg = "invalid bit length repeat";
                    r.mode = f;
                    break;
                  }
                  while (x--) {
                    r.lens[r.have++] = B;
                  }
                }
              }
              if (r.mode === f) {
                break;
              }
              if (r.lens[256] === 0) {
                e.msg = "invalid code -- missing end-of-block";
                r.mode = f;
                break;
              }
              r.lenbits = 9;
              O = {
                bits: r.lenbits
              };
              C = o(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, O);
              r.lenbits = O.bits;
              if (C) {
                e.msg = "invalid literal/lengths set";
                r.mode = f;
                break;
              }
              r.distbits = 6;
              r.distcode = r.distdyn;
              O = {
                bits: r.distbits
              };
              C = o(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, O);
              r.distbits = O.bits;
              if (C) {
                e.msg = "invalid distances set";
                r.mode = f;
                break;
              }
              r.mode = 20;
              if (t === 6) {
                break e;
              }
            case 20:
              r.mode = 21;
            case 21:
              if (_ >= 6 && b >= 258) {
                e.next_out = g;
                e.avail_out = b;
                e.next_in = p;
                e.avail_in = _;
                r.hold = v;
                r.bits = y;
                s(e, E);
                g = e.next_out;
                d = e.output;
                b = e.avail_out;
                p = e.next_in;
                c = e.input;
                _ = e.avail_in;
                v = r.hold;
                y = r.bits;
                if (r.mode === u) {
                  r.back = -1;
                }
                break;
              }
              for (r.back = 0; I = (N = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, L = N & 65535, !((T = N >>> 24) <= y);) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              if (I && !(I & 240)) {
                R = T;
                j = I;
                M = L;
                while (I = (N = r.lencode[M + ((v & (1 << R + j) - 1) >> R)]) >>> 16 & 255, L = N & 65535, !(R + (T = N >>> 24) <= y)) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                v >>>= R;
                y -= R;
                r.back += R;
              }
              v >>>= T;
              y -= T;
              r.back += T;
              r.length = L;
              if (I === 0) {
                r.mode = 26;
                break;
              }
              if (I & 32) {
                r.back = -1;
                r.mode = u;
                break;
              }
              if (I & 64) {
                e.msg = "invalid literal/length code";
                r.mode = f;
                break;
              }
              r.extra = I & 15;
              r.mode = 22;
            case 22:
              if (r.extra) {
                for (D = r.extra; y < D;) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                r.length += v & (1 << r.extra) - 1;
                v >>>= r.extra;
                y -= r.extra;
                r.back += r.extra;
              }
              r.was = r.length;
              r.mode = 23;
            case 23:
              while (I = (N = r.distcode[v & (1 << r.distbits) - 1]) >>> 16 & 255, L = N & 65535, !((T = N >>> 24) <= y)) {
                if (_ === 0) {
                  break e;
                }
                _--;
                v += c[p++] << y;
                y += 8;
              }
              if (!(I & 240)) {
                R = T;
                j = I;
                M = L;
                while (I = (N = r.distcode[M + ((v & (1 << R + j) - 1) >> R)]) >>> 16 & 255, L = N & 65535, !(R + (T = N >>> 24) <= y)) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                v >>>= R;
                y -= R;
                r.back += R;
              }
              v >>>= T;
              y -= T;
              r.back += T;
              if (I & 64) {
                e.msg = "invalid distance code";
                r.mode = f;
                break;
              }
              r.offset = L;
              r.extra = I & 15;
              r.mode = 24;
            case 24:
              if (r.extra) {
                for (D = r.extra; y < D;) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                r.offset += v & (1 << r.extra) - 1;
                v >>>= r.extra;
                y -= r.extra;
                r.back += r.extra;
              }
              if (r.offset > r.dmax) {
                e.msg = "invalid distance too far back";
                r.mode = f;
                break;
              }
              r.mode = 25;
            case 25:
              if (b === 0) {
                break e;
              }
              x = E - b;
              if (r.offset > x) {
                if ((x = r.offset - x) > r.whave && r.sane) {
                  e.msg = "invalid distance too far back";
                  r.mode = f;
                  break;
                }
                if (x > r.wnext) {
                  x -= r.wnext;
                  S = r.wsize - x;
                } else {
                  S = r.wnext - x;
                }
                if (x > r.length) {
                  x = r.length;
                }
                A = r.window;
              } else {
                A = d;
                S = g - r.offset;
                x = r.length;
              }
              if (x > b) {
                x = b;
              }
              b -= x;
              r.length -= x;
              do {
                d[g++] = A[S++];
              } while (--x);
              if (r.length === 0) {
                r.mode = 21;
              }
              break;
            case 26:
              if (b === 0) {
                break e;
              }
              d[g++] = r.length;
              b--;
              r.mode = 21;
              break;
            case 27:
              if (r.wrap) {
                while (y < 32) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v |= c[p++] << y;
                  y += 8;
                }
                E -= b;
                e.total_out += E;
                r.total += E;
                if (E) {
                  e.adler = r.check = r.flags ? a(r.check, d, E, g - E) : i(r.check, d, E, g - E);
                }
                E = b;
                if ((r.flags ? v : l(v)) !== r.check) {
                  e.msg = "incorrect data check";
                  r.mode = f;
                  break;
                }
                v = 0;
                y = 0;
              }
              r.mode = 28;
            case 28:
              if (r.wrap && r.flags) {
                while (y < 32) {
                  if (_ === 0) {
                    break e;
                  }
                  _--;
                  v += c[p++] << y;
                  y += 8;
                }
                if (v !== (r.total & -1)) {
                  e.msg = "incorrect length check";
                  r.mode = f;
                  break;
                }
                v = 0;
                y = 0;
              }
              r.mode = 29;
            case 29:
              C = 1;
              break e;
            case f:
              C = -3;
              break e;
            case 31:
              return -4;
            default:
              return h;
          }
        }
        e.next_out = g;
        e.avail_out = b;
        e.next_in = p;
        e.avail_in = _;
        r.hold = v;
        r.bits = y;
        if ((r.wsize || E !== e.avail_out && r.mode < f && (r.mode < 27 || t !== 4)) && w(e, e.output, e.next_out, E - e.avail_out)) {
          r.mode = 31;
          return -4;
        } else {
          k -= e.avail_in;
          E -= e.avail_out;
          e.total_in += k;
          e.total_out += E;
          r.total += E;
          if (r.wrap && E) {
            e.adler = r.check = r.flags ? a(r.check, d, E, e.next_out - E) : i(r.check, d, E, e.next_out - E);
          }
          e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === u ? 128 : 0) + (r.mode === 20 || r.mode === 15 ? 256 : 0);
          if ((k === 0 && E === 0 || t === 4) && C === 0) {
            C = -5;
          }
          return C;
        }
      };
      r.inflateEnd = function (e) {
        if (!e || !e.state) {
          return h;
        }
        var t = e.state;
        t.window &&= null;
        e.state = null;
        return 0;
      };
      r.inflateGetHeader = function (e, t) {
        var r;
        if (e && e.state && (r = e.state).wrap & 2) {
          r.head = t;
          t.done = false;
          return 0;
        } else {
          return h;
        }
      };
      r.inflateSetDictionary = function (e, t) {
        var r;
        var n = t.length;
        if (e && e.state) {
          if ((r = e.state).wrap !== 0 && r.mode !== 11) {
            return h;
          } else if (r.mode === 11 && i(1, t, n, 0) !== r.check) {
            return -3;
          } else if (w(e, t, n, n)) {
            r.mode = 31;
            return -4;
          } else {
            r.havedict = 1;
            return 0;
          }
        } else {
          return h;
        }
      };
      r.inflateInfo = "pako inflate (from Nodeca project)";
    }, {
      "../utils/common": 39,
      "./adler32": 40,
      "./crc32": 42,
      "./inffast": 44,
      "./inftrees": 46
    }],
    46: [function (e, t, r) {
      "use strict";

      var n = e("../utils/common");
      var i = 15;
      var a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
      var s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
      var o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
      var h = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t.exports = function (e, t, r, u, f, l, c, d) {
        var p;
        var g;
        var _;
        var b;
        var v;
        var y;
        var m;
        var w;
        var k;
        var E = d.bits;
        var x = 0;
        var S = 0;
        var A = 0;
        var T = 0;
        var I = 0;
        var L = 0;
        var R = 0;
        var j = 0;
        var M = 0;
        var B = 0;
        var C = null;
        var O = 0;
        var D = new n.Buf16(16);
        var N = new n.Buf16(16);
        var z = null;
        var U = 0;
        for (x = 0; x <= i; x++) {
          D[x] = 0;
        }
        for (S = 0; S < u; S++) {
          D[t[r + S]]++;
        }
        I = E;
        T = i;
        for (; T >= 1 && D[T] === 0; T--);
        if (I > T) {
          I = T;
        }
        if (T === 0) {
          f[l++] = 20971520;
          f[l++] = 20971520;
          d.bits = 1;
          return 0;
        }
        for (A = 1; A < T && D[A] === 0; A++);
        if (I < A) {
          I = A;
        }
        j = 1;
        x = 1;
        for (; x <= i; x++) {
          j <<= 1;
          if ((j -= D[x]) < 0) {
            return -1;
          }
        }
        if (j > 0 && (e === 0 || T !== 1)) {
          return -1;
        }
        N[1] = 0;
        x = 1;
        for (; x < i; x++) {
          N[x + 1] = N[x] + D[x];
        }
        for (S = 0; S < u; S++) {
          if (t[r + S] !== 0) {
            c[N[t[r + S]]++] = S;
          }
        }
        if (e === 0) {
          C = z = c;
          y = 19;
        } else if (e === 1) {
          C = a;
          O -= 257;
          z = s;
          U -= 257;
          y = 256;
        } else {
          C = o;
          z = h;
          y = -1;
        }
        B = 0;
        S = 0;
        x = A;
        v = l;
        L = I;
        R = 0;
        _ = -1;
        b = (M = 1 << I) - 1;
        if (e === 1 && M > 852 || e === 2 && M > 592) {
          return 1;
        }
        while (true) {
          m = x - R;
          if (c[S] < y) {
            w = 0;
            k = c[S];
          } else if (c[S] > y) {
            w = z[U + c[S]];
            k = C[O + c[S]];
          } else {
            w = 96;
            k = 0;
          }
          p = 1 << x - R;
          A = g = 1 << L;
          do {
            f[v + (B >> R) + (g -= p)] = m << 24 | w << 16 | k;
          } while (g !== 0);
          for (p = 1 << x - 1; B & p;) {
            p >>= 1;
          }
          if (p !== 0) {
            B &= p - 1;
            B += p;
          } else {
            B = 0;
          }
          S++;
          if (--D[x] === 0) {
            if (x === T) {
              break;
            }
            x = t[r + c[S]];
          }
          if (x > I && (B & b) !== _) {
            if (R === 0) {
              R = I;
            }
            v += A;
            j = 1 << (L = x - R);
            while (L + R < T && !((j -= D[L + R]) <= 0)) {
              L++;
              j <<= 1;
            }
            M += 1 << L;
            if (e === 1 && M > 852 || e === 2 && M > 592) {
              return 1;
            }
            f[_ = B & b] = I << 24 | L << 16 | v - l;
          }
        }
        if (B !== 0) {
          f[v + B] = x - R << 24 | 4194304;
        }
        d.bits = I;
        return 0;
      };
    }, {
      "../utils/common": 39
    }],
    47: [function (e, t, r) {
      "use strict";

      t.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
    }, {}],
    48: [function (e, t, r) {
      "use strict";

      var n = e("../utils/common");
      function i(e) {
        for (var t = e.length; --t >= 0;) {
          e[t] = 0;
        }
      }
      var a = 256;
      var s = 286;
      var o = 30;
      var h = 15;
      var u = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
      var f = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
      var l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
      var c = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      var d = new Array(576);
      i(d);
      var p = new Array(60);
      i(p);
      var g = new Array(512);
      i(g);
      var _ = new Array(256);
      i(_);
      var b = new Array(29);
      i(b);
      var v;
      var y;
      var m;
      var w = new Array(o);
      function k(e, t, r, n, i) {
        this.static_tree = e;
        this.extra_bits = t;
        this.extra_base = r;
        this.elems = n;
        this.max_length = i;
        this.has_stree = e && e.length;
      }
      function E(e, t) {
        this.dyn_tree = e;
        this.max_code = 0;
        this.stat_desc = t;
      }
      function x(e) {
        if (e < 256) {
          return g[e];
        } else {
          return g[256 + (e >>> 7)];
        }
      }
      function S(e, t) {
        e.pending_buf[e.pending++] = t & 255;
        e.pending_buf[e.pending++] = t >>> 8 & 255;
      }
      function A(e, t, r) {
        if (e.bi_valid > 16 - r) {
          e.bi_buf |= t << e.bi_valid & 65535;
          S(e, e.bi_buf);
          e.bi_buf = t >> 16 - e.bi_valid;
          e.bi_valid += r - 16;
        } else {
          e.bi_buf |= t << e.bi_valid & 65535;
          e.bi_valid += r;
        }
      }
      function T(e, t, r) {
        A(e, r[t * 2], r[t * 2 + 1]);
      }
      function I(e, t) {
        var r = 0;
        do {
          r |= e & 1;
          e >>>= 1;
          r <<= 1;
        } while (--t > 0);
        return r >>> 1;
      }
      function L(e, t, r) {
        var n;
        var i;
        var a = new Array(16);
        var s = 0;
        for (n = 1; n <= h; n++) {
          a[n] = s = s + r[n - 1] << 1;
        }
        for (i = 0; i <= t; i++) {
          var o = e[i * 2 + 1];
          if (o !== 0) {
            e[i * 2] = I(a[o]++, o);
          }
        }
      }
      function R(e) {
        var t;
        for (t = 0; t < s; t++) {
          e.dyn_ltree[t * 2] = 0;
        }
        for (t = 0; t < o; t++) {
          e.dyn_dtree[t * 2] = 0;
        }
        for (t = 0; t < 19; t++) {
          e.bl_tree[t * 2] = 0;
        }
        e.dyn_ltree[512] = 1;
        e.opt_len = e.static_len = 0;
        e.last_lit = e.matches = 0;
      }
      function j(e) {
        if (e.bi_valid > 8) {
          S(e, e.bi_buf);
        } else if (e.bi_valid > 0) {
          e.pending_buf[e.pending++] = e.bi_buf;
        }
        e.bi_buf = 0;
        e.bi_valid = 0;
      }
      function M(e, t, r, n) {
        var i = t * 2;
        var a = r * 2;
        return e[i] < e[a] || e[i] === e[a] && n[t] <= n[r];
      }
      function B(e, t, r) {
        for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && M(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !M(t, n, e.heap[i], e.depth));) {
          e.heap[r] = e.heap[i];
          r = i;
          i <<= 1;
        }
        e.heap[r] = n;
      }
      function C(e, t, r) {
        var n;
        var i;
        var s;
        var o;
        var h = 0;
        if (e.last_lit !== 0) {
          do {
            n = e.pending_buf[e.d_buf + h * 2] << 8 | e.pending_buf[e.d_buf + h * 2 + 1];
            i = e.pending_buf[e.l_buf + h];
            h++;
            if (n === 0) {
              T(e, i, t);
            } else {
              T(e, (s = _[i]) + a + 1, t);
              if ((o = u[s]) !== 0) {
                A(e, i -= b[s], o);
              }
              T(e, s = x(--n), r);
              if ((o = f[s]) !== 0) {
                A(e, n -= w[s], o);
              }
            }
          } while (h < e.last_lit);
        }
        T(e, 256, t);
      }
      function O(e, t) {
        var r;
        var n;
        var i;
        var a = t.dyn_tree;
        var s = t.stat_desc.static_tree;
        var o = t.stat_desc.has_stree;
        var u = t.stat_desc.elems;
        var f = -1;
        e.heap_len = 0;
        e.heap_max = 573;
        r = 0;
        for (; r < u; r++) {
          if (a[r * 2] !== 0) {
            e.heap[++e.heap_len] = f = r;
            e.depth[r] = 0;
          } else {
            a[r * 2 + 1] = 0;
          }
        }
        while (e.heap_len < 2) {
          a[(i = e.heap[++e.heap_len] = f < 2 ? ++f : 0) * 2] = 1;
          e.depth[i] = 0;
          e.opt_len--;
          if (o) {
            e.static_len -= s[i * 2 + 1];
          }
        }
        t.max_code = f;
        r = e.heap_len >> 1;
        for (; r >= 1; r--) {
          B(e, a, r);
        }
        i = u;
        do {
          r = e.heap[1];
          e.heap[1] = e.heap[e.heap_len--];
          B(e, a, 1);
          n = e.heap[1];
          e.heap[--e.heap_max] = r;
          e.heap[--e.heap_max] = n;
          a[i * 2] = a[r * 2] + a[n * 2];
          e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1;
          a[r * 2 + 1] = a[n * 2 + 1] = i;
          e.heap[1] = i++;
          B(e, a, 1);
        } while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1];
        (function (e, t) {
          var r;
          var n;
          var i;
          var a;
          var s;
          var o;
          var u = t.dyn_tree;
          var f = t.max_code;
          var l = t.stat_desc.static_tree;
          var c = t.stat_desc.has_stree;
          var d = t.stat_desc.extra_bits;
          var p = t.stat_desc.extra_base;
          var g = t.stat_desc.max_length;
          var _ = 0;
          for (a = 0; a <= h; a++) {
            e.bl_count[a] = 0;
          }
          u[e.heap[e.heap_max] * 2 + 1] = 0;
          r = e.heap_max + 1;
          for (; r < 573; r++) {
            if ((a = u[u[(n = e.heap[r]) * 2 + 1] * 2 + 1] + 1) > g) {
              a = g;
              _++;
            }
            u[n * 2 + 1] = a;
            if (!(n > f)) {
              e.bl_count[a]++;
              s = 0;
              if (n >= p) {
                s = d[n - p];
              }
              o = u[n * 2];
              e.opt_len += o * (a + s);
              if (c) {
                e.static_len += o * (l[n * 2 + 1] + s);
              }
            }
          }
          if (_ !== 0) {
            do {
              for (a = g - 1; e.bl_count[a] === 0;) {
                a--;
              }
              e.bl_count[a]--;
              e.bl_count[a + 1] += 2;
              e.bl_count[g]--;
              _ -= 2;
            } while (_ > 0);
            for (a = g; a !== 0; a--) {
              for (n = e.bl_count[a]; n !== 0;) {
                if (!((i = e.heap[--r]) > f)) {
                  if (u[i * 2 + 1] !== a) {
                    e.opt_len += (a - u[i * 2 + 1]) * u[i * 2];
                    u[i * 2 + 1] = a;
                  }
                  n--;
                }
              }
            }
          }
        })(e, t);
        L(a, f, e.bl_count);
      }
      function D(e, t, r) {
        var n;
        var i;
        var a = -1;
        var s = t[1];
        var o = 0;
        var h = 7;
        var u = 4;
        if (s === 0) {
          h = 138;
          u = 3;
        }
        t[(r + 1) * 2 + 1] = 65535;
        n = 0;
        for (; n <= r; n++) {
          i = s;
          s = t[(n + 1) * 2 + 1];
          if (!(++o < h) || i !== s) {
            if (o < u) {
              e.bl_tree[i * 2] += o;
            } else if (i !== 0) {
              if (i !== a) {
                e.bl_tree[i * 2]++;
              }
              e.bl_tree[32]++;
            } else if (o <= 10) {
              e.bl_tree[34]++;
            } else {
              e.bl_tree[36]++;
            }
            o = 0;
            a = i;
            if (s === 0) {
              h = 138;
              u = 3;
            } else if (i === s) {
              h = 6;
              u = 3;
            } else {
              h = 7;
              u = 4;
            }
          }
        }
      }
      function N(e, t, r) {
        var n;
        var i;
        var a = -1;
        var s = t[1];
        var o = 0;
        var h = 7;
        var u = 4;
        if (s === 0) {
          h = 138;
          u = 3;
        }
        n = 0;
        for (; n <= r; n++) {
          i = s;
          s = t[(n + 1) * 2 + 1];
          if (!(++o < h) || i !== s) {
            if (o < u) {
              do {
                T(e, i, e.bl_tree);
              } while (--o !== 0);
            } else if (i !== 0) {
              if (i !== a) {
                T(e, i, e.bl_tree);
                o--;
              }
              T(e, 16, e.bl_tree);
              A(e, o - 3, 2);
            } else if (o <= 10) {
              T(e, 17, e.bl_tree);
              A(e, o - 3, 3);
            } else {
              T(e, 18, e.bl_tree);
              A(e, o - 11, 7);
            }
            o = 0;
            a = i;
            if (s === 0) {
              h = 138;
              u = 3;
            } else if (i === s) {
              h = 6;
              u = 3;
            } else {
              h = 7;
              u = 4;
            }
          }
        }
      }
      i(w);
      var z = false;
      function U(e, t, r, i) {
        A(e, 0 + (i ? 1 : 0), 3);
        (function (e, t, r, i) {
          j(e);
          if (i) {
            S(e, r);
            S(e, ~r);
          }
          n.arraySet(e.pending_buf, e.window, t, r, e.pending);
          e.pending += r;
        })(e, t, r, true);
      }
      r._tr_init = function (e) {
        if (!z) {
          (function () {
            var e;
            var t;
            var r;
            var n;
            var i;
            var a = new Array(16);
            r = 0;
            n = 0;
            for (; n < 28; n++) {
              b[n] = r;
              e = 0;
              for (; e < 1 << u[n]; e++) {
                _[r++] = n;
              }
            }
            _[r - 1] = n;
            i = 0;
            n = 0;
            for (; n < 16; n++) {
              w[n] = i;
              e = 0;
              for (; e < 1 << f[n]; e++) {
                g[i++] = n;
              }
            }
            for (i >>= 7; n < o; n++) {
              w[n] = i << 7;
              e = 0;
              for (; e < 1 << f[n] - 7; e++) {
                g[256 + i++] = n;
              }
            }
            for (t = 0; t <= h; t++) {
              a[t] = 0;
            }
            for (e = 0; e <= 143;) {
              d[e * 2 + 1] = 8;
              e++;
              a[8]++;
            }
            while (e <= 255) {
              d[e * 2 + 1] = 9;
              e++;
              a[9]++;
            }
            while (e <= 279) {
              d[e * 2 + 1] = 7;
              e++;
              a[7]++;
            }
            while (e <= 287) {
              d[e * 2 + 1] = 8;
              e++;
              a[8]++;
            }
            L(d, 287, a);
            e = 0;
            for (; e < o; e++) {
              p[e * 2 + 1] = 5;
              p[e * 2] = I(e, 5);
            }
            v = new k(d, u, 257, s, h);
            y = new k(p, f, 0, o, h);
            m = new k(new Array(0), l, 0, 19, 7);
          })();
          z = true;
        }
        e.l_desc = new E(e.dyn_ltree, v);
        e.d_desc = new E(e.dyn_dtree, y);
        e.bl_desc = new E(e.bl_tree, m);
        e.bi_buf = 0;
        e.bi_valid = 0;
        R(e);
      };
      r._tr_stored_block = U;
      r._tr_flush_block = function (e, t, r, n) {
        var i;
        var s;
        var o = 0;
        if (e.level > 0) {
          if (e.strm.data_type === 2) {
            e.strm.data_type = function (e) {
              var t;
              var r = 4093624447;
              for (t = 0; t <= 31; t++, r >>>= 1) {
                if (r & 1 && e.dyn_ltree[t * 2] !== 0) {
                  return 0;
                }
              }
              if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
                return 1;
              }
              for (t = 32; t < a; t++) {
                if (e.dyn_ltree[t * 2] !== 0) {
                  return 1;
                }
              }
              return 0;
            }(e);
          }
          O(e, e.l_desc);
          O(e, e.d_desc);
          o = function (e) {
            var t;
            D(e, e.dyn_ltree, e.l_desc.max_code);
            D(e, e.dyn_dtree, e.d_desc.max_code);
            O(e, e.bl_desc);
            t = 18;
            for (; t >= 3 && e.bl_tree[c[t] * 2 + 1] === 0; t--);
            e.opt_len += (t + 1) * 3 + 5 + 5 + 4;
            return t;
          }(e);
          i = e.opt_len + 3 + 7 >>> 3;
          if ((s = e.static_len + 3 + 7 >>> 3) <= i) {
            i = s;
          }
        } else {
          i = s = r + 5;
        }
        if (r + 4 <= i && t !== -1) {
          U(e, t, r, n);
        } else if (e.strategy === 4 || s === i) {
          A(e, 2 + (n ? 1 : 0), 3);
          C(e, d, p);
        } else {
          A(e, 4 + (n ? 1 : 0), 3);
          (function (e, t, r, n) {
            var i;
            A(e, t - 257, 5);
            A(e, r - 1, 5);
            A(e, n - 4, 4);
            i = 0;
            for (; i < n; i++) {
              A(e, e.bl_tree[c[i] * 2 + 1], 3);
            }
            N(e, e.dyn_ltree, t - 1);
            N(e, e.dyn_dtree, r - 1);
          })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1);
          C(e, e.dyn_ltree, e.dyn_dtree);
        }
        R(e);
        if (n) {
          j(e);
        }
      };
      r._tr_tally = function (e, t, r) {
        e.pending_buf[e.d_buf + e.last_lit * 2] = t >>> 8 & 255;
        e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255;
        e.pending_buf[e.l_buf + e.last_lit] = r & 255;
        e.last_lit++;
        if (t === 0) {
          e.dyn_ltree[r * 2]++;
        } else {
          e.matches++;
          t--;
          e.dyn_ltree[(_[r] + a + 1) * 2]++;
          e.dyn_dtree[x(t) * 2]++;
        }
        return e.last_lit === e.lit_bufsize - 1;
      };
      r._tr_align = function (e) {
        A(e, 2, 3);
        T(e, 256, d);
        (function (e) {
          if (e.bi_valid === 16) {
            S(e, e.bi_buf);
            e.bi_buf = 0;
            e.bi_valid = 0;
          } else if (e.bi_valid >= 8) {
            e.pending_buf[e.pending++] = e.bi_buf & 255;
            e.bi_buf >>= 8;
            e.bi_valid -= 8;
          }
        })(e);
      };
    }, {
      "../utils/common": 39
    }],
    49: [function (e, t, r) {
      "use strict";

      t.exports = function () {
        this.input = null;
        this.next_in = 0;
        this.avail_in = 0;
        this.total_in = 0;
        this.output = null;
        this.next_out = 0;
        this.avail_out = 0;
        this.total_out = 0;
        this.msg = "";
        this.state = null;
        this.data_type = 2;
        this.adler = 0;
      };
    }, {}],
    50: [function (e, t, r) {
      (function (e) {
        function t(e, t) {
          var r = 0;
          for (var n = e.length - 1; n >= 0; n--) {
            var i = e[n];
            if (i === ".") {
              e.splice(n, 1);
            } else if (i === "..") {
              e.splice(n, 1);
              r++;
            } else if (r) {
              e.splice(n, 1);
              r--;
            }
          }
          if (t) {
            for (; r--; r) {
              e.unshift("..");
            }
          }
          return e;
        }
        var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        var i = function (e) {
          return n.exec(e).slice(1);
        };
        function a(e, t) {
          if (e.filter) {
            return e.filter(t);
          }
          var r = [];
          for (var n = 0; n < e.length; n++) {
            if (t(e[n], n, e)) {
              r.push(e[n]);
            }
          }
          return r;
        }
        r.resolve = function () {
          var r = "";
          for (var n = false, i = arguments.length - 1; i >= -1 && !n; i--) {
            var s = i >= 0 ? arguments[i] : e.cwd();
            if (typeof s != "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            }
            if (s) {
              r = s + "/" + r;
              n = s.charAt(0) === "/";
            }
          }
          return (n ? "/" : "") + (r = t(a(r.split("/"), function (e) {
            return !!e;
          }), !n).join("/")) || ".";
        };
        r.normalize = function (e) {
          var n = r.isAbsolute(e);
          var i = s(e, -1) === "/";
          if (!(e = t(a(e.split("/"), function (e) {
            return !!e;
          }), !n).join("/")) && !n) {
            e = ".";
          }
          if (e && i) {
            e += "/";
          }
          return (n ? "/" : "") + e;
        };
        r.isAbsolute = function (e) {
          return e.charAt(0) === "/";
        };
        r.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return r.normalize(a(e, function (e, t) {
            if (typeof e != "string") {
              throw new TypeError("Arguments to path.join must be strings");
            }
            return e;
          }).join("/"));
        };
        r.relative = function (e, t) {
          function n(e) {
            for (var t = 0; t < e.length && e[t] === ""; t++);
            for (var r = e.length - 1; r >= 0 && e[r] === ""; r--);
            if (t > r) {
              return [];
            } else {
              return e.slice(t, r - t + 1);
            }
          }
          e = r.resolve(e).substr(1);
          t = r.resolve(t).substr(1);
          var i = n(e.split("/"));
          var a = n(t.split("/"));
          for (var s = Math.min(i.length, a.length), o = s, h = 0; h < s; h++) {
            if (i[h] !== a[h]) {
              o = h;
              break;
            }
          }
          var u = [];
          for (h = o; h < i.length; h++) {
            u.push("..");
          }
          return (u = u.concat(a.slice(o))).join("/");
        };
        r.sep = "/";
        r.delimiter = ":";
        r.dirname = function (e) {
          var t = i(e);
          var r = t[0];
          var n = t[1];
          if (r || n) {
            n &&= n.substr(0, n.length - 1);
            return r + n;
          } else {
            return ".";
          }
        };
        r.basename = function (e, t) {
          var r = i(e)[2];
          if (t && r.substr(t.length * -1) === t) {
            r = r.substr(0, r.length - t.length);
          }
          return r;
        };
        r.extname = function (e) {
          return i(e)[3];
        };
        var s = "ab".substr(-1) === "b" ? function (e, t, r) {
          return e.substr(t, r);
        } : function (e, t, r) {
          if (t < 0) {
            t = e.length + t;
          }
          return e.substr(t, r);
        };
      }).call(this, e("_process"));
    }, {
      _process: 73
    }],
    51: [function (e, t, r) {
      (function (t) {
        "use strict";

        var n = e("./interlace");
        var i = {
          1: {
            0: 0,
            1: 0,
            2: 0,
            3: 255
          },
          2: {
            0: 0,
            1: 0,
            2: 0,
            3: 1
          },
          3: {
            0: 0,
            1: 1,
            2: 2,
            3: 255
          },
          4: {
            0: 0,
            1: 1,
            2: 2,
            3: 3
          }
        };
        function a(e, t, r, n, a, s) {
          var o = e.width;
          for (var h = e.height, u = e.index, f = 0; f < h; f++) {
            for (var l = 0; l < o; l++) {
              var c = r(l, f, u);
              for (var d = 0; d < 4; d++) {
                var p = i[n][d];
                if (d === a.length) {
                  throw new Error("Ran out of data");
                }
                t[c + d] = p !== 255 ? a[p + s] : 255;
              }
              s += n;
            }
          }
          return s;
        }
        function s(e, t, r, n, a, s) {
          var o = e.width;
          for (var h = e.height, u = e.index, f = 0; f < h; f++) {
            for (var l = 0; l < o; l++) {
              var c = a.get(n);
              var d = r(l, f, u);
              for (var p = 0; p < 4; p++) {
                var g = i[n][p];
                t[d + p] = g !== 255 ? c[g] : s;
              }
            }
            a.resetAfterLine();
          }
        }
        r.dataToBitMap = function (e, r) {
          var i;
          var o = r.width;
          var h = r.height;
          var u = r.depth;
          var f = r.bpp;
          var l = r.interlace;
          if (u !== 8) {
            var c = function (e, t) {
              var r = [];
              var n = 0;
              function i() {
                if (n === e.length) {
                  throw new Error("Ran out of data");
                }
                var i;
                var a;
                var s;
                var o;
                var h;
                var u;
                var f;
                var l;
                var c = e[n];
                n++;
                switch (t) {
                  default:
                    throw new Error("unrecognised depth");
                  case 16:
                    f = e[n];
                    n++;
                    r.push((c << 8) + f);
                    break;
                  case 4:
                    f = c & 15;
                    l = c >> 4;
                    r.push(l, f);
                    break;
                  case 2:
                    h = c & 3;
                    u = c >> 2 & 3;
                    f = c >> 4 & 3;
                    l = c >> 6 & 3;
                    r.push(l, f, u, h);
                    break;
                  case 1:
                    i = c & 1;
                    a = c >> 1 & 1;
                    s = c >> 2 & 1;
                    o = c >> 3 & 1;
                    h = c >> 4 & 1;
                    u = c >> 5 & 1;
                    f = c >> 6 & 1;
                    l = c >> 7 & 1;
                    r.push(l, f, u, h, o, s, a, i);
                }
              }
              return {
                get: function (e) {
                  while (r.length < e) {
                    i();
                  }
                  var t = r.slice(0, e);
                  r = r.slice(e);
                  return t;
                },
                resetAfterLine: function () {
                  r.length = 0;
                },
                end: function () {
                  if (n !== e.length) {
                    throw new Error("extra data found");
                  }
                }
              };
            }(e, u);
          }
          i = u <= 8 ? new t(o * h * 4) : new Uint16Array(o * h * 4);
          var d;
          var p;
          var g = Math.pow(2, u) - 1;
          var _ = 0;
          if (l) {
            d = n.getImagePasses(o, h);
            p = n.getInterlaceIterator(o, h);
          } else {
            var b = 0;
            p = function () {
              var e = b;
              b += 4;
              return e;
            };
            d = [{
              width: o,
              height: h
            }];
          }
          for (var v = 0; v < d.length; v++) {
            if (u === 8) {
              _ = a(d[v], i, p, f, e, _);
            } else {
              s(d[v], i, p, f, c, g);
            }
          }
          if (u === 8) {
            if (_ !== e.length) {
              throw new Error("extra data found");
            }
          } else {
            c.end();
          }
          return i;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./interlace": 61,
      buffer: 7
    }],
    52: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("./constants");
        t.exports = function (e, t, i, a) {
          var s = a.colorType === n.COLORTYPE_COLOR_ALPHA;
          if (a.inputHasAlpha && s) {
            return e;
          }
          if (!a.inputHasAlpha && !s) {
            return e;
          }
          var o = s ? 4 : 3;
          var h = new r(t * i * o);
          var u = a.inputHasAlpha ? 4 : 3;
          var f = 0;
          var l = 0;
          var c = a.bgColor || {};
          if (c.red === undefined) {
            c.red = 255;
          }
          if (c.green === undefined) {
            c.green = 255;
          }
          if (c.blue === undefined) {
            c.blue = 255;
          }
          for (var d = 0; d < i; d++) {
            for (var p = 0; p < t; p++) {
              var g;
              var _ = e[f];
              var b = e[f + 1];
              var v = e[f + 2];
              if (a.inputHasAlpha) {
                g = e[f + 3];
                if (!s) {
                  g /= 255;
                  _ = Math.min(Math.max(Math.round((1 - g) * c.red + g * _), 0), 255);
                  b = Math.min(Math.max(Math.round((1 - g) * c.green + g * b), 0), 255);
                  v = Math.min(Math.max(Math.round((1 - g) * c.blue + g * v), 0), 255);
                }
              } else {
                g = 255;
              }
              h[l] = _;
              h[l + 1] = b;
              h[l + 2] = v;
              if (s) {
                h[l + 3] = g;
              }
              f += u;
              l += o;
            }
          }
          return h;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./constants": 54,
      buffer: 7
    }],
    53: [function (e, t, r) {
      (function (r, n) {
        "use strict";

        var i = e("util");
        var a = e("stream");
        var s = t.exports = function () {
          a.call(this);
          this._buffers = [];
          this._buffered = 0;
          this._reads = [];
          this._paused = false;
          this._encoding = "utf8";
          this.writable = true;
        };
        i.inherits(s, a);
        s.prototype.read = function (e, t) {
          this._reads.push({
            length: Math.abs(e),
            allowLess: e < 0,
            func: t
          });
          r.nextTick(function () {
            this._process();
            if (this._paused && this._reads.length > 0) {
              this._paused = false;
              this.emit("drain");
            }
          }.bind(this));
        };
        s.prototype.write = function (e, t) {
          if (this.writable) {
            r = n.isBuffer(e) ? e : new n(e, t || this._encoding);
            this._buffers.push(r);
            this._buffered += r.length;
            this._process();
            if (this._reads && this._reads.length === 0) {
              this._paused = true;
            }
            return this.writable && !this._paused;
          } else {
            this.emit("error", new Error("Stream not writable"));
            return false;
          }
          var r;
        };
        s.prototype.end = function (e, t) {
          if (e) {
            this.write(e, t);
          }
          this.writable = false;
          if (this._buffers) {
            if (this._buffers.length === 0) {
              this._end();
            } else {
              this._buffers.push(null);
              this._process();
            }
          }
        };
        s.prototype.destroySoon = s.prototype.end;
        s.prototype._end = function () {
          if (this._reads.length > 0) {
            this.emit("error", new Error("There are some read requests waitng on finished stream"));
          }
          this.destroy();
        };
        s.prototype.destroy = function () {
          if (this._buffers) {
            this.writable = false;
            this._reads = null;
            this._buffers = null;
            this.emit("close");
          }
        };
        s.prototype._processReadAllowingLess = function (e) {
          this._reads.shift();
          var t = this._buffers[0];
          if (t.length > e.length) {
            this._buffered -= e.length;
            this._buffers[0] = t.slice(e.length);
            e.func.call(this, t.slice(0, e.length));
          } else {
            this._buffered -= t.length;
            this._buffers.shift();
            e.func.call(this, t);
          }
        };
        s.prototype._processRead = function (e) {
          this._reads.shift();
          for (var t = 0, r = 0, i = new n(e.length); t < e.length;) {
            var a = this._buffers[r++];
            var s = Math.min(a.length, e.length - t);
            a.copy(i, t, 0, s);
            t += s;
            if (s !== a.length) {
              this._buffers[--r] = a.slice(s);
            }
          }
          if (r > 0) {
            this._buffers.splice(0, r);
          }
          this._buffered -= e.length;
          e.func.call(this, i);
        };
        s.prototype._process = function () {
          try {
            while (this._buffered > 0 && this._reads && this._reads.length > 0) {
              var e = this._reads[0];
              if (e.allowLess) {
                this._processReadAllowingLess(e);
              } else {
                if (!(this._buffered >= e.length)) {
                  break;
                }
                this._processRead(e);
              }
            }
            if (this._buffers && this._buffers.length > 0 && this._buffers[0] === null) {
              this._end();
            }
          } catch (e) {
            this.emit("error", e);
          }
        };
      }).call(this, e("_process"), e("buffer").Buffer);
    }, {
      _process: 73,
      buffer: 7,
      stream: 82,
      util: 104
    }],
    54: [function (e, t, r) {
      "use strict";

      t.exports = {
        PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
        TYPE_IHDR: 1229472850,
        TYPE_IEND: 1229278788,
        TYPE_IDAT: 1229209940,
        TYPE_PLTE: 1347179589,
        TYPE_tRNS: 1951551059,
        TYPE_gAMA: 1732332865,
        COLORTYPE_GRAYSCALE: 0,
        COLORTYPE_PALETTE: 1,
        COLORTYPE_COLOR: 2,
        COLORTYPE_ALPHA: 4,
        COLORTYPE_PALETTE_COLOR: 3,
        COLORTYPE_COLOR_ALPHA: 6,
        COLORTYPE_TO_BPP_MAP: {
          0: 1,
          2: 3,
          3: 1,
          4: 2,
          6: 4
        },
        GAMMA_DIVISION: 100000
      };
    }, {}],
    55: [function (e, t, r) {
      "use strict";

      var n = [];
      (function () {
        for (var e = 0; e < 256; e++) {
          var t = e;
          for (var r = 0; r < 8; r++) {
            if (t & 1) {
              t = t >>> 1 ^ -306674912;
            } else {
              t >>>= 1;
            }
          }
          n[e] = t;
        }
      })();
      var i = t.exports = function () {
        this._crc = -1;
      };
      i.prototype.write = function (e) {
        for (var t = 0; t < e.length; t++) {
          this._crc = n[(this._crc ^ e[t]) & 255] ^ this._crc >>> 8;
        }
        return true;
      };
      i.prototype.crc32 = function () {
        return this._crc ^ -1;
      };
      i.crc32 = function (e) {
        var t = -1;
        for (var r = 0; r < e.length; r++) {
          t = n[(t ^ e[r]) & 255] ^ t >>> 8;
        }
        return t ^ -1;
      };
    }, {}],
    56: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("./paeth-predictor");
        var i = {
          0: function (e, t, r, n, i) {
            e.copy(n, i, t, t + r);
          },
          1: function (e, t, r, n, i, a) {
            for (var s = 0; s < r; s++) {
              var o = s >= a ? e[t + s - a] : 0;
              var h = e[t + s] - o;
              n[i + s] = h;
            }
          },
          2: function (e, t, r, n, i) {
            for (var a = 0; a < r; a++) {
              var s = t > 0 ? e[t + a - r] : 0;
              var o = e[t + a] - s;
              n[i + a] = o;
            }
          },
          3: function (e, t, r, n, i, a) {
            for (var s = 0; s < r; s++) {
              var o = s >= a ? e[t + s - a] : 0;
              var h = t > 0 ? e[t + s - r] : 0;
              var u = e[t + s] - (o + h >> 1);
              n[i + s] = u;
            }
          },
          4: function (e, t, r, i, a, s) {
            for (var o = 0; o < r; o++) {
              var h = o >= s ? e[t + o - s] : 0;
              var u = t > 0 ? e[t + o - r] : 0;
              var f = t > 0 && o >= s ? e[t + o - (r + s)] : 0;
              var l = e[t + o] - n(h, u, f);
              i[a + o] = l;
            }
          }
        };
        var a = {
          0: function (e, t, r) {
            var n = 0;
            for (var i = t + r, a = t; a < i; a++) {
              n += Math.abs(e[a]);
            }
            return n;
          },
          1: function (e, t, r, n) {
            var i = 0;
            for (var a = 0; a < r; a++) {
              var s = a >= n ? e[t + a - n] : 0;
              var o = e[t + a] - s;
              i += Math.abs(o);
            }
            return i;
          },
          2: function (e, t, r) {
            var n = 0;
            for (var i = t + r, a = t; a < i; a++) {
              var s = t > 0 ? e[a - r] : 0;
              var o = e[a] - s;
              n += Math.abs(o);
            }
            return n;
          },
          3: function (e, t, r, n) {
            var i = 0;
            for (var a = 0; a < r; a++) {
              var s = a >= n ? e[t + a - n] : 0;
              var o = t > 0 ? e[t + a - r] : 0;
              var h = e[t + a] - (s + o >> 1);
              i += Math.abs(h);
            }
            return i;
          },
          4: function (e, t, r, i) {
            var a = 0;
            for (var s = 0; s < r; s++) {
              var o = s >= i ? e[t + s - i] : 0;
              var h = t > 0 ? e[t + s - r] : 0;
              var u = t > 0 && s >= i ? e[t + s - (r + i)] : 0;
              var f = e[t + s] - n(o, h, u);
              a += Math.abs(f);
            }
            return a;
          }
        };
        t.exports = function (e, t, n, s, o) {
          var h;
          if ("filterType" in s && s.filterType !== -1) {
            if (typeof s.filterType != "number") {
              throw new Error("unrecognised filter types");
            }
            h = [s.filterType];
          } else {
            h = [0, 1, 2, 3, 4];
          }
          var u = t * o;
          var f = 0;
          var l = 0;
          var c = new r((u + 1) * n);
          var d = h[0];
          for (var p = 0; p < n; p++) {
            if (h.length > 1) {
              var g = Infinity;
              for (var _ = 0; _ < h.length; _++) {
                var b = a[h[_]](e, l, u, o);
                if (b < g) {
                  d = h[_];
                  g = b;
                }
              }
            }
            c[f] = d;
            f++;
            i[d](e, l, u, c, f, o);
            f += u;
            l += u;
          }
          return c;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./paeth-predictor": 65,
      buffer: 7
    }],
    57: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("util");
        var i = e("./chunkstream");
        var a = e("./filter-parse");
        var s = t.exports = function (e) {
          i.call(this);
          var t = [];
          var n = this;
          this._filter = new a(e, {
            read: this.read.bind(this),
            write: function (e) {
              t.push(e);
            },
            complete: function () {
              n.emit("complete", r.concat(t));
            }
          });
          this._filter.start();
        };
        n.inherits(s, i);
      }).call(this, e("buffer").Buffer);
    }, {
      "./chunkstream": 53,
      "./filter-parse": 59,
      buffer: 7,
      util: 104
    }],
    58: [function (e, t, r) {
      (function (t) {
        "use strict";

        var n = e("./sync-reader");
        var i = e("./filter-parse");
        r.process = function (e, r) {
          var a = [];
          var s = new n(e);
          new i(r, {
            read: s.read.bind(s),
            write: function (e) {
              a.push(e);
            },
            complete: function () {}
          }).start();
          s.process();
          return t.concat(a);
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./filter-parse": 59,
      "./sync-reader": 71,
      buffer: 7
    }],
    59: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("./interlace");
        var i = e("./paeth-predictor");
        function a(e, t, r) {
          var n = e * t;
          if (r !== 8) {
            n = Math.ceil(n / (8 / r));
          }
          return n;
        }
        var s = t.exports = function (e, t) {
          var r = e.width;
          var i = e.height;
          var s = e.interlace;
          var o = e.bpp;
          var h = e.depth;
          this.read = t.read;
          this.write = t.write;
          this.complete = t.complete;
          this._imageIndex = 0;
          this._images = [];
          if (s) {
            for (var u = n.getImagePasses(r, i), f = 0; f < u.length; f++) {
              this._images.push({
                byteWidth: a(u[f].width, o, h),
                height: u[f].height,
                lineIndex: 0
              });
            }
          } else {
            this._images.push({
              byteWidth: a(r, o, h),
              height: i,
              lineIndex: 0
            });
          }
          this._xComparison = h === 8 ? o : h === 16 ? o * 2 : 1;
        };
        s.prototype.start = function () {
          this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
        };
        s.prototype._unFilterType1 = function (e, t, r) {
          var n = this._xComparison;
          var i = n - 1;
          for (var a = 0; a < r; a++) {
            var s = e[1 + a];
            var o = a > i ? t[a - n] : 0;
            t[a] = s + o;
          }
        };
        s.prototype._unFilterType2 = function (e, t, r) {
          var n = this._lastLine;
          for (var i = 0; i < r; i++) {
            var a = e[1 + i];
            var s = n ? n[i] : 0;
            t[i] = a + s;
          }
        };
        s.prototype._unFilterType3 = function (e, t, r) {
          var n = this._xComparison;
          var i = n - 1;
          var a = this._lastLine;
          for (var s = 0; s < r; s++) {
            var o = e[1 + s];
            var h = a ? a[s] : 0;
            var u = s > i ? t[s - n] : 0;
            var f = Math.floor((u + h) / 2);
            t[s] = o + f;
          }
        };
        s.prototype._unFilterType4 = function (e, t, r) {
          var n = this._xComparison;
          var a = n - 1;
          var s = this._lastLine;
          for (var o = 0; o < r; o++) {
            var h = e[1 + o];
            var u = s ? s[o] : 0;
            var f = o > a ? t[o - n] : 0;
            var l = o > a && s ? s[o - n] : 0;
            var c = i(f, u, l);
            t[o] = h + c;
          }
        };
        s.prototype._reverseFilterLine = function (e) {
          var t;
          var n = e[0];
          var i = this._images[this._imageIndex];
          var a = i.byteWidth;
          if (n === 0) {
            t = e.slice(1, a + 1);
          } else {
            t = new r(a);
            switch (n) {
              case 1:
                this._unFilterType1(e, t, a);
                break;
              case 2:
                this._unFilterType2(e, t, a);
                break;
              case 3:
                this._unFilterType3(e, t, a);
                break;
              case 4:
                this._unFilterType4(e, t, a);
                break;
              default:
                throw new Error("Unrecognised filter type - " + n);
            }
          }
          this.write(t);
          i.lineIndex++;
          if (i.lineIndex >= i.height) {
            this._lastLine = null;
            this._imageIndex++;
            i = this._images[this._imageIndex];
          } else {
            this._lastLine = t;
          }
          if (i) {
            this.read(i.byteWidth + 1, this._reverseFilterLine.bind(this));
          } else {
            this._lastLine = null;
            this.complete();
          }
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./interlace": 61,
      "./paeth-predictor": 65,
      buffer: 7
    }],
    60: [function (e, t, r) {
      (function (e) {
        "use strict";

        t.exports = function (t, r) {
          var n = r.depth;
          var i = r.width;
          var a = r.height;
          var s = r.colorType;
          var o = r.transColor;
          var h = r.palette;
          var u = t;
          if (s === 3) {
            (function (e, t, r, n, i) {
              var a = 0;
              for (var s = 0; s < n; s++) {
                for (var o = 0; o < r; o++) {
                  var h = i[e[a]];
                  if (!h) {
                    throw new Error("index " + e[a] + " not in palette");
                  }
                  for (var u = 0; u < 4; u++) {
                    t[a + u] = h[u];
                  }
                  a += 4;
                }
              }
            })(t, u, i, a, h);
          } else {
            if (o) {
              (function (e, t, r, n, i) {
                var a = 0;
                for (var s = 0; s < n; s++) {
                  for (var o = 0; o < r; o++) {
                    var h = false;
                    if (i.length === 1) {
                      if (i[0] === e[a]) {
                        h = true;
                      }
                    } else if (i[0] === e[a] && i[1] === e[a + 1] && i[2] === e[a + 2]) {
                      h = true;
                    }
                    if (h) {
                      for (var u = 0; u < 4; u++) {
                        t[a + u] = 0;
                      }
                    }
                    a += 4;
                  }
                }
              })(t, u, i, a, o);
            }
            if (n !== 8) {
              if (n === 16) {
                u = new e(i * a * 4);
              }
              (function (e, t, r, n, i) {
                var a = Math.pow(2, i) - 1;
                var s = 0;
                for (var o = 0; o < n; o++) {
                  for (var h = 0; h < r; h++) {
                    for (var u = 0; u < 4; u++) {
                      t[s + u] = Math.floor(e[s + u] * 255 / a + 0.5);
                    }
                    s += 4;
                  }
                }
              })(t, u, i, a, n);
            }
          }
          return u;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      buffer: 7
    }],
    61: [function (e, t, r) {
      "use strict";

      var n = [{
        x: [0],
        y: [0]
      }, {
        x: [4],
        y: [0]
      }, {
        x: [0, 4],
        y: [4]
      }, {
        x: [2, 6],
        y: [0, 4]
      }, {
        x: [0, 2, 4, 6],
        y: [2, 6]
      }, {
        x: [1, 3, 5, 7],
        y: [0, 2, 4, 6]
      }, {
        x: [0, 1, 2, 3, 4, 5, 6, 7],
        y: [1, 3, 5, 7]
      }];
      r.getImagePasses = function (e, t) {
        var r = [];
        var i = e % 8;
        var a = t % 8;
        var s = (e - i) / 8;
        var o = (t - a) / 8;
        for (var h = 0; h < n.length; h++) {
          for (var u = n[h], f = s * u.x.length, l = o * u.y.length, c = 0; c < u.x.length && u.x[c] < i; c++) {
            f++;
          }
          for (c = 0; c < u.y.length && u.y[c] < a; c++) {
            l++;
          }
          if (f > 0 && l > 0) {
            r.push({
              width: f,
              height: l,
              index: h
            });
          }
        }
        return r;
      };
      r.getInterlaceIterator = function (e) {
        return function (t, r, i) {
          var a = t % n[i].x.length;
          var s = (t - a) / n[i].x.length * 8 + n[i].x[a];
          var o = r % n[i].y.length;
          return s * 4 + ((r - o) / n[i].y.length * 8 + n[i].y[o]) * e * 4;
        };
      };
    }, {}],
    62: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("util");
        var i = e("stream");
        var a = e("./constants");
        var s = e("./packer");
        var o = t.exports = function (e) {
          i.call(this);
          var t = e || {};
          this._packer = new s(t);
          this._deflate = this._packer.createDeflate();
          this.readable = true;
        };
        n.inherits(o, i);
        o.prototype.pack = function (e, t, n, i) {
          this.emit("data", new r(a.PNG_SIGNATURE));
          this.emit("data", this._packer.packIHDR(t, n));
          if (i) {
            this.emit("data", this._packer.packGAMA(i));
          }
          var s = this._packer.filterData(e, t, n);
          this._deflate.on("error", this.emit.bind(this, "error"));
          this._deflate.on("data", function (e) {
            this.emit("data", this._packer.packIDAT(e));
          }.bind(this));
          this._deflate.on("end", function () {
            this.emit("data", this._packer.packIEND());
            this.emit("end");
          }.bind(this));
          this._deflate.end(s);
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./constants": 54,
      "./packer": 64,
      buffer: 7,
      stream: 82,
      util: 104
    }],
    63: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = true;
        var i = e("zlib");
        if (!i.deflateSync) {
          n = false;
        }
        var a = e("./constants");
        var s = e("./packer");
        t.exports = function (e, t) {
          if (!n) {
            throw new Error("To use the sync capability of this library in old node versions, please also add a dependency on node-zlb-backport");
          }
          var o = new s(t || {});
          var h = [];
          h.push(new r(a.PNG_SIGNATURE));
          h.push(o.packIHDR(e.width, e.height));
          if (e.gamma) {
            h.push(o.packGAMA(e.gamma));
          }
          var u = o.filterData(e.data, e.width, e.height);
          var f = i.deflateSync(u, o.getDeflateOptions());
          u = null;
          if (!f || !f.length) {
            throw new Error("bad png - invalid compressed data response");
          }
          h.push(o.packIDAT(f));
          h.push(o.packIEND());
          return r.concat(h);
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./constants": 54,
      "./packer": 64,
      buffer: 7,
      zlib: 6
    }],
    64: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("./constants");
        var i = e("./crc");
        var a = e("./bitpacker");
        var s = e("./filter-pack");
        var o = e("zlib");
        var h = t.exports = function (e) {
          this._options = e;
          e.deflateChunkSize = e.deflateChunkSize || 32768;
          e.deflateLevel = e.deflateLevel ?? 9;
          e.deflateStrategy = e.deflateStrategy ?? 3;
          e.inputHasAlpha = e.inputHasAlpha == null || e.inputHasAlpha;
          e.deflateFactory = e.deflateFactory || o.createDeflate;
          e.bitDepth = e.bitDepth || 8;
          e.colorType = typeof e.colorType == "number" ? e.colorType : n.COLORTYPE_COLOR_ALPHA;
          if (e.colorType !== n.COLORTYPE_COLOR && e.colorType !== n.COLORTYPE_COLOR_ALPHA) {
            throw new Error("option color type:" + e.colorType + " is not supported at present");
          }
          if (e.bitDepth !== 8) {
            throw new Error("option bit depth:" + e.bitDepth + " is not supported at present");
          }
        };
        h.prototype.getDeflateOptions = function () {
          return {
            chunkSize: this._options.deflateChunkSize,
            level: this._options.deflateLevel,
            strategy: this._options.deflateStrategy
          };
        };
        h.prototype.createDeflate = function () {
          return this._options.deflateFactory(this.getDeflateOptions());
        };
        h.prototype.filterData = function (e, t, r) {
          var i = a(e, t, r, this._options);
          var o = n.COLORTYPE_TO_BPP_MAP[this._options.colorType];
          return s(i, t, r, this._options, o);
        };
        h.prototype._packChunk = function (e, t) {
          var n = t ? t.length : 0;
          var a = new r(n + 12);
          a.writeUInt32BE(n, 0);
          a.writeUInt32BE(e, 4);
          if (t) {
            t.copy(a, 8);
          }
          a.writeInt32BE(i.crc32(a.slice(4, a.length - 4)), a.length - 4);
          return a;
        };
        h.prototype.packGAMA = function (e) {
          var t = new r(4);
          t.writeUInt32BE(Math.floor(e * n.GAMMA_DIVISION), 0);
          return this._packChunk(n.TYPE_gAMA, t);
        };
        h.prototype.packIHDR = function (e, t) {
          var i = new r(13);
          i.writeUInt32BE(e, 0);
          i.writeUInt32BE(t, 4);
          i[8] = this._options.bitDepth;
          i[9] = this._options.colorType;
          i[10] = 0;
          i[11] = 0;
          i[12] = 0;
          return this._packChunk(n.TYPE_IHDR, i);
        };
        h.prototype.packIDAT = function (e) {
          return this._packChunk(n.TYPE_IDAT, e);
        };
        h.prototype.packIEND = function () {
          return this._packChunk(n.TYPE_IEND, null);
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./bitpacker": 52,
      "./constants": 54,
      "./crc": 55,
      "./filter-pack": 56,
      buffer: 7,
      zlib: 6
    }],
    65: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r) {
        var n = e + t - r;
        var i = Math.abs(n - e);
        var a = Math.abs(n - t);
        var s = Math.abs(n - r);
        if (i <= a && i <= s) {
          return e;
        } else if (a <= s) {
          return t;
        } else {
          return r;
        }
      };
    }, {}],
    66: [function (e, t, r) {
      "use strict";

      var n = e("util");
      var i = e("zlib");
      var a = e("./chunkstream");
      var s = e("./filter-parse-async");
      var o = e("./parser");
      var h = e("./bitmapper");
      var u = e("./format-normaliser");
      var f = t.exports = function (e) {
        a.call(this);
        this._parser = new o(e, {
          read: this.read.bind(this),
          error: this._handleError.bind(this),
          metadata: this._handleMetaData.bind(this),
          gamma: this.emit.bind(this, "gamma"),
          palette: this._handlePalette.bind(this),
          transColor: this._handleTransColor.bind(this),
          finished: this._finished.bind(this),
          inflateData: this._inflateData.bind(this)
        });
        this._options = e;
        this.writable = true;
        this._parser.start();
      };
      n.inherits(f, a);
      f.prototype._handleError = function (e) {
        this.emit("error", e);
        this.writable = false;
        this.destroy();
        if (this._inflate && this._inflate.destroy) {
          this._inflate.destroy();
        }
        this.errord = true;
      };
      f.prototype._inflateData = function (e) {
        if (!this._inflate) {
          this._inflate = i.createInflate();
          this._inflate.on("error", this.emit.bind(this, "error"));
          this._filter.on("complete", this._complete.bind(this));
          this._inflate.pipe(this._filter);
        }
        this._inflate.write(e);
      };
      f.prototype._handleMetaData = function (e) {
        this.emit("metadata", e);
        this._bitmapInfo = Object.create(e);
        this._filter = new s(this._bitmapInfo);
      };
      f.prototype._handleTransColor = function (e) {
        this._bitmapInfo.transColor = e;
      };
      f.prototype._handlePalette = function (e) {
        this._bitmapInfo.palette = e;
      };
      f.prototype._finished = function () {
        if (!this.errord) {
          if (this._inflate) {
            this._inflate.end();
          } else {
            this.emit("error", "No Inflate block");
          }
          this.destroySoon();
        }
      };
      f.prototype._complete = function (e) {
        if (!this.errord) {
          try {
            var t = h.dataToBitMap(e, this._bitmapInfo);
            var r = u(t, this._bitmapInfo);
            t = null;
          } catch (e) {
            this._handleError(e);
            return;
          }
          this.emit("parsed", r);
        }
      };
    }, {
      "./bitmapper": 51,
      "./chunkstream": 53,
      "./filter-parse-async": 57,
      "./format-normaliser": 60,
      "./parser": 68,
      util: 104,
      zlib: 6
    }],
    67: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = true;
        var i = e("zlib");
        if (!i.deflateSync) {
          n = false;
        }
        var a = e("./sync-reader");
        var s = e("./filter-parse-sync");
        var o = e("./parser");
        var h = e("./bitmapper");
        var u = e("./format-normaliser");
        t.exports = function (e, t) {
          if (!n) {
            throw new Error("To use the sync capability of this library in old node versions, please also add a dependency on node-zlb-backport");
          }
          var f;
          var l;
          var c;
          var d = [];
          var p = new a(e);
          var g = new o(t, {
            read: p.read.bind(p),
            error: function (e) {
              f = e;
            },
            metadata: function (e) {
              l = e;
            },
            gamma: function (e) {
              c = e;
            },
            palette: function (e) {
              l.palette = e;
            },
            transColor: function (e) {
              l.transColor = e;
            },
            inflateData: function (e) {
              d.push(e);
            }
          });
          g.start();
          p.process();
          if (f) {
            throw f;
          }
          var _ = r.concat(d);
          d.length = 0;
          var b = i.inflateSync(_);
          _ = null;
          if (!b || !b.length) {
            throw new Error("bad png - invalid inflate data response");
          }
          var v = s.process(b, l);
          _ = null;
          var y = h.dataToBitMap(v, l);
          v = null;
          var m = u(y, l);
          l.data = m;
          l.gamma = c || 0;
          return l;
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./bitmapper": 51,
      "./filter-parse-sync": 58,
      "./format-normaliser": 60,
      "./parser": 68,
      "./sync-reader": 71,
      buffer: 7,
      zlib: 6
    }],
    68: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("./constants");
        var i = e("./crc");
        var a = t.exports = function (e, t) {
          this._options = e;
          e.checkCRC = e.checkCRC !== false;
          this._hasIHDR = false;
          this._hasIEND = false;
          this._palette = [];
          this._colorType = 0;
          this._chunks = {};
          this._chunks[n.TYPE_IHDR] = this._handleIHDR.bind(this);
          this._chunks[n.TYPE_IEND] = this._handleIEND.bind(this);
          this._chunks[n.TYPE_IDAT] = this._handleIDAT.bind(this);
          this._chunks[n.TYPE_PLTE] = this._handlePLTE.bind(this);
          this._chunks[n.TYPE_tRNS] = this._handleTRNS.bind(this);
          this._chunks[n.TYPE_gAMA] = this._handleGAMA.bind(this);
          this.read = t.read;
          this.error = t.error;
          this.metadata = t.metadata;
          this.gamma = t.gamma;
          this.transColor = t.transColor;
          this.palette = t.palette;
          this.parsed = t.parsed;
          this.inflateData = t.inflateData;
          this.inflateData = t.inflateData;
          this.finished = t.finished;
        };
        a.prototype.start = function () {
          this.read(n.PNG_SIGNATURE.length, this._parseSignature.bind(this));
        };
        a.prototype._parseSignature = function (e) {
          for (var t = n.PNG_SIGNATURE, r = 0; r < t.length; r++) {
            if (e[r] !== t[r]) {
              this.error(new Error("Invalid file signature"));
              return;
            }
          }
          this.read(8, this._parseChunkBegin.bind(this));
        };
        a.prototype._parseChunkBegin = function (e) {
          var t = e.readUInt32BE(0);
          var a = e.readUInt32BE(4);
          var s = "";
          for (var o = 4; o < 8; o++) {
            s += String.fromCharCode(e[o]);
          }
          var h = Boolean(e[4] & 32);
          if (this._hasIHDR || a === n.TYPE_IHDR) {
            this._crc = new i();
            this._crc.write(new r(s));
            if (this._chunks[a]) {
              return this._chunks[a](t);
            }
            if (h) {
              this.read(t + 4, this._skipChunk.bind(this));
            } else {
              this.error(new Error("Unsupported critical chunk type " + s));
            }
          } else {
            this.error(new Error("Expected IHDR on beggining"));
          }
        };
        a.prototype._skipChunk = function () {
          this.read(8, this._parseChunkBegin.bind(this));
        };
        a.prototype._handleChunkEnd = function () {
          this.read(4, this._parseChunkEnd.bind(this));
        };
        a.prototype._parseChunkEnd = function (e) {
          var t = e.readInt32BE(0);
          var r = this._crc.crc32();
          if (this._options.checkCRC && r !== t) {
            this.error(new Error("Crc error - " + t + " - " + r));
          } else if (!this._hasIEND) {
            this.read(8, this._parseChunkBegin.bind(this));
          }
        };
        a.prototype._handleIHDR = function (e) {
          this.read(e, this._parseIHDR.bind(this));
        };
        a.prototype._parseIHDR = function (e) {
          this._crc.write(e);
          var t = e.readUInt32BE(0);
          var r = e.readUInt32BE(4);
          var i = e[8];
          var a = e[9];
          var s = e[10];
          var o = e[11];
          var h = e[12];
          if (i === 8 || i === 4 || i === 2 || i === 1 || i === 16) {
            if (a in n.COLORTYPE_TO_BPP_MAP) {
              if (s === 0) {
                if (o === 0) {
                  if (h === 0 || h === 1) {
                    this._colorType = a;
                    var u = n.COLORTYPE_TO_BPP_MAP[this._colorType];
                    this._hasIHDR = true;
                    this.metadata({
                      width: t,
                      height: r,
                      depth: i,
                      interlace: Boolean(h),
                      palette: Boolean(a & n.COLORTYPE_PALETTE),
                      color: Boolean(a & n.COLORTYPE_COLOR),
                      alpha: Boolean(a & n.COLORTYPE_ALPHA),
                      bpp: u,
                      colorType: a
                    });
                    this._handleChunkEnd();
                  } else {
                    this.error(new Error("Unsupported interlace method"));
                  }
                } else {
                  this.error(new Error("Unsupported filter method"));
                }
              } else {
                this.error(new Error("Unsupported compression method"));
              }
            } else {
              this.error(new Error("Unsupported color type"));
            }
          } else {
            this.error(new Error("Unsupported bit depth " + i));
          }
        };
        a.prototype._handlePLTE = function (e) {
          this.read(e, this._parsePLTE.bind(this));
        };
        a.prototype._parsePLTE = function (e) {
          this._crc.write(e);
          for (var t = Math.floor(e.length / 3), r = 0; r < t; r++) {
            this._palette.push([e[r * 3], e[r * 3 + 1], e[r * 3 + 2], 255]);
          }
          this.palette(this._palette);
          this._handleChunkEnd();
        };
        a.prototype._handleTRNS = function (e) {
          this.read(e, this._parseTRNS.bind(this));
        };
        a.prototype._parseTRNS = function (e) {
          this._crc.write(e);
          if (this._colorType === n.COLORTYPE_PALETTE_COLOR) {
            if (this._palette.length === 0) {
              this.error(new Error("Transparency chunk must be after palette"));
              return;
            }
            if (e.length > this._palette.length) {
              this.error(new Error("More transparent colors than palette size"));
              return;
            }
            for (var t = 0; t < e.length; t++) {
              this._palette[t][3] = e[t];
            }
            this.palette(this._palette);
          }
          if (this._colorType === n.COLORTYPE_GRAYSCALE) {
            this.transColor([e.readUInt16BE(0)]);
          }
          if (this._colorType === n.COLORTYPE_COLOR) {
            this.transColor([e.readUInt16BE(0), e.readUInt16BE(2), e.readUInt16BE(4)]);
          }
          this._handleChunkEnd();
        };
        a.prototype._handleGAMA = function (e) {
          this.read(e, this._parseGAMA.bind(this));
        };
        a.prototype._parseGAMA = function (e) {
          this._crc.write(e);
          this.gamma(e.readUInt32BE(0) / n.GAMMA_DIVISION);
          this._handleChunkEnd();
        };
        a.prototype._handleIDAT = function (e) {
          this.read(-e, this._parseIDAT.bind(this, e));
        };
        a.prototype._parseIDAT = function (e, t) {
          this._crc.write(t);
          if (this._colorType === n.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
            throw new Error("Expected palette not found");
          }
          this.inflateData(t);
          var r = e - t.length;
          if (r > 0) {
            this._handleIDAT(r);
          } else {
            this._handleChunkEnd();
          }
        };
        a.prototype._handleIEND = function (e) {
          this.read(e, this._parseIEND.bind(this));
        };
        a.prototype._parseIEND = function (e) {
          this._crc.write(e);
          this._hasIEND = true;
          this._handleChunkEnd();
          if (this.finished) {
            this.finished();
          }
        };
      }).call(this, e("buffer").Buffer);
    }, {
      "./constants": 54,
      "./crc": 55,
      buffer: 7
    }],
    69: [function (e, t, r) {
      "use strict";

      var n = e("./parser-sync");
      var i = e("./packer-sync");
      r.read = function (e, t) {
        return n(e, t || {});
      };
      r.write = function (e) {
        return i(e);
      };
    }, {
      "./packer-sync": 63,
      "./parser-sync": 67
    }],
    70: [function (e, t, r) {
      (function (t, n) {
        "use strict";

        var i = e("util");
        var a = e("stream");
        var s = e("./parser-async");
        var o = e("./packer-async");
        var h = e("./png-sync");
        var u = r.PNG = function (e) {
          a.call(this);
          e = e || {};
          this.width = e.width || 0;
          this.height = e.height || 0;
          this.data = this.width > 0 && this.height > 0 ? new n(this.width * 4 * this.height) : null;
          if (e.fill && this.data) {
            this.data.fill(0);
          }
          this.gamma = 0;
          this.readable = this.writable = true;
          this._parser = new s(e);
          this._parser.on("error", this.emit.bind(this, "error"));
          this._parser.on("close", this._handleClose.bind(this));
          this._parser.on("metadata", this._metadata.bind(this));
          this._parser.on("gamma", this._gamma.bind(this));
          this._parser.on("parsed", function (e) {
            this.data = e;
            this.emit("parsed", e);
          }.bind(this));
          this._packer = new o(e);
          this._packer.on("data", this.emit.bind(this, "data"));
          this._packer.on("end", this.emit.bind(this, "end"));
          this._parser.on("close", this._handleClose.bind(this));
          this._packer.on("error", this.emit.bind(this, "error"));
        };
        i.inherits(u, a);
        u.sync = h;
        u.prototype.pack = function () {
          if (this.data && this.data.length) {
            t.nextTick(function () {
              this._packer.pack(this.data, this.width, this.height, this.gamma);
            }.bind(this));
            return this;
          } else {
            this.emit("error", "No data provided");
            return this;
          }
        };
        u.prototype.parse = function (e, t) {
          var r;
          var n;
          if (t) {
            r = function (e) {
              this.removeListener("error", n);
              this.data = e;
              t(null, this);
            }.bind(this);
            n = function (e) {
              this.removeListener("parsed", r);
              t(e, null);
            }.bind(this);
            this.once("parsed", r);
            this.once("error", n);
          }
          this.end(e);
          return this;
        };
        u.prototype.write = function (e) {
          this._parser.write(e);
          return true;
        };
        u.prototype.end = function (e) {
          this._parser.end(e);
        };
        u.prototype._metadata = function (e) {
          this.width = e.width;
          this.height = e.height;
          this.emit("metadata", e);
        };
        u.prototype._gamma = function (e) {
          this.gamma = e;
        };
        u.prototype._handleClose = function () {
          if (!this._parser.writable && !this._packer.readable) {
            this.emit("close");
          }
        };
        u.bitblt = function (e, t, r, n, i, a, s, o) {
          if (r > e.width || n > e.height || r + i > e.width || n + a > e.height) {
            throw new Error("bitblt reading outside image");
          }
          if (s > t.width || o > t.height || s + i > t.width || o + a > t.height) {
            throw new Error("bitblt writing outside image");
          }
          for (var h = 0; h < a; h++) {
            e.data.copy(t.data, (o + h) * t.width + s << 2, (n + h) * e.width + r << 2, (n + h) * e.width + r + i << 2);
          }
        };
        u.prototype.bitblt = function (e, t, r, n, i, a, s) {
          u.bitblt(this, e, t, r, n, i, a, s);
          return this;
        };
        u.adjustGamma = function (e) {
          if (e.gamma) {
            for (var t = 0; t < e.height; t++) {
              for (var r = 0; r < e.width; r++) {
                var n = e.width * t + r << 2;
                for (var i = 0; i < 3; i++) {
                  var a = e.data[n + i] / 255;
                  a = Math.pow(a, 1 / 2.2 / e.gamma);
                  e.data[n + i] = Math.round(a * 255);
                }
              }
            }
            e.gamma = 0;
          }
        };
        u.prototype.adjustGamma = function () {
          u.adjustGamma(this);
        };
      }).call(this, e("_process"), e("buffer").Buffer);
    }, {
      "./packer-async": 62,
      "./parser-async": 66,
      "./png-sync": 69,
      _process: 73,
      buffer: 7,
      stream: 82,
      util: 104
    }],
    71: [function (e, t, r) {
      "use strict";

      var n = t.exports = function (e) {
        this._buffer = e;
        this._reads = [];
      };
      n.prototype.read = function (e, t) {
        this._reads.push({
          length: Math.abs(e),
          allowLess: e < 0,
          func: t
        });
      };
      n.prototype.process = function () {
        while (this._reads.length > 0 && this._buffer.length) {
          var e = this._reads[0];
          if (!this._buffer.length || !(this._buffer.length >= e.length) && !e.allowLess) {
            break;
          }
          this._reads.shift();
          var t = this._buffer;
          this._buffer = t.slice(e.length);
          e.func.call(this, t.slice(0, e.length));
        }
        if (this._reads.length > 0) {
          return new Error("There are some read requests waitng on finished stream");
        } else if (this._buffer.length > 0) {
          return new Error("unrecognised content at end of stream");
        } else {
          return undefined;
        }
      };
    }, {}],
    72: [function (e, t, r) {
      (function (e) {
        "use strict";

        if (!e.version || e.version.indexOf("v0.") === 0 || e.version.indexOf("v1.") === 0 && e.version.indexOf("v1.8.") !== 0) {
          t.exports = function (t, r, n, i) {
            if (typeof t != "function") {
              throw new TypeError("\"callback\" argument must be a function");
            }
            var a;
            var s;
            var o = arguments.length;
            switch (o) {
              case 0:
              case 1:
                return e.nextTick(t);
              case 2:
                return e.nextTick(function () {
                  t.call(null, r);
                });
              case 3:
                return e.nextTick(function () {
                  t.call(null, r, n);
                });
              case 4:
                return e.nextTick(function () {
                  t.call(null, r, n, i);
                });
              default:
                a = new Array(o - 1);
                s = 0;
                while (s < a.length) {
                  a[s++] = arguments[s];
                }
                return e.nextTick(function () {
                  t.apply(null, a);
                });
            }
          };
        } else {
          t.exports = e.nextTick;
        }
      }).call(this, e("_process"));
    }, {
      _process: 73
    }],
    73: [function (e, t, r) {
      var n;
      var i;
      var a = t.exports = {};
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function h(e) {
        if (n === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((n === s || !n) && setTimeout) {
          n = setTimeout;
          return setTimeout(e, 0);
        }
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      (function () {
        try {
          n = typeof setTimeout == "function" ? setTimeout : s;
        } catch (e) {
          n = s;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : o;
        } catch (e) {
          i = o;
        }
      })();
      var u;
      var f = [];
      var l = false;
      var c = -1;
      function d() {
        if (l && u) {
          l = false;
          if (u.length) {
            f = u.concat(f);
          } else {
            c = -1;
          }
          if (f.length) {
            p();
          }
        }
      }
      function p() {
        if (!l) {
          var e = h(d);
          l = true;
          for (var t = f.length; t;) {
            u = f;
            f = [];
            while (++c < t) {
              if (u) {
                u[c].run();
              }
            }
            c = -1;
            t = f.length;
          }
          u = null;
          l = false;
          (function (e) {
            if (i === clearTimeout) {
              return clearTimeout(e);
            }
            if ((i === o || !i) && clearTimeout) {
              i = clearTimeout;
              return clearTimeout(e);
            }
            try {
              return i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
        }
      }
      function g(e, t) {
        this.fun = e;
        this.array = t;
      }
      function _() {}
      a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        f.push(new g(e, t));
        if (f.length === 1 && !l) {
          h(p);
        }
      };
      g.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      a.title = "browser";
      a.browser = true;
      a.env = {};
      a.argv = [];
      a.version = "";
      a.versions = {};
      a.on = _;
      a.addListener = _;
      a.once = _;
      a.off = _;
      a.removeListener = _;
      a.removeAllListeners = _;
      a.emit = _;
      a.prependListener = _;
      a.prependOnceListener = _;
      a.listeners = function (e) {
        return [];
      };
      a.binding = function (e) {
        throw new Error("process.binding is not supported");
      };
      a.cwd = function () {
        return "/";
      };
      a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      };
      a.umask = function () {
        return 0;
      };
    }, {}],
    74: [function (e, t, r) {
      arguments[4][19][0].apply(r, arguments);
    }, {
      "./_stream_readable": 76,
      "./_stream_writable": 78,
      _process: 73,
      "core-util-is": 9,
      dup: 19,
      inherits: 26
    }],
    75: [function (e, t, r) {
      arguments[4][20][0].apply(r, arguments);
    }, {
      "./_stream_transform": 77,
      "core-util-is": 9,
      dup: 20,
      inherits: 26
    }],
    76: [function (e, t, r) {
      (function (r) {
        t.exports = f;
        var n = e("isarray");
        var i = e("buffer").Buffer;
        f.ReadableState = u;
        var a = e("events").EventEmitter;
        a.listenerCount ||= function (e, t) {
          return e.listeners(t).length;
        };
        var s;
        var o = e("stream");
        var h = e("core-util-is");
        function u(t, r) {
          var n = (t = t || {}).highWaterMark;
          this.highWaterMark = n || n === 0 ? n : 16384;
          this.highWaterMark = ~~this.highWaterMark;
          this.buffer = [];
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = false;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false;
          this.calledRead = false;
          this.sync = true;
          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.objectMode = !!t.objectMode;
          this.defaultEncoding = t.defaultEncoding || "utf8";
          this.ranOut = false;
          this.awaitDrain = 0;
          this.readingMore = false;
          this.decoder = null;
          this.encoding = null;
          if (t.encoding) {
            s ||= e("string_decoder/").StringDecoder;
            this.decoder = new s(t.encoding);
            this.encoding = t.encoding;
          }
        }
        function f(e) {
          if (!(this instanceof f)) {
            return new f(e);
          }
          this._readableState = new u(e, this);
          this.readable = true;
          o.call(this);
        }
        function l(e, t, n, a, s) {
          var o = function (e, t) {
            var r = null;
            if (!i.isBuffer(t) && typeof t != "string" && t != null && !e.objectMode) {
              r = new TypeError("Invalid non-string/buffer chunk");
            }
            return r;
          }(t, n);
          if (o) {
            e.emit("error", o);
          } else if (n == null) {
            t.reading = false;
            if (!t.ended) {
              (function (e, t) {
                if (t.decoder && !t.ended) {
                  var r = t.decoder.end();
                  if (r && r.length) {
                    t.buffer.push(r);
                    t.length += t.objectMode ? 1 : r.length;
                  }
                }
                t.ended = true;
                if (t.length > 0) {
                  p(e);
                } else {
                  m(e);
                }
              })(e, t);
            }
          } else if (t.objectMode || n && n.length > 0) {
            if (t.ended && !s) {
              var h = new Error("stream.push() after EOF");
              e.emit("error", h);
            } else if (t.endEmitted && s) {
              h = new Error("stream.unshift() after end event");
              e.emit("error", h);
            } else {
              if (!!t.decoder && !s && !a) {
                n = t.decoder.write(n);
              }
              t.length += t.objectMode ? 1 : n.length;
              if (s) {
                t.buffer.unshift(n);
              } else {
                t.reading = false;
                t.buffer.push(n);
              }
              if (t.needReadable) {
                p(e);
              }
              (function (e, t) {
                if (!t.readingMore) {
                  t.readingMore = true;
                  r.nextTick(function () {
                    (function (e, t) {
                      var r = t.length;
                      while (!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (e.read(0), r !== t.length)) {
                        r = t.length;
                      }
                      t.readingMore = false;
                    })(e, t);
                  });
                }
              })(e, t);
            }
          } else if (!s) {
            t.reading = false;
          }
          return function (e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
          }(t);
        }
        h.inherits = e("inherits");
        h.inherits(f, o);
        f.prototype.push = function (e, t) {
          var r = this._readableState;
          if (typeof e == "string" && !r.objectMode) {
            if ((t = t || r.defaultEncoding) !== r.encoding) {
              e = new i(e, t);
              t = "";
            }
          }
          return l(this, r, e, t, false);
        };
        f.prototype.unshift = function (e) {
          return l(this, this._readableState, e, "", true);
        };
        f.prototype.setEncoding = function (t) {
          s ||= e("string_decoder/").StringDecoder;
          this._readableState.decoder = new s(t);
          this._readableState.encoding = t;
        };
        var c = 8388608;
        function d(e, t) {
          if (t.length === 0 && t.ended) {
            return 0;
          } else if (t.objectMode) {
            if (e === 0) {
              return 0;
            } else {
              return 1;
            }
          } else if (e === null || isNaN(e)) {
            if (t.flowing && t.buffer.length) {
              return t.buffer[0].length;
            } else {
              return t.length;
            }
          } else if (e <= 0) {
            return 0;
          } else {
            if (e > t.highWaterMark) {
              t.highWaterMark = function (e) {
                if (e >= c) {
                  e = c;
                } else {
                  e--;
                  for (var t = 1; t < 32; t <<= 1) {
                    e |= e >> t;
                  }
                  e++;
                }
                return e;
              }(e);
            }
            if (e > t.length) {
              if (t.ended) {
                return t.length;
              } else {
                t.needReadable = true;
                return 0;
              }
            } else {
              return e;
            }
          }
        }
        function p(e) {
          var t = e._readableState;
          t.needReadable = false;
          if (!t.emittedReadable) {
            t.emittedReadable = true;
            if (t.sync) {
              r.nextTick(function () {
                g(e);
              });
            } else {
              g(e);
            }
          }
        }
        function g(e) {
          e.emit("readable");
        }
        function _(e) {
          var t;
          var r = e._readableState;
          function n(e, n, i) {
            if (e.write(t) === false) {
              r.awaitDrain++;
            }
          }
          for (r.awaitDrain = 0; r.pipesCount && (t = e.read()) !== null;) {
            if (r.pipesCount === 1) {
              n(r.pipes);
            } else {
              w(r.pipes, n);
            }
            e.emit("data", t);
            if (r.awaitDrain > 0) {
              return;
            }
          }
          if (r.pipesCount === 0) {
            r.flowing = false;
            if (a.listenerCount(e, "data") > 0) {
              v(e);
            }
            return;
          }
          r.ranOut = true;
        }
        function b() {
          if (this._readableState.ranOut) {
            this._readableState.ranOut = false;
            _(this);
          }
        }
        function v(e, t) {
          if (e._readableState.flowing) {
            throw new Error("Cannot switch to old mode now.");
          }
          var n = t || false;
          var i = false;
          e.readable = true;
          e.pipe = o.prototype.pipe;
          e.on = e.addListener = o.prototype.on;
          e.on("readable", function () {
            var t;
            for (i = true; !n && (t = e.read()) !== null;) {
              e.emit("data", t);
            }
            if (t === null) {
              i = false;
              e._readableState.needReadable = true;
            }
          });
          e.pause = function () {
            n = true;
            this.emit("pause");
          };
          e.resume = function () {
            n = false;
            if (i) {
              r.nextTick(function () {
                e.emit("readable");
              });
            } else {
              this.read(0);
            }
            this.emit("resume");
          };
          e.emit("readable");
        }
        function y(e, t) {
          var r;
          var n = t.buffer;
          var a = t.length;
          var s = !!t.decoder;
          var o = !!t.objectMode;
          if (n.length === 0) {
            return null;
          }
          if (a === 0) {
            r = null;
          } else if (o) {
            r = n.shift();
          } else if (!e || e >= a) {
            r = s ? n.join("") : i.concat(n, a);
            n.length = 0;
          } else if (e < n[0].length) {
            r = (l = n[0]).slice(0, e);
            n[0] = l.slice(e);
          } else if (e === n[0].length) {
            r = n.shift();
          } else {
            r = s ? "" : new i(e);
            for (var h = 0, u = 0, f = n.length; u < f && h < e; u++) {
              var l = n[0];
              var c = Math.min(e - h, l.length);
              if (s) {
                r += l.slice(0, c);
              } else {
                l.copy(r, h, 0, c);
              }
              if (c < l.length) {
                n[0] = l.slice(c);
              } else {
                n.shift();
              }
              h += c;
            }
          }
          return r;
        }
        function m(e) {
          var t = e._readableState;
          if (t.length > 0) {
            throw new Error("endReadable called on non-empty stream");
          }
          if (!t.endEmitted && t.calledRead) {
            t.ended = true;
            r.nextTick(function () {
              if (!t.endEmitted && t.length === 0) {
                t.endEmitted = true;
                e.readable = false;
                e.emit("end");
              }
            });
          }
        }
        function w(e, t) {
          for (var r = 0, n = e.length; r < n; r++) {
            t(e[r], r);
          }
        }
        f.prototype.read = function (e) {
          var t = this._readableState;
          t.calledRead = true;
          var r;
          var n = e;
          if (typeof e != "number" || e > 0) {
            t.emittedReadable = false;
          }
          if (e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended)) {
            p(this);
            return null;
          }
          if ((e = d(e, t)) === 0 && t.ended) {
            r = null;
            if (t.length > 0 && t.decoder) {
              r = y(e, t);
              t.length -= r.length;
            }
            if (t.length === 0) {
              m(this);
            }
            return r;
          }
          var i = t.needReadable;
          if (t.length - e <= t.highWaterMark) {
            i = true;
          }
          if (t.ended || t.reading) {
            i = false;
          }
          if (i) {
            t.reading = true;
            t.sync = true;
            if (t.length === 0) {
              t.needReadable = true;
            }
            this._read(t.highWaterMark);
            t.sync = false;
          }
          if (i && !t.reading) {
            e = d(n, t);
          }
          if ((r = e > 0 ? y(e, t) : null) === null) {
            t.needReadable = true;
            e = 0;
          }
          t.length -= e;
          if (t.length === 0 && !t.ended) {
            t.needReadable = true;
          }
          if (t.ended && !t.endEmitted && t.length === 0) {
            m(this);
          }
          return r;
        };
        f.prototype._read = function (e) {
          this.emit("error", new Error("not implemented"));
        };
        f.prototype.pipe = function (e, t) {
          var i = this;
          var s = this._readableState;
          switch (s.pipesCount) {
            case 0:
              s.pipes = e;
              break;
            case 1:
              s.pipes = [s.pipes, e];
              break;
            default:
              s.pipes.push(e);
          }
          s.pipesCount += 1;
          var o = (!t || t.end !== false) && e !== r.stdout && e !== r.stderr ? u : l;
          function h(e) {
            if (e === i) {
              l();
            }
          }
          function u() {
            e.end();
          }
          if (s.endEmitted) {
            r.nextTick(o);
          } else {
            i.once("end", o);
          }
          e.on("unpipe", h);
          var f = function (e) {
            return function () {
              var t = e._readableState;
              t.awaitDrain--;
              if (t.awaitDrain === 0) {
                _(e);
              }
            };
          }(i);
          function l() {
            e.removeListener("close", d);
            e.removeListener("finish", p);
            e.removeListener("drain", f);
            e.removeListener("error", c);
            e.removeListener("unpipe", h);
            i.removeListener("end", u);
            i.removeListener("end", l);
            if (!e._writableState || !!e._writableState.needDrain) {
              f();
            }
          }
          function c(t) {
            g();
            e.removeListener("error", c);
            if (a.listenerCount(e, "error") === 0) {
              e.emit("error", t);
            }
          }
          function d() {
            e.removeListener("finish", p);
            g();
          }
          function p() {
            e.removeListener("close", d);
            g();
          }
          function g() {
            i.unpipe(e);
          }
          e.on("drain", f);
          if (e._events && e._events.error) {
            if (n(e._events.error)) {
              e._events.error.unshift(c);
            } else {
              e._events.error = [c, e._events.error];
            }
          } else {
            e.on("error", c);
          }
          e.once("close", d);
          e.once("finish", p);
          e.emit("pipe", i);
          if (!s.flowing) {
            this.on("readable", b);
            s.flowing = true;
            r.nextTick(function () {
              _(i);
            });
          }
          return e;
        };
        f.prototype.unpipe = function (e) {
          var t = this._readableState;
          if (t.pipesCount === 0) {
            return this;
          }
          if (t.pipesCount === 1) {
            if (!e || e === t.pipes) {
              e ||= t.pipes;
              t.pipes = null;
              t.pipesCount = 0;
              this.removeListener("readable", b);
              t.flowing = false;
              if (e) {
                e.emit("unpipe", this);
              }
            }
            return this;
          }
          if (!e) {
            var r = t.pipes;
            var n = t.pipesCount;
            t.pipes = null;
            t.pipesCount = 0;
            this.removeListener("readable", b);
            t.flowing = false;
            for (var i = 0; i < n; i++) {
              r[i].emit("unpipe", this);
            }
            return this;
          }
          if ((i = function (e, t) {
            for (var r = 0, n = e.length; r < n; r++) {
              if (e[r] === t) {
                return r;
              }
            }
            return -1;
          }(t.pipes, e)) !== -1) {
            t.pipes.splice(i, 1);
            t.pipesCount -= 1;
            if (t.pipesCount === 1) {
              t.pipes = t.pipes[0];
            }
            e.emit("unpipe", this);
          }
          return this;
        };
        f.prototype.on = function (e, t) {
          var r = o.prototype.on.call(this, e, t);
          if (e === "data" && !this._readableState.flowing) {
            v(this);
          }
          if (e === "readable" && this.readable) {
            var n = this._readableState;
            if (!n.readableListening) {
              n.readableListening = true;
              n.emittedReadable = false;
              n.needReadable = true;
              if (n.reading) {
                if (n.length) {
                  p(this);
                }
              } else {
                this.read(0);
              }
            }
          }
          return r;
        };
        f.prototype.addListener = f.prototype.on;
        f.prototype.resume = function () {
          v(this);
          this.read(0);
          this.emit("resume");
        };
        f.prototype.pause = function () {
          v(this, true);
          this.emit("pause");
        };
        f.prototype.wrap = function (e) {
          var t = this._readableState;
          var r = false;
          var n = this;
          e.on("end", function () {
            if (t.decoder && !t.ended) {
              var e = t.decoder.end();
              if (e && e.length) {
                n.push(e);
              }
            }
            n.push(null);
          });
          e.on("data", function (i) {
            if (!(t.decoder && (i = t.decoder.write(i)), t.objectMode && i == null)) {
              if (t.objectMode || i && i.length) {
                if (!n.push(i)) {
                  r = true;
                  e.pause();
                }
              }
            }
          });
          for (var i in e) {
            if (typeof e[i] == "function" && this[i] === undefined) {
              this[i] = function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              }(i);
            }
          }
          w(["error", "close", "destroy", "pause", "resume"], function (t) {
            e.on(t, n.emit.bind(n, t));
          });
          n._read = function (t) {
            if (r) {
              r = false;
              e.resume();
            }
          };
          return n;
        };
        f._fromList = y;
      }).call(this, e("_process"));
    }, {
      _process: 73,
      buffer: 7,
      "core-util-is": 9,
      events: 14,
      inherits: 26,
      isarray: 29,
      stream: 82,
      "string_decoder/": 98
    }],
    77: [function (e, t, r) {
      t.exports = s;
      var n = e("./_stream_duplex");
      var i = e("core-util-is");
      function a(e, t) {
        this.afterTransform = function (e, r) {
          return function (e, t, r) {
            var n = e._transformState;
            n.transforming = false;
            var i = n.writecb;
            if (!i) {
              return e.emit("error", new Error("no writecb in Transform class"));
            }
            n.writechunk = null;
            n.writecb = null;
            if (r != null) {
              e.push(r);
            }
            if (i) {
              i(t);
            }
            var a = e._readableState;
            a.reading = false;
            if (a.needReadable || a.length < a.highWaterMark) {
              e._read(a.highWaterMark);
            }
          }(t, e, r);
        };
        this.needTransform = false;
        this.transforming = false;
        this.writecb = null;
        this.writechunk = null;
      }
      function s(e) {
        if (!(this instanceof s)) {
          return new s(e);
        }
        n.call(this, e);
        this._transformState = new a(e, this);
        var t = this;
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        this.once("finish", function () {
          if (typeof this._flush == "function") {
            this._flush(function (e) {
              o(t, e);
            });
          } else {
            o(t);
          }
        });
      }
      function o(e, t) {
        if (t) {
          return e.emit("error", t);
        }
        var r = e._writableState;
        e._readableState;
        var n = e._transformState;
        if (r.length) {
          throw new Error("calling transform done when ws.length != 0");
        }
        if (n.transforming) {
          throw new Error("calling transform done when still transforming");
        }
        return e.push(null);
      }
      i.inherits = e("inherits");
      i.inherits(s, n);
      s.prototype.push = function (e, t) {
        this._transformState.needTransform = false;
        return n.prototype.push.call(this, e, t);
      };
      s.prototype._transform = function (e, t, r) {
        throw new Error("not implemented");
      };
      s.prototype._write = function (e, t, r) {
        var n = this._transformState;
        n.writecb = r;
        n.writechunk = e;
        n.writeencoding = t;
        if (!n.transforming) {
          var i = this._readableState;
          if (n.needTransform || i.needReadable || i.length < i.highWaterMark) {
            this._read(i.highWaterMark);
          }
        }
      };
      s.prototype._read = function (e) {
        var t = this._transformState;
        if (t.writechunk !== null && t.writecb && !t.transforming) {
          t.transforming = true;
          this._transform(t.writechunk, t.writeencoding, t.afterTransform);
        } else {
          t.needTransform = true;
        }
      };
    }, {
      "./_stream_duplex": 74,
      "core-util-is": 9,
      inherits: 26
    }],
    78: [function (e, t, r) {
      (function (r) {
        t.exports = h;
        var n = e("buffer").Buffer;
        h.WritableState = o;
        var i = e("core-util-is");
        i.inherits = e("inherits");
        var a = e("stream");
        function s(e, t, r) {
          this.chunk = e;
          this.encoding = t;
          this.callback = r;
        }
        function o(e, t) {
          var n = (e = e || {}).highWaterMark;
          this.highWaterMark = n || n === 0 ? n : 16384;
          this.objectMode = !!e.objectMode;
          this.highWaterMark = ~~this.highWaterMark;
          this.needDrain = false;
          this.ending = false;
          this.ended = false;
          this.finished = false;
          var i = e.decodeStrings === false;
          this.decodeStrings = !i;
          this.defaultEncoding = e.defaultEncoding || "utf8";
          this.length = 0;
          this.writing = false;
          this.sync = true;
          this.bufferProcessing = false;
          this.onwrite = function (e) {
            (function (e, t) {
              var n = e._writableState;
              var i = n.sync;
              var a = n.writecb;
              (function (e) {
                e.writing = false;
                e.writecb = null;
                e.length -= e.writelen;
                e.writelen = 0;
              })(n);
              if (t) {
                (function (e, t, n, i, a) {
                  if (n) {
                    r.nextTick(function () {
                      a(i);
                    });
                  } else {
                    a(i);
                  }
                  e._writableState.errorEmitted = true;
                  e.emit("error", i);
                })(e, 0, i, t, a);
              } else {
                var s = l(e, n);
                if (!s && !n.bufferProcessing && !!n.buffer.length) {
                  (function (e, t) {
                    t.bufferProcessing = true;
                    for (var r = 0; r < t.buffer.length; r++) {
                      var n = t.buffer[r];
                      var i = n.chunk;
                      var a = n.encoding;
                      var s = n.callback;
                      u(e, t, t.objectMode ? 1 : i.length, i, a, s);
                      if (t.writing) {
                        r++;
                        break;
                      }
                    }
                    t.bufferProcessing = false;
                    if (r < t.buffer.length) {
                      t.buffer = t.buffer.slice(r);
                    } else {
                      t.buffer.length = 0;
                    }
                  })(e, n);
                }
                if (i) {
                  r.nextTick(function () {
                    f(e, n, s, a);
                  });
                } else {
                  f(e, n, s, a);
                }
              }
            })(t, e);
          };
          this.writecb = null;
          this.writelen = 0;
          this.buffer = [];
          this.errorEmitted = false;
        }
        function h(t) {
          var r = e("./_stream_duplex");
          if (!(this instanceof h) && !(this instanceof r)) {
            return new h(t);
          }
          this._writableState = new o(t, this);
          this.writable = true;
          a.call(this);
        }
        function u(e, t, r, n, i, a) {
          t.writelen = r;
          t.writecb = a;
          t.writing = true;
          t.sync = true;
          e._write(n, i, t.onwrite);
          t.sync = false;
        }
        function f(e, t, r, n) {
          if (!r) {
            (function (e, t) {
              if (t.length === 0 && t.needDrain) {
                t.needDrain = false;
                e.emit("drain");
              }
            })(e, t);
          }
          n();
          if (r) {
            c(e, t);
          }
        }
        function l(e, t) {
          return t.ending && t.length === 0 && !t.finished && !t.writing;
        }
        function c(e, t) {
          var r = l(0, t);
          if (r) {
            t.finished = true;
            e.emit("finish");
          }
          return r;
        }
        i.inherits(h, a);
        h.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe. Not readable."));
        };
        h.prototype.write = function (e, t, i) {
          var a = this._writableState;
          var o = false;
          if (typeof t == "function") {
            i = t;
            t = null;
          }
          if (n.isBuffer(e)) {
            t = "buffer";
          } else {
            t ||= a.defaultEncoding;
          }
          if (typeof i != "function") {
            i = function () {};
          }
          if (a.ended) {
            (function (e, t, n) {
              var i = new Error("write after end");
              e.emit("error", i);
              r.nextTick(function () {
                n(i);
              });
            })(this, 0, i);
          } else if (function (e, t, i, a) {
            var s = true;
            if (!n.isBuffer(i) && typeof i != "string" && i != null && !t.objectMode) {
              var o = new TypeError("Invalid non-string/buffer chunk");
              e.emit("error", o);
              r.nextTick(function () {
                a(o);
              });
              s = false;
            }
            return s;
          }(this, a, e, i)) {
            o = function (e, t, r, i, a) {
              r = function (e, t, r) {
                if (!e.objectMode && e.decodeStrings !== false && typeof t == "string") {
                  t = new n(t, r);
                }
                return t;
              }(t, r, i);
              if (n.isBuffer(r)) {
                i = "buffer";
              }
              var o = t.objectMode ? 1 : r.length;
              t.length += o;
              var h = t.length < t.highWaterMark;
              if (!h) {
                t.needDrain = true;
              }
              if (t.writing) {
                t.buffer.push(new s(r, i, a));
              } else {
                u(e, t, o, r, i, a);
              }
              return h;
            }(this, a, e, t, i);
          }
          return o;
        };
        h.prototype._write = function (e, t, r) {
          r(new Error("not implemented"));
        };
        h.prototype.end = function (e, t, n) {
          var i = this._writableState;
          if (typeof e == "function") {
            n = e;
            e = null;
            t = null;
          } else if (typeof t == "function") {
            n = t;
            t = null;
          }
          if (e != null) {
            this.write(e, t);
          }
          if (!i.ending && !i.finished) {
            (function (e, t, n) {
              t.ending = true;
              c(e, t);
              if (n) {
                if (t.finished) {
                  r.nextTick(n);
                } else {
                  e.once("finish", n);
                }
              }
              t.ended = true;
            })(this, i, n);
          }
        };
      }).call(this, e("_process"));
    }, {
      "./_stream_duplex": 74,
      _process: 73,
      buffer: 7,
      "core-util-is": 9,
      inherits: 26,
      stream: 82
    }],
    79: [function (e, t, r) {
      (function (n) {
        var i = e("stream");
        (r = t.exports = e("./lib/_stream_readable.js")).Stream = i;
        r.Readable = r;
        r.Writable = e("./lib/_stream_writable.js");
        r.Duplex = e("./lib/_stream_duplex.js");
        r.Transform = e("./lib/_stream_transform.js");
        r.PassThrough = e("./lib/_stream_passthrough.js");
        if (!n.browser && n.env.READABLE_STREAM === "disable") {
          t.exports = e("stream");
        }
      }).call(this, e("_process"));
    }, {
      "./lib/_stream_duplex.js": 74,
      "./lib/_stream_passthrough.js": 75,
      "./lib/_stream_readable.js": 76,
      "./lib/_stream_transform.js": 77,
      "./lib/_stream_writable.js": 78,
      _process: 73,
      stream: 82
    }],
    80: [function (e, t, r) {
      var n = e("buffer");
      var i = n.Buffer;
      function a(e, t) {
        for (var r in e) {
          t[r] = e[r];
        }
      }
      function s(e, t, r) {
        return i(e, t, r);
      }
      if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
        t.exports = n;
      } else {
        a(n, r);
        r.Buffer = s;
      }
      a(i, s);
      s.from = function (e, t, r) {
        if (typeof e == "number") {
          throw new TypeError("Argument must not be a number");
        }
        return i(e, t, r);
      };
      s.alloc = function (e, t, r) {
        if (typeof e != "number") {
          throw new TypeError("Argument must be a number");
        }
        var n = i(e);
        if (t !== undefined) {
          if (typeof r == "string") {
            n.fill(t, r);
          } else {
            n.fill(t);
          }
        } else {
          n.fill(0);
        }
        return n;
      };
      s.allocUnsafe = function (e) {
        if (typeof e != "number") {
          throw new TypeError("Argument must be a number");
        }
        return i(e);
      };
      s.allocUnsafeSlow = function (e) {
        if (typeof e != "number") {
          throw new TypeError("Argument must be a number");
        }
        return n.SlowBuffer(e);
      };
    }, {
      buffer: 7
    }],
    81: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("contentstream");
        var i = e("gif-encoder");
        var a = e("jpeg-js");
        var s = e("pngjs-nozlib").PNG;
        var o = e("ndarray");
        var h = e("ndarray-ops");
        var u = e("through");
        function f(e, t, r) {
          if (e.shape.length === 4) {
            return f(e.pick(r), t, 0);
          }
          if (e.shape.length === 3) {
            if (e.shape[2] === 3) {
              h.assign(o(t, [e.shape[0], e.shape[1], 3], [4, e.shape[0] * 4, 1]), e);
              h.assigns(o(t, [e.shape[0] * e.shape[1]], [4], 3), 255);
            } else if (e.shape[2] === 4) {
              h.assign(o(t, [e.shape[0], e.shape[1], 4], [4, e.shape[0] * 4, 1]), e);
            } else {
              if (e.shape[2] !== 1) {
                return new Error("Incompatible array shape");
              }
              h.assign(o(t, [e.shape[0], e.shape[1], 3], [4, e.shape[0] * 4, 1]), o(e.data, [e.shape[0], e.shape[1], 3], [e.stride[0], e.stride[1], 0], e.offset));
              h.assigns(o(t, [e.shape[0] * e.shape[1]], [4], 3), 255);
            }
          } else {
            if (e.shape.length !== 2) {
              return new Error("Incompatible array shape");
            }
            h.assign(o(t, [e.shape[0], e.shape[1], 3], [4, e.shape[0] * 4, 1]), o(e.data, [e.shape[0], e.shape[1], 3], [e.stride[0], e.stride[1], 0], e.offset));
            h.assigns(o(t, [e.shape[0] * e.shape[1]], [4], 3), 255);
          }
          return t;
        }
        function l(e) {
          var t = u();
          t.emit("error", e);
          return t;
        }
        t.exports = function (e, t, o) {
          o = o || {};
          switch (t.toUpperCase()) {
            case "JPG":
            case ".JPG":
            case "JPEG":
            case ".JPEG":
            case "JPE":
            case ".JPE":
              var h = e.shape[0];
              var u = e.shape[1];
              var c = {
                data: g = f(e, g = new r(h * u * 4)),
                width: h,
                height: u
              };
              var d = a.encode(c, o.quality);
              return new n(d.data);
            case "GIF":
            case ".GIF":
              var p = e.shape.length === 4 ? e.shape[0] : 1;
              h = e.shape.length === 4 ? e.shape[1] : e.shape[0];
              u = e.shape.length === 4 ? e.shape[2] : e.shape[1];
              var g = new r(h * u * 4);
              var _ = new i(h, u);
              _.writeHeader();
              for (var b = 0; b < p; b++) {
                g = f(e, g, b);
                _.addFrame(g);
              }
              _.finish();
              return _;
            case "PNG":
            case ".PNG":
              var v = new s({
                width: e.shape[0],
                height: e.shape[1]
              });
              if (typeof (g = f(e, v.data)) == "Error") {
                return l(g);
              } else {
                v.data = g;
                return v.pack();
              }
            case "CANVAS":
              var y = document.createElement("canvas");
              var m = y.getContext("2d");
              y.width = e.shape[0];
              y.height = e.shape[1];
              var w = m.getImageData(0, 0, y.width, y.height);
              if (typeof (g = f(e, g = w.data)) == "Error") {
                return l(g);
              } else {
                m.putImageData(w, 0, 0);
                return y;
              }
            default:
              return l(new Error("Unsupported file type: " + t));
          }
        };
      }).call(this, e("buffer").Buffer);
    }, {
      buffer: 7,
      contentstream: 8,
      "gif-encoder": 16,
      "jpeg-js": 30,
      ndarray: 37,
      "ndarray-ops": 34,
      "pngjs-nozlib": 70,
      through: 99
    }],
    82: [function (e, t, r) {
      t.exports = i;
      var n = e("events").EventEmitter;
      function i() {
        n.call(this);
      }
      e("inherits")(i, n);
      i.Readable = e("readable-stream/readable.js");
      i.Writable = e("readable-stream/writable.js");
      i.Duplex = e("readable-stream/duplex.js");
      i.Transform = e("readable-stream/transform.js");
      i.PassThrough = e("readable-stream/passthrough.js");
      i.Stream = i;
      i.prototype.pipe = function (e, t) {
        var r = this;
        function i(t) {
          if (e.writable && e.write(t) === false && r.pause) {
            r.pause();
          }
        }
        function a() {
          if (r.readable && r.resume) {
            r.resume();
          }
        }
        r.on("data", i);
        e.on("drain", a);
        if (!e._isStdio && (!t || t.end !== false)) {
          r.on("end", o);
          r.on("close", h);
        }
        var s = false;
        function o() {
          if (!s) {
            s = true;
            e.end();
          }
        }
        function h() {
          if (!s) {
            s = true;
            if (typeof e.destroy == "function") {
              e.destroy();
            }
          }
        }
        function u(e) {
          f();
          if (n.listenerCount(this, "error") === 0) {
            throw e;
          }
        }
        function f() {
          r.removeListener("data", i);
          e.removeListener("drain", a);
          r.removeListener("end", o);
          r.removeListener("close", h);
          r.removeListener("error", u);
          e.removeListener("error", u);
          r.removeListener("end", f);
          r.removeListener("close", f);
          e.removeListener("close", f);
        }
        r.on("error", u);
        e.on("error", u);
        r.on("end", f);
        r.on("close", f);
        e.on("close", f);
        e.emit("pipe", r);
        return e;
      };
    }, {
      events: 14,
      inherits: 26,
      "readable-stream/duplex.js": 84,
      "readable-stream/passthrough.js": 93,
      "readable-stream/readable.js": 94,
      "readable-stream/transform.js": 95,
      "readable-stream/writable.js": 96
    }],
    83: [function (e, t, r) {
      var n = {}.toString;
      t.exports = Array.isArray || function (e) {
        return n.call(e) == "[object Array]";
      };
    }, {}],
    84: [function (e, t, r) {
      t.exports = e("./lib/_stream_duplex.js");
    }, {
      "./lib/_stream_duplex.js": 85
    }],
    85: [function (e, t, r) {
      "use strict";

      var n = e("process-nextick-args");
      var i = Object.keys || function (e) {
        var t = [];
        for (var r in e) {
          t.push(r);
        }
        return t;
      };
      t.exports = l;
      var a = e("core-util-is");
      a.inherits = e("inherits");
      var s = e("./_stream_readable");
      var o = e("./_stream_writable");
      a.inherits(l, s);
      for (var h = i(o.prototype), u = 0; u < h.length; u++) {
        var f = h[u];
        l.prototype[f] ||= o.prototype[f];
      }
      function l(e) {
        if (!(this instanceof l)) {
          return new l(e);
        }
        s.call(this, e);
        o.call(this, e);
        if (e && e.readable === false) {
          this.readable = false;
        }
        if (e && e.writable === false) {
          this.writable = false;
        }
        this.allowHalfOpen = true;
        if (e && e.allowHalfOpen === false) {
          this.allowHalfOpen = false;
        }
        this.once("end", c);
      }
      function c() {
        if (!this.allowHalfOpen && !this._writableState.ended) {
          n(d, this);
        }
      }
      function d(e) {
        e.end();
      }
      Object.defineProperty(l.prototype, "destroyed", {
        get: function () {
          return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (e) {
          if (this._readableState !== undefined && this._writableState !== undefined) {
            this._readableState.destroyed = e;
            this._writableState.destroyed = e;
          }
        }
      });
      l.prototype._destroy = function (e, t) {
        this.push(null);
        this.end();
        n(t, e);
      };
    }, {
      "./_stream_readable": 87,
      "./_stream_writable": 89,
      "core-util-is": 9,
      inherits: 26,
      "process-nextick-args": 72
    }],
    86: [function (e, t, r) {
      "use strict";

      t.exports = a;
      var n = e("./_stream_transform");
      var i = e("core-util-is");
      function a(e) {
        if (!(this instanceof a)) {
          return new a(e);
        }
        n.call(this, e);
      }
      i.inherits = e("inherits");
      i.inherits(a, n);
      a.prototype._transform = function (e, t, r) {
        r(null, e);
      };
    }, {
      "./_stream_transform": 88,
      "core-util-is": 9,
      inherits: 26
    }],
    87: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("process-nextick-args");
        t.exports = b;
        var i;
        var a = e("isarray");
        b.ReadableState = _;
        e("events").EventEmitter;
        var s = function (e, t) {
          return e.listeners(t).length;
        };
        var o = e("./internal/streams/stream");
        var h = e("safe-buffer").Buffer;
        var u = e("core-util-is");
        u.inherits = e("inherits");
        var f = e("util");
        var l = undefined;
        l = f && f.debuglog ? f.debuglog("stream") : function () {};
        var c;
        var d = e("./internal/streams/BufferList");
        var p = e("./internal/streams/destroy");
        u.inherits(b, o);
        var g = ["error", "close", "destroy", "pause", "resume"];
        function _(t, r) {
          i = i || e("./_stream_duplex");
          t = t || {};
          this.objectMode = !!t.objectMode;
          if (r instanceof i) {
            this.objectMode = this.objectMode || !!t.readableObjectMode;
          }
          var n = t.highWaterMark;
          var a = this.objectMode ? 16 : 16384;
          this.highWaterMark = n || n === 0 ? n : a;
          this.highWaterMark = Math.floor(this.highWaterMark);
          this.buffer = new d();
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = null;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false;
          this.sync = true;
          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.resumeScheduled = false;
          this.destroyed = false;
          this.defaultEncoding = t.defaultEncoding || "utf8";
          this.awaitDrain = 0;
          this.readingMore = false;
          this.decoder = null;
          this.encoding = null;
          if (t.encoding) {
            c ||= e("string_decoder/").StringDecoder;
            this.decoder = new c(t.encoding);
            this.encoding = t.encoding;
          }
        }
        function b(t) {
          i = i || e("./_stream_duplex");
          if (!(this instanceof b)) {
            return new b(t);
          }
          this._readableState = new _(t, this);
          this.readable = true;
          if (t) {
            if (typeof t.read == "function") {
              this._read = t.read;
            }
            if (typeof t.destroy == "function") {
              this._destroy = t.destroy;
            }
          }
          o.call(this);
        }
        function v(e, t, r, n, i) {
          var a;
          var s = e._readableState;
          if (t === null) {
            s.reading = false;
            (function (e, t) {
              if (t.ended) {
                return;
              }
              if (t.decoder) {
                var r = t.decoder.end();
                if (r && r.length) {
                  t.buffer.push(r);
                  t.length += t.objectMode ? 1 : r.length;
                }
              }
              t.ended = true;
              k(e);
            })(e, s);
          } else {
            if (!i) {
              a = function (e, t) {
                var r;
                n = t;
                if (Object.prototype.toString.call(n) !== "[object Uint8Array]" && !h.isBuffer(n) && typeof t != "string" && t !== undefined && !e.objectMode) {
                  r = new TypeError("Invalid non-string/buffer chunk");
                }
                var n;
                return r;
              }(s, t);
            }
            if (a) {
              e.emit("error", a);
            } else if (s.objectMode || t && t.length > 0) {
              if (typeof t != "string" && Object.getPrototypeOf(t) !== h.prototype && !s.objectMode) {
                t = function (e) {
                  return h.from(e);
                }(t);
              }
              if (n) {
                if (s.endEmitted) {
                  e.emit("error", new Error("stream.unshift() after end event"));
                } else {
                  y(e, s, t, true);
                }
              } else if (s.ended) {
                e.emit("error", new Error("stream.push() after EOF"));
              } else {
                s.reading = false;
                if (s.decoder && !r) {
                  t = s.decoder.write(t);
                  if (s.objectMode || t.length !== 0) {
                    y(e, s, t, false);
                  } else {
                    x(e, s);
                  }
                } else {
                  y(e, s, t, false);
                }
              }
            } else if (!n) {
              s.reading = false;
            }
          }
          return function (e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
          }(s);
        }
        function y(e, t, r, n) {
          if (t.flowing && t.length === 0 && !t.sync) {
            e.emit("data", r);
            e.read(0);
          } else {
            t.length += t.objectMode ? 1 : r.length;
            if (n) {
              t.buffer.unshift(r);
            } else {
              t.buffer.push(r);
            }
            if (t.needReadable) {
              k(e);
            }
          }
          x(e, t);
        }
        Object.defineProperty(b.prototype, "destroyed", {
          get: function () {
            return this._readableState !== undefined && this._readableState.destroyed;
          },
          set: function (e) {
            if (this._readableState) {
              this._readableState.destroyed = e;
            }
          }
        });
        b.prototype.destroy = p.destroy;
        b.prototype._undestroy = p.undestroy;
        b.prototype._destroy = function (e, t) {
          this.push(null);
          t(e);
        };
        b.prototype.push = function (e, t) {
          var r;
          var n = this._readableState;
          if (n.objectMode) {
            r = true;
          } else if (typeof e == "string") {
            if ((t = t || n.defaultEncoding) !== n.encoding) {
              e = h.from(e, t);
              t = "";
            }
            r = true;
          }
          return v(this, e, t, false, r);
        };
        b.prototype.unshift = function (e) {
          return v(this, e, null, true, false);
        };
        b.prototype.isPaused = function () {
          return this._readableState.flowing === false;
        };
        b.prototype.setEncoding = function (t) {
          c ||= e("string_decoder/").StringDecoder;
          this._readableState.decoder = new c(t);
          this._readableState.encoding = t;
          return this;
        };
        var m = 8388608;
        function w(e, t) {
          if (e <= 0 || t.length === 0 && t.ended) {
            return 0;
          } else if (t.objectMode) {
            return 1;
          } else if (e != e) {
            if (t.flowing && t.length) {
              return t.buffer.head.data.length;
            } else {
              return t.length;
            }
          } else {
            if (e > t.highWaterMark) {
              t.highWaterMark = function (e) {
                if (e >= m) {
                  e = m;
                } else {
                  e--;
                  e |= e >>> 1;
                  e |= e >>> 2;
                  e |= e >>> 4;
                  e |= e >>> 8;
                  e |= e >>> 16;
                  e++;
                }
                return e;
              }(e);
            }
            if (e <= t.length) {
              return e;
            } else if (t.ended) {
              return t.length;
            } else {
              t.needReadable = true;
              return 0;
            }
          }
        }
        function k(e) {
          var t = e._readableState;
          t.needReadable = false;
          if (!t.emittedReadable) {
            l("emitReadable", t.flowing);
            t.emittedReadable = true;
            if (t.sync) {
              n(E, e);
            } else {
              E(e);
            }
          }
        }
        function E(e) {
          l("emit readable");
          e.emit("readable");
          I(e);
        }
        function x(e, t) {
          if (!t.readingMore) {
            t.readingMore = true;
            n(S, e, t);
          }
        }
        function S(e, t) {
          for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (l("maybeReadMore read 0"), e.read(0), r !== t.length);) {
            r = t.length;
          }
          t.readingMore = false;
        }
        function A(e) {
          l("readable nexttick read 0");
          e.read(0);
        }
        function T(e, t) {
          if (!t.reading) {
            l("resume read 0");
            e.read(0);
          }
          t.resumeScheduled = false;
          t.awaitDrain = 0;
          e.emit("resume");
          I(e);
          if (t.flowing && !t.reading) {
            e.read(0);
          }
        }
        function I(e) {
          var t = e._readableState;
          for (l("flow", t.flowing); t.flowing && e.read() !== null;);
        }
        function L(e, t) {
          if (t.length === 0) {
            return null;
          } else {
            if (t.objectMode) {
              r = t.buffer.shift();
            } else if (!e || e >= t.length) {
              r = t.decoder ? t.buffer.join("") : t.buffer.length === 1 ? t.buffer.head.data : t.buffer.concat(t.length);
              t.buffer.clear();
            } else {
              r = function (e, t, r) {
                var n;
                if (e < t.head.data.length) {
                  n = t.head.data.slice(0, e);
                  t.head.data = t.head.data.slice(e);
                } else {
                  n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
                    var r = t.head;
                    var n = 1;
                    var i = r.data;
                    e -= i.length;
                    while (r = r.next) {
                      var a = r.data;
                      var s = e > a.length ? a.length : e;
                      if (s === a.length) {
                        i += a;
                      } else {
                        i += a.slice(0, e);
                      }
                      if ((e -= s) === 0) {
                        if (s === a.length) {
                          ++n;
                          if (r.next) {
                            t.head = r.next;
                          } else {
                            t.head = t.tail = null;
                          }
                        } else {
                          t.head = r;
                          r.data = a.slice(s);
                        }
                        break;
                      }
                      ++n;
                    }
                    t.length -= n;
                    return i;
                  }(e, t) : function (e, t) {
                    var r = h.allocUnsafe(e);
                    var n = t.head;
                    var i = 1;
                    n.data.copy(r);
                    e -= n.data.length;
                    while (n = n.next) {
                      var a = n.data;
                      var s = e > a.length ? a.length : e;
                      a.copy(r, r.length - e, 0, s);
                      if ((e -= s) === 0) {
                        if (s === a.length) {
                          ++i;
                          if (n.next) {
                            t.head = n.next;
                          } else {
                            t.head = t.tail = null;
                          }
                        } else {
                          t.head = n;
                          n.data = a.slice(s);
                        }
                        break;
                      }
                      ++i;
                    }
                    t.length -= i;
                    return r;
                  }(e, t);
                }
                return n;
              }(e, t.buffer, t.decoder);
            }
            return r;
          }
          var r;
        }
        function R(e) {
          var t = e._readableState;
          if (t.length > 0) {
            throw new Error("\"endReadable()\" called on non-empty stream");
          }
          if (!t.endEmitted) {
            t.ended = true;
            n(j, t, e);
          }
        }
        function j(e, t) {
          if (!e.endEmitted && e.length === 0) {
            e.endEmitted = true;
            t.readable = false;
            t.emit("end");
          }
        }
        function M(e, t) {
          for (var r = 0, n = e.length; r < n; r++) {
            if (e[r] === t) {
              return r;
            }
          }
          return -1;
        }
        b.prototype.read = function (e) {
          l("read", e);
          e = parseInt(e, 10);
          var t = this._readableState;
          var r = e;
          if (e !== 0) {
            t.emittedReadable = false;
          }
          if (e === 0 && t.needReadable && (t.length >= t.highWaterMark || t.ended)) {
            l("read: emitReadable", t.length, t.ended);
            if (t.length === 0 && t.ended) {
              R(this);
            } else {
              k(this);
            }
            return null;
          }
          if ((e = w(e, t)) === 0 && t.ended) {
            if (t.length === 0) {
              R(this);
            }
            return null;
          }
          var n;
          var i = t.needReadable;
          l("need readable", i);
          if (t.length === 0 || t.length - e < t.highWaterMark) {
            l("length less than watermark", i = true);
          }
          if (t.ended || t.reading) {
            l("reading or ended", i = false);
          } else if (i) {
            l("do read");
            t.reading = true;
            t.sync = true;
            if (t.length === 0) {
              t.needReadable = true;
            }
            this._read(t.highWaterMark);
            t.sync = false;
            if (!t.reading) {
              e = w(r, t);
            }
          }
          if ((n = e > 0 ? L(e, t) : null) === null) {
            t.needReadable = true;
            e = 0;
          } else {
            t.length -= e;
          }
          if (t.length === 0) {
            if (!t.ended) {
              t.needReadable = true;
            }
            if (r !== e && t.ended) {
              R(this);
            }
          }
          if (n !== null) {
            this.emit("data", n);
          }
          return n;
        };
        b.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        };
        b.prototype.pipe = function (e, t) {
          var i = this;
          var o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          o.pipesCount += 1;
          l("pipe count=%d opts=%j", o.pipesCount, t);
          var h = (!t || t.end !== false) && e !== r.stdout && e !== r.stderr ? f : y;
          function u(t, r) {
            l("onunpipe");
            if (t === i && r && r.hasUnpiped === false) {
              r.hasUnpiped = true;
              l("cleanup");
              e.removeListener("close", b);
              e.removeListener("finish", v);
              e.removeListener("drain", c);
              e.removeListener("error", _);
              e.removeListener("unpipe", u);
              i.removeListener("end", f);
              i.removeListener("end", y);
              i.removeListener("data", g);
              d = true;
              if (!!o.awaitDrain && (!e._writableState || !!e._writableState.needDrain)) {
                c();
              }
            }
          }
          function f() {
            l("onend");
            e.end();
          }
          if (o.endEmitted) {
            n(h);
          } else {
            i.once("end", h);
          }
          e.on("unpipe", u);
          var c = function (e) {
            return function () {
              var t = e._readableState;
              l("pipeOnDrain", t.awaitDrain);
              if (t.awaitDrain) {
                t.awaitDrain--;
              }
              if (t.awaitDrain === 0 && s(e, "data")) {
                t.flowing = true;
                I(e);
              }
            };
          }(i);
          e.on("drain", c);
          var d = false;
          var p = false;
          function g(t) {
            l("ondata");
            p = false;
            if (e.write(t) === false && !p) {
              if ((o.pipesCount === 1 && o.pipes === e || o.pipesCount > 1 && M(o.pipes, e) !== -1) && !d) {
                l("false write response, pause", i._readableState.awaitDrain);
                i._readableState.awaitDrain++;
                p = true;
              }
              i.pause();
            }
          }
          function _(t) {
            l("onerror", t);
            y();
            e.removeListener("error", _);
            if (s(e, "error") === 0) {
              e.emit("error", t);
            }
          }
          function b() {
            e.removeListener("finish", v);
            y();
          }
          function v() {
            l("onfinish");
            e.removeListener("close", b);
            y();
          }
          function y() {
            l("unpipe");
            i.unpipe(e);
          }
          i.on("data", g);
          (function (e, t, r) {
            if (typeof e.prependListener == "function") {
              return e.prependListener(t, r);
            }
            if (e._events && e._events[t]) {
              if (a(e._events[t])) {
                e._events[t].unshift(r);
              } else {
                e._events[t] = [r, e._events[t]];
              }
            } else {
              e.on(t, r);
            }
          })(e, "error", _);
          e.once("close", b);
          e.once("finish", v);
          e.emit("pipe", i);
          if (!o.flowing) {
            l("pipe resume");
            i.resume();
          }
          return e;
        };
        b.prototype.unpipe = function (e) {
          var t = this._readableState;
          var r = {
            hasUnpiped: false
          };
          if (t.pipesCount === 0) {
            return this;
          }
          if (t.pipesCount === 1) {
            if (!e || e === t.pipes) {
              e ||= t.pipes;
              t.pipes = null;
              t.pipesCount = 0;
              t.flowing = false;
              if (e) {
                e.emit("unpipe", this, r);
              }
            }
            return this;
          }
          if (!e) {
            var n = t.pipes;
            var i = t.pipesCount;
            t.pipes = null;
            t.pipesCount = 0;
            t.flowing = false;
            for (var a = 0; a < i; a++) {
              n[a].emit("unpipe", this, r);
            }
            return this;
          }
          var s = M(t.pipes, e);
          if (s !== -1) {
            t.pipes.splice(s, 1);
            t.pipesCount -= 1;
            if (t.pipesCount === 1) {
              t.pipes = t.pipes[0];
            }
            e.emit("unpipe", this, r);
          }
          return this;
        };
        b.prototype.on = function (e, t) {
          var r = o.prototype.on.call(this, e, t);
          if (e === "data") {
            if (this._readableState.flowing !== false) {
              this.resume();
            }
          } else if (e === "readable") {
            var i = this._readableState;
            if (!i.endEmitted && !i.readableListening) {
              i.readableListening = i.needReadable = true;
              i.emittedReadable = false;
              if (i.reading) {
                if (i.length) {
                  k(this);
                }
              } else {
                n(A, this);
              }
            }
          }
          return r;
        };
        b.prototype.addListener = b.prototype.on;
        b.prototype.resume = function () {
          var e = this._readableState;
          if (!e.flowing) {
            l("resume");
            e.flowing = true;
            (function (e, t) {
              if (!t.resumeScheduled) {
                t.resumeScheduled = true;
                n(T, e, t);
              }
            })(this, e);
          }
          return this;
        };
        b.prototype.pause = function () {
          l("call pause flowing=%j", this._readableState.flowing);
          if (this._readableState.flowing !== false) {
            l("pause");
            this._readableState.flowing = false;
            this.emit("pause");
          }
          return this;
        };
        b.prototype.wrap = function (e) {
          var t = this._readableState;
          var r = false;
          var n = this;
          e.on("end", function () {
            l("wrapped end");
            if (t.decoder && !t.ended) {
              var e = t.decoder.end();
              if (e && e.length) {
                n.push(e);
              }
            }
            n.push(null);
          });
          e.on("data", function (i) {
            if (!(l("wrapped data"), t.decoder && (i = t.decoder.write(i)), t.objectMode && i == null)) {
              if (t.objectMode || i && i.length) {
                if (!n.push(i)) {
                  r = true;
                  e.pause();
                }
              }
            }
          });
          for (var i in e) {
            if (this[i] === undefined && typeof e[i] == "function") {
              this[i] = function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              }(i);
            }
          }
          for (var a = 0; a < g.length; a++) {
            e.on(g[a], n.emit.bind(n, g[a]));
          }
          n._read = function (t) {
            l("wrapped _read", t);
            if (r) {
              r = false;
              e.resume();
            }
          };
          return n;
        };
        b._fromList = L;
      }).call(this, e("_process"));
    }, {
      "./_stream_duplex": 85,
      "./internal/streams/BufferList": 90,
      "./internal/streams/destroy": 91,
      "./internal/streams/stream": 92,
      _process: 73,
      "core-util-is": 9,
      events: 14,
      inherits: 26,
      isarray: 83,
      "process-nextick-args": 72,
      "safe-buffer": 80,
      "string_decoder/": 97,
      util: 4
    }],
    88: [function (e, t, r) {
      "use strict";

      t.exports = s;
      var n = e("./_stream_duplex");
      var i = e("core-util-is");
      function a(e) {
        this.afterTransform = function (t, r) {
          return function (e, t, r) {
            var n = e._transformState;
            n.transforming = false;
            var i = n.writecb;
            if (!i) {
              return e.emit("error", new Error("write callback called multiple times"));
            }
            n.writechunk = null;
            n.writecb = null;
            if (r != null) {
              e.push(r);
            }
            i(t);
            var a = e._readableState;
            a.reading = false;
            if (a.needReadable || a.length < a.highWaterMark) {
              e._read(a.highWaterMark);
            }
          }(e, t, r);
        };
        this.needTransform = false;
        this.transforming = false;
        this.writecb = null;
        this.writechunk = null;
        this.writeencoding = null;
      }
      function s(e) {
        if (!(this instanceof s)) {
          return new s(e);
        }
        n.call(this, e);
        this._transformState = new a(this);
        var t = this;
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (e) {
          if (typeof e.transform == "function") {
            this._transform = e.transform;
          }
          if (typeof e.flush == "function") {
            this._flush = e.flush;
          }
        }
        this.once("prefinish", function () {
          if (typeof this._flush == "function") {
            this._flush(function (e, r) {
              o(t, e, r);
            });
          } else {
            o(t);
          }
        });
      }
      function o(e, t, r) {
        if (t) {
          return e.emit("error", t);
        }
        if (r != null) {
          e.push(r);
        }
        var n = e._writableState;
        var i = e._transformState;
        if (n.length) {
          throw new Error("Calling transform done when ws.length != 0");
        }
        if (i.transforming) {
          throw new Error("Calling transform done when still transforming");
        }
        return e.push(null);
      }
      i.inherits = e("inherits");
      i.inherits(s, n);
      s.prototype.push = function (e, t) {
        this._transformState.needTransform = false;
        return n.prototype.push.call(this, e, t);
      };
      s.prototype._transform = function (e, t, r) {
        throw new Error("_transform() is not implemented");
      };
      s.prototype._write = function (e, t, r) {
        var n = this._transformState;
        n.writecb = r;
        n.writechunk = e;
        n.writeencoding = t;
        if (!n.transforming) {
          var i = this._readableState;
          if (n.needTransform || i.needReadable || i.length < i.highWaterMark) {
            this._read(i.highWaterMark);
          }
        }
      };
      s.prototype._read = function (e) {
        var t = this._transformState;
        if (t.writechunk !== null && t.writecb && !t.transforming) {
          t.transforming = true;
          this._transform(t.writechunk, t.writeencoding, t.afterTransform);
        } else {
          t.needTransform = true;
        }
      };
      s.prototype._destroy = function (e, t) {
        var r = this;
        n.prototype._destroy.call(this, e, function (e) {
          t(e);
          r.emit("close");
        });
      };
    }, {
      "./_stream_duplex": 85,
      "core-util-is": 9,
      inherits: 26
    }],
    89: [function (e, t, r) {
      (function (r) {
        "use strict";

        var n = e("process-nextick-args");
        function i(e) {
          var t = this;
          this.next = null;
          this.entry = null;
          this.finish = function () {
            (function (e, t, r) {
              var n = e.entry;
              e.entry = null;
              while (n) {
                var i = n.callback;
                t.pendingcb--;
                i(r);
                n = n.next;
              }
              if (t.corkedRequestsFree) {
                t.corkedRequestsFree.next = e;
              } else {
                t.corkedRequestsFree = e;
              }
            })(t, e);
          };
        }
        t.exports = g;
        var a;
        var s = !r.browser && ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) > -1 ? setImmediate : n;
        g.WritableState = p;
        var o = e("core-util-is");
        o.inherits = e("inherits");
        var h = {
          deprecate: e("util-deprecate")
        };
        var u = e("./internal/streams/stream");
        var f = e("safe-buffer").Buffer;
        var l;
        var c = e("./internal/streams/destroy");
        function d() {}
        function p(t, r) {
          a = a || e("./_stream_duplex");
          t = t || {};
          this.objectMode = !!t.objectMode;
          if (r instanceof a) {
            this.objectMode = this.objectMode || !!t.writableObjectMode;
          }
          var o = t.highWaterMark;
          var h = this.objectMode ? 16 : 16384;
          this.highWaterMark = o || o === 0 ? o : h;
          this.highWaterMark = Math.floor(this.highWaterMark);
          this.finalCalled = false;
          this.needDrain = false;
          this.ending = false;
          this.ended = false;
          this.finished = false;
          this.destroyed = false;
          var u = t.decodeStrings === false;
          this.decodeStrings = !u;
          this.defaultEncoding = t.defaultEncoding || "utf8";
          this.length = 0;
          this.writing = false;
          this.corked = 0;
          this.sync = true;
          this.bufferProcessing = false;
          this.onwrite = function (e) {
            (function (e, t) {
              var r = e._writableState;
              var i = r.sync;
              var a = r.writecb;
              (function (e) {
                e.writing = false;
                e.writecb = null;
                e.length -= e.writelen;
                e.writelen = 0;
              })(r);
              if (t) {
                (function (e, t, r, i, a) {
                  --t.pendingcb;
                  if (r) {
                    n(a, i);
                    n(w, e, t);
                    e._writableState.errorEmitted = true;
                    e.emit("error", i);
                  } else {
                    a(i);
                    e._writableState.errorEmitted = true;
                    e.emit("error", i);
                    w(e, t);
                  }
                })(e, r, i, t, a);
              } else {
                var o = y(r);
                if (!o && !r.corked && !r.bufferProcessing && !!r.bufferedRequest) {
                  v(e, r);
                }
                if (i) {
                  s(b, e, r, o, a);
                } else {
                  b(e, r, o, a);
                }
              }
            })(r, e);
          };
          this.writecb = null;
          this.writelen = 0;
          this.bufferedRequest = null;
          this.lastBufferedRequest = null;
          this.pendingcb = 0;
          this.prefinished = false;
          this.errorEmitted = false;
          this.bufferedRequestCount = 0;
          this.corkedRequestsFree = new i(this);
        }
        function g(t) {
          a = a || e("./_stream_duplex");
          if (!l.call(g, this) && !(this instanceof a)) {
            return new g(t);
          }
          this._writableState = new p(t, this);
          this.writable = true;
          if (t) {
            if (typeof t.write == "function") {
              this._write = t.write;
            }
            if (typeof t.writev == "function") {
              this._writev = t.writev;
            }
            if (typeof t.destroy == "function") {
              this._destroy = t.destroy;
            }
            if (typeof t.final == "function") {
              this._final = t.final;
            }
          }
          u.call(this);
        }
        function _(e, t, r, n, i, a, s) {
          t.writelen = n;
          t.writecb = s;
          t.writing = true;
          t.sync = true;
          if (r) {
            e._writev(i, t.onwrite);
          } else {
            e._write(i, a, t.onwrite);
          }
          t.sync = false;
        }
        function b(e, t, r, n) {
          if (!r) {
            (function (e, t) {
              if (t.length === 0 && t.needDrain) {
                t.needDrain = false;
                e.emit("drain");
              }
            })(e, t);
          }
          t.pendingcb--;
          n();
          w(e, t);
        }
        function v(e, t) {
          t.bufferProcessing = true;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var n = t.bufferedRequestCount;
            var a = new Array(n);
            var s = t.corkedRequestsFree;
            s.entry = r;
            var o = 0;
            var h = true;
            while (r) {
              a[o] = r;
              if (!r.isBuf) {
                h = false;
              }
              r = r.next;
              o += 1;
            }
            a.allBuffers = h;
            _(e, t, true, t.length, a, "", s.finish);
            t.pendingcb++;
            t.lastBufferedRequest = null;
            if (s.next) {
              t.corkedRequestsFree = s.next;
              s.next = null;
            } else {
              t.corkedRequestsFree = new i(t);
            }
          } else {
            while (r) {
              var u = r.chunk;
              var f = r.encoding;
              var l = r.callback;
              _(e, t, false, t.objectMode ? 1 : u.length, u, f, l);
              r = r.next;
              if (t.writing) {
                break;
              }
            }
            if (r === null) {
              t.lastBufferedRequest = null;
            }
          }
          t.bufferedRequestCount = 0;
          t.bufferedRequest = r;
          t.bufferProcessing = false;
        }
        function y(e) {
          return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
        }
        function m(e, t) {
          e._final(function (r) {
            t.pendingcb--;
            if (r) {
              e.emit("error", r);
            }
            t.prefinished = true;
            e.emit("prefinish");
            w(e, t);
          });
        }
        function w(e, t) {
          var r = y(t);
          if (r) {
            (function (e, t) {
              if (!t.prefinished && !t.finalCalled) {
                if (typeof e._final == "function") {
                  t.pendingcb++;
                  t.finalCalled = true;
                  n(m, e, t);
                } else {
                  t.prefinished = true;
                  e.emit("prefinish");
                }
              }
            })(e, t);
            if (t.pendingcb === 0) {
              t.finished = true;
              e.emit("finish");
            }
          }
          return r;
        }
        o.inherits(g, u);
        p.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e;) {
            t.push(e);
            e = e.next;
          }
          return t;
        };
        (function () {
          try {
            Object.defineProperty(p.prototype, "buffer", {
              get: h.deprecate(function () {
                return this.getBuffer();
              }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            });
          } catch (e) {}
        })();
        if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
          l = Function.prototype[Symbol.hasInstance];
          Object.defineProperty(g, Symbol.hasInstance, {
            value: function (e) {
              return !!l.call(this, e) || e && e._writableState instanceof p;
            }
          });
        } else {
          l = function (e) {
            return e instanceof this;
          };
        }
        g.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        };
        g.prototype.write = function (e, t, r) {
          var i;
          var a = this._writableState;
          var s = false;
          i = e;
          var o = (Object.prototype.toString.call(i) === "[object Uint8Array]" || f.isBuffer(i)) && !a.objectMode;
          if (o && !f.isBuffer(e)) {
            e = function (e) {
              return f.from(e);
            }(e);
          }
          if (typeof t == "function") {
            r = t;
            t = null;
          }
          if (o) {
            t = "buffer";
          } else {
            t ||= a.defaultEncoding;
          }
          if (typeof r != "function") {
            r = d;
          }
          if (a.ended) {
            (function (e, t) {
              var r = new Error("write after end");
              e.emit("error", r);
              n(t, r);
            })(this, r);
          } else if (o || function (e, t, r, i) {
            var a = true;
            var s = false;
            if (r === null) {
              s = new TypeError("May not write null values to stream");
            } else if (typeof r != "string" && r !== undefined && !t.objectMode) {
              s = new TypeError("Invalid non-string/buffer chunk");
            }
            if (s) {
              e.emit("error", s);
              n(i, s);
              a = false;
            }
            return a;
          }(this, a, e, r)) {
            a.pendingcb++;
            s = function (e, t, r, n, i, a) {
              if (!r) {
                var s = function (e, t, r) {
                  if (!e.objectMode && e.decodeStrings !== false && typeof t == "string") {
                    t = f.from(t, r);
                  }
                  return t;
                }(t, n, i);
                if (n !== s) {
                  r = true;
                  i = "buffer";
                  n = s;
                }
              }
              var o = t.objectMode ? 1 : n.length;
              t.length += o;
              var h = t.length < t.highWaterMark;
              if (!h) {
                t.needDrain = true;
              }
              if (t.writing || t.corked) {
                var u = t.lastBufferedRequest;
                t.lastBufferedRequest = {
                  chunk: n,
                  encoding: i,
                  isBuf: r,
                  callback: a,
                  next: null
                };
                if (u) {
                  u.next = t.lastBufferedRequest;
                } else {
                  t.bufferedRequest = t.lastBufferedRequest;
                }
                t.bufferedRequestCount += 1;
              } else {
                _(e, t, false, o, n, i, a);
              }
              return h;
            }(this, a, o, e, t, r);
          }
          return s;
        };
        g.prototype.cork = function () {
          this._writableState.corked++;
        };
        g.prototype.uncork = function () {
          var e = this._writableState;
          if (e.corked) {
            e.corked--;
            if (!e.writing && !e.corked && !e.finished && !e.bufferProcessing && !!e.bufferedRequest) {
              v(this, e);
            }
          }
        };
        g.prototype.setDefaultEncoding = function (e) {
          if (typeof e == "string") {
            e = e.toLowerCase();
          }
          if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) {
            throw new TypeError("Unknown encoding: " + e);
          }
          this._writableState.defaultEncoding = e;
          return this;
        };
        g.prototype._write = function (e, t, r) {
          r(new Error("_write() is not implemented"));
        };
        g.prototype._writev = null;
        g.prototype.end = function (e, t, r) {
          var i = this._writableState;
          if (typeof e == "function") {
            r = e;
            e = null;
            t = null;
          } else if (typeof t == "function") {
            r = t;
            t = null;
          }
          if (e != null) {
            this.write(e, t);
          }
          if (i.corked) {
            i.corked = 1;
            this.uncork();
          }
          if (!i.ending && !i.finished) {
            (function (e, t, r) {
              t.ending = true;
              w(e, t);
              if (r) {
                if (t.finished) {
                  n(r);
                } else {
                  e.once("finish", r);
                }
              }
              t.ended = true;
              e.writable = false;
            })(this, i, r);
          }
        };
        Object.defineProperty(g.prototype, "destroyed", {
          get: function () {
            return this._writableState !== undefined && this._writableState.destroyed;
          },
          set: function (e) {
            if (this._writableState) {
              this._writableState.destroyed = e;
            }
          }
        });
        g.prototype.destroy = c.destroy;
        g.prototype._undestroy = c.undestroy;
        g.prototype._destroy = function (e, t) {
          this.end();
          t(e);
        };
      }).call(this, e("_process"));
    }, {
      "./_stream_duplex": 85,
      "./internal/streams/destroy": 91,
      "./internal/streams/stream": 92,
      _process: 73,
      "core-util-is": 9,
      inherits: 26,
      "process-nextick-args": 72,
      "safe-buffer": 80,
      "util-deprecate": 101
    }],
    90: [function (e, t, r) {
      "use strict";

      var n = e("safe-buffer").Buffer;
      function i(e, t, r) {
        e.copy(t, r);
      }
      t.exports = function () {
        function e() {
          (function (e, t) {
            if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, e);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        e.prototype.push = function (e) {
          var t = {
            data: e,
            next: null
          };
          if (this.length > 0) {
            this.tail.next = t;
          } else {
            this.head = t;
          }
          this.tail = t;
          ++this.length;
        };
        e.prototype.unshift = function (e) {
          var t = {
            data: e,
            next: this.head
          };
          if (this.length === 0) {
            this.tail = t;
          }
          this.head = t;
          ++this.length;
        };
        e.prototype.shift = function () {
          if (this.length !== 0) {
            var e = this.head.data;
            if (this.length === 1) {
              this.head = this.tail = null;
            } else {
              this.head = this.head.next;
            }
            --this.length;
            return e;
          }
        };
        e.prototype.clear = function () {
          this.head = this.tail = null;
          this.length = 0;
        };
        e.prototype.join = function (e) {
          if (this.length === 0) {
            return "";
          }
          for (var t = this.head, r = "" + t.data; t = t.next;) {
            r += e + t.data;
          }
          return r;
        };
        e.prototype.concat = function (e) {
          if (this.length === 0) {
            return n.alloc(0);
          }
          if (this.length === 1) {
            return this.head.data;
          }
          var t = n.allocUnsafe(e >>> 0);
          for (var r = this.head, a = 0; r;) {
            i(r.data, t, a);
            a += r.data.length;
            r = r.next;
          }
          return t;
        };
        return e;
      }();
    }, {
      "safe-buffer": 80
    }],
    91: [function (e, t, r) {
      "use strict";

      var n = e("process-nextick-args");
      function i(e, t) {
        e.emit("error", t);
      }
      t.exports = {
        destroy: function (e, t) {
          var r = this;
          var a = this._readableState && this._readableState.destroyed;
          var s = this._writableState && this._writableState.destroyed;
          if (a || s) {
            if (t) {
              t(e);
            } else if (!!e && (!this._writableState || !this._writableState.errorEmitted)) {
              n(i, this, e);
            }
          } else {
            if (this._readableState) {
              this._readableState.destroyed = true;
            }
            if (this._writableState) {
              this._writableState.destroyed = true;
            }
            this._destroy(e || null, function (e) {
              if (!t && e) {
                n(i, r, e);
                if (r._writableState) {
                  r._writableState.errorEmitted = true;
                }
              } else if (t) {
                t(e);
              }
            });
          }
        },
        undestroy: function () {
          if (this._readableState) {
            this._readableState.destroyed = false;
            this._readableState.reading = false;
            this._readableState.ended = false;
            this._readableState.endEmitted = false;
          }
          if (this._writableState) {
            this._writableState.destroyed = false;
            this._writableState.ended = false;
            this._writableState.ending = false;
            this._writableState.finished = false;
            this._writableState.errorEmitted = false;
          }
        }
      };
    }, {
      "process-nextick-args": 72
    }],
    92: [function (e, t, r) {
      t.exports = e("events").EventEmitter;
    }, {
      events: 14
    }],
    93: [function (e, t, r) {
      t.exports = e("./readable").PassThrough;
    }, {
      "./readable": 94
    }],
    94: [function (e, t, r) {
      (r = t.exports = e("./lib/_stream_readable.js")).Stream = r;
      r.Readable = r;
      r.Writable = e("./lib/_stream_writable.js");
      r.Duplex = e("./lib/_stream_duplex.js");
      r.Transform = e("./lib/_stream_transform.js");
      r.PassThrough = e("./lib/_stream_passthrough.js");
    }, {
      "./lib/_stream_duplex.js": 85,
      "./lib/_stream_passthrough.js": 86,
      "./lib/_stream_readable.js": 87,
      "./lib/_stream_transform.js": 88,
      "./lib/_stream_writable.js": 89
    }],
    95: [function (e, t, r) {
      t.exports = e("./readable").Transform;
    }, {
      "./readable": 94
    }],
    96: [function (e, t, r) {
      t.exports = e("./lib/_stream_writable.js");
    }, {
      "./lib/_stream_writable.js": 89
    }],
    97: [function (e, t, r) {
      "use strict";

      var n = e("safe-buffer").Buffer;
      var i = n.isEncoding || function (e) {
        switch ((e = "" + e) && e.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      function a(e) {
        var t;
        this.encoding = function (e) {
          var t = function (e) {
            if (!e) {
              return "utf8";
            }
            var t;
            while (true) {
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) {
                    return;
                  }
                  e = ("" + e).toLowerCase();
                  t = true;
              }
            }
          }(e);
          if (typeof t != "string" && (n.isEncoding === i || !i(e))) {
            throw new Error("Unknown encoding: " + e);
          }
          return t || e;
        }(e);
        switch (this.encoding) {
          case "utf16le":
            this.text = h;
            this.end = u;
            t = 4;
            break;
          case "utf8":
            this.fillLast = o;
            t = 4;
            break;
          case "base64":
            this.text = f;
            this.end = l;
            t = 3;
            break;
          default:
            this.write = c;
            this.end = d;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = n.allocUnsafe(t);
      }
      function s(e) {
        if (e <= 127) {
          return 0;
        } else if (e >> 5 == 6) {
          return 2;
        } else if (e >> 4 == 14) {
          return 3;
        } else if (e >> 3 == 30) {
          return 4;
        } else {
          return -1;
        }
      }
      function o(e) {
        var t = this.lastTotal - this.lastNeed;
        var r = function (e, t, r) {
          if ((t[0] & 192) != 128) {
            e.lastNeed = 0;
            return "�".repeat(r);
          }
          if (e.lastNeed > 1 && t.length > 1) {
            if ((t[1] & 192) != 128) {
              e.lastNeed = 1;
              return "�".repeat(r + 1);
            }
            if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) {
              e.lastNeed = 2;
              return "�".repeat(r + 2);
            }
          }
        }(this, e, t);
        if (r !== undefined) {
          return r;
        } else if (this.lastNeed <= e.length) {
          e.copy(this.lastChar, t, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        } else {
          e.copy(this.lastChar, t, 0, e.length);
          this.lastNeed -= e.length;
          return;
        }
      }
      function h(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString("utf16le", t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = e[e.length - 2];
              this.lastChar[1] = e[e.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = e[e.length - 1];
        return e.toString("utf16le", t, e.length - 1);
      }
      function u(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString("utf16le", 0, r);
        }
        return t;
      }
      function f(e, t) {
        var r = (e.length - t) % 3;
        if (r === 0) {
          return e.toString("base64", t);
        } else {
          this.lastNeed = 3 - r;
          this.lastTotal = 3;
          if (r === 1) {
            this.lastChar[0] = e[e.length - 1];
          } else {
            this.lastChar[0] = e[e.length - 2];
            this.lastChar[1] = e[e.length - 1];
          }
          return e.toString("base64", t, e.length - r);
        }
      }
      function l(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        } else {
          return t;
        }
      }
      function c(e) {
        return e.toString(this.encoding);
      }
      function d(e) {
        if (e && e.length) {
          return this.write(e);
        } else {
          return "";
        }
      }
      r.StringDecoder = a;
      a.prototype.write = function (e) {
        if (e.length === 0) {
          return "";
        }
        var t;
        var r;
        if (this.lastNeed) {
          if ((t = this.fillLast(e)) === undefined) {
            return "";
          }
          r = this.lastNeed;
          this.lastNeed = 0;
        } else {
          r = 0;
        }
        if (r < e.length) {
          if (t) {
            return t + this.text(e, r);
          } else {
            return this.text(e, r);
          }
        } else {
          return t || "";
        }
      };
      a.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          return t + "�".repeat(this.lastTotal - this.lastNeed);
        } else {
          return t;
        }
      };
      a.prototype.text = function (e, t) {
        var r = function (e, t, r) {
          var n = t.length - 1;
          if (n < r) {
            return 0;
          }
          var i = s(t[n]);
          if (i >= 0) {
            if (i > 0) {
              e.lastNeed = i - 1;
            }
            return i;
          }
          if (--n < r) {
            return 0;
          }
          i = s(t[n]);
          if (i >= 0) {
            if (i > 0) {
              e.lastNeed = i - 2;
            }
            return i;
          }
          if (--n < r) {
            return 0;
          }
          i = s(t[n]);
          if (i >= 0) {
            if (i > 0) {
              if (i === 2) {
                i = 0;
              } else {
                e.lastNeed = i - 3;
              }
            }
            return i;
          }
          return 0;
        }(this, e, t);
        if (!this.lastNeed) {
          return e.toString("utf8", t);
        }
        this.lastTotal = r;
        var n = e.length - (r - this.lastNeed);
        e.copy(this.lastChar, 0, n);
        return e.toString("utf8", t, n);
      };
      a.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length) {
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
        this.lastNeed -= e.length;
      };
    }, {
      "safe-buffer": 80
    }],
    98: [function (e, t, r) {
      var n = e("buffer").Buffer;
      var i = n.isEncoding || function (e) {
        switch (e && e.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      var a = r.StringDecoder = function (e) {
        this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, "");
        (function (e) {
          if (e && !i(e)) {
            throw new Error("Unknown encoding: " + e);
          }
        })(e);
        switch (this.encoding) {
          case "utf8":
            this.surrogateSize = 3;
            break;
          case "ucs2":
          case "utf16le":
            this.surrogateSize = 2;
            this.detectIncompleteChar = o;
            break;
          case "base64":
            this.surrogateSize = 3;
            this.detectIncompleteChar = h;
            break;
          default:
            this.write = s;
            return;
        }
        this.charBuffer = new n(6);
        this.charReceived = 0;
        this.charLength = 0;
      };
      function s(e) {
        return e.toString(this.encoding);
      }
      function o(e) {
        this.charReceived = e.length % 2;
        this.charLength = this.charReceived ? 2 : 0;
      }
      function h(e) {
        this.charReceived = e.length % 3;
        this.charLength = this.charReceived ? 3 : 0;
      }
      a.prototype.write = function (e) {
        var t = "";
        while (this.charLength) {
          var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
          e.copy(this.charBuffer, this.charReceived, 0, r);
          this.charReceived += r;
          if (this.charReceived < this.charLength) {
            return "";
          }
          e = e.slice(r, e.length);
          if (!((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296) || !(i <= 56319)) {
            this.charReceived = this.charLength = 0;
            if (e.length === 0) {
              return t;
            }
            break;
          }
          this.charLength += this.surrogateSize;
          t = "";
        }
        this.detectIncompleteChar(e);
        var n = e.length;
        if (this.charLength) {
          e.copy(this.charBuffer, 0, e.length - this.charReceived, n);
          n -= this.charReceived;
        }
        var i;
        n = (t += e.toString(this.encoding, 0, n)).length - 1;
        if ((i = t.charCodeAt(n)) >= 55296 && i <= 56319) {
          var a = this.surrogateSize;
          this.charLength += a;
          this.charReceived += a;
          this.charBuffer.copy(this.charBuffer, a, 0, a);
          e.copy(this.charBuffer, 0, 0, a);
          return t.substring(0, n);
        }
        return t;
      };
      a.prototype.detectIncompleteChar = function (e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
          var r = e[e.length - t];
          if (t == 1 && r >> 5 == 6) {
            this.charLength = 2;
            break;
          }
          if (t <= 2 && r >> 4 == 14) {
            this.charLength = 3;
            break;
          }
          if (t <= 3 && r >> 3 == 30) {
            this.charLength = 4;
            break;
          }
        }
        this.charReceived = t;
      };
      a.prototype.end = function (e) {
        var t = "";
        if (e && e.length) {
          t = this.write(e);
        }
        if (this.charReceived) {
          var r = this.charReceived;
          var n = this.charBuffer;
          var i = this.encoding;
          t += n.slice(0, r).toString(i);
        }
        return t;
      };
    }, {
      buffer: 7
    }],
    99: [function (e, t, r) {
      (function (r) {
        var n = e("stream");
        function i(e, t, i) {
          e = e || function (e) {
            this.queue(e);
          };
          t = t || function () {
            this.queue(null);
          };
          var a = false;
          var s = false;
          var o = [];
          var h = false;
          var u = new n();
          function f() {
            while (o.length && !u.paused) {
              var e = o.shift();
              if (e === null) {
                return u.emit("end");
              }
              u.emit("data", e);
            }
          }
          u.readable = u.writable = true;
          u.paused = false;
          u.autoDestroy = !i || i.autoDestroy !== false;
          u.write = function (t) {
            e.call(this, t);
            return !u.paused;
          };
          u.queue = u.push = function (e) {
            if (!h) {
              if (e === null) {
                h = true;
              }
              o.push(e);
              f();
            }
            return u;
          };
          u.on("end", function () {
            u.readable = false;
            if (!u.writable && u.autoDestroy) {
              r.nextTick(function () {
                u.destroy();
              });
            }
          });
          u.end = function (e) {
            if (!a) {
              a = true;
              if (arguments.length) {
                u.write(e);
              }
              u.writable = false;
              t.call(u);
              if (!u.readable && u.autoDestroy) {
                u.destroy();
              }
              return u;
            }
          };
          u.destroy = function () {
            if (!s) {
              s = true;
              a = true;
              o.length = 0;
              u.writable = u.readable = false;
              u.emit("close");
              return u;
            }
          };
          u.pause = function () {
            if (!u.paused) {
              u.paused = true;
              return u;
            }
          };
          u.resume = function () {
            if (u.paused) {
              u.paused = false;
              u.emit("resume");
            }
            f();
            if (!u.paused) {
              u.emit("drain");
            }
            return u;
          };
          return u;
        }
        t.exports = i;
        i.through = i;
      }).call(this, e("_process"));
    }, {
      _process: 73,
      stream: 82
    }],
    100: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r) {
        if (e.length === 0) {
          return e;
        } else if (t) {
          if (!r) {
            e.sort(t);
          }
          return function (e, t) {
            var r = 1;
            for (var n = e.length, i = e[0], a = e[0], s = 1; s < n; ++s) {
              a = i;
              if (t(i = e[s], a)) {
                if (s === r) {
                  r++;
                  continue;
                }
                e[r++] = i;
              }
            }
            e.length = r;
            return e;
          }(e, t);
        } else {
          if (!r) {
            e.sort();
          }
          return function (e) {
            var t = 1;
            for (var r = e.length, n = e[0], i = e[0], a = 1; a < r; ++a, i = n) {
              i = n;
              if ((n = e[a]) !== i) {
                if (a === t) {
                  t++;
                  continue;
                }
                e[t++] = n;
              }
            }
            e.length = t;
            return e;
          }(e);
        }
      };
    }, {}],
    101: [function (e, t, r) {
      (function (e) {
        function r(t) {
          try {
            if (!e.localStorage) {
              return false;
            }
          } catch (e) {
            return false;
          }
          var r = e.localStorage[t];
          return r != null && String(r).toLowerCase() === "true";
        }
        t.exports = function (e, t) {
          if (r("noDeprecation")) {
            return e;
          }
          var n = false;
          return function () {
            if (!n) {
              if (r("throwDeprecation")) {
                throw new Error(t);
              }
              if (r("traceDeprecation")) {
                console.trace(t);
              } else {
                console.warn(t);
              }
              n = true;
            }
            return e.apply(this, arguments);
          };
        };
      }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
    }, {}],
    102: [function (e, t, r) {
      arguments[4][26][0].apply(r, arguments);
    }, {
      dup: 26
    }],
    103: [function (e, t, r) {
      t.exports = function (e) {
        return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
      };
    }, {}],
    104: [function (e, t, r) {
      (function (t, n) {
        var i = /%[sdj%]/g;
        r.format = function (e) {
          if (!b(e)) {
            var t = [];
            for (var r = 0; r < arguments.length; r++) {
              t.push(o(arguments[r]));
            }
            return t.join(" ");
          }
          r = 1;
          for (var n = arguments, a = n.length, s = String(e).replace(i, function (e) {
              if (e === "%%") {
                return "%";
              }
              if (r >= a) {
                return e;
              }
              switch (e) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }), h = n[r]; r < a; h = n[++r]) {
            if (g(h) || !m(h)) {
              s += " " + h;
            } else {
              s += " " + o(h);
            }
          }
          return s;
        };
        r.deprecate = function (e, i) {
          if (v(n.process)) {
            return function () {
              return r.deprecate(e, i).apply(this, arguments);
            };
          }
          if (t.noDeprecation === true) {
            return e;
          }
          var a = false;
          return function () {
            if (!a) {
              if (t.throwDeprecation) {
                throw new Error(i);
              }
              if (t.traceDeprecation) {
                console.trace(i);
              } else {
                console.error(i);
              }
              a = true;
            }
            return e.apply(this, arguments);
          };
        };
        var a;
        var s = {};
        function o(e, t) {
          var n = {
            seen: [],
            stylize: u
          };
          if (arguments.length >= 3) {
            n.depth = arguments[2];
          }
          if (arguments.length >= 4) {
            n.colors = arguments[3];
          }
          if (p(t)) {
            n.showHidden = t;
          } else if (t) {
            r._extend(n, t);
          }
          if (v(n.showHidden)) {
            n.showHidden = false;
          }
          if (v(n.depth)) {
            n.depth = 2;
          }
          if (v(n.colors)) {
            n.colors = false;
          }
          if (v(n.customInspect)) {
            n.customInspect = true;
          }
          if (n.colors) {
            n.stylize = h;
          }
          return f(n, e, n.depth);
        }
        function h(e, t) {
          var r = o.styles[t];
          if (r) {
            return "[" + o.colors[r][0] + "m" + e + "[" + o.colors[r][1] + "m";
          } else {
            return e;
          }
        }
        function u(e, t) {
          return e;
        }
        function f(e, t, n) {
          if (e.customInspect && t && E(t.inspect) && t.inspect !== r.inspect && (!t.constructor || t.constructor.prototype !== t)) {
            var i = t.inspect(n, e);
            if (!b(i)) {
              i = f(e, i, n);
            }
            return i;
          }
          var a = function (e, t) {
            if (v(t)) {
              return e.stylize("undefined", "undefined");
            }
            if (b(t)) {
              var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
              return e.stylize(r, "string");
            }
            if (_(t)) {
              return e.stylize("" + t, "number");
            }
            if (p(t)) {
              return e.stylize("" + t, "boolean");
            }
            if (g(t)) {
              return e.stylize("null", "null");
            }
          }(e, t);
          if (a) {
            return a;
          }
          var s = Object.keys(t);
          var o = function (e) {
            var t = {};
            e.forEach(function (e, r) {
              t[e] = true;
            });
            return t;
          }(s);
          if (e.showHidden) {
            s = Object.getOwnPropertyNames(t);
          }
          if (k(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) {
            return l(t);
          }
          if (s.length === 0) {
            if (E(t)) {
              var h = t.name ? ": " + t.name : "";
              return e.stylize("[Function" + h + "]", "special");
            }
            if (y(t)) {
              return e.stylize(RegExp.prototype.toString.call(t), "regexp");
            }
            if (w(t)) {
              return e.stylize(Date.prototype.toString.call(t), "date");
            }
            if (k(t)) {
              return l(t);
            }
          }
          var u;
          var m = "";
          var x = false;
          var S = ["{", "}"];
          if (d(t)) {
            x = true;
            S = ["[", "]"];
          }
          if (E(t)) {
            m = " [Function" + (t.name ? ": " + t.name : "") + "]";
          }
          if (y(t)) {
            m = " " + RegExp.prototype.toString.call(t);
          }
          if (w(t)) {
            m = " " + Date.prototype.toUTCString.call(t);
          }
          if (k(t)) {
            m = " " + l(t);
          }
          if (s.length !== 0 || x && t.length != 0) {
            if (n < 0) {
              if (y(t)) {
                return e.stylize(RegExp.prototype.toString.call(t), "regexp");
              } else {
                return e.stylize("[Object]", "special");
              }
            } else {
              e.seen.push(t);
              u = x ? function (e, t, r, n, i) {
                var a = [];
                for (var s = 0, o = t.length; s < o; ++s) {
                  if (T(t, String(s))) {
                    a.push(c(e, t, r, n, String(s), true));
                  } else {
                    a.push("");
                  }
                }
                i.forEach(function (i) {
                  if (!i.match(/^\d+$/)) {
                    a.push(c(e, t, r, n, i, true));
                  }
                });
                return a;
              }(e, t, n, o, s) : s.map(function (r) {
                return c(e, t, n, o, r, x);
              });
              e.seen.pop();
              return function (e, t, r) {
                var n = e.reduce(function (e, t) {
                  if (t.indexOf("\n") >= 0) {
                    0;
                  }
                  return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (n > 60) {
                  return r[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                }
                return r[0] + t + " " + e.join(", ") + " " + r[1];
              }(u, m, S);
            }
          } else {
            return S[0] + m + S[1];
          }
        }
        function l(e) {
          return "[" + Error.prototype.toString.call(e) + "]";
        }
        function c(e, t, r, n, i, a) {
          var s;
          var o;
          var h;
          if ((h = Object.getOwnPropertyDescriptor(t, i) || {
            value: t[i]
          }).get) {
            o = h.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special");
          } else if (h.set) {
            o = e.stylize("[Setter]", "special");
          }
          if (!T(n, i)) {
            s = "[" + i + "]";
          }
          if (!o) {
            if (e.seen.indexOf(h.value) < 0) {
              if ((o = g(r) ? f(e, h.value, null) : f(e, h.value, r - 1)).indexOf("\n") > -1) {
                o = a ? o.split("\n").map(function (e) {
                  return "  " + e;
                }).join("\n").substr(2) : "\n" + o.split("\n").map(function (e) {
                  return "   " + e;
                }).join("\n");
              }
            } else {
              o = e.stylize("[Circular]", "special");
            }
          }
          if (v(s)) {
            if (a && i.match(/^\d+$/)) {
              return o;
            }
            if ((s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              s = s.substr(1, s.length - 2);
              s = e.stylize(s, "name");
            } else {
              s = s.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
              s = e.stylize(s, "string");
            }
          }
          return s + ": " + o;
        }
        function d(e) {
          return Array.isArray(e);
        }
        function p(e) {
          return typeof e == "boolean";
        }
        function g(e) {
          return e === null;
        }
        function _(e) {
          return typeof e == "number";
        }
        function b(e) {
          return typeof e == "string";
        }
        function v(e) {
          return e === undefined;
        }
        function y(e) {
          return m(e) && x(e) === "[object RegExp]";
        }
        function m(e) {
          return typeof e == "object" && e !== null;
        }
        function w(e) {
          return m(e) && x(e) === "[object Date]";
        }
        function k(e) {
          return m(e) && (x(e) === "[object Error]" || e instanceof Error);
        }
        function E(e) {
          return typeof e == "function";
        }
        function x(e) {
          return Object.prototype.toString.call(e);
        }
        function S(e) {
          if (e < 10) {
            return "0" + e.toString(10);
          } else {
            return e.toString(10);
          }
        }
        r.debuglog = function (e) {
          if (v(a)) {
            a = t.env.NODE_DEBUG || "";
          }
          e = e.toUpperCase();
          if (!s[e]) {
            if (new RegExp("\\b" + e + "\\b", "i").test(a)) {
              var n = t.pid;
              s[e] = function () {
                var t = r.format.apply(r, arguments);
                console.error("%s %d: %s", e, n, t);
              };
            } else {
              s[e] = function () {};
            }
          }
          return s[e];
        };
        r.inspect = o;
        o.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        };
        o.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        };
        r.isArray = d;
        r.isBoolean = p;
        r.isNull = g;
        r.isNullOrUndefined = function (e) {
          return e == null;
        };
        r.isNumber = _;
        r.isString = b;
        r.isSymbol = function (e) {
          return typeof e == "symbol";
        };
        r.isUndefined = v;
        r.isRegExp = y;
        r.isObject = m;
        r.isDate = w;
        r.isError = k;
        r.isFunction = E;
        r.isPrimitive = function (e) {
          return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
        };
        r.isBuffer = e("./support/isBuffer");
        var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function T(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        r.log = function () {
          var e;
          var t;
          console.log("%s - %s", (e = new Date(), t = [S(e.getHours()), S(e.getMinutes()), S(e.getSeconds())].join(":"), [e.getDate(), A[e.getMonth()], t].join(" ")), r.format.apply(r, arguments));
        };
        r.inherits = e("inherits");
        r._extend = function (e, t) {
          if (!t || !m(t)) {
            return e;
          }
          var r = Object.keys(t);
          for (var n = r.length; n--;) {
            e[r[n]] = t[r[n]];
          }
          return e;
        };
      }).call(this, e("_process"), typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
    }, {
      "./support/isBuffer": 103,
      _process: 73,
      inherits: 102
    }]
  }, {}, [1])(1);
});
