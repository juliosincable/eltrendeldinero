import React  from 'react';
import Navigation from '../../components/navigation'


import Tarjeta5 from '../../components/tarjeta5';
import Tarjeta6 from '../../components/tarjeta6';
import Tarjeta7 from '../../components/tarjeta7';
import Tarjeta8 from '../../components/tarjeta8';
import Tarjeta from '../../components/tarjeta';
import Tarjeta2 from '../../components/tarjeta2';
import Tarjeta3 from '../../components/tarjeta3';
import Tarjeta4 from '../../components/tarjeta4';




import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'






class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      
   <Container>
      
   <br />
  
                                <br />
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
     <br />
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
<br />
     



</Container>

      </div>
    )
   }
}




export default Page;