import React from 'react'
import AdminLogin from './components/admin/inc/admin-forms/admin-login'
import AdminForgotPassword from './components/admin/inc/admin-forms/admin-re-password'
import AdminRegistration from './components/admin/inc/admin-forms/admin-registration'
import Admin from './components/admin/dashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <AdminLogin />
        <AdminFormLinks />  
      </Router>
    </>  
  );
}

const AdminFormLinks = () => {
  return (
    <Routes>
      <Route exact path='/swt-admin' Component={ <Admin/> }/>
      <Route exact path='/swt-forgot-password' Component={ <AdminForgotPassword/> }/>
      <Route exact path='/swt-registration' Component={ <AdminRegistration/> }/>
    </Routes>
  );
}

export default App;
