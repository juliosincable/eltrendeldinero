import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import GuardRoute from './components/guardRoute';

import Login from './pages/login';
import Root from './components/root';

import { AuthContextProvider } from './context/auth';


import './style.scss';

import inicio from './pages/inicio'

import './style.scss';
import App from './pages/app';





const root = (
    <Router>
    <AuthContextProvider>
        
            <Root>
                <Switch>
                      <GuardRoute type="public" path="/login" component={Login} />
                      
                      
                      <GuardRoute type="private" path="/app" component={App} />               
                      
                      <GuardRoute type="public" path="/" component={inicio} />
                      
                      </Switch>
                </Root>
            
        </AuthContextProvider>
    </Router>
);

ReactDOM.render(root, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

