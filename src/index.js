import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.js';
import { BrowserRouter } from 'react-router-dom';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(application, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <MoviesApp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );