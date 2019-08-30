'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tinyInvariant = require('tiny-invariant');

var _tinyInvariant2 = _interopRequireDefault(_tinyInvariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Protal = function (_Component) {
    _inherits(Protal, _Component);

    function Protal(props) {
        _classCallCheck(this, Protal);

        var _this = _possibleConstructorReturn(this, (Protal.__proto__ || Object.getPrototypeOf(Protal)).call(this, props));

        _this.appendChildElemen = function () {
            var target = _this.props.target;

            var targetElement = document.querySelector(target);
            // debugger
            if (targetElement === null) {
                document.body.appendChild(_this.parentNode);
            } else {

                return;
            }
        };

        _this.createElementInsert = function () {
            // const { target, position = 'afterend' } = this.props
            // const el = document.createElement('div')
            // let queryElement = target
            // if(typeof target === 'string') {
            //     queryElement = document.querySelector(target)
            //     invariant(queryElement, 'to Element unfound' + queryElement)
            // }
            // queryElement.insertAdjacentElement(position, el)
            // return el
        };

        _this.settleElement();
        return _this;
    }

    _createClass(Protal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.appendChildElemen()
            this.appendChildElemen();
        }
    }, {
        key: 'settleElement',
        value: function settleElement() {
            var target = this.props.target;

            if (typeof target === 'string') {
                this.parentNode = document.querySelector(target);
            } else if (target instanceof HTMLElement) {
                this.parentNode = target;
            } else {
                this.parentNode = document.createElement('div');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //     consol
            //   if(this.parentNode !== null && this.props.target === 'body' ) {
            //     this.parentNode.parentNode.removeChild(React.findDOMNode(this.childRef))
            //   }
            this.parentNode = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return (0, _reactDom.createPortal)(children, this.parentNode);
        }
    }]);

    return Protal;
}(_react.Component);

Protal.parentNode = null;
Protal.defaultProps = {
    show: false,
    zIndex: 1060,
    target: 'body'
};
exports.default = Protal;