import { canPlaceFlowers } from "../problems/05-12-20";

test('canPlaceFlowers of flowerbed = [1,0,0,0,1], n = 1 to equal true', () => {
  expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true);
});

test('canPlaceFlowers of flowerbed = [1,0,0,0,0,0,1], n = 1 to equal true', () => {
  expect(canPlaceFlowers([1,0,0,0,0,0,1], 1)).toBe(true);
});

test('canPlaceFlowers of flowerbed = [1,0,0,0,1], n = 2 to equal false', () => {
  expect(canPlaceFlowers([1,0,0,0,1], 2)).toBe(false);
});

test('canPlaceFlowers of flowerbed = [], n = 1 to equal false', () => {
  expect(canPlaceFlowers([], 1)).toBe(false);
});

test('canPlaceFlowers of flowerbed = [0,0,1,0,1], n = 1 to equal true', () => {
  expect(canPlaceFlowers([0,0,1,0,1], 1)).toBe(true);
});
