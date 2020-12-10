import { BSTIterator, TreeNode } from "../problems/09-12-20";

test('BSTIterator test', () => {
  const root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)))
  const bSTIterator = new BSTIterator(root);
  expect(bSTIterator.next()).toEqual(3);
  expect(bSTIterator.next()).toEqual(7);
  expect(bSTIterator.hasNext()).toEqual(true);
  expect(bSTIterator.next()).toEqual(9);
  expect(bSTIterator.hasNext()).toEqual(true);
  expect(bSTIterator.next()).toEqual(15);
  expect(bSTIterator.hasNext()).toEqual(true);
  expect(bSTIterator.next()).toEqual(20);
  expect(bSTIterator.hasNext()).toEqual(false);
});
