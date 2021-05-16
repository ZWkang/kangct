const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //for webpack 4
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const pkgJSON = require('./package.json');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '',
    filename: 'Agamemnon.js',
    library: 'Agamemnon',
    libraryTarget: 'umd'
  },
  performance: {
    hints: false
  },
  externals: {
    react: {
      root: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'react-dom',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // : ,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // : ,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'scss'],
    alias: {
      '@app': `${__dirname}/src/components`
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${pkgJSON.name}.css`
    }),
    new webpack.BannerPlugin({
      banner: `
                libName: ${pkgJSON.name}
                filename: [name]
                Date: ${new Date()}
                hash: [hash]
                @author: @ZWKang
                license: ${pkgJSON.license}
            `
    })
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          },
          sourceMap: false
        }
      })
    ]
  }
};
