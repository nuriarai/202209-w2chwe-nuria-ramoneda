import Cell from "./gameOfLife/Cell.js";
import GameBoard from "./gameOfLife/GameBoard.js";
import loopGame from "./gameOfLife/loopGame.js";

const gray = new Cell(1, 2, 0);
const initGame = loopGame();
const newBoard = new GameBoard(3, 3);
