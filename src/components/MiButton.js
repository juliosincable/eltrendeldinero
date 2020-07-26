import React, { Component } from 'react'

import { db, watchUserChanges } from './../services/firebase';

const userId = "CnXBvSlCrPhl442kNUKB5dZ8Piw1"


////////////////////////////////////// lo que estoy escribiendo en db /////////////////////////////////////////////////////

  db.collection("transacciones").doc(userId).set({
    uid: userId,
    fecha: 25,
    monto: 10,
    estado: false,
    tipo: "cobro",
    admin: false
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////user id///////////

watchUserChanges((user) => {
 console.log(user);
})

/////////////////////////////////////////////////


export default class MiButton extends Component {
        state = {
            
        user: {},
  
}

      

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


componentDidMount(){
  watchUserChanges((user) => { 
    this.setState({user});
  
  });
  }

    render() {
        return (
            <div>
       
        
       <div>
                               este es el id
                                 
                                      {this.state.user && this.state.user.id} 
                              </div>

<div>

  
    10 boletos
    
    <div>

        <button type="button" class="btn btn-outline-success" onClick={this.onSubmit} >Abordar</button>
    </div>
  
</div>
       
        </div>
       )
    }
}

