'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blockquote = exports.Li = exports.P = exports.Small = exports.Figcaption = exports.Code = exports.Pre = exports.B = exports.Strong = exports.Hr = exports.Ins = exports.A = exports.Sub = exports.Sup = exports.Ul = exports.Ol = exports.Mark = exports.Del = exports.Abbr = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 0;\n'], ['\n  margin: 0;\n  padding: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n'], ['\n  display: block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font: 400 18px/1.62 -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Droid Sans\', \'Helvetica Neue\',\n    \'PingFang SC\', \'Hiragino Sans GB\', \'Droid Sans Fallback\', \'Microsoft YaHei\', sans-serif;\n  color: #444443;\n'], ['\n  font: 400 18px/1.62 -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Droid Sans\', \'Helvetica Neue\',\n    \'PingFang SC\', \'Hiragino Sans GB\', \'Droid Sans Fallback\', \'Microsoft YaHei\', sans-serif;\n  color: #444443;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  position: relative;\n  color: #999;\n  font-weight: 400;\n  border-left: 1px solid #1abc9c;\n  padding-left: 1em;\n  margin: 1em 3em 1em 2em;\n  @media only screen and (max-width: 640px) {\n    margin: 1em 0;\n  }\n'], ['\n  ', '\n  position: relative;\n  color: #999;\n  font-weight: 400;\n  border-left: 1px solid #1abc9c;\n  padding-left: 1em;\n  margin: 1em 3em 1em 2em;\n  @media only screen and (max-width: 640px) {\n    margin: 1em 0;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  border-bottom: 1px dotted;\n  font-variant: normal;\n  text-decoration: none;\n'], ['\n  border-bottom: 1px dotted;\n  font-variant: normal;\n  text-decoration: none;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  cursor: help;\n'], ['\n  ', '\n  cursor: help;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  text-decoration: line-through;\n'], ['\n  text-decoration: line-through;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;\n  color: #222223; */\n  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB,\n    Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;\n  font-weight: 100;\n  color: #000;\n  /* line-height: 1.35; */\n\n  /* margin-top: 1.2em;\n    margin-bottom: 0.6em;\n    line-height: 1.35; */\n'], ['\n  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;\n  color: #222223; */\n  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB,\n    Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;\n  font-weight: 100;\n  color: #000;\n  /* line-height: 1.35; */\n\n  /* margin-top: 1.2em;\n    margin-bottom: 0.6em;\n    line-height: 1.35; */\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 2em;\n'], ['\n  ', '\n  font-size: 2em;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 1.8em;\n'], ['\n  ', '\n  font-size: 1.8em;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 1.6em;\n'], ['\n  ', '\n  font-size: 1.6em;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 1.4em;\n'], ['\n  ', '\n  font-size: 1.4em;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 1.2em;\n'], ['\n  ', '\n  font-size: 1.2em;\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  background: #fffdd1;\n  border-bottom: 1px solid #ffedce;\n  padding: 2px;\n  margin: 0 5px;\n'], ['\n  background: #fffdd1;\n  border-bottom: 1px solid #ffedce;\n  padding: 2px;\n  margin: 0 5px;\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n    list-style: decimal;\n  margin-left: 1.9em;\n  line-height: 1.8;\n  li ul,\n  li ol {\n    margin-bottom: 0.8em;\n    margin-left: 2em;\n    list-style: circle;\n  }\n'], ['\n  ', '\n  ', '\n    list-style: decimal;\n  margin-left: 1.9em;\n  line-height: 1.8;\n  li ul,\n  li ol {\n    margin-bottom: 0.8em;\n    margin-left: 2em;\n    list-style: circle;\n  }\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n    line-height: 1.8;\n  margin-left: 1.3em;\n  list-style: disc;\n  li ul,\n  li ol {\n    margin-bottom: 0.8em;\n    margin-left: 2em;\n    list-style: circle;\n  }\n'], ['\n  ', '\n  ', '\n    line-height: 1.8;\n  margin-left: 1.3em;\n  list-style: disc;\n  li ul,\n  li ol {\n    margin-bottom: 0.8em;\n    margin-left: 2em;\n    list-style: circle;\n  }\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  top: -0.5em;\n'], ['\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  top: -0.5em;\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  bottom: -0.25em;\n'], ['\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  bottom: -0.25em;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n'], ['\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n  text-decoration: none;\n'], ['\n  text-decoration: none;\n']),
    _templateObject22 = _taggedTemplateLiteral(['\n  border: none;\n  border-bottom: 1px solid #cfcfcf;\n  margin-bottom: 0.8em;\n  height: 10px;\n'], ['\n  border: none;\n  border-bottom: 1px solid #cfcfcf;\n  margin-bottom: 0.8em;\n  height: 10px;\n']),
    _templateObject23 = _taggedTemplateLiteral(['\n  font-weight: bold;\n  color: #000;\n'], ['\n  font-weight: bold;\n  color: #000;\n']),
    _templateObject24 = _taggedTemplateLiteral(['\n  font-family: Courier, \'Courier New\', monospace;\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: 1em 1.5em;\n  display: block;\n  -webkit-overflow-scrolling: touch;\n'], ['\n  font-family: Courier, \'Courier New\', monospace;\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: 1em 1.5em;\n  display: block;\n  -webkit-overflow-scrolling: touch;\n']),
    _templateObject25 = _taggedTemplateLiteral(['\n  font-family: Courier, \'Courier New\', monospace;\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n'], ['\n  font-family: Courier, \'Courier New\', monospace;\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n']),
    _templateObject26 = _taggedTemplateLiteral(['\n  font-size: 0.9em;\n  color: #888;\n'], ['\n  font-size: 0.9em;\n  color: #888;\n']),
    _templateObject27 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n    margin-bottom: 1.2em;\n  margin: 1em 0 0.6em;\n'], ['\n  ', '\n  ', '\n    margin-bottom: 1.2em;\n  margin: 1em 0 0.6em;\n']),
    _templateObject28 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// from https://github.com/sofish/typo.css/blob/master/typo.css
