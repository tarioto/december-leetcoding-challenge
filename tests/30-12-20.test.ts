import { pseudoPalindromicPaths, TreeNode } from "../problems/30-12-20";

test('pseudoPalindromicPaths of [2,3,1,3,1,null,1] to equal 2', () => {
  const root = new TreeNode(2, new TreeNode(3, new TreeNode(3), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1)))
  expect(pseudoPalindromicPaths(root)).toEqual(2);
});

test('pseudoPalindromicPaths of [2,1,1,1,3,null,null,null,null,null,1] to equal 1', () => {
  const root = new TreeNode(2, new TreeNode(1, new TreeNode(1, null, null), new TreeNode(3, null, new TreeNode(1))), new TreeNode(1, null, null))
  expect(pseudoPalindromicPaths(root)).toEqual(1);
});

test('pseudoPalindromicPaths of [9] to equal 1', () => {
  const root = new TreeNode(9)
  expect(pseudoPalindromicPaths(root)).toEqual(1);
});
