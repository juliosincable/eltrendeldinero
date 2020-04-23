import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Navigation from './component/navigation'
import Users from './component/users'
import Invitar from './component/invitar'
import Control from './component/control'
import Home from "./Home";
import Inicio from './component/Inicio'








  

function App() {
  return (
    <div className="App">
     
     
      
      <Router>

      <Navigation />
      
        <div>
        <Route exact path="/" component={Inicio} />
        
        
                     
        <Route path="/dashboard" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/invitar" component={Invitar} />
        <Route path="/control" component={Control} />
       
        
        
        
        </div>

    </Router>

   
    
    
    </div>
  );
}

export default App;