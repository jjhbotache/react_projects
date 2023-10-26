export default function thereIsAWinner(board) {
  const WINNER_COMBOS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];
  for (const combo of WINNER_COMBOS){
    const [a, b, c] = combo
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a]
    } 
  }
  return board.every((square) => square !== null) ? false : null
} 
