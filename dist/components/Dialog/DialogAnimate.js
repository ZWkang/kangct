'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .modal-lock {\n    overflow: hidden;\n    /* position: fixed; */\n  }\n'], ['\n  .modal-lock {\n    overflow: hidden;\n    /* position: fixed; */\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n  }\n'], ['\n  from {\n    opacity: 0;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  to {\n    opacity: 0;\n  }\n'], ['\n  to {\n    opacity: 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 99;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 99;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  background: white;\n  position: relative;\n  z-index: 101;\n  background: rgba(255, 255, 255, 1);\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n'], ['\n  background: white;\n  position: relative;\n  z-index: 101;\n  background: rgba(255, 255, 255, 1);\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  ', '\n\n  /* \u5B50\u5143\u7D20\u5B9A\u4F4D\u76F8\u5173 */\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  /**/\n  ', '\n\n  ', '\n'], ['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  ', '\n\n  /* \u5B50\u5143\u7D20\u5B9A\u4F4D\u76F8\u5173 */\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  /**/\n  ', '\n\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    animation: 500ms ', ' both ease-in;\n  '], ['\n    animation: 500ms ', ' both ease-in;\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    animation-duration: ', 'ms;\n  '], ['\n    animation-duration: ', 'ms;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _help = require('../Animate/help');

var _help2 = _interopRequireDefault(_help);

var _DialogCntent = require('./DialogCntent');

var _DialogCntent2 = _interopRequireDefault(_DialogCntent);

var _DialogTitle = require('./DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// bootstrap solution
var LockBody = (0, _styledComponents.createGlobalStyle)(_templateObject);

var enter = (0, _styledComponents.keyframes)(_templateObject2);

var end = (0, _styledComponents.keyframes)(_templateObject3);

var AnimateMask = _styledComponents2.default.div(_templateObject4);
var DialogWrapper = _styledComponents2.default.div(_templateObject5);
var Animate = _styledComponents2.default.div(_templateObject6, (0, _styledIs2.default)('animationType')(_templateObject7, function (props) {
  switch (props.animationType) {
    case 'enter':
      return enter;
    case 'leave':
      return end;
    default:
      return end;
  }
}), (0, _styledIs.isNot)('display')(_templateObject8), (0, _styledIs2.default)('duration')(_templateObject9, function (props) {
  return props.duration || 0;
}));

var DialogAnimate = function (_React$Component) {
  _inherits(DialogAnimate, _React$Component);

  function DialogAnimate(props) {
    _classCallCheck(this, DialogAnimate);

    var _this = _possibleConstructorReturn(this, (DialogAnimate.__proto__ || Object.getPrototypeOf(DialogAnimate)).call(this, props));

    _this.state = {
      isShow: false,
      animationType: 'leave'
    };

    _this.handleEscCode = function (event) {
      var onClose = _this.props.onClose;

      if (event.keyCode === 27) {
        onClose && onClose();
      }
    };

    _this.handleAnimationEnd = function (event) {
      var _this$props = _this.props,
          onEachAnimationEnd = _this$props.onEachAnimationEnd,
          onEnterAnimationEnd = _this$props.onEnterAnimationEnd,
          onLeaveAnimationEnd = _this$props.onLeaveAnimationEnd;

      if (_this.state.animationType === 'leave') {
        _this.setState({ isShow: false }, function () {
          onLeaveAnimationEnd && onLeaveAnimationEnd(event);
        });
      }
      if (_this.state.animationType === 'enter') {
        onEnterAnimationEnd && onEnterAnimationEnd(event);
      }
      if (_this.props.visible) {
        _this.animateRef.focus();
      }
      onEachAnimationEnd && onEachAnimationEnd(event);
    };

    _this.animateRef = null;
    return _this;
  }

  _createClass(DialogAnimate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.visible && nextProps.visible) {
        this.enter();
      } else if (this.props.visible && !nextProps.visible) {
        this.leave();
      }
    }
  }, {
    key: 'enter',
    value: function enter() {
      this.setState({
        isShow: true,
        animationType: 'enter'
      }, function () {
        document.body.classList.add('modal-lock');
      });
    }
  }, {
    key: 'leave',
    value: function leave() {
      this.setState({ animationType: 'leave' }, function () {
        document.body.classList.remove('modal-lock');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isShow = this.state.isShow;
      var _props = this.props,
          duration = _props.duration,
          onClose = _props.onClose,
          children = _props.children;

      if (!isShow) return null;
      return _react2.default.createElement(
        _focusTrapReact2.default,
        null,
        _react2.default.createElement(
          Animate,
          {
            onAnimationEnd: this.handleAnimationEnd,
            animationType: this.state.animationType,
            onKeyUp: this.handleEscCode,
            'aria-modal': 'true',
            ref: function ref(_ref) {
              return _this2.animateRef = _ref;
            },
            tabIndex: '0',
            display: true,
            duration: duration
          },
          _react2.default.createElement('div', { tabIndex: '0' }),
          _react2.default.createElement(LockBody, null),
          _react2.default.createElement(AnimateMask, { onClick: onClose }),
          children,
          _react2.default.createElement('div', { tabIndex: '0' })
        )
      );
    }
  }]);

  return DialogAnimate;
}(_react2.default.Component);

exports.default = DialogAnimate;