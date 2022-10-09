import Cell from "./gameOfLife/Cell.js";
import GameBoard from "./gameOfLife/BoardGame.js";
import loopGame from "./gameOfLife/checkLifes.js";

const gray = new Cell(1, 2, 0);
const initGame = loopGame();
const newBoard = new GameBoard(3, 3);
