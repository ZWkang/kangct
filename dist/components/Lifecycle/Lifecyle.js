'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var Lifecycle = function (_React$Component) {
  _inherits(Lifecycle, _React$Component);

  function Lifecycle(props) {
    _classCallCheck(this, Lifecycle);

    var _this = _possibleConstructorReturn(this, (Lifecycle.__proto__ || Object.getPrototypeOf(Lifecycle)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = props.initState || {};
    _this._refs = props.refs || {};
    _this._setState = function () {
      return _this.setState.apply(_this, arguments);
    };
    _this._forceUpdate = function () {
      return _this.forceUpdate.apply(_this, arguments);
    };
    return _this;
  }

  _createClass(Lifecycle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props;

      return (_props = this.props).didMount.apply(_props, arguments);
    }
  }, {
    key: 'componentDidCatch',
    value: function componentDidCatch() {
      var _props2;

      return (_props2 = this.props).didCatch.apply(_props2, arguments);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props3;

      return (_props3 = this.props).unMount.apply(_props3, arguments);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      var _props4;

      return (_props4 = this.props).shouldUpdate.apply(_props4, arguments);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5;

      return (_props5 = this.props).render.apply(_props5, arguments);
    }
  }]);

  return Lifecycle;
}(_react2.default.Component);

Lifecycle.defaultProps = {
  didMount: noop,
  unMount: noop,
  shouldUpdate: noop,
  didCatch: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getArgs = function () {
    var state = _this2.state,
        props = _this2.props,
        refs = _this2._refs,
        setState = _this2._setState,
        forceUpdate = _this2._forceUpdate;

    return { state: state, props: props, refs: refs, setState: setState, forceUpdate: forceUpdate };
  };
};

exports.default = Lifecycle;