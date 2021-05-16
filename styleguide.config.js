const path = require('path');
const { version, name } = require('./package.json');

const join = (...str) => path.join(__dirname, str.join('/'));
const joinMap = (...str) => str.map((v) => join(v));

module.exports = {
  title: name,
  version: version,
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: `Helvetica Neue, PingFang SC, Verdana, Microsoft Yahei, Hiragino Sans GB,
                Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;`
      }
    }
  }, //设置全局字体
  sections: [
    {
      name: '简介(intro)',
      content: join('/docs/Introduction.md')
    },
    {
      name: '组件(Components)',
      components: './src/components/!(util)**/index.js'
    },
    {
      name: '最后(think)',
      content: join('/docs/mythink.md')
    }
  ],
  theme: {
    color: {
      baseBackground: '#fdfdfc',
      link: '#00000c',
      linkHover: '#90a7bf',
      border: '#454d5d'
    }
  },
  webpackConfig: {
    devtool: 'cleap-source-map',
    module: {
      rules: [
        {
          test: /(\.js?$)|(\.jsx?$)|(\.md?$)/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss'],
      alias: {
        '@app': join('src')
      }
    }
  },
  require: ['babel-polyfill'],
  getExampleFilename(componentPath) {
    let componentList = componentPath.split('/');
    let componentName = componentList[componentList.length - 2].toLowerCase();

    // return componentPath.replace(/\.jsx?$/, '.examples.md')
    return path.resolve(__dirname, 'docs', componentName + '.md');
  }
  // 替换默认的md  file.jsx ===>  默认的readme.md ===> file+.examples.md
};

// ```js { "file": "../mySourceCode.js" }
// ```
// 显示文件的源代码
