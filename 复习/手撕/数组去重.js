let arr = [1,1,2,2,3,3,4,5,6,7,6]

function f1(arr) {
  return [...new Set(arr)]
}

console.log('f1: ', f1(arr))

function f2(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }

  return result;
}

console.log('f2: ', f2(arr))
