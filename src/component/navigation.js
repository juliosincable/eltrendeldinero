import React, { Component } from 'react'


import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light p-3">
                
                <div className="container">
                    
                <Navbar.Brand>
                <Nav.Link  href="/">
                    <img src="logo.svg" width="45px" height="45px" alt="logo" />

                   
                    
                    </Nav.Link> 
                </Navbar.Brand>
                
                    <div className="Navbar.ToggleNavbar.Collapse" id="navbarTogglerDemo01">
                    <Nav className="mr-auto">
        
                    <Nav.Link  href="/"><img src="home.svg" width="25px" height="25px" alt="settings" /></Nav.Link> 
                    <Nav.Link  href="/"><img src="home.svg" width="25px" height="25px" alt="settings" /></Nav.Link>          
        
        <NavDropdown id="basic-nav-dropdown">
        <NavDropdown.Item href="/"><img src="setting.svg" width="25px" height="25px" alt="settings" />  Configuración</NavDropdown.Item>
        <NavDropdown.Item href="/users"><img src="user.svg" width="25px" height="25px" alt="user" />  Perfil</NavDropdown.Item>
        <NavDropdown.Item href="/pay"><img src="metro.svg" width="25px" height="25px" alt="settings" />  Pagar</NavDropdown.Item>
        <NavDropdown.Item href="/control"><img src="profits.svg" width="25px" height="25px" alt="settings" />  Control</NavDropdown.Item>
        <NavDropdown.Item href="/dashboard"><img src="calculator.svg" width="25px" height="25px" alt="settings" />  Oficina Virtual</NavDropdown.Item>
        
        <NavDropdown.Item href="/"><img src="invitar.svg" width="25px" height="25px" alt="settings" />  Invitar</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/"><img src="door.svg" width="25px" height="25px" alt="settings" />  Exit</NavDropdown.Item>
      </NavDropdown>
        
      <Nav.Link  href="/">Inicio</Nav.Link> 
      <Nav.Link  href="/">Inicio</Nav.Link> 
      <Nav.Link  href="/">Inicio</Nav.Link> 
      <Nav.Link  href="/">Login</Nav.Link> 
        
        
        </Nav>
                    </div>
                </div>
            </nav>
        )
    }
}