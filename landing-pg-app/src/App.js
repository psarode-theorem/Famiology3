import splash from './imgs/Splash.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function FeatureCards() {
  return (

    
    <Container fluid >

    <style type="text/css">
                {`
            .myCardTitle{
              background-color: purple;
              color: white;
            }
            .super-btn-flat {
              background-color: purple;
              color: white;
            }

            .super-btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 4.5rem;
            }
            `}
      </style>


      <Row> 
        <Col>
              <Card bg="light" style={{ height: '20rem' }} >
                        <Card.Body>
                          <Card.Title>Affordable</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Using scale of modern technology</Card.Subtitle>
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
                          <Card.Title>Multiple Integrations</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">We are integrated with many providers</Card.Subtitle>
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
                          <Card.Title>Own your data</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Data Privacy Smart</Card.Subtitle>
                          <Card.Text>
                          <p>You are not on-boarding into Providers portals and locks-boxes, instead Providers onboard and work with you in your FamilyOffice experience.This means you are custodian of your own data and selectively shared what you need share with Providers and only what's needed for the context of your service need.</p>
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

  function handleSignin(){
    alert('You clicked me!');
  }

  return(
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
              <Button  variant="light">Subscribe</Button>
              <Button onClick={handleSignin} variant="light">Sign-in</Button>
              
          </div>
      </div>
    </div>
  </div>
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
