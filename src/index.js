//src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(appReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
	saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);

