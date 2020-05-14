import React  from 'react';
import Navigation from '../../components/navigation'


import Tarjeta from '../../components/tarjeta';
import Tarjeta2 from '../../components/tarjeta2';
import Tarjeta3 from '../../components/tarjeta3';
import Tarjeta4 from '../../components/tarjeta4';
import Layout from '../../components/layout';

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container' 





class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      <Layout>
   <Container>
     <Row>
     
     
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     <Tarjeta />

     
     
     
     </Col>
     
     
     

     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     <Tarjeta2 />

     </Col>

     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     
     <Tarjeta3 />

   
     </Col>
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}> 
     
     <Tarjeta4 />

     
     
     </Col>
    
     </Row>
</Container>
</Layout>
      </div>
    )
   }
}




export default Page;