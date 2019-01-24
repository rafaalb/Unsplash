webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ "./components/Main.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/rafaelpina/Documents/PersonalProjects/xotv/frontend/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url(//db.onlinewebfonts.com/c/ae8f19f441b335c3fda30febf5069c5a?family=Gotham+Rounded);\n  @font-face {\n    font-family: 'radnika_next';\n    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n  @font-face {font-family: \"Gotham Rounded\";\n    src: url(\"//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.eot\");\n    src: url(\"//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.eot?#iefix\") format(\"embedded-opentype\"),\n    url(\"//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.woff2\") format(\"woff2\"),\n    url(\"//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.woff\") format(\"woff\"),\n    url(\"//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.ttf\") format(\"truetype\"),\n    url(\"//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.svg#Gotham Rounded\") format(\"svg\");\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 15px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    background-color: black!important;\n    height: 100%;\n    font-family: \"Gotham Rounded\", Helvetica, Arial, serif;\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n  button {  font-family: 'radnika_next'; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var styled_theme = {
  red: '#ef0061',
  yellow: '#fff210',
  green: '#00ff8d',
  mainblue: '#32ceff',
  black: '#393939',
  blue: 'red',
  lightBlue: '#8b9dc3',
  lighterBlue: '#dfe3ee',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__StyledPage",
  componentId: "sc-150rvgv-0"
})(["background:black;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Inner",
  componentId: "sc-150rvgv-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), styled_theme.black);

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: styled_theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])()(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.3245985fc9a8c6fa3619.hot-update.js.map