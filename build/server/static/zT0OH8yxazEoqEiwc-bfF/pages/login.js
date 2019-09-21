module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "11Eh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ea6Q");
/* harmony import */ var _BisBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7Gb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Box = props => {
  const {
    isUser
  } = props;

  if (isUser) {
    return __jsx(_UserBox__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  } else {
    return __jsx(_BisBox__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4+Qy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rOcY");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const defaultMeta = {
  title: `【${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}】-试客信赖的免费试用平台-全新模式快速提升排名-官网`,
  description: `${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}，全新的免费试用模式，试客可通过平台免费领 取试用品，包邮且无需返还，每天海量产品在线，每日上新近千款新品。商家可通过${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}平台轻松提升关键词排名，快速打造爆款。`,
  keyword: `${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}|试客|免费试用|试用|试用网|免费试用网|${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}试用网`,
  author: '灬安俱乐部--冰中焱'
};

const MyHead = props => {
  const hasMeta = props.meta;
  const {
    0: meta,
    1: setMeta
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(hasMeta ? _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(defaultMeta, props.meta) : defaultMeta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge, chrome=1"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
  }), __jsx("meta", {
    name: "renderer",
    content: "webkit"
  }), __jsx("meta", {
    httpEquiv: "description",
    content: meta.description
  }), __jsx("meta", {
    name: "Keywords",
    content: meta.keyword
  }), __jsx("meta", {
    name: "author",
    content: meta.author
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/css/iconfont/iconfont.css"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon"
  }), __jsx("title", null, meta.title));
};

/* harmony default export */ __webpack_exports__["a"] = (MyHead);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yfTL");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "IpdT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eU7q");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const valid = (props, ref) => {
  let {
    className,
    spanClass,
    spanStyle,
    spanTitle,
    inputStyle,
    inputPlaceholder,
    inputType,
    inputMaxLength,
    regExp,
    nullMsg,
    errorMsg,
    onEnter
  } = props;
  regExp = regExp || /\*?/;
  const {
    0: val,
    1: setVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: valMsg,
    1: setValMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChange = e => {
    setVal(e.target.value);
  };

  const check = e => {
    if (!val) {
      setValMsg(nullMsg);
      return false;
    } else if (!regExp.test(val)) {
      setValMsg(errorMsg);
      return false;
    } else {
      setValMsg(null);
      return true;
    }
  };
  /*
  * 暴露给父组件使用的方法和参数
  * */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, () => ({
    getVal() {
      return val;
    },

    check
  }));

  const onBlur = e => {
    check();
  };

  const onKeyDown = e => {
    if (e.nativeEvent.keyCode == 13) {
      onEnter();
    }
  };

  let inputDom;

  if (inputMaxLength) {
    inputDom = __jsx("input", {
      className: valMsg ? 'Validform_error' : '',
      style: {
        'width': '321px'
      },
      style: inputStyle,
      type: inputType,
      placeholder: inputPlaceholder,
      onBlur: onBlur,
      onChange: onChange,
      value: val,
      maxLength: inputMaxLength,
      onKeyDown: onKeyDown
    });
  } else {
    inputDom = __jsx("input", {
      className: valMsg ? 'Validform_error' : '',
      style: {
        'width': '321px'
      },
      style: inputStyle,
      type: inputType,
      placeholder: inputPlaceholder,
      onBlur: onBlur,
      onChange: onChange,
      value: val,
      onKeyDown: onKeyDown
    });
  }

  return __jsx("div", {
    className: className,
    ref: ref
  }, __jsx("span", {
    className: spanClass,
    style: spanStyle
  }, spanTitle), inputDom, props.children, __jsx("span", {
    className: valMsg ? 'Validform_wrong' : valMsg == null ? 'Validform_right' : ''
  }, valMsg));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(valid));

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LAiw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vEvA");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_spin_style_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wCKx");
/* harmony import */ var antd_lib_spin_style_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VJ1Z");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const loading = () => {
  return __jsx("div", {
    id: "loading"
  }, __jsx("div", {
    className: 'loading-center'
  }, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
    tip: "Loading..."
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (loading);

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tv70":
/***/ (function(module, exports) {



/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VJ1Z":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");
/* harmony import */ var _less_error_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oP+x");
/* harmony import */ var _less_error_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_less_error_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4+Qy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const meta = {
  title: '出错啦~~'
};
class Error extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    res,
    err
  }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    const {
      statusCode
    } = this.props;
    return __jsx("div", {
      className: 'clearfix _error'
    }, __jsx(_components_MyHead__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      meta: meta
    }), __jsx("div", {
      className: 'wrong'
    }, __jsx("div", {
      align: "center"
    }, __jsx("img", {
      src: "/static/img/error.jpg"
    })), __jsx("div", {
      className: 'wrong_mian clearfix'
    }, __jsx("div", {
      className: 'wrong_left'
    }, "Error"), __jsx("div", {
      className: 'wrong_right'
    }, __jsx("div", {
      className: 'wrong_top'
    }, "\u62B1\u6B49\uFF0C\u7A0B\u5E8F\u51FA\u9519\u4E86\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D"), __jsx("div", {
      className: 'wrong_ttt'
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/'
      },
      replace: true
    }, __jsx("em", null, "\u4E0D\u5982\u8BD5\u8BD5\uFF1A")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/'
      },
      replace: true
    }, __jsx("a", null, "\u5230", _config__WEBPACK_IMPORTED_MODULE_2__[/* name */ "b"], "\u9996\u9875")), __jsx("span", null, "|"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/'
      },
      replace: true
    }, __jsx("a", null, "\u5230\u9996\u9875\u4E13\u533A")))))));
  }

}

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a7Gb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IpdT");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rOcY");
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h0lC");
/* harmony import */ var _core_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nrc/");
/* harmony import */ var antd_lib_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("hp93");
/* harmony import */ var antd_lib_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("i5qa");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const {
  loginNameReg,
  userPasReg
} = _config__WEBPACK_IMPORTED_MODULE_4__[/* regExp */ "c"];







