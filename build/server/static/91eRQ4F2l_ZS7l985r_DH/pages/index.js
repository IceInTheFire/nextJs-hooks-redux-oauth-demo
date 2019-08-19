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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3FW/":
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



const Login = () => external_react_default.a.createElement("div", {
  className: 'inlineBlock'
}, external_react_default.a.createElement(link_default.a, {
  href: {
    pathname: '/login',
    query: {
      type: 'user'
    }
  },
  replace: true
}, external_react_default.a.createElement("a", {
  className: 'red'
}, "\u7528\u6237\u767B\u5F55")), external_react_default.a.createElement("span", {
  className: 'line'
}), external_react_default.a.createElement(link_default.a, {
  href: {
    pathname: '/login',
    query: {
      type: 'bis'
    }
  },
  replace: true
}, external_react_default.a.createElement("a", null, "\u5546\u5BB6\u767B\u5F55")), external_react_default.a.createElement("span", {
  className: 'line'
}), external_react_default.a.createElement(link_default.a, {
  href: {
    pathname: '/regist',
    query: {
      type: 'user'
    }
  },
  replace: true
}, external_react_default.a.createElement("a", {
  className: 'red'
}, "\u514D\u8D39\u6CE8\u518C")));

/* harmony default export */ var components_Login = (Login);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/data.js + 2 modules
var store_data = __webpack_require__("i5qa");

// CONCATENATED MODULE: ./components/Header/components/User.js






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

  return external_react_default.a.createElement("div", {
    className: 'top_pm'
  }, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/user'
    },
    replace: true
  }, external_react_default.a.createElement("a", {
    className: 'top-nickname',
    title: data.user.name
  }, external_react_default.a.createElement("span", {
    className: 'sk_name'
  }, data.user.name), external_react_default.a.createElement("i", {
    className: 'top-down'
  }))), external_react_default.a.createElement("div", {
    className: 'top-toggle'
  }, external_react_default.a.createElement("a", {
    onClick: Logout
  }, external_react_default.a.createElement("i", {
    className: 'exit'
  }), "\u9000\u51FA")), external_react_default.a.createElement("span", {
    className: 'line'
  }));
};

/* harmony default export */ var components_User = (User);
// CONCATENATED MODULE: ./components/Header/components/Bis.js






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

  return external_react_default.a.createElement("div", {
    className: 'top_pm'
  }, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/bis'
    },
    replace: true
  }, external_react_default.a.createElement("a", {
    className: 'top-nickname',
    title: data.bis.name
  }, external_react_default.a.createElement("span", {
    className: 'sk_name'
  }, data.bis.name), external_react_default.a.createElement("i", {
    className: 'top-down'
  }))), external_react_default.a.createElement("div", {
    className: 'top-toggle'
  }, external_react_default.a.createElement("a", {
    onClick: Logout
  }, external_react_default.a.createElement("i", {
    className: 'exit'
  }), "\u9000\u51FA")), external_react_default.a.createElement("span", {
    className: 'line'
  }));
};

/* harmony default export */ var components_Bis = (Bis);
// CONCATENATED MODULE: ./components/Header/components/Box.js







const Box = ({
  cookies
}) => {
  let {
    data,
    dispatch
  } = Object(external_react_["useContext"])(store_data["b" /* DataContext */]);

  if (!data.token) {
    return external_react_default.a.createElement(components_Login, null);
  } else if (data.user) {
    return external_react_default.a.createElement(components_User, null);
  } else if (data.bis) {
    return external_react_default.a.createElement(components_Bis, null);
  } else {
    return external_react_default.a.createElement(components_Login, null);
  }
};

/* harmony default export */ var components_Box = (Box);
// CONCATENATED MODULE: ./components/Header/headerTop.js






const Index = props => {
  return external_react_default.a.createElement("div", {
    className: 'header-top'
  }, external_react_default.a.createElement("div", {
    className: 'header-main clearfix'
  }, external_react_default.a.createElement("div", {
    className: 'header-left'
  }, external_react_default.a.createElement(components_Box, null), external_react_default.a.createElement("a", {
    className: 'qq'
  }, "\u5728\u7EBF\u5BA2\u670D"), external_react_default.a.createElement("div", {
    className: "xingxing"
  }, external_react_default.a.createElement("i", {
    className: 'iconfont icon-xingxing'
  }), "\u6536\u85CF", external_react_default.a.createElement("div", {
    className: 'shou_toggle'
  }, external_react_default.a.createElement("span", null, "Ctrl"), "\u6216", external_react_default.a.createElement("span", null, "Cmd+D"), "\u6536\u85CF\u672C\u7AD9"))), external_react_default.a.createElement("div", {
    className: 'header-right'
  }, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/'
    },
    replace: true
  }, external_react_default.a.createElement("a", {
    className: 'red'
  }, config["b" /* name */], "\u9996\u9875")), external_react_default.a.createElement("span", {
    className: 'line'
  }), external_react_default.a.createElement("a", null, "\u91D1\u5E01\u62BD\u5956"), external_react_default.a.createElement("span", {
    className: 'line'
  }), external_react_default.a.createElement("a", null, "\u610F\u89C1\u53CD\u9988"), external_react_default.a.createElement("span", {
    className: 'line'
  }), external_react_default.a.createElement("a", null, "\u5E2E\u52A9\u4E2D\u5FC3"))));
};

