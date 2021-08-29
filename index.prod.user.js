// ==UserScript==
// @name          WebSwitcher: 在百度、谷歌之间切换搜索结果
// @namespace     https://github.com/Krysl
// @description   为百度、谷歌添加按钮, 点击跳转到对方页面搜索同样内容
// @license       MIT
// @version       0.5.1
// @author        Krysl <krysl@qq.com>
// @source        https://github.com/Krysl/WebSwitcher
// @include       http*://www.baidu.com/*
// @include       http*://www.google.com/
// @include       http*://www.google.com/webhp*
// @include       http*://www.google.com/search?*
// @include       http*://www.google.com.*
// @include       http*://www.google.com.*/search?*
// @require       https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @require       https://cdn.jsdelivr.net/npm/vue@^3.2.6/dist/vue.global.prod.js
// @require       https://cdn.jsdelivr.net/npm/vue-class-component@^8.0.0-rc.1/dist/vue-class-component.global.prod.js
// @require       https://cdn.jsdelivr.net/npm/vuex@^4.0.2/dist/vuex.global.prod.js
// @require       https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@^3.1.1/dist/svg.min.js
// @require       https://cdn.jsdelivr.net/npm/loglevel@^1.7.1/dist/loglevel.js
// @require       https://cdn.jsdelivr.net/npm/window-vue@^1.0.0/index.js
// @require       https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/dist/index.full.js
// @require       https://cdn.jsdelivr.net/npm/@popperjs/core@^2.4.4/dist/umd/popper.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@^4.17.20/lodash.js
// @require       https://cdn.jsdelivr.net/npm/@chocolateboy/uncommonjs@3.1.2/dist/polyfill.iife.min.js
// @require       https://cdn.jsdelivr.net/npm/ansicolor@^1.1.95/build/ansicolor.min.js
// @resource      element-icons.ttf  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/fonts/element-icons.ttf
// @resource      element-icons.woff  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/fonts/element-icons.woff
// @resource      theme_chalk_index  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/index.css
// @resource      theme_chalk_el_col  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-col.css
// @resource      theme_chalk_el_slider  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-slider.css
// @resource      theme_chalk_el_button  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-button.css
// @resource      theme_chalk_el_button_group  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-button-group.css
// @resource      theme_chalk_el_input  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-input.css
// @resource      theme_chalk_el_collapse  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-collapse.css
// @resource      theme_chalk_el_switch  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-switch.css
// @resource      theme_chalk_el_row  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-row.css
// @resource      theme_chalk_el_divider  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-divider.css
// @resource      theme_chalk_el_main  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-main.css
// @resource      theme_chalk_el_header  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-header.css
// @resource      theme_chalk_el_container  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-container.css
// @resource      theme_chalk_el_collapse_item  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-collapse-item.css
// @resource      theme_chalk_el_message  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-message.css
// @resource      theme_chalk_el_message_box  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-message-box.css
// @resource      theme_chalk_el_notification  https://cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.7/theme-chalk/el-notification.css
// @supportURL    https://github.com/Krysl/WebSwitcher
// @grant         GM_xmlhttpRequest
// @grant         GM_registerMenuCommand
// @grant         GM_openInTab
// @grant         GM_info
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_getResourceText
// @grant         GM_addStyle
// @connect       httpbin.org
// @run-at        document-start
// ==/UserScript==


/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 170:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ SearchButton; }
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(5);
;// CONCATENATED MODULE: external "$"
var external_$_namespaceObject = $;
// EXTERNAL MODULE: ./src/utils/logger.ts + 3 modules
var logger = __webpack_require__(700);
// EXTERNAL MODULE: ./src/utils/shortcut.ts
var utils_shortcut = __webpack_require__(248);
// EXTERNAL MODULE: ./src/components/settings/config.ts + 1 modules
var config = __webpack_require__(274);
;// CONCATENATED MODULE: ./src/components/button/URLButton.tsx


/* harmony default export */ var URLButton = ((0,external_Vue_.defineComponent)({
  name: 'URLButton',
  props: {
    id: String,
    img: String,
    imgSize: {
      type: Object,
      required: false,
      default: {
        w: 80,
        h: 80
      }
    },
    url: String,
    style: {
      type: Object,
      required: false,
      default: {
        defaultColor: '#424242',
        highlightColor: '#666666'
      }
    },
    isInline: {
      type: Boolean,
      require: false,
      default: false
    },
    offset: {
      type: Object,
      required: false,
      default: {
        w: 0,
        h: 0
      }
    },
    css: String,
    imgcss: String,
    hasBackground: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  setup(props) {
    var {
      id,
      img,
      imgSize,
      url,
      style,
      isInline,
      offset,
      css,
      imgcss,
      hasBackground
    } = (0,external_Vue_.toRefs)(props);
    var isHover = (0,external_Vue_.ref)(false);
    var color = (0,external_Vue_.computed)(() => isHover.value ? style.value.highlightColor : style.value.defaultColor);

    var setColor = _isHover => {
      // debug(`setColor=${_isHover}`);
      isHover.value = _isHover;
    };

    var _css = (0,external_Vue_.computed)(() => {
      var __css = css === null || css === void 0 ? void 0 : css.value;

      if (__css === undefined) {
        __css = 'height:30px;' + ' display: inline-block; ';
      }

      if (hasBackground.value) {
        __css += "background-color:".concat(color.value, ";") + 'border-radius:10px 10px 10px 10px;';
      }

      return __css;
    });

    var imgH = imgSize.value.h.valueOf();

    if (imgH === undefined) {
      imgH = 100;
    } else if (imgH > 0 && imgH <= 1) {
      imgH *= 100;
    }

    var imgW = imgSize.value.w.valueOf();

    if (imgW === undefined) {
      imgW = 100;
    } else if (imgW > 0 && imgW <= 1) {
      imgW *= 100;
    }

    return () => (0,external_Vue_.createVNode)("a", {
      "id": id === null || id === void 0 ? void 0 : id.value,
      "href": url === null || url === void 0 ? void 0 : url.value,
      "style": 'height:100%; width:100%;'
    }, [(0,external_Vue_.createVNode)("div", {
      "style": _css.value,
      "onMouseover": () => setColor(true),
      "onMouseout": () => setColor(false)
    }, [(0,external_Vue_.createVNode)("div", {
      "style": 'height:100%; width:100%;' + 'flex-direction:column;' + "display:".concat(isInline.value ? 'inline-' : '', "flex;") + "position: relative; top: ".concat(offset.value.h, "px; left:").concat(offset.value.w)
    }, [(0,external_Vue_.createVNode)("div", {
      "style": "height:".concat((100 - imgH) / 2, "%;")
    }, null), (0,external_Vue_.createVNode)("div", {
      "style": "height:".concat(imgH, "%; width:100%;") + 'flex-direction:row;' + "display:".concat(isInline.value ? 'inline-' : '', "flex;")
    }, [(0,external_Vue_.createVNode)("div", {
      "style": "width:".concat((100 - imgW) / 2, "%;")
    }, null), (0,external_Vue_.createVNode)("img", {
      "src": img === null || img === void 0 ? void 0 : img.value,
      "style": (imgcss === null || imgcss === void 0 ? void 0 : imgcss.value) === undefined ? "height:100%; width:".concat(imgW, "%; vertical-align: middle; display: inline-block;") : "height:100%; width:".concat(imgW, "%; ") + (imgcss === null || imgcss === void 0 ? void 0 : imgcss.value)
    }, null)])])])]);
  }

}));
;// CONCATENATED MODULE: ./src/components/button/SearchButton.tsx







/* harmony default export */ var SearchButton = ((0,external_Vue_.defineComponent)({
  name: 'SearchButton',
  props: {
    id: String,
    img: String,
    imgSize: {
      type: Object,
      required: false,
      default: {
        w: 80,
        h: 80
      }
    },
    url: String,
    input: String,
    isInline: {
      type: Boolean,
      require: false,
      default: false
    },
    offset: {
      type: Object,
      required: false,
      default: {
        w: 0,
        h: 0
      }
    },
    css: String,
    imgcss: String,
    hasBackground: Boolean
  },

  setup(props) {
    var {
      id,
      img,
      imgSize,
      url,
      input,
      isInline,
      offset,
      css,
      imgcss,
      hasBackground
    } = (0,external_Vue_.toRefs)(props);
    var store = (0,config/* useStore */.oR)();

    var _url = (0,external_Vue_.ref)(url === null || url === void 0 ? void 0 : url.value);

    var _onChange = () => {
      if (input !== null && input !== void 0 && input.value) {
        var _$;

        var txt = (_$ = external_$_namespaceObject(input === null || input === void 0 ? void 0 : input.value)) === null || _$ === void 0 ? void 0 : _$.val();

        if (txt && !Array.isArray(txt) && _url !== null && _url !== void 0 && _url.value) {
          _url.value = (url === null || url === void 0 ? void 0 : url.value) + encodeURIComponent(txt);
          (0,logger/* debug */.fF)("URL => ".concat(_url === null || _url === void 0 ? void 0 : _url.value));
        }
      }
    };

    var shortcuts = (0,external_Vue_.computed)(() => store.state.shortcuts);

    var shortcutsListener = event => {
      if (shortcuts.value.enable === false) return;
      shortcuts.value.altSearch.forEach(shortcut => {
        if ((0,utils_shortcut/* isShortcut */.zD)(event, shortcut)) {
          (0,logger/* debug */.fF)(event);

          _onChange();

          if (_url !== null && _url !== void 0 && _url.value) {
            location.href = _url === null || _url === void 0 ? void 0 : _url.value;
          }
        }
      });
    };

    (0,external_Vue_.onMounted)(() => {
      (0,logger/* debug */.fF)('SearchButton: onMounted');

      _onChange();

      if (input !== null && input !== void 0 && input.value) {
        (0,logger/* debug */.fF)("SearchButton: onMounted ".concat(input === null || input === void 0 ? void 0 : input.value));
        external_$_namespaceObject(input === null || input === void 0 ? void 0 : input.value).change(_onChange);
      }

      window.addEventListener('keydown', shortcutsListener);
    });
    (0,external_Vue_.onUnmounted)(() => {
      window.removeEventListener('keydown', shortcutsListener);
    });
    return () => (0,external_Vue_.createVNode)(URLButton, {
      "id": id === null || id === void 0 ? void 0 : id.value,
      "img": img === null || img === void 0 ? void 0 : img.value,
      "imgSize": imgSize === null || imgSize === void 0 ? void 0 : imgSize.value,
      "url": _url === null || _url === void 0 ? void 0 : _url.value,
      "isInline": isInline === null || isInline === void 0 ? void 0 : isInline.value,
      "offset": offset === null || offset === void 0 ? void 0 : offset.value,
      "css": css === null || css === void 0 ? void 0 : css.value,
      "imgcss": imgcss === null || imgcss === void 0 ? void 0 : imgcss.value,
      "hasBackground": hasBackground === null || hasBackground === void 0 ? void 0 : hasBackground.value
    }, null);
  }

}));

/***/ }),

/***/ 274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u_": function() { return /* binding */ defaultConfig; },
  "oR": function() { return /* binding */ useStore; }
});

