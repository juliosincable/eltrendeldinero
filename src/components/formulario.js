import React from 'react';
import { db, watchUserChanges } from './../services/firebase';
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

import { AuthContext } from '../context/auth';



const global = 8;
///////////los datos del usario que esta conectado///////////////////////////////

watchUserChanges((user) => { 
  console.log(user.id, user.email);
  var datos = (user.id);
  console.log(datos);
  })
   


////////////////////////////////////// lo que estoy escribiendo en db /////////////////////////////////////////////////////
db.collection("usuarios").doc("CnXBvSlCrPhl442kNUKB5dZ8Piw1").set({
  uid: "CnXBvSlCrPhl442kNUKB5dZ8Piw1",
  fecha: "febrero",
  usuario: global,
  nombre: "pepo",
  apellido: "perez",
  email: "pepe@gmail.com",
  referidos: ["juan perez", 
  "pedro gozales", "luis gomez", "carlos peña", "maria diaz", 
  "ramon gutierrez", "david guedes", "armando triana", "pepe cano"]
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
/////////////////////////////////////// lo que estoy leyendo en db //////////////////////////////////
      


var docRef = db.collection("usuarios").doc("CnXBvSlCrPhl442kNUKB5dZ8Piw1");

docRef.get().then(function(doc) {
        const email = (doc.data().email);
        const uid = (doc.data().uid);
        const nombre = (doc.data().nombre);
        console.log(email, uid, nombre);
}).catch(function(error) {
    console.log("Error getting document:", error);
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
  
    
    };
   
      this.handleInputChange = this.handleInputChange.bind(this);
      
  }



  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
  
    
this.setState({
  [name]: value
});
}

handleSubmit = event => {
  event.preventDefault()
  
  }


  
    render() {
      
                   return (
                           
                    
                                 <React.Fragment>
                               
                              
                                      
                                        
                               
                                <Form onSummit={this.handleSubmit}>
                                              <Form.Group>                                                                                           
                                              
                                              
                                              <Form.Group>
                                              <Form.Label>Usuario</Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="nombre_usuario" 
                                              
                                              value={this.state.nombre_usuario}
                                              onChange={this.handleInputChange}  
                                              >                                                  
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Este es su nombre publico visible para todos los usuarios.
                                              </Form.Text>
                                              </Form.Group>

                                              <Form.Group>
                                              <Form.Label>Nombre</Form.Label>
                                              <Form.Control 
                                              
                                              type="text" 
                                              name="nombre"
                                              
                                              value={this.state.nombre} 
                                              onChange={this.handleInputChange}
                                              >
                                             </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>


                                                  
                                              <Form.Group>
                                              <Form.Label>Apellido</Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="apellido"                                           
                                              
                                              value={this.state.apellido} 
                                              onChange={this.handleInputChange}
                                              >                                                 
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>

                                              <Form.Group>
                                              <Form.Label>Airtm</Form.Label>
                                              <Form.Control
                                               
                                              type="email" 
                                              name="email"                                               
                                              
                                              value={this.state.email} 
                                              onChange={this.handleInputChange}
                                              > 
                                                                                      
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>

                                              <Button variant="outline-success" type="submit">
                                              Enviar
                                              </Button>
                                              


                                            
                                            

                                               
                                                 
                                                 

                                           
                                             
                                              

                                   
                                                
                                          </Form.Group>
                                        
                                      </Form>
                              
                                </React.Fragment>
                            
                                
                            )
            
        
    }
}


Formulario.AuthContext = AuthContext;

export default Formulario;