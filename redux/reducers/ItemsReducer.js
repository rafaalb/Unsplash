import * as ACTIONS from '../actions/items';
import { itemsPerScroll } from '../../config'
const initialState = {
  data: [],
  tmpData: [],
  fetching: false,
  error: false,
  searching: false,
  shownItems: itemsPerScroll
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ITEM:
      return { ...state, fetching: true };
    case ACTIONS.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        data: action.result,
        tmpData: action.result.slice(0, state.shownItems),
        fetching: false
      };
    case ACTIONS.FETCH_ITEM_FAILURE:
      return { ...state, error: true, fetching: false };
    case ACTIONS.ADD_ITEMS:
      const more = state.data.slice(state.shownItems, state.shownItems + itemsPerScroll);
      return {
        ...state,
        tmpData: state.tmpData.concat(more),
        shownItems: state.shownItems + itemsPerScroll
      };
    case ACTIONS.SEARCH_ITEMS:
      return {
        ...state,
        searching: true,
      };
    case ACTIONS.SEARCH_SUCCESS:
      return {
        ...state,
        tmpData: action.result,
        searching: false,
      };
    case ACTIONS.SORT_ITEMS:
      return {
        ...state,
        searching: true
      };
    case ACTIONS.SORT_SUCCESS:
      return {
        ...state,
        searching: false,
        data: action.result,
        tmpData: action.result.slice(0, itemsPerScroll)
      };
    case ACTIONS.FILTER_ITEMS:
      return {
        ...state,
        searching: true,
      };
    case ACTIONS.FILTER_SUCCESS:
      return {
        ...state,
        searching: false,
        tmpData: action.result,
      };
    default:
      return state;
  }
}