// UNUSED EXPORTS: Config, defaultSettings

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(5);
;// CONCATENATED MODULE: external "Vuex"
var external_Vuex_namespaceObject = Vuex;
// EXTERNAL MODULE: ./src/utils/object.ts
var object = __webpack_require__(701);
// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(147);
// EXTERNAL MODULE: ./src/utils/logger.ts + 3 modules
var logger = __webpack_require__(700);
;// CONCATENATED MODULE: ./src/components/settings/config.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var defaultSettings = {
  version: package_0/* version */.i8,
  debugLevel: 'silent',
  siteCfgs: {
    baidu: {
      showButtonForHomePage: true,
      showButtonForSearchPage: true
    },
    google: {
      showButtonForHomePage: true,
      showButtonForSearchPage: true
    }
  },
  shortcuts: {
    enable: true,
    altSearch: [{
      alt: true,
      code: 'KeyS'
    }, {
      ctrl: true,
      shift: true,
      code: 'Enter'
    }],
    showSettings: [{
      ctrl: true,
      alt: true,
      code: 'KeyS'
    }]
  },
  style: {
    settings: {
      background: 'rgb(255 255 255 / 80%)'
    }
  },
  showHiddenSettings: false,
  showDevSettings: false
};
class Config {
  constructor() {
    _defineProperty(this, "store", void 0);

    var config = Config.loadValues();
    console.debug('Config=', config);
    var loadState = JSON.parse(config);
    var _state = defaultSettings;

    if ('version' in loadState) {
      var configVer = loadState.version;

      if (configVer === package_0/* version */.i8) {
        _state = loadState;
      }
    }

    this.store = (0,external_Vuex_namespaceObject.createStore)({
      plugins: [(0,external_Vuex_namespaceObject.createLogger)()],
      state: _state,
      mutations: {
        setCurrentSite(state, arg) {
          (0,logger/* debug */.fF)("setCurrentSite: ".concat(arg));
          state.curSite = arg;
        },

        saveConfig(state) {
          GM_setValue('Config', JSON.stringify(state));
        },

        cancelConfig(state, arg) {
          (0,object/* copy */.JG)(state, arg.savedCfg);
        },

        resetConfig(state) {
          (0,object/* copy */.JG)(state, defaultSettings);
          GM_setValue('Config', JSON.stringify(defaultSettings));
        },

        printConfig() {
          var cfg = JSON.parse(Config.loadValues());
          console.debug(cfg);
        },

        addShortCut(state, arg) {
          var shortcut;

          switch (arg.type) {
            case 'altSearch':
              shortcut = state.shortcuts.altSearch;
              break;

            case 'showSettings':
              shortcut = state.shortcuts.showSettings;
              break;
          }

          shortcut.push(arg.val);
        },

        deleteShortCut(state, arg) {
          var shortcut;

          switch (arg.type) {
            case 'altSearch':
              shortcut = state.shortcuts.altSearch;
              break;

            case 'showSettings':
              shortcut = state.shortcuts.showSettings;
              break;
          }

          shortcut.splice(arg.index, 1);
        }

      },
      actions: {
        saveConfig(context) {
          console.debug('Save Config...', context);
          context.commit('saveConfig');
        },

        cancelConfig(context) {
          console.debug('Cancel  Config...', context);
          context.commit('cancelConfig', {
            savedCfg: context.getters.savedCfg
          });
        },

        resetConfig(context) {
          console.debug('Reset Config...', context);
          context.commit('resetConfig');
        },

        printConfig(context) {
          context.commit('printConfig');
        }

      },
      getters: {
        currentSiteCfg(state) {
          (0,logger/* debug */.fF)("currentSiteCfg: curSite=".concat(state.curSite));
          if (state.curSite === undefined) return null;

          if ((0,object/* hasOwnProperty */.nr)(state.siteCfgs, state.curSite)) {
            var siteCfg = state.siteCfgs[state.curSite];
            (0,logger/* debug */.fF)('currentSiteCfg: siteCfg=', siteCfg);
            return siteCfg;
          }

          return null;
        },

        savedCfg() {
          return JSON.parse(Config.loadValues());
        },

        haveCfgChange(state, getters) {
          return !(0,object/* equal */.Dg)(state, getters.savedCfg);
        }

      }
    });
    Config.inited.value = true;
  }

  install(app) {
    (0,logger/* debug */.fF)('app.use VueX');
    app.use(this.store, Config.key);
  }

  static loadValues() {
    return GM_getValue('Config', JSON.stringify(defaultSettings));
  }

}

_defineProperty(Config, "key", Symbol('WebSwitcher-Config'));

_defineProperty(Config, "inited", (0,external_Vue_.ref)(false));

var defaultConfig = new Config();
function useStore() {
  console.assert(Config.inited.value === true);
  return (0,external_Vuex_namespaceObject.useStore)(Config.key);
}

/***/ }),

/***/ 962:
/***/ (function(module, __unused_webpack___webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);
/* harmony import */ var _site_GoogleHP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _webSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(381);
/* harmony import */ var _site_Baidu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(634);
/* harmony import */ var _site_Google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_load_css__WEBPACK_IMPORTED_MODULE_0__]);
_utils_load_css__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
/* eslint-disable */
// const _MutationObserver = window.MutationObserver as unknown as MutationObserver;





var webSwitcher = new _webSwitcher__WEBPACK_IMPORTED_MODULE_2__/* .WebSwitcher */ .M([new _site_Baidu__WEBPACK_IMPORTED_MODULE_3__/* .Baidu */ .v3(), new _site_Google__WEBPACK_IMPORTED_MODULE_4__/* .Google */ .ie(), new _site_GoogleHP__WEBPACK_IMPORTED_MODULE_1__/* .GoogleHP */ .J()]);
console.debug(_utils_load_css__WEBPACK_IMPORTED_MODULE_0__/* .default.size */ .Z.size);

if (typeof window._MutationObserver !== 'function') {
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  var _MutationObserver = iframe.contentWindow.MutationObserver;
  window._MutationObserver = _MutationObserver;
} // @ts-ignore


if (typeof window._MutationObserver !== 'undefined') {
  // @ts-ignore
  webSwitcher.run({
    mutationObserver: window._MutationObserver
  });
}
});

/***/ }),

/***/ 634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v3": function() { return /* binding */ Baidu; }
});

// UNUSED EXPORTS: BaiduApp, default

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(5);
// EXTERNAL MODULE: ./src/assets/googlelogo_color_92x30dp.png
var googlelogo_color_92x30dp = __webpack_require__(849);
// EXTERNAL MODULE: ./src/components/button/SearchButton.tsx + 2 modules
var SearchButton = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/components/button/GoogleButton.tsx




/* harmony default export */ var GoogleButton = ((0,external_Vue_.defineComponent)({
  name: 'GoogleButton',
  props: {
    input: String
  },

  setup(props) {
    var {
      input
    } = (0,external_Vue_.toRefs)(props);
    return () => (0,external_Vue_.createVNode)(SearchButton/* default */.Z, {
      "input": input === null || input === void 0 ? void 0 : input.value,
      "id": "google",
      "img": googlelogo_color_92x30dp,
      "imgSize": {
        w: 92.0 / 102,
        h: 75
      },
      "url": "https://www.google.com/search?&q=",
      "isInline": true,
      "offset": {
        w: 0,
        h: -6
      },
      "css": 'height: 100%;width: 102px;' + 'display: inline-block;',
      "hasBackground": true
    }, null);
  }

}));
// EXTERNAL MODULE: ./src/components/settings/config.ts + 1 modules
var config = __webpack_require__(274);
// EXTERNAL MODULE: ./src/utils/logger.ts + 3 modules
var logger = __webpack_require__(700);
// EXTERNAL MODULE: ./src/site/site.ts
var site = __webpack_require__(801);
;// CONCATENATED MODULE: ./src/site/Baidu.tsx


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var BaiduApp = (0,external_Vue_.defineComponent)({
  name: 'Baidu',

  setup() {
    var store = (0,config/* useStore */.oR)();
    store.commit('setCurrentSite', 'baidu');
    var url = window.location.href;
    var isSearchPage = !!url.match(/www\.baidu\.com\/s\?/);
    var display = (0,external_Vue_.computed)(() => {
      if (isSearchPage) {
        var _store$state$siteCfgs;

        return (_store$state$siteCfgs = store.state.siteCfgs) === null || _store$state$siteCfgs === void 0 ? void 0 : _store$state$siteCfgs.baidu.showButtonForSearchPage;
      } else {
        var _store$state$siteCfgs2;

        return (_store$state$siteCfgs2 = store.state.siteCfgs) === null || _store$state$siteCfgs2 === void 0 ? void 0 : _store$state$siteCfgs2.baidu.showButtonForHomePage;
      }
    });

    var setAppDisplay = val => {
      var app = $('#WebSwitcher_app');

      if (val === true) {
        (0,logger/* debug */.fF)('display: inline-block;');
        app.css('display', 'inline-block');
      } else {
        (0,logger/* debug */.fF)('display: none;');
        app.css('display', 'none');
      }
    };

    (0,external_Vue_.onMounted)(() => setAppDisplay(display.value));
    (0,external_Vue_.watch)(display, setAppDisplay);
    return () => (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)(GoogleButton, {
      "input": "#kw"
    }, null), [[external_Vue_.vShow, display.value]]);
  }

});
class Baidu extends site/* Site */.T {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'Baidu');

    _defineProperty(this, "siteAddrReg", /www\.baidu\.com/);

    _defineProperty(this, "mountElementName", '.s_btn_wr,#s_btn_wr');

    _defineProperty(this, "container", null);

    _defineProperty(this, "app", null);

    _defineProperty(this, "waitCondition", () => {
      var result = $('.result.c-container.new-pmd');
      return false;
      return !(result.length > 0);
    });
  }

  beforeMount() {
    this.container = document.createElement('div');
    this.container.id = 'WebSwitcher_app';
    this.container.style.display = 'inline-block';
    this.app = (0,external_Vue_.createApp)(BaiduApp);
    this.app.use(ElementPlus);
  }

  mount() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var searchButton = $(_this.mountElementName);
      var height = searchButton.css('height');
      var form = $('#form.fm');

      if (_this.container) {
        var _this$app;

        var width = form.width();

        if (form.length > 0 && width) {
          form.width(width + 102);
        }

        _this.container.style.height = height;
        searchButton.after(_this.container);
        (_this$app = _this.app) === null || _this$app === void 0 ? void 0 : _this$app.mount(_this.container);
        $('#kw').one('input', () => {
          (0,logger/* debug */.fF)('#kw on change event');
          var observer = new MutationObserver((mutations, me) => {
            var newHeight = searchButton.css('height');

            if (newHeight !== height) {
              (0,logger/* debug */.fF)("#kw on change event: set new height: ".concat(newHeight));

              if (_this.container !== null) {
                _this.container.style.height = newHeight;
              }

              form.css('width');
              me.disconnect(); // stop observing
            }
          });
          observer.observe(document, {
            childList: true,
            subtree: true
          });
        });
      }
    })();
  }

}
/* harmony default export */ var site_Baidu = ((/* unused pure expression or super */ null && (BaiduApp)));

/***/ }),

/***/ 554:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ie": function() { return /* binding */ Google; }
});

// UNUSED EXPORTS: GoogleApp, default

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(5);
// EXTERNAL MODULE: external "SVG"
var external_SVG_ = __webpack_require__(619);
// EXTERNAL MODULE: ./src/assets/baidu.svg
var baidu = __webpack_require__(625);
// EXTERNAL MODULE: ./src/utils/base64.ts
var base64 = __webpack_require__(457);
// EXTERNAL MODULE: ./src/components/button/SearchButton.tsx + 2 modules
var SearchButton = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/components/button/BaiduButton.tsx






