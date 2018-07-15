import React from 'react';
import { Table } from 'reactstrap';

export default class TRows extends React.Component {
  render() {
    return (
        <tr>
        <th scope="row">{this.props.id}</th>
        <td> <strong>First Name:</strong> {this.props.fName} <br/> </td>
        <td> <strong>Last Name:</strong> {this.props.lName} <br/> </td>
        <td> <strong>User Name:</strong> {this.props.Usr} <br/> </td>
      </tr>
    )
  }
}
