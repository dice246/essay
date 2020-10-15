/**
 * 题目： 数组中重复的数字
 * 地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 *
 */
var findRepeatNumber = function(nums) {
  let map = {};
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let item = nums[i];

    if(map[item]) {
      return item;
    } else {
      map[item] = 1;
    }
  }
};

/**
 *  解题思路：原地哈希
 * 从题目描述可以知道，所有数字都在 0 ～ n-1 的范围内。因此不需要额外开辟空间，
 * 每次遍历时，检查当前元素是否放在了正确位置上（例如元素 i 应该放在下标为 i 的位置上）。如果放在了正确位置上，那么继续循环。否则：
 * 下标为 num 的元素 === num，说明当前元素 num 是重复的，直接返回
 * 下标为 num 的元素 !== num，交换当前元素和下标为 num 的元素，将当前元素放入到正确位置上
 * @param nums
 * @returns {*}
 */
var findRepeatNumber2 = function(nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    //检测下标为i的元素是否放在了位置i上
    let num = nums[i];
    while (num !== i) {
      if (num === nums[num]) {
        return num;
      }
      [nums[i], nums[num]] = [nums[num], nums[i]];
    }
  }
};

console.log(findRepeatNumber2([2, 3, 1, 0, 2, 5, 3]))
