import React from 'react'
import propTypes from 'prop-types'

export default function Module( props ) {
    return (
        <>
            <div className="end-game">
                <span className="end-game-label">{ props.label }</span>
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