import React, { useState, useEffect } from 'react'

export default function Snapshot () {
    const [ activeCategory, setActiveCategory ] = useState('mountains')
    const [ searchText, setSearchText ] = useState(null)

    useEffect(() => {
        // console.log( activeCategory )
    }, [activeCategory] )

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            <div className='snapshot-wrap'>
                <h2 className='title'>Snapshot</h2>
                <div className='snapshot-inner'>
                    <p className='search-bar'>
                        <input type='text' placeholder='Search ...' onChange={(event) => handleSearchChange(event) } value={ searchText || '' }/>
                    </p>
                    <div className='gallery-categories'>
                        <span className={ activeCategory == 'mountains' ? 'category isactive': 'category' } onClick={() => setActiveCategory('mountains')}>Mountains</span>
                        <span className={ activeCategory == 'cities' ? 'category isactive': 'category' } onClick={() => setActiveCategory('cities')}>Cities</span>
                        <span className={ activeCategory == 'birds' ? 'category isactive': 'category' } onClick={() => setActiveCategory('birds')}>Birds</span>
                        <span className={ activeCategory == 'friction' ? 'category isactive': 'category' } onClick={() => setActiveCategory('friction')}>Friction</span>
                    </div>
                    <div className='gallery-elements'>
                        <span className='galley-item'>A</span>
                        <span className='galley-item'>B</span>
                        <span className='galley-item'>C</span>
                        <span className='galley-item'>D</span>
                    </div>
                </div>
            </div>
        </>
    );
}