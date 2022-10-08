import gameBoard from "./gameBoard.js";

describe("Given the function gameBoard", () => {
  describe("When it recieves a value of 3 ", () => {
    test("Then it should return an array of 3 elements", () => {
      const gameSize = 3;
      const expectedResult = gameSize;

      const result = gameBoard(gameSize).length;

      expect(result).toBe(expectedResult);
    });
  });
});
