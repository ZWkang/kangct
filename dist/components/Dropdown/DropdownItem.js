'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  height: 36px;\n  padding: 0 16px;\n  line-height: 36px;\n  color: #333;\n  cursor: pointer;\n  :hover {\n    background: rgba(66, 133, 244, 0.08);\n  }\n'], ['\n  display: flex;\n  height: 36px;\n  padding: 0 16px;\n  line-height: 36px;\n  color: #333;\n  cursor: pointer;\n  :hover {\n    background: rgba(66, 133, 244, 0.08);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n'], ['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 1px;\n  overflow: hidden;\n  background-color: #e7e7e7;\n  line-height: 0;\n'], ['\n  height: 1px;\n  overflow: hidden;\n  background-color: #e7e7e7;\n  line-height: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.li(_templateObject);

var ItemTitle = _styledComponents2.default.div(_templateObject2);

var HrLine = _styledComponents2.default.div(_templateObject3);

var DropdownItem = function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem(props) {
    _classCallCheck(this, DropdownItem);

    var _this = _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.handleItemClick = function () {
      var onClick = _this.props.onClick;

      onClick && onClick();
    };

    return _this;
  }

  _createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var title = this.props.title;

      if (title === '-') {
        return _react2.default.createElement(HrLine, null);
      }
      return _react2.default.createElement(
        Item,
        { onClick: this.handleItemClick },
        _react2.default.createElement(
          ItemTitle,
          null,
          title
        )
      );
    }
  }]);

  return DropdownItem;
}(_react.Component);

exports.default = DropdownItem;