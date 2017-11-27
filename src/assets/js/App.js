import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    </Router>
);

export default App;