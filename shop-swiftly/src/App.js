import React from 'react'
import Sidebar from './sidebar'
import './main.css'
import Posts from './posts'
import Media from './media'
import Pages from './pages'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='swt-dashboard' id='swt-dashboard'>
          <Sidebar/>
          <Links/>
        </div>
      </Router>
    </>  
  );
}

const Links = () => {
  return (
    <Routes>
      <Route exact path='/posts' element={ <Posts/> }></Route>
      <Route exact path='/media' element={ <Media/> }></Route>
      <Route exact path='/pages' element={ <Pages/> }></Route>
    </Routes>
  );
}

export default App;
