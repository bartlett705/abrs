import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckInList from './components/CheckInList';

const testdata = require('../testdata');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Automagic Beer Reporting System</h2>
        </div>
        <CheckInList data={testdata} />
      </div>
    );
  }
}

export default App;
