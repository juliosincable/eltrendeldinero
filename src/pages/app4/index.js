import React  from 'react';
import Navigation from '../../components/navigation'



import Tarjeta111111 from '../../components/tarjeta111111';
import Tarjeta222222 from '../../components/tarjeta222222';
import Tarjeta333333 from '../../components/tarjeta333333';



import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


import Invitar from '../../components/invitar'



class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      
   <Container>
      <br />
   <Row>
   <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
   <Col xs={12} sm={6} md={6} lg={6} xl={6}> <Invitar /></Col>
   <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
  
   </Row>
   <br />
   <Row>
      
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Tarjeta111111 />
                                
                                </Col>
                                

                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Tarjeta222222 />
                                
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Tarjeta333333 />
                                </Col>
                                  
                                </Row>
                                
     



</Container>

      </div>
    )
   }
}




export default Page;