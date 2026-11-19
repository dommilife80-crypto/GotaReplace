(function () {
  "use strict";

  var f;
  var g = [];
  function l(a) {
    g.push(a);
    if (g.length == 1) {
      f();
    }
  }
  function m() {
    while (g.length) {
      g[0]();
      g.shift();
    }
  }
  f = function () {
    setTimeout(m);
  };
  function n(a) {
    this.a = p;
    this.b = undefined;
    this.f = [];
    var b = this;
    try {
      a(function (a) {
        q(b, a);
      }, function (a) {
        r(b, a);
      });
    } catch (c) {
      r(b, c);
    }
  }
  var p = 2;
  function t(a) {
    return new n(function (b, c) {
      c(a);
    });
  }
  function u(a) {
    return new n(function (b) {
      b(a);
    });
  }
  function q(a, b) {
    if (a.a == p) {
      if (b == a) {
        throw new TypeError();
      }
      var c = false;
      try {
        var d = b && b.then;
        if (b != null && typeof b == "object" && typeof d == "function") {
          d.call(b, function (b) {
            if (!c) {
              q(a, b);
            }
            c = true;
          }, function (b) {
            if (!c) {
              r(a, b);
            }
            c = true;
          });
          return;
        }
      } catch (e) {
        if (!c) {
          r(a, e);
        }
        return;
      }
      a.a = 0;
      a.b = b;
      v(a);
    }
  }
  function r(a, b) {
    if (a.a == p) {
      if (b == a) {
        throw new TypeError();
      }
      a.a = 1;
      a.b = b;
      v(a);
    }
  }
  function v(a) {
    l(function () {
      if (a.a != p) {
        while (a.f.length) {
          var b = a.f.shift();
          var c = b[0];
          var d = b[1];
          var e = b[2];
          var b = b[3];
          try {
            if (a.a == 0) {
              if (typeof c == "function") {
                e(c.call(undefined, a.b));
              } else {
                e(a.b);
              }
            } else if (a.a == 1) {
              if (typeof d == "function") {
                e(d.call(undefined, a.b));
              } else {
                b(a.b);
              }
            }
          } catch (h) {
            b(h);
          }
        }
      }
    });
  }
  n.prototype.g = function (a) {
    return this.c(undefined, a);
  };
  n.prototype.c = function (a, b) {
    var c = this;
    return new n(function (d, e) {
      c.f.push([a, b, d, e]);
      v(c);
    });
  };
  function w(a) {
    return new n(function (b, c) {
      function d(c) {
        return function (d) {
          h[c] = d;
          e += 1;
          if (e == a.length) {
            b(h);
          }
        };
      }
      var e = 0;
      var h = [];
      if (a.length == 0) {
        b(h);
      }
      for (var k = 0; k < a.length; k += 1) {
        u(a[k]).c(d(k), c);
      }
    });
  }
  function x(a) {
    return new n(function (b, c) {
      for (var d = 0; d < a.length; d += 1) {
        u(a[d]).c(b, c);
      }
    });
  }
  if (!window.Promise) {
    window.Promise = n;
    window.Promise.resolve = u;
    window.Promise.reject = t;
    window.Promise.race = x;
    window.Promise.all = w;
    window.Promise.prototype.then = n.prototype.c;
    window.Promise.prototype.catch = n.prototype.g;
  }
})();
(function () {
  function l(a, b) {
    if (document.addEventListener) {
      a.addEventListener("scroll", b, false);
    } else {
      a.attachEvent("scroll", b);
    }
  }
  function m(a) {
    if (document.body) {
      a();
    } else if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", function c() {
        document.removeEventListener("DOMContentLoaded", c);
        a();
      });
    } else {
      document.attachEvent("onreadystatechange", function k() {
        if (document.readyState == "interactive" || document.readyState == "complete") {
          document.detachEvent("onreadystatechange", k);
          a();
        }
      });
    }
  }
  function t(a) {
    this.a = document.createElement("div");
    this.a.setAttribute("aria-hidden", "true");
    this.a.appendChild(document.createTextNode(a));
    this.b = document.createElement("span");
    this.c = document.createElement("span");
    this.h = document.createElement("span");
    this.f = document.createElement("span");
    this.g = -1;
    this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
    this.b.appendChild(this.h);
    this.c.appendChild(this.f);
    this.a.appendChild(this.b);
    this.a.appendChild(this.c);
  }
  function u(a, b) {
    a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
  }
  function z(a) {
    var b = a.a.offsetWidth;
    var c = b + 100;
    a.f.style.width = c + "px";
    a.c.scrollLeft = c;
    a.b.scrollLeft = a.b.scrollWidth + 100;
    if (a.g !== b) {
      a.g = b;
      return true;
    } else {
      return false;
    }
  }
  function A(a, b) {
    function c() {
      var a = k;
      if (z(a) && a.a.parentNode) {
        b(a.g);
      }
    }
    var k = a;
    l(a.b, c);
    l(a.c, c);
    z(a);
  }
  function B(a, b) {
    var c = b || {};
    this.family = a;
    this.style = c.style || "normal";
    this.weight = c.weight || "normal";
    this.stretch = c.stretch || "normal";
  }
  var C = null;
  var D = null;
  var E = null;
  var F = null;
  function G() {
    if (D === null) {
      if (J() && /Apple/.test(window.navigator.vendor)) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        D = !!a && parseInt(a[1], 10) < 603;
      } else {
        D = false;
      }
    }
    return D;
  }
  function J() {
    if (F === null) {
      F = !!document.fonts;
    }
    return F;
  }
  function K() {
    if (E === null) {
      var a = document.createElement("div");
      try {
        a.style.font = "condensed 100px sans-serif";
      } catch (b) {}
      E = a.style.font !== "";
    }
    return E;
  }
  function L(a, b) {
    return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
  }
  B.prototype.load = function (a, b) {
    var c = this;
    var k = a || "BESbswy";
    var r = 0;
    var n = b || 3000;
    var H = new Date().getTime();
    return new Promise(function (a, b) {
      if (J() && !G()) {
        var M = new Promise(function (a, b) {
          function e() {
            if (new Date().getTime() - H >= n) {
              b(Error("" + n + "ms timeout exceeded"));
            } else {
              document.fonts.load(L(c, "\"" + c.family + "\""), k).then(function (c) {
                if (c.length >= 1) {
                  a();
                } else {
                  setTimeout(e, 25);
                }
              }, b);
            }
          }
          e();
        });
        var N = new Promise(function (a, c) {
          r = setTimeout(function () {
            c(Error("" + n + "ms timeout exceeded"));
          }, n);
        });
        Promise.race([N, M]).then(function () {
          clearTimeout(r);
          a(c);
        }, b);
      } else {
        m(function () {
          function v() {
            var b;
            if (b = f != -1 && g != -1 || f != -1 && h != -1 || g != -1 && h != -1) {
              if (!(b = f != g && f != h && g != h)) {
                if (C === null) {
                  b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                  C = !!b && (parseInt(b[1], 10) < 536 || parseInt(b[1], 10) === 536 && parseInt(b[2], 10) <= 11);
                }
                b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y);
              }
              b = !b;
            }
            if (b) {
              if (d.parentNode) {
                d.parentNode.removeChild(d);
              }
              clearTimeout(r);
              a(c);
            }
          }
          function I() {
            if (new Date().getTime() - H >= n) {
              if (d.parentNode) {
                d.parentNode.removeChild(d);
              }
              b(Error("" + n + "ms timeout exceeded"));
            } else {
              var a = document.hidden;
              if (a === true || a === undefined) {
                f = e.a.offsetWidth;
                g = p.a.offsetWidth;
                h = q.a.offsetWidth;
                v();
              }
              r = setTimeout(I, 50);
            }
          }
          var e = new t(k);
          var p = new t(k);
          var q = new t(k);
          var f = -1;
          var g = -1;
          var h = -1;
          var w = -1;
          var x = -1;
          var y = -1;
          var d = document.createElement("div");
          d.dir = "ltr";
          u(e, L(c, "sans-serif"));
          u(p, L(c, "serif"));
          u(q, L(c, "monospace"));
          d.appendChild(e.a);
          d.appendChild(p.a);
          d.appendChild(q.a);
          document.body.appendChild(d);
          w = e.a.offsetWidth;
          x = p.a.offsetWidth;
          y = q.a.offsetWidth;
          I();
          A(e, function (a) {
            f = a;
            v();
          });
          u(e, L(c, "\"" + c.family + "\",sans-serif"));
          A(p, function (a) {
            g = a;
            v();
          });
          u(p, L(c, "\"" + c.family + "\",serif"));
          A(q, function (a) {
            h = a;
            v();
          });
          u(q, L(c, "\"" + c.family + "\",monospace"));
        });
      }
    });
  };
  if (typeof module === "object") {
    module.exports = B;
  } else {
    window.FontFaceObserver = B;
    window.FontFaceObserver.prototype.load = B.prototype.load;
  }
})();
