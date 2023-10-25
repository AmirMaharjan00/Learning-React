import React from 'react'
import SnakeGameImage from '../../Assets/snake-game.jpg'
import TicTacToeImage from '../../Assets/tic-tac-toe.png'
import TowerOfHanoiImage from '../../Assets/tower-of-hanoi.jpg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Games () {
    return (
        <>
            <div className='games'>
                <figure className='game-thumb-wrap'> 
                    <img src={ TicTacToeImage } className="game-thumb" />
                    <Link to='/games/tic-tac-toe' className='play-label'>Play</Link>
                </figure>
                <figure className='game-thumb-wrap'> 
                    <img src={ SnakeGameImage } className="game-thumb" />
                    <Link to='/games/snakegame' className='play-label'>Play</Link>
                </figure>
                <figure className='game-thumb-wrap'> 
                    <img src={ TowerOfHanoiImage } className="game-thumb" />
                    <Link to='/games/tower-of-hanoi' className='play-label'>Play</Link>
                </figure>
            </div>
        </>
    );
}