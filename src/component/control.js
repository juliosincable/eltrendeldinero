import React, { Component } from 'react'
import Trainstation from './trainstation'

import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Container from 'react-bootstrap/container'

import Bank from './bank'
import Bank2 from './bank2'
import Bank3 from './bank3'


export default class Control extends Component {

    render() {
        return (
        <div>
            <Container fluid>     








<div> 
<Row> 
   <h2> Hola user_name </h2>
   
</Row>


<Row>
<Col xs={12} sm={4} md={4} lg={4} xl={4}><Bank /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}><Bank2 /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}><Bank3 /></Col>
    
</Row>


<Row>


<Col xs={12} sm={12} md={12} lg={12} xl={12}> <Trainstation /><br /></Col>
    
</Row>
</div>


  </Container>        
        </div>
       )
    }
}
