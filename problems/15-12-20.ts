// Squares of a Sorted Array
export const sortedSquares = (nums: number[]): number[] => {
  let result: number[] = new Array(nums.length).fill(0)
  let start: number = 0
  let end: number = nums.length - 1
  let indexOnResult: number = end

  while (indexOnResult > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result[indexOnResult] = nums[start] ** 2
      start++
    } else {
      result[indexOnResult] = nums[end] ** 2
      end--
    }
    indexOnResult--
  }

  return result
};
