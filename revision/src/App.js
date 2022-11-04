
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TestJSX from './JS/TestJSX';
import Navbar from './JS/Navbar';
import Condition from './JS/Condition';
import AffichageBoucle from './JS/AffichageBoucle'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
      <Navbar />
      <Routes>
        <Route path='/TestJSX' element={<TestJSX />}></Route>
        <Route path='/Condition' element={<Condition />}></Route>
        <Route path='/AffichageBoucle' element={<AffichageBoucle />}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
