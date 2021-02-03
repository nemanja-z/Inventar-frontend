import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Store} from "./state/Store";


ReactDOM.render(
  <Store>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Store>,
  document.getElementById('root')
);


reportWebVitals();
