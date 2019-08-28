'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: ', '\n  '], ['\n    display: ', '\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    flex-direction: ', '\n  '], ['\n    flex-direction: ', '\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    flex-wrap: ', '\n  '], ['\n    flex-wrap: ', '\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    flex-flow: ', '\n  '], ['\n    flex-flow: ', '\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    justify-content: ', '\n  '], ['\n    justify-content: ', '\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    align-items: ', '\n  '], ['\n    align-items: ', '\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    align-content: ', '\n  '], ['\n    align-content: ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _props = require('./props.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* default options*/

// 样式分离

// css in js

var DefaultCssString = '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n';

var FullDefaultOption = '\n  width: 100%;\n  height: 100%;\n  flex-basis: 100%;\n';

var CenterDefaultOption = '\n  align-items: center;\n  justify-content: center;\n';

var Flex = _styledComponents2.default.div(_templateObject, DefaultCssString, (0, _styledIs2.default)('display')(_templateObject2, function (props) {
  return props.display;
}), (0, _styledIs2.default)('full')(_templateObject3, FullDefaultOption), (0, _styledIs2.default)('center')(_templateObject3, CenterDefaultOption), (0, _styledIs2.default)('flexDirection')(_templateObject4, function (props) {
  return props.flexDirection;
}), (0, _styledIs2.default)('flexWrap')(_templateObject5, function (props) {
  return props.flexWrap;
}), (0, _styledIs2.default)('flexFlow')(_templateObject6, function (props) {
  return props.flexFlow;
}), (0, _styledIs2.default)('justifyContent')(_templateObject7, function (props) {
  return props.justifyContent;
}), (0, _styledIs2.default)('alignItems')(_templateObject8, function (props) {
  return props.alignItems;
}), (0, _styledIs2.default)('alignContent')(_templateObject9, function (props) {
  return props.alignContent;
}), (0, _styledIs2.default)('customStyle')(_templateObject3, function (props) {
  return props.customStyle;
}));

Flex.propTypes = _props.FlexPropsTypes;
Flex.defaultProps = _props.FlexCommonPorps;

/**
 * @components Flex
 */
exports.default = Flex;