import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import Create from './Components/Create';
import Quiz from './Components/Quiz';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/quiz' element={<Quiz />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
