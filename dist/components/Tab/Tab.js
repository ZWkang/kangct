'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n'], ['\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TabsItem = require('./TabsItem');

var _TabsItem2 = _interopRequireDefault(_TabsItem);

var _TabBody = require('./TabBody');

var _TabBody2 = _interopRequireDefault(_TabBody);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _reactKeydown = require('react-keydown');

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ENTER = _reactKeydown.Keys.ENTER,
    TAB = _reactKeydown.Keys.TAB;


var TabsContainer = _styledComponents2.default.div(_templateObject);
var TabsWrapper = _styledComponents2.default.ul(_templateObject2);
/**
 * activeIndex Number
 * tabs: [{name: 'xx', body: <>} , xx]
 */

var wrapEvent = function wrapEvent(handler, cb) {
  return function (event) {
    handler && handler(event);
    if (!event.defaultPrevented) {
      return cb(event);
    }
  };
};

var defaultRenderBody = function defaultRenderBody(_ref) {
  var dataList = _ref.dataList,
      activeIndex = _ref.activeIndex;

  return _react2.default.createElement(_TabBody2.default, null);
};

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.handleTabKeyDown = function (e) {
      var tabs = _this.props.tabs;

      switch (e.key) {
        case 'ArrowRight':
        case 'Right':
          {
            _this.setState(function (prevState) {
              var selectIndex = prevState.selectIndex;

              var count = tabs.length;

              var ensureIndex = (selectIndex + 1) % count;
              return {
                selectIndex: ensureIndex
              };
            });
            break;
          }
        case 'Left':
        case 'ArrowLeft':
          {
            _this.setState(function (prevState) {
              var selectIndex = prevState.selectIndex;

              var count = tabs.length;

              var ensureIndex = (selectIndex - 1 + count) % count;
              // console.log(selectIndex, count, ensureIndex);
              return {
                selectIndex: ensureIndex
              };
            });
            break;
          }
        case 'Home':
          {
            _this.setState(function (prevState) {
              return {
                selectIndex: 0
              };
            });
            break;
          }
        case 'End':
          {
            _this.setState(function (prevState) {
              return {
                selectIndex: tabs.length - 1
              };
            });
            break;
          }
        default:
          {
            break;
          }
      }
    };

    _this.handleItemClick = function (item) {
      var onSelect = _this.props.onSelect;


      onSelect && onSelect();
      _this.setState({
        selectIndex: item
      });
    };

    _this.handleFocus = function () {
      debugger;
      if (_this.state.focused) return;
      // console.log()
      // debugger;
      _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    };

    _this.handleRenderBody = function () {
      var _this$props = _this.props,
          activeIndex = _this$props.activeIndex,
          renderBody = _this$props.renderBody,
          tabs = _this$props.tabs;
      var selectIndex = _this.state.selectIndex;

      return _react2.default.createElement(
        _Flex2.default,
        { onClick: _this.handleFocus, onFocus: _this.handleFocus, onBlur: _this.handleBlur },
        tabs.map(function (tab, index) {
          var _React$createElement;

          var body = tab.body,
              name = tab.name;

          return _react2.default.createElement(
            _TabBody2.default,
            (_React$createElement = {
              tabIndex: 0,
              role: 'tabpanel',
              'aria-labelledby': tab,
              key: index,
              display: index === selectIndex ? 'flex' : 'none',
              hidden: index === selectIndex ? '' : 'hidden'
            }, _defineProperty(_React$createElement, 'aria-labelledby', name), _defineProperty(_React$createElement, 'full', true), _React$createElement),
            body
          );
        })
      );
    };

    _this.state = {
      selectIndex: props.activeIndex || 0,
      focused: false
    };
    return _this;
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tabs = this.props.tabs;

      return _react2.default.createElement(
        TabsContainer,
        null,
        _react2.default.createElement(
          TabsWrapper,
          { onKeyDown: this.handleTabKeyDown },
          tabs.map(function (tab, index) {
            var body = tab.body,
                name = tab.name;

            var isSelect = index === _this2.state.selectIndex;
            // if (index === this.state.selectIndex) {
            return _react2.default.createElement(
              _TabsItem2.default,
              {
                key: 'tab-' + name,
                'aria-controls': 'tab-' + name,
                'aria-selected': isSelect,
                role: 'tab',
                tabIndex: isSelect ? 0 : -1,
                active: isSelect,
                onClick: _this2.handleItemClick.bind(_this2, index),
                focused: _this2.state.focused
              },
              name
            );
          })
        ),
        this.handleRenderBody()
      );
    }
  }]);

  return Tab;
}(_react.Component);

exports.default = Tab;