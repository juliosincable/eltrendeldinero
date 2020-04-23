import React, {Component} from 'react';
import fire from '../fire';
import {Button } from 'react-bootstrap';

class Exit extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>You are home!</h1>
                <Button variant="success" onClick={this.logout}>Logout</Button>{' '}
                
            </div>
        )
    }
}

export default Exit;