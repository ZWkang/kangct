'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItemPropsTypes = exports.FlexCommonPorps = exports.FlexPropsTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexPropsTypes = exports.FlexPropsTypes = {
  display: _propTypes2.default.string,
  flexDirection: _propTypes2.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: _propTypes2.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flexFlow: _propTypes2.default.string,
  justifyContent: _propTypes2.default.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  alignItems: _propTypes2.default.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  alignContent: _propTypes2.default.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  full: _propTypes2.default.bool,
  center: _propTypes2.default.bool,
  customStyle: _propTypes2.default.string
};

var FlexCommonPorps = exports.FlexCommonPorps = {
  customStyle: ''
};

var FlexItemPropsTypes = exports.FlexItemPropsTypes = {
  order: _propTypes2.default.number,
  flexGrow: _propTypes2.default.number,
  flexShrink: _propTypes2.default.number,
  flexBasis: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  flex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  alignSelf: _propTypes2.default.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  customStyle: _propTypes2.default.string
};
// export default {
//   FlexPropsTypes,
//   FlexItemPropsTypes
// }