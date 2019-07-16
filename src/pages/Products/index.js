import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from '../../components/ProductCard';

class Products extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <React.Fragment>
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
