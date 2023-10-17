import React, { useState } from 'react';
import Module from './Module';

let playerOne, playerTwo
export default function Games() {
  const [ count, SetCount ] = useState(0);
  
  // for Start Game
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
          <GameBoard/>
        </div>
        <Module/>
      </div>
    </>
  );
}

const PlayerDiv = () => {
  const [ playerOne, setPlayerOne ] = useState('');
  const [ playerTwo, setPlayerTwo ] = useState('');

  // For Form Submit
  const FormSubmit = () => {
    if( { playerOne } != '' && { playerTwo } != '' ) {
      return true
    } else {
      return false
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

let randomNumber = Math.round( Math.random() * 1 )
const GameBoard = () => {
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
    if( clickCount % 2 == 0 ) {
      event.target.innerHTML = 'X' // player 1
    } else {
      event.target.innerHTML = 'O' // player 2
    }

    // horizontal
    // if(  )
  }
  return(
    <>
      <table className="game-board">
        <tbody className='game-board-content'>
          <tr className='game-board-row'>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c1" data-value="">1</td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c2" data-value="">2</td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c3" data-value="">3</td>
          </tr>
          <tr className='game-board-row'>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c4" data-value="">4</td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c5" data-value="">5</td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c6" data-value="">6</td>
          </tr>
          <tr className='game-board-row'>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c7" data-value="">7</td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c8" data-value="">8</td>
            <td className='game-board-data' onClick={gameBoardClick} data-cell="c9" data-value="">9</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}