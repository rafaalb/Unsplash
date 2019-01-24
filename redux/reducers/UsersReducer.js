import * as ACTIONS from '../actions/users';

const initialState = {
  data: [],
  loading: false,
  error: false,
  total: 0,
  selected: {
    photos: []
  },
  firstLoad: true
};


export const users = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_USERS:
      return { ...state, loading: true, firstLoad: false };
    case ACTIONS.FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        loading: false,
        total: action.payload.total
      };
    case ACTIONS.FETCH_USERS_FAILURE:
      return { ...state, error: true, loading: false };
    case ACTIONS.SELECT_USER:
      return { ...state, selected: action.payload }
    default:
      return state;
  }
}