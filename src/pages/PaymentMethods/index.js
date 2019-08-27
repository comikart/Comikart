import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountHOC from '../../components/AccountHOC';

import css from './styles.module.scss';
import CreditCard from '../../components/CreditCard';
import Button from '../../components/Button';

import { createCreditCard } from '../../actions/userActions';

class PaymentMethods extends Component {
  state = {
    creditCardForm: false,
    creditCard: {},
  };
  handleCreditCardForm = () => {
    const { creditCardForm } = this.state;
    this.setState(prevState => ({ creditCardForm: !creditCardForm }));
  };
  handleInput = e => {
    this.setState(prevState => ({
      creditCard: { [e.target.name]: e.target.value },
    }));
  };
  render() {
    let creditForm = null;
    if (this.state.creditCardForm) {
      creditForm = (
        <div className={css.creditCard}>
          <input
            name='credit_card'
            maxlength='16'
            minlength='16'
            placeholder='5555-5555-5555-5555'
          />
          <input name='address_one' placeholder='Billing Address' />
          <input name='full_name' placeholder='Full Name' />
          <input name='postal_code' placeholder='Postal Code' />
          <input
            maxlength='4'
            minlength='3'
            name='exp_year'
            placeholder='Security Number'
          />
          <label for='exp_month'>Expiration Month</label>
          <select name='exp_month'>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
            <option value='04'>04</option>
            <option value='05'>05</option>
            <option value='06'>06</option>
            <option value='07'>07</option>
            <option value='08'>08</option>
            <option value='09'>09</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          <label for='exp_year'>Expiration Year</label>
          <select name='exp_year'>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
          <label for='country'>Country</label>
          <select name='country'>
            <option value='US'>US</option>
          </select>
          <label for='type_id'>Card Type</label>
          <select name='type_id'>
            <option value='1'>Debit</option>
            <option value='2'>Credit</option>
          </select>
          <div className={css.creditCard__ButtonGroup}>
            <Button style='primary'>Submit</Button>
            <Button onClick={this.handleCreditCardForm}>Cancel</Button>
          </div>
        </div>
      );
    }
    return (
      <AccountHOC>
        <div className={css.Container}>
          <h2 className={css.Container__Title}>Payment Methods</h2>
          <p className={css.Container__Text}>
            Update your credit card information.
          </p>
          {!this.state.creditCardForm ? (
            <Button style='primary' onClick={this.handleCreditCardForm}>
              New Card
            </Button>
          ) : null}

          <div className={css.Container__Content}>
            {creditForm}
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
  { createCreditCard },
)(PaymentMethods);
