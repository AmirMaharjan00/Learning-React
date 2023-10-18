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
      <button onClick={ FormSubmit }>Submit</button>
    </div>
  );
}

// The Game Board
let randomNumber = Math.round( Math.random() * 1 )
const GameBoard = ( event ) => {
  // gameboard table creation
  let numberOfRows = 3, numberofColumns = 3, totalCells = numberOfRows * numberofColumns
  let tableBodyElement = document.getElementsByClassName('game-board-content')
  let tableBodyElementChildren = ''
  let tableRowElement = 1, tableColumnElement, tableDiagonalElement
  for( let i = 0; i < totalCells; i++ ) {
    tableColumnElement = ( i % numberofColumns ) + 1
    tableDiagonalElement = ( ( tableRowElement === tableColumnElement ) || tableRowElement === 1 && tableColumnElement === 3 ) ? 1 : 0
    if( i % numberOfRows == 0 ) tableBodyElementChildren += '<tr class="game-board-row">'
      tableBodyElementChildren += "<td class='game-board-data' data-row='"+ tableRowElement +"' data-column='"+ tableColumnElement +"' data-diagonal='"+ tableDiagonalElement +"'></td>"
    if( i % numberOfRows == 2 ) {
      tableBodyElementChildren += '</tr>'
      tableRowElement++
    }
  }
  if( tableBodyElement.length > 0 ) tableBodyElement[0].innerHTML = tableBodyElementChildren

  // Gameboard cell on click
  let gameBoardElement = document.getElementsByClassName('game-board-data')
  if( gameBoardElement.length > 0 ) {
    let clickCount = 0
    for( let i = 0; i < gameBoardElement.length; i++ ) {
      gameBoardElement[i].addEventListener('click', function( event ){
        clickCount++
        let firstTurn = ( randomNumber ) ? 'Player 1' : 'Player 2';
        let c1, c2, c3, c4, c5, c6, c7, c8, c9
        if( clickCount % 2 == 0 ) {
          event.target.innerHTML = 'X' // player 1
        } else {
          event.target.innerHTML = 'O' // player 2
        }
      })
    }
  }

  return(
    <>
      <table className="game-board" align='center'>
        <tbody className='game-board-content'>
        </tbody>
      </table>
    </>
  );
}