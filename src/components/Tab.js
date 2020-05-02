import React, { Component } from 'react';

import MyTrain from './Mytrain'


import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


  

export default class Tab extends Component {
  render() {
      return (
    <div>
     
     
     <Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Tren 10 USD
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><MyTrain /></Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Tren 50 USD
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><MyTrain /></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Tren 100 USD
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><MyTrain /></Card.Body>

    </Accordion.Collapse>
  </Card>
</Accordion>
     

     
      
       
   
    
    
    </div>
   )
  }
}