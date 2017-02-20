"use strict";

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
};!function (t, e) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.VueRouter = e();
}(void 0, function () {
  function t(t, e) {
    if (!t) throw new Error("[vue-router] " + e);
  }function e(t, e) {
    t || "undefined" != typeof console && console.warn("[vue-router] " + e);
  }function n(t, n) {
    switch ("undefined" == typeof n ? "undefined" : _typeof(n)) {case "undefined":
        return;case "object":
        return n;case "function":
        return n(t);case "boolean":
        return n ? t.params : void 0;default:
        e(!1, 'props in "' + t.path + '" is a ' + ("undefined" == typeof n ? "undefined" : _typeof(n)) + ", expecting an object, function or boolean.");}
  }function r(t, n) {
    if (void 0 === n && (n = {}), t) {
      var r;try {
        r = o(t);
      } catch (t) {
        e(!1, t.message), r = {};
      }for (var i in n) {
        r[i] = n[i];
      }return r;
    }return n;
  }function o(t) {
    var e = {};return (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function (t) {
      var n = t.replace(/\+/g, " ").split("="),
          r = St(n.shift()),
          o = n.length > 0 ? St(n.join("=")) : null;void 0 === e[r] ? e[r] = o : Array.isArray(e[r]) ? e[r].push(o) : e[r] = [e[r], o];
    }), e) : e;
  }function i(t) {
    var e = t ? Object.keys(t).map(function (e) {
      var n = t[e];if (void 0 === n) return "";if (null === n) return Ct(e);if (Array.isArray(n)) {
        var r = [];return n.slice().forEach(function (t) {
          void 0 !== t && (null === t ? r.push(Ct(e)) : r.push(Ct(e) + "=" + Ct(t)));
        }), r.join("&");
      }return Ct(e) + "=" + Ct(n);
    }).filter(function (t) {
      return t.length > 0;
    }).join("&") : null;return e ? "?" + e : "";
  }function a(t, e, n) {
    var r = { name: e.name || t && t.name, meta: t && t.meta || {}, path: e.path || "/", hash: e.hash || "", query: e.query || {}, params: e.params || {}, fullPath: c(e), matched: t ? u(t) : [] };return n && (r.redirectedFrom = c(n)), Object.freeze(r);
  }function u(t) {
    for (var e = []; t;) {
      e.unshift(t), t = t.parent;
    }return e;
  }function c(t) {
    var e = t.path,
        n = t.query;void 0 === n && (n = {});var r = t.hash;return void 0 === r && (r = ""), (e || "/") + i(n) + r;
  }function s(t, e) {
    return e === Tt ? t === e : !!e && (t.path && e.path ? t.path.replace($t, "") === e.path.replace($t, "") && t.hash === e.hash && p(t.query, e.query) : !(!t.name || !e.name) && t.name === e.name && t.hash === e.hash && p(t.query, e.query) && p(t.params, e.params));
  }function p(t, e) {
    void 0 === t && (t = {}), void 0 === e && (e = {});var n = Object.keys(t),
        r = Object.keys(e);return n.length === r.length && n.every(function (n) {
      return String(t[n]) === String(e[n]);
    });
  }function f(t, e) {
    return 0 === t.path.replace($t, "/").indexOf(e.path.replace($t, "/")) && (!e.hash || t.hash === e.hash) && h(t.query, e.query);
  }function h(t, e) {
    for (var n in e) {
      if (!(n in t)) return !1;
    }return !0;
  }function l(t) {
    if (!(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) {
      if (t.target && t.target.getAttribute) {
        var e = t.target.getAttribute("target");if (/\b_blank\b/i.test(e)) return;
      }return t.preventDefault && t.preventDefault(), !0;
    }
  }function d(t) {
    if (t) for (var e, n = 0; n < t.length; n++) {
      if (e = t[n], "a" === e.tag) return e;if (e.children && (e = d(e.children))) return e;
    }
  }function y(t) {
    if (!y.installed) {
      y.installed = !0, Ot = t, Object.defineProperty(t.prototype, "$router", { get: function get() {
          return this.$root._router;
        } }), Object.defineProperty(t.prototype, "$route", { get: function get() {
          return this.$root._route;
        } }), t.mixin({ beforeCreate: function beforeCreate() {
          this.$options.router && (this._router = this.$options.router, this._router.init(this), t.util.defineReactive(this, "_route", this._router.history.current));
        } }), t.component("router-view", _t), t.component("router-link", Pt);var e = t.config.optionMergeStrategies;e.beforeRouteEnter = e.beforeRouteLeave = e.created;
    }
  }function v(t, e, n) {
    if ("/" === t.charAt(0)) return t;if ("?" === t.charAt(0) || "#" === t.charAt(0)) return e + t;var r = e.split("/");n && r[r.length - 1] || r.pop();for (var o = t.replace(/^\//, "").split("/"), i = 0; i < o.length; i++) {
      var a = o[i];"." !== a && (".." === a ? r.pop() : r.push(a));
    }return "" !== r[0] && r.unshift(""), r.join("/");
  }function m(t) {
    var e = "",
        n = "",
        r = t.indexOf("#");r >= 0 && (e = t.slice(r), t = t.slice(0, r));var o = t.indexOf("?");return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { path: t, query: n, hash: e };
  }function g(t) {
    return t.replace(/\/\//g, "/");
  }function w(t, e, n) {
    var r = e || Object.create(null),
        o = n || Object.create(null);return t.forEach(function (t) {
      b(r, o, t);
    }), { pathMap: r, nameMap: o };
  }function b(n, r, o, i, a) {
    var u = o.path,
        c = o.name;t(null != u, '"path" is required in a route configuration.'), t("string" != typeof o.component, 'route config "component" for path: ' + String(u || c) + " cannot be a string id. Use an actual component instead.");var s = { path: x(u, i), components: o.components || { default: o.component }, instances: {}, name: c, parent: i, matchAs: a, redirect: o.redirect, beforeEnter: o.beforeEnter, meta: o.meta || {}, props: null == o.props ? {} : o.components ? o.props : { default: o.props } };if (o.children && (o.name && o.children.some(function (t) {
      return (/^\/?$/.test(t.path)
      );
    }) && e(!1, "Named Route '" + o.name + "' has a default child route. When navigating to this named route (:to=\"{name: '" + o.name + "'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."), o.children.forEach(function (t) {
      var e = a ? g(a + "/" + t.path) : void 0;b(n, r, t, s, e);
    })), void 0 !== o.alias) if (Array.isArray(o.alias)) o.alias.forEach(function (t) {
      var e = { path: t, children: o.children };b(n, r, e, i, s.path);
    });else {
      var p = { path: o.alias, children: o.children };b(n, r, p, i, s.path);
    }n[s.path] || (n[s.path] = s), c && (r[c] ? a || e(!1, 'Duplicate named routes definition: { name: "' + c + '", path: "' + s.path + '" }') : r[c] = s);
  }function x(t, e) {
    return t = t.replace(/\/$/, ""), "/" === t[0] ? t : null == e ? t : g(e.path + "/" + t);
  }function k(t, e) {
    for (var n, r = [], o = 0, i = 0, a = "", u = e && e.delimiter || "/"; null != (n = Ft.exec(t));) {
      var c = n[0],
          s = n[1],
          p = n.index;if (a += t.slice(i, p), i = p + c.length, s) a += s[1];else {
        var f = t[i],
            h = n[2],
            l = n[3],
            d = n[4],
            y = n[5],
            v = n[6],
            m = n[7];a && (r.push(a), a = "");var g = null != h && null != f && f !== h,
            w = "+" === v || "*" === v,
            b = "?" === v || "*" === v,
            x = n[2] || u,
            k = d || y;r.push({ name: l || o++, prefix: h || "", delimiter: x, optional: b, repeat: w, partial: g, asterisk: !!m, pattern: k ? A(k) : m ? ".*" : "[^" + j(x) + "]+?" });
      }
    }return i < t.length && (a += t.substr(i)), a && r.push(a), r;
  }function R(t, e) {
    return E(k(t, e));
  }function O(t) {
    return encodeURI(t).replace(/[\/?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }function _(t) {
    return encodeURI(t).replace(/[?#]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }function E(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) {
      "object" === _typeof(t[n]) && (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
    }return function (n, r) {
      for (var o = "", i = n || {}, a = r || {}, u = a.pretty ? O : encodeURIComponent, c = 0; c < t.length; c++) {
        var s = t[c];if ("string" != typeof s) {
          var p,
              f = i[s.name];if (null == f) {
            if (s.optional) {
              s.partial && (o += s.prefix);continue;
            }throw new TypeError('Expected "' + s.name + '" to be defined');
          }if (Mt(f)) {
            if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");if (0 === f.length) {
              if (s.optional) continue;throw new TypeError('Expected "' + s.name + '" to not be empty');
            }for (var h = 0; h < f.length; h++) {
              if (p = u(f[h]), !e[c].test(p)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(p) + "`");o += (0 === h ? s.prefix : s.delimiter) + p;
            }
          } else {
            if (p = s.asterisk ? _(f) : u(f), !e[c].test(p)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + p + '"');o += s.prefix + p;
          }
        } else o += s;
      }return o;
    };
  }function j(t) {
    return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }function A(t) {
    return t.replace(/([=!:$\/()])/g, "\\$1");
  }function C(t, e) {
    return t.keys = e, t;
  }function S(t) {
    return t.sensitive ? "" : "i";
  }function $(t, e) {
    var n = t.source.match(/\((?!\?)/g);if (n) for (var r = 0; r < n.length; r++) {
      e.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null });
    }return C(t, e);
  }function T(t, e, n) {
    for (var r = [], o = 0; o < t.length; o++) {
      r.push(P(t[o], e, n).source);
    }var i = new RegExp("(?:" + r.join("|") + ")", S(n));return C(i, e);
  }function q(t, e, n) {
    return L(k(t, n), e, n);
  }function L(t, e, n) {
    Mt(e) || (n = e || n, e = []), n = n || {};for (var r = n.strict, o = n.end !== !1, i = "", a = 0; a < t.length; a++) {
      var u = t[a];if ("string" == typeof u) i += j(u);else {
        var c = j(u.prefix),
            s = "(?:" + u.pattern + ")";e.push(u), u.repeat && (s += "(?:" + c + s + ")*"), s = u.optional ? u.partial ? c + "(" + s + ")?" : "(?:" + c + "(" + s + "))?" : c + "(" + s + ")", i += s;
      }
    }var p = j(n.delimiter || "/"),
        f = i.slice(-p.length) === p;return r || (i = (f ? i.slice(0, -p.length) : i) + "(?:" + p + "(?=$))?"), i += o ? "$" : r && f ? "" : "(?=" + p + "|$)", C(new RegExp("^" + i, S(n)), e);
  }function P(t, e, n) {
    return Mt(e) || (n = e || n, e = []), n = n || {}, t instanceof RegExp ? $(t, e) : Mt(t) ? T(t, e, n) : q(t, e, n);
  }function U(t) {
    var e,
        n,
        r = Nt[t];return r ? (e = r.keys, n = r.regexp) : (e = [], n = zt(t, e), Nt[t] = { keys: e, regexp: n }), { keys: e, regexp: n };
  }function V(t, n, r) {
    try {
      var o = Jt[t] || (Jt[t] = zt.compile(t));return o(n || {}, { pretty: !0 });
    } catch (t) {
      return e(!1, "missing param for " + r + ": " + t.message), "";
    }
  }function M(t, n, o) {
    var i = "string" == typeof t ? { path: t } : t;if (i.name || i._normalized) return i;if (!i.path && i.params && n) {
      i = z({}, i), i._normalized = !0;var a = z(z({}, n.params), i.params);if (n.name) i.name = n.name, i.params = a;else if (n.matched) {
        var u = n.matched[n.matched.length - 1].path;i.path = V(u, a, "path " + n.path);
      } else e(!1, "relative params navigation requires a current route.");return i;
    }var c = m(i.path || ""),
        s = n && n.path || "/",
        p = c.path ? v(c.path, s, o || i.append) : n && n.path || "/",
        f = r(c.query, i.query),
        h = i.hash || c.hash;return h && "#" !== h.charAt(0) && (h = "#" + h), { _normalized: !0, path: p, query: f, hash: h };
  }function z(t, e) {
    for (var n in e) {
      t[n] = e[n];
    }return t;
  }function B(n) {
    function r(t) {
      w(t, p, f);
    }function o(t, n, r) {
      var o = M(t, n),
          i = o.name;if (i) {
        var a = f[i];e(a, "Route with name '" + i + "' does not exist");var u = U(a.path).keys.filter(function (t) {
          return !t.optional;
        }).map(function (t) {
          return t.name;
        });if ("object" !== _typeof(o.params) && (o.params = {}), n && "object" === _typeof(n.params)) for (var s in n.params) {
          !(s in o.params) && u.indexOf(s) > -1 && (o.params[s] = n.params[s]);
        }if (a) return o.path = V(a.path, o.params, 'named route "' + i + '"'), c(a, o, r);
      } else if (o.path) {
        o.params = {};for (var h in p) {
          if (H(h, o.params, o.path)) return c(p[h], o, r);
        }
      }return c(null, o);
    }function i(n, r) {
      var i = n.redirect,
          u = "function" == typeof i ? i(a(n, r)) : i;if ("string" == typeof u && (u = { path: u }), !u || "object" !== ("undefined" == typeof u ? "undefined" : _typeof(u))) return e(!1, "invalid redirect option: " + JSON.stringify(u)), c(null, r);var s = u,
          p = s.name,
          h = s.path,
          l = r.query,
          d = r.hash,
          y = r.params;if (l = s.hasOwnProperty("query") ? s.query : l, d = s.hasOwnProperty("hash") ? s.hash : d, y = s.hasOwnProperty("params") ? s.params : y, p) {
        var v = f[p];return t(v, 'redirect failed: named route "' + p + '" not found.'), o({ _normalized: !0, name: p, query: l, hash: d, params: y }, void 0, r);
      }if (h) {
        var m = I(h, n),
            g = V(m, y, 'redirect route with path "' + m + '"');return o({ _normalized: !0, path: g, query: l, hash: d }, void 0, r);
      }return e(!1, "invalid redirect option: " + JSON.stringify(u)), c(null, r);
    }function u(t, e, n) {
      var r = V(n, e.params, 'aliased route with path "' + n + '"'),
          i = o({ _normalized: !0, path: r });if (i) {
        var a = i.matched,
            u = a[a.length - 1];return e.params = i.params, c(u, e);
      }return c(null, e);
    }function c(t, e, n) {
      return t && t.redirect ? i(t, n || e) : t && t.matchAs ? u(t, e, t.matchAs) : a(t, e, n);
    }var s = w(n),
        p = s.pathMap,
        f = s.nameMap;return { match: o, addRoutes: r };
  }function H(t, e, n) {
    var r = U(t),
        o = r.regexp,
        i = r.keys,
        a = n.match(o);if (!a) return !1;if (!e) return !0;for (var u = 1, c = a.length; u < c; ++u) {
      var s = i[u - 1],
          p = "string" == typeof a[u] ? decodeURIComponent(a[u]) : a[u];s && (e[s.name] = p);
    }return !0;
  }function I(t, e) {
    return v(t, e.parent ? e.parent.path : "/", !0);
  }function D() {
    window.addEventListener("popstate", function (t) {
      t.state && t.state.key && Z(t.state.key);
    }), window.addEventListener("scroll", N);
  }function F(e, n, r, o) {
    if (e.app) {
      var i = e.options.scrollBehavior;i && (t("function" == typeof i, "scrollBehavior must be a function"), e.app.$nextTick(function () {
        var t = J(),
            e = i(n, r, o ? t : null);if (e) {
          var a = "object" === ("undefined" == typeof e ? "undefined" : _typeof(e));if (a && "string" == typeof e.selector) {
            var u = document.querySelector(e.selector);u ? t = K(u) : W(e) && (t = X(e));
          } else a && W(e) && (t = X(e));t && window.scrollTo(t.x, t.y);
        }
      }));
    }
  }function N() {
    var t = Q();t && (Kt[t] = { x: window.pageXOffset, y: window.pageYOffset });
  }function J() {
    var t = Q();if (t) return Kt[t];
  }function K(t) {
    var e = document.documentElement.getBoundingClientRect(),
        n = t.getBoundingClientRect();return { x: n.left - e.left, y: n.top - e.top };
  }function W(t) {
    return Y(t.x) || Y(t.y);
  }function X(t) {
    return { x: Y(t.x) ? t.x : window.pageXOffset, y: Y(t.y) ? t.y : window.pageYOffset };
  }function Y(t) {
    return "number" == typeof t;
  }function G() {
    return Xt.now().toFixed(3);
  }function Q() {
    return Yt;
  }function Z(t) {
    Yt = t;
  }function tt(t, e) {
    var n = window.history;try {
      e ? n.replaceState({ key: Yt }, "", t) : (Yt = G(), n.pushState({ key: Yt }, "", t)), N();
    } catch (n) {
      window.location[e ? "replace" : "assign"](t);
    }
  }function et(t) {
    tt(t, !0);
  }function nt(t, e, n) {
    var r = function r(o) {
      o >= t.length ? n() : t[o] ? e(t[o], function () {
        r(o + 1);
      }) : r(o + 1);
    };r(0);
  }function rt(t) {
    if (!t) if (Ut) {
      var e = document.querySelector("base");t = e ? e.getAttribute("href") : "/";
    } else t = "/";return "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "");
  }function ot(t, e) {
    var n,
        r = Math.max(t.length, e.length);for (n = 0; n < r && t[n] === e[n]; n++) {}return { updated: e.slice(0, n), activated: e.slice(n), deactivated: t.slice(n) };
  }function it(t, e, n, r) {
    var o = dt(t, function (t, r, o, i) {
      var a = at(t, e);if (a) return Array.isArray(a) ? a.map(function (t) {
        return n(t, r, o, i);
      }) : n(a, r, o, i);
    });return yt(r ? o.reverse() : o);
  }function at(t, e) {
    return "function" != typeof t && (t = Ot.extend(t)), t.options[e];
  }function ut(t) {
    return it(t, "beforeRouteLeave", st, !0);
  }function ct(t) {
    return it(t, "beforeRouteUpdate", st);
  }function st(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }function pt(t, e, n) {
    return it(t, "beforeRouteEnter", function (t, r, o, i) {
      return ft(t, o, i, e, n);
    });
  }function ft(t, e, n, r, o) {
    return function (i, a, u) {
      return t(i, a, function (t) {
        u(t), "function" == typeof t && r.push(function () {
          ht(t, e.instances, n, o);
        });
      });
    };
  }function ht(t, e, n, r) {
    e[n] ? t(e[n]) : r() && setTimeout(function () {
      ht(t, e, n, r);
    }, 16);
  }function lt(t) {
    return dt(t, function (t, n, r, o) {
      if ("function" == typeof t && !t.options) return function (n, i, a) {
        var u = vt(function (t) {
          r.components[o] = t, a();
        }),
            c = vt(function (t) {
          e(!1, "Failed to resolve async component " + o + ": " + t), a(!1);
        }),
            s = t(u, c);s && "function" == typeof s.then && s.then(u, c);
      };
    });
  }function dt(t, e) {
    return yt(t.map(function (t) {
      return Object.keys(t.components).map(function (n) {
        return e(t.components[n], t.instances[n], t, n);
      });
    }));
  }function yt(t) {
    return Array.prototype.concat.apply([], t);
  }function vt(t) {
    var e = !1;return function () {
      if (!e) return e = !0, t.apply(this, arguments);
    };
  }function mt(t) {
    var e = window.location.pathname;return t && 0 === e.indexOf(t) && (e = e.slice(t.length)), (e || "/") + window.location.search + window.location.hash;
  }function gt(t) {
    var e = mt(t);if (!/^\/#/.test(e)) return window.location.replace(g(t + "/#" + e)), !0;
  }function wt() {
    var t = bt();return "/" === t.charAt(0) || (kt("/" + t), !1);
  }function bt() {
    var t = window.location.href,
        e = t.indexOf("#");return e === -1 ? "" : t.slice(e + 1);
  }function xt(t) {
    window.location.hash = t;
  }function kt(t) {
    var e = window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0, e >= 0 ? e : 0) + "#" + t);
  }function Rt(t, e, n) {
    var r = "hash" === n ? "#" + e : e;return t ? g(t + "/" + r) : r;
  }var Ot,
      _t = { name: "router-view", functional: !0, props: { name: { type: String, default: "default" } }, render: function render(t, e) {
      var r = e.props,
          o = e.children,
          i = e.parent,
          a = e.data;a.routerView = !0;for (var u = r.name, c = i.$route, s = i._routerViewCache || (i._routerViewCache = {}), p = 0, f = !1; i;) {
        i.$vnode && i.$vnode.data.routerView && p++, i._inactive && (f = !0), i = i.$parent;
      }if (a.routerViewDepth = p, f) return t(s[u], a, o);var h = c.matched[p];if (!h) return s[u] = null, t();var l = s[u] = h.components[u],
          d = a.hook || (a.hook = {});return d.init = function (t) {
        h.instances[u] = t.child;
      }, d.prepatch = function (t, e) {
        h.instances[u] = e.child;
      }, d.destroy = function (t) {
        h.instances[u] === t.child && (h.instances[u] = void 0);
      }, a.props = n(c, h.props && h.props[u]), t(l, a, o);
    } },
      Et = /[!'()*]/g,
      jt = function jt(t) {
    return "%" + t.charCodeAt(0).toString(16);
  },
      At = /%2C/g,
      Ct = function Ct(t) {
    return encodeURIComponent(t).replace(Et, jt).replace(At, ",");
  },
      St = decodeURIComponent,
      $t = /\/?$/,
      Tt = a(null, { path: "/" }),
      qt = [String, Object],
      Lt = [String, Array],
      Pt = { name: "router-link", props: { to: { type: qt, required: !0 }, tag: { type: String, default: "a" }, exact: Boolean, append: Boolean, replace: Boolean, activeClass: String, event: { type: Lt, default: "click" } }, render: function render(t) {
      var e = this,
          n = this.$router,
          r = this.$route,
          o = n.resolve(this.to, r, this.append),
          i = o.location,
          u = o.route,
          c = o.href,
          p = {},
          h = this.activeClass || n.options.linkActiveClass || "router-link-active",
          y = i.path ? a(null, i) : u;p[h] = this.exact ? s(r, y) : f(r, y);var v = function v(t) {
        l(t) && (e.replace ? n.replace(i) : n.push(i));
      },
          m = { click: l };Array.isArray(this.event) ? this.event.forEach(function (t) {
        m[t] = v;
      }) : m[this.event] = v;var g = { class: p };if ("a" === this.tag) g.on = m, g.attrs = { href: c };else {
        var w = d(this.$slots.default);if (w) {
          w.isStatic = !1;var b = Ot.util.extend,
              x = w.data = b({}, w.data);x.on = m;var k = w.data.attrs = b({}, w.data.attrs);k.href = c;
        } else g.on = m;
      }return t(this.tag, g, this.$slots.default);
    } },
      Ut = "undefined" != typeof window,
      Vt = Array.isArray || function (t) {
    return "[object Array]" == Object.prototype.toString.call(t);
  },
      Mt = Vt,
      zt = P,
      Bt = k,
      Ht = R,
      It = E,
      Dt = L,
      Ft = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");zt.parse = Bt, zt.compile = Ht, zt.tokensToFunction = It, zt.tokensToRegExp = Dt;var Nt = Object.create(null),
      Jt = Object.create(null),
      Kt = Object.create(null),
      Wt = Ut && function () {
    var t = window.navigator.userAgent;return (t.indexOf("Android 2.") === -1 && t.indexOf("Android 4.0") === -1 || t.indexOf("Mobile Safari") === -1 || t.indexOf("Chrome") !== -1 || t.indexOf("Windows Phone") !== -1) && window.history && "pushState" in window.history;
  }(),
      Xt = Ut && window.performance && window.performance.now ? window.performance : Date,
      Yt = G(),
      Gt = function Gt(t, e) {
    this.router = t, this.base = rt(e), this.current = Tt, this.pending = null, this.ready = !1, this.readyCbs = [];
  };Gt.prototype.listen = function (t) {
    this.cb = t;
  }, Gt.prototype.onReady = function (t) {
    this.ready ? t() : this.readyCbs.push(t);
  }, Gt.prototype.transitionTo = function (t, e, n) {
    var r = this,
        o = this.router.match(t, this.current);this.confirmTransition(o, function () {
      r.updateRoute(o), e && e(o), r.ensureURL(), r.ready || (r.ready = !0, r.readyCbs.forEach(function (t) {
        t(o);
      }));
    }, n);
  }, Gt.prototype.confirmTransition = function (t, e, n) {
    var r = this,
        o = this.current,
        i = function i() {
      n && n();
    };if (s(t, o) && t.matched.length === o.matched.length) return this.ensureURL(), i();var a = ot(this.current.matched, t.matched),
        u = a.updated,
        c = a.deactivated,
        p = a.activated,
        f = [].concat(ut(c), this.router.beforeHooks, ct(u), p.map(function (t) {
      return t.beforeEnter;
    }), lt(p));this.pending = t;var h = function h(e, n) {
      return r.pending !== t ? i() : void e(t, o, function (t) {
        t === !1 ? (r.ensureURL(!0), i()) : "string" == typeof t || "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) ? ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t.replace ? r.replace(t) : r.push(t), i()) : n(t);
      });
    };nt(f, h, function () {
      var n = [],
          o = function o() {
        return r.current === t;
      },
          a = pt(p, n, o);nt(a, h, function () {
        return r.pending !== t ? i() : (r.pending = null, e(t), void (r.router.app && r.router.app.$nextTick(function () {
          n.forEach(function (t) {
            return t();
          });
        })));
      });
    });
  }, Gt.prototype.updateRoute = function (t) {
    var e = this.current;this.current = t, this.cb && this.cb(t), this.router.afterHooks.forEach(function (n) {
      n && n(t, e);
    });
  };var Qt = function (t) {
    function e(e, n) {
      var r = this;t.call(this, e, n);var o = e.options.scrollBehavior;o && D(), window.addEventListener("popstate", function (t) {
        r.transitionTo(mt(r.base), function (t) {
          o && F(e, t, r.current, !0);
        });
      });
    }return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.go = function (t) {
      window.history.go(t);
    }, e.prototype.push = function (t, e, n) {
      var r = this;this.transitionTo(t, function (t) {
        tt(g(r.base + t.fullPath)), F(r.router, t, r.current, !1), e && e(t);
      }, n);
    }, e.prototype.replace = function (t, e, n) {
      var r = this;this.transitionTo(t, function (t) {
        et(g(r.base + t.fullPath)), F(r.router, t, r.current, !1), e && e(t);
      }, n);
    }, e.prototype.ensureURL = function (t) {
      if (mt(this.base) !== this.current.fullPath) {
        var e = g(this.base + this.current.fullPath);t ? tt(e) : et(e);
      }
    }, e.prototype.getCurrentLocation = function () {
      return mt(this.base);
    }, e;
  }(Gt),
      Zt = function (t) {
    function e(e, n, r) {
      t.call(this, e, n), r && gt(this.base) || wt();
    }return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function () {
      var t = this;window.addEventListener("hashchange", function () {
        wt() && t.transitionTo(bt(), function (t) {
          kt(t.fullPath);
        });
      });
    }, e.prototype.push = function (t, e, n) {
      this.transitionTo(t, function (t) {
        xt(t.fullPath), e && e(t);
      }, n);
    }, e.prototype.replace = function (t, e, n) {
      this.transitionTo(t, function (t) {
        kt(t.fullPath), e && e(t);
      }, n);
    }, e.prototype.go = function (t) {
      window.history.go(t);
    }, e.prototype.ensureURL = function (t) {
      var e = this.current.fullPath;bt() !== e && (t ? xt(e) : kt(e));
    }, e.prototype.getCurrentLocation = function () {
      return bt();
    }, e;
  }(Gt),
      te = function (t) {
    function e(e, n) {
      t.call(this, e, n), this.stack = [], this.index = -1;
    }return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function (t, e, n) {
      var r = this;this.transitionTo(t, function (t) {
        r.stack = r.stack.slice(0, r.index + 1).concat(t), r.index++, e && e(t);
      }, n);
    }, e.prototype.replace = function (t, e, n) {
      var r = this;this.transitionTo(t, function (t) {
        r.stack = r.stack.slice(0, r.index).concat(t), e && e(t);
      }, n);
    }, e.prototype.go = function (t) {
      var e = this,
          n = this.index + t;if (!(n < 0 || n >= this.stack.length)) {
        var r = this.stack[n];this.confirmTransition(r, function () {
          e.index = n, e.updateRoute(r);
        });
      }
    }, e.prototype.getCurrentLocation = function () {
      var t = this.stack[this.stack.length - 1];return t ? t.fullPath : "/";
    }, e.prototype.ensureURL = function () {}, e;
  }(Gt),
      ee = function ee(e) {
    void 0 === e && (e = {}), this.app = null, this.apps = [], this.options = e, this.beforeHooks = [], this.afterHooks = [], this.matcher = B(e.routes || []);var n = e.mode || "hash";switch (this.fallback = "history" === n && !Wt, this.fallback && (n = "hash"), Ut || (n = "abstract"), this.mode = n, n) {case "history":
        this.history = new Qt(this, e.base);break;case "hash":
        this.history = new Zt(this, e.base, this.fallback);break;case "abstract":
        this.history = new te(this, e.base);break;default:
        t(!1, "invalid mode: " + n);}
  },
      ne = { currentRoute: {} };return ee.prototype.match = function (t, e, n) {
    return this.matcher.match(t, e, n);
  }, ne.currentRoute.get = function () {
    return this.history && this.history.current;
  }, ee.prototype.init = function (e) {
    var n = this;if (t(y.installed, "not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."), this.apps.push(e), !this.app) {
      this.app = e;var r = this.history;if (r instanceof Qt) r.transitionTo(r.getCurrentLocation());else if (r instanceof Zt) {
        var o = function o() {
          r.setupListeners();
        };r.transitionTo(r.getCurrentLocation(), o, o);
      }r.listen(function (t) {
        n.apps.forEach(function (e) {
          e._route = t;
        });
      });
    }
  }, ee.prototype.beforeEach = function (t) {
    this.beforeHooks.push(t);
  }, ee.prototype.afterEach = function (t) {
    this.afterHooks.push(t);
  }, ee.prototype.onReady = function (t) {
    this.history.onReady(t);
  }, ee.prototype.push = function (t, e, n) {
    this.history.push(t, e, n);
  }, ee.prototype.replace = function (t, e, n) {
    this.history.replace(t, e, n);
  }, ee.prototype.go = function (t) {
    this.history.go(t);
  }, ee.prototype.back = function () {
    this.go(-1);
  }, ee.prototype.forward = function () {
    this.go(1);
  }, ee.prototype.getMatchedComponents = function (t) {
    var e = t ? this.resolve(t).route : this.currentRoute;return e ? [].concat.apply([], e.matched.map(function (t) {
      return Object.keys(t.components).map(function (e) {
        return t.components[e];
      });
    })) : [];
  }, ee.prototype.resolve = function (t, e, n) {
    var r = M(t, e || this.history.current, n),
        o = this.match(r, e),
        i = o.redirectedFrom || o.fullPath,
        a = this.history.base,
        u = Rt(a, i, this.mode);return { location: r, route: o, href: u, normalizedTo: r, resolved: o };
  }, ee.prototype.addRoutes = function (t) {
    this.matcher.addRoutes(t), this.history.current !== Tt && this.history.transitionTo(this.history.getCurrentLocation());
  }, Object.defineProperties(ee.prototype, ne), ee.install = y, ee.version = "2.2.0", Ut && window.Vue && window.Vue.use(ee), ee;
});

//# sourceMappingURL=vue-router.min-compiled-compiled.js.map

//# sourceMappingURL=vue-router.min-compiled-compiled-compiled.js.map