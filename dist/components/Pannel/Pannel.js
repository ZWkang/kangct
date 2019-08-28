'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: ', 'px; \n    ', '\n    ', '\n    ', '\n'], ['\n    padding: ', 'px; \n    ', '\n    ', '\n    ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        :hover{\n            transform: matrix(1,0,0,1,0, -1);\n        }\n    '], ['\n        :hover{\n            transform: matrix(1,0,0,1,0, -1);\n        }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        ', '\n    '], ['\n        ', '\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n    '], ['\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseSize = 8;
var sizeMap = {
    s: baseSize,
    m: baseSize * 2,
    l: baseSize * 3
};

var handlePaddingSize = function handlePaddingSize(name) {
    return function (props) {
        return 'padding: ' + sizeMap[props[name]] + 'px;';
    };
};
var Pannel = _styledComponents2.default.div(_templateObject, baseSize * 0, (0, _styledIs2.default)('hover')(_templateObject2), (0, _styledIs2.default)('paddingSize')(_templateObject3, handlePaddingSize('paddingSize')), (0, _styledIs2.default)('shadow')(_templateObject4));
/**
 * @components
 */
exports.default = Pannel;