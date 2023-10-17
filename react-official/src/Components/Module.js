import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function Module( props ) {
    const [ endGameVar, setEndGameVar ] = useState( false );
    const endGame = () => {
        if( { endGameVar } ) {
            setEndGameVar( false )
        } else {
            setEndGameVar( true )
        }
    }
    return (
        <>
            <div className="end-game">
                <span className="end-game-label game-mode" onClick={ endGame }>{ props.label }</span>
            </div>
        </>
    );
}

Module.propTypes = {
    label: propTypes.string
}

Module.defaultProps = {
    label: 'End Game'
}