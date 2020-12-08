import { numPairsDivisibleBy60 } from "../problems/08-12-20";

test('numPairsDivisibleBy60 of time = [30,20,150,100,40] to equal 3', () => {
  expect(numPairsDivisibleBy60([30,20,150,100,40])).toEqual(3);
});

test('numPairsDivisibleBy60 of time = [60,60,60] to equal 3', () => {
  expect(numPairsDivisibleBy60([60,60,60])).toEqual(3);
});

test('numPairsDivisibleBy60 of time = [40,20,150,100,50] to equal 2', () => {
  expect(numPairsDivisibleBy60([40,20,150,100,50])).toEqual(2);
});

test('numPairsDivisibleBy60 of time = [10,20,30] to equal 0', () => {
  expect(numPairsDivisibleBy60([10,20,30])).toEqual(0);
});
