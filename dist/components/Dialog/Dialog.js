'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DialogAnimate = require('./DialogAnimate');

var _DialogAnimate2 = _interopRequireDefault(_DialogAnimate);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Protal = require('../Protal');

var _Protal2 = _interopRequireDefault(_Protal);

var _DialogCntent = require('./DialogCntent');

var _DialogCntent2 = _interopRequireDefault(_DialogCntent);

var _DialogTitle = require('./DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

        _this.onClick = function () {
            _this.setState({
                show: !_this.state.show
            });
        };

        _this.close = function () {
            _this.setState({
                show: false
            });
        };

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(Dialog, [{
        key: 'render',
        value: function render() {
            var show = this.state.show;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: this.onClick },
                    'click me'
                ),
                show ? _react2.default.createElement(DialogMask, { onClick: this.close }) : null,
                show ? _react2.default.createElement(
                    _DialogCntent2.default,
                    null,
                    this.props.children
                ) : null
            );
        }
    }]);

    return Dialog;
}(_react2.default.Component);

Dialog.DialogContent = _DialogCntent2.default;

Dialog.DialogTitle = _DialogTitle2.default;

/**
 * @components
 */
exports.default = Dialog;