// Smallest Subtree with all the Deepest Nodes
export const subtreeWithAllDeepest = (root: TreeNode | null): TreeNode | null => {
  return helper(root).node
}

const helper = (root: TreeNode | null) => {
  if (!root) {
    return { node: null, deep: 0 };
  }

  let left: any = helper(root.left);
  let right: any = helper(root.right);

  if (left.deep > right.deep) {
    return { node: left.node, deep: left.deep + 1 };
  }

  if (left.deep < right.deep) {
    return { node: right.node, deep: right.deep + 1 };
  }

  return { node: root, deep: left.deep + 1 };
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
