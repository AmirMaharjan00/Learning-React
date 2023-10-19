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
    Array.from( tableDate ).forEach(function( currentValue ){
      currentValue.innerHTML = ''
      currentValue.dataset.value = ''
    })
  }

  return(
    <div className='game-reset'>
      <span className='game-reset-label' onClick={ resetGame }>Reset Game</span>
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
  const [ active, setActive ] = useState( 'notActive' );
  // gameboard table creation
  let numberOfRows = 3, numberofColumns = 3, totalCells = numberOfRows * numberofColumns
  let tableBodyElement = document.getElementsByClassName('game-board-content')
  let tableBodyElementChildren = ''
  let tableRowElement = 1, tableColumnElement, tableDiagonalElement
  for( let i = 0; i < totalCells; i++ ) {
    tableColumnElement = ( i % numberofColumns ) + 1
    tableDiagonalElement = ( ( tableRowElement === tableColumnElement ) || ( tableRowElement === 1 && tableColumnElement === 3 ) || ( tableRowElement === 3 && tableColumnElement === 1 ) ) ? 1 : 0
    if( i % numberOfRows == 0 ) tableBodyElementChildren += '<tr class="game-board-row">'
      tableBodyElementChildren += "<td class='game-board-data "+ {active}.active +"' data-row='"+ tableRowElement +"' data-column='"+ tableColumnElement +"' data-diagonal='"+ tableDiagonalElement +"' data-value=''></td>"
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
    Array.from( gameBoardElement ).forEach(function( currentValue ){
      currentValue.addEventListener('click', function( event ){
        let rowElementValue = this.dataset.row, columnElementValue = this.dataset.column, diagonalElementValue = this.dataset.diagonal, valueDataAtribute
        clickCount++
        setActive( 'active' )
        
        if( clickCount % 2 == 0 ) {
          event.target.innerHTML = 'X' // player 1
          this.dataset.value = 'x'

        } else {
          event.target.innerHTML = 'O' // player 2
          this.dataset.value = 'o'
        }
        valueDataAtribute = this.dataset.value
        // valueDataAtribute
        let test = document.getElementsByClassName('game-board-data')
        Array.from( test ).forEach(function( currentValue ){
            // for row
            if( currentValue.dataset.value == valueDataAtribute ) {
              console.log( currentValue.dataset.value )
            }
        })
      })
    })
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