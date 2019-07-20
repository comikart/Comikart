import React from 'react';
import { Link } from 'buttermilk';

import css from './styles.module.scss';
import Button from '../Button';
import defaultProductImg from '../../static/images/default_product.png';

const ProductCard = props => {
  const { id, title, unit_price, publisher, author, issue } = props.product;
  return (
    <div className={css.container}>
      <Link className={css.container__link} href={`products/${id}`}>
        <img
          src={defaultProductImg}
          alt="Default Comic"
          className={css.container__img}
          />
      </Link>
      <div className={css.container__content}>
        <h1 className={css.container__content_title}>{title}</h1>
        <h2>Publisher {publisher}</h2>
        <h2>Author {author}</h2>
        <h2>Issue #{issue}</h2>
        <h2>
          <span className={css.container__content_unit_price}>
            ${unit_price}{' '}
          </span>
        </h2>
      </div>
      <div className={css.container__button__group}>
        <Button style="primary">Cart</Button>
        <Button>Wish List</Button>
      </div>
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
