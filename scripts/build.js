const execa = require('execa')

execa(
  'lerna',
  [
    'run',
    'build',
    '--stream',
  ],
  {
    stdio: 'inherit',
    execPath: process.cwd()
  }
)