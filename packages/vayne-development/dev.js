const path = require('path')
const buildTool = require('@suzh/build-tool')

const ROOT_DIR = __dirname

buildTool.dev({
  entry: [
    `${ROOT_DIR}/src/main.js` 
  ],
  output: {
    path: `${ROOT_DIR}/dist`,
    publicPath: '/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', 'scss'],
    alias: {
      '@': path.join(ROOT_DIR, '/src')
    }
  },
})