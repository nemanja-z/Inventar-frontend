
import React from 'react';
import Register from './components/Auth/Account/Register';
import Login from './components/Auth/Account/Login';
import Forgot from './components/Auth/Password/Forgot';
import Reset from './components/Auth/Password/Reset';
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
            <Route path="/forgot-password">
              <Forgot />
            </Route>
            <Route path="/reset-password/:token">
              <Reset/>
            </Route>
            <PrivateRoute path="/">
              <Main />
            </PrivateRoute>
          </Switch>
        </Router>
    );
}

export default App;