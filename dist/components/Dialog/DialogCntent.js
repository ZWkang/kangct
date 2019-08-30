'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  /* align-content: center; */\n  /* justify-content: center; */\n  overflow-y: auto;\n  overflow-x: auto;\n  border-radius: 1rem;\n  ', '\n\n  ', '\n  ', '\n'], ['\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  /* align-content: center; */\n  /* justify-content: center; */\n  overflow-y: auto;\n  overflow-x: auto;\n  border-radius: 1rem;\n  ', '\n\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        overflow: hidden;\n    '], ['\n        overflow: hidden;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var maxHeightSizeMap = {
  small: '30vh',
  normal: '60vh',
  big: '80vh'
};
var maxWidthSizeMap = {
  small: '30vw',
  normal: '60vw',
  big: '80vw'
};
var controlMaxHeight = function controlMaxHeight(props) {
  return {
    maxHeight: maxHeightSizeMap[props.maxHeight] || maxHeightSizeMap['normal'],
    minHeight: maxHeightSizeMap[props.maxHeight] || maxHeightSizeMap['normal']
  };
};
var controlMaxWidth = function controlMaxWidth(props) {
  return {
    maxWidth: maxWidthSizeMap[props.maxWidth] || maxWidthSizeMap['normal'],
    minWidth: maxWidthSizeMap[props.maxWidth] || maxWidthSizeMap['normal']
  };
};
var DialogContent = _styledComponents2.default.div.attrs({
  tabIndex: 0
})(_templateObject, (0, _styledIs2.default)('overflow')(_templateObject2), (0, _styledIs2.default)('maxHeight')(_templateObject3, function (props) {
  return controlMaxHeight(props);
}), (0, _styledIs2.default)('maxWidth')(_templateObject3, function (props) {
  return controlMaxWidth(props);
}));

exports.default = DialogContent;