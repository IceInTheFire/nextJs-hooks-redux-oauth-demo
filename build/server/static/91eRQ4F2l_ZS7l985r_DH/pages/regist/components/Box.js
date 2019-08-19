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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("S3CM");


/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

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

/***/ "IEXD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rOcY");
/* harmony import */ var _components_Valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IpdT");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wWjF");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5__);





const {
  phoneReg,
  userNameReg,
  userPasReg,
  qqReg,
  initCodeReg
} = _config__WEBPACK_IMPORTED_MODULE_3__[/* regExp */ "c"];



const UserBox = props => {
  const firstRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const rightRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const secondRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const successRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const phoneRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const codeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const userNameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const userPasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const userQqRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const userInvitCodeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const [openEye, setOpenEye] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onClickEye = () => {
    setOpenEye(!openEye);
  };

  const firstStepClick = () => {
    let phoneBool = phoneRef.current.check();
    let codeBool = codeRef.current.check();

    if (!phoneBool || !codeBool) {
      return;
    }

    let phone = phoneRef.current.getVal();
    let code = codeRef.current.getVal();
    console.log(phone);
    console.log(code);
    firstRef.current.style.display = "none";
    secondRef.current.style.display = "block";
    setStep(step + 1);
  }; // useEffect(()=>{
  //     firstRef.current.style.display = "none";
  //     secondRef.current.style.display = "block";
  //     setStep( step+1 );
  // } , []);    //空数组就是只执行一次


  const secondSubmit = () => {
    let userNameBool = userNameRef.current.check();
    let userPasBool = userPasRef.current.check();
    let userQqBool = userQqRef.current.check();
    let userInvitCodeBool = userInvitCodeRef.current.check();

    if (!userNameBool || !userPasBool || !userQqBool || !userInvitCodeBool) {
      return;
    }

    let userName = userNameRef.current.getVal();
    let userPas = userPasRef.current.getVal();
    let userQq = userQqRef.current.getVal();
    let userInvitCode = userInvitCodeRef.current.getVal();

    antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warn('暂未开放注册功能，敬请期待');

    return;
    rightRef.current.style.display = "none";
    successRef.current.style.display = "block";
    setStep(step + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'content'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: rightRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'left'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/regist-user.png"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'right'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'step'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: 'act'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " 1 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u9A8C\u8BC1\u624B\u673A\u53F7")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'step-arrow'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: step >= 2 ? 'act' : ''
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " 2 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u586B\u5199\u8D26\u53F7\u4FE1\u606F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'step-arrow'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: step >= 3 ? 'act' : ''
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " 3 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u6CE8\u518C\u6210\u529F"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: firstRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanClass: 'regist-input-86',
    spanTitle: '+86',
    inputStyle: {
      'width': '321px'
    },
    inputPlaceholder: '建议使用常用手机号',
    inputType: 'text',
    regExp: phoneReg,
    nullMsg: '请填写手机号码',
    errorMsg: '请正确输入手机号码',
    ref: phoneRef,
    onEnter: firstStepClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '手机验证码',
    inputStyle: {
      'width': '153px'
    },
    inputPlaceholder: '输入验证码',
    inputType: 'text',
    nullMsg: '请填写手机验证码',
    ref: codeRef,
    onEnter: firstStepClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: 'regist-input-btn',
    onClick: () => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warning('目前没有验证码，请随便输');
    }
  }, "\u83B7\u53D6\u9A8C\u8BC1\u7801")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'regist-btn',
    onClick: firstStepClick
  }, "\u4E0B\u4E00\u6B65")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'hide',
    ref: secondRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '用户名',
    inputMaxLength: "15",
    inputPlaceholder: '请设置用户名',
    inputType: 'text',
    regExp: userNameReg,
    nullMsg: '请填写用户名',
    errorMsg: '3-15位，支持汉字、数字、字母、下划线组合，不能为纯数字！',
    ref: userNameRef,
    onEnter: secondSubmit
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '设置密码',
    inputMaxLength: "16",
    inputPlaceholder: '请设置密码',
    inputType: openEye ? 'text' : 'password',
    regExp: userPasReg,
    nullMsg: '请填写密码',
    errorMsg: '请填写6到16位字符！',
    ref: userPasRef,
    onEnter: secondSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'iconfont ' + (openEye ? 'icon-zhengyan' : 'icon-biyan'),
    onClick: onClickEye
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanClass: 'regist-input-span',
    spanTitle: 'QQ',
    inputPlaceholder: '请输入QQ',
    inputType: 'text',
    regExp: qqReg,
    nullMsg: '请输入您的QQ',
    errorMsg: '请正确输入QQ！',
    ref: userQqRef,
    onEnter: secondSubmit
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanClass: 'regist-input-span',
    spanTitle: '邀请码',
    inputPlaceholder: '请输入邀请码',
    inputType: 'text',
    regExp: initCodeReg,
    nullMsg: '请输入邀请码',
    errorMsg: '请正确输入邀请码！',
    ref: userInvitCodeRef,
    onEnter: secondSubmit
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'regist-btn',
    onClick: secondSubmit
  }, "\u63D0\u4EA4")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'success hide',
    ref: successRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: 'iconfont icon-tick'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u606D\u559C\u60A8\u6210\u529F\u6CE8\u518C\u4E3A\u63D0\u83AB\u6DD8\u5BA2\u7528\u6237~")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserBox);

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

