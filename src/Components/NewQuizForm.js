import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const INIT_STATE = {
    title: '',
    author: '',
    questions: [],
}
const QUESTION_STATE = {
    questionText: '',
    answer1: {},
    answer2: {},
    answer3: {},
    answer4: {},
}

const ANSWER_STATE = {
    text: '',
    isCorrect: false
}

export default function NewQuizForm() {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [data, setData] = useState(INIT_STATE)
    const [question, setQuestion] = useState(QUESTION_STATE)
    const [answer, setAnswer] = useState(ANSWER_STATE)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.title = String(data.title)
        data.author = String(data.author)
        // data.questions[0] = data.questions[0]
        data.questions[0].answer1.isCorrect = true
        data.questions[0].answer2.isCorrect = false
        data.questions[0].answer3.isCorrect = false
        data.questions[0].answer4.isCorrect = false

        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':  'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.status !== 201) {
            // handle error here
        } else {
            navigate('/', {replace: true })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} required name="title" placeholder="quiz title" value={data.title}/>
            <input onChange={handleChange} required name="author" type="text" placeholder="quiz author" value={data.author}/>
            <input onChange={handleChange} required name="Question 1" placeholder="Question 1" value={data.questions[0].questionText}/>
            <input onChange={handleChange} required name="Correct Answer" placeholder="Correct Answer" value={data.questions[0].answer1.text}/>
            <input onChange={handleChange} required name="Incorrect Answer" placeholder="Incorrect Answer" value={data.questions[0].answer2.text}/>
            <input onChange={handleChange} required name="Incorrect Answer" placeholder="Incorrect Answer" value={data.questions[0].answer3.text}/>
            <input onChange={handleChange} required name="Incorrect Answer" placeholder="Incorrect Answer" value={data.questions[0].answer4.text}/>
            <button type="Submit">Submit</button>
        </form>
    )
}