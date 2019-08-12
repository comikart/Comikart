import * as userActions from '../actions/userActions';
import * as productActions from '../actions/productActions';

const init = {
  products: null,
  categories: [],
  publishers: ['DC Comics', 'Marvel'],
  authors: [],
  user: null,
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
          purchaseHistory: [...state.user.purchaseHistory, ...action.payload],
        },
      });

    case userActions.ADDEDITEMTOCART:
      return { ...state, ...{ user: { ...state.user, cart: action.payload } } };

    case userActions.DELETEDCARTITEM:
      return { ...state, ...{ user: { ...state.user, cart: action.payload } } };

    case userActions.UPDATEDCARTITEM:
      return { ...state, ...{ user: { ...state.user, cart: action.payload } } };

    case userActions.ERROR:
      return Object.assign({}, state, { error: action.payload });

    case productActions.COMPLETEPRODUCTACTION:
      return Object.assign({}, state, { products: action.payload });
    default:
      return state;
  }
};

export default userReducer;
