import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

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
                
                </Navbar>
                <Nav className="mr-auto">
      <Nav.Link href="/app">Estación</Nav.Link>
      <Nav.Link href="/app2">Oficina</Nav.Link>
      <Nav.Link href="/app3">Perfil</Nav.Link>
      <Nav.Link >Mensajes</Nav.Link>
      <Nav.Link >Ayuda</Nav.Link>
      
    </Nav>
    
    </div>
    airtm is true
    <Button variant="warning">Pruebas</Button>
   
    <div>
    
    
               <Nav.Link href="/transacciones"> Transacciones </Nav.Link>

               </div>
               <div>
               <Nav.Link href="/dashboard"> Control </Nav.Link>

               </div>


              
                <div>
               <Nav.Link href="/app"   >         Salir</Nav.Link>
                 
                
                </div>



                <div>
               <Nav.Link></Nav.Link>
                 
                
                </div>
            </nav>
        )
    }
}