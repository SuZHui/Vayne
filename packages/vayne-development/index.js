const buildTool = require('@suzh/build-tool')

const ROOT_DIR = __dirname

buildTool.dev(
  `${ROOT_DIR}/src/main.js`,
  `${ROOT_DIR}/dist`
)