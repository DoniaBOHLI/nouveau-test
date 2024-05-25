import './App.css';
import {Container ,Nav,Navbar, NavDropdown }from 'react-bootstrap';
import product from './produit';
import Name from './Name';
import Price from './Price';
import Description from './Description';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

  return ( 
<>
<div className="App">
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop NOW </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">NEW In </Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dresses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Jewerly & Accessories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Name nom ={product.nom}/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <h2> hello donia </h2>
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <h1>HELLO DONIA</h1>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="Description">Another Link</Card.Link>
      </Card.Body>
    </Card>

    </div>
    </>
  );

}



export default App




