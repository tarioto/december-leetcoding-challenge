import { sortedSquares } from "../problems/15-12-20";

test('sortedSquares of nums = [-4,-1,0,3,10] to equal [0,1,9,16,100]', () => {
  expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
});

test('sortedSquares of nums = [-7,-3,2,3,11] to equal [4,9,9,49,121]', () => {
  expect(sortedSquares([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
});
