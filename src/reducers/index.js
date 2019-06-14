import * as userActions from '../actions/userActions';

const init = {
  products: [],
  categories: [],
  publishers: [],
  authors: [],
  user: {
    first_name: 'john',
    last_name: 'doe',
    cart: [{ id: '1', title: 'comic book' }],
    role: { id: '2', description: 'client' },
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
