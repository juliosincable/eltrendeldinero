import React, { Component } from 'react'
import Navigation2 from './components/navigation2'



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Comodidad from './components/Comodidad.png'
import Ejecutivo from './components/Ejecutivo.jpg'
import dinerorapido from './components/dinerorapido.svg'
import Redessociales from './components/Redessociales.svg'


import seguridadenpagos from './components/seguridadenpagos.svg'

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


import Carousel from 'react-bootstrap/Carousel'








export default class Inicio extends Component {
    render() {
        return (
            <div>
              <Navigation2 />
<Container fluid>



<Row>










</Row>


<Row> 
     

<Carousel>
  
  <Carousel.Item>
  <Carousel.Caption>
      <h1>First slide label</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src={Comodidad} 
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
</Row>


<Row>     
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> 
<img
      className="d-block w-100"
      src={dinerorapido} 
      alt="Third slide"
    /> </Col> 
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}>
  <img
      className="d-block w-100"
      src={seguridadenpagos} 
      alt="Third slide"
    /> </Col> 
    
    
    <Col  xs={12} sm={4} md={4} lg={4} xl={4}><img
      className="d-block w-100"
      src={Redessociales} 
      alt="Third slide"
    />  </Col> 
     
</Row>
<Row>     
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col> 
</Row><Row>     
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col> 
</Row>

     <Row>
     
     <Col  xs={12} sm={12} md={12} lg={12} xl={12}> 
     <div>   
     <img
      className="d-block w-100"
      src={Ejecutivo} 
      alt="Third slide"
    />
      
</div>
     </Col> 
     
     
     
     </Row>
     




 




2020 Tren del Dinero. Todos los derechos reservados

     </Container> 
     </div>
     
)
}
}
