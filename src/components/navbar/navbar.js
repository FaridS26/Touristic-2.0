import React from "react";
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import './navbar.css';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state ={ }
    }
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/home">Turistic</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Inicio</Nav.Link>
                  <Nav.Link href="/profile">Mi perfil</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  <NavDropdown title="Regiones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Andina</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Amazonia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Caribe</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Pacifica</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Orinoquia</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        );
    }
}