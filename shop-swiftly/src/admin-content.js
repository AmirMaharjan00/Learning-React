import React from 'react'
import Posts from './posts'
import Media from './media'
import Pages from './pages'

export default function AdminContent ( props ) {
    return (
        <>
            <div className='swt-admin-content' id='swt-admin-content'>
                <Posts/>
                <Media/>
                <Pages/>
            </div>
        </>
    );
}