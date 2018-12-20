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
      return acum + current + ".";
    }

    return acum + current + ", ";
  }, "").slice(0, -2) : '';
});

/***/ })

})
//# sourceMappingURL=index.js.c1b1771413838315b978.hot-update.js.map