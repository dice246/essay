# react 原理解析

# 什么是vdom?
## what?

1. 是一种编程概念或模式。在这个概念中，UI已一种理想化的,或者说虚拟的表现形式存在内存中,通过react-dom等类库与真实dom同步。这一过程叫做协调。
1. 这种方式赋予了react的声明式API：告诉react希望UI是什么状态,react就能匹配该状态。使开发者从属性操作，事件处理和手动更新DOM这些在构建应用程序时必要的操作中解放出来。聚焦于业务本身。
1. 用js对象表示DOM信息和结构，当状态变更的时候，重新渲染整个js的对象结构，这个JS对象被称为vdom.
## why?

1. 提升性能的下限，通过diff算法对比新旧vdom的差异，可以批量，最小化的执行dom操作
## 与vue的异同？

- react的vdom一开始就有，vue是在演进过程中才出现的
- jsx本身就是js的扩展，转义过程简单直接；vue将template编译为render函数的过程需要复杂的编译器转换字符串ast-js函数字符串



# 什么是fiber?
Fiber是react新的协调引擎，使vdom可以进行增量式渲染。

# jsx
## 什么是jsx?
类JS的语法扩展
## 为什么需要jsx?

- 开发效率
- 执行效率
- 类型安全



# React.createElement & render & Component

1. webpack+babel编译时，替换JSX为React.createElement(type, props, ...chidlren)
1. 所有React.createElment()执行结束后得到一个JS对象即vdom,能够完整描述dom结构
1. reactDOM.render(vdom, container)可以将vdom转换为dom并追加到container中
1. 实际上，转换过程需要经过一个diff过程，对比新旧dom进行更新
