const path = require('path')
const buildTool = require('@suzh/build-tool')

const ROOT_DIR = __dirname

buildTool.build({
  entry: [
    `${ROOT_DIR}/src/main.js` 
  ],
  output: {
    path: `${ROOT_DIR}/dist/js`,
    publicPath: '/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      '@': ROOT_DIR
    }
  },
})