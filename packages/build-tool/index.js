const webpack = require('webpack')

function dev(entry = '', outputDir = '/dist') {
  const config = webpack({
    mode: 'development',
    entry: [entry],
    output: {
      path: outputDir,
      publicPath: '/',
      filename: 'build.js'
    }
  })
  config.run((err, stats) => {
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