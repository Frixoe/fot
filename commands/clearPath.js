var fs = require('fs');

module.exports = function()
{
    var prevPath = fs.readFileSync(__dirname + '\\..\\tempPath.txt', {encoding: 'utf8'});
    var output = prevPath ? prevPath : 'Nothing';

    fs.writeFileSync(__dirname + '\\..\\tempPath.txt', '');
    return 'SUCCESS: Removed the previous path, which was: ' + output +' and set it to Nothing';
}