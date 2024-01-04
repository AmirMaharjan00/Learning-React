import React from 'react'

export default function Posts () {
    return (
        <>
            <div className='swt-admin-content posts'>
                <div className='add-new-section'>
                    <span className='add-new-label'>Add new post</span>
                    <button className='add-new-button'>Add new post</button>
                </div>
                <div className='post-lists-wrap'>
                    <div className='post-list-header'>
                        <ul className='post-lists'>
                            <li className='post-list'>Sno</li>
                            <li className='post-list'>Post Title</li>
                            <li className='post-list'>Category</li>
                            <li className='post-list'>Tags</li>
                        </ul>
                    </div>
                    <div className='post-list-content'>
                        <ul className='post-contents'>
                            <li className='post-content'>1</li>
                            <li className='post-content'>Amir Maharjan</li>
                            <li className='post-content'>Human</li>
                            <li className='post-content'>Student</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}