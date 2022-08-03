import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

import '../CSS/List.css'

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
            <Container fluid>
                <Row>
                    <Col>
                        <Nav.Item key={quiz._id}>
                            <Nav.Link href={`/quiz/${quiz._id}`} >{quiz.title}</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>
            </Container>
        )
    })

    return(
        <div className="homepage background textColor">
                <header>
                    <h1 >Choose Your Challenge</h1>
                    <Nav className='list'>
                        {display}
                    </Nav>
                    <Button href="/" variant="primary">Return to Homepage</Button>
                </header>
        </div>
    )
}
