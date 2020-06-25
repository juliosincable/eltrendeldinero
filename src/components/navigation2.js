import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'





export default class Navigation2 extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-dark p-3">
                
                <div className="container">
                    
                <Navbar>
                <Navbar.Brand>
                <Nav.Link  href="/">
                <img
        src="/logo.svg"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="El Tren del Dinero"
      />

      
                    </Nav.Link> 
                </Navbar.Brand>
                
                </Navbar>
                <Nav className="mr-auto">
      <Nav.Link href="/app">Inicio</Nav.Link>
      <Nav.Link href="/app">Como funciona</Nav.Link>
      <Nav.Link href="/app">Quienes somos</Nav.Link>
      <Nav.Link href="/app">Contacto</Nav.Link>
      <Nav.Link href="/app">Comprar</Nav.Link>
      
      
      
    </Nav>
    
    
    
    
               <Nav.Link href="/transacciones"> Registrarte </Nav.Link>

               <Nav.Link href="/login">  Ingresa </Nav.Link>
              
                
                
               
               <Nav.Link></Nav.Link>
                 
                
                </div>
            </nav>
        )
    }
}