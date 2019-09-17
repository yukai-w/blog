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
## null、undefined和未声明变量之间有什么区别？如何检查判断这些状态值？
## 什么是闭包（closure），为什么使用闭包？
## 请说明.forEach循环和.map()循环的主要区别，它们分别在什么情况下使用？
## 匿名函数的典型应用场景是什么？
## 你如何组织自己的代码？（使用模块模式（module pattern）还是经典继承（classical inheritance）？）
## 宿主对象（host objects）和原生对象（native objects）的区别是什么？
## 下列语句有什么区别：function Person(){}、var person = Person()和var person = new Person()？
## .call和.apply有什么区别？
## 请说明Function.prototype.bind的用法。
## 什么时候会用到document.write()？
## 功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别？
## 请尽可能详细地解释 Ajax。
## 使用 Ajax 的优缺点分别是什么？
## 请说明 JSONP 的工作原理，它为什么不是真正的 Ajax？
## 你使用过 JavaScript 模板吗？用过什么相关的库？
## 请解释变量提升（hoisting）。
## 请描述事件冒泡。
## “attribute” 和 “property” 之间有什么区别？
## 为什么扩展 JavaScript 内置对象是不好的做法？
## document 中的load事件和DOMContentLoaded事件之间的区别是什么？
## ==和===的区别是什么？
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