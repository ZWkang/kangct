'use strict';

var _require = require('@babel/helper-plugin-utils'),
    declare = _require.declare;

module.exports = declare(function (api) {
  api.assertVersion('^6.0.0');
  return {
    plugins: [[require('babel-plugin-import'), {
      libraryName: 'Agamennon',
      libraryDirectory: 'components' // default: lib
      //   camel2DashComponentName: false // default: true
    }]]
  };
});