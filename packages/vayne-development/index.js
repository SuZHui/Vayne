const buildTool = require('@suzh/build-tool')

const ROOT_DIR = __dirname

buildTool.dev({
  entry: [ `${ROOT_DIR}/src/main.js` ],
  output: {
    path: `${ROOT_DIR}/dist`,
    publicPath: '/',
    filename: 'build.js'
  }
})