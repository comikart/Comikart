import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';

import css from './styles.module.scss';
import ProductCard from '../../components/ProductCard';

class Products extends Component {
  componentDidMount() {
    if (!this.props.products) {
      this.props.getProducts();
    }
  }
  render() {
    return (
      <div className={css.container}>
        {this.props.products
          ? this.props.products.map(product => {
              return (
                <React.Fragment key={product.id}>
                  <ProductCard product={product} />
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
  { getProducts },
)(Products);
