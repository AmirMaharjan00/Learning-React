import React, { useState, useRef } from 'react'

export default function TicTacToe () {
    const [ showGameBoard, setShowGameBoard ] = useState( 'hide' );
    const winner = useRef();
    let winnerIsSet = false

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
                currentValue.classList.remove('isactive')
                currentValue.classList.add('notActive')
                currentValue.innerHTML = ''
                currentValue.dataset.value = ''
                currentValue.dataset.row = ''
                currentValue.dataset.column = ''
                currentValue.dataset.diagonal = ''
                winner.current.innerHTML = ''
                winnerIsSet = false
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
            if( winnerIsSet ) return
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
                winner.current.innerHTML = 'Player ' + rowDecision[0] + ' Wins'
                winnerIsSet = true
            }
            if( columnDecision.length == 3 ) {
                winner.current.innerHTML = 'Player ' + columnDecision[0] + ' Wins'
                winnerIsSet = true
            }
            if( diagonalDecision.length == 3 ) {
                winner.current.innerHTML = 'Player ' + diagonalDecision[0] + ' Wins'
                winnerIsSet = true
            }
        }

        // unique keys
        let numberOfRows = 3, numberOfColumns = 3, keyArray = []
        const uniqueKey = () => {
            for( let i = 0; i < numberOfRows; i++ ) {
                keyArray.push({key: i})
            }
            return keyArray
        }

        // creating table rows with table data
        const TableRow = ( props ) => {
            let columnArray = [], diagonal
            for( let i = 0; i < numberOfColumns; i++ ) {
                if( props.row % 2 == 0 ) {
                    diagonal = ( i % 2 != 0 ) ? 1 : 0
                } else {
                    diagonal = ( i % 2 == 0 ) ? 1 : 0
                }
                columnArray.push(<TableCell key={ i } row={props.row} column={i + 1} diagonal={ diagonal }/>)
            }
            return <tr className='row-elements'>{columnArray}</tr>
        }

        // creating table data
        const TableCell = ( props ) => {
            return <td className="column-elements notActive" data-row={props.row} data-column={props.column} data-value="" data-diagonal={props.diagonal} onClick={ ticTacToeElementClick }></td>
        }

        // GameBoard return
        return (
            <>
                <table className='gameboard'>
                    <tbody className='gameboard-body'>
                        { uniqueKey().map((element) => <TableRow key={element.key} row={element.key + 1}/>) }
                    </tbody>
                </table>
                <span className='winner' ref={winner}></span>
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