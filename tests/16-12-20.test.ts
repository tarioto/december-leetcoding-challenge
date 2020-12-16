import { isValidBST, TreeNode } from "../problems/16-12-20";

test('isValidBST of [2,1,3] to equal true', () => {
  const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
  expect(isValidBST(root)).toEqual(true);
});

test('isValidBST of [5,1,4,null,null,3,6] to equal false', () => {
  const root = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3), new TreeNode(6)))
  expect(isValidBST(root)).toEqual(false);
});
