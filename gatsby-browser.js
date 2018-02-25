import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './src/state/createStore';
console.log(store.getState());
exports.replaceRouterComponent = ({ history }) => {
  //const store = createStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return ConnectedRouterWrapper;
};
