import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import '../CSS/List.css'


const ANSWER_STATE = {
    text: '',
    isCorrect: false,
}
const QUESTION_STATE = {
    questionText: '',
    answer1: ANSWER_STATE,
    answer2: ANSWER_STATE,
    answer3: ANSWER_STATE,
    answer4: ANSWER_STATE,
}

const INIT_STATE = {
    title: '',
    author: '',
    questions: [{}],
}

const questionsCopy = []


export default function NewQuizForm2() {

    //questionIndex is a state which will track the index of the current question 
    //being entered by the user.
    const [questionIndex, setQuestionIndex] = useState(0)
    //question is a state which will track the state of the "current question" based on what is 
    //entered into the form
    const [question, setQuestion] = useState(QUESTION_STATE)
    const [quiz, setQuiz] = useState(INIT_STATE)
    const navigate = useNavigate()
    const [data, setData] = useState()
   
    //handles changes to the "Title" and "Author" fields
    function handleChangeQuiz(e)
    {
        setQuiz({...quiz, [e.target.name] : e.target.value})
    }
     //when the user clicks the "next question" button
    function handleNextQuestion()
    {
        questionsCopy[questionIndex] = question
        console.log(questionsCopy)
        setQuiz({...quiz, questions: questionsCopy})
        console.log(quiz)
        setQuestion(QUESTION_STATE)
        setQuestionIndex(questionIndex+1)
    }
    //handles changes to the Question Text field
    const handleChangeQuestion = (e) => {
        setQuestion({...question, [e.target.name]: e.target.value })
    }
    //handles changes to the answer text fields
    const handleChangeAnswer = (e) => {
        setQuestion({...question, [e.target.name]: {text: e.target.value, isCorrect: [e.target.name] == "answer1"}})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        questionsCopy[questionIndex] = question
        console.log(questionsCopy)
        setQuiz({...quiz, questions: questionsCopy})

        const response = await fetch('https://cdev-quizzes-server.herokuapp.com/quiz', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':  'application/json'
            },
            body: JSON.stringify(quiz)
        })
        if (response.status !== 201) {
           console.log("ERROR")
        } else {
            navigate('/', {replace: true })
        }
    }

    return(
        <div>
        <div className="homepage background textColor">
            <h1>Create a New Quiz!</h1>
            <form onSubmit = {handleSubmit}>
                <input onChange ={handleChangeQuiz} required name = "title" type = "text" placeholder = "Quiz Title" value = {quiz.title}></input>
                <input onChange ={handleChangeQuiz}  name = "author" type = "text" placeholder = "Quiz Author (Your name!)" value = {quiz.author}></input>
            <br></br>
            <br></br>
            <h2>Question {questionIndex +1 } </h2>
            <input onChange={handleChangeQuestion} required name ="questionText" type="text" placeholder="Question Text" value = {question.questionText}/>
            <br></br>
            <input onChange={handleChangeAnswer} required name ="answer1" type="text" placeholder="Correct Answer" value = {question.answer1.text}/>
            <input onChange={handleChangeAnswer} required name ="answer2" type="text" placeholder="Incorrect Answer" value = {question.answer2.text}/>
            <input onChange={handleChangeAnswer} required name ="answer3" type="text" placeholder="Incorrect Answer" value = {question.answer3.text}/>
            <input onChange={handleChangeAnswer} required name ="answer4" type="text" placeholder="Incorrect Answer" value = {question.answer4.text}/>
            <div>
            <button onClick = {handleNextQuestion}>
                Next Question
            </button>
            <button type="submit">
                Submit Quiz!
            </button>
            </div>
            </form>
        </div>

        <div>
            <h2>{question.questionText}</h2>
        </div>
        </div>
    )
}
