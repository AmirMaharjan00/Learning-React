import React from 'react'
import Media from './media'
import Pages from './pages'
import Products from './products'
import Settings from './settings'
import Users from './users'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/css/admin.css'

export default function Admin() {
    return (
        <>
            <div className='swt-dashboard' id='swt-dashboard'>
                {/* <Router> */}
                    <Sidebar/>
                    <AdminMain/>
                {/* </Router> */}
            </div>
        </>
    );
}

const Sidebar = () => {
    let sidebarItemsArray = [ 
        { 'label': 'dashboard', 'link': '/swt-admin' },
        { 'label': 'products', 'link': '/swt-admin/products' },
        { 'label': 'media', 'link': '/swt-admin/media' },
        { 'label': 'pages', 'link': '/swt-admin/pages' },
        { 'label': 'users', 'link': '/swt-admin/users' },
        { 'label': 'settings', 'link': '/swt-admin/settings' }
    ]
    return (
        <>
            <div className='swt-admin-sidebar'>
                <div className='sidebar-head'>
                    <h2 className='title'>Shop Swiftly</h2>
                    <span>Burger Icon</span>
                </div>
                <div className='sidebar-body'>
                    <ul className='sidebar-items'>
                        { sidebarItemsArray.map(( element, index ) =>{ 
                            return ( <Link to={element.link} key={ index }><li className='sidebar-item'>{ element.label.charAt(0).toUpperCase() + element.label.slice(1) }</li></Link> )
                        }) }
                    </ul>
                </div>
            </div>
        </>
    );
}

const AdminMain = () => {
    return (
        <div className='swt-admin-main'>
            {/* <Routes> */}
                <Route exact path='/swt-admin' element={ <Dashboard/> }/>
                <Route exact path='/swt-admin/pages' element={ <Pages/> }/>
                <Route exact path='/swt-admin/media' element={ <Media/> }/>
                <Route exact path='/swt-admin/products' element={ <Products/> }/>
                <Route exact path='/swt-admin/settings' element={ <Settings/> }/>
                <Route exact path='/swt-admin/users' element={ <Users/> }/>
            {/* </Routes> */}
        </div>
    );
}

const Dashboard = () => {
    return (
        <>
            <h2>Dashboard</h2>
        </>
    );
}