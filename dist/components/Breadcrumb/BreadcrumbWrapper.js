'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbColWrapper = exports.BreadcrumbWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n'], ['\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadcrumbDefaultCssString = '\n  font-size: 16px;\n  white-space: nowrap;\n  display: block;\n\n';
var BreadcrumbWrapper = _styledComponents2.default.nav.attrs({
  ariaLabel: 'Breadcrumb'
})(_templateObject, BreadcrumbDefaultCssString);

var BreadcrumbColWrapper = _styledComponents2.default.ol(_templateObject2);

exports.BreadcrumbWrapper = BreadcrumbWrapper;
exports.BreadcrumbColWrapper = BreadcrumbColWrapper;