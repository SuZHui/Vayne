const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [],
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, 'template/index.html'),
      filename: 'index.html',
      inject: true,
    }),
  ]
})