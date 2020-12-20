import { decodeAtIndex } from "../problems/20-12-20"

test('decodeAtIndex of S = "leet2code3", K = 10 to equal "o"', () => {
  expect(decodeAtIndex("leet2code3", 10)).toEqual("o")
})

test('decodeAtIndex of S = "ha22", K = 5 to equal "h"', () => {
  expect(decodeAtIndex("ha22", 5)).toEqual("h")
})

test('decodeAtIndex of S = "a2345678999999999999999", K = 1 to equal "a"', () => {
  expect(decodeAtIndex("a2345678999999999999999", 1)).toEqual("a")
})
