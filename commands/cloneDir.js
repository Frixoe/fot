var fs = require('fs');
var shell = require('shelljs');

/*
What am I doing here?

1. Getting directory path where all the templates are stored.
2. Checking if the template exists in the templates directory.
3. Getting the path to the actual template.
*/

module.exports = function(tempName, curDir, folderName='template') {
    // Get the template director path from tempPath.txt.
    var tempPath = fs.readFileSync(__dirname + '\\..\\tempPath.txt', {encoding: 'utf8'});

    // Check if template exists in the folder.
    var templates = fs.readdirSync(tempPath);

    if (templates.indexOf(tempName) === -1)
    {
        console.error('ERROR: No template by that name. Please check your templates folder.');
        shell.exit(1);
    }

    // If template exists, copy its contents into the current directory.
    var temp = tempPath + "\\" + tempName;
    
    // Get all the files inside the template and copy them into the current directory.
    shell.cp('-r', temp, curDir);

    console.log('SUCCESS: Cloned the template files into the current directory.');
}