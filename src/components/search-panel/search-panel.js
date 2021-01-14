import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class SearchPanel extends Component {
  
  render() {
    return(
      <FormControl
        type = "text"
        placeholder = "Serch"
        className = "mr-sm-2"
        // onChange={this.onSearchedItem}
      />
    )
  }
}