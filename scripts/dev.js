const execa = require('execa')
console.log(process.cwd())
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