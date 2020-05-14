import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../components/navigation'
import Buddy from '../../components/Buddy';
import { UsuariosContext } from '../../context/usuarios';
import Tarjeta from '../../components/tarjeta';
import Layout from '../../components/layout';

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
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
     
     <Card>
  <Card.Body>
    <Card.Title>10</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      
       </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Buddy />
  </Card.Body>
     </Card>
     </Col>
     
     
     
     
     
     
     

     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     <Card>
  <Card.Body>
    <Card.Title>50</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      
       </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Buddy />
  </Card.Body>
     </Card>

     </Col>

     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     <Card>
  <Card.Body>
    <Card.Title>100</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      
       </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Buddy />
  </Card.Body>
     </Card>
     
    
   
     </Col>
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}> 
     <Tarjeta />
<br />
     <Tarjeta />
     
     
     </Col>
    
     </Row>
</Container>
</Layout>
      </div>
    )
   }
}


Page.contextType =  UsuariosContext;

export default Page;