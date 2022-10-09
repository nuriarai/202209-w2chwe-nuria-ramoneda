import Cell from "./Cell.js";

class GameBoard {
  rows = 3;
  columns = 3;
  board = [];

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  createBoard() {
    const board = [];
    for (let x = 0; x < this.rows; x++) {
      const position = [];
      for (let y = 0; y < this.columns; y++) {
        let status = false;
        if (y === 1) {
          status = true;
        }
        position[y] = new Cell(status, false);
        board[x] = position;
      }
    }

    this.board = board;
    return this.board;
  }
}

export default GameBoard;
