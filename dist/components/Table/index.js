'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 100%;\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: left;\n'], ['\n  max-width: 100%;\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: left;\n  white-space: nowrap;\n  padding: 1rem;\n'], ['\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: left;\n  white-space: nowrap;\n  padding: 1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  text-transform: uppercase;\n'], ['\n  ', '\n  text-transform: uppercase;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  :hover {\n    background: #ccc;\n  }\n  cursor: pointer;\n'], ['\n  :hover {\n    background: #ccc;\n  }\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableWrapper = _styledComponents2.default.table(_templateObject);
var ThAndTd = (0, _styledComponents.css)(_templateObject2);
var TableTh = _styledComponents2.default.th(_templateObject3, ThAndTd);
var TableTd = _styledComponents2.default.td(_templateObject4, ThAndTd);
var TableTr = _styledComponents2.default.tr(_templateObject5);

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        TableWrapper,
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              TableTh,
              null,
              'name'
            ),
            _react2.default.createElement(
              TableTh,
              null,
              'age'
            ),
            _react2.default.createElement(
              TableTh,
              null,
              'hobby'
            ),
            _react2.default.createElement(
              TableTh,
              null,
              'city'
            ),
            _react2.default.createElement(
              TableTh,
              null,
              'sex'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          data.map(function (_ref, index) {
            var _ref2 = _slicedToArray(_ref, 5),
                name = _ref2[0],
                age = _ref2[1],
                hobby = _ref2[2],
                city = _ref2[3],
                sex = _ref2[4];

            return _react2.default.createElement(
              TableTr,
              { key: index + name },
              _react2.default.createElement(
                TableTd,
                null,
                name
              ),
              _react2.default.createElement(
                TableTd,
                null,
                age
              ),
              _react2.default.createElement(
                TableTd,
                null,
                hobby
              ),
              _react2.default.createElement(
                TableTd,
                null,
                city
              ),
              _react2.default.createElement(
                TableTd,
                null,
                sex
              )
            );
          })
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;