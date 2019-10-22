const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('../webpack.config.prod')

module.exports = function (webpackConfig = {}) {
  const config = merge(devConfig, webpackConfig)

  const compiler = webpack(config)
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stats.toString())
  })
}