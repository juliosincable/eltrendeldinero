import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



export default class Home extends Component {
    render() {
        return (
            <div>
<Container fluid>
     
     <Row>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}>El tren del dinero</Col>
     

     <Col xs={12} sm={4} md={4} lg={4} xl={4}>    
       <h1>

         El tren del dinero
         </h1>
         </Col>
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}> 
     El tren del dinero
     </Col> 
     </Row>
   

     </Container> 
     </div>
     
)
}
}
