'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: #4a4a4a;\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 6px;\n  box-shadow: 0 1px 1px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding: 1.25rem;\n  transition: all 0.2s ease-in;\n  text-align: left;\n\n  ', '\n'], ['\n  color: #4a4a4a;\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 6px;\n  box-shadow: 0 1px 1px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding: 1.25rem;\n  transition: all 0.2s ease-in;\n  text-align: left;\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    &:hover,\n    &:focus {\n      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1);\n    }\n  '], ['\n    &:hover,\n    &:focus {\n      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1);\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BoxDefaultCssString = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)('hoverStyle')(_templateObject2));

var Box = (0, _styledComponents2.default)(BoxDefaultCssString)(_templateObject3, (0, _styledIs2.default)('customStyle')(_templateObject4, function (props) {
  return props.customStyle;
}));

Box.displayName = 'Box';

exports.default = Box;