/* harmony default export */ var BaiduButton = ((0,external_Vue_.defineComponent)({
  name: 'BaiduButton',
  props: {
    input: String
  },

  setup(props) {
    var {
      input
    } = (0,external_Vue_.toRefs)(props);
    var imgHead = 'data:image/svg+xml;base64,';
    var isSVG = baidu.startsWith(imgHead);
    var base64Str = baidu.substring(imgHead.length);
    console.assert(isSVG === true);
    var svgStr = (0,base64/* Base64Decode */.y)(base64Str); // debug('svgStr=', isSVG, svgStr);

    var oParser = new DOMParser();
    var oDOM = oParser.parseFromString(svgStr, 'image/svg+xml'); // debug('svg dom=', oDOM);

    var svg = (0,external_SVG_.SVG)(oDOM.firstChild); // @ts-ignore

    svg.find('#Rectangle-2').fill('#3388FF'); // @ts-ignore

    svg.find('#搜索_熊掌_66icon').fill('#FFFFFF');
    var s = new XMLSerializer();

    var _imgStr = s.serializeToString(svg.node);

    var _img = imgHead + (0,base64/* Base64Encode */.H)(_imgStr); // debug('_img=', _img);


    return () => (0,external_Vue_.createVNode)(SearchButton/* default */.Z, {
      "input": input === null || input === void 0 ? void 0 : input.value,
      "id": "baidu",
      "img": _img,
      "imgSize": {
        w: 80,
        h: 80
      },
      "url": "https://www.baidu.com/s?wd=",
      "css": 'height: 100%; width: 96px;' + 'background: #3388FF;' + 'border-radius: 24px;'
    }, null);
  }

}));
// EXTERNAL MODULE: ./src/components/settings/config.ts + 1 modules
var config = __webpack_require__(274);
// EXTERNAL MODULE: ./src/utils/logger.ts + 3 modules
var logger = __webpack_require__(700);
// EXTERNAL MODULE: ./src/site/site.ts
var site = __webpack_require__(801);
;// CONCATENATED MODULE: ./src/site/Google.tsx


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var siteAddrReg = /www\.google\.com(\.[^/]*)?\/search\?.*/;
var _mountElementName = '.Tg7LZd:first';
var _mountElementNameHomePage = '.XDyW0e:first';
var GoogleApp = (0,external_Vue_.defineComponent)({
  name: 'Google',

  setup() {
    var store = (0,config/* useStore */.oR)();
    store.commit('setCurrentSite', 'google');
    var url = window.location.href;
    var isSearchPage = !!url.match(siteAddrReg);
    var display = (0,external_Vue_.computed)(() => {
      if (isSearchPage) {
        var _store$state$siteCfgs;

        return (_store$state$siteCfgs = store.state.siteCfgs) === null || _store$state$siteCfgs === void 0 ? void 0 : _store$state$siteCfgs.google.showButtonForSearchPage;
      } else {
        var _store$state$siteCfgs2;

        return (_store$state$siteCfgs2 = store.state.siteCfgs) === null || _store$state$siteCfgs2 === void 0 ? void 0 : _store$state$siteCfgs2.google.showButtonForHomePage;
      }
    });
    var dividLineContainer = document.createElement('div');
    var dividLineTopOfffset = document.createElement('span');
    var dividLine = document.createElement('span');
    dividLineTopOfffset.style.height = '17.5%';
    dividLine.style.height = '65%';
    dividLine.style.borderLeft = '1px solid #dfe1e5';
    dividLineContainer.style.display = display.value === true ? 'flex' : 'none';
    dividLineContainer.style.flexDirection = 'column';
    dividLineContainer.appendChild(dividLineTopOfffset);
    dividLineContainer.appendChild(dividLine);
    (0,external_Vue_.watch)(display, _display => {
      dividLineContainer.style.display = _display === true ? 'flex' : 'none';
    });
    (0,external_Vue_.onMounted)(() => {
      var searchButton = $(isSearchPage ? _mountElementName : _mountElementNameHomePage);
      searchButton.css('padding-right', '3px');
      searchButton.after(dividLineContainer);
    });
    return () => //   {display.value && dividLineContainer}
    (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)(BaiduButton, {
      "input": "input.gLFyf.gsfi"
    }, null), [[external_Vue_.vShow, display.value]]);
  }

});
class Google extends site/* Site */.T {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'Google');

    _defineProperty(this, "siteAddrReg", siteAddrReg);

    _defineProperty(this, "mountElementName", _mountElementName);

    _defineProperty(this, "container", null);

    _defineProperty(this, "app", null);

    _defineProperty(this, "waitCondition", null);
  }

  beforeMount() {
    this.container = document.createElement('div');
    this.container.id = 'WebSwitcher_app';
    this.container.style.margin = '0.4%';
    this.app = (0,external_Vue_.createApp)(GoogleApp);
    this.app.use(ElementPlus);
  }

  mount() {
    var _this = this;

    return _asyncToGenerator(function* () {
      (0,logger/* debug */.fF)('Google: mount...');
      var searchButton = $(_this.mountElementName);

      if (_this.container !== null) {
        var _this$app;

        searchButton.after(_this.container);
        (_this$app = _this.app) === null || _this$app === void 0 ? void 0 : _this$app.mount(_this.container);
      } // if (this.dividLineContainer !== null) {
      //   searchButton.after(this.dividLineContainer);
      // }

    })();
  }

}
/* harmony default export */ var site_Google = ((/* unused pure expression or super */ null && (GoogleApp)));

/***/ }),

/***/ 36:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ GoogleHP; }
/* harmony export */ });
/* harmony import */ var _Google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class GoogleHP extends _Google__WEBPACK_IMPORTED_MODULE_0__/* .Google */ .ie {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'GoogleHP');

    _defineProperty(this, "siteAddrReg", /www\.google\.com((\.\w+)?\/?(webhp.*)?)$/);

    _defineProperty(this, "mountElementName", '.XDyW0e:first');
  }

  mount() {
    var _superprop_getMount = () => super.mount,
        _this = this;

    return _asyncToGenerator(function* () {
      var searchRow = $('.SDkEP');
      searchRow.css('padding-right', 6);

      if (_this.container !== null) {
        _this.container.style.margin = '2.4%';
      }

      yield _superprop_getMount().call(_this);
    })();
  }

}

/***/ }),

/***/ 801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ Site; }
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(700);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Site {
  constructor() {
    _defineProperty(this, "ObserverInterval", 0);
  }

  run(settings, options) {
    var url = window.location.href;
    (0,_utils_logger__WEBPACK_IMPORTED_MODULE_0__/* .debug */ .fF)('url=', url);
    var match = url.match(this.siteAddrReg);

    if (!match) {
      return;
    }

    (0,_utils_logger__WEBPACK_IMPORTED_MODULE_0__/* .debug */ .fF)("WebSwitcher for ".concat(this.name));
    console.assert((settings === null || settings === void 0 ? void 0 : settings.cfg) !== undefined);
    this.beforeMount();
    console.assert(this.app !== null);

    if (settings !== undefined) {
      var cfg = settings.cfg;

      if (cfg && this.app) {
        cfg.install(this.app);
        console.log("=========== ".concat(this.name, " install Vuex ============"));
      }
    }

    console.log("typeof MutationObserver = ".concat(typeof (options === null || options === void 0 ? void 0 : options.mutationObserver)));
    this.runObserver(this, options);
  }

  runObserver(thisArg, options) {
    var _MutationObserver = options === null || options === void 0 ? void 0 : options.mutationObserver;

    if (typeof _MutationObserver !== 'undefined' && _MutationObserver !== null) {
      try {
        // set up the mutation observer
        // @ts-ignore
        var observer = new _MutationObserver((mutations, me) => {
          // `mutations` is an array of mutations that occurred
          // `me` is the MutationObserver instance
          if (thisArg.waitCondition !== null && typeof thisArg.waitCondition === 'function' && thisArg.waitCondition() === true) {
            return;
          }

          var canvas = $(thisArg.mountElementName);
          console.log("".concat(thisArg.mountElementName, ": ").concat(canvas.length));

          if (canvas.length > 0) {
            (0,_utils_logger__WEBPACK_IMPORTED_MODULE_0__/* .debug */ .fF)("WebSwitcher for ".concat(thisArg.name, ": found ").concat(thisArg.mountElementName));
            thisArg.mount();
            me.disconnect(); // stop observing
          }
        }); // debug(`WebSwitcher for ${this.name}: document=${document}`);
        // start observing

        observer.observe(document, {
          childList: true,
          subtree: true
        });
      } catch (error) {
        console.log(typeof this.waitCondition);
        throw error;
      }

      window.clearInterval(this.ObserverInterval);
    } else {// throw new Error('MutationObserver NOT ready');
    }
  }

}

/***/ }),

/***/ 339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gm": function() { return /* binding */ externalsCSS; }
/* harmony export */ });
/* unused harmony exports includes, names */
var backgroundPatch = {
  // 'background-color:#FFF': 'background-color: rgb(255 255 255 / 80%)',
  'background-color:#FFF': 'background-color: transparent'
};
var externalsCSS = [{
  name: 'index' // patch: backgroundPatch,

}, 'el-col', {
  name: 'el-slider',
  patch: {
    'color:#909399;margin-top:15px': 'color:#909399;margin-top:1px'
  }
}, 'el-button', 'el-button-group', 'el-input', {
  name: 'el-collapse',
  patch: backgroundPatch
}, 'el-switch', 'el-row', 'el-divider', 'el-main', 'el-header', 'el-container', 'el-collapse-item', 'el-message', 'el-message-box', 'el-notification'];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (externalsCSS)));
function includes(name) {
  return undefined !== externalsCSS.find(cfg => {
    var _name = typeof cfg === 'string' ? cfg : cfg.name;

    return _name === name;
  });
}
function names() {
  return externalsCSS.map(cfg => typeof cfg === 'string' ? cfg : cfg.name);
}

/***/ }),

/***/ 457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ Base64Encode; },
/* harmony export */   "y": function() { return /* binding */ Base64Decode; }
/* harmony export */ });
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(742);

function Base64Encode(str) {
  var bytes = new TextEncoder().encode(str);
  return base64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromByteArray */ .JQ(bytes);
}
function Base64Decode(str) {
  var bytes = base64_js__WEBPACK_IMPORTED_MODULE_0__/* .toByteArray */ .b$(str);
  return new TextDecoder().decode(bytes);
}

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
/* harmony import */ var _style_element_plus_elternals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function loadElementPlusStyle() {
  return _loadElementPlusStyle.apply(this, arguments);
}

function _loadElementPlusStyle() {
  _loadElementPlusStyle = _asyncToGenerator(function* () {
    var globalVars = new Map();
    var version = _package_json__WEBPACK_IMPORTED_MODULE_1__/* .dependencies["element-plus"] */ .HO.O_;
    var ret = _style_element_plus_elternals_css__WEBPACK_IMPORTED_MODULE_0__/* .externalsCSS.map */ .Gm.map( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (name) {
        var globalName = "theme_chalk_".concat((typeof name === 'string' ? name : name.name).replace(/-/g, '_'));
        var style = yield GM_getResourceText(globalName);

        if (style === undefined || style === null) {
          throw new Error("Can NOT find css ".concat(globalName));
        }

        style = style.replaceAll('url(', "url(https://cdn.jsdelivr.net/npm/element-plus@".concat(version, "/theme-chalk/"));

        if (typeof name !== 'string' && name.patch !== undefined) {
          for (var key in name.patch) {
            style = style.replaceAll(key, name.patch[key]);
          }
        }

        if (typeof window === 'undefined') {
          throw new Error('window undefined');
        }

        window[globalName] = style;
        GM_addStyle(style);
        globalVars.set(globalName, window[globalName]); // console.debug(`GM_addStyle: ${globalVars.get(globalName)}`);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    yield Promise.all(ret);
    return globalVars;
  });
  return _loadElementPlusStyle.apply(this, arguments);
}

var globalCSSVars = await loadElementPlusStyle();
/* harmony default export */ __webpack_exports__["Z"] = (globalCSSVars);
__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fF": function() { return /* binding */ debug; },
  "cM": function() { return /* binding */ logger_log; },
  "uR": function() { return /* binding */ setLevel; },
  "g4": function() { return /* binding */ trace; }
});

// UNUSED EXPORTS: error, info, warn

;// CONCATENATED MODULE: external "log"
var external_log_namespaceObject = log;
;// CONCATENATED MODULE: external "Colors"
var external_Colors_namespaceObject = Colors;
;// CONCATENATED MODULE: ./src/utils/logger_prefix.ts
// interface IPrototype {
//   // eslint-disable-next-line
//   prototype: any;
// }
function merge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < sources.length; i++) {
    for (var key in sources[i]) {
      if (Object.prototype.hasOwnProperty.call(sources[i], key)) {
        // target[key] = sources[i][key];
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(sources[i], key) || Object.create(null));
      }
    }
  }

  return target;
}

