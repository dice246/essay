/**
 * 题目： 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 地址：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * 解题思路：
 * 1. 遍历链表，插入数组中
 * 2. 反转数组
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head === null) return []
  const res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res.reverse()
}

console.log(reversePrint([1,3,2]))
