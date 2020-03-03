import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  ingredientAdded=  new EventEmitter<Ingredient[]>();

  ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    
  ];
  
  constructor() { 
    
  }
  getIngredients(){
    return this.ingredients;
  }

  createIng(ingr : Ingredient){
    this.ingredients.push(ingr);
    this.ingredientAdded.emit(this.ingredients);
    
  }
}
