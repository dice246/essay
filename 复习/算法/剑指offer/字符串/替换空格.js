/**
 * 题目：替换空格
 * url: https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * @param {string} s
 * @return {string}
 */


/**
 * 解法一：正则
 * @param s
 * @returns {void | string | *}
 */
var replaceSpace = function(s) {
  const regexp = / /g;
  const result = s.replace(regexp, '%20')

  return result;
};

console.log(replaceSpace("We are happy."))
