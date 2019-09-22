'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import { injectCustomStyle } from '../utils.js';

// import MD from 'react-icons/md';


var _templateObject = _taggedTemplateLiteral(['\n    width: ', 'px;\n    height: ', 'px;\n  '], ['\n    width: ', 'px;\n    height: ', 'px;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding-bottom: ', '%;\n  '], ['\n    padding-bottom: ', '%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      border-radius: ', 'px;\n    '], ['\n      border-radius: ', 'px;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border-radius: 999999px;\n  '], ['\n    border-radius: 999999px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin: 0;\n  display: block;\n  position: relative;\n  ', '\n  ', '\n'], ['\n  margin: 0;\n  display: block;\n  position: relative;\n  ', '\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  /* width: 100%; */\n  /* max-width: 100%; */\n'], ['\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  /* width: 100%; */\n  /* max-width: 100%; */\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n'], ['\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fixedStyleRegExp = /\bis(\d+?)x(\d+)\b/;

var ratioStyleRegExp = /\bis(\d+?)by(\d+)\b/;

var CalculationFixedSize = function CalculationFixedSize(props) {
  var mapsKeys = Object.keys(props);
  var filterKeys = mapsKeys.filter(String).filter(function (key) {
    return fixedStyleRegExp.test(key);
  });

  var LastOneKey = filterKeys[filterKeys.length - 1];
  //   debugger;
  // TODO: fix it

  var _ref = fixedStyleRegExp.exec(LastOneKey) || ['', '', ''],
      _ref2 = _slicedToArray(_ref, 3),
      width = _ref2[1],
      height = _ref2[2];

  return (0, _styledComponents.css)(_templateObject, width, height);
};

var CalculationRatioSize = function CalculationRatioSize(props) {
  var mapsKeys = Object.keys(props);
  var filterKeys = mapsKeys.filter(String).filter(function (key) {
    return ratioStyleRegExp.test(key);
  });

  var LastOneKey = filterKeys[filterKeys.length - 1];

  var _ref3 = ratioStyleRegExp.exec(LastOneKey) || ['', 1, 0],
      _ref4 = _slicedToArray(_ref3, 3),
      width = _ref4[1],
      height = _ref4[2];

  var ratio = height / width * 100;
  return (0, _styledComponents.css)(_templateObject2, ratio);
};

var CalculationRadius = function CalculationRadius(_ref5) {
  var radius = _ref5.radius;

  if (!radius) return '';

  if (typeof radius === 'number') {
    return (0, _styledComponents.css)(_templateObject3, radius);
  }
  return (0, _styledComponents.css)(_templateObject4);
};

var ImageContainer = _styledComponents2.default.figure(_templateObject5, CalculationFixedSize, CalculationRatioSize);

var fullPosition = (0, _styledComponents.css)(_templateObject6);
var normalSizes = (0, _styledComponents.css)(_templateObject7);

var ImageItem = _styledComponents2.default.img(_templateObject8, normalSizes, (0, _styledIs.match)(ratioStyleRegExp)(_templateObject9, fullPosition), CalculationRadius);
var NormalItem = _styledComponents2.default.div(_templateObject8, normalSizes, (0, _styledIs.match)(ratioStyleRegExp)(_templateObject9, fullPosition), CalculationRadius);

// styled-components/issues/1198
var handleRadius = function handleRadius(radius) {
  return {
    radius: radius ? typeof radius === 'number' ? radius : 'true' : 0
  };
};

var ImageComponent = _react2.default.forwardRef(function (_ref6, ref) {
  var radius = _ref6.radius,
      imageUrl = _ref6.imageUrl,
      _ref6$type = _ref6.type,
      type = _ref6$type === undefined ? 'img' : _ref6$type,
      children = _ref6.children,
      rest = _objectWithoutProperties(_ref6, ['radius', 'imageUrl', 'type', 'children']);

  radius = handleRadius(radius);
  var defaultInner = _react2.default.createElement(ImageItem, _extends({}, radius, { src: imageUrl }, rest));
  var normalInner = _react2.default.createElement(
    NormalItem,
    _extends({}, radius, rest),
    children
  );
  if (type !== 'img') {
    return _react2.default.createElement(
      ImageContainer,
      _extends({}, rest, { ref: ref }),
      normalInner
    );
  }
  return _react2.default.createElement(
    ImageContainer,
    _extends({}, rest, { ref: ref }),
    defaultInner
  );
});

exports.default = ImageComponent;