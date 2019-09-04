import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountHOC from '../../components/AccountHOC';
import { getPurchaseHistory } from '../../actions/userActions';
import css from './styles.module.scss';
import { Link } from 'buttermilk';

class PurchaseHistory extends Component {
  state = {};
  componentDidMount() {
    if (!this.props.user.purchaseHistory) {
      this.props.getPurchaseHistory(this.props.user.id);
    }
  }
  render() {
    return (
      <AccountHOC>
        {this.props.user.purchaseHistory &&
        this.props.user.purchaseHistory.length > 0 ? (
          <div className={CSS.container}>
            <div className={css.container__Header}>
              <h2 className={css.container__HeaderText}>Purchase History</h2>
              <p>Date</p>
              <p>Total</p>
              <p>Status</p>
              <p>Actions</p>
            </div>
            {this.props.user.purchaseHistory.map((e, i) => (
              <div className={css.purchaseHistory}>
                <h2 className={css.container__HeaderText}>1 item purchased</h2>
                <p>{new Date(e.date_created).toISOString().slice(0, 10)}</p>
                <p>Total</p>
                <p>shipping</p>
                <Link href={`/account/purchase-history/${e.id}`}>Details</Link>
              </div>
            ))}
          </div>
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
