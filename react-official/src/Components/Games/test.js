import React, { useState } from 'react'

export default function TicTacToe () {
    const [ action, setAction ] = useState(null)
    const [ showGameboard, setShowGameboard ] = useState(false)
    const handleActionClick = (event, type) => {
        setAction(type)
        if( type == 'start' ) setShowGameboard( true )
        if( type == 'end' ) setShowGameboard( false )
    }
    return (
        <>
            <div className='tic-tac-toe-wrap'>
                <h1>Welcome to TicTacToe</h1>
                <div className='game-actions'>
                    <GameAction label="Start" onTouch={(event) => handleActionClick(event, 'start') } />
                    <GameAction label="Reset" onTouch={(event) => handleActionClick(event, 'reset') } />
                    <GameAction label="End" onTouch={(event) => handleActionClick(event, 'end') } />
                </div>
                {showGameboard && <GameBoard />}
            </div>
        </>    
    );
}

const GameAction = ( { label, onTouch } ) => {
    let lowerCaseLabel = label.toLowerCase()
    let thisClass 
    if( lowerCaseLabel == 'start' ) thisClass = 'start-game'
    if( lowerCaseLabel == 'reset' ) thisClass = 'reset-game'
    if( lowerCaseLabel == 'end' ) thisClass = 'end-game'
    return (
        <span className={'game-action ' + thisClass} onClick={ onTouch }>{label}</span>    
    );
}

const GameBoard = () => {
    const [ string, setString ] = useState()
    const [ turn, setTurn ] = useState(true)
    const TableRow = () => {
        return (
            <tr>
                <TableColumn/>
                <TableColumn/>
                <TableColumn/>
            </tr>    
        );
    }

    const TableColumn = () => {
        const handleCellClick = (event) => {
            console.log( event )
            // setTurn( turn ? false : true )
        }
        return (
            <td className='column-elements' onClick={(event) => handleCellClick(event) }></td>
        );
    }

    return (
        <>
            <table className='gameboard'>
                <tbody>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </tbody>
            </table>
        </>    
    );
}