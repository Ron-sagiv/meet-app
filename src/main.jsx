import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css'
import * as atatus from 'atatus-spa';
atatus.config('73f9eb1b2acd4832a4c5482d06693b21').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//=========this is not supposed to be here but I just try
// atatus.notify(new Error('Test Atatus Setup'));
