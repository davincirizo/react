import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from 'react-router-dom';
const NavBarExample = () => {
    return(
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Plantilla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
     <section>
        <Outlet>
             
        </Outlet>
     </section>
        </>
    )
}

export default NavBarExample