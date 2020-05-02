import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Cards from './components/Cards';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 

function App() {
  return (
    <div className="App">
      <Container>
     
     <Row>
     <Col xs={12} sm={2} md={2} lg={2} xl={2}>  
     
     </Col>
     <Col xs={12} sm={8} md={8} lg={8} xl={8}>  <Cards />
     
     </Col>
     <Col xs={12} sm={2} md={2} lg={2} xl={2}>  
     
     </Col> 
     </Row>
    
     <Row>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}></Col> 
     </Row>
   
     
     <Row>
     <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
     <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
     <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
    <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
     </Row>
     
      
     

      
     
       
   
      </Container>
    
    </div>
  );
}

export default App;