import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'buttermilk';
import css from './styles.module.scss';
import btnStyles from '../Button/styles.module.scss';
import logo from '../../static/images/logo.png';
import settings from '../../static/icons/settings.png';
import cart from '../../static/icons/cart-white.png';
import search from '../../static/icons/search.png';
import Button from '../Button';
import Hamburger from '../Hamburger';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHamburger: false,
      search: '',
    };
  }
  handleHamburger = () => {
    this.setState({ activeHamburger: !this.state.activeHamburger });
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const buttons = !this.props.user ? (
      <React.Fragment>
        <Button
          onClick={() => this.props.toggle('signInModal')}
          style='primary'
        >
          Log in
        </Button>
        <Button onClick={() => this.props.toggle('registerModal')}>
          Sign Up
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Link className={`${btnStyles.btn}`} href='/account'>
          <img src={settings} alt='a cog wheel icon for the settings button' />
          Account
        </Link>
        <Link
          className={`${btnStyles.btn} ${btnStyles.btnPrimary}`}
          href='/cart'
        >
          <img src={cart} alt='a cart icon for the cart button' />
          Cart
          {this.props.user.cart !== undefined &&
          this.props.user.cart.length > 0 ? (
            <div className={btnStyles.btn__notification_bubble}>
              {this.props.user.cart.length}
            </div>
          ) : null}
        </Link>
      </React.Fragment>
    );

    return (
      <nav className={css.nav}>
        <Link href='/' className={css.nav__image_container}>
          <img src={logo} alt='logo' className={css.nav__logo} />
        </Link>
        <div className={css.nav__button_containerLeft}>
          <Hamburger
            isActive={this.state.activeHamburger}
            handleHamburger={this.handleHamburger}
          />
        </div>
        <div className={css.nav__button_containerMiddle}>
          <input
            name='search'
            onChange={this.handleInput}
            className={css.nav__search_bar}
          />
          <a
            className={css.nav__icon_container}
            href={`/products?title=${this.state.search}`}
          >
            <img src={search} alt='search bar icon' />
          </a>
        </div>
        <div className={css.nav__button_containerRight}>{buttons}</div>
      </nav>
    );
  }
}

const stateToProps = state => {
  return { ...state };
};

export default connect(stateToProps)(Nav);
