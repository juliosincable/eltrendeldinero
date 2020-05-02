import React, { Component } from 'react'

import Buddy from './Buddy'





export default class MyTrain extends Component {

    constructor() {
        super()
        this.state = {
            message: "Activar" 

        }
      }
    
   


    changeMessage = () => { this.setState({ message: "Procesando"}) }
    

    render() {
        return (
            <div>
       


<div class="card">
  <div class="card-body">
  <Buddy />
    ¡Activa el tren e invita a tus amigos a abordar!
    <div>

        <button type="button" class="btn btn-outline-success" onClick={this.changeMessage}>{this.state.message}</button>
    </div>
  </div>
</div>
       
        </div>
       )
    }
}
