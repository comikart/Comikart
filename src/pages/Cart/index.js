import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'buttermilk';

import css from './styles.module.scss';
import CartItem from '../../components/CartItem';
import btnStyles from '../../components/Button/styles.module.scss';

import { deleteFromCart, updateCartItem } from '../../actions/userActions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleRemoveProduct = product_id => {
    const { id } = this.props.user;
    this.props.deleteFromCart(id, product_id);
  };
  handleUpdateProduct = (product_id, quantity) => {
    const { id } = this.props.user;
    this.props.updateCartItem(id, product_id, quantity);
  };
  render() {
    const length = this.props.user.cart.length;
    const subTotal = this.props.user.cart.reduce(
      (accu, curr) => accu + curr.quantity * curr.product.unit_price,
      0,
    );
    return (
      <div className={css.container}>
        <header className={css.header}>
          <h1 className={css.header__title}>Your Cart</h1>
          <p className={css.header__text}>
            You have <span className={css.blue}>{length}</span>{' '}
            {length > 1 ? 'items' : 'item'} in your cart.
          </p>
        </header>
        <section className={css.cart__container}>
          {this.props.user.cart.map((item, i) => (
            <CartItem
              {...item}
              key={item.product.title + i}
              removeAction={this.handleRemoveProduct}
              updateAction={this.handleUpdateProduct}
            />
          ))}
          <div className={css.orderDetails}>
            <header className={css.orderDetails__header}>
              <h1 className={css.header__text}>
                <span className={css.textLeft}>Subtotal ({length} items):</span>
                <span className={css.textRight}>&nbsp;$ {subTotal}</span>
              </h1>
            </header>
            <div className={css.orderDetails__box}>
              <Link
                href='/cart/purchase'
                className={`${btnStyles.btn} ${btnStyles.btnPrimary} ${
                  btnStyles.btnLarge
                }`}
              >
                Checkout
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const stateToProps = state => ({ ...state });

export default connect(
  stateToProps,
  { deleteFromCart, updateCartItem },
)(Cart);
