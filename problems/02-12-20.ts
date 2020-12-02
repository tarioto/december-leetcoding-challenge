// Linked List Random Node
export class Solution {
  head: ListNode

  constructor(head: ListNode) {
    this.head = head
  }

  getRandom(): number {
    let curentNode: ListNode | null = this.head
    let nodesSeen: number = 1
    let result: number = curentNode.val

    while (curentNode !== null) {
      let random = this.getRandomIntInclusive(1, nodesSeen)

        if (random <= 1) {
          result = curentNode.val
        }
        curentNode = curentNode.next
        nodesSeen++
    }

    return result
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
