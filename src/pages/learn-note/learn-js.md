---
title: JS学习
data: 2019-09-17
tags: 学习
---

## 请解释事件委托（event delegation）。

事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。事件会冒泡到父元素。

好处：
- 内存占用减少。因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
- 无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。

## 请简述JavaScript中的this。

1. 在调用函数时使用new关键字，函数内的this是一个全新的对象
2. 如果apply、call或bind方法用于调用、创建一个函数，函数内的this就是作为参数传入这些方法的对象
3. 当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象
4. 如果调用函数不符合上述规则，那么this的值只想全局对象，浏览器下this指向window，但是在严格模式下是undefined
5. 如果符合上述多个规则，按照1-4从高到低优先级排序。
6. 如果该函数是ES2015中的箭头函数，将忽略上面的所有规则，this被设置成它被创建时的上下文。

## 请解释原型继承（prototypal inheritance）的工作原理。

通过对象的prototype属性指向它的原型对象

```javascript
const Obj = function() {}
const obj = new Obj()
Obj.prototype === obj.__proto__ // true
```

与其说是继承，不如说是委托。

## 说说你对 AMD 和 CommonJS 的了解。

他们都是实现模块化体系的方式，知道ES2015出现之前，js一直没有模块体系。

CommonJS是同步的，而AMD是异步的。

CommonJS设计是为服务器开发考虑的，而AMD支持异步加载模块，更适合浏览器。

## 请解释下面代码为什么不能用作 IIFE：function foo(){ }();，需要作出哪些修改才能使其成为 IIFE？

会抛出`Uncaught SyntaxError: Unexpected token )`的错误

正确应该是：`(function foo(){ }())`

注意：
```javascript
// Don't add JS syntax to this code block to prevent Prettier from formatting it.
const foo = void function bar() { return 'foo'; }();

console.log(foo); // undefined
```

## null、undefined和未声明变量之间有什么区别？如何检查判断这些状态值？

- 没有修饰符修饰的变量，会放到全局上
- 已经声明没有赋值，它的值是undefined
- null只能显式的赋值给变量，他表示`空值`

## 什么是闭包（closure），为什么使用闭包？

闭包是函数和声明该函数的词法环境的组合。词法作用域中使用的域，是变量在代码中声明的位置所决定的。闭包是即使被外部函数返回，依然可以访问到外部（封闭）函数作用域的函数。

## 请说明.forEach循环和.map()循环的主要区别，它们分别在什么情况下使用？

主要区别是map返回一个新数组

## 匿名函数的典型应用场景是什么？

匿名函数可以在IIFE中使用，来封装局部作用域内的代码，以便其声明的变量不会暴露到全局作用域中。

匿名函数可以作为只用一次（类似回调）

## 你如何组织自己的代码？（使用模块模式（module pattern）还是经典继承（classical inheritance）？）

基于React、Redux的Flux体系结构，它鼓励使用单向函数变成的方法。我用普遍对象表示我的app模型，编写实用纯函数去操作这些对象

## 宿主对象（host objects）和原生对象（native objects）的区别是什么？

原生对象：
String, Math, RegExp, Object, Function

宿主对象(运行环境提供)：
window, XMLHTTPRequest

## 下列语句有什么区别：function Person(){}、var person = Person()和var person = new Person()？

```js
function Person(name) {
  this.name = name;
}

var person = Person('John');
console.log(person); // undefined
console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person('John');
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"
```

## .call和.apply有什么区别？

```js
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

## 请说明Function.prototype.bind的用法。

bind()方法创建一个新的函数, 当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

## 什么时候会用到document.write()？

document.write()用来将一串文本写入由document.open()打开的文档流中。当页面加载后执行document.write()时，它将调用document.open，会清除整个文档（`<head>和<body>`会被移除！），并将文档内容替换成给定的字符串参数。因此它通常被认为是危险的并且容易被误用。

## 功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别？

功能检测：
功能检测包括确定浏览器是否支持某段代码，以及是否运行不同的代码（取决于它是否执行），以便浏览器始终能够正常运行代码功能，而不会在某些浏览器中出现崩溃和错误。例如：

```js
if ('geolocation' in navigator) {
  // 可以使用 navigator.geolocation
} else {
  // 处理 navigator.geolocation 功能缺失
}
```

功能推断：
功能推断会对功能可用性进行检查，但是在判断通过后，还会使用其他功能，因为它的假设其他功能也可用

> 非常不推荐功能推断，功能检测更能保证万无一失

UA字符串：
这是浏览器报告的字符串，它允许网络协议对等放识别请求用户代理的应用类型、操作系统、应用供应商和应用版本。它可以通过`navigator.userAgent`访问。然而，这个字符串很难解析并且很可能存在欺骗性。例如，Chrome会同时作为Chrome和Safari进行报告。因此，要检测Safari，除了检查Safari字符串，还要检查是否存在Chrome字符串。不要使用这种方式。

## 请尽可能详细地解释 Ajax。

Ajax（asynchronous JavaScript and XML）是使用客户端上的许多 Web 技术，创建异步 Web 应用的一种 Web 开发技术。借助 Ajax，Web 应用可以异步（在后台）向服务器发送数据和从服务器检索数据，而不会干扰现有页面的显示和行为。通过将数据交换层与表示层分离，Ajax 允许网页和扩展 Web 应用程序动态更改内容，而无需重新加载整个页面。实际上，现在通常将 XML 替换为 JSON，因为 JavaScript 对 JSON 有原生支持优势。

XMLHttpRequest API 经常用于异步通信。此外还有最近流行的fetch API。

## 使用 Ajax 的优缺点分别是什么？

**优点**
- 交互性好，来自服务器的新内容可以动态更改，无需重新加载整个页面。
- 减少与服务器的连接，因为脚本和样式只需要被请求一次
- 状态可以维护在一个页面上。javascript变量和DOM状态将得到保持，因为主容器页面未被重新加载

## 请说明 JSONP 的工作原理，它为什么不是真正的 Ajax？

JSONP（带填充的 JSON）是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。

JSONP 通过`<script>`标签发送跨域请求，通常使用callback查询参数，例如：https://example.com?callback=printData。 然后服务器将数据包装在一个名为printData的函数中并将其返回给客户端。

```js
<!-- https://mydomain.com -->
<script>
function printData(data) {
  console.log(`My name is ${data.name}!`);
}
</script>

