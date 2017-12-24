var path = require('path');
var fs = require('fs');

module.exports = function(dirPath) {
    if (fs.existsSync(dirPath))
    {
        if (path.isAbsolute(dirPath))
        {
            fs.writeFileSync(__dirname + '\\..\\tempPath.txt', dirPath);
            console.log('SUCCESS: Set the templates path to - ' + dirPath);
        } else console.error('ERROR: Please enter an absolute path. Absolute Path: A path containing the root dir and all the sub dirs.');
    } else console.error('ERROR: That is an incorrect path.');
}