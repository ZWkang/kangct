'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiCom = exports.Alink = exports.Span = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0 0.75em;\n  cursor: pointer;\n'], ['\n  padding: 0 0.75em;\n  cursor: pointer;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #0275d8;\n  text-decoration: none;\n  ', '\n  &:link {\n    color: #0275d8;\n  }\n  &:visited {\n    color: #0275d8;\n  }\n  &:hover {\n    color: #014c8c;\n    cursor: pointer;\n    text-decoration: underline;\n    outline-width: 0;\n  }\n  &:active {\n    color: #0a0a0a;\n    cursor: default;\n    outline-width: 0;\n  }\n'], ['\n  color: #0275d8;\n  text-decoration: none;\n  ', '\n  &:link {\n    color: #0275d8;\n  }\n  &:visited {\n    color: #0275d8;\n  }\n  &:hover {\n    color: #014c8c;\n    cursor: pointer;\n    text-decoration: underline;\n    outline-width: 0;\n  }\n  &:active {\n    color: #0a0a0a;\n    cursor: default;\n    outline-width: 0;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline;\n  &:first-child a {\n    padding-left: 0;\n  }\n\n  & + li:before {\n    color: #cccccc;\n    content: \'\x002f\';\n  }\n\n  ', '\n'], ['\n  display: inline;\n  &:first-child a {\n    padding-left: 0;\n  }\n\n  & + li:before {\n    color: #cccccc;\n    content: \'\\0002f\';\n  }\n\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BreadcrumbWrapper = require('./BreadcrumbWrapper');

var _BreadcrumbWrapper2 = _interopRequireDefault(_BreadcrumbWrapper);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadcrumbItemMixin = (0, _styledComponents.css)(_templateObject);

var Alink = _styledComponents2.default.a(_templateObject2, BreadcrumbItemMixin);

var Span = _styledComponents2.default.span.attrs(function (props) {
  ariaCurrent: props.last ? 'page' : '';
})(_templateObject3, BreadcrumbItemMixin);

var LiCom = _styledComponents2.default.li(_templateObject4, (0, _styledIs2.default)('hidden')(_templateObject5));

exports.Span = Span;
exports.Alink = Alink;
exports.LiCom = LiCom;