const gameBoard = (() => {
  let board = Array(9).fill("");
  const getGameBoard = () => gameBoard;
  const resetBoard = () => {
    board = Array(9).fill("");
  };

  const updateBoard = (index, marker) => {
    if (board[index] === "") {
      board[index] === marker;
      return true;
    }
  }

  return { board, getGameBoard, resetBoard, updateBoard };
})();

const player = (name, marker) => {
  return { name: name, marker: marker };
};

const gameFlow = (() => {
  const player1 = player("Player 1", "X");
  const player2 = player("Player 2", "O");
   let currentPlayer = player1;

  const changePlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
		currentPlayer = player1;
	}
  };


  const getCurrentPlayer = () => currentPlayer;


  return { currentPlayer, changePlayer, getCurrentPlayer }
})();

const displayController = (() => {
  const addListeners = () => {
    const squares = document.querySelectorAll(".square");
    let i = -1;
    squares.forEach((square) => {
      ++i
      square.id = i;
      square.addEventListener('click', (e) => {
        if (gameBoard.board[square.id] === '') {
          e.preventDefault();
          square.textContent = "X";
          console.log(square.id)
          gameBoard.board[square.id] = 'x'
          gameBoard.getGameBoard();
          console.log(gameBoard.board);
        }

      })
    })
  }
  return { addListeners }
})();

displayController.addListeners();

console.log(gameFlow.getCurrentPlayer());