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
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}><Invitar />
                                <h4>Invitar</h4>
                                <Button type="submit" variant="outline-success"><h1> 10</h1></Button>
                                <Button type="submit" variant="outline-success"><h1>50</h1></Button>
                                <Button type="submit" variant="outline-success"><h1>100</h1></Button>

                                
                                
                               
                                
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