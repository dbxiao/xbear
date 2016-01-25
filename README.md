# xBear

## 致歉：

* 在2016年1月初，xbear发布1.1.*版本，依赖fis由fis直接升级到fis3，导致部分开发者使用后无法编译。特此我们将xbear依赖的由fis3切换为fis。xbear后续升级全部已fis作为基础进行增量升级，如升级为fis3，xbear将重新建立新的仓库管理。如对你的项目造成影响，深表歉意。

## 关于xBear

* xbear 使用fis为基础，作为xStack（http://develop.xpluse.com/xstack）和xCord（http://develop.xpluse.com/xcode）全栈开发框架默认编译和发布工具。
* xbear 支持模板文件和静态文件编译、打包、发布，默认支持less转css、静态文件时间戳。
* xbear 完全开源，你可以免费使用xBear作为自己项目的编译和开发工具。

## xBear思想

* 在所有项目工程中，都包括通用项目（common）和业务项目（business）。
* web开发由模板文件（html）和静态文件（js、css、images、video）组成。
* 编译过程中，所有模板文件（html）自动发布到x-output/view目录，静态文件发布到x-output/res目录。
* xbear自动关联补全静态url。

## 开始xBear

* 安装：npm install -g xbear
* 版本：xbear -v

## xBear常用命令

* [命令集合]  xbear release -{wcopd} {local,cordova}

* [命令解释]  w：watch, 文件修改监控，当文件有修改时，触发命令
              c：clean, 缓存清除，当执行release时，强制清空缓存文件
              o：optimizer, 文件压缩，当执行reelase，对静态文件进行压缩
              p：pack，打包，当执行release时，根据配置将多个文件进行打包合并

              local: xbear默认配置本地目录（x-output目录），编译文件将直接编译到x-output目录中
              cordova：当使用xCord移动框架时，编译文件将直接编译到x-output\cordova\www目录中

* [demo]      xbear release -wcopd local,cordova //将文件压缩合并编译到x-ouput目录和cordova目录 

## xBear wiki

	更多详情请见wiki:https://github.com/dbxiao/xbear/wiki


## 更新日志
	[xbear-1.0.26](2016-01-25)【测试版】
	1、添加fis-postpackager-simple和fis-postpackager-autoload依赖，解决pack报错问题
	
	[xbear-1.0.25](2016-01-22)【测试版】
	1、修复<widget 和<layout 缺少inline标签问题。增加fis-parser-less到1.0.3

	[xbear-1.0.23](2016-01-20)【测试版】
	1、增加namespace和product全局变量，增加<widget 和<layout 标签

	[xbear-1.0.21](2015-12-07)【测试版】
	1、优化common模块编译和发布规则。

	[xbear-1.0.20](2015-12-04)【测试版】
	1、修复layout标签闭合bug。
	2、common模块编译取消mod加载。

	[xbear-1.0.19](2015-12-03) 【测试版】
	1、新增widget、layout import引入标签；开发者直接使用widget，layout标签，eg:<widget rel="import" href="home:widget/home/home.html"；
	2、新增跨模块引用方法，eg：在home模块中引入common模块widget，<widget rel="import" href="common:widget/home/home.html" >。

	[xbear-1.0.17](2015-09-03)【稳定版】
	1、优化编译目录规则，适应移动端开发，模板文件发布到view目录，静态文件发布到res目录;
	2、支持xStack框架和xCord框架;
	3、全面支持web全栈开发和移动端hybrid开发：http://develop.xpluse.com/xcord。
