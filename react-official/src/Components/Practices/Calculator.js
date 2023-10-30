import React, { useState, Component } from 'react'

export default class Calculator extends Component {
    render() {
        return (
            <>
                <Calculator_Elements/>          
            </>
        );
    }
}


class Calculator_Elements extends Component {
    // const [  ]
    render() {
        const handleOnClick = ( event ) => {
            console.log( event.target )
        }

        return(
            <>
                <div className='calculator'>
                    <div className='calculator-display'>

                    </div>
                    <div className='calculator-element'>
                        <span className='calculator-item' onClick={handleOnClick}>7</span>
                        <span className='calculator-item' onClick={handleOnClick}>8</span>
                        <span className='calculator-item' onClick={handleOnClick}>9</span>
                        <span className='calculator-item' onClick={handleOnClick}>Del</span>
                        <span className='calculator-item' onClick={handleOnClick}>4</span>
                        <span className='calculator-item' onClick={handleOnClick}>5</span>
                        <span className='calculator-item' onClick={handleOnClick}>3</span>
                        <span className='calculator-item' onClick={handleOnClick}>+</span>
                        <span className='calculator-item' onClick={handleOnClick}>1</span>
                        <span className='calculator-item' onClick={handleOnClick}>2</span>
                        <span className='calculator-item' onClick={handleOnClick}>3</span>
                        <span className='calculator-item' onClick={handleOnClick}>-</span>
                        <span className='calculator-item' onClick={handleOnClick}>.</span>
                        <span className='calculator-item' onClick={handleOnClick}>0</span>
                        <span className='calculator-item' onClick={handleOnClick}>/</span>
                        <span className='calculator-item' onClick={handleOnClick}>x</span>
                        <div className='calculator-end'>
                            <span className='calculator-end-item' onClick={handleOnClick}>RESET</span>
                            <span className='calculator-end-item' onClick={handleOnClick}>=</span>
                        </div>
                    </div>
                </div>
            </>    
        );
    }
}