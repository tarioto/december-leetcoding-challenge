import { maxCoins } from "../problems/13-12-20";

test('maxCoins of [1,2,3,4] to equal 40', () => {
  expect(maxCoins([1,2,3,4])).toEqual(40)
});

test('maxCoins of [3,1,5,8] to equal 167', () => {
  expect(maxCoins([3,1,5,8])).toEqual(167)
});
