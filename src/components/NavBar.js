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
                <NavLink to="/categoria/spa" className="nav-link">SPA</NavLink>
                <NavDropdown title="Productos">
                  <NavDropdown.Item as={NavLink} to="/producto/2">Vinos</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/producto/2">Piscos</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/producto/2">Cervezas</NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/categoria/vinas" className="nav-link">Viñas</NavLink>
              </Nav>
              <CartWidget/>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
  }
  
  export default NavBar