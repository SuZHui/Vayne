const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
    '@babel/plugin-syntax-dynamic-import'
  ]
}

const cssLoaders = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: process.env.NODE_ENV === 'development'
    }
  },
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } }
]

const scssLoaders = [
  ...cssLoaders,
  {
    loader: 'sass-loader',
    options: {
      implementation: require('sass'),
      indentedSyntax: true
    }
  }
]

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['*', '.js', '.json', '.vue', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  // output: {
  //   path: path.join(__dirname, '/dist'),
  //   publicPath: '/',
  //   filename: '[chunk].js'
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: scssLoaders
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].[id].css'
    })
  ],
  performance: {
    hints: false
  }
}
