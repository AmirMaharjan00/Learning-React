import React, { useState, useRef } from 'react'

export default function TowerOfHanoi () {
    const [ gameBoard, setGameBoard ] = useState( 'hide' )
    const test = useRef('')
    
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

    const GameBoard = () => {
        if( {gameBoard}.gameBoard == 'hide' ) return
        let disk = 4, tower = 3, towerHtml = []
        
        return (
            <>
                <div className='gameboard' ref={ test }>

                </div>
            </>
        );
    }
    return (
        <>
            <div className='tower-of-hanoi-wrap'>
                <h1>Welcome to Tower of Hanoi</h1>
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