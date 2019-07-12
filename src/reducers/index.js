import * as userActions from '../actions/userActions';

const init = {
  products: [],
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
        id: 1,
        credit_card: '424242424242',
        address_one: '123 whambam st',
        address_two: null,
        full_name: 'lorem ipsum',
        country: 'US',
        postal_code: '55555',
        exp_month: '05',
        exp_year: '2020',
        security_number: 444,
        active: false,
        user_id: 1,
        type_id: 1,
        title: 'debit',
      },
      {
        id: 1,
        credit_card: '424242424242',
        address_one: '123 whambam st',
        address_two: null,
        full_name: 'lorem ipsum',
        country: 'US',
        postal_code: '55555',
        exp_month: '05',
        exp_year: '2020',
        security_number: 444,
        active: false,
        user_id: 1,
        type_id: 1,
        title: 'debit',
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
