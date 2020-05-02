import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import user from './user.svg'
import BuddyName from './BuddyName'




export default class Buddy extends Component {

    
    
        

    render() {
        return (
            <div>
      

      <Card>

 {/* Primero */}      
  <Card.Body>
   <img src={user} width="50x" height="50px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="Julio" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>

{/* Segundo  */} 
  <Card.Body>
   <img src={user} width="50x" height="50px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="Juan" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  

  {/* Tercero  */} 
  <Card.Body>
   
  <img src={user} width="50x" height="50px" alt="logo" /> 
   <Card.Title>
              
       <div>
        
        
      <BuddyName name="Peter" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  
  {/* Cuarto */}      
  <Card.Body>
   <img src={user} width="50x" height="50px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="Carlos" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>

{/* Quinto  */} 
  <Card.Body>
   <img src={user} width="50x" height="50px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="Pedro" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  

  {/* Sexto  */} 
  <Card.Body>
   
      
   <Card.Title>
              
       <div>
        
       
        <img src={user} width="50x" height="50px" alt="logo" /> 
      <BuddyName name="Antonio" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
   
   {/* Septimo */}      
  <Card.Body>
   <img src={user} width="50x" height="50px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="Luis" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>

{/* Octavo  */} 
  <Card.Body>
   <img src={user} width="50x" height="50px" alt="logo" /> 
      
   <Card.Title>
              
       <div>
       <BuddyName name="Oscar" />
            
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  

  {/* Noveno  */} 
  <Card.Body>
   
      
   <Card.Title>
              
       <div>
        
       
        <img src={user} width="50x" height="50px" alt="logo" /> 
      <BuddyName name="Tom" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>

{/* Ultimo  */} 
<Card.Body>
   
      
   <Card.Title>
              
       <div>
        
       
        <img src={user} width="50x" height="50px" alt="logo" /> 
      <BuddyName name="Peter" /> 
       </div>
   
   </Card.Title>
        
   <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>

</Card>


       
        </div>
       )
    }
}
