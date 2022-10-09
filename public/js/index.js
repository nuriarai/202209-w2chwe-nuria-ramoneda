import Cell from "./gameOfLife/Cell.js";
import GameBoard from "./gameOfLife/GameBoard.js";
import loopGame from "./gameOfLife/loopGame.js";

const gray = new Cell(1, 2, 0);
// console.log(gray);
// console.log(GameBoard(3, 3));

const initGame = loopGame();
// console.log(initGame);

const newBoard = new GameBoard(3, 3);
/* console.log(newBoard.createBoard());
console.log(newBoard.board.length); */
