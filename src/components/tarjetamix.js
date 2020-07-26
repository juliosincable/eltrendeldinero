import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.scss';


import icon from './icon.svg'
import Card from 'react-bootstrap/Card'


import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container' 



export default class Tarjetamix extends Component {

    
    
        

    render() {
        return (
            <div>
                <Container>
     
       
     <Row>
     






 
     <Card>

   
<Card.Body>
<Card.Title>0 Amigos</Card.Title>

<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/>
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/>
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/>
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/>
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<img src={icon} width="40x" height="40px" alt="logo" style={{ margin: '10px' }} className={styles.avatar}/> 
<Button variant="outline-success">Siguiente</Button>

</Card.Body>
  

</Card>


    
     </Row>
    
</Container>


  

        </div>
       )
    }
}








