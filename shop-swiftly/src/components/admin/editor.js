import React, { useState } from 'react'

export default function Editor( { editorClose } ) {
    const [ formInfo, setFormInfo ] = useState({})

    // handle form submit
    const handleFormSubmit = () => {

    }
    
    return (
        <>
            <div className='swt-admin-editor' id='swt-admin-editor'>
                <span className='editor-close' onClick={ () => { editorClose() } }>X</span>
                <form onSubmit={ handleFormSubmit } >
                    <div className='editor-area'>
                        <div className='editor-main'>
                            <input type='text' placeholder='Title' name='product_name' id='product_name' />
                            <textarea placeholder='Description' name='product_description' id='product_description'></textarea>
                        </div>
                        <div className='editor-sidebar'>
                            <button className='editor-submit'>Publish</button>
                            <div className='sidebar-elements-wrap'>
                                <div className='sidebar-element'>Categories</div>
                                <div className='sidebar-element'>Tags</div>
                                <div className='sidebar-element'>Featured Image</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}