import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import CForm from './Components/CForm/CForm';
import Contact from './Components/Contact/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = [
      {
      id: null,
      fName: 'First',
      lName: 'Last',
      Usr: 'Username'
    }
  ]
  }
  fNameReturn() {

  }
  render() {
    return (
      <div>
      <h1>Contact Manager UI</h1>
      <CForm />
      <br />
      <Contact />
      </div>
    );
  }
}

export default App;
