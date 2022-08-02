import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


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
    questions: [QUESTION_STATE],
}
var questionsCopy = []
 


export default function UpdateQuiz() {

    //questionIndex is a state which will track the index of the current question 
    //being entered by the user.
    const [questionIndex, setQuestionIndex] = useState(0)
    //question is a state which will track the state of the "current question" based on what is 
    //entered into the form
    const [question, setQuestion] = useState(QUESTION_STATE)
    const [quiz, setQuiz] = useState(INIT_STATE)

    const { id } = useParams()

    //fetch the quiz from the server
    useEffect(() => {
        async function getQuiz() {
            const response = await fetch(`https://cdev-quizzes-server.herokuapp.com/quiz/${id}`)
            const data = await response.json()
            setQuiz(data)
          
            }
            getQuiz()
        }, [])
    //handles changes to the "Title" and "Author" fields
    function handleChangeQuiz(e)
    {
        setQuiz({...quiz, [e.target.name] : e.target.value})
    }
     //when the user clicks the "next question" button
    function handleNextQuestion()
    {

        questionsCopy[questionIndex] = question;
        console.log(questionsCopy)
        setQuiz({...quiz, questions: questionsCopy})
        console.log(quiz)
        setQuestionIndex(questionIndex+1)
    }
    function handlePreviousQuestion()
    {
        if(questionIndex > 0)
        {
        questionsCopy[questionIndex] = question
        console.log(questionsCopy)
        setQuiz({...quiz, questions: questionsCopy})
        console.log(quiz)
        setQuestionIndex(questionIndex-1)
        setQuestion(questionsCopy[questionIndex])
        }
    }
    //handles changes to the Question Text field
    const handleChangeQuestion = (e) => {
        setQuestion({...question, [e.target.name]: e.target.value })
    }
    //handles changes to the answer text fields
    const handleChangeAnswer = (e) => {
        setQuestion({...question, [e.target.name]: {text: e.target.value, isCorrect: [e.target.name] == "answer1"}})

    }


    return(
        <div>
        <div>
            <h1>Update Your Quiz!</h1>
            <form>
                <input onChange ={handleChangeQuiz} required name = "title" type = "text" placeholder = "Quiz Title" value = {quiz.title}></input>
                <input onChange ={handleChangeQuiz}  name = "author" type = "text" placeholder = "Quiz Author (Your name!)" value = {quiz.author}></input>
            <h2>Question {questionIndex +1 } </h2>
            <input onChange={handleChangeQuestion} required name ="questionText" type="text" placeholder="Question Text" value = {quiz.questions[questionIndex].questionText}/>
            <input onChange={handleChangeAnswer} required name ="answer1" type="text" placeholder="Correct Answer" value = {quiz.questions[questionIndex].answer1.text}/>
            <input onChange={handleChangeAnswer} required name ="answer2" type="text" placeholder="Incorrect Answer" value = {quiz.questions[questionIndex].answer2.text}/>
            <input onChange={handleChangeAnswer} required name ="answer3" type="text" placeholder="Incorrect Answer" value = {quiz.questions[questionIndex].answer3.text}/>
            <input onChange={handleChangeAnswer} required name ="answer4" type="text" placeholder="Incorrect Answer" value = {quiz.questions[questionIndex].answer4.text}/>
            </form>
            <button onClick = {handlePreviousQuestion}>
                Previous Question
            </button>
            <button onClick = {handleNextQuestion}>
                Next Question
            </button>
            <button type="submit">
                Submit Quiz!
            </button>
        </div>

        <div>
            <h2>{question.questionText}</h2>
        </div>
        </div>
    )
}
