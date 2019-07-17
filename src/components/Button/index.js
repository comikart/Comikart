import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './styles.module.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = this.props.style === 'primary' ? css.btnPrimary : '';
    const size = this.props.size === 'large' ? css.btnLarge : '';
    console.log('props', this.props)
    return (
      <button
        onClick={this.props.onClick}
        className={`${css.btn} ${style} ${size}`}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  style: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
}

export default Button;
