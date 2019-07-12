import React, { Component } from 'react';
import AccountHOC from '../../components/AccountHOC';
import { connect } from 'react-redux';
import css from './styles.module.scss';

import CreditCard from '../../components/CreditCard';
import Button from '../../components/Button';

class PaymentMethods extends Component {
  state = {
    createCard: false,
  };
  render() {
    return (
      <AccountHOC>
        <div className={css.Container}>
          <h2 className={css.Container__Title}>Payment Methods</h2>
          <p className={css.Container__Text}>
            Update your credit card information.
          </p>
          <Button style='primary'>New Card</Button>
          <div className={css.Container__Content}>
            {this.props.user
              ? this.props.user.paymentOptions.map((e, i) => (
                  <CreditCard {...e} key={i + e.fullname} />
                ))
              : null}
          </div>
        </div>
      </AccountHOC>
    );
  }
}

export default connect(
  state => state,
  {},
)(PaymentMethods);
