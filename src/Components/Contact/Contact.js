import React from 'react';
import { Table } from 'reactstrap';
import TRows from '../TRows/TRows';

export default class Contact extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <TRows />
        </tbody>
      </Table>
    );
  }
}