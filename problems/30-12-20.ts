// Pseudo-Palindromic Paths in a Binary Tree
export const pseudoPalindromicPaths = (root: TreeNode | null): number => {
  let count: number = 0
  const arr: number[] = new Array(10).fill(0)
  const aux = (node: TreeNode | null): void => {
    if (!node) {
      return
    }
    const { val } = node
    arr[val] += 1

    if (!node.left && !node.right) {
      if (isPalindrome(arr)) {
        count += 1
      }
      arr[val] -= 1
      return
    }
    aux(node.left)
    aux(node.right)
    arr[val] -= 1
  }
  aux(root)

  return count
}

const isPalindrome = (arr:number[] = []): boolean => {
  let oddCount: number = 0

  for (const v of arr) {
    if (v % 2 === 1) {
      oddCount += 1
    }
  }

  return oddCount <= 1
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
