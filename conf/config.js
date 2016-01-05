var fis = require("fis3");
var time = null;

function setConfigData(product, namespace){
    fis.set('date', new Date);
    fis.set("product", product);
    fis.set("namespace", namespace);

    time = [fis.get('date').getYear()+1900,
        fis.get('date').getMonth()+1,
        fis.get('date').getDate(),
        fis.get('date').getHours(),
        fis.get('date').getMinutes(),
        fis.get('date').getSeconds()
    ].join("");

    // 文件发布到res目录
    fis.match('*', {
        release: '/res/'+product+'/'+namespace+'/$0'
    });

    // 模板文件发布到view目录
    fis.match('*.html', {
        release: '/view/'+product+'/'+namespace+'/$0'
    });

    //静态文件时间戳
    fis.match('*.{js,css,less}', {
        query: '?t=' + time
    });

    //图片文件时间戳
    fis.match('image', {
        query: '?t=' + time
    });

    // fis-parser-less
    fis.match('*.{less,css}', {
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

    fis.match('::package', {
        spriter: fis.plugin('csssprites')
    });

    //fis3-hook-module
    fis.hook('module', {
        mode: 'amd' // 模块化支持 amd 规范，适应 require.js
    });

    // widget源码目录下的资源被标注为组件
    fis.match('/widget/**/*', {
        isMod: true
    });


    /****************************************************************/
    /**             media pack ::: xbear release pack              **/
    /****************************************************************/

    // 打包策略 [http://npm.taobao.org/package/fis3-postpackager-loader]
    fis.media('pack')
       .match('::packager', { 
        postpackager: fis.plugin('loader', {
            allInOne: true
        })
    });

    // 打包规则
    fis.media('pack')
       .match('*.js', {
            optimizer: fis.plugin('uglify-js', {
                mangle: {
                    expect: ['require', 'define', 'module'] //不想被压的
                }
            })
        })
        .match('*.css', {
            optimizer: fis.plugin('clean-css', {
                'keepBreaks': true //保持一个规则一个换行
        })
    });
};

exports.setConfigData = setConfigData;