var defaultConfig = {
  template: '[%t] %l:',
  levelFormatter: function levelFormatter(level) {
    return (level || 'debug').toUpperCase();
  },
  nameFormatter: function nameFormatter(name) {
    if (typeof name === 'string') {
      return name;
    } else if (typeof name === 'symbol') {
      return name.description;
    }

    return 'root';
  },
  timestampFormatter: function timestampFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  },
  format: undefined
};
var configs = new Map();
function apply(logger, config) {
  /* eslint-disable vars-on-top */
  var originalFactory = logger.methodFactory;
  var name = ''; // if ('name' in logger) {

  if (Object.prototype.hasOwnProperty.call(logger, 'name')) {
    var _name = logger.name;
    if (_name) name = _name;else name = '';
  } // const name = (logger as LoggerName).name || '';


  var parent = configs.get(name) || configs.get('') || defaultConfig;
  /* eslint-enable vars-on-top */

  function methodFactory(methodName, logLevel, loggerName) {
    var _options$template, _options$template2, _options$template3;

    var originalMethod = originalFactory(methodName, logLevel, loggerName);
    var options = configs.get(loggerName) || configs.get('');
    var hasTimestamp = (options === null || options === void 0 ? void 0 : (_options$template = options.template) === null || _options$template === void 0 ? void 0 : _options$template.indexOf('%t')) !== -1;
    var hasLevel = (options === null || options === void 0 ? void 0 : (_options$template2 = options.template) === null || _options$template2 === void 0 ? void 0 : _options$template2.indexOf('%l')) !== -1;
    var hasName = (options === null || options === void 0 ? void 0 : (_options$template3 = options.template) === null || _options$template3 === void 0 ? void 0 : _options$template3.indexOf('%n')) !== -1;
    return function () {
      var content = []; // skip the root method for child loggers to prevent duplicate logic

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if ((name || !configs.get(loggerName)) && !(options === null || options === undefined)) {
        var _options$timestampFor, _options$levelFormatt, _options$nameFormatte;

        /* eslint-disable vars-on-top */
        var timestamp = ((_options$timestampFor = options.timestampFormatter) === null || _options$timestampFor === void 0 ? void 0 : _options$timestampFor.call(options, new Date())) || '';
        var level = ((_options$levelFormatt = options.levelFormatter) === null || _options$levelFormatt === void 0 ? void 0 : _options$levelFormatt.call(options, methodName)) || 'debug';
        var lname = ((_options$nameFormatte = options.nameFormatter) === null || _options$nameFormatte === void 0 ? void 0 : _options$nameFormatte.call(options, typeof loggerName === 'string' ? loggerName : loggerName.description)) || '';
        /* eslint-enable vars-on-top */

        if (options.format) {
          var formats = options.format(level, lname, timestamp);

          if (formats) {
            if (Array.isArray(formats)) {
              content.push(...formats);
            } else {
              content.push(formats);
            }
          }
        } else {
          if (options.template) {
            content.push(options.template);
          }

          if (hasTimestamp) {
            content = content.map(v => v.replace(/%t/, timestamp));
          }

          if (hasLevel) content = content.map(v => v.replace(/%l/, level));
          if (hasName) content = content.map(v => v.replace(/%n/, lname));
        }

        args.unshift(...content);
      }

      originalMethod(...args);
    };
  }

  if (!configs.get(name)) {
    logger.methodFactory = methodFactory;
  } // for remove inherited format option if template option preset


  config = config || {};
  if (config.template) config.format = undefined;
  configs.set(name, merge({}, parent, config));
  logger.setLevel(logger.getLevel()); // if (!loglevel) {
  //   logger.warn(
  //     'It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md'
  //   );
  // }

  return logger;
}
;// CONCATENATED MODULE: ./src/utils/logger.ts



var colors = {
  TRACE: external_Colors_namespaceObject.magenta,
  DEBUG: external_Colors_namespaceObject.cyan,
  INFO: external_Colors_namespaceObject.blue,
  WARN: external_Colors_namespaceObject.yellow,
  ERROR: external_Colors_namespaceObject.red
};
var logger_log = apply(external_log_namespaceObject.getLogger(Symbol('WebSwitcher')), {
  format(level, name, timestamp) {
    return external_Colors_namespaceObject.parse("".concat(external_Colors_namespaceObject.darkGray("[".concat(timestamp, "]")), " ") + "".concat(colors[level.toUpperCase()](level), " ") + "".concat(external_Colors_namespaceObject.green("".concat(typeof name === 'string' ? name : typeof name === 'symbol' ? name.description : '', ":")))).asChromeConsoleLogArguments;
  }

});
function setLevel(level, persist) {
  console.debug("log level => ".concat(level));
  logger_log.setLevel(level, persist);
}
function error() {
  logger_log.error(...arguments);
}
function warn() {
  logger_log.warn(...arguments);
}
function info() {
  logger_log.info(...arguments);
}
function debug() {
  logger_log.debug(...arguments);
}
function trace() {
  logger_log.trace(...arguments);
}

/***/ }),

/***/ 701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nr": function() { return /* binding */ hasOwnProperty; },
/* harmony export */   "JG": function() { return /* binding */ copy; },
/* harmony export */   "Dg": function() { return /* binding */ equal; }
/* harmony export */ });
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function copy(dst, src) {
  for (var key in src) {
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      if (key in dst) {
        dst[key] = src[key];
      }
    }
  }
}
function equal(a, b) {
  if (typeof a === 'object') {
    for (var key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (key in b) {
          if (typeof b[key] !== typeof a[key]) return false;
          if (equal(b[key], a[key]) === false) return false;
        }
      }
    }
  } else {
    return a === b;
  }

  return true;
}

/***/ }),

/***/ 248:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zD": function() { return /* binding */ isShortcut; },
/* harmony export */   "BO": function() { return /* binding */ setShortcutByEvent; },
/* harmony export */   "tC": function() { return /* binding */ Shortcut2Str; }
/* harmony export */ });
// eslint-disable-next-line
function instanceOfShortCut(object) {
  return !('ctrlKey' in object);
}

function isShortcut(event, sc) {
  var ctrl = sc.ctrl || false;
  var shift = sc.shift || false;
  var alt = sc.alt || false;
  return event.ctrlKey === ctrl && event.shiftKey === shift && event.altKey === alt && event.code === sc.code;
}
function setShortcutByEvent(sc, ev) {
  sc.ctrl = ev.ctrlKey;
  sc.shift = ev.shiftKey;
  sc.alt = ev.altKey;
  sc.code = ev.code;
}
function Shortcut2Str(sc) {
  var str = '';
  var ctrl;
  var shift;
  var alt;

  if (instanceOfShortCut(sc)) {
    ctrl = sc.ctrl || false;
    alt = sc.alt || false;
    shift = sc.shift || false;
  } else {
    ctrl = sc.ctrlKey || false;
    alt = sc.altKey || false;
    shift = sc.shiftKey || false;
  }

  if (ctrl) str += 'Ctrl+';
  if (shift) str += 'Shift+';
  if (alt) str += 'Alt+';

  if (sc.code.match(/^(Alt|Shift|Control)/) === null) {
    str += sc.code;
  }

  return str;
}

/***/ }),

/***/ 381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": function() { return /* binding */ WebSwitcher; }
});

;// CONCATENATED MODULE: external "window.theme_chalk_el_main"
var external_window_theme_chalk_el_main_namespaceObject = window.theme_chalk_el_main;
;// CONCATENATED MODULE: external "ElementPlus.ElMain"
var external_ElementPlus_ElMain_namespaceObject = ElementPlus.ElMain;
var external_ElementPlus_ElMain_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElMain_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_collapse"
var external_window_theme_chalk_el_collapse_namespaceObject = window.theme_chalk_el_collapse;
;// CONCATENATED MODULE: external "ElementPlus.ElCollapse"
var external_ElementPlus_ElCollapse_namespaceObject = ElementPlus.ElCollapse;
var external_ElementPlus_ElCollapse_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElCollapse_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_collapse_item"
var external_window_theme_chalk_el_collapse_item_namespaceObject = window.theme_chalk_el_collapse_item;
;// CONCATENATED MODULE: external "ElementPlus.ElCollapseItem"
var external_ElementPlus_ElCollapseItem_namespaceObject = ElementPlus.ElCollapseItem;
var external_ElementPlus_ElCollapseItem_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElCollapseItem_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_switch"
var external_window_theme_chalk_el_switch_namespaceObject = window.theme_chalk_el_switch;
;// CONCATENATED MODULE: external "ElementPlus.ElSwitch"
var external_ElementPlus_ElSwitch_namespaceObject = ElementPlus.ElSwitch;
var external_ElementPlus_ElSwitch_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElSwitch_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_header"
var external_window_theme_chalk_el_header_namespaceObject = window.theme_chalk_el_header;
;// CONCATENATED MODULE: external "ElementPlus.ElHeader"
var external_ElementPlus_ElHeader_namespaceObject = ElementPlus.ElHeader;
var external_ElementPlus_ElHeader_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElHeader_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_row"
var external_window_theme_chalk_el_row_namespaceObject = window.theme_chalk_el_row;
;// CONCATENATED MODULE: external "ElementPlus.ElRow"
var external_ElementPlus_ElRow_namespaceObject = ElementPlus.ElRow;
var external_ElementPlus_ElRow_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElRow_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_button"
var external_window_theme_chalk_el_button_namespaceObject = window.theme_chalk_el_button;
;// CONCATENATED MODULE: external "ElementPlus.ElButton"
var external_ElementPlus_ElButton_namespaceObject = ElementPlus.ElButton;
var external_ElementPlus_ElButton_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElButton_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_col"
var external_window_theme_chalk_el_col_namespaceObject = window.theme_chalk_el_col;
;// CONCATENATED MODULE: external "ElementPlus.ElCol"
var external_ElementPlus_ElCol_namespaceObject = ElementPlus.ElCol;
var external_ElementPlus_ElCol_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElCol_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_message_box"
var external_window_theme_chalk_el_message_box_namespaceObject = window.theme_chalk_el_message_box;
;// CONCATENATED MODULE: external "ElementPlus.ElMessageBox"
var external_ElementPlus_ElMessageBox_namespaceObject = ElementPlus.ElMessageBox;
var external_ElementPlus_ElMessageBox_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElMessageBox_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_notification"
var external_window_theme_chalk_el_notification_namespaceObject = window.theme_chalk_el_notification;
;// CONCATENATED MODULE: external "ElementPlus.ElNotification"
var external_ElementPlus_ElNotification_namespaceObject = ElementPlus.ElNotification;
var external_ElementPlus_ElNotification_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElNotification_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_container"
var external_window_theme_chalk_el_container_namespaceObject = window.theme_chalk_el_container;
;// CONCATENATED MODULE: external "ElementPlus.ElContainer"
var external_ElementPlus_ElContainer_namespaceObject = ElementPlus.ElContainer;
var external_ElementPlus_ElContainer_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElContainer_namespaceObject);
// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(5);
// EXTERNAL MODULE: ./src/site/site.ts
var site = __webpack_require__(801);
// EXTERNAL MODULE: ./src/utils/logger.ts + 3 modules
var logger = __webpack_require__(700);
// EXTERNAL MODULE: ./src/utils/shortcut.ts
var utils_shortcut = __webpack_require__(248);
// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(147);
// EXTERNAL MODULE: ./src/components/settings/config.ts + 1 modules
var config = __webpack_require__(274);
;// CONCATENATED MODULE: external "window.theme_chalk_el_slider"
var external_window_theme_chalk_el_slider_namespaceObject = window.theme_chalk_el_slider;
;// CONCATENATED MODULE: external "ElementPlus.ElSlider"
var external_ElementPlus_ElSlider_namespaceObject = ElementPlus.ElSlider;
var external_ElementPlus_ElSlider_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElSlider_namespaceObject);
;// CONCATENATED MODULE: ./src/components/settings/DebugLogLevel.tsx







// import '../../style/element-custom.scss';
// import 'element-plus/lib/theme-chalk/index.css';



