import React from 'react'
import Dashboard from './components/admin/dashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Dashboard/>
          <Links/>
      </Router>
    </>  
  );
}

const Links = () => {
  return (
    <Routes>
      
    </Routes>
  );
}

export default App;
