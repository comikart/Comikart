import React, { Component } from 'react';
import css from './styles.module.scss';
import { Link } from 'buttermilk';
import defaultImage from '../../static/images/default_product.png';
import { connect } from 'react-redux';

const updateType = { INCR: 'INCR', DECR: 'DECR' };
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
      changesMade: false,
    };
  }
  handleMoveToCart = () => {
    // TODO implement an action which moves the cart item to wish list
    console.log('moving to wish list');
  };
  handleQuantity = type => {
    this.setState(prevState => {
      let { quantity } = prevState;
      // checking the enum for the type of operation to perform
      quantity = type === updateType.INCR ? quantity + 1 : quantity - 1;
      // constraints
      quantity = quantity < 0 ? 0 : quantity > 10 ? 10 : quantity;
      // returning state
      return { quantity, changesMade: true };
    });
  };
  handleSubmitChanges = () => {
    // TODO add an action which should update the changes to the cart item on the server side
    const { quantity } = this.state;
    const { id } = this.props.product;
    this.props.updateAction(id, quantity);
    this.setState({ changesMade: false });
  };
  render() {
    return (
      <div className={css.container}>
        <div className={css.container__section}>
          <img
            src={defaultImage}
            className={css.container__productImage}
            alt='a pic of the product'
          />
        </div>
        <div className={css.container__section}>
          <h1 className={css.container__headerText}>
            <Link href={`/products/${this.props.product_id}`}>
              {this.props.product.title}
            </Link>
          </h1>
          <p className={css.container__text}>by: {this.props.product.author}</p>
          <p className={css.container__text}>
            issue: {this.props.product.issue}
          </p>
          <p className={css.container__text}>
            publisher: {this.props.product.publisher}
          </p>
        </div>
        <div className={css.container__section}>
          <h2 className={`${css.container__text} ${css.center}`}>Quantity</h2>
          <div className={css.quantity}>
            <div
              className={css.quantity__box}
              onClick={() => this.handleQuantity(updateType.DECR)}
            >
              -
            </div>
            <div className={css.quantity__box}>{this.state.quantity}</div>
            <div
              className={css.quantity__box}
              onClick={() => this.handleQuantity(updateType.INCR)}
            >
              +
            </div>
          </div>
        </div>
        <div className={css.container__section}>
          <h1 className={`${css.container__text} ${css.center}`}>
            ${this.props.product.unit_price * this.props.quantity}
          </h1>
          <p
            className={`${css.container__text} ${css.center} ${css.link}`}
            onClick={this.handleMoveToCart}
          >
            Move to wish list
          </p>
          <p
            className={`${css.container__text} ${css.center} ${css.link}`}
            onClick={() => this.props.removeAction(this.props.product_id)}
          >
            remove
          </p>
          {this.state.changesMade ? (
            <p
              className={`${css.container__text} ${css.center} ${css.link}`}
              onClick={this.handleSubmitChanges}
            >
              save changes
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}
const stateToProps = state => state;

export default connect(
  stateToProps,
  {},
)(CartItem);