/* harmony default export */ var DebugLogLevel = ((0,external_Vue_.defineComponent)({
  name: 'DebugLogLevel',

  setup() {
    var store = (0,config/* useStore */.oR)();
    var showDevSettings = (0,external_Vue_.computed)({
      get: () => store.state.showDevSettings,
      set: val => store.state.showDevSettings = val
    });
    var debugLevel = (0,external_Vue_.computed)({
      get: () => store.state.debugLevel,
      set: val => {
        store.state.debugLevel = val;
        (0,logger/* setLevel */.uR)(val);
      }
    });

    var _marks = new Map([]); // reverse


    var step = 100.0 / (logger/* log.levels.SILENT */.cM.levels.SILENT - logger/* log.levels.TRACE */.cM.levels.TRACE);
    var debugNumMap = new Map([]);
    Object.keys(logger/* log.levels */.cM.levels).forEach((str, n) => {
      _marks.set(100 - n * step, str.toLowerCase());

      debugNumMap.set(str.toLowerCase(), n);
    });

    function convertMapToObject(map) {
      var newObject = {};

      for (var [key, value] of map) {
        newObject[String(key)] = value;
      }

      return newObject;
    }

    var marks = convertMapToObject(_marks);
    (0,logger/* debug */.fF)("step=".concat(step));
    var debugLevelNum = (0,external_Vue_.computed)({
      // reverse
      get: () => {
        var val = debugLevel.value;
        var ret = 0;

        if (typeof val === 'string') {
          var _debugNum = debugNumMap.get(val.toLowerCase());

          if (_debugNum) ret = _debugNum;
        } else if (typeof val === 'number') {
          ret = val;
        }

        return 100 - ret * step;
      },
      set: val => {
        var levelStr = marks[val];
        (0,logger/* debug */.fF)("levelStr=".concat(levelStr));
        if (levelStr) debugLevel.value = levelStr;
      }
    });

    if (debugLevelNum.value) {
      var _val = Math.floor(debugLevelNum.value / step);

      if (_val >= logger/* log.levels.TRACE */.cM.levels.TRACE && _val <= logger/* log.levels.SILENT */.cM.levels.SILENT) {
        (0,logger/* setLevel */.uR)(_val);
      }

      (0,logger/* debug */.fF)("debugLevelNum=".concat(debugLevelNum.value));
    }

    var formatTooltip = val => {
      return marks[val];
    };

    return () => (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
      "tag": "flex",
      "justify": "start"
    }, {
      default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 7,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createTextVNode)("\u8C03\u8BD5\u65E5\u5FD7\u7EA7\u522B")])]
      }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 16
      }, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "end"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), null, {
            default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElSlider_default()), {
              "modelValue": debugLevelNum.value,
              "onUpdate:modelValue": $event => debugLevelNum.value = $event,
              "min": logger/* log.levels.TRACE */.cM.levels.TRACE * step,
              "max": logger/* log.levels.SILENT */.cM.levels.SILENT * step,
              "step": step,
              "showStops": true,
              "format-tooltip": formatTooltip,
              "marks": marks
            }, null)]
          })]
        })]
      })]
    }), [[external_Vue_.vShow, showDevSettings.value]]);
  }

}));
;// CONCATENATED MODULE: ./src/components/settings/ShowHiddenSettings.tsx









/* harmony default export */ var ShowHiddenSettings = ((0,external_Vue_.defineComponent)({
  name: 'ShowHiddenSettings',

  setup() {
    var store = (0,config/* useStore */.oR)();
    var showHiddenSettings = (0,external_Vue_.computed)({
      get: () => store.state.showHiddenSettings,
      set: val => store.state.showHiddenSettings = val
    });
    return () => (0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
      "tag": "flex",
      "justify": "space-between"
    }, {
      default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 16,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createTextVNode)("\u663E\u793A\u9690\u85CF\u9009\u9879")])]
      }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 4,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "end"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElSwitch_default()), {
            "modelValue": showHiddenSettings.value,
            "onUpdate:modelValue": $event => showHiddenSettings.value = $event
          }, null)]
        })]
      })]
    });
  }

}));
;// CONCATENATED MODULE: external "window.theme_chalk_el_divider"
var external_window_theme_chalk_el_divider_namespaceObject = window.theme_chalk_el_divider;
;// CONCATENATED MODULE: external "ElementPlus.ElDivider"
var external_ElementPlus_ElDivider_namespaceObject = ElementPlus.ElDivider;
var external_ElementPlus_ElDivider_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElDivider_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_input"
var external_window_theme_chalk_el_input_namespaceObject = window.theme_chalk_el_input;
;// CONCATENATED MODULE: external "ElementPlus.ElInput"
var external_ElementPlus_ElInput_namespaceObject = ElementPlus.ElInput;
var external_ElementPlus_ElInput_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElInput_namespaceObject);
;// CONCATENATED MODULE: ./src/components/settings/Shortcuts.tsx















/* harmony default export */ var Shortcuts = ((0,external_Vue_.defineComponent)({
  name: 'Shortcuts',

  setup() {
    var store = (0,config/* useStore */.oR)();
    console.assert((store === null || store === void 0 ? void 0 : store.state) !== undefined, 'Shortcuts: ERROR: Vuex Not installed!');
    var showHiddenSettings = (0,external_Vue_.computed)({
      get: () => store.state.showHiddenSettings,
      set: val => store.state.showHiddenSettings = val
    });
    var shortcutUICfgs = [{
      title: '切换搜索',
      cfgName: 'altSearch',
      shortcuts: (0,external_Vue_.computed)(() => store.state.shortcuts.altSearch)
    }, {
      isHide: true,
      title: '显示设置界面',
      cfgName: 'showSettings',
      shortcuts: (0,external_Vue_.computed)(() => store.state.shortcuts.showSettings)
    }];

    var setShortcutsFnFactory = (shortcutsText, sc) => {
      var shortcutsCfg = (0,external_Vue_.computed)(() => {
        var _store$state;

        return store === null || store === void 0 ? void 0 : (_store$state = store.state) === null || _store$state === void 0 ? void 0 : _store$state.shortcuts;
      });

      var shortcutsListener = event => {
        shortcutsText.value = (0,utils_shortcut/* Shortcut2Str */.tC)(event);
        (0,logger/* trace */.g4)(shortcutsText.value, event);
        (0,utils_shortcut/* setShortcutByEvent */.BO)(sc, event);
      };

      var setShortcutsFn = payload => {
        (0,logger/* debug */.fF)('setShortcuts', payload.type);

        if (payload.type === 'focus') {
          shortcutsCfg.value.enable = false;
          window.addEventListener('keydown', shortcutsListener);
        } else if (payload.type === 'blur') {
          shortcutsCfg.value.enable = true;
          window.removeEventListener('keydown', shortcutsListener);
        }
      };

      return setShortcutsFn;
    };

    var deleteShortcuts = (cfg, index) => {
      var _cfg$txt, _cfg$onFocus;

      (_cfg$txt = cfg.txt) === null || _cfg$txt === void 0 ? void 0 : _cfg$txt.splice(index, 1); // const del = cfg.shortcuts.splice(index, 1);

      store.commit('deleteShortCut', {
        type: cfg.cfgName,
        index: index
      });
      (_cfg$onFocus = cfg.onFocus) === null || _cfg$onFocus === void 0 ? void 0 : _cfg$onFocus.splice(index, 1); // debug(`delete ${del.map((v) => Shortcut2Str(v)).join(',')}`);
    };

    var addShortcuts = cfg => {
      var _cfg$txt2, _cfg$onFocus2;

      var _txt = (0,external_Vue_.ref)('');

      var _sc = {
        code: ''
      };
      (_cfg$txt2 = cfg.txt) === null || _cfg$txt2 === void 0 ? void 0 : _cfg$txt2.push(_txt); // cfg.shortcuts.push(_sc);

      store.commit('addShortCut', {
        type: cfg.cfgName,
        val: _sc
      });
      (_cfg$onFocus2 = cfg.onFocus) === null || _cfg$onFocus2 === void 0 ? void 0 : _cfg$onFocus2.push(setShortcutsFnFactory(_txt, _sc));
      (0,logger/* debug */.fF)('add');
      (0,logger/* debug */.fF)(cfg.txt);
      (0,logger/* debug */.fF)(cfg.shortcuts);
    };

    var lastShowIdx = -1;
    shortcutUICfgs.forEach((cfg, idx) => {
      var setCfg = () => {
        cfg.txt = new Array(cfg.shortcuts.value.length);
        cfg.onFocus = new Array(cfg.shortcuts.value.length);
        cfg.shortcuts.value.forEach((sc, idx) => {
          var _cfg$txt3, _cfg$onFocus3;

          var txt = (0,external_Vue_.ref)((0,utils_shortcut/* Shortcut2Str */.tC)(sc));
          (_cfg$txt3 = cfg.txt) === null || _cfg$txt3 === void 0 ? void 0 : _cfg$txt3.fill(txt, idx, idx + 1);
          (_cfg$onFocus3 = cfg.onFocus) === null || _cfg$onFocus3 === void 0 ? void 0 : _cfg$onFocus3.fill(setShortcutsFnFactory(txt, sc), idx, idx + 1);
        });
        if (cfg.isHide !== true && idx > lastShowIdx) lastShowIdx = idx;
      };

      setCfg();
      (0,external_Vue_.watch)(cfg.shortcuts, setCfg);
    });
    return () => (0,external_Vue_.createVNode)("div", null, [shortcutUICfgs.map((cfg, idx) => (0,external_Vue_.createVNode)("div", null, [(0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
      "tag": "flex",
      "justify": "space-between"
    }, {
      default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 8,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)("span", null, [cfg.title])]
      }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 16
      }, {
        default: () => [cfg.shortcuts.value.map((sc, index) => {
          var _cfg$txt4, _cfg$onFocus4;

          var shortcutsText = (_cfg$txt4 = cfg.txt) === null || _cfg$txt4 === void 0 ? void 0 : _cfg$txt4[index];

          if (shortcutsText === undefined) {
            var _cfg$txt5;

            (0,logger/* debug */.fF)("shortcutsText === undefined, add new at idx ".concat(index));
            shortcutsText = (0,external_Vue_.ref)('未初始化');
            (_cfg$txt5 = cfg.txt) === null || _cfg$txt5 === void 0 ? void 0 : _cfg$txt5.fill(shortcutsText, index, index + 1);
          }

          (0,logger/* debug */.fF)("shortcutsText=".concat(shortcutsText.value, " index=").concat(index));
          var onFocus = (_cfg$onFocus4 = cfg.onFocus) === null || _cfg$onFocus4 === void 0 ? void 0 : _cfg$onFocus4[index];

          if (onFocus === undefined) {
            var _cfg$onFocus5;

            (0,logger/* debug */.fF)("onFocus === undefined, add new at idx ".concat(index));
            onFocus = setShortcutsFnFactory(shortcutsText, sc);
            (_cfg$onFocus5 = cfg.onFocus) === null || _cfg$onFocus5 === void 0 ? void 0 : _cfg$onFocus5.fill(onFocus, index, index + 1);
          }

          return (0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
            "tag": "flex",
            "justify": "end"
          }, {
            default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
              "span": 20
            }, {
              default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElInput_default()), {
                "placeholder": "请按下快捷键",
                "modelValue": shortcutsText.value,
                "onUpdate:modelValue": $event => shortcutsText.value = $event,
                "clearable": true,
                "readonly": true,
                "onFocus": onFocus,
                "onBlur": onFocus
              }, null)]
            }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
              "span": 4,
              "style": "margin: auto 0;"
            }, {
              default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
                "type": "danger",
                "icon": "el-icon-minus",
                "size": "small",
                "style": 'padding: 3px;' + 'min-height: fit-content;' + 'height: fit-content;',
                "onClick": () => deleteShortcuts(cfg, index),
                "circle": true
              }, null)]
            })]
          });
        }), (0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "space-around"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
            "type": "primary",
            "icon": "el-icon-plus",
            "size": "small",
            "style": 'padding: 3px;' + 'min-height: fit-content;' + 'height: fit-content;',
            "onClick": () => addShortcuts(cfg),
            "circle": true
          }, null)]
        })]
      })]
    }), [[external_Vue_.vShow, cfg.isHide === undefined || cfg.isHide === false || showHiddenSettings.value]]), (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((external_ElementPlus_ElDivider_default()), {
      "style": "width: 80%; margin: 6px auto;"
    }, null), [[external_Vue_.vShow, showHiddenSettings.value ? idx + 1 < shortcutUICfgs.length : cfg.isHide !== true ? idx < lastShowIdx : false]])]))]);
  }

}));
// EXTERNAL MODULE: external "SVG"
var external_SVG_ = __webpack_require__(619);
// EXTERNAL MODULE: ./src/utils/base64.ts
var base64 = __webpack_require__(457);
// EXTERNAL MODULE: ./src/assets/Recovery.svg
var Recovery = __webpack_require__(15);
// EXTERNAL MODULE: ./src/utils/object.ts
var object = __webpack_require__(701);
;// CONCATENATED MODULE: ./src/components/settings/ResetSettings.tsx

















