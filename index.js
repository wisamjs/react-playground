import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import logger from 'redux-logger';
import { all, fork } from 'redux-saga/effects';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Application from './src/containers/Application/Application';
import Stats from './src/containers/Stats/index.js';

import * as Pokemon from './src/modules/Pokemon';
import * as People from './src/modules/People';

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const store = createStore(
  combineReducers({
    pokemon: Pokemon.reducer,
    people: People.reducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);

const rootSaga = function* rootSaga() {
  yield all([fork(Pokemon.saga), fork(People.saga)]);
};

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRedirect to="/stats" />
        <Route path="stats" component={Stats} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
