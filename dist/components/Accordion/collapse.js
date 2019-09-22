'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 3px;\n  font-size: 14px;\n'], ['\n  text-align: left;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 3px;\n  font-size: 14px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  border-bottom: 1px solid #d9d9d9;\n'], ['\n  ', '\n  border-bottom: 1px solid #d9d9d9;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  '], ['\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  background-color: #f7f7f7;\n  padding: 12px 0 12px 16px;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  ', '\n'], ['\n  display: flex;\n  align-items: center;\n  background-color: #f7f7f7;\n  padding: 12px 0 12px 16px;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    cursor: not-allowed;\n  '], ['\n    cursor: not-allowed;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: auto;\n  line-height: 1;\n'], ['\n  flex: auto;\n  line-height: 1;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: block;\n  width: 100%;\n  transition: all 0.2s ease-out;\n  height: 0;\n  transform-origin: top;\n  padding: 0 16px;\n  color: rgba(0, 0, 0, 0.65);\n  overflow: hidden;\n  box-sizing: border-box;\n  ', '\n'], ['\n  display: block;\n  width: 100%;\n  transition: all 0.2s ease-out;\n  height: 0;\n  transform-origin: top;\n  padding: 0 16px;\n  color: rgba(0, 0, 0, 0.65);\n  overflow: hidden;\n  box-sizing: border-box;\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    padding: 16px;\n    height: auto;\n    width: 100%;\n    border-top: 1px solid #d9d9d9;\n  '], ['\n    padding: 16px;\n    height: auto;\n    width: 100%;\n    border-top: 1px solid #d9d9d9;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// https://github.com/facebook/prop-types/issues/200
// forward ref should be notice

var Collapse = _styledComponents2.default.section(_templateObject);

Collapse.Item = _styledComponents2.default.div(_templateObject2, (0, _styledIs2.default)('itemShadow')(_templateObject3));

Collapse.ItemHeader = _styledComponents2.default.div(_templateObject4, (0, _styledIs2.default)('disabled')(_templateObject5));
Collapse.ItemHeaderTitle = _styledComponents2.default.div(_templateObject6);
Collapse.ItemContent = _styledComponents2.default.div(_templateObject7, (0, _styledIs2.default)('show')(_templateObject8));

exports.default = Collapse;