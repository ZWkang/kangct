'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FlexItem = undefined;

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _FlexItem = require('./FlexItem');

var _FlexItem2 = _interopRequireDefault(_FlexItem);

var _SimpleFlex = require('./SimpleFlex');

var _SimpleFlex2 = _interopRequireDefault(_SimpleFlex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Flex2.default.Item = _FlexItem2.default;
_Flex2.default.SimpleFlex = _SimpleFlex2.default;

exports.FlexItem = _FlexItem2.default;
exports.default = _Flex2.default;