const path = require('path');
const { version, name } = require('./package.json');

const join = (...str) => path.join(__dirname, str.join('/') );
const joinMap = (...str) => str.map((v)=> join(v) )

module.exports = {
    title: name,
    sections: [
        {
            name: 'Introduction.md',
            content: join('/docs/Introduction.md')
        },
        {
            name: 'Components',
            content: join('/docs/Components.md'),
            components: function (){
                return joinMap([
                    './src/components/Button/index.js'
                ])
            }
        }, {
            name: 'Readme',
            content: join('/README.md')
        }
    ],
    theme: {
        baseBackground: '#fdfdfc',
        link: '#454d5d',
        linkHover: '#90a7bf',
        border: '#e0d2de',
        font: ['Helvetica', 'sans-serif'],
    },
    serverPort: 3030,
    webpackConfig: {
		module: {
			rules: [
				{
					test: /[\.jsx?|\.js]$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				}
			],
		},
    }
    
}