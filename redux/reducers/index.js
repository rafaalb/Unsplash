import { combineReducers, createStore, applyMiddleware } from 'redux';
import { items } from './ItemsReducer';
import { users } from './UsersReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  items,
  users
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export function initializeStore () {
  return createStoreWithMiddleware(rootReducer);
}
