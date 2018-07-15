import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../CForm/CForm.css';
export default class CForm extends React.Component {

  captureInput(e) {
    const k = e.target.value;
    console.log(k);
  }
  render() {
    return (
      <Form>
        <div class='abc'>
        <FormGroup>
          <Label for="exampleEmail">First Name </Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="Enter First Name" />
        </FormGroup>
        </div>
        
        <div class='abc'>
        <FormGroup>
          <Label for="examplePassword">Last Name </Label>
          <Input type="text" name="password" id="examplePassword" placeholder="Enter Last Name" />
        </FormGroup>
</div>
<div class='abc'>
        <FormGroup>
          <Label for="examplePassword">User Name </Label>
          <Input type="email" name="password" id="examplePassword" placeholder="Enter User Name" />
        </FormGroup>
</div>
<button>+</button>

      </Form>
      
    );
  }
}