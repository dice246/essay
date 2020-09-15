# react组件化

# 组件跨层级通信-Context
react通过context实现祖代组件向后代组件跨层级传值。Vue中的provide和inject来源于Context.在Context模式下有两个角色：

- Provider 外层提供数据的组件
- Consumer 内层获取数据的组件

react-redux的<Provider/>就是通过Context提供一个全局的store

# 复合组件-composition
复合组件给你足够的敏捷去定义自定义组件的外观和行为, 这种方式更加明确和安全。
```javascript
  return (
    <Spin spinning={loading.global || logoutLoading}>
      <div className={styles.normal}>
        <Header>
          <Row>
            <Col span={6}>
              <h2 className={styles.title}>表情标注后台</h2>
            </Col>
            <Col span={18}>
              <UserInfo userInfo={userInfo} setLoading={setLogoutLoading}/>
            </Col>
          </Row>
        </Header>
        <Content>
          {children}	// 复合组件
        </Content>
      </div>
    </Spin>
  );
```


# 高阶组件
为了满足复杂需求就要扩展功能单一的组件，所以就有高阶组件的概念。
**高阶组件就是参数为组件，返回值为新组件的函数** 
```javascript
const foo = Cmp => props => { 
  return <Cmp {...props} />
}

export default function HocPage(props) { 
  const Foo = foo(Child)
  return (
    <div>
    	HocPage
      <Foo />
    </div>
  ) 
}
```

- 可以链式调用
- 装饰器写法
只能用在class上面

# hooks
## 特点

- 在无需修改组件结构的情况下复用状态逻辑
- 可将组件中互相关联的部分拆分为更小的函数，复杂组件将更容易理解
- 更简洁，更容易理解
## 状态钩子 State Hooks
## 副作用钩子 Effect Hooks
## useReducer
## useContext
用于快速在函数组件中导入上下文
```javascript
function Child(props) {
  const { userName } = useContext(Context); 
  return (
    <div>
      Child
      <div>userName: {userName}</div>
    </div>
	); 
}
 
```


