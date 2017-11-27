import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <h1>Common header</h1>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        </Router>
    </Provider>
);

export default App;