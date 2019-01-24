import axios from 'axios';
import { endpoint, ACCESS_KEY } from '../../config';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS = 'FETCH_USERS';
export const SELECT_USER = 'SELECT_USER';

export const fetchUsers = (payload) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS })
    return axios
      .get(`${endpoint}/search/users?query=${payload}&client_id=${ACCESS_KEY}`)
      .then((res) => {
        const { data } = res;
        dispatch(fetchUsersSuccess(data))
      })
      .catch((err) => {
        dispatch(fetchUsersError(err))
      })
  }
}

export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload 
  }
}
export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error
  }
}

export const selectUser = (payload) => {
  return {
    type: SELECT_USER,
    payload
  }
}