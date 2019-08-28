'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  position: absolute;\n  transform: translateX(-50%);\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  position: absolute;\n  transform: translateX(-50%);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  width: auto;\n  \n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: absolute;\n  width: auto;\n  \n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    bottom: 0;\n    transform: translateX(-50%);\n  '], ['\n    bottom: 0;\n    transform: translateX(-50%);\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    left: 0;\n    transform: translateY(-50%);\n  '], ['\n    left: 0;\n    transform: translateY(-50%);\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    right: 0;\n    transform: translateY(-50%);\n  '], ['\n    right: 0;\n    transform: translateY(-50%);\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    top: 0;\n    transform: translateX(-50%);\n  '], ['\n    top: 0;\n    transform: translateX(-50%);\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Triangle = require('./Triangle');

var _Triangle2 = _interopRequireDefault(_Triangle);

var _Rect = require('../Rect');

var _Rect2 = _interopRequireDefault(_Rect);

var _Protal = require('../Protal');

var _Protal2 = _interopRequireDefault(_Protal);

var _TooltipsWrapper = require('./TooltipsWrapper');

var _TooltipsWrapper2 = _interopRequireDefault(_TooltipsWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var varTrans = function varTrans(name) {
  return function (props) {
    return '\n    ' + name + ': ' + props[name] + 'px;\n  ';
  };
};

var Position = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)('left')(_templateObject2, varTrans('left')), (0, _styledIs2.default)('right')(_templateObject2, varTrans('right')), (0, _styledIs2.default)('top')(_templateObject2, varTrans('top')), (0, _styledIs2.default)('bottom')(_templateObject2, varTrans('bottom')));

var Tool = _styledComponents2.default.div(_templateObject3, (0, _styledIs2.default)('top')(_templateObject4), (0, _styledIs2.default)('right')(_templateObject5), (0, _styledIs2.default)('left')(_templateObject6), (0, _styledIs2.default)('bottom')(_templateObject7));

var ToolTips = function (_Component) {
  _inherits(ToolTips, _Component);

  function ToolTips(props) {
    _classCallCheck(this, ToolTips);

    var _this = _possibleConstructorReturn(this, (ToolTips.__proto__ || Object.getPrototypeOf(ToolTips)).call(this, props));

    _this.renderToolTipsPosition = function (_ref) {
      var left = _ref.left,
          top = _ref.top,
          width = _ref.width,
          height = _ref.height;
      var position = _this.props.position;

      switch (position) {
        case 'left':
          left = left;
          top = top + height / 2;
          break;
        case 'right':
          left = left + width;
          top = top + height / 2;
          break;
        case 'top':
          left = left + width / 2;
          top = top;
          break;
        case 'bottom':
          left = left + width / 2;
          top = top + height;
          break;
        default:
          left = 0;
          top = 0;
          break;
      }
      var propss = _defineProperty({}, position, true);
      return _react2.default.createElement(
        Position,
        { left: left, top: top },
        _react2.default.createElement(
          Tool,
          propss,
          _react2.default.createElement(
            _Triangle2.default,
            propss,
            _this.props.children
          )
        )
      );
    };

    _this.state = {
      show: false,
      target: _react2.default.createRef()
    };
    _this.btnRef = (0, _react.createRef)();
    return _this;
  }

  _createClass(ToolTips, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          target = _props.target;

      if (!show) {
        return null;
      }
      return _react2.default.createElement(
        _Protal2.default,
        null,
        _react2.default.createElement(
          _Rect2.default,
          { target: target, show: show },
          this.renderToolTipsPosition
        )
      );
    }
  }]);

  return ToolTips;
}(_react.Component);

ToolTips.defaultProps = {
  delay: 0,
  defaultVisible: false,
  target: _react2.default.createRef(),
  position: 'top'
};
exports.default = ToolTips;