import { TreeNode, maxDepth } from "../problems/01-12-20";

test('maxDepth of [1 ,2, 3, 4, 5, null, null, null, null, 6, null] to equal 4', () => {
  const root = new TreeNode(1, new TreeNode(3, null, null), new TreeNode(2, new TreeNode(null, null), new TreeNode(5, new TreeNode(6, null, null), null)))
  expect(maxDepth(root)).toBe(4);
});

test('maxDepth of [1, null, 2] to equal 2', () => {
  const root = new TreeNode(1, null, new TreeNode(2))
  expect(maxDepth(root)).toBe(2);
});

test('maxDepth of [] to equal 0', () => {
  const root = null
  expect(maxDepth(root)).toBe(0);
});

test('maxDepth of [0] to equal 1', () => {
  const root = new TreeNode()
  expect(maxDepth(root)).toBe(1);
});
