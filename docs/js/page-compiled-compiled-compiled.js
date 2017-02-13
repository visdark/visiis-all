"use strict";

$(function () {
  function n() {
    var n = function () {
      try {
        return document.createEvent("TouchEvent"), !0;
      } catch (n) {
        return !1;
      }
    }(),
        t = $.fn.on;$.fn.on = function () {
      if (/click/.test(arguments[0]) && "function" == typeof arguments[1] && n) {
        var e,
            i = arguments[1];t.apply(this, ["touchstart", function (n) {
          e = n.changedTouches[0].clientY;
        }]), t.apply(this, ["touchend", function (n) {
          Math.abs(n.changedTouches[0].clientY - e) > 10 || (n.preventDefault(), i.apply(this, [n]));
        }]);
      } else t.apply(this, arguments);return this;
    };
  }function t() {
    $(window).on("load", function () {
      for (var n = ["./images/layers/content.png", "./images/layers/navigation.png", "./images/layers/popout.png", "./images/layers/transparent.gif"], t = 0, e = n.length; t < e; ++t) {
        new Image().src = n[t];
      }
    });
  }function e() {
    /Android/gi.test(navigator.userAgent) && window.addEventListener("resize", function () {
      "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || window.setTimeout(function () {
        document.activeElement.scrollIntoViewIfNeeded();
      }, 0);
    });
  }function i() {
    var n = { title: "WeUI, 为微信 Web 服务量身设计", desc: "WeUI, 为微信 Web 服务量身设计", link: "https://weui.io", imgUrl: "https://mmbiz.qpic.cn/mmemoticon/ajNVdqHZLLA16apETUPXh9Q5GLpSic7lGuiaic0jqMt4UY8P4KHSBpEWgM7uMlbxxnVR7596b3NPjUfwg7cFbfCtA/0" };$.getJSON("https://weui.io/api/sign?url=" + encodeURIComponent(location.href.split("#")[0]), function (t) {
      wx.config({ beta: !0, debug: !1, appId: t.appid, timestamp: t.timestamp, nonceStr: t.nonceStr, signature: t.signature, jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "setBounceBackground"] }), wx.ready(function () {
        wx.invoke("setBounceBackground", { backgroundColor: "#F8F8F8", footerBounceColor: "#F8F8F8" }), wx.onMenuShareTimeline(n), wx.onMenuShareQQ(n), wx.onMenuShareAppMessage({ title: "WeUI", desc: "为微信 Web 服务量身设计", link: location.href, imgUrl: "https://mmbiz.qpic.cn/mmemoticon/ajNVdqHZLLA16apETUPXh9Q5GLpSic7lGuiaic0jqMt4UY8P4KHSBpEWgM7uMlbxxnVR7596b3NPjUfwg7cFbfCtA/0" });
      });
    });
  }function a() {
    for (var n = {}, t = $('script[type="text/html"]'), e = $(window).height(), i = 0, a = t.length; i < a; ++i) {
      var o = t[i],
          c = o.id.replace(/tpl_/, "");n[c] = { name: c, url: "#" + c, template: "#" + o.id };
    }n.home.url = "#";for (var r in n) {
      s.push(n[r]);
    }s.setPageAppend(function (n) {
      var t = n.find(".page__ft");t.length < 1 || (t.position().top + t.height() < e ? t.addClass("j_bottom") : t.removeClass("j_bottom"));
    }).setDefault("home").init();
  }function o() {
    t(), n(), e(), i(), a(), window.pageManager = s, window.home = function () {
      location.hash = "";
    };
  }var s = { $container: $("#container"), _pageStack: [], _configs: [], _pageAppend: function _pageAppend() {}, _defaultPage: null, _pageIndex: 1, setDefault: function setDefault(n) {
      return this._defaultPage = this._find("name", n), this;
    }, setPageAppend: function setPageAppend(n) {
      return this._pageAppend = n, this;
    }, init: function init() {
      var n = this;$(window).on("hashchange", function () {
        var t = history.state || {},
            e = 0 === location.hash.indexOf("#") ? location.hash : "#",
            i = n._find("url", e) || n._defaultPage;t._pageIndex <= n._pageIndex || n._findInStack(e) ? n._back(i) : n._go(i);
      }), history.state && history.state._pageIndex && (this._pageIndex = history.state._pageIndex), this._pageIndex--;var t = 0 === location.hash.indexOf("#") ? location.hash : "#",
          e = n._find("url", t) || n._defaultPage;return this._go(e), this;
    }, push: function push(n) {
      return this._configs.push(n), this;
    }, go: function go(n) {
      var t = this._find("name", n);t && (location.hash = t.url);
    }, _go: function _go(n) {
      this._pageIndex++, history.replaceState && history.replaceState({ _pageIndex: this._pageIndex }, "", location.href);var t = $(n.template).html(),
          e = $(t).addClass("slideIn").addClass(n.name);return e.on("animationend webkitAnimationEnd", function () {
        e.removeClass("slideIn").addClass("js_show");
      }), this.$container.append(e), this._pageAppend.call(this, e), this._pageStack.push({ config: n, dom: e }), n.isBind || this._bind(n), this;
    }, back: function back() {
      history.back();
    }, _back: function _back(n) {
      this._pageIndex--;var t = this._pageStack.pop();if (t) {
        var e = 0 === location.hash.indexOf("#") ? location.hash : "#",
            i = this._findInStack(e);if (!i) {
          var a = $(n.template).html(),
              o = $(a).addClass("js_show").addClass(n.name);o.insertBefore(t.dom), n.isBind || this._bind(n), this._pageStack.push({ config: n, dom: o });
        }return t.dom.addClass("slideOut").on("animationend webkitAnimationEnd", function () {
          t.dom.remove();
        }), this;
      }
    }, _findInStack: function _findInStack(n) {
      for (var t = null, e = 0, i = this._pageStack.length; e < i; e++) {
        var a = this._pageStack[e];if (a.config.url === n) {
          t = a;break;
        }
      }return t;
    }, _find: function _find(n, t) {
      for (var e = null, i = 0, a = this._configs.length; i < a; i++) {
        if (this._configs[i][n] === t) {
          e = this._configs[i];break;
        }
      }return e;
    }, _bind: function _bind(n) {
      var t = n.events || {};for (var e in t) {
        for (var i in t[e]) {
          this.$container.on(i, e, t[e][i]);
        }
      }n.isBind = !0;
    } };o();
});

//# sourceMappingURL=page-compiled.js.map

//# sourceMappingURL=page-compiled-compiled.js.map

//# sourceMappingURL=page-compiled-compiled-compiled.js.map