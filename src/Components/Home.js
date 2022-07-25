// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Home () {
    return(
        <div className="homepage">
                <header>
                    <h1>CDEV Quizzes</h1>
                    <h2>Test your knowledge!</h2>
                    <p>Choose a category and a quiz to text how much you know.  Or, create your own quiz to challenge others!</p>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/quiz">Take A Quiz</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/create">Create A Quiz</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
        </div>
    )
}