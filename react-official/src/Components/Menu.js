import React from 'react'

export default function Menu() {
    return (
        <>
            <div className="menu-wrap">
                <ul className="menu">
                    <li className="menu-item"><a href="index.html">Home</a></li>
                    <li className="menu-item"><a href="games.html">Games</a></li>
                    <li className="menu-item"><a href="">Practices</a></li>
                </ul>
                <p className='search-wrap'>
                    <input type="text" placeholder="Search..." name="search_button" id="search_button"/>
                    <label htmlFor="search_button">Search</label>
                </p>
            </div>
        </>
    );
}