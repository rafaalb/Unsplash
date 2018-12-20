webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/StringByCommas.js":
/*!*******************************!*\
  !*** ./lib/StringByCommas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (list) {
  return list ? list.reduce(function (acum, current, i) {
    if (i === list.length - 1) {
      return "".concat(acum, ", ").concat(current, ".");
    }

    return "".concat(acum, ", ").concat(current);
  }, "").slice(0, -2) : '';
});

/***/ })

})
//# sourceMappingURL=index.js.dc6bc830f0c5c5b08e5f.hot-update.js.map