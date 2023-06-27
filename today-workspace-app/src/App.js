import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function FamiologyHeaderBehindWall(){
  
  return(
    <>
  <div class="container-fluid ">
    <div class="row bg-dark text-white ">
  
      <div class="col-4">
          <span class="display-5"> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,1,0" />
            <span class="material-symbols-sharp">diversity_2</span> 
            Famiology 
          </span>
          <br/>
          <span class="display-7"> A different approach to the idea of Family Office..</span>
      </div>
      <div class="col-6 ">
            <span class="display-5">
              <Button variant="dark" size="lg" active>Today</Button>{' | '}
              <Button variant="dark" size="lg">Future</Button>
            </span>
      </div>
      <div class="col-2">
          <span class="display-6 align-bottom">
          <i class="bi bi-person-square align-middle"></i>
          </span>
          <br/>
          Dave Cohn
      

      </div>
    </div>
  </div>

   
  </>
  );
}


function TodayWorkSpaceSideVanila(){
  
  return(
    <>
    

    <style type="text/css">
            {`
        .famioloyStyledCardTitle{
          background-color: black;
          color: white;
          padding: 0.2rem;
          font-size: 1.5rem;
          font-weight:normal;
        }
        
        `}
    </style>


  
   <Card style={{ width: '20rem'}}>
      <Card.Body class="p-1">
        <Card.Title bsPrefix="famioloyStyledCardTitle">
            <i class="bi bi-safe"></i> Manage
        </Card.Title>
        <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                          <Container>
                            <Row>
                              <Col>
                              <h6 class="text-muted">
                              Family members
                              </h6>
                              </Col>
                              <Col>
                                  <Button variant="secondary" size="md">
                                      <i class="bi bi-person-add"/> {''}
                                      <i class="bi bi-arrow-right"></i>
                                  </Button>
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                  <ListGroup.Item>
                          <Container>
                            <Row>
                              <Col>
                              <h6 class="text-muted">
                              E-vault sections
                              </h6>
                              </Col>
                              <Col>
                                  <Button variant="secondary" size="md">
                                      <i class="bi bi-box-seam"></i> {''}
                                      <i class="bi bi-arrow-right"></i>
                                  </Button>
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                  
                </ListGroup>
      </Card.Body>
      
      
    </Card>

    <Card style={{ width: '20rem'}}>
      <Card.Body class="p-1">
        <Card.Title bsPrefix="famioloyStyledCardTitle">
        <i class="bi bi-gear"></i> Settings
          </Card.Title>
          <ListGroup className="list-group-flush">
                <ListGroup.Item>
                          <Container>
                            <Row>
                              <Col>
                              <h6 class="text-muted">
                              Account
                              </h6>
                              </Col>
                              <Col>
                                  <Button variant="secondary" size="md">
                                      <i class="bi bi-diagram-3"></i> {''}
                                      <i class="bi bi-arrow-right"></i>
                                  </Button>
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                  <ListGroup.Item>
                          <Container>
                            <Row>
                              <Col>
                              <h6 class="text-muted">
                              Provider Integration
                              </h6>
                              </Col>
                              <Col>
                                  <Button variant="secondary" size="md">
                                      <i class="bi bi-plugin"></i> {''}
                                      <i class="bi bi-arrow-right"></i>
                                  </Button>
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                  <ListGroup.Item>
                          <Container>
                            <Row>
                              <Col>
                              <h6 class="text-muted">
                              Configure AI-Assistants
                              </h6>
                              </Col>
                              <Col>
                                  <Button variant="secondary" size="md">
                                  <i class="bi bi-robot"></i> {''}
                                      <i class="bi bi-arrow-right"></i>
                                  </Button>
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                                   
                </ListGroup>
      </Card.Body>
      
    </Card>
  
    </>
  );
}

