import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { setShoppingItems } from '../redux'
import axios from 'axios';

import { SHOPPING_LIST_ENDPOINT } from '../endpoints'

class HomePage extends Component {

  componentDidMount() {
    let outerThis = this;
    axios.get(SHOPPING_LIST_ENDPOINT).then(response => {
      outerThis.props.dispatch(setShoppingItems(response.data));
    });

  }

  render() {
    return (
      <div className="container">
        <h2>List of shopping items</h2>
        <ul>
        {this.props.shopping_items.map((shopping_item, index) => (
          <li key={index}>{shopping_item.item_name}</li>
        ))}
        </ul>
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