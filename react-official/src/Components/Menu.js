import React from 'react'

export default function Menu () {
    return(
        <>
            <div className='nav-menu'>
                <NavMenu/>
                <LiveSearch/>
            </div>
        </>
    );
}

const NavMenu = () => {
    return(
        <ul className='menu-list'>
            <li className='menu-item'><a href=''>Home</a></li>
            <li className='menu-item'><a href=''>Games</a></li>
            <li className='menu-item'><a href=''>Practices</a></li>
        </ul>
    );
}

const LiveSearch = () => {
    return(
        <div className='live-search'>
            <input type="text" placeholder='Search...' />
            <button>Search</button>
        </div>
    );
}