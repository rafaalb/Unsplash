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
})(["display:flex;align-items:center;padding:5px;padding-left:10px;padding-right:10px;cursor:pointer;justify-content:flex-start;&:hover{background-color:rgba(0,0,0,0.1);border-radius:10px;}span{padding-left:20px;font-size:17px;}"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "UserItem__Image",
  componentId: "sc-1wacbzs-1"
})(["height:30px;width:30px;border-radius:15px;border:1px solid white;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var user = _ref.user,
      onClickUser = _ref.onClickUser;
  console.log(user);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    onClick: function onClick() {
      return onClickUser(user);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: user.profile_image.small,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, user.name));
});

/***/ })

})
//# sourceMappingURL=index.js.b8d562700eb27ab65844.hot-update.js.map