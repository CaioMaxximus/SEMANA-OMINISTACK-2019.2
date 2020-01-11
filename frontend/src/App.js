import React from 'react';
import './App.css';
import Routes from './routes';
import logo from './assets/logo.svg';

function App() {

  return (
    <div className="container" >
      <div id="logo">
        <img src={logo} alt="AirCnC" />
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
