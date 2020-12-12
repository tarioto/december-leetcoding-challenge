import { subtreeWithAllDeepest, TreeNode } from "../problems/12-12-20";

test('subtreeWithAllDeepest root = [3,5,1,6,2,0,8,null,null,7,4] to equal [2,7,4]', () => {
  const root = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8)))
  const result = new TreeNode(2, new TreeNode(7), new TreeNode(4))
  expect(subtreeWithAllDeepest(root)).toEqual(result);
});

test('subtreeWithAllDeepest root = [1] to equal [1]', () => {
  const root = new TreeNode(1)
  const result = new TreeNode(1)
  expect(subtreeWithAllDeepest(root)).toEqual(result);
});

test('subtreeWithAllDeepest root = [0,1,3,null,2] to equal [2]', () => {
  const root = new TreeNode(0, new TreeNode(1, null, new TreeNode(2)), new TreeNode(3))
  const result = new TreeNode(2)
  expect(subtreeWithAllDeepest(root)).toEqual(result);
});
