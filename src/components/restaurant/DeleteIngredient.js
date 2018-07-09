import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteIngredient extends Component {
  handleDelete = () => {
    console.log('delete');
    this.props.deleteIngredient(this.props.name);
  }
  render() {
    return(
      <a onClick={this.handleDelete}>x</a>
    )
  }
}

export default DeleteIngredient;
