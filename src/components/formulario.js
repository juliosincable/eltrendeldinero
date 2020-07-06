import React from 'react';
import { ExpenseContext } from '../context/expense';



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
      
  }


  
  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    

  this.setState({
    [name]: value
  });
}



  
    render() {
      

                            return (
                           
                            
                                 <React.Fragment>
                               
                               
                               
     
                                        
                                
                          
                                <Form>
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


Formulario.contextType =  ExpenseContext;

export default Formulario;