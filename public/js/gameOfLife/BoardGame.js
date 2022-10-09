import Cell from "./Cell.js";
import checkLifes from "./checkLifes.js";

class GameBoard {
  rows;
  columns;
  board = [];

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.createBoard();
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

  printBoard() {
    const boardToPrint = [];
    for (let x = 0; x < this.rows; x++) {
      const rowToPrint = [];
      for (let y = 0; y < this.columns; y++) {
        if (this.board[x][y].status) {
          rowToPrint[y] = "X";
          boardToPrint[x] = rowToPrint;
        } else {
          rowToPrint[y] = "-";
          boardToPrint[x] = rowToPrint;
        }
      }
    }
    return boardToPrint;
  }

  loopOfLife() {
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        const currentCell = this.board[x][y];
        const newStatus = checkLifes(
          x,
          y,
          this.board[x][y].status,
          this.board,
          this.rows,
          this.columns
        );
        currentCell.nextStatus = newStatus;
      }
    }
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        const currentCell = this.board[x][y];
        currentCell.status = currentCell.nextStatus;
        currentCell.nextStatus = false;
      }
    }
    console.log(this.board);
  }
}

export default GameBoard;
