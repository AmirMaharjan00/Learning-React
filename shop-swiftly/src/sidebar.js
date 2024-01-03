import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const swtGetSidebar = () => {
    let sidebarDetails = [
        { 'label': 'Posts', 'slug': 'post', 'id': '1', 'link': '/posts' },
        { 'label': 'Media', 'slug': 'media', 'id': '2', 'link': '/media' },
        { 'label': 'Pages', 'slug': 'pages', 'id': '3', 'link': '/pages' }
    ]
    let sidebar = sidebarDetails.map(( element, index ) => { return <li key={ index } className='sidebar-item'><Link to={ element.link }>{ element.label }</Link></li> })
    return sidebar
}

export default function Sidebar () {
    return (
        <>
            <div className='swt-sidebar' id='swt-sidebar'>
                <ul className='sidebar-items'>
                    { swtGetSidebar() }
                </ul>
            </div>
        </>
    );
}