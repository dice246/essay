/**
 * 题目：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * 地址：https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
 * initialize your data structure here.
 *
 * 解题思路：
 * 通过一个辅助栈来实现
 * push操作：
 * 1. stack直接push
 * 2. 辅助栈为0或者当前插入的元素<=栈顶的元素时插入
 * pop操作：
 * 1. stack直接pop
 * 2. 辅助栈顶元素=stack栈顶元素时pop
 */
var MinStack = function() {
  this.stack = [];
  this.helperStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let helperLen = this.helperStack.length;

  this.stack.push(x);

  if (!helperLen || this.helperStack[helperLen - 1] >= x) {
    this.helperStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.helperStack[this.helperStack.length - 1] === this.stack[this.stack.length - 1]) {
    this.helperStack.pop()
  }

  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.helperStack[this.helperStack.length - 1]
};
