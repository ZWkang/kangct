'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  pointer-events: none;\n'], ['\n  pointer-events: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: ', ';\n  position: fixed;\n  z-index: 1088;\n  top: 0;\n  left: 0;\n  width: ', '%;\n  height: 2px;\n  transition: width 2s;\n'], ['\n  background: ', ';\n  position: fixed;\n  z-index: 1088;\n  top: 0;\n  left: 0;\n  width: ', '%;\n  height: 2px;\n  transition: width 2s;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  box-shadow: 0 0 10px ', ', 0 0 5px ', ';\n  opacity: 1;\n  transform: rotate(0deg) translate(0px, -4px);\n'], ['\n  display: block;\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  box-shadow: 0 0 10px ', ', 0 0 5px ', ';\n  opacity: 1;\n  transform: rotate(0deg) translate(0px, -4px);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mainColor = '#29d';

var SimpleDiv = _styledComponents2.default.div(_templateObject);
var DivItem = _styledComponents2.default.div(_templateObject2, mainColor, function (props) {
  return props.present;
});

// 亮色
var ProgressLine = _styledComponents2.default.div(_templateObject3, mainColor, mainColor);
// transform: translate3d(-0.6%, 0px, 0px);
//     transition: all 200ms ease 0s;

var Progress = function Progress(_ref) {
  var present = _ref.present;

  present = present < 0 ? 0 : present > 100 ? 88 : present;
  return _react2.default.createElement(
    SimpleDiv,
    null,
    _react2.default.createElement(
      DivItem,
      { present: present },
      _react2.default.createElement(ProgressLine, null)
    )
  );
};

Progress.propTypes = {
  present: _propTypes2.default.number
};
/**
 * @components
 * @name progress
 */
exports.default = Progress;