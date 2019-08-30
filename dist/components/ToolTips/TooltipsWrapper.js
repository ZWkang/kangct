'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n'], ['\n  ', '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TooltipsWrapper = _styledComponents2.default.div(_templateObject, (0, _styledIs.isNot)('show')(_templateObject2));

exports.default = TooltipsWrapper;