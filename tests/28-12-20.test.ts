import { reachNumber } from "../problems/28-12-20"

test(`reachNumber of 3 to equal 2`, () => {
  expect(reachNumber(3)).toEqual(2)
})

test(`reachNumber of 2 to equal 3`, () => {
  expect(reachNumber(2)).toEqual(3)
})
