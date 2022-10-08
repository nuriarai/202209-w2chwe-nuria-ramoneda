const gameBoard = (boardSize) => {
  const board = [];
  const position = [];

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      position[y] = y;
      board[x] = position;
    }
  }

  return board;
};

export default gameBoard;
