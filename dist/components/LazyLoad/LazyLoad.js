'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageComponent = require('../ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoad = function LazyLoad(props) {
  var imageUrl = props.imageUrl,
      _props$type = props.type,
      type = _props$type === undefined ? 'img' : _props$type;

  var lazyLoadRef = (0, _react.useRef)();
  var onScreen = useOnScreen({ ref: lazyLoadRef, rootMargin: '0px' });
  if (type !== 'img') {
    var childProps = _extends({}, props, {
      children: onScreen ? props.children : null
    });
    return _react2.default.createElement(_ImageComponent2.default, _extends({ ref: lazyLoadRef }, childProps, { type: type }));
  }
  return _react2.default.createElement(_ImageComponent2.default, _extends({
    ref: lazyLoadRef
  }, props, {
    type: type,
    src: onScreen ? imageUrl : undefined
  }));
};

function useOnScreen(_ref) {
  var ref = _ref.ref,
      rootMargin = _ref.rootMargin;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isInteresting = _useState2[0],
      setIsInteresting = _useState2[1];

  (0, _react.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          entry = _ref3[0];

      if (entry.isIntersecting) {
        setIsInteresting(entry.isIntersecting);
      }
    }, {
      rootMargin: rootMargin
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return function () {
      observer.unobserve(ref.current);
    };
  }, []);

  return isInteresting;
}

/**
 * @components
 */

exports.default = LazyLoad;