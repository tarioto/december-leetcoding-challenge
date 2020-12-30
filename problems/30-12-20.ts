// Game of Life
export const gameOfLife = (board: number[][]): void  => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++){
      let liveCells = aliveNeighbors(board, i, j)
      if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
        board[i][j] = 2
      }
      if (board[i][j] === 0 && liveCells === 3) {
        board[i][j] = 3
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++){
      board[i][j] %= 2
    }
  }
}

const aliveNeighbors = (board: number[][], i: number, j: number) => {
  let count = 0
  let indexes = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]]
  for (let index of indexes) {
    if (index[0] + i < 0 || index[0] + i > board.length - 1 ||
    index[1] + j < 0 || index[1] + j > board[0].length - 1) continue
    if (board[index[0] + i][index[1] + j] === 1 ||
    board[index[0] + i][index[1] + j] === 2) count++
  }
  return count
}
