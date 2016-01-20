# xBear

## 关于xBear

* xbear使用fis为基础，作为xStack（http://develop.xpluse.com/xstack）和xCord（http://develop.xpluse.com/xcode）全栈开发框架默认编译和发布工具。
* xbear支持模板文件和静态文件编译、打包、发布，默认支持less转css、静态文件时间戳。
* xbear完全开源，你可以免费使用xBear作为自己项目的编译和开发工具。

## xBear思想

* 在所有项目工程中，都包括通用项目（common）和业务项目（business）。
* web开发由模板文件（html）和静态文件（js、css、images、video）组成。
* 编译过程中，所有模板文件（html）自动发布到x-output/view目录，静态文件发布到x-output/res目录。
* xbear自动关联补全url。

## 开始xBear

* 安装：npm install -g xbear
* 版本：xbear -v

## xBear常用命令

* 普通编译：xbear release -d
* 监控编译：xbear release -wd 
* 打包编译：xbear release -wcd
* cordova编译：xbear release -wcd cordova


## xBear wiki

	更多详情请见wiki:https://github.com/dbxiao/xbear/wiki


## 更新日志
	[xbear-1.0.23](2016-01-20)
	1、增加namespace和product全局变量，增加<widget 和<layout 标签

	[xbear-1.0.20](2015-12-07)【测试版】
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
