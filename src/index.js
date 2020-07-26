import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import GuardRoute from './components/guardRoute';

import Login from './pages/login';
import Root from './components/root';

import { AuthContextProvider } from './context/auth';


import './style.scss';

import inicio from './pages/inicio'

import './style.scss';
import App from './pages/app';
import App2 from './pages/app2';
import App3 from './pages/app3';
import App4 from './pages/app4';

import Mensajes from './pages/mensajes';
import transacciones from './pages/transacciones';
import dashboard from './pages/dashboard';





const root = (
    <BrowserRouter>
    <AuthContextProvider>
        
            <Root>
                <Switch>
                      <GuardRoute type="public" path="/login" component={Login} />
                      
                      
                      <GuardRoute type="private" path="/app" component={App} />               
                      <GuardRoute type="private" path="/app2" component={App2} />
                      <GuardRoute type="private" path="/app3" component={App3} />
                      <GuardRoute type="private" path="/app4" component={App4} />
                      
                      <GuardRoute type="private" path="/dashboard" component={dashboard} />
                      <GuardRoute type="private" path="/transacciones" component={transacciones} />
                      <GuardRoute type="private" path="/mensajes" component={Mensajes} />
                      <GuardRoute type="public" path="/" component={inicio} />
                      
                      </Switch>
                </Root>
            
        </AuthContextProvider>
    </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

