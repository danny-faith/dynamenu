import React, { Component } from 'react';
import MenuItem from './restaurant/MenuItem';
import IngredientBtn from './restaurant/IngredientBtn';
import NewSupplierIngredient from './restaurant/NewSupplierIngredient';
import DeleteIngredient from './restaurant/DeleteIngredient';
import AvalIngredient from './restaurant/AvalIngredient';
import menu from '../sampleMenu';
import ingredients from '../ingredients';

class Restaurant extends Component {
  state = {
    menu: menu,
    ingredients: ingredients
  }
  loadSampleMenu = () => {
    this.setState({
      menu: menu
    });
  }
  addIngredient = (ingredient) => {
    // if(!this.state.ingredients.includes(name)) {
      // const newIngredients = this.state.ingredients;
      // newIngredients.push(name);
      // this.setState({
      //   ingredients: newIngredients
      // });

    // }
    const ingredients = this.state.ingredients;
    // if(!ingredients.hasOwnProperty(ingredient)) {
      // ingredients.push(ingredient);
      ingredients[ingredient] = {
        status: true,
        name: ingredient
      }
      this.setState({
        ingredients: ingredients
      })
    // } else if (ingredient == undefined) {
    //   console.log('empty string');
    // } else {
    //   console.log('it was already there');
    // }
  // }
  }
  deleteIngredient = (name) => {
    const index = this.state.ingredients.indexOf(name);
    const newIngredients = this.state.ingredients;
    // const ingre = this.state.ingredients;
    // ingre[index] = null;
    // console.log(index, name);
    // console.log(["Banana", "Orange", "Apple", "Mango"].splice(0,1));
    if (index >= 0){
      // console.log('its there');
      newIngredients.splice(index,1);
      // console.log(this.state.ingredients);
      this.setState({
        ingredients: newIngredients
      });
    }
    // const newIngredients = this.state.ingredients.splice(index,1);
  }
  newSupplierIngredient = ingredient => {
    console.log('newIngredient');
    const ingredients = this.state.ingredients;
    // TODO: check if object item is already there!!
    if(!ingredients.hasOwnProperty(ingredient)) {
      // ingredients.push(ingredient);
      ingredients[ingredient] = {
        status: false,
        name: ingredient
      }
      this.setState({
        ingredients: ingredients
      })
    } else if (ingredient == undefined) {
      console.log('empty string');
    } else {
      console.log('it was already there');
    }
  }
  render() {
    return(
      <div className="wrap">
        <h1>Restaurant</h1>
        <div className="pages">
          <div className="menu page">
            <h2>Menu</h2>
              {Object.keys(this.state.menu).map(key => {
                  // console.log(this.state.ingredients['egg'].status);
                  // console.log(menu[key].ingredients)
                  // console.log(key);
                  // TODO: change ingredients object to item1 etc instead of the name
                // console.log(this.state.ingredients);
                if (menu[key].ingredients.every(val => {
                 return this.state.ingredients[val] ?
                 this.state.ingredients[val].status === true : false;
                  })){
                    return <MenuItem key={key} data={menu[key]} />
                }
              })}
            <button onClick={this.loadSampleMenu}>Load menu</button>
          </div>
          <div className="aval-ingredients page">
            <h2>Availiable ingredients</h2>
            <p>TODO: Show availiable ingredients</p>
            {Object.keys(this.state.ingredients).map(key => {
              if (this.state.ingredients[key].status === true) {
                return <AvalIngredient name={this.state.ingredients[key].name} key={key} />
              }
            })}
          </div>
          <div className="supplier page">
            <h2>Supplier</h2>
            <p>TODO: Show all ingredients</p>
            {
              Object.keys(this.state.ingredients).map(key => {
                return <IngredientBtn addIngredient={this.addIngredient} name={this.state.ingredients[key].name} key={key} />
              })
            }
            <NewSupplierIngredient newSupplierIngredient={this.newSupplierIngredient} />

          </div>
          <div className="clearfix">
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
