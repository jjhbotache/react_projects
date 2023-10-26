import { useState,useEffect } from 'react'
import confetti from "canvas-confetti"
import { turns } from './constants/const'
import Square from './components/Square'
import thereIsAWinner from './logic/thereIsAWinner';
import ReStartBtn from './components/ReStartBtn';
import { localSave,getLocalStorageItem } from './logic/localManagment'


function App() {
  const [board, setBoard] = useState(() => getLocalStorageItem("board", Array(9).fill(null)));
  const [turn, setTurn] = useState(() => getLocalStorageItem("turn", turns.X));

  const [winner,setWinner] = useState(null); 

  useEffect(() => {
    localSave("gameInfo",{board: board,turn: turn});
  }, [board,turn]);


  function resetGame(){
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);
    localStorage.clear()
  }


  function updateBoard(index) {
    // if there isn't something in the board adn there's not a winner
    if (!board[index] && !thereIsAWinner(board)) {
      const newBoard = [...board];// create a newBoard
      newBoard[index] = turn;// add the turn in the newBoard
      setBoard(newBoard);// update the board
      
      const newTurn = turn === turns.X? turns.O : turns.X;// toogle the next turn
      setTurn(newTurn); // update it

      const newWinner = thereIsAWinner(newBoard);
      newWinner && confetti();
      setWinner(newWinner)

    }
  } 

  // renderize of the element
  return (
    <main className='board'>
      <h1 className='text-dark'>Tic Tac Toe</h1>
      <ReStartBtn onClick={resetGame}/>
      <section className="game">
        {
          board.map((value, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              handleClick={()=>{updateBoard(index)}}
              >
                {value}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
      </section>
      {
        winner !== null && (
          <section className="winner">
            <h2 className="text-dark"> { !winner?"Empate":`Ganador: ${winner}` } </h2>
            <ReStartBtn onClick={resetGame}/>
          </section>
        )
      }
    </main>
  )
}

export default App