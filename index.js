/**
 * @author [dbxiao]
 * @date   [2015-08]
 */

var fis = module.exports = require('fis3');

fis.require.prefixes.unshift('xbear');
fis.cli.name = 'xbear';
fis.cli.info = require('./package.json');


fis.match('*.{js,css,less,png,gif,jpg,doc,mod}', {
    release: '/res/$0'  // 所有静态文件发布到 /res 目录下
});

fis.match('*.html', {
    release: '/view/$0' // 所有模板文件发布到 /view 目录下
});

// 所有js, css 加 hash
fis.match('*.{js,css,less}', {
    useHash: false
});

// 所有图片加 hash
fis.match('image', {
    useHash: false
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

fis.match('widget/*.{js,css}', {
    isMod: true
});

fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

fis.hook('module', {
    mode: 'amd'
});

// optimize
fis.media('prod')
    .match('*.js', {
        optimizer: fis.plugin('uglify-js', {
            mangle: {
                expect: ['require', 'define', 'some string'] //不想被压的
            }
        })
    })
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    });

// pack
fis.media('prod')
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('*.js', {
        packTo: '/res/common_all.js'
    })
    .match('*.css', {
        packTo: '/res/common_all.css'
    })
    .match('/widget/**/*.js', {
        packTo: '/res/widget_all.js'
    })
    .match('/widget/**/*.css', {
        packTo: '/res/widget_all.css'
    });


fis.cli.version = function() {
    var v = fis.cli.info.version;
    var content = [
        '',
        'v' + v,
        '',
        '////////////////////////////////////////////'.bold.red,
        '/////              xBear               /////'.bold.yellow,
        '/////              '.v.'               /////'.bold.yellow,
        '/////         全栈代码管理工具         /////'.bold.green,
        '/////       [dbxiao@foxmail.com]       /////'.bold.yellow,
        '///// http://develop.xpluse.com/xbear  /////'.bold.red,
        '////////////////////////////////////////////'.bold.blue,
        ''
    ].join('\n');
    console.log(content);
};







// var fis = module.exports = require("fis");
// var defaultConfig = require('./config/default.js');
// fis.cli.name          = 'xbear';
// fis.require.prefixes  = ['xbear', 'fis'];
// fis.cli.help.commands = ['release', 'server'];
// fis.cli.info          = fis.util.readJSON(__dirname + '/package.json');

// @overide [重构 kernel/lib/compile]
// fis.compile = require('./lib/compile.js');
// @overide [默认配置]
// fis.config.merge(defaultConfig);

// fis.cli.version = function() {
//     var content = [
//         '',
//         'v' + fis.cli.info.version,
//         '',
//         '////////////////////////////////////////////'.bold.red,
//         '/////              xBear               /////'.bold.yellow,
//         '/////         全栈代码管理工具         /////'.bold.green,
//         '/////       [dbxiao@foxmail.com]       /////'.bold.yellow,
//         '///// http://develop.xpluse.com/xbear  /////'.bold.red,
//         '////////////////////////////////////////////'.bold.blue,
//         ''
//     ].join('\n');
//     console.log(content);
// };




