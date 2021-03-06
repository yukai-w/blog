---
title: JS学习
data: 2019-09-17
tags: 学习
---

## 请解释事件委托（event delegation）

事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。事件会冒泡到父元素。

好处：

- 内存占用减少。因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。

- 无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。

## 请简述JavaScript中的this

1. 在调用函数时使用new关键字，函数内的this是一个全新的对象
2. 如果apply、call或bind方法用于调用、创建一个函数，函数内的this就是作为参数传入这些方法的对象
3. 当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象
4. 如果调用函数不符合上述规则，那么this的值只想全局对象，浏览器下this指向window，但是在严格模式下是undefined
5. 如果符合上述多个规则，按照1-4从高到低优先级排序。
6. 如果该函数是ES2015中的箭头函数，将忽略上面的所有规则，this被设置成它被创建时的上下文。

## 请解释原型继承（prototypal inheritance）的工作原理

通过对象的prototype属性指向它的原型对象

```javascript
const Obj = function() {}
const obj = new Obj()
Obj.prototype === obj.__proto__ // true
```

与其说是继承，不如说是委托。

## 说说你对 AMD 和 CommonJS 的了解

他们都是实现模块化体系的方式，知道ES2015出现之前，js一直没有模块体系。

CommonJS是同步的，而AMD是异步的。

CommonJS设计是为服务器开发考虑的，而AMD支持异步加载模块，更适合浏览器。

## 请解释下面代码为什么不能用作 IIFE：function foo(){ }();，需要作出哪些修改才能使其成为 IIFE

会抛出`Uncaught SyntaxError: Unexpected token )`的错误

正确应该是：`(function foo(){ }())`

注意：

```javascript
// Don't add JS syntax to this code block to prevent Prettier from formatting it.
const foo = void function bar() { return 'foo'; }();

console.log(foo); // undefined
```

## null、undefined和未声明变量之间有什么区别？如何检查判断这些状态值(?)

- 没有修饰符修饰的变量，会放到全局上
- 已经声明没有赋值，它的值是undefined
- null只能显式的赋值给变量，他表示`空值`

## 什么是闭包（closure），为什么使用闭包(?)

闭包是函数和声明该函数的词法环境的组合。词法作用域中使用的域，是变量在代码中声明的位置所决定的。闭包是即使被外部函数返回，依然可以访问到外部（封闭）函数作用域的函数。

## 请说明.forEach循环和.map()循环的主要区别，它们分别在什么情况下使用(?)

主要区别是map返回一个新数组

## 匿名函数的典型应用场景是什么(?)

匿名函数可以在IIFE中使用，来封装局部作用域内的代码，以便其声明的变量不会暴露到全局作用域中。

匿名函数可以作为只用一次（类似回调）

## 你如何组织自己的代码？（使用模块模式（module pattern）还是经典继承（classical inheritance）？）

基于React、Redux的Flux体系结构，它鼓励使用单向函数变成的方法。我用普遍对象表示我的app模型，编写实用纯函数去操作这些对象

## 宿主对象（host objects）和原生对象（native objects）的区别是什么(?)

原生对象：
String, Math, RegExp, Object, Function

宿主对象(运行环境提供)：
window, XMLHTTPRequest

## 下列语句有什么区别：function Person(){}、var person = Person()和var person = new Person()

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

## .call和.apply有什么区别

