# 暂时记下 周末归档

## Monday

## Tuesday

`npm search`

### nodejs

- 高性能的io
- 事件处理机制完善
- 天然能处理DOM

阻塞、非阻塞。

事件驱动模型
<img src="./src/images/" alt="事件驱动模型" />

events 模块 事件处理

模块化（4类：原生+三种文件模块）

nodejs

## Wednesday

### node

node使用CMD标准

```js
var http = require('http');

http.createServer(function(req, res) {
  // 定义 http 头
  res.writeHead(200, { 'content-type': 'text/plan' })

  // 发送响应数据
  res.end('hello world\n');


}).listen(8000);

// 服务运行后输出一行信息
console.log('server is running')
```

## Thursday

### 列表查询表单数据流

1. 定义一个参数params对象
2. 分析其中某一个改变是否影响其他（例如：更改了查询条件，需要把页码置为1）
3. 定义一个getData函数，里面发送请求，直接使用params对象
4. 绑定params对象，params修改后，发送新的请求。

## Friday
