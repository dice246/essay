# Umi &amp; Dva

# Umi
## 为什么使用？

- 开箱即用（内置react/react-router）
- 类next.js且功能完备的路由约定，同时支持配置路由的方式
- 完善的插件体系
- 高性能
- PWA,已路由为单元的code splitting
- 支持静态页导出
- 开发启动快（支持一键开启dll/hard-source-webpack-plugin）
- 一键兼容到IE9
- 完善的TS支持
- 与dva数据流的深入融合



# Dva
dva是一个基于redux和redux-saga的数据流方案，为了简化开发，内置了react-router和fetch，所以也可以理解为一个轻量级的框架
## 特点

- 易学易用 
一共6个API，对redux用户非常友好，配合umi降低为0API
- elm概念 
通过reducers,effects,和subsriptions组织model
- 插件机制
例如dva-loading可以自动处理loading状态
- 支持HMR



## 理解dva
### 软件分层

1. page负责与用户打交道
1. model负责处理业务逻辑
1. service负责与http接口对接，进行纯粹的数据读写
#### 1. model

- state
- action
- dispatch
- reducer
- effect副作用，处理异步
#### 2. subscriptions 订阅
#### 3. router 路由
