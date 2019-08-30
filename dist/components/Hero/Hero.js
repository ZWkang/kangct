'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroP = exports.HeroRight = exports.HeroLeft = exports.HeroH1 = exports.Hero = exports.HeroA = exports.HeroBody = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n'], ['\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: 1;\n'], ['\n  flex: 1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-bottom: 0.4em;\n\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 58px;\n  letter-spacing: -0.2px;\n'], ['\n  margin-bottom: 0.4em;\n\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 58px;\n  letter-spacing: -0.2px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 40px;\n'], ['\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 40px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  color: rgb(66, 90, 112);\n  border-bottom: 2px solid rgba(66, 90, 112, 0.05);\n\n  &:hover {\n    border-bottom-color: var(--green-base);\n  }\n\n  &:active {\n    color: rgba(66, 90, 112, 0.1);\n    border-bottom-color: rgba(66, 90, 112, 0.1);\n  }\n'], ['\n  color: rgb(66, 90, 112);\n  border-bottom: 2px solid rgba(66, 90, 112, 0.05);\n\n  &:hover {\n    border-bottom-color: var(--green-base);\n  }\n\n  &:active {\n    color: rgba(66, 90, 112, 0.1);\n    border-bottom-color: rgba(66, 90, 112, 0.1);\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: 1;\n  padding-left: 48px;\n  & img {\n    width: 100%;\n  }\n'], ['\n  flex: 1;\n  padding-left: 48px;\n  & img {\n    width: 100%;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  padding: 4em 2em;\n  ', '\n  ', '\n  margin-right: 0;\n  margin-left: 0;\n  max-width: 1024px;\n\n  /* -webkit-box-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    \n    padding: 80px 24px; */\n'], ['\n  display: flex;\n  align-items: center;\n  padding: 4em 2em;\n  ', '\n  ', '\n  margin-right: 0;\n  margin-left: 0;\n  max-width: 1024px;\n\n  /* -webkit-box-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    \n    padding: 80px 24px; */\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    padding: 5em 2.5em;\n  '], ['\n    padding: 5em 2.5em;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    padding: 6em 3em;\n  '], ['\n    padding: 6em 3em;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = _styledComponents2.default.section(_templateObject);

var HeroLeft = _styledComponents2.default.div(_templateObject2);
Hero.HeroLeft = HeroLeft;

var HeroH1 = _styledComponents2.default.h1(_templateObject3);
Hero.HeroH1 = HeroH1;

var HeroP = _styledComponents2.default.p(_templateObject4);

// & a.Link {
var HeroA = _styledComponents2.default.a(_templateObject5);
Hero.HeroA = HeroA;

var HeroRight = _styledComponents2.default.div(_templateObject6);
Hero.HeroRight = HeroRight;

var HeroBody = _styledComponents2.default.div(_templateObject7, (0, _styledIs2.default)('medium')(_templateObject8), (0, _styledIs2.default)('large')(_templateObject9));
Hero.HeroBody = HeroBody;
exports.HeroBody = HeroBody;
exports.HeroA = HeroA;
exports.Hero = Hero;
exports.HeroH1 = HeroH1;
exports.HeroLeft = HeroLeft;
exports.HeroRight = HeroRight;
exports.HeroP = HeroP;