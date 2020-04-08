import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';



export default class Users extends Component {

    render() {
        return (
            <div>
      
      <Form>
      
  <Form.Row>
    <Col>
    <Form.Label>Username</Form.Label>
    <Form.Control placeholder="First name" />
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="First name" />
    
    </Col>
    
  </Form.Row>

  

  

 

  

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="outline-success" type="submit">
    Enviar
  </Button>
</Form>

       
        </div>
       )
    }
}
