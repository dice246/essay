function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let left = [];
  let right = [];
  let base = arr.splice(0, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(base, quickSort(right))
}

let arr = [1,34,2,5,7,6];

console.log(quickSort(arr))
