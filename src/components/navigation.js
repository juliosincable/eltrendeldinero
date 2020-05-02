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
      <Nav.Link href="#home">Dinero</Nav.Link>
      <Nav.Link href="#features">Trenes</Nav.Link>
      <Nav.Link href="#pricing">Messenger</Nav.Link>
    </Nav>
                  
                </Navbar>
                    
                </div>
                
            </nav>
        )
    }
}