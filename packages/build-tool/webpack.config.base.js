const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const BABEL_CONFIG = {
  presets: [
    '@vue/babel-preset-jsx',
    // [
    //   '@babel/preset-env',
    //   { 
    //     modules: false,
    //     targets: { 
    //       browsers:
    //         [ 'last 2 versions',
    //           'Firefox ESR',
    //           '> 1%',
    //           'ie >= 9',
    //           'iOS >= 8',
    //           'Android >= 4' 
    //         ] 
    //     } 
    //   }
    // ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ]
}

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: [
              {
                loader: 'babel-loader',
                options: BABEL_CONFIG
              }
            ]
          }
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: BABEL_CONFIG
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}