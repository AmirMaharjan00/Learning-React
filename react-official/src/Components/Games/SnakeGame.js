import React, { useState, useRef } from 'react'

export default function SnakeGame () {
    const [ gameBoard, setGameBoard ] = useState( 'hide' )
    
    const StartGame = () => {
        // on start game click
        const StartGameOnClick = () => {
            if( {gameBoard}.gameBoard == 'hide' ) {
                setGameBoard( 'show' )
            }
        }

        // StartGame return
        return(
            <div className='start-game game-action' onClick={ StartGameOnClick }>
                <span className='start-game-label'>Start Game</span>
            </div>
        );
    }

    const ResetGame = () => {
        // on reset game click
        const ResetGameOnClick = () => {

        }

        // ResetGame return
        return(
            <div className='reset-game game-action' onClick={ ResetGameOnClick }>
                <span className='reset-game-label'>Reset Game</span>
            </div>
        );
    }

    const EndGame = () => {
        // on end game click
        const EndGameOnClick = () => {
            if( {gameBoard}.gameBoard == 'show' ) {
                setGameBoard( 'hide' )
            }
        }

        // EndGame return
        return(
            <div className='end-game game-action' onClick={ EndGameOnClick }>
                <span className='end-game-label'>End Game</span>
            </div>
        );
    }

    const  GameBoard = () => {
        if( {gameBoard}.gameBoard == 'hide' ) return

        // game movement algorithm 
        let upMove = 3, rightMove = 3
        let snake = document.getElementsByClassName('snake')
        window.onkeydown = function( event ) {
            if( upMove <= 3  ) upMove = 3
            if( upMove >= 195  ) upMove = 195
            if( rightMove <= 3  ) rightMove = 3
            if( rightMove >= 300  ) rightMove = 300
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

        // snake food
        const SnakeFood = () => {
            let numberOfRows = 10, numberOfColumn = 10, totalCells = numberOfRows * numberOfColumn, snakeFoodHtml = []
            for( let i = 0; i < totalCells; i++ ) {
                snakeFoodHtml.push({ key: i })
            }
            return snakeFoodHtml
        }

        const SnakeElement = ( props ) => {
            return <span className={ props.class }></span>
        }

        let randomNumber = Math.floor( Math.random() * SnakeFood().length )

        // GameBoard return
        return (
            <>
                <div className='gameboard'>
                    <div className='gameboard-inner'>
                        <div className='snake-wrap'>
                            <span className='snake'></span>
                        </div>
                        <div className='snake-food-wrap'>
                            { SnakeFood().map(( element ) => <SnakeElement key={ element.key } class={ (randomNumber == element.key) ? 'food snake-food' : 'food' } /> )}
                        </div>
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