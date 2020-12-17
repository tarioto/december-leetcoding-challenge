import { fourSumCount } from "../problems/17-12-20";

test('fourSumCount of A = [ 1, 2] B = [-2,-1] C = [-1, 2] D = [ 0, 2] to equal 2', () => {
  expect(fourSumCount([1,2], [-2,-1], [-1, 2], [ 0, 2])).toStrictEqual(2);
});

test('fourSumCount of A = [ -1,-1] B = [-1,1] C = [-1,1] D = [1,-1] to equal 6', () => {
  expect(fourSumCount([-1,-1], [-1,1], [-1,1], [1,-1])).toStrictEqual(6);
});
