/**
 * @author [dbxiao]
 * @date   [2015-08]
 */

var fis = module.exports = require("fis");

fis.cli.name          = 'xbear';
fis.require.prefixes  = ['xbear', 'fis'];
fis.cli.help.commands = ['release', 'server'];
fis.cli.info          = fis.util.readJSON(__dirname + '/package.json');

fis.cli.version = function() {
    var content = [
        '',
        'v' + fis.cli.info.version,
        '',
        '////////////////////////////////////'.bold.red,
        '//////          xbear         //////'.bold.yellow,
        '//////     Build by dbxiao    //////'.bold.green,
        '//////  [dbxiao@foxmail.com]  //////'.bold.yellow,
        '////////////////////////////////////'.bold.red,
        ''
    ].join('\n');
    console.log(content);
};

var defaultConfig = require('./config/default.js');

fis.config.merge(defaultConfig);
