import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const USER_BASEPATH = '/api/user';

export const FETCHINGUSER = 'FETCHINGUSER';
export const CREATINGUSER = 'CREATINGUSER';
export const UPDATINGUSER = 'UPDATINGUSER';
export const COMPLETE = 'COMPLETED ACTION';
export const ERROR = 'ERROR';

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

export const register = () => {
  const promise = axios.post(`${API_URL}${USER_BASEPATH}/register`);
  return dispatch => {
    dispatch({ type: CREATINGUSER });
    promise
      .then(res => dispatch({ type: COMPLETE, payload: res.data.user }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
