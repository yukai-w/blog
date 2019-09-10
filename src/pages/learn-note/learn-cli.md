---
title: 如何搭建一个企业级的脚手架
data: 2019-09-10
tags: 学习
---
## 脚手架的雏形

脚手架的初衷，就是提供一个最佳实践的基础模板，所以`模板拷贝`就是其核心功能。

## 脚手架需要考虑

目前主流的脚手架基本功能：
- 提出一系列问题选项；
- 为你的新建项目提供一份模板并安装依赖；
- 提供调试构建命令。

但是要做一个可伸缩的、用户友好的，还需要考虑：
- 模板支持版本管理
- 支持扩展新模板（开放封闭原则）
- 自动检测版本更新
- 根据用户选择，生成个性化模板
- 友好的UI界面
- 构建功能独立，可因模板而异（区分不同端）
- 多人合作项目，能确保构建结果一致

## 脚手架的三类包
包|功能|安装位置|备注
---|---|---|---
全局命令包|就像一个大脑，负责响应全局命令，并进行调度|全局包路径|global 安装，提供全局命令
模板插件包|初始化工程所拷贝的模板|某个约定路径，如 `~/.maoda`|模板可随业务扩展
构建插件包|提供构建(webpack)能力|工程内 *(目前主流脚手架都改用此方案)*|不同模板可使用同一构建包，也可不同

其调度关系如下：
![](http://www.imaoda.com/i/20190827.141abc91.png)

## 值得收藏的第三方调料包
重要性|包名称|功能
---|---|---
必要|[minimist](https://www.npmjs.com/package/minimist)|解析用户命令，将 process.argv 解析成对象
必要|[fs-extra](https://www.npmjs.com/package/fs-extra)|对 fs 库的扩展，支持 promise
必要|[chalk](https://www.npmjs.com/package/chalk)|让你 console.log 出来的字带颜色，比如成功时的绿色字
必要|[import-from](https://www.npmjs.com/package/import-from)|类似 require，但支持指定目录，让你可以跨工程目录进行 require，比如全局包想引用工程路径下的内容
必要|[resolve-from](https://www.npmjs.com/package/resolve-from)|同上，只不过是 require.resolve
必要|[inquirer](https://www.npmjs.com/package/inquirer)|询问用户并记录反馈结果，界面互动的神器
必要|[yeoman-environment](https://www.npmjs.com/package/yeoman-environment)|【核心】用于执行一个「模板插件包」，后文详细描述
锦上添花|[easy-table](https://www.npmjs.com/package/easy-table)|类似 console.table，输出漂亮的表格
锦上添花|[ora](https://www.npmjs.com/package/ora)|提供 loading 菊花
锦上添花|[semver](https://www.npmjs.com/package/semver)|提供版本比较
锦上添花|[figlet](https://www.npmjs.com/package/figlet)|console.log出一个漂亮的大logo
锦上添花|[cross-spawn](https://www.npmjs.com/package/cross-spawn)|跨平台的child_process (跨 Windows/Mac)
锦上添花|[osenv](https://www.npmjs.com/package/osenv)|跨平台的系统信息
锦上添花|[open](https://www.npmjs.com/package/open)|跨平台打开 app，比如调试的时候开打 chrome


原文地址：https://github.com/imaoda/js-front-end-practice/blame/master/%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E4%BC%81%E4%B8%9A%E7%BA%A7%E8%84%9A%E6%89%8B%E6%9E%B6.md