import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Quiz() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [questions, setQuestions] = useState([])

    const [maxScore, setMaxScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)
    const [showScore, setShowScore] = useState(true)

    //determine score and then set currentScore to it
    function figureScore(){
        let score = 0
        for (let i = 0; i < maxScore; i++){
            let correct = false
            let answers = document.querySelectorAll(`#question${i} input[type=checkbox]`)
            for (let i = 0; i < answers.length; i++){
                let checked = answers[i].checked.toString()
                if (answers[i].value === checked) {
                    correct = true
                } else {
                    correct = false
                    break
                }
            }
            if (correct) {
                score++
            }
        }
        setCurrentScore(score)
    }

    const submitQuiz = (e) => {
        // setShowScore(!showScore)
        figureScore()
    }

    //fetch request for quiz data
    useEffect(() => {
        async function getQuiz() {
            const response = await fetch(`https://cdev-quizzes-server.herokuapp.com/quiz/${id}`)
            const data = await response.json()
            console.log(data.questions)
            setData(data)
            setQuestions(data.questions)
            setMaxScore(data.questions.length)
        }
        getQuiz()
    }, [])

    //generate question array out of questions data
    const questionsArray = questions && questions.map((question, i) => {
        return(
            <div id={`question${i}`}>
                <h6>{question.questionText}</h6>
                <ul>
                <li>{question.answer1.text}<input type="checkbox" value={question.answer1.isCorrect}/></li>
                <li>{question.answer2.text}<input type="checkbox" value={question.answer2.isCorrect}/></li>
                <li>{question.answer3.text}<input type="checkbox" value={question.answer3.isCorrect}/></li>
                <li>{question.answer4.text}<input type="checkbox" value={question.answer4.isCorrect}/></li>
                </ul>
            </div>
        )
    })

    //construct main display
    const display = data && (
        <div>
            <h1>{data.title}</h1>
            <h3>Quiz by: {data.author}</h3>
            <p>Please check the box next to each correct answer, then press the Submit Quiz button.</p>
            {questionsArray}
        </div>
    )

    
    return (
        <div> 
            {display}
            <br></br>
            <div>
                <Button onClick={submitQuiz}>Submit Quiz</Button>
                {showScore?<h3 id="score">{currentScore} / {maxScore} = {parseFloat((currentScore/maxScore)*100).toFixed(2)}%</h3>:null}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Button href="/" variant="primary">Return to Homepage</Button>
            <Button href="#" variant="warning">Edit Quiz</Button>
            <Button href="#" variant="danger">Delete Quiz</Button>
        </div>
    )
}