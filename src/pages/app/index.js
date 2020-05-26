import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../components/navigation'
import Buddy from '../../components/Buddy';
import Buddy2 from '../../components/Buddy2';
import Buddy3 from '../../components/Buddy3';
import { UsuariosContext } from '../../context/usuarios';
import Tarjeta from '../../components/tarjeta';
import Tarjeta2 from '../../components/tarjeta2';
import Tarjeta3 from '../../components/tarjeta3';
import Tarjeta4 from '../../components/tarjeta4';
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
    <Card.Title>10 USD</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Ejecutivo</Card.Subtitle>
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
    <Card.Title>50 USD</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Primera Clase</Card.Subtitle>
    <Card.Text>
      
       </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Buddy2 />
  </Card.Body>
     </Card>

     </Col>

     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}>  
     
     <Card>
  <Card.Body>
    <Card.Title>100 USD</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">VIP</Card.Subtitle>
    <Card.Text>
      
       </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Buddy3 />
  </Card.Body>
     </Card>
     
    
   
     </Col>
     
     <Col xs={12} sm={3} md={3} lg={3} xl={3}> 
     <Tarjeta />
<br />
     <Tarjeta2 />
     <br />
     <Tarjeta3 />
     <br />
     <Tarjeta4 />
     
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