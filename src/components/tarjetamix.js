import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import icon from './icon.svg'

import Card from 'react-bootstrap/Card'


import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container' 



export default class Tarjetamix extends Component {

    
    
        

    render() {
        return (
            <div>
                <Container>
     
       
     <Row>
     
<Col xs={12} sm={12} md={12} lg={12} xl={12}>  
<Card>
  

   
<Card.Body>
<Card.Title>Amigos</Card.Title>

<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} /> 

<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} />

<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }}/>
<Button variant="outline-success">Siguiente</Button>

</Card.Body>
  

</Card>

</Col>
    
     </Row>
    
</Container>


  

        </div>
       )
    }
}








