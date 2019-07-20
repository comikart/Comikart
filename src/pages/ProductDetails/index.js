import React, { Component } from 'react';
import axios from 'axios';

import defaultProductImage from '../../static/images/default_product.png';

class ProductDetails extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    this.retrieveProduct();
  }

  retrieveProduct = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/product/${Number(
        this.props.params.id,
      )}`,
    );
    const product = await response.data[0];
    this.setState(() => ({ product }));
  };

  render() {
    const {
      title,
      description,
      unit_price,
      publisher,
      author,
      series,
      issue,
      paperback,
      isbn,
      weight,
      dimensions,
      is_discontinued,
    } = this.state.product;
    return (
      <div style={{ width: '100%', marginLeft: '30%' }}>
        <img src={defaultProductImage} alt="Default Comic" />
        <h1>Title: {title}</h1>
        <p>Description: {description}</p>
        <h3>Series: {series}</h3>
        <h3>Author: {author}</h3>
        <h3>Publisher: {publisher}</h3>
        <h3>Issue: {issue}</h3>
        <h3>Paperback: {paperback}</h3>
        <h3>isbn: {isbn}</h3>
        <h3>Weight: {weight}</h3>
        <h3>Dimensions: {dimensions}</h3>
        {is_discontinued ? (
          <h3>Sold Out</h3>
        ) : (
          <h3>Unit Price: {unit_price}</h3>
        )}
      </div>
    );
  }
}

export default ProductDetails;
