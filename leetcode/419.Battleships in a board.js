// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

// Example 1:
// Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
// Output: 2

// Example 2:
// Input: board = [["."]]
// Output: 0

const countBattleships = (board) => {
  let result = 0
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'X') {
        if (row > 0 && board[row - 1][col] === 'X') continue;
        if (col > 0 && board[row][col - 1] === 'X') continue
        result++
      }
    }
  }
  
  return result
}