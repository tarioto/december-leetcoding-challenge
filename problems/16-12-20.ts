// Validate Binary Search Tree
export const isValidBST = (root: TreeNode | null): boolean => {
  return validateBST(root, null, null)
};

export const validateBST = (node: TreeNode | null, min: number | null, max: number | null): boolean => {
  if (node === null) {
    return true
  } else if (min !== null && node.val <= min || max !== null && max <= node.val) {
    return false
  } else {
    return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max)
  }
};

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
