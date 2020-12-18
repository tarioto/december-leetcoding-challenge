import { increasingTriplet } from "../problems/18-12-20";

test('increasingTriplet of nums = [1,2,3,4,5] to equal true', () => {
  expect(increasingTriplet([1,2,3,4,5])).toStrictEqual(true);
});

test('increasingTriplet of nums = [5,4,3,2,1] to equal false', () => {
  expect(increasingTriplet([5,4,3,2,1])).toStrictEqual(false);
});

test('increasingTriplet of nums = [2,1,5,0,4,6] to equal true', () => {
  expect(increasingTriplet([2,1,5,0,4,6])).toStrictEqual(true);
});

test('increasingTriplet of nums = [5,1,5,5,2,5,4] to equal true', () => {
  expect(increasingTriplet([5,1,5,5,2,5,4])).toStrictEqual(true);
});
