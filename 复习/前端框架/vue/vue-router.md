# vue-router

# 导航钩子
## 全局钩子函数

- beforeEach(to, from, next) 路由改变前调用
常用于用户权限
- afterEach(to, from)路由改变后调用
常用于让页面返回顶端
- 

## 路由配置中的导航钩子
beforeEnter(to, from ,next)

## 组件内的钩子函数

- beforeRouterEnter(to, from, next)
该组件对应的路由被comfirm前调用
- beforeRouteUpdate(to, from ,next)
当前路由改变，但该组件被复用时被调用
- beforeRouteLeave(to, from, next)
当导航离开组件对应的路由时调用



## 路由检测变化
使用watch来对$route监听
