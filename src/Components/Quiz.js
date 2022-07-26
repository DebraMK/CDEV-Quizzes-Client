import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function Quiz () {
    return(
        <div className="homepage">
                <header>
                    <h1>Choose a Quiz</h1>
                    <Button variant="primary">Return to Homepage</Button>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/">Quiz 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Quiz 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
        </div>
    )
}
