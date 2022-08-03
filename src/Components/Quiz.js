import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Quiz() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [questions, setQuestions] = useState([])

    const [maxScore, setMaxScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

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
    
    //reset all checkboxes to unchecked
    function resetCheckboxes() {
        let checkboxes = document.querySelectorAll("input[type=checkbox]")
        for (let i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = false
        }
        setCurrentScore(0)
    }

    //randomize 1 through 4
    function randomAnswers(){
        const array = [1, 2, 3, 4];
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
        // console.log(shuffledArray)
        return shuffledArray
    }

    const submitQuiz = (e) => {
        setShowScore(true)
        figureScore()
    }

    const resetQuiz = (e) => {
        setShowScore(false)
        resetCheckboxes()
    }

    const editQuiz = (e) => {

    }

    const deleteQuiz = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://cdev-quizzes-server.herokuapp.com/quiz/${id}`, {
            method: 'DELETE'
        })
        if (response.status !== 200) {
            console.log(response.status)
        } else {
            navigate('/', {replace: true})
        }
    }

    //fetch request for quiz data
    useEffect(() => {
        async function getQuiz() {
            const response = await fetch(`https://cdev-quizzes-server.herokuapp.com/quiz/${id}`)
            const data = await response.json()
            setData(data)
            setQuestions(data.questions)
            setMaxScore(data.questions.length)
        }
        getQuiz()
    }, [])

    //generate question array out of questions data
    const questionsArray = questions && questions.map((question, i) => {
        let answerArray = randomAnswers()
        return(
            <div id={`question${i}`}>
                <h6>{question.questionText}</h6>
                <ul>
                <li>{question[`answer${answerArray[0]}`].text}<input type="checkbox" value={question[`answer${answerArray[0]}`].isCorrect}/></li>
                <li>{question[`answer${answerArray[1]}`].text}<input type="checkbox" value={question[`answer${answerArray[1]}`].isCorrect}/></li>
                <li>{question[`answer${answerArray[2]}`].text}<input type="checkbox" value={question[`answer${answerArray[2]}`].isCorrect}/></li>
                <li>{question[`answer${answerArray[3]}`].text}<input type="checkbox" value={question[`answer${answerArray[3]}`].isCorrect}/></li>
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

    //TODO need to link edit page
    return (
        <div> 
            {display}
            <br></br>
            <div>
                <Button id="submit" onClick={submitQuiz}>Submit Quiz</Button>
                <Button id="reset" onClick={resetQuiz}>Reset Quiz</Button>
                {showScore?<h3 id="score">{currentScore} / {maxScore} = {parseFloat((currentScore/maxScore)*100).toFixed(2)}%</h3>:null}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Button href="/" variant="primary">Return to Homepage</Button>
            <Button href={`/quiz/update/${id}`} variant="warning">Edit Quiz</Button>
            <Button onClick={deleteQuiz} variant="danger">Delete Quiz</Button>
        </div>
    )
}