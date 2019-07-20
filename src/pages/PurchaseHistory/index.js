import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountHOC from '../../components/AccountHOC';
import { getPurchaseHistory } from '../../actions/userActions';

class PurchaseHistory extends Component {
  state = {};
  componentDidMount() {
    this.props.getPurchaseHistory();
  }
  render() {
    return (
      <AccountHOC>
        <h2>Purchase History</h2>
        {this.props.user && this.props.user.purchaseHistory.length > 0 ? (
          this.props.user.purchaseHistory.map((e, i) => <p>{e.date_created}</p>)
        ) : (
          <p>No Purchase History Recorded</p>
        )}
      </AccountHOC>
    );
  }
}

export default connect(
  state => state,
  { getPurchaseHistory },
)(PurchaseHistory);
