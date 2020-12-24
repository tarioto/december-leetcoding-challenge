// Swap Nodes in Pairs
export const swapPairs = (head: ListNode | null): ListNode | null => {
  const baseNode: ListNode = new ListNode(0)
  let currNode: ListNode = baseNode
  currNode.next = head

  while (currNode.next && currNode.next.next) {
      let temp: ListNode = currNode.next
      let temp2: ListNode = currNode.next.next
      currNode.next = temp2
      temp.next = temp2.next
      temp2.next = temp
      currNode = temp
  }

  return baseNode.next
};

// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
