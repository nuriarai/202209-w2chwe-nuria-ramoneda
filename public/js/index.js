import Cell from "./gameOfLife/Cell.js";
import gameBoard from "./gameOfLife/gameBoard.js";
import loopGame from "./gameOfLife/loopGame.js";

const gray = new Cell(1, 2, 0);
console.log(gray);
console.log(gameBoard(3));

const initGame = loopGame();
console.log(initGame);
