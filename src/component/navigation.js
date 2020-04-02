import React, { Component } from 'react'


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark p-3">
                
                <div className="container">
                    
                <Navbar.Brand>
                <Nav.Link  href="/">
                    <img src="logo.svg" width="45px" height="45px" alt="logo" />

                   
                    
                    </Nav.Link> 
                </Navbar.Brand>
                
                    <div className="Navbar.ToggleNavbar.Collapse" id="navbarTogglerDemo01">
                    <Nav className="mr-auto">
        
                    
        <Nav.Link  href="/">Inicio</Nav.Link>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Configuración</NavDropdown.Item>
        <NavDropdown.Item href="/users">Perfil</NavDropdown.Item>
        <NavDropdown.Item href="/pay">Pagar</NavDropdown.Item>
        <NavDropdown.Item href="/control">Control</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Invitar</NavDropdown.Item>
      </NavDropdown>
        <Nav.Link  href="/dashboard">Oficina virtual</Nav.Link>
        <Nav.Link  href="/control">Control</Nav.Link>
        </Nav>
                    </div>
                </div>
            </nav>
        )
    }
}