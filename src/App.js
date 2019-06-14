import React, { Component } from 'react';
import { Router } from 'buttermilk';
import Nav from './components/Nav';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';
import css from './app.module.scss';
import { connect } from 'react-redux';

const routes = [
  {
    path: '/',
    render: props => (
      <React.Fragment>
        <h1>
          Landing page. <br />
          Implement Me! <br />
        </h1>
      </React.Fragment>
    ),
  },
  {
    path: '/products(?title=*)(?category=*)(?publisher=*)',
    render: props => (
      <div>
        <h1>Products Page</h1>
        <ul>
          {Object.entries(props.location.params).map((set, i) => (
            <li key={set[0] + set[1] + i}>
              <h2>
                query: {set[0]}, value: {set[1]}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    path: '/products/:id',
    render: () => <h1>Product Details Page</h1>,
  },
  {
    path: '/account',
    render: () => <h1>Account Details Page.</h1>,
  },
  {
    path: '/account/purchase-history',
    render: () => <h1>Purchase History Records</h1>,
  },
  {
    path: '/account/purchase-history/:id',
    render: () => <h1>Past Purchase Record Details</h1>,
  },
  {
    path: '/account/payment-methods',
    render: () => <h1>Payment Methods</h1>,
  },
  {
    path: '/cart',
    render: () => <h1>Cart Page</h1>,
  },
  {
    path: '/cart/purchase',
    render: () => <h1>Invoice Details for Current Cart</h1>,
  },
  {
    path: '/wish-list',
    render: () => <h1>Wish List Page</h1>,
  },
  {
    path: '/about-us',
    render: () => <h1>About us page</h1>,
  },
  {
    path: '/faq',
    render: () => <h1>Frequently asked questions page</h1>,
  },
  {
    path: '*',
    render: () => <h1>Missing Page.</h1>,
  },
];

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerModal: false,
      signInModal: false,
    };
  }
  handleModalToggle = modalName => {
    const otherModal =
      modalName === 'registerModal' ? 'signInModal' : 'registerModal';
    this.setState({ [modalName]: !this.state[modalName], [modal]: false });
  };
  render() {
    return (
      <div className={css.App}>
        <Nav toggle={this.handleModalToggle} />
        {this.state.registerModal ? (
          <RegisterModal toggle={this.handleModalToggle} />
        ) : null}
        {this.state.signInModal ? (
          <LoginModal toggle={this.handleModalToggle} />
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

function App() {
  return <Router routes={routes} outerComponent={Base} />;
}

const stateToProps = state => {
  return { ...state };
};

export default connect(
  stateToProps,
  {},
)(App);
