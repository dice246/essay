/**
 * 题目：输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 地址：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 解题思路：
 *      1
 *     / \
 *    2   3
 *   / \
 *  4  5
 * 它的前序遍历的顺序是：1 2 4 5 3。中序遍历的顺序是：4 2 5 1 3
 * 因为前序遍历的第一个元素就是当前二叉树的根节点。那么，这个值就可以将中序遍历分成 2 个部分。
 * 在以上面的例子，中序遍历就被分成了 4 2 5 和 3 两个部分。4 2 5就是左子树，3就是右子树。
 * 最后，根据左右子树，继续递归即可。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = preorder[0];
  const node = new TreeNode(root);
  let i = 0;

  /**
   * i = 根节点在中序遍历时的下标
   * i = 当前左子树的的节点个数
   */
  for (; i < inorder.length; i++) {
    if (root === inorder[i]) {
      break;
    }
  }

  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))

  return node;
};
