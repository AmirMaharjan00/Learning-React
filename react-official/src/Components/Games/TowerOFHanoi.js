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
        let disk = 4, tower = 3

        // returns disk html
        const DiskHtmlFunc = ( props ) => {
            return ( props.html ) ? <span className={ props.class }>{ props.mainElement }</span> : <span className={ props.elementClass }>{ props.element }</span>
        }
        DiskHtmlFunc.defaultProps = {
            html: false,
            class: 'disk',
            elementClass: 'disk-item'
        }

        // returns tower html
        const TowerHtmlFunc = ( props ) => {
            return ( props.html ) ? <div className={ props.class }>{ props.element }</div> : <span className={ props.elementClass }>a</span>
        }

        TowerHtmlFunc.defaultProps = {
            html: false,
            class: 'tower',
            elementClass: 'tower-item'
        }

        // for unique key of component child
        const uniqueKey = ( component = 'disk', forTowerHtml = false ) => {
            let element = ( component == 'tower' ) ? tower : disk, keyArray = [], towerHTML = []
            for( let i = 0; i < element; i++ ) {
                keyArray.push({ key: i })
                towerHTML.push( <DiskHtmlFunc mainElement={ i + 1 } html={ true }/> )
            }
            return ( forTowerHtml ) ? towerHTML : keyArray;
        }

        // GameBoard return
        return (
            <>
                <div className='gameboard'>
                    <div className='gameboard-elements'>
                        { uniqueKey( 'tower' ).map((element) => <TowerHtmlFunc key={ element.key } html={ true } element={ (element.key == 0) ? uniqueKey('disk', true): '' }/> ) }
                    </div>
                    <div className='disk-elements'>
                        { uniqueKey( 'disk' ).map((element) => <DiskHtmlFunc key={ element.key } element={element.key + 1}/> ) }
                    </div>
                    <div className='tower-elements'>
                        { uniqueKey( 'tower' ).map((element) => <TowerHtmlFunc key={ element.key }/> ) }
                    </div>
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