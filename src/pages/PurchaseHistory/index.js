import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountHOC from '../../components/AccountHOC';

class PurchaseHistory extends Component {
  state = {};
  render() {
    return (
      <AccountHOC>
        <h2>Purchase History</h2>
      </AccountHOC>
    );
  }
}

export default connect(
  state => state,
  {},
)(PurchaseHistory);
