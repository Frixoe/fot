var fs = require('fs');
var shell = require('shelljs');

/*
What am I doing here?

1. Getting directory path where all the templates are stored.
2. Checking if the template exists in the templates directory.
3. Getting the path to the actual template.
*/

module.exports = function(tempName, curDir, newTempName=null) {
    // Get the template director path from tempPath.txt.
    var tempPath = fs.readFileSync(__dirname + '\\..\\tempPath.txt', {encoding: 'utf8'});
    if (!tempPath) throw 'ERROR: A templates path has not been set yet.';

    // Check if template exists in the folder.
    var templates = fs.readdirSync(tempPath);

    if (templates.indexOf(tempName) === -1) throw 'ERROR: No template by that name. Please check your templates folder.';

    // If template exists, copy its contents into the current directory.
    var temp = tempPath + "\\" + tempName;
    
    // Get all the files inside the template and copy them into the current directory.
    var copied = shell.cp('-r', temp, curDir);
    if (shell.error()) throw 'ERROR: Something went wrong while copying the template. Here\'s what came back: ' + copied.stderr;

    if (newTempName && typeof newTempName === 'string' || newTempName instanceof String)
    {
        var renamed = shell.mv(tempName, newTempName);
        if (shell.error()) throw 'ERROR: Something went wrong while renaming the template. Here\'s what came back: ' + renamed.stderr;
    }

    return 'SUCCESS: Cloned the template files into the current directory.';
}