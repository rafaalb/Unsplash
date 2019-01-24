import * as ACTIONS from '../actions/items';
const initialState = {
  data: [],
  fetching: false,
  error: false,
  firstLoad: true,
  shownItems: 0
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ITEM:
      return { ...state, fetching: true, firstLoad: false };
    case ACTIONS.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        data: action.result,
        fetching: false
      };
    case ACTIONS.FETCH_ITEM_FAILURE:
      return { ...state, error: true, fetching: false };
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
