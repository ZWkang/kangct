module.exports = (_) => {
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
};
