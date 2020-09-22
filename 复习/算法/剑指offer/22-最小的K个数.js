/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) => a - b)

  return arr.slice(0, k);
};


getLeastNumbers([0,1,2,1], 1)
