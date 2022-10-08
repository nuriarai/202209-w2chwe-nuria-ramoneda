import Cell from "./Cell.js";

const gameBoard = (boardSize) => {
  const board = [];

  for (let x = 0; x < boardSize; x++) {
    const position = [];
    for (let y = 0; y < boardSize; y++) {
      let status = 0;
      if (y === 1) {
        status = 1;
      }
      position[y] = new Cell(x, y, status);
      board[x] = position;
    }
  }

  return board;
};

export default gameBoard;
