import Cell from "./Cell.js";
import GameBoard from "./BoardGame.js";

describe("Given the class gameBoard que genera el board", () => {
  describe("When it recieves 3 and 3 ", () => {
    const gameSize = 3;
    test("Then it should return an array of 3 rows and 3 columns", () => {
      const expectedResult = gameSize;

      const game = new GameBoard(gameSize, gameSize).board;

      expect(game.length).toBe(expectedResult);
    });

    test("Then it should return an array of arrays with objects inside ", () => {
      const expectedResult = [
        [new Cell(false, false), new Cell(true, false), new Cell(false, false)],
        [new Cell(false, false), new Cell(true, false), new Cell(false, false)],
        [new Cell(false, false), new Cell(true, false), new Cell(false, false)],
      ];

      const arraysBoard = new GameBoard(gameSize, gameSize).board;

      expect(arraysBoard).toStrictEqual(expectedResult);
    });
  });
});
