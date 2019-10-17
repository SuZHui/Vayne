const execa = require('execa')

execa(
  'node',
  [
    'packages/vayne-development/index.js',
  ],
  {
    stdio: 'inherit'
  }
)