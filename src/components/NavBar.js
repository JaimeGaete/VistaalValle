import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = (props) => {

    return (
        <>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="">Vista al Valle</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link href="">Galeria</Nav.Link>
                <Nav.Link href="">Experiencias</Nav.Link>
                <NavDropdown title="Productos">
                  <NavDropdown.Item href="">Vinos</NavDropdown.Item>
                  <NavDropdown.Item href="">Piscos</NavDropdown.Item>
                  <NavDropdown.Item href="">Cervezas</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Habitaciones</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
  }
  
  export default NavBar