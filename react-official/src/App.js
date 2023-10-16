import './App.css';
import Menu from './Components/Menu';
import Games from './Components/Games';
import Practices from './Components/Practices';

function App() {
  return (
    <>
      <Menu/>
      <div className="custom-body">
        <Games/>
        <Practices/>
      </div>
    </>
  );
}

export default App;