/* harmony default export */ var ResetSettings = ((0,external_Vue_.defineComponent)({
  name: 'ResetSettings',

  setup() {
    var _oDOM$firstChild;

    var store = (0,config/* useStore */.oR)();
    var showHiddenSettings = (0,external_Vue_.computed)({
      get: () => store.state.showHiddenSettings,
      set: val => store.state.showHiddenSettings = val
    });

    var onClick = () => {
      external_ElementPlus_ElMessageBox_default()({
        title: '重置',
        message: '此操作将重置所有选项到默认值, 是否继续?',
        confirmButtonText: '重置',
        cancelButtonText: '放弃',
        type: 'warning',
        showClose: false,
        showCancelButton: true,
        callback: action => {
          switch (action) {
            case 'confirm':
              store.dispatch('resetConfig');

              external_ElementPlus_ElNotification_default()({
                title: '成功',
                message: '重置选项成功',
                type: 'success',
                duration: 1000
              });

              break;

            case 'close':
            case 'cancel':
              external_ElementPlus_ElNotification_default()({
                title: '放弃',
                message: '放弃重置选项',
                type: 'info',
                duration: 1000
              });

              break;

            default:
              break;
          }
        }
      });
    };

    var imgHead = 'data:image/svg+xml;base64,';
    var isSVG = Recovery.startsWith(imgHead);
    var base64Str = Recovery.substring(imgHead.length);
    console.assert(isSVG === true);
    var svgStr = (0,base64/* Base64Decode */.y)(base64Str);
    var oParser = new DOMParser();
    var oDOM = oParser.parseFromString(svgStr, 'image/svg+xml'); // for (const node of oDOM.firstChild?.childNodes) {
    // }

    var nodeToRemove = [];

    if (typeof oDOM.firstChild === 'object' && oDOM.firstChild !== null && (0,object/* hasOwnProperty */.nr)(oDOM.firstChild, 'viewBox')) {
      var viewBox = oDOM.firstChild.viewBox;

      if (viewBox instanceof SVGAnimatedRect) {
        // viewBox = new SVGRect(0, 0, 100, 100);
        viewBox.baseVal.height = 100;
      }
    }

    (_oDOM$firstChild = oDOM.firstChild) === null || _oDOM$firstChild === void 0 ? void 0 : _oDOM$firstChild.childNodes.forEach(childNode => {
      if (childNode.nodeName === 'text') {
        // childNode.remove();
        nodeToRemove.push(childNode);
      }
    });
    nodeToRemove.forEach(n => n.remove()); // debug('svg dom=', oDOM);

    var svg = (0,external_SVG_.SVG)(oDOM.firstChild);
    svg.size(100, 100); // @ts-ignore

    svg.find('#Recovery').fill('#FFFFFF');
    var s = new XMLSerializer();

    var _imgStr = s.serializeToString(svg.node);

    var _img = imgHead + (0,base64/* Base64Encode */.H)(_imgStr);

    return () => (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
      "tag": "flex",
      "justify": "space-between"
    }, {
      default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 16,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createTextVNode)("\u91CD\u7F6E\u6240\u6709\u9009\u9879\u5230\u9ED8\u8BA4\u503C")])]
      }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 8
      }, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "end"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
            "type": "danger",
            "size": "small",
            "onClick": onClick,
            "style": 'padding: 3px 7px;'
          }, {
            default: () => [(0,external_Vue_.createVNode)("img", {
              "width": 22,
              "src": _img,
              "style": "top: 4px; position: relative;"
            }, null)]
          })]
        })]
      })]
    }), [[external_Vue_.vShow, showHiddenSettings.value]]);
  }

}));
;// CONCATENATED MODULE: ./src/components/settings/ShowDevSettings.tsx









/* harmony default export */ var ShowDevSettings = ((0,external_Vue_.defineComponent)({
  name: 'ShowDevSettings',

  setup() {
    var store = (0,config/* useStore */.oR)();
    var showHiddenSettings = (0,external_Vue_.computed)(() => store.state.showHiddenSettings);
    var showDevSettings = (0,external_Vue_.computed)({
      get: () => store.state.showDevSettings,
      set: val => store.state.showDevSettings = val
    });
    return () => (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
      "tag": "flex",
      "justify": "space-between"
    }, {
      default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 16,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createTextVNode)("\u663E\u793A\u5F00\u53D1\u8005\u9009\u9879")])]
      }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
        "span": 4,
        "style": "margin: auto 0;"
      }, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "end"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElSwitch_default()), {
            "modelValue": showDevSettings.value,
            "onUpdate:modelValue": $event => showDevSettings.value = $event
          }, null)]
        })]
      })]
    }), [[external_Vue_.vShow, showHiddenSettings.value]]);
  }

}));
;// CONCATENATED MODULE: external "window.theme_chalk_el_button_group"
var external_window_theme_chalk_el_button_group_namespaceObject = window.theme_chalk_el_button_group;
;// CONCATENATED MODULE: external "ElementPlus.ElButtonGroup"
var external_ElementPlus_ElButtonGroup_namespaceObject = ElementPlus.ElButtonGroup;
var external_ElementPlus_ElButtonGroup_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElButtonGroup_namespaceObject);
;// CONCATENATED MODULE: external "window.theme_chalk_el_message"
var external_window_theme_chalk_el_message_namespaceObject = window.theme_chalk_el_message;
;// CONCATENATED MODULE: external "ElementPlus.ElMessage"
var external_ElementPlus_ElMessage_namespaceObject = ElementPlus.ElMessage;
var external_ElementPlus_ElMessage_default = /*#__PURE__*/__webpack_require__.n(external_ElementPlus_ElMessage_namespaceObject);
;// CONCATENATED MODULE: ./src/components/settings/DevTools.tsx












function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_Vue_.isVNode)(s);
}

/* harmony default export */ var DevTools = ((0,external_Vue_.defineComponent)({
  name: 'DebugLogLevel',

  setup() {
    var store = (0,config/* useStore */.oR)();
    var showDevSettings = (0,external_Vue_.computed)({
      get: () => store.state.showDevSettings,
      set: val => store.state.showDevSettings = val
    });
    var tools = [{
      title: '打印保存的配置',
      callback: () => store.dispatch('printConfig')
    }, {
      title: '是否存在修改',
      callback: () => {
        var haveCfgChange = store.getters.haveCfgChange;

        external_ElementPlus_ElMessage_default()({
          message: haveCfgChange ? '存在修改' : '无修改',
          type: haveCfgChange ? 'error' : 'success',
          duration: 1000
        });
      }
    }, {
      title: '放弃保存',
      callback: () => store.dispatch('cancelConfig')
    }];
    return () => {
      var _slot;

      return (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), null, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButtonGroup_default()), null, _isSlot(_slot = tools.map(tool => {
          return (0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
            "type": "primary",
            "size": "small",
            "onClick": tool.callback,
            "style": 'padding: 3px 8px; margin-top: 1px;'
          }, {
            default: () => [tool.title]
          });
        })) ? _slot : {
          default: () => [_slot]
        })]
      }), [[external_Vue_.vShow, showDevSettings.value]]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/settings/settings.tsx
























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// import '../../style/element-custom.scss';
// import 'element-plus/lib/theme-chalk/index.css';











