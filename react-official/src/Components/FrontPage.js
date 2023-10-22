import React from 'react';
import Menu from './Menu';
import Games, { TicTacToe, SnakeGame } from './Games';
import About from './About';
import Practice from './Practice';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function FrontPage () {
    return (
        <>
            <Router>
                <Menu/>
                <Content/>
            </Router>
        </>
    );
}

export const Content = () => {
    return (
        <>
            <div className='root-body'>
                <Routes>
                    <Route exact path="/home" element={ <Home/> }></Route>
                    <Route exact path="/games" element={ <Games/> }></Route>
                    <Route exact path="/about" element={ <About/> }></Route>
                    <Route exact path="/practice" element={ <Practice/> }></Route>
                    <Route exact path="/games/tic-tac-toe" element={ <TicTacToe/> }></Route>
                    <Route exact path="/games/snakegame" element={ <SnakeGame/> }></Route>
                </Routes>
            </div>
        </>
    );
}