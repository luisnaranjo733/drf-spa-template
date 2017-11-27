import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    // fetch stuff from backend via api
    
  }

  render() {
    return (
      <div className="container">
        <h1>HomePage</h1>

        <li>
        <Link to={'/about'}>
          Go to AboutPage
        </Link>
      </li>

      </div>
    );
  }
}



export default HomePage;