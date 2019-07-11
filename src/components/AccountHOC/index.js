import React, { Component } from 'react';
import { Link } from 'buttermilk';
import css from './styles.module.scss';

class AccountHOC extends Component {
  state = {};

  render() {
    return (
      <div className={css.Container}>
        <div className={css.Container__SideMenu}>
          <h2 className={css.Container__Title}>My Account</h2>
          <Link href='/account' className={css.Container__Link}>
            Settings
          </Link>
          <h2 className={css.Container__Title}>Orders</h2>
          <Link href='/purchase-history' className={css.Container__Link}>
            Order History
          </Link>
          <h2 className={css.Container__Title}>Manage Account</h2>
          <Link href='/payment-methods' className={css.Container__Link}>
            Payment Methods
          </Link>
        </div>
        <div className={css.Container__Content}>{this.props.children}</div>
      </div>
    );
  }
}

export default AccountHOC;
