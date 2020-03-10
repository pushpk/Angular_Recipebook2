import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { forEach } from '@angular/router/src/utils/collection';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeItem: Recipe

  constructor(private recipeService :RecipeService, private activatedRoute: ActivatedRoute, private router  :Router) { }

  ngOnInit() {
  
    this.editMode = false;

    this.activatedRoute.params.subscribe((params : Params) => {

      this.id = +params['id'];
      this.editMode = params['id'] != null;
console.log(this.editMode);
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
       
      }


    this.recipeForm = new FormGroup({
      name : new FormControl(name,Validators.required), 
      imageurl : new FormControl(imageurl, Validators.required),
      description : new  FormControl(description, Validators.required),
      ingredients : ingredients
    });
 

  }

  NavigateBack(){
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }

  addIngredient(){

    var ingre = this.recipeForm.get('ingredients') as FormArray;
    ingre.push(new FormGroup({
      name : new FormControl('', Validators.required), 
      amount : new FormControl('', Validators.required),
    }));

  }
  onSubmit(){

    let addedOrEditedRecipe = {name : this.recipeForm.value.name, 
      imagePath : this.recipeForm.value.imageurl,
      description : this.recipeForm.value.description,
      ingredients : this.recipeForm.value.ingredients}

      if(this.editMode)
      {
      this.recipeService.saveRecipe(this.id,addedOrEditedRecipe )
      }
      else{
        this.recipeService.addRecipe(addedOrEditedRecipe);
      }

    
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})

  }

  DeleteThisIngredient(index : number)
  {
     var ingre = this.recipeForm.get('ingredients') as FormArray;
    ingre.removeAt(index);
  }

}
