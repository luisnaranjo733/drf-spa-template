import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { setShoppingItems } from '../redux'
import axios from 'axios';

import { SHOPPING_LIST_ENDPOINT } from '../endpoints'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {new_shopping_item_name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let outerThis = this;
    axios.get(SHOPPING_LIST_ENDPOINT).then(response => {
      outerThis.props.dispatch(setShoppingItems(response.data));
    });

  }

  handleChange(event) {
    this.setState({new_shopping_item_name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let data = {
      item_name: this.state.new_shopping_item_name
    };

    axios.post(SHOPPING_LIST_ENDPOINT, data).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
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

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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