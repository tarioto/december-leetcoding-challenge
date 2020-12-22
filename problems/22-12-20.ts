// Balanced Binary Tree
export const isBalanced = (root: TreeNode | null): boolean => {
  return 0 <= checkHeight(root)
}

export const checkHeight = (node: TreeNode | null): number => {
  if (!node) {
    return 0
  }

  const leftHeight: number = checkHeight(node.left)
  if (leftHeight < 0) {
    return -1
  }

  const rightHeight: number = checkHeight(node.right)
  if (rightHeight < 0) {
    return -1
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1
  }

  return Math.max(leftHeight, rightHeight) + 1
}

// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
