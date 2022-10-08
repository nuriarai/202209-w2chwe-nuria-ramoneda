class Cell {
  axisX;
  axisY;
  status;
  nextStatus;

  constructor(axisX, axisY, status) {
    this.axisX = axisX;
    this.axisY = axisY;
    this.status = status;
  }
}

export default Cell;
