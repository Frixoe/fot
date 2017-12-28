var fs = require('fs');

var getTempPath = require('./helpers/getTempPath');

module.exports = function() {
    var tempPath = getTempPath();

    var files = fs.readdirSync(tempPath, 'utf8');

    if (!files) throw 'ERROR: Your templates directory is empty.';
    return files;
}