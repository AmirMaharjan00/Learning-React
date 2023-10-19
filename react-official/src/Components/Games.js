import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Games() {
    return (
        <>
            <div className='root-body'>
                <TicTacToe/>
            </div>
        </>
    );
}

function TicTacToe () {
    const [ showGameBoard, setShowGameBoard ] = useState('hide');
    const [ numberOfRow, setNumberOfRow ] = useState(3);
    const [ numberOfColumn, setNumberOfColumn ] = useState(3);
    const [ click, setClick ] = useState('notActive')
    const [ cellElement, setCellElement ] = useState('')
    
    const StartGame = () => {
        const startGameFunc = () => {
            if( {showGameBoard}.showGameBoard == 'hide' ) {
                setShowGameBoard('show')
            }
        }
        return (
            <>
                <div className='start-game game-action' onClick={startGameFunc}>
                    <span className='start-game-label'>Start Game</span>
                </div>
            </>
        )
    }
    const ResetGame = () => {
        const resetGameFunc = () => {
            let gameBoardCellValues = document.getElementsByClassName('column-elements')
            Array.from( gameBoardCellValues ).forEach(function( currentValue ){
                currentValue.innerHTML = ''
                currentValue.dataset.value = ''
            })
        }
        return (
            <>
                <div className='reset-game game-action' onClick={resetGameFunc}>
                    <span className='rest-game-label'>Reset Game</span>
                </div>
            </>
        )
    }
    const EndGame = () => {
        const endGameFunc = () => {
            if( {showGameBoard}.showGameBoard == 'show' ) {
                setShowGameBoard('hide')
            }
        }
        return (
            <>
                <div className='end-game game-action' onClick={endGameFunc}>
                    <span className='end-game-label'>End Game</span>
                </div>
            </>
        )
    }

    const GameBoard = ( props ) => {
        if( {showGameBoard}.showGameBoard == 'hide' ) return;
        let totalCell = {numberOfRow}.numberOfRow * {numberOfColumn}.numberOfColumn
        let rowElements = ''
        let gameBoardElement = document.getElementsByClassName('gameboard')
        for( let i = 0; i < totalCell; i++ ) {
            if( i % {numberOfRow}.numberOfRow == 0 ) rowElements += '<div class="row-elements">';
            if( i % {numberOfRow}.numberOfRow == 0 ) rowElements += {}
                rowElements += '<div class="column-elements"></div>';
            if( i % {numberOfRow}.numberOfRow == 2 ) rowElements += '</div>';
        }
        // gameBoardElement[0].innerHTML = rowElements
        let clickCount = 0
        var getSiblings = function ( elem ) {
            var siblings = [];
            var sibling = elem.parentNode.firstChild;
            var skipMe = elem;
            for ( ; sibling; sibling = sibling.nextSibling ) 
               if ( sibling.nodeType == 1 && sibling != skipMe )
                  siblings.push( sibling );
            return siblings;
        }
        const cellClik = ( event ) => {

            // setting inner html
            clickCount++
            if( clickCount % 2 == 0 ) {
                event.target.innerHTML = 'X'
                event.target.dataset.value = 'x'
            } else {
                event.target.innerHTML = 'O'
                event.target.dataset.value = 'o'
            }
            
            let clickedValue = event.target.dataset.value
            let _thisDataSet = event.target.dataset
            let rowElements = getSiblings(event.target), rowValues = []
            Array.from( rowElements ).forEach(function( currentValue ){
                if( currentValue.dataset.value == 'o' ) console.log( 'all values are smae' )
                // rowValues.push(currentValue.dataset.value)
            })
            // console.log( rowValues )
            // rowValues.forEach(function( currentValue, index ){
            //     if ( currentValue == 'o' ) console.log( currentValue )
            // })
            // console.log( test )
        }
        return (
            <>
                <div className='gameboard' align="center">
                    <div className='row-elements'>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="1" data-value=""></div>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="1" data-value=""></div>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="1" data-value=""></div>
                    </div>
                    <div className='row-elements'>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="2"></div>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="2"></div>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="2"></div>
                    </div>
                    <div className='row-elements'>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="3"></div>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="3"></div>
                        <div className={`column-elements ${click}`} onClick={cellClik} data-row="3"></div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='tic-tac-toe-wrap'>
                <h1>Welcome to Tic Tac Toe</h1>
                <div className='game'>
                    <div className='game-action-wrap'>
                        <StartGame/>
                        <ResetGame/>
                        <EndGame/>
                    </div>
                    <GameBoard/>
                </div>
            </div>
        </>
    );
}