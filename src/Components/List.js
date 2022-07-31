import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export default function List () {
    const [data, setData] = useState([])  

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://cdev-quizzes-server.herokuapp.com/quiz/all')
            console.log(response)
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    const display = data && data.map(quiz => {
        return (
            <Nav.Item key={quiz._id}>
                <Nav.Link href={`/quiz/${quiz._id}`} >{quiz.title}</Nav.Link>
            </Nav.Item>
        )
    }) 

    return(
        <div className="homepage">
                <header>
                    <h1>Choose a Quiz</h1>
                    <Button href="/" variant="primary">Return to Homepage</Button>
                    <Nav>
                        {display}
                        {/* <Nav.Item>
                            <Nav.Link href="#">Quiz 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Quiz 2</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </header>
        </div>
    )
}
