// Remove Duplicates from Sorted Array II
export const removeDuplicates = (nums: number[]): number => {
  const seen: any = {}
  let currentIndex: number = 0

  while (currentIndex < nums.length) {
    let num = nums[currentIndex]

    if (seen[num] === undefined) {
      seen[num] = 0
    }

    if (seen[num] >= 2) {
      nums.splice(currentIndex, 1)
    } else {
      seen[num] += 1
      currentIndex++
    }
  }

  return nums.length
};
