# new一个对象

new 关键字会进行如下的操作（Person）：

1. 创建一个空的简单JavaScript对象（即{}）；
1. 让Person中的this指向obj，并执行Person的函数体
1. 设置原型链，将obj的__proto__成员指向了Person函数对象的prototype成员对象
1. 判断Person的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。
