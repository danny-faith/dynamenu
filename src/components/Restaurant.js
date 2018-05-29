import React, { Component } from 'react';
import MenuItem from './restaurant/MenuItem';
import IngredientBtn from './restaurant/IngredientBtn';
import NewIngredient from './restaurant/NewIngredient';
import food from '../sampleMenu';
import ingredients from '../ingredients';

class Restaurant extends Component {
  state = {
    menu: food,
    avalIngredients: ingredients
  }
  loadSampleMenu = () => {
    // console.log(this.state.avalIngredients);
    this.setState({
      menu: food
    });
    // console.log(food);
    // console.log('loadsample menu');


    // {Object.keys(food).map(key => {
    //     if (isEqual(food[key].ingredients, this.state.avalIngredients)) {
    //       return <MenuItem key={key} data={food[key]} />
    //     }
    //   }
    // )}
    // if (this.state.avalIngredients[key] === 'ingredient2') {
    //   return;
    // }

    // Object.keys(this.state.avalIngredients).forEach((currentValue, index, arr) => {
    //   // console.log(this.state.avalIngredients[key]);
    //   // console.log('hello', currentValue, index, arr);
    //   console.log(this.state.avalIngredients[index]);
    //   if (this.state.avalIngredients[index] === 'ingredient2') {
    //     break;
    //   }
    // })
  }
  addIngredient = (name) => {
    if(!this.state.avalIngredients.includes(name)) {
      const newIngredients = this.state.avalIngredients;
      newIngredients.push(name);
      this.setState({
        avalIngredients: newIngredients
      });
    }
  }
  deleteIngredient = (name) => {
    const index = this.state.avalIngredients.indexOf(name);
    const newIngredients = this.state.avalIngredients;
    // const ingre = this.state.avalIngredients;
    // ingre[index] = null;
    // console.log(index, name);
    // console.log(["Banana", "Orange", "Apple", "Mango"].splice(0,1));
    if (index >= 0){
      // console.log('its there');
      newIngredients.splice(index,1);
      // console.log(this.state.avalIngredients);
      this.setState({
        avalIngredients: newIngredients
      });
    }
    // const newIngredients = this.state.avalIngredients.splice(index,1);
  }
  newIngredient = ingredient => {
    const ingredients = this.state.avalIngredients;
    if(!ingredients.includes(ingredient)) {
      ingredients.push(ingredient);
      this.setState({
        avalIngredients: ingredients
      })
    }
  }
  render() {
    // const arr1 = ['ingredient1','ingredient2','boop','ingredient3','ingredient4'];
    // const arr2 = ['ingredient1','ingredient2','ingredient3'];
    // if (arr2.every(function (val) {
    //   return arr1.indexOf(val) >= 0;
    // })) {
    //   console.log('its there')
    // }
    // console.log(ingredients);
    const delivery = this.state.avalIngredients;

    return(
      <div className="wrap">
        <h1>Restaurant</h1>
        <div className="menu-wrap">
          {
            Object.keys(this.state.menu).map(key => {
              if (food[key].ingredients.every(val => delivery.indexOf(val) >= 0 )) {
                return <MenuItem key={key} data={food[key]} />
              }
              return null;
            })
          }
          <button onClick={this.loadSampleMenu}>Load menu</button>
        </div>
        <div className="ingredient-wrap">
          <NewIngredient newIngredient={this.newIngredient} />
          {
            this.state.avalIngredients.map(name =>
              <IngredientBtn
                key={name}
                avalIngredients={this.state.avalIngredients}
                addIngredient={this.addIngredient} deleteIngredient={this.deleteIngredient}
                name={name}/>)
          }
        </div>
      </div>
    );
  }
}

export default Restaurant;
