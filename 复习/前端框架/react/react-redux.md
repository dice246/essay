# react-redux

通过Context来实现<Provider/>组件，提供一个全局的store.通过connect为组件提供数据和变更方法。

# API
## <Provider store>
嵌入根组件，使组件层级中的connect()方法都能获取到Redux store

## connect([mapStateToProps], [mapDispatchToProps])(Component)
### mapStateToProps(state)(Function)
该回调函数必须返回一个纯函数，这个对象会与组件的props合并。
### mapDispatchToProps(dispatch)(Object || Function)

1. 如果省略了这个参数，默认情况下dispatch回注入到你的组件中的props上。
1. 如果传递的是一个对象，那么每个定义在该对象上的函数都将被当做Redux action creator,对象所定义的方法将作为属性名；每个方法返回一个新的函数，函数中的dispatch方法会将action creator的返回值作为参数执行。这些属性会被合并到组件的props中。
1. 如果传递的是一个函数，该函数将接收一个dispatch函数，然后由你决定如何返回一个对象。


