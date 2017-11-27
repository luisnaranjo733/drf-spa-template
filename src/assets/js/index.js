import React, { Component } from 'react';
import {render} from "react-dom";

"use strict";

class App extends Component {

    render() {
        return <h1>Hello, React!!</h1>;
    }
}

render(<App />, document.getElementById("app"));
