import React, { useState } from 'react'

export default function TowerOfHanoi () {
    const [ gameBoard, setGameBoard ] = useState( false )
    
    const StartGame = () => {
        // on start game click
        const StartGameOnClick = () => {
            if( ! {gameBoard}.gameBoard ) {
                setGameBoard( true )
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
            if( {gameBoard}.gameBoard ) {
                setGameBoard( false )
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
        if( ! {gameBoard}.gameBoard ) return

        // returns disk html
        const diskHtmlFunc = () => {
            let disk = 4, diskHtml = [], diskElements = []
            for( let i = 0; i < disk; i++ ) {
                let htmlClassItems = 'disk disk-' + ( i + 1 )
                let itemClass = 'disk-item disk-item-' + ( i + 1 )
                diskHtml.push(<span className={ htmlClassItems }>{ ( i + 1 ) }</span>)
                diskElements.push(<span className={ itemClass }>{ ( i + 1 ) }</span>)
            }
            return { html: diskHtml, elements: diskElements }
        }

        // returns tower html
        const TowerHtmlFunc = () => {
            let tower = 3, towerHtml = [], towerElements = []
            for( let i = 0; i < tower; i++ ) {
                let classItems = 'tower tower-' + ( i + 1 )
                let itemClass = 'tower-item tower-item' + ( i + 1 )
                if( i == 0 ) {
                    towerHtml.push(<div className={ classItems }>{ diskHtmlFunc().html }</div>)
                } else {
                    towerHtml.push(<div className={ classItems }></div>)
                }
                towerElements.push(<span className={ itemClass }>a</span>)
            }
            return { html: towerHtml, elements: towerElements }
        }

        // GameBoard return
        return (
            <>
                <div className='gameboard'>
                    <div className='gameboard-elements'>{ TowerHtmlFunc().html }</div>
                    <div className='disk-elements'>{ diskHtmlFunc().elements }</div>
                    <div className='tower-elements'>{ TowerHtmlFunc().elements }</div>
                </div>
            </>
        );
    }

    // TowerOfHanoi return
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