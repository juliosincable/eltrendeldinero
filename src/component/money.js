import React, { Component } from 'react'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Container from 'react-bootstrap/container'




export default class Money extends Component {

    render() {
        return (
        <div>
            <Container fluid>
          
<div>
<Row>        
<Col xs={12} sm={12} md={12} lg={12} xl={12}><h1>Total ganado: $3000 </h1><br /></Col>
<Col xs={12} sm={12} md={12} lg={12} xl={12}><h2>Total trenes: 200</h2> <br /> </Col>
<Col xs={12} sm={12} md={12} lg={12} xl={12}><h4>Total cobrado: $300</h4><br />  </Col>    
</Row>
</div>

</Container> 
       
        </div>
       )
    }
}
