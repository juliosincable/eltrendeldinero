import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import GuardRoute from './components/guardRoute';
import Root from './components/root';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import { AuthContextProvider } from './context/auth';
import { ExpenseContextProvider } from './context/expenses';
import 'react-vis/dist/style.css';
import './style.scss';
import App from './App';

import Inicio from './Inicio'


const root = (
  <BrowserRouter>
  
      <AuthContextProvider>
          <ExpenseContextProvider>
              <Root>
                  <Switch>
                  
                      <GuardRoute type="public" path="/login" component={Login} />
                      <GuardRoute type="private" path="/dashboard" component={Dashboard} />
                      <GuardRoute type="private" path="/reports" component={Reports} />
                      <GuardRoute type="private" path="/app" component={App} />
                      <GuardRoute type="public" path="/" component={Inicio} />
                      
                  </Switch>
              </Root>
          </ExpenseContextProvider>
      </AuthContextProvider>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

