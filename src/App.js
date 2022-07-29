import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import NewQuizForm from './Components/NewQuizForm';
import List from './Components/List';
import Quiz from './Components/Quiz';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/create' element={<NewQuizForm />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/quiz/:id' element={<Quiz />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
