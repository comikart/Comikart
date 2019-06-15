import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import css from './styles.module.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const length = this.props.user.cart.length;
    return (
      <Fragment>
        <header className={css.header}>
          <h1 className={css.header__title}>Your Cart</h1>
          <p className={css.header__text}>
            You have <span className={css.blue}>{length}</span>{' '}
            {length > 1 ? 'items' : 'item'} in your cart.
          </p>
        </header>
        <section className={css.cart_container} />
      </Fragment>
    );
  }
}
const stateToProps = state => ({ ...state });

export default connect(
  stateToProps,
  {},
)(Cart);