function TodayWorkSpaceWorkingArea(){
  
  return(
    <>
      <style type="text/css">
            {`
        .workSpaceBodyStyledCardTitle{
                    background-color:#ced4da;
                    color: #000;
                    padding: 0.2rem;
                    font-size: 1.5rem;
                    font-weight:normal;
              }
        
        `}
    </style>

    <Card >
      <Card.Body class="m-2">
        <Card.Title bsPrefix="workSpaceBodyStyledCardTitle">
        <i class="bi bi-people-fill"></i> Summary 
        </Card.Title>
        <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                          <h2> Parents </h2>
                          <Container>
                            <Row>
                              <Col>
                                  <Card style={{ width: '18rem' }}>
                                  
                                  <Card.Body>
                                    <h1> 
                                      <i class="bi bi-person-bounding-box"></i> {'   '}
                                      <i class="bi bi-gender-male"></i> 
                                    </h1>
                                  <Card.Title>Dave Cohn</Card.Title>
                                  <Card.Text>
                                  Some descriptive text---about the person's person hobby, where he/she may work or anything important worth putting up in description
                                  </Card.Text>
                                  
                                  <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    <i class="bi bi-safe"></i> Enter Dave's e-vault
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <i class="bi bi-box-seam"></i>  Real-Estate
                                        </Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">
                                        <i class="bi bi-box-seam"></i>  401K
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">
                                      <i class="bi bi-box-seam"></i>  HSA
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">
                                      <i class="bi bi-box-seam"></i>  Will & Health PoA
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>

                                  </Card.Body>
                              </Card>
                                  
                              </Col>

                              <Col>
                                  <Card style={{ width: '18rem' }}>
                                  
                                  <Card.Body>
                                    <h1> 
                                      <i class="bi bi-person-bounding-box"></i> {'   '}
                                      <i class="bi bi-gender-female"></i> 
                                    </h1>
                                  <Card.Title>Katie Cohn</Card.Title>
                                  <Card.Text>
                                  Some descriptive text---about the person's person hobby, where he/she may work or anything important worth putting up in description
                                  </Card.Text>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    <i class="bi bi-safe"></i> Enter Katie's e-vault
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        <i class="bi bi-box-seam"></i>  Real-Estate
                                        </Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">
                                        <i class="bi bi-box-seam"></i>  401K
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">
                                      <i class="bi bi-box-seam"></i>  HSA
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">
                                      <i class="bi bi-box-seam"></i>  Will & Health PoA
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  </Card.Body>
                              </Card>
                                  
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <h4> Children </h4>
                          <Container>
                            <Row>
                              <Col>
                                  <Card style={{ width: '18rem' }}>
                                  
                                  <Card.Body>
                                    <h1> 
                                    <i class="bi bi-file-person"></i> {'   '}
                                      <i class="bi bi-gender-male"></i> 
                                    </h1>
                                  <Card.Title>Josh Cohn</Card.Title>
                                  <Card.Text>
                                  Some descriptive text---about the person's person hobby, where he/she may work or anything important worth putting up in description
                                  </Card.Text>
                                  <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    <i class="bi bi-safe"></i> Enter Josh's e-vault
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-3">
                                      <i class="bi bi-box-seam"></i>  529-Plan Account
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  </Card.Body>
                              </Card>
                                  
                              </Col>

                              <Col>
                                  <Card style={{ width: '18rem' }}>
                                  
                                  <Card.Body>
                                    <h1> 
                                    <i class="bi bi-file-person"></i> {'   '}
                                      <i class="bi bi-gender-female"></i> 
                                    </h1>
                                  <Card.Title>Maddie Cohn</Card.Title>
                                  <Card.Text>
                                    Some descriptive text---about the person's person hobby, where he/she may work or anything important worth putting up in description
                                  </Card.Text>
                                  <Button variant="secondary" size="md">
                                  <i class="bi bi-safe"></i> Enter
                                  </Button>
                                  </Card.Body>
                              </Card>
                                  
                              </Col>
                            </Row>
                          </Container>
                  </ListGroup.Item>
                  
                </ListGroup>
      </Card.Body>
      </Card>
    </>
  );
}

function FamiologyWorkSpaceBody(){
  return(
  <>
  <div class="container-fluid">
    <div class="row">
     <div class="col-2 p-1"> 
          <TodayWorkSpaceSideVanila/>
      </div>
      <div class="col-10"> 
          <TodayWorkSpaceWorkingArea/>
      </div>
    </div>  
  </div>
  </>
  );
}



function App() {
  return (

      <div>
      <FamiologyHeaderBehindWall/>
      <FamiologyWorkSpaceBody/>
      </div>
  
  );
}


export default App;
