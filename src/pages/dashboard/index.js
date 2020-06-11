import React  from 'react';
import Navigation from '../../components/navigation'
import Tarjeta9 from '../../components/tarjeta9';
import Tarjeta10 from '../../components/tarjeta10';
import Tarjeta11 from '../../components/tarjeta11';
import Tarjeta12 from '../../components/tarjeta12';
import Tarjeta1001 from '../../components/tarjeta1001';
import Tarjeta1002 from '../../components/tarjeta1002';
import Tarjeta1003 from '../../components/tarjeta1003';
import Tarjeta1004 from '../../components/tarjeta1004';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 


class Page extends React.Component {
    



    render() {
       return (
     <div>
        <Navigation />
       
    <Container>
      <Row>
     
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
 
     <Tarjeta1001 />
     
     
     </Col>
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
 
      <Tarjeta1002 />
      
      
      </Col>
      
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
 
      <Tarjeta1003 />
      
      
      </Col>
      
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
 
      <Tarjeta1004 />
      
      
      </Col>
      
     
      </Row>
      <br />
      <Row>
      
      
      
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
 
      <Tarjeta9 />
      
      
      </Col>
      
      
      
 
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
      
      <Tarjeta10 />
 
      </Col>
 
      
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
      
      
      <Tarjeta11 />
 
    
      </Col>
      
      <Col xs={12} sm={3} md={3} lg={3} xl={3}> 
   
 
      <Tarjeta12 />
      
      </Col>
     
      </Row>
 </Container>
 
       </div>
     )
    }
 }
 
 
 
 
 export default Page;