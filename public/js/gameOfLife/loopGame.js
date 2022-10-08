import Cell from "./Cell.js";
import gameBoard from "./gameBoard.js";

const boardSize = 3;

const neighboursCheck = (currentCell) => {
  if (currentCell.status === 0) {
    // has 3 neighbours alive
    for (let i = 0; i < 8; i++) {
      const neighboursBoard = gameBoard(boardSize);
    }

    currentCell.nextStatus = 1;
  }
};

const loopGame = () => {
  const board = gameBoard(boardSize);

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      const currentCell = board[x][y];

      if (currentCell.status === 0) {
        const result = neighboursCheck(currentCell);
      }
      if (board[x][y] !== undefined) {
        // board[x][y].status = 8;
        console.log(board[x][y]);
      }
    }
  }

  console.log(board);
};

export default loopGame;
