webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
var _this = undefined,
    _jsxFileName = "/Users/rafaelpina/Documents/PersonalProjects/xotv/frontend/components/Items.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Center = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Items__Center",
  componentId: "tikday-0"
})(["text-align:center;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "tikday-1"
})(["display:grid;grid-gap:40px;margin:0 auto;grid-template-columns:1fr 1fr;@media screen and (max-width:500px){grid-template-columns:1fr;}"]);
var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Items__UserInfo",
  componentId: "tikday-2"
})(["text-align:left;margin-bottom:30px;h3{color:white;}"]);
var options = ['Carlos', 'Mary', 'Miguel', 'Emily', 'Rafael', 'Andres'];

var Suggest = function Suggest(_ref) {
  var classes = _ref.classes,
      onEnterPress = _ref.onEnterPress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Start searching for amazing photos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onEnterPress: onEnterPress,
    toggleError: function toggleError() {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "or you can check any of these"), options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "outlined",
      color: "primary",
      style: {
        margin: 5
      },
      onClick: function onClick() {
        return _this.props.search(option);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, option);
  }));
};

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, Items);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Items)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "_renderItems", function () {
      var selected = _this2.props.users.selected;
      if (!lodash_size__WEBPACK_IMPORTED_MODULE_5___default()(selected.photos)) return;
      return selected.photos.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: item,
          key: "".concat(item.id, "_").concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "_onEnterPress", function (payload) {
      return _this2.props.fetchUsers(payload);
    });

    return _this2;
  }

  _createClass(Items, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchItems();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          users = _this$props.users;
      if (items.searching) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      });
      if (users.firstLoad) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Suggest, {
        onEnterPress: this._onEnterPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.props.users.selected.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.props.users.selected.bio)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemsList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, this._renderItems()));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers(payload) {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUsers"])(payload));
    },
    fetchItems: function fetchItems(payload) {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["fetchItems"])(payload));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state;
}, mapDispatchToProps)(Items));

/***/ })

})
//# sourceMappingURL=index.js.e814a9df03c97a98f5de.hot-update.js.map