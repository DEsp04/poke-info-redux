import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';





ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);