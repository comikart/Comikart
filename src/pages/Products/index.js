import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';

import css from './styles.module.scss';
import ProductCard from '../../components/ProductCard';
import { addToCart } from '../../actions/userActions';

class Products extends Component {
  componentDidMount() {
    if (!this.props.products) {
      this.props.getProducts();
    }
  }

  addItemToCart = (quantity, product_id) => {
    const { id } = this.props.user;
    this.props.addToCart(id, quantity, product_id);
  };
  render() {
    return (
      <div className={css.container}>
        {this.props.products
          ? this.props.products.map(product => {
              return (
                <React.Fragment key={product.id}>
                  <ProductCard product={product} action={this.addItemToCart} />
                </React.Fragment>
              );
            })
          : null}
      </div>
    );
  }
}

export default connect(
  state => state,
  { getProducts, addToCart },
)(Products);
