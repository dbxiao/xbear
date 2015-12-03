/**
 * @author [dbxiao]
 * @date   [2015-08]
 */

var fis = module.exports = require("fis");
var defaultConfig = require('./config/default.js');

fis.cli.name          = 'xbear';
fis.require.prefixes  = ['xbear', 'fis'];
fis.cli.help.commands = ['release', 'server'];
fis.cli.info          = fis.util.readJSON(__dirname + '/package.json');

// @overide [重构 kernel/lib/compile]
fis.compile = require('./lib/compile.js');
// @overide [默认配置]
fis.config.merge(defaultConfig);

fis.cli.version = function() {
    var content = [
        '',
        'v' + fis.cli.info.version,
        '',
        '////////////////////////////////////////////'.bold.red,
        '/////              xBear               /////'.bold.yellow,
        '/////         全栈代码管理工具         /////'.bold.green,
        '/////       [dbxiao@foxmail.com]       /////'.bold.yellow,
        '///// http://develop.xpluse.com/xbear  /////'.bold.red,
        '////////////////////////////////////////////'.bold.blue,
        ''
    ].join('\n');
    console.log(content);
};




