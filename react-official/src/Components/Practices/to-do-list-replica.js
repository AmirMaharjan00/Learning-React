import React, { useState, useEffect } from 'react'

export default function ToDoListRep () {
    const [ list, setList ] = useState([])
    const [ newToDo, setNewToDo ] = useState()
    const [ action, setAction ] = useState('all')
    const [ listCount, setListCount ] = useState( list.length )
    const [ filteredValue, setFilteredValue ] = useState( list )
    const [ added, setAdded ] = useState(false)
    const [ showPopup, setShowPopup ] = useState(false)
    const [ searchText, setSearchText ] = useState(null)

    useEffect(() => {
        fetch('http://localhost/api/rest-api.php').then((res) => res.json()).then((data) => setList(data))
    }, [])

    useEffect(() => {
        setFilteredValue(list)
    }, [added])

    const handleTextChange = ( event ) => {
        setNewToDo({
            label: event.target.value,
            active: true,
            completed: false
        })
    }

    const handleOnClick = () => {
        if( newToDo ) {
            setList([
                ...list,
                newToDo
            ])
            setListCount( listCount + 1 )
            setAdded( added ? false : true )
        }
        setAction('all')
        setNewToDo()
    }

    const handleCheckboxChange = ( position ) => {
        let onCheckBoxClickFilter = list.map((element, index) => {
            return ( index == position ? {...element, active: false, completed: true} : element )
        })
        setList( onCheckBoxClickFilter )
    }

    const handleActionClick = ( type ) => {
        setAction( type )
        let filteredList = list.filter((currentValue, index, arr) => {
            if( type == 'all' ) return ( arr )
            if( type == 'active' ) return ( currentValue.active == true )
            if( type == 'completed' ) return ( currentValue.completed == true )
        })
        setFilteredValue(filteredList)
    }

    const handleSearchClick = () => {
        setShowPopup( showPopup ? false : true )
    }

    const handleSearchChange = ( event ) => {
        setSearchText( event.target.value )
        let filterSearch = list.filter((currentValue) => {
            return currentValue.label.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredValue(filterSearch)
    }

    return (
        <>
            <div className='to-do-app-wrap'>
                <h2 className='title'>THINGS TO DO</h2>
                <div className='to-do-body'>
                    <p className='to-do-field text-field'>
                        <input type='text' placeholder='Add New' onChange={ handleTextChange } value={ newToDo?.label || '' }/>
                    </p>
                    { 
                        list.map((element, index) => {
                            return (
                                <p key={index} className='to-do-field checkbox-field'>
                                    <input type='checkbox' onChange={() => handleCheckboxChange(index) } />
                                    <label>{ element.label }</label>
                                </p>    
                            )
                        }) 
                    }
                </div>
                <div className='to-do-footer'>
                    <div className='infos'>
                        <span className='info add' onClick={ handleOnClick }>Add</span>
                        <span className='info search' onClick={ handleSearchClick }>Search</span>
                        <span className='count'>{listCount} items left</span>
                    </div>
                    <div className='actions'>
                        <span className={ action == 'all' ? 'action active': 'action' } onClick={() => handleActionClick('all') }>All</span>
                        <span className={ action == 'active' ? 'action active': 'action' } onClick={() => handleActionClick('active') }>Active</span>
                        <span className={ action == 'completed' ? 'action active': 'action' } onClick={() => handleActionClick('completed') }>Completed</span>
                    </div>
                </div>
                {showPopup && <div className='search-popup'>
                    <input type='text' placeholder='Search ...' value={ searchText || '' } onChange={ handleSearchChange }/>
                </div>}
            </div>
        </>
    );
}