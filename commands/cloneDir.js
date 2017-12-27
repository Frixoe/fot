var fs = require('fs');
var shell = require('shelljs');

var getTempPath = require('./helpers/getTempPath');

/*
What am I doing here?

1. Getting directory path where all the templates are stored.
2. Checking if the template exists in the templates directory.
3. Getting the path to the actual template.
*/

module.exports = function(tempName, curDir, newTempName=null) {
    // Get the template director path from tempPath.txt.
    var tempPath = getTempPath();

    // Check if template exists in the folder.
    if (fs.readdirSync(tempPath).indexOf(tempName) === -1) throw 'ERROR: No template by that name. Please check your templates folder.';

    // If template exists, copy its contents into the current directory.
    var temp = tempPath + "\\" + tempName;
    
    // Get all the files inside the template and copy them into the current directory.
    var copied = shell.cp('-r', temp, curDir);
    if (shell.error()) throw 'ERROR: Something went wrong while copying the template. Here\'s what came back: ' + copied.stderr;

    if (newTempName && typeof newTempName === 'string' || newTempName instanceof String)
    {
        fs.renameSync(curDir + "\\" + tempName, curDir + "\\" + newTempName);
    }

    return 'SUCCESS: Cloned the template files into the current directory.';
}