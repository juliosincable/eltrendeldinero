import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Container from 'react-bootstrap/container'

export default class Invitar extends Component {

    render() {
        return (
          <div>
          <Container fluid>
          
         
          <Row>     
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>         </Col>   
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>           
            
      <Form>
  <Form.Row>
    
  <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Email" />
    

  
  </Form.Row>

  <br />

  <Button variant="outline-success" type="submit">
    Pagar con AirTM
  </Button>
</Form>

</Col>

<Col xs={12} sm={4} md={4} lg={4} xl={4}>         </Col>
</Row>
<Row>
  <Col xs={12} sm={4} md={4} lg={4} xl={4}>         </Col>
  <Col xs={12} sm={4} md={4} lg={4} xl={4}>     
  
  
  
  
      </Col>
  <Col xs={12} sm={4} md={4} lg={4} xl={4}>         </Col>
</Row>

</Container> 
       
        </div>
       
        
       )
    }
}
