var path = require('path');
var fs = require('fs');

module.exports = function(dirPath) {
    if (fs.existsSync(dirPath))
    {
        if (path.isAbsolute(dirPath))
        {
            fs.writeFileSync(__dirname + '\\..\\tempPath.txt', dirPath);
            return 'SUCCESS: Set the templates path to - ' + dirPath;
        } else throw 'ERROR: Please enter an absolute path. Absolute Path: A path containing the root dir and all the sub dirs.';
    } else throw 'ERROR: That is an incorrect path.';
}