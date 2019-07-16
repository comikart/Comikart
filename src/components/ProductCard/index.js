import React from 'react';

import defaultProductImg from '../../static/images/default_product.png';

const ProductCard = props => {
  const { title, unit_price, publisher, author, issue } = props.product;
  return (
    <div>
      <img src={defaultProductImg} alt="Default Comic" />
      <h1>Title {title}</h1>
      <h2>Unit Price {unit_price}</h2>
      <h2>Publisher {publisher}</h2>
      <h2>Author {author}</h2>
      <h2>Issue #{issue}</h2>
    </div>
  );
};

ProductCard.defaultProps = {
  product: {
    title: 'Title',
    unit_price: 0.99,
    publisher: 'Publisher',
    author: 'Author',
    issue: '100',
  },
};
export default ProductCard;
