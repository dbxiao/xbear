//vi xbear/index.js
var fis  = module.exports = require('fis3');
fis.deploy = require('./lib/deploy_plugin.js');

fis.require.prefixes.unshift('xbear');
fis.cli.name = 'xbear';
fis.cli.info = require('./package.json');


fis.cli.version = function() {
    var v = fis.cli.info.version;
    var content = [
        '',
        'v' + v,
        '',
        '////////////////////////////////////////////'.bold.red,
        '/////              xBear               /////'.bold.yellow,
        '/////              '+v+'               /////',
        '/////         全栈代码管理工具         /////'.bold.green,
        '///// http://develop.xpluse.com/xbear  /////'.bold.red,
        '////////////////////////////////////////////'.bold.blue,
        ''
    ].join('\n');
    console.log(content);
};