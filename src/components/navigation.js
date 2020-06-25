import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import icon from './icon.svg'



export default class Navigation extends Component {
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
      <Nav.Link href="/app">Estación</Nav.Link>
      <Nav.Link href="/app2">Oficina</Nav.Link>
      <Nav.Link href="/app3">Perfil</Nav.Link>
      <Nav.Link href="/mensajes">Mensajes</Nav.Link>
      <Nav.Link >Ayuda</Nav.Link>
      
    </Nav>
    
    </div>
    
    <Button variant="warning">Demo</Button>
   
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
                  
                </div>
                <div>
                <img src={icon} width="30px" height="30px" alt="logo" />
               <Nav.Link></Nav.Link>
                 
                
                </div>
            </nav>
        )
    }
}