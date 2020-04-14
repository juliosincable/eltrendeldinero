import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'




export default class Trainstation extends Component {

    render() {
        return (
            <div>
      <div>
  <Table responsive="sm" striped bordered hover variant="light">
    <thead>
      <tr>
        <th>#</th>
        <th>Usuario</th>
        <th>Email</th>
        <th>Tren 10</th>
        <th>Table 50</th>
        <th>Table 100</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>String</td>
        <td>String</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
      <tr>
        <td>2</td>
        <td>String</td>
        <td>String</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
      <tr>
        <td>3</td>
        <td>String</td>
        <td>String</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
    </tbody>
  </Table>
  
  
</div>

       
        </div>
       )
    }
}
