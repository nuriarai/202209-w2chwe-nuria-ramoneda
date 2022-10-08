import Cell from "./Cell.js";

describe("Given the class Cell", () => {
  describe("When it receives an axys x 0, axys y 1, status 1", () => {
    test("Then it should return a new Cell instance", () => {
      const axisX = 0;
      const axisY = 1;
      const status = 1;
      const expectedResult = {
        axisX: 0,
        axisY: 1,
        status: 1,
        nextStatus: undefined,
      };

      const result = new Cell(axisX, axisY, status);

      expect(result.axisX).toBe(expectedResult.axisX);
      expect(result.axisY).toBe(expectedResult.axisY);
      expect(result.status).toBe(expectedResult.status);
    });
  });
});
