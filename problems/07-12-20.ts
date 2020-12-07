// Spiral Matrix II
export const generateMatrix = (n: number): number[][] => {
  let grid: number[][] = new Array(n).fill(0).map(() => Array(n).fill(0)) 
  let rowBegin = 0
  let rowEnd = n - 1
  let colBegin = 0
  let colEnd = n - 1
  let counter = 1

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
      for (let i = colBegin; i <= colEnd; i++) {
        grid[rowBegin][i] = counter
        counter++
      }

      rowBegin++

      for (let i = rowBegin; i <= rowEnd; i++) {
        grid[i][colEnd] = counter
        counter++
      }

      colEnd--

      if (rowBegin <= rowEnd) {
        for (let i = colEnd; i >= colBegin; i--) {
          grid[rowEnd][i] = counter
          counter++
        }
      }

      rowEnd--

      if (colBegin <= colEnd) {
        for (let i = rowEnd; i >= rowBegin; i--) {
          grid[i][colBegin] = counter
          counter++
        }
      }

      colBegin++
  }

  return grid
};
