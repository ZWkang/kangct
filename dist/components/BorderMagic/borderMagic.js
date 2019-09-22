'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    border: ', ';\n    position: relative;\n    width: ', 'px;\n    height: ', 'px;\n    &:before {\n      position: absolute;\n      content: \' \';\n      top: 0;\n      left: -', 'px;\n      width: ', 'px;\n      height: ', 'px;\n      box-shadow: ', ';\n    }\n  '], ['\n    border: ', ';\n    position: relative;\n    width: ', 'px;\n    height: ', 'px;\n    &:before {\n      position: absolute;\n      content: \' \';\n      top: 0;\n      left: -', 'px;\n      width: ', 'px;\n      height: ', 'px;\n      box-shadow: ', ';\n    }\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../util/index.js');

var _tinyInvariant = require('tiny-invariant');

var _tinyInvariant2 = _interopRequireDefault(_tinyInvariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import warning from 'warning';


var BASIC_SIZE = 10;

/**
 *
 * @param {Array} matrixArray 矩阵xy数组
 * @param {Number} normalSize 默认一个长度
 */
var calcBorderStyle = function calcBorderStyle() {
  var matrixArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var normalSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return matrixArray.map(function (v) {
    return v[0] * normalSize + 'px ' + v[1] * normalSize + 'px ' + v[2];
  });
};

/**
 *
 * @param {Array} matrixArray 矩阵xy
 * @param {Boolean} bool choose x or y  x => true y => false
 */
var maxXorY = function maxXorY() {
  var matrixArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var theMaxOne = -Infinity;
  var theIndexInArray = bool ? 0 : 1;
  matrixArray.forEach(function (v, index) {
    if (v.length < 3) throw new Error('your matric array is error!!! index : ' + index);
    if (v[theIndexInArray] > theMaxOne) theMaxOne = v[theIndexInArray];
  });
  return theMaxOne;
};

var BorderMagicWrapper = function BorderMagicWrapper(props) {
  var isDubleTwo = props.isDubleTwo,
      matrixArray = props.matrixArray,
      isDuble = props.isDuble;

  var useArray = null;
  if (isDuble) {
    var AccumulateNumber = !!isDubleTwo ? 1 : 0;
    var maxX = maxXorY(matrixArray, true);
    useArray = matrixArray.map(function (v) {
      return v.map(function (vc, index) {
        if (index === 0) return vc + (maxX - vc) * 2 + AccumulateNumber;
        return vc;
      });
    }).concat(matrixArray);
  } else {
    useArray = matrixArray;
  }

  var BorderMagic = _styledComponents2.default.div(_templateObject, props.borderStyle || '0px solid none', maxXorY(useArray, true) * props.normalSize, (maxXorY(useArray, false) + 1) * props.normalSize, props.normalSize, props.normalSize || BASIC_SIZE, props.normalSize || BASIC_SIZE, calcBorderStyle(useArray, props.normalSize || BASIC_SIZE).join(','));

  return _react2.default.createElement(BorderMagic, props);
};

BorderMagicWrapper.defaultProps = {
  borderStyle: '0px solid none', // border默认为空
  matrixArray: [], // 坐标点数组
  normalSize: 1
};
BorderMagicWrapper.propTypes = {
  borderStyle: _propTypes2.default.string,
  normalSize: _propTypes2.default.number,
  matrixArray: _propTypes2.default.arrayOf(_propTypes2.default.array)
};

var BorderMagicCom = function (_React$Component) {
  _inherits(BorderMagicCom, _React$Component);

  function BorderMagicCom(props) {
    _classCallCheck(this, BorderMagicCom);

    var _this = _possibleConstructorReturn(this, (BorderMagicCom.__proto__ || Object.getPrototypeOf(BorderMagicCom)).call(this, props));

    _this.state = {
      matrixArray: []
    };
    return _this;
  }

  _createClass(BorderMagicCom, [{
    key: 'componentDidMount',
    value: async function componentDidMount() {
      var _props = this.props,
          imageUrl = _props.imageUrl,
          matrixArray = _props.matrixArray;

      (0, _tinyInvariant2.default)(imageUrl, '确认是否漏传imageUrl');
      matrixArray = matrixArray || (await (0, _index.transfromData)({ imageUrl: imageUrl }));
      this.setState({
        matrixArray: matrixArray
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(BorderMagicWrapper, _extends({}, this.props, this.state));
    }
  }]);

  return BorderMagicCom;
}(_react2.default.Component);

exports.default = BorderMagicCom;