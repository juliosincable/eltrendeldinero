import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import GuardRoute from './components/guardRoute';
import Root from './components/root';
import Login from './pages/login';


import { AuthContextProvider } from './context/auth';
import { UsuariosContextProvider } from './context/usuarios';
import 'react-vis/dist/style.css';
import './style.scss';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import Inicio from './Inicio'
import 'react-vis/dist/style.css';
import './style.scss';
import App from './pages/app';
import App2 from './pages/app2';
import App3 from './pages/app3';
import App4 from './pages/app4';



const root = (
  <BrowserRouter>
  
      <AuthContextProvider>
          <UsuariosContextProvider>
              <Root>
                  <Switch>
                      <GuardRoute type="public" path="/login" component={Login} />
                      <GuardRoute type="private" path="/dashboard" component={Dashboard} />    
                      <GuardRoute type="private" path="/reports" component={Reports} />
                      <GuardRoute type="private" path="/app" component={App} />               
                      <GuardRoute type="private" path="/app2" component={App2} />
                      <GuardRoute type="private" path="/app3" component={App3} />
                      <GuardRoute type="private" path="/app4" component={App4} />
                      <GuardRoute type="public" path="/" component={Inicio} />
                      
                  </Switch>
              </Root>
          </UsuariosContextProvider>
      </AuthContextProvider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

