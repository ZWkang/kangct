'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BreadcrumbWrapper = require('./BreadcrumbWrapper');

var _BreadcumbItem = require('./BreadcumbItem');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumb = function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb(props) {
    _classCallCheck(this, Breadcrumb);

    var _this = _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).call(this, props));

    _this.handleCrumbRender = function (_ref) {
      var link = _ref.link,
          index = _ref.index,
          title = _ref.title,
          render = _ref.render,
          last = _ref.last;

      if (typeof render === 'function') {
        return render({ link: link, index: index, title: title, last: last });
      }
      var currentPage = last ? { 'aria-current': 'page' } : {};
      if (!link) {
        return _react2.default.createElement(
          _BreadcumbItem.LiCom,
          { key: index },
          _react2.default.createElement(
            _BreadcumbItem.Span,
            currentPage,
            title
          )
        );
      }
      return _react2.default.createElement(
        _BreadcumbItem.LiCom,
        { key: index },
        _react2.default.createElement(
          _BreadcumbItem.Alink,
          _extends({ href: link }, currentPage),
          title
        )
      );
    };

    return _this;
  }

  _createClass(Breadcrumb, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.didMount) {
        this.props.didMount();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.unmount) {
        this.props.unmount();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var crumbs = this.props.crumbs;

      return _react2.default.createElement(
        _BreadcrumbWrapper.BreadcrumbWrapper,
        null,
        _react2.default.createElement(
          _BreadcrumbWrapper.BreadcrumbColWrapper,
          null,
          crumbs.map(function (_ref2, index) {
            var link = _ref2.link,
                title = _ref2.title,
                render = _ref2.render;

            var last = false;
            if (index === crumbs.length - 1) {
              last = true;
            }
            return _this2.handleCrumbRender({ link: link, title: title, index: index, render: render, last: last });
          })
        )
      );
    }
  }]);

  return Breadcrumb;
}(_react2.default.Component);

Breadcrumb.propTypes = {
  crumbs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    // link: PropTypes.oneOf(PropTypes.string, PropTypes.bool),
    title: _propTypes2.default.string.isRequired,
    render: _propTypes2.default.Function
  }))
};
Breadcrumb.defaultProps = {
  crumbs: []
};
/**
 * @components
 */
exports.default = Breadcrumb;