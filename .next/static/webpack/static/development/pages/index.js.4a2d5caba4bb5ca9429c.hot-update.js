webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UserItem.js":
/*!********************************!*\
  !*** ./components/UserItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/rafaelpina/Documents/PersonalProjects/xotv/frontend/components/UserItem.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserItem__Container",
  componentId: "sc-1wacbzs-0"
})(["display:flex;align-items:center;justify-content:space-between;&:hover{background-color:red;padding:20px;}"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "UserItem__Image",
  componentId: "sc-1wacbzs-1"
})(["height:30px;width:auto;border-radius:15px;border:1px solid white;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var user = _ref.user;
  console.log(user);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: user.profile_image.small,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, user.name));
});

/***/ })

})
//# sourceMappingURL=index.js.4a2d5caba4bb5ca9429c.hot-update.js.map