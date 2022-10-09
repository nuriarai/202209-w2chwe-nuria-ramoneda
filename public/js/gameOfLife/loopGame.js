import GameBoard from "./gameBoard.js";

const boardSize = 3;

const neighboursCheck = (xx, yy, status) => {
  if (status === 0) {
    const neighboursBoard = GameBoard(boardSize);

    if ((xx > 0 && xx < 3) || (yy > 0 && yy < 3)) {
      const right = neighboursBoard[xx][yy + 1];
      const diagonalRightBottom = neighboursBoard[xx + 1][yy + 1];
      const bottom = neighboursBoard[xx + 1][yy];
      const diagonalLeftBottom = neighboursBoard[xx + 1][yy - 1];
      const left = neighboursBoard[xx][yy - 1];
      const diagonalLeftTop = neighboursBoard[xx - 1][yy - 1];
      const top = neighboursBoard[xx - 1][yy];
      const diagonalRightTop = neighboursBoard[xx - 1][yy + 1];
    }
  }
  return 1;
};

const loopGame = () => {
  const board = new GameBoard(3, 3);
};

export default loopGame;
