import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes : Recipe[]

  constructor(private recipeService : RecipeService, private aRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
   // this.recipes = this.recipeService.recipes;

    this.recipeService.OnRecipeEdited.subscribe((recipes : Recipe[]) => {
      console.log(recipes);
        this.recipes = recipes ;
    });
  }

  createRecipe(){
    this.router.navigate(['new'], {relativeTo : this.aRoute});
  }
}
