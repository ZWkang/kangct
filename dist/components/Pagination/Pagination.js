'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  ', '\n  font-size: 1rem;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  :hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n  ', '\n  ', '\n'], ['\n  position: relative;\n  ', '\n  font-size: 1rem;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  :hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: rgba(0, 0, 0, 0.05);\n  '], ['\n    background-color: rgba(0, 0, 0, 0.05);\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    cursor: not-allowed;\n    opacity: 0.4;\n    pointer-events: none;\n  '], ['\n    cursor: not-allowed;\n    opacity: 0.4;\n    pointer-events: none;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  flex: 0 0 auto;\n  align-items: center;\n  user-select: none;\n  :first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-left: 1px solid #ccc;\n  }\n  :last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-right: 1px solid #ccc;\n  }\n  :not(:first-child) {\n    &::before {\n      content: \'\';\n      position: absolute;\n      height: 100%;\n      left: 0;\n      top: 0;\n      width: 1px;\n      background: #ccc;\n    }\n  }\n'], ['\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n  flex: 0 0 auto;\n  align-items: center;\n  user-select: none;\n  :first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border-left: 1px solid #ccc;\n  }\n  :last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-right: 1px solid #ccc;\n  }\n  :not(:first-child) {\n    &::before {\n      content: \'\';\n      position: absolute;\n      height: 100%;\n      left: 0;\n      top: 0;\n      width: 1px;\n      background: #ccc;\n    }\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  list-style: none;\n  display: inline-flex;\n  padding: 0;\n'], ['\n  list-style: none;\n  display: inline-flex;\n  padding: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizeMap = {
  normal: {
    fontSize: '1em',
    padding: '.7em .8em'
  },
  small: {
    fontSize: '.8em',
    padding: '.4em .6em'
  },
  large: {
    fontSize: '1.2em',
    padding: '.9em 1.1em'
  }
};
var PageItem = _styledComponents2.default.a(_templateObject, function (props) {
  return sizeMap[props.size] || sizeMap['normal'];
}, (0, _styledIs2.default)('active')(_templateObject2), (0, _styledIs2.default)('disabled')(_templateObject3));
var PageItemWrapper = _styledComponents2.default.li(_templateObject4);

var PageContainer = _styledComponents2.default.ul(_templateObject5);

var PageMinItemNumber = 6;

var PageSimple = function (_Component) {
  _inherits(PageSimple, _Component);

  function PageSimple(props) {
    _classCallCheck(this, PageSimple);

    return _possibleConstructorReturn(this, (PageSimple.__proto__ || Object.getPrototypeOf(PageSimple)).call(this, props));
  }

  _createClass(PageSimple, [{
    key: 'ItemsRender',
    value: function ItemsRender() {
      var _props = this.props,
          currentPage = _props.currentPage,
          size = _props.size,
          toNext = _props.toNext,
          toPage = _props.toPage,
          totalPages = _props.totalPages,
          startPage = _props.startPage;
      // console.log(currentPage);

      var ItemArray = [];
      if (currentPage - startPage <= 1) {
        ItemArray = [startPage, startPage + 1, startPage + 2];
      } else if (totalPages - currentPage <= 1) {
        ItemArray = [totalPages - 2, totalPages - 1, totalPages];
      } else {
        ItemArray = [currentPage - 1, currentPage, currentPage + 1];
      }
      var Items = ItemArray.map(function (item) {
        return _react2.default.createElement(
          PageItemWrapper,
          {
            key: item,
            onClick: function onClick() {
              toPage(item);
            }
          },
          _react2.default.createElement(
            PageItem,
            {
              active: currentPage === item,
              size: size,
              'aria-current': item === currentPage ? 'true' : 'false',
              'aria-disabled': 'false',
              tabIndex: '0',
              'aria-label': 'page ' + item
            },
            ' ',
            item,
            ' '
          )
        );
      });
      return Items;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.ItemsRender()
      );
    }
  }]);

  return PageSimple;
}(_react.Component);

var Pagination = function (_Component2) {
  _inherits(Pagination, _Component2);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this2 = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _initialiseProps.call(_this2);

    var currentPage = props.defaultActivePage > props.totalPages ? 1 : props.defaultActivePage;
    _this2.state = {
      currentPage: currentPage
    };
    return _this2;
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      if (this.props.totalPages < PageMinItemNumber) {
        return _react2.default.createElement(
          PageContainer,
          { ariaLabel: 'Pagination Navigation', role: 'navigation' },
          this.renderToFirst(),
          _react2.default.createElement(PageSimple, {
            currentPage: this.state.currentPage,
            toPage: this.toPage,
            totalPages: this.props.totalPages,
            startPage: 1
          }),
          this.renderToLast()
        );
      }
      return _react2.default.createElement(
        PageContainer,
        { ariaLabel: 'Pagination Navigation', role: 'navigation' },
        this.renderToFirst(),
        this.renderMainCenter(),
        this.renderToLast()
      );
    }
  }]);

  return Pagination;
}(_react.Component);
/**
 * @components
 */


