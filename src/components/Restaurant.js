import React, { Component } from 'react';
import MenuItem from './restaurant/MenuItem';
import IngredientBtn from './restaurant/IngredientBtn';
import NewIngredient from './restaurant/NewIngredient';
import DeleteIngredient from './restaurant/DeleteIngredient';
import food from '../sampleMenu';
import ingredients from '../ingredients';

class Restaurant extends Component {
  state = {
    menu: food,
    ingredients: ingredients
  }
  loadSampleMenu = () => {
    // console.log(this.state.ingredients);
    this.setState({
      menu: food
    });
    // console.log(food);
    // console.log('loadsample menu');


    // {Object.keys(food).map(key => {
    //     if (isEqual(food[key].ingredients, this.state.ingredients)) {
    //       return <MenuItem key={key} data={food[key]} />
    //     }
    //   }
    // )}
    // if (this.state.ingredients[key] === 'ingredient2') {
    //   return;
    // }

    // Object.keys(this.state.ingredients).forEach((currentValue, index, arr) => {
    //   // console.log(this.state.ingredients[key]);
    //   // console.log('hello', currentValue, index, arr);
    //   console.log(this.state.ingredients[index]);
    //   if (this.state.ingredients[index] === 'ingredient2') {
    //     break;
    //   }
    // })
  }
  addIngredient = (name) => {
    if(!this.state.ingredients.includes(name)) {
      const newIngredients = this.state.ingredients;
      newIngredients.push(name);
      this.setState({
        ingredients: newIngredients
      });
    }
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
  newIngredient = ingredient => {
    const ingredients = this.state.ingredients;
    if(!ingredients.includes(ingredient)) {
      ingredients.push(ingredient);
      this.setState({
        ingredients: ingredients
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

    // {
    //   Object.keys(this.state.menu).map(key => {
    //     if (food[key].ingredients.every(val => delivery.indexOf(val) >= 0 )) {
    //       return <MenuItem key={key} data={food[key]} />
    //     }
    //     return null;
    //   })
    // }


    // {
    //   this.state.ingredients.map(name =>
    //     <IngredientBtn
    //       key={name}
    //       ingredients={this.state.ingredients}
    //       addIngredient={this.addIngredient} deleteIngredient={this.deleteIngredient}
    //       name={name}/>)
    // }

    // {
    //   Object.keys(this.state.menu).map(key => {
    //     // console.log(food[key].ingredients);
    //     const value = 'eggs';
    //     if (food[key].ingredients.some(val => delivery[value].status === 'available')  ){
    //         return <MenuItem key={key} data={food[key]} />
    //       }
    //       return null;
    //   })
    // }

    const delivery = this.state.ingredients;

    Object.keys(this.state.menu).map(key => {
      console.log(food[key].ingredients);
      console.log(delivery);
      // if (arr2.every(function (val) {
      //   return arr1.indexOf(val) >= 0;
      // })) {
      //   console.log('its there')
      // }
      // const value = 'eggs';
      // console.log(this.state.ingredients['egg'].status);
      // if (food[key].ingredients.some(val => this.state.ingredients[val].status === 'available')  ){
      //     return <MenuItem key={key} data={food[key]} />
      //   }


    })



    return(
      <div className="wrap">
        <h1>Restaurant</h1>
        <div className="pages">
          <div className="menu page">
            <h2>Menu</h2>
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
          <div className="aval-ingredients page">
            <h2>Availiable ingredients</h2>
            <ul>
              {
                this.state.ingredients.map(name =>
                    <li key={name}>{name}
                      <DeleteIngredient name={name} deleteIngredient={this.deleteIngredient} />
                    </li>
                  )
              }
            </ul>
            <NewIngredient newIngredient={this.newIngredient} />

          </div>
          <div className="supplier page">
            <h2>Supplier</h2>
            <NewIngredient newIngredient={this.newIngredient} />
              {
                this.state.ingredients.map(name =>
                  <IngredientBtn
                    key={name}
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredient} deleteIngredient={this.deleteIngredient}
                    name={name}/>)
              }
          </div>
          <div className="clearfix">
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
