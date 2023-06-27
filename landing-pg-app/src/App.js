import splash from './imgs/Splash.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function FeatureCards() {
  return (

    
    <Container fluid >

    <style type="text/css">
                {`
            .famioloyStyledCardTitle{
              background-color: black;
              color: white;
              padding: 0.5rem;
              font-size: 1.5rem;
              font-weight:normal;
            }
            
            `}
      </style>


      <Row> 
        <Col>
              <Card bg="light" style={{ height: '20rem' }} >
                        <Card.Body>
                          <Card.Title bsPrefix="famioloyStyledCardTitle" >Affordable</Card.Title>
                          <Card.Subtitle className="mb-2">Using scale of modern technology</Card.Subtitle>
                          <Card.Text>
                          <p>You don't have to be a $50M and greater house-hold to own the benefits of Family Office. Famiology has used power of AI & Cloud scale technologies to build Family-Office-as Service offering that provide some of same services enjoyed by only Ultra rich.</p>
                          </Card.Text>
                          
                          <Button  variant="dark">Learn More</Button>
                          
                        </Card.Body>
              </Card>
        </Col>
        <Col>
              <Card bg="light" style={{ height: '20rem' }}>
                        <Card.Body>
                          <Card.Title bsPrefix="famioloyStyledCardTitle" >Multiple Integrations</Card.Title>
                          <Card.Subtitle className="mb-2">We are integrated with many providers</Card.Subtitle>
                          <Card.Text>
                          <p>Famiology recognizes you are t`ired of on-boarding and sharing same private data across multiple providers when managing your life events.Famiology has kept the Family Household at the center and flipped the discovery and service from Providers up-side-down. 
                          So you don't register into various Provider portals and lock-boxes even when you are still shopping for best Providers. Instead, invite Providers to your familiar FamilyOffice expereicne from Famiology.</p>
                          </Card.Text>
                          
                          <Button variant="dark">Learn More</Button>
                          
                        </Card.Body>
              </Card>
        </Col>
        <Col>
              <Card bg="light" style={{ height: '20rem' }} >
                        <Card.Body>
                          <Card.Title bsPrefix="famioloyStyledCardTitle">Own your data</Card.Title>
                          <Card.Subtitle className="mb-2">Data Privacy Smart</Card.Subtitle>
                          <Card.Text>
                          <p>
                            You are not on-boarding into Providers portals and locks-boxes, instead Providers onboard and work with 
                            you in your FamilyOffice experience.This means you are custodian of your own data and selectively shared 
                            what you need share with Providers and only what's needed for the context of your service need.
                          </p>
                          </Card.Text>
                          
                          <Button variant="dark">Learn More</Button>
                          
                        </Card.Body>
              </Card>
        </Col>
      </Row>

    </Container>

   
  );
}

function FamiologyHeader(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSignin(){
    alert('You clicked me!');
  }

  return(
    <>
  <div class="container-fluid">
    <div class="row bg-dark text-white">
  
      <div class="col-sm-10">
          <h1 class="display-5"> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,1,0" />
            <span class="material-symbols-sharp">diversity_2</span> 
            Famiology |
          </h1>
          <p> A different approach to the idea of Family Office..</p>
      </div>
      <div class="col-sm-2">
          <div class="btn-group btn-group-md">
             <span class="display-5">
              <Button variant="dark" size="lg" active>Subscribe</Button>{'  '}
              <Button onClick={handleShow} variant="light" size="lg" active>Sign-in</Button>
            </span>
              
              
          </div>
      </div>
    </div>
  </div>

    <Modal  show={show} 
            onHide={handleClose} 
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign-in into Famiology</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <br/>
        
        <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
       
        </Modal.Body>
        <Modal.Footer>
        <br/>
        <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Sign-in
          </Button>
          
          <p class="sm"> 
              <a href="#"> Forgot User Id   </a> | <a href="#"> Forgot Password </a> 
              </p>
          
        </Modal.Footer>
      </Modal>

  </>
  );
}

function FamiologySplash(){
  return(
  <div class="container-fluid">
            <div class="row bg-secondary text-white ">
                  <div class="col-sm-4"/>
                  <div class="col-sm-4">
                      <img src={splash} class="rounded-circle" width="500" height="450"/>
                  </div>
                  <div class="col-sm-4"/>
                  </div>
             
              <FeatureCards/>
            
  </div>
  );
}



function App() {
  return (

      <div>
      <FamiologyHeader/>
      <FamiologySplash/>
      </div>
  
  );
}

export default App;
