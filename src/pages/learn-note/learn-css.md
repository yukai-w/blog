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

雪碧图是把多张图片整合到一张图片上。

## 如何解决不同浏览器的样式兼容性问题？

- 使用不同的样式表，按需加载，需要使用服务端渲染
- 使用已经处理好的此类问题的库，比如Bootstrap
- 使用`autoprefixer`自动生成css属性前缀
- 使用Reset CSS或Normalize.css

## 如何为功能受限的浏览器提供页面？ 使用什么样的技术和流程？

- 优雅降级
- 渐进式增强
- 利用caniuse.com检查特性支持
- 使用autoprefixer自动生成css前缀
- 使用 Modernizr 进行特性检测

## 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？

这些方法与可访问性（a11y - accessibility）有关

- `visibility:hidden`：元素仍然在页面流中，并占用空间
- `width:0;height:0`：使元素不占用屏幕上的任何空间，导致不显示它。
- `position:absolute;left:-999999px`：将它置于屏幕之外
- `text-indent:-99999px`：这只适用于block元素中的文本
- `Metadata(元数据)`：例如通过使用Schema.org、RDF、JSON-LD
- WAI-ARIA：如何增加网页可访问性的 W3C 技术规范


## 你使用过栅格系统吗？偏爱哪一个？

- flex
- grid
- `float-based` 拥有更多浏览器支持，已经在Bootstrap中使用多年。

## 你是否使用过媒体查询或移动优先的布局？

根据窗口尺寸改变导航的样式

## 你熟悉制作 SVG 吗？

通过设置fill和stroke属性，可以完成基本着色操作。

## 除了screen，你还能说出一个 @media 属性的例子吗？

- all 适用于所有设备。
- print 为了加载合适的文档到当前使用的可视窗口. 需要提前咨询 paged media（媒体屏幕尺寸）, 以满足个别设备网页尺寸不匹配等问题。
- screen 主要适用于彩色的电脑屏幕
- speech 解析speech这个合成器. 注意: CSS2已经有一个相似的媒体类型叫aural.

## 编写高效的 CSS 应该注意什么？

首先，浏览器从最右边的选择器，即关键选择器（key selector），向左依次匹配。根据关键选择器，浏览器从DOM中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。**选择器匹配语句链越短，刘拉你的配速度越快。**

BEM（block element modifier）原则上建议为独立的css类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。

搞清楚哪些css属性会出发重新布局（reflow）、重绘（repaint）和合成（compositing）。在写样式时，避免出发重新布局的可能。

## 使用 CSS 预处理的优缺点分别是什么？

优点：
- 提高css可维护性
- 易于编写嵌套选择器
- 引入变量，增添主题功能。可以在不同的项目中共享主题文件
- 通过混合（Mixins）生成重复的css
- 将代码分割成多个文件。**不进行预处理的css，虽然也可以分割成多个文件，但需要建立多个HTTP请求加载这些文件。**

缺点：
- 需要预处理工具
- 重新编译的时间可能会慢

## 对于你使用过的 CSS 预处理，说说喜欢和不喜欢的地方？

## 如何实现一个使用非标准字体的网页设计？

使用`@font-face`并为不同的`font-weight`定义`font-family`

## 解释浏览器如何确定哪些元素与 CSS 选择器匹配。

例如：形如`p span`的选择器，浏览器首先找到所有的span元素，并遍历它的父元素直到根元素以找到p元素

## 描述伪元素及其用途。

- :first-line和:first-letter可以用来修饰文字。
- 使用:before和after展示提示中的三角箭头。鼓励关注点分离

## 说说你对盒模型的理解，以及如何告知浏览器使用不同的盒模型渲染布局。

CSS 盒模型描述了以文档树中的元素而生成的矩形框，并根据排版模式进行布局。每个盒子都有一个内容区域（例如文本，图像等）以及周围可选的padding、border和margin区域。

CSS 盒模型负责计算：

- 块级元素占用多少空间。
- 边框是否重叠，边距是否合并。
- 盒子的尺寸。

盒模型有以下规则：

- 块级元素的大小由width、height、padding、border和margin决定。
- 如果没有指定height，则块级元素的高度等于其包含子元素的内容高度加上padding（除非有浮动元素，请参阅下文）。
- 如果没有指定width，则非浮动块级元素的宽度等于其父元素的宽度减去父元素的padding。
- 元素的height是由内容的height来计算的。
- 元素的width是由内容的width来计算的。
- 默认情况下，padding和border不是元素width和height的组成部分。

