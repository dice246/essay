let arr = [1, [2,3], [[4], [5],[[6, 7]]]]

function f1(arr) {
  return arr.flat(Infinity)
}

// console.log('f1: ', f1(arr))

function f2(arr) {
  return arr.join().split(',')
}

console.log('f2:', f2(arr))

function f3(arr) {
  return arr.toString().split(',');
}

console.log('f3: ', f3(arr))



let newArr = [] // 存放转化后的一维数组
function arrConversion (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrConversion(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
}

arrConversion(arr)
console.log('f4: ', newArr)

