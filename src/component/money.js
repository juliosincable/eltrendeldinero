import React, { Component } from 'react'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Container from 'react-bootstrap/container'

import Table from 'react-bootstrap/Table'


export default class Money extends Component {

    render() {
        return (
        <div>
            <Container fluid>
          
<div>
<Row>        
<Col xs={12} sm={12} md={12} lg={12} xl={12}>
  
  
  
  
  
  </Col>




<Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>#</th>
        <th>Tren</th>
        <th>Puestos</th>
        <th>Invitados</th>
        <th>Cobrado</th>
        <th>Acumulado</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>10</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
      <tr>
        <td>2</td>
        <td>50</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
      <tr>
        <td>3</td>
        <td>100</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
    </tbody>
  </Table>   
</Row>
</div>

</Container> 
       
        </div>
       )
    }
}
