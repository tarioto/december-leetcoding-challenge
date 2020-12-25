import { findDiagonalOrder } from "../problems/25-12-20"

test(`findDiagonalOrder of [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
] to equal [1,2,4,7,5,3,6,8,9]`, () => {
  expect(findDiagonalOrder([
   [ 1, 2, 3 ],
   [ 4, 5, 6 ],
   [ 7, 8, 9 ]
  ])).toEqual([1,2,4,7,5,3,6,8,9])
})
