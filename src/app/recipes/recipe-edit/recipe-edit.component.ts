import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;
  recipeItem: Recipe

  constructor(private recipeService :RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params : Params) => {

      this.id = +params['id'];
      this.editMode = params['id'] != null;

    });


    let  name = '';
    let imageurl ='';
    let description = '';
    let ingredients =  new FormArray([]);
      

    if(this.editMode)
    {
       this.recipeItem = this.recipeService.getRecipeItem(this.id);
        name = this.recipeItem.name;
        imageurl = this.recipeItem.imagePath;
        description = this.recipeItem.description;
        if(this.recipeItem['ingredients'])
        {

          for(let ingre of this.recipeItem.ingredients)
          {
            ingredients.push(new FormGroup({
              name : new FormControl(ingre.name), 
              amount : new FormControl(ingre.amount),
            }));

          }
        }
        else{
          console.log("no");
        }

    this.recipeForm = new FormGroup({
      name : new FormControl(name), 
      imageurl : new FormControl(imageurl),
      description : new  FormControl(description),
      ingredients : ingredients
    });
  }

  console.log(this.recipeForm)
  
    
  }

 

  onSubmit(){

    console.log(this.recipeForm);
  }

}
