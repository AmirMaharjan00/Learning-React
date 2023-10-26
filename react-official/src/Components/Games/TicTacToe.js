import React, { useState } from 'react'

export default function TicTacToe () {
    const [ showGameBoard, setShowGameBoard ] = useState( 'hide' );

    const StartGame = () => {
        // on start game click 
        const StartGameOnClick = () => {
            if( {showGameBoard}.showGameBoard == 'hide' ) {
                setShowGameBoard( 'show' )
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
            let columnElements = document.getElementsByClassName('column-elements')
            Array.from(columnElements).forEach(function( currentValue ){
                currentValue.innerHTML = ''
                currentValue.dataset.value = ''
                currentValue.dataset.row = ''
                currentValue.dataset.column = ''
                currentValue.dataset.diagonal = ''
            })
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
            if( {showGameBoard}.showGameBoard == 'show' ) {
                setShowGameBoard( 'hide' )
            }
        }

        // EndGame return
        return(
            <div className='end-game game-action' onClick={ EndGameOnClick }>
                <span className='end-game-label'>End Game</span>
            </div>
        );
    }

    const GameBoard = () => {
        if( {showGameBoard}.showGameBoard == 'hide' ) return

        let clickCount = 0, rowElementValue = []
        const ticTacToeElementClick = ( event ) => {
            if( event.target.classList.contains( 'isactive' ) ) return
            let _this = event.target, _thisDataset = _this.dataset, _thisClassList = _this.classList

            // class toggle and html input
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

            // Deciding winner
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

        // GameBoard return
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

    // TicTacToe return
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