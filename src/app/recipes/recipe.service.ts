import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('AB Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
    [{name : "Tomatoes", amount : 10},{name : "Apples", amount : 5}]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
    [{name : "Oranges", amount : 7},{name : "Sugar", amount : 5}])
  ];
  
recipeSelected = new EventEmitter<Recipe>();
OnRecipeEdited = new Subject<Recipe[]>();


getRecipeItem(index: number){

  return this.recipes[index];
}
  constructor() { }


  saveRecipe(index: number, editedRecipe :  Recipe)
  {
    this.recipes[index] = editedRecipe;
    this.OnRecipeEdited.next(this.recipes);

  }

  deleteRecipe(index:number)
  {
    this.recipes.splice(index, 1);
    this.OnRecipeEdited.next(this.recipes);
  }
}
