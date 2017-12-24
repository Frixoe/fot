#!/usr/bin/env node
var args = process.argv.slice(2);
var shell = require('shelljs');

var setPath = require('./commands/setPath');
var cloneDir = require('./commands/cloneDir');
var getPath = require('./commands/getPath');

var helpString = `USAGE: "fot {command} {argument}"
"Create folder templates with ease."

Commands:
- 'fot here': Set the templates directory to the working directory.
- 'fot get': Get the template directory's absolute path.
- 'fot set {abs-path}': Set the templates directory to the absolute path {abs-path}
- 'fot clone {template}': Clone a template into the working directory.

With great node packages come ridiculous bugs so please do report them :D`;

var command = args[0];
var input = args[1];
var extra = args[2];

switch (command)
{
    case 'set':
        if (isString(input))
        {
            setPath(input);
            shell.exit(1);
        } else console.error('ERROR: Incorrect option usage! Correct: "fot set {templates path(string)}"');
        break;
    case 'here':
        if (!input)
        {
            setPath(shell.pwd().stdout);
            shell.exit(1);
        } else console.error('ERROR: Incorrect option usage! Correct: "fot here"');
        break;
    case 'get':
        if (!input)
        {
            console.log("INFO: The templates directory is set to - " + getPath());
            shell.exit(1);
        } else console.error('ERROR: Incorrect option usage! Correct: "fot get"');
    case 'clone':
        if (isString(input))
        {
            cloneDir(input, shell.pwd().stdout);
            shell.exit(1);
        } else console.error('ERROR: Incorrect option usage! Correct: "fot clone {template name(string)} {folder name upon creation(string)}"');
        break;
    default:
        console.log(helpString);
}

function isString(input)
{
    return typeof input === 'string' || input instanceof String;
}