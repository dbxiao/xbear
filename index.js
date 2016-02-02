/**
 * @author [dbxiao]
 * @date   [2015-12]
 * @desc   [xbear 执行主程序]
 */

'use strict';

var xbear = module.exports = require("fis");
var defaultConfig = require('./config/default.js');
var autoFolders   = require('./lib/autoFolders.js');

//commander object
xbear.cli.commander = null;
xbear.cli.name          = 'xbear';
xbear.require.prefixes  = ['xbear', 'fis'];
xbear.cli.help.commands = ['release', 'server'];
xbear.cli.info          = xbear.util.readJSON(__dirname + '/package.json');

// @overide [重构 kernel/lib/compile]
xbear.compile = require('./lib/compile.js');
// @overide [默认配置]
xbear.config.merge(defaultConfig);

xbear.cli.version = function() {
    var v = xbear.cli.info.version;
    var content = [
        '',
        'v' + v,
        '',
        '////////////////////////////////////////////'.bold.white,
        '/////              xBear               /////'.bold.yellow,
        '/////         全栈代码管理工具         /////'.bold.red,
        '/////       [dbxiao@foxmail.com]       /////'.bold.green,
        '///// http://develop.xpluse.com/xbear  /////'.bold.blue,
        '////////////////////////////////////////////'.bold.white,
        ''
    ].join('\n');
    console.log(content);
};