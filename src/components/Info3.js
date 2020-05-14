import React , { Component } from 'react'
 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Info3 extends Component {  
 

  render() {  
      return (
        <div> <Navigation />
        <img src={user} width="60x" height="60px" alt="logo" /> 
        <Form>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Actualizar
        </Button>
      </Form>
      </div>
    )
  }
}