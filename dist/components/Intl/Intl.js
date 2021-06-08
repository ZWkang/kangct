'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tinyInvariant = require('tiny-invariant');

var _tinyInvariant2 = _interopRequireDefault(_tinyInvariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Intl = function () {
  function Intl(options) {
    _classCallCheck(this, Intl);

    (0, _tinyInvariant2.default)(options.local, 'options.local should set');
    (0, _tinyInvariant2.default)(options.locals, 'options.locals should set');
    this.local = options.default || options.local || navigator.language || navigator.browserLanguage || '';
    this.locals = options.locals || [];
  }

  _createClass(Intl, [{
    key: 'formatMessage',
    value: function formatMessage(string) {
      return new Function('with(' + JSON.stringify(this.locals[this.local]) + '){\n        return `' + string + '`;\n    }')();
    }
  }, {
    key: 'd',
    get: function get() {
      var result = {};
      var data = this.locals[this.local];
      Object.keys(data).forEach(function (_) {
        Object.defineProperty(result, _, {
          get: function get() {
            return data[_] || '';
          }
        });
      });
      return result;
    }
  }]);

  return Intl;
}();

// use i18n = new Intl({local: xxx, locals: {a: 'xxx'}})
// i18n.d.a = 'xxx'
// i18n.formatMessage('myname is ${a}')


exports.default = Intl;