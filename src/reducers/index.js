import * as userActions from '../actions/userActions';

const init = {
  products: [],
  categories: [],
  publishers: [],
  authors: [],
  user: {
    first_name: 'john',
    last_name: 'doe',
    id: '1',
    email: 'john@email.com',
    role_id: 2,
    cart: [
      {
        user_id: 1,
        product_id: 1,
        quantity: 1,
        product: {
          id: 1,
          title: 'Batman: The killing joke, Deluxe Edition',
          unit_price: 19.99,
          publisher: 'DC Comics',
          author: 'Scott Snyder',
          issue: '6',
        },
      },
      {
        user_id: 1,
        product_id: 1,
        quantity: 1,
        product: {
          id: 1,
          title: 'Batman',
          unit_price: 4.99,
          publisher: 'DC Comics',
          author: 'Scott Snyder',
          issue: '6',
        },
      },
      {
        user_id: 1,
        product_id: 1,
        quantity: 1,
        product: {
          id: 1,
          title: 'Superman',
          unit_price: 9.99,
          publisher: 'DC Comics',
          author: 'Scott Snyder',
          issue: '6',
        },
      },
    ],
    paymentOptions: [],
  },
  fetchingUser: false,
  addingUser: false,
  updatingUser: false,
  deletingUser: false,
  error: null,
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case userActions.FETCHINGUSER:
      return Object.assign({}, state, { fetchingUser: true });
    case userActions.COMPLETE:
      return Object.assign({}, state, {
        user: action.payload,
        fetchingUser: false,
      });
    case userActions.ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export default userReducer;
