import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


import Card from 'react-bootstrap/Card'








export default class Tarjeta5 extends Component {

    
    
        

    render() {
        return (
            <div>

<Card>
  <Card.Body>

    <Card.Title>Pagos</Card.Title>

    <Card.Subtitle className="mb-2 text-muted">Inversión</Card.Subtitle>
    <Card.Text>
      <h1>0 USD</h1>
    </Card.Text>
    
    <Button variant="outline-success">Pagar</Button>
    <Button variant="outline-success">Pagar</Button>
    <Button variant="outline-success">Pagar</Button>
    <br />
    <Card.Link href="#">2</Card.Link>
    <Card.Link href="#">3</Card.Link>
  </Card.Body>
</Card>
        </div>
       )
    }
}
