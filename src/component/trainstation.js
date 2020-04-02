import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';




export default class MyTrain extends Component {

    render() {
        return (
            <div>
      

        <Card>
  <Card.Body>
      <Card.Title className="mb-2 text-muted">Control</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Administrador</Card.Subtitle>
    <Card.Text className="mb-2 text-muted">
      <p>Usuarios</p>
      <p>Trenes</p>
      <p>Ganancias totales</p>
      <p>Retiros</p>
      
      <Button variant="outline-success" type="submit">Actualizar
    
  </Button>
    </Card.Text></Card.Body>
</Card>


       
        </div>
       )
    }
}
