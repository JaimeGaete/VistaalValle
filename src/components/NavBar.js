import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget.js"
import { Link , NavLink } from 'react-router-dom';

const NavBar = ({ sitio }) => {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/" >{sitio}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavLink to="/categoria/1" className="nav-link">Experiencias</NavLink>
                <NavDropdown title="Productos">
                  <NavDropdown.Item href="">Vinos</NavDropdown.Item>
                  <NavDropdown.Item href="">Piscos</NavDropdown.Item>
                  <NavDropdown.Item href="">Cervezas</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Habitaciones</Nav.Link>
              </Nav>
              <CartWidget/>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
  }
  
  export default NavBar