// Linked List Random Node
export class Solution {
  head: ListNode

  constructor(head: ListNode | null) {
    this.head = head
  }

  getRandom(): number {
    let result: number
    let nodesSeen = 1
    let curentNode = this.head

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
