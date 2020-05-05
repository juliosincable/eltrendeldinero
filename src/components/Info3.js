import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Col from 'react-bootstrap/Col'

  

export default class Info extends Component {
  render() {
      return (
    <div className="App">
     
     
      
     

     <Card>
  <Card.Body>
  
    <Card.Title>Datos personales</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Info</Card.Subtitle>
    <Card.Text>
      Actualizar datos
    </Card.Text>
    
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Asociado a su cuenta AirTm" />
    <Form.Text className="text-muted">
      Su información es privada.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Nombre de usuario</Form.Label>
    <Form.Control placeholder="Su nombre visible para todos" />
  </Form.Group>

  <Form.Row>
    <Col>
    <Form.Label>Nombre</Form.Label>
      <Form.Control placeholder="Primer nombre" />
    </Col>
    <Col>
    <Form.Label>Apellido</Form.Label>
      <Form.Control placeholder="Primer apellido" />
    </Col>
  </Form.Row>

  <br />

  
  <Button variant="outline-success" type="submit">
    Enviar
  </Button>
</Form>



    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
       
   
    
    
    </div>
   )
  }
}