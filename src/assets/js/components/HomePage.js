import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'
import { connect } from 'react-redux'
import { setShoppingItems } from '../redux'
import axios from 'axios';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    let outerThis = this;
    axios.get('/api/shopping/').then(response => {
        console.log(response);
        outerThis.props.dispatch(setShoppingItems(response.data));
    });
    
  }

  render() {
      console.log('shopping_items: ');
      this.props.shopping_items.forEach(item => console.log(item));

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

function mapStateToProps(state) {
    return {
      shopping_items: state.shopping_items
    }
  }
  


  export default connect(mapStateToProps)(HomePage);