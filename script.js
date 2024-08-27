// console.log statements to be removed
const gameBoard = (() => {
  const getGameBoard = () => gameBoard;
  let board = Array(9).fill("");
  const resetBoard = () => {
    board = Array(9).fill("");
  };

  const updateBoard = (index, marker) => {
    if (board[index] === "") {
      board[index] === marker;
      return true;
    }
  };

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

  const checkWinner = () => {
    const winnerBox = document.querySelector(".winnerBox");
    const winnerText = document.querySelector(".winnerText")
    for (i in gameBoard.board) {
      if (
        gameBoard.board[0] === "X" && gameBoard.board[1] === "X" && gameBoard.board[2] === "X" ||
        gameBoard.board[3] === "X" && gameBoard.board[4] === "X" && gameBoard.board[5] === "X" ||
        gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X" ||
        gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X" ||
        gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X" ||
        gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X" ||
        gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X" ||
        gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X" 
      ) {
        winnerBox.showModal();
        winnerText.innerHTML = "<span>X Wins!</span>"
      } else if (
        gameBoard.board[0] === "O" && gameBoard.board[1] === "O" && gameBoard.board[2] === "O" ||
        gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O" ||
        gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O" ||
        gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O" ||
        gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O" ||
        gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O" ||
        gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O" ||
        gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O" 
      ) {
        winnerBox.showModal();
        winnerText.innerHTML = "<span>O Wins!</span>"
      }
    }
  };

  return { currentPlayer, changePlayer, getCurrentPlayer, checkWinner };
})();


const displayController = (() => {

  const resetGame = () => {
    window.location.reload();
  }
  
  const addListeners = () => {
    const squares = document.querySelectorAll(".square");
    let i = -1;
    squares.forEach((square) => {
      ++i;
      square.id = i;
      square.addEventListener("click", (e) => {
        if (gameBoard.board[square.id] === "") {
          e.preventDefault();
          square.textContent = gameFlow.getCurrentPlayer().marker;
          gameBoard.board[square.id] = gameFlow.getCurrentPlayer().marker;
          gameBoard.getGameBoard();
          gameFlow.checkWinner();
          gameFlow.changePlayer();
        }
      });
    });
  };
  return { addListeners, resetGame };
})();

displayController.addListeners();
