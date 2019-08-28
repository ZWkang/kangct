'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n\n  ', '\n\n  ', '\n'], ['\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    order: ', '\n  '], ['\n    order: ', '\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-grow: ', '\n  '], ['\n    flex-grow: ', '\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    flex-shrink: ', '\n  '], ['\n    flex-shrink: ', '\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    flex-basis: ', '\n  '], ['\n    flex-basis: ', '\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: ', '\n  '], ['\n  flex: ', '\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    align-self: ', '\n  '], ['\n    align-self: ', '\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _props = require('./props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexItemDefaultCssString = '\n  order: 0;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 1;\n  display: block;\n';

var FlexItem = _styledComponents2.default.div(_templateObject, FlexItemDefaultCssString, (0, _styledIs2.default)('order')(_templateObject2, function (props) {
  return props.order;
}), (0, _styledIs2.default)('flexGrow')(_templateObject3, function (props) {
  return props.flexGrow;
}), (0, _styledIs2.default)('flexShrink')(_templateObject4, function (props) {
  return props.flexShrink;
}), (0, _styledIs2.default)('flexBasis')(_templateObject5, function (props) {
  return props.flexBasis;
}), (0, _styledIs2.default)('flex')(_templateObject6, function (props) {
  return props.flex;
}), (0, _styledIs2.default)('alignSelf')(_templateObject7, function (props) {
  return props.alignSelf;
}), (0, _styledIs2.default)('customStyle')(_templateObject8, function (props) {
  return props.customStyle;
}));

FlexItem.propTypes = _props.FlexItemPropsTypes;
FlexItem.defaultProps = _props.FlexCommonPorps;

exports.default = FlexItem;