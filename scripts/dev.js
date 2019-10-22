const execa = require('execa')

execa(
  'lerna',
  [
    'run',
    'dev',
    '--stream',
  ],
  {
    stdio: 'inherit',
    execPath: process.cwd()
  }
)