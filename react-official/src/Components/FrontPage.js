import React from 'react';
import Menu from './Menu';
import Games from './Games/Games';
import SnakeGame from './Games/SnakeGame';
import TicTacToe from './Games/TicTacToe';
import TowerOfHanoi from './Games/TowerOFHanoi';
import About from './About';
import Practice from './Practice';
import Login, { ForgotPassword, RegistrationForm } from './Practices/Login';
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
                    <Route exact path="/" element={ <Home/> }></Route>
                    <Route exact path="/games" element={ <Games/> }></Route>
                    <Route exact path="/about" element={ <About/> }></Route>
                    <Route exact path="/practice" element={ <Practice/> }></Route>
                    <Route exact path="/games/tic-tac-toe" element={ <TicTacToe/> }></Route>
                    <Route exact path="/games/snakegame" element={ <SnakeGame/> }></Route>
                    <Route exact path="/games/tower-of-hanoi" element={ <TowerOfHanoi/> }></Route>
                    <Route exact path="/forgot-password" element={ <ForgotPassword/> }></Route>
                    <Route exact path="/registration-form" element={ <RegistrationForm/> }></Route>
                </Routes>
            </div>
        </>
    );
}