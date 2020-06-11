import React from 'react';
import { AuthContext } from '../../context/auth';
import { db } from '../../firebase';

import Navigation from '../../components/navigation'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre_usuario: " ",
      nombre: " ",
      apellido: " ",
      email: " "
  
    };
      this.handleInputChange = this.handleInputChange.bind(this);
    
  }


  
  handleInputChange = (e) => {
    this.setState ({ 
      [e.target.name]: e.target.value 
    }); 
  }



  handleSubmit = e => {
    // Get a reference to the place in the database where a user profile might be.
       e.preventDefault();
    db.collection('users').doc().set({   
    nombre_usuario: this.state.nombre_usuario,
    nombre: this.state.nombre,
    apellido: this.state.apellido,
    email: this.state.email
  });  
    this.setState({
      nombre_usuario: " ",
      nombre: " ",
      apellido: " ",
      email: " "
    });
  };


  

  
    render() {
      

                            return (
                           
                            
                                 <React.Fragment>
                               <Navigation />
                               
                                <Container fluid>
                               
                                <Row>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                
     
                                        
                                      <Form onSubmit={this.handleSubmit} >
                                              <Form.Group>
                                              

                                              
                                              
                                              
                                              
                                              <Form.Label>Usuario</Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="nombre_usuario" 
                                             
                                              value={this.state.nombre_usuario}
                                              onChange={this.handleInputChange}  
                                              >                                                  
                                              </Form.Control>



                                              <Form.Label>Nombre</Form.Label>
                                              <Form.Control 
                                              
                                              type="text" 
                                              name="nombre"
                                             
                                              value={this.state.nombre} 
                                              onChange={this.handleInputChange}
                                              >
                                             </Form.Control>
                                                  
                                             
                                              <Form.Label>Apellido</Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="apellido"                                           
                                              
                                              value={this.state.apellido} 
                                              onChange={this.handleInputChange}
                                              >                                                 
                                              </Form.Control>

                                              <Form.Label>Email</Form.Label>
                                              <Form.Control
                                               
                                              type="email" 
                                              name="email"                                               
                                              
                                              value={this.state.email} 
                                              onChange={this.handleInputChange}
                                              > 
                                              
                                              </Form.Control>
                                                 <br />

                                              <Button variant="outline-success" type="submit">
                                              Actualizar
                                              </Button>
            
                                             
                                              

                                   
                                                
                                          </Form.Group>
                                        
                                      </Form>
                               
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                </Row>
                                </Container>
                                </React.Fragment>
                            
                                
                            )
            
        
    }
}


Page.contextType =  AuthContext;

export default Page;