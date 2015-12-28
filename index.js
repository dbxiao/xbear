//vi xbear/index.js
var fis = module.exports =  require('fis3');
var time = null;

fis.require.prefixes.unshift('xbear');
fis.cli.name = 'xbear';
fis.cli.info = require('./package.json');

fis.set('date', new Date);
time = [fis.get('date').getYear()+1900, fis.get('date').getMonth()+1, fis.get('date').getDate(), fis.get('date').getMinutes()].join("");

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

fis.match('*', {
  release: '/res/$0' // 所有资源发布时产出到 /static 目录下
});

fis.match('*.html', {
  release: '/view/$0' // 所有 PHP 模板产出后放到 /template 目录下
});

// 所有js, css 加 hash
fis.match('*.{js,css,less}', {
  useHash: false
});

// 所有图片加 hash
fis.match('image', {
  useHash: false
});

//静态文件时间戳
fis.match('*.{js,css,less}', {
    query: '?t='+time
});

//图片文件时间戳
fis.match('image', {
    query: '?t='+time
});

// fis-parser-less
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.{css,less}', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('widget/*.{html, tpl, js, css}', {
  isMod: true
});

fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

//fis3-hook-module
fis.hook('module', {
  mode: 'amd' // 模块化支持 amd 规范，适应 require.js
});
