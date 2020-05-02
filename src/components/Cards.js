import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Tab from './Tab';





  

export default class Cards extends Component {
  render() {
      return (
    <div className="App">
     
     
      
     

     <Card>
  <Card.Body>
  <Tab />
    <Card.Title>los trenes</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Trenes</Card.Subtitle>
    <Card.Text>
      Aqui esta la info de los trenes
    </Card.Text>
    
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
       
   
    
    
    </div>
   )
  }
}