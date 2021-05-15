'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// like react click outside
// 利用事件是否为当前内容区域来断定是否应该执行
function clickOutSide(ChildrenComponent) {
  var RenderComponent = function (_Component) {
    _inherits(RenderComponent, _Component);

    function RenderComponent(props) {
      _classCallCheck(this, RenderComponent);

      var _this = _possibleConstructorReturn(this, (RenderComponent.__proto__ || Object.getPrototypeOf(RenderComponent)).call(this, props));

      _this.handleClickOutSide = function (e) {
        var childRef = _this.childRef;
        if ((!childRef || !childRef.contains(e.target)) && _this.childInstance && typeof _this.childInstance.handleClickOutside === 'function') {
          _this.childInstance.handleClickOutside(e);
        }
      };

      _this.childRef = null;
      return _this;
    }

    _createClass(RenderComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutSide, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutSide, true);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            innerRef = _props.innerRef,
            rest = _objectWithoutProperties(_props, ['innerRef']);

        return _react2.default.createElement(ChildrenComponent, _extends({}, rest, {
          ref: function ref(c) {
            _this2.childInstance = c;
            _this2.childRef = _reactDom2.default.findDOMNode(c);
            console.innerRef && innerRef(c);
          }
        }));
      }
    }]);

    return RenderComponent;
  }(_react.Component);

  RenderComponent.displayName = 'clickOutSide(' + (ChildrenComponent.displayName || ChildrenComponent.name) + ')';

  var EnhanceHoistStaticComponent = (0, _hoistNonReactStatics2.default)(RenderComponent, ChildrenComponent);

  return (0, _react.forwardRef)(function (props, ref) {
    return _react2.default.createElement(EnhanceHoistStaticComponent, _extends({ innerRef: ref }, props));
  });
}

exports.default = clickOutSide;