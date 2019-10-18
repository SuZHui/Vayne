const webpack = require('webpack')
const merge = require('webpack-merge')
const WebpackDevServer = require('webpack-dev-server')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = require('../webpack.config.dev')

const options = {
  open: false,
  hot: true,
  hotOnly: true,
  inline: true,
  compress: true,
  publicPath: '/',
  clientLogLevel: 'warning',
  host: 'localhost',
  historyApiFallback: {
    rewrites: [{ from: /./, to: '/index.html' }],
  },
  disableHostCheck: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: 'minimal'
}

/**
 * 开发环境webpack脚本
 */
module.exports = function (webpackConfig = {}) {
  const config = merge(devConfig, webpackConfig)
  
  WebpackDevServer.addDevServerEntrypoints(config, options)
  const compiler = webpack(config)
  const server = new WebpackDevServer(compiler, options)

  server.listen(10086, err => {
    if (err) {
      console.error(err)
    }
  })
}