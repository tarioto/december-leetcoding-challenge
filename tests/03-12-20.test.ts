import { increasingBST, TreeNode } from "../problems/03-12-20";

test('increasingBST of [5,3,6,2,4,null,8,1,null,null,null,7,9] to equal [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]', () => {
  const root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6, null, new TreeNode(8, new TreeNode(7), new TreeNode(9))))
  expect(increasingBST(root)).toEqual(new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, new TreeNode(7, null, new TreeNode(8, null, new TreeNode(9))))))))));
});

test('increasingBST of [5,1,7] to equal [1,null,5,null,7]', () => {
  const root = new TreeNode(5, new TreeNode(1), new TreeNode(7))
  expect(increasingBST(root)).toEqual(new TreeNode(1, null, new TreeNode(5, null, new TreeNode(7))));
});

test('increasingBST of [1,null,100] to equal [1,null,100]', () => {
  const root = new TreeNode(1, null, new TreeNode(100))
  expect(increasingBST(root)).toEqual(new TreeNode(1, null, new TreeNode(100)));
});

test('increasingBST of [100,1] to equal [1,null,100]', () => {
  const root = new TreeNode(100, new TreeNode(1), null)
  expect(increasingBST(root)).toEqual(new TreeNode(1, null, new TreeNode(100)));
});
