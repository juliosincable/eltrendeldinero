import React, {Component} from 'react';
import fire from '../fire';
import Login from './Login';
import Exit from './Exit';


class Inicio extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Exit />) : (<Login />)}
        </div>
    );
  }
}

export default Inicio;