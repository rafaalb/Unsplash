webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/ItemsReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/ItemsReducer.js ***!
  \****************************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var _actions_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items */ "./redux/actions/items.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: [],
  fetching: false,
  error: false,
  firstLoad: true,
  shownItems: 0
};
var items = function items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["FETCH_ITEM"]:
      return _objectSpread({}, state, {
        fetching: true,
        firstLoad: false
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["FETCH_ITEM_SUCCESS"]:
      return _objectSpread({}, state, {
        data: action.result,
        fetching: false
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["FETCH_ITEM_FAILURE"]:
      return _objectSpread({}, state, {
        error: true,
        fetching: false
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["SEARCH_SUCCESS"]:
      return _objectSpread({}, state, {
        tmpData: action.result,
        searching: false
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["SORT_ITEMS"]:
      return _objectSpread({}, state, {
        searching: true
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["SORT_SUCCESS"]:
      return _objectSpread({}, state, {
        searching: false,
        data: action.result
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["FILTER_ITEMS"]:
      return _objectSpread({}, state, {
        searching: true
      });

    case _actions_items__WEBPACK_IMPORTED_MODULE_0__["FILTER_SUCCESS"]:
      return _objectSpread({}, state, {
        searching: false,
        tmpData: action.result
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.e97891114a2eaf09156e.hot-update.js.map