/***/ "S3CM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IEXD");
/* harmony import */ var _BisBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tRpu");






const Box = props => {
  const {
    isUser
  } = props;

  if (isUser) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserBox__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BisBox__WEBPACK_IMPORTED_MODULE_3__["default"], null); // return "";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ "tRpu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rOcY");
/* harmony import */ var _components_Valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IpdT");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wWjF");
/* harmony import */ var antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_index_less__WEBPACK_IMPORTED_MODULE_5__);





const {
  phoneReg,
  userNameReg,
  userPasReg,
  qqReg,
  initCodeReg
} = _config__WEBPACK_IMPORTED_MODULE_3__[/* regExp */ "c"];



const BisBox = props => {
  const firstRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const rightRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const secondRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const successRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const phoneRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const codeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const bisNameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const bisPasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const bisQqRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const bisWxRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const bisInvitCodeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const [openEye, setOpenEye] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // useEffect(() => {
  //     firstRef.current.style.display = "none";
  //     secondRef.current.style.display = "block";
  //     setStep( step+1 );
  // }, []);

  const onClickEye = () => {
    setOpenEye(!openEye);
  };

  const firstStepClick = e => {
    let phoneBool = phoneRef.current.check();
    let codeBool = codeRef.current.check();

    if (!phoneBool || !codeBool) {
      return;
    }

    let phone = phoneRef.current.getVal();
    let code = codeRef.current.getVal();
    console.log(phone);
    console.log(code);
    firstRef.current.style.display = "none";
    secondRef.current.style.display = "block";
    setStep(step + 1);
  };

  const secondSubmit = () => {
    let bisNameBool = bisNameRef.current.check();
    let bisPasBool = bisPasRef.current.check();
    let bisQqBool = bisQqRef.current.check();
    let bisWxBool = bisWxRef.current.check();
    let bisInvitCodeBool = bisInvitCodeRef.current.check();

    if (!bisNameBool || !bisPasBool || !bisQqBool || !bisWxBool || !bisInvitCodeBool) {
      return;
    }

    let bisName = bisNameRef.current.getVal();
    let bisPas = bisPasRef.current.getVal();
    let bisQq = bisQqRef.current.getVal();
    let bisWx = bisWxRef.current.getVal();
    let bisInvitCode = bisInvitCodeRef.current.getVal();

    antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warn('暂未开放注册功能，敬请期待');

    return;
    rightRef.current.style.display = "none";
    successRef.current.style.display = "block";
    setStep(step + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'content'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: rightRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'left'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/bis1.png"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'right'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'step'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: step >= 1 ? 'act' : ''
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " 1 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u9A8C\u8BC1\u624B\u673A\u53F7")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'step-arrow'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: step >= 2 ? 'act' : ''
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " 2 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u586B\u5199\u8D26\u53F7\u4FE1\u606F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'step-arrow'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: step >= 3 ? 'act' : ''
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " 3 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u6CE8\u518C\u6210\u529F"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: firstRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanClass: 'regist-input-86',
    spanTitle: '+86',
    inputStyle: {
      'width': '321px'
    },
    inputPlaceholder: '建议使用常用手机号',
    inputType: 'text',
    regExp: phoneReg,
    nullMsg: '请填写手机号码',
    errorMsg: '请正确输入手机号码',
    ref: phoneRef,
    onEnter: firstStepClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '手机验证码',
    inputStyle: {
      'width': '153px'
    },
    inputPlaceholder: '输入验证码',
    inputType: 'text',
    nullMsg: '请填写手机验证码',
    ref: codeRef,
    onEnter: firstStepClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: 'regist-input-btn',
    onClick: () => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warn('目前没有验证码，请随便输');
    }
  }, "\u83B7\u53D6\u9A8C\u8BC1\u7801")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'regist-btn',
    onClick: firstStepClick
  }, "\u4E0B\u4E00\u6B65")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: secondRef,
    className: 'hide'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '用户名',
    inputMaxLength: "15",
    inputPlaceholder: '请设置用户名',
    inputType: 'text',
    regExp: userNameReg,
    nullMsg: '请填写用户名',
    errorMsg: '3-15位，支持汉字、数字、字母、下划线组合，不能为纯数字！',
    ref: bisNameRef,
    onEnter: secondSubmit
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '设置密码',
    inputMaxLength: "16",
    inputPlaceholder: '请设置密码',
    inputType: openEye ? 'text' : 'password',
    regExp: userPasReg,
    nullMsg: '请填写密码',
    errorMsg: '请填写6到16位字符！',
    ref: bisPasRef,
    onEnter: secondSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'iconfont ' + (openEye ? 'icon-zhengyan' : 'icon-biyan'),
    onClick: onClickEye
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: 'QQ',
    inputPlaceholder: '请输入QQ',
    inputType: 'text',
    regExp: qqReg,
    nullMsg: '请输入您的QQ',
    errorMsg: '请正确输入QQ！',
    ref: bisQqRef,
    onEnter: secondSubmit
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '微信',
    inputPlaceholder: '请输入微信号',
    inputType: 'text',
    nullMsg: '请输入微信号',
    ref: bisWxRef,
    onEnter: secondSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: 'wx-look'
  }, "\u67E5\u770B\u793A\u4F8B", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/weixinhao.png"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Valid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: 'regist-input',
    spanTitle: '邀请码',
    inputPlaceholder: '请输入邀请码',
    inputType: 'text',
    regExp: initCodeReg,
    nullMsg: '请输入邀请码',
    errorMsg: '请正确输入邀请码！',
    ref: bisInvitCodeRef,
    onEnter: secondSubmit
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'regist-btn',
    onClick: secondSubmit
  }, "\u63D0\u4EA4")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'success hide',
    ref: successRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: 'iconfont icon-tick'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u606D\u559C\u60A8\u6210\u529F\u6CE8\u518C\u4E3A\u63D0\u83AB\u6DD8\u5BA2\u5546\u5BB6~")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'bis-sign'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'bis-kuai'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/bis2.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u65FA\u65FA\u8D26\u53F7\u9A8C\u8BC1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u6240\u6709\u4E70\u5BB6\u6CE8\u518C\u8BD5\u5BA2\u8D26\u53F7\u65F6\u9700\u9A8C\u53F7\uFF0C\u4FDD\u8BC1\u6BCF\u4E2A\u8D26\u53F7\u5B89\u5168\uFF0C\u6807\u7B7E\u7CBE\u51C6\uFF0C\u6743\u91CD\u9AD8\uFF0C\u9A8C\u8BC1\u6027\u522B/\u5E74\u9F84/\u6DD8\u6C14\u503C/\u8D2D\u4E70\u8BB0\u5F55/\u8D2D\u4E70\u5C42\u7EA7/\u6807\u7B7E\u3002")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'bis-kuai'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/bis3.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u7528\u6237\u64CD\u4F5C\u884C\u4E3A\u53EF\u63A7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u5546\u5BB6\u53EF\u5728\u63D0\u83AB\u6DD8\u5BA2\u540E\u53F0\u770B\u5230\u7528\u6237\u7684\u4E0B\u5355\u6D41\u7A0B\u53CA\u6D4F\u89C8\u8F68\u8FF9\u3001\u641C\u7D22\u5173\u952E\u8BCD\u3001\u6536\u85CF\u3001\u52A0\u8D2D\u3001\u8D27\u6BD4\u591A\u5BB6\u3001\u8BBF\u95EE\u526F\u5B9D\u8D1D\u3001\u8BC4\u4EF7\u3001\u6652\u56FE\u3001\u6652\u89C6\u9891\u3001\u624B\u6DD8\u95EE\u5927\u5BB6 \u7B49\u7B49\u3002")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'bis-kuai'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/bis4.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u5173\u952E\u8BCD\u641C\u7D22\u6D41\u7A0B\u6838\u5B9E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u7528\u6237\u9700\u8981\u5C06\u6307\u5B9A\u5173\u952E\u8BCD\u641C\u7D22\u7684\u622A\u56FE\u4E0A\u4F20\u81F3\u540E\u53F0\u4F9B\u5546\u5BB6\u53CA\u7CFB\u7EDF\u5BA1\u6838\uFF0C\u786E\u4FDD100%\u5173\u952E\u8BCD\u88AB\u641C\u7D22\u8FC7\uFF0C\u589E\u52A0\u5173\u952E\u8BCD\u641C\u7D22\u6743\u91CD\uFF0C\u4ECE\u800C\u63D0\u5347\u5173\u952E\u8BCD\u6392\u540D\u3002")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'bis-kuai'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/bis5.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u6307\u5B9A\u624B\u6DD8\u95EE\u5927\u5BB6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u5546\u5BB6\u53EF\u4EE5\u6307\u5B9A\u8BA9\u7528\u6237\u53BB\u6DD8\u5B9DAPP\u63D0\u95EE\u95EE\u9898\u3001\u56DE\u7B54\u95EE\u9898\u3001\u70B9\u8D5E\u7B54\u6848\u3001\u8BC4\u8BBA\u7B54\u6848\u3002\u4E70\u5BB6\u901A\u8FC7\u5206\u4EAB\u53EF\u5E2E\u52A9\u5E97\u94FA\u514D\u8D39\u5BA3\u4F20\uFF0C\u540C\u65F6\u4E5F\u80FD\u6709\u6548\u589E\u5F3A\u6D88\u8D39\u8005\u8D2D\u4E70\u6B32\u3002")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'bis-kuai'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/bis6.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u5B89\u5168\u4E0D\u964D\u6743"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u7528\u6237\u5747\u4E3A\u63D0\u83AB\u6DD8\u5BA2\u7528\u6237\u901A\u8FC7\u5C0F\u533A\u3001\u5730\u94C1\u7AD9\u3001\u5B66\u6821\u7B49\u5730\u63A8\u9080\u8BF7\u8FDB\u6765\uFF0C\u5747\u4E3A\u5E73\u5E38\u6DD8\u5B9D\u4E3B\u8981\u8D2D\u7269\u4EBA\u7FA4\u3002\u6CE8\u518C\u540E\uFF0C\u63D0\u83AB\u6DD8\u5BA2\u4F1A\u6293\u53D6\u4E70\u5BB6\u5E10\u53F7\u4FE1\u606F\uFF0C\u7B5B\u9009\u771F\u5B9E\u7528\u6237\u4F5C\u4E3A\u5E73\u53F0\u8BD5\u5BA2\u3002"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BisBox);

/***/ }),

/***/ "wWjF":
/***/ (function(module, exports) {



/***/ })

/******/ });