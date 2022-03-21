import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <body>
        <Container className="App-header" fluid>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Card>
                <Card.Body>
                  <h1>Hello</h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
