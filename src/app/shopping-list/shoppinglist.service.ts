import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  ingredientAdded=  new Subject<Ingredient[]>();
  selectedIngr = new Subject<number>();

  ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    
  ];

  
  constructor() { 
    
  }

  onStartEdit(index: number){
      this.selectedIngr.next(index);
  }

  getIngredient(index: number){

    return this.ingredients[index];
    
  }

  getIngredients(){
    return this.ingredients;
  }

  createIng(ingr : Ingredient){
    this.ingredients.push(ingr);
    this.ingredientAdded.next(this.ingredients);
    
  }

  addIngredients(ingrs : Ingredient[]){
    this.ingredients = this.ingredients.concat(ingrs);
    this.ingredientAdded.next(this.ingredients);
    
  }

  editIngr(index : number, ingre : Ingredient){
     this.ingredients[index]  = ingre;
      this.ingredientAdded.next(this.ingredients);


  }

  deleteIngr(index: number){
    this.ingredients.splice(index,1);
    this.ingredientAdded.next(this.ingredients);

  }
}
