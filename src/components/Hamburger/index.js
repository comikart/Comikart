import React from 'react';
import css from './styles.module.scss';

const Hamburger = props => (
  <div
    className={`${css.Hamburger} ${props.isActive ? css.HamburgerActive : ''}`}
    onClick={props.handleHamburger}
  >
    <div className={css.Hamburger__Line} />
    <div className={css.Hamburger__Line} />
    <div className={css.Hamburger__Line} />
  </div>
);

export default Hamburger;
