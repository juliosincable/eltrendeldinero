import React from 'react';

//necesito una funcion que me mofifique el correo y la clave de auth


import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 



class Formulario2 extends React.Component {
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
                               
                               
                               
     
                                        
                                
                          
                                <Form onSubmit={this.handleSubmit} >
                                              <Form.Group>                                                                                           
                                              
                                                                             

                                                  
                                              

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
                                                 
                                                 

                                             
                                              <br />
                                              <Button variant="outline-danger">Eliminar perfil</Button>
            
                                             
                                              

                                   
                                                
                                          </Form.Group>
                                        
                                      </Form>
                               
                               
                                </React.Fragment>
                            
                                
                            )
            
        
    }
}




export default Formulario2;