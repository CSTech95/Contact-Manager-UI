import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import CForm from './Components/CForm/CForm';
import Contact from './Components/Contact/Contact';
import TRows from './Components/TRows/TRows';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        users: [
      {id: 1,
      fName: 'Tom',
      lName: 'Ford',
      Usr: 'TFord23'
      }
    ]
      
    }
  }
  fNameReturn() {

  }
  render() {
    return (
      <div>
      <h1>Contact Manager UI</h1>
      <CForm />
      <br />
      {this.state.users.map((users) => {
        return <TRows
        id={users.id}
        fName={users.fName}
        lName={users.lName} 
        Usr={users.Usr}/>
      })}
      </div>
    );
  }
}

export default App;
