// Diagonal Traverse
export const findDiagonalOrder = (matrix: number[][]): number[] => {
  let result: number[] = []
  let row: number = 0
  let col: number = 0
  let x: number = 1
  let y: number = -1
  const reverseXY = (): void => {
    x = -x;
    y = -y;
  }

  if (matrix.length < 1) {
    return []
  }

  while (result.length < matrix.length * matrix[0].length) {
    result.push(matrix[col][row])
    row += x
    col += y

    if (col < 0 && row < matrix[0].length) {
      reverseXY();
      col = 0;
    }

    if (row < 0 && col < matrix.length) {
      reverseXY();
      row = 0;
    }

    if (row >= matrix[0].length) {
      reverseXY();
      col += 2 * y;
      --row;
    }

    if (col >= matrix.length) {
      reverseXY();
      row += 2 * x;
      --col;
    }
  }

  return result
}