Pagination.defaultProps = {
  currentPage: 0,
  totalPages: 0,
  PrevText: '<',
  NextText: '>',
  size: 'normal'
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.toFirst = function () {
    _this3.setState({
      currentPage: 1
    });
  };

  this.toLast = function () {
    _this3.setState({});
  };

  this.toPage = function (index) {
    var onPageChange = _this3.props.onPageChange;

    if (!_this3.execLimitNumber(index)) return false;
    _this3.setState({
      currentPage: index
    }, function () {
      onPageChange && onPageChange(index);
    });
  };

  this.renderToFirst = function () {
    var size = _this3.props.size;
    var totalPages = _this3.props.totalPages;
    var currentPage = _this3.state.currentPage;

    return _react2.default.createElement(
      PageItemWrapper,
      { onClick: _this3.toPrev },
      _react2.default.createElement(
        PageItem,
        {
          'aria-current': 'false',
          'aria-disabled': currentPage === 1 ? 'true' : 'false',
          tabIndex: '0',
          'aria-label': 'Next item',
          size: size,
          disabled: currentPage === 1
        },
        ' ',
        '<',
        ' '
      )
    );
  };

  this.execLimitNumber = function (next) {
    var currentPage = _this3.state.currentPage;
    var totalPages = _this3.props.totalPages;

    if (next === currentPage) return false;
    if (next < 1) return false;
    if (next > totalPages) return false;
    return true;
  };

  this.toNext = function () {
    var currentPage = _this3.state.currentPage;

    _this3.toPage(currentPage + 1);
  };

  this.toPrev = function () {
    var currentPage = _this3.state.currentPage;

    _this3.toPage(currentPage - 1);
  };

  this.renderToLast = function () {
    var size = _this3.props.size;
    var totalPages = _this3.props.totalPages;
    var currentPage = _this3.state.currentPage;

    return _react2.default.createElement(
      PageItemWrapper,
      { onClick: _this3.toNext },
      _react2.default.createElement(
        PageItem,
        {
          'aria-current': 'false',
          'aria-disabled': currentPage === totalPages ? 'true' : 'false',
          tabIndex: '0',
          'aria-label': 'Next item',
          size: size,
          disabled: currentPage === totalPages
        },
        '>'
      )
    );
  };

  this.renderMainCenter = function () {
    var currentPage = _this3.state.currentPage;
    var totalPages = _this3.props.totalPages;
    var size = _this3.props.size;

    var renderOneSection = _react2.default.createElement(
      PageItemWrapper,
      {
        key: 'onesection',
        onClick: function onClick() {
          _this3.toPage(1);
        }
      },
      _react2.default.createElement(
        PageItem,
        {
          active: currentPage === 1,
          'aria-current': currentPage === 1 ? 'true' : 'false',
          'aria-disabled': 'false',
          tabIndex: '0',
          'aria-label': 'First item',
          size: size
        },
        ' ',
        1,
        ' '
      )
    );
    var renderLastSection = _react2.default.createElement(
      PageItemWrapper,
      {
        key: 'lastsection',
        onClick: function onClick() {
          _this3.toPage(totalPages);
        }
      },
      _react2.default.createElement(
        PageItem,
        {
          active: currentPage === totalPages,
          'aria-current': currentPage === totalPages ? 'true' : 'false',
          'aria-disabled': 'false',
          tabIndex: '0',
          'aria-label': 'Last item',
          size: size
        },
        ' ',
        totalPages,
        ' '
      )
    );
    var ItemArray = [];
    if (currentPage > 1 && currentPage < totalPages) {
      if (currentPage - 1 > 2 && totalPages - currentPage > 2) {
        ItemArray = ['...', currentPage - 1, currentPage, currentPage + 1, '...'];
      } else if (currentPage - 1 <= 2) {
        ItemArray = [2, 3, 4, 5, '...'];
      } else if (totalPages - currentPage <= 2) {
        ItemArray = ['...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
      }
    } else {
      ItemArray = currentPage === 1 ? [currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4, '...'] : ['...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
    }
    var mainSection = ItemArray.map(function (item, index) {
      if (typeof item === 'string') {
        return _react2.default.createElement(
          PageItemWrapper,
          { key: item + index },
          _react2.default.createElement(
            PageItem,
            { 'aria-current': 'false', 'aria-disabled': 'false', tabIndex: '0', size: size },
            ' ',
            item,
            ' '
          )
        );
      } else {
        return _react2.default.createElement(
          PageItemWrapper,
          {
            key: item,
            onClick: function onClick() {
              _this3.toPage(item);
            }
          },
          _react2.default.createElement(
            PageItem,
            {
              size: size,
              active: item === currentPage,
              'aria-current': item === currentPage ? 'true' : 'false',
              'aria-disabled': 'false',
              tabIndex: '0',
              'aria-label': 'page ' + item
            },
            ' ',
            item,
            ' '
          )
        );
      }
    });
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      renderOneSection,
      mainSection,
      renderLastSection
    );
  };
};

exports.default = Pagination;