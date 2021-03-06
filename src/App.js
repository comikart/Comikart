import React, { Component } from 'react';
import { Router } from 'buttermilk';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';

import css from './app.module.scss';

const routes = [
  {
    path: '/',
    render: () => React.lazy(() => import('./pages/Products')),
  },
  {
    path: '/products(?title=*)(?category=*)(?publisher=*)',
    render: () => React.lazy(() => import('./pages/Products')),
  },
  {
    path: '/products/:id',
    render: () => React.lazy(() => import('./pages/ProductDetails')),
  },
  {
    path: '/account',
    render: () => React.lazy(() => import('./pages/Account')),
  },
  {
    path: '/account/purchase-history',
    render: () => React.lazy(() => import('./pages/PurchaseHistory')),
  },
  {
    path: '/account/purchase-history/:id',
    render: () => <h1>Past Purchase Record Details</h1>,
  },
  {
    path: '/account/payment-methods',
    render: () => React.lazy(() => import('./pages/PaymentMethods')),
  },
  {
    path: '/cart',
    render: () => React.lazy(() => import('./pages/Cart')),
  },
  {
    path: '/cart/purchase',
    render: () => React.lazy(() => import('./pages/Invoice')),
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
    this.setState(prevState => ({
      [modalName]: !prevState[modalName],
      [otherModal]: false,
    }));
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
