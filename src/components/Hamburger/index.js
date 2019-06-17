import React from 'react';
import css from './styles.module.scss';
import { Link } from 'buttermilk';
import { connect } from 'react-redux';

const Hamburger = props => (
  <div
    className={`${css.Hamburger} ${props.isActive ? css.HamburgerActive : ''}`}
    onClick={props.handleHamburger}
  >
    <div className={css.Hamburger__Line} />
    <div className={css.Hamburger__Line} />
    <div className={css.Hamburger__Line} />
    <div className={css.DropDown} onClick={e => e.stopPropagation()}>
      <div className={css.DropDown__Account}>
        <h1 className={css.DropDown__Header}>Account Options</h1>
        <Link href='/account' className={css.DropDown__Link}>
          Account Settings
        </Link>
        <Link href='/cart' className={css.DropDown__Link}>
          Cart
        </Link>
      </div>
      <h1 className={css.DropDown__Header}>Shop By Category</h1>
      <Link href='/products' className={css.DropDown__Link}>
        All Comics
      </Link>
      <h1 className={css.DropDown__Header}>Shop By Publisher</h1>
      {props.publishers.map((pub, i) => (
        <Link
          href={`/products?publisher=${pub}`}
          key={pub + i}
          className={css.DropDown__Link}
        >
          {pub}
        </Link>
      ))}
    </div>
  </div>
);

const stateToProps = state => state;

export default connect(
  stateToProps,
  {},
)(Hamburger);
