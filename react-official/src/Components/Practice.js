import React from 'react'
import Login from './Practices/Login'
import Calculator from './Practices/Calculator'

export default function Practice () {
    return (
        <>
            <div className='practices-wrap'>
                <Login/>
                <Calculator/>
            </div>
        </>
    );
}