import React, { Component } from 'react';
import { connect } from 'react-redux';

import css from './styles.module.scss';

class Invoice extends Component {
  state = {
    street: '',
    city: '',
    zip_code: '',
    same_address: false,
    tax: 0.08,
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = () => {
    this.setState((state, props) => ({ same_address: !state.same_address }));
  };

  purchase = () => {
    /* API call to save invoice + compile the following for the POST
        - the shipping address 
            * String concatenate (street + city + zip_code) OR
            * this.props.user.selectedBillingOption's address)
        - subtotal
        - total
        - tax
        - date created
    */
  };

  // Implementation to select billing address

  render() {
    const { cart } = this.props.user;
    const { paymentOptions } = this.props.user;
    const { street, city, zip_code, tax } = this.state;
    const subtotal = cart.reduce((acc, curr) => {
      return acc + parseInt(curr.product.unit_price) * parseInt(curr.quantity);
    }, 0);

    return (
      <div className={css.Container}>
        <h1 className={css.Header}>Invoice Page</h1>
        <div className={css.Page}>
          <div className={css.Section}>
            <h1 className={css.Invoice__Header}> Choose Billing Option</h1>
            <div className={css.Billing}>
              <tr className={css.TableRow}>
                <th>Actions</th>
                <th>Credit Card</th>
                <th>Address</th>
                <th>Expire</th>
              </tr>
              {paymentOptions.map(option => (
                <tr className={css.TableRow}>
                  <td>
                    <input type="radio" name="chosen"/>
                  </td>
                  <td>{option.credit_card}</td>
                  <td>{option.address_one}</td>
                  <td>{option.exp_month + '/' + option.exp_year}</td>
                </tr>
              ))}
            </div>
            <div className={css.Shipping}>
              <h1 className={css.Invoice__Header}>Shipping Address</h1>
              <form className={css.Form}>
                <input
                  placeholder="Street"
                  name="street"
                  value={street}
                  onChange={this.handleInput}
                  className={css.Form__Input}
                />
                <input
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={this.handleInput}
                  className={css.Form__Input}
                />
                <input
                  placeholder="Zip"
                  name="zip_code"
                  value={zip_code}
                  onChange={this.handleInput}
                  className={css.Form__Input}
                />
              </form>
              <button className={css.Invoice__Button} onClick={this.onClick}>
                Same as Billing Address
              </button>
            </div>
            <div className={css.Invoice}>
              <h1 className={css.Invoice__Header}>Total</h1>
              <h2>Sub-Total: ${subtotal}</h2>
              <h2>Sales Tax : {tax * 100}%</h2>
              <h1>Total: ${(subtotal + subtotal * tax).toFixed(2)}</h1>
            </div>
          </div>
        </div>
        <button
          className={`${css.Invoice__Button} ${css.Invoice__Button__marginTop}`}
          onClick={() => this.purchase}
        >
          Place Order
        </button>
      </div>
    );
  }
}

export default connect(
  state => state,
  {},
)(Invoice);
