'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  font-size: 16px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  ', '\n  ', '\n'], ['\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  font-size: 16px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      flex-direction: row;\n    '], ['\n      flex-direction: row;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      text-align: ', ';\n    '], ['\n      text-align: ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 1 1 auto;\n  padding: 22px;\n'], ['\n  flex: 1 1 auto;\n  padding: 22px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  text-align: left;\n  color: #007bff;\n  cursor: pointer;\n  vertical-align: middle;\n  padding: 0.375em 0.75em;\n  border-radius: 6px;\n  display: inline-block;\n\n  ', '\n  & + & {\n    margin-left: 24px;\n  }\n'], ['\n  text-decoration: none;\n  text-align: left;\n  color: #007bff;\n  cursor: pointer;\n  vertical-align: middle;\n  padding: 0.375em 0.75em;\n  border-radius: 6px;\n  display: inline-block;\n\n  ', '\n  & + & {\n    margin-left: 24px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n      color: white;\n      background-color: #007bff;\n      border: 1px solid #007bff;\n    '], ['\n      color: white;\n      background-color: #007bff;\n      border: 1px solid #007bff;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n'], ['\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  color: #6c757d !important;\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n'], ['\n  color: #6c757d !important;\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.horizontal && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.align && (0, _styledComponents.css)(_templateObject3, props.align);
});

var CardBody = _styledComponents2.default.div(_templateObject4);

var CardLink = _styledComponents2.default.a(_templateObject5, function (props) {
  return props.normal || (0, _styledComponents.css)(_templateObject6);
});

var CardHeader = _styledComponents2.default.div(_templateObject7);

var CardFooter = _styledComponents2.default.div(_templateObject8);

var Card = CardContainer;

// Card.Container = CardContainer;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Link.displayName = 'CardLink';
Card.Header = CardHeader;
Card.Footer = CardFooter;
// export Body

/**
 * @components
 */
exports.default = Card;