```js
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

## 请说明Function.prototype.bind的用法

bind()方法创建一个新的函数, 当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

## 什么时候会用到document.write()

document.write()用来将一串文本写入由document.open()打开的文档流中。当页面加载后执行document.write()时，它将调用document.open，会清除整个文档（`<head>和<body>`会被移除！），并将文档内容替换成给定的字符串参数。因此它通常被认为是危险的并且容易被误用。

## 功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别

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

## 请尽可能详细地解释 Ajax

Ajax（asynchronous JavaScript and XML）是使用客户端上的许多 Web 技术，创建异步 Web 应用的一种 Web 开发技术。借助 Ajax，Web 应用可以异步（在后台）向服务器发送数据和从服务器检索数据，而不会干扰现有页面的显示和行为。通过将数据交换层与表示层分离，Ajax 允许网页和扩展 Web 应用程序动态更改内容，而无需重新加载整个页面。实际上，现在通常将 XML 替换为 JSON，因为 JavaScript 对 JSON 有原生支持优势。

XMLHttpRequest API 经常用于异步通信。此外还有最近流行的fetch API。

## 使用 Ajax 的优缺点分别是什么

优点:

- 交互性好，来自服务器的新内容可以动态更改，无需重新加载整个页面。
- 减少与服务器的连接，因为脚本和样式只需要被请求一次
- 状态可以维护在一个页面上。javascript变量和DOM状态将得到保持，因为主容器页面未被重新加载

## 请说明 JSONP 的工作原理，它为什么不是真正的 Ajax

JSONP（带填充的 JSON）是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。

JSONP 通过`<script>`标签发送跨域请求，通常使用callback查询参数，例如：[https://example.com?callback=printData](https://example.com?callback=printData)。 然后服务器将数据包装在一个名为printData的函数中并将其返回给客户端。

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

## 你使用过 JavaScript 模板吗？用过什么相关的库

使用过。Handlebars、Underscore、Lodash、AngularJS 和 JSX。我不喜欢 AngularJS 中的模板，因为它在指令中大量使用了字符串，并且书写错误会被忽略。JSX 是我的新宠，因为它更接近 JavaScript，几乎没有什么学习成本。现在，可以使用 ES2015 模板字符串快速创建模板，而不需依赖第三方代码。

## 请解释变量提升（hoisting）

变量提升（hoisting）是用于解释代码中变量声明行为的术语。使用var关键字声明或初始化的变量，会将声明语句“提升”到当前作用域的顶部。 但是，只有声明才会触发提升，赋值语句（如果有的话）将保持原样。我们用几个例子来解释一下。

## 请描述事件冒泡

当一个事件在 DOM 元素上触发时，如果有事件监听器，它将尝试处理该事件，然后事件冒泡到其父级元素，并发生同样的事情。最后直到事件到达祖先元素。事件冒泡是实现事件委托的原理（event delegation）。

## “attribute” 和 “property” 之间有什么区别

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

## 为什么扩展 JavaScript 内置对象是不好的做法

扩展 JavaScript 内置（原生）对象意味着将属性或方法添加到其prototype中。虽然听起来很不错，但事实上这样做很危险。想象一下，你的代码使用了一些库，它们通过添加相同的 contains 方法来扩展Array.prototype，如果这两个方法的行为不相同，那么这些实现将会相互覆盖，你的代码将不能正常运行。

扩展内置对象的唯一使用场景是创建 polyfill，本质上为老版本浏览器缺失的方法提供自己的实现，该方法是由 JavaScript 规范定义的。

## document 中的load事件和DOMContentLoaded事件之间的区别是什么

当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架的完成加载。

window的load事件仅在 DOM 和所有相关资源全部完成加载后才会触发。

## ==和===的区别是什么

==是抽象相等运算符，而===是严格相等运算符。==运算符是在进行必要的类型转换后，再比较。===运算符不会进行类型转换，所以如果两个值不是相同的类型，会直接返回false。

## 请解释关于 JavaScript 的同源策略

同源策略可防止 JavaScript 发起跨域请求。源被定义为 URI、主机名和端口号的组合。此策略可防止页面上的恶意脚本通过该页面的文档对象模型，访问另一个网页上的敏感数据。

## 请使下面的语句生效

`duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]`

```js
function duplicate(arr) {
  return arr.concat(arr);
}