<script src="https://example.com?callback=printData"></script>
// 文件加载自 https://example.com?callback=printData
printData({ name: 'Yang Shun' });

```
客户端必须在其全局范围内具有printData函数，并且在收到来自跨域的响应时，该函数将由客户端执行。

JSONP 可能具有一些安全隐患。由于 JSONP 是纯 JavaScript 实现，它可以完成 JavaScript 所能做的一切，因此需要信任 JSONP 数据的提供者。

现如今，跨来源资源共享（CORS） 是推荐的主流方式，JSONP 已被视为一种比较 hack 的方式。

## 你使用过 JavaScript 模板吗？用过什么相关的库？

使用过。Handlebars、Underscore、Lodash、AngularJS 和 JSX。我不喜欢 AngularJS 中的模板，因为它在指令中大量使用了字符串，并且书写错误会被忽略。JSX 是我的新宠，因为它更接近 JavaScript，几乎没有什么学习成本。现在，可以使用 ES2015 模板字符串快速创建模板，而不需依赖第三方代码。

## 请解释变量提升（hoisting）。

变量提升（hoisting）是用于解释代码中变量声明行为的术语。使用var关键字声明或初始化的变量，会将声明语句“提升”到当前作用域的顶部。 但是，只有声明才会触发提升，赋值语句（如果有的话）将保持原样。我们用几个例子来解释一下。

## 请描述事件冒泡。

当一个事件在 DOM 元素上触发时，如果有事件监听器，它将尝试处理该事件，然后事件冒泡到其父级元素，并发生同样的事情。最后直到事件到达祖先元素。事件冒泡是实现事件委托的原理（event delegation）。

## “attribute” 和 “property” 之间有什么区别？

“Attribute” 是在 HTML 中定义的，而 “property” 是在 DOM 上定义的。为了说明区别，假设我们在 HTML 中有一个文本框：`<input type="text" value="Hello">`。

```js
const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello
```

但是在文本框中键入“ World!”后:
```js
console.log(input.getAttribute('value')); // Hello
console.log(input.value); // Hello World!
```

## 为什么扩展 JavaScript 内置对象是不好的做法？

扩展 JavaScript 内置（原生）对象意味着将属性或方法添加到其prototype中。虽然听起来很不错，但事实上这样做很危险。想象一下，你的代码使用了一些库，它们通过添加相同的 contains 方法来扩展Array.prototype，如果这两个方法的行为不相同，那么这些实现将会相互覆盖，你的代码将不能正常运行。

扩展内置对象的唯一使用场景是创建 polyfill，本质上为老版本浏览器缺失的方法提供自己的实现，该方法是由 JavaScript 规范定义的。

## document 中的load事件和DOMContentLoaded事件之间的区别是什么？

当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架的完成加载。

window的load事件仅在 DOM 和所有相关资源全部完成加载后才会触发。

## ==和===的区别是什么？

==是抽象相等运算符，而===是严格相等运算符。==运算符是在进行必要的类型转换后，再比较。===运算符不会进行类型转换，所以如果两个值不是相同的类型，会直接返回false。

## 请解释关于 JavaScript 的同源策略。
## 请使下面的语句生效：
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
## 请说明三元表达式中“三元”这个词代表什么？
## 什么是"use strict";？使用它有什么优缺点？
## 创建一个循环，从 1 迭代到 100，3的倍数时输出 "fizz"，5的倍数时输出 "buzz"，同时为3和5的倍数时输出 "fizzbuzz"。
## 为什么不要使用全局作用域？
## 为什么要使用load事件？这个事件有什么缺点吗？你知道一些代替方案吗，为什么使用它们？
## 请解释单页应用是什么，如何使其对 SEO 友好。
## 你对 Promises 及其 polyfill 的掌握程度如何？
## Promise代替回调函数有什么优缺点？
## 用转译成 JavaScript 的语言写 JavaScript 有什么优缺点？
## 你使用什么工具和技巧调试 JavaScript 代码？
## 你使用什么语句遍历对象的属性和数组的元素？
## 请解释可变对象和不可变对象之间的区别。
## 请解释同步和异步函数之间的区别。
## 什么是事件循环？调用堆栈和任务队列之间有什么区别？
## 请解释function foo() {}和var foo = function() {}之间foo的用法上的区别。
## 使用let、var和const创建变量有什么区别？
## ES6 的类和 ES5 的构造函数有什么区别？
## 你能给出一个使用箭头函数的例子吗，箭头函数与其他函数有什么不同？
## 在构造函数中使用箭头函数有什么好处？
## 高阶函数（higher-order）的定义是什么？
## 请给出一个解构（destructuring）对象或数组的例子。
## ES6 的模板字符串为生成字符串提供了很大的灵活性，你可以举个例子吗？
## 你能举出一个柯里化函数（curry function）的例子吗？它有哪些好处？
## 使用扩展运算符（spread）的好处是什么，它与使用剩余参数语句（rest）有什么区别？
## 如何在文件之间共用代码？
## 什么情况下会用到静态类成员？