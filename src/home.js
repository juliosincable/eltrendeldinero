import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Authentication from './component/authentication';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export default class Home extends Component {
    render() {
        return (
            <div>
<Container fluid>
     
     <Row>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}><h6>

#1 
</h6>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </Col>
     

     <Col xs={12} sm={4} md={4} lg={4} xl={4}>    
       <h6>

       #2 </h6>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         
         </Col>
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}> 
     <Authentication/ >
     </Col> 
     
     </Row>

     <Row>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}><h6>

#4 </h6> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </Col>
     

     <Col xs={12} sm={4} md={4} lg={4} xl={4}>    
       <h6>

       #5 
       </h6>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         
         </Col>
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}> 
     

     <h6>

#6 </h6><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  

     </Col> 
     
     </Row>
   
     
     
     <Row>
     <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
     <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
     <Col xs={12} sm={3} md={4} lg={3} xl={3}>
     
     <Form inline> <h6>Suscribirse al correo informativo</h6>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Email" />
    
  
  
  
  <Button variant="outline-success" type="submit">
   Enviar 
  </Button>
  </Form.Group>
  </Form>
 

</Col>


<Col xs={4} sm={2} md={2} lg={2} xl={2}>
</Col>

  
</Row>
<Row>
  
     <Col></Col>
     <Col><br />
  <br />
     <h6>Trendeldinero 2020</h6></Col>
     
     
     <Col></Col>
     
     
     </Row>
     </Container> 
     </div>
     
)
}
}
