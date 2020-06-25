import React, { Component } from 'react'







export default class MiButton extends Component {

    constructor() {
        super()
        this.state = {
            message: "Abordar" 

        }
      }
    
   


    changeMessage = () => { this.setState({ message: "Procesando"}) }
    

    render() {
        return (
            <div>
       
       

<div>
  
  
    10 boletos
    
    <div>

        <button type="button" class="btn btn-outline-success" onClick={this.changeMessage}>{this.state.message}</button>
    </div>
  
</div>
       
        </div>
       )
    }
}
