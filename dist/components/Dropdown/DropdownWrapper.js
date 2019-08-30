'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UlContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 140px;\n  margin-top: 2px !important;\n  margin-bottom: 2px;\n  /* padding: 4px 0!important; */\n  border: 1px solid #d8d8d8;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  background-clip: padding-box;\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.175);\n'], ['\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 140px;\n  margin-top: 2px !important;\n  margin-bottom: 2px;\n  /* padding: 4px 0!important; */\n  border: 1px solid #d8d8d8;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  background-clip: padding-box;\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.175);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UlContainer = _styledComponents2.default.ul(_templateObject);

exports.UlContainer = UlContainer;