/**
 * @author [dbxiao]
 * @date   [2015-12]
 * @desc   [xbear 执行主程序]
 */

'use strict';

var xbear          = module.exports = require("fis");
var $defaultConfig = require('./config/default.js');

//commander object
xbear.cli.commander = null;
xbear.cli.name          = 'xbear';
xbear.require.prefixes  = ['xbear', 'fis'];
xbear.cli.info          = xbear.util.readJSON(__dirname + '/package.json');
xbear.cli.help.commands = ['release', 'install', 'server'];

// @overide [重构 kernel/lib/compile]
xbear.compile = require('./lib/compile.js');

// @overide [默认配置]
xbear.config.merge($defaultConfig);

function hasArgv(argv, search){
    var pos = argv.indexOf(search);
    var ret = false;
    while(pos > -1){
        argv.splice(pos, 1);
        pos = argv.indexOf(search);
        ret = true;
    }
    return ret;
}

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

//run cli tools
xbear.cli.run = function(argv){
    xbear.processCWD = process.cwd();

    if(hasArgv(argv, '--no-color')){
        xbear.cli.colors.mode = 'none';
    }

    var first = argv[2];


    if(argv.length < 3 || first === '-h' ||  first === '--help'){
        xbear.cli.help();
    } else if(first === '-v' || first === '--version'){
        xbear.cli.version();
    } else if(first[0] === '-'){
        xbear.cli.help();
    } else {
        try{
            var name = argv[2]; // 插件名称
            var xcmd = require('xbear-'+name);
        }catch(e){
            console.log("ERROR:");
            console.log("Cannot find module 'xbear-"+name+"', please check!");
        }
        

        if(xcmd){
            xcmd(argv);
        }else{
            var commander = xbear.cli.commander = require('commander');
            var cmd = xbear.require('command', argv[2]);

            cmd.register(
                commander
                    .command(cmd.name || first)
                    .usage(cmd.usage)
                    .description(cmd.desc)
            );
            commander.parse(argv);
        }
    }
};