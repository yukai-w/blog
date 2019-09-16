---
title: css学习
data: 2019-09-11
tags: 学习
---

## CSS 选择器的优先级是如何计算的？

浏览器通过优先级规则，判断元素使用哪些样式，优先级通过4个指标确定，假定以`a,b,c,d`命名：

- `a`表示是否是内联样式，如果是，a为1，否则为0
- `b`表示ID选择器的数量
- `c`表示类选择器、属性选择器和伪类选择器的数量之和
- `d`表示标签选择器和伪元素选择器之和

> **从左到右依次比较，权重依次减小。直到比较出最大值，即可停止**

## 重置（resetting）CSS 和 标准化（normalizing）CSS 的区别是什么？你会选择哪种方式，为什么？

- 重置：去掉所有的浏览器默认样式
- 标准化：去掉一部分，留下有用的一部分

## 请阐述Float定位的工作原理。

浮动元素可以从正常文档流中移出，但是保持了部分流动性，会影响其他元素的定位（比如文字会围绕着浮动元素）。

清除浮动方法：

- clear: both
- 父元素设置为overflow: auto或者overflow: hidden。会使其内部的子元素形成格式化上下文（Block Formatting Context）。

> 参考： 

## 请阐述z-index属性，并说明如何形成层叠上下文（stacking context）。

css中的z-index属性控制重叠元素的垂直叠加顺序，z-index只能影响position值不是static的元素。

每个层叠上下文是自包含的：当元素的内容发生层叠后，整个元素将会在父层叠上下文中按顺序进行层叠。少数css属性会出发一个新的层叠上下文，例如：opacity小于1，filter不是none，transform不是none。

## 请阐述块格式化上下文（Block Formatting Context）及其工作原理。

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

- float的值不是none.
- position的值不是static或relative.
- display的值是table-cell、table-caption、inline-block、flex、或inline-flex。
- overflow的值不是visible。

在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。

两个相邻的块级盒在垂直方向上的边距会发生合并（collapse）。

## 有哪些清除浮动的技术，都适用哪些情况？

- 空div方法：`<div style="clear:both;"></div>`。
- Clearfix 方法：上文使用.clearfix类已经提到。
- overflow: auto或overflow: hidden方法：上文已经提到。

## 请解释什么是雪碧图（css sprites），以及如何实现？

## 如何解决不同浏览器的样式兼容性问题？

## 如何为功能受限的浏览器提供页面？ 使用什么样的技术和流程？

## 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？

## 你使用过栅格系统吗？偏爱哪一个？

## 你是否使用过媒体查询或移动优先的布局？

## 你熟悉制作 SVG 吗？

## 除了screen，你还能说出一个 @media 属性的例子吗？

## 编写高效的 CSS 应该注意什么？

## 使用 CSS 预处理的优缺点分别是什么？

## 对于你使用过的 CSS 预处理，说说喜欢和不喜欢的地方？

## 如何实现一个使用非标准字体的网页设计？

## 解释浏览器如何确定哪些元素与 CSS 选择器匹配。

## 描述伪元素及其用途。

## 说说你对盒模型的理解，以及如何告知浏览器使用不同的盒模型渲染布局。

## * { box-sizing: border-box; }会产生怎样的效果？

## display的属性值都有哪些？

## inline和inline-block有什么区别？

## relative、fixed、absolute和static四种定位有什么区别？

## 你使用过哪些现有的 CSS 框架？你是如何改进它们的？

## 你了解 CSS Flexbox 和 Grid 吗？

## 请解释在编写网站时，响应式与移动优先的区别。

## 响应式设计与自适应设计有何不同？

## 你有没有使用过视网膜分辨率的图形？当中使用什么技术？

## 什么情况下，用translate()而不用绝对定位？什么时候，情况相反。