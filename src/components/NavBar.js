import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget.js"
import { Link , NavLink } from 'react-router-dom';
import { useContext } from "react"
import { contexto } from "./CartContext";

const NavBar = ({ sitio }) => {

    const {cantidadTotal} = useContext(contexto)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/" >{sitio}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
              <NavDropdown title="Experiencias">
                  <NavDropdown.Item as={NavLink} to="/categoria/geyser">Geysers del Tatio</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/categoria/spa">SPA</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/categoria/nieve">Tour a la Nieve</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/categoria/paine">Torres del Paine</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tienda">
                  <NavDropdown.Item as={NavLink} to="/producto/6nenD9oh8A0EkcfEj79v">Vinos</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/producto/xLvmdIPaPTBrC5nZd5RF">Viña SEÑA Ensamblaje</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/producto/jO5wHbTUKKeQwOVW55KW">Viña VENTISQUERO</NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/categoria/vinas" className="nav-link">Tour de Vinos</NavLink>
              </Nav>
              {cantidadTotal > 0  ? <CartWidget/> : null}
            </Navbar.Collapse>
          </Navbar>
        </>
      );
  }
  
  export default NavBar