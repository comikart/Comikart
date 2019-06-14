import React, { Component } from 'react';
import css from './styles.module.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = this.props.style === 'primary' ? css.btnPrimary : '';
    return (
      <button onClick={this.props.onClick} className={`${css.btn} ${style}`}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
