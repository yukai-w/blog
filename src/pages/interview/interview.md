---
title: 面试题
data: 2019-10-11
tags: 面试
---

## 为什么 typeof null === 'object'

因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

## 重写类型转换

```js
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  }
}
1 + a // => 3
'1' + a // => '12'
```

> 重写 Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。

## new 发生了什么

- 新生成了一个对象
- 链接到原型
- 绑定 this
- 返回新对象

注意运算优先级
```js
function Foo() {
    return this;
}
Foo.getName = function () {
    console.log('1');
};
Foo.prototype.getName = function () {
    console.log('2');
};

new Foo.getName();   // -> 1
new Foo().getName(); // -> 2

// 相当于
new (Foo.getName());
(new Foo()).getName();
```

