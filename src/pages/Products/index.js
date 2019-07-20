import React, { Component } from 'react';
import { connect } from 'react-redux';

import css from './styles.module.scss';
import ProductCard from '../../components/ProductCard';

class Products extends Component {
  render() {
    return (
      <div className={css.container}>
        {this.props.products.map(product => {
          return (
            <React.Fragment key={product.id}>
                <ProductCard product={product} />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default connect(
  state => state,
  {},
)(Products);
