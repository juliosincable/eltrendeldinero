import React, { Component } from 'react'







export default class MiButtonCrude extends Component {

    constructor() {
        super()
        this.state = {
            message: "Editar" 

        }
      }
    
   


    changeMessage = () => { this.setState({ message: "Guardado"}) }
    

    render() {
        return (
            <div>
       
       

<div>
  
  
   
    
    <div>

        <button type="button" class="btn btn-outline-success" onClick={this.changeMessage}>{this.state.message}</button>
    </div>
  
</div>
       
        </div>
       )
    }
}
