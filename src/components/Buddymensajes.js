import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import icon from './icon.svg'
import BuddyName from './BuddyName'




export default class Buddymensajes extends Component {

    
    
        

    render() {
        return (
            <div>
      
<br />
      <Card>

 {/* Primero */}      
  <Card.Body>
   <img src={icon} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>


</Card>





       
        </div>
       )
    }
}
