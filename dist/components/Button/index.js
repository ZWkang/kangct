'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: inherit;\n  font-size: 1em;\n\n  cursor: pointer;\n\n  appearance: none;\n  border-radius: 6px;\n  padding: calc(0.375em - 1px) 0.75em;\n  line-height: 1.5;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #dbdbdb;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  vertical-align: top;\n\n  transition: color, background-color, transform 0.5s;\n  will-change: color, background-color, transform;\n\n  margin-bottom: 0.5em;\n  outline: 0;\n\n  text-decoration: none;\n'], ['\n  font-family: inherit;\n  font-size: 1em;\n\n  cursor: pointer;\n\n  appearance: none;\n  border-radius: 6px;\n  padding: calc(0.375em - 1px) 0.75em;\n  line-height: 1.5;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #dbdbdb;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  vertical-align: top;\n\n  transition: color, background-color, transform 0.5s;\n  will-change: color, background-color, transform;\n\n  margin-bottom: 0.5em;\n  outline: 0;\n\n  text-decoration: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    & + &{\n        margin-left: 10px;\n    }\n    appearance: none;\n    cursor: pointer;\n    appearance: none;\n    border-radius: 6px;\n    padding: calc(.375em - 1px) .75em;\n    line-height: 1.5;\n    border: 1px solid #000;\n    /* font-size: 16px; */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: top;\n    transition: color,background-color,transform .5s;\n    will-change: color,background-color,transform;\n    ', '\n    font-size: 1em;\n    margin-bottom: .5em;\n    outline: 0;\n    ', '\n    /* user-select:none; */\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n'], ['\n    & + &{\n        margin-left: 10px;\n    }\n    appearance: none;\n    cursor: pointer;\n    appearance: none;\n    border-radius: 6px;\n    padding: calc(.375em - 1px) .75em;\n    line-height: 1.5;\n    border: 1px solid #000;\n    /* font-size: 16px; */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: top;\n    transition: color,background-color,transform .5s;\n    will-change: color,background-color,transform;\n    ', '\n    font-size: 1em;\n    margin-bottom: .5em;\n    outline: 0;\n    ', '\n    /* user-select:none; */\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        width: 100%;\n    '], ['\n        width: 100%;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        :hover{\n            background: #000;\n            color: #fff;\n            transform: matrix(1,0,0,1,0, -1);\n        }\n    '], ['\n        :hover{\n            background: #000;\n            color: #fff;\n            transform: matrix(1,0,0,1,0, -1);\n        }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        cursor: not-allowed;\n        background: #ccc;\n        // pointer-events: none;\n    '], ['\n        cursor: not-allowed;\n        background: #ccc;\n        // pointer-events: none;\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        font-size: 0.75em;\n    '], ['\n        font-size: 0.75em;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n        font-size: 1.25em;\n    '], ['\n        font-size: 1.25em;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n        font-size: 1.5em;\n    '], ['\n        font-size: 1.5em;\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n    '], ['\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonFocusZIndex = 111;
var BtnBaseStyle = (0, _styledComponents.css)(_templateObject);

var noop = function noop() {};

var Button = _styledComponents2.default.button.attrs(function (props) {
    return {
        disabled: props.disabled === true ? props.disabled : false,
        active: props.disabled === true ? props.active : false,
        role: 'botton',
        tabIndex: 0
    };
})(_templateObject2, (0, _styledIs2.default)('full')(_templateObject3), (0, _styledIs2.default)('hover')(_templateObject4), (0, _styledIs2.default)('disabled')(_templateObject5), (0, _styledIs2.default)('small')(_templateObject6), (0, _styledIs2.default)('medium')(_templateObject7), (0, _styledIs2.default)('big')(_templateObject8), (0, _styledIs2.default)('shadow')(_templateObject9));

/**
 * you can write some in here you know?
 *
 * @components
 */
exports.default = Button;