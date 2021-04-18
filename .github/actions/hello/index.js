// const core = require('@actions/core');
// const github = require('@actions/github');
const child_process = require('child_process')

// const nameToGreet = core.getInput('foo');

console.log(JSON.stringify(Object.keys(process.env)))

console.log('HELLO WORLD: ' + process.env.INPUT_FOO);


// const appSettings = require('appsettings.json');
// appSettings.version = 'foo'
// fs.saveFile('appsettings.json', appSettings)