## * { box-sizing: border-box; }会产生怎样的效果？

- 元素默认应用了box-sizing:content-box，元素的宽高只会决定内容的大小
- box-sizing:border-box改变计算元素的宽高方式，border和padding的大小也将计算在内

## display的属性值都有哪些？

none, block, inline, inline-block, table, table-row, table-cell, list-item.

## inline和inline-block有什么区别？

|                                 | `block`                                                     | `inline-block`                             | `inline`                                                                                                           |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 大小                            | 填充其父容器的宽度。                                        | 取决于内容。                               | 取决于内容。                                                                                                       |
| 定位                            | 从新的一行开始，并且不允许旁边有 HTML 元素（除非是`float`） | 与其他内容一起流动，并允许旁边有其他元素。 | 与其他内容一起流动，并允许旁边有其他元素。                                                                         |
| 能否设置`width`和`height`       | 能                                                          | 能                                         | 不能。 设置会被忽略。                                                                                              |
| 可以使用`vertical-align`对齐    | 不可以                                                      | 可以                                       | 可以                                                                                                               |
| 边距（margin）和填充（padding） | 各个方向都存在                                              | 各个方向都存在                             | 只有水平方向存在。垂直方向会被忽略。 尽管`border`和`padding`在`content`周围，但垂直方向上的空间取决于'line-height' |
| 浮动（float）                   | -                                                           | -                                          | 就像一个`block`元素，可以设置垂直边距和填充。                                                                      |

## relative、fixed、absolute和static四种定位有什么区别？

- static: 默认值
- relative: 在不改变页面布局的前提下调整元素位置
- absolute: 不为元素预留空间
- fixed: 元素的位置相对于窗口，并且滚动时不会改变
- sticky: 盒位置根据正常流计算，然后相对于该元素在流中的flow root（BFC）和containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为table时），该元素定位均不对后序元素造成影响。当元素B被粘性定位时，后序元素的位置仍按照B未定位的位置来确定。

## 你使用过哪些现有的 CSS 框架？你是如何改进它们的？

- Bootstrap： 更新周期缓慢。Bootstrap 4 已经处于 alpha 版本将近两年了。添加了在页面中广泛使用的微调按钮组件。
- Semantic UI：源代码结构使得自定义主题很难理解。非常规主题系统的使用体验很差。外部库的路径需要硬编码（hard code）配置。变量重新赋值没有 Bootstrap 设计得好。
- Bulma： 需要很多非语义的类和标记，显得很多余。不向后兼容，以至于升级版本后，会破坏应用的正常运行。

## 你了解 CSS Flexbox 和 Grid 吗？

Flexbox主要用于一维布局，而grid则用于二维布局

Flexbox 解决了 CSS 中的许多常见问题，例如容器中元素的垂直居中，粘性定位（sticky）的页脚等。Bootstrap 和 Bulma 基于 Flexbox，这是创建布局的推荐方式。我之前曾使用过 Flexbox，但在使用flex-grow时遇到了一些浏览器不兼容问题（Safari），我必须使用inline-blocks和手动计算百分比宽度，来重写我的代码，这种体验不是很好。

Grid 创建基于栅格的布局，是迄今为止最直观的方法（最好是！），但目前浏览器支持并不广泛。

## 请解释在编写网站时，响应式与移动优先的区别。

todo

## 响应式设计与自适应设计有何不同？

响应式：

网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。

自适应：

它更像是渐进式增强的现代解释。

## 你有没有使用过视网膜分辨率的图形？当中使用什么技术？

我倾向于使用更高分辨率的图形（显示尺寸的两倍）来处理视网膜显示。更好的方法是使用媒体查询，像@media only screen and (min-device-pixel-ratio: 2) { ... }，然后改变background-image。

对于图标类的图形，我会尽可能使用 svg 和图标字体，因为它们在任何分辨率下，都能被渲染得十分清晰。

还有一种方法是，在检查了window.devicePixelRatio的值后，利用 JavaScript 将`<img>`的src属性修改，用更高分辨率的版本进行替换。

## 什么情况下，用translate()而不用绝对定位？什么时候，情况相反。

translate是transform的一个值，改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个GPU图层，但改变绝对定位会使用到CPU。因此translate更高效，可以缩短平滑动画的绘制时间。

当使用translate时，元素仍然占据其原始空间（有点像position:relative），这与改变绝对定位不同。