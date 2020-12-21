import { smallestRangeII } from "../problems/21-12-20"

test('smallestRangeII of A = [1], K = 0 to equal 0', () => {
  expect(smallestRangeII([1], 0)).toEqual(0)
})

test('smallestRangeII of A = [0,10], K = 2 to equal 6', () => {
  expect(smallestRangeII([0,10], 2)).toEqual(6)
})

test('smallestRangeII of A = [1,3,6], K = 3 to equal 3', () => {
  expect(smallestRangeII([1,3,6], 3)).toEqual(3)
})
