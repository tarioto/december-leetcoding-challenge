import { validMountainArray } from "../problems/10-12-20";

test('validMountainArray of arr = [2,1] to equal false', () => {
  expect(validMountainArray([2,1])).toEqual(false);
});

test('validMountainArray of arr = [3,5,5] to equal false', () => {
  expect(validMountainArray([3,5,5])).toEqual(false);
});

test('validMountainArray of arr = [0,3,2,1] to equal true', () => {
  expect(validMountainArray([0,3,2,1])).toEqual(true);
});

test('validMountainArray of arr = [0,1,2,3,4,5,6,7,8,9] to equal false', () => {
  expect(validMountainArray([0,1,2,3,4,5,6,7,8,9])).toEqual(false);
});
