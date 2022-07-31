
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home () {
    return(
        <Container style={{ fontFamily: 'fantasy' }}>
                <header>
                    <h1>CDEV Quizzes</h1>
                    <h2>Test your knowledge!</h2>
                    <p>Click on Take A Quiz and choose your challenge.  Or click on Create A Quiz to add your own challenge for others!</p>
                </header>  
            <Row>  
                <Col> 
                    <Card style={{ height: 220, backgroundColor: 'red', alignItems: 'center' }}>
                        <Nav>
                            <Nav.Link style={{ color: 'black', fontFamily: 'fantasy', fontSize: '30px' }} href="/list">Take A Quiz</Nav.Link>
                        </Nav>
                        <Card.Img variant="bottom" src="https://cdn.pixabay.com/photo/2020/09/23/07/53/quiz-5595288__340.jpg" />
                    </Card> 
                    
                </Col>
                <Col>
                    <Card style={{ height: 220, backgroundColor: 'palegreen', fontFamily: 'fantasy', fontSize: '20px' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/02/09/26/question-mark-2110767_1280.jpg" alt="Card image" />
                        <Card.Text>So many questions!</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ height: 220, backgroundColor: 'yellow', alignItems: 'center' }}>
                        <Nav>
                            <Nav.Link style={{ color: 'black', fontFamily: 'fantasy', fontSize: '30px' }} href="/create">Create A Quiz</Nav.Link>
                        </Nav>
                        <Card.Img variant="bottom" src="https://cdn.pixabay.com/photo/2021/03/16/11/31/pencils-6099511_960_720.jpg" />
                    </Card>
                </Col>
            </Row> 
        </Container>
    )
}