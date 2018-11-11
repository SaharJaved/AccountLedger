import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LedgerList from './components/ledgerList'

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <LedgerList />
      </div>
    
    );
  }
}

export default App;
