const webpack = require('webpack')
const merge = require('webpack-merge')
const WebpackDevServer = require('webpack-dev-server')
const devConfig = require('../webpack.config.dev')

/**
 * 开发环境webpack脚本
 */
module.exports = function (webpackConfig = {}) {
  const config = merge(devConfig, webpackConfig)
  const complier = webpack(config)
  
  // complier.run((err, stats) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   console.log(stats.toString({ colors: true, chunks: true }))
  // })

  const server = new WebpackDevServer(complier, {
    open: false,
    hot: true,
    inline: true,
    compress: true,
    clientLogLevel: 'info',
    host: 'localhost',
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'minimal'
  })

  server.listen(10086, (err) => {
    if (err) {
      console.error(err)
    }
  })
}