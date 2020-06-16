import React from 'react';
import { AuthContext } from './../context/auth';
import { db } from './../services/firebase';




import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class Formulario extends React.Component {
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


  componentDidMount(){
    db.collection('users').doc("8PJIrkBu6fS19Jn73vKW").set({   
      nombre_usuario: this.state.nombre_usuario,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email
    });  
      this.setState({
        nombre_usuario: this.state.nombre_usuario,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email
      });
  };


  
  handleInputChange = (e) => {
    this.setState ({ 
      [e.target.name]: e.target.value 
    }); 
  }


  handleSubmit = e => {
    
    

    
  }

  

  
  componentWillUnmount() {
    
  }

  
    render() {
      

                            return (
                           
                            
                                 <React.Fragment>
                               
                               
                               
     
                                        
                                
                          
                                <Form onSubmit={this.handleSubmit} >
                                              <Form.Group>                                                                                           
                                              
                                              
                                              <Form.Group controlId="formBasicEmail">
                                              <Form.Label>Usuario</Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="nombre_usuario" 
                                              placeholder="usuario"
                                              value={this.state.nombre_usuario}
                                              onChange={this.handleInputChange}  
                                              >                                                  
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Este es su nombre publico visible para todos los usuarios.
                                              </Form.Text>
                                              </Form.Group>




                                              <Form.Group controlId="formBasicEmail">
                                              <Form.Label>Nombre</Form.Label>
                                              <Form.Control 
                                              
                                              type="text" 
                                              name="nombre"
                                              placeholder="nombre"
                                              value={this.state.nombre} 
                                              onChange={this.handleInputChange}
                                              >
                                             </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>


                                                  
                                              <Form.Group controlId="formBasicEmail">
                                              <Form.Label>Apellido</Form.Label>
                                              <Form.Control  
                                              
                                              type="text" 
                                              name="apellido"                                           
                                              placeholder="apellido"
                                              value={this.state.apellido} 
                                              onChange={this.handleInputChange}
                                              >                                                 
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>

                                              <Form.Group controlId="formBasicEmail">
                                              <Form.Label>Airtm</Form.Label>
                                              <Form.Control
                                               
                                              type="email" 
                                              name="email"                                               
                                              placeholder="email" 
                                              value={this.state.email} 
                                              onChange={this.handleInputChange}
                                              > 
                                                                                      
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>


                                               <Form.Group controlId="formBasicEmail">
                                              <Form.Label>Email</Form.Label>
                                              <Form.Control
                                               
                                              type="email" 
                                              name="email"                                               
                                              placeholder="email" 
                                              value={this.state.email} 
                                              onChange={this.handleInputChange}
                                              > 
                                                                                      
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>


                                              <Form.Group controlId="formBasicPassword">
                                              <Form.Label>Password</Form.Label>
                                              <Form.Control
                                               
                                              type="password" 
                                              name="password"                                               
                                              placeholder="password" 
                                              value={this.state.email} 
                                              onChange={this.handleInputChange}
                                              > 
                                                                                      
                                              </Form.Control>
                                              <Form.Text className="text-muted">
                                              Esta información es privada y solo puede verla el usuario.
                                              </Form.Text>
                                              </Form.Group>

                                              <Button variant="outline-success" type="submit">
                                             Cambiar
                                              </Button>
                                              <br />
                                                Cambiar password

                                                 <br />
                                                 <br />
                                                 <br />
                                                 
                                                 

                                              <Button variant="outline-success" type="submit">
                                              Actualizar
                                              </Button>
                                              <br />
                                              <br />
                                              <Button variant="outline-danger">Eliminar perfil</Button>
            
                                             
                                              

                                   
                                                
                                          </Form.Group>
                                        
                                      </Form>
                               
                               
                                </React.Fragment>
                            
                                
                            )
            
        
    }
}


Formulario.contextType =  AuthContext;

export default Formulario;