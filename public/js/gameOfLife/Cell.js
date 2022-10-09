class Cell {
  status = false;
  nextStatus = false;

  constructor(status, nextStatus) {
    this.status = status;
    this.nextStatus = nextStatus;
  }
}

export default Cell;
