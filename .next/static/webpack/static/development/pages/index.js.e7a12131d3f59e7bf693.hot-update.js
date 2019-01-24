webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/items.js":
/*!********************************!*\
  !*** ./redux/actions/items.js ***!
  \********************************/
/*! exports provided: FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE, FETCH_ITEM, ADD_ITEMS, SEARCH_ITEMS, SEARCH_SUCCESS, SORT_ITEMS, SORT_SUCCESS, FILTER_ITEMS, FILTER_SUCCESS, addItems, fetchItems, searchItems, sortByName, filterByAge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ITEM_SUCCESS", function() { return FETCH_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ITEM_FAILURE", function() { return FETCH_ITEM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ITEM", function() { return FETCH_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEMS", function() { return ADD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ITEMS", function() { return SEARCH_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUCCESS", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_ITEMS", function() { return SORT_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_SUCCESS", function() { return SORT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_ITEMS", function() { return FILTER_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_SUCCESS", function() { return FILTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItems", function() { return addItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItems", function() { return fetchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchItems", function() { return searchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByAge", function() { return filterByAge; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



var FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
var FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';
var FETCH_ITEM = 'FETCH_ITEM';
var ADD_ITEMS = 'ADD_ITEMS';
var SEARCH_ITEMS = 'SEARCH_ITEMS';
var SEARCH_SUCCESS = 'SEARCH_ITEMS_SUCCESS';
var SORT_ITEMS = 'SORT_ITEMS';
var SORT_SUCCESS = 'SORT_SUCCESS';
var FILTER_ITEMS = 'FILTER_ITEMS';
var FILTER_SUCCESS = 'FILTER_SUCCESS';

var fetchItemsSuccess = function fetchItemsSuccess(payload) {
  return {
    type: FETCH_ITEM_SUCCESS,
    result: payload.Brastlewark
  };
};

var fetchItemsFailure = function fetchItemsFailure() {
  return {
    type: FETCH_ITEM_FAILURE
  };
};

var addItems = function addItems() {
  return {
    type: ADD_ITEMS
  };
};
var fetchItems = function fetchItems() {
  return function (dispatch) {
    dispatch({
      type: FETCH_ITEM
    });
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["endpoint"], "/photos/?client_id=").concat(_config__WEBPACK_IMPORTED_MODULE_2__["ACCESS_KEY"])).then(function (res) {
      if (res.status === 200) {
        return dispatch(fetchItemsSuccess(res.data));
      }
    }).catch(function (err) {
      return dispatch(fetchItemsFailure());
    });
  };
};
var searchItems = function searchItems(term) {
  return function (dispatch, getState) {
    dispatch({
      type: SEARCH_ITEMS
    });
    var items = getState().items;
    var data = items.data.filter(function (item) {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
    setTimeout(function () {
      dispatch({
        type: SEARCH_SUCCESS,
        result: data
      });
    }, 2000);
  };
};
var sortByName = function sortByName(property, order) {
  return function (dispatch, getState) {
    dispatch({
      type: SORT_ITEMS
    });
    var items = getState().items;

    var data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy(items.data, property, order);

    if (order === 'desc') data = data.reverse();
    setTimeout(function () {
      dispatch({
        type: SORT_SUCCESS,
        result: data
      });
    }, 2000);
  };
};
var filterByAge = function filterByAge(min, max) {
  return function (dispatch, getState) {
    dispatch({
      type: FILTER_ITEMS
    });
    var items = getState().items;
    var filtered = items.data.filter(function (item) {
      return min <= item.age && max >= item.age;
    });
    setTimeout(function () {
      dispatch({
        type: FILTER_SUCCESS,
        result: filtered
      });
    }, 2000);
  };
};

/***/ })

})
//# sourceMappingURL=index.js.e7a12131d3f59e7bf693.hot-update.js.map