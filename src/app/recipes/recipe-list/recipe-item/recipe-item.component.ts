import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem : Recipe;
 @Input() index: any;
  constructor(private recipeService : RecipeService, private router : Router) { }

  ngOnInit() {
  }

  loadRecipe(){
    
  }
}
