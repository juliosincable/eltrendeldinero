import React, { Component } from 'react'
import Trainstation from './trainstation'

import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Container from 'react-bootstrap/container'




export default class Control extends Component {

    render() {
        return (
        <div>
            <Container fluid>     








<div> 
<Row>      
<Col xs={12} sm={4} md={4} lg={4} xl={4}> <Trainstation /><br /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}> <Trainstation /><br /> </Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}> <Trainstation /><br /> </Col>    
</Row>
</div>


  </Container>        
        </div>
       )
    }
}
