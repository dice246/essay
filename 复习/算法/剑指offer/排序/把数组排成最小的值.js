/**
 * 题目：输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 地址：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
 * @param {number[]} nums
 * @return {string}
 *
 * 解题思路：利用sort方法来实现
 */
var minNumber = function(nums) {
  nums.sort((x, y) => {
    let s1 = x + '' + y;
    let s2 = y + '' + x;

    if (s1 < s2) {
      return -1;
    }

    if (s1 > s2) {
      return 1;
    }

    return 0;
  })

  return nums.join('');
};

console.log(minNumber([3,30,34,5,9]))
