'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _borderMagic = require('../someTrack/borderMagic');

var _borderMagic2 = _interopRequireDefault(_borderMagic);

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });
// import 'enzyme-adapter-react-16'


describe('BorderMagic Test Cases', function () {
  it('BorderMagic renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_borderMagic2.default, null), div);
    _reactDom2.default.unmountComponentAtNode(div);
  });

  it('BorderMagic show should its children', function () {
    var testString = 'BorderMagic show should its children';
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _borderMagic2.default,
      null,
      testString
    ));
    expect(wrapper.text()).toEqual(testString);
  });
});