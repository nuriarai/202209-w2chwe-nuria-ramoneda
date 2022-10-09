import Cell from "./Cell.js";
import GameBoard from "./gameBoard.js";

describe("Given the class gameBoard que genera el board", () => {
  describe("When it recieves 3 and 3 ", () => {
    const gameSize = 3;
    test("Then it should return an array of 3 rows and 3 columns", () => {
      const expectedResult = gameSize;

      const game = new GameBoard(gameSize, gameSize);
      const gameBoard = game.createBoard();

      expect(game.board.length).toBe(expectedResult);
    });

    test("Then it should return an array of arrays with objects inside ", () => {
      const expectedResult = [
        [new Cell(0, 0), new Cell(1, 0), new Cell(0, 0)],
        [new Cell(0, 0), new Cell(1, 1), new Cell(0, 0)],
        [new Cell(0, 0), new Cell(1, 0), new Cell(0, 0)],
      ];

      const arraysBoard = new GameBoard(gameSize, gameSize);

      expect(arraysBoard).toStrictEqual(expectedResult);
    });
  });
});
