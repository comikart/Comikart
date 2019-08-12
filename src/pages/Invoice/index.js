import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render() {
    const { cart } = this.props.user;
    const { paymentOptions } = this.props.user;
    const { street, city, zip_code, tax } = this.state;
    const subtotal = cart.reduce((acc, curr) => {
      return acc + parseInt(curr.product.unit_price) * parseInt(curr.quantity);
    }, 0);
    return (
      <div>
        <h1>Invoice Page</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div
            style={{
              minHeight: '400px',
              border: '1px solid black',
              width: '50%',
            }}
          >
            <h1>Cart Stuff</h1>
            {cart.map(item => (
              <div>
                <h2>{item.product.title}</h2>
                <h2>${item.product.unit_price}</h2>
              </div>
            ))}
          </div>
          <div
            style={{
              minHeight: '400px',
              border: '1px solid black',
              width: '50%',
            }}
          >
            <h1> Choose billing option</h1>
            {paymentOptions.map(
              option =>
                option.active && (
                  <div
                    style={{
                      border: 'black solid 1px',
                    }}
                  >
                    <h2>{option.credit_card}</h2>
                    <h2>{option.billing_address}</h2>
                    <h2>{option.exp}</h2>
                  </div>
                ),
            )}
            <h1>Shipping Address</h1>
            <form>
              <input
                placeholder='Street'
                name='street'
                value={street}
                onChange={this.handleInput}
              />
              <input
                placeholder='City'
                name='city'
                value={city}
                onChange={this.handleInput}
              />
              <input
                placeholder='Zip'
                name='zip_code'
                value={zip_code}
                onChange={this.handleInput}
              />
            </form>
            <button onClick={this.onClick}>Same as Billing Address</button>
            <h1>La Cuenta</h1>
            <h3>Sub-Total: ${subtotal}</h3>
            <h3>Sales Tax : {tax * 100}%</h3>
            <h3>Total: ${(subtotal + subtotal * tax).toFixed(2)}</h3>
          </div>
        </div>
        <button onClick={() => this.purchase}>Place Order</button>
      </div>
    );
  }
}

export default connect(
  state => state,
  {},
)(Invoice);
