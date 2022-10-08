import Cell from "./Cell.js";
import gameBoard from "./gameBoard.js";

describe("Given the function gameBoard que genera el board", () => {
  describe("When it recieves a value of 3 ", () => {
    const gameSize = 3;
    test("Then it should return an array of 3 rows", () => {
      const expectedResult = gameSize;

      const lengthBoard = gameBoard(gameSize).length;

      expect(lengthBoard).toBe(expectedResult);
    });

    test("Then it should return an array of arrays with objects inside ", () => {
      const expectedResult = [
        [new Cell(0, 0, 0), new Cell(0, 1, 1), new Cell(0, 2, 0)],
        [new Cell(1, 0, 0), new Cell(1, 1, 1), new Cell(1, 2, 0)],
        [new Cell(2, 0, 0), new Cell(2, 1, 1), new Cell(2, 2, 0)],
      ];

      const arraysBoard = gameBoard(gameSize);

      expect(arraysBoard).toStrictEqual(expectedResult);
    });
  });
});
