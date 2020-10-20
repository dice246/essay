/**
 * 题目：斐波那契数列
 * 地址：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param {number} n
 * @return {number}
 *
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let res1 = 0
  let res2 = 1
  for (let i = 1; i < n; i++) {
    [res1, res2] = [res2, (res2 + res1) % 1000000007]
  }
  return res2
};

var fib2 = function(n) {
  if (n === 0) {
    return 0;
  }

  if (n == 1 || n === 2) {
    return 1;
  }

  return (fib2(n - 1) + fib2(n - 2)) % 1000000007
}

var fib3 = function fn(count, now = 1, next = 1) {
  if(!count) return 0;
  if(count <= 2) return next ;
  return fn(count - 1, next, (now + next) % 1000000007);
};

console.log(fib(5))
