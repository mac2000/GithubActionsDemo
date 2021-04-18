const child_process = require('child_process')

console.log('HELLO WORLD');

const stdout = child_process.execSync('ls -la .', {encoding: 'utf-8'}).toString()
console.log(stdout)