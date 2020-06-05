import React from 'react';
import { UsuariosContext } from '../../context/usuarios';


import Navigation from '../../components/navigation'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 
import Form from 'react-bootstrap/Form' 



class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
            {value: ''};
        

        this.handleInputChange = this.handleInputChange.bind(this);
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
                            <div>
                               <Navigation />
                                <Container fluid>
                                <Row>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                
     
                                       
                                      <Form>
                                          <Form.Group>
                                              <Form.Label>Usuario</Form.Label>
                                              <Form.Control  value={this.state.nombre_usuario} onChange={this.handleInputChange} type="text" name="nombre_usuario" placeholder="nombre usuario"  >
                                                  
                                              </Form.Control>
                                              <Form.Label>Nombre</Form.Label>
                                              <Form.Control  value={this.state.name} onChange={this.handleInputChange} type="text" name="nombre" placeholder="nombre"  >
                                                  
                                              </Form.Control>
                                              <Form.Label>Apellido</Form.Label>
                                              <Form.Control   value={this.state.apellido} onChange={this.handleInputChange} type="text" name="apellido" placeholder="apellido"  >
                                                  
                                              </Form.Control>
                                              <Form.Label>Email</Form.Label>
                                              <Form.Control   value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="email"  >
                                                  
                                              </Form.Control>

                                              <input type="submit" onClick={onsubmit}>

                                              </input>
                                              
                                          </Form.Group>
                                      </Form>
                               
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                </Row>
                                </Container>
                                </div>
                            );
            
        
    }
}

Page.contextType =  UsuariosContext;

export default Page;