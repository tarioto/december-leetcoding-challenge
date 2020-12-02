import { ListNode, Solution } from "../problems/02-12-20";

test('get random ', () => {
  // Init a singly linked list [1,2,3].
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  const solution = new Solution(head);

  // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
  expect(solution.getRandom()).toBeGreaterThanOrEqual(1);
  expect(solution.getRandom()).toBeLessThanOrEqual(3)
});
