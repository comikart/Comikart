import React, { Component } from 'react';
import AccountHOC from '../../components/AccountHOC';

class Account extends Component {
  state = {};
  render() {
    return (
      <AccountHOC>
        <h1>Hello, World!</h1>
      </AccountHOC>
    );
  }
}

export default Account;
