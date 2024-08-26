const gameBoard = (() => {
    let board = Array(9).fill('');
    const getGameBoard = () => gameBoard;

    return { board, getGameBoard }
})();


const player = (name, marker) => {
	return { name: name, 
			marker: marker };
}

const gameFlow = (() => {
	const player1 = player('Player 1', 'X');
	const player2 = player('Player 2', 'O');
})()



const displayController = (() => {
	// Display controller HTML
})();