import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import reducer from './redux/reducers';

// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (from localStorage, perhaps)
const preloadedState = {};
const middlewares = [];

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);