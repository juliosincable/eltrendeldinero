import React, { Component } from 'react'
import MyTrain from './mytrain'
import Money from './money'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Container from 'react-bootstrap/container'




export default class DashBoard extends Component {

    render() {
        return (
        <div>
            <Container fluid>     





<div>
<Row>
<Col xs={12} sm={4} md={4} lg={4} xl={4}><Money /><br /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}><Money /><br /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}><Money /><br /></Col>
</Row>
</div>


<div> 
<Row>      
<Col xs={12} sm={4} md={4} lg={4} xl={4}> <MyTrain /><br /></Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}> <MyTrain /><br /> </Col>
<Col xs={12} sm={4} md={4} lg={4} xl={4}> <MyTrain /><br /> </Col>    
</Row>
</div>


  </Container>        
        </div>
       )
    }
}
