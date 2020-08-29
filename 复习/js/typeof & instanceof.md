# typeof &amp; instanceof

## instanceof
**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。
```javascript
// 实现原理
// __proto__ 隐式原型属性
// prototype 显示原型属性
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}

// 例子
// 简单来说，我们使用 typeof 来判断基本数据类型是 ok 的，不过需要注意当用 typeof 来判断 null 类型时的问题，
// 如果想要判断一个对象的具体类型可以考虑用 instanceof，但是 instanceof 也可能判断不准确，
// 比如一个数组，他可以被 instanceof 判断为 Object。
// 所以我们要想比较准确的判断对象实例的类型时，可以采取 Object.prototype.toString.call 方法。
Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
Foo instanceof Foo // false
Foo instanceof Object // true
Foo instanceof Function // true
```
## typeof
**`typeof` **操作符返回一个字符串，表示未经计算的操作数的类型。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/89543/1598669725701-7721dc27-b184-4c73-8870-d103c3eb07ca.png#align=left&display=inline&height=250&margin=%5Bobject%20Object%5D&name=image.png&originHeight=500&originWidth=746&size=138254&status=done&style=none&width=373)
