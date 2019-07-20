import * as userActions from '../actions/userActions';

const init = {
  products: [
    {
      id: 1,
      title: 'Batman: The killing joke, Deluxe Edition',
      unit_price: 19.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 2,
      title: 'Batman',
      unit_price: 4.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 3,
      title: 'Superman',
      unit_price: 9.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 4,
      title: 'Aquaman',
      unit_price: 9.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 5,
      title: 'Batman: The killing joke, Deluxe Edition',
      unit_price: 19.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 6,
      title: 'Batman',
      unit_price: 4.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 7,
      title: 'Superman',
      unit_price: 9.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 8,
      title: 'Aquaman',
      unit_price: 9.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 9,
      title: 'Batman: The killing joke, Deluxe Edition',
      unit_price: 19.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 10,
      title: 'Batman',
      unit_price: 4.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '6',
    },
    {
      id: 11,
      title: 'Superman',
      unit_price: 9.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '11',
    },
    {
      id: 12,
      title: 'Aquaman',
      unit_price: 9.99,
      publisher: 'DC Comics',
      author: 'Scott Snyder',
      issue: '12',
    },
  ],
  categories: [],
  publishers: ['DC Comics', 'Marvel'],
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
    paymentOptions: [
      {
        credit_card: 1213212132,
        billing_address: '123 Jay St',
        exp: '1/2/2007',
        security_number: 123,
        active: false,
      },
      {
        credit_card: 12322322132,
        billing_address: '123 Jay St',
        exp: '1/2/2027',
        security_number: 123,
        active: true,
      },
      {
        credit_card: 6666662132,
        billing_address: '123 Jay St',
        exp: '1/2/2022',
        security_number: 123,
        active: true,
      },
    ],
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
