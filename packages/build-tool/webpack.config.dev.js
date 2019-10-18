const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: '#source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:10086',
    'webpack/hot/dev-server',
  ],
  // output: {
  //   path: './dist/js',
  //   publicPath: '/',
  //   filename: '/build.js'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, 'template/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})