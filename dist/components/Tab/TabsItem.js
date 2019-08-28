'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: inline-block;\n  color: #ccc;\n  background-color: #fff;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 15px;\n  cursor: pointer;\n  position: relative;\n  font-size: 18px;\n  margin-right: 5px;\n  :after {\n    content: \'\';\n    width: 0;\n    background: #000;\n    height: 2px;\n    position: absolute;\n    left: 100%;\n    bottom: 0;\n    transition: all 0.4s;\n  }\n  ', '\n'], ['\n  box-sizing: border-box;\n  display: inline-block;\n  color: #ccc;\n  background-color: #fff;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 15px;\n  cursor: pointer;\n  position: relative;\n  font-size: 18px;\n  margin-right: 5px;\n  :after {\n    content: \'\';\n    width: 0;\n    background: #000;\n    height: 2px;\n    position: absolute;\n    left: 100%;\n    bottom: 0;\n    transition: all 0.4s;\n  }\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        color: #333;\n        :after {\n          width: 100%;\n          left: 0;\n          transition-delay: 0.1s;\n        }\n        & ~ li::after {\n          left: 0;\n        }\n    '], ['\n        color: #333;\n        :after {\n          width: 100%;\n          left: 0;\n          transition-delay: 0.1s;\n        }\n        & ~ li::after {\n          left: 0;\n        }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabsItem = _styledComponents2.default.li(_templateObject, (0, _styledIs2.default)('active')(_templateObject2));

var TabsItemWrapper = function TabsItemWrapper(props) {
  var active = props.active;

  var node = (0, _react.useRef)(false);
  // console.log(props);
  function checkRefFocus() {
    if (active && node.current) {
      node.current.focus();
    }
  }
  useUpdateEffect(function () {
    checkRefFocus();
  }, [props.active]);

  return _react2.default.createElement(TabsItem, _extends({}, props, { ref: node }));
};
function useUpdateEffect(effect, deps) {
  var mounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    }
  }, deps);
}
/**
 * @components
 */
exports.default = TabsItemWrapper;