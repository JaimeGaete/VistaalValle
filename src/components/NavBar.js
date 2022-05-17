import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget.js"
import { Link , NavLink } from 'react-router-dom';
import { useContext } from "react"
import { contexto } from "./CartContext";

const NavBar = ({ sitio }) => {

    // voy a usar cantidad_total para mostrar/ocultar el CartWidget
    const {cantidadTotal} = useContext(contexto)

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
                  <NavDropdown.Item as={NavLink} to="/producto/5">Viña SEÑA Ensamblaje</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/producto/6">Viña VENTISQUERO</NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/categoria/vinas" className="nav-link">Viñas</NavLink>
              </Nav>
              {cantidadTotal > 0  ? <CartWidget/> : null}
            </Navbar.Collapse>
          </Navbar>
        </>
      );
  }
  
  export default NavBar