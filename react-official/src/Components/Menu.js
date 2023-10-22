import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Menu () {
    return (
        <>
            <div className='nav-menu'>
                <ul className='menu-list'>
                    <li className='menu-item'><Link to="/home">Home</Link></li>
                    <li className='menu-item'><Link to="/games">Games</Link></li>
                    <li className='menu-item'><Link to="/about">About</Link></li>
                    <li className='menu-item'><Link to="/practice">Practice</Link></li>
                </ul>
                <LiveSearch/>
            </div>
        </>
    );
}

const LiveSearch = () => {
    return (
        <>
            <div className='live-search'>
                <input type="text" placeholder='Search ...' />
                <button>Search</button>
            </div>
        </>
    );
}