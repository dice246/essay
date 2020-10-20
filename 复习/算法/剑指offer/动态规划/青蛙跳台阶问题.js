/**
 * 题目：一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 地址：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 * @param {number} n
 * @return {number}
 *
 * 题解：动态规划
 */
var numWays = function(n) {
  if (n <= 1) {
    return 1;
  }

  let dp = [1, 1, 2];
  const MAX=1e9+7;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MAX;
  }

  return dp[n]
};
