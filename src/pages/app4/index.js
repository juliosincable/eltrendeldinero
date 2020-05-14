import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../components/navigation'

import { UsuariosContext } from '../../context/usuarios';

import Layout from '../../components/layout';

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container' 
import social from '../../components/social.png'


class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      <Layout>

     

      <Container fluid>
     
       
     <Row>
     
     <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
   <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
   <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
    
    
     <Col xs={12} sm={1} md={1} lg={1} xl={1}></Col>


<Col xs={12} sm={10} md={10} lg={10} xl={10}>

     
     
     <img src={social}  height="50px" alt="social" />  
     
     </Col>

     
     <Col xs={12} sm={1} md={1} lg={1} xl={1}></Col>

     
    
     </Row>
     
</Container>
</Layout>
      </div>
    )
   }
}


Page.contextType =  UsuariosContext;

export default Page;