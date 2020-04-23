import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    
  }

 

  handleUserChange = (event) => {
    this.setState({user: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  

  handleSubmit = (event) =>{
    event.preventDefault();
    
    
  }
 
 



    render() {
        return (
            <div>
      <Container fluid>
      <Row>   

  <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>      
<Col xs={12} sm={4} md={4} lg={4} xl={4}>
<img src="user.svg" width="45px" height="45px" alt="user" />
<br />
<br />

      <Form>     
      
  <Form.Group>
    
    <Form.Label>Usuario</Form.Label>
    <Form.Control placeholder="Usuario" 
    id="name"
    type="text" 
    value={this.state.user} 
    onChange={this.handleUserChange} />
    
    
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Email" 
    id="name"
    type="email"
    value={this.state.email} 
    onChange={this.handleEmailChange} />

    
  
   
  </Form.Group>  

  <Button variant="outline-success" type="submit" value="submit">
    Actualizar 
  </Button>

</Form>
       
</Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
</Row> 
</Container>
       
        </div>
       )
    }
}
