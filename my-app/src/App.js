import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { createClient } from 'pexels';
// import { createClient } from 'pexels';
// const client = createClient('563492ad6f917000010000016200d3e5129840fca6b3a85a401c83ff');


function App() {
  return (
    <div className="App" style={{backgroundColor: 'rgb(40, 44, 52)'}}>
        <Container fluid>
          <Row>
            <Col sm={12} md={8} lg={8} className='mt-5 mb-5'>
              <Card>
                <Card.Body style={{color: 'gray'}}>
                  <Container>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <h1 style={{color: "gray", fontSize: '30px'}}>Crea tu sitio de gestion de enlaces</h1>
                        <p className='float-left'>Selecciona un fondo para tu gestionador</p>
                        <input 
                          className='form-control'
                          type="text" 
                          placeholder='Busca un fondo para tu gestionador'
                          onChange={(e)=>{
                            console.log(e.target);
                          }}
                          />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
