import React, { Component } from 'react';
import { connect } from 'react-redux';

import defaultProductImg from '../../static/images/default_product.png';

class Products extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <div>
              <img src={defaultProductImg} alt="Default" />
              <h1>Title {product.title}</h1>
              <h2>Unit Price {product.unit_price}</h2>
              <h2>Publisher {product.publisher}</h2>
              <h2>Author {product.author}</h2>
              <h2>Issue {product.issue}</h2>
            </div>
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
