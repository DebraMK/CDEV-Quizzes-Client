import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Quiz() {
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        async function getQuiz() {
            const response = await fetch(`http://localhost:3001/quiz/${id}`)
            const data = await response.json()
            console.log(data.questions[0].answer1.text)
            setData(data)
        }
        getQuiz()
    }, [])
    // const questionsArray = data.questions.map(question => {
    //     return(
    //     <p>{question.questionText}</p>    
    //     )
    // }) 
    console.log(data.questions)
    const display = data && (
        <div>
            <h1>{data.title}</h1>
            <h3>Quiz by: {data.author}</h3>
           {/* {questionsArray} */}
        </div>
    )
    return (
        <div> 
            {display}
        </div>
    )
}