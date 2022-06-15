/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */ (function () {
  function aa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ba(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function p(a, b, c) {
    p =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? aa
        : ba;
    return p.apply(null, arguments);
  }
  var q =
    Date.now ||
    function () {
      return +new Date();
    };
  function ca(a, b) {
    this.a = a;
    this.s = b || a;
    this.c = this.s.document;
  }
  var da = !!window.FontFace;
  function t(a, b, c, d) {
    b = a.c.createElement(b);
    if (c)
      for (var e in c)
        c.hasOwnProperty(e) &&
          ("style" == e ? (b.style.cssText = c[e]) : b.setAttribute(e, c[e]));
    d && b.appendChild(a.c.createTextNode(d));
    return b;
  }
  function u(a, b, c) {
    a = a.c.getElementsByTagName(b)[0];
    a || (a = document.documentElement);
    a.insertBefore(c, a.lastChild);
  }
  function v(a) {
    a.parentNode && a.parentNode.removeChild(a);
  }
  function w(a, b, c) {
    b = b || [];
    c = c || [];
    for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
      for (var f = !1, g = 0; g < d.length; g += 1)
        if (b[e] === d[g]) {
          f = !0;
          break;
        }
      f || d.push(b[e]);
    }
    b = [];
    for (e = 0; e < d.length; e += 1) {
      f = !1;
      for (g = 0; g < c.length; g += 1)
        if (d[e] === c[g]) {
          f = !0;
          break;
        }
      f || b.push(d[e]);
    }
    a.className = b
      .join(" ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/, "");
  }
  function y(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
      if (c[d] == b) return !0;
    return !1;
  }
  function ea(a) {
    return a.s.location.hostname || a.a.location.hostname;
  }
  function z(a, b, c) {
    function d() {
      m && e && f && (m(g), (m = null));
    }
    b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
    var e = !1,
      f = !0,
      g = null,
      m = c || null;
    da
      ? ((b.onload = function () {
          e = !0;
          d();
        }),
        (b.onerror = function () {
          e = !0;
          g = Error("Stylesheet failed to load");
          d();
        }))
      : setTimeout(function () {
          e = !0;
          d();
        }, 0);
    u(a, "head", b);
  }
  function A(a, b, c, d) {
    var e = a.c.getElementsByTagName("head")[0];
    if (e) {
      var f = t(a, "script", { src: b }),
        g = !1;
      f.onload = f.onreadystatechange = function () {
        g ||
          (this.readyState &&
            "loaded" != this.readyState &&
            "complete" != this.readyState) ||
          ((g = !0),
          c && c(null),
          (f.onload = f.onreadystatechange = null),
          "HEAD" == f.parentNode.tagName && e.removeChild(f));
      };
      e.appendChild(f);
      setTimeout(function () {
        g || ((g = !0), c && c(Error("Script load timeout")));
      }, d || 5e3);
      return f;
    }
    return null;
  }
  function B() {
    this.a = 0;
    this.c = null;
  }
  function C(a) {
    a.a++;
    return function () {
      a.a--;
      D(a);
    };
  }
  function E(a, b) {
    a.c = b;
    D(a);
  }
  function D(a) {
    0 == a.a && a.c && (a.c(), (a.c = null));
  }
  function F(a) {
    this.a = a || "-";
  }
  F.prototype.c = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++)
      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    return b.join(this.a);
  };
  function G(a, b) {
    this.c = a;
    this.f = 4;
    this.a = "n";
    var c = (b || "n4").match(/^([nio])([1-9])$/i);
    c && ((this.a = c[1]), (this.f = parseInt(c[2], 10)));
  }
  function fa(a) {
    return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
  }
  function I(a) {
    var b = [];
    a = a.split(/,\s*/);
    for (var c = 0; c < a.length; c++) {
      var d = a[c].replace(/['"]/g, "");
      -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
    }
    return b.join(",");
  }
  function J(a) {
    return a.a + a.f;
  }
  function H(a) {
    var b = "normal";
    "o" === a.a ? (b = "oblique") : "i" === a.a && (b = "italic");
    return b;
  }
  function ga(a) {
    var b = 4,
      c = "n",
      d = null;
    a &&
      ((d = a.match(/(normal|oblique|italic)/i)) &&
        d[1] &&
        (c = d[1].substr(0, 1).toLowerCase()),
      (d = a.match(/([1-9]00|normal|bold)/i)) &&
        d[1] &&
        (/bold/i.test(d[1])
          ? (b = 7)
          : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
    return c + b;
  }
  function ha(a, b) {
    this.c = a;
    this.f = a.s.document.documentElement;
    this.h = b;
    this.a = new F("-");
    this.j = !1 !== b.events;
    this.g = !1 !== b.classes;
  }
  function ia(a) {
    a.g && w(a.f, [a.a.c("wf", "loading")]);
    K(a, "loading");
  }
  function L(a) {
    if (a.g) {
      var b = y(a.f, a.a.c("wf", "active")),
        c = [],
        d = [a.a.c("wf", "loading")];
      b || c.push(a.a.c("wf", "inactive"));
      w(a.f, c, d);
    }
    K(a, "inactive");
  }
  function K(a, b, c) {
    if (a.j && a.h[b])
      if (c) a.h[b](c.c, J(c));
      else a.h[b]();
  }
  function ja() {
    this.c = {};
  }
  function ka(a, b, c) {
    var d = [],
      e;
    for (e in b)
      if (b.hasOwnProperty(e)) {
        var f = a.c[e];
        f && d.push(f(b[e], c));
      }
    return d;
  }
  function M(a, b) {
    this.c = a;
    this.f = b;
    this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
  }
  function N(a) {
    u(a.c, "body", a.a);
  }
  function O(a) {
    return (
      "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
      I(a.c) +
      ";" +
      ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";")
    );
  }
  function P(a, b, c, d, e, f) {
    this.g = a;
    this.j = b;
    this.a = d;
    this.c = c;
    this.f = e || 3e3;
    this.h = f || void 0;
  }
  P.prototype.start = function () {
    var a = this.c.s.document,
      b = this,
      c = q(),
      d = new Promise(function (d, e) {
        function f() {
          q() - c >= b.f
            ? e()
            : a.fonts.load(fa(b.a), b.h).then(
                function (a) {
                  1 <= a.length ? d() : setTimeout(f, 25);
                },
                function () {
                  e();
                }
              );
        }
        f();
      }),
      e = null,
      f = new Promise(function (a, d) {
        e = setTimeout(d, b.f);
      });
    Promise.race([f, d]).then(
      function () {
        e && (clearTimeout(e), (e = null));
        b.g(b.a);
      },
      function () {
        b.j(b.a);
      }
    );
  };
  function Q(a, b, c, d, e, f, g) {
    this.v = a;
    this.B = b;
    this.c = c;
    this.a = d;
    this.o = g || "BESbswy";
    this.f = {};
    this.w = e || 3e3;
    this.u = f || null;
    this.m = this.j = this.h = this.g = null;
    this.g = new M(this.c, this.o);
    this.h = new M(this.c, this.o);
    this.j = new M(this.c, this.o);
    this.m = new M(this.c, this.o);
    a = new G(this.a.c + ",serif", J(this.a));
    a = O(a);
    this.g.a.style.cssText = a;
    a = new G(this.a.c + ",sans-serif", J(this.a));
    a = O(a);
    this.h.a.style.cssText = a;
    a = new G("serif", J(this.a));
    a = O(a);
    this.j.a.style.cssText = a;
    a = new G("sans-serif", J(this.a));
    a = O(a);
    this.m.a.style.cssText = a;
    N(this.g);
    N(this.h);
    N(this.j);
    N(this.m);
  }
  var R = { D: "serif", C: "sans-serif" },
    S = null;
  function T() {
    if (null === S) {
      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
        window.navigator.userAgentData
      );
      S =
        !!a &&
        (536 > parseInt(a[1], 10) ||
          (536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10)));
    }
    return S;
  }
  Q.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.m.a.offsetWidth;
    this.A = q();
    U(this);
  };
  function la(a, b, c) {
    for (var d in R)
      if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
    return !1;
  }
  function U(a) {
    var b = a.g.a.offsetWidth,
      c = a.h.a.offsetWidth,
      d;
    (d = b === a.f.serif && c === a.f["sans-serif"]) ||
      (d = T() && la(a, b, c));
    d
      ? q() - a.A >= a.w
        ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c))
          ? V(a, a.v)
          : V(a, a.B)
        : ma(a)
      : V(a, a.v);
  }
  function ma(a) {
    setTimeout(
      p(function () {
        U(this);
      }, a),
      50
    );
  }
  function V(a, b) {
    setTimeout(
      p(function () {
        v(this.g.a);
        v(this.h.a);
        v(this.j.a);
        v(this.m.a);
        b(this.a);
      }, a),
      0
    );
  }
  function W(a, b, c) {
    this.c = a;
    this.a = b;
    this.f = 0;
    this.m = this.j = !1;
    this.o = c;
  }
  var X = null;
  W.prototype.g = function (a) {
    var b = this.a;
    b.g &&
      w(
        b.f,
        [b.a.c("wf", a.c, J(a).toString(), "active")],
        [
          b.a.c("wf", a.c, J(a).toString(), "loading"),
          b.a.c("wf", a.c, J(a).toString(), "inactive"),
        ]
      );
    K(b, "fontactive", a);
    this.m = !0;
    na(this);
  };
  W.prototype.h = function (a) {
    var b = this.a;
    if (b.g) {
      var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
        d = [],
        e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
      c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
      w(b.f, d, e);
    }
    K(b, "fontinactive", a);
    na(this);
  };
  function na(a) {
    0 == --a.f &&
      a.j &&
      (a.m
        ? ((a = a.a),
          a.g &&
            w(
              a.f,
              [a.a.c("wf", "active")],
              [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]
            ),
          K(a, "active"))
        : L(a.a));
  }
  function oa(a) {
    this.j = a;
    this.a = new ja();
    this.h = 0;
    this.f = this.g = !0;
  }
  oa.prototype.load = function (a) {
    this.c = new ca(this.j, a.context || this.j);
    this.g = !1 !== a.events;
    this.f = !1 !== a.classes;
    pa(this, new ha(this.c, a), a);
  };
  function qa(a, b, c, d, e) {
    var f = 0 == --a.h;
    (a.f || a.g) &&
      setTimeout(function () {
        var a = e || null,
          m = d || null || {};
        if (0 === c.length && f) L(b.a);
        else {
          b.f += c.length;
          f && (b.j = f);
          var h,
            l = [];
          for (h = 0; h < c.length; h++) {
            var k = c[h],
              n = m[k.c],
              r = b.a,
              x = k;
            r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
            K(r, "fontloading", x);
            r = null;
            if (null === X)
              if (window.FontFace) {
                var x = /Gecko.*Firefox\/(\d+)/.exec(
                    window.navigator.userAgentData
                  ),
                  xa =
                    /OS X.*Version\/10\..*Safari/.exec(
                      window.navigator.userAgentData
                    ) && /Apple/.exec(window.navigator.vendor);
                X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
              } else X = !1;
            X
              ? (r = new P(p(b.g, b), p(b.h, b), b.c, k, b.o, n))
              : (r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.o, a, n));
            l.push(r);
          }
          for (h = 0; h < l.length; h++) l[h].start();
        }
      }, 0);
  }
  function pa(a, b, c) {
    var d = [],
      e = c.timeout;
    ia(b);
    var d = ka(a.a, c, a.c),
      f = new W(a.c, b, e);
    a.h = d.length;
    b = 0;
    for (c = d.length; b < c; b++)
      d[b].load(function (b, d, c) {
        qa(a, f, b, d, c);
      });
  }
  function ra(a, b) {
    this.c = a;
    this.a = b;
  }
  ra.prototype.load = function (a) {
    function b() {
      if (f["__mti_fntLst" + d]) {
        var c = f["__mti_fntLst" + d](),
          e = [],
          h;
        if (c)
          for (var l = 0; l < c.length; l++) {
            var k = c[l].fontfamily;
            void 0 != c[l].fontStyle && void 0 != c[l].fontWeight
              ? ((h = c[l].fontStyle + c[l].fontWeight), e.push(new G(k, h)))
              : e.push(new G(k));
          }
        a(e);
      } else
        setTimeout(function () {
          b();
        }, 50);
    }
    var c = this,
      d = c.a.projectId,
      e = c.a.version;
    if (d) {
      var f = c.c.s;
      A(
        this.c,
        (c.a.api || "https://fast.fonts.net/jsapi") +
          "/" +
          d +
          ".js" +
          (e ? "?v=" + e : ""),
        function (e) {
          e
            ? a([])
            : ((f["__MonotypeConfiguration__" + d] = function () {
                return c.a;
              }),
              b());
        }
      ).id = "__MonotypeAPIScript__" + d;
    } else a([]);
  };
  function sa(a, b) {
    this.c = a;
    this.a = b;
  }
  sa.prototype.load = function (a) {
    var b,
      c,
      d = this.a.urls || [],
      e = this.a.families || [],
      f = this.a.testStrings || {},
      g = new B();
    b = 0;
    for (c = d.length; b < c; b++) z(this.c, d[b], C(g));
    var m = [];
    b = 0;
    for (c = e.length; b < c; b++)
      if (((d = e[b].split(":")), d[1]))
        for (var h = d[1].split(","), l = 0; l < h.length; l += 1)
          m.push(new G(d[0], h[l]));
      else m.push(new G(d[0]));
    E(g, function () {
      a(m, f);
    });
  };
  function ta(a, b, c, d, e) {
    this.o = 2 === e ? 2 : 1;
    e = ua[this.o - 1];
    a ? (this.c = a) : (this.c = e[0]);
    this.m = e[1];
    this.a = [];
    this.f = [];
    this.j = b || "";
    this.g = c || "";
    this.h = d || "";
  }
  var ua = [
    ["https://fonts.googleapis.com/css", "%7C"],
    ["https://fonts.googleapis.com/css2", "&family="],
  ];
  function va(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
      var e = b[d].split(":");
      3 == e.length && a.f.push(e.pop());
      var f = "";
      2 == e.length && "" != e[1] && (f = ":");
      a.a.push(e.join(f));
    }
  }
  function wa(a) {
    if (0 == a.a.length) throw Error("No fonts to load!");
    if (-1 != a.c.indexOf("kit=")) return a.c;
    for (var b = a.a.length, c = [], d = 0; d < b; d++)
      c.push(a.a[d].replace(/ /g, "+"));
    b = a.c + "?family=" + c.join(a.m);
    0 < a.f.length && (b += "&subset=" + a.f.join(","));
    0 < a.j.length && (b += "&text=" + encodeURIComponent(a.j));
    0 < a.g.length && (b += "&display=" + encodeURIComponent(a.g));
    0 < a.h.length && (b += "&effect=" + encodeURIComponent(a.h));
    return b;
  }
  function ya(a) {
    this.f = a;
    this.a = [];
    this.c = {};
  }
  var za = {
      latin: "BESbswy",
      "latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
      cyrillic: "\u0439\u044f\u0416",
      greek: "\u03b1\u03b2\u03a3",
      khmer: "\u1780\u1781\u1782",
      Hanuman: "\u1780\u1781\u1782",
    },
    Aa = {
      thin: "1",
      extralight: "2",
      "extra-light": "2",
      ultralight: "2",
      "ultra-light": "2",
      light: "3",
      regular: "4",
      book: "4",
      medium: "5",
      "semi-bold": "6",
      semibold: "6",
      "demi-bold": "6",
      demibold: "6",
      bold: "7",
      "extra-bold": "8",
      extrabold: "8",
      "ultra-bold": "8",
      ultrabold: "8",
      black: "9",
      heavy: "9",
      l: "3",
      r: "4",
      b: "7",
    },
    Ba = { i: "i", italic: "i", n: "n", normal: "n" },
    Ca =
      /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  function Da(a) {
    for (var b = a.f.length, c = 0; c < b; c++) {
      var d = a.f[c].split(":"),
        e = d[0].replace(/\+/g, " "),
        f = ["n4"];
      if (2 <= d.length) {
        var g;
        var m = d[1];
        g = [];
        if (m)
          for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
            var k;
            k = m[l];
            if (k.match(/^[\w-]+$/)) {
              var n = Ca.exec(k.toLowerCase());
              if (null == n) k = "";
              else {
                k = n[2];
                k = null == k || "" == k ? "n" : Ba[k];
                n = n[1];
                if (null == n || "" == n) n = "4";
                else
                  var r = Aa[n],
                    n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                k = [k, n].join("");
              }
            } else k = "";
            k && g.push(k);
          }
        0 < g.length && (f = g);
        3 == d.length &&
          ((d = d[2]),
          (g = []),
          (d = d ? d.split(",") : g),
          0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
      }
      a.c[e] || ((d = za[e]) && (a.c[e] = d));
      for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]));
    }
  }
  function Ea(a, b) {
    this.c = a;
    this.a = b;
  }
  var Fa = { Arimo: !0, Cousine: !0, Tinos: !0 };
  Ea.prototype.load = function (a) {
    var b = new B(),
      c = this.c,
      d = new ta(
        this.a.api,
        this.a.text,
        this.a.display,
        this.a.effect,
        this.a.version
      ),
      e = this.a.families;
    va(d, e);
    var f = new ya(e);
    Da(f);
    z(c, wa(d), C(b));
    E(b, function () {
      a(f.a, f.c, Fa);
    });
  };
  function Ga(a, b) {
    this.c = a;
    this.a = b;
  }
  Ga.prototype.load = function (a) {
    var b = this.a.id,
      c = this.c.s;
    b
      ? A(
          this.c,
          (this.a.api || "https://use.typekit.net") + "/" + b + ".js",
          function (b) {
            if (b) a([]);
            else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
              b = c.Typekit.config.fn;
              for (var e = [], f = 0; f < b.length; f += 2)
                for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++)
                  e.push(new G(g, m[h]));
              try {
                c.Typekit.load({ events: !1, classes: !1, async: !0 });
              } catch (l) {}
              a(e);
            }
          },
          2e3
        )
      : a([]);
  };
  function Ha(a, b) {
    this.c = a;
    this.f = b;
    this.a = [];
  }
  Ha.prototype.load = function (a) {
    var b = this.f.id,
      c = this.c.s,
      d = this;
    b
      ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}),
        (c.__webfontfontdeckmodule__[b] = function (b, c) {
          for (var g = 0, m = c.fonts.length; g < m; ++g) {
            var h = c.fonts[g];
            d.a.push(
              new G(
                h.name,
                ga("font-weight:" + h.weight + ";font-style:" + h.style)
              )
            );
          }
          a(d.a);
        }),
        A(
          this.c,
          (this.f.api || "https://f.fontdeck.com/s/css/js/") +
            ea(this.c) +
            "/" +
            b +
            ".js",
          function (b) {
            b && a([]);
          }
        ))
      : a([]);
  };
  var Y = new oa(window);
  Y.a.c.custom = function (a, b) {
    return new sa(b, a);
  };
  Y.a.c.fontdeck = function (a, b) {
    return new Ha(b, a);
  };
  Y.a.c.monotype = function (a, b) {
    return new ra(b, a);
  };
  Y.a.c.typekit = function (a, b) {
    return new Ga(b, a);
  };
  Y.a.c.google = function (a, b) {
    return new Ea(b, a);
  };
  var Z = { load: p(Y.load, Y) };
  "function" === typeof define && define.amd
    ? define(function () {
        return Z;
      })
    : "undefined" !== typeof module && module.exports
    ? (module.exports = Z)
    : ((window.WebFont = Z),
      window.WebFontConfig && Y.load(window.WebFontConfig));
})();
