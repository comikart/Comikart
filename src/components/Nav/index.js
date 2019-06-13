import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'buttermilk';
import css from './styles.module.scss';
import btnStyles from '../Button/styles.module.scss';
import logo from '../../static/images/logo.png';
import settings from '../../static/icons/settings.png';
import cart from '../../static/icons/shopping-cart.png';
import Button from '../Button';
import Hamburger from '../Hamburger';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHamburger: false,
    };
  }

  handleHamburger = () => {
    this.setState({ activeHamburger: !this.state.activeHamburger });
  };
  render() {
    const buttons = !this.props.user ? (
      <div className={css.nav__button_containerRight}>
        <Button style='primary'>Log in</Button>
        <Button>Sign Up</Button>
      </div>
    ) : (
      <div className={css.nav__button_containerRight}>
        <Link className={`${btnStyles.btn}`} href='/account'>
          <img src={settings} alt='a cog wheel icon for the settings button' />
          Account
        </Link>
        <Link className={`${btnStyles.btn}`} href='/cart'>
          <img src={cart} alt='a cart icon for the cart button' />
          Cart
        </Link>
      </div>
    );

    return (
      <nav className={css.nav}>
        <Link href='/' className={css.nav__image_container}>
          <img src={logo} alt='logo' className={css.nav__logo} />
        </Link>
        <Hamburger
          isActive={this.state.activeHamburger}
          handleHamburger={this.handleHamburger}
        />
        {buttons}
      </nav>
    );
  }
}

const stateToProps = state => {
  return { ...state };
};

export default connect(stateToProps)(Nav);
