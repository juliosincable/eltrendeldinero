import React  from 'react';
import Navigation from '../../components/navigation'


import Tarjeta5 from '../../components/tarjeta5';
import Tarjeta6 from '../../components/tarjeta6';
import Tarjeta7 from '../../components/tarjeta7';
import Tarjeta8 from '../../components/tarjeta8';




import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Invitar from '../../components/invitar'



class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      
   <Container>
   <Row>
   <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
   <Col xs={12} sm={6} md={6} lg={6} xl={6}> <Invitar /></Col>
   <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
  
   <Row>
   </Row>
      
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                               
                                <Button type="submit" variant="outline-success"><h2> 10</h2></Button><h2>0</h2>
                                </Col>
                                

                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                               
                                <Button type="submit" variant="outline-success"><h2>50</h2></Button><h2>0</h2>
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Button type="submit" variant="outline-success"><h2>100</h2></Button><h2>0</h2>
                                </Col>
                                  
                                </Row>
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
     



</Container>

      </div>
    )
   }
}




export default Page;