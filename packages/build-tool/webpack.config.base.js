const path = require('path')

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
    // 'transform-vue-jsx',
    '@babel/plugin-transform-runtime',
    // '@babel/plugin-syntax-jsx'
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
  plugins: []
}