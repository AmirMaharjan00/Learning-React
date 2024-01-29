import React, { useState } from 'react'

export default function Editor( { editorClose } ) {
    const [ formInfo, setFormInfo ] = useState({})

    // handle form submit
    const handleFormSubmit = () => {

    }
    
    return (
        <>
            <div className='swt-admin-editor' id='swt-admin-editor'>
                <form onSubmit={ handleFormSubmit } >
                    <div className='editor-area'>
                        <div className='editor-main'>
                            Editor Area
                        </div>
                        <div className='editor-sidebar'>
                            Editor Sidebar
                        </div>
                    </div>
                </form>
                <span className='editor-close' onClick={ () => { editorClose() } }>X</span>
            </div>
        </>
    );
}