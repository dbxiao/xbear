#!/usr/bin/env node

var Liftoff= require('liftoff');
var argv   = require('minimist')(process.argv.slice(2));
var path   = require('path');
var cli    = new Liftoff({
	name: 'xbear', // 命令名字
	processTitle: 'xbear',
	moduleName: 'xbear',
	configName: 'fis-conf',
	// only js supported!
	extensions: {
		'.js': null
	}
});

cli.launch({
	cwd: argv.r || argv.root,
	configPath: argv.f || argv.file
}, function(env) {
	var fis;
	if (!env.modulePath) {
		fis = require('../');
	} else {
  		fis = require(env.modulePath);
	}
	fis.set('system.localNPMFolder',  path.join(env.cwd, 'node_modules/xbear'));
	fis.set('system.globalNPMFolder', path.dirname(__dirname));
	fis.cli.name = this.name;
	fis.cli.run(argv, env);
});