var BaseHeading = (0, _styledComponents.css)(_templateObject);

var resetHTML5Tag = (0, _styledComponents.css)(_templateObject2);

var mediaTag = (0, _styledComponents.css)(_templateObject3);

var formItem = (0, _styledComponents.css)(_templateObject4);

var Blockquote = _styledComponents2.default.blockquote(_templateObject5, BaseHeading);

var Acronym = (0, _styledComponents.css)(_templateObject6);
var Abbr = _styledComponents2.default.abbr(_templateObject7, Acronym);

var Del = _styledComponents2.default.del(_templateObject8);

var HTitleBase = (0, _styledComponents.css)(_templateObject9);

var H1 = _styledComponents2.default.h1(_templateObject10, HTitleBase);

var H2 = _styledComponents2.default.h2(_templateObject11, HTitleBase);

var H3 = _styledComponents2.default.h3(_templateObject12, HTitleBase);

var H4 = _styledComponents2.default.h4(_templateObject13, HTitleBase);

var H5 = _styledComponents2.default.h5(_templateObject14, HTitleBase);

var H6 = _styledComponents2.default.h6(_templateObject14, HTitleBase);

var Mark = _styledComponents2.default.mark(_templateObject15);

var Ol = _styledComponents2.default.ol(_templateObject16, BaseHeading, HTitleBase);

var Ul = _styledComponents2.default.ul(_templateObject17, BaseHeading, HTitleBase);

var Sup = _styledComponents2.default.sup(_templateObject18);

var Sub = _styledComponents2.default.sub(_templateObject19);

var A = _styledComponents2.default.a(_templateObject20);

var Ins = _styledComponents2.default.ins(_templateObject21);

var Hr = _styledComponents2.default.hr(_templateObject22);

var Strong = _styledComponents2.default.strong(_templateObject23);
var B = _styledComponents2.default.b(_templateObject23);

var Pre = _styledComponents2.default.pre(_templateObject24);

var Code = _styledComponents2.default.code(_templateObject25);

var Figcaption = _styledComponents2.default.figcaption(_templateObject26);

var Small = _styledComponents2.default.small(_templateObject26);

var P = _styledComponents2.default.p(_templateObject27, BaseHeading, HTitleBase);
var Li = _styledComponents2.default.li(_templateObject28, BaseHeading);
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Abbr = Abbr;
exports.Del = Del;
exports.Mark = Mark;
exports.Ol = Ol;
exports.Ul = Ul;
exports.Sup = Sup;
exports.Sub = Sub;
exports.A = A;
exports.Ins = Ins;
exports.Hr = Hr;
exports.Strong = Strong;
exports.B = B;
exports.Pre = Pre;
exports.Code = Code;
exports.Figcaption = Figcaption;
exports.Small = Small;
exports.P = P;
exports.Li = Li;
exports.Blockquote = Blockquote;