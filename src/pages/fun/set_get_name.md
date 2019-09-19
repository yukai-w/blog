---
title: 便捷初始化github name及email
data: 2019-09-19
tags: 小技巧
---

## 背景

公司环境下，设置了全局的git的name及email。
每次自己github上的项目初始化的时候需要运行一下以下命令

`git config user.name 'yukai-w'`
`git config user.email 'yukai.w@outlook.com'`

很不方便~！

## 偷懒：使用自定义bash

进入`~/.bash_profile`（没有可手动创建）

添加这么一行：
`alias setgitname='git config user.name "yukai-w" && git config user.email "yukai.w@outlook.com"'`

然后控制台运行：
`source ~/.bash_profile`

## 大功告成🤠

以后自己的项目直接运行`setgitname`就行啦~😇

