'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var supportPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportPassive = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}

var passEvents = supportPassive ? { capture: false, passive: true } : false;

exports.default = passEvents;