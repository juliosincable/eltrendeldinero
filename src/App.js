import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './component/navigation'
import Home from './home'
import DashBoard from './component/dashboard'




function App() {
  return (
    <div className="App">
      
      
       <Router>
      <Navigation />
      <div className="container p-4">
      
    
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        
        
      </div>
    </Router>
      
    </div>
  );
}

export default App;
