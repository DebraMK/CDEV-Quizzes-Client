import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Quiz() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        async function getQuiz() {
            const response = await fetch(`http://localhost:3001/quiz/${id}`)
            const data = await response.json()
            console.log(data.questions)
            setData(data)
            setQuestions(data.questions)
        }
        getQuiz()
    }, [])
    const questionsArray = questions && questions.map(question => {
        return(
            <div>
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
    const display = data && (
        <div>
            <h1>{data.title}</h1>
            <h3>Quiz by: {data.author}</h3>
            {questionsArray}
        </div>
    )
    return (
        <div> 
            {display}
            <Button href="/" variant="primary">Return to Homepage</Button>
        </div>
    )
}