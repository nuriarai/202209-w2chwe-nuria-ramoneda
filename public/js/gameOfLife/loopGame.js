import GameBoard from "./GameBoard.js";

const boardSize = 3;

const neighboursCheck = (xx, yy, status) => {
  if (status === 0) {
    // has 3 neighbours alive
    // for (let i = 0; i < 8; i++) {
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

    console.log("a la dret i a baix en diagonal");
    console.log(neighboursBoard[xx + 1][yy + 1]);

    console.log("a l'esquerra i a baix en diagonal");
    console.log(neighboursBoard[xx - 1][yy - 1]);

    console.log("current:");
    console.log(neighboursBoard[xx][yy]);
    console.log("costat dreta");
    console.log(neighboursBoard[xx][yy + 1]);
    console.log("a baix");
    console.log(neighboursBoard[xx + 1][yy]);
    /*     console.log("a l'esquerra i a baix en diagonal");
    console.log(neighboursBoard[xx - 1][yy - 1]); */
    console.log("costat esquerra");
    console.log(neighboursBoard[xx][yy - 1]);
  }
  return 1;
};

const loopGame = () => {
  const board = new GameBoard(3, 3);
  // console.log(board);
};

export default loopGame;
