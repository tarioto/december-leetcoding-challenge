import { kthFactor } from "../problems/04-12-20";

test('kthFactor of n=12 k=3 to equal 3', () => {
  expect(kthFactor(12, 3)).toBe(3);
});

test('kthFactor of n=7 k=2 to equal 7', () => {
  expect(kthFactor(7, 2)).toBe(7);
});

test('kthFactor of n=4 k=4 to equal -1', () => {
  expect(kthFactor(4, 4)).toBe(-1);
});

test('kthFactor of n=1 k=1 to equal 1', () => {
  expect(kthFactor(1, 1)).toBe(1);
});

test('kthFactor of n=1000 k=3 to equal 4', () => {
  expect(kthFactor(1000, 3)).toBe(4);
});
