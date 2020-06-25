import React  from 'react';
import Navigation from '../../components/navigation'
import Buddymensajes from '../../components/Buddymensajes';

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'






class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      
   <Container>
   <Row>
   <Col xs={12} sm={3} md={3} lg={3} xl={3}>

       <Buddymensajes />
      
   </Col>

   <Col xs={12} sm={6} md={6} lg={6} xl={6}>
    <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="outline-success" type="submit">
    Enviar
  </Button>
    </Form>
        </Col>
   <Col xs={12} sm={3} md={3} lg={3} xl={3}></Col>
  
   <Row>
   </Row>
      
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                               
                             
                                </Col>
                                

                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                               
                               
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                             
                                </Col>
                                  
                                </Row>
                                <br />
     <Row>
     
     
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     

     
     
     
     </Col>
     
     
     

     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     

     </Col>

     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     
     

   
     </Col>
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}> 
     
    

     
     
     </Col>
    
     </Row>

<br />
     



</Container>

      </div>
    )
   }
}




export default Page;