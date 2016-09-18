/**
 * @author [dbxiao]
 * @data   [2015-03-02]
 * @desc   [xbear配置文件，请勿修改，路由问题，请联系：dbxiao@foxmail.com] 
 * @updata [2016-04-01 增加react支持
 *          2016-02-28 增加ES6支持]
 */
 
var now = new Date();
var time = [now.getFullYear(), now.getMonth()+1, now.getDate(), now.getHours() , now.getMinutes(), now.getSeconds()].join("");

module.exports = {
    // 项目配置
    project: { 
        md5Length: 8,
        md5Connector: '.',
        fileType : {
            text : 'js,jsx'
        }
    },

    // 插件配置
    modules : {
        parser : {
            css : ["less"],
            js  : "react",
            jsx : "react",
            es  : "babel-5.x",
            js  : "babel-5.x"
            
        },
        postpackager : "simple"
    },

    // 插件运行配置
    settings : {
        postprocessor : {
            jswrapper : {
                type:'amd'
            }
        },
        optimizer : {
            "png-compressor" : {
                type : 'pngquant',
                speed : 2,
                quality : [80, 100],
                iebug : false
            },
            "uglify-js" : {
                mangle: {
                    except: "exports, module, require, define"
                }
            }
        },
        parser : {
            "jsx"  : "react",
            "js"   : "react",
            "babel-5.x" : {
                blacklist : ['regenerator'],
                optional  : ['asyncToGenerator'],
                sourceMaps: true,
                stage     : 3
            }
        }
    },

    // 编译配置
    merge : {
        modules : {
            postprocessor: {
                js: 'require-async',
                tpl: 'require-async'
            }
        }
    },

    // 目录规范与域名配置
    roadmap:{
        ext : {
            es : "js",
            jsx : "js"
        },
        path:[
            /*** 模板编译规则（将所有html文件发布到view目录）*/
            {
                reg : /^\/(page|layout|widget)\/(.+\.html)$/i,
                isMod : true,
                release : '/view/${product}/${namespace}/$1/$2',
                id : '$1/$2'
            },
            /*** 静态文件编译规则（将page、layout、widget静态文件发布到res目录）*/
            {
                reg : /^\/(page|layout|widget)\/(.*\.(js|jsx|css))$/i,
                isMod : true,
                release : '/res/${product}/${namespace}/$1/$2',
                id : '$1/$2',
                query : "?t="+time
            },
            /*** 静态文件编译规则（单独将static静态文件发布到res目录）*/
            {
                reg : /^\/(static)\/(.*\.(js|jsx|css))$/i,
                isMod : false,
                release : '/res/${product}/${namespace}/$1/$2',
                id : '$1/$2',
                query : "?t="+time
            },
            /*** page和widget doc目录下的ue设计图、mrd不需要编译产出 */
            {
                reg : /^\/(page|widget)\/.*\/doc\/[^\.]*\.(psd|png|jpg|doc|md)/i,
                release : false
            },
            /*** 将剩余static文件发布到res目录 */
            {
                reg : /^\/static\/(.*)$/i,
                release : '/res/${product}/${namespace}/$1'
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