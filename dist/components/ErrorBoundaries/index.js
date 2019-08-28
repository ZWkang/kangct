'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultCallback = function defaultCallback(a, b, c) {
  throw b;
};

var DefaultFallBackComponent = function DefaultFallBackComponent(_ref) {
  var error = _ref.error,
      componentStack = _ref.componentStack;

  componentStack = componentStack.split('\n');
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { color: 'red' } },
      error.message
    ),
    _react2.default.createElement(
      'div',
      { style: { color: 'green' } },
      componentStack.map(function (stack, index) {
        return _react2.default.createElement(
          'p',
          { key: stack + index },
          stack
        );
      })
    )
  );
};

var ErrorBoundaries = function (_Component) {
  _inherits(ErrorBoundaries, _Component);

  function ErrorBoundaries(props) {
    _classCallCheck(this, ErrorBoundaries);

    var _this = _possibleConstructorReturn(this, (ErrorBoundaries.__proto__ || Object.getPrototypeOf(ErrorBoundaries)).call(this, props));

    _this.componentDidCatch = function (error, info) {
      var _this$props$ErrorCall = _this.props.ErrorCallback,
          ErrorCallback = _this$props$ErrorCall === undefined ? defaultCallback : _this$props$ErrorCall;

      try {
        ErrorCallback(_this, error, info);
      } catch (err) {
        _this.setState({
          error: err,
          info: info
        });
      }
    };

    _this.state = {
      error: null,
      info: null
    };
    return _this;
  }

  _createClass(ErrorBoundaries, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$FallBackCompon = _props.FallBackComponent,
          FallBackComponent = _props$FallBackCompon === undefined ? DefaultFallBackComponent : _props$FallBackCompon,
          restProps = _objectWithoutProperties(_props, ['children', 'FallBackComponent']);

      var _state = this.state,
          error = _state.error,
          info = _state.info;

      if (error) {
        return _react2.default.createElement(FallBackComponent, { error: error, componentStack: info.componentStack });
      }
      return _react2.default.createElement(
        _react.Fragment,
        null,
        children
      );
    }
  }]);

  return ErrorBoundaries;
}(_react.Component);
/**
 * you can write some in here you know?
 *
 * @components
 */


exports.default = ErrorBoundaries;