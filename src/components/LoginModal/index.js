import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './styles.module.scss';
import { login } from '../../actions/userActions';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      email: '',
      password: '',
      error: false,
      errorPhrase: 'Something went wrong.',
    };
  }
  handleToggle = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addActiveInput = e => {
    e.target.offsetParent.classList.add(css.inputActive);
    if (this.state.error) {
      this.setState({ error: false });
    }
  };
  removeActiveInput = e => {
    if (!e.target.value) {
      e.target.offsetParent.classList.remove(css.inputActive);
    }
  };
  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.login({ email, password });
    this.props.toggle('signInModal');
  };
  render() {
    return (
      <div
        className={css.Container}
        onClick={() => this.props.toggle('signInModal')}
      >
        <div
          className={css.Container__Inner}
          onClick={e => e.stopPropagation()}
        >
          <header>
            <h3>SIGN IN</h3>
          </header>
          <div
            className={`${css.error} ${
              this.state.error ? css.activeError : ''
            }`}
          >
            {this.state.errorPhrase}
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <div
              className={`${css.Container__InputContainer} ${css.marginBottom}`}
            >
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                value={this.state.email}
                onChange={this.handleInput}
                id='email'
                type='text'
                onFocus={this.addActiveInput}
                onBlur={this.removeActiveInput}
              />
            </div>
            <div className={css.Container__InputContainer}>
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                id='password'
                value={this.state.password}
                onChange={this.handleInput}
                type={this.state.showText ? 'text' : 'password'}
                onFocus={this.addActiveInput}
                onBlur={this.removeActiveInput}
              />
            </div>
            <input
              type='checkbox'
              name='showText'
              onClick={this.handleToggle}
            />{' '}
            Show Password
            <div className={css.Container__Submit}>
              <button onClick={this.handleSubmit}>Submit</button>
              <div className={css.Container__OtherLogin}>
                <div className={css.Container__OtherButton}>
                  <button className={css.blue}>Sign up with Facebook</button>
                </div>
                <div className={css.Container__OtherButton}>
                  <button className={css.orange}>Sign up with Google</button>
                </div>
              </div>
            </div>
            <div className={css.Container__Footer}>
              <p>Don't have an account? Sign up</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { login },
)(LoginModal);