const BisBox = props => {
  const nameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const pasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    data,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_data__WEBPACK_IMPORTED_MODULE_8__[/* DataContext */ "b"]);

  const bisLogin = async e => {
    let nameBool = nameRef.current.check();
    let pasBool = pasRef.current.check();

    if (!nameBool || !pasBool) {
      return;
    }

    let name = nameRef.current.getVal();
    let pas = pasRef.current.getVal(); // console.log(name);
    // console.log(pas);

    await new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      Object(_core_loading__WEBPACK_IMPORTED_MODULE_6__[/* showLoading */ "b"])();
      let set = setTimeout(() => {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_7__["message"].success('登录成功');
        Object(_core_loading__WEBPACK_IMPORTED_MODULE_6__[/* hideLoading */ "a"])();
        resolve({
          name
        });
        dispatch({
          type: _store_data__WEBPACK_IMPORTED_MODULE_8__[/* LOGIN */ "c"],
          token: 'asdasdasd',
          bis: {
            name
          }
        });
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/bis');
      }, 5000);
    }); // const res = await axios.post('/login', {name, pas});
    // dispatch({ type: LOGIN, token:'asdasdasd', user: { name }});
    // Router.replace('/bis');
  };

  return __jsx("div", {
    id: "bisBox"
  }, __jsx(_components_Valid__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: 'login-input',
    spanTitle: '登录名',
    inputPlaceholder: '请输入手机号/用户名',
    inputType: 'text',
    inputMaxLength: "15",
    regExp: loginNameReg,
    nullMsg: '请输入手机号/用户名',
    errorMsg: '请正确输入手机号和用户名',
    ref: nameRef,
    onEnter: bisLogin
  }), __jsx(_components_Valid__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: 'login-input mb20',
    spanTitle: '登录密码',
    inputPlaceholder: '请输入登录密码',
    inputType: 'password',
    inputMaxLength: "16",
    regExp: userPasReg,
    nullMsg: '请输入登录密码',
    errorMsg: '请正确输入密码',
    ref: pasRef,
    onEnter: bisLogin
  }), __jsx("div", {
    className: 'login-sign clearfix'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/Security/FindPassword',
      query: {
        type: 'bis'
      }
    }
  }, __jsx("a", {
    className: 'fr'
  }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"))), __jsx("div", {
    className: 'login-btn'
  }, __jsx("a", {
    onClick: bisLogin
  }, "\u767B\u5F55")), __jsx("div", {
    className: 'login-sign clearfix'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/regist',
      query: {
        type: 'bis'
      }
    }
  }, __jsx("a", {
    className: 'red fr'
  }, "\u6CE8\u518C")), __jsx("span", {
    className: 'fr mr5'
  }, "\u6CA1\u6709\u8D26\u53F7\uFF1F")));
};

