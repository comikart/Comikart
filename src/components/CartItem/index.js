import React, { Component } from 'react';
import css from './styles.module.scss';
import { Link } from 'buttermilk';
import defaultImage from '../../static/images/default_product.png';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      changesMade: false,
    };
  }
  handleChanges = () => {
    !this.state.changesMade && this.setState({ changesMade: true });
  };
  render() {
    console.log(this.state);
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
          <p className={css.container__text}>
            issue: {this.props.product.issue}
          </p>
          <p className={css.container__text}>
            publisher: {this.props.product.publisher}
          </p>
          <p className={css.container__text}>
            Author: {this.props.product.author}
          </p>
        </div>
        <div className={css.container__section}>
          <h2 className={css.center}>Quantity</h2>
          <div className={css.quantity}>
            <div className={css.quantity__box}>-</div>
            <div className={css.quantity__box}>{this.props.quantity}</div>
            <div className={css.quantity__box}>+</div>
          </div>
        </div>
        <div className={css.container__section}>
          <p className={`${css.container__text} ${css.center}`}>
            Move to wish list
          </p>
          <p className={`${css.container__text} ${css.center}`}>remove</p>
        </div>
      </div>
    );
  }
}
export default CartItem;
