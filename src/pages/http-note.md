---
title: http权威指南笔记（一）
date: 2019-06-04
tags: http权威指南笔记
---

## MIME 类型

MIME 类型是一种文本标记，表示一种主要的对象类型和一个特定的子类型，中间由一条斜杠来分隔：

- HTML 格式的文本：`text/html`
- 普通的 ASCII 文本：`text/plain`
- JPEG 版本的图片：`image/jpeg`
- GIF 格式的图片：`image/gif`
- Apple 的 quickTIme 电影：`video/quicktime`
- 微软的 PowerPoint：`application/vnd.ms-powerpoint`

> 常见的 MIME 类型有数百个，实验性或用途有限的 MIME 类型则更多。

## URI vs URL vs URN

- URI：统一资源标识符号
- URL：统一资源定位符
- URN：统一资源名

URI 包含 URL 及 URN。

> URN 仍然处于实验阶段

## 事务

**一个 HTTP 事务由一条请求命令和一个响应结果组成**

--- page 10 ---

------------ 一灯 -----------

## ipv4 协议

int  8*4 32字节 储存2^32个ip地址

## tcp/ip 协议栈

- 应用层
- 表示层
- 会话层
- 传输层（tcp ucp）
- 网络层（ip地址规定，分配）
- 数据链路层（硬件，物理层电信号）
- 物理层（硬件）
