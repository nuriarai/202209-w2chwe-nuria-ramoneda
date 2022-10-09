const boardSize = 3;

const checkLifes = (currentXX, currentYY, currentStatus, board, rows, cols) => {
  if (currentXX !== undefined) {
    const xx = currentXX;
    const yy = currentYY;
    let neighboursBoard = [];
    neighboursBoard = board; // new GameBoard(3, cols).board;
    let newStatus = false;
    let alives = 0;

    // right
    if (xx >= 0 && xx < rows && yy + 1 >= 0 && yy + 1 < cols) {
      if (neighboursBoard[xx][yy + 1].status) {
        alives++;
      }
    }

    // diagonal right bottom
    if (xx + 1 >= 0 && xx + 1 < rows && yy + 1 >= 0 && yy + 1 < cols) {
      if (neighboursBoard[xx + 1][yy + 1].status) {
        alives++;
      }
    }
    // bottom
    if (xx + 1 >= 0 && xx + 1 < rows && yy >= 0 && yy < cols) {
      if (neighboursBoard[xx + 1][yy].status) {
        alives++;
      }
    }
    // diagonal left bottom
    if (xx + 1 >= 0 && xx + 1 < rows && yy - 1 >= 0 && yy - 1 < cols) {
      if (neighboursBoard[xx + 1][yy - 1].status) {
        alives++;
      }
    }
    // left
    if (xx >= 0 && xx < rows && yy - 1 >= 0 && yy - 1 < cols) {
      if (neighboursBoard[xx][yy - 1].status) {
        alives++;
      }
    }
    // diagonal left top
    if (xx - 1 >= 0 && xx - 1 < rows && yy - 1 >= 0 && yy - 1 < cols) {
      if (neighboursBoard[xx - 1][yy - 1].status) {
        alives++;
      }
    }
    // top
    if (xx - 1 >= 0 && xx - 1 < rows && yy >= 0 && yy < cols) {
      if (neighboursBoard[xx - 1][yy].status) {
        alives++;
      }
    }
    // diagonal right top
    if (xx - 1 >= 0 && xx - 1 < rows && yy + 1 >= 0 && yy + 1 < cols) {
      if (neighboursBoard[xx - 1][yy + 1].status) {
        alives++;
      }
    }

    console.log(`vius: ${alives}`);
    // rules of life
    if (currentStatus) {
      switch (alives) {
        case 2:
          newStatus = true;
          break;
        case 3:
          newStatus = true;
          break;
        case alives > 3:
          newStatus = false;
          break;
        default:
          newStatus = false;
          break;
      }
    } else if (alives === 3) newStatus = true;
    return newStatus;
  }
  return undefined;
};

export default checkLifes;
