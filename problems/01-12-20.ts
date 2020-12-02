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

// Maximum Depth of Binary Tree
export const maxDepth = (root: TreeNode | null): number => {
    if (root === null) {
        return 0;
    }

    let left: number | undefined = maxDepth(root.left)
    let right: number | undefined = maxDepth(root.right)

    return Math.max(left, right) + 1
};
