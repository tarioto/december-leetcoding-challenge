// Increasing Triplet Subsequence
export const increasingTriplet = (nums: number[]): boolean => {
  let small: number = Number.MAX_VALUE
  let big: number = Number.MAX_VALUE

  for (let num of nums) {
    if (num <= small) {
      small = num
    } else if (num <= big) {
      big = num
    } else {
      return true
    }
  }
  return false
};
