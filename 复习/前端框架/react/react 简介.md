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



### 组件通信
#### props传递
父子组件通信
#### context
跨层级组件之间通信
#### redux
无明显关系的组件间通信


## 生命周期
![image.png](https://cdn.nlark.com/yuque/0/2020/png/89543/1599812921459-eae84d57-410b-4f34-a9dd-a26c85d9a562.png#align=left&display=inline&height=554&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1108&originWidth=2124&size=465877&status=done&style=none&width=1062)


## HOC和hooks的优缺点？
### HOC缺点:

- 可能出现多层包裹组件的情况，多层抽象增加了复杂度和理解成本
- 命名冲突：如果高阶组件多重嵌套，没有使用命名空间的话会产生冲突，然后覆盖老组件
- 不可见性：HOC相当于在原组件上在包装一个组件，压根不知道外层包装的是什么，对于你是黑盒
### hooks:
#### 优点：

- 简洁：
解决了hoc的嵌套问题，更加简洁
- 解耦：
可以更方便的把UI和状态分离，做到更彻底的解耦
- 组合：
hooks可以引用另外的hooks,形成新的hooks, 使组合千变万化
- 函数友好：
为函数式组件而生，解决类组件的几大问题：
   - this指向容易错误
   - 分割在不同生命周期中的逻辑使得代码难以理解和维护
   - 代码复用成本高（高阶组件容易使代码量剧增）
#### 缺点：

- 额外的学习成本
- 写法上有限制（不能出现在条件和循环中），并且写法限制了重构的成本
- 破坏了PureComponent, React.memo浅比较的性能优化效果（为了取最新的props和state,每次render()都 要重新创建）
- 在闭包场景中可能会用到旧的state和props值
- 内部实现上不直观
- React.memo并不能完全替代shouldComponentUpdate(因为拿不到state change, 只针对props change)



