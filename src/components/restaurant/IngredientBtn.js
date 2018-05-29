import React, { Component } from 'react';

class IngredientBtn extends Component {
  handleAddBtn = () => {
    this.props.addIngredient(this.props.name);
  }
  handleDelete = () => {
    console.log('delete');
    this.props.deleteIngredient(this.props.name);
  }
  render() {
    let availiable = '';
    if(this.props.avalIngredients.includes(this.props.name)) {
      availiable = 'availiable';
    }
    return (
      <div className={availiable}>
        <button onClick={this.handleAddBtn}>{this.props.name}</button>
        <span onClick={this.handleDelete}>delete</span>
      </div>
    )
  }
}

export default IngredientBtn;
