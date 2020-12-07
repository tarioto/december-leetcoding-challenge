import { generateMatrix } from "../problems/07-12-20";

test('generateMatrix of n = 3 to equal [[1,2,3],[8,9,4],[7,6,5]]', () => {
  expect(generateMatrix(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]]);
});

test('generateMatrix of n = 1 to equal [[1]]', () => {
  expect(generateMatrix(1)).toEqual([[1]]);
});
