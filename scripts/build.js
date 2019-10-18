const execa = require('execa')
console.log(process.cwd())
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