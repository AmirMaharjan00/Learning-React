import React from 'react'
import './assets/css/admin.css'

export default function Dashboard() {
    return (
        <>
            <div className='swt-dashboard' id='swt-dashboard'>
                <Sidebar/>
                <AdminMain/>
            </div>
        </>
    );
}

const Sidebar = () => {
    let sidebarItemsArray = [ 'products', 'media', 'pages', 'users', 'settings' ]
    return (
        <>
            <div className='swt-admin-sidebar'>
                <div className='sidebar-head'>
                    <h2 className='title'>Shop Swiftly</h2>
                    <span>Burger Icon</span>
                </div>
                <div className='sidebar-body'>
                    <ul className='sidebar-items'>
                        { sidebarItemsArray.map(( element, index ) =>{ return <li key={ index } className='sidebar-item'>{ element.charAt(0).toUpperCase() + element.slice(1) }</li> }) }
                    </ul>
                </div>
            </div>
        </>
    );
}

const AdminMain = () => {
    return (
        <>
            <div className='swt-admin-main'>
                <h2>Main content goes here</h2>
            </div>
        </>
    );
}