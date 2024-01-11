import React from 'react'

export default function Products () {
    let statusItems = [
        {'label': 'all'},
        {'label': 'published'},
        {'label': 'draft'},
        {'label': 'trash'}
    ]
    let currentTime = new Date().toLocaleString()
    return (
        <>
            <div className='swt-admin-pages admin-products'>
                <div className='page-head'>
                    <h2 className='page-title'>Products Management</h2>
                    <div className='date-search-wrap'>
                        <span>{ currentTime }</span>
                        <label>
                            <input type='search'/>
                            <input type='submit' value='Search'/>
                        </label>
                    </div>
                </div>
                <div className='page-status'>
                    <ul className='status-list'>
                        {
                            statusItems.map(( element, index ) => { 
                                return <li key={ index } className='status-item'>{ element.label.charAt(0).toUpperCase() + element.label.slice(1) }</li>
                            })
                        }  
                    </ul>
                </div>
            </div>
        </>
    );
}