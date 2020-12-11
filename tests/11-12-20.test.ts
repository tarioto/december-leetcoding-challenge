import { removeDuplicates } from "../problems/11-12-20";

test('removeDuplicates of nums = [1,1,1,2,2,3] to equal 5, nums = [1,1,2,2,3]', () => {
  expect(removeDuplicates([1,1,1,2,2,3])).toEqual(5);
});

test('removeDuplicates of nums = [0,0,1,1,1,1,2,3,3] to equal 7, nums = [0,0,1,1,2,3,3]', () => {
  expect(removeDuplicates([0,0,1,1,1,1,2,3,3])).toEqual(7);
});

test('removeDuplicates of nums = [0,0,1,1,1,1,2,3,3,3,3] to equal 7, nums = [0,0,1,1,2,3,3]', () => {
  expect(removeDuplicates([0,0,1,1,1,1,2,3,3])).toEqual(7);
});

test('removeDuplicates of nums = [] to equal 0, nums = [1,1,2,2,3]', () => {
  expect(removeDuplicates([])).toEqual(0);
});
