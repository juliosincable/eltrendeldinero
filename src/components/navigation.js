import React, { Component } from 'react'


import Nav from 'react-bootstrap/Nav'

import Navbar from 'react-bootstrap/Navbar'



export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light p-3">
                
                <div className="container">
                    
                <Navbar>
                <Navbar.Brand>
                <Nav.Link  href="/">
                <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="El Tren del Dinero"
      />

      
                    </Nav.Link> 
                </Navbar.Brand>
                <Nav className="mr-auto">
      <Nav.Link href="#home">Enlace 1</Nav.Link>
      <Nav.Link href="#features">Enlace 2</Nav.Link>
      <Nav.Link href="#pricing">Enlace 3</Nav.Link>
    </Nav>
                  
                </Navbar>
                    
                </div>
                
            </nav>
        )
    }
}