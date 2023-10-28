import React from 'react'
import Astronaut from '../Assets/astronaut.jpg'

export default function Home () {
    return (
        <>
            <div className='portfolio'>
                <div className='introduction'>
                    <h2 className='greetings'>Hello</h2>
                    <h2 className='intro'>I am Amir Maharjan</h2>
                    <span className='profession'>I am a Web Developer</span>
                </div>
                <figure className='portfolio-thumb'>
                    <img src={Astronaut} />
                </figure>
            </div>
        </>
    );
}