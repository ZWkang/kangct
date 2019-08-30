'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 6px;\n  font-size: 12px;\n  margin-right: 8px;\n  border-radius: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  padding: 0 6px;\n  color: #000;\n  border: 1px solid #ccc;\n  background: #eee;\n  ', '\n'], ['\n  border-radius: 6px;\n  font-size: 12px;\n  margin-right: 8px;\n  border-radius: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  padding: 0 6px;\n  color: #000;\n  border: 1px solid #ccc;\n  background: #eee;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        color: #fff;\n        border: 0;\n        background: #000;\n    '], ['\n        color: #fff;\n        border: 0;\n        background: #000;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-flex;\n  width: auto;\n  height: auto;\n'], ['\n  position: relative;\n  display: inline-flex;\n  width: auto;\n  height: auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: -9px;\n  right: -18px;\n  border-radius: 6px;\n  background: red;\n  color: #fff;\n  padding: 0 6px;\n  font-size: 12px;\n'], ['\n  position: absolute;\n  top: -9px;\n  right: -18px;\n  border-radius: 6px;\n  background: red;\n  color: #fff;\n  padding: 0 6px;\n  font-size: 12px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Badge = _styledComponents2.default.span(_templateObject, (0, _styledIs2.default)('solid')(_templateObject2));

Badge.propsTypes = {
  solid: _propTypes2.default.bool
};

var BadgeContainer = _styledComponents2.default.div(_templateObject3);
var BadgeContengt = _styledComponents2.default.div(_templateObject4);
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      content = _ref.content;

  return _react2.default.createElement(
    BadgeContainer,
    null,
    children,
    _react2.default.createElement(
      BadgeContengt,
      null,
      content
    )
  );
};
Wrapper.propsTypes = {
  children: _propTypes2.default.node,
  content: _propTypes2.default.node
};

Badge.Wrapper = Wrapper;

exports.default = Badge;