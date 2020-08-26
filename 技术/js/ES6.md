# ES6

## [资料](https://es6.ruanyifeng.com/)
## let & const
let 声明变量，const声明常量（引用类型的值可以改变）
共同点：

- 不存在变量提升
- 暂时性死区
- 不允许重复声明
- 块级作用域
## 箭头函数
不能存在作用域（函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。）
## Set & Map

- Set
类似于数组，但是成员的值唯一, 常用于去重
- Map
键值对的集合，键可以是对象。
## Promise
异步解决方案。
有三种状态pending/rejected/fulfilled。通过then方法来实现调用，通过catch来捕获错误。

- Promise.all
所有的promise都变为fulfilled,会返回一个数组，
如果有一个被rejected,状态就会变为rejected，此时，第一个被rejected的实例的返回值会传递给Promise的回调函数.
如果作为参数的 Promise 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法。
- Promise.trace
只要有一个实例的状态改变，Promise的状态就会改变。



**并发例子** 
```javascript
// 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
/**
 * forEach不能阻塞，所以默认是并行发起请求。所以结果是同时输出1，4，9
 */
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}

/**
 * 方案1：通过for of 实现穿行
 */
async function test1() {
    for (let item of list) {
			const result = await square(item);
			console.log("test1: ", result);		
		}
}

/**
 * 方案2： for循环
 */
async function test2() {
	for (let i = 0; i < list.length; i++) {
		const result = await square(list[i]);
		console.log("test2: ", result);		
	}
}

test();
test1();
test2();
```
**Promise.retry:**
```javascript
// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject 
Promise.retry = function(fn, num = 1){
  return new Promise(async function(resolve, reject){
     while(num>0){
         try{
            const res = await fn();
            console.log('res: ', res);
            resolve(res)
            num = 0
          } catch(e){
            console.log('reject....');
            if(num === 1) reject(e);
            num--
          }
      }
  })
}
```


## async & await
终极的异步解决方案。捕获错误通过try...catch...
## Proxy & Reflect

- Proxy
Vue3.x底层通过Proxy来实现响应式。  
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。  
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
- Reflect  
`Reflect`对象与`Proxy`对象一样，也是 ES6 为了操作对象而提供的新 API。`Reflect`对象的设计目的有这样几个。  
（1） 将`Object`**对象的一些明显属于语言内部的方法**（比如`Object.defineProperty`），放到`Reflect`对象上。现阶段，某些方法同时在`Object`和`Reflect`对象上部署，未来的新方法将只部署在`Reflect`对象上。也就是说，从`Reflect`对象上可以拿到语言内部的方法。  
（2） 修改某些`Object`方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`。  
（3）让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了函数行为。  
（4）`Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，就能在`Reflect`对象上找到对应的方法。这就让`Proxy`对象可以方便地调用对应的`Reflect`方法，完成默认行为，作为修改行为的基础。也就是说，不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取默认行为。
## Class
## 模块化

- CommonJS模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
