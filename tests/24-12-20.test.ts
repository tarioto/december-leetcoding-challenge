import { swapPairs, ListNode } from "../problems/24-12-20";

test('swapPairs of [1,2,3,4] to equal [2,1,4,3]', () => {
  const root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
  const result = new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3))))
  expect(swapPairs(root)).toStrictEqual(result);
});

test('swapPairs of [] to equal []', () => {
  const root = new ListNode()
  const result = new ListNode()
  expect(swapPairs(root)).toStrictEqual(result);
});

test('swapPairs of [1] to equal [1]', () => {
  const root = new ListNode(1)
  const result = new ListNode(1)
  expect(swapPairs(root)).toStrictEqual(result);
});
