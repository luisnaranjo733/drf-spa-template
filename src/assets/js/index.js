"use strict";

import React, { Component } from 'react';
import {render} from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux'

import { AppContainer } from 'react-hot-loader'

import App from './App';

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const render_dom = Component => {
    render(
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
      document.getElementById('app')
    );
  }
  
  render_dom(App)
  
  if (module.hot) {
    module.hot.accept('./App', () => { render_dom(App) })
  }