var SettingsUI = (0,external_Vue_.defineComponent)({
  name: 'SettingsUI',
  components: {
    ElContainer: (external_ElementPlus_ElContainer_default())
  },

  setup() {
    var store = (0,config/* useStore */.oR)();
    var shortcuts = (0,external_Vue_.computed)(() => store.state.shortcuts);
    var enableHomePage = (0,external_Vue_.computed)({
      get: () => {
        var _store$getters$curren;

        return (_store$getters$curren = store.getters.currentSiteCfg) === null || _store$getters$curren === void 0 ? void 0 : _store$getters$curren.showButtonForHomePage;
      },
      set: val => store.getters.currentSiteCfg && (store.getters.currentSiteCfg.showButtonForHomePage = val)
    });
    var enableSearchPage = (0,external_Vue_.computed)({
      get: () => {
        var _store$getters$curren2;

        return (_store$getters$curren2 = store.getters.currentSiteCfg) === null || _store$getters$curren2 === void 0 ? void 0 : _store$getters$curren2.showButtonForSearchPage;
      },
      set: val => store.getters.currentSiteCfg && (store.getters.currentSiteCfg.showButtonForSearchPage = val)
    });
    var backgroundColor = (0,external_Vue_.computed)(() => store.state.style.settings.background);

    var enableHomePageModified = () => {
      (0,logger/* debug */.fF)("enableHomePage value changed to : ".concat(enableHomePage.value));
    };

    (0,external_Vue_.watch)(enableHomePage, enableHomePageModified);
    var activeNames = (0,external_Vue_.ref)(['UI' // 'shortcuts',
    // 'moreSettings',
    ]);
    var showSettings = (0,external_Vue_.ref)(false);

    var onSave = () => {
      (0,logger/* debug */.fF)('close');
      store.dispatch('saveConfig');

      external_ElementPlus_ElNotification_default()({
        title: '成功',
        message: '配置保存成功',
        type: 'success',
        duration: 1000
      });

      showSettings.value = false;
    };

    var onCancel = () => {
      (0,logger/* debug */.fF)('close');
      store.dispatch('cancelConfig');

      external_ElementPlus_ElNotification_default()({
        title: '放弃',
        message: '放弃保存',
        type: 'info',
        duration: 1000
      });

      showSettings.value = false;
    };

    var onClose = () => {
      var haveChange = (0,external_Vue_.computed)(() => store.getters.haveCfgChange);

      if (haveChange.value === true) {
        external_ElementPlus_ElMessageBox_default()({
          title: '关闭',
          message: '您正在关闭设置窗口, 是否需要保存修改后的配置?',
          confirmButtonText: '保存修改',
          cancelButtonText: '放弃修改',
          type: 'warning',
          distinguishCancelAndClose: true,
          showCancelButton: true,
          callback: action => {
            switch (action) {
              case 'confirm':
                onSave();
                break;

              case 'close':
                break;

              case 'cancel':
                onCancel();
                break;
            }
          }
        });
      } else {
        showSettings.value = false;
      }
    };

    try {
      GM_registerMenuCommand('脚本设置', function () {
        showSettings.value = true;
      });
      GM_registerMenuCommand('使用反馈', function () {
        GM_openInTab('https://greasyfork.org/zh-CN/scripts/421329-webswitcher-%E5%9C%A8%E7%99%BE%E5%BA%A6-%E8%B0%B7%E6%AD%8C%E4%B9%8B%E9%97%B4%E5%88%87%E6%8D%A2%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C/feedback', {
          active: true,
          insert: true,
          setParent: true
        });
      });
    } catch (e) {}

    var shortcutsListener = event => {
      if (shortcuts.value.enable === false) return;
      shortcuts.value.showSettings.forEach(shortcut => {
        (0,logger/* trace */.g4)((0,utils_shortcut/* Shortcut2Str */.tC)(event), (0,utils_shortcut/* Shortcut2Str */.tC)(shortcut));

        if ((0,utils_shortcut/* isShortcut */.zD)(event, shortcut)) {
          if (showSettings.value === true) {
            onClose();
          } else {
            showSettings.value = true;
          }
        }
      });
    };

    (0,external_Vue_.onMounted)(() => {
      window.addEventListener('keydown', shortcutsListener);
    });
    (0,external_Vue_.onUnmounted)(() => {
      window.removeEventListener('keydown', shortcutsListener);
    });
    return () => (0,external_Vue_.createVNode)((external_ElementPlus_ElContainer_default()), {
      "key": "webswitcher-settings",
      "style": 'width: 350px;' + "background: ".concat(backgroundColor.value, ";") + 'border: 1px solid #eee;' + 'text-align: left;' + (showSettings.value === false ? 'display: none;' : 'display: block;')
    }, {
      default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElHeader_default()), {
        "style": "height:auto; padding: 5px; border-bottom: 1px solid grey;"
      }, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "space-between"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
            "span": 4,
            "style": "margin: auto 0;"
          }, {
            default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createVNode)("b", null, [(0,external_Vue_.createTextVNode)("\u8BBE\u7F6E")])])]
          }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
            "span": 12,
            "style": "margin: auto 0;"
          }, {
            default: () => [(0,external_Vue_.createVNode)("span", {
              "style": 'font-size: 12px;' + 'color: rgb(0,0,0, 0.5);'
            }, [(0,external_Vue_.createTextVNode)("WebSwitcher "), package_0/* version */.i8, (0,external_Vue_.createVNode)("br", null, null), (0,external_Vue_.createTextVNode)("\u5728\u767E\u5EA6\u3001\u8C37\u6B4C\u4E4B\u95F4\u5207\u6362\u641C\u7D22\u7ED3\u679C")])]
          }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
            "span": 8
          }, {
            default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
              "tag": "flex",
              "justify": "end"
            }, {
              default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
                "type": "danger",
                "icon": "el-icon-close",
                "size": "small",
                "onClick": onClose
              }, null)]
            })]
          })]
        })]
      }), (0,external_Vue_.createVNode)((external_ElementPlus_ElMain_default()), null, {
        default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCollapse_default()), {
          "modelValue": activeNames.value,
          "onUpdate:modelValue": $event => activeNames.value = $event
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCollapseItem_default()), {
            "name": "UI"
          }, {
            default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
              "tag": "flex",
              "justify": "space-between"
            }, {
              default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
                "span": 16,
                "style": "margin: auto 0;"
              }, {
                default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createTextVNode)("\u5728\u3010\u9996\u9875\u3011\u542F\u7528\u5207\u6362\u6309\u94AE")])]
              }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
                "span": 4,
                "style": "margin: auto 0;"
              }, {
                default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
                  "tag": "flex",
                  "justify": "end"
                }, {
                  default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElSwitch_default()), {
                    "modelValue": enableHomePage.value,
                    "onUpdate:modelValue": $event => enableHomePage.value = $event
                  }, null)]
                })]
              })]
            }), (0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
              "tag": "flex",
              "justify": "space-between"
            }, {
              default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
                "span": 16,
                "style": "margin: auto 0;"
              }, {
                default: () => [(0,external_Vue_.createVNode)("span", null, [(0,external_Vue_.createTextVNode)("\u5728\u3010\u641C\u7D22\u9875\u9762\u3011\u542F\u7528\u5207\u6362\u6309\u94AE")])]
              }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
                "span": 4,
                "style": "margin: auto 0;"
              }, {
                default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
                  "tag": "flex",
                  "justify": "end"
                }, {
                  default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElSwitch_default()), {
                    "modelValue": enableSearchPage.value,
                    "onUpdate:modelValue": $event => enableSearchPage.value = $event
                  }, null)]
                })]
              })]
            })],
            title: () => (0,external_Vue_.createVNode)("b", null, [(0,external_Vue_.createTextVNode)("\u754C\u9762\u8BBE\u7F6E")])
          })]
        }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCollapse_default()), {
          "modelValue": activeNames.value,
          "onUpdate:modelValue": $event => activeNames.value = $event
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCollapseItem_default()), {
            "name": "shortcuts"
          }, {
            default: () => [(0,external_Vue_.createVNode)(Shortcuts, null, null)],
            title: () => (0,external_Vue_.createVNode)("b", null, [(0,external_Vue_.createTextVNode)("\u5FEB\u6377\u952E\u8BBE\u7F6E")])
          })]
        }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCollapse_default()), {
          "modelValue": activeNames.value,
          "onUpdate:modelValue": $event => activeNames.value = $event
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCollapseItem_default()), {
            "name": "moreSettings"
          }, {
            default: () => [(0,external_Vue_.createVNode)(ShowHiddenSettings, null, null), (0,external_Vue_.createVNode)(ShowDevSettings, null, null), (0,external_Vue_.createVNode)(DebugLogLevel, null, null), (0,external_Vue_.createVNode)(DevTools, null, null), (0,external_Vue_.createVNode)(ResetSettings, null, null)],
            title: () => (0,external_Vue_.createVNode)("b", null, [(0,external_Vue_.createTextVNode)("\u66F4\u591A\u8BBE\u7F6E")])
          })]
        }), (0,external_Vue_.createVNode)((external_ElementPlus_ElRow_default()), {
          "tag": "flex",
          "justify": "space-around"
        }, {
          default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
            "span": 4,
            "style": "margin: auto 0;"
          }, {
            default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
              "type": "info",
              "size": "small",
              "onClick": onCancel,
              "style": 'padding: 3px 7px;'
            }, {
              default: () => [(0,external_Vue_.createTextVNode)("\u653E\u5F03\u4FEE\u6539")]
            })]
          }), (0,external_Vue_.createVNode)((external_ElementPlus_ElCol_default()), {
            "span": 4,
            "style": "margin: auto 0;"
          }, {
            default: () => [(0,external_Vue_.createVNode)((external_ElementPlus_ElButton_default()), {
              "type": "primary",
              "size": "small",
              "onClick": onSave,
              "style": 'padding: 3px 7px;'
            }, {
              default: () => [(0,external_Vue_.createTextVNode)("\u4FDD\u5B58\u4FEE\u6539")]
            })]
          })]
        })]
      })]
    });
  }

});
class Settings extends site/* Site */.T {
  constructor() {
    super(...arguments);

    _defineProperty(this, "id", 'WebSwitcher_Settings');

    _defineProperty(this, "name", 'Settings');

    _defineProperty(this, "siteAddrReg", /.*/);

    _defineProperty(this, "mountElementName", 'body');

    _defineProperty(this, "container", null);

    _defineProperty(this, "app", null);

    _defineProperty(this, "waitCondition", null);

    _defineProperty(this, "cfg", config/* defaultConfig */.u_);
  }

  beforeMount() {
    var isDebugOn = false;
    this.container = document.createElement('div');
    this.container.id = this.id; // this.container.style.display = 'block';

    this.container.style.zIndex = '1999'; // this.container.style.backgroundColor = 'white';

    this.container.style.position = 'fixed';
    var clientWidth = document.documentElement.clientWidth;
    var vw = clientWidth / 100;
    var top = 3.9 * vw;
    var right = 8.8 * vw;
    this.container.style.top = "".concat(top, "px");
    this.container.style.right = "".concat(right, "px");
    this.container.draggable = true;
    var cross = document.createElement('div');
    cross.id = 'CrossLine';
    if (isDebugOn === false) cross.style.display = 'none';
    cross.style.backgroundColor = 'gray';
    cross.style.position = 'fixed';
    cross.style.width = '100px';
    cross.style.height = '100px';
    document.body.appendChild(cross);
    var dragstart = null;

    this.container.ondragover = ev => {
      ev.preventDefault();
    };

    this.container.ondragstart = ev => {
      console.debug('ondragstart', ev);
      dragstart = ev;
    };

    var limitNumber = (val, min, max) => {
      var ret = val;

      if (ret < min) {
        ret = min;
      } else if (ret > max) {
        ret = max;
      }

      return ret;
    };

    var lastX = 0;
    var lastY = 0;

    this.container.ondragend = ev => {
      console.debug('ondragend', ev);

      if (dragstart) {
        top = lastY;
        right = lastX;
        dragstart = null;
      }
    };

    this.container.ondrag = ev => {
      if (dragstart) {
        if (isDebugOn) (0,logger/* debug */.fF)("[".concat(ev.clientX, ",").concat(ev.clientY, "]"));
        var clientX = ev.clientX;
        var clientY = ev.clientY;

        if (clientX !== 0 || clientY !== 0) {
          if (this.container) {
            var _clientWidth = document.documentElement.clientWidth;
            var clientHeight = document.documentElement.clientHeight;
            var x = limitNumber(right - (clientX - dragstart.clientX), 0, _clientWidth - this.container.getBoundingClientRect().width);
            var y = limitNumber(top + (clientY - dragstart.clientY), 0, clientHeight - this.container.getBoundingClientRect().height);
            cross.style.top = "".concat(clientY, "px");
            cross.style.left = "".concat(clientX, "px");
            this.container.style.top = "".concat(y, "px");
            this.container.style.right = "".concat(x, "px");
            lastX = x;
            lastY = y;
          }
        }
      }
    };

    this.app = (0,external_Vue_.createApp)(SettingsUI);
    this.app.use(ElementPlus);
  }

  mount() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var body = $(_this.mountElementName);

      if (_this.container) {
        var _this$app;

        body.append(_this.container);
        (_this$app = _this.app) === null || _this$app === void 0 ? void 0 : _this$app.mount(_this.container);
      }
    })();
  }

}
;// CONCATENATED MODULE: ./src/webSwitcher.ts
function webSwitcher_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class WebSwitcher {
  constructor(sites) {
    webSwitcher_defineProperty(this, "sites", void 0);

    webSwitcher_defineProperty(this, "settings", new Settings());

    this.sites = sites;
  }

  run(options) {
    this.settings.run(this.settings, options); // this.settings.app?.config;

    this.sites.forEach(site => {
      site.run(this.settings, options);
    });
  }

}

/***/ }),

/***/ 742:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = byteLength
exports.b$ = toByteArray
exports.JQ = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 15:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIgogICAgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEyNSIKICAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgIDxzd2l0Y2g+CiAgICAgICAgPGZvcmVpZ25PYmplY3QgcmVxdWlyZWRFeHRlbnNpb25zPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHg9IjAiIHk9IjAiIHdpZHRoPSIxIgogICAgICAgICAgICBoZWlnaHQ9IjEiIC8+CiAgICAgICAgPGcgaTpleHRyYW5lb3VzPSJzZWxmIj4KICAgICAgICAgICAgPGcgaWQ9IlJlY292ZXJ5Ij4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgICAgZD0iTTk3LDQyLjhsLTguMy0xM2MtMS4yLTEuOS00LjQtMS45LTUuNiwwbC04LjMsMTNjLTAuNywxLTAuNywyLjMtMC4xLDMuNGMwLjYsMS4xLDEuNywxLjcsMi45LDEuN2g0LjZ2MiAgICAgYzAsMTcuNy0xNC40LDMyLjEtMzIuMSwzMi4xYy03LjYsMC0xNC45LTIuNy0yMC43LTcuNmMtMS42LTEuMy0zLjktMS4xLTUuMiwwLjRjLTEuMywxLjYtMS4xLDMuOSwwLjQsNS4yICAgICBjNy4xLDYsMTYuMiw5LjMsMjUuNSw5LjNjMjEuOCwwLDM5LjUtMTcuNywzOS41LTM5LjV2LTJoNC42YzEuMiwwLDIuMy0wLjcsMi45LTEuN0M5Ny43LDQ1LjIsOTcuNiw0My45LDk3LDQyLjh6IiAvPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICBkPSJNMjUuNCw1My43Yy0wLjYtMS4xLTEuNy0xLjctMi45LTEuN2gtNC42di0yYzAtMTcuNywxNC40LTMyLjEsMzIuMS0zMi4xYzcuNiwwLDE0LjksMi43LDIwLjcsNy42ICAgICBjMS42LDEuMywzLjksMS4xLDUuMi0wLjRjMS4zLTEuNiwxLjEtMy45LTAuNC01LjJjLTcuMS02LTE2LjItOS4zLTI1LjUtOS4zYy0yMS44LDAtMzkuNSwxNy43LTM5LjUsMzkuNXYySDUuOCAgICAgYy0xLjIsMC0yLjMsMC43LTIuOSwxLjdjLTAuNiwxLjEtMC41LDIuNCwwLjEsMy40bDguMywxM2MwLjYsMSwxLjcsMS41LDIuOCwxLjVzMi4yLTAuNiwyLjgtMS41bDguMy0xMyAgICAgQzI2LDU2LjEsMjYsNTQuOCwyNS40LDUzLjd6IiAvPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgICBkPSJNNTAsMjUuNGMtMiwwLTMuNywxLjctMy43LDMuN1Y1MGMwLDEuMywwLjcsMi42LDEuOSwzLjJsMTAuMyw1LjhjMC42LDAuMywxLjIsMC41LDEuOCwwLjVjMS4zLDAsMi42LTAuNywzLjItMS45ICAgICBjMS0xLjgsMC40LTQtMS40LTUuMWwtOC40LTQuOFYyOS4xQzUzLjcsMjcsNTIsMjUuNCw1MCwyNS40eiIgLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvc3dpdGNoPgogICAgPHRleHQgeD0iMCIgeT0iMTE1IiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjVweCIgZm9udC13ZWlnaHQ9ImJvbGQiCiAgICAgICAgZm9udC1mYW1pbHk9IidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwtVW5pY29kZSwgQXJpYWwsIFNhbnMtc2VyaWYiPkNyZWF0ZWQgYnkgQWRyaWVuIENvcXVldDwvdGV4dD48dGV4dAogICAgICAgIHg9IjAiIHk9IjEyMCIgZmlsbD0iIzAwMDAwMCIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIgogICAgICAgIGZvbnQtZmFtaWx5PSInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLVVuaWNvZGUsIEFyaWFsLCBTYW5zLXNlcmlmIj5mcm9tIHRoZSBOb3VuIFByb2plY3Q8L3RleHQ+Cjwvc3ZnPgo=";

