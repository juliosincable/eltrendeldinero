import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';


export default class Authentication extends Component {

    render() {
        return (

            <div> 
                <Form>
  <Form.Row>
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
<br />
    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row> 
  </Form> 
        </div>
        )
     }
 }