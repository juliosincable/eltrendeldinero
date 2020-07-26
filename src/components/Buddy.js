import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


import icon from './icon.svg'

import styles from './style.module.scss';





function Welcome(props) {
return <h6>{props.name}</h6>
}   

export default class Buddy extends Component {

    
   



    render() {
        return (
            <div>
      
<br />
      <Card>

      
  <Card.Body>
   <img src={icon} alt="logo" className={styles.avatar} /> 
      
   <Card.Title>
   
       <h6></h6>
       <Welcome name="inactivo" />
   </Card.Title>
        
   <Card.Link href="#">Perfil</Card.Link>
    <Card.Link href="#">Mensaje</Card.Link>
  </Card.Body>



</Card>





       
        </div>
       )
    }
}
