import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const PREFIX = `${API_URL}/api/product`;

export const FETCHINGPRODUCTS = 'FETCHINGPRODUCTS';
export const COMPLETEPRODUCTACTION = 'COMPLETEPRODUCTACTION';
export const PRODUCTERROR = 'PRODUCTERROR';

export const getProducts = () => {
  const promise = axios.get(`${PREFIX}`);
  return dispatch => {
    dispatch({ type: FETCHINGPRODUCTS });
    promise
      .then(res => dispatch({ type: COMPLETEPRODUCTACTION, payload: res.data }))
      .catch(err => dispatch({ type: PRODUCTERROR, payload: err }));
  };
};
