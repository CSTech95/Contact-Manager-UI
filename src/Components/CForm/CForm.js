import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../CForm/CForm.css';
export default class CForm extends React.Component {
  render() {
    return (
      <Form>
        <div class='abc'>
        <FormGroup class='abc'>
          <Label for="exampleEmail">First Name</Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="Enter First Name" />
        </FormGroup>
        </div>
        
        <div class='abc'>
        <FormGroup class='abc'>
          <Label for="examplePassword">Last Name</Label>
          <Input type="text" name="password" id="examplePassword" placeholder="Enter Last Name" />
        </FormGroup>
</div>
<div class='abc'>
        <FormGroup class='abc'>
          <Label for="examplePassword">User Name</Label>
          <Input type="text" name="password" id="examplePassword" placeholder="Enter User Name" />
        </FormGroup>
</div>
<button>Go</button>

      </Form>
      
    );
  }
}