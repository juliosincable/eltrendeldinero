import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import Card from 'react-bootstrap/Card'








export default class Tarjeta10 extends Component {

    
    
        

    render() {
        return (
            <div>

<Card>
  <Card.Body>

    <Card.Title>Primera Clase</Card.Title>

    <Card.Subtitle className="mb-2 text-muted">0 pasajeros</Card.Subtitle>
    <Card.Text>
    0 USD
    <br />
    <h4>0 trenes</h4>
    </Card.Text>
    
    <Card.Link href="#">2</Card.Link>
    <Card.Link href="#">3</Card.Link>
  </Card.Body>
</Card>
        </div>
       )
    }
}