import React, { Component } from 'react';
import AccountHOC from '../../components/AccountHOC';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import css from './styles.module.scss';

class Account extends Component {
  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    email: this.props.user.email,
    changes: false,
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value, changes: true });
  };
  handleSubmit = () => {
    this.setState({ changes: false });
  };
  render() {
    return (
      <AccountHOC>
        <div className={css.Container}>
          <h2 className={css.Container__Title}>
            {`${this.props.user.first_name.toUpperCase()} ${this.props.user.last_name.toUpperCase()}'S Account`}
          </h2>
          <p className={css.Container__Text}>
            Control, Protect and secure your Account.
          </p>
          <div className={css.Box}>
            <p className={css.Box__Label}>First Name</p>
            <input
              className={css.Box__Input}
              name='first_name'
              value={this.state.first_name}
              onChange={this.handleInput}
            />
          </div>
          <div className={css.Box}>
            <p className={css.Box__Label}>Last Name</p>
            <input
              className={css.Box__Input}
              name='last_name'
              value={this.state.last_name}
              onChange={this.handleInput}
            />
          </div>
          <div className={css.Box}>
            <p className={css.Box__Label}>Email</p>
            <input
              className={css.Box__Input}
              name='email'
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          {this.state.changes ? (
            <div className={css.ButtonContainer}>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </div>
          ) : null}
        </div>
      </AccountHOC>
    );
  }
}

export default connect(
  state => state,
  {},
)(Account);
