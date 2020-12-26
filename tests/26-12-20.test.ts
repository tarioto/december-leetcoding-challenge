import { numDecodings } from "../problems/26-12-20"

test(`numDecodings of s = "12" to equal 2`, () => {
  expect(numDecodings('12')).toEqual(2)
})

test(`numDecodings of s = "226" to equal 3`, () => {
  expect(numDecodings('226')).toEqual(3)
})

test(`numDecodings of s = "0" to equal 0`, () => {
  expect(numDecodings('0')).toEqual(0)
})

test(`numDecodings of s = "1" to equal 1`, () => {
  expect(numDecodings('1')).toEqual(1)
})

test(`numDecodings of s = "2263" to equal 3`, () => {
  expect(numDecodings('2263')).toEqual(3)
})
