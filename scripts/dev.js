const execa = require('execa')

execa(
  'yarn',
  [
    'lerna',
    'run',
    'dev',
    '--scope',
    'vayne',
    '--stream',
  ],
  {
    stdio: 'inherit'
  }
)