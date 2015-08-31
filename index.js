/**
 * @author [dbxiao]
 * @data   [2015-08]
 */

var fis = module.exports = require("fis");

fis.require.prefixes = ['xbear', 'fis'];
fis.cli.name = 'xbear';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.help.commands = ['release', 'server'];

fis.cli.version = function() {
    var content = [
        '',
        'v' + fis.cli.info.version,
        '',
        '////////////////////////////////'.bold.red,
        '//////        xbear       //////'.bold.yellow,
        '//////   power by dbxiao  //////'.bold.green,
        '//////      thanks fis    //////'.bold.blue,
        '////////////////////////////////',
        ''
    ].join('\n');
    console.log(content);
};

var defaultConfig = require('./config/default.js');

fis.config.merge(defaultConfig);
