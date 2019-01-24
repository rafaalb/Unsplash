import axios from 'axios';
import _ from 'lodash';
import { endpoint, ACCESS_KEY } from '../../config';

export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';
export const FETCH_ITEM = 'FETCH_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const SEARCH_ITEMS = 'SEARCH_ITEMS';
export const SEARCH_SUCCESS = 'SEARCH_ITEMS_SUCCESS';
export const SORT_ITEMS = 'SORT_ITEMS';
export const SORT_SUCCESS = 'SORT_SUCCESS';
export const FILTER_ITEMS = 'FILTER_ITEMS';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';

const fetchItemsSuccess = (payload) => ({
  type: FETCH_ITEM_SUCCESS,
  result: payload.Brastlewark
});

const fetchItemsFailure = () => ({
  type: FETCH_ITEM_FAILURE
});

export const addItems = () => ({
  type: ADD_ITEMS
});


export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEM });
    return axios.get(`${endpoint}/photos/?client_id=${ACCESS_KEY}`)
      .then(res => {
        if (res.status === 200) {
          return dispatch(fetchItemsSuccess(res.data))
        }
      })
      .catch(err => dispatch(fetchItemsFailure()))
  }
}

export const searchItems = (term) => {
  return (dispatch, getState) => {
    dispatch({ type: SEARCH_ITEMS });
    const items =  getState().items;
    const data = items.data.filter(item => {
      return item.name.toLowerCase().includes(term.toLowerCase())
    });
    setTimeout(() => {
      dispatch({ type: SEARCH_SUCCESS, result: data });
    }, 2000);
  }
}

export const sortByName = (property, order) => {
  return (dispatch, getState) => {
    dispatch({ type: SORT_ITEMS });
    const items = getState().items;

    let data = _.sortBy(items.data, property, order);
    if (order === 'desc') data = data.reverse();
    setTimeout(() => {
      dispatch({ type: SORT_SUCCESS, result: data });
    }, 2000);
  }
}

export const filterByAge = (min, max) => {
  return (dispatch, getState) => {
    dispatch({ type: FILTER_ITEMS });
    const items =  getState().items;
    const filtered = items.data.filter((item) => {
      return min <= item.age  && max >= item.age;
    });
    setTimeout(() => {
      dispatch({ type: FILTER_SUCCESS, result: filtered });
    }, 2000);
  }
}