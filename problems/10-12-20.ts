// Valid Mountain Array
export const validMountainArray = (arr: number[]): boolean => {
  let currentIndex: number = 0

  while (currentIndex < arr.length &&
         currentIndex + 1 < arr.length &&
         arr[currentIndex] < arr[currentIndex + 1]) {
      currentIndex++
  }

  if (currentIndex === 0 || currentIndex === arr.length - 1) {
    return false
  }

  while (currentIndex < arr.length &&
         currentIndex + 1 < arr.length) {
      if (arr[currentIndex] <= arr[currentIndex + 1]) {
        return false
      }
      currentIndex++
  }

  return true
};
