import React  from 'react';
import Navigation from '../../components/navigation'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row' 
import Table from 'react-bootstrap/Table' 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import styles from './style.module.scss';



class Page extends React.Component {
    



    render() {
       return (
     <div>
        <Navigation />
       
    <Container>
      <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}> 
      
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>

    </Form>
       
    </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>  
     
      <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Pasajero</th>
      <th>Tren</th>
      <th>Referencia</th>
      <th>Trenes</th>
      <th>Invitados</th>
      <th>Ganancias</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Usuario</td>
      <td>$0</td>
      <td>Usuario</td>
      <td>0</td>
      <td>0</td>
      <td>$0</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
     
    </tr>
    <tr>
    <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <div className={styles.tablacontrol}>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>   
      </div>
    </tr>
    <tr>
    <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>4</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>5</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>6</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>7</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>8</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>9</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
    <tr>
    <td>10</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <Button variant="outline-danger">Eliminar</Button>
      <Button variant="outline-warning">Suspender</Button>
      <Button variant="outline-success">Pagar</Button>
    </tr>
  </tbody>
</Table>
<Button variant="outline-success" type="submit">
                                             Anterior
                                              </Button>
<Button variant="outline-success" type="submit">
                                              Siguiente
                                              </Button>
                                              <br />
                                              <br />
            
     
     
     
     </Col>
     
      </Row>
 </Container>
 
       </div>
     )
    }
 }
 
 
 
 
 export default Page;