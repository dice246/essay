# vue源码实现

## 工作机制
![image.png](https://cdn.nlark.com/yuque/0/2020/png/89543/1599042104975-5a4eb6ac-4f5f-439b-b25c-c71689dbd4fa.png#align=left&display=inline&height=391&margin=%5Bobject%20Object%5D&name=image.png&originHeight=782&originWidth=1462&size=472871&status=done&style=none&width=731)


## 初始化
在 new Vue() 时会调⽤_init()进行初始化，会初始化各种实例方法、全局⽅法、执⾏一些⽣命周期、 初始化props、data等状态。其中最重要的是data的「响应化」处理。
初始化之后调用 $mount 挂载组件，主要执⾏编译和首次更新

## 编译
编译分为3个阶段：

1. parse
使用正则解析template中的vue的指令变量等等，形成抽象语法书AST
1. optimize
标记一些静态节点，用作后面的性能优化，在diff的时候直接忽略
1. generate
把第一部分生成的AST转化为渲染函数render function

													
## 更新
数据的修改触发setter,然后监听器会通知进行修改，通过对比新旧vdom树，得到最小修改，就是patch，然后只需要把这些差异修改即可		
