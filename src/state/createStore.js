import { createStore } from 'redux';
import rootReducer from './index';

export function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState);
  return store;
}
const store = configureStore();
export default store;
