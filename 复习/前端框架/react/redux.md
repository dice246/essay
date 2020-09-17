# redux

## reducer
纯函数，接口旧的state和action,返回新的state

## 流程图
![image.png](https://cdn.nlark.com/yuque/0/2020/png/89543/1600309695456-3a70dca1-e930-4bf3-b860-2a655c67a0bc.png#align=left&display=inline&height=471&margin=%5Bobject%20Object%5D&name=image.png&originHeight=942&originWidth=1730&size=677038&status=done&style=none&width=865)
## 工作流程

1. 通过store来存储数据
1. store中的reducer初始化state并定义state的修改规则
1. 通过dispatch一个action来提交对数据的修改
1. action提交到reducer函数里，根据传入的action的type,返回新的state
