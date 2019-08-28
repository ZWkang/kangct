'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n  background: #000;\n  padding: 4px 8px;\n  border-radius: 2px;\n  background: #4a4a4a;\n  \n  white-space: nowrap;\n  font-size: 12px;\n  color: white;\n  ', '\n    ', '\n    ', '\n    ', '\n  &:after{\n    content: "";\n\n    border: 5px solid transparent;\n    height: 0;\n    ', '\n    ', '\n    ', '\n    ', '\n    /* border-top-color: #4a4a4a; */\n    position: absolute;\n    bottom: -10px;\n    z-index: 112;\n    /* left: 50%; */\n    /* transform: translateX(-50%); */\n    \n  }\n'], ['\n  display: block;\n  position: relative;\n  background: #000;\n  padding: 4px 8px;\n  border-radius: 2px;\n  background: #4a4a4a;\n  \n  white-space: nowrap;\n  font-size: 12px;\n  color: white;\n  ', '\n    ', '\n    ', '\n    ', '\n  &:after{\n    content: "";\n\n    border: 5px solid transparent;\n    height: 0;\n    ', '\n    ', '\n    ', '\n    ', '\n    /* border-top-color: #4a4a4a; */\n    position: absolute;\n    bottom: -10px;\n    z-index: 112;\n    /* left: 50%; */\n    /* transform: translateX(-50%); */\n    \n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      margin-bottom: 5px;\n      \n    '], ['\n      margin-bottom: 5px;\n      \n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      margin-left: 5px;\n    '], ['\n      margin-left: 5px;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      margin-right: 5px;\n    '], ['\n      margin-right: 5px;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      margin-top: 5px;\n    '], ['\n      margin-top: 5px;\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      border-top-color: #4a4a4a;\n      transform: translateX(-50%);\n      bottom: -10px;\n      left: 50%;\n      \n    '], ['\n      border-top-color: #4a4a4a;\n      transform: translateX(-50%);\n      bottom: -10px;\n      left: 50%;\n      \n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      transform: translateY(-50%);\n      border-right-color: #4a4a4a;\n      left: -10px;\n      top: 50%;\n    '], ['\n      transform: translateY(-50%);\n      border-right-color: #4a4a4a;\n      left: -10px;\n      top: 50%;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n      transform: translateY(-50%);\n      border-left-color: #4a4a4a;\n      right: -10px;\n      top: 50%;\n    '], ['\n      transform: translateY(-50%);\n      border-left-color: #4a4a4a;\n      right: -10px;\n      top: 50%;\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n      border-bottom-color: #4a4a4a;\n      transform: translateX(-50%);\n      top: -10px;\n      left: 50%;\n    '], ['\n      border-bottom-color: #4a4a4a;\n      transform: translateX(-50%);\n      top: -10px;\n      left: 50%;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TriangleMaps = {
  top: ['left', 'right'],
  left: ['top', 'bottom'],
  right: []
};

var rorateRange = ['right', 'left', 'top', 'bottom'];

var defaultRorate = 'left';

// const afterIShadow = css`
//   &::after {
//     content: ' ';
//     position: absolute;
//     width: 0;
//     height: 0;
//     top: 0;
//     left: 0;
//     border-left: 31px solid transparent;
//     border-right: 31px solid transparent;
//     border-bottom: 31px solid #000;
//     position: absolute;
//     left: -31px;
//     top: -1px;
//     z-index: -111 !important;
//   }
// `;

var Triangle = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)('top')(_templateObject2), (0, _styledIs2.default)('right')(_templateObject3), (0, _styledIs2.default)('left')(_templateObject4), (0, _styledIs2.default)('bottom')(_templateObject5), (0, _styledIs2.default)('top')(_templateObject6), (0, _styledIs2.default)('right')(_templateObject7), (0, _styledIs2.default)('left')(_templateObject8), (0, _styledIs2.default)('bottom')(_templateObject9));
Triangle.defaultProps = {
  size: 10,
  color: '#000'
};

exports.default = Triangle;