webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/users.js":
/*!********************************!*\
  !*** ./redux/actions/users.js ***!
  \********************************/
/*! exports provided: FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS, SELECT_USER, fetchUsers, fetchUsersSuccess, fetchUsersError, selectUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_FAILURE", function() { return FETCH_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_SUCCESS", function() { return FETCH_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_USER", function() { return SELECT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersSuccess", function() { return fetchUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersError", function() { return fetchUsersError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");


var FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
var FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
var FETCH_USERS = 'FETCH_USERS';
var SELECT_USER = 'SELECT_USER';
var fetchUsers = function fetchUsers(payload) {
  return function (dispatch) {
    dispatch({
      type: FETCH_USERS
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["endpoint"], "/search/users?query=").concat(payload, "&client_id=").concat(_config__WEBPACK_IMPORTED_MODULE_1__["ACCESS_KEY"])).then(function (res) {
      var data = res.data;
      dispatch(fetchUsersSuccess(data));
    }).catch(function (err) {
      dispatch(fetchUsersError(err));
    });
  };
};
var fetchUsersSuccess = function fetchUsersSuccess(payload) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: payload
  };
};
var fetchUsersError = function fetchUsersError(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error: error
  };
};
var selectUser = function selectUser(payload) {
  return {
    type: SELECT_USER,
    payload: payload
  };
};

/***/ })

})
//# sourceMappingURL=index.js.6bdd1ab7cd977b6d18c8.hot-update.js.map