import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import CForm from './Components/CForm/CForm';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Contact Manager UI</h1>
        <CForm />
      </div>
    );
  }
}

export default App;
