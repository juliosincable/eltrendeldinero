import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import user from './user.svg'
import BuddyName from './BuddyName'
import MiButton from './MiButton';



export default class Buddy extends Component {

    
    
        

    render() {
        return (
            <div>
      <MiButton />
<br />
      <Card>

 {/* Primero */}      
  <Card.Body>
   <img src={user} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>

{/* Segundo  */} 
  <Card.Body>
   <img src={user} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>
  

  {/* Tercero  */} 
  <Card.Body>
   
  <img src={user} width="25x" height="25px" alt="logo" /> 
   <Card.Title>
              
       <div>
        
        
      <BuddyName name="inactivo" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>
  
  {/* Cuarto */}      
  <Card.Body>
   <img src={user} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>

{/* Quinto  */} 
  <Card.Body>
   <img src={user} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>
  

  {/* Sexto  */} 
  <Card.Body>
   
      
   <Card.Title>
              
       <div>
        
       
        <img src={user} width="25x" height="25px" alt="logo" /> 
      <BuddyName name="inactivo" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>
   
   {/* Septimo */}      
  <Card.Body>
   <img src={user} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>

{/* Octavo  */} 
  <Card.Body>
   <img src={user} width="25x" height="25px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="inactivo" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>
  

  {/* Noveno  */} 
  <Card.Body>
   
      
   <Card.Title>
              
       <div>
        
       
        <img src={user} width="25x" height="25px" alt="logo" /> 
      <BuddyName name="inactivo" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>

{/* Ultimo  */} 
<Card.Body>
   
      
   <Card.Title>
              
       <div>
        
       
        <img src={user} width="25x" height="25px" alt="logo" /> 
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
