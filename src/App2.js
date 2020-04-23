import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Navigation from './component/navigation'

import DashBoard from './component/dashboard'
import Users from './component/users'
import Pay from './component/pay'
import Control from './component/control'


import Home from "./Home";
import Login from "./component/Login2";
import SignUp from "./component/SignUp";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";

  

function App2() {
  return (
    <div className="App">
     
      <AuthProvider>
      
      <Router>

      <Navigation />
      
      <div>
      <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />    
        
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/users" component={Users} />
        <Route path="/pay" component={Pay} />
        <Route path="/control" component={Control} />
        
        </div>

    </Router>

     
    </AuthProvider>
    
    </div>
  );
}

