import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Menu () {
    const [ headerItem, setHeaderItem ] = useState('header-item');

    // live search
    const LiveSearch = () => {
        return (
            <>
                <div className={ headerItem + ' live-search'}>
                    <input type="text" placeholder='Search ...' />
                    <button>Search</button>
                </div>
            </>
        );
    }
    
    // logo
    const Logo = () => {
        return (
            <>
                <span className={ headerItem + ' logo'} onClick={handleMenuItem}><Link to="/">LOGO.</Link></span>
            </>    
        );
    }

    // Menu return
    const MenuItem = ( props ) => {
        return <li className={ 'menu-item ' + props.mainClass} onClick={ handleMenuItem }><Link to={ props.link }>{ props.label }</Link></li>
    }

    // handleMenuItem
    const handleMenuItem = ( event ) => {
        let menuItemArray = document.getElementsByClassName('menu-item')
        Array.from(menuItemArray).forEach(function( currentValue ){
            currentValue.classList.remove('isActive')
        })
        if( ! event.target.parentNode.classList.contains('menu-item') ) {
            menuItemArray[0].classList.add('isActive')
            return
        }
        event.target.parentNode.classList.add('isActive')
    }

    // Unique key function
    const uniqueKey = () => {
        let menuItem = 4, keyArr = [], linkArr = ['/', '/games', '/about', '/practice'], labelArr = ['Home', 'Games', 'About', 'Practice']
        for( let i = 0; i < menuItem; i++ ) {
            keyArr.push({ key: i, link: linkArr[i], label: labelArr[i] })
        }
        return keyArr
    }

    return (
        <>
            <div className='nav-menu'>
                <Logo />
                <ul className={ headerItem + ' menu-list'}>
                    { uniqueKey().map((element) => <MenuItem key={element.key} mainClass={ (element.key == 0) ? 'isActive' : ''} link={element.link} label={element.label}/>) }
                </ul>
                <LiveSearch/>
            </div>
        </>
    );
}