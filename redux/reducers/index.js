import { combineReducers, createStore, applyMiddleware } from 'redux';
import { items } from './ItemsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  items
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export function initializeStore () {
  return createStoreWithMiddleware(rootReducer);
}