/* harmony default export */ __webpack_exports__["default"] = (BisBox);

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "ayfs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LoginBoxHeader = props => {
  const {
    isUser
  } = props;
  return __jsx("div", {
    className: 'login-box-header'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/login',
      query: {
        type: 'user'
      }
    },
    replace: true
  }, __jsx("a", {
    className: isUser ? 'act' : ''
  }, "\u7528\u6237\u767B\u5F55")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/login',
      query: {
        type: 'bis'
      }
    },
    replace: true
  }, __jsx("a", {
    className: isUser ? '' : 'act'
  }, "\u5546\u5BB6\u767B\u5F55")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginBoxHeader);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eU7q":
/***/ (function(module, exports) {



/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "ea6Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IpdT");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rOcY");
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h0lC");
/* harmony import */ var _core_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nrc/");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wWjF");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("i5qa");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const {
  loginNameReg,
  userPasReg
} = _config__WEBPACK_IMPORTED_MODULE_5__[/* regExp */ "c"];





const UserBox = props => {
  const nameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const pasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const {
    data,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_data__WEBPACK_IMPORTED_MODULE_10__[/* DataContext */ "b"]);

  const userLogin = async () => {
    let nameBool = nameRef.current.check();
    let pasBool = pasRef.current.check();

    if (!nameBool || !pasBool) {
      return;
    }

    let name = nameRef.current.getVal();
    let pas = pasRef.current.getVal();
    console.log(name);
    console.log(pas);
    await new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      Object(_core_loading__WEBPACK_IMPORTED_MODULE_7__[/* showLoading */ "b"])();
      let set = setTimeout(() => {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success('登录成功');

        Object(_core_loading__WEBPACK_IMPORTED_MODULE_7__[/* hideLoading */ "a"])();
        resolve({
          name
        });
        dispatch({
          type: _store_data__WEBPACK_IMPORTED_MODULE_10__[/* LOGIN */ "c"],
          token: 'asdasdasd',
          user: {
            name
          }
        });
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/user');
      }, 5000);
    }); // const res = await axios.post('/login', {name, pas});
    // dispatch({ type: LOGIN, token:'asdasdasd', user: { name }});
    // Router.replace('/user');
    // console.log(res);
  };

  return __jsx("div", {
    id: "userBox"
  }, __jsx(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'login-input',
    spanTitle: '登录名',
    inputPlaceholder: '请输入手机号/用户名',
    inputType: 'text',
    inputMaxLength: "15",
    regExp: loginNameReg,
    nullMsg: '请输入手机号/用户名',
    errorMsg: '请正确输入手机号和用户名',
    ref: nameRef,
    onEnter: userLogin
  }), __jsx(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'login-input mb20',
    spanTitle: '登录密码',
    inputPlaceholder: '请输入登录密码',
    inputType: 'password',
    inputMaxLength: "16",
    regExp: userPasReg,
    nullMsg: '请输入登录密码',
    errorMsg: '请正确输入密码',
    ref: pasRef,
    onEnter: userLogin
  }), __jsx("div", {
    className: 'login-sign clearfix'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/Security/FindPassword',
      query: {
        type: 'user'
      }
    }
  }, __jsx("a", {
    className: 'fr'
  }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"))), __jsx("div", {
    className: 'login-btn'
  }, __jsx("a", {
    onClick: userLogin
  }, "\u767B\u5F55")), __jsx("div", {
    className: 'login-sign clearfix'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/regist',
      query: {
        type: 'user'
      }
    },
    replace: true
  }, __jsx("a", {
    className: 'red fr'
  }, "\u6CE8\u518C")), __jsx("span", {
    className: 'fr mr5'
  }, "\u6CA1\u6709\u8D26\u53F7\uFF1F")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserBox);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "ftty":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h0lC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nrc/");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("eW3l");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wWjF");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rOcY");







axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = _config__WEBPACK_IMPORTED_MODULE_6__[/* baseURL */ "a"];
axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.timeout = 10000;
axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
delete axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common.Authorization;
delete axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.get.Authorization; // application/x-www-form-urlencoded
//添加请求拦截器

axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.request.use(function (config) {
  Object(_loading__WEBPACK_IMPORTED_MODULE_3__[/* showLoading */ "b"])();

  if (config.method === 'post') {
    config.data = qs__WEBPACK_IMPORTED_MODULE_4___default.a.stringify(config.data);
  }

  return config;
}, function (error) {
  //请求错误时做些事
  Object(_loading__WEBPACK_IMPORTED_MODULE_3__[/* hideLoading */ "a"])();

  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('请求异常，请稍后重试！');

  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
}); //添加一个响应拦截器

axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.response.use(function (response) {
  Object(_loading__WEBPACK_IMPORTED_MODULE_3__[/* hideLoading */ "a"])();
  return response;
}, function () {
  Object(_loading__WEBPACK_IMPORTED_MODULE_3__[/* hideLoading */ "a"])(); // 4.系统错误，比如500、404等

  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('系统异常，请稍后重试！');

  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject({
    messageCode: 'sysError'
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (axios__WEBPACK_IMPORTED_MODULE_2___default.a);

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hp93":
/***/ (function(module, exports) {

module.exports = require("antd/lib/index");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "i5qa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGOUT; });
/* unused harmony export INIT_COOKIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// data.js

 // 创建 context

const DataContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])({}); // 定义 参数
// let state = {
//     id: 1234,
//     token: Cookies.get('token') || '',
//     user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : '',
//     bis: Cookies.get('bis') ? JSON.parse(Cookies.get('bis')) : '',
//     loading: false,
// };

const initState = cookies => {
  let state = {
    id: 1234,
    token: '',
    user: '',
    bis: '',
    loading: false
  };
  cookies.token && (state.token = cookies.token);
  cookies.user && (state.user = JSON.parse(cookies.user));
  cookies.bis && (state.bis = JSON.parse(cookies.bis));
  return state;
}; // reducer


const UPDATE_ID = "UPDATE_ID";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const INIT_COOKIES = "INIT_COOKIES";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ID:
      state.id += _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(action.id) || 1;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state);
      break;

    case LOGIN:
      state.token = action.token;
      state.user = action.user || '';
      state.bis = action.bis || '';
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('token', action.token, {
        expires: 7
      }); // 失效时间7天

      !action.user ? js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('user', {
        path: ''
      }) : js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('user', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(action.user), {
        expires: 7
      }); // 对整个站点有效

      !action.bis ? js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('bis', {
        path: ''
      }) : js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('bis', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(action.bis), {
        expires: 7
      }); //对当前路径有效

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state);
      break;

    case LOGOUT:
      state.token = '';
      state.user = '';
      state.bis = '';
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('token', {
        path: ''
      }); // fail!

      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('user', {
        path: ''
      }); // removed!

      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('bis', {
        path: ''
      }); // removed!

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state);
      break;

    case INIT_COOKIES:
      if (action.cookies) {
        let objArr = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(action.cookies);

        objArr.forEach((value, indx) => {
          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set(value, action.cookies[value], {
            expires: 7
          });
        });
      }

      return;
      break;

    default:
      return state;
  }
};
/**
 * 创建一个 Data 组件
 * Data 组件包裹的所有子组件都可以通过调用 DataContext 访问到 value
 */


const Data = props => {
  const {
    0: data,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(reducer, initState(props.cookies));
  return __jsx(DataContext.Provider, {
    value: {
      data,
      dispatch
    }
  }, props.children);
};

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k3dD":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nrc/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hideLoading; });
const showLoading = () => {
  try {
    document.getElementById('loading').style.display = 'block';
  } catch (err) {}
};
const hideLoading = () => {
  try {
    document.getElementById('loading').style.display = 'none';
  } catch (err) {}
};

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oP+x":
/***/ (function(module, exports) {



/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rLQ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/MyHead/index.js
var MyHead = __webpack_require__("4+Qy");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// EXTERNAL MODULE: ./components/Header/less/headerTop.less
var headerTop = __webpack_require__("yG59");

// CONCATENATED MODULE: ./components/Header/components/Login.js

var __jsx = external_react_default.a.createElement;


const Login = () => __jsx("div", {
  className: 'inlineBlock'
}, __jsx(link_default.a, {
  href: {
    pathname: '/login',
    query: {
      type: 'user'
    }
  },
  replace: true
}, __jsx("a", {
  className: 'red'
}, "\u7528\u6237\u767B\u5F55")), __jsx("span", {
  className: 'line'
}), __jsx(link_default.a, {
  href: {
    pathname: '/login',
    query: {
      type: 'bis'
    }
  },
  replace: true
}, __jsx("a", null, "\u5546\u5BB6\u767B\u5F55")), __jsx("span", {
  className: 'line'
}), __jsx(link_default.a, {
  href: {
    pathname: '/regist',
    query: {
      type: 'user'
    }
  },
  replace: true
}, __jsx("a", {
  className: 'red'
}, "\u514D\u8D39\u6CE8\u518C")));

/* harmony default export */ var components_Login = (Login);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/data.js
var store_data = __webpack_require__("i5qa");

// CONCATENATED MODULE: ./components/Header/components/User.js

var User_jsx = external_react_default.a.createElement;





const User = () => {
  let {
    data,
    dispatch
  } = Object(external_react_["useContext"])(store_data["b" /* DataContext */]);

  const Logout = () => {
    dispatch({
      type: store_data["d" /* LOGOUT */]
    });
    router_default.a.replace('/');
  };

  return User_jsx("div", {
    className: 'top_pm'
  }, User_jsx(link_default.a, {
    href: {
      pathname: '/user'
    },
    replace: true
  }, User_jsx("a", {
    className: 'top-nickname',
    title: data.user.name
  }, User_jsx("span", {
    className: 'sk_name'
  }, data.user.name), User_jsx("i", {
    className: 'top-down'
  }))), User_jsx("div", {
    className: 'top-toggle'
  }, User_jsx("a", {
    onClick: Logout
  }, User_jsx("i", {
    className: 'exit'
  }), "\u9000\u51FA")), User_jsx("span", {
    className: 'line'
  }));
};

/* harmony default export */ var components_User = (User);
// CONCATENATED MODULE: ./components/Header/components/Bis.js

var Bis_jsx = external_react_default.a.createElement;





const Bis = () => {
  let {
    data,
    dispatch
  } = Object(external_react_["useContext"])(store_data["b" /* DataContext */]);

  const Logout = () => {
    dispatch({
      type: store_data["d" /* LOGOUT */]
    });
    router_default.a.replace('/');
  };

  return Bis_jsx("div", {
    className: 'top_pm'
  }, Bis_jsx(link_default.a, {
    href: {
      pathname: '/bis'
    },
    replace: true
  }, Bis_jsx("a", {
    className: 'top-nickname',
    title: data.bis.name
  }, Bis_jsx("span", {
    className: 'sk_name'
  }, data.bis.name), Bis_jsx("i", {
    className: 'top-down'
  }))), Bis_jsx("div", {
    className: 'top-toggle'
  }, Bis_jsx("a", {
    onClick: Logout
  }, Bis_jsx("i", {
    className: 'exit'
  }), "\u9000\u51FA")), Bis_jsx("span", {
    className: 'line'
  }));
};

/* harmony default export */ var components_Bis = (Bis);
// CONCATENATED MODULE: ./components/Header/components/Box.js

var Box_jsx = external_react_default.a.createElement;






const Box = ({
  cookies
}) => {
  let {
    data,
    dispatch
  } = Object(external_react_["useContext"])(store_data["b" /* DataContext */]);

  if (!data.token) {
    return Box_jsx(components_Login, null);
  } else if (data.user) {
    return Box_jsx(components_User, null);
  } else if (data.bis) {
    return Box_jsx(components_Bis, null);
  } else {
    return Box_jsx(components_Login, null);
  }
};

/* harmony default export */ var components_Box = (Box);
// CONCATENATED MODULE: ./components/Header/headerTop.js

var headerTop_jsx = external_react_default.a.createElement;





const Index = props => {
  return headerTop_jsx("div", {
    className: 'header-top'
  }, headerTop_jsx("div", {
    className: 'header-main clearfix'
  }, headerTop_jsx("div", {
    className: 'header-left'
  }, headerTop_jsx(components_Box, null), headerTop_jsx("a", {
    className: 'qq'
  }, "\u5728\u7EBF\u5BA2\u670D"), headerTop_jsx("div", {
    className: "xingxing"
  }, headerTop_jsx("i", {
    className: 'iconfont icon-xingxing'
  }), "\u6536\u85CF", headerTop_jsx("div", {
    className: 'shou_toggle'
  }, headerTop_jsx("span", null, "Ctrl"), "\u6216", headerTop_jsx("span", null, "Cmd+D"), "\u6536\u85CF\u672C\u7AD9"))), headerTop_jsx("div", {
    className: 'header-right'
  }, headerTop_jsx(link_default.a, {
    href: {
      pathname: '/'
    },
    replace: true
  }, headerTop_jsx("a", {
    className: 'red'
  }, config["b" /* name */], "\u9996\u9875")), headerTop_jsx("span", {
    className: 'line'
  }), headerTop_jsx("a", null, "\u91D1\u5E01\u62BD\u5956"), headerTop_jsx("span", {
    className: 'line'
  }), headerTop_jsx("a", null, "\u610F\u89C1\u53CD\u9988"), headerTop_jsx("span", {
    className: 'line'
  }), headerTop_jsx("a", null, "\u5E2E\u52A9\u4E2D\u5FC3"))));
};

/* harmony default export */ var Header_headerTop = (Index);
// EXTERNAL MODULE: ./components/Footer/less/white.less
var white = __webpack_require__("Tv70");

// CONCATENATED MODULE: ./components/Footer/white.js

var white_jsx = external_react_default.a.createElement;




const white_Index = () => white_jsx("div", {
  className: 'footer'
}, white_jsx("div", {
  className: 'footer_main'
}, white_jsx("div", {
  className: 'fl'
}, white_jsx("div", {
  className: 'footer_xy'
}, white_jsx("a", null, "\u8054\u7CFB\u6211\u4EEC"), white_jsx("span", null, "|"), white_jsx("a", null, "\u5546\u52A1\u5408\u4F5C"), white_jsx("span", null, "|"), white_jsx("a", null, "\u7528\u6237\u534F\u8BAE"), white_jsx("span", null, "|"), white_jsx("a", null, "\u5E2E\u52A9\u4E2D\u5FC3")), white_jsx("div", {
  className: 'footer_fl'
}, white_jsx("span", null, "Copyright \xA9 2018 baidu.com"), "\u7696ICP\u590712345678\u53F7-1 \xA0\xA0 \u7696\u516C\u7F51\u5B89\u5907 12345678901234\u53F7   \xA0\xA0", config["b" /* name */], "\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8")), white_jsx("div", {
  className: 'fr ac'
}, white_jsx("p", {
  className: 'footer-right-p'
}, "\u5173\u6CE8", config["b" /* name */], "\u516C\u4F17\u53F7"), white_jsx("img", {
  className: 'footer-right-img',
  src: "/static/img/yonghu_code.png"
}))));

/* harmony default export */ var Footer_white = (white_Index);
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__("Y0NT");

// EXTERNAL MODULE: ./less/base/index.less
var base = __webpack_require__("k3dD");

// EXTERNAL MODULE: ./components/Loading/index.js
var Loading = __webpack_require__("LAiw");

// CONCATENATED MODULE: ./layout/BaseLayout.js

var BaseLayout_jsx = external_react_default.a.createElement;







const Layout = props => {
  if (props.statusCode) {
    return BaseLayout_jsx(_error["default"], {
      statusCode: props.statusCode
    });
  }

  return BaseLayout_jsx("div", null, BaseLayout_jsx(MyHead["a" /* default */], {
    meta: props.meta
  }), BaseLayout_jsx(Header_headerTop, null), props.children, BaseLayout_jsx(Footer_white, null), BaseLayout_jsx(Loading["a" /* default */], null));
};

/* harmony default export */ var BaseLayout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export errorMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return regExp; });
const errorMsg = {
  404: '找不到该页面哦',
  ECONNREFUSED: 'fetch请求失败，请联系我们'
};
const name = '提莫淘';
const baseURL = 'http://localhost:3001/api';
const regExp = {
  phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
  userNameReg: /^(?=.*[A-Za-z_\u4E00-\u9FA5])[A-Za-z0-9_\u4E00-\u9FA5]{3,15}$/,
  userPasReg: /^\w{6,16}$/,
  qqReg: /^\d{6,16}$/,
  initCodeReg: /^[\w\W]{6,16}$/,
  wxReg: /^[^\s]{6,20}$/,
  loginNameReg: /(^[1][3,4,5,6,7,8,9][0-9]{9}$)|(^(?=.*[A-Za-z_\u4E00-\u9FA5])[A-Za-z0-9_\u4E00-\u9FA5]{3,15}$)/
};

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vEvA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wCKx":
/***/ (function(module, exports) {



/***/ }),

/***/ "wWjF":
/***/ (function(module, exports) {



/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yG59":
/***/ (function(module, exports) {



/***/ }),

/***/ "yfTL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rLQ/");
/* harmony import */ var _less_pages_login_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ftty");
/* harmony import */ var _less_pages_login_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_less_pages_login_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoginBoxHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ayfs");
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("11Eh");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import loadable from '@loadable/component'
// const Layout = loadable(() => import('../layout/BaseLayout'))






const Home = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(props => {
  let type = props.router.query.type;

  if (type != 'user' && type != 'bis') {
    type = 'user';
  }

  let isUser = type == 'user' ? true : false;
  return __jsx(_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx("div", {
    className: 'regist-nav'
  }, __jsx("div", {
    className: 'main'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: {
      pathname: '/'
    }
  }, __jsx("a", {
    className: 'logo'
  })), __jsx("div", {
    className: 'line'
  }), __jsx("div", {
    className: 'sign'
  }, "\u6B22\u8FCE\u767B\u5F55"))), __jsx("div", {
    className: `login-main ${isUser ? 'user-main' : 'bis-main'}`
  }, __jsx("div", {
    className: 'login-content clearfix'
  }, __jsx("div", {
    className: 'login-box',
    id: "einfo_form"
  }, __jsx(_components_LoginBoxHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isUser: isUser
  }), __jsx(_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isUser: isUser
  })))));
});

Home.getInitialProps = async function (context) {
  const {
    type
  } = context.query; // 获取参数

  return {
    type
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });