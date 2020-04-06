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
<Col xs={12} sm={12} md={12} lg={12} xl={12}><h1>Total ganado: $3000 </h1><br /></Col>
<Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
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
