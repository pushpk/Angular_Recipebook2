import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  rec : Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activateRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {

    this.activateRoute.params.subscribe((data) => {

      console.log(data.id);
        this.rec = this.recipeService.recipes[data.id];
      
    });
   
  }

  editRecipe(){
    this.activateRoute.params.subscribe((params : Params) => {
      this.id = +params['id'];
    })
    this.router.navigate(['edit'], {relativeTo : this.activateRoute});
    
  }

}
