'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  margin-bottom: 1rem;\n  color: rgb(98, 37, 26);\n  background-color: rgb(241, 218, 214);\n  padding: 0.75rem 1.25rem;\n  border-width: 1px;\n  border-style: solid;\n  border-image: initial;\n  border-radius: 0.25rem;\n  border-color: rgb(236, 204, 197);\n  ', '\n'], ['\n  position: relative;\n  margin-bottom: 1rem;\n  color: rgb(98, 37, 26);\n  background-color: rgb(241, 218, 214);\n  padding: 0.75rem 1.25rem;\n  border-width: 1px;\n  border-style: solid;\n  border-image: initial;\n  border-radius: 0.25rem;\n  border-color: rgb(236, 204, 197);\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        ', '\n    '], ['\n        ', '\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  cursor: pointer;\n  right: 16px;\n'], ['\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  cursor: pointer;\n  right: 16px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n'], ['\n  display: flex;\n  flex-direction: column;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 1rem;\n  margin-bottom: 4px;\n'], ['\n  font-size: 1rem;\n  margin-bottom: 4px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  margin-bottom: 4px;\n'], ['\n  font-size: 12px;\n  margin-bottom: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colorMaps = {
  success: {
    bgcolor: 'rgb(212, 237, 217);',
    color: 'rgb(20, 86, 35);',
    bdcolor: 'rgb(194, 230, 202);'
  },
  info: {
    bgcolor: 'rgb(208, 236, 240);',
    color: 'rgb(11, 84, 95);',
    bdcolor: 'rgb(190, 228, 235);'
  },
  danger: {
    bgcolor: 'rgb(248, 214, 217);',
    color: 'rgb(114, 27, 35);',
    bdcolor: 'rgb(245, 198, 202);'
  },
  warning: {
    bgcolor: 'rgb(255, 242, 205);',
    color: 'rgb(132, 100, 3);',
    bdcolor: 'rgb(255, 237, 185);'
  },
  secondary: {
    bgcolor: 'rgb(225, 227, 229);',
    color: 'rgb(56, 60, 65);',
    bdcolor: 'rgb(225, 227, 229);'
  }
};

var handleAlertTypeColorChoose = function handleAlertTypeColorChoose(maps) {
  return function (name) {
    return function (props) {
      var mapkey = props[name];
      var mapkeys = Object.keys(maps);
      if (~mapkeys.indexOf(mapkey) >= 0) {
        mapkey = mapkeys[0];
      }
      return (0, _styledComponents.css)(_templateObject, Object.keys(maps[mapkey]).map(function (item, index, source) {
        if (item === 'bgcolor') {
          return 'background-color: ' + maps[mapkey][item];
        }
        if (item === 'color') {
          return 'color: ' + maps[mapkey][item];
        }
        if (item === 'bdcolor') {
          return 'border-color: ' + maps[mapkey][item];
        }
      }).join(''));
    };
  };
};

var AlertWrapper = _styledComponents2.default.div(_templateObject2, (0, _styledIs2.default)('type')(_templateObject3, handleAlertTypeColorChoose(colorMaps)('type')));
var AlertClose = _styledComponents2.default.i(_templateObject4);
var AlertContentWrapper = _styledComponents2.default.div(_templateObject5);
var AlertTitle = _styledComponents2.default.div(_templateObject6);
var AlertMessage = _styledComponents2.default.div(_templateObject7);

/**
 * autoclose
 * closetime
 * type
 * title
 * message
 * canclose
 * show
 *
 *
 * onclose
 */

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.handleAlertClose = function (e) {
      var onClose = _this.props.onClose;

      _this.setState({
        show: false
      }, function () {
        onClose && onClose(e, _this.state, _this.props, _this);
      });
    };

    _this.state = {
      show: props.show
    };
    return _this;
  }

  _createClass(Alert, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show !== this.state.show) {
        this.setState({
          show: nextProps.show
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          autoclose = _props.autoclose,
          _props$closetime = _props.closetime,
          closetime = _props$closetime === undefined ? 2000 : _props$closetime;


      if (autoclose === true) {
        setTimeout(function () {
          _this2.handleAlertClose();
        }, closetime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          message = _props2.message,
          canClose = _props2.canClose,
          children = _props2.children,
          type = _props2.type;
      var show = this.state.show;

      if (!show) return null;
      return _react2.default.createElement(
        AlertWrapper,
        { type: type },
        _react2.default.createElement(
          AlertContentWrapper,
          null,
          _react2.default.createElement(
            AlertTitle,
            null,
            title
          ),
          _react2.default.createElement(
            AlertMessage,
            null,
            message ? message : children
          )
        ),
        canClose ? _react2.default.createElement(
          AlertClose,
          { onClick: this.handleAlertClose },
          'X'
        ) : null
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.defaultProps = {
  canClose: false,
  autoclose: false,
  type: 'info',
  title: '',
  show: true,
  closetime: 2000
};


Alert.propTypes = {
  canClose: _propTypes2.default.bool,
  autoclose: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  title: _propTypes2.default.string,
  show: _propTypes2.default.bool,
  closetime: _propTypes2.default.number
};
exports.default = Alert;