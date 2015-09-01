/**
 * xbear配置文件，请勿修改，路由问题，请联系：dbxiao@foxmail.com
 */

var now = new Date();
var time = [now.getFullYear(), now.getMonth()+1, now.getDate(), now.getHours() , now.getMinutes(), now.getSeconds()].join("");

module.exports = {
    project: {
        md5Length: 8,
        md5Connector: '.'
    },
    modules : {
        parser : {
            css : ["less"]
        },
        postpackager : "simple"
    },
    settings : {
        postprocessor : {
            jswrapper : {
                type:'amd'
            }
        },
        optimizer : {
            'png-compressor' : {
                type : 'pngquant',
                speed : 2,
                quality : [80, 90],
                iebug : false
            },
            "uglify-js" : { 
                mangle: {
                    except: "exports, module, require, define"
                }
            }
        }
    },
    roadmap:{
        path:[
            /*** 模板编译规则（将所有html文件发布到view目录）*/
            {
                reg : /^\/(page|layout|widget)\/(.+\.html)$/i,
                isMod : true,
                release : '/view/${product}/${namespace}/$1/$2',
                id : '$1/$2'
            },
            /*** 静态文件编译规则（将所有静态文件发布到res目录）*/
            {
                reg : /^\/(page|layout|widget|static)\/(.*\.(js|css|jpg|png|gif|tpl))$/i,
                isMod : true,
                release : '/res/${product}/${namespace}/$1/$2',
                id : '$1/$2',
                query : "?t="+time
            },
            /*** 其它所有静态文件规则（将合并代码打包到res目录）*/
            {
                reg: /^.+$/,
                release: '/res/${product}/${namespace}$&',
                query : "?t="+time
            }
        ]
    }
};

