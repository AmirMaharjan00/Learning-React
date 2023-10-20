import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Games() {
    return (
        <>
            <div className='root-body'>
                <TicTacToe/>
                <SnakeGame/>
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
                currentValue.classList.add('notActive')
                currentValue.classList.remove('active')
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
            let _thisClasslist = event.target.classList
            if( _thisClasslist.contains('notActive') ) {

                _thisClasslist.add('active')
                _thisClasslist.remove('notActive')

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
            }
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

const SnakeGame = () =>  {
    const [ displayGameboard, setDisplayGameboard ] = useState('hide')

    const StartGame = () => {
        const onStartClick = () => {
            let gameBaordElement = document.querySelector('.snake-game-wrap .gameboard')
            if( {displayGameboard}.displayGameboard == 'hide' ) {
                setDisplayGameboard('show')
            }
        }
        return (
            <>
                <div className='start-game game-action' onClick={onStartClick}>
                    <span className='start-game-label'>Start Game</span>
                </div>
            </>
        );
    }
    const ResetGame = () => {
        const onResetClick = () => {
            let gameBaordElement = document.querySelector('.snake-game-wrap .gameboard')
            
        }
        return (
            <>
                <div className='reset-game game-action' onClick={onResetClick}>
                    <span className='reset-game-label'>Reset Game</span>
                </div>
            </>
        );
    }
    const EndGame = () => {
        const onEndClick = () => {
            if( {displayGameboard}.displayGameboard == 'show' ) {
                setDisplayGameboard('hide')
            }
        }
        return (
            <>
                <div className='end-game game-action' onClick={onEndClick}>
                    <span className='end-game-label'>End Game</span>
                </div>
            </>
        );
    }
    const GameBoard = () => {
        if( {displayGameboard}.displayGameboard == 'hide' ) return
        // if( {displayGameboard}.displayGameboard == 'show' ) {
            
            let test = '<h1>Amir</h1>'
            let gameBoardElement = document.querySelector('.snake-game-wrap')
            let snakeElement = gameBoardElement.querySelector('.snake-game-wrap .snake')
            console.log( snakeElement ) 
            // console.log( snakeElement && snakeElement.dataset ) 
        // }
        // let rightMove = snakeElement.dataset.right, upMove = snakeElement.dataset.upMove
        let rightMove = 0, upMove = 0
        // console.log( rightMove )
        window.onkeydown = ( event ) => {
            if( rightMove <= 3 ) rightMove = 3;
            if( rightMove >= 225 ) rightMove = 225;
            if( upMove <= 3 ) upMove = 3;
            if( upMove >= 195 ) upMove = 195;
            let snake = document.querySelector('.snake')
            switch( event.keyCode ) {
                case 38:
                    snake.style.top = (upMove--) + 'px'
                    break;
                case 40:
                    snake.style.top = (upMove++) + 'px'
                    break;
                case 37:
                    snake.style.left = (rightMove--) + 'px'
                    break;
                case 39:
                    snake.style.left = (rightMove++) + 'px'
                    break;
            }
        }
        return(
            <>
                <div className='gameboard'>
                    <div className='gameboard-inner'>
                        <span className='snake' data-right="0" data-up="0"></span>
                    </div>
                    <div className='game-control'>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='snake-game-wrap'>
                <h1>Welcome to Snake Game</h1>
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

