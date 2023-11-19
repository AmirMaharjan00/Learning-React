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
    const list = [
        {
            label: 'Calculator',
            link: '/practices/calculator'
        },
        {
            label: 'Login',
            link: '/practices/login'
        },
        {
            label: 'To Do App',
            link: '/Practices/to-do-list'
        },
        {
            label: 'Snapshot',
            link: '/Practices/snapshot'
        }
    ] 
    return (
        <>
            <ul className='items-wrap'>
                { list.map((element, index) => { return <Link to={element.link} key={index} className='item'><span className='label'>{element.label}</span></Link> }) }
            </ul>
        </>    
    );
}