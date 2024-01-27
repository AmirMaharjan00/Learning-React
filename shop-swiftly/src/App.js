import React from 'react'
import AdminLogin from './components/admin/inc/admin-forms/admin-login'
import AdminForgotPassword from './components/admin/inc/admin-forms/admin-re-password'
import AdminRegistration from './components/admin/inc/admin-forms/admin-registration'
import Admin from './components/admin/dashboard'
import {Dashboard} from './components/admin/dashboard'
import Media from './components/admin/media'
import Pages from './components/admin/pages'
import Products from './components/admin/products'
import Settings from './components/admin/settings'
import Users from './components/admin/users'
import ErrorPage from './components/error-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <AdminFormLinks />
        {/* <ErrorPage/> */}
      </Router>
    </>  
  );
}

const AdminFormLinks = () => {
  return (
    <Routes>
      <Route exact path='/swt-admin' Component={ Admin }>
        <Route exact path='/swt-admin' Component={ Dashboard }/>
        <Route exact path='/swt-admin/pages' Component={ Pages }/>
        <Route exact path='/swt-admin/media' Component={ Media }/>
        <Route exact path='/swt-admin/products' Component={ Products }/>
        <Route exact path='/swt-admin/settings' Component={ Settings }/>
        <Route exact path='/swt-admin/users' Component={ Users }/>
      </Route>
      <Route exact path='/swt-admin/login' Component={ AdminLogin }/>
      <Route exact path='/swt-admin/swt-forgot-password' Component={ AdminForgotPassword }/>
      <Route exact path='/swt-admin/swt-registration' Component={ AdminRegistration }/>
      <Route path='*' Component={ ErrorPage } />
    </Routes>
  );
}

export default App;
