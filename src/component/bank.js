import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import { Button } from 'react-bootstrap';


export default class Bank extends Component {

    render() {
        return (
        <div>
               




<Card>
  
  <Card.Body>
    <Card.Title>Dinero</Card.Title>
    <Card.Text>
    <h6>total recaudado</h6>
    <h6>total pagado</h6>
    <h6>10% ganado</h6>
    <h6>total ceo</h6>
    <h6>monto total acumulado</h6>
    <h6>ganancias del 10% de lo recibido</h6>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>




   
        </div>
       )
    }
}
