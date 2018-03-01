import { createStore } from 'redux';
import rootReducer from './index';

export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    typeof window !== `undefined`
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
  return store;
}
const store = configureStore();
export default store;
