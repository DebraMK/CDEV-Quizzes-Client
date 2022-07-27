import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import Create from './Components/Create';
import List from './Components/List';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/list' element={<List />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
