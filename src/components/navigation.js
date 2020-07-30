import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import { watchUserChanges } from './../services/firebase';

localStorage.clear()






export default class Navigation extends Component {

    state = {
            
        user: {},
  
}
  
 
componentDidMount(){
    watchUserChanges((user) => { 
      this.setState({user});
    
    });
    }
  

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light p-3">
                
                <div className="container">
                    
                <Navbar>
                <Navbar.Brand>
                <Nav.Link  href="/">
                <img
        src="/logo.svg"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="artisan"
      />

      
                    </Nav.Link> 
                </Navbar.Brand>
                
                </Navbar>
                <Nav className="mr-auto">
     
     
      
      <Nav.Link >About</Nav.Link>
      <Nav.Link >Product</Nav.Link>
      <Nav.Link >Register</Nav.Link>
      <Nav.Link >Contact</Nav.Link>
    </Nav>
    
    </div>
    
   
   
  
               <div>
               <Nav.Link href="/dashboard"> Login </Nav.Link>

               </div>


               
                
                <div>
               <Nav.Link> </Nav.Link>

               </div>
               
                <div>
                
                
                </div>
                <div>
                
               <Nav.Link></Nav.Link>
                 
                
                </div>
            </nav>
        )
    }
}