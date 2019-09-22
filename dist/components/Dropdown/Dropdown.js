'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  text-align: left;\n  padding: 0 6px;\n  cursor: pointer;\n'], ['\n  position: relative;\n  text-align: left;\n  padding: 0 6px;\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _Rect = require('../Rect');

var _Rect2 = _interopRequireDefault(_Rect);

var _Protal = require('../Protal');

var _Protal2 = _interopRequireDefault(_Protal);

var _DropdownWrapper = require('./DropdownWrapper');

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//TODO: 修改为focus blur 触发事件
var Temp = _styledComponents2.default.div(_templateObject);
function noop() {}
function defaultRenderTitle(_ref) {
  var title = _ref.title;

  return _react2.default.createElement(
    'span',
    null,
    title
  );
}

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    _this.handleTitleClick = function () {
      var dropdownShow = _this.state.dropdownShow;

      _this.setState({
        dropdownShow: !dropdownShow
      });
    };

    _this.registerEvents = function () {
      var trigger = _this.props.trigger;

      if (typeof trigger === 'string') {
        trigger = [trigger];
      }
      trigger.map(function (triggerItem) {
        _this.dropdown.current.addEventListener(triggerItem, _this.triggerEvent, false);
      });
    };

    _this.triggerEvent = function (e) {
      var dropdownShow = _this.state.dropdownShow;

      e && e.preventDefault();
      _this.setState({
        dropdownShow: !dropdownShow
      });
    };

    _this.handleClickOutside = function () {
      if (_this.state.dropdownShow) {
        _this.setState({
          dropdownShow: false
        });
      }
    };

    _this.renderTitle = function () {
      var _this$props = _this.props,
          renderTitle = _this$props.renderTitle,
          title = _this$props.title;

      if (typeof renderTitle === 'function') {
        return renderTitle({
          title: title
        });
      }
      return defaultRenderTitle({
        title: title
      });
    };

    _this.handleItemClick = function (item, e) {
      var onClick = _this.props.onClick;

      onClick && onClick(item, e);
    };

    _this.dropdown = _react2.default.createRef();
    _this.state = {
      dropdownShow: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.trigger !== props.trigger) {
        this.forceUpdate();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.registerEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      var trigger = this.props.trigger;

      if (typeof trigger === 'string') {
        trigger = [trigger];
      }
      trigger.map(function (triggerItem) {
        _this2.dropdown.current.removeEventListener(triggerItem, _this2.triggerEvent, false);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          title = _props.title,
          list = _props.list;
      var dropdownShow = this.state.dropdownShow;

      return _react2.default.createElement(
        Temp,
        { ref: this.dropdown },
        this.renderTitle(),
        _react2.default.createElement(
          _Protal2.default,
          null,
          _react2.default.createElement(
            _Rect2.default,
            { target: this.dropdown, show: dropdownShow },
            function (_ref2) {
              var left = _ref2.left,
                  top = _ref2.top,
                  height = _ref2.height;

              return _react2.default.createElement(
                'div',
                {
                  style: _defineProperty({
                    position: 'absolute',
                    top: top + height + 'px',
                    left: left + 'px',
                    display: 'block'
                  }, 'display', dropdownShow ? '' : 'none')
                },
                _react2.default.createElement(
                  _DropdownWrapper.UlContainer,
                  { style: { padding: '0' } },
                  list.map(function (item, index) {
                    var handleItemClick = _this3.handleItemClick.bind(_this3, item);
                    return _react2.default.createElement(_DropdownItem2.default, { title: item, onClick: handleItemClick, key: item + index });
                  })
                )
              );
            }
          )
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

/**
 * @components
 */


Dropdown.defaultProps = {
  show: false,
  list: [],
  onClick: noop
};
exports.default = (0, _reactClickOutside2.default)(Dropdown);