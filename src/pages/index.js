import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../components/navigation'

import { UsuariosContext } from '../../context/usuarios';

import Layout from '../../components/layout';
import user from '../../components/user.svg'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 




class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      <Layout>

     
        
        <Container>
     <Row>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
     <Col xs={12} sm={4} md={4} lg={4} xl={4}>
       Foto
     <img src={user} width="60x" height="60px" alt="logo" /> 
     <Form>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Usuario" />
          <Form.Text className="text-muted">
          Sus datos son privados.
          </Form.Text>
        </Form.Group>
      
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
          <Form.Text className="text-muted">
            Sus datos son privados.
          </Form.Text>
        </Form.Group>

        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>
        <Form.Group >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
         Actualizar
        </Button>
      </Form>
      </Row>
     
     </Container>
</Layout>
      </div>
    )
   }
}


Page.contextType =  UsuariosContext;

export default Page;