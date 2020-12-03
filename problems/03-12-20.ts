// Increasing Order Search Tree
export const increasingBST = (root: TreeNode | null): TreeNode | null => {
  let current: TreeNode;
  const inorder = (node: TreeNode | null) => {
    if (node === null) {
      return
    }

    inorder(node.left)
    node.left = null
    current.right = node
    current = node
    inorder(node.right)
  }

  const dummyRoot = new TreeNode(0)
  current = dummyRoot
  inorder(root)
  return dummyRoot.right;
};




// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
