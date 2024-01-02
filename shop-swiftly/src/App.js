import React from 'react'
import Dashboard from './components/backend/dashboard';
import Posts from './components/backend/posts'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Dashboard />
      </Router>
    </>  
  );
}

const Links = () => {
  return (
    <Routes>
      <Route exact path="/posts" element={ <Posts/> }></Route>
    </Routes>
  );
}

export default App;
