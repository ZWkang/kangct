'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n    will-change: contents;\n    animation: ', ';\n    animation-duration: ', 'ms;\n    animation-delay: ', 'ms;\n  '], ['\n    will-change: contents;\n    animation: ', ';\n    animation-duration: ', 'ms;\n    animation-delay: ', 'ms;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _help = require('./help.js');

var _help2 = _interopRequireDefault(_help);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../util/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import omit from 'lodash.omit';


var generatorComponent = function generatorComponent(_ref) {
  var name = _ref.name,
      duration = _ref.duration,
      keyframesFuntion = _ref.keyframesFuntion,
      delay = _ref.delay;

  var animateKeyframs = (0, _styledComponents.keyframes)(_templateObject, keyframesFuntion || _help2.default[name]);
  var Wrapper = _styledComponents2.default.div(_templateObject2, animateKeyframs, duration || 0, delay || 0);
  return Wrapper;
};

// 如果omit 了onAnimationEnd的话，子组件就无法接受外部的onAnimationEnd了。bad design

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _this.RenderComponent = generatorComponent({
      keyframesFuntion: props.keyframesFuntion,
      name: props.funcname,
      duration: props.duration,
      delay: props.delay
    });
    return _this;
  }

  _createClass(Animate, [{
    key: 'render',
    value: function render() {
      var childProps = Object.assign({}, this.props);
      var omitProps = (0, _index.Object_omit)(childProps, ['funcname', 'children', 'name', 'duration', 'keyframesFuntion', 'delay', 'onAnimationEnd']);
      var Wrapper = this.RenderComponent;

      var Children = _react2.default.Children.map(this.props.children, function (_) {
        if (_react2.default.isValidElement(_)) {
          return _react2.default.cloneElement(_, _extends({}, omitProps));
        }
        return _;
      });

      return _react2.default.createElement(
        Wrapper,
        { onAnimationEnd: this.props.onAnimationEnd },
        Children
      );
    }
  }]);

  return Animate;
}(_react.Component);

Animate.propTypes = {
  keyframesFuntion: _propTypes2.default.func,
  name: _propTypes2.default.string,
  duration: _propTypes2.default.number
};

Animate.defaultProps = {
  keyframesFuntion: void 666,
  name: '',
  duration: 0,
  onAnimationEnd: function onAnimationEnd() {}
};
/**
 * @components
 */

exports.default = Animate;