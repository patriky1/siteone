import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

function Navb() {
  return (
    <>
    <div className=''>
      <Navbar bg="transparent" variant="light">
        <Container>
          <Navbar.Brand className="me-auto" href="#home">TecnoLink</Navbar.Brand>
          <Nav >
            <Nav.Link className="me-auto1" href="#home">Home</Nav.Link>
            <Nav.Link className="me-auto1" href="#features">Discovery</Nav.Link>
            <Nav.Link className="me-auto1" href="#pricing">Configuration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    
    </div>





    </>
  );
}

export default Navb;