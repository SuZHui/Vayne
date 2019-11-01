const path = require('path')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const baseWebpackConfig = require('./webpack.config.base')

const resolve = file => path.resolve(__dirname, file)

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  entry: ['babel-polyfill', './dev/index.js'],
  output: {
    filename: '[name].js',
    path: resolve('../dev'),
    publicPath: '/dev/',
    library: 'Vayne'
  },
  resolve: {
    alias: {
      vayne: resolve('../src'),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          // {
          //   loader: 'ts-loader',
          //   options: {
          //     appendTsSuffixTo: [/\.vue$/],
          //   }
          // },
          // TODO: add eslint loader
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          // TODO: add eslint loader
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve('../dev'),
    publicPath: '/dev/',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '1234',
    disableHostCheck: true
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
})
