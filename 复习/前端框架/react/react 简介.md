# react 简介

## 前言
react 负责逻辑渲染
react-dom 渲染实际的dom
react使用jsx来描述UI
react遵循单项数据流，没有双向绑定。输入框要设置value和onChange，成为受控组件

## JSX
是一种js的扩展语法，格式比较像模板语法，但事实上完全是在JS内部实现的。JSX可以很好的描述UI
JSX实际上就是React.createElment的调用。最终的结果是react元素。


## 组件
react应用程序由无数个组件组成


### 组件的两种形式：
#### class组件
class组件通常拥有 **状态和声明周期** ，继承于 **Component** ，实现 **render** 方法。
#### function组件
通常是无状态的，仅仅关注内容展示。 **（从16.8开始引入了hooks，通过hooks可以拥有有状态）**


### 组件状态管理
#### class组件的状态管理

- class组件通过使用state和setState来维护状态 
- **用setState更新状态而不能直接修改** 
- setState是批量处理的，因为对同一个对象执行多次操作只起一次作用。
- **setState只有在合成事件和钩子函数中是异步的，在原生事件和setTimeout,setInterval中是同步的** 
#### function组件的状态管理

- 通过hooks api维护状态



