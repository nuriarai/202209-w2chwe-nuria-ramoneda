import Cell from "./Cell.js";

describe("Given the class Cell", () => {
  describe("When it receives an first value of 1 and a seconf value of 0", () => {
    test("Then it should return a new Cell instance with the properties status = 1 and nextStatus = 0", () => {
      const status = 1;
      const nextStatus = 0;
      const expectedResult = {
        status: 1,
        nextStatus: 0,
      };

      const result = new Cell(status, nextStatus);

      expect(result.status).toBe(expectedResult.status);
      expect(result.nextStatus).toBe(expectedResult.nextStatus);
    });
  });
});
