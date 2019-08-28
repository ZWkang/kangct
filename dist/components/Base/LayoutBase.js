'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n'], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        z-index: ', '\n    '], ['\n        z-index: ', '\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['zIndex'], ['zIndex']),
    _templateObject4 = _taggedTemplateLiteral(['\n        visibility: ', '\n    '], ['\n        visibility: ', '\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['visibility'], ['visibility']),
    _templateObject6 = _taggedTemplateLiteral(['\n        text-decoration: ', '\n    '], ['\n        text-decoration: ', '\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['textDecoration'], ['textDecoration']),
    _templateObject8 = _taggedTemplateLiteral(['\n        orphans: ', '\n    '], ['\n        orphans: ', '\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['orphans'], ['orphans']),
    _templateObject10 = _taggedTemplateLiteral(['\n        cursor: ', '\n    '], ['\n        cursor: ', '\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['cursor'], ['cursor']),
    _templateObject12 = _taggedTemplateLiteral(['\n        color: ', '\n    '], ['\n        color: ', '\n    ']),
    _templateObject13 = _taggedTemplateLiteral(['color'], ['color']),
    _templateObject14 = _taggedTemplateLiteral(['\n        border-top-color: ', '\n    '], ['\n        border-top-color: ', '\n    ']),
    _templateObject15 = _taggedTemplateLiteral(['borderTopColor'], ['borderTopColor']),
    _templateObject16 = _taggedTemplateLiteral(['\n        border-top-left-radius: ', '\n    '], ['\n        border-top-left-radius: ', '\n    ']),
    _templateObject17 = _taggedTemplateLiteral(['borderTopLeftRadius'], ['borderTopLeftRadius']),
    _templateObject18 = _taggedTemplateLiteral(['\n        border-top-right-radius: ', '\n    '], ['\n        border-top-right-radius: ', '\n    ']),
    _templateObject19 = _taggedTemplateLiteral(['borderTopRightRadius'], ['borderTopRightRadius']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// console.log(css`
// border: 1px solid ${props => props.theme.borderRadius};
// `)

var p = function p() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    return function (props) {
        return props[arg[0][0]];
    };
};
var LayoutBase = (0, _styledComponents.css)(_templateObject, is('zIndex')(_templateObject2, p(_templateObject3)), is('visibility')(_templateObject4, p(_templateObject5)), is('textDecoration')(_templateObject6, p(_templateObject7)), is('orphans')(_templateObject8, p(_templateObject9)), is('cursor')(_templateObject10, p(_templateObject11)), is('color')(_templateObject12, p(_templateObject13)), is('borderTopColor')(_templateObject14, p(_templateObject15)), is('borderTopLeftRadius')(_templateObject16, p(_templateObject17)), is('borderTopRightRadius')(_templateObject18, p(_templateObject19)));

var marginTable = {
    margin: 0,
    marginLeft: 1,
    marginRight: 2,
    marginTop: 3,
    marginBottom: 4
};