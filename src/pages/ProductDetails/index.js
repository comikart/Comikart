import React from 'react';

import defaultProductImage from '../../static/images/default_product.png';

const ProductDetails = props => {
  const product = {
    title: 'Spiderman',
    description: 'About a spider man',
    unit_price: '49.99',
    publisher: 'Fox',
    author: 'Stanley',
    series: 'Part of Spiderman and Family',
    issue: '3',
    paperback: 'No longer a tree',
    isbn: '1234',
    weight: 'heavy',
    dimensions: 'wide x long',
    is_discontinued: false,
  };
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
  } = product;

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
      {is_discontinued ? <h3>Sold Out</h3> : <h3>Unit Price: {unit_price}</h3>}
    </div>
  );
};

export default ProductDetails;
