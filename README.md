# xbear

## 关于xbear

* xbear继承fis，作为xstack（https://github.com/dbxiao/xstack ）全栈开发框架默认编译和发布工具。
* xbear支持less、时间戳、md5。
* xbear完全开源，你可以免费使用xbear作为自己项目的编译和开发工具。

## xbear思想

* 在所有项目工程中，都包括通用项目（common）和业务项目（business）。
* web开发由模板文件（html）和静态文件（js、css、images、video）组成。

## 开始xbear

* 安装：npm install -g xbear
* 版本：xbear -v

## xbear常用命令

* 普通编译：xbear release -d local
* 监控编译：xbear release -wd local
* 打包编译：xbear release -wopd local

## xbear wiki

	更多详情请见wiki:https://github.com/dbxiao/xbear/wiki


## 功能日志

	1、优化编译目录规则，适应移动端开发，模板文件发布到view目录，静态文件发布到res目录
	2、支持xstack框架和xphone框架。
	3、全面支持web全栈开发和移动端hybrid开发。