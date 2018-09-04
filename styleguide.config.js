const path = require('path');
const {
    version,
    name
} = require('./package.json');

const join = (...str) => path.join(__dirname, str.join('/'));
const joinMap = (...str) => str.map((v) => join(v))

module.exports = {
    title: name,
    styles: {
        StyleGuide: {
            '@global body': {
                fontFamily: 'Helvetica'
            }
        }
    }, //设置全局字体
    sections: [{
            name: 'Introduction.md',
            content: join('/docs/Introduction.md')
        },
        {
            name: 'Components',
            // content: join('/docs/button.md'),
            components: function () {
                return joinMap([
                    './src/components/Button/Buttons.js'
                ])
            }
        }
    ],
    theme: {
        baseBackground: '#fdfdfc',
        link: '#454d5d',
        linkHover: '#90a7bf',
        border: '#e0d2de',
        font: ['Helvetica', 'sans-serif'],
    },
    webpackConfig: {
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader',
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.scss'],
            alias: {
              '@app': join('src')
            },
        }
    },
    require: [
        'babel-polyfill',
        // path.join(__dirname, 'path/to/script.js'),
        // path.join(__dirname, 'path/to/styles.css')
    ],
    getExampleFilename(componentPath) {
        return componentPath.replace(/\.jsx?$/, '.examples.md')
      }
      // 替换默认的md  file.jsx ===>  默认的readme.md ===> file+.examples.md

}

// ```js { "file": "../mySourceCode.js" }
// ```
// 显示文件的源代码