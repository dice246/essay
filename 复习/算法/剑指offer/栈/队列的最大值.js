/**
 * 题目：请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 地址：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
 * @constructor
 *
 * 解题思路：借助一个辅助队列
 * push操作：
 * 1. stack直接push
 * 2. max从队尾遍历和value比较，小于value则出队
 * pop操作：
 * 1. max不存在返回-1
 * 2. max队首元素和stack队首元素相同时，max队首元素出队
 * 3. stack出队
 */
var MaxQueue = function() {
  this.stack = []
  this.max = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.max.length) {
    return this.max[0]
  } else {
    return -1
  }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.stack.push(value)

  while (this.max.length && this.max[this.max.length - 1] < value) {
    this.max.pop()
  }

  this.max.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.max.length) {
    return -1;
  }

  if (this.stack[0] === this.max[0]) {
    this.max.shift()
  }

  return this.stack.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
