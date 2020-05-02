import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';










export default class Inicio extends Component {
    render() {
        return (
            <div>
<Container fluid>
     
     <Row>
     
     <Col  xs={12} sm={6} md={6} lg={6} xl={6}> 
     <div>   
      <h1>Aqui va la página de inicio</h1>
      
</div>
     </Col> 
     <Col  xs={12} sm={3} md={3} lg={3} xl={3}>


     
    


     </Col>
     <Col  xs={12} sm={3} md={3} lg={3} xl={3}>
          </Col>  
     
     </Row>
     
<Row>




<Col xs={12} sm={12} md={12} lg={12} xl={12}> <Button variant="success" href="/login"> Ingresar </Button> <br /></Col>

</Row>


 
<Row>      
<Col xs={12} sm={4} md={4} lg={4} xl={4}> Hola <br /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}> Hola <br /> </Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}> Hola <br /> </Col>    
</Row>






     </Container> 
     </div>
     
)
}
}
