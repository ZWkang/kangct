'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex: none;\n    width: ', '%;\n  '], ['\n    flex: none;\n    width: ', '%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  /* flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: .75rem; */\n  min-height: 1px;\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  float: left;\n  \n  &:after{\n    clear: both;\n    content: " ";\n    display: table;\n  }\n  \n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  \n'], ['\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  /* flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: .75rem; */\n  min-height: 1px;\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  float: left;\n  \n  &:after{\n    clear: both;\n    content: " ";\n    display: table;\n  }\n  \n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    padding-left: ', '\n    padding-right: ', '\n  '], ['\n    padding-left: ', '\n    padding-right: ', '\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    border: 1px solid #ddd;\n  '], ['\n    border: 1px solid #ddd;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: block;\n  margin: 0 -0.75rem;\n'], ['\n  display: block;\n  margin: 0 -0.75rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var basicSizeWithColumn = 100 / 12;

var columnSizeMap = ['is-1', 'is-2', 'is-3', 'is-4', 'is-5', 'is-6', 'is-7', 'is-8', 'is-9', 'is-10', 'is-11', 'is-12'];
var splitMap = ['1-1'];
var defaultMargin = 0;
var defaultColumnsLimit = 12;
var offsetSize = ['left-offset-2'];

var CalculateColumnSize = function CalculateColumnSize(_ref) {
  var _ref$columnSize = _ref.columnSize,
      columnSize = _ref$columnSize === undefined ? defaultColumnsLimit : _ref$columnSize,
      _ref$point = _ref.point,
      point = _ref$point === undefined ? 1 : _ref$point;

  return Math.round(point / columnSize * 10 ** 8) / 10 ** 6;
};

var breakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
var sorts = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};

var GeneratorMedias = function GeneratorMedias(props, filters) {
  var template = function template(breakPoint) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (breakPoint !== 0 && !breakPoint) return;
    return '\n      @media (min-width: ' + breakPoint + 'px) {\n        ' + width.join('') + '\n        ' + offset.join('') + '\n      }\n    ';
  };
  var mediaqueryString = filters.sort(function (prev, next) {
    return sorts[prev.slice(0, 2)] - sorts[next.slice(0, 2)];
  }).map(function (item) {
    // md-is-1-3
    if (/\-is\-\d+\-\d+$/.test(item)) {
      var _item$split = item.split('-'),
          _item$split2 = _toArray(_item$split),
          type = _item$split2[0],
          rest = _item$split2.slice(1);

      var size = rest.join('-');
      var width = CalculateDefaultFlexColumn(_defineProperty({}, size, true), [size]);
      return template(breakPoints[type], width);
    }
    // md-is-3
    if (/\-is\-\d+$/.test(item)) {
      var _item$split3 = item.split('-'),
          _item$split4 = _toArray(_item$split3),
          _type = _item$split4[0],
          _rest = _item$split4.slice(1);

      var _size = _rest.join('-');
      var _width = CalculateDefaultColumnCall(_defineProperty({}, _size, true));
      return template(breakPoints[_type], _width);
    }
    // md-left-offset-3
    if (/\-.*\-offset\-\d+$/.test(item)) {
      var _item$split5 = item.split('-'),
          _item$split6 = _toArray(_item$split5),
          _type2 = _item$split6[0],
          _rest2 = _item$split6.slice(1);

      var _size2 = _rest2.join('-');
      var offset = CalculateOffsetSize(_defineProperty({}, _size2, true), [_size2]);
      return template(breakPoints[_type2], '', offset);
    }
    // md-left-offset-2-3
    if (/\-.*\-offset\-\d+\-\d+$/.test(item)) {
      var _item$split7 = item.split('-'),
          _item$split8 = _toArray(_item$split7),
          _type3 = _item$split8[0],
          _rest3 = _item$split8.slice(1);

      var _size3 = _rest3.join('-');
      var _width2 = CalculateDefaultFlexColumn(_defineProperty({}, _size3, true));
      return template(breakPoints[_type3], _width2);
    }
  }).filter(Boolean).join('');
  return (0, _styledComponents.css)(_templateObject, mediaqueryString);
};

//   return `flex: none; width: ${Number(trueValue) * basicSizeWithColumn}%;`
// }
var CalculateDefaultColumnCall = function CalculateDefaultColumnCall(props) {
  var result = columnSizeMap.filter(function (v) {
    return Boolean(props[v]) === true;
  });
  if (!result || result.length === 0) return '';
  var size = result[result.length - 1];

  var _size$split = size.split('-'),
      _size$split2 = _slicedToArray(_size$split, 2),
      point = _size$split2[1];

  var coulumnProsent = CalculateColumnSize({ columnSize: defaultColumnsLimit, point: point });
  return (0, _styledComponents.css)(_templateObject2, coulumnProsent);
};
var RegexpFilter = function RegexpFilter(val) {
  return function (cb) {
    return function (props) {
      return cb(props, Object.keys(props).filter(function (item) {
        return val.test(item);
      }));
    };
  };
};

var CalculateOffsetSize = function CalculateOffsetSize(props, filters) {
  if (filters.length <= 0) return;

  var readySplit = filters[filters.length - 1];

  var _readySplit$split = readySplit.split('-'),
      _readySplit$split2 = _slicedToArray(_readySplit$split, 4),
      direction = _readySplit$split2[0],
      point = _readySplit$split2[2],
      columnSize = _readySplit$split2[3];

  var blockDirection = 'margin-right';
  // console.log(direction);
  if (direction === 'left') {
    blockDirection = 'margin-left';
  }

  var coulumnProsent = CalculateColumnSize({ columnSize: columnSize, point: point });
  return '\n    ' + blockDirection + ' :' + coulumnProsent + '%;\n  ';
};

var CalculateDefaultFlexColumn = function CalculateDefaultFlexColumn(props, val) {
  if (val.length === 0) return;
  var readySplit = val[val.length - 1];

  var _readySplit$split3 = readySplit.split('-'),
      _readySplit$split4 = _slicedToArray(_readySplit$split3, 3),
      point = _readySplit$split4[1],
      columnSize = _readySplit$split4[2];

  var coulumnProsent = CalculateColumnSize({ columnSize: columnSize, point: point });
  return (0, _styledComponents.css)(_templateObject2, coulumnProsent);
};

var getProps = function getProps(val) {
  return function (props) {
    return props[val];
  };
};
var Column = _styledComponents2.default.div(_templateObject3, CalculateDefaultColumnCall, (0, _styledIs2.default)('gutter')(_templateObject4, getProps('gutter'), getProps('gutter')), (0, _styledIs2.default)('border')(_templateObject5), RegexpFilter(/^is-\d{0,2}\-\d{0,2}/i)(CalculateDefaultFlexColumn), RegexpFilter(/^(left|right)-offset-\d{1,5}(-\d{1,5})?$/i)(CalculateOffsetSize), RegexpFilter(/(xs|sm|md|lg|xl)/i)(GeneratorMedias));

Column.Row = _styledComponents2.default.div(_templateObject6);
/**
 * @components
 */
exports.default = Column;