/***/ }),

/***/ 625:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwMHB4IiBoZWlnaHQ9IjEwMDBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDYuMiAoNDQ0OTYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMyI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMTAwMCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0i5pCc57SiX+eGiuaOjF82Nmljb24iIGZpbGw9IiMzMzg4RkYiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMS4yMTIxMjEsIDkwLjkwOTA5MSkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yODEuMzkxNjcyLDI1My4yMjc4ODkgQzMzMC4yNDk0MDgsMjUzLjIyNzg4OSAzNjkuNzI3NTM2LDE5Ny4xNzA0MDYgMzY5LjcyNzUzNiwxMjcuODU1MzgyIEMzNjkuNzI3NTM2LDU4LjYwMDAwODUgMzMwLjI0OTQwOCwyLjU1NzQzOTAzIDI4MS4zOTE2NzIsMi41NTc0MzkwMyBDMjMyLjU5Mzc3NCwyLjU1NzQzOTAzIDE5My4wMTA5MjksNTguNjAwMDA4NSAxOTMuMDEwOTI5LDEyNy44NTUzODIgQzE5My4wMTA5MjksMTk3LjE3MDQwNiAyMzIuNTkzNzc0LDI1My4yMjc4ODkgMjgxLjM5MTY3MiwyNTMuMjI3ODg5IiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ5MS44MDQ1NTksMjYxLjUxNDk3MSBDNTU3LjEzMjcwOCwyNjkuOTU1NjU2IDU5OS4xMjQwMzIsMjAwLjQ3NjU5IDYwNy40NzE0MzUsMTQ3LjgxOTI0MiBDNjE1Ljk4MzM5Miw5NS4yNTEzNzE3IDU3My44NDI0NzMsMzQuMTM4NDI2MSA1MjcuNjE3NjA5LDIzLjYzOTc2NDkgQzQ4MS4yNzMwNjksMTMuMDUxNjI2NCA0MjMuNDI0NjcyLDg3LjAzNDM3OTggNDE4LjE1ODkyNywxMzUuMjc3NTE4IEM0MTEuODYwOTc2LDE5NC4yNDMwMSA0MjYuNjQwOTY1LDI1My4xMzM5MzggNDkxLjgwNDU1OSwyNjEuNTE0OTcxIiBpZD0iRmlsbC0zIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExNy4xNzM3MjksNDI5Ljk4MjY5MyBDMjA1LjYyOTI3LDQxMS4wMjg0MzQgMTkzLjYwMTgyOSwzMDUuNjM5MTc0IDE5MC45NTM5OTcsMjgyLjU4Mzg3NSBDMTg2LjYwMDc4MiwyNDcuMDYxNDE3IDE0NC42OTkyMTUsMTg1LjAwODk2IDg3Ljc5MzI2NTgsMTg5LjkwMDM4MiBDMTYuMTk3MDg1MiwxOTYuMjk4MDAzIDUuNzQwMzkyNjksMjk5LjQwNTU5NCA1Ljc0MDM5MjY5LDI5OS40MDU1OTQgQy0zLjk1MzM2NTE1LDM0Ny4wODIwNDMgMjguOTEyNjYyNiw0NDguOTM2OTUyIDExNy4xNzM3MjksNDI5Ljk4MjY5MyIgaWQ9IkZpbGwtNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03NTAuNzAyNjkxLDM0OS45Mjg5MSBDNzUwLjcwMjY5MSwzMjQuNzU1OTg0IDcyOS43Mjk0NjgsMjQ4Ljg3OTI5NiA2NTEuODY1MjU2LDI0OC44NzkyOTYgQzU3My44NTE0NDgsMjQ4Ljg3OTI5NiA1NjMuNDM5NjM0LDMyMC40NzU5OSA1NjMuNDM5NjM0LDM3MS4wOTAyNzQgQzU2My40Mzk2MzQsNDE5LjQwNzk3NiA1NjcuNTIzNTc5LDQ4Ni44NDM5NzkgNjY0LjQwMTMxOSw0ODQuNjk2NTI2IEM3NjEuMzA4OTc4LDQ4Mi41Nzg4OTggNzUwLjcwMjY5MSwzNzUuMjY1ODc4IDc1MC43MDI2OTEsMzQ5LjkyODkxIiBpZD0iRmlsbC03Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxMS4xMDg5MzYsNjEzLjMwNjYxNyBDMjA4LjUyMDk0Miw2MjAuNzE4MzE0IDIwMi43MzE2MTQsNjM5LjY3MjU3MyAyMDcuNzI4MDg4LDY1Ni4xODExMjEgQzIxNy42MzEyNzksNjkzLjE5NDg2NyAyNDkuODgzOTY3LDY5NC44NjUxMDkgMjQ5Ljg4Mzk2Nyw2OTQuODY1MTA5IEwyOTYuMTk4NTg4LDY5NC44NjUxMDkgTDI5Ni4xOTg1ODgsNTgxLjk1OTc2MiBMMjQ2LjU3NzkxNyw1ODEuOTU5NzYyIEMyMjQuMjg4MjU4LDU4OC41OTU5OSAyMTMuNTE3NDE2LDYwNS44ODAwMDcgMjExLjEwODkzNiw2MTMuMzA2NjE3IiBpZD0iRmlsbC05Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTU2My4zNTg4NTMsNzM5LjQ2OTUwNiBMNDMxLjAyNzA5MSw3MzkuNDY5NTA2IEMzNzkuNzYwODc1LDcyNi4yODY1MjggMzc3LjMyMjQ3Niw2ODkuOTczNjg3IDM3Ny4zMjI0NzYsNjg5Ljk3MzY4NyBMMzc3LjMyMjQ3Niw1NDQuMDY2MTU3IEw0MzEuMDI3MDkxLDU0My4yMDEyMSBMNDMxLjAyNzA5MSw2NzQuMzQ0OTk4IEM0MzQuMzAzMjIyLDY4OC4zMDM0NDYgNDUxLjczMTA0Myw2OTAuODM4NjM0IDQ1MS43MzEwNDMsNjkwLjgzODYzNCBMNTA2LjI3MzM5LDY5MC44Mzg2MzQgTDUwNi4yNzMzOSw1NDQuMDY2MTU3IEw1NjMuMzU4ODUzLDU0NC4wNjYxNTcgTDU2My4zNTg4NTMsNzM5LjQ2OTUwNiBaIE0zNDkuMTY4NjkxLDc0MC4yNTk4ODggTDIzNC4xODk5NTIsNzQwLjI1OTg4OCBDMTg0LjUyNDQwMyw3MzAuNDAyNDgxIDE2NC43NDc5NCw2OTYuNTk1MDAyIDE2Mi4yMzQ3NDQsNjkwLjgzODYzNCBDMTU5Ljc2NjQyNiw2ODQuOTkyNzg4IDE0NS43MTk0NTMsNjU3LjgzNjQ1IDE1My4xNjkyODUsNjExLjY1MTI4OCBDMTc0LjYzNjE3Miw1NDIuNDEwODI4IDIzNS44NTA0NTcsNTM3LjQyOTkyOSAyMzUuODUwNDU3LDUzNy40Mjk5MjkgTDI5Ny4wNjQ3NDMsNTM3LjQyOTkyOSBMMjk3LjA2NDc0Myw0NjIuNDMzMSBMMzQ5LjE2ODY5MSw0NjMuMjIzNDgzIEwzNDkuMTY4NjkxLDc0MC4yNTk4ODggWiBNNjUxLjg1OTI3Miw1NzEuMDczMzY2IEM2NTEuODU5MjcyLDU3MS4wNzMzNjYgNTUwLjgwNzgzLDQ5My4xMzg3MDIgNDkxLjgwNzU1MSw0MDguOTEwODA2IEM0MTEuODYzOTY4LDI4NC43MTY0MTYgMjk4LjI2MTUwMywzMzUuMjU2MTM2IDI2MC4yNzkzMjUsMzk4LjQxMjE0NSBDMjIyLjQ2MTcwMiw0NjEuNTY4MTU0IDE2My41MDYzMDIsNTAxLjUxOTczNiAxNTUuMDk5MDYxLDUxMi4wOTI5NjEgQzE0Ni42MzE5ODIsNTIyLjUxNzA1OCAzMy4wNzQzOTYzLDU4My42MTUwOTEgNTguMjgxMTU4Niw2OTUuMjUyODQ0IEM4My40ODc5MjA5LDgwNi44MzA5NDUgMTcyLjAxODI1OSw4MDQuNjY4NTc5IDE3Mi4wMTgyNTksODA0LjY2ODU3OSBDMTcyLjAxODI1OSw4MDQuNjY4NTc5IDIzNy4yNzE2MSw4MTEuMDgxMTEzIDMxMi45OTY2MTMsNzk0LjE4NDgzIEMzODguNjkxNjk4LDc3Ny40NTI1ODkgNDUzLjkxNTEzLDc5OC4zNjA0MzQgNDUzLjkxNTEzLDc5OC4zNjA0MzQgQzQ1My45MTUxMyw3OTguMzYwNDM0IDYzMC43OTYyOTIsODU3LjQxNTQwNCA2NzkuMTc1MzI0LDc0My43MTk2NzUgQzcyNy41MzkzOTcsNjMwLjAzODg1OCA2NTEuODU5MjcyLDU3MS4wNzMzNjYgNjUxLjg1OTI3Miw1NzEuMDczMzY2IEw2NTEuODU5MjcyLDU3MS4wNzMzNjYgWiIgaWQ9IkZpbGwtMTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";

/***/ }),

/***/ 849:
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 619:
/***/ (function(module) {

module.exports = SVG;

/***/ }),

/***/ 5:
/***/ (function(module) {

module.exports = Vue;

/***/ }),

/***/ 147:
/***/ (function(module) {

module.exports = JSON.parse('{"i8":"0.5.1","HO":{"O_":"1.1.0-beta.7"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	!function() {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = function(queue) {
/******/ 			if(queue) {
/******/ 				queue.forEach(function(fn) { fn.r--; });
/******/ 				queue.forEach(function(fn) { fn.r-- ? fn.r++ : fn(); });
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = function(fn) { !--fn.r && fn(); };
/******/ 		var queueFunction = function(queue, fn) { queue ? queue.push(fn) : completeFunction(fn); };
/******/ 		var wrapDeps = function(deps) { return deps.map(function(dep) {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then(function(r) {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = function(fn, reject) { queueFunction(queue, fn), dep.catch(reject); };
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = function(fn) { completeFunction(fn); };
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}); };
/******/ 		__webpack_require__.a = function(module, body, hasAwait) {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = function(deps, onResolve, onReject) {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map(function(dep, i) { dep[webpackThen](onResolve, onReject); });
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise(function(resolve, rej) {
/******/ 				reject = rej;
/******/ 				outerResolve = function() { resolve(exports), completeQueue(queue), queue = 0; };
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = function(fn, rejectFn) {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body(function(deps) {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					fn = function() { resolve(result = currentDeps.map(function(d) { return d[webpackExports]; })); };
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(962);
/******/ 	
/******/ })()
;