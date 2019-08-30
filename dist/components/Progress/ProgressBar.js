'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from{\n    background-position: 200% 0;\n  }\n    \n  to{\n    background-position: -200% 0;\n  }\n  \n'], ['\n  from{\n    background-position: 200% 0;\n  }\n    \n  to{\n    background-position: -200% 0;\n  }\n  \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  &:indeterminate {\n    ', '\n    animation: ', ' 1.5s linear infinite;\n    animation-timing-function: linear;\n    background-color: #dbdbdb;\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 150% 150%;\n    &::-webkit-progress-bar{\n      background-color: transparent;\n    }\n    &::-moz-progress-bar{\n      background-color: transparent;\n    }\n  }\n\n  &::-webkit-progress-bar{\n    background-color: hsl(0, 0%, 86%);\n  }\n  &::-webkit-progress-value{\n    background-color: hsl(0, 0%, 29%);\n  }\n'], ['\n  ', '\n  ', '\n  &:indeterminate {\n    ', '\n    animation: ', ' 1.5s linear infinite;\n    animation-timing-function: linear;\n    background-color: #dbdbdb;\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 150% 150%;\n    &::-webkit-progress-bar{\n      background-color: transparent;\n    }\n    &::-moz-progress-bar{\n      background-color: transparent;\n    }\n  }\n\n  &::-webkit-progress-bar{\n    background-color: hsl(0, 0%, 86%);\n  }\n  &::-webkit-progress-value{\n    background-color: hsl(0, 0%, 29%);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: ', 'px;\n  '], ['\n    height: ', 'px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      background-image: linear-gradient(to right, ', ' 30%,#dbdbdb 30%);\n    '], ['\n      background-image: linear-gradient(to right, ', ' 30%,#dbdbdb 30%);\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizeMap = {
  large: 24,
  medium: 20,
  default: 16,
  small: 12
};

var colors = {
  danger: '#FF3860',
  success: '#23d160',
  normal: '#3273dc',
  warning: '#ffdd57'
};

var defaultProgressBar = '\n  display: block;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 1111px;\n  display: block;\n  height: 14px;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  background-color:#e6e6e6;\n';

var moveIndeterminate = (0, _styledComponents.keyframes)(_templateObject);

var ProgressBar = _styledComponents2.default.progress(_templateObject2, defaultProgressBar, (0, _styledIs2.default)('size')(_templateObject3, function (props) {
  return sizeMap[props.size];
}), (0, _styledIs2.default)('colortype')(_templateObject4, function (props) {
  return colors[props.colortype] || colors['normal'];
}), moveIndeterminate);

exports.default = ProgressBar;