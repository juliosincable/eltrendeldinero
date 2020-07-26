import React  from 'react';
import Navigation from '../../components/navigation'


import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { db, watchUserChanges } from '../../services/firebase';

watchUserChanges((user) => {
  console.log(user);
  })

///////////////////////////////////// lo que estoy escribiendo en db /////////////////////////////////////////////////////
db.collection("mensajes").doc("enlinea").set({
  uid: "CnXBvSlCrPhl442kNUKB5dZ8Piw1",
  fecha: "enero",
  titulo: "mensaje",
  mensaje: "loren ipsum",
  receptor: "uid"
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});

/////////////////////////////////////// lo que estoy leyendo en db //////////////////////////////////
db.collection("mensaje").doc()
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'aquí va el mensaje de texto'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }



   render() {
      return (
    <div>
       <Navigation />
      
   <Container>
     
   <Row>
   <Col xs={12} sm={1} md={1} lg={1} xl={1}></Col>
   <Col xs={12} sm={1} md={1} lg={1} xl={1}></Col>
   <Col xs={12} sm={1} md={1} lg={1} xl={1}>
     <br />
     <a href="/mensajes">Escribir</a>
     <br />
     <a href="/mensajes">Recibidos</a>
     <br />
     <a href="/mensajes">Enviados</a>

       
      
   </Col>

   <Col xs={12} sm={6} md={6} lg={6} xl={6}>
    <Form>

    <Form.Group>
                                              <Form.Label></Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="receptor" 
                                              
                                              value={this.state.receptor}
                                              onChange={this.handleInputChange}  
                                              >                                                  
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                            
                                              </Form.Text>
                                              </Form.Group>





    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="3" value={this.state.value} onChange={this.handleChange} />
  </Form.Group>
  
  <Button variant="outline-success" type="submit">
    Enviar
  </Button>
  <Button variant="outline-danger" type="submit">
    Eliminar
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