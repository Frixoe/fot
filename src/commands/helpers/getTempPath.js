var fs = require('fs');

module.exports = function()
{
    var tempPath = fs.readFileSync(__dirname + '\\..\\..\\..\\tempPath.txt', {encoding: 'utf8'});
    if (!tempPath) throw 'ERROR: A templates path has not been set yet.';

    return tempPath;
}