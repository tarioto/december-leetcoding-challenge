import { isBalanced, TreeNode } from "../problems/22-12-20";

test('isBalanced of [3,9,20,null,null,15,7] to equal true', () => {
  const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
  expect(isBalanced(root)).toEqual(true);
});

test('isBalanced of [1,2,2,3,3,null,null,4,4] to equal false', () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2))
  expect(isBalanced(root)).toEqual(false);
});

test('isBalanced of [] to equal true', () => {
  const root = new TreeNode()
  expect(isBalanced(root)).toEqual(true);
});