/* harmony default export */ var Header_headerTop = (Index);
// EXTERNAL MODULE: ./components/Footer/less/white.less
var white = __webpack_require__("Tv70");

// CONCATENATED MODULE: ./components/Footer/white.js





const white_Index = () => external_react_default.a.createElement("div", {
  className: 'footer'
}, external_react_default.a.createElement("div", {
  className: 'footer_main'
}, external_react_default.a.createElement("div", {
  className: 'fl'
}, external_react_default.a.createElement("div", {
  className: 'footer_xy'
}, external_react_default.a.createElement("a", null, "\u8054\u7CFB\u6211\u4EEC"), external_react_default.a.createElement("span", null, "|"), external_react_default.a.createElement("a", null, "\u5546\u52A1\u5408\u4F5C"), external_react_default.a.createElement("span", null, "|"), external_react_default.a.createElement("a", null, "\u7528\u6237\u534F\u8BAE"), external_react_default.a.createElement("span", null, "|"), external_react_default.a.createElement("a", null, "\u5E2E\u52A9\u4E2D\u5FC3")), external_react_default.a.createElement("div", {
  className: 'footer_fl'
}, external_react_default.a.createElement("span", null, "Copyright \xA9 2018 baidu.com"), "\u7696ICP\u590712345678\u53F7-1 \xA0\xA0 \u7696\u516C\u7F51\u5B89\u5907 12345678901234\u53F7   \xA0\xA0", config["b" /* name */], "\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8")), external_react_default.a.createElement("div", {
  className: 'fr'
}, external_react_default.a.createElement("p", {
  className: 'footer-right-p'
}, "\u5173\u6CE8", config["b" /* name */], "\u516C\u4F17\u53F7"), external_react_default.a.createElement("img", {
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

// CONCATENATED MODULE: ./layout/baseLayout.js








const Layout = props => {
  if (props.statusCode) {
    return external_react_default.a.createElement(_error["default"], {
      statusCode: props.statusCode
    });
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(MyHead["a" /* default */], {
    meta: props.meta
  }), external_react_default.a.createElement(Header_headerTop, null), props.children, external_react_default.a.createElement(Footer_white, null), external_react_default.a.createElement(Loading["a" /* default */], null));
};

/* harmony default export */ var baseLayout = __webpack_exports__["a"] = (Layout);

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





const defaultMeta = {
  title: `【${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}】-试客信赖的免费试用平台-全新模式快速提升排名-官网`,
  description: `${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}，全新的免费试用模式，试客可通过平台免费领 取试用品，包邮且无需返还，每天海量产品在线，每日上新近千款新品。商家可通过提莫试客平台轻 松提升关键词排名，快速打造爆款。`,
  keyword: `${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}|试客|免费试用|试用|试用网|免费试用网|${_config_index__WEBPACK_IMPORTED_MODULE_3__[/* name */ "b"]}试用网`,
  author: '灬安俱乐部--冰中焱'
};

const MyHead = props => {
  const hasMeta = props.meta;
  const [meta, setMeta] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(hasMeta ? _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(defaultMeta, props.meta) : defaultMeta);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge, chrome=1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "renderer",
    content: "webkit"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    httpEquiv: "description",
    content: meta.description
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "Keywords",
    content: meta.keyword
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: meta.author
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/iconfont/iconfont.css"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, meta.title));
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

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

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





const loading = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "loading"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'loading-center'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
    tip: "Loading..."
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (loading);

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_baseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3FW/");
/* harmony import */ var antd_lib_spin_style_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wCKx");
/* harmony import */ var antd_lib_spin_style_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i5qa");

// import loadable from '@loadable/component'
// const Layout = loadable(() => import('../layout/baseLayout'))

 // import Loading from '../components/loading'
// import { Spin } from 'antd';




function Home() {
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('提莫试客首页');
  const {
    data,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_data__WEBPACK_IMPORTED_MODULE_3__[/* DataContext */ "b"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_baseLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: () => {
      dispatch({
        type: _store_data__WEBPACK_IMPORTED_MODULE_3__[/* UPDATE_ID */ "e"],
        id: 5
      });
    }
  }, title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.user.name)));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'clearfix _error'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyHead__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      meta: meta
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'wrong'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/img/error.jpg"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'wrong_mian clearfix'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'wrong_left'
    }, "Error"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'wrong_right'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'wrong_top'
    }, "\u62B1\u6B49\uFF0C\u7A0B\u5E8F\u51FA\u9519\u4E86\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'wrong_ttt'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/'
      },
      replace: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "\u4E0D\u5982\u8BD5\u8BD5\uFF1A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/'
      },
      replace: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u5230", _config__WEBPACK_IMPORTED_MODULE_2__[/* name */ "b"], "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/'
      },
      replace: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u5230\u9996\u9875\u4E13\u533A")))))));
  }

}

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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "k3dD":
/***/ (function(module, exports) {



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

/***/ "oP+x":
/***/ (function(module, exports) {



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



/***/ })

/******/ });