// Binary Search Tree Iterator
export class BSTIterator {
  stack: TreeNode[]

  constructor(root: TreeNode | null) {
    this.stack = []
    this.fill(root)
  }

  fill(node: TreeNode | null): void {
    while(node !== null) {
      this.stack.push(node)
      node = node.left
    }
  }

  next(): number {
    const poppedNode = this.stack.pop()
    this.fill(poppedNode.right)
    return poppedNode.val
  }

  hasNext(): boolean {
    return this.stack.length > 0 ? true : false
  }
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
