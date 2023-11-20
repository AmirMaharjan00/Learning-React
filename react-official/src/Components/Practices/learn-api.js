import React, { useEffect, useState } from 'react'

export default function LearnApi () {
    const [ data, setData ] = useState([])

    useEffect(() => {
        fetch('http://localhost/api/rest-api.php').then((res) => res.json()).then((data) => setData(data))
    }, [])

    return (
        <>
            <div className='lean-api-wrap'>
                <h2>Here to learn ?</h2>
                <ul className='datas'>
                    { data.map((element, index) => {return <li key={index}>{element.label}</li>})}
                </ul>
            </div>
        </>    
    );
}