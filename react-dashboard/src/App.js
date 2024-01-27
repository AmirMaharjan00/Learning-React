import React from 'react'
import AdminLogin from './components/admin-login'
import AdminForgotPassword from './components/admin-re-password'
import AdminRegistration from './components/admin-registration'
import './components/main.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path='/swt-login' Component={ AdminLogin }></Route>
            <Route exact path='/swt-registration' Component={ AdminRegistration }></Route>
            <Route exact path='/swt-forgot-password' Component={ AdminForgotPassword }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
