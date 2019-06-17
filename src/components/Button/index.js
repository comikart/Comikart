import React, { Component } from 'react';
import css from './styles.module.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = this.props.style === 'primary' ? css.btnPrimary : '';
    const size = this.props.size === 'large' ? css.btnLarge : '';
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

export default Button;
