import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Practice () {
    return (
        <>
            <div className='practices-wrap'>
                <DivStructureForPractice />
            </div>
        </>
    );
}

const DivStructureForPractice = () => {
     
    return (
        <>
            <ul className='itemwrap'>
                { list.map((element, index) => { return <li className='item' key={index}><Link to={element.link}><span className='label'>{element.label}</span><span className='icon'><i className='fas fa-plus'></i></span></Link></li> }) }
            </ul>
        </>    
    );
}