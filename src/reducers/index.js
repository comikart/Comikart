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
    purchaseHistory: [
      {
        id: 1,
        date_created: '2019-06-04T01:58:30.529Z',
        address_one: '123 wambam st.',
        address_two: null,
        full_name: 'lorem ipsum',
        city: 'Las Vegas',
        state: 'NV',
        zip: '89027',
        country: 'US',
        phone: '+1 555 555 5555',
        email: 'lorem@email.com',
        status_id: 1,
        user_id: 1,
        invoice_id: 1,
      },
      {
        id: 4,
        date_created: '2019-06-08T16:21:52.008Z',
        address_one: null,
        address_two: null,
        full_name: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        phone: null,
        email: null,
        status_id: 1,
        user_id: 1,
        invoice_id: 4,
      },
    ],
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
  fetchingPurchaseHistory: false,
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

    case userActions.FETCHINGPURCHASEHISTORY:
      return Object.assign({}, state, { fetchingPurchaseHistory: true });
    case userActions.FETCHEDPURCHASEHISTORY:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          purchaseHistory: { ...state.user.purchaseHistory, ...action.payload },
        },
      });
    case userActions.ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export default userReducer;
