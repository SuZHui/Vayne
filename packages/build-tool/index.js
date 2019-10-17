const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('./webpack.config.dev')

function dev(webpackConfig = {}) {
  const config = merge(devConfig, webpackConfig)
  const complier = webpack(config)
  
  complier.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stats.toString({ colors: true, chunks: true }))
  })
}



module.exports = {
  dev
}