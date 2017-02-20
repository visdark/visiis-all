"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "function" == typeof define && define.amd ? define(function () {
    return e(t);
  }) : e(t);
}(undefined, function (t) {
  var e = function () {
    function e(t) {
      return null == t ? t + "" : W[Y.call(t)] || "object";
    }function n(t) {
      return "function" == e(t);
    }function r(t) {
      return null != t && t == t.window;
    }function i(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE;
    }function o(t) {
      return "object" == e(t);
    }function a(t) {
      return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype;
    }function s(t) {
      var e = !!t && "length" in t && t.length,
          n = C.type(t);return "function" != n && !r(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }function u(t) {
      return L.call(t, function (t) {
        return null != t;
      });
    }function c(t) {
      return t.length > 0 ? C.fn.concat.apply([], t) : t;
    }function l(t) {
      return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }function f(t) {
      return t in k ? k[t] : k[t] = RegExp("(^|\\s)" + t + "(\\s|$)");
    }function h(t, e) {
      return "number" != typeof e || Z[l(t)] ? e : e + "px";
    }function p(t) {
      var e, n;return F[t] || (e = $.createElement(t), $.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), F[t] = n), F[t];
    }function d(t) {
      return "children" in t ? D.call(t.children) : C.map(t.childNodes, function (t) {
        return 1 == t.nodeType ? t : void 0;
      });
    }function m(t, e) {
      var n,
          r = t ? t.length : 0;for (n = 0; r > n; n++) {
        this[n] = t[n];
      }this.length = r, this.selector = e || "";
    }function g(t, e, n) {
      for (w in e) {
        n && (a(e[w]) || te(e[w])) ? (a(e[w]) && !a(t[w]) && (t[w] = {}), te(e[w]) && !te(t[w]) && (t[w] = []), g(t[w], e[w], n)) : e[w] !== j && (t[w] = e[w]);
      }
    }function v(t, e) {
      return null == e ? C(t) : C(t).filter(e);
    }function y(t, e, r, i) {
      return n(e) ? e.call(t, r, i) : e;
    }function x(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
    }function b(t, e) {
      var n = t.className || "",
          r = n && n.baseVal !== j;return e === j ? r ? n.baseVal : n : void (r ? n.baseVal = e : t.className = e);
    }function E(t) {
      try {
        return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? C.parseJSON(t) : t) : t;
      } catch (e) {
        return t;
      }
    }function T(t, e) {
      e(t);for (var n = 0, r = t.childNodes.length; r > n; n++) {
        T(t.childNodes[n], e);
      }
    }var j,
        w,
        C,
        S,
        N,
        O,
        P = [],
        A = P.concat,
        L = P.filter,
        D = P.slice,
        $ = t.document,
        F = {},
        k = {},
        Z = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
        M = /^\s*<(\w+|!)[^>]*>/,
        z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        q = /^(?:body|html)$/i,
        _ = /([A-Z])/g,
        I = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        H = ["after", "prepend", "before", "append"],
        V = $.createElement("table"),
        B = $.createElement("tr"),
        X = { tr: $.createElement("tbody"), tbody: V, thead: V, tfoot: V, td: B, th: B, "*": $.createElement("div") },
        U = /complete|loaded|interactive/,
        J = /^[\w-]*$/,
        W = {},
        Y = W.toString,
        G = {},
        K = $.createElement("div"),
        Q = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        te = Array.isArray || function (t) {
      return t instanceof Array;
    };return G.matches = function (t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;if (n) return n.call(t, e);var r,
          i = t.parentNode,
          o = !i;return o && (i = K).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && K.removeChild(t), r;
    }, N = function N(t) {
      return t.replace(/-+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : "";
      });
    }, O = function O(t) {
      return L.call(t, function (e, n) {
        return t.indexOf(e) == n;
      });
    }, G.fragment = function (t, e, n) {
      var r, i, o;return z.test(t) && (r = C($.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(R, "<$1></$2>")), e === j && (e = M.test(t) && RegExp.$1), e in X || (e = "*"), o = X[e], o.innerHTML = "" + t, r = C.each(D.call(o.childNodes), function () {
        o.removeChild(this);
      })), a(n) && (i = C(r), C.each(n, function (t, e) {
        I.indexOf(t) > -1 ? i[t](e) : i.attr(t, e);
      })), r;
    }, G.Z = function (t, e) {
      return new m(t, e);
    }, G.isZ = function (t) {
      return t instanceof G.Z;
    }, G.init = function (t, e) {
      var r;if (!t) return G.Z();if ("string" == typeof t) {
        if (t = t.trim(), "<" == t[0] && M.test(t)) r = G.fragment(t, RegExp.$1, e), t = null;else {
          if (e !== j) return C(e).find(t);r = G.qsa($, t);
        }
      } else {
        if (n(t)) return C($).ready(t);if (G.isZ(t)) return t;if (te(t)) r = u(t);else if (o(t)) r = [t], t = null;else if (M.test(t)) r = G.fragment(t.trim(), RegExp.$1, e), t = null;else {
          if (e !== j) return C(e).find(t);r = G.qsa($, t);
        }
      }return G.Z(r, t);
    }, C = function C(t, e) {
      return G.init(t, e);
    }, C.extend = function (t) {
      var e,
          n = D.call(arguments, 1);return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
        g(t, n, e);
      }), t;
    }, G.qsa = function (t, e) {
      var n,
          r = "#" == e[0],
          i = !r && "." == e[0],
          o = r || i ? e.slice(1) : e,
          a = J.test(o);return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
    }, C.contains = $.documentElement.contains ? function (t, e) {
      return t !== e && t.contains(e);
    } : function (t, e) {
      for (; e && (e = e.parentNode);) {
        if (e === t) return !0;
      }return !1;
    }, C.type = e, C.isFunction = n, C.isWindow = r, C.isArray = te, C.isPlainObject = a, C.isEmptyObject = function (t) {
      var e;for (e in t) {
        return !1;
      }return !0;
    }, C.isNumeric = function (t) {
      var e = +t,
          n = typeof t === "undefined" ? "undefined" : _typeof(t);return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1;
    }, C.inArray = function (t, e, n) {
      return P.indexOf.call(e, t, n);
    }, C.camelCase = N, C.trim = function (t) {
      return null == t ? "" : String.prototype.trim.call(t);
    }, C.uuid = 0, C.support = {}, C.expr = {}, C.noop = function () {}, C.map = function (t, e) {
      var n,
          r,
          i,
          o = [];if (s(t)) for (r = 0; r < t.length; r++) {
        n = e(t[r], r), null != n && o.push(n);
      } else for (i in t) {
        n = e(t[i], i), null != n && o.push(n);
      }return c(o);
    }, C.each = function (t, e) {
      var n, r;if (s(t)) {
        for (n = 0; n < t.length; n++) {
          if (e.call(t[n], n, t[n]) === !1) return t;
        }
      } else for (r in t) {
        if (e.call(t[r], r, t[r]) === !1) return t;
      }return t;
    }, C.grep = function (t, e) {
      return L.call(t, e);
    }, t.JSON && (C.parseJSON = JSON.parse), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
      W["[object " + e + "]"] = e.toLowerCase();
    }), C.fn = { constructor: G.Z, length: 0, forEach: P.forEach, reduce: P.reduce, push: P.push, sort: P.sort, splice: P.splice, indexOf: P.indexOf, concat: function concat() {
        var t,
            e,
            n = [];for (t = 0; t < arguments.length; t++) {
          e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
        }return A.apply(G.isZ(this) ? this.toArray() : this, n);
      }, map: function map(t) {
        return C(C.map(this, function (e, n) {
          return t.call(e, n, e);
        }));
      }, slice: function slice() {
        return C(D.apply(this, arguments));
      }, ready: function ready(t) {
        return U.test($.readyState) && $.body ? t(C) : $.addEventListener("DOMContentLoaded", function () {
          t(C);
        }, !1), this;
      }, get: function get(t) {
        return t === j ? D.call(this) : this[0 > t ? t + this.length : t];
      }, toArray: function toArray() {
        return this.get();
      }, size: function size() {
        return this.length;
      }, remove: function remove() {
        return this.each(function () {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      }, each: function each(t) {
        return P.every.call(this, function (e, n) {
          return t.call(e, n, e) !== !1;
        }), this;
      }, filter: function filter(t) {
        return n(t) ? this.not(this.not(t)) : C(L.call(this, function (e) {
          return G.matches(e, t);
        }));
      }, add: function add(t, e) {
        return C(O(this.concat(C(t, e))));
      }, is: function is(t) {
        return this.length > 0 && G.matches(this[0], t);
      }, not: function not(t) {
        var e = [];if (n(t) && t.call !== j) this.each(function (n) {
          t.call(this, n) || e.push(this);
        });else {
          var r = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? D.call(t) : C(t);this.forEach(function (t) {
            r.indexOf(t) < 0 && e.push(t);
          });
        }return C(e);
      }, has: function has(t) {
        return this.filter(function () {
          return o(t) ? C.contains(this, t) : C(this).find(t).size();
        });
      }, eq: function eq(t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      }, first: function first() {
        var t = this[0];return t && !o(t) ? t : C(t);
      }, last: function last() {
        var t = this[this.length - 1];return t && !o(t) ? t : C(t);
      }, find: function find(t) {
        var e,
            n = this;return e = t ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? C(t).filter(function () {
          var t = this;return P.some.call(n, function (e) {
            return C.contains(e, t);
          });
        }) : 1 == this.length ? C(G.qsa(this[0], t)) : this.map(function () {
          return G.qsa(this, t);
        }) : C();
      }, closest: function closest(t, e) {
        var n = [],
            r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && C(t);return this.each(function (o, a) {
          for (; a && !(r ? r.indexOf(a) >= 0 : G.matches(a, t));) {
            a = a !== e && !i(a) && a.parentNode;
          }a && n.indexOf(a) < 0 && n.push(a);
        }), C(n);
      }, parents: function parents(t) {
        for (var e = [], n = this; n.length > 0;) {
          n = C.map(n, function (t) {
            return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
          });
        }return v(e, t);
      }, parent: function parent(t) {
        return v(O(this.pluck("parentNode")), t);
      }, children: function children(t) {
        return v(this.map(function () {
          return d(this);
        }), t);
      }, contents: function contents() {
        return this.map(function () {
          return this.contentDocument || D.call(this.childNodes);
        });
      }, siblings: function siblings(t) {
        return v(this.map(function (t, e) {
          return L.call(d(e.parentNode), function (t) {
            return t !== e;
          });
        }), t);
      }, empty: function empty() {
        return this.each(function () {
          this.innerHTML = "";
        });
      }, pluck: function pluck(t) {
        return C.map(this, function (e) {
          return e[t];
        });
      }, show: function show() {
        return this.each(function () {
          "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName));
        });
      }, replaceWith: function replaceWith(t) {
        return this.before(t).remove();
      }, wrap: function wrap(t) {
        var e = n(t);if (this[0] && !e) var r = C(t).get(0),
            i = r.parentNode || this.length > 1;return this.each(function (n) {
          C(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r);
        });
      }, wrapAll: function wrapAll(t) {
        if (this[0]) {
          C(this[0]).before(t = C(t));for (var e; (e = t.children()).length;) {
            t = e.first();
          }C(t).append(this);
        }return this;
      }, wrapInner: function wrapInner(t) {
        var e = n(t);return this.each(function (n) {
          var r = C(this),
              i = r.contents(),
              o = e ? t.call(this, n) : t;i.length ? i.wrapAll(o) : r.append(o);
        });
      }, unwrap: function unwrap() {
        return this.parent().each(function () {
          C(this).replaceWith(C(this).children());
        }), this;
      }, clone: function clone() {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      }, hide: function hide() {
        return this.css("display", "none");
      }, toggle: function toggle(t) {
        return this.each(function () {
          var e = C(this);(t === j ? "none" == e.css("display") : t) ? e.show() : e.hide();
        });
      }, prev: function prev(t) {
        return C(this.pluck("previousElementSibling")).filter(t || "*");
      }, next: function next(t) {
        return C(this.pluck("nextElementSibling")).filter(t || "*");
      }, html: function html(t) {
        return 0 in arguments ? this.each(function (e) {
          var n = this.innerHTML;C(this).empty().append(y(this, t, e, n));
        }) : 0 in this ? this[0].innerHTML : null;
      }, text: function text(t) {
        return 0 in arguments ? this.each(function (e) {
          var n = y(this, t, e, this.textContent);this.textContent = null == n ? "" : "" + n;
        }) : 0 in this ? this.pluck("textContent").join("") : null;
      }, attr: function attr(t, e) {
        var n;return "string" != typeof t || 1 in arguments ? this.each(function (n) {
          if (1 === this.nodeType) if (o(t)) for (w in t) {
            x(this, w, t[w]);
          } else x(this, t, y(this, e, n, this.getAttribute(t)));
        }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : j;
      }, removeAttr: function removeAttr(t) {
        return this.each(function () {
          1 === this.nodeType && t.split(" ").forEach(function (t) {
            x(this, t);
          }, this);
        });
      }, prop: function prop(t, e) {
        return t = Q[t] || t, 1 in arguments ? this.each(function (n) {
          this[t] = y(this, e, n, this[t]);
        }) : this[0] && this[0][t];
      }, removeProp: function removeProp(t) {
        return t = Q[t] || t, this.each(function () {
          delete this[t];
        });
      }, data: function data(t, e) {
        var n = "data-" + t.replace(_, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(n, e) : this.attr(n);return null !== r ? E(r) : j;
      }, val: function val(t) {
        return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
          this.value = y(this, t, e, this.value);
        })) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function () {
          return this.selected;
        }).pluck("value") : this[0].value);
      }, offset: function offset(e) {
        if (e) return this.each(function (t) {
          var n = C(this),
              r = y(this, e, t, n.offset()),
              i = n.offsetParent().offset(),
              o = { top: r.top - i.top, left: r.left - i.left };"static" == n.css("position") && (o.position = "relative"), n.css(o);
        });if (!this.length) return null;if ($.documentElement !== this[0] && !C.contains($.documentElement, this[0])) return { top: 0, left: 0 };var n = this[0].getBoundingClientRect();return { left: n.left + t.pageXOffset, top: n.top + t.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) };
      }, css: function css(t, n) {
        if (arguments.length < 2) {
          var r = this[0];if ("string" == typeof t) {
            if (!r) return;return r.style[N(t)] || getComputedStyle(r, "").getPropertyValue(t);
          }if (te(t)) {
            if (!r) return;var i = {},
                o = getComputedStyle(r, "");return C.each(t, function (t, e) {
              i[e] = r.style[N(e)] || o.getPropertyValue(e);
            }), i;
          }
        }var a = "";if ("string" == e(t)) n || 0 === n ? a = l(t) + ":" + h(t, n) : this.each(function () {
          this.style.removeProperty(l(t));
        });else for (w in t) {
          t[w] || 0 === t[w] ? a += l(w) + ":" + h(w, t[w]) + ";" : this.each(function () {
            this.style.removeProperty(l(w));
          });
        }return this.each(function () {
          this.style.cssText += ";" + a;
        });
      }, index: function index(t) {
        return t ? this.indexOf(C(t)[0]) : this.parent().children().indexOf(this[0]);
      }, hasClass: function hasClass(t) {
        return t ? P.some.call(this, function (t) {
          return this.test(b(t));
        }, f(t)) : !1;
      }, addClass: function addClass(t) {
        return t ? this.each(function (e) {
          if ("className" in this) {
            S = [];var n = b(this),
                r = y(this, t, e, n);r.split(/\s+/g).forEach(function (t) {
              C(this).hasClass(t) || S.push(t);
            }, this), S.length && b(this, n + (n ? " " : "") + S.join(" "));
          }
        }) : this;
      }, removeClass: function removeClass(t) {
        return this.each(function (e) {
          if ("className" in this) {
            if (t === j) return b(this, "");S = b(this), y(this, t, e, S).split(/\s+/g).forEach(function (t) {
              S = S.replace(f(t), " ");
            }), b(this, S.trim());
          }
        });
      }, toggleClass: function toggleClass(t, e) {
        return t ? this.each(function (n) {
          var r = C(this),
              i = y(this, t, n, b(this));i.split(/\s+/g).forEach(function (t) {
            (e === j ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t);
          });
        }) : this;
      }, scrollTop: function scrollTop(t) {
        if (this.length) {
          var e = "scrollTop" in this[0];return t === j ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
            this.scrollTop = t;
          } : function () {
            this.scrollTo(this.scrollX, t);
          });
        }
      }, scrollLeft: function scrollLeft(t) {
        if (this.length) {
          var e = "scrollLeft" in this[0];return t === j ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
            this.scrollLeft = t;
          } : function () {
            this.scrollTo(t, this.scrollY);
          });
        }
      }, position: function position() {
        if (this.length) {
          var t = this[0],
              e = this.offsetParent(),
              n = this.offset(),
              r = q.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();return n.top -= parseFloat(C(t).css("margin-top")) || 0, n.left -= parseFloat(C(t).css("margin-left")) || 0, r.top += parseFloat(C(e[0]).css("border-top-width")) || 0, r.left += parseFloat(C(e[0]).css("border-left-width")) || 0, { top: n.top - r.top, left: n.left - r.left };
        }
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent || $.body; t && !q.test(t.nodeName) && "static" == C(t).css("position");) {
            t = t.offsetParent;
          }return t;
        });
      } }, C.fn.detach = C.fn.remove, ["width", "height"].forEach(function (t) {
      var e = t.replace(/./, function (t) {
        return t[0].toUpperCase();
      });C.fn[t] = function (n) {
        var o,
            a = this[0];return n === j ? r(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
          a = C(this), a.css(t, y(this, n, e, a[t]()));
        });
      };
    }), H.forEach(function (n, r) {
      var i = r % 2;C.fn[n] = function () {
        var n,
            o,
            a = C.map(arguments, function (t) {
          var r = [];return n = e(t), "array" == n ? (t.forEach(function (t) {
            return t.nodeType !== j ? r.push(t) : C.zepto.isZ(t) ? r = r.concat(t.get()) : void (r = r.concat(G.fragment(t)));
          }), r) : "object" == n || null == t ? t : G.fragment(t);
        }),
            s = this.length > 1;return a.length < 1 ? this : this.each(function (e, n) {
          o = i ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;var u = C.contains($.documentElement, o);a.forEach(function (e) {
            if (s) e = e.cloneNode(!0);else if (!o) return C(e).remove();o.insertBefore(e, n), u && T(e, function (e) {
              if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;n.eval.call(n, e.innerHTML);
              }
            });
          });
        });
      }, C.fn[i ? n + "To" : "insert" + (r ? "Before" : "After")] = function (t) {
        return C(t)[n](this), this;
      };
    }), G.Z.prototype = m.prototype = C.fn, G.uniq = O, G.deserializeValue = E, C.zepto = G, C;
  }();return t.Zepto = e, void 0 === t.$ && (t.$ = e), function (e) {
    function n(t) {
      return t._zid || (t._zid = p++);
    }function r(t, e, r, a) {
      if (e = i(e), e.ns) var s = o(e.ns);return (v[n(t)] || []).filter(function (t) {
        return !(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || r && n(t.fn) !== n(r) || a && t.sel != a);
      });
    }function i(t) {
      var e = ("" + t).split(".");return { e: e[0], ns: e.slice(1).sort().join(" ") };
    }function o(t) {
      return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
    }function a(t, e) {
      return t.del && !x && t.e in b || !!e;
    }function s(t) {
      return E[t] || x && b[t] || t;
    }function u(t, r, o, u, c, f, p) {
      var d = n(t),
          m = v[d] || (v[d] = []);r.split(/\s/).forEach(function (n) {
        if ("ready" == n) return e(document).ready(o);var r = i(n);r.fn = o, r.sel = c, r.e in E && (o = function o(t) {
          var n = t.relatedTarget;return !n || n !== this && !e.contains(this, n) ? r.fn.apply(this, arguments) : void 0;
        }), r.del = f;var d = f || o;r.proxy = function (e) {
          if (e = l(e), !e.isImmediatePropagationStopped()) {
            e.data = u;var n = d.apply(t, e._args == h ? [e] : [e].concat(e._args));return n === !1 && (e.preventDefault(), e.stopPropagation()), n;
          }
        }, r.i = m.length, m.push(r), "addEventListener" in t && t.addEventListener(s(r.e), r.proxy, a(r, p));
      });
    }function c(t, e, i, o, u) {
      var c = n(t);(e || "").split(/\s/).forEach(function (e) {
        r(t, e, i, o).forEach(function (e) {
          delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, a(e, u));
        });
      });
    }function l(t, n) {
      return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(C, function (e, r) {
        var i = n[e];t[e] = function () {
          return this[r] = T, i && i.apply(n, arguments);
        }, t[r] = j;
      }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = T)), t;
    }function f(t) {
      var e,
          n = { originalEvent: t };for (e in t) {
        w.test(e) || t[e] === h || (n[e] = t[e]);
      }return l(n, t);
    }var h,
        p = 1,
        d = Array.prototype.slice,
        m = e.isFunction,
        g = function g(t) {
      return "string" == typeof t;
    },
        v = {},
        y = {},
        x = "onfocusin" in t,
        b = { focus: "focusin", blur: "focusout" },
        E = { mouseenter: "mouseover", mouseleave: "mouseout" };y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = { add: u, remove: c }, e.proxy = function (t, r) {
      var i = 2 in arguments && d.call(arguments, 2);if (m(t)) {
        var o = function o() {
          return t.apply(r, i ? i.concat(d.call(arguments)) : arguments);
        };return o._zid = n(t), o;
      }if (g(r)) return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t);throw new TypeError("expected function");
    }, e.fn.bind = function (t, e, n) {
      return this.on(t, e, n);
    }, e.fn.unbind = function (t, e) {
      return this.off(t, e);
    }, e.fn.one = function (t, e, n, r) {
      return this.on(t, e, n, r, 1);
    };var T = function T() {
      return !0;
    },
        j = function j() {
      return !1;
    },
        w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        C = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };e.fn.delegate = function (t, e, n) {
      return this.on(e, t, n);
    }, e.fn.undelegate = function (t, e, n) {
      return this.off(e, t, n);
    }, e.fn.live = function (t, n) {
      return e(document.body).delegate(this.selector, t, n), this;
    }, e.fn.die = function (t, n) {
      return e(document.body).undelegate(this.selector, t, n), this;
    }, e.fn.on = function (t, n, r, i, o) {
      var a,
          s,
          l = this;return t && !g(t) ? (e.each(t, function (t, e) {
        l.on(t, n, r, e, o);
      }), l) : (g(n) || m(i) || i === !1 || (i = r, r = n, n = h), (i === h || r === !1) && (i = r, r = h), i === !1 && (i = j), l.each(function (l, h) {
        o && (a = function a(t) {
          return c(h, t.type, i), i.apply(this, arguments);
        }), n && (s = function s(t) {
          var r,
              o = e(t.target).closest(n, h).get(0);return o && o !== h ? (r = e.extend(f(t), { currentTarget: o, liveFired: h }), (a || i).apply(o, [r].concat(d.call(arguments, 1)))) : void 0;
        }), u(h, t, i, r, n, s || a);
      }));
    }, e.fn.off = function (t, n, r) {
      var i = this;return t && !g(t) ? (e.each(t, function (t, e) {
        i.off(t, n, e);
      }), i) : (g(n) || m(r) || r === !1 || (r = n, n = h), r === !1 && (r = j), i.each(function () {
        c(this, t, r, n);
      }));
    }, e.fn.trigger = function (t, n) {
      return t = g(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function () {
        t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n);
      });
    }, e.fn.triggerHandler = function (t, n) {
      var i, o;return this.each(function (a, s) {
        i = f(g(t) ? e.Event(t) : t), i._args = n, i.target = s, e.each(r(s, t.type || t), function (t, e) {
          return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0;
        });
      }), o;
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
      e.fn[t] = function (e) {
        return 0 in arguments ? this.bind(t, e) : this.trigger(t);
      };
    }), e.Event = function (t, e) {
      g(t) || (e = t, t = e.type);var n = document.createEvent(y[t] || "Events"),
          r = !0;if (e) for (var i in e) {
        "bubbles" == i ? r = !!e[i] : n[i] = e[i];
      }return n.initEvent(t, r, !0), l(n);
    };
  }(e), function (e) {
    function n(t, n, r) {
      var i = e.Event(n);return e(t).trigger(i, r), !i.isDefaultPrevented();
    }function r(t, e, r, i) {
      return t.global ? n(e || b, r, i) : void 0;
    }function i(t) {
      t.global && 0 === e.active++ && r(t, null, "ajaxStart");
    }function o(t) {
      t.global && ! --e.active && r(t, null, "ajaxStop");
    }function a(t, e) {
      var n = e.context;return e.beforeSend.call(n, t, e) === !1 || r(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void r(e, n, "ajaxSend", [t, e]);
    }function s(t, e, n, i) {
      var o = n.context,
          a = "success";n.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), r(n, o, "ajaxSuccess", [e, n, t]), c(a, e, n);
    }function u(t, e, n, i, o) {
      var a = i.context;i.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), r(i, a, "ajaxError", [n, i, t || e]), c(e, n, i);
    }function c(t, e, n) {
      var i = n.context;n.complete.call(i, e, t), r(n, i, "ajaxComplete", [e, n]), o(n);
    }function l(t, e, n) {
      if (n.dataFilter == f) return t;var r = n.context;return n.dataFilter.call(r, t, e);
    }function f() {}function h(t) {
      return t && (t = t.split(";", 2)[0]), t && (t == C ? "html" : t == w ? "json" : T.test(t) ? "script" : j.test(t) && "xml") || "text";
    }function p(t, e) {
      return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
    }function d(t) {
      t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = p(t.url, t.data), t.data = void 0);
    }function m(t, n, r, i) {
      return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), { url: t, data: n, success: r, dataType: i };
    }function g(t, n, r, i) {
      var o,
          a = e.isArray(n),
          s = e.isPlainObject(n);e.each(n, function (n, u) {
        o = e.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? g(t, u, r, n) : t.add(n, u);
      });
    }var v,
        y,
        x = +new Date(),
        b = t.document,
        E = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        T = /^(?:text|application)\/javascript/i,
        j = /^(?:text|application)\/xml/i,
        w = "application/json",
        C = "text/html",
        S = /^\s*$/,
        N = b.createElement("a");N.href = t.location.href, e.active = 0, e.ajaxJSONP = function (n, r) {
      if (!("type" in n)) return e.ajax(n);var i,
          o,
          c = n.jsonpCallback,
          l = (e.isFunction(c) ? c() : c) || "Zepto" + x++,
          f = b.createElement("script"),
          h = t[l],
          p = function p(t) {
        e(f).triggerHandler("error", t || "abort");
      },
          d = { abort: p };return r && r.promise(d), e(f).on("load error", function (a, c) {
        clearTimeout(o), e(f).off().remove(), "error" != a.type && i ? s(i[0], d, n, r) : u(null, c || "error", d, n, r), t[l] = h, i && e.isFunction(h) && h(i[0]), h = i = void 0;
      }), a(d, n) === !1 ? (p("abort"), d) : (t[l] = function () {
        i = arguments;
      }, f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + l), b.head.appendChild(f), n.timeout > 0 && (o = setTimeout(function () {
        p("timeout");
      }, n.timeout)), d);
    }, e.ajaxSettings = { type: "GET", beforeSend: f, success: f, error: f, complete: f, context: null, global: !0, xhr: function xhr() {
        return new t.XMLHttpRequest();
      }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: w, xml: "application/xml, text/xml", html: C, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0, dataFilter: f }, e.ajax = function (n) {
      var r,
          o,
          c = e.extend({}, n || {}),
          m = e.Deferred && e.Deferred();for (v in e.ajaxSettings) {
        void 0 === c[v] && (c[v] = e.ajaxSettings[v]);
      }i(c), c.crossDomain || (r = b.createElement("a"), r.href = c.url, r.href = r.href, c.crossDomain = N.protocol + "//" + N.host != r.protocol + "//" + r.host), c.url || (c.url = "" + t.location), (o = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, o)), d(c);var g = c.dataType,
          x = /\?.+=\?/.test(c.url);if (x && (g = "jsonp"), c.cache !== !1 && (n && n.cache === !0 || "script" != g && "jsonp" != g) || (c.url = p(c.url, "_=" + Date.now())), "jsonp" == g) return x || (c.url = p(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(c, m);var E,
          T = c.accepts[g],
          j = {},
          w = function w(t, e) {
        j[t.toLowerCase()] = [t, e];
      },
          C = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : t.location.protocol,
          O = c.xhr(),
          P = O.setRequestHeader;if (m && m.promise(O), c.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", T || "*/*"), (T = c.mimeType || T) && (T.indexOf(",") > -1 && (T = T.split(",", 2)[0]), O.overrideMimeType && O.overrideMimeType(T)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && w("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers) for (y in c.headers) {
        w(y, c.headers[y]);
      }if (O.setRequestHeader = w, O.onreadystatechange = function () {
        if (4 == O.readyState) {
          O.onreadystatechange = f, clearTimeout(E);var t,
              n = !1;if (O.status >= 200 && O.status < 300 || 304 == O.status || 0 == O.status && "file:" == C) {
            if (g = g || h(c.mimeType || O.getResponseHeader("content-type")), "arraybuffer" == O.responseType || "blob" == O.responseType) t = O.response;else {
              t = O.responseText;try {
                t = l(t, g, c), "script" == g ? (1, eval)(t) : "xml" == g ? t = O.responseXML : "json" == g && (t = S.test(t) ? null : e.parseJSON(t));
              } catch (r) {
                n = r;
              }if (n) return u(n, "parsererror", O, c, m);
            }s(t, O, c, m);
          } else u(O.statusText || null, O.status ? "error" : "abort", O, c, m);
        }
      }, a(O, c) === !1) return O.abort(), u(null, "abort", O, c, m), O;var A = "async" in c ? c.async : !0;if (O.open(c.type, c.url, A, c.username, c.password), c.xhrFields) for (y in c.xhrFields) {
        O[y] = c.xhrFields[y];
      }for (y in j) {
        P.apply(O, j[y]);
      }return c.timeout > 0 && (E = setTimeout(function () {
        O.onreadystatechange = f, O.abort(), u(null, "timeout", O, c, m);
      }, c.timeout)), O.send(c.data ? c.data : null), O;
    }, e.get = function () {
      return e.ajax(m.apply(null, arguments));
    }, e.post = function () {
      var t = m.apply(null, arguments);return t.type = "POST", e.ajax(t);
    }, e.getJSON = function () {
      var t = m.apply(null, arguments);return t.dataType = "json", e.ajax(t);
    }, e.fn.load = function (t, n, r) {
      if (!this.length) return this;var i,
          o = this,
          a = t.split(/\s/),
          s = m(t, n, r),
          u = s.success;return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (t) {
        o.html(i ? e("<div>").html(t.replace(E, "")).find(i) : t), u && u.apply(o, arguments);
      }, e.ajax(s), this;
    };var O = encodeURIComponent;e.param = function (t, n) {
      var r = [];return r.add = function (t, n) {
        e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(O(t) + "=" + O(n));
      }, g(r, t, n), r.join("&").replace(/%20/g, "+");
    };
  }(e), function (t) {
    t.fn.serializeArray = function () {
      var e,
          n,
          r = [],
          i = function i(t) {
        return t.forEach ? t.forEach(i) : void r.push({ name: e, value: t });
      };return this[0] && t.each(this[0].elements, function (r, o) {
        n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val());
      }), r;
    }, t.fn.serialize = function () {
      var t = [];return this.serializeArray().forEach(function (e) {
        t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
      }), t.join("&");
    }, t.fn.submit = function (e) {
      if (0 in arguments) this.bind("submit", e);else if (this.length) {
        var n = t.Event("submit");this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
      }return this;
    };
  }(e), function () {
    try {
      getComputedStyle(void 0);
    } catch (e) {
      var n = getComputedStyle;t.getComputedStyle = function (t, e) {
        try {
          return n(t, e);
        } catch (r) {
          return null;
        }
      };
    }
  }(), e;
}), function (t, e) {
  function n(t) {
    return t.replace(/([A-Z])/g, "-$1").toLowerCase();
  }function r(t) {
    return i ? i + t : t.toLowerCase();
  }var i,
      o,
      a,
      s,
      u,
      c,
      l,
      f,
      h,
      p,
      d = "",
      m = { Webkit: "webkit", Moz: "", O: "o" },
      g = document.createElement("div"),
      v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
      y = {};g.style.transform === e && t.each(m, function (t, n) {
    return g.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", i = n, !1) : e;
  }), o = d + "transform", y[a = d + "transition-property"] = y[s = d + "transition-duration"] = y[c = d + "transition-delay"] = y[u = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[f = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "", t.fx = { off: i === e && g.style.transitionProperty === e, speeds: { _default: 400, fast: 200, slow: 600 }, cssPrefix: d, transitionEnd: r("TransitionEnd"), animationEnd: r("AnimationEnd") }, t.fn.animate = function (n, r, i, o, a) {
    return t.isFunction(r) && (o = r, i = e, r = e), t.isFunction(i) && (o = i, i = e), t.isPlainObject(r) && (i = r.easing, o = r.complete, a = r.delay, r = r.duration), r && (r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, r, i, o, a);
  }, t.fn.anim = function (r, i, d, m, g) {
    var x,
        b,
        _E,
        T = {},
        j = "",
        w = this,
        C = t.fx.transitionEnd,
        S = !1;if (i === e && (i = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (i = 0), "string" == typeof r) T[l] = r, T[f] = i + "s", T[p] = g + "s", T[h] = d || "linear", C = t.fx.animationEnd;else {
      b = [];for (x in r) {
        v.test(x) ? j += x + "(" + r[x] + ") " : (T[x] = r[x], b.push(n(x)));
      }j && (T[o] = j, b.push(o)), i > 0 && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (T[a] = b.join(", "), T[s] = i + "s", T[c] = g + "s", T[u] = d || "linear");
    }return _E = function E(n) {
      if (e !== n) {
        if (n.target !== n.currentTarget) return;t(n.target).unbind(C, _E);
      } else t(this).unbind(C, _E);S = !0, t(this).css(y), m && m.call(this);
    }, i > 0 && (this.bind(C, _E), setTimeout(function () {
      S || _E.call(w);
    }, 1e3 * (i + g) + 25)), this.size() && this.get(0).clientLeft, this.css(T), i > 0 || setTimeout(function () {
      w.each(function () {
        _E.call(this);
      });
    }, 0), this;
  }, g = null;
}(Zepto), function (t, e) {
  function n(n, r, i, o, a) {
    "function" != typeof r || a || (a = r, r = e);var s = { opacity: i };return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, r, null, a);
  }function r(e, r, i, o) {
    return n(e, r, 0, i, function () {
      a.call(t(this)), o && o.call(this);
    });
  }var i = window.document,
      o = (i.documentElement, t.fn.show),
      a = t.fn.hide,
      s = t.fn.toggle;t.fn.show = function (t, r) {
    return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", r);
  }, t.fn.hide = function (t, n) {
    return t === e ? a.call(this) : r(this, t, "0,0", n);
  }, t.fn.toggle = function (n, r) {
    return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function () {
      var e = t(this);e["none" == e.css("display") ? "show" : "hide"](n, r);
    });
  }, t.fn.fadeTo = function (t, e, r) {
    return n(this, t, e, null, r);
  }, t.fn.fadeIn = function (t, e) {
    var n = this.css("opacity");return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e);
  }, t.fn.fadeOut = function (t, e) {
    return r(this, t, null, e);
  }, t.fn.fadeToggle = function (e, n) {
    return this.each(function () {
      var r = t(this);r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn" : "fadeOut"](e, n);
    });
  };
}(Zepto);

//# sourceMappingURL=zepto.min-compiled.js.map