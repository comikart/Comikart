import React, { Component } from 'react';
import { connect } from 'react-redux';

import css from './styles.module.scss';
import { makePurchase } from '../../actions/userActions';

class Invoice extends Component {
  state = {
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zip_code: '',
    },
    payment_id: 1,
    same_address: false,
    tax: 0.08,
  };

  handleInput = (e, field) => {
    this.setState({
      address: { [e.target.name]: e.target.value },
    });
  };

  changePayment = id => {
    this.setState(() => ({ payment_id: id }));
  };

  onClick = () => {
    this.setState(prevState => ({ same_address: !prevState.same_address }));
  };

  purchase = () => {
    const { address, same_address, payment_id } = this.state;
    const { user } = this.props;
    const purchase = {
      address: same_address ? same_address : address,
      full_name: user.first_name + user.last_name,
      payment_id,
    };
    this.props.makePurchase(user.id, purchase);
  };

  render() {
    const { cart } = this.props.user;
    const { paymentOptions } = this.props.user;
    const { tax, payment_id, same_address } = this.state;
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
                    <input
                      type="radio"
                      name="payment_id"
                      checked={payment_id === option.id}
                      onChange={() => this.changePayment(option.id)}
                    />
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
                <fieldset disabled={same_address} className={css.Field}>
                  <input
                    placeholder="Street"
                    name="street"
                    onChange={this.handleInput}
                    className={css.Form__Input}
                  />
                  <input
                    placeholder="City"
                    name="city"
                    onChange={this.handleInput}
                    className={css.Form__Input}
                  />
                  <input
                    placeholder="State"
                    name="state"
                    onChange={this.handleInput}
                    className={css.Form__Input}
                  />
                  <input
                    placeholder="Country"
                    name="country"
                    onChange={this.handleInput}
                    className={css.Form__Input}
                  />
                  <input
                    placeholder="Zip"
                    name="zip_code"
                    onChange={this.handleInput}
                    className={css.Form__Input}
                  />
                </fieldset>
              </form>
              <div className={css.Form__Address}>
                <h1>Same as Billing Address</h1>
                <input
                  type="checkbox"
                  name="same_address"
                  className={css.Form__Button}
                  checked={same_address}
                  onChange={this.onClick}
                />
              </div>
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
          onClick={this.purchase}
        >
          Place Order
        </button>
      </div>
    );
  }
}

export default connect(
  state => state,
  {makePurchase},
)(Invoice);
