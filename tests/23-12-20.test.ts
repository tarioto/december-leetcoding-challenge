import { nextGreaterElement } from "../problems/23-12-20"

test('nextGreaterElement of 12 to equal 21', () => {
  expect(nextGreaterElement(12)).toEqual(21)
})

test('nextGreaterElement of 21 to equal -1', () => {
  expect(nextGreaterElement(21)).toEqual(-1)
})
