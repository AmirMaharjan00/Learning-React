import React from 'react'
import './dashboard.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Dashboard() {
    const menuItems = [
        {
            'link': '/posts',
            'label': 'Posts'
        },
        {
            'link': '/',
            'label': 'Media'
        },
        {
            'link': '/',
            'label': 'Pages'
        }
    ]
    return (
        <>
            <div className='swt-section' id='swt-section'>
                <aside className='swt-sidebar'>
                    { menuItems.map(( item, itemIndex ) => { return <li key={ itemIndex }><Link to={ item.link }>{ item.label }</Link></li> }) }
                </aside>
                <main className='swt-content'>Main content</main>
            </div>
        </>
    );
}