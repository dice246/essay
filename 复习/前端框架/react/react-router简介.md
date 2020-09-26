# react-router简介

包含3个库： ** react-router（基础库） react-router-dom（浏览器环境） react-router-native（react-native） ** 
# 基本使用
奉行一切皆组件的思想,以下都已组件的形式存在：

- **路由器-Router**
- **链接-Link**
- **路由-Route**
- **独占-Switch**
- **重定向-Redirect**



# Route渲染内容的三种方式：
优先级从上到下，三者能接收到同样的route props,包括match,location and history,但是当不匹配的时候，children的match为null。三种方式互斥，只能用一种。
## children: func
不管location是否匹配，都要渲染一段内容的时候使用。
```javascript
<Route
  path={to}
  children={({ match }) => (
  <li className={match ? "active" : ""}> 
    <Link to={to} {...rest}>
     {name}
    </Link>
  </li>
)}
/>
```
## component
只有当location匹配的时候才会渲染，当用components的时候，Router会用你指定的组件和React.createElement创建一个新的React element.这意味着当你提供一个内联函数的时候，每次render都会创建一个新的组件。这会导致不在更新已有的组件。而是直接卸载然后再去挂载一个新的组件。因此，当用到内联函数的时候使用render后者chidlren
## render
普通的函数调用

# 使用Router
## 404页面
设定一个没有path的路由在路由列表最后面，表示一定匹配
```javascript
<Route render={() => <h1>404</h1>} />
```
## 路由守卫
创建高阶组件包装Route使其具有权限判断的功能
