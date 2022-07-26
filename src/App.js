import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home';
import NewQuizForm from './Components/NewQuizForm2';
import List from './Components/List';
import Quiz from './Components/Quiz';
import UpdateQuiz from './Components/UpdateQuiz';

import './CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NewQuizForm from './Components/NewQuizForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/create' element={<NewQuizForm />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/quiz/:id' element={<Quiz />}/>
        <Route path='/quiz/update/:id' element={<UpdateQuiz />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
