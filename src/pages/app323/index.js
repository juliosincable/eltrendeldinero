import React from 'react';
import Navigation from '../../components/navigation'


import styles from './style.module.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 
import Form from 'react-bootstrap/Form' 

import MiButtonCrude from '../../components/MiButtonCrude'



class Page extends React.Component {
    state = {
      usuario: this.props.usuario
  }

  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

  this.setState({
    [name]: value
  });
}


    render() {
                            return (
                              <div className={styles.Container}>
                               <Navigation />
                               <Layout>
                                <Container fluid>
                                <Row>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                
     
                                        
                                      <Form onSubmit="onSubmit" >
                                              <Form.Group>
                                              <Form.Label>Usuario</Form.Label>
                                              <Form.Control  
                                              id="sobrenombre"
                                              type="text" 
                                              name="usuario" 
                                              placeholder="usuario"
                                              value="nombre_usuario"  
                                              >                                                  
                                              </Form.Control>



                                              <Form.Label>Nombre</Form.Label>
                                              <Form.Control 
                                              id="nombre" 
                                              type="text" 
                                              name="nombre"
                                              placeholder="nombre"
                                              value="nombre"
                                              >
                                             </Form.Control>
                                                  
                                             
                                              <Form.Label>Apellido</Form.Label>
                                              <Form.Control  
                                              id="apellido"
                                              type="text" 
                                              name="apellido"                                           
                                              placeholder="apellido"
                                              value="apellido"
                                              >                                                 
                                              </Form.Control>

                                              <Form.Label>Email</Form.Label>
                                              <Form.Control
                                              id="email"  
                                              type="email" 
                                              name="email"                                               
                                              placeholder="email" 
                                              value="email"
                                              > 
                                              </Form.Control>


                                             
                                              <input type="submit" value="submit" variant="outline-success"                                                   
                                              />

                                            
                                                <MiButtonCrude />
                                                
                                          </Form.Group>
                                        
                                      </Form>
                               
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                </Row>
                                </Container>
                                </Layout>
                                </div>
                            )
            
        
    }
}

Page.contextType =  UsuariosContext;

export default Page;