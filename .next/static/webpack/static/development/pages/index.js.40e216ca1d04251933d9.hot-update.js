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
  }, "") : '';
});

/***/ })

})
//# sourceMappingURL=index.js.40e216ca1d04251933d9.hot-update.js.map