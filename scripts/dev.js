const execa = require('execa')

execa(
  'lerna',
  [
    'run',
    'dev'
  ],
  {
    stdio: 'inherit'
  }
)