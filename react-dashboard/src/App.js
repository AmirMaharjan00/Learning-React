import React from 'react'
import Header from './components/header/header';
import Aside from './components/aside/aside';
import Main from './components/main/main';

function App() {
  return (
    <>
      <div className='amj-dashboard'>
        <Header />
        <div className='body'>
          <Aside />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
