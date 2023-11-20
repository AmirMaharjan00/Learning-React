import React from 'react';
import Menu from './Menu';
import Games from './Games/Games';
import SnakeGame from './Games/SnakeGame';
import TicTacToe from './Games/TicTacToe';
import TowerOfHanoi from './Games/TowerOFHanoi';
import Test from './Games/test';
import About from './About';
import Practice from './Practice';
import Login, { ForgotPassword, RegistrationForm } from './Practices/Login';
import Calculator from './Practices/Calculator';
import ToDoList from './Practices/to-do-list';
import ToDoListReplica from './Practices/to-do-list-replica';
import Snapshot from './Practices/snapshot';
import LearnApi from './Practices/learn-api';
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
                    <Route exact path="/games/test" element={ <Test/> }></Route>
                    <Route exact path="/forgot-password" element={ <ForgotPassword/> }></Route>
                    <Route exact path="/registration-form" element={ <RegistrationForm/> }></Route>
                    <Route exact path="/practices/login" element={ <Login/> }></Route>
                    <Route exact path="/practices/calculator" element={ <Calculator/> }></Route>
                    <Route exact path="/Practices/to-do-list" element={ <ToDoList/> }></Route>
                    <Route exact path="/Practices/snapshot" element={ <Snapshot /> }></Route>
                    <Route exact path="/Practices/learn-api" element={ <LearnApi /> }></Route>
                    <Route exact path="/Practices/to-do-list-replica" element={ <ToDoListReplica /> }></Route>
                </Routes>
            </div>
        </>
    );
}