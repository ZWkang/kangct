const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api) => {
  api.assertVersion('^6.0.0');
  return {
    plugins: [
      [
        require('babel-plugin-import'),
        {
          libraryName: 'Agamennon',
          libraryDirectory: 'components' // default: lib
          //   camel2DashComponentName: false // default: true
        }
      ]
    ]
  };
});
