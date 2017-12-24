var fs = require('fs');

module.exports = function() {
    return fs.readFileSync(__dirname + '\\..\\tempPath.txt',  {encoding: 'utf8'});
}