function duplicate_2(arr) {
  return [...arr,...arr]
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

## 请说明三元表达式中“三元”这个词代表什么

“三元”表示接受三个操作数：判断条件，then表达式和else表达式。三元表达式不是 JavaScript 特有的，我不知道这个问题为什么会出现在这里。

## 什么是"use strict";？使用它有什么优缺点

优点：

- 无法再意外创建全局变量。
- 会使引起静默失败（silently fail，即：不报错也没有任何效果）的赋值操抛出异常。
- 试图删除不可删除的属性时会抛出异常（之前这种操作不会产生任何效果）。
- 要求函数的参数名唯一。
- 全局作用域下，this的值为undefined。
- 捕获了一些常见的编码错误，并抛出异常。
- 禁用令人困惑或欠佳的功能。

缺点：

- 缺失许多开发人员已经习惯的功能。
- 无法访问function.caller和function.arguments。
- 以不同严格模式编写的脚本合并后可能导致问题。

## 创建一个循环，从 1 迭代到 100，3的倍数时输出 "fizz"，5的倍数时输出 "buzz"，同时为3和5的倍数时输出 "fizzbuzz"

```js
for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}

for (let j = 1; j <= 100; j++) {
  const threeFlag = j % 3 == 0;
  const fiveFlag = j % 5 == 0;

  if (threeFlag && fiveFlag) {
    console.log('fizzbuzz')
  } else if(threeFlag) {
    console.log('fizz')
  } else {
    console.log('buzz')
  }
}
```

## 为什么不要使用全局作用域

每个脚本都可以访问全局作用域，付过人人都使用全局命名空间来定义自己的变量，肯定会发生冲突。使用模块模式「IIFE」将变量封装在本地命名空间中。

## 为什么要使用load事件？这个事件有什么缺点吗？你知道一些代替方案吗，为什么使用它们

在文档加载完成后出发load事件

缺点：load事件注册过多可能会被覆盖

可议借鉴jq的ready思想

- 源码解析地址：[http://rapheal.sinaapp.com/2013/01/30/jquery-src-ready/](http://rapheal.sinaapp.com/2013/01/30/jquery-src-ready/)

## 请解释单页应用是什么，如何使其对 SEO 友好

现如今，Web 开发人员将他们构建的产品称为 Web 应用，而不是网站。虽然这两个术语之间没有严格的区别，但网络应用往往具有高度的交互性和动态性，允许用户执行操作并接收他们的操作响应。在过去，浏览器从服务器接收 HTML 并渲染。当用户导航到其它 URL 时，需要整页刷新，服务器会为新页面发送新的 HTML。这被称为服务器端渲染。

然而，在现代的 SPA 中，客户端渲染取而代之。浏览器从服务器加载初始页面、整个应用程序所需的脚本（框架、库、应用代码）和样式表。当用户导航到其他页面时，不会触发页面刷新。该页面的 URL 通过 HTML5 History API 进行更新。浏览器通过 AJAX 请求向服务器检索新页面所需的数据（通常采用 JSON 格式）。然后，SPA 通过 JavaScript 来动态更新页面，这些 JavaScript 在初始页面加载时已经下载。这种模式类似于原生移动应用的工作方式。

好处：

- 用户感知响应更快，用户切换页面时，不再看到因页面刷新而导致的白屏。
- 对服务器进行的 HTTP 请求减少，因为对于每个页面加载，不必再次下载相同的资源。
- 客户端和服务器之间的关注点分离。可以为不同平台（例如手机、聊天机器人、智能手表）建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。

坏处：

- 由于加载了多个页面所需的框架、应用代码和资源，导致初始页面加载时间较长。
- 服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。
- SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。这无意中损害了应用的搜索引擎优化（SEO）。然而，当你构建应用时，大多数情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来“在浏览器中呈现你的 javascript，保存静态 HTML，并将其返回给爬虫”。

## 你对 Promises 及其 polyfill 的掌握程度如何

一些常见的 polyfill 是$.deferred、Q 和 Bluebird，但不是所有的 polyfill 都符合规范。ES2015 支持 Promises，现在通常不需要使用 polyfills。

手写promise：[https://github.com/xieranmaya/blog/issues/3](https://github.com/xieranmaya/blog/issues/3)

## Promise代替回调函数有什么优缺点

优点：

- 避免可读性极差的回调地狱。
- 使用.then()编写的顺序异步代码，既简单又易读。
- 使用Promise.all()编写并行异步代码变得很容易。

缺点：

- 轻微地增加了代码的复杂度（这点存在争议）。
- 在不支持 ES2015 的旧版浏览器中，需要引入 polyfill 才能使用。

## 用转译成 JavaScript 的语言写 JavaScript 有什么优缺点

这些是转译成 JavaScript 的语言，包括 CoffeeScript、Elm、ClojureScript、PureScript 和 TypeScript。

优点：

- 修复了 JavaScript 中的一些长期问题，并摒弃了 JavaScript 不好的做法。
- 在 JavaScript 的基础上提供一些语法糖，使我们能够编写更短的代码，我认为 ES5 缺乏语法糖的支持，但 ES2015 非常好。
- 对于需要长时间维护的大型项目，静态类型非常好用（针对 TypeScript）。

缺点：

- 由于浏览器只运行 JavaScript，所以需要构建、编译过程，在将代码提供给浏览器之前，需要将代码转译为 JavaScript。
- 如果 source map 不能很好地映射到预编译的源代码，调试会很痛苦。
- 大多数开发人员不熟悉这些语言，需要学习它。如果将其用于项目，会增加团队成本。
- 社区比较小（取决于语言），这意味着资源、教程、图书和工具难以找到。
- 可能缺乏 IDE（编辑器）的支持。
- 这些语言将始终落后于最新的 JavaScript 标准。
- 开发人员应该清楚代码正在被编译到什么地方——因为这是实际运行的内容，是最重要的。

## 你使用什么工具和技巧调试 JavaScript 代码

- React 和 Redux
  - React Devtools
  - Redux Devtools
- Vue
  - Vue Devtools
- JavaScript
  - Chrome Devtools
  - debugger声明
  - 使用万金油console.log进行调试

## 你使用什么语句遍历对象的属性和数组的元素

对象：

- for循环：for (var property in obj) { console.log(property); }。但是，这还会遍历到它的继承属性，在使用之前，你需要加入obj.hasOwnProperty(property)检查。
- Object.keys()：Object.keys(obj).forEach(function (property) { ... })。Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组。
- Object.getOwnPropertyNames()：Object.getOwnPropertyNames(obj).forEach(function (property) { ... })。Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。

数组：

- for loops：for (var i = 0; i < arr.length; i++)。这里的常见错误是var是函数作用域而不是块级作用域，大多数时候你想要迭代变量在块级作用域中。ES2015 引入了具有块级作用域的let，建议使用它。所以就变成了：for (let i = 0; i < arr.length; i++)。
- forEach：arr.forEach(function (el, index) { ... })。这个语句结构有时会更精简，因为如果你所需要的只是数组元素，你不必使用index。还有every和some方法可以让你提前终止遍历。

## 请解释可变对象和不可变对象之间的区别

- 什么是 JavaScript 中的不可变对象的例子？
- 不变性有什么优点和缺点？
- 你如何在自己的代码中实现不变性？

**可变对象** 在创建之后是可以被改变的。

**不可变对象** 在创建之后是不可以被改变的。

1. 在 JavaScript 中，string 和 number 从设计之初就是不可变(Immutable)。
2. 不可变 其实是保持一个对象状态不变，这样做的好处是使得开发更加简单，可回溯，测试友好，减少了任何可能的副作用。但是，每当你想添加点东西到一个不可变(Immutable)对象里时，它一定是先拷贝已存在的值到新实例里，然后再给新实例添加内容，最后返回新实例。相比可变对象，这势必会有更多内存、计算量消耗。
3. 比如：构造一个纯函数

```js
const student1 = {
  school: 'Baidu',
  name: 'HOU Ce',
  birthdate: '1995-12-15',
};

const changeStudent = (student, newName, newBday) => {
  return {
    ...student, // 使用解构
    name: newName, // 覆盖name属性
    birthdate: newBday, // 覆盖birthdate属性
  };
};

const student2 = changeStudent(student1, 'YAN Haijing', '1990-11-10');

// both students will have the name properties
console.log(student1, student2);
// Object {school: "Baidu", name: "HOU Ce", birthdate: "1995-12-15"}
// Object {school: "Baidu", name: "YAN Haijing", birthdate: "1990-11-10"}
```

## 请解释同步和异步函数之间的区别

同步函数阻塞，而异步函数不阻塞。在同步函数中，语句完成后，下一句才执行。在这种情况下，程序可以按照语句的顺序进行精确评估，如果其中一个语句需要很长时间，程序的执行会停滞很长时间。

异步函数通常接受回调作为参数，在调用异步函数后立即继续执行下一行。回调函数仅在异步操作完成且调用堆栈为空时调用。诸如从 Web 服务器加载数据或查询数据库等重负载操作应该异步完成，以便主线程可以继续执行其他操作，而不会出现一直阻塞，直到费时操作完成的情况（在浏览器中，界面会卡住）。

## 什么是事件循环？调用堆栈和任务队列之间有什么区别

事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。

如果你没有看过 Philip Robert [关于事件循环的演讲](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)，你应该看一下。这是观看次数最多的 JavaScript 相关视频之一。

## 请解释function foo() {}和var foo = function() {}之间foo的用法上的区别

函数声明

```js
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
```

函数表达式

```js
foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log('FOOOOO');
};
```

## 使用let、var和const创建变量有什么区别

用var声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，也可以是声明在任何函数外的变量。let和const是块级作用域，意味着它们只能在最近的一组花括号（function、if-else 代码块或 for 循环中）中访问。

## ES6 的类和 ES5 的构造函数有什么区别

1. ES5的构造函数的原型上的属性和方法可以遍历/ES6 不能够遍历
2. ES6的类必须通过new调用，构造函数则可以不用
3. 类不存在变量提升
4. ES6的类没有私有方法和私有属性（正在提议中）
5. class多了一个静态方法（static）,里面的this指向的是类本身，静态方法可以被子类继承
6. ES6的静态属性和静态方法
7. ES6 类多了一个new Target 可以判定new 的构造函数

## 你能给出一个使用箭头函数的例子吗，箭头函数与其他函数有什么不同

参数、返回值书写不同

this指向不同

## 在构造函数中使用箭头函数有什么好处

`todo`

## 高阶函数（higher-order）的定义是什么

**高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。**高阶函数是为了抽象一些重复执行的操作。一个典型的例子是map，它将一个数组和一个函数作为参数。map使用这个函数来转换数组中的每个元素，并返回一个包含转换后元素的新数组。JavaScript 中的其他常见示例是forEach、filter和reduce。高阶函数不仅需要操作数组的时候会用到，还有许多函数返回新函数的用例。Function.prototype.bind就是一个例子

## 请给出一个解构（destructuring）对象或数组的例子

解构是 ES6 中新功能，它提供了一种简洁方便的方法来提取对象或数组的值，并将它们放入不同的变量中。

## ES6 的模板字符串为生成字符串提供了很大的灵活性，你可以举个例子吗

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

//show函数采用rest参数的写法如下：

let name = '张三',
  age = 20,
  message = show`我来给大家介绍:${name}的年龄是${age}.`;

function show(stringArr, ...values) {
  let output = '';

  let index = 0;

  for (; index < values.length; index++) {
    output += stringArr[index] + values[index];
  }

  output += stringArr[index];

  return output;
}

message; //"我来给大家介绍:张三的年龄是20."
```

## 你能举出一个柯里化函数（curry function）的例子吗？它有哪些好处

柯里化（currying）是一种模式，其中具有多个参数的函数被分解为多个函数，当被串联调用时，将一次一个地累积所有需要的参数。这种技术帮助编写函数式风格的代码，使代码更易读、紧凑。值得注意的是，对于需要被 curry 的函数，它需要从一个函数开始，然后分解成一系列函数，每个函数都需要一个参数。

```js
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return function(newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
```

## 使用扩展运算符（spread）的好处是什么，它与使用剩余参数语句（rest）有什么区别

在函数泛型编码时，ES6 的扩展运算符非常有用，因为我们可以轻松创建数组和对象的拷贝，而无需使用Object.create、slice或其他函数库。这个语言特性在 Redux 和 rx.js 的项目中经常用到。

## 如何在文件之间共用代码

这取决于执行 JavaScript 的环境。

在客户端（浏览器环境）上，只要变量或函数在全局作用域（window）中声明，所有脚本都可以引用它们。或者，通过 RequireJS 采用异步模块定义（AMD）以获得更多模块化方法。

在服务器（Node.js）上，常用的方法是使用 CommonJS。每个文件都被视为一个模块，可以通过将它们附加到module.exports对象来导出变量和函数。

ES2015 定义了一个模块语法，旨在替换 AMD 和 CommonJS。 这最终将在浏览器和 Node 环境中得到支持。

## 什么情况下会用到静态类成员

静态类成员（属性或方法）不绑定到某个类的特定实例，不管哪个实例引用它，都具有相同的值。静态属性通常是配置变量，而静态方法通常是纯粹的实用函数，不依赖于实例的状态。

## es6

### generator

```js
let s = function* () {
  yield '🍺';
  yield '🍊';
}
const res = s();
res.next(); // { value: '🍺', done: false }
res.next(); // { value: '🍊', done: false }
res.next(); // { value: undefined, done: true }
```

### for of

包括 Array，Map，Set，String，TypedArray，arguments 对象等等

```javascript
for (let a of [1,2,3]){
  console.log(a);
}
```

### Set Map

```js
let arr = new Set('tsef');
arr.add('3');
arr.delete('3');
arr.has('t');

let foo = new Map();
food.set(key, value);
```

### async await
