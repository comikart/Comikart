import React from 'react';
import { Router } from 'buttermilk';

function App() {
  return (
    <div className='App'>
      <Router
        routes={[
          {
            path: '/',
            render: () => (
              <div>
                <h1>
                  Landing page. <br />
                  Implement Me!
                </h1>
              </div>
            ),
          },
          {
            path: '/products',
            render: props => (
              <div>
                <h1>Products Page</h1>
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
        ]}
      />
    </div>
  );
}

export default App;
