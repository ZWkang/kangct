'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 5px 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  margin: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n'], ['\n  padding: 5px 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  margin: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../Heading/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DialogTitle = (0, _styledComponents2.default)(_index.H6)(_templateObject);

exports.default = DialogTitle;