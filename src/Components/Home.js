
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home () {
    return(
        <Container fluid>
                <header>
                    <h1>CDEV Quizzes</h1>
                    <h2>Test your knowledge!</h2>
                    <p>Choose a category and a quiz to test how much you know.  Or, create your own quiz to challenge others!</p>
                </header>  
            <Row>  
                <Col> 
                    <Card style={{ backgroundColor: 'red' }}>
                        <Nav>
                            <Nav.Link style={{ color: 'black', fontFamily: 'fantasy', fontSize: '30px' }} href="/list">Take A Quiz</Nav.Link>
                        </Nav>
                    </Card> 
                </Col>
                <Col>
                    <Card className="lg-dark text-white">
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/02/09/26/question-mark-2110767_1280.jpg" alt="Card image" />
                        <Card.Text>So many questions!</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ backgroundColor: 'yellow' }}>
                        <Nav>
                            <Nav.Link style={{ color: 'black', fontFamily: 'fantasy', fontSize: '30px' }} href="/create">Create A Quiz</Nav.Link>
                        </Nav>
                    </Card>
                </Col>
            </Row> 
        </Container>
    )
}