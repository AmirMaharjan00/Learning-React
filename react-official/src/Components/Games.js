import React, { useState, useRef } from 'react'
import SnakeGameImage from '../Assets/snake-game.jpg'
import TicTacToeImage from '../Assets/tic-tac-toe.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Content from './FrontPage'

export default function Games () {
    const imageArray = [ { TicTacToeImage }, { SnakeGameImage } ]
    // const LoopedImages = () => {
    //     let imageHtml = []
    //     if( typeof imageArray != 'null' ) {
    //         imageArray.forEach(function( currentValue ){
    //             imageHtml.push('<div><img src="'+ currentValue +'"></div>')
    //         })
    //     }
    //     return imageHtml;
    // }
    return (
        <>
            <div className='games'>
                <figure className='game-thumb-wrap'> 
                    <img src={ TicTacToeImage } className="game-thumb" />
                    <Link to='/games/tic-tac-toe' className='play-label'>Play</Link>
                </figure>
                <figure className='game-thumb-wrap'> 
                    <img src={ SnakeGameImage } className="game-thumb" />
                    <Link to='/games/snakegame' className='play-label'>Play</Link>
                </figure>
            </div>
        </>
    );
}

export const TicTacToe = () => {
    const [ showGameBoard, setShowGameBoard ] = useState( 'hide' );
    const [ afterMath, setAfterMath ] = useState('');
    const StartGame = () => {
        const StartGameOnClick = () => {
            if( {showGameBoard}.showGameBoard == 'hide' ) {
                setShowGameBoard( 'show' )
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
            let columnElements = document.getElementsByClassName('column-elements')
            Array.from(columnElements).forEach(function( currentValue ){
                currentValue.innerHTML = ''
                currentValue.dataset.value = ''
                currentValue.dataset.row = ''
                currentValue.dataset.column = ''
                currentValue.dataset.diagonal = ''
            })
        }
        return(
            <div className='reset-game game-action' onClick={ ResetGameOnClick }>
                <span className='reset-game-label'>Reset Game</span>
            </div>
        );
    }

    const EndGame = () => {
        const EndGameOnClick = () => {
            if( {showGameBoard}.showGameBoard == 'show' ) {
                setShowGameBoard( 'hide' )
            }
        }
        return(
            <div className='end-game game-action' onClick={ EndGameOnClick }>
                <span className='end-game-label'>End Game</span>
            </div>
        );
    }

    const GameBoard = () => {
        if( {showGameBoard}.showGameBoard == 'hide' ) return
        let forAfterMath = document.getElementsByClassName('tic-tac-toe-wrap')
        const testNode = document.createElement('div')
        const testNodeChild = document.createTextNode('yo yo')
        testNode.appendChild(testNodeChild)

        let clickCount = 0, rowElementValue = []
        const ticTacToeElementClick = ( event ) => {
            if( event.target.classList.contains( 'isactive' ) ) return

            let _this = event.target, _thisDataset = _this.dataset, _thisClassList = _this.classList

            _thisClassList.add( 'isactive' )
            _thisClassList.remove( 'notActive' )
            if( clickCount % 2 == 0 ) {
                _this.innerHTML = 'X'
                _this.value = 'x'
            } else {
                _this.value = 'o'
                _this.innerHTML = 'O'
            }
            rowElementValue.push({
                value: _this.value,
                row: _thisDataset.row,
                column: _thisDataset.column,
                diagonal: _thisDataset.diagonal
            })
            clickCount++

            let rowDecision = [], columnDecision = [], diagonalDecision = []
            for( let i = 0; i < rowElementValue.length; i++ ) {
                // for row
                if( rowElementValue[i].value === _this.value && rowElementValue[i].row === _thisDataset.row ) {
                    rowDecision.push(rowElementValue[i].value)
                }

                // for column
                if( rowElementValue[i].value === _this.value && rowElementValue[i].column === _thisDataset.column ) {
                    columnDecision.push( rowElementValue[i].value )
                }

                // for diagonal
                if( rowElementValue[i].value === _this.value && rowElementValue[i].diagonal === _thisDataset.diagonal ) {
                    diagonalDecision.push( rowElementValue[i].value )
                }
            }

            let allElements = document.querySelectorAll('.column-elements')
            if( rowDecision.length == 3 ) {
                console.log('Player ' + rowDecision[0] + ' Wins' )
            }
            if( columnDecision.length == 3 ) {
                console.log('Player ' + columnDecision[0] + ' Wins' )
            }
            if( diagonalDecision.length == 3 ) {
                console.log('Player ' + diagonalDecision[0] + ' Wins' )
            }
        }
        return (
            <>
                <table className='gameboard'>
                    <tbody className='gameboard-body'>
                        <tr className='row-elements'>
                            <td className="column-elements notActive" data-row="1" data-column="1" data-value="" data-diagonal="1" onClick={ ticTacToeElementClick }></td>
                            <td className="column-elements notActive" data-row="1" data-column="2" data-value="" data-diagonal="0" onClick={ ticTacToeElementClick }></td>
                            <td className="column-elements notActive" data-row="1" data-column="3" data-value="" data-diagonal="1" onClick={ ticTacToeElementClick }></td>
                        </tr>
                        <tr className='row-elements'>
                            <td className="column-elements notActive" data-row="2" data-column="1" data-value="" data-diagonal="0" onClick={ ticTacToeElementClick }></td>
                            <td className="column-elements notActive" data-row="2" data-column="2" data-value="" data-diagonal="1" onClick={ ticTacToeElementClick }></td>
                            <td className="column-elements notActive" data-row="2" data-column="3" data-value="" data-diagonal="0" onClick={ ticTacToeElementClick }></td>
                        </tr>
                        <tr className='row-elements'>
                            <td className="column-elements notActive" data-row="3" data-column="1" data-value="" data-diagonal="1" onClick={ ticTacToeElementClick }></td>
                            <td className="column-elements notActive" data-row="3" data-column="2" data-value="" data-diagonal="0" onClick={ ticTacToeElementClick }></td>
                            <td className="column-elements notActive" data-row="3" data-column="3" data-value="" data-diagonal="1" onClick={ ticTacToeElementClick }></td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }

    return (
        <>
            <div className='tic-tac-toe-wrap'>
                <h1>Welcome to Tic Tac Toe</h1>
                <div className='game-action-wrap'>
                    <StartGame />
                    <ResetGame />
                    <EndGame />
                </div>
                <GameBoard />
            </div>
        </>
    );
}

export const SnakeGame = () => {
    const StartGame = () => {
        const StartGameOnClick = () => {

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

        }
        return(
            <div className='end-game game-action' onClick={ EndGameOnClick }>
                <span className='end-game-label'>End Game</span>
            </div>
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
            </div>
        </>
    );
}