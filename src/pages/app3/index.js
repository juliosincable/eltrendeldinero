import React from 'react';
import Navigation from '../../components/navigation'


import { db } from '../../services/firebase';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 
import Form from 'react-bootstrap/Form' 

//import { watchUserChanges } from '../../services/firebase';
//function guardar(){
    //var nombre_usuario = document.getElementByid('nombre_usuario').value;
    //var nombre = document.getElementByid('nombre').value;
    //var apellido = document.getElementByid('nombre').value;
    //var email = document.getElementByid('nombre').value;
    

//}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre_usuario: " ",
            nombre: " ",
            apellido: " ",
            email: " "
        }
    }
    //watchUserChanges((user)=>{
        //this.setState({user});
    //});
    
componentDidMount (){
    var AJL9KvIw8rqKHlLEO8Ip = db.collection("usuarios").doc("AJL9KvIw8rqKHlLEO8Ip");

return AJL9KvIw8rqKHlLEO8Ip.update({
    nombre: "juan"
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    
    console.error("Error updating document: ", error);
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
                                              <Form.Control  value="nombre_usuario" type="text" name="usuario" placeholder="nombre_usuario"  >
                                                  
                                              </Form.Control>
                                              <Form.Label>Nombre</Form.Label>
                                              <Form.Control  value="nombre" type="text" name="nombre" placeholder="nombre"  >
                                                  
                                              </Form.Control>
                                              <Form.Label>Apellido</Form.Label>
                                              <Form.Control  value="apellido" type="text" name="apellido" placeholder="apellido"  >
                                                  
                                              </Form.Control>
                                              <Form.Label>Email</Form.Label>
                                              <Form.Control  value="email" type="text" name="email" placeholder="email" onclick="guardar()"  >
                                                  
                                              </Form.Control>

                                              <input type="submit" onclick="guardar()">

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



export default Page;