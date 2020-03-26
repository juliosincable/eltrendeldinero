import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';




export default class MyTrain extends Component {

    render() {
        return (
            <div>
      

        <Card>
  <Card.Body>
      <Card.Title className="mb-2 text-muted">$100</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Mi tren</Card.Subtitle>
    <Card.Text className="mb-2 text-muted">
      <p>Puesto: # 1 Signus $10</p>
      <p>Puesto: # 2 Signus $10</p>
      <p>Puesto: # 3 Signus $10</p>
      <p>Puesto: # 4 Signus $10</p>
      <p>Puesto: # 5 Signus $10</p>
      <p>Puesto: # 6 Signus $10</p>
      <p>Puesto: # 7 Signus $10</p>
      <p>Puesto: # 8 Signus $10</p>
      <p>Puesto: # 9 Signus $10</p>
      <p>Puesto: # 10 Signus $10</p>
      <Button variant="outline-success" type="submit">Boleto
    
  </Button>
    </Card.Text></Card.Body>
</Card>


       
        </div>
       )
    }
}
