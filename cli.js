#!/usr/bin/env node
var args = process.argv.slice(2);
var shell = require('shelljs');

var setPath = require('./commands/setPath');
var cloneDir = require('./commands/cloneDir');

var helpString = `USAGE: "fot {command} {argument}"
"Create folder templates with ease."`;

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
    case 'clone':
        if (isString(input))
        {
            cloneDir(input, shell.pwd());
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