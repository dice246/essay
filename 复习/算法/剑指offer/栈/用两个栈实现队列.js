/**
 * 解题方法：
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/91suan-fa-day5-yuan-ti-jian-zhi-offer-09-yong-lian/
 *
 * 前言：
 * 栈只能在头部进行插入和删除，队列是在头部删除和尾部插入
 * @constructor
 */
var CQueue = function () {
  this.stack = []
  this.helperStack = []
}

/**
 * 使用两组栈，插入的时候先将A栈所有的数据推出到B栈中，然后在B栈中插入数据
 * 最后在将B栈中所有的数据推出到A栈中
 *
 * @param x
 */
CQueue.prototype.appendTail = function (x) {
  let curr = null;
  while (curr = this.stack.pop()) {
    this.helperStack.push(curr)
  }

  this.helperStack.push(x)

  while (curr = this.helperStack.pop()) {
    this.stack.push(curr)
  }
}

CQueue.prototype.deleteHead = function () {
  return this.stack.pop() || -1;
}

CQueue.prototype.peek = function () {
  return this.stack[this.stack.length -1]
}

CQueue.prototype.empty = function () {
  return this.stack.length === 0
}
