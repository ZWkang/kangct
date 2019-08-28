'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', 'px\n  '], ['\n    ', 'px\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n'], ['\n    ', '\n    ', '\n    ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        padding: ', ';\n    '], ['\n        padding: ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        margin: ', ';\n    '], ['\n        margin: ', ';\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        color: ', ';\n    '], ['\n        color: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var handleColor = function handleColor() {};
var handleMargin = function handleMargin() {};
var handleSize = function handleSize(value) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  return function (props) {
    var tempData = props[value];
    var result = void 0;
    if (!Array.isArray(tempData)) {
      tempData = [tempData];
    }
    var len = tempData.length;
    switch (len) {
      case 1:
        result = '' + tempData;
        break;
      case 2:
      case 3:
        result = tempData.slice(0, len).join(prefix + ' ');
        break;
      case 4:
        result = tempData.join(prefix + ' ');
        break;
      default:
        result = tempData.slice(0, 4).join(prefix + ' ');
        break;
    }
    return (0, _styledComponents.css)(_templateObject, result);
  };
};

var p = function p(name) {
  return function (props) {
    return props[name];
  };
};

var NormalBase = _styledComponents2.default.div(_templateObject2, (0, _styledIs2.default)('padding')(_templateObject3, handleSize('padding')), (0, _styledIs2.default)('margin')(_templateObject4, handleSize('margin')), (0, _styledIs2.default)('color')(_templateObject5, p('color')));

exports.default = NormalBase;