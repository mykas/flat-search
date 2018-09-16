module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(5);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "react-i18next"
var external__react_i18next_ = __webpack_require__(1);
var external__react_i18next__default = /*#__PURE__*/__webpack_require__.n(external__react_i18next_);

// EXTERNAL MODULE: ./components/App/App.scss
var App_App = __webpack_require__(6);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(7);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: ./components/Layout/Header/header.scss
var header = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Layout/Header/Header.js
throw new Error("Cannot find module \"../../../assets/pirate.svg\"");





var Header_Header = function Header(_ref) {
  var t = _ref.t,
      dataHook = _ref.dataHook;
  return external__react__default.a.createElement("div", {
    "data-hook": dataHook,
    className: header["default"].header
  }, external__react__default.a.createElement("img", {
    alt: "pirate",
    width: "40",
    height: "40",
    src: __WEBPACK_IMPORTED_MODULE_2__assets_pirate_svg___default.a,
    className: header["default"].img
  }), external__react__default.a.createElement("h2", null, " ", t('app.title'), " "), ' ');
};

/* harmony default export */ var Layout_Header_Header = (Object(external__react_i18next_["translate"])(null, {
  wait: false
})(Header_Header));
// CONCATENATED MODULE: ./components/Card/Card.js
throw new Error("Cannot find module \"wix-style-react/Grid\"");



/* harmony default export */ var Card = (Object(external__react_i18next_["translate"])(null, {
  wait: true
})(function (_ref) {
  var ad = _ref.ad,
      t = _ref.t;
  return external__react__default.a.createElement("div", {
    "data-hook": "card"
  }, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Card"], null, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Card"].Content, null, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Row"], null, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Col"], {
    span: 4
  }, external__react__default.a.createElement("img", {
    alt: ad.img,
    width: "150",
    src: ad.img
  })), external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Col"], {
    span: 8
  }, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Row"], null, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Col"], {
    span: 9
  }, external__react__default.a.createElement("div", {
    "data-hook": "address"
  }, ad.address)), external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Col"], {
    span: 3
  }, external__react__default.a.createElement("div", {
    "data-hook": "price"
  }, ad.price))), external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Row"], null, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_wix_style_react_Grid__["Col"], null, external__react__default.a.createElement("div", {
    "data-hook": "rooms"
  }, ad.rooms, " ", t('card.room')))))))));
}));
// CONCATENATED MODULE: ./components/App/App.js
throw new Error("Cannot find module \"wix-style-react/Grid\"");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var App_App_App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    _this.state = {
      ads: [],
      loaded: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var aruodas;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external__axios__default.a.get('/scrap');

              case 2:
                aruodas = _context.sent;
                this.setState({
                  loaded: true,
                  ads: aruodas.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          ads = _state.ads,
          loaded = _state.loaded;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Layout_Header_Header, {
        dataHook: "header"
      }), loaded && external__react__default.a.createElement("div", {
        className: App_App["default"].content
      }, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_wix_style_react_Grid__["Container"], null, ads.map(function (ad, index) {
        return external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_wix_style_react_Grid__["Row"], {
          key: index
        }, external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_wix_style_react_Grid__["Col"], {
          span: 3
        }), external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_wix_style_react_Grid__["Col"], {
          span: 6
        }, external__react__default.a.createElement(Card, {
          ad: ad
        })), external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_wix_style_react_Grid__["Col"], {
          span: 3
        }));
      }))));
    }
  }]);

  return App;
}(external__react__default.a.Component);

/* harmony default export */ var components_App_App = (Object(external__react_i18next_["translate"])(null, {
  wait: true
})(App_App_App));
// CONCATENATED MODULE: ./components/App/index.js

// CONCATENATED MODULE: ./pages/index.js


/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(components_App_App, null);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| :global{.body {\n|   margin: 0;\n|   background-color: #f4f5f9;");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .header {\n|   background-color: #222;\n|   padding: 5px;");

/***/ })
/******/ ]);