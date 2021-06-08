'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rect = function (_React$PureComponent) {
  _inherits(Rect, _React$PureComponent);

  function Rect(props) {
    _classCallCheck(this, Rect);

    var _this = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, props));

    _this.getTargetBoundingClientRect = function () {
      var target = _this.props.target;


      if (target.current === null) return { height: 0, width: 0, x: 0, y: 0 };

      var ele = null;

      if (target.current !== null && target.current !== void 666) {
        ele = (0, _reactDom.findDOMNode)(_this.props.target.current);
      } else {
        ele = (0, _reactDom.findDOMNode)(_this.props.target);
      }

      var rect = ele.getBoundingClientRect();
      var top = rect.top + (document.documentElement.scrollTop || document.body.scrollTop);
      var left = rect.left + (document.documentElement.scrollLeft || document.body.scrollLeft);
      _this.setState({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        top: top,
        left: left,
        bottom: rect.bottom,
        right: rect.right,
        height: rect.height
      });
    };

    _this.renderChild = function () {
      return _this.props.children(_this.state);
    };

    _this.state = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0
    };
    return _this;
  }

  _createClass(Rect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getTargetBoundingClientRect();
    }
    //   componentDidUpdate(prevProps) {
    //     if (prevProps.target !== this.props.target || prevProps.show != this.props.show) {
    //       this.getTargetBoundingClientRect();
    //     }
    //   }

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.target !== this.props.target || props.show != this.props.show) {
        this.getTargetBoundingClientRect();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        this.renderChild()
      );
    }
  }]);

  return Rect;
}(_react2.default.PureComponent);

Rect.defaultProps = {
  show: false
};
exports.default = Rect;