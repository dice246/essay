/**
 * 题目：二维数组中的查找
 * 地址：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let arr = matrix.flat();
  return arr.some(item => item === target)
};

/**
 * 解题思路：
 * 由于给定的二维数组具备每行从左到右递增以及每列从上到下递增的特点，当访问到一个元素时，可以排除数组中的部分元素。
 * 从二维数组的右上角开始查找。如果当前元素等于目标值，则返回 true。如果当前元素大于目标值，则移到左边一列。如果当前元素小于目标值，则移到下边一行。
 * 可以证明这种方法不会错过目标值。如果当前元素大于目标值，说明当前元素的下边的所有元素都一定大于目标值，因此往下查找不可能找到目标值，往左查找可能找到目标值。
 * 如果当前元素小于目标值，说明当前元素的左边的所有元素都一定小于目标值，因此往左查找不可能找到目标值，往下查找可能找到目标值。
 * 若数组为空，返回 false
 * 初始化行下标为 0，列下标为二维数组的列数减 1
 * 重复下列步骤，直到行下标或列下标超出边界
 * 获得当前下标位置的元素 num
 * 如果 num 和 target 相等，返回 true
 * 如果 num 大于 target，列下标减 1
 * 如果 num 小于 target，行下标加 1
 * 循环体执行完毕仍未找到元素等于 target ，说明不存在这样的元素，返回 false`
 */
var findNumberIn2DArray2 = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false
  }

  let row = 0;
  let len = matrix.length;
  let col = matrix[0].length - 1;

  while (row < len && col >= 0) {
    let curr = matrix[row][col];

    if (curr === target) {
      return true;
    } else if (curr > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};

let arr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

findNumberIn2DArray(arr, 5)
