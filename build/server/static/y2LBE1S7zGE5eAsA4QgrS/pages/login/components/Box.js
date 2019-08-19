module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

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






const Box = props => {
  const {
    isUser
  } = props;

  if (isUser) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserBox__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BisBox__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("11Eh");


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
  const [val, setVal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [valMsg, setValMsg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

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
    inputDom = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
    inputDom = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: ref
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: spanClass,
    style: spanStyle
  }, spanTitle), inputDom, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "bisBox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'login-sign clearfix'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/Security/FindPassword',
      query: {
        type: 'bis'
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: 'fr'
  }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'login-btn'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: bisLogin
  }, "\u767B\u5F55")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'login-sign clearfix'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/regist',
      query: {
        type: 'bis'
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: 'red fr'
  }, "\u6CE8\u518C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: 'fr mr5'
  }, "\u6CA1\u6709\u8D26\u53F7\uFF1F")));
};

/* harmony default export */ __webpack_exports__["default"] = (BisBox);

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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
const IntersectionObserver =  false ? undefined : null;

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
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

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
        // ignore click if it's outside our scope
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
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

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
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
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
Link.defaultProps = {
  prefetch: true
};

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "userBox"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: 'login-sign clearfix'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/Security/FindPassword',
      query: {
        type: 'user'
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: 'fr'
  }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: 'login-btn'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    onClick: userLogin
  }, "\u767B\u5F55")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: 'login-sign clearfix'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/regist',
      query: {
        type: 'user'
      }
    },
    replace: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: 'red fr'
  }, "\u6CE8\u518C")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: 'fr mr5'
  }, "\u6CA1\u6709\u8D26\u53F7\uFF1F")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserBox);

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./store/data.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGOUT; });
/* unused harmony export INIT_COOKIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });





// data.js

 // 创建 context

const DataContext = Object(external_react_["createContext"])({}); // 定义 参数
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
      state.id += parse_int_default()(action.id) || 1;
      return _objectSpread({}, state);
      break;

    case LOGIN:
      state.token = action.token;
      state.user = action.user || '';
      state.bis = action.bis || '';
      external_js_cookie_default.a.set('token', action.token, {
        expires: 7
      }); // 失效时间7天

      !action.user ? external_js_cookie_default.a.remove('user', {
        path: ''
      }) : external_js_cookie_default.a.set('user', stringify_default()(action.user), {
        expires: 7
      }); // 对整个站点有效

      !action.bis ? external_js_cookie_default.a.remove('bis', {
        path: ''
      }) : external_js_cookie_default.a.set('bis', stringify_default()(action.bis), {
        expires: 7
      }); //对当前路径有效

      return _objectSpread({}, state);
      break;

    case LOGOUT:
      state.token = '';
      state.user = '';
      state.bis = '';
      external_js_cookie_default.a.remove('token', {
        path: ''
      }); // fail!

      external_js_cookie_default.a.remove('user', {
        path: ''
      }); // removed!

      external_js_cookie_default.a.remove('bis', {
        path: ''
      }); // removed!

      return _objectSpread({}, state);
      break;

    case INIT_COOKIES:
      if (action.cookies) {
        let objArr = keys_default()(action.cookies);

        objArr.forEach((value, indx) => {
          external_js_cookie_default.a.set(value, action.cookies[value], {
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
  const [data, dispatch] = Object(external_react_["useReducer"])(reducer, initState(props.cookies));
  return external_react_default.a.createElement(DataContext.Provider, {
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

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

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

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
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
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
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

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wWjF":
/***/ (function(module, exports) {



/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });