// Populating Next Right Pointers in Each Node II
export const connect = (root: Node | null): Node | null => {
  let startOfNextLevel = root
  let currentNode = null
  let lastVisitedNode = null

  while (startOfNextLevel) {
      currentNode = startOfNextLevel
      startOfNextLevel = null
      lastVisitedNode = null

      while (currentNode) {

          for (let child of [currentNode.left, currentNode.right]) {
            if (child) {
              if (lastVisitedNode) {
                lastVisitedNode.next = child
                lastVisitedNode = child

              } else {
                startOfNextLevel = child
                lastVisitedNode = child
              }
            }
          }
          currentNode = currentNode.next
      }
  }

  return root
};

// Definition for Node.
export class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}
