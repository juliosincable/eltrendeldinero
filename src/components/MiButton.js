import React, { Component } from 'react'







export default class MiButton extends Component {

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
       
       

<div>
  
  
    ¡Activa el tren e invita a tus amigos a abordar!
    <div>

        <button type="button" class="btn btn-outline-success" onClick={this.changeMessage}>{this.state.message}</button>
    </div>
  
</div>
       
        </div>
       )
    }
}
