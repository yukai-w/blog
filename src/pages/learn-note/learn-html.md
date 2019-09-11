---
title: HTML学习
data: 2019-09-10
tags: 学习
---
# HTMl相关问题

## DOCTYPE有什么用？
`document type`的缩写，是HTML用来区分标准模式和怪异模式的声明

## 如何提供包含多种语言内容的页面？
lang attr of html tag

## 在设计开发多语言网站时，需要留心哪些事情？
- lang属性（很多中国网站明明所有是中文，lang却是en，有点东西）
- 引导用户切换到自己的母语
- 在图片中展示文本会阻碍网站规模增长（多语言问题）
- 多语言长度
- 颜色
- 日期货币
- 阅读方向

## 什么是data-属性？
在js框架流行前，前端开发者使用`data-`属性，把额外的数据储存在DOM上。

但是这样的话，用户通过检查元素便可看到数据，并且可以任意修改。

## 将 HTML5 看作成开放的网络平台，什么是 HTML5 的基本构件（building block）？

- 语义
- 连接
- 离线和存储
- 多媒体
- 2D、3D
- 性能和集成
- 设备访问
- 外观

## 请描述cookie、sessionStorage和localStorage的区别。

||`cookie`|`localStorage`|`sessionStorage`|
|--|--|--|--|
|由谁初始化|客户端或服务端，服务器可以使用`Set-Cookie`请求头|客户端|客户端|
|过期时间|手动设置|永不过期|当页面关闭时|
|在当前浏览器会话中是否保持不变|取决于是否设置了过期时间|是|是|
|是否随着每个HTTP请求发送给服务器|是，Cookie会通过Cookie请求头，自动发送给服务器|否|否|
|容量|4kb|5MB|5MB|
|访问权限|任意窗口|任意窗口|当前页面窗口|

## 请描述<script>、<script async>和<script defer>的区别。
## 为什么最好把 CSS 的<link>标签放在<head></head>之间？为什么最好把 JS 的<script>标签恰好放在</body>之前，有例外情况吗？
## 什么是渐进式渲染（progressive rendering）？
## 为什么在<img>标签中使用srcset属性？请描述浏览器遇到该属性后的处理过程。
## 你有过使用不同模版语言的经历吗？