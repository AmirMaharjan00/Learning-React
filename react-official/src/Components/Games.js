import React, { useState } from 'react';
import Module from './Module';

let playerOne, playerTwo
export default function Games() {
  const [ count, SetCount ] = useState(0);
  
  // Start the Game
  const startGame = () => {
    if( {count}.count ) {
      SetCount(0)
    } else {
      SetCount(1)
    }

    // let gameBoard = document.getElementsByClassName('game-board')
    // if( {count} ) {
    //   gameBoard[0].style.display = ''
    // } else {
    //   gameBoard[0].style.display = 'none'
    // }
  }

  let content
  content = {count}.count ? <PlayerDiv/> : '';

  return (
    <>
      <h1>Welcome to Tic Tac Toe</h1>
      <div className="game">
        <div className="start-game">
          <span className="start-game-label game-mode" onClick={startGame}>Start Game</span>
          { content }
        </div>
        <GameReset/>
        <EndGame/>
      </div>
      <GameBoard/>
    </>
  );
}

// Reset the Game
const GameReset = () => {
  const resetGame = () => {
    let tableDate = document.getElementsByClassName('game-board-data')
    for( let i = 0; i < tableDate.length; i++ ) {
      tableDate[i].innerHTML = ''
    }
  }

  return(
    <div className='game-reset'>
      <span className='game-reset-label' onClick={resetGame}>Reset Game</span>
    </div>
  );
}

// End the Game
const EndGame = ( props ) => {
  const [ endGameVar, setEndGameVar ] = useState( false );
  const endGame = () => {
    if( { endGameVar } ) {
      setEndGameVar( false )
    } else {
      setEndGameVar( true )
    }

    let gameBoard = document.getElementsByClassName('game-board')
    console.log( gameBoard )
    if( {endGameVar} ) {
      gameBoard[0].style.display = 'none'
    } else {
      gameBoard[0].style.display = 'block'
    }
  }
  return (
    <>
      <div className="end-game">
        <span className="end-game-label game-mode" onClick={ endGame }>{ props.label }</span>
      </div>
    </>
  );
}

EndGame.propsTypes = {
  label: 'End Game'
}

EndGame.defaultProps = {
  label: 'End Game'
}

// Get player names
const PlayerDiv = () => {
  const [ playerOne, setPlayerOne ] = useState('');
  const [ playerTwo, setPlayerTwo ] = useState('');

  // For Form Submit
  const FormSubmit = () => {
    let gameBoard = document.getElementsByClassName('game-board')
    let playersContainer = document.getElementsByClassName('players')
    if( { playerOne }.playerOne != '' && { playerTwo }.playerTwo != '' ) {
      gameBoard[0].style.display = 'table'
      playersContainer[0].style.display = 'none'
    } else {
      gameBoard[0].style.display = 'none'
    }
  }

  return(
    <div className="players" id="players">
      <form action="" className="player-form" id="player-form">
        <p>
          <label htmlFor="player_one">Player 1: </label>
          <input type="text" name="player_one" value={playerOne} id="player_one" onChange={(e) => setPlayerOne( e.target.value )}/>
        </p>
        <p>
          <label htmlFor="player_two">Player 2: </label>
          <input type="text" name="player_two" id="player_two" value={playerTwo} onChange={(e) => setPlayerTwo( e.target.value )}/>
        </p>
      </form>
      <button onClick={FormSubmit}>Submit</button>
    </div>
  );
}

// The Game Board
let randomNumber = Math.round( Math.random() * 1 )
const GameBoard = () => {
  let numberOfRows = 3, numberofColumns = 3, totalCells = numberOfRows * numberofColumns
  let tableBodyElement = document.getElementsByClassName('game-board-content')
  // console.log( tableBodyElement.innerHTML = 'amir' )
  let tableBodyElementChildren
  for( let i = 1; i <= totalCells; i++ ) {
    if( i % 3 == 0 ) tableBodyElementChildren += '<tr class="game-board-row">'
      tableBodyElementChildren += '<td class="game-board-data"></td>'
    if( i % 3 == 2 ) tableBodyElementChildren += '</tr>'
  }
  console.log( tableBodyElementChildren )
  tableBodyElement.innerHTML = 'amir'
  let element = document.getElementsByClassName('game-board-data')
  let clickCount = 0
  const gameBoardClick = ( event ) => {
    // const [ c1, setC1 ] = useState('');
    // const [ c2, setC2 ] = useState('');
    // const [ c3, setC3 ] = useState('');
    // const [ c4, setC4 ] = useState('');
    // const [ c5, setC5 ] = useState('');
    // const [ c6, setC6 ] = useState('');
    // const [ c7, setC7 ] = useState('');
    // const [ c8, setC8 ] = useState('');
    // const [ c9, setC9 ] = useState('');

    clickCount++
    let firstTurn = ( randomNumber ) ? 'Player 1' : 'Player 2';
    let c1, c2, c3, c4, c5, c6, c7, c8, c9
    if( clickCount % 2 == 0 ) {
      event.target.innerHTML = 'X' // player 1
    } else {
      event.target.innerHTML = 'O' // player 2
    }

    // Horizontal
    if( ( c1 && c2 && c3 ) || ( c4 && c5 && c6 ) || ( c7 && c8 && c9 ) ) {
      console.log( 'You Win' )
    }

    // Vertical
    if( ( c1 && c4 && c7 ) || ( c2 && c5 && c8 ) || ( c3 && c6 && c9 ) ) {
      console.log( 'You Win' )
    }

    // Diagonal
    if( ( c1 && c5 && c9 ) || ( c3 && c5 && c7 ) ) {
      console.log( 'You Win' )
    }
  }
  return(
    <>
      <table className="game-board" align='center'>
        <tbody className='game-board-content'>
          {/* <tr className='game-board-row'>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c1" data-value=""></td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c2" data-value=""></td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c3" data-value=""></td>
          </tr>
          <tr className='game-board-row'>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c4" data-value=""></td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c5" data-value=""></td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c6" data-value=""></td>
          </tr>
          <tr className='game-board-row'>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c7" data-value=""></td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c8" data-value=""></td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c9" data-value=""></td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}