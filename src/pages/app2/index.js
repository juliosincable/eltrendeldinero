import React  from 'react';
import Navigation from '../../components/navigation'


import Tarjeta5 from '../../components/tarjeta5';
import Tarjeta6 from '../../components/tarjeta6';
import Tarjeta7 from '../../components/tarjeta7';
import Tarjeta8 from '../../components/tarjeta8';
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
     <Tarjeta5 />

     
     
     
     </Col>
     
     
     

     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     <Tarjeta6 />

     </Col>

     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     
     <Tarjeta7 />

   
     </Col>
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}> 
     
     <Tarjeta8 />

     
     
     </Col>
    
     </Row>
</Container>
</Layout>
      </div>
    )
   }
}




export default Page;