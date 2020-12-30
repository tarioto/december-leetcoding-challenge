import { gameOfLife } from "../problems/30-12-20"

test('gameOfLife of [[0,1,0],[0,0,1],[1,1,1],[0,0,0]] to equal 21', () => {
  expect(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])).toEqual(21)
})

test('gameOfLife of [[1,1],[1,0]] to equal -1', () => {
  expect(gameOfLife([[1,1],[1,0]])).toEqual(-1)
})
