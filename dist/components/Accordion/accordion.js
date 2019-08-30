'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _collapse = require('./collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _index = require('../util/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = Array.isArray(props.activeKey) ? props.activeKey : [props.activeKey];
    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _collapse2.default,
        null,
        this.renderPannels()
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handlePannelClick = function (key) {
    var activeKey = _this3.state.activeKey;
    var Accordion = !_this3.props.accordion;
    // debugger
    if (Accordion) {
      // 手风琴模式只允许一个active
      var Active = ~activeKey.indexOf(key);
      if (Active !== 0) {
        activeKey.splice(~Active, 1);
      } else {
        activeKey.push(key);
      }
    } else {
      activeKey = activeKey[0] === key ? [] : [key];
    }
    _this3.setActiveKey(activeKey);
  };

  this.setActiveKey = function (activeKey) {
    _this3.setState({
      activeKey: activeKey
    });
    var propsActiveKey = _this3.props.accordion ? activeKey[0] : activeKey;
    _this3.props.onChange && _this3.props.onChange(propsActiveKey);
  };

  this.renderPannels = function () {
    var children = _this3.props.children;
    var activeKey = _this3.state.activeKey;


    if (typeof children === 'function') {
      return children({
        activeKey: activeKey
      });
    }
    return _react2.default.Children.map(children, function (child, index) {
      if (!child) return;
      var key = child.key || Number(index);
      var Active = ~activeKey.indexOf(key) < 0 ? true : false;
      var _child$props = child.props,
          header = _child$props.header,
          disabled = _child$props.disabled;

      var props = _extends({}, child.props, {
        header: header,
        disabled: disabled,
        Active: Active,
        key: key,
        handlePannelClick: disabled ? function () {} : function () {
          return _this3.handlePannelClick(key);
        }
      });
      return _react2.default.cloneElement(child, props);
    });
  };
};

var Pannel = function (_React$Component2) {
  _inherits(Pannel, _React$Component2);

  function Pannel(props) {
    _classCallCheck(this, Pannel);

    return _possibleConstructorReturn(this, (Pannel.__proto__ || Object.getPrototypeOf(Pannel)).call(this, props));
  }

  _createClass(Pannel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          Active = _props.Active,
          shadow = _props.shadow,
          key = _props.key,
          handlePannelClick = _props.handlePannelClick,
          header = _props.header,
          children = _props.children;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _collapse2.default.Item,
          { itemShadow: shadow },
          _react2.default.createElement(
            _collapse2.default.ItemHeader,
            { onClick: handlePannelClick, disabled: disabled },
            _react2.default.createElement(
              _collapse2.default.ItemHeaderTitle,
              null,
              header
            )
          ),
          _react2.default.createElement(
            _collapse2.default.ItemContent,
            { show: Active },
            children
          )
        )
      );
    }
  }]);

  return Pannel;
}(_react2.default.Component);

Pannel.propTypes = {
  disabled: _propTypes2.default.bool,
  Active: _propTypes2.default.bool,
  shadow: _propTypes2.default.bool,
  handlePannelClick: _propTypes2.default.func,
  header: _propTypes2.default.string,
  children: _propTypes2.default.node
};
Pannel.defaultProps = {
  disabled: false,
  Active: false,
  shadow: false,
  handlePannelClick: _index.noop,
  header: '',
  children: null
};

Accordion.Pannel = Pannel;

// Accordion.propTypes =
Accordion.defaultProps = {
  activeKey: [],
  accordion: false,
  onChange: _index.noop,
  icon: '',
  type: '',
  arrow: ''
};
/**
 * @components
 */
exports.default = Accordion;