import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchedItem = (e) => {
    const term = e.target.value
    this.setState({ term });
    this.props.onSearchedItem(term);
  }
  render() {
    return(
      <FormControl
        type = "text"
        placeholder = "Serch"
        className = "mr-sm-2"
        onChange={this.onSearchedItem}
      />
    )
  }
}