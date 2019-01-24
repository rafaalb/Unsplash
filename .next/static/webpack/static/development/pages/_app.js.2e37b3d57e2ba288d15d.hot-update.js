webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/UsersReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/UsersReducer.js ***!
  \****************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/users */ "./redux/actions/users.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: [],
  loading: false,
  error: false,
  total: 0,
  selected: {
    photos: []
  }
};
var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_users__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_SUCCESS"]:
      return _objectSpread({}, state, {
        data: action.payload.results,
        loading: false,
        total: action.payload.total
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_FAILURE"]:
      return _objectSpread({}, state, {
        error: true,
        loading: false
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_0__["SELECT_USER"]:
      return _objectSpread({}, state, {
        selected: action.payload
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.2e37b3d57e2ba288d15d.hot-update.js.map