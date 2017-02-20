'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
;(function () {

  'use strict';

  var opt = {
    complement: window.document.title,
    separator: '|'
  };

  var diffTitle = {};
  var els = [];
  var diffEls = [];
  var installed = false;

  var util = {
    /**
     * Shorthand
     * @type {Object}
     */
    shorthand: {
      ch: 'charset',
      tg: 'target',
      n: 'name',
      he: 'http-equiv',
      ip: 'itemprop',
      c: 'content',
      p: 'property',
      sc: 'scheme',
      r: 'rel',
      h: 'href',
      sz: 'sizes',
      t: 'type',
      s: 'src',
      a: 'async',
      d: 'defer',
      i: 'inner'
    },

    /**
     * This function return the element <head>
     * @type {Function}
     * @return {Object}
     */
    getPlace: function getPlace(place) {
      return window.document.getElementsByTagName(place)[0];
    },


    /**
     * Undo the window.document title for previous state
     * @type {Function}
     * @param  {Object} state 
     */
    undoTitle: function undoTitle(state) {
      if (!state.before) return;
      window.document.title = state.before;
    },


    /**
     * Undo elements to its previous state
     * @type {Function}
     */
    undo: function undo() {
      if (!els.length) return;
      els.map(function (el) {
        el.parentElement.removeChild(el);
      });
      els = [];
    },


    /**
     * Set attributes in element
     * @type {Function}
     * @param  {Object} obj
     * @param  {HTMLElement} el
     * @return {HTMLElement} with defined attributes
     */
    prepareElement: function prepareElement(obj, el) {
      var _this = this;

      Object.keys(obj).map(function (prop) {
        var sh = _this.shorthand[prop] || prop;
        if (sh.match(/(body|undo|replace)/g)) return;
        if (sh === 'inner') {
          el.textContent = obj[prop];
          return;
        }
        el.setAttribute(sh, obj[prop]);
      });
      return el;
    },


    /**
     * Change window.document title
     * @type {Function}
     * @param  {Object} val
     */
    title: function title(val) {
      if (!val) return;
      diffTitle.before = opt.complement;
      window.document.title = val.inner + ' ' + (val.separator || opt.separator) + ' ' + (val.complement || opt.complement);
    },
    update: function update() {
      if (!els.length) return;
      els.forEach(function (el, key) {
        if (diffEls[key] && !diffEls[key].isEqualNode(el)) {
          el.parentElement.replaceChild(diffEls[key], els[key]);
          els.splice(key, 1, diffEls[key]);
          return;
        }
      });
      diffEls = [];
    },
    add: function add(obj, el, parent) {
      parent.appendChild(el);
      // Fixed elements that do not suffer removal
      if (obj.undo !== undefined && !obj.undo) return;
      // Elements which are removed
      els.push(el);
    },


    /**
     * Handle of create elements
     * @type {Function}
     * @param  {Array} arr
     * @param  {String} tag   - style, link, meta, script, base
     * @param  {String} place - Default 'head'
     * @param  {Boolean} update
     */
    handle: function handle(arr, tag, place, update) {
      var _this2 = this;

      if (!arr) return;
      arr.map(function (obj) {
        var parent = obj.body ? _this2.getPlace('body') : _this2.getPlace(place);
        var el = window.document.getElementById(obj.id) || window.document.createElement(tag);
        // Elements that will substitute data
        if (el.hasAttribute('id') || obj.id) {
          _this2.prepareElement(obj, el);
          return;
        }
        // Other elements
        _this2.prepareElement(obj, el);
        // Updated elements
        if (update) {
          diffEls.push(el);
          return;
        }
        // Add elements in Node
        _this2.add(obj, el, parent);
      });
    }
  };

  /**
   * Plugin | vue-head
   * @param  {Function} Vue
   * @param  {Object} options
   */
  var VueHead = function VueHead(Vue, options) {
    if (installed) return;

    installed = true;

    if (options) {
      Vue.util.extend(opt, options);
    }

    function init(update) {
      var _this3 = this;

      var head = this.$options.head;
      if (!head) return;
      Object.keys(head).map(function (key) {
        var prop = head[key];
        if (!prop) return;
        var obj = typeof prop === 'function' ? head[key].bind(_this3)() : head[key];
        if (key === 'title') {
          util[key](obj);
          return;
        }
        util.handle(obj, key, 'head', update);
      });
      this.$emit('okHead');
    }

    function destroy(head) {
      if (!this.$options.head) return;
      util.undoTitle(diffTitle);
      util.undo();
    }

    // v1
    if (Vue.version.match(/[1].(.)+/g)) {
      Vue.mixin({
        ready: function ready() {
          init.bind(this)();
        },
        destroyed: function destroyed() {
          destroy(this.$options.head);
        },

        events: {
          updateHead: function updateHead() {
            init.bind(this)(true);
            util.update();
          }
        }
      });
    }
    // v2
    if (Vue.version.match(/[2].(.)+/g)) {
      Vue.mixin({
        created: function created() {
          var _this4 = this;

          this.$on('updateHead', function () {
            init.bind(_this4)(true);
            util.update();
          });
        },
        mounted: function mounted() {
          init.bind(this)();
        },
        beforeDestroy: function beforeDestroy() {
          destroy.bind(this)();
        }
      });
    }
  };

  VueHead.version = '2.0.10';

  // auto install
  if (typeof Vue !== 'undefined') {
    Vue.use(VueHead);
  }

  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
    module.exports = VueHead;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return VueHead;
    });
  } else if (typeof window !== 'undefined') {
    window.VueHead = VueHead;
  }
})();

//# sourceMappingURL=vue-head-es6-compiled.js.map