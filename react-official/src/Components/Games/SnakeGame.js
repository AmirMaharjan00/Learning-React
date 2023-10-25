import React, { useState, useRef } from 'react'

export default function SnakeGame () {
    const [ gameBoard, setGameBoard ] = useState( 'hide' )
    
    const StartGame = () => {
        const StartGameOnClick = () => {
            if( {gameBoard}.gameBoard == 'hide' ) {
                setGameBoard( 'show' )
            }

        }
        return(
            <div className='start-game game-action' onClick={ StartGameOnClick }>
                <span className='start-game-label'>Start Game</span>
            </div>
        );
    }

    const ResetGame = () => {
        const ResetGameOnClick = () => {

        }
        return(
            <div className='reset-game game-action' onClick={ ResetGameOnClick }>
                <span className='reset-game-label'>Reset Game</span>
            </div>
        );
    }

    const EndGame = () => {
        const EndGameOnClick = () => {
            if( {gameBoard}.gameBoard == 'show' ) {
                setGameBoard( 'hide' )
            }
        }
        return(
            <div className='end-game game-action' onClick={ EndGameOnClick }>
                <span className='end-game-label'>End Game</span>
            </div>
        );
    }

    const  GameBoard = () => {
        if( {gameBoard}.gameBoard == 'hide' ) return
        let upMove = 3, rightMove = 3
        let snake = document.getElementsByClassName('snake')
        window.onkeydown = function( event ) {
            if( upMove <= 3  ) upMove = 3
            if( upMove >= 195  ) upMove = 195
            if( rightMove <= 3  ) rightMove = 3
            if( rightMove >= 225  ) rightMove = 225
            switch( event.keyCode ) {
                case 37 :   // left
                    snake[0].style.left = ( rightMove-- ) + 'px'
                    break;
                case 38 :   // top
                    snake[0].style.top = ( upMove-- ) + 'px'
                    break;
                case 39 :   // right
                    snake[0].style.left = ( rightMove++ ) + 'px'
                    break;
                case 40 :   // down
                    snake[0].style.top = ( upMove++ ) + 'px'
                    break;
            }
        }
        return (
            <>
                <div className='gameboard'>
                    <div className='gameboard-inner'>
                        <span className='snake'></span>
                    </div>
                </div>
            </>
        );
    }

    const GameControls = () => {
        return (
            <>
                <div className='game-controls'>
                    <span className='left'>Left</span>
                    <span className='right'>Right</span>
                    <span className='top'>Up</span>
                    <span className='down'>Down</span>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='snake-game-wrap'>
                <h1>Welcome to Snake Game</h1>
                <div className='game-action-wrap'>
                    <StartGame />
                    <ResetGame />
                    <EndGame />
                </div>
                <GameBoard/>
            </div>
        </>
    );
}