import React from 'react';
import icon from '../../components/icon.svg'
import Navigation from '../../components/navigation'
import Formulario from '../../components/formulario'
import Formulario2 from '../../components/formulario2'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 
 
import Button from 'react-bootstrap/Button' 


class Page extends React.Component {
  constructor() {
    super();
    this.state =  { 
      
      
      nombre_usuario: " ",
      nombre: " ",
      apellido: " ",
      email: " "
    };

   
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  
  
  handleInputChange = (e) => {
    this.setState ({ 
      [e.target.name]: e.target.value 
    }); 
  }


  handleSubmit = e => {
    
    

    
  }

  

 

  
    render() {
      

                            return (
                           
                            
                                 <React.Fragment>
                               <Navigation />
                               
                                <Container fluid>
                               <br />
                                <Row>
                                <Col xs={12} sm={5} md={5} lg={5} xl={5}></Col>
                                <Col xs={12} sm={2} md={2} lg={2} xl={2}>
                                  <img src={icon} width="150px" height="150px" alt="logo" />
                                  <br/> 
                                  <br/>    
                                  
                                <Button variant="outline-success">Subir
                              
                                </Button>
                                <h6>Cambiar imagen de perfil</h6>
                                  </Col>
                                <Col xs={12} sm={5} md={5} lg={5} xl={5}></Col>
                                </Row>
                                <Row>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>                                                       

                            
                               
                          
                               


                                                 <br />
                                                 
                                                 
                                                 

                                              
                                             
                                              <Formulario />
                                              <Formulario2 />
                                              <br />
                                              
            
                                             
                                              


                               
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                </Row>
                                </Container>
                                </React.Fragment>
                            
                                
                            )
            
        
    }
}




export default Page;