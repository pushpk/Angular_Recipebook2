import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    postDataToServer() {

         const recipes =  this.recipeService.getRecipes();
        this.http.post("https://recipebookapiservice20190223034351.azurewebsites.net/api/recipebook", recipes)
        .subscribe(() => {
           console.log("Saved!");
        });
    }

    getDataFromServer() {

        this.http.get("https://recipebookapiservice20190223034351.azurewebsites.net/api/recipebook")
            .subscribe((data: Recipe[]) => {
                this.recipeService.setRecipes(data);
            });
    }
}