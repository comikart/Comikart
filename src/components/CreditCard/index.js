import React from 'react';
import Button from '../Button';
import css from './styles.module.scss';

const sensorNum = str => {
  str = str.split('');
  str.splice(0, 10, '**********');
  return str.join('');
};

const CreditCard = props => (
  <div className={css.CreditCard}>
    <p className={css.CreditCard__Digits}>{sensorNum(props.credit_card)}</p>
    <p className={css.CreditCard__Exp}>{`${props.exp_month} / ${
      props.exp_year
    }`}</p>
    <div className={css.CreditCard__ButtonGroup}>
      <Button style='primary'>Update</Button>
      <Button>Delete</Button>
    </div>
  </div>
);

export default CreditCard;
