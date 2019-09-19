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

- `<script>`-html解析中断，脚本被提取并立即执行。执行结束后，html解析继续。
- `<script async>`脚本的提取、执行的过程与html解析过程并行，脚本执行完毕可能在HTML解析完毕之前。当脚本与页面上其他脚本独立时，可以使用async，比如用作页面统计分析。
- `<script defer> `脚本仅提供过程与HTML解析过程并行，脚本的执行将在HTML解析完毕后进行。如果有多个defer的脚本，脚本的执行顺序从上到下。

> **注意：没有src属性的脚本，async和defer属性会被忽略**

## 为什么最好把 CSS 的<link>标签放在<head></head>之间？为什么最好把 JS 的<script>标签恰好放在</body>之前，有例外情况吗？

link放到head里面，可以让页面逐步呈现，提高用户体验

script放在body最后，使script加载不会阻止html解析

## 什么是渐进式渲染（progressive rendering）？

- 图片懒加载
- 确定显示内容优先级（分层次渲染）
- 异步加载HTML片段

## 为什么在<img>标签中使用srcset属性？请描述浏览器遇到该属性后的处理过程。

因为需要设计响应式图片，可以使用两个新属性`srcset`及`sizes`

srcset定义了我们允许浏览器选择的图像集，以及每个图像的大小。

sizes定义了一组媒体条件（例如屏幕宽度），并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。

浏览器会：
- 查看设备宽度
- 检查sizes列表中那个媒体条件是第一个为真
- 查看给与媒体查询的槽大小
- 加载srcset列表中引用的最接近所选的槽大小图像

代码示例：
```html
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

## 你有过使用不同模版语言的经历吗？

Pug ERB Slim Handlebars Jinja Liquid

模板语言大多是相似的，都提供了用于展示数据的内容替换和过滤器的功能，大部分模板引擎都支持自定义过滤器，以展示自定义格式的内容

## HTML全局属性有哪些

- accesskey:设置快捷键，提供快速访问元素如`<a accesskey="a">aaa</a>`在 windows 下的 firefox 中按alt + shift + a可激活元素
- class:为元素设置类标识，多个类名用空格分开，CSS 和 javascript 可通过 class 属性获取元素
- contenteditable: 指定元素内容是否可编辑
- contextmenu: 自定义鼠标右键弹出菜单内容
- data-*: 为元素增加自定义属性
- dir: 设置元素文本方向
- draggable: 设置元素是否可拖拽
- dropzone: 设置元素拖放类型： copy, move, link
- hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
- id: 元素 id，文档内唯一
- lang: 元素内容的的语言
- spellcheck: 是否启动拼写和语法检查
- style: 行内 css 样式
- tabindex: 设置元素可以获得焦点，通过 tab 可以导航
- title: 元素相关的建议信息
- translate: 元素和子孙节点内容是否需要本地化

