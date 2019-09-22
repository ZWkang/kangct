'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  min-height: 100vh;\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  min-height: 100vh;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 50%;\n  line-height: 1.4;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n'], ['\n  max-width: 50%;\n  line-height: 1.4;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: normal;\n  font-size: 0.9rem;\n  color: rgba(189, 189, 189, 1);\n  margin: 0.6rem 0 2rem 0;\n  display: block;\n'], ['\n  font-weight: normal;\n  font-size: 0.9rem;\n  color: rgba(189, 189, 189, 1);\n  margin: 0.6rem 0 2rem 0;\n  display: block;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n to {  transform: rotate(1turn) }\n'], ['\n to {  transform: rotate(1turn) }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 35px;\n  height: 35px;\n  display: inline-block;\n  border: 5px solid rgba(189, 189, 189, 0.25);\n  border-left-color: rgba(3, 155, 229, 1);\n  border-top-color: rgba(3, 155, 229, 1);\n  border-radius: 50%;\n  animation: ', ' infinite linear;\n'], ['\n  width: 35px;\n  height: 35px;\n  display: inline-block;\n  border: 5px solid rgba(189, 189, 189, 0.25);\n  border-left-color: rgba(3, 155, 229, 1);\n  border-top-color: rgba(3, 155, 229, 1);\n  border-radius: 50%;\n  animation: ', ' infinite linear;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingWrapper = _styledComponents2.default.section(_templateObject);
var LoadingTitle = _styledComponents2.default.p(_templateObject2);
var LoadingAuthor = _styledComponents2.default.p(_templateObject3);

var LoadingKeyframs = (0, _styledComponents.keyframes)(_templateObject4);

var LoadingItem = _styledComponents2.default.div(_templateObject5, LoadingKeyframs);

var Loading = function Loading(_ref) {
  var loading = _ref.loading,
      _ref$speed = _ref.speed,
      speed = _ref$speed === undefined ? 3000 : _ref$speed,
      title = _ref.title,
      author = _ref.author;

  var _useState = (0, _react.useState)(loading),
      _useState2 = _slicedToArray(_useState, 2),
      isloading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    setLoading(loading);
  }, [loading]);

  if (!isloading) return null;

  var itemStyle = {
    animationDuration: speed + 'ms'
  };
  return _react2.default.createElement(
    LoadingWrapper,
    null,
    _react2.default.createElement(
      LoadingTitle,
      null,
      title
    ),
    _react2.default.createElement(
      LoadingAuthor,
      null,
      ' ',
      author
    ),
    _react2.default.createElement(LoadingItem, { style: itemStyle })
  );
};

exports.default = Loading;