# new一个对象

new 关键字会进行如下的操作（Person）：

1. 创建一个对象

2. 将对象的 _ proto_ 指向 构造函数的 prototype

3. 将这个对象作为构造函数的 this

4. 返回该对象。
