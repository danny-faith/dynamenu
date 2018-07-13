import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewSupplierIngredient extends Component {
  ingredientInput = React.createRef();

  handleNewIngredient = (event) => {
    event.preventDefault();
    this.props.newSupplierIngredient(this.ingredientInput.current.value);
    // console.log(this.ingredientInput.current.value);
    event.currentTarget.reset();
    this.ingredientInput.current.focus();
  }
  render() {
    return (
      <div>
        <h4>New Ingredient</h4>
        <form onSubmit={this.handleNewIngredient}>
          <input ref={this.ingredientInput} name="ingredientName" type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
};

export default NewSupplierIngredient;
