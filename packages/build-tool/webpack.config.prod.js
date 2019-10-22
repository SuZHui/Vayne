const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const baseConfig = require('./webpack.config.base')

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = merge(baseConfig, {
  mode: 'production',
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
    })
  ]
})