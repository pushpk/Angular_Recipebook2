import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  ingredientAdded=  new Subject<Ingredient[]>();

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
    this.ingredientAdded.next(this.ingredients);
    
  }
}
