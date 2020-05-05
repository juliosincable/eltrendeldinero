import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'







  

export default class Info2 extends Component {
  render() {
      return (
    <div className="App">
     
     
      
     

     <Card>
  <Card.Body>
  
    <Card.Title>Oficina virtual</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">$$$</Card.Subtitle>
    <Card.Text>
      Aquí se verá la información financiera
    </Card.Text>
    

   


    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
       
   
    
    
    </div>
   )
  }
}