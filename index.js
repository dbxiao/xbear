
var fis = module.exports = require("fis");

fis.require.prefixes = [ 'xbear', 'fis' ];
fis.cli.name = 'xbear';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.help.commands = [ 'release', 'server' ];

//增加deploy接口
//fis.deploy = require("ppear-deploy-plugin");

var defaultConfig = require('./config/default.js');

fis.config.merge(defaultConfig);
