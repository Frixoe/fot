#!/usr/bin/env node
var args = process.argv.slice(2);
var shell = require('shelljs');
var fs = require('fs');

var setPath = require('./commands/setPath');
var cloneDir = require('./commands/cloneDir');
var getPath = require('./commands/getPath');
var clearPath = require('./commands/clearPath');
var listTemps = require('./commands/listTemps');

var helpString = `USAGE: "fot {command} {argument}"
"Create folder templates with ease."

Commands:
- 'fot here': Set the templates directory to the working directory.
- 'fot get': Get the template directory's absolute path.
- 'fot set {abs-path}': Set the templates directory to the absolute path {abs-path}
- 'fot clone {template} {OPTIONAL new filename}': Clone a template into the working directory.
- 'fot clear': Forget your templates dir.
- 'fot list': Lists all the templates in your templates dir.

With great node packages come ridiculous bugs so please do report them :D`;

var command = args[0];
var input = args[1];
var extra = args[2];

try
{
    switch (command)
    {
        case 'set':
            if (input && isString(input)) console.log(setPath(input));
            else throw 'ERROR: Incorrect option usage! Correct: "fot set {templates path(string)}"';
            break;
        case 'here':
            if (!input) console.log(setPath(process.cwd()));
            else throw 'ERROR: Incorrect option usage! Correct: "fot here"';
            break;
        case 'get':
            if (!input)
            {
                var path = getPath();
                var output = path ? path : 'Nothing';

                console.log("INFO: The templates directory is set to - " + output);
            } else throw 'ERROR: Incorrect option usage! Correct: "fot get"';
            break;
        case 'clone':
            if (input && isString(input)) console.log(!extra ? cloneDir(input, process.cwd()) : cloneDir(input, process.cwd(), extra));
            else throw 'ERROR: Incorrect option usage! Correct: "fot clone {template name(string)} {folder name upon creation(string)}"';
            break;
        case 'clear':
            if (!input && !extra) console.log(clearPath()); 
            else throw 'ERROR: Incorrect option usage! Correct: "fot clear"';
            break;
        case 'list':
            if (!input && !extra)
            {
                var files = listTemps();

                console.log('SUCCESS: Here are all the templates you got:');
                for (var i = 0; i < files.length; ++i) console.log(files[i]);
            }
            else throw 'ERROR: Incorrect option usage! Correct: "fot list"';
            break;
        default: console.log(helpString);
    }
}
catch (err)
{
    console.error(err);
}

function isString(input)
{
    return typeof input === 'string' || input instanceof String;
}