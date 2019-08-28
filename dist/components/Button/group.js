'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  > * {\n    margin-left: 0!important;\n    margin-right: 0;\n    min-height: 2em;\n    height: auto;\n  }\n  > *:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  ', '\n\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-direction: row;\n  > * {\n    margin-left: 0!important;\n    margin-right: 0;\n    min-height: 2em;\n    height: auto;\n  }\n  > *:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  ', '\n\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    > *:first-child {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    > *:last-child {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n  '], ['\n    > *:first-child {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    > *:last-child {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: auto;\n    flex-direction: column;\n    > * {\n        margin-top: 0!important;\n        margin-bottom: 0!important;\n        flex: 0 0 100%;\n    }\n    > *:first-child {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    > *:last-child {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n  '], ['\n    width: auto;\n    flex-direction: column;\n    > * {\n        margin-top: 0!important;\n        margin-bottom: 0!important;\n        flex: 0 0 100%;\n    }\n    > *:first-child {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    > *:last-child {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: ', ';\n  '], ['\n    width: ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Group = _styledComponents2.default.div(_templateObject, (0, _styledIs.isNot)('vertical')(_templateObject2), (0, _styledIs2.default)('vertical')(_templateObject3), (0, _styledIs2.default)('width')(_templateObject4, function (props) {
  return props.width;
}));

exports.default = Group;