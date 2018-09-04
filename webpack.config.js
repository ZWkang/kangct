
// const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
// const pkg = require('./package.json');
const path = require('path');
// const webpackBaseConfig = require('./webpack.base.conf.js');
// const merge = require('webpack-merge');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: "",
        filename: "Agamemnon.js",
        library: 'Agamemnon',
        libraryTarget: 'umd',
    },
    performance: {
        hints : false
    },
    externals: {
        react: {
            root: 'react',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: ['vue-style-loader', 'css-loader', 'less-loader'],
                // use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }, { loader: "less-loader" },], }),
                use: [ 'style-loader', 'css-loader', 'sass-loader'], // : , 
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }]
    },
    resolve: {
        // root: path.resolve('./src'),
        extensions: ['.js','.jsx', 'css', 'scss'],
        alias: {
            "@app": `${__dirname}/src/components`
        }
    },
    plugins: [
        // new webpack.DefinePlugin({ PRODUCTION: "'true'" }),
        // new MiniCssExtractPlugin({ filename: 'kang.css' }),
        // new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
        // 允许错误不打断程序
        // new webpack.NoErrorsPlugin(),
        // new webpack.LoaderOptionsPlugin({ minimize: true })
    ],
    optimization: {
        minimize: true,
        // minimizer: [
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             compress: {
        //                 warnings: false,
        //                 drop_debugger: true,
        //                 drop_console: true
        //             },
        //             sourceMap: false
        //         }
        //     })
        // ]
    }

}