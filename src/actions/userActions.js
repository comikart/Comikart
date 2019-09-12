import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const USER_BASEPATH = '/api/user';

export const FETCHINGUSER = 'FETCHINGUSER';
export const CREATINGUSER = 'CREATINGUSER';
export const UPDATINGUSER = 'UPDATINGUSER';
export const LOGGINGOUTUSER = 'LOGGINGOUTUSER';
export const LOGGEDOUTUSER = 'LOGGEDOUTUSER';
export const COMPLETE = 'COMPLETED ACTION';
export const ERROR = 'ERROR';

export const FETCHINGCART = 'FETCHINGCART';
export const ADDINGITEMTOCART = 'ADDINGITEMTOCART';
export const ADDEDITEMTOCART = 'ADDEDITEMTOCART';
export const UPDATINGCARTITEM = 'UPDATINGCARTITEM';
export const UPDATEDCARTITEM = 'UPDATEDCARTITEM';
export const MOVEDITEMTOWISHLIST = 'MOVEDITEMTOWISHLIST';
export const DELETINGCARTITEM = 'DELETINGCARTITEM';
export const DELETEDCARTITEM = 'DELETEDCARTITEM';

export const FETCHINGPURCHASEHISTORY = 'FETCHINGPURCHASEHISTORY';
export const FETCHEDPURCHASEHISTORY = 'FETCHEDPURCHASEHISTORY';

export const MAKINGPURCHASE = 'MAKINGPURCHASE';

export const login = userDetails => {
  const promise = axios.post(`${API_URL}${USER_BASEPATH}/login`, userDetails);
  return dispatch => {
    dispatch({ type: FETCHINGUSER });
    promise
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        return dispatch({ type: COMPLETE, payload: res.data.user });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const register = form => {
  const config = { user: form };
  const promise = axios.post(`${API_URL}${USER_BASEPATH}/register`, config);
  return dispatch => {
    dispatch({ type: CREATINGUSER });
    promise
      .then(res => dispatch({ type: COMPLETE, payload: res.data.user }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const logout = token => {
  const headers = { headers: { Authorization: token } };
  const promise = axios.get(`${API_URL}${USER_BASEPATH}/logout`, headers);
  return dispatch => {
    dispatch({ type: LOGGINGOUTUSER });
    promise
      .then(res => dispatch({ type: LOGGEDOUTUSER }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const moveItemToWishList = (userId, productId, token) => {
  const config = { headers: { Authorization: token } };
  const promise = axios.get(
    `${API_URL}${USER_BASEPATH}/${userId}/cart/${productId}`,
    config,
  );
  return dispatch => {
    dispatch({ type: UPDATINGCARTITEM });
    promise
      .then(res => dispatch({ type: MOVEDITEMTOWISHLIST, payload: res.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const addToCart = (user_id, quantity = 1, product_id) => {
  const token = localStorage.getItem('jwt');
  const config = { headers: { Authorization: token } };
  const data = { product: { quantity, product_id } };
  const promise = axios.post(
    `${API_URL}${USER_BASEPATH}/${user_id}/cart`,
    data,
    config,
  );

  return dispatch => {
    dispatch({ type: ADDINGITEMTOCART });
    promise
      .then(res => dispatch({ type: ADDEDITEMTOCART, payload: res.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const deleteFromCart = (user_id, product_id) => {
  const token = localStorage.getItem('jwt');
  const config = { headers: { Authorization: token } };
  const promise = axios.delete(
    `${API_URL}${USER_BASEPATH}/${user_id}/cart/${product_id}`,
    config,
  );

  return dispatch => {
    dispatch({ type: DELETINGCARTITEM });
    promise
      .then(res => dispatch({ type: DELETEDCARTITEM, payload: res.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const updateCartItem = (user_id, product_id, quantity) => {
  const token = localStorage.getItem('jwt');
  const config = { headers: { Authorization: token } };
  const data = { quantity };
  const PREFIX = `${API_URL}${USER_BASEPATH}/${user_id}/cart/${product_id}`;
  const promise = axios.put(PREFIX, data, config);

  return dispatch => {
    promise
      .then(res => dispatch({ type: UPDATEDCARTITEM, payload: res.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const getPurchaseHistory = userId => {
  const token = localStorage.getItem('jwt');
  const config = { headers: { Authorization: token } };
  const promise = axios.get(
    `${API_URL}${USER_BASEPATH}/${userId}/purchase`,
    config,
  );

  return dispatch => {
    dispatch({ type: FETCHINGPURCHASEHISTORY });
    promise
      .then(res =>
        dispatch({ type: FETCHEDPURCHASEHISTORY, payload: res.data }),
      )
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const makePurchase = (userId, purchase) => {
  const token = localStorage.getItem('jwt');
  const config = { headers: { Authorization: token } };
  const promise = axios.post(
    `${API_URL}${USER_BASEPATH}/${userId}/purchase`,
    purchase,
    config,
  );

  return dispatch => {
    dispatch({
      type: MAKINGPURCHASE,
    });
    promise.then(res =>
      dispatch({ type: MAKINGPURCHASE, payload: res.data }).catch(err =>
        dispatch({ type: ERROR, payload: err }),
      ),
    );
  };
};
