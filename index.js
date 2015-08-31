var fis = module.exports = require('fis');

fis.require.prefixes = [ 'xbear', 'fis' ];
fis.cli.name = 'xbear';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.help.commands = [ 'release', 'server' ];