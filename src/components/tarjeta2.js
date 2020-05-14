import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import Card from 'react-bootstrap/Card'








export default class Tarjeta2 extends Component {

    
    
        

    render() {
        return (
            <div>

<Card>
  <Card.Body>

    <Card.Title>Pagos</Card.Title>

    <Card.Subtitle className="mb-2 text-muted">1</Card.Subtitle>
    <Card.Text>
      info
    </Card.Text>
    
    <Card.Link href="#">2</Card.Link>
    <Card.Link href="#">3</Card.Link>
  </Card.Body>
</Card>
        </div>
       )
    }
}
