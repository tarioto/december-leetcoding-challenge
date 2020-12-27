import { minJumps } from "../problems/27-12-20"

test(`minJumps of [100,-23,-23,404,100,23,23,23,3,404] to equal 3`, () => {
  expect(minJumps([100,-23,-23,404,100,23,23,23,3,404])).toEqual(3)
})

test(`minJumps of [7] to equal 0`, () => {
  expect(minJumps([7])).toEqual(0)
})

test(`minJumps of [7,6,9,6,9,6,9,7] to equal 1`, () => {
  expect(minJumps([7,6,9,6,9,6,9,7])).toEqual(1)
})

test(`minJumps of [6,1,9] to equal 2`, () => {
  expect(minJumps([6,1,9])).toEqual(2)
})

test(`minJumps of [11,22,7,7,7,7,7,7,7,22,13] to equal 3`, () => {
  expect(minJumps([11,22,7,7,7,7,7,7,7,22,13])).toEqual(3)
})
