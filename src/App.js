
import React from 'react';
import Register from './components/Auth/Account/Register';
import Login from './components/Auth/Account/Login';
import Main from './components/Main/Main';
import PrivateRoute from './protected/PrivateRoute';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
    return (
        <Router>
        <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <Main />
            </PrivateRoute>
          </Switch>
        </Router>
    